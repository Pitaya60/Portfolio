import { W, H, SCENES, fadeAmount } from './roomEngine.js'
import { PLACE } from './roomArt.js'
import { TV_SCREEN } from './scenes.js'

const HAIR = '#2b1d22'
const HAIR_HI = '#4a3038'
const BOW = '#2d2d3c'
const BOW_HI = '#4b4b63'
const GOLD = '#f2c744'
const SKIN = '#f3cfae'
const TOP = '#9a9aa6'
const TOP_SH = '#7d7d8a'
const SKIRT = '#3c3447'
const BOOT = '#5c4638'
const PINK = '#d94a78'

const CAT = '#e9a45e'
const CAT_DARK = '#c47a3a'
const CAT_LIGHT = '#f8d9a8'
const CAT_EYE = '#2a1e1a'
const CAT_NOSE = '#e58b95'

/* Рисует прямоугольник относительно спрайта; при flip зеркалит по X */
function painter(ctx, ox, oy, width, flip) {
  return (x, y, w, h, c) => {
    ctx.fillStyle = c
    ctx.fillRect(ox + (flip ? width - x - w : x), oy + y, w, h)
  }
}

function footShadow(ctx, x, y, w = 10) {
  ctx.fillStyle = 'rgba(122,52,64,0.25)'
  ctx.fillRect(Math.round(x - w / 2), Math.round(y) - 1, w, 2)
}

/* ── Героиня ──────────────────────────────────────────────── */
function drawPlayer(ctx, p, sitting = false) {
  const f = Math.floor(p.anim) % 4
  const bob = p.moving && (f === 1 || f === 3) ? 1 : 0
  const x = Math.round(p.x)
  const y = Math.round(p.y)
  const flip = p.dir === 'right'
  const R = painter(ctx, x - 6, y - 20 - bob, 12, flip)

  footShadow(ctx, x, y)

  /* Ноги: при шаге одна поднимается */
  const lift = p.moving ? (f === 1 ? 'l' : f === 3 ? 'r' : '') : ''
  const legs = (xl, xr) => {
    if (sitting) {
      R(xl, 19, 2, 1, BOOT)
      R(xr, 19, 2, 1, BOOT)
      return
    }
    R(xl, 18, 2, lift === 'l' ? 1 : 2, SKIN)
    R(xr, 18, 2, lift === 'r' ? 1 : 2, SKIN)
    R(xl, 19, 2, 1, BOOT)
    R(xr, 19, 2, 1, BOOT)
  }

  if (p.dir === 'down' || p.dir === 'up') {
    const back = p.dir === 'up'
    legs(3, 7)
    R(2, 16, 8, 3, SKIRT)
    R(3, 12, 6, 5, TOP)
    R(3, 15, 6, 2, TOP_SH)
    R(0, 13, 3, 4, TOP)
    R(9, 13, 3, 4, TOP)
    if (back) {
      R(1, 4, 10, 14, HAIR)
      R(2, 7, 8, 1, HAIR_HI)
      R(1, 14, 1, 4, PINK)
    } else {
      R(1, 4, 10, 8, HAIR)
      R(1, 12, 2, 6, HAIR)
      R(9, 12, 2, 6, HAIR)
      R(1, 14, 1, 4, PINK)
      R(3, 6, 6, 6, SKIN)
      R(3, 5, 6, 2, HAIR)
      R(4, 9, 1, 2, HAIR)
      R(7, 9, 1, 2, HAIR)
      R(3, 11, 1, 1, '#f0a0a0')
      R(8, 11, 1, 1, '#f0a0a0')
    }
    R(0, 0, 5, 4, BOW)
    R(7, 0, 5, 4, BOW)
    R(1, 1, 2, 1, BOW_HI)
    R(9, 1, 2, 1, BOW_HI)
    R(5, 1, 2, 3, GOLD)
  } else {
    /* Вид сбоку: рисуем «влево», вправо — зеркалом */
    legs(4, 6)
    R(2, 16, 8, 3, SKIRT)
    R(3, 12, 6, 5, TOP)
    R(3, 15, 6, 2, TOP_SH)
    R(5, 4, 6, 14, HAIR)
    R(10, 14, 1, 3, PINK)
    R(1, 4, 8, 8, HAIR)
    R(2, 6, 5, 6, SKIN)
    R(2, 5, 5, 2, HAIR)
    R(3, 9, 1, 2, HAIR)
    R(2, 11, 1, 1, '#f0a0a0')
    R(4, 13, 3, 4, TOP_SH)
    R(5, 0, 6, 4, BOW)
    R(6, 1, 2, 2, GOLD)
    R(9, 1, 2, 1, BOW_HI)
  }
}

