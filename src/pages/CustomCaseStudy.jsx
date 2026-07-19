import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot.jsx'
import caseStudies from '../data/caseStudies.js'

export default function CustomCaseStudy({ item }) {
  const coverImages = item.images?.cover || []

  const currentIndex = caseStudies.findIndex((c) => c.slug === item.slug)
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length]
  const hasNext = nextCase && nextCase.slug !== item.slug

  return (
    <article className="case">
      {/* ── Шапка кейса ─────────────────────────────── */}
      <div className="wrap case-topbar">
        <Link to="/" className="back-link">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H6M11 18l-6-6 6-6" />
          </svg>
          Все кейсы
        </Link>
        <span className="case-counter">
          {String(currentIndex + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
        </span>
      </div>

      <header className="wrap cs-title-block">
        <p className="cs-kicker">
          {[item.company, item.year, item.tags?.[0]].filter(Boolean).join(' · ')}
        </p>
        <h1>{item.title}</h1>
        {item.heroSubtitle && <p className="cs-subtitle">{item.heroSubtitle}</p>}
      </header>

      {/* Паспорт проекта */}
      {item.facts?.length > 0 && (
        <section className="wrap">
          <dl className="cs-facts">
            {item.facts.map((f) => (
              <div className="cs-fact" key={f.label}>
                <dt className="cs-fact-label">{f.label}</dt>
                <dd className="cs-fact-value">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="wrap cs-cover">
        <ImageSlot
          src={coverImages[0]}
          label={`Обложка проекта — ${item.company}`}
          size="1400×900"
          className="cs-cover-image"
        />
      </section>

      {/* ── Содержательные блоки ────────────────────── */}
      {item.customSections.map((block, i) => (
        <Block key={i} block={block} number={i + 1} company={item.company} />
      ))}

      {/* ── Переход к следующему кейсу ──────────────── */}
      <nav className="wrap case-next" aria-label="Другие кейсы">
        {hasNext && (
          <Link to={`/case/${nextCase.slug}`} className="case-next-card">
            <span className="label">Следующий кейс</span>
            <span className="case-next-title">{nextCase.title}</span>
            <span className="arrow-link">
              Открыть
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        )}
        <Link to="/" className="btn btn-ghost">К списку кейсов</Link>
      </nav>
    </article>
  )
}

/* ── Обёртка блока: номер + заголовок + содержимое ─────────── */
function Block({ block, number, company }) {
  const wide = ['screens', 'table', 'cjm', 'compare'].includes(block.type)

  return (
    <section className={`wrap cs-block ${wide ? 'cs-block-wide' : ''}`}>
      {block.title && (
        <div className="cs-block-head">
          <span className="cs-block-num">{String(number).padStart(2, '0')}</span>
          <h2 className="cs-block-title">{block.title}</h2>
        </div>
      )}
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
              {it.title && <h3>{it.title}</h3>}
              {it.text && <p>{it.text}</p>}
              {it.list && <ul>{it.list.map((li, j) => <li key={j}>{li}</li>)}</ul>}
            </div>
          ))}
        </div>
      )

    case 'twoColumn':
      return (
        <div className="cs-two-col">
          {block.items.map((it, i) => (
            <div key={i} className="cs-card">
              <h3>{it.title}</h3>
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
        <div className={`cs-checklist ${block.items.length > 5 ? 'cs-checklist-split' : ''}`}>
          <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
        </div>
      )

    case 'pills':
      return (
        <div className="pills-card">
          {block.items.map((p) => (
            <span key={p} className="report-pill">{p}</span>
          ))}
        </div>
      )

    case 'combo':
      return (
        <div className="cs-combo">
          {block.columns.map((col, i) => (
            <div className="cs-combo-col" key={i}>
              {col.title && <h3 className="cs-combo-title">{col.title}</h3>}
              {col.type === 'checklist' && (
                <div className="cs-checklist cs-checklist-plain">
                  <ul>{col.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                </div>
              )}
              {col.type === 'pills' && (
                <div className="pills-card cs-pills-plain">
                  {col.items.map((p) => (
                    <span key={p} className="report-pill">{p}</span>
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
          <div className="cs-text">
            {block.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <figure className="cs-figure">
            <ImageSlot label={block.imageLabel} size={block.imageSize || '900×700'} />
            {block.imageLabel && <figcaption>{block.imageLabel}</figcaption>}
          </figure>
        </div>
      )

    case 'timeline':
      return (
        <ol className="cs-steps">
          {block.steps.map((s, i) => (
            <li className="cs-step" key={i}>
              <span className="cs-step-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="cs-step-label">{s}</span>
            </li>
          ))}
        </ol>
      )

    case 'screens':
      return (
        <div className="cs-screens">
          {block.items.map((s, i) => (
            <figure className="cs-figure" key={i}>
              <ImageSlot
                label={s.label || `Экран — ${company}`}
                size={s.size || '1400×1000'}
                tall={s.tall}
              />
              {s.caption && <figcaption>{s.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )

    case 'compare':
      return (
        <>
          <div className="cs-compare-images">
            <figure className="cs-figure">
              <p className="cs-compare-label cs-compare-before">Было</p>
              <ImageSlot label="Старый экран" size="900×1100" />
            </figure>
            <figure className="cs-figure">
              <p className="cs-compare-label cs-compare-after">Стало</p>
              <ImageSlot label="Новый экран" size="900×1100" />
            </figure>
          </div>
          <div className="cs-checklist">
            <ul>{block.changes.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
        </>
      )

    case 'table':
      return (
        <ScrollBox>
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
        </ScrollBox>
      )

    case 'cjm':
      return (
        <ScrollBox hint="Таблица прокручивается вбок">
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
        </ScrollBox>
      )

    case 'note':
      return <p className="cs-note">{block.text}</p>

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

function ScrollBox({ children, hint }) {
  return (
    <div className="cs-scrollbox">
      <div className="cs-scrollbox-inner" tabIndex={0} role="group">
        {children}
      </div>
      {hint && <p className="cs-scrollbox-hint">{hint}</p>}
    </div>
  )
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
