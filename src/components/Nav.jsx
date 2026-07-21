import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import contacts from '../data/contacts.js'
import { useContact } from '../context/ContactContext.jsx'
import './nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openContact } = useContact()
  const { pathname } = useLocation()

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
          <img className="nav-logo-mark"
          src="/case-images/avatar.jpg"
          alt=""
          aria-hidden="true"
          />
            <span className="nav-logo-text">
              <span className="nav-logo-name">{contacts.name}</span>
              <span className="nav-logo-role">{contacts.role}</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Основная навигация">
            <a href="/#work">Кейсы</a>
            <Link to="/about">Обо мне</Link>
            <a href={contacts.resume} target="_blank" rel="noreferrer">Резюме</a>
            <button className="btn btn-primary btn-sm" onClick={openContact}>
              Написать
            </button>
          </nav>

          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
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
        aria-label="Мобильная навигация"
        aria-hidden={!open}
      >
        <a href="/#work" onClick={close}>Кейсы</a>
        <Link to="/about" onClick={close}>Обо мне</Link>
        <a href={contacts.resume} target="_blank" rel="noreferrer" onClick={close}>
          Резюме
        </a>
        <button className="btn btn-primary nav-mobile-cta" onClick={handleWrite}>
          Написать
        </button>
      </nav>
    </>
  )
}