/* Героиня спит: видны голова на подушке и бугорок под одеялом */
function drawSleeper(ctx) {
  const [bx, by] = PLACE.bed
  const x = bx + 12
  const y = by + 25
  const R = painter(ctx, x, y, 28, false)
  R(0, 4, 20, 8, HAIR)
  R(2, 2, 14, 4, HAIR)
  R(3, 3, 12, 8, SKIN)
  R(3, 3, 12, 2, HAIR)
  R(5, 7, 3, 1, HAIR)
  R(10, 7, 3, 1, HAIR)
  R(4, 9, 1, 1, '#f0a0a0')
  R(13, 9, 1, 1, '#f0a0a0')
  R(0, 0, 5, 4, BOW)
  R(15, 0, 5, 4, BOW)
  R(7, 1, 2, 3, GOLD)
  /* Одеяло поверх тела */
  ctx.fillStyle = '#f6dccf'
  ctx.fillRect(bx + 14, by + 42, 56, 22)
  ctx.fillStyle = '#ffeee2'
  ctx.fillRect(bx + 14, by + 42, 56, 3)
  ctx.fillStyle = '#e8c4b6'
  ctx.fillRect(bx + 14, by + 62, 56, 2)
}

/* ── Кот ──────────────────────────────────────────────────── */
function drawCat(ctx, c, S) {
  const x = Math.round(c.x)
  const y = Math.round(c.y)
  const petting = c.petT > 0
  const flip = c.face > 0

  footShadow(ctx, x, y, c.state === 'walk' ? 12 : 10)

  if (c.state === 'walk' && !petting) {
    const f = Math.floor(c.anim * 6) % 2
    const R = painter(ctx, x - 7, y - 10, 14, flip)
    R(11, f ? 0 : 1, 1, 5, CAT)
    R(10, f ? 0 : 1, 2, 1, CAT_DARK)
    R(3, 3, 9, 5, CAT)
    R(3, 6, 9, 2, CAT_LIGHT)
    R(6, 3, 1, 3, CAT_DARK)
    R(8, 3, 1, 3, CAT_DARK)
    R(0, 1, 5, 5, CAT)
    R(0, 0, 2, 2, CAT_DARK)
    R(3, 0, 2, 2, CAT_DARK)
    R(1, 3, 1, 1, CAT_EYE)
    R(0, 4, 1, 1, CAT_NOSE)
    R(3 + f, 8, 2, 2, CAT_LIGHT)
    R(5 - f, 8, 2, 2, CAT_LIGHT)
    R(9 + f, 8, 2, 2, CAT_LIGHT)
    R(11 - f, 8, 2, 2, CAT_LIGHT)
    return
  }

  const sleeping = (c.state === 'tree' || c.state === 'nap') && !petting
  if (sleeping || ((c.state === 'tree' || c.state === 'nap') && petting)) {
    /* Свернулась калачиком */
    const breath = Math.sin(S.t * 2.2) > 0 ? 0 : 1
    const R = painter(ctx, x - 6, y - 7, 12, flip)
    R(0, 2 + breath, 12, 5 - breath, CAT)
    R(2, 5, 8, 2, CAT_LIGHT)
    R(6, 2 + breath, 1, 3, CAT_DARK)
    R(8, 2 + breath, 1, 3, CAT_DARK)
    R(0, 3, 4, 4, CAT)
    R(0, 2, 1, 1, CAT_DARK)
    R(3, 2, 1, 1, CAT_DARK)
    R(1, 5, 2, 1, CAT_EYE)
    R(10, 5, 3, 2, CAT_DARK)
    return
  }

  /* Сидит, смотрит вперёд */
  const tail = Math.floor(c.anim * 2) % 2
  const R = painter(ctx, x - 5, y - 11, 10, flip)
  R(9, 8, 3, 1, CAT_DARK)
  R(11, tail ? 5 : 6, 1, 3, CAT_DARK)
  R(1, 6, 8, 5, CAT)
  R(3, 7, 4, 4, CAT_LIGHT)
  R(2, 10, 2, 1, CAT_LIGHT)
  R(6, 10, 2, 1, CAT_LIGHT)
  R(1, 1, 8, 5, CAT)
  R(1, 0, 2, 2, CAT_DARK)
  R(7, 0, 2, 2, CAT_DARK)
  R(4, 1, 2, 1, CAT_DARK)
  if (petting) {
    R(2, 3, 2, 1, CAT_EYE)
    R(6, 3, 2, 1, CAT_EYE)
  } else {
    R(3, 3, 1, 1, CAT_EYE)
    R(6, 3, 1, 1, CAT_EYE)
  }
  R(4, 4, 2, 1, CAT_NOSE)
}

/* ── Эффекты: сердечки и «Z» ──────────────────────────────── */
const HEART = ['.#.#.', '#####', '.###.', '..#..']
const ZZ = ['#####', '...#.', '..#..', '.#...', '#####']
const PUFF = ['.#.', '###', '.#.']

function drawGlyph(ctx, rows, x, y, color) {
  ctx.fillStyle = color
  rows.forEach((row, j) => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '#') ctx.fillRect(Math.round(x) + i, Math.round(y) + j, 1, 1)
    }
  })
}

