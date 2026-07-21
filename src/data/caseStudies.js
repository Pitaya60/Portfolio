/* Единая точка входа для кейсов.
   Русская версия — caseStudies.ru.js, английская — caseStudies.en.js.
   Структура объектов в обоих файлах одинаковая: slug, порядок и пути
   к картинкам должны совпадать, меняются только тексты. */

import ru from './caseStudies.ru.js'
import en from './caseStudies.en.js'

const byLang = { ru, en }

export function getCaseStudies(lang = 'ru') {
  return byLang[lang] || ru
}

export default ru
