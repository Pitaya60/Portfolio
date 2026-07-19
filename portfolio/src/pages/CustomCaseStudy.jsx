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
        <div className={`cs-text ${block.fullWidth ? 'cs-text-full' : ''}`}>
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
            <span key={p} className={`report-pill ${i % 2 === 1 ? 'report-pill-dark' : ''}`}>{p}</span>
          ))}
        </div>
      )

    case 'combo':
      return (
        <div className="cs-combo">
          {block.columns.map((col, i) => (
            <div className="cs-combo-col" key={i}>
              {col.title && <h4 className="cs-combo-title">{col.title}</h4>}
              {col.type === 'checklist' && (
                <div className="cs-checklist cs-checklist-plain">
                  <ul>{col.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                </div>
              )}
              {col.type === 'pills' && (
                <div className="pills-card cs-pills-plain">
                  {col.items.map((p, j) => (
                    <span key={p} className={`report-pill ${j % 2 === 1 ? 'report-pill-dark' : ''}`}>{p}</span>
                  ))}
                </div>
              )}
            </div>
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
              <ImageSlot label={s.label || `Экран — ${company}`} size={s.size || '1400×1000'} tall={s.tall} />
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

    case 'table':
      return (
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead>
              <tr>
                <th className="cs-table-num">№</th>
                <th>{block.columns?.[0] || 'Что я заметила'}</th>
                <th>{block.columns?.[1] || 'Почему это проблема'}</th>
              </tr>
            </thead>
            <tbody>
              {block.items.map((row, i) => (
                <tr key={i}>
                  <td className="cs-table-num">{i + 1}</td>
                  <td>{row.note}</td>
                  <td>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'cjm':
      return (
        <div className="cs-cjm-wrap">
          <table className="cs-cjm-table">
            <thead>
              <tr>
                <th className="cs-cjm-row-label">Шаг</th>
                {block.columns.map((c, i) => <th key={i}>{c.step}</th>)}
              </tr>
            </thead>
            <tbody>
              <CjmRow label="Результат" columns={block.columns} field="result" />
              <CjmRow label="Барьеры" columns={block.columns} field="barrier" />
              <CjmRow label="Эмоции" columns={block.columns} field="emotion" emoji />
              <CjmRow label="Цитаты" columns={block.columns} field="quote" quote />
              <CjmRow label="Улучшения" columns={block.columns} field="improvement" />
            </tbody>
          </table>
        </div>
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

function CjmRow({ label, columns, field, emoji, quote }) {
  return (
    <tr>
      <td className="cs-cjm-row-label">{label}</td>
      {columns.map((c, i) => (
        <td key={i} className={emoji ? 'cs-cjm-emoji' : quote ? 'cs-cjm-quote' : ''}>
          {quote ? `«${c[field]}»` : c[field]}
        </td>
      ))}
    </tr>
  )
}
