/* Пиксельная графика гостиной, кухни и сада. Всё рисуется кодом. */
import { W, H, mk, r, blob, shadow } from './roomArt.js'

const OUT = '#9a6244'
const WOOD = '#e8b88a'
const GOLD = '#c9923a'

function baseboard(g) {
  r(g, '#a8703e', 0, 60, W, 4)
  r(g, '#e0a868', 0, 58, W, 2)
  r(g, '#f0c488', 0, 58, W, 1)
}

function planks(g, tones) {
  for (let row = 0; 64 + row * 8 < H; row++) {
    const y = 64 + row * 8
    const off = row % 2 ? 20 : 0
    for (let x = -40 + off; x < W; x += 40) {
      const n = ((((x + 40) * 7 + row * 13) % tones.length) + tones.length) % tones.length
      r(g, tones[n], x, y, 40, 8)
      r(g, '#f6dcb6', x, y, 40, 1)
      r(g, '#c99a68', x, y + 7, 40, 1)
      r(g, '#c99a68', x + 39, y, 1, 8)
    }
  }
  g.fillStyle = 'rgba(122,52,64,0.2)'
  g.fillRect(0, 64, W, 3)
}

/* ── Гостиная ─────────────────────────────────────────────── */
function buildLiving() {
  return mk(W, H, (g) => {
    r(g, '#e6f4ea', 0, 0, W, 64)
    for (let x = 0; x < W; x += 10) r(g, '#d9eee0', x, 0, 2, 46)
    for (let y = 8; y < 42; y += 12) {
      for (let x = ((y / 12) | 0) % 2 ? 8 : 3; x < W; x += 20) r(g, '#f6bfcb', x, y, 2, 2)
    }
    r(g, '#f6ede0', 0, 46, W, 14)
    r(g, '#e3d3bd', 0, 46, W, 2)
    for (let x = 6; x < W; x += 26) r(g, '#e9dcc7', x, 51, 18, 7)
    baseboard(g)
    planks(g, ['#e9c08f', '#e3b784', '#edc99a', '#dfb07c'])

    /* Ковёр */
    r(g, '#e8a898', 100, 116, 120, 58)
    r(g, '#f3c6b8', 102, 118, 116, 54)
    r(g, '#fbe2d6', 106, 122, 108, 46)
    for (let x = 114; x < 210; x += 16) {
      r(g, '#f3c6b8', x, 142, 6, 6)
      r(g, '#e8a898', x + 2, 144, 2, 2)
    }

    /* Арка на кухню */
    r(g, GOLD, 14, 10, 44, 54)
    r(g, '#f7e3b8', 18, 14, 36, 50)
    r(g, '#bfe3dc', 18, 34, 36, 14)
    r(g, '#a9d3cb', 18, 40, 36, 1)
    r(g, '#f5b8c4', 22, 48, 12, 16)
    r(g, '#e89aab', 22, 48, 12, 2)
    r(g, '#a8703e', 14, 62, 44, 2)

    /* Окно */
    r(g, '#e0a868', 74, 12, 40, 36)
    r(g, '#cfe9fb', 77, 15, 34, 30)
    r(g, '#bfe0a0', 77, 38, 34, 7)
    r(g, '#e0a868', 93, 15, 2, 30)
    r(g, '#e0a868', 77, 29, 34, 2)
    r(g, '#f2a7b9', 68, 10, 8, 40)
    r(g, '#f2a7b9', 112, 10, 8, 40)
    r(g, '#d98aa0', 68, 10, 2, 40)
    r(g, '#d98aa0', 118, 10, 2, 40)

    /* Стеклянная дверь в сад */
    r(g, GOLD, 192, 10, 50, 54)
    r(g, '#bfe7f5', 196, 14, 20, 48)
    r(g, '#bfe7f5', 218, 14, 20, 48)
    r(g, '#9fd08a', 196, 46, 42, 16)
    r(g, '#7bbf6a', 196, 54, 42, 8)
    r(g, GOLD, 216, 14, 2, 48)
    r(g, '#ffffff', 200, 18, 6, 2)
    r(g, '#ffffff', 222, 18, 6, 2)
    r(g, '#f2c744', 212, 38, 2, 6)
    r(g, '#f2c744', 220, 38, 2, 6)

    /* Лестница наверх */
    r(g, '#6b4430', 262, 0, 58, 64)
    for (let i = 0; i < 9; i++) {
      r(g, '#c48a56', 266, 4 + i * 6, 54, 2)
      r(g, '#8a5a38', 266, 6 + i * 6, 54, 3)
    }
    r(g, '#e0a868', 262, 0, 4, 64)
    r(g, '#f0c488', 262, 0, 1, 64)
  })
}

