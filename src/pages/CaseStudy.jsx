import { useParams, Link, Navigate } from 'react-router-dom'
import { getCaseStudies } from '../data/caseStudies.js'
import ImageSlot from '../components/ImageSlot.jsx'
import CustomCaseStudy from './CustomCaseStudy.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './caseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const caseStudies = getCaseStudies(lang)
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
          {t('caseStudy.allCases')}
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
            label={`${t('caseStudy.coverOf')} — ${item.company}`}
            size="1200×760"
            className="report-hero-image"
          />
        </div>
      </section>

      <section className="wrap report-meta-row">
        <div className="report-meta-item">
          <p className="report-meta-label">{t('caseStudy.role')}</p>
          <p className="report-meta-value">{item.role}</p>
        </div>
        <div className="report-meta-item">
          <p className="report-meta-label">{t('caseStudy.timeline')}</p>
          <p className="report-meta-value">{item.timeline}</p>
        </div>
        <div className="report-meta-item">
          <p className="report-meta-label">{t('caseStudy.tools')}</p>
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
        <h2 className="report-h2">{t('caseStudy.summary')}</h2>
        <div className="summary-grid">
          <div className="summary-stack">
            <SummaryCard number="01" title={t('caseStudy.about')} variant="light">
              {item.context}
            </SummaryCard>
            <SummaryCard number="02" title={t('caseStudy.problem')} variant="dark">
              <ul className="report-list">
                {[...item.problemBusiness, ...item.problemUser].map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </SummaryCard>
          </div>
          <ImageSlot
            src={coverImages[1]}
            label={`${t('caseStudy.screenOf')} — ${item.company}`}
            size="900×1100"
            className="summary-image"
          />
        </div>

        <SummaryCard number="03" title={t('caseStudy.solution')} variant="light" wide>
          <ul className="report-list">
            {item.solution.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </SummaryCard>
      </section>

      <section className="wrap report-section">
        <h2 className="report-h2">{t('caseStudy.research')}</h2>
        <p className="report-p">{t('caseStudy.researchLead')}</p>
        <ul className="report-list report-list-standalone">
          {item.research.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        {item.analysisTable && (
          <>
            <h3 className="report-h3">{t('caseStudy.productAnalysis')}</h3>
            <div className="report-table-wrap">
              <table className="report-table">
                <thead>
                  <tr>
                    <th className="col-num">{t('caseStudy.tableNum')}</th>
                    <th>{t('caseStudy.tableNote')}</th>
                    <th>{t('caseStudy.tableReason')}</th>
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
            <h3 className="report-h3">{t('caseStudy.interviews')}</h3>
            <div className="report-table-wrap" tabIndex={0}>
              <table className="interview-table">
                <thead>
                  <tr>
                    <th className="row-label-cell">{t('caseStudy.cjm.step')}</th>
                    {item.interviewColumns.map((c, i) => <th key={i}>{c.step}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <InterviewRow label={t('caseStudy.cjm.result')} columns={item.interviewColumns} field="result" />
                  <InterviewRow label={t('caseStudy.cjm.barrier')} columns={item.interviewColumns} field="barrier" />
                  <InterviewRow label={t('caseStudy.cjm.emotion')} columns={item.interviewColumns} field="emotion" emoji />
                  <InterviewRow label={t('caseStudy.cjm.quote')} columns={item.interviewColumns} field="quote" quote t={t} />
                  <InterviewRow label={t('caseStudy.cjm.context')} columns={item.interviewColumns} field="space" />
                  <InterviewRow label={t('caseStudy.cjm.driver')} columns={item.interviewColumns} field="driver" />
                  <InterviewRow label={t('caseStudy.cjm.improvement')} columns={item.interviewColumns} field="improvement" />
                </tbody>
              </table>
            </div>
          </>
        )}

        {item.problemPills && (
          <>
            <h3 className="report-h3">{t('caseStudy.userProblem')}</h3>
            <div className="pills-card">
              {item.problemPills.map((p) => (
                <span key={p} className="report-pill">{p}</span>
              ))}
            </div>
          </>
        )}

        {item.competitorBullets && (
          <>
            <h3 className="report-h3">{t('caseStudy.benchmarking')}</h3>
            <div className="benchmark-grid">
              <ul className="report-list">
                {item.competitorBullets.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <ImageSlot label={t('caseStudy.benchmarking')} size="900×600" className="benchmark-image" />
            </div>
          </>
        )}

        {item.hypothesis && <div className="hypothesis">{item.hypothesis}</div>}
      </section>

      {galleryImages.length > 0 || item.solution ? (
        <section className="wrap report-section">
          <h2 className="report-h2">{t('caseStudy.prototype')}</h2>
          <div className="prototype-box">
            <ImageSlot src={galleryImages[0]} label="Mockup 1" size="700×900" className="prototype-image tilt-left" />
            <ImageSlot src={galleryImages[1]} label="Mockup 2" size="700×900" className="prototype-image tilt-right" />
          </div>
          <div className="final-box">
            <ImageSlot src={galleryImages[2]} label={`${t('caseStudy.screenOf')} — ${item.company}`} size="1000×1300" className="final-image" />
          </div>
        </section>
      ) : null}

      <section className="wrap report-section">
        <h2 className="report-h2">{t('caseStudy.results')}</h2>
        <div className="result-card">
          <p><strong>{t('caseStudy.validation')}:</strong> {item.validation}</p>
          <p><strong>{t('caseStudy.result')}:</strong> {item.result}</p>
        </div>
      </section>

      <nav className="wrap case-next" aria-label={t('caseStudy.otherCases')}>
        <Link to="/" className="btn btn-ghost">{t('caseStudy.backToList')}</Link>
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

function InterviewRow({ label, columns, field, render, emoji, quote, t }) {
  return (
    <tr>
      <td className="row-label-cell">{label}</td>
      {columns.map((c, i) => (
        <td key={i} className={emoji ? 'cell-emoji' : quote ? 'cell-quote' : ''}>
          {render ? render() : quote ? `${t('caseStudy.quoteOpen')}${c[field]}${t('caseStudy.quoteClose')}` : c[field]}
        </td>
      ))}
    </tr>
  )
}
