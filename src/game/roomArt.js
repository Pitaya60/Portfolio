/* Пиксельная графика комнаты. Всё рисуется кодом — внешних картинок нет.
   Логическое разрешение 320×180, на экране масштабируется без сглаживания. */

export const W = 320
export const H = 180
export const WALL_H = 64

export const mk = (w, h, fn) => {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const g = c.getContext('2d')
  g.imageSmoothingEnabled = false
  fn(g, w, h)
  return c
}

export const r = (g, c, x, y, w, h) => {
  g.fillStyle = c
  g.fillRect(x, y, w, h)
}

/* Мягкая тень под мебелью */
export const shadow = (g, x, y, w) => {
  g.fillStyle = 'rgba(122,52,64,0.22)'
  g.fillRect(x, y, w, 2)
  g.fillRect(x + 2, y + 2, w - 4, 1)
}

/* Эллипс построчно — для листвы */
export const blob = (g, c, cx, cy, rx, ry) => {
  g.fillStyle = c
  for (let y = -ry; y <= ry; y++) {
    const w = Math.round(rx * Math.sqrt(1 - (y * y) / (ry * ry + 0.0001)))
    g.fillRect(cx - w, cy + y, w * 2, 1)
  }
}

const OUT = '#9a6244' // обводка дерева
const WOOD = '#e8b88a'
const WOOD_HI = '#f8dcb8'
const WOOD_LO = '#d49a6c'

/* ── Фон: стена, пол, декор на стене, ковёр ───────────────── */
function buildBackground() {
  return mk(W, H, (g) => {
    /* Стена в цветочек */
    r(g, '#fdeff1', 0, 0, W, WALL_H)
    for (let y = 6; y < 56; y += 14) {
      const off = ((y / 14) | 0) % 2 ? 10 : 2
      for (let x = off; x < W; x += 20) {
        r(g, '#f6bfcb', x, y, 2, 2)
        r(g, '#bfe1ae', x + 1, y + 2, 1, 2)
      }
    }
    r(g, '#f8e2e7', 0, 52, W, 6)

    /* Плинтус */
    r(g, '#a8703e', 0, 60, W, 4)
    r(g, '#e0a868', 0, 58, W, 2)
    r(g, '#f0c488', 0, 58, W, 1)

    /* Кирпичный пол */
    const tones = ['#e3918a', '#dd857e', '#e89a92', '#d97f78', '#e6948c']
    for (let row = 0; row < 15; row++) {
      const y = WALL_H + row * 8
      if (y >= H) break
      const off = row % 2 ? 8 : 0
      for (let x = -16 + off; x < W; x += 16) {
        const n = (((x + 16) * 7 + row * 13) % 5 + 5) % 5
        r(g, tones[n], x, y, 16, 8)
        r(g, '#f0aaa2', x, y, 16, 1)
        r(g, '#c4766f', x, y + 7, 16, 1)
        r(g, '#c4766f', x + 15, y, 1, 8)
      }
    }
    g.fillStyle = 'rgba(122,52,64,0.25)'
    g.fillRect(0, WALL_H, W, 3)

    /* Деревянная стена справа с золотыми полосами */
    r(g, '#6e4226', 276, 0, 44, 58)
    for (let y = 0; y < 58; y += 9) {
      r(g, '#8d5a34', 278, y, 42, 7)
      r(g, '#e0a63c', 278, y + 3, 42, 1)
    }
    r(g, '#4f2d18', 272, 0, 6, 60)
    r(g, '#8d5a34', 272, 0, 2, 60)

    /* Окно с тёплым светом */
    g.fillStyle = 'rgba(255,248,210,0.35)'
    g.fillRect(50, 2, 38, 50)
    r(g, '#c9a878', 54, 4, 30, 42)
    r(g, '#f3e2c0', 55, 5, 28, 40)
    r(g, '#fffbe6', 58, 8, 22, 34)
    r(g, '#ffffff', 60, 10, 18, 12)
    r(g, '#f3e2c0', 68, 8, 2, 34)
    r(g, '#f3e2c0', 58, 24, 22, 2)
    r(g, '#e8c890', 51, 45, 36, 3)
    r(g, '#c9a878', 51, 48, 36, 1)

    /* Календарь */
    r(g, '#8d93c8', 124, 12, 22, 24)
    r(g, '#dfe2f5', 125, 13, 20, 22)
    r(g, '#b9bff0', 125, 13, 20, 5)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        r(g, '#a9afe0', 127 + col * 4, 21 + row * 4, 3, 3)
      }
    }
    for (let i = 0; i < 4; i++) r(g, '#7a80b8', 128 + i * 4, 11, 2, 3)

    /* Картина с деревом */
    r(g, '#8b4a2b', 198, 12, 20, 20)
    r(g, '#b86a3c', 199, 13, 18, 18)
    r(g, '#d4ebf5', 201, 15, 14, 14)
    r(g, '#9fd08a', 201, 25, 14, 4)
    r(g, '#7a4a2a', 207, 22, 2, 5)
    blob(g, '#3f9a4a', 208, 21, 4, 4)
    blob(g, '#5dbb5f', 207, 19, 2, 2)

    /* Бра */
    for (const x of [96, 234]) {
      g.fillStyle = 'rgba(255,240,190,0.28)'
      g.fillRect(x - 4, 12, 18, 22)
      r(g, '#c9923a', x, 26, 10, 3)
      r(g, '#c9923a', x + 4, 22, 2, 5)
      r(g, '#fff3c4', x + 1, 15, 2, 8)
      r(g, '#fff3c4', x + 4, 13, 2, 9)
      r(g, '#fff3c4', x + 7, 15, 2, 8)
      r(g, '#ffd36a', x + 1, 13, 2, 2)
      r(g, '#ffd36a', x + 4, 11, 2, 2)
      r(g, '#ffd36a', x + 7, 13, 2, 2)
    }

    /* Ковёр */
    r(g, '#8f8dd8', 150, 128, 60, 44)
    r(g, '#a3a1e6', 151, 129, 58, 42)
    r(g, '#cfcdf8', 154, 132, 52, 1)
    r(g, '#cfcdf8', 154, 167, 52, 1)
    r(g, '#cfcdf8', 154, 132, 1, 36)
    r(g, '#cfcdf8', 205, 132, 1, 36)
    r(g, '#b5b3f2', 157, 135, 46, 30)
    r(g, '#8a88d6', 177, 142, 6, 16)
    r(g, '#8a88d6', 172, 148, 16, 4)
    r(g, '#cfcdf8', 179, 146, 2, 8)
    r(g, '#cfcdf8', 176, 149, 8, 2)
    for (const [x, y] of [[160, 138], [196, 138], [160, 158], [196, 158]]) {
      r(g, '#8a88d6', x, y, 3, 3)
    }
  })
}

