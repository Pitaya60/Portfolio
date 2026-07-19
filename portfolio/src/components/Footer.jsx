import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-dots" aria-hidden="true" />

      <div className="wrap footer-bottom">
        <div className="footer-col">
          <p className="footer-col-title">Навигация</p>
          <a href="/#work">Кейсы</a>
          <Link to="/about">Обо мне</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Резюме</a>
          <a href="#contact">Контакт</a>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Соцсети</p>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
        </div>
        <p className="footer-copy">© 2026 Абдулла Камилла. Все права защищены.</p>
      </div>
    </footer>
  )
}
