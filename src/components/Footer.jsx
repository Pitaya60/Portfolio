import { Link } from 'react-router-dom'
import contacts from '../data/contacts.js'
import { useContact } from '../context/ContactContext.jsx'
import './footer.css'

export default function Footer() {
  const { openContact } = useContact()
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
            Написать мне
          </button>
        </div>

        <nav className="footer-nav" aria-label="Навигация в подвале">
          <p className="footer-col-title">Разделы</p>
          <a href="/#work">Кейсы</a>
          <Link to="/about">Обо мне</Link>
          <a href={contacts.resume} target="_blank" rel="noreferrer">Резюме</a>
        </nav>

        <div className="footer-nav">
          <p className="footer-col-title">Связь</p>
          <a href={contacts.telegram} target="_blank" rel="noreferrer">Telegram</a>
          <a href={contacts.telegramChannel} target="_blank" rel="noreferrer">
            Telegram-канал
          </a>
          <a href={contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="wrap footer-base">
        <p>© {year} {contacts.name}</p>
        <p>Портфолио собрано на React</p>
      </div>
    </footer>
  )
}
