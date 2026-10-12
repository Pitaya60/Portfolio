/* Дом: данные помещений без DOM и canvas.
   zone — прямоугольник на полу, где стоят ноги героини и работает действие.
   exit — переход в другое помещение (at — куда ставим героиню).
   spot — действие: event (реплика), fx (эффект), seat (посадка). */

export const TV_SCREEN = { x: 4, y: 2, w: 40, h: 20 }

export const SCENES = {
  living: {
    minY: 72,
    blocks: [
      { x: 120, y: 124, w: 80, h: 18 }, // диван
      { x: 128, y: 66, w: 48, h: 12 }, // тумба с телевизором
      { x: 19, y: 140, w: 14, h: 9 }, // большое растение
      { x: 299, y: 162, w: 10, h: 8 }, // торшер
      { x: 253, y: 166, w: 12, h: 10 }, // горшок
    ],
    props: [
      { img: 'sofa', x: 118, y: 116, b: 142 },
      { img: 'tv', x: 128, y: 38, b: 76, tv: true },
      { img: 'plant', x: 12, y: 94, b: 148 },
      { img: 'lamp', x: 296, y: 136, b: 170 },
      { img: 'plant2', x: 250, y: 146, b: 176 },
    ],
    spots: [
      {
        zone: { x: 122, y: 144, w: 76, h: 16 },
        hint: 'sofa',
        event: 'tv',
        tv: true,
        seat: { x: 160, y: 126, dir: 'up', stand: { x: 160, y: 152 } },
      },
    ],
    exits: [
      { zone: { x: 14, y: 72, w: 44, h: 24 }, hint: 'toKitchen', to: 'kitchen', at: { x: 286, y: 92 } },
      { zone: { x: 192, y: 72, w: 52, h: 24 }, hint: 'toGarden', to: 'garden', at: { x: 44, y: 92 } },
      { zone: { x: 262, y: 72, w: 50, h: 26 }, hint: 'up', to: 'bedroom', at: { x: 286, y: 90 } },
    ],
  },

  kitchen: {
    minY: 78,
    blocks: [
      { x: 118, y: 138, w: 44, h: 12 }, // стол
      { x: 243, y: 166, w: 12, h: 10 }, // горшок
    ],
    props: [
      { img: 'kchair', x: 131, y: 112, b: 120 },
      { img: 'ktable', x: 118, y: 126, b: 150 },
      { img: 'plant2', x: 240, y: 146, b: 176 },
    ],
    spots: [
      {
        zone: { x: 72, y: 78, w: 40, h: 16 },
        hint: 'tea',
        event: 'tea',
        fx: 'steam',
        at: { x: 91, y: 38 },
      },
      { zone: { x: 128, y: 78, w: 36, h: 16 }, hint: 'fridge', event: 'fridge' },
      {
        zone: { x: 116, y: 152, w: 48, h: 14 },
        hint: 'chair',
        event: 'sitTea',
        seat: { x: 140, y: 136, dir: 'down', stand: { x: 140, y: 158 } },
      },
    ],
    exits: [
      { zone: { x: 262, y: 78, w: 50, h: 20 }, hint: 'toLiving', to: 'living', at: { x: 36, y: 92 } },
    ],
  },

  garden: {
    minY: 72,
    blocks: [
      { x: 130, y: 112, w: 64, h: 10 }, // клумба
      { x: 255, y: 96, w: 12, h: 8 }, // ствол яблони
      { x: 214, y: 124, w: 36, h: 14 }, // скамейка
    ],
    props: [
      { img: 'flowers', x: 130, y: 100, b: 122 },
      { img: 'gtree', x: 226, y: 12, b: 104 },
      { img: 'bench', x: 212, y: 112, b: 120 },
    ],
    spots: [
      {
        zone: { x: 126, y: 124, w: 72, h: 16 },
        hint: 'water',
        event: 'water',
        fx: 'drop',
        spread: 56,
        at: { x: 162, y: 104 },
      },
      {
        zone: { x: 210, y: 140, w: 46, h: 16 },
        hint: 'chair',
        event: 'sit',
        seat: { x: 232, y: 128, dir: 'down', stand: { x: 232, y: 148 } },
      },
    ],
    exits: [
      { zone: { x: 20, y: 72, w: 52, h: 24 }, hint: 'toLiving', to: 'living', at: { x: 217, y: 92 } },
    ],
  },
}
