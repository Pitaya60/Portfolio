/* Логика мини-игры «Уютная комната». Здесь нет ни DOM, ни canvas —
   только состояние и правила, поэтому её легко тестировать отдельно. */

import { SCENES as HOUSE } from './scenes.js'

export const W = 320
export const H = 180
export const FADE = 0.35 // половина перехода между помещениями, сек

/* Что нельзя пересекать: прямоугольники «следа» мебели на полу */
export const BLOCKS = [
  { id: 'bed', x: 140, y: 70, w: 80, h: 38 },
  { id: 'dresser', x: 74, y: 66, w: 44, h: 18 },
  { id: 'nightstand', x: 232, y: 66, w: 30, h: 18 },
  { id: 'tree', x: 6, y: 90, w: 44, h: 10 },
  { id: 'plant', x: 105, y: 142, w: 13, h: 10 },
  { id: 'table', x: 20, y: 128, w: 40, h: 20 },
  { id: 'chair', x: 232, y: 130, w: 30, h: 16 },
  { id: 'lamp', x: 9, y: 168, w: 10, h: 8 },
  { id: 'plant2', x: 262, y: 166, w: 12, h: 10 },
]

/* Все помещения. Спальня — особая (кровать, кресло, кот), остальные из scenes.js */
export const SCENES = {
  bedroom: {
    minY: 72,
    blocks: BLOCKS,
    props: [],
    spots: [],
    exits: [
      { zone: { x: 264, y: 72, w: 46, h: 30 }, hint: 'down', to: 'living', at: { x: 282, y: 94 } },
    ],
  },
  ...HOUSE,
}

/* Места, откуда можно взаимодействовать (по ногам героини) */
const BED_ZONE = { x: 148, y: 111, w: 64, h: 16 }
const CHAIR_ZONE = { x: 230, y: 147, w: 34, h: 16 }

export const BED_WAKE = { x: 180, y: 116 }
export const CHAIR_SEAT = { x: 247, y: 141 }
const CHAIR_STAND = { x: 247, y: 151 }
const CHAIR_SEAT_DEF = { x: 247, y: 141, dir: 'down', stand: CHAIR_STAND }

const TREE_TOP = { x: 28, y: 41 } // где кот спит на когтеточке
const TREE_FRONT = { x: 30, y: 108 } // куда он спрыгивает
const TREE_PET = { x: 28, y: 106 } // откуда его гладят, пока он наверху

const SPOTS = [
  { x: 96, y: 96 },
  { x: 85, y: 158 },
  { x: 120, y: 163 },
  { x: 176, y: 148 },
  { x: 205, y: 158 },
  { x: 236, y: 166 },
]
const LANE = 156

const SPEED = 54
const CAT_SPEED = 22
const PET_RADIUS = 22

const inRect = (p, z) => p.x >= z.x && p.x <= z.x + z.w && p.y >= z.y && p.y <= z.y + z.h
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)

export function createState(rng = Math.random) {
  return {
    rng,
    t: 0,
    scene: 'bedroom', // bedroom | living | kitchen | garden
    tr: null, // переход между помещениями
    seat: null,
    tv: false,
    mode: 'walk', // walk | sleep | sit
    sleepT: 0,
    dark: 0, // затемнение экрана (0..0.6)
    p: { x: 180, y: 132, dir: 'down', moving: false, anim: 0 },
    cat: {
      x: TREE_TOP.x,
      y: TREE_TOP.y,
      state: 'tree', // tree | idle | nap | walk
      timer: 9,
      path: [],
      face: 1,
      petT: 0,
      heartT: 0,
      anim: 0,
      goingToTree: false,
    },
    fx: [],
    zT: 0,
    events: [],
  }
}

/* Нога героини — маленький прямоугольник 8×3 */
export function blocked(x, y, scene = 'bedroom') {
  const sc = SCENES[scene]
  const l = x - 4
  const r = x + 4
  const t = y - 3
  const b = y
  if (l < 6 || r > W - 6 || b > H || b < sc.minY) return true
  return sc.blocks.some((k) => r > k.x && l < k.x + k.w && b > k.y && t < k.y + k.h)
}

function petPoint(cat) {
  return cat.state === 'tree' ? TREE_PET : cat
}

