import { getCaseStudies } from '../data/caseStudies.js'
import { getInProgress } from '../data/inProgress.js'
import CaseCard from '../components/CaseCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './home.css'

export default function Projects() {
  const { lang, t } = useLang()
  const caseStudies = getCaseStudies(lang)
  const inProgress = getInProgress(lang)

  return (
    <>
      <section className="wrap section">
        <div className="section-head">
          <div>
            <h1 className="projects-title">{t('projects.title')}</h1>
          </div>
          <p>{t('projects.lead')}</p>
        </div>

        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i + 1} total={caseStudies.length} />
          ))}
        </div>
      </section>

      {inProgress.length > 0 && (
        <section className="wrap section-tight in-progress">
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
