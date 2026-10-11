import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getContacts } from '../data/contacts.js'
import { useContact } from '../context/ContactContext.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import LangSwitch from './LangSwitch.jsx'
import './nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openContact } = useContact()
  const { pathname } = useLocation()
  const { lang, t } = useLang()
  const contacts = getContacts(lang)

  /* Меню закрывается при переходе на другую страницу */
  useEffect(() => { setOpen(false) }, [pathname])

  /* Тень появляется только когда страница прокручена */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Фон не скроллится под открытым меню */
  useEffect(() => {
    if (!open) return
    document.body.classList.add('is-locked')
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  const handleWrite = () => {
    close()
    openContact()
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={close}>
            <img
              className="nav-logo-mark"
              src="/case-images/avatar.jpg"
              alt=""
              aria-hidden="true"
            />
            <span className="nav-logo-text">
              <span className="nav-logo-name">{contacts.name}</span>
              <span className="nav-logo-role">{contacts.role}</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label={t('nav.main')}>
            <a href="/#work">{t('nav.cases')}</a>
            <Link to="/about">{t('nav.about')}</Link>
            <a href={contacts.resume} target="_blank" rel="noreferrer">{t('nav.resume')}</a>
            <LangSwitch />
            <button className="btn btn-primary btn-sm" onClick={openContact}>
              {t('common.write')}
            </button>
          </nav>

          <div className="nav-mobile-controls">
            <LangSwitch compact />
            <button
              className={`nav-burger ${open ? 'is-open' : ''}`}
              aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-scrim ${open ? 'is-visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={`nav-mobile ${open ? 'is-open' : ''}`}
        aria-label={t('nav.mobile')}
        aria-hidden={!open}
      >
        <a href="/#work" onClick={close}>{t('nav.cases')}</a>
        <Link to="/about" onClick={close}>{t('nav.about')}</Link>
        <a href={contacts.resume} target="_blank" rel="noreferrer" onClick={close}>
          {t('nav.resume')}
        </a>

        <button className="btn btn-primary nav-mobile-cta" onClick={handleWrite}>
          {t('common.write')}
        </button>
      </nav>
    </>
  )
}
