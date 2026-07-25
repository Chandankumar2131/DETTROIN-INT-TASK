export default function Brand({ light = false, homeHref = '/' }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href={homeHref} aria-label="Vasant Valley School home">
      <span className="brand-mark" aria-hidden="true"><span>V</span></span>
      <span className="brand-copy"><strong>Vasant Valley</strong><small>School · New Delhi</small></span>
    </a>
  )
}
