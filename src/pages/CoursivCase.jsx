import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot.jsx'
import './coursivCase.css'

const analysisRows = [
  {
    note: 'Уточнить, какие именно навыки пользователь получит за 4 недели на основе его ответов в квизе.',
    reason: 'Пользователь хочет понять результат, а не просто потратить 4 недели.',
  },
  {
    note: 'Добавить содержательное описание курса рядом с ценами. Сделать скидку визуально заметной. Переписать кнопку.',
    reason: 'Нет понимания, за что платишь — только цена. Кнопка и таймер воспринимаются как давление.',
  },
  {
    note: 'Обещание «1 минута» прохождения не соответствует действительности.',
    reason: 'Пользователь чувствует себя обманутым, если вдумчивое прохождение занимает 2+ минуты.',
  },
  {
    note: 'Критическая перегрузка: 23 вопроса подряд.',
    reason: 'Эмоциональная усталость и желание бросить анкету до конца.',
  },
  {
    note: '«Ага-момент» не даёт понимания, какие навыки я прокачаю.',
    reason: '«Проходить курс 4 недели ради чего?» — нет ощущения результата.',
  },
  {
    note: 'Несовпадающие цифры пользователей (600k → 100k → 600k).',
    reason: 'Разрушает доверие к платформе — выглядит как обман.',
  },
]

const interviewColumns = [
  {
    step: 'Нашёл Reels в Instagram',
    result: 'Заинтересоваться возможностью «стать AI-специалистом»',
    barrier: '—',
    emotion: '🙂',
    quote: 'Звучит круто, но... это точно реально?',
    space: 'Instagram, лента',
    driver: 'Хочет изменить жизнь, попробовать что-то новое',
    improvement: 'Добавить реальные отзывы, меньше пафоса',
  },
  {
    step: 'Зашёл на рекламу сайта',
    result: 'Убедиться, что это серьёзно и безопасно',
    barrier: 'Мало конкретики, нет лица бренда',
    emotion: '🤔',
    quote: 'Хочу понять, кто за этим стоит',
    space: 'Браузер',
    driver: 'Привлекает слово «персональный план»',
    improvement: 'Чёткое описание — кто мы, что получит пользователь, показать доверие',
  },
  {
    step: 'Начал проходить квиз',
    result: 'Прохождение квиза',
    barrier: '—',
    emotion: '🙂',
    quote: 'О, я пройду быстро — меньше минуты',
    space: '—',
    driver: 'Приятный дизайн',
    improvement: '—',
  },
  {
    step: 'Продолжает квиз',
    result: 'Подобрать себе курс / профессию',
    barrier: 'Много вопросов, не уверен, что уложится в 1 минуту',
    emotion: '😔',
    quote: 'Ой, как много вопросов, зачем их столько?',
    space: 'Страница квиза',
    driver: 'Любопытство, желание дойти до результата',
    improvement: 'Экран «это займёт 1–2 мин и поможет найти лучший путь» + прогресс',
  },
  {
    step: 'Видит «ага-момент» — 600k → 100k → 600k',
    result: 'Почувствовать, что она на верном пути',
    barrier: 'Несовпадение цифр подрывает доверие',
    emotion: '😕',
    quote: 'Подождите... сколько людей ТАМ на самом деле?',
    space: 'Квиз, результат',
    driver: 'Хочет быть частью большого сообщества',
    improvement: 'Использовать одну честную цифру и держать её стабильной',
  },
  {
    step: 'Ещё один «ага-момент», снова без объяснений',
    result: 'Всё ещё надеется, что в конце будет ценность',
    barrier: 'Усталость от постоянных обещаний',
    emotion: '😩',
    quote: 'Да сколько можно...',
    space: 'Квиз, результат',
    driver: 'Хочет быть частью большого сообщества',
    improvement: 'Уменьшить количество «ага-моментов»',
  },
]

const problemPills = [
  'Квиз перегружен',
  'Цифры не совпадают',
  'Интерфейс давит',
  'Результат квиза не связан с курсом',
  'Нет ощущения движения',
  'Используются манипуляции',
  'Непонятно, что я покупаю',
]

