import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext.jsx'
import './caseCard.css'

/* Цвет метки индустрии — по первому тегу кейса */
const badgeByTag = {
  medtech: 'badge-blue',
  fintech: 'badge-purple',
  edtech: 'badge-green',
  ai: 'badge-purple',
}

function badgeClass(tag = '') {
  return badgeByTag[tag.toLowerCase()] || 'badge-purple'
}

export default function CaseCard({ item, index = 1, total = 1 }) {
  const { t } = useLang()
  const featured = index === 1
  const primaryTag = item.tags?.[0]

  return (
    <Link
      to={`/case/${item.slug}`}
      className={`case-card ${featured ? 'case-card-featured' : ''}`}
      aria-label={`${t('card.open')}: ${item.title}`}
    >
      <div className="case-card-media">
        {item.coverImage ? (
          <img src={item.coverImage} alt="" className="case-card-cover" />
        ) : (
          <div className="case-card-cover case-card-cover-empty">
            <span>{item.company}</span>
          </div>
        )}
        {primaryTag && (
          <span className={`case-card-badge ${badgeClass(primaryTag)}`}>{primaryTag}</span>
        )}
      </div>

      <div className="case-card-body">
        <p className="case-card-meta">
          <span className="case-card-index">
            {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="case-card-dot" aria-hidden="true">·</span>
          <span>{item.company}</span>
          {item.year && (
            <>
              <span className="case-card-dot" aria-hidden="true">·</span>
              <span>{item.year}</span>
            </>
          )}
        </p>

        <h3 className="case-card-title">{item.title}</h3>
        <p className="case-card-summary">{item.summary}</p>

        <div className="case-card-tags">
          {item.tags?.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>

        <span className="case-card-link arrow-link">
          {t('card.view')}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h13M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
