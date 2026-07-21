import { LANGS, useLang } from '../i18n/LanguageContext.jsx'
import './langSwitch.css'

const LABELS = { ru: 'RU', en: 'EN' }

/* Переключатель языка. Две кнопки в одной «таблетке»:
   активный язык подсвечен, второй кликабелен. */
export default function LangSwitch({ compact = false }) {
  const { lang, setLang, t } = useLang()

  return (
    <div
      className={`lang-switch ${compact ? 'lang-switch-compact' : ''}`}
      role="group"
      aria-label={t('common.langLabel')}
    >
      <span className="lang-switch-thumb" data-lang={lang} aria-hidden="true" />
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-switch-btn ${lang === code ? 'is-active' : ''}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  )
}