/* ── Кухня ────────────────────────────────────────────────── */
function buildKitchen() {
  return mk(W, H, (g) => {
    r(g, '#fff3e0', 0, 0, W, 64)
    for (let y = 30; y < 64; y += 8) {
      for (let x = 0; x < W; x += 8) {
        r(g, '#bfe3dc', x, y, 8, 8)
        r(g, '#a9d3cb', x, y + 7, 8, 1)
        r(g, '#a9d3cb', x + 7, y, 1, 8)
      }
    }
    baseboard(g)
    for (let row = 0; 64 + row * 8 < H; row++) {
      for (let x = 0; x < W; x += 16) {
        const dark = ((x / 16) | 0) % 2 === row % 2
        r(g, dark ? '#ecd9b4' : '#f6ead0', x, 64 + row * 8, 16, 8)
      }
    }
    g.fillStyle = 'rgba(122,52,64,0.2)'
    g.fillRect(0, 64, W, 3)

    /* Ковёр под столом */
    r(g, '#9fd2c8', 96, 124, 88, 46)
    r(g, '#bfe3dc', 98, 126, 84, 42)
    r(g, '#e4f5f0', 102, 130, 76, 34)

    /* Верхние шкафчики и вытяжка */
    r(g, '#e89aab', 10, 6, 56, 24)
    r(g, '#f5b8c4', 12, 8, 26, 20)
    r(g, '#f5b8c4', 40, 8, 24, 20)
    r(g, '#fff3e0', 35, 16, 2, 6)
    r(g, '#fff3e0', 40, 16, 2, 6)
    r(g, '#c9d2dc', 76, 8, 32, 10)
    r(g, '#dfe5ec', 88, 0, 8, 10)

    /* Окно */
    r(g, '#e0a868', 170, 12, 60, 34)
    r(g, '#cfe9fb', 173, 15, 54, 28)
    r(g, '#e0a868', 198, 15, 2, 28)
    r(g, '#bfe0a0', 173, 36, 54, 7)
    r(g, '#bfe3dc', 166, 10, 8, 38)
    r(g, '#bfe3dc', 226, 10, 8, 38)

    /* Тумбы, мойка, плита */
    r(g, '#fbe6c4', 8, 44, 124, 6)
    r(g, '#fff3d8', 8, 44, 124, 1)
    r(g, '#f5b8c4', 8, 50, 124, 26)
    for (const x of [10, 44, 112]) {
      r(g, '#e89aab', x, 52, 20, 22)
      r(g, '#fff3e0', x + 9, 54, 2, 5)
    }
    r(g, '#dfe5ec', 26, 40, 28, 6)
    r(g, '#b9c3cf', 28, 42, 24, 3)
    r(g, '#9aa6b5', 38, 34, 2, 7)
    r(g, '#9aa6b5', 38, 34, 6, 2)
    r(g, '#dfe5ec', 72, 44, 40, 32)
    r(g, '#c9d2dc', 72, 44, 40, 4)
    r(g, '#3a3a4a', 78, 45, 12, 2)
    r(g, '#3a3a4a', 94, 45, 12, 2)
    r(g, '#3a3a4a', 76, 54, 32, 18)
    r(g, '#5a5a70', 78, 56, 28, 3)
    r(g, '#9aa6b5', 80, 52, 24, 2)
    shadow(g, 8, 76, 124)

    /* Чайник */
    r(g, '#d94a78', 84, 36, 12, 9)
    r(g, '#ee6c96', 85, 37, 3, 6)
    r(g, '#d94a78', 96, 38, 4, 2)
    r(g, '#ffffff', 88, 34, 4, 2)

    /* Холодильник */
    r(g, '#cfd8e3', 134, 28, 26, 50)
    r(g, '#e8eef5', 134, 28, 24, 50)
    r(g, '#cfd8e3', 134, 46, 26, 2)
    r(g, '#9aa6b5', 152, 34, 2, 8)
    r(g, '#9aa6b5', 152, 52, 2, 12)
    r(g, '#ff8fb1', 140, 34, 5, 5)
    r(g, '#ffd36a', 146, 52, 5, 4)
    shadow(g, 134, 76, 26)

    /* Арка в гостиную */
    r(g, GOLD, 264, 10, 44, 54)
    r(g, '#e6f4ea', 268, 14, 36, 50)
    for (let x = 268; x < 304; x += 10) r(g, '#d9eee0', x, 14, 2, 50)
    r(g, '#f6ede0', 268, 48, 36, 14)
    r(g, '#a8703e', 264, 62, 44, 2)
  })
}