function drawFx(ctx, fx) {
  for (const f of fx) {
    const left = 1 - f.age / f.life
    ctx.globalAlpha = Math.max(0, Math.min(1, left * 1.6))
    if (f.type === 'heart') drawGlyph(ctx, HEART, f.x - 2, f.y, '#ff5f8d')
    else if (f.type === 'steam') drawGlyph(ctx, PUFF, f.x - 1, f.y, '#ffffff')
    else if (f.type === 'drop') drawGlyph(ctx, ['#', '#'], f.x, f.y, '#4aa8ff')
    else drawGlyph(ctx, ZZ, f.x, f.y, '#fdf6ff')
  }
  ctx.globalAlpha = 1
}

/* Экран телевизора: бегущие цветные полосы */
function drawTv(ctx, x, y, t) {
  const sx = x + TV_SCREEN.x
  const sy = y + TV_SCREEN.y
  ctx.fillStyle = '#7ad0f0'
  ctx.fillRect(sx, sy, TV_SCREEN.w, TV_SCREEN.h)
  const cols = ['#ff8fb1', '#ffd36a', '#9be08a', '#b5a0ff']
  const k = Math.floor(t * 1.5)
  for (let i = 0; i < 5; i++) {
    const h = 6 + Math.round(Math.abs(Math.sin(t * 2 + i)) * 10)
    ctx.fillStyle = cols[(i + k) % 4]
    ctx.fillRect(sx + 2 + i * 8, sy + TV_SCREEN.h - h, 6, h)
  }
  ctx.fillStyle = 'rgba(255,255,255,0.18)'
  ctx.fillRect(sx, sy, TV_SCREEN.w, 3)
}

/* Две бабочки в саду */
function drawButterflies(ctx, t) {
  for (const [ph, cx, cy, c] of [[0, 160, 96, '#ff9ac8'], [2.1, 220, 88, '#ffd36a']]) {
    const x = Math.round(cx + Math.sin(t * 0.7 + ph) * 44)
    const y = Math.round(cy + Math.cos(t * 1.1 + ph) * 12)
    const up = Math.floor(t * 8 + ph) % 2
    ctx.fillStyle = c
    ctx.fillRect(x - 2, y - (up ? 2 : 0), 2, 2)
    ctx.fillRect(x + 1, y - (up ? 2 : 0), 2, 2)
    ctx.fillStyle = '#3a2a3a'
    ctx.fillRect(x, y, 1, 2)
  }
}

/* ── Кадр ─────────────────────────────────────────────────── */
function drawBedroom(ctx, art, S) {
  ctx.drawImage(art.bg, 0, 0)

  const put = (name) => ctx.drawImage(art[name], PLACE[name][0], PLACE[name][1])
  const sitting = S.mode === 'sit'
  const sleeping = S.mode === 'sleep'

  /* Всё, что может перекрывать друг друга, сортируем по «ногам» */
  const items = [
    { b: 108, draw: () => { put('bed'); if (sleeping) drawSleeper(ctx) } },
    { b: 84, draw: () => put('dresser') },
    { b: 84, draw: () => put('nightstand') },
    { b: 100, draw: () => put('tree') },
    { b: 152, draw: () => put('plant') },
    { b: 148, draw: () => put('table') },
    { b: 146, draw: () => put('chair') },
    { b: 176, draw: () => put('lamp') },
    { b: 176, draw: () => put('plant2') },
    { b: S.cat.state === 'tree' ? 101 : S.cat.y, draw: () => drawCat(ctx, S.cat, S) },
  ]
  if (!sleeping) {
    items.push({ b: sitting ? 147 : S.p.y, draw: () => drawPlayer(ctx, S.p, sitting) })
  }
  if (sitting) {
    items.push({
      b: 148,
      draw: () => ctx.drawImage(art.chairArms, PLACE.chair[0], PLACE.chair[1]),
    })
  }

  items.sort((a, b) => a.b - b.b).forEach((i) => i.draw())
}

/* Гостиная, кухня и сад: фон + предметы из scenes.js, отсортированные по «ногам» */
function drawHouse(ctx, art, S) {
  ctx.drawImage(art.bgs[S.scene], 0, 0)

  const sc = SCENES[S.scene]
  const sprites = { ...art, ...art.s }
  const items = sc.props.map((pr) => ({
    b: pr.b,
    draw: () => {
      ctx.drawImage(sprites[pr.img], pr.x, pr.y)
      if (pr.tv && S.tv) drawTv(ctx, pr.x, pr.y, S.t)
    },
  }))
  items.push({ b: S.p.y, draw: () => drawPlayer(ctx, S.p, S.mode === 'sit') })

  items.sort((a, b) => a.b - b.b).forEach((i) => i.draw())

  if (S.scene === 'garden') drawButterflies(ctx, S.t)
}

export function drawFrame(ctx, art, S) {
  ctx.clearRect(0, 0, W, H)

  if (S.scene === 'bedroom') drawBedroom(ctx, art, S)
  else drawHouse(ctx, art, S)

  drawFx(ctx, S.fx)

  if (S.dark > 0.001) {
    ctx.fillStyle = `rgba(14,12,48,${S.dark})`
    ctx.fillRect(0, 0, W, H)
  }

  const fade = fadeAmount(S)
  if (fade > 0.001) {
    ctx.fillStyle = `rgba(14,12,48,${fade})`
    ctx.fillRect(0, 0, W, H)
  }
}
