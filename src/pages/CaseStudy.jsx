import { useParams, Link, Navigate } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'
import './caseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const item = caseStudies.find((c) => c.slug === slug)

  if (!item) return <Navigate to="/" replace />

  const coverImages = item.images?.cover || []
  const galleryImages = item.images?.gallery || []

  return (
    <article className="case">
      <div className="ruler" />
      <header className="wrap case-header">
        <Link to="/" className="back-link">← Все кейсы</Link>
        <h1>{item.title}</h1>
        <p className="case-summary">{item.summary}</p>
        <div className="case-tags">
          {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </header>

      <section className="wrap case-cover">
        <div className="case-cover-frame">
          <ImageSlot src={coverImages[0]} label="Обложка кейса — экран 1" size="1600×1000" />
          <ImageSlot src={coverImages[1]} label="Обложка кейса — экран 2" size="1600×1000" />
        </div>
      </section>

      <section className="wrap case-meta-row">
        <div className="case-meta-item">
          <p className="case-meta-label">Моя роль</p>
          <p className="case-meta-value">{item.role}</p>
        </div>
        <div className="case-meta-item">
          <p className="case-meta-label">Срок</p>
          <p className="case-meta-value">{item.timeline}</p>
        </div>
        <div className="case-meta-item">
          <p className="case-meta-label">Инструменты</p>
          <p className="case-meta-value">{item.tools}</p>
        </div>
      </section>

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

        <div className="case-gallery">
          <ImageSlot src={galleryImages[0]} label="Скриншот решения 1" size="900×1200" tall />
          <ImageSlot src={galleryImages[1]} label="Скриншот решения 2" size="900×1200" tall />
          <ImageSlot src={galleryImages[2]} label="Скриншот решения 3" size="900×1200" tall />
        </div>

        <CaseSection number="07" title="Валидация">
          <p>{item.validation}</p>
        </CaseSection>

        <CaseSection number="08" title="Результат и выводы">
          <p>{item.result}</p>
        </CaseSection>

        {galleryImages[3] && (
          <div className="case-gallery case-gallery-wide">
            <ImageSlot src={galleryImages[3]} label="Финальный экран" size="1600×1000" />
          </div>
        )}
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

function ImageSlot({ src, label, size, tall }) {
  if (src) {
    return <img className={`case-image ${tall ? 'case-image-tall' : ''}`} src={src} alt={label} />
  }
  return (
    <div className={`case-image-placeholder ${tall ? 'case-image-tall' : ''}`}>
      <span>{label}</span>
      <span className="case-image-size">{size}</span>
    </div>
  )
}
