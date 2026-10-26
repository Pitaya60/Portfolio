// Записи блога «Веселье».
// Чтобы добавить запись, скопируйте объект в ОБА массива (ru и en)
// с одинаковым id и в том же порядке — меняются только тексты.
//
//   id        — уникальный идентификатор
//   category  — hackathon | work | code | design (для фильтров)
//   title     — заголовок записи
//   subtitle  — подпись под заголовком (результат, место, технологии…)
//   ratio     — пропорции обложки: '4/5', '1/1', '16/10', '3/4' и т. д.
//   tone      — цвет заглушки: lavender | mint | peach | sky | lilac | sand
//   image     — путь к обложке, например '/fun/hack-1.jpg' (необязательно)
//   href      — ссылка на запись или проект (необязательно)
//   soon      — true, пока запись — заглушка; удалите, когда заполните
//   facts     — паспорт записи: [{ label, value }]
//   sections  — блоки страницы записи: [{ title, paragraphs: [...] }]
//
// Фото кладите в public/fun/.

export const FUN_CATEGORIES = ['all', 'hackathon', 'work', 'code', 'design']

export const TONES = {
  lavender: '#d3d0f7',
  mint: '#c6e8d8',
  peach: '#f9d9c9',
  sky: '#cfe1f7',
  lilac: '#e5cff0',
  sand: '#f1e6c6',
}

const ru = [
  {
    id: 'decentrathon',
    category: 'hackathon',
    title: 'Хакатон Decentrathon 5.0',
    subtitle: 'Хакатон',
    ratio: '4/5', tone: 'lavender', image: '', href: '', soon: true,
    intro: 'Страница-шаблон: здесь будет рассказ о том, как прошёл хакатон.',
    facts: [
      { label: 'Событие', value: 'Decentrathon 5.0' },
      { label: 'Роль', value: '—' },
      { label: 'Команда', value: '—' },
      { label: 'Результат', value: '—' },
    ],
    sections: [
      { title: 'О событии', paragraphs: ['Коротко о хакатоне: кто организатор, сколько длился и какой был формат.'] },
      { title: 'Задача', paragraphs: ['Какую задачу ставили перед командой и какой продукт нужно было сделать.'] },
      { title: 'Что мы сделали', paragraphs: ['Идея, решение и ключевые экраны. Здесь же — скриншоты и ссылка на демо.'] },
      { title: 'Моя роль в команде', paragraphs: ['За что отвечала я и как команда распределяла работу.'] },
      { title: 'Итоги', paragraphs: ['Результат, впечатления и что я вынесла из хакатона.'] },
    ],
  },
  {
    id: 'hired-valley',
    category: 'work',
    title: 'Стажировка в Hired Valley',
    subtitle: 'Дизайнер-инженер',
    ratio: '16/10', tone: 'mint', image: '', href: '', soon: true,
    intro: 'Страница-шаблон: здесь будет рассказ о стажировке.',
    facts: [
      { label: 'Компания', value: 'Hired Valley' },
      { label: 'Роль', value: 'Дизайнер-инженер' },
      { label: 'Формат', value: 'Стажировка' },
      { label: 'Период', value: '—' },
    ],
    sections: [
      { title: 'О стажировке', paragraphs: ['Чем занимается компания и как я попала на стажировку.'] },
      { title: 'Чем я занималась', paragraphs: ['Основные задачи: дизайн, прототипы, работа с кодом и разработчиками.'] },
      { title: 'Инструменты', paragraphs: ['Figma, код и другие инструменты, которыми я пользовалась.'] },
      { title: 'Чему научилась', paragraphs: ['Главные выводы и навыки, которые я прокачала на стажировке.'] },
    ],
  },
]

const en = [
  {
    id: 'decentrathon',
    category: 'hackathon',
    title: 'Decentrathon 5.0 hackathon',
    subtitle: 'Hackathon',
    ratio: '4/5', tone: 'lavender', image: '', href: '', soon: true,
    intro: 'Template page: the story of how the hackathon went will go here.',
    facts: [
      { label: 'Event', value: 'Decentrathon 5.0' },
      { label: 'Role', value: '—' },
      { label: 'Team', value: '—' },
      { label: 'Result', value: '—' },
    ],
    sections: [
      { title: 'About the event', paragraphs: ['A short note on the hackathon: who organised it, how long it lasted and the format.'] },
      { title: 'The challenge', paragraphs: ['What the team was asked to solve and what product had to be built.'] },
      { title: 'What we built', paragraphs: ['The idea, the solution and key screens. Screenshots and a demo link go here too.'] },
      { title: 'My role in the team', paragraphs: ['What I was responsible for and how the team split the work.'] },
      { title: 'Outcome', paragraphs: ['The result, impressions and what I took away from the hackathon.'] },
    ],
  },
  {
    id: 'hired-valley',
    category: 'work',
    title: 'Internship at Hired Valley',
    subtitle: 'Design engineer',
    ratio: '16/10', tone: 'mint', image: '', href: '', soon: true,
    intro: 'Template page: the story of the internship will go here.',
    facts: [
      { label: 'Company', value: 'Hired Valley' },
      { label: 'Role', value: 'Design engineer' },
      { label: 'Format', value: 'Internship' },
      { label: 'Period', value: '—' },
    ],
    sections: [
      { title: 'About the internship', paragraphs: ['What the company does and how I got the internship.'] },
      { title: 'What I worked on', paragraphs: ['Main tasks: design, prototypes, working with code and developers.'] },
      { title: 'Tools', paragraphs: ['Figma, code and other tools I used.'] },
      { title: 'What I learned', paragraphs: ['Key takeaways and the skills I grew during the internship.'] },
    ],
  },
]

const byLang = { ru, en }

export function getFunPosts(lang = 'ru') {
  return byLang[lang] || ru
}
