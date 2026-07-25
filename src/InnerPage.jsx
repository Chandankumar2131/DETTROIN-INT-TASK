import { useEffect, useState } from 'react'
import {
  ArrowRight, Brain, Camera, ChevronDown, ExternalLink, Heart,
  Mail, MapPin, Menu, MessageCircle, Palette, Play, Search, ShieldCheck,
  Sparkles, Target, Trophy, Users, X,
} from 'lucide-react'

const links = [
  ['Home', '/'],
  ['Vision & Philosophy', '/vision-philosophy/'],
  ['The Learning Experience', '/learning-experience/'],
  ['International Curriculum', '#'],
  ['Special Education Needs', '#'],
  ['Intra-School Programmes', '#'],
  ['Inter-School Programmes', '#'],
  ['Infrastructure', '#'],
  ['A Day in School', '#'],
  ['Announcements', '#'],
  ['News & Events', '#'],
  ['Admissions', '#'],
]

function PageBrand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="/" aria-label="Vasant Valley School home">
      <span className="brand-mark" aria-hidden="true"><span>V</span></span>
      <span className="brand-copy"><strong>Vasant Valley</strong><small>School · New Delhi</small></span>
    </a>
  )
}

function PageHeader({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="notice-bar inner-notice">
        <div className="shell notice-inner"><p><span>Admissions</span> Applications for the 2026–27 academic year are now open.</p><a href="#page-footer">Enquire now <ArrowRight size={14} /></a></div>
      </div>
      <header className={`inner-header ${scrolled ? 'inner-header--scrolled' : ''}`}>
        <div className="shell nav-wrap">
          <PageBrand />
          <nav className="desktop-nav inner-nav" aria-label="Primary navigation">
            <a href="/vision-philosophy/" className={active === 'vision' ? 'active' : ''}>Our School</a>
            <a href="/learning-experience/" className={active === 'learning' ? 'active' : ''}>Learning</a>
            <a href="#page-footer">Student Life</a><a href="#page-footer">News & Events</a>
            <a className="nav-with-icon" href="#page-footer">More <ChevronDown size={14} /></a>
          </nav>
          <div className="nav-actions">
            <button className="icon-button" aria-label="Search"><Search size={19} /></button>
            <a className="portal-link" href="#page-footer">School Portal <ExternalLink size={14} /></a>
            <a className="button button--small" href="#page-footer">Admissions</a>
            <button className="menu-button inner-menu-trigger" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu size={24} /></button>
          </div>
        </div>
      </header>
      <aside className={`page-drawer ${open ? 'page-drawer--open' : ''}`} aria-hidden={!open}>
        <div className="page-drawer__head"><PageBrand /><button onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button></div>
        <div className="page-drawer__body">
          <p>Explore Vasant Valley</p>
          <nav>{links.map(([label, href], i) => <a className={label.toLowerCase().includes(active) ? 'current' : ''} href={href} key={label}><span>{String(i + 1).padStart(2, '0')}</span>{label}<ArrowRight size={18} /></a>)}</nav>
        </div>
      </aside>
    </>
  )
}

function PageFooter() {
  return (
    <footer id="page-footer">
      <div className="shell footer-main">
        <div className="footer-brand"><PageBrand light /><p>Nurturing independent minds and compassionate citizens since 1990.</p><div className="social-links"><a href="#page-footer" aria-label="Instagram"><Camera size={18} /></a><a href="#page-footer" aria-label="Facebook"><MessageCircle size={18} /></a><a href="#page-footer" aria-label="YouTube"><Play size={18} /></a></div></div>
        <div className="footer-links">
          <div><h3>Explore</h3><a href="/vision-philosophy/">Vision & philosophy</a><a href="/learning-experience/">Learning experience</a><a href="#page-footer">Student life</a><a href="#page-footer">News & events</a></div>
          <div><h3>Information</h3><a href="#page-footer">Admissions</a><a href="#page-footer">FAQs</a><a href="#page-footer">School portal</a><a href="#page-footer">Statutory compliance</a></div>
          <div className="footer-contact"><h3>Visit us</h3><p><MapPin size={17} /> Sector C, Vasant Kunj,<br />New Delhi 110070</p><p><Mail size={17} /> info@vasantvalley.edu.in</p><a href="tel:+911141767940">+91 11 4176 7940</a></div>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Vasant Valley School</span><div><a href="#page-footer">Privacy</a><a href="#page-footer">Accessibility</a><a href="#page-footer">Sitemap</a></div><a href="#page-top">Back to top ↑</a></div>
    </footer>
  )
}

const values = [
  { icon: Brain, title: 'Independent thinking', text: 'The courage to question, explore and form convictions of one’s own.' },
  { icon: Heart, title: 'Compassion in action', text: 'Empathy and service woven into everyday school life.' },
  { icon: Users, title: 'Global citizenship', text: 'Rooted in India, ready to participate thoughtfully in the world.' },
  { icon: ShieldCheck, title: 'Integrity & purpose', text: 'The confidence to choose what is right and act with responsibility.' },
]