/* ── Мебель ───────────────────────────────────────────────── */
function buildBed() {
  return mk(84, 76, (g) => {
    /* Изголовье */
    r(g, OUT, 24, 0, 36, 10)
    r(g, WOOD, 25, 1, 34, 9)
    r(g, WOOD_HI, 25, 1, 34, 2)
    r(g, OUT, 4, 6, 76, 36)
    r(g, WOOD, 5, 7, 74, 34)
    r(g, WOOD_HI, 5, 7, 74, 2)
    r(g, WOOD_LO, 12, 14, 60, 22)
    r(g, WOOD, 13, 15, 58, 20)

    /* Подушки */
    for (const x of [9, 45]) {
      r(g, '#d9b9b0', x, 30, 30, 12)
      r(g, '#fff7f3', x + 1, 29, 28, 11)
      r(g, '#f3dcd6', x + 1, 37, 28, 3)
    }

    /* Одеяло */
    r(g, '#c9a392', 6, 40, 72, 26)
    r(g, '#fdf0e3', 7, 41, 70, 24)
    r(g, '#f7d6d2', 7, 41, 70, 5)
    r(g, '#f0dccb', 7, 60, 70, 5)
    for (let x = 14; x < 70; x += 12) r(g, '#f3c9c6', x, 52, 2, 2)

    /* Изножье */
    r(g, OUT, 4, 60, 76, 14)
    r(g, WOOD, 5, 61, 74, 12)
    r(g, WOOD_HI, 5, 61, 74, 2)
    for (let i = 0; i < 3; i++) r(g, WOOD_LO, 28 + i * 12, 66, 6, 5)

    /* Столбики */
    for (const x of [0, 76]) {
      r(g, OUT, x, 4, 8, 44)
      r(g, WOOD, x + 1, 5, 6, 42)
      r(g, WOOD_HI, x + 1, 5, 2, 42)
      r(g, WOOD_HI, x, 2, 8, 3)
      r(g, OUT, x, 54, 8, 20)
      r(g, WOOD, x + 1, 55, 6, 18)
      r(g, WOOD_HI, x + 1, 55, 2, 18)
    }
    shadow(g, 2, 73, 80)
  })
}