export default function CoursivCase() {
  return (
    <article className="coursiv-report">
      <header className="wrap report-header">
        <Link to="/" className="back-link">← Все кейсы</Link>
      </header>

      <section className="wrap">
        <div className="report-hero">
          <div className="report-hero-text">
            <p className="report-hero-eyebrow">Редизайн Selling page</p>
            <p className="report-hero-logo">Coursiv</p>
          </div>
          <ImageSlot
            label="Коллаж: мобильные экраны + селлинг-страница Coursiv"
            size="1200×760"
            className="report-hero-image"
          />
        </div>
      </section>

      <section className="wrap report-section">
        <h2 className="report-h2">Summary</h2>
        <div className="summary-grid">
          <div className="summary-stack">
            <SummaryCard number="01" title="Что такое Coursiv?" variant="light">
              Coursiv — инновационная учебная платформа, которая помогает людям овладеть
              необходимыми цифровыми навыками и использовать возможности AI.
            </SummaryCard>
            <SummaryCard number="02" title="Design challenge" variant="dark">
              Определить ключевые моменты для улучшения качества страницы продаж.
            </SummaryCard>
          </div>
          <ImageSlot
            label="Коллаж: экраны мобильного приложения Coursiv"
            size="900×900"
            className="summary-image"
          />
        </div>

        <SummaryCard number="03" title="Решение" variant="light" wide>
          <ul className="report-list">
            <li>Переработан hero-блок: конкретная выгода вместо общих слов.</li>
            <li>Один основной CTA вместо нескольких конкурирующих.</li>
            <li>Блок социального доказательства (отзывы, цифры) ближе к решению о покупке.</li>
            <li>Прозрачная структура тарифов с понятным сравнением.</li>
          </ul>
        </SummaryCard>
      </section>

      <section className="wrap report-section">
        <h2 className="report-h2">Research</h2>

        <h3 className="report-h3">Продуктовый анализ</h3>
        <p className="report-p">
          Я начала с глубокого изучения продукта Coursiv, чтобы понять его позиционирование,
          тон коммуникации и ценностное предложение. Мне было важно увидеть, как продукт
          сейчас доносит свою ценность до потенциальных пользователей.
        </p>

        <div className="report-table-wrap">
          <table className="report-table">
            <thead>
              <tr>
                <th className="col-num">№</th>
                <th>Что я заметила</th>
                <th>Почему это проблема</th>
              </tr>
            </thead>
            <tbody>
              {analysisRows.map((row, i) => (
                <tr key={i}>
                  <td className="col-num">{i + 1}</td>
                  <td>{row.note}</td>
                  <td>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="report-h3">User Interviews</h3>
        <p className="report-p">Попросила 2-х пользователей описать все свои впечатления о продукте.</p>

        <div className="report-table-wrap">
          <table className="interview-table">
            <thead>
              <tr>
                <th className="row-label-cell">Шаги</th>
                {interviewColumns.map((c, i) => (
                  <th key={i}>{c.step}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <InterviewRow label="Изображения" render={() => (
                <ImageSlot label="Скрин шага" size="240×260" tall />
              )} />
              <InterviewRow label="Ожидаемый результат" data={interviewColumns} field="result" />
              <InterviewRow label="Барьеры и их причины" data={interviewColumns} field="barrier" />
              <InterviewRow label="Эмоции" data={interviewColumns} field="emotion" emoji />
              <InterviewRow label="Цитаты" data={interviewColumns} field="quote" quote />
              <InterviewRow label="Пространство и его особенности" data={interviewColumns} field="space" />
              <InterviewRow label="Драйверы" data={interviewColumns} field="driver" />
              <InterviewRow label="Улучшения" data={interviewColumns} field="improvement" />
            </tbody>
          </table>
        </div>

        <h3 className="report-h3">Проблема пользователя</h3>
        <div className="pills-card">
          {problemPills.map((p, i) => (
            <span key={p} className={`report-pill ${i % 3 === 1 ? 'report-pill-dark' : ''}`}>{p}</span>
          ))}
        </div>

        <h3 className="report-h3">Competitor Benchmarking</h3>
        <div className="benchmark-grid">
          <ul className="report-list">
            <li>Собрала макеты конкурирующих образовательных платформ и сервисов с онлайн-курсами.</li>
            <li>Проанализировала, как они структурируют контент, используют социальные доказательства, призывы к действию (CTA) и выстраивают визуальную иерархию.</li>
            <li>На основе полученных инсайтов сформировала структуру макета новой продающей страницы.</li>
          </ul>
          <ImageSlot label="Скрин: сравнение рекламных страниц конкурентов" size="900×600" className="benchmark-image" />
        </div>
      </section>

      <section className="wrap report-section">
        <h2 className="report-h2">Prototype &amp; Solutions</h2>
        <p className="report-p">Дальше я собрала мокап из сайтов конкурентов, которые помогли сделать selling page.</p>

        <div className="prototype-box">
          <ImageSlot label="Мокап 1 — вариант hero-блока" size="700×900" className="prototype-image tilt-left" />
          <ImageSlot label="Мокап 2 — вариант блока доверия и тарифов" size="700×900" className="prototype-image tilt-right" />
        </div>

        <p className="report-p">В итоге из мокапов вышел редизайн selling-page.</p>

        <div className="final-box">
          <ImageSlot label="Финальный редизайн selling page Coursiv" size="1400×2400" className="final-image" />
        </div>
      </section>

      <section className="wrap report-section report-result">
        <h2 className="report-h2">Результат и выводы</h2>
        <div className="result-card">
          <p><strong>Ожидаемый эффект:</strong> рост конверсии за счёт более быстрого считывания ценности.</p>
          <p><strong>Следующий шаг:</strong> персонализация оффера по сегменту трафика.</p>
        </div>
      </section>

      <footer className="wrap case-next">
        <Link to="/" className="btn btn-primary">К списку кейсов</Link>
      </footer>
    </article>
  )
}

function SummaryCard({ number, title, children, variant, wide }) {
  return (
    <div className={`summary-card ${variant === 'dark' ? 'summary-card-dark' : ''} ${wide ? 'summary-card-wide' : ''}`}>
      <span className="summary-badge">{number}</span>
      <h3 className="summary-title">{title}</h3>
      <div className="summary-body">{children}</div>
    </div>
  )
}

function InterviewRow({ label, data, field, render, emoji, quote }) {
  return (
    <tr>
      <td className="row-label-cell">{label}</td>
      {data
        ? data.map((c, i) => (
            <td key={i} className={emoji ? 'cell-emoji' : quote ? 'cell-quote' : ''}>
              {quote ? `«${c[field]}»` : c[field]}
            </td>
          ))
        : interviewColumns.map((_, i) => <td key={i}>{render()}</td>)}
    </tr>
  )
}
