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
//
// TODO: замените заглушки реальными записями. Фото кладите в public/fun/.

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
  { id: 'p1', category: 'hackathon', title: 'Название хакатона', subtitle: 'Результат · место', ratio: '4/5', tone: 'lavender', image: '', href: '', soon: true },
  { id: 'p2', category: 'code', title: 'Название проекта', subtitle: 'Стек · что сделано', ratio: '16/10', tone: 'mint', image: '', href: '', soon: true },
  { id: 'p3', category: 'design', title: 'Дизайн-концепт', subtitle: 'Идея в одну строку', ratio: '1/1', tone: 'peach', image: '', href: '', soon: true },
  { id: 'p4', category: 'hackathon', title: 'Ещё один хакатон', subtitle: 'Результат · место', ratio: '3/4', tone: 'sky', image: '', href: '', soon: true },
  { id: 'p5', category: 'work', title: 'Рабочая заметка', subtitle: 'Над чем работала', ratio: '16/10', tone: 'lilac', image: '', href: '', soon: true },
  { id: 'p6', category: 'code', title: 'Мини-проект на коде', subtitle: 'Стек · что сделано', ratio: '4/5', tone: 'sand', image: '', href: '', soon: true },
  { id: 'p7', category: 'design', title: 'Концепт интерфейса', subtitle: 'Идея в одну строку', ratio: '3/4', tone: 'mint', image: '', href: '', soon: true },
  { id: 'p8', category: 'work', title: 'Закулисье проекта', subtitle: 'Процесс и заметки', ratio: '1/1', tone: 'lavender', image: '', href: '', soon: true },
]

const en = [
  { id: 'p1', category: 'hackathon', title: 'Hackathon name', subtitle: 'Result · place', ratio: '4/5', tone: 'lavender', image: '', href: '', soon: true },
  { id: 'p2', category: 'code', title: 'Project name', subtitle: 'Stack · what was built', ratio: '16/10', tone: 'mint', image: '', href: '', soon: true },
  { id: 'p3', category: 'design', title: 'Design concept', subtitle: 'The idea in one line', ratio: '1/1', tone: 'peach', image: '', href: '', soon: true },
  { id: 'p4', category: 'hackathon', title: 'Another hackathon', subtitle: 'Result · place', ratio: '3/4', tone: 'sky', image: '', href: '', soon: true },
  { id: 'p5', category: 'work', title: 'Work note', subtitle: 'What I was working on', ratio: '16/10', tone: 'lilac', image: '', href: '', soon: true },
  { id: 'p6', category: 'code', title: 'Small coded project', subtitle: 'Stack · what was built', ratio: '4/5', tone: 'sand', image: '', href: '', soon: true },
  { id: 'p7', category: 'design', title: 'Interface concept', subtitle: 'The idea in one line', ratio: '3/4', tone: 'mint', image: '', href: '', soon: true },
  { id: 'p8', category: 'work', title: 'Behind the scenes', subtitle: 'Process and notes', ratio: '1/1', tone: 'lavender', image: '', href: '', soon: true },
]

const byLang = { ru, en }

export function getFunPosts(lang = 'ru') {
  return byLang[lang] || ru
}
