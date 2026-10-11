import { useLang } from '../i18n/LanguageContext.jsx'
import './projectCard.css'

/* Карточка проекта «в разработке».
   Если задан href — карточка ссылка, иначе обычный блок. */
export default function ProjectCard({ item }) {
  const { t } = useLang()
  const hasProgress = typeof item.progress === 'number'
  const progress = hasProgress ? Math.min(100, Math.max(0, item.progress)) : 0

  const content = (
    <>
      <div className="project-card-media">
        {item.coverImage ? (
          <img src={item.coverImage} alt="" className="project-card-cover" />
        ) : (
          <div className="project-card-cover project-card-cover-empty" aria-hidden="true">
            <span>{item.title}</span>
          </div>
        )}
        <span className="project-card-status">{item.status}</span>
      </div>

      <div className="project-card-body">
        {item.year && <p className="project-card-meta">{item.year}</p>}

        <h3 className="project-card-title">{item.title}</h3>
        <p className="project-card-summary">{item.summary}</p>

        {hasProgress && (
          <div className="project-card-progress">
            <div className="project-card-progress-head">
              <span>{t('home.progress')}</span>
              <span>{progress}%</span>
            </div>
            <div
              className="project-card-bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
              aria-label={`${t('home.progress')}: ${item.title}`}
            >
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {item.tags?.length > 0 && (
          <div className="project-card-tags">
            {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        )}
      </div>
    </>
  )

  if (item.href) {
    return (
      <a
        href={item.href}
        className="project-card project-card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return <article className="project-card">{content}</article>
}
