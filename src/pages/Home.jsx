import caseStudies from '../data/caseStudies.js'
import CaseCard from '../components/CaseCard.jsx'
import './home.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="eyebrow">UX/UI дизайнер</p>
          <h1>
            Интерфейсы,<br />
            которые работают<br />
            на ваш <span className="hero-highlight">продукт</span>
          </h1>
          <p className="hero-sub">
            Проектирую FinTech и EdTech продукты — от исследования до финальных
            экранов — и объясняю каждое решение метриками, а не вкусом.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">Смотреть кейсы →</a>
            <a href="#contact" className="btn btn-ghost">Связаться</a>
          </div>
        </div>
      </section>

      <section id="work" className="wrap section">
        <div className="section-head">
          <h2>Избранные кейсы</h2>
          <p className="eyebrow">{caseStudies.length} проекта</p>
        </div>
        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i} />
          ))}
        </div>
      </section>

      <section id="about" className="wrap section about">
        <div className="section-head">
          <h2>Обо мне</h2>
        </div>
        <div className="about-grid">
          <p>
            Продуктовый дизайнер с фокусом на понятные пользователю решения и измеримый
            эффект для бизнеса. Работаю на стыке исследования, UX и UI — от гипотезы
            до финальных экранов в Figma.
          </p>
          <div className="about-skills">
            {['Figma, FigJam', 'User Research, CJM', 'Дизайн-системы', 'Юзабилити-тестирование', 'A/B тесты, метрики продукта'].map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
