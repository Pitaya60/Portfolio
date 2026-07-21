import { getContacts } from '../data/contacts.js'
import { getAbout, tools } from '../data/about.js'
import { useContact } from '../context/ContactContext.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './about.css'

export default function About() {
  const { openContact } = useContact()
  const { lang, t } = useLang()
  const contacts = getContacts(lang)
  const data = getAbout(lang)

  return (
    <article className="about-page">
      <section className="wrap about-hero">
        <div className="about-hero-text">
          <p className="eyebrow eyebrow-live">{t('common.openToWork')}</p>
          <h1>{contacts.name}</h1>
          <p className="about-role">{contacts.role}</p>
          <p className="about-lead">{data.lead}</p>
          <div className="about-actions">
            <button type="button" className="btn btn-primary" onClick={openContact}>
              {t('common.writeMe')}
            </button>
          </div>
        </div>
      </section>

      <section className="wrap about-section">
        <h2>{t('about.sections.experience')}</h2>
        <div className="timeline">
          {data.experience.map((job, i) => (
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
        <h2>{t('about.sections.skills')}</h2>
        <div className="pill-cloud">
          {data.skills.map((s) => (
            <span className="skill-pill" key={s}>{s}</span>
          ))}
        </div>
      </section>

      <section className="wrap about-section">
        <h2>{t('about.sections.education')}</h2>
        <div className="timeline">
          {data.education.map((ed, i) => (
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
        <h2>{t('about.sections.courses')}</h2>
        <div className="timeline">
          {data.courses.map((c, i) => (
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
        <h2>{t('about.sections.tools')}</h2>
        <div className="chip-grid">
          {tools.map((tool) => (
            <div className="chip-card" key={tool.name}>
              <img className="chip-icon" src={tool.icon} alt="" aria-hidden="true" />
              {tool.name}
            </div>
          ))}
        </div>
      </section>

      <section className="wrap about-section">
        <h2>{t('about.sections.languages')}</h2>
        <div className="chip-grid">
          {data.languages.map((l) => (
            <div className="chip-card" key={l.name}>
              {l.name} <span className="chip-level"> {l.level}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
