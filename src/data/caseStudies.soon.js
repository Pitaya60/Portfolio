/* Кейсы в работе — шаблонные страницы.
   Тексты-заглушки замените на реальные: поля facts, heroSubtitle и customSections.
   Когда кейс будет готов, при желании перенесите его в caseStudies.ru.js / .en.js. */

import { almaTv, reKassa } from './caseStudies.star.ru.js'

const L = {
  ru: {
    status: 'В разработке',
    summary: 'Кейс в работе — на странице пока шаблон.',
    subtitle: 'Кейс в работе: на странице шаблон, финальный текст появится позже.',
    role: 'Product Designer',
    facts: ['Компания', 'Роль', 'Индустрия', 'Инструменты', 'Цель'],
    tools: 'Figma',
    dash: '—',
    note: 'Это шаблон страницы. Заголовки блоков останутся, а текст будет заменён на реальный.',
    about: 'О проекте',
    aboutText: [
      'Здесь будет краткое описание продукта: для кого он, какую задачу решает и в каком контексте я над ним работаю.',
      'Здесь — гипотеза или главный вопрос, с которого начался проект.',
    ],
    problem: 'Проблема',
    business: 'Бизнес',
    user: 'Пользователь',
    businessList: ['Какую бизнес-задачу нужно было решить.', 'Какие метрики хотели улучшить.'],
    userList: ['С какими трудностями сталкивались пользователи.', 'Что мешало им дойти до цели.'],
    research: 'Research',
    researchList: [
      'Конкурентный анализ и лучшие практики.',
      'Интервью и опросы пользователей.',
      'Анализ текущего пути пользователя.',
    ],
    process: 'Процесс',
    steps: ['Исследование', 'Структура и сценарии', 'Прототип', 'Тестирование', 'Передача в разработку'],
    solution: 'Решение',
    solutionText: ['Здесь будет описание ключевых решений и экранов: что изменилось и почему.'],
    result: 'Результат и выводы',
    resultText: ['Здесь будут результаты, метрики и выводы: что получилось и чему научилась.'],
  },
  en: {
    status: 'In progress',
    summary: 'Case study in progress — the page is a template for now.',
    subtitle: 'Case study in progress: this page is a template, the final text will follow.',
    role: 'Product Designer',
    facts: ['Company', 'Role', 'Industry', 'Tools', 'Goal'],
    tools: 'Figma',
    dash: '—',
    note: 'This is a page template. The block headings will stay, the text will be replaced with the real thing.',
    about: 'About the project',
    aboutText: [
      'A short description of the product will go here: who it is for, what problem it solves and the context I work on it in.',
      'And here — the hypothesis or the key question the project started from.',
    ],
    problem: 'Problem',
    business: 'Business',
    user: 'User',
    businessList: ['What business problem had to be solved.', 'Which metrics we wanted to improve.'],
    userList: ['What difficulties users ran into.', 'What stopped them from reaching their goal.'],
    research: 'Research',
    researchList: [
      'Competitor analysis and best practices.',
      'User interviews and surveys.',
      'Analysis of the current user journey.',
    ],
    process: 'Process',
    steps: ['Research', 'Structure and flows', 'Prototype', 'Testing', 'Handoff to development'],
    solution: 'Solution',
    solutionText: ['A description of the key decisions and screens will go here: what changed and why.'],
    result: 'Outcome and takeaways',
    resultText: ['Results, metrics and takeaways will go here: what worked and what I learned.'],
  },
}

function template(lang, { slug, title, company }) {
  const c = L[lang]
  const f = c.facts
  return {
    slug,
    status: c.status,
    title,
    company,
    year: '2026',
    role: c.role,
    tags: [],
    coverImage: '',
    summary: c.summary,
    heroSubtitle: c.subtitle,
    images: { cover: [] },
    facts: [
      { label: f[0], value: company },
      { label: f[1], value: c.role },
      { label: f[2], value: c.dash },
      { label: f[3], value: c.tools },
      { label: f[4], value: c.dash },
    ],
    customSections: [
      { type: 'note', text: c.note },
      { title: c.about, type: 'text', paragraphs: c.aboutText },
      {
        title: c.problem,
        type: 'twoColumn',
        items: [
          { title: c.business, list: c.businessList },
          { title: c.user, list: c.userList },
        ],
      },
      { title: c.research, type: 'checklist', items: c.researchList },
      { title: c.process, type: 'timeline', steps: c.steps },
      { title: c.solution, type: 'text', paragraphs: c.solutionText },
      { title: c.result, type: 'conclusion', paragraphs: c.resultText },
    ],
  }
}

const projects = [
  { slug: 'alma-tv', title: 'Alma TV', company: 'Alma TV' },
  { slug: 're-kassa', title: 'Re:Kassa', company: 'Re:Kassa' },
]

export default {
  // RU — подробные кейсы по STAR (caseStudies.star.ru.js); EN пока шаблон
  ru: [almaTv, reKassa],
  en: projects.map((p) => template('en', p)),
}
