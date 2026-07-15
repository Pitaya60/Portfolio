import './about.css'

export default function About() {
  return (
    <article className="about-page">
      <header className="wrap about-header">
        <p className="eyebrow">Обо мне</p>
        <h1>Продуктовый дизайнер, который опирается на исследования и метрики</h1>
        <p className="about-lead">
          Проектирую цифровые продукты в FinTech, EdTech и MedTech — от гипотезы
          и исследования до финальных экранов в Figma. Работаю в команде с
          продактами, аналитиками и разработкой, довожу решения до релиза и
          проверяю эффект метриками.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
          Скачать резюме
        </a>
      </header>

      <section className="wrap about-section">
        <h2>Чем занимаюсь</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Research</h3>
            <p>Интервью, CJM, конкурентный и эвристический анализ, синтез гипотез.</p>
          </div>
          <div className="about-card">
            <h3>UX</h3>
            <p>Прототипирование, юзабилити-тестирование, проектирование потоков.</p>
          </div>
          <div className="about-card">
            <h3>UI</h3>
            <p>Дизайн-системы, визуальный дизайн, адаптивная вёрстка в Figma.</p>
          </div>
          <div className="about-card">
            <h3>Метрики</h3>
            <p>A/B тесты, продуктовые метрики, обоснование решений цифрами.</p>
          </div>
        </div>
      </section>

      <section className="wrap about-section">
        <h2>Инструменты</h2>
        <div className="about-tags">
          {['Figma', 'FigJam', 'Maze', 'Miro', 'Notion', 'Amplitude'].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </section>
    </article>
  )
}
