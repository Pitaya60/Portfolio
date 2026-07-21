import contacts from '../data/contacts.js'
import { useContact } from '../context/ContactContext.jsx'
import './about.css'

const experience = [
  {
    dates: 'Февраль 2026 - настоящее время',
    company: 'qBots',
    location: 'Алматы, Onsite',
    role: 'UX/UI-дизайнер',
    bullets: [
      'Спроектировала UX/UI AI-платформы в сфере здравоохранения «под ключ»: пользовательскую часть и административную панель для нескольких ролей — администратор, участковая медсестра, медицинский работник.',
      'Разработала модуль управления конкурсами: создание, редактирование и настройку этапов, включая обработку edge cases и уведомлений.',
      'Создала и поддерживала UI Kit и библиотеку компонентов, обеспечив единый визуальный стиль продукта и ускорив разработку новых экранов.',
      'Спроектировала аналитические дашборды с KPI и модуль экспорта данных в Excel для административных пользователей.',
      'Проводила конкурентный анализ и UX-исследования лучших практик для медицинских цифровых сервисов, тесно взаимодействуя с разработчиками и Product Manager на всех этапах ө от wireframes до релиза.',
      'Подготовила презентации и питч-деки для инкубаторов и партнёрских программ для гранта на 40 млн ₸.',
    ],
  },
  {
    dates: 'Август 2025 - Январь 2026',
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
    dates: 'Октябрь 2023 - Август 2024',
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
    dates: 'Август 2023 - Январь 2024',
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
    dates: 'Октябрь 2022 - Июль 2023',
    company: 'Международная Академия Робототехники',
    location: 'Алматы, Onsite',
    role: 'Преподаватель по робототехнике',
    bullets: [
      'Обучала учеников 5-13 лет сборке роботов для подготовки к международному чемпионату VEX World (Техас, США).',
      'Организовала крупные мероприятия: TechCup 2022, Digital Almaty и конкурс VEX World на базе Satbayev University.',
      'Разрабатывала рекламные и промо-материалы академии: баннеры, листовки, персонализированную продукцию.',
    ],
  },
]

const education = [
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
]

const courses = [
  { dates: '2025', school: 'TechOrda', program: 'UX/UI дизайн' },
  { dates: '2025', school: 'Coursera · Google', program: 'Google UX Design' },
]

const skills = [
  'User Research', 'User Flow Design', 'Wireframing', 'Prototyping (Figma)',
  'Usability Testing', 'Accessibility', 'Interaction Design', 'Responsive Design',
  'A/B тесты', 'HTML5', 'CSS3',
]

const tools = [
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

const languages = [
  { name: 'Казахский', level: 'A2' },
  { name: 'Русский', level: 'C2' },
  { name: 'Английский', level: 'B2' },
  { name: 'Польский', level: 'A2' },
]

export default function About() {
  const { openContact } = useContact()

  return (
    <article className="about-page">
      <section className="wrap about-hero">
        <div className="about-hero-text">
          <p className="eyebrow eyebrow-live">Открыта к предложениям</p>
          <h1>{contacts.name}</h1>
          <p className="about-role">{contacts.role}</p>
          <p className="about-lead">
            UX/UI-дизайнер с опытом почти 3 года в создании цифровых продуктов для FinTech,
            EdTech, MedTech и AI-платформ. Специализируюсь на пользовательских исследованиях,
            построении многошаговых сценариев и дизайн-системах. Участвовала в разработке
            AI-продукта в сфере здравоохранения, для которого команда выиграла грант на 40 млн ₸.
          </p>
          <div className="about-actions">
            <button type="button" className="btn btn-primary" onClick={openContact}>
              Написать мне
            </button>
          </div>
        </div>
      </section>

      <section className="wrap about-section">
        <h2>Опыт</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <div className="timeline-row" key={i}>
              <p className="timeline-date">{job.dates}</p>
              <div className="timeline-body">
                <p className="timeline-company">
                  {job.company}
                  {job.location && <span className="timeline-industry"> · {job.location}</span>}
                </p>
                <p className="timeline-role">{job.role}</p>
                {job.bullets.length > 0 && (
                  <ul className="timeline-list">
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap about-section">
        <h2>Навыки</h2>
        <div className="pill-cloud">
          {skills.map((s) => (
            <span className="skill-pill" key={s}>{s}</span>
          ))}
        </div>
      </section>

      <section className="wrap about-section">
        <h2>Образование</h2>
        <div className="timeline">
          {education.map((ed, i) => (
            <div className="timeline-row" key={i}>
              <p className="timeline-date">{ed.dates}</p>
              <div className="timeline-body">
                <p className="timeline-company">{ed.school}</p>
                <p className="timeline-role">{ed.program}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap about-section">
        <h2>Курсы и сертификаты</h2>
        <div className="timeline">
          {courses.map((c, i) => (
            <div className="timeline-row" key={i}>
              <p className="timeline-date">{c.dates}</p>
              <div className="timeline-body">
                <p className="timeline-company">{c.program}</p>
                <p className="timeline-role">{c.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap about-section">
  <h2>Инструменты</h2>
  <div className="chip-grid">
    {tools.map((t) => (
      <div className="chip-card" key={t.name}>
        <img className="chip-icon" src={t.icon} alt="" aria-hidden="true" />
        {t.name}
      </div>
    ))}
  </div>
</section>

      <section className="wrap about-section">
        <h2>Языки</h2>
        <div className="chip-grid">
          {languages.map((l) => (
            <div className="chip-card" key={l.name}>
              {l.name} <span className="chip-level"> {l.level}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
