import { useEffect, useRef, useState } from 'react'
import contacts from '../data/contacts.js'
import { useContact } from '../context/ContactContext.jsx'
import './contactModal.css'

/* ── Иконки ────────────────────────────────────────────────── */

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  )
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11v2a1 1 0 0 0 1 1h2.6L14 19V5L6.6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M17.5 8.5a5 5 0 0 1 0 7" />
      <path d="M7 14.5V19a1.5 1.5 0 0 0 3 0v-2.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

/* ── Модальное окно ────────────────────────────────────────── */

const channels = [
  {
    key: 'telegram',
    icon: <TelegramIcon />,
    title: 'Написать в Telegram',
    desc: 'Личные сообщения - здесь отвечаю быстрее всего',
    href: contacts.telegram,
    meta: contacts.telegramLabel,
    tone: 'tg',
    primary: true,
  },
  {
    key: 'channel',
    icon: <MegaphoneIcon />,
    title: 'Мой Telegram-канал',
    desc: 'Разбираю решения, делюсь работой',
    href: contacts.telegramChannel,
    meta: contacts.telegramChannelLabel,
    tone: 'tg',
  },
  {
    key: 'linkedin',
    icon: <LinkedinIcon />,
    title: 'Мой LinkedIn',
    desc: 'Опыт, рекомендации и вакансии',
    href: contacts.linkedin,
    meta: 'linkedin.com',
    tone: 'li',
  },
]

export default function ContactModal() {
  const { isOpen, closeContact } = useContact()
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef(null)
  const firstLinkRef = useRef(null)

  /* Esc, блокировка прокрутки фона, фокус на первом действии */
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeContact()
        return
      }
      if (e.key !== 'Tab') return

      // Простая ловушка фокуса внутри окна
      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      )
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('is-locked')
    const timer = setTimeout(() => firstLinkRef.current?.focus(), 60)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('is-locked')
      clearTimeout(timer)
      setCopied(false)
    }
  }, [isOpen, closeContact])

  if (!isOpen) return null

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${contacts.email}`
    }
  }

  return (
    <div
      className="cm-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeContact()
      }}
    >
      <div
        className="cm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cm-title"
        ref={dialogRef}
      >
        <button className="cm-close" onClick={closeContact} aria-label="Закрыть окно">
          <CloseIcon />
        </button>

        <div className="cm-head">
          <p className="eyebrow eyebrow-live">Открыта к предложениям</p>
          <h2 id="cm-title">Давайте познакомимся</h2>
          <p className="cm-sub">
            Выберите удобный канал — {contacts.replyTime.toLowerCase()}.
          </p>
        </div>

        <div className="cm-list">
          {channels.map((c, i) => (
            <a
              key={c.key}
              ref={i === 0 ? firstLinkRef : null}
              className={`cm-row ${c.primary ? 'cm-row-primary' : ''}`}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              onClick={closeContact}
            >
              <span className={`cm-icon cm-icon-${c.tone}`}>{c.icon}</span>
              <span className="cm-row-text">
                <span className="cm-row-title">{c.title}</span>
                <span className="cm-row-desc">{c.desc}</span>
              </span>
              <span className="cm-row-side">
                <span className="cm-row-meta">{c.meta}</span>
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

        <div className="cm-foot">
          <span className="cm-icon cm-icon-mail"><MailIcon /></span>
          <span className="cm-row-text">
            <span className="cm-row-title">Почта</span>
            <span className="cm-row-desc">{contacts.email}</span>
          </span>
          <button className="btn btn-ghost btn-sm cm-copy" onClick={copyEmail}>
            {copied ? 'Скопировано' : 'Копировать'}
          </button>
        </div>
      </div>
    </div>
  )
}
