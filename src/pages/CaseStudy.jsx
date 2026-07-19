import { useParams, Link, Navigate } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'
import ImageSlot from '../components/ImageSlot.jsx'
import CustomCaseStudy from './CustomCaseStudy.jsx'
import './caseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const item = caseStudies.find((c) => c.slug === slug)

  if (!item) return <Navigate to="/" replace />

  if (item.customSections) return <CustomCaseStudy item={item} />

  const coverImages = item.images?.cover || []
  const galleryImages = item.images?.gallery || []

  return (
    <article className="case">
      <div className="wrap case-topbar">
        <Link to="/#work" className="back-link">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H6M11 6l-6 6 6 6" />
          </svg>
          Все кейсы
        </Link>
        {item.year && <span className="case-topbar-year">{item.year}</span>}
      </div>

      <section className="wrap">
        <div className="report-hero">
          <div className="report-hero-text">
            <p className="report-hero-eyebrow">{item.title}</p>
            <p className="report-hero-logo">{item.company}</p>
            <div className="report-hero-tags">
              {item.tags.map((t) => <span key={t} className="report-hero-tag">{t}</span>)}
            </div>
          </div>
          <ImageSlot
            src={coverImages[0]}
            label={`Обложка кейса — ${item.company}`}
            size="1200×760"
            className="report-hero-image"
          />
        </div>
      </section>

      <section className="wrap report-meta-row">
        <div className="report-meta-item">
          <p className="report-meta-label">Моя роль</p>
          <p className="report-meta-value">{item.role}</p>
        </div>
        <div className="report-meta-item">
          <p className="report-meta-label">Срок</p>
          <p className="report-meta-value">{item.timeline}</p>
        </div>
        <div className="report-meta-item">
          <p className="report-meta-label">Инструменты</p>
          <p className="report-meta-value">{item.tools}</p>
        </div>
      </section>

      {item.metrics?.length > 0 && (
        <section className="wrap report-metrics">
          {item.metrics.map((m) => (
            <div key={m.label} className="metric-card">
              <div className="value">{m.value}</div>
              <div className="label">{m.label}</div>
            </div>
          ))}
        </section>
      )}

      <section className="wrap report-section">
        <h2 className="report-h2">Summary</h2>
        <div className="summary-grid">
          <div className="summary-stack">
            <SummaryCard number="01" title="О продукте" variant="light">
              {item.context}
            </SummaryCard>
            <SummaryCard number="02" title="Проблема" variant="dark">
              <ul className="report-list">
                {[...item.problemBusiness, ...item.problemUser].map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </SummaryCard>
          </div>
          <ImageSlot
            src={coverImages[1]}
            label={`Экраны — ${item.company}`}
            size="900×1100"
            className="summary-image"
          />
        </div>

        <SummaryCard number="03" title="Решение" variant="light" wide>
          <ul className="report-list">
            {item.solution.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </SummaryCard>
      </section>

      <section className="wrap report-section">
        <h2 className="report-h2">Research</h2>
        <p className="report-p">Как пришла к пониманию проблемы:</p>
        <ul className="report-list report-list-standalone">
          {item.research.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        {item.analysisTable && (
          <>
            <h3 className="report-h3">Продуктовый анализ</h3>
            <div className="report-table-wrap">
              <table className="report-table">
                <thead>
                  <tr>
                    <th className="col-num">№</th>
                    <th>Что я заметила</th>
                    <th>Почему это проблема</th>
                  </tr>
                </thead>
                <tbody>
                  {item.analysisTable.map((row, i) => (
                    <tr key={i}>
                      <td className="col-num">{i + 1}</td>
                      <td>{row.note}</td>
                      <td>{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {item.interviewColumns && (
          <>
            <h3 className="report-h3">User Interviews</h3>
            <div className="report-table-wrap" tabIndex={0}>
              <table className="interview-table">
                <thead>
                  <tr>
                    <th className="row-label-cell">Шаги</th>
                    {item.interviewColumns.map((c, i) => <th key={i}>{c.step}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <InterviewRow label="Изображения" columns={item.interviewColumns} render={() => (
                    <ImageSlot label="Скрин шага" size="240×260" tall />
                  )} />
                  <InterviewRow label="Ожидаемый результат" columns={item.interviewColumns} field="result" />
                  <InterviewRow label="Барьеры и их причины" columns={item.interviewColumns} field="barrier" />
                  <InterviewRow label="Эмоции" columns={item.interviewColumns} field="emotion" emoji />
                  <InterviewRow label="Цитаты" columns={item.interviewColumns} field="quote" quote />
                  <InterviewRow label="Пространство и его особенности" columns={item.interviewColumns} field="space" />
                  <InterviewRow label="Драйверы" columns={item.interviewColumns} field="driver" />
                  <InterviewRow label="Улучшения" columns={item.interviewColumns} field="improvement" />
                </tbody>
              </table>
            </div>
          </>
        )}

        {item.problemPills && (
          <>
            <h3 className="report-h3">Проблема пользователя</h3>
            <div className="pills-card">
              {item.problemPills.map((p) => (
                <span key={p} className="report-pill">{p}</span>
              ))}
            </div>
          </>
        )}

        {item.competitorBullets && (
          <>
            <h3 className="report-h3">Competitor Benchmarking</h3>
            <div className="benchmark-grid">
              <ul className="report-list">
                {item.competitorBullets.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <ImageSlot label="Скрин: сравнение конкурентов" size="900×600" className="benchmark-image" />
            </div>
          </>
        )}

        {item.hypothesis && <div className="hypothesis">{item.hypothesis}</div>}
      </section>

      {galleryImages.length > 0 || item.solution ? (
        <section className="wrap report-section">
          <h2 className="report-h2">Prototype &amp; Solutions</h2>
          <div className="prototype-box">
            <ImageSlot src={galleryImages[0]} label="Мокап — вариант 1" size="700×900" className="prototype-image tilt-left" />
            <ImageSlot src={galleryImages[1]} label="Мокап — вариант 2" size="700×900" className="prototype-image tilt-right" />
          </div>
          <div className="final-box">
            <ImageSlot src={galleryImages[2]} label={`Финальный экран — ${item.company}`} size="1000×1300" className="final-image" />
          </div>
        </section>
      ) : null}

      <section className="wrap report-section">
        <h2 className="report-h2">Результат и выводы</h2>
        <div className="result-card">
          <p><strong>Валидация:</strong> {item.validation}</p>
          <p><strong>Результат:</strong> {item.result}</p>
        </div>
      </section>

      <nav className="wrap case-next" aria-label="Другие кейсы">
        <Link to="/" className="btn btn-ghost">К списку кейсов</Link>
      </nav>
    </article>
  )
}

function SummaryCard({ number, title, children, variant, wide }) {
  return (
    <div className={`summary-card ${variant === 'dark' ? 'summary-card-dark' : ''} ${wide ? 'summary-card-wide' : ''}`}>
      <span className="summary-badge">{number}</span>
      <h3 className="summary-title">{title}</h3>
      <div className="summary-body">{children}</div>
    </div>
  )
}

function InterviewRow({ label, columns, field, render, emoji, quote }) {
  return (
    <tr>
      <td className="row-label-cell">{label}</td>
      {columns.map((c, i) => (
        <td key={i} className={emoji ? 'cell-emoji' : quote ? 'cell-quote' : ''}>
          {render ? render() : quote ? `«${c[field]}»` : c[field]}
        </td>
      ))}
    </tr>
  )
}
