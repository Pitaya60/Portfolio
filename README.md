# Портфолио — Абдулла Камилла

React + Vite. Статический сайт, разворачивается на Vercel одной кнопкой.

## Запуск

```bash
npm install
npm run dev      # локально, http://localhost:5173
npm run build    # сборка в dist/
```

## Что заполнить в первую очередь

### 1. Ссылки на соцсети — `src/data/contacts.js`

Сейчас там заглушки. Замените:

| Поле | Что вписать |
|---|---|
| `telegram` | ссылка на ваш личный аккаунт, например `https://t.me/kamilla` |
| `telegramLabel` | как показывать: `@kamilla` |
| `telegramChannel` | ссылка на канал/группу |
| `telegramChannelLabel` | `@channel` |
| `linkedin` | ссылка на профиль |

Эти значения подставляются в шапку, подвал и модальное окно «Написать» —
править нужно только один файл.

### 2. Резюме

Положите `resume.pdf` в папку `public/` — тогда ссылка «Резюме» заработает.

### 3. Фото

На странице «Обо мне» стоит заглушка. Замените блок `.about-photo`
в `src/pages/About.jsx` на `<img src="/photo.jpg" alt="Абдулла Камилла" />`,
а сам файл положите в `public/`.

### 4. Картинки кейсов

В `src/data/caseStudies.js` у каждого кейса есть:

- `coverImage` — обложка для карточки на главной (16:9, ~1200×675)
- `images.cover[0]` — большая обложка внутри кейса (~1400×900)

Пока они пустые, показываются заглушки с указанием нужного размера.
Файлы кладите в `public/cases/` и указывайте путь как `/cases/qmed-cover.png`.

## Структура

```
src/
  components/    Nav, Footer, CaseCard, ContactModal, ImageSlot
  context/       ContactContext — состояние модального окна
  data/          contacts.js (контакты), caseStudies.js (кейсы)
  pages/         Home, About, CaseStudy, CustomCaseStudy, NotFound
  styles/        global.css — токены: цвета, отступы, шрифты, кнопки
```

Все размеры и цвета заданы переменными в `src/styles/global.css`.
Чтобы поменять акцентный цвет по всему сайту, достаточно править `--accent`.

## Типы блоков в кейсах

Кейсы собираются из блоков в `customSections`. Доступные `type`:

`text`, `cards`, `twoColumn`, `checklist`, `pills`, `combo`, `imageText`,
`timeline`, `screens`, `compare`, `table`, `cjm`, `note`, `conclusion`.

Каждый блок автоматически получает порядковый номер и заголовок с линией —
структура кейса читается как отчёт.
