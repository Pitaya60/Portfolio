import { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          Абдулла Камилла<span className="nav-logo-dot">.</span>
        </Link>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          <a href="/#work" onClick={() => setOpen(false)}>Кейсы</a>
          <Link to="/about" onClick={() => setOpen(false)}>Обо мне</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Резюме</a>
          <a href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary nav-cta">
            Написать
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
