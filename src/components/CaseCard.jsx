import { Link } from 'react-router-dom'
import './caseCard.css'

const badgeByTag = {
  fintech: 'badge-purple',
  edtech: 'badge-green',
  medtech: 'badge-blue',
}

function getBadgeClass(tags) {
  const key = (tags[0] || '').toLowerCase()
  return badgeByTag[key] || 'badge-purple'
}

export default function CaseCard({ item }) {
  const badgeClass = getBadgeClass(item.tags)

  return (
    <Link to={`/case/${item.slug}`} className="case-card">
      <div className="case-card-thumb">
        <span className={`case-card-badge ${badgeClass}`}>{item.tags[0]}</span>
        {item.coverImage ? (
          <img className="case-card-cover" src={item.coverImage} alt={item.title} />
        ) : (
          <div className="case-card-cover-placeholder">Обложка кейса<br />1200×900</div>
        )}
      </div>

      <div className="case-card-body">
        <h3>{item.title}</h3>
        <p className="case-card-summary">{item.summary}</p>
      </div>
    </Link>
  )
}