function VisionPage() {
  return (
    <>
      <section className="inner-hero vision-hero">
        <div className="inner-hero__image" /><div className="inner-hero__shade" />
        <div className="shell inner-hero__content">
          <span className="page-kicker">Our School · Vision & Philosophy</span>
          <h1>Every child.<br /><em>Every possibility.</em></h1>
          <p>We believe education should awaken curiosity, build character and prepare young people to shape a better future.</p>
        </div>
        <div className="inner-hero__index"><span>01</span><i /><small>Our vision</small></div>
      </section>
      <section className="manifesto">
        <div className="shell manifesto__grid">
          <div><span className="eyebrow">What we believe</span><h2>A lifelong journey of <em>mind, body and spirit.</em></h2></div>
          <div>
            <p className="manifesto__lead">Each child entrusted to us deserves education in its finest form—a holistic experience that challenges every learner to exceed their own expectations.</p>
            <p>We nurture torchbearers of tomorrow: people who believe in the strength of their convictions, take pride in being Indian and work together in the spirit of global citizenship.</p>
          </div>
        </div>
      </section>
      <section className="vision-quote">
        <div className="vision-quote__image" />
        <div className="vision-quote__card"><span>Our promise</span><blockquote>“Our work in school shapes the future—and no constraints shall daunt us.”</blockquote><p>Vasant Valley School</p></div>
      </section>
      <section className="values-section">
        <div className="shell"><div className="inner-section-title"><span className="eyebrow">Values in practice</span><h2>Character is not taught.<br /><em>It is lived.</em></h2></div>
          <div className="value-grid">{values.map(({ icon: Icon, title, text }, i) => <article key={title}><div><Icon size={25} /><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>
      <section className="next-page"><div className="shell"><span>Continue exploring</span><a href="/learning-experience/"><strong>The Learning Experience</strong><ArrowRight /></a></div></section>
    </>
  )
}

const dimensions = [
  { icon: Brain, title: 'Cerebral', text: 'Question, investigate and understand.' },
  { icon: Users, title: 'Social', text: 'Collaborate with empathy and respect.' },
  { icon: Trophy, title: 'Physical', text: 'Build confidence, health and resilience.' },
  { icon: Palette, title: 'Creative', text: 'Imagine, make and express new ideas.' },
  { icon: Heart, title: 'Emotional', text: 'Develop awareness and inner strength.' },
  { icon: Sparkles, title: 'Ethical', text: 'Choose with integrity and purpose.' },
]

const cycles = [
  ['01', 'April — June', 'Discover', 'New questions, provocations and possibilities begin each journey.'],
  ['02', 'July — September', 'Explore', 'Students investigate, experiment and connect ideas across disciplines.'],
  ['03', 'October — December', 'Apply', 'Learning becomes visible through projects, dialogue and purposeful action.'],
  ['04', 'January — March', 'Reflect', 'Feedback and reflection reveal progress and shape the next challenge.'],
]

function LearningPage() {
  return (
    <>
      <section className="inner-hero learning-hero">
        <div className="inner-hero__image" /><div className="inner-hero__shade" />
        <div className="shell inner-hero__content">
          <span className="page-kicker">Learning at Vasant Valley</span>
          <h1>Understanding,<br /><em>not memorising.</em></h1>
          <p>Learning that goes beyond a syllabus—building leadership, self-discipline and the confidence to keep asking better questions.</p>
        </div>
        <div className="inner-hero__index"><span>02</span><i /><small>Our approach</small></div>
      </section>
      <section className="learning-intro">
        <div className="shell manifesto__grid">
          <div><span className="eyebrow">Our approach</span><h2>Going above<br /><em>& beyond.</em></h2></div>
          <div><p className="manifesto__lead">The process is as important as the outcome. Our curriculum nurtures leadership and self-discipline while supporting the holistic development of every child.</p><p>Students and teachers are encouraged to exceed their own expectations, push the boundaries of their understanding and actualise their potential.</p></div>
        </div>
      </section>
      <section className="dimensions">
        <div className="shell"><div className="inner-section-title light"><span className="eyebrow eyebrow--light">The whole child</span><h2>One learning experience.<br /><em>Many dimensions.</em></h2></div>
          <div className="dimension-grid">{dimensions.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={27} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>
      <section className="cycles-section">
        <div className="shell"><div className="cycles-heading"><span className="eyebrow">The academic year</span><h2>Four cycles.<br /><em>Continuous growth.</em></h2><p>From April to March, each learning cycle creates a rhythm of discovery, application, feedback and reflection.</p></div>
          <div className="cycles">{cycles.map(([n, months, title, text]) => <article key={n}><span>{n}</span><small>{months}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>
      <section className="assessment">
        <div className="shell assessment__grid"><div><span className="eyebrow">Assessment & reporting</span><h2>Feedback that moves <em>learning forward.</em></h2><p>Reports offer a complete picture of each child’s strengths, interests and skills—combining qualitative and quantitative feedback from teachers, students and parents.</p></div><div className="assessment__cycle"><Target size={48} /><strong>The cycle of learning</strong><span>Design</span><span>Teach</span><span>Assess</span><span>Reflect</span></div></div>
      </section>
      <section className="next-page"><div className="shell"><span>Return to our foundations</span><a href="/vision-philosophy/"><strong>Vision & Philosophy</strong><ArrowRight /></a></div></section>
    </>
  )
}

export default function InnerPage({ page }) {
  useEffect(() => { window.scrollTo(0, 0) }, [page])
  return <main id="page-top"><PageHeader active={page} />{page === 'vision' ? <VisionPage /> : <LearningPage />}<PageFooter /></main>
}
