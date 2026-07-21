import { Link } from 'react-router-dom'
import { getContacts } from '../data/contacts.js'
import { useContact } from '../context/ContactContext.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './footer.css'

export default function Footer() {
  const { openContact } = useContact()
  const { lang, t } = useLang()
  const contacts = getContacts(lang)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-lead">
          <p className="footer-name">{contacts.name}</p>
          <p className="footer-tagline">
            {contacts.role} · {contacts.location}
          </p>
          <button className="btn btn-invert footer-cta" onClick={openContact}>
            {t('common.writeMe')}
          </button>
        </div>

        <nav className="footer-nav" aria-label={t('footer.nav')}>
          <p className="footer-col-title">{t('footer.sections')}</p>
          <a href="/#work">{t('nav.cases')}</a>
          <Link to="/about">{t('nav.about')}</Link>
          <a href={contacts.resume} target="_blank" rel="noreferrer">{t('nav.resume')}</a>
        </nav>

        <div className="footer-nav">
          <p className="footer-col-title">{t('footer.contactCol')}</p>
          <a href={contacts.telegram} target="_blank" rel="noreferrer">
            {t('footer.telegram')}
          </a>
          <a href={contacts.telegramChannel} target="_blank" rel="noreferrer">
            {t('footer.telegramChannel')}
          </a>
          <a href={contacts.linkedin} target="_blank" rel="noreferrer">
            {t('footer.linkedin')}
          </a>
        </div>
      </div>

      <div className="wrap footer-base">
        <p>© {year} {contacts.name}</p>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  )
}
