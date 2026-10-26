import { useState } from 'react'
import { Link } from 'react-router-dom'
import CozyRoom from '../components/CozyRoom.jsx'
import { FUN_CATEGORIES, TONES, getFunPosts } from '../data/funPosts.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import './fun.css'

function PostCard({ post, soonLabel }) {
  const media = (
    <div
      className="fun-card-media"
      style={{ aspectRatio: post.ratio, background: TONES[post.tone] || TONES.lavender }}
    >
      {post.image ? (
        <img src={post.image} alt="" loading="lazy" />
      ) : (
        <span className="fun-card-soon">{soonLabel}</span>
      )}
    </div>
  )

  const text = (
    <>
      <h3 className="fun-card-title">{post.title}</h3>
      {post.subtitle && <p className="fun-card-sub">{post.subtitle}</p>}
    </>
  )

  if (post.href) {
    return (
      <a className="fun-card fun-card-link" href={post.href} target="_blank" rel="noopener noreferrer">
        {media}
        {text}
      </a>
    )
  }

  return (
    <Link className="fun-card fun-card-link" to={`/fun/${post.id}`}>
      {media}
      {text}
    </Link>
  )
}

export default function Fun() {
  const { lang, t } = useLang()
  const [category, setCategory] = useState('all')

  const posts = getFunPosts(lang)
  const visible = category === 'all' ? posts : posts.filter((p) => p.category === category)

  return (
    <>
      {/* ── Шапка раздела ─────────────────────────────── */}
      <section className="wrap fun-hero">
        <p className="fun-wip">{t('fun.wip')}</p>
        <h1 className="fun-title">{t('fun.title')}</h1>
        <p className="fun-lead">{t('fun.lead')}</p>
      </section>

      {/* ── Мини-игра ─────────────────────────────────── */}
      <section className="wrap fun-room-section" aria-labelledby="room-title">
        <div className="fun-room-head">
          <h2 id="room-title">{t('fun.roomTitle')}</h2>
          <p>{t('fun.roomLead')}</p>
        </div>
        <CozyRoom />
      </section>

      {/* ── Блог ──────────────────────────────────────── */}
      <section className="wrap section fun-blog" aria-labelledby="blog-title">
        <h2 id="blog-title" className="sr-only">{t('fun.blogTitle')}</h2>

        <div className="fun-tabs" role="group" aria-label={t('fun.filterLabel')}>
          {FUN_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`fun-tab ${category === c ? 'is-active' : ''}`}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {t(`fun.filters.${c}`)}
            </button>
          ))}
        </div>

        <p className="fun-note">{t('fun.wipNote')}</p>

        {visible.length > 0 ? (
          <div className="fun-grid">
            {visible.map((p) => (
              <PostCard key={p.id} post={p} soonLabel={t('fun.soon')} />
            ))}
          </div>
        ) : (
          <p className="fun-empty">{t('fun.empty')}</p>
        )}
      </section>
    </>
  )
}
