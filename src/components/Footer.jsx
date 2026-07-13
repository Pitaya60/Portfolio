import './footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-dots" aria-hidden="true" />

      <div className="wrap footer-top">
        <p className="eyebrow footer-badge">Контакты</p>
        <h2 className="footer-title">
          Готовы обсудить<br />ваш проект?
        </h2>
        <p className="footer-sub">
          Напишите — отвечу в течение 24 часов и предложу, как решить вашу задачу.
        </p>
        <a href="mailto:hello@example.com" className="btn btn-primary">
          Написать →
        </a>
      </div>

      <div className="wrap footer-wordmark">
        Abdulla<span>Camilla</span>
      </div>

      <div className="wrap footer-bottom">
        <div className="footer-col">
          <p className="footer-col-title">Навигация</p>
          <a href="/#work">Кейсы</a>
          <a href="/#about">Обо мне</a>
          <a href="#contact">Контакт</a>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Соцсети</p>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
          <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
        </div>
        <p className="footer-copy">© 2026 Aigerim Nur. Все права защищены.</p>
      </div>
    </footer>
  )
}
