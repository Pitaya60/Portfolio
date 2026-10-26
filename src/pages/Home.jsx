import { Link } from 'react-router-dom'
import { getCaseStudies, HOME_SLUGS } from '../data/caseStudies.js'
import { getInProgress } from '../data/inProgress.js'
import { getWorkplaces } from '../data/workplaces.js'
import CaseCard from '../components/CaseCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './home.css'

export default function Home() {
  const { lang, t } = useLang()
  const workplaces = getWorkplaces(lang)
  const caseStudies = HOME_SLUGS
    .map((slug) => getCaseStudies(lang).find((c) => c.slug === slug))
    .filter(Boolean)
  const inProgress = getInProgress(lang).filter((p) => p.onHome)

  return (
    <>
      {/* ── Первый экран ─────────────────────────────── */}
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="eyebrow eyebrow-live">{t('common.openToWork')}</p>

          <h1 className="hero-title">
            {t('home.heroTitleLine1')}
            <br className="hero-br" /> {t('home.heroTitleLine2')}
          </h1>

          <p className="hero-lead">{t('home.heroLead')}</p>

          <div className="work-block">
            <h2 className="work-block-title">{t('home.workTitle')}</h2>
            <ul className="work-cols">
              {workplaces.map((w) => (
                <li key={w.id} className="work-col">
                  <p className="work-col-company">
                    {w.company} <span>{w.tag}</span>
                  </p>
                  <p className="work-col-role">{w.role}</p>
                  <p className="work-col-dates">{w.dates}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">{t('home.heroCta')}</a>
          </div>
        </div>
      </section>

      {/* ── Кейсы ────────────────────────────────────── */}
      <section id="work" className="wrap section">
        <div className="section-head">
          <div>
            <h2>{t('home.casesTitle')}</h2>
          </div>
        </div>

        <div className="work-grid work-grid-2">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i + 1} total={caseStudies.length} compact />
          ))}
        </div>

        <div className="all-projects">
          <Link to="/cases" className="btn btn-primary">{t('home.allProjects')}</Link>
        </div>
      </section>

      {/* ── Проекты в разработке ─────────────────────── */}
      {inProgress.length > 0 && (
        <section id="in-progress" className="wrap section-tight in-progress">
          <div className="section-head">
            <div>
              <h2>{t('home.inProgressTitle')}</h2>
            </div>
            <p>{t('home.inProgressLead')}</p>
          </div>

          <div className="progress-grid">
            {inProgress.map((p) => (
              <ProjectCard key={p.id} item={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
