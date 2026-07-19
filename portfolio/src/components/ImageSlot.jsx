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

export default function ImageSlot({ src, label, size, tall, className = '' }) {
  const ratio = parseRatio(size)
  const style = ratio ? { aspectRatio: ratio } : undefined

  if (src) {
    return <img className={`case-image ${!ratio && tall ? 'case-image-tall' : ''} ${className}`} style={style} src={src} alt={label} />
  }
  return (
    <div className={`case-image-placeholder ${!ratio && tall ? 'case-image-tall' : ''} ${className}`} style={style}>
      <span>{label}</span>
      {size && <span className="case-image-size">{size}</span>}
    </div>
  )
}
