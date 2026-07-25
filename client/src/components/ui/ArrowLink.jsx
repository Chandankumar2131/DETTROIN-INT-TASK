import { ArrowRight } from 'lucide-react'

export default function ArrowLink({ children, href = '#', light = false }) {
  return <a className={`arrow-link ${light ? 'arrow-link--light' : ''}`} href={href}><span>{children}</span><ArrowRight size={18} strokeWidth={1.8} /></a>
}