/* Что сейчас можно сделать: подсказка плюс объект действия */
function findTarget(S) {
  if (S.tr) return null
  if (S.mode === 'sleep') return S.sleepT > 1 ? { hint: 'wake' } : null
  if (S.mode === 'sit') return { hint: 'stand' }
  if (S.scene === 'bedroom') {
    if (dist(S.p, petPoint(S.cat)) < PET_RADIUS) return { hint: 'cat' }
    if (inRect(S.p, BED_ZONE)) return { hint: 'bed' }
    if (inRect(S.p, CHAIR_ZONE)) return { hint: 'chair' }
  }
  const sc = SCENES[S.scene]
  const spot = sc.spots.find((k) => inRect(S.p, k.zone))
  if (spot) return { hint: spot.hint, spot }
  const exit = sc.exits.find((k) => inRect(S.p, k.zone))
  return exit ? { hint: exit.hint, exit } : null
}

export function getHint(S) {
  return findTarget(S)?.hint ?? null
}

function sit(S, seat, event) {
  S.mode = 'sit'
  S.seat = seat
  S.p.x = seat.x
  S.p.y = seat.y
  S.p.dir = seat.dir
  S.p.moving = false
  if (event) S.events.push(event)
}

function standUp(S) {
  const seat = S.seat
  S.mode = 'walk'
  if (seat) {
    S.p.x = seat.stand.x
    S.p.y = seat.stand.y
  }
  S.p.dir = 'down'
  S.seat = null
  S.tv = false
}

function useSpot(S, k) {
  if (k.seat) {
    sit(S, k.seat, k.event)
    S.tv = !!k.tv
    return
  }
  if (k.event) S.events.push(k.event)
  if (k.fx) {
    const spread = k.spread ?? 12
    for (let i = 0; i < 6; i++) spawn(S, k.fx, k.at.x + (S.rng() - 0.5) * spread, k.at.y + S.rng() * 4)
  }
}

export function doAction(S) {
  const target = findTarget(S)
  if (!target) return
  const { hint, spot, exit } = target

  if (hint === 'wake') {
    wake(S)
  } else if (hint === 'stand') {
    standUp(S)
  } else if (hint === 'bed') {
    S.mode = 'sleep'
    S.sleepT = 0
    S.zT = 0
    S.p.dir = 'down'
    S.p.moving = false
    S.events.push('sleep')
  } else if (hint === 'chair' && !spot) {
    sit(S, CHAIR_SEAT_DEF, 'sit')
  } else if (hint === 'cat') {
    const c = S.cat
    c.petT = 2.4
    c.heartT = 0
    const to = petPoint(c)
    const dx = c.x - S.p.x
    if (Math.abs(S.p.y - to.y) > Math.abs(dx)) S.p.dir = to.y < S.p.y ? 'up' : 'down'
    else S.p.dir = dx < 0 ? 'left' : 'right'
    S.events.push('purr')
  } else if (spot) {
    useSpot(S, spot)
  } else if (exit) {
    S.tr = { t: 0, exit, switched: false }
    S.p.moving = false
    S.p.anim = 0
  }
}

/* 0..1 — насколько экран затемнён во время перехода */
export function fadeAmount(S) {
  if (!S.tr) return 0
  const k = S.tr.t / FADE
  return Math.max(0, Math.min(1, k < 1 ? k : 2 - k))
}

function wake(S) {
  S.mode = 'walk'
  S.p.x = BED_WAKE.x
  S.p.y = BED_WAKE.y
  S.p.dir = 'down'
  S.events.push('wake')
}

/* ── Кот ──────────────────────────────────────────────────── */
const inCorner = (p) => p.x < 66 && p.y < 130

function makePath(from, to) {
  const pts = []
  if (inCorner(from)) pts.push({ x: 72, y: from.y })
  const sx = pts.length ? 72 : from.x
  pts.push({ x: sx, y: LANE })
  if (inCorner(to)) {
    pts.push({ x: 72, y: LANE })
    pts.push({ x: 72, y: to.y })
    pts.push({ x: to.x, y: to.y })
  } else {
    pts.push({ x: to.x, y: LANE })
    pts.push({ x: to.x, y: to.y })
  }
  return pts
}

function chooseNext(S) {
  const c = S.cat
  const roll = S.rng()
  if (roll < 0.18) {
    c.path = makePath(c, TREE_FRONT)
    c.goingToTree = true
    c.state = 'walk'
  } else if (roll < 0.4) {
    c.state = 'nap'
    c.timer = 8 + S.rng() * 6
  } else {
    let spot = SPOTS[Math.floor(S.rng() * SPOTS.length)]
    if (dist(spot, c) < 12) spot = SPOTS[(SPOTS.indexOf(spot) + 1) % SPOTS.length]
    c.path = makePath(c, spot)
    c.goingToTree = false
    c.state = 'walk'
  }
}

