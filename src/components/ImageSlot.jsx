import { useState } from 'react'

// Пытаемся вытащить соотношение сторон прямо из подписи размера (например "700×900"),
// чтобы плейсхолдер визуально совпадал с реальной будущей картинкой, а не был
// всегда одной и той же формы 4:3.
function parseRatio(size) {
  if (!size) return null
  const match = size.match(/(\d+)\s*[×x]\s*(\d+)/i)
  if (!match) return null
  const w = Number(match[1])
  const h = Number(match[2])
  if (!w || !h) return null
  return `${w} / ${h}`
}

// Пути к картинкам лежат в /public. Кодируем пробелы и прочие спецсимволы,
// иначе браузер не найдёт файл (например "new design.png").
function normalizeSrc(src) {
  if (!src) return src
  if (/^(https?:)?\/\//i.test(src)) return src
  return src.split('/').map(encodeURIComponent).join('/')
}

export default function ImageSlot({ src, label, size, tall, className = '' }) {
  const [failed, setFailed] = useState(false)
  const ratio = parseRatio(size)

  // Реальную картинку не обрезаем под «рекомендованный» размер —
  // показываем в её собственных пропорциях.
  if (src && !failed) {
    return (
      <img
        className={`case-image ${className}`}
        src={normalizeSrc(src)}
        alt={label || ''}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }

  const style = ratio ? { aspectRatio: ratio } : undefined
  return (
    <div className={`case-image-placeholder ${!ratio && tall ? 'case-image-tall' : ''} ${className}`} style={style}>
      <span>{label}</span>
      {size && <span className="case-image-size">{size}</span>}
    </div>
  )
}
