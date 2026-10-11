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
//   href        — ссылка на проект, необязательно (если нет — карточка не кликабельна)
//
// TODO: замените заглушки ниже на реальные проекты.
// Чтобы скрыть блок целиком, оставьте массивы пустыми.

const ru = [
  {
    id: 'project-1',
    title: 'Название нового проекта',
    summary: 'Коротко о проекте: для кого он, какую задачу решает и что вы в нём делаете.',
    tags: ['UX/UI', 'Web'],
    status: 'В разработке',
    progress: 40,
    year: '2026',
    coverImage: '',
    href: '',
  },
  {
    id: 'project-2',
    title: 'Название второго проекта',
    summary: 'Коротко о проекте: для кого он, какую задачу решает и что вы в нём делаете.',
    tags: ['UX/UI', 'Mobile'],
    status: 'В разработке',
    progress: 15,
    year: '2026',
    coverImage: '',
    href: '',
  },
]

const en = [
  {
    id: 'project-1',
    title: 'New project title',
    summary: 'A short note on the project: who it is for, what problem it solves and what you do in it.',
    tags: ['UX/UI', 'Web'],
    status: 'In progress',
    progress: 40,
    year: '2026',
    coverImage: '',
    href: '',
  },
  {
    id: 'project-2',
    title: 'Second project title',
    summary: 'A short note on the project: who it is for, what problem it solves and what you do in it.',
    tags: ['UX/UI', 'Mobile'],
    status: 'In progress',
    progress: 15,
    year: '2026',
    coverImage: '',
    href: '',
  },
]

const byLang = { ru, en }

export function getInProgress(lang = 'ru') {
  return byLang[lang] || ru
}
