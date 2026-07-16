import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot.jsx'

export default function CustomCaseStudy({ item }) {
  const coverImages = item.images?.cover || []

  return (
    <article className="case">
      <header className="wrap report-header">
        <Link to="/" className="back-link">← Все кейсы</Link>
      </header>

      <div className="wrap cs-title-block">
        <h1>{item.title}</h1>
        <p className="cs-subtitle">{item.heroSubtitle}</p>
      </div>

      <section className="wrap cs-hero">
        <ImageSlot
          src={coverImages[0]}
          label={`Обложка проекта — ${item.company}`}
          size="1400×1000"
          className="cs-hero-cover"
        />
        <div className="cs-facts">
          {item.facts.map((f) => (
            <div key={f.label}>
              <p className="cs-fact-label">{f.label}</p>
              <p className="cs-fact-value">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {item.customSections.map((block, i) => (
        <Block key={i} block={block} company={item.company} />
      ))}

      <footer className="wrap case-next">
        <Link to="/" className="btn btn-primary">К списку кейсов</Link>
      </footer>
    </article>
  )
}

function Block({ block, company }) {
  return (
    <section className="wrap cs-block">
      {block.title && <h2 className="cs-block-title">{block.title}</h2>}
      <BlockBody block={block} company={company} />
    </section>
  )
}

function BlockBody({ block, company }) {
  switch (block.type) {
    case 'text':
      return (
        <div className="cs-text">
          {block.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )

    case 'cards':
      return (
        <div className="cs-card-grid" style={{ '--cs-cols': block.columns || 2 }}>
          {block.items.map((it, i) => (
            <div key={i} className="cs-card">
              {it.title && <h4>{it.title}</h4>}
              {it.text && <p>{it.text}</p>}
              {it.list && (
                <ul>{it.list.map((li, j) => <li key={j}>{li}</li>)}</ul>
              )}
            </div>
          ))}
        </div>
      )

    case 'twoColumn':
      return (
        <div className="cs-two-col">
          {block.items.map((it, i) => (
            <div key={i} className="cs-card">
              <h4>{it.title}</h4>
              {it.list ? (
                <ul>{it.list.map((li, j) => <li key={j}>{li}</li>)}</ul>
              ) : (
                <p>{it.text}</p>
              )}
            </div>
          ))}
        </div>
      )

    case 'checklist':
      return (
        <div className="cs-checklist">
          <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
        </div>
      )

    case 'pills':
      return (
        <div className="pills-card">
          {block.items.map((p, i) => (
            <span key={p} className={`report-pill ${i % 3 === 1 ? 'report-pill-dark' : ''}`}>{p}</span>
          ))}
        </div>
      )

    case 'imageText':
      return (
        <div className="cs-image-text">
          <ImageSlot label={block.imageLabel} size={block.imageSize || '900×700'} />
          <div className="cs-text">
            {block.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      )

    case 'timeline':
      return (
        <div className="cs-timeline">
          {block.steps.map((s, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span className="cs-timeline-step">{s}</span>
              {i < block.steps.length - 1 && <span className="cs-timeline-arrow">→</span>}
            </span>
          ))}
        </div>
      )

    case 'screens':
      return (
        <div className="cs-screens">
          {block.items.map((s, i) => (
            <div key={i}>
              <ImageSlot label={s.label || `Экран — ${company}`} size={s.size || '1400×1000'} />
              {s.caption && <p className="cs-screen-caption">{s.caption}</p>}
            </div>
          ))}
        </div>
      )

    case 'compare':
      return (
        <>
          <div className="cs-compare-images">
            <div>
              <p className="cs-compare-label">Было</p>
              <ImageSlot label="Старый экран" size="900×1100" />
            </div>
            <div>
              <p className="cs-compare-label">Стало</p>
              <ImageSlot label="Новый экран" size="900×1100" />
            </div>
          </div>
          <div className="cs-checklist">
            <ul>{block.changes.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
        </>
      )

    case 'note':
      return <div className="cs-note">{block.text}</div>

    case 'conclusion':
      return (
        <div className="cs-conclusion">
          {block.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )

    default:
      return null
  }
}
