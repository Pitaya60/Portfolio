import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: '120px 24px', textAlign: 'center' }}>
      <p className="eyebrow">404</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, margin: '12px 0 24px' }}>
        Такой страницы нет
      </h1>
      <Link to="/" className="btn btn-primary">На главную</Link>
    </div>
  )
}
