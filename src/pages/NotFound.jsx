import { useState } from 'react'
import { Link } from 'react-router-dom'
import notFoundMedia from '../data/notFoundMedia.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import './notFound.css'

export default function NotFound() {
  const { lang, t } = useLang()
  const [failed, setFailed] = useState(false)

  const src = notFoundMedia.src?.trim()
  const showImage = Boolean(src) && !failed
  const alt = notFoundMedia.alt?.[lang] ?? ''

  const slotStyle = {
    aspectRatio: notFoundMedia.ratio || '4 / 3',
    maxWidth: notFoundMedia.maxWidth || 420,
  }

  return (
    <div className="nf wrap section">
      {/* Слот под картинку или гифку.
          Пока файл не подставлен — на его месте пунктирная рамка. */}
      <div className="nf-media" style={slotStyle}>
        {showImage ? (
          <img
            className="nf-media-img"
            src={src}
            alt={alt}
            aria-hidden={alt ? undefined : 'true'}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="nf-media-empty">
            <span className="nf-media-title">{t('notFound.mediaPlaceholder')}</span>
            <span className="nf-media-hint">{t('notFound.mediaHint')}</span>
          </div>
        )}
      </div>

      <p className="eyebrow nf-eyebrow">{t('notFound.eyebrow')}</p>
      <h1 className="nf-title">{t('notFound.title')}</h1>
      <p className="nf-text">{t('notFound.text')}</p>
      <Link to="/" className="btn btn-primary">{t('notFound.cta')}</Link>
    </div>
  )
}