function buildDresser() {
  return mk(44, 40, (g) => {
    r(g, OUT, 0, 6, 44, 30)
    r(g, '#f0c79c', 1, 7, 42, 28)
    r(g, WOOD_HI, 1, 7, 42, 3)
    for (const y of [12, 24]) {
      r(g, WOOD_LO, 4, y, 36, 11)
      r(g, '#f4d2ab', 5, y + 1, 34, 9)
      r(g, OUT, 19, y + 4, 6, 2)
      r(g, '#ffe9c7', 20, y + 4, 4, 1)
    }
    r(g, OUT, 2, 36, 4, 3)
    r(g, OUT, 38, 36, 4, 3)
    shadow(g, 0, 38, 44)
  })
}

function buildNightstand() {
  return mk(30, 42, (g) => {
    /* Лампа */
    r(g, '#fff0c4', 9, 0, 12, 2)
    r(g, '#fff0c4', 7, 2, 16, 3)
    r(g, '#ffe39a', 5, 5, 20, 5)
    r(g, '#fffbe6', 9, 1, 6, 2)
    r(g, '#e0c27a', 5, 10, 20, 1)
    r(g, '#c9923a', 14, 11, 2, 4)
    blob(g, '#d9a02b', 15, 17, 4, 3)
    /* Тумба */
    r(g, OUT, 0, 20, 30, 4)
    r(g, WOOD_HI, 1, 20, 28, 2)
    r(g, OUT, 1, 24, 28, 14)
    r(g, '#f0c79c', 2, 24, 26, 13)
    r(g, WOOD_LO, 4, 27, 22, 8)
    r(g, '#f4d2ab', 5, 28, 20, 6)
    r(g, OUT, 12, 30, 6, 2)
    r(g, OUT, 3, 38, 3, 3)
    r(g, OUT, 24, 38, 3, 3)
    shadow(g, 0, 40, 30)
  })
}

function buildCatTree() {
  return mk(44, 72, (g) => {
    const CR = '#f6e2bd'
    const CD = '#d8b684'
    const ROPE = '#c89458'
    const ROPE2 = '#a8743c'
    /* Основание */
    r(g, ROPE2, 0, 62, 44, 8)
    r(g, CR, 1, 63, 42, 6)
    r(g, CD, 1, 67, 42, 2)
    /* Столб с верёвкой */
    r(g, ROPE2, 18, 12, 8, 52)
    for (let y = 14; y < 62; y += 3) r(g, ROPE, 18, y, 8, 1)
    /* Домик */
    r(g, ROPE2, 22, 40, 22, 23)
    r(g, CR, 23, 41, 20, 21)
    r(g, '#2f2220', 29, 49, 8, 11)
    r(g, '#2f2220', 30, 48, 6, 1)
    r(g, ROPE2, 20, 35, 26, 6)
    r(g, CR, 21, 36, 24, 4)
    /* Средняя полка */
    r(g, ROPE2, 0, 30, 22, 6)
    r(g, CR, 1, 31, 20, 3)
    r(g, CD, 1, 34, 20, 2)
    /* Игрушка */
    r(g, '#8a6a4a', 4, 36, 1, 10)
    blob(g, '#e0742c', 4, 48, 3, 3)
    /* Верхняя площадка */
    r(g, ROPE2, 2, 10, 40, 7)
    r(g, CR, 3, 11, 38, 4)
    r(g, CD, 3, 15, 38, 2)
    for (const x of [8, 16, 30, 36]) r(g, CD, x, 12, 2, 1)
    shadow(g, 0, 70, 44)
  })
}

function buildPlant() {
  return mk(26, 54, (g) => {
    r(g, '#6a4428', 12, 16, 3, 26)
    blob(g, '#2a7a36', 13, 12, 12, 9)
    blob(g, '#2a7a36', 6, 16, 6, 5)
    blob(g, '#2a7a36', 20, 16, 6, 5)
    blob(g, '#38983f', 13, 9, 9, 6)
    blob(g, '#38983f', 7, 14, 4, 3)
    blob(g, '#38983f', 19, 14, 4, 3)
    blob(g, '#5cc05a', 10, 6, 4, 3)
    blob(g, '#5cc05a', 17, 10, 3, 2)
    r(g, '#8a4a2c', 5, 40, 16, 3)
    r(g, '#a85f38', 6, 40, 14, 3)
    r(g, '#8a4a2c', 7, 43, 12, 9)
    r(g, '#c47a4a', 8, 43, 10, 8)
    r(g, '#dd9560', 8, 43, 10, 2)
    shadow(g, 4, 51, 18)
  })
}

