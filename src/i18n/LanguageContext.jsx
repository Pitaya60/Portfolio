import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import ui from './ui.js'

const LanguageContext = createContext(null)

export const LANGS = ['ru', 'en']
const STORAGE_KEY = 'portfolio-lang'

/* Язык при первом заходе: сохранённый выбор → язык браузера → русский */
function detectLang() {
  if (typeof window === 'undefined') return 'ru'
  const saved = window.localStorage?.getItem(STORAGE_KEY)
  if (LANGS.includes(saved)) return saved
  const nav = window.navigator?.language || ''
  return nav.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  /* Держим <html lang>, <title> и описание в актуальном состоянии —
     важно для SEO и скринридеров */
  useEffect(() => {
    document.documentElement.lang = lang

    const meta = ui[lang]?.meta
    if (meta) {
      document.title = meta.title
      const desc = document.querySelector('meta[name="description"]')
      if (desc) desc.setAttribute('content', meta.description)
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', meta.title)
      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', meta.description)
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* приватный режим — просто не сохраняем */
    }
  }, [lang])

  const setLang = useCallback((next) => {
    if (LANGS.includes(next)) setLangState(next)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((v) => (v === 'ru' ? 'en' : 'ru'))
  }, [])

  /* t('nav.cases') — достаёт строку из словаря текущего языка */
  const t = useCallback(
    (path) => {
      const parts = path.split('.')
      let node = ui[lang]
      for (const p of parts) {
        if (node == null) break
        node = node[p]
      }
      if (node == null) {
        let fallback = ui.ru
        for (const p of parts) {
          if (fallback == null) break
          fallback = fallback[p]
        }
        return fallback ?? path
      }
      return node
    },
    [lang]
  )

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t, isRu: lang === 'ru' }),
    [lang, setLang, toggleLang, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang должен использоваться внутри LanguageProvider')
  return ctx
}
