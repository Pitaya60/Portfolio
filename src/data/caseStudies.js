/* Единая точка входа для кейсов.
   Русская версия — caseStudies.ru.js, английская — caseStudies.en.js.
   Кейсы в работе — caseStudies.soon.js.
   Порядок на главной задаётся списком ORDER ниже. */

import ru from './caseStudies.ru.js'
import en from './caseStudies.en.js'
import soon from './caseStudies.soon.js'

const byLang = { ru, en }

const ORDER = [
  'alma-tv',
  'prodengi-credit-rating',
  're-kassa',
  'coursiv-selling-page',
  'qmed-ai',
]

export function getCaseStudies(lang = 'ru') {
  const all = [...(byLang[lang] || ru), ...(soon[lang] || soon.ru)]
  const rank = (slug) => {
    const i = ORDER.indexOf(slug)
    return i === -1 ? ORDER.length : i
  }
  return all.sort((a, b) => rank(a.slug) - rank(b.slug))
}

/* Кейсы, которые показываются на главной (в этом порядке).
   Остальные видны на странице «Все проекты». */
export const HOME_SLUGS = ['alma-tv', 'prodengi-credit-rating', 're-kassa', 'coursiv-selling-page']

export default ru
