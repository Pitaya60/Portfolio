export default function ImageSlot({ src, label, size, tall, className = '' }) {
  if (src) {
    return <img className={`case-image ${tall ? 'case-image-tall' : ''} ${className}`} src={src} alt={label} />
  }
  return (
    <div className={`case-image-placeholder ${tall ? 'case-image-tall' : ''} ${className}`}>
      <span>{label}</span>
      {size && <span className="case-image-size">{size}</span>}
    </div>
  )
}