/* ── Сад ──────────────────────────────────────────────────── */
function buildGarden() {
  return mk(W, H, (g) => {
    for (let y = 0; y < 66; y++) {
      const t = y / 66
      g.fillStyle = `rgb(${Math.round(170 + t * 55)},${Math.round(218 + t * 24)},248)`
      g.fillRect(0, y, W, 1)
    }
    for (const [cx, cy, rx, ry] of [[170, 14, 16, 5], [182, 11, 9, 4], [276, 20, 14, 4], [264, 17, 8, 3]]) {
      blob(g, '#ffffff', cx, cy, rx, ry)
    }
    blob(g, '#b5dc9a', 150, 68, 70, 24)
    blob(g, '#a3d086', 270, 70, 80, 22)

    for (let y = 64; y < H; y += 8) {
      for (let x = 0; x < W; x += 16) {
        const alt = ((x / 16) | 0) % 2 === (((y - 64) / 8) | 0) % 2
        r(g, alt ? '#8fd07a' : '#98d884', x, y, 16, 8)
      }
    }
    for (let i = 0; i < 70; i++) {
      r(g, '#7bbf6a', (i * 53) % W, 70 + ((i * 29) % 108), 1, 2)
    }

    /* Каменная дорожка от двери */
    for (let i = 0; i < 9; i++) {
      const cx = 44 + (i % 2 ? 6 : -4)
      blob(g, '#cbbba5', cx, 76 + i * 11, 11, 5)
      blob(g, '#e2d6c4', cx, 75 + i * 11, 10, 4)
    }

    /* Забор */
    r(g, '#fffaf0', 110, 50, W - 110, 3)
    r(g, '#fffaf0', 110, 58, W - 110, 3)
    for (let x = 112; x < W; x += 8) {
      r(g, '#ffffff', x, 45, 5, 21)
      r(g, '#ffffff', x + 1, 44, 3, 1)
      r(g, '#e6dccb', x + 4, 45, 1, 21)
    }

    /* Стена дома */
    r(g, '#f4dcc6', 0, 0, 110, 66)
    for (let y = 8; y < 62; y += 6) r(g, '#e6c6aa', 0, y, 110, 1)
    r(g, '#b86a5a', 0, 0, 110, 6)
    r(g, '#8a4a40', 0, 6, 110, 2)
    r(g, '#cbb8a2', 0, 60, 110, 6)
    r(g, '#8b4a2b', 24, 14, 40, 52)
    r(g, '#b86a3c', 27, 17, 34, 49)
    r(g, '#d4ebf5', 31, 21, 26, 14)
    r(g, '#8b4a2b', 43, 21, 2, 14)
    r(g, '#d68a56', 31, 40, 11, 22)
    r(g, '#d68a56', 46, 40, 11, 22)
    r(g, '#f2c744', 55, 46, 3, 3)
    r(g, '#ffffff', 72, 18, 30, 28)
    r(g, '#cfe9fb', 75, 21, 24, 22)
    r(g, '#ffffff', 86, 21, 2, 22)
    r(g, '#ffffff', 75, 31, 24, 2)
    r(g, '#a8703e', 70, 46, 34, 6)
    for (const [x, c] of [[73, '#ff7aa8'], [80, '#ffd23f'], [87, '#c58aff'], [94, '#ff7aa8'], [100, '#ffd23f']]) {
      r(g, '#3f9a4a', x, 43, 2, 4)
      r(g, c, x - 1, 40, 4, 3)
    }
  })
}

/* ── Предметы ─────────────────────────────────────────────── */
function buildSofa() {
  return mk(84, 26, (g) => {
    r(g, '#7f74d0', 0, 6, 84, 16)
    r(g, '#9a8fe0', 2, 0, 80, 16)
    r(g, '#b5acf2', 4, 0, 76, 2)
    r(g, '#8a80d8', 41, 3, 2, 13)
    r(g, '#8a80d8', 0, 4, 8, 18)
    r(g, '#b5acf2', 0, 4, 8, 2)
    r(g, '#8a80d8', 76, 4, 8, 18)
    r(g, '#b5acf2', 76, 4, 8, 2)
    r(g, '#6a4428', 5, 22, 3, 2)
    r(g, '#6a4428', 76, 22, 3, 2)
    shadow(g, 2, 23, 80)
  })
}

