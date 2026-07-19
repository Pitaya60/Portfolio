import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="wrap section" style={{ textAlign: 'center', maxWidth: 560 }}>
      <p className="eyebrow" style={{ marginBottom: 20 }}>Ошибка 404</p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(24px, 4vw, 34px)',
          letterSpacing: '-0.02em',
          margin: '0 0 12px',
        }}
      >
        Такой страницы нет
      </h1>
      <p style={{ color: 'var(--ink-soft)', margin: '0 0 28px' }}>
        Возможно, ссылка устарела. Кейсы собраны на главной.
      </p>
      <Link to="/" className="btn btn-primary">На главную</Link>
    </div>
  )
}
