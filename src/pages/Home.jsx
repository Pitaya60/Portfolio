import caseStudies from '../data/caseStudies.js'
import CaseCard from '../components/CaseCard.jsx'
import './home.css'

export default function Home() {
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
          <h2>Кейсы</h2>
        </div>
        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
