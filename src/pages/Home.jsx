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
            UX-UI designer,
            <br className="hero-br" /> build digital products
          </h1>

          <p className="hero-lead">
            Люблю решать сложные кейсы.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">Смотреть кейсы</a>
          </div>
        </div>
      </section>

      {/* ── Кейсы ────────────────────────────────────── */}
      <section id="work" className="wrap section">
        <div className="section-head">
          <div>
            <h2>Кейсы</h2>
          </div>
        </div>

        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i + 1} total={caseStudies.length} />
          ))}
        </div>
      </section>

      {/* ── Призыв к действию ────────────────────────── */}
      <section className="wrap section-tight">
        <div className="home-cta">
          <div>
            <h2>Ищете дизайнера в команду?</h2>
            <p>
              Расскажите о продукте и задаче, и решим вместе и, 
              {' '}{contacts.replyTime.toLowerCase()}.
            </p>
          </div>
          <button className="btn btn-invert" onClick={openContact}>
            Связаться
          </button>
        </div>
      </section>
    </>
  )
}
