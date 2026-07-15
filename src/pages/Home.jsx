import caseStudies from '../data/caseStudies.js'
import CaseCard from '../components/CaseCard.jsx'
import './home.css'

export default function Home() {
  const workCases = caseStudies.filter((c) => c.category !== 'small')
  const smallCases = caseStudies.filter((c) => c.category === 'small')

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap hero-inner">
          <h1>
            UX-UI Designer,<br />
            build digital projects
          </h1>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">Смотреть кейсы</a>
          </div>
        </div>
      </section>

      <section id="work" className="wrap section">
        <div className="section-head">
          <h2>Рабочие кейсы</h2>
        </div>
        <div className="work-grid">
          {workCases.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i} />
          ))}
        </div>

        <div className="section-head section-head-secondary">
          <h2>Малые кейсы</h2>
        </div>
        {smallCases.length > 0 ? (
          <div className="work-grid">
            {smallCases.map((c, i) => (
              <CaseCard key={c.slug} item={c} index={i} />
            ))}
          </div>
        ) : (
          <p className="work-empty">Скоро здесь появятся личные и учебные проекты.</p>
        )}
      </section>
    </>
  )
}