function buildTable() {
  return mk(40, 46, (g) => {
    /* Цветы */
    for (const [x, y] of [[12, 12], [17, 6], [24, 4], [29, 9], [22, 13]]) {
      r(g, '#3a8a3a', x + 1, y + 2, 1, 14 - y)
    }
    for (const [x, y] of [[11, 10], [16, 4], [23, 2], [28, 7], [21, 11]]) {
      r(g, '#e8702a', x, y, 4, 4)
      r(g, '#ffd27a', x + 1, y + 1, 2, 2)
    }
    r(g, '#8a4a2c', 14, 16, 12, 9)
    r(g, '#c47a4a', 15, 16, 10, 8)
    /* Столешница */
    r(g, '#6d778c', 0, 24, 40, 6)
    r(g, '#9aa4b8', 1, 24, 38, 4)
    r(g, '#bcc5d6', 1, 24, 38, 1)
    /* Рейки */
    r(g, '#c49a68', 2, 30, 36, 14)
    for (let i = 0; i < 9; i++) r(g, '#f2d9a8', 3 + i * 4, 31, 3, 12)
    shadow(g, 0, 44, 40)
  })
}

function buildChair() {
  return mk(30, 34, (g) => {
    const O = '#8a4a5a'
    const A = '#d98a9a'
    const B = '#eaa8b4'
    /* Спинка */
    r(g, O, 3, 0, 24, 22)
    r(g, A, 4, 1, 22, 20)
    r(g, B, 4, 1, 22, 3)
    r(g, '#c9788a', 7, 5, 16, 13)
    /* Сиденье */
    r(g, O, 4, 18, 22, 12)
    r(g, B, 5, 19, 20, 9)
    r(g, '#f6c2cb', 5, 19, 20, 2)
    /* Подлокотники */
    for (const x of [0, 24]) {
      r(g, O, x, 12, 6, 20)
      r(g, A, x + 1, 13, 4, 18)
      r(g, B, x + 1, 13, 4, 2)
    }
    r(g, '#6a3a2a', 5, 31, 3, 2)
    r(g, '#6a3a2a', 22, 31, 3, 2)
  })
}

/* Только подлокотники — рисуются поверх сидящей героини */
function buildChairArms() {
  return mk(30, 34, (g) => {
    const O = '#8a4a5a'
    const A = '#d98a9a'
    const B = '#eaa8b4'
    for (const x of [0, 24]) {
      r(g, O, x, 12, 6, 20)
      r(g, A, x + 1, 13, 4, 18)
      r(g, B, x + 1, 13, 4, 2)
    }
  })
}

function buildFloorLamp() {
  return mk(14, 34, (g) => {
    r(g, '#e0c27a', 2, 0, 10, 10)
    r(g, '#fff1c8', 3, 1, 8, 8)
    for (const x of [5, 8]) r(g, '#f1d9a0', x, 1, 1, 8)
    r(g, '#c9923a', 6, 10, 2, 20)
    r(g, '#c9923a', 3, 30, 8, 2)
    shadow(g, 2, 31, 10)
  })
}

function buildSmallPlant() {
  return mk(20, 30, (g) => {
    blob(g, '#2f8a3a', 10, 8, 3, 7)
    blob(g, '#43a848', 5, 11, 4, 5)
    blob(g, '#43a848', 15, 11, 4, 5)
    blob(g, '#6fcf5a', 10, 6, 2, 4)
    blob(g, '#6fcf5a', 4, 10, 2, 2)
    r(g, '#a85f38', 4, 17, 12, 3)
    r(g, '#c47a4a', 5, 20, 10, 8)
    r(g, '#dd9560', 5, 20, 10, 2)
    shadow(g, 3, 27, 14)
  })
}

export function buildArt() {
  return {
    bg: buildBackground(),
    bed: buildBed(),
    dresser: buildDresser(),
    nightstand: buildNightstand(),
    tree: buildCatTree(),
    plant: buildPlant(),
    table: buildTable(),
    chair: buildChair(),
    chairArms: buildChairArms(),
    lamp: buildFloorLamp(),
    plant2: buildSmallPlant(),
  }
}

/* Где рисуется каждый спрайт (левый верхний угол) */
export const PLACE = {
  bed: [138, 36],
  dresser: [74, 46],
  nightstand: [232, 44],
  tree: [6, 30],
  plant: [98, 100],
  table: [20, 104],
  chair: [232, 112],
  lamp: [6, 142],
  plant2: [258, 146],
}
