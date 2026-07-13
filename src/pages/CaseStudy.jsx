import { useParams, Link, Navigate } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'
import './caseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const item = caseStudies.find((c) => c.slug === slug)

  if (!item) return <Navigate to="/" replace />

  return (
    <article className="case">
      <div className="ruler" />
      <header className="wrap case-header">
        <Link to="/" className="back-link">← Все кейсы</Link>
        <p className="eyebrow">{item.company} · {item.year} · {item.role}</p>
        <h1>{item.title}</h1>
        <p className="case-summary">{item.summary}</p>
        <div className="case-tags">
          {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </header>

      <section className="wrap case-metrics">
        {item.metrics.map((m) => (
          <div key={m.label} className="metric-card">
            <div className="value">{m.value}</div>
            <div className="label">{m.label}</div>
          </div>
        ))}
      </section>

      <div className="wrap case-body">
        <CaseSection number="01" title="Контекст">
          <p>{item.context}</p>
        </CaseSection>

        <CaseSection number="02" title="Проблема бизнеса">
          <ul>{item.problemBusiness.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </CaseSection>

        <CaseSection number="03" title="Проблема пользователя">
          <ul>{item.problemUser.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </CaseSection>

        <CaseSection number="04" title="Как пришли к пониманию">
          <ul>{item.research.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </CaseSection>

        <CaseSection number="05" title="Гипотеза">
          <p className="hypothesis">{item.hypothesis}</p>
        </CaseSection>

        <CaseSection number="06" title="Решение">
          <ul>{item.solution.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </CaseSection>

        <CaseSection number="07" title="Валидация">
          <p>{item.validation}</p>
        </CaseSection>

        <CaseSection number="08" title="Результат и выводы">
          <p>{item.result}</p>
        </CaseSection>
      </div>

      <footer className="wrap case-next">
        <Link to="/" className="btn btn-primary">К списку кейсов</Link>
      </footer>
    </article>
  )
}

function CaseSection({ number, title, children }) {
  return (
    <section className="case-section">
      <div className="case-section-head">
        <span className="eyebrow">{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-section-body">{children}</div>
    </section>
  )
}