function buildTv() {
  return mk(48, 38, (g) => {
    r(g, '#3a3a4a', 2, 0, 44, 26)
    r(g, '#1c2030', 4, 2, 40, 20)
    r(g, '#2a2a38', 4, 22, 40, 4)
    r(g, '#5a5a70', 22, 23, 4, 2)
    r(g, '#c47a4a', 0, 26, 48, 10)
    r(g, '#dd9560', 0, 26, 48, 2)
    r(g, '#a85f38', 22, 28, 2, 8)
    r(g, '#6a4428', 3, 36, 4, 2)
    r(g, '#6a4428', 41, 36, 4, 2)
  })
}

function buildKTable() {
  return mk(44, 24, (g) => {
    r(g, '#d49a6c', 0, 0, 44, 11)
    r(g, '#f3d2a2', 1, 1, 42, 9)
    r(g, '#fbe6c4', 1, 1, 42, 2)
    r(g, '#ffffff', 10, 3, 8, 4)
    r(g, '#d94a78', 12, 3, 4, 1)
    r(g, '#ffffff', 28, 2, 5, 5)
    r(g, '#e89aab', 29, 3, 3, 2)
    r(g, '#d49a6c', 2, 11, 40, 3)
    r(g, '#c47a4a', 3, 14, 3, 10)
    r(g, '#c47a4a', 38, 14, 3, 10)
    shadow(g, 2, 22, 40)
  })
}

function buildKChair() {
  return mk(18, 16, (g) => {
    r(g, OUT, 1, 0, 16, 16)
    r(g, WOOD, 2, 1, 14, 13)
    r(g, '#f8dcb8', 2, 1, 14, 2)
    r(g, OUT, 4, 4, 1, 10)
    r(g, OUT, 8, 4, 1, 10)
    r(g, OUT, 12, 4, 1, 10)
  })
}

function buildBench() {
  return mk(40, 26, (g) => {
    r(g, OUT, 0, 0, 40, 11)
    r(g, WOOD, 1, 1, 38, 9)
    r(g, '#f8dcb8', 1, 1, 38, 2)
    r(g, OUT, 1, 5, 38, 1)
    r(g, '#d49a6c', 0, 11, 40, 4)
    r(g, '#f3c690', 1, 11, 38, 1)
    r(g, OUT, 3, 15, 3, 9)
    r(g, OUT, 34, 15, 3, 9)
    shadow(g, 2, 24, 36)
  })
}

function buildFlowers() {
  return mk(64, 24, (g) => {
    r(g, '#6a4428', 0, 14, 64, 9)
    r(g, '#8a5a3a', 1, 14, 62, 7)
    r(g, '#a06a44', 1, 14, 62, 2)
    const cols = ['#ff7aa8', '#ffd23f', '#ffffff', '#8ec5ff', '#c58aff']
    for (let i = 0; i < 8; i++) {
      const x = 4 + i * 8
      const top = 2 + ((i * 5) % 6)
      r(g, '#3f9a4a', x + 1, top + 3, 2, 13 - top)
      r(g, '#5cc05a', x - 2, top + 8, 3, 2)
      r(g, cols[i % 5], x - 1, top, 5, 4)
      r(g, '#ffb347', x + 1, top + 1, 1, 2)
    }
    shadow(g, 2, 22, 60)
  })
}

function buildGardenTree() {
  return mk(70, 92, (g) => {
    r(g, '#6a4428', 30, 54, 10, 38)
    r(g, '#8a5a3a', 31, 54, 6, 38)
    r(g, '#6a4428', 26, 86, 18, 4)
    blob(g, '#2a7a36', 35, 34, 34, 26)
    blob(g, '#38983f', 35, 28, 27, 19)
    blob(g, '#5cc05a', 24, 20, 8, 5)
    blob(g, '#5cc05a', 46, 26, 6, 4)
    for (const [x, y] of [[16, 36], [30, 44], [50, 40], [58, 30], [40, 18]]) {
      r(g, '#ff5f6d', x, y, 3, 3)
      r(g, '#ffa0a8', x, y, 1, 1)
    }
    shadow(g, 18, 90, 34)
  })
}

export function buildSceneArt() {
  return {
    bgs: { living: buildLiving(), kitchen: buildKitchen(), garden: buildGarden() },
    s: {
      sofa: buildSofa(),
      tv: buildTv(),
      ktable: buildKTable(),
      kchair: buildKChair(),
      bench: buildBench(),
      flowers: buildFlowers(),
      gtree: buildGardenTree(),
    },
  }
}
