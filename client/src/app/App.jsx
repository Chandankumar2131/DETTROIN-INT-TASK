import { useEffect, useState } from 'react'
import {
  ArrowRight, BookOpen, CalendarDays, Camera, ChevronDown, ExternalLink,
  Mail, MapPin, Menu, MessageCircle, Play, Search, Sparkles, Trophy, Users, X,
} from 'lucide-react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { primaryNavigation as navItems } from '../data/navigation'
import InnerPage from '../pages/InnerPage'

const pillars = [
  { icon: BookOpen, number: '01', title: 'Academic Curiosity', text: 'A process-focused curriculum that encourages students to question, discover and think independently.' },
  { icon: Sparkles, number: '02', title: 'Creative Expression', text: 'Arts, music and performance give every learner the confidence to find and share their voice.' },
  { icon: Users, number: '03', title: 'Community & Character', text: 'Empathy, responsibility and service shape thoughtful citizens ready to contribute to the world.' },
  { icon: Trophy, number: '04', title: 'Wellbeing & Sport', text: 'Movement, teamwork and mindful practices support healthy, resilient and well-rounded young people.' },
]

const events = [
  { date: '22', month: 'JUL', category: 'Innovation', title: 'Synapse 2026', description: 'The 15th edition of our student-led celebration of ideas, inquiry and innovation.', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85' },
  { date: '17', month: 'JUL', category: 'School Event', title: 'The 23rd Laissez Faire', description: 'A multidisciplinary forum where young minds collaborate, create and lead.', image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85' },
  { date: '13', month: 'JUL', category: 'Sports', title: 'Inter-School Zonal Tournament', description: 'Celebrating discipline, sportsmanship and an outstanding team performance.', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85' },
]

function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="Vasant Valley School home">
      <span className="brand-mark" aria-hidden="true"><span>V</span></span>
      <span className="brand-copy"><strong>Vasant Valley</strong><small>School · New Delhi</small></span>
    </a>
  )
}

function ArrowLink({ children, href = '#', light = false }) {
  return <a className={`arrow-link ${light ? 'arrow-link--light' : ''}`} href={href}><span>{children}</span><ArrowRight size={18} strokeWidth={1.8} /></a>
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="notice-bar">
        <div className="shell notice-inner">
          <p><span>Admissions</span> Applications for the 2026–27 academic year are now open.</p>
          <a href="#admissions">View details <ArrowRight size={14} /></a>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="shell nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div className="nav-item" key={item.label}>
                <a className="nav-parent" href={item.href}>{item.label}{item.children && <ChevronDown size={14} />}</a>
                {item.children && <div className="nav-dropdown">{item.children.map((child) => <a href={child.href} key={child.label}>{child.label}<ArrowRight size={15} /></a>)}</div>}
              </div>
            ))}
            <a className="nav-with-icon" href="#learning">More <ChevronDown size={14} /></a>
          </nav>
          <div className="nav-actions">
            <button className="icon-button" aria-label="Search"><Search size={19} /></button>
            <a className="portal-link" href="#footer">School Portal <ExternalLink size={14} /></a>
            <a className="button button--small" href="#admissions">Admissions</a>
            <button className="menu-button" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={24} /></button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__top"><Brand /><button aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X size={26} /></button></div>
        <nav aria-label="Mobile navigation">
          {[...navItems, { label: 'Admissions', href: '#admissions' }, { label: 'Contact', href: '#footer' }].map((item, index) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowRight size={20} /></a>
          ))}
        </nav>
        <p>Sector C, Vasant Kunj<br />New Delhi 110070</p>
      </div>

      <div id="main-content">
        <section className="hero">
          <div className="hero__image" role="img" aria-label="Students learning together in a bright school environment" />
          <div className="hero__overlay" />
          <div className="shell hero__content">
            <div className="hero__eyebrow"><span /> Vasant Valley School · Since 1990</div>
            <h1>Learning with purpose.<br /><em>Leading with character.</em></h1>
            <p>We nurture independent minds through joyful learning, compassionate action and the courage to imagine what comes next.</p>
            <div className="hero__actions">
              <a className="button button--light" href="#about">Discover our school <ArrowRight size={18} /></a>
              <a className="text-link" href="#experience">Explore student life <ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="shell hero__stats" aria-label="School facts">
            <div><strong>36</strong><span>Years of excellence</span></div>
            <div><strong>8</strong><span>Acre green campus</span></div>
            <div><strong>1:10</strong><span>Teacher–student ratio</span></div>
            <div className="hero__scroll"><span>Scroll to explore</span><i /></div>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="shell intro__grid">
            <div><span className="eyebrow">Our philosophy</span><h2>Education is preparation <em>for life.</em></h2></div>
            <div className="intro__copy">
              <p className="large-copy">Vasant Valley School encourages students to push the boundaries of current understanding and set new benchmarks in education.</p>
              <p>Founded in 1990 as an initiative of the Education Today Trust, we are an inclusive day school where academic rigour is balanced with creativity, wellbeing and a strong sense of community.</p>
              <ArrowLink href="#learning">Our vision & philosophy</ArrowLink>
            </div>
          </div>
          <div className="shell image-story">
            <div className="image-story__main"><img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=85" alt="Teacher guiding students during a classroom discussion" /></div>
            <div className="image-story__card">
              <span>Our motto</span><blockquote>“Excellence<br />in Deed”</blockquote>
              <p>Learning that is enjoyable, interactive and grounded in responsibility.</p>
              <ArrowLink light href="#learning">Read our story</ArrowLink>
            </div>
            <div className="image-story__small"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85" alt="Students engaged in collaborative learning" /></div>
          </div>
        </section>

        <section className="learning section" id="learning">
          <div className="shell section-heading">
            <div><span className="eyebrow">The Vasant Valley learning experience</span><h2>Whole people.<br /><em>Endless possibilities.</em></h2></div>
            <div><p>Our campus is a classroom. Every lesson, conversation and experience is designed to develop confident, compassionate and curious young people.</p><ArrowLink href="#experience">Explore learning</ArrowLink></div>
          </div>
          <div className="shell pillar-grid">
            {pillars.map(({ icon: Icon, number, title, text }) => (
              <article className="pillar-card" key={title}>
                <div className="pillar-card__top"><Icon size={25} strokeWidth={1.5} /><span>{number}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <a href="#experience" aria-label={`Learn more about ${title}`}><ArrowRight size={20} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="experience__image" role="img" aria-label="Students walking together across the school campus" />
          <div className="experience__panel">
            <span className="eyebrow eyebrow--light">A day at Vasant Valley</span>
            <h2>Beyond the<br /><em>classroom.</em></h2>
            <p>The school day brings together academic and non-academic learning experiences, thoughtfully planned around each student’s developmental needs.</p>
            <div className="experience__links">
              {['Arts & expression', 'Sport & wellbeing', 'Clubs & societies', 'Community service'].map((item) => <a href="#news" key={item}><span>{item}</span><ArrowRight size={18} /></a>)}
            </div>
          </div>
        </section>

        <section className="section news" id="news">
          <div className="shell section-title-row">
            <div><span className="eyebrow">What’s happening</span><h2>Stories from<br /><em>our community.</em></h2></div>
            <ArrowLink href="#footer">View all news & events</ArrowLink>
          </div>
          <div className="shell news-grid">
            {events.map((event, index) => (
              <article className={`news-card ${index === 0 ? 'news-card--featured' : ''}`} key={event.title}>
                <a className="news-card__image" href="#footer"><img src={event.image} alt="" /><span className="date-badge"><strong>{event.date}</strong>{event.month}</span></a>
                <div className="news-card__body"><span className="news-card__category">{event.category}</span><h3><a href="#footer">{event.title}</a></h3><p>{event.description}</p><ArrowLink href="#footer">Read story</ArrowLink></div>
              </article>
            ))}
          </div>
        </section>

        <section className="admissions" id="admissions">
          <div className="admissions__image" /><div className="admissions__overlay" />
          <div className="shell admissions__content">
            <span className="eyebrow eyebrow--light">Begin your journey</span>
            <h2>A place to belong.<br /><em>A future to shape.</em></h2>
            <p>Discover an education that sees your child as an individual and gives them the space, support and inspiration to flourish.</p>
            <div><a className="button button--light" href="#footer">Explore admissions <ArrowRight size={18} /></a><a className="text-link" href="#footer">Plan a visit <CalendarDays size={18} /></a></div>
          </div>
        </section>
      </div>

      <footer id="footer">
        <div className="shell footer-main">
          <div className="footer-brand"><Brand light /><p>Nurturing independent minds and compassionate citizens since 1990.</p><div className="social-links"><a href="#footer" aria-label="Instagram"><Camera size={18} /></a><a href="#footer" aria-label="Facebook"><MessageCircle size={18} /></a><a href="#footer" aria-label="YouTube"><Play size={18} /></a></div></div>
          <div className="footer-links">
            <div><h3>Explore</h3><a href="#about">About us</a><a href="#learning">Learning experience</a><a href="#experience">Student life</a><a href="#news">News & events</a></div>
            <div><h3>Information</h3><a href="#admissions">Admissions</a><a href="#footer">FAQs</a><a href="#footer">School portal</a><a href="#footer">Statutory compliance</a></div>
            <div className="footer-contact"><h3>Visit us</h3><p><MapPin size={17} /> Sector C, Vasant Kunj,<br />New Delhi 110070</p><p><Mail size={17} /> info@vasantvalley.edu.in</p><a href="tel:+911141767940">+91 11 4176 7940</a></div>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Vasant Valley School</span><div><a href="#footer">Privacy</a><a href="#footer">Accessibility</a><a href="#footer">Sitemap</a></div><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision-philosophy/" element={<InnerPage page="vision" />} />
        <Route path="/learning-experience/" element={<InnerPage page="learning" />} />
        <Route path="/international-curriculum/" element={<InnerPage page="international" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
