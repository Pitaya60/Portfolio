import { Link } from 'react-router-dom'
import './caseCard.css'

const badgeColors = ['badge-red', 'badge-purple', 'badge-blue']

export default function CaseCard({ item, index }) {
  const badgeClass = badgeColors[index % badgeColors.length]

  return (
    <Link to={`/case/${item.slug}`} className="case-card">
      <div className="case-card-thumb">
        <span className={`case-card-badge ${badgeClass}`}>{item.tags[0]}</span>
        <div className="case-card-metric">
          <span className="value">{item.heroMetric.value}</span>
          <span className="label">{item.heroMetric.label}</span>
        </div>
      </div>

      <div className="case-card-body">
        <div className="case-card-top">
          <h3>{item.title}</h3>
          <span className="case-card-arrow">→</span>
        </div>
        <p className="case-card-summary">{item.summary}</p>
        <div className="case-card-tags">
          {item.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
