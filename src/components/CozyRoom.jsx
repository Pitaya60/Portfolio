import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { buildArt } from '../game/roomArt.js'
import { createState, update, doAction, getHint, W, H } from '../game/roomEngine.js'
import { drawFrame } from '../game/roomRender.js'
import './cozyRoom.css'

/* e.code не зависит от раскладки — WASD работает и с русской */
const KEYMAP = {
  ArrowUp: 'up', KeyW: 'up',
  ArrowDown: 'down', KeyS: 'down',
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
}
const ACTION_KEYS = new Set(['KeyE', 'Space', 'Enter'])

const PAD = [
  { dir: 'up', icon: '▲' },
  { dir: 'left', icon: '◀' },
  { dir: 'right', icon: '▶' },
  { dir: 'down', icon: '▼' },
]

export default function CozyRoom() {
  const { t } = useLang()
  const tRef = useRef(t)
  const stageRef = useRef(null)
  const canvasRef = useRef(null)
  const keys = useRef({ up: false, down: false, left: false, right: false })
  const pad = useRef({ up: false, down: false, left: false, right: false })
  const actRef = useRef(() => {})

  const [focused, setFocused] = useState(false)
  const [hint, setHint] = useState(null)
  const [toast, setToast] = useState(null)
  const [coarse, setCoarse] = useState(false)

  useEffect(() => { tRef.current = t }, [t])

  useEffect(() => {
    setCoarse(window.matchMedia?.('(pointer: coarse)').matches ?? false)
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    const art = buildArt()
    const S = createState()
    actRef.current = () => doAction(S)

    let raf = 0
    let last = 0
    let visible = true
    let lastHint = null
    let toastId = 0
    let toastTimer = 0

    const showToast = (key) => {
      toastId += 1
      setToast({ key, id: toastId })
      window.clearTimeout(toastTimer)
      toastTimer = window.setTimeout(() => setToast(null), 2200)
    }

    const frame = (ts) => {
      raf = 0
      if (!visible) return
      const dt = last ? Math.min(0.05, (ts - last) / 1000) : 0
      last = ts

      const k = keys.current
      const d = pad.current
      const inp = {
        x: (k.right || d.right ? 1 : 0) - (k.left || d.left ? 1 : 0),
        y: (k.down || d.down ? 1 : 0) - (k.up || d.up ? 1 : 0),
      }

      update(S, inp, dt)
      drawFrame(ctx, art, S)

      const h = getHint(S)
      if (h !== lastHint) {
        lastHint = h
        setHint(h)
      }
      while (S.events.length) showToast(S.events.shift())

      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (!raf) {
        last = 0
        raf = requestAnimationFrame(frame)
      }
    }

    /* Не тратим ресурсы, пока комната за пределами экрана */
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) start()
      },
      { threshold: 0.05 }
    )
    io.observe(stage)
    start()

    const onKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const dir = KEYMAP[e.code]
      if (dir) {
        keys.current[dir] = true
        e.preventDefault()
      } else if (ACTION_KEYS.has(e.code)) {
        e.preventDefault()
        if (!e.repeat) actRef.current()
      }
    }
    const onKeyUp = (e) => {
      const dir = KEYMAP[e.code]
      if (dir) keys.current[dir] = false
    }
    const clearKeys = () => {
      Object.keys(keys.current).forEach((k) => { keys.current[k] = false })
    }

    stage.addEventListener('keydown', onKeyDown)
    stage.addEventListener('keyup', onKeyUp)
    stage.addEventListener('blur', clearKeys)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(toastTimer)
      io.disconnect()
      stage.removeEventListener('keydown', onKeyDown)
      stage.removeEventListener('keyup', onKeyUp)
      stage.removeEventListener('blur', clearKeys)
      actRef.current = () => {}
    }
  }, [])

  const holdPad = (dir) => ({
    onPointerDown: (e) => {
      e.preventDefault()
      e.currentTarget.setPointerCapture?.(e.pointerId)
      pad.current[dir] = true
    },
    onPointerUp: () => { pad.current[dir] = false },
    onPointerCancel: () => { pad.current[dir] = false },
    onLostPointerCapture: () => { pad.current[dir] = false },
  })

  const labelKey = { up: 'room.up', down: 'room.down', left: 'room.left', right: 'room.right' }

  return (
    <div className="room">
      <div
        ref={stageRef}
        className={`room-stage ${focused ? 'is-focused' : ''}`}
        tabIndex={0}
        role="application"
        aria-label={t('room.aria')}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)
        }}
        onPointerDown={() => stageRef.current?.focus({ preventScroll: true })}
      >
        <canvas ref={canvasRef} width={W} height={H} className="room-canvas" aria-hidden="true" />

        {!focused && !coarse && (
          <div className="room-start">
            <span>{t('room.play')}</span>
          </div>
        )}

        {toast && (
          <div className="room-toast" key={toast.id} role="status">
            {t(`room.toast.${toast.key}`)}
          </div>
        )}

        {hint && (
          <button
            type="button"
            tabIndex={-1}
            className="room-hint"
            onPointerDown={(e) => e.preventDefault()}
            onClick={() => actRef.current()}
          >
            {!coarse && <kbd>E</kbd>}
            <span>{t(`room.hint.${hint}`)}</span>
          </button>
        )}
      </div>

      <div className="room-ui">
        <p className="room-keys">{t('room.keys')}</p>

        <div className="room-pad" aria-label={t('room.pad')}>
          <div className="room-pad-dirs">
            {PAD.map(({ dir, icon }) => (
              <button
                key={dir}
                type="button"
                className={`room-pad-btn pad-${dir}`}
                aria-label={t(labelKey[dir])}
                {...holdPad(dir)}
              >
                {icon}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="room-pad-act"
            onClick={() => actRef.current()}
          >
            {t('room.action')}
          </button>
        </div>
      </div>
    </div>
  )
}
