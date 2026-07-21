/* Контакты. Часть полей зависит от языка — они лежат в объектах { ru, en }.
   Резюме: русскую версию положите в public/resume.pdf,
   английскую — в public/resume-en.pdf */

const contacts = {
  name: {
    ru: 'Абдулла Камилла',
    en: 'Camilla Abdulla',
  },
  role: {
    ru: 'UX/UI Designer',
    en: 'UX/UI Designer',
  },
  location: {
    ru: 'Алматы, Казахстан',
    en: 'Almaty, Kazakhstan',
  },

  email: 'camillaabdulla04@gmail.com',
  phone: '+7 (707) 823-90-20',
  phoneHref: '+77078239020',

  telegram: 'https://t.me/PastelSiren04',
  telegramLabel: '@PastelSiren04',
  telegramChannel: 'https://t.me/camillusworking',
  telegramChannelLabel: '@camillusworking',
  linkedin: 'https://www.linkedin.com/in/camilla-abdulla-685310276',
  linkedinLabel: 'Camilla Abdulla',

  /* Отдельный файл резюме на каждый язык */
  resume: {
    ru: '/resume.pdf',
    en: '/resume-en.pdf',
  },

  replyTime: {
    ru: 'Отвечаю в течение рабочего дня',
    en: 'I reply within one business day',
  },

  /* Тот же текст, но для вставки в середину предложения */
  replyTimeInline: {
    ru: 'отвечаю в течение рабочего дня',
    en: 'I reply within one business day',
  },
}

/* Возвращает контакты, уже подставленные под нужный язык:
   getContacts('en').name → 'Camilla Abdulla' */
export function getContacts(lang = 'ru') {
  const pick = (v) =>
    v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.ru : v
  return Object.fromEntries(Object.entries(contacts).map(([k, v]) => [k, pick(v)]))
}

export default contacts
