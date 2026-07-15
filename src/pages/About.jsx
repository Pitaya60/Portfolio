import './about.css'

const experience = [
  {
    dates: 'Февраль 2026 — сейчас',
    company: 'qBots',
    industry: '',
    role: 'UX/UI-дизайнер',
    bullets: [
      'Проектирование пользовательских интерфейсов и UX-сценариев для продуктов компании.',
    ],
  },
  {
    dates: 'Август 2025 — Январь 2026',
    company: 'Prodengi.kz',
    industry: 'FinTech',
    role: 'UX/UI-дизайнер · платформа финансовой помощи и грамотности',
    bullets: [
      'Спроектировала UX-поток подачи заявок на финансовую консультацию, упростив сценарий и сократив количество шагов.',
      'Разработала wireframes и интерактивные прототипы в Figma для сервисов Prodengi.kz и TengeDa.',
      'Участвовала в тестировании пользовательских сценариев и дорабатывала интерфейсы на основе обратной связи.',
      'Работала в связке с разработчиками, обеспечивая корректную реализацию UI-компонентов.',
      'Проектировала интерфейсы с фокусом на прозрачность и понятность для пользователей с низкой финансовой грамотностью.',
      'Создавала и поддерживала дизайн-систему продукта, исследовала решения конкурентов.',
    ],
  },
  {
    dates: 'Октябрь 2023 — Август 2024',
    company: 'SparkLab by inDrive',
    industry: 'EdTech',
    role: 'UX/UI-дизайнер · поддержка тьюторинга для людей с инвалидностью',
    bullets: [
      'Разработала UX/UI-решения для образовательной платформы.',
      'Проводила пользовательское тестирование с фокусом на accessibility.',
      'Улучшала навигацию и структуру интерфейсов на основе пользовательских сценариев.',
      'Внедрила систему сбора обратной связи для повышения вовлечённости пользователей.',
      'Создавала и поддерживала дизайн-систему, адаптировала дизайн под разные платформы и устройства.',
    ],
  },
]

const education = [
  {
    dates: '2025',
    school: 'Satbayev University',
    program: 'Computer Science · Бакалавр',
  },
  {
    dates: '2025',
    school: 'Lodz Technology University',
    program: 'Computer Science · Бакалавр · Лодзь, Польша',
  },
]

const courses = [
  { dates: '2025', school: 'TechOrda', program: 'UX/UI дизайн' },
  { dates: '2025', school: 'Coursera · Google', program: 'Google UX Design' },
]

const skills = [
  'User Research',
  'User Flow Design',
  'Wireframing',
  'Prototyping (Figma)',
  'Usability Testing',
  'Accessibility',
  'Interaction Design',
  'Responsive Design',
  'A/B тесты',
  'HTML5 / CSS3',
  'UX',
  'UI',
]

const tools = ['Figma', 'Adobe Photoshop']
const languages = ['Казахский', 'Русский', 'Английский']

export default function About() {
  return (
    <article className="about-page">
      <section className="wrap about-hero">
        <div className="about-hero-text">
          <h1>Камилла Абдулла</h1>
          <p className="about-role">UX/UI &amp; Product Designer · FinTech / EdTech</p>
          <p className="about-lead">
            UX/UI- и продуктовый дизайнер с опытом в FinTech и EdTech. Проектирую понятные
            и доступные интерфейсы — от пользовательских исследований и сценариев до
            прототипов в Figma и готовых дизайн-систем. Мне важны прозрачность продукта
            и удобство для каждого пользователя.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
            Скачать резюме
          </a>
        </div>
        <div className="about-photo" aria-hidden="true">
          <span>Фото</span>
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
                  {job.industry && (
                    <span className="timeline-industry"> · {job.industry}</span>
                  )}
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
            <div className="chip-card" key={t}>
              <span className="chip-icon" aria-hidden="true">{t[0]}</span>
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="wrap about-section">
        <h2>Языки</h2>
        <div className="chip-grid">
          {languages.map((l) => (
            <div className="chip-card" key={l}>{l}</div>
          ))}
        </div>
      </section>
    </article>
  )
}
