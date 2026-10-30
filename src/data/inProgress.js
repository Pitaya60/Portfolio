// Проекты в разработке — блок на главной под кейсами.
// Чтобы добавить проект, скопируйте объект в ОБА массива (ru и en)
// с одинаковым id и в том же порядке. Меняются только тексты.
//
//   id          — любой уникальный идентификатор
//   title       — название проекта
//   summary     — 1–2 предложения о проекте
//   tags        — теги (отрасль, платформа)
//   status      — подпись на бейдже, например «В разработке»
//   progress    — готовность в процентах (0–100), необязательно
//   year        — год, необязательно
//   coverImage  — путь к обложке (/case-images/...), необязательно
//   onHome      — true: показывать на главной (иначе только на «Все проекты»)
//   href        — ссылка на проект, необязательно (если нет — карточка не кликабельна)
//
// Чтобы скрыть блок целиком, оставьте массивы пустыми.

const ru = [
  {
    id: 'nedra-kz',
    title: 'nedra.kz',
    summary: 'Продуктовый дизайн в Muveti.',
    tags: ['Product Design'],
    status: 'В разработке',
    year: '2026',
    onHome: true,
    coverImage: '',
    href: '',
  },
  {
    id: 'hired-valley',
    title: 'Hired Valley',
    summary: 'Стажировка в роли дизайнера-инженера.',
    tags: ['Design Engineering'],
    status: 'В разработке',
    year: '2026',
    onHome: true,
    coverImage: '',
    href: '',
  },
]

const en = [
  {
    id: 'nedra-kz',
    title: 'nedra.kz',
    summary: 'Product design at Muveti.',
    tags: ['Product Design'],
    status: 'In progress',
    year: '2026',
    onHome: true,
    coverImage: '',
    href: '',
  },
  {
    id: 'hired-valley',
    title: 'Hired Valley',
    summary: 'Internship as a design engineer.',
    tags: ['Design Engineering'],
    status: 'In progress',
    year: '2026',
    onHome: true,
    coverImage: '',
    href: '',
  },
]

const byLang = { ru, en }

/* Блок «Проекты в разработке» временно скрыт.
   Чтобы вернуть — поставьте true. */
const SHOW_IN_PROGRESS = false

export function getInProgress(lang = 'ru') {
  if (!SHOW_IN_PROGRESS) return []
  return byLang[lang] || ru
}
