import caseStudies from '../data/caseStudies.js'
import contacts from '../data/contacts.js'
import CaseCard from '../components/CaseCard.jsx'
import { useContact } from '../context/ContactContext.jsx'
import './home.css'

const facts = [
  { value: '3 года', label: 'в продуктовом дизайне' },
  { value: '4 индустрии', label: 'MedTech, FinTech, EdTech, AI' },
  { value: '40 млн ₸', label: 'грант продукту, над которым работала' },
]

const process = [
  {
    title: 'Разбираюсь в предметной области',
    text: 'Читаю документацию, говорю с командой и врачами, финансистами, методистами — теми, кто знает продукт изнутри.',
  },
  {
    title: 'Нахожу, где ломается сценарий',
    text: 'Интервью, анализ конкурентов и разбор текущего интерфейса. Формулирую проблему через барьеры пользователя, а не через «некрасиво».',
  },
  {
    title: 'Проектирую и проверяю',
    text: 'Схемы сценариев, вайрфреймы, прототип. Отдельно продумываю пустые состояния, ошибки и edge cases.',
  },
  {
    title: 'Довожу до релиза',
    text: 'Собираю UI-кит, отдаю макеты разработке и остаюсь на связи до того момента, когда экран работает как задумано.',
  },
]

export default function Home() {
  const { openContact } = useContact()

  return (
    <>
      {/* ── Первый экран ─────────────────────────────── */}
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="eyebrow eyebrow-live">Открыта к предложениям</p>

          <h1 className="hero-title">
            Проектирую интерфейсы для медицины,
            <br className="hero-br" /> финансов и образования
          </h1>

          <p className="hero-lead">
            {contacts.name} — {contacts.role}. Веду продукт от исследования
            и пользовательских сценариев до дизайн-системы и передачи в разработку.
            Люблю сложные многошаговые флоу, где важны роли, состояния и edge cases.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">Смотреть кейсы</a>
            <button className="btn btn-ghost" onClick={openContact}>Написать</button>
          </div>

          <dl className="hero-facts">
            {facts.map((f) => (
              <div className="hero-fact" key={f.value}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Кейсы ────────────────────────────────────── */}
      <section id="work" className="wrap section">
        <div className="section-head">
          <div>
            <p className="label">Избранное</p>
            <h2>Кейсы</h2>
          </div>
          <p>
            Три проекта, где видно весь путь: от постановки задачи и исследования
            до финальных экранов и результата.
          </p>
        </div>

        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i + 1} total={caseStudies.length} />
          ))}
        </div>
      </section>

      {/* ── Процесс ──────────────────────────────────── */}
      <section className="wrap section-tight process-section">
        <div className="section-head">
          <div>
            <p className="label">Метод</p>
            <h2>Как я работаю</h2>
          </div>
          <p>Одинаковый путь на каждом проекте — меняется только предметная область.</p>
        </div>

        <ol className="process-list">
          {process.map((step, i) => (
            <li className="process-step" key={step.title}>
              <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Призыв к действию ────────────────────────── */}
      <section className="wrap section-tight">
        <div className="home-cta">
          <div>
            <h2>Ищете дизайнера в команду?</h2>
            <p>
              Расскажите о продукте и задаче — отвечу, чем могу быть полезна.
              {' '}{contacts.replyTime.toLowerCase()}.
            </p>
          </div>
          <button className="btn btn-invert" onClick={openContact}>
            Выбрать способ связи
          </button>
        </div>
      </section>
    </>
  )
}
