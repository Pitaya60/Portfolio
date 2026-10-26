/* Места работы — полоса на главной (как в списке «Где я работала»).
   tag — серая подпись рядом с названием (отрасль или компания). */

const workplaces = [
  { id: 'nedra', company: 'nedra.kz', tag: 'Muveti',
    role: { ru: 'Product Designer', en: 'Product Designer' },
    dates: { ru: '2026 – сейчас', en: '2026 – now' } },
  { id: 'qbots', company: 'qBots', tag: 'MedTech',
    role: { ru: 'UX/UI Designer', en: 'UX/UI Designer' },
    dates: { ru: '2026 – сейчас', en: '2026 – now' } },
  { id: 'prodengi', company: 'Prodengi', tag: 'FinTech',
    role: { ru: 'UX/UI Designer', en: 'UX/UI Designer' },
    dates: { ru: '2025 – 2026', en: '2025 – 2026' } },
  { id: 'indrive', company: 'inDrive', tag: 'EdTech',
    role: { ru: 'UX/UI Designer', en: 'UX/UI Designer' },
    dates: { ru: '2023 – 2024', en: '2023 – 2024' } },
]

export function getWorkplaces(lang = 'ru') {
  return workplaces.map((w) => ({
    ...w,
    role: w.role[lang] ?? w.role.ru,
    dates: w.dates[lang] ?? w.dates.ru,
  }))
}
