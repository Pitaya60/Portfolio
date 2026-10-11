/* Контент страницы «Обо мне» на двух языках.
   Иконки инструментов общие — меняются только подписи. */

const about = {
  ru: {
    lead:
      'UX/UI-дизайнер с опытом почти 3 года в создании цифровых продуктов для FinTech, EdTech, MedTech и AI-платформ. Специализируюсь на пользовательских исследованиях, построении многошаговых сценариев и дизайн-системах. Участвовала в разработке AI-продукта в сфере здравоохранения, для которого команда выиграла грант на 40 млн ₸.',

    experience: [
      {
        dates: 'Февраль 2026 — настоящее время',
        company: 'qBots',
        location: 'Алматы, Onsite',
        role: 'UX/UI-дизайнер',
        bullets: [
          'Спроектировала UX/UI AI-платформы в сфере здравоохранения «под ключ»: пользовательскую часть и административную панель для нескольких ролей — администратор, участковая медсестра, медицинский работник.',
          'Разработала модуль управления конкурсами: создание, редактирование и настройку этапов, включая обработку edge cases и уведомлений.',
          'Создала и поддерживала UI Kit и библиотеку компонентов, обеспечив единый визуальный стиль продукта и ускорив разработку новых экранов.',
          'Спроектировала аналитические дашборды с KPI и модуль экспорта данных в Excel для административных пользователей.',
          'Проводила конкурентный анализ и UX-исследования лучших практик для медицинских цифровых сервисов, тесно взаимодействуя с разработчиками и Product Manager на всех этапах — от wireframes до релиза.',
          'Подготовила презентации и питч-деки для инкубаторов и партнёрских программ для гранта на 40 млн ₸.',
        ],
      },
      {
        dates: 'Август 2025 — Январь 2026',
        company: 'Prodengi.kz',
        location: 'Алматы, Onsite',
        role: 'UX/UI-дизайнер',
        bullets: [
          'Спроектировала UX-потоки подачи заявок на финансовую консультацию и получение кредитного рейтинга, сократив количество шагов пользовательского пути.',
          'Разработала wireframes, интерактивные прототипы и high-fidelity макеты в Figma для 4 продуктов экосистемы: Prodengi.kz, TengeDa, Jetu.kz и i.jetu.kz.',
          'Провела редизайн раздела «Кредитная история» (информационные блоки, FAQ, структура страницы), повысив понятность сервиса для пользователей.',
          'Создала единый стиль заглушек и универсальный компонент модальных окон, обеспечив консистентность интерфейсов и соответствие дизайн-системе.',
          'Разработала адаптивные интерфейсы для desktop и mobile, включая переработку личного кабинета и ключевых пользовательских путей.',
          'Подготовила конверсионные баннеры и редизайн раздела «Акции и новости» для TengeDa, а также тематическое оформление для jetu.kz и i.jetu.kz с сохранением фирменного стиля.',
        ],
      },
      {
        dates: 'Октябрь 2023 — Август 2024',
        company: 'SparkLab by inDrive',
        location: 'Алматы, Onsite',
        role: 'UX/UI-дизайнер',
        bullets: [
          'Спроектировала UX/UI образовательной платформы для EdTech-проекта по тьюторингу людей с инвалидностью, с фокусом на accessibility.',
          'Провела пользовательское тестирование и улучшила навигацию и структуру интерфейсов на основе полученных данных.',
          'Внедрила систему сбора обратной связи, повысившую вовлечённость пользователей.',
          'Создавала и поддерживала дизайн-систему продукта, адаптируя макеты под разные платформы и устройства.',
        ],
      },
      {
        dates: 'Август 2023 — Январь 2024',
        company: 'CyberBiz',
        location: 'Алматы, Remote',
        role: 'UX/UI-дизайнер',
        bullets: [
          'Спроектировала пользовательские интерфейсы для web-платформы бронирования билетов и аренды жилья.',
          'Разработала интерактивные UI-компоненты и систему навигации, оптимизировав структуру страниц для улучшения пользовательского опыта.',
          'Разработала фирменный стиль и айдентику продукта, адаптировав дизайн под разные платформы и устройства.',
        ],
      },
      {
        dates: 'Октябрь 2022 — Июль 2023',
        company: 'Международная Академия Робототехники',
        location: 'Алматы, Onsite',
        role: 'Преподаватель по робототехнике',
        bullets: [
          'Обучала учеников 5–13 лет сборке роботов для подготовки к международному чемпионату VEX World (Техас, США).',
          'Организовала крупные мероприятия: TechCup 2022, Digital Almaty и конкурс VEX World на базе Satbayev University.',
          'Разрабатывала рекламные и промо-материалы академии: баннеры, листовки, персонализированную продукцию.',
        ],
      },
    ],

    education: [
      {
        dates: '2025',
        school: 'Satbayev University',
        program: 'Бакалавр, Программная инженерия / Computer Science',
      },
      {
        dates: '2025',
        school: 'Lodz Technology University',
        program: 'Бакалавр, Information Technology / Computer Science · Лодзь, Польша',
      },
    ],

    courses: [
      { dates: '2025', school: 'TechOrda', program: 'UX/UI дизайн' },
      { dates: '2025', school: 'Coursera · Google', program: 'Google UX Design' },
    ],

    skills: [
      'User Research', 'User Flow Design', 'Wireframing', 'Prototyping (Figma)',
      'Usability Testing', 'Accessibility', 'Interaction Design', 'Responsive Design',
      'A/B тесты', 'HTML5', 'CSS3',
    ],

    languages: [
      { name: 'Казахский', level: 'A2' },
      { name: 'Русский', level: 'C2' },
      { name: 'Английский', level: 'B2' },
      { name: 'Польский', level: 'A2' },
    ],
  },

  en: {
    lead:
      'UX/UI designer with almost 3 years of experience building digital products for FinTech, EdTech, MedTech and AI platforms. I specialise in user research, designing multi-step flows and building design systems. I contributed to an AI healthcare product for which the team won a grant of 40 million ₸.',

    experience: [
      {
        dates: 'February 2026 — present',
        company: 'qBots',
        location: 'Almaty, onsite',
        role: 'UX/UI Designer',
        bullets: [
          'Designed the end-to-end UX/UI of an AI healthcare platform: the user-facing product and an admin panel covering several roles — administrator, district nurse and medical worker.',
          'Built a competition management module: creating, editing and configuring stages, including edge cases and notifications.',
          'Created and maintained the UI kit and component library, keeping the product visually consistent and speeding up the design of new screens.',
          'Designed analytics dashboards with KPIs and an Excel data export module for admin users.',
          'Ran competitor analysis and UX research into best practices for digital medical services, working closely with developers and the product manager from wireframes through to release.',
          'Prepared presentations and pitch decks for incubators and partner programmes that supported a 40 million ₸ grant.',
        ],
      },
      {
        dates: 'August 2025 — January 2026',
        company: 'Prodengi.kz',
        location: 'Almaty, onsite',
        role: 'UX/UI Designer',
        bullets: [
          'Designed the application flows for financial consultations and credit rating requests, cutting the number of steps in the user journey.',
          'Produced wireframes, interactive prototypes and high-fidelity mockups in Figma for 4 products in the ecosystem: Prodengi.kz, TengeDa, Jetu.kz and i.jetu.kz.',
          'Redesigned the “Credit history” section (information blocks, FAQ, page structure), making the service far easier for users to understand.',
          'Created a unified style for empty states and a universal modal component, keeping interfaces consistent with the design system.',
          'Designed responsive interfaces for desktop and mobile, including a reworked personal account and key user journeys.',
          'Prepared conversion banners and redesigned the “Promotions and news” section for TengeDa, plus themed layouts for jetu.kz and i.jetu.kz within the existing brand style.',
        ],
      },
      {
        dates: 'October 2023 — August 2024',
        company: 'SparkLab by inDrive',
        location: 'Almaty, onsite',
        role: 'UX/UI Designer',
        bullets: [
          'Designed the UX/UI of an educational platform for an EdTech tutoring project for people with disabilities, with a strong focus on accessibility.',
          'Ran usability testing and improved navigation and interface structure based on the findings.',
          'Introduced a feedback collection system that increased user engagement.',
          'Created and maintained the product design system, adapting layouts for different platforms and devices.',
        ],
      },
      {
        dates: 'August 2023 — January 2024',
        company: 'CyberBiz',
        location: 'Almaty, remote',
        role: 'UX/UI Designer',
        bullets: [
          'Designed the user interfaces for a web platform for ticket booking and accommodation rental.',
          'Built interactive UI components and a navigation system, optimising page structure to improve the user experience.',
          'Developed the brand style and product identity, adapting the design for different platforms and devices.',
        ],
      },
      {
        dates: 'October 2022 — July 2023',
        company: 'International Robotics Academy',
        location: 'Almaty, onsite',
        role: 'Robotics teacher',
        bullets: [
          'Taught students aged 5–13 to build robots in preparation for the international VEX World championship (Texas, USA).',
          'Organised major events: TechCup 2022, Digital Almaty and the VEX World competition hosted at Satbayev University.',
          'Produced advertising and promotional materials for the academy: banners, flyers and personalised merchandise.',
        ],
      },
    ],

    education: [
      {
        dates: '2025',
        school: 'Satbayev University',
        program: 'Bachelor’s degree, Software Engineering / Computer Science',
      },
      {
        dates: '2025',
        school: 'Lodz Technology University',
        program: 'Bachelor’s degree, Information Technology / Computer Science · Łódź, Poland',
      },
    ],

    courses: [
      { dates: '2025', school: 'TechOrda', program: 'UX/UI Design' },
      { dates: '2025', school: 'Coursera · Google', program: 'Google UX Design' },
    ],

    skills: [
      'User Research', 'User Flow Design', 'Wireframing', 'Prototyping (Figma)',
      'Usability Testing', 'Accessibility', 'Interaction Design', 'Responsive Design',
      'A/B Testing', 'HTML5', 'CSS3',
    ],

    languages: [
      { name: 'Kazakh', level: 'A2' },
      { name: 'Russian', level: 'C2' },
      { name: 'English', level: 'B2' },
      { name: 'Polish', level: 'A2' },
    ],
  },
}

/* Инструменты одинаковы для обоих языков */
export const tools = [
  { name: 'Figma', icon: 'case-images/icons/figma.png' },
  { name: 'Figma Make', icon: 'case-images/icons/tool.png' },
  { name: 'Framer', icon: 'case-images/icons/framer-black-icon.svg' },
  { name: 'Canva', icon: 'case-images/icons/canva-icon.svg' },
  { name: 'Adobe Photoshop', icon: 'case-images/icons/photoshop.png' },
  { name: 'Illustrator', icon: 'case-images/icons/illustrator.png' },
  { name: 'Notion', icon: 'case-images/icons/notion-icon.svg' },
  { name: 'Click Up', icon: 'case-images/icons/clickup.jpg' },
  { name: 'Jira', icon: 'case-images/icons/atlassian-jira-icon.svg' },
  { name: 'Claude', icon: 'case-images/icons/claude-ai-icon(1).svg' },
  { name: 'ChatGPT', icon: 'case-images/icons/chatgpt-icon.svg' },
]

export function getAbout(lang = 'ru') {
  return about[lang] || about.ru
}

export default about
