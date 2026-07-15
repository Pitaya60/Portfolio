import './about.css'

// TODO: замените плейсхолдеры на реальные данные из резюме.
const experience = [
  {
    dates: 'TODO — укажите период',
    company: 'TODO — компания',
    industry: 'TODO — сфера',
    role: 'TODO — должность',
    bullets: [
      'TODO: ключевое достижение или задача №1.',
      'TODO: ключевое достижение или задача №2.',
      'TODO: ключевое достижение или задача №3.',
    ],
  },
  {
    dates: 'TODO — укажите период',
    company: 'TODO — компания',
    industry: 'TODO — сфера',
    role: 'TODO — должность',
    bullets: [
      'TODO: ключевое достижение или задача №1.',
      'TODO: ключевое достижение или задача №2.',
    ],
  },
]

const education = [
  {
    dates: 'TODO — годы обучения',
    school: 'TODO — учебное заведение',
    program: 'TODO — программа / курс, город',
  },
]

const tools = ['Figma', 'FigJam', 'Miro', 'Notion']
const languages = ['Казахский', 'Русский', 'Английский']

export default function About() {
  return (
    <article className="about-page">
      <section className="wrap about-hero">
        <div className="about-hero-text">
          <h1>Камилла Абдулла</h1>
          <p className="about-role">Product Designer</p>
          <p className="about-lead">
            TODO: короткий рассказ о себе — опыт, специализация, что вам важно в работе.
            2–3 предложения, как в описании профиля резюме.
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
                  {job.company} <span className="timeline-industry">| {job.industry}</span>
                </p>
                <p className="timeline-role">{job.role}</p>
                <ul className="timeline-list">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
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
