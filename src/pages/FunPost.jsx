import { useParams, Link, Navigate } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot.jsx'
import { getFunPosts } from '../data/funPosts.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import './caseStudy.css'
import './customCaseStudy.css'

/* Страница записи блога «Веселье». Контент берётся из src/data/funPosts.js */
export default function FunPost() {
  const { id } = useParams()
  const { lang, t } = useLang()
  const post = getFunPosts(lang).find((p) => p.id === id)

  if (!post) return <Navigate to="/fun" replace />

  return (
    <article className="case">
      <div className="wrap case-topbar">
        <Link to="/fun" className="back-link">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H6M11 18l-6-6 6-6" />
          </svg>
          {t('fun.back')}
        </Link>
        <span className="case-counter">{t(`fun.filters.${post.category}`)}</span>
      </div>

      <header className="wrap cs-title-block">
        <p className="cs-kicker">{[t(`fun.filters.${post.category}`), post.subtitle].filter(Boolean).join(' · ')}</p>
        <h1>{post.title}</h1>
        {post.intro && <p className="cs-subtitle">{post.intro}</p>}
      </header>

      {post.facts?.length > 0 && (
        <section className="wrap">
          <dl className="cs-facts">
            {post.facts.map((f) => (
              <div className="cs-fact" key={f.label}>
                <dt className="cs-fact-label">{f.label}</dt>
                <dd className="cs-fact-value">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="wrap cs-cover">
        <ImageSlot src={post.image} label={post.title} size="1400×900" className="cs-cover-image" />
      </section>

      {post.sections?.map((block, i) => (
        <section className="wrap cs-block" key={i}>
          <div className="cs-block-head">
            <span className="cs-block-num">{String(i + 1).padStart(2, '0')}</span>
            <h2 className="cs-block-title">{block.title}</h2>
          </div>
          <div className="cs-text">
            {block.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
          </div>
        </section>
      ))}

      <nav className="wrap case-next" aria-label={t('fun.back')}>
        <Link to="/fun" className="btn btn-ghost">{t('fun.back')}</Link>
      </nav>
    </article>
  )
}