function spawn(S, type, x, y, vx = 0) {
  const life = { heart: 1.5, steam: 1.6, drop: 0.9 }[type] ?? 2.4
  S.fx.push({ type, x, y, vx, age: 0, life })
}

function updateCat(S, dt) {
  const c = S.cat
  c.anim += dt

  if (c.petT > 0) {
    c.petT -= dt
    c.heartT -= dt
    if (c.heartT <= 0) {
      c.heartT = 0.35
      spawn(S, 'heart', c.x + (S.rng() - 0.5) * 10, c.y - 12, (S.rng() - 0.5) * 6)
    }
    return
  }

  if (c.state === 'tree') {
    c.timer -= dt
    if (c.timer <= 0) {
      c.x = TREE_FRONT.x
      c.y = TREE_FRONT.y
      c.state = 'idle'
      c.timer = 2
    }
  } else if (c.state === 'idle' || c.state === 'nap') {
    c.timer -= dt
    if (c.timer <= 0) chooseNext(S)
  } else if (c.state === 'walk') {
    const target = c.path[0]
    if (!target) {
      c.state = 'idle'
      c.timer = 3
      return
    }
    const dx = target.x - c.x
    const dy = target.y - c.y
    const d = Math.hypot(dx, dy)
    const step = CAT_SPEED * dt
    if (Math.abs(dx) > 0.5) c.face = dx < 0 ? -1 : 1
    if (d <= step) {
      c.x = target.x
      c.y = target.y
      c.path.shift()
      if (c.path.length === 0) {
        if (c.goingToTree) {
          c.goingToTree = false
          c.x = TREE_TOP.x
          c.y = TREE_TOP.y
          c.state = 'tree'
          c.timer = 10 + S.rng() * 8
        } else if (S.rng() < 0.35) {
          c.state = 'nap'
          c.timer = 8 + S.rng() * 6
        } else {
          c.state = 'idle'
          c.timer = 3 + S.rng() * 4
        }
      }
    } else {
      c.x += (dx / d) * step
      c.y += (dy / d) * step
    }
  }
}

/* ── Главный шаг ──────────────────────────────────────────── */
export function update(S, inp, dt) {
  S.t += dt
  const p = S.p

  if (S.tr) {
    S.tr.t += dt
    if (!S.tr.switched && S.tr.t >= FADE) {
      const { to, at } = S.tr.exit
      S.tr.switched = true
      S.scene = to
      p.x = at.x
      p.y = at.y
      p.dir = 'down'
      S.fx = []
      S.events.push(`place_${to}`)
    }
    if (S.tr.t >= FADE * 2) S.tr = null
  }

  const wantsMove = !S.tr && (inp.x !== 0 || inp.y !== 0)

  if (S.mode === 'walk') {
    if (wantsMove) {
      const len = Math.hypot(inp.x, inp.y)
      const dx = inp.x / len
      const dy = inp.y / len
      const nx = p.x + dx * SPEED * dt
      const ny = p.y + dy * SPEED * dt
      if (!blocked(nx, p.y, S.scene)) p.x = nx
      if (!blocked(p.x, ny, S.scene)) p.y = ny
      p.moving = true
      p.anim += dt * 8
      p.dir = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'left' : 'right') : dy < 0 ? 'up' : 'down'
    } else {
      p.moving = false
      p.anim = 0
    }
  } else if (S.mode === 'sit') {
    p.moving = false
    if (wantsMove) standUp(S)
  } else if (S.mode === 'sleep') {
    S.sleepT += dt
    S.zT -= dt
    if (S.zT <= 0) {
      S.zT = 0.9
      spawn(S, 'z', 172 + S.rng() * 8, 64, 5)
    }
    if (S.sleepT > 1 && wantsMove) wake(S)
    else if (S.sleepT > 7) wake(S)
  }

  /* Плавное затемнение во сне */
  const target = S.mode === 'sleep' ? 0.6 : 0
  const k = 1.1 * dt
  S.dark += Math.max(-k, Math.min(k, target - S.dark))

  updateCat(S, dt)

  for (const f of S.fx) {
    f.age += dt
    f.y += ({ heart: -14, steam: -10, drop: 26 }[f.type] ?? -8) * dt
    f.x += f.vx * dt
  }
  S.fx = S.fx.filter((f) => f.age < f.life)
}
