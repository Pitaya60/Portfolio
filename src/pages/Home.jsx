import { getCaseStudies } from '../data/caseStudies.js'
import { getContacts } from '../data/contacts.js'
import CaseCard from '../components/CaseCard.jsx'
import { useContact } from '../context/ContactContext.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './home.css'

export default function Home() {
  const { openContact } = useContact()
  const { lang, t } = useLang()
  const contacts = getContacts(lang)
  const caseStudies = getCaseStudies(lang)

  return (
    <>
      {/* ── Первый экран ─────────────────────────────── */}
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="eyebrow eyebrow-live">{t('common.openToWork')}</p>

          <h1 className="hero-title">
            {t('home.heroTitleLine1')}
            <br className="hero-br" /> {t('home.heroTitleLine2')}
          </h1>

          <p className="hero-lead">{t('home.heroLead')}</p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">{t('home.heroCta')}</a>
          </div>
        </div>
      </section>

      {/* ── Кейсы ────────────────────────────────────── */}
      <section id="work" className="wrap section">
        <div className="section-head">
          <div>
            <h2>{t('home.casesTitle')}</h2>
          </div>
        </div>

        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i + 1} total={caseStudies.length} />
          ))}
        </div>
      </section>

      {/* ── Призыв к действию ────────────────────────── */}
      <section className="wrap section-tight">
        <div className="home-cta">
          <div>
            <h2>{t('home.ctaTitle')}</h2>
            <p>
              {t('home.ctaText')} {contacts.replyTimeInline}.
            </p>
          </div>
          <button className="btn btn-invert" onClick={openContact}>
            {t('common.contact')}
          </button>
        </div>
      </section>
    </>
  )
}
