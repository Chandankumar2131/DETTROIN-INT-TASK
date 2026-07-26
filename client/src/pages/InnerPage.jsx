import { useEffect, useState } from 'react'
import {
  ArrowRight, Brain, Camera, ChevronDown, ExternalLink, Heart,
  Mail, MapPin, Menu, MessageCircle, Palette, Play, Search, ShieldCheck,
  Sparkles, Target, Trophy, Users, X,
} from 'lucide-react'
import { fullNavigation as links } from '../data/navigation'

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
            <div className="nav-item">
              <a href="/vision-philosophy/" className={`nav-parent ${active === 'vision' ? 'active' : ''}`}>Our School <ChevronDown size={14} /></a>
              <div className="nav-dropdown"><a href="/vision-philosophy/">Vision & Philosophy <ArrowRight size={15} /></a><a href="#page-footer">About Vasant Valley <ArrowRight size={15} /></a></div>
            </div>
            <div className="nav-item">
              <a href="/learning-experience/" className={`nav-parent ${['learning', 'international', 'special'].includes(active) ? 'active' : ''}`}>Learning <ChevronDown size={14} /></a>
              <div className="nav-dropdown"><a href="/learning-experience/">The Learning Experience <ArrowRight size={15} /></a><a href="/international-curriculum/">International Curriculum <ArrowRight size={15} /></a><a href="/special-education-needs/">Special Education Needs <ArrowRight size={15} /></a></div>
            </div>
            <div className="nav-item">
              <a href="/programmes/intra-school/" className={`nav-parent ${['intra', 'inter'].includes(active) ? 'active' : ''}`}>Programmes <ChevronDown size={14} /></a>
              <div className="nav-dropdown"><a href="/programmes/intra-school/">Intra-School <ArrowRight size={15} /></a><a href="/programmes/inter-school/">Inter-School <ArrowRight size={15} /></a></div>
            </div>
            <a href="#page-footer">News & Events</a>
            <div className="nav-item">
              <a className={`nav-parent ${['infrastructure', 'day'].includes(active) ? 'active' : ''}`} href="/infrastructure/">More <ChevronDown size={14} /></a>
              <div className="nav-dropdown"><a href="/infrastructure/">Infrastructure <ArrowRight size={15} /></a><a href="/a-day-in-school/">A Day in School <ArrowRight size={15} /></a></div>
            </div>
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

const learnerAttributes = [
  ['Confident', 'Working fluently with information and ideas—our own and those of others.'],
  ['Responsible', 'Taking ownership while remaining responsive and respectful to others.'],
  ['Reflective', 'Understanding ourselves as learners and continually improving how we learn.'],
  ['Innovative', 'Equipped for new and future challenges with curiosity and imagination.'],
  ['Engaged', 'Ready to participate intellectually and socially, and to make a difference.'],
]

const subjectGroups = [
  { title: 'Languages', subjects: 'English Language & Literature · Hindi · Spanish' },
  { title: 'Humanities', subjects: 'History · Economics · Geography · Global Perspectives' },
  { title: 'Sciences', subjects: 'Biology · Physics · Chemistry · Environmental Management' },
  { title: 'Mathematics', subjects: 'Mathematics · Extended Mathematics' },
  { title: 'Creative & Professional', subjects: 'Art & Design · Computer Science · ICT · Business Studies' },
]

function InternationalPage() {
  return (
    <>
      <section className="inner-hero international-hero">
        <div className="inner-hero__image" /><div className="inner-hero__shade" />
        <div className="shell inner-hero__content">
          <span className="page-kicker">Cambridge International · Classes 8–12</span>
          <h1>Local roots.<br /><em>Global horizons.</em></h1>
          <p>A globally recognised Cambridge pathway that develops independent thinkers, confident communicators and curious lifelong learners.</p>
        </div>
        <div className="inner-hero__index"><span>03</span><i /><small>International curriculum</small></div>
      </section>

      <section className="international-intro">
        <div className="shell manifesto__grid">
          <div><span className="eyebrow">Cambridge at Vasant Valley</span><h2>A coherent journey from <em>foundation to mastery.</em></h2></div>
          <div><p className="manifesto__lead">Vasant Valley School is a registered Cambridge International School offering the Cambridge curriculum for Classes 8–12.</p><p>Class 8 builds the skills and attributes needed for IGCSE in Classes 9 and 10, before students progress to Cambridge Advanced in Classes 11 and 12.</p></div>
        </div>
      </section>

      <section className="pathway-section">
        <div className="shell">
          <div className="inner-section-title light"><div><span className="eyebrow eyebrow--light">The Cambridge pathway</span><h2>One pathway.<br /><em>Three defining stages.</em></h2></div></div>
          <div className="pathway-grid">
            <article><span>01 · Class 8</span><h3>Foundation Year</h3><p>A thoughtful transition that builds inquiry, academic language and readiness for international study.</p><strong>Discover & prepare</strong></article>
            <article><span>02 · Classes 9–10</span><h3>Cambridge IGCSE</h3><p>A broad, flexible curriculum that develops knowledge, practical understanding and intellectual enquiry.</p><strong>Explore & specialise</strong></article>
            <article><span>03 · Classes 11–12</span><h3>AS & A Levels</h3><p>In-depth study that strengthens independent thinking and prepares learners for universities worldwide.</p><strong>Deepen & progress</strong></article>
          </div>
        </div>
      </section>

      <section className="attributes-section">
        <div className="shell attributes-grid">
          <div className="attributes-sticky"><span className="eyebrow">Cambridge learner attributes</span><h2>Ready for the world they will <em>help shape.</em></h2><p>The Cambridge approach develops habits of mind that travel far beyond an examination.</p></div>
          <div className="attribute-list">{learnerAttributes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="subjects-section">
        <div className="shell">
          <div className="subjects-heading"><div><span className="eyebrow">Breadth with choice</span><h2>Subjects that open <em>possibilities.</em></h2></div><p>Students build a balanced programme across languages, humanities, sciences, mathematics and creative disciplines, guided by their interests and future goals.</p></div>
          <div className="subject-list">{subjectGroups.map((group, index) => <article key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><p>{group.subjects}</p><ArrowRight size={19} /></article>)}</div>
        </div>
      </section>

      <section className="international-cta">
        <div className="shell"><div><span className="eyebrow eyebrow--light">Cambridge Advanced</span><h2>Designed for depth.<br /><em>Recognised worldwide.</em></h2></div><div><p>AS & A Levels offer flexible subject choices, rigorous assessment and a strong foundation for university study in India and across the world.</p><a className="button button--light" href="https://www.cambridgeinternational.org/" target="_blank" rel="noreferrer">Explore Cambridge <ExternalLink size={16} /></a></div></div>
      </section>

      <section className="next-page"><div className="shell"><span>Return to our approach</span><a href="/learning-experience/"><strong>The Learning Experience</strong><ArrowRight /></a></div></section>
    </>
  )
}

const supportServices = [
  { icon: Users, title: 'Special education', text: 'Individualised classroom support and adapted learning strategies led by trained special educators.' },
  { icon: Target, title: 'Occupational therapy', text: 'Purpose-built spaces and evidence-informed support for sensory integration and everyday skills.' },
  { icon: Heart, title: 'Physiotherapy', text: 'Movement-based intervention that develops mobility, coordination and physical confidence.' },
  { icon: MessageCircle, title: 'Language therapy', text: 'Personalised communication support that helps every child participate and express themselves.' },
  { icon: Brain, title: 'Psychological support', text: 'Thoughtful emotional and behavioural guidance for students, families and classroom teams.' },
  { icon: Sparkles, title: 'Dyslexia intervention', text: 'Structured remediation and strategies for specific learning differences and literacy development.' },
]

function SpecialEducationPage() {
  return (
    <>
      <section className="inner-hero special-hero">
        <div className="inner-hero__image" /><div className="inner-hero__shade" />
        <div className="shell inner-hero__content">
          <span className="page-kicker">Inclusion at Vasant Valley</span>
          <h1>Every learner seen.<br /><em>Every strength valued.</em></h1>
          <p>An inclusive school community where individual differences are understood, supported and celebrated with dignity.</p>
        </div>
        <div className="inner-hero__index"><span>04</span><i /><small>Special education needs</small></div>
      </section>

      <section className="special-intro">
        <div className="shell manifesto__grid">
          <div><span className="eyebrow">Our inclusive model</span><h2>Belonging begins with being <em>understood.</em></h2></div>
          <div><p className="manifesto__lead">Students with additional needs learn within the general education classroom, supported by a multidisciplinary team and an individual plan.</p><p>Special educators, occupational therapists, physiotherapists, language therapists, psychologists and a dyslexia therapist work together during school hours—around each child’s strengths, affinities and goals.</p></div>
        </div>
      </section>

      <section className="support-section">
        <div className="shell">
          <div className="special-heading"><div><span className="eyebrow eyebrow--light">A multidisciplinary team</span><h2>Support that surrounds <em>the whole child.</em></h2></div><p>Expertise is brought together, not placed in silos. Teachers, therapists and families collaborate so support feels consistent, connected and part of everyday school life.</p></div>
          <div className="support-grid">{supportServices.map(({ icon: Icon, title, text }, index) => <article key={title}><div><Icon size={26} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="iep-section">
        <div className="iep-image" />
        <div className="iep-content"><span className="eyebrow">Individual education plans</span><h2>A plan as individual as <em>the learner.</em></h2><p>Each child has an Individual Education Plan shaped around their present skills, interests and developmental priorities. Goals are specific, measurable and regularly reviewed with everyone involved.</p><div className="iep-steps"><span><strong>01</strong>Understand strengths</span><span><strong>02</strong>Set meaningful goals</span><span><strong>03</strong>Support & adapt</span><span><strong>04</strong>Review together</span></div></div>
      </section>

      <section className="early-section">
        <div className="shell early-grid"><div><span className="eyebrow">Early intervention</span><h2>Meeting children <em>where they are.</em></h2><p>Our Early Intervention Programme supports younger children who are not yet ready for a full in-class experience. A calm, carefully structured environment helps them build readiness, independence and confidence at their own pace.</p></div><div className="early-note"><ShieldCheck size={37} /><strong>Accessible by design</strong><p>The campus and learning environment are designed to reduce barriers and enable meaningful participation for every student.</p></div></div>
      </section>

      <section className="special-quote"><div className="shell"><Heart size={34} /><blockquote>“Inclusion is not simply a place in the classroom. It is the experience of being known, heard and able to participate.”</blockquote><a className="button button--light" href="#page-footer">Speak with our team <ArrowRight size={16} /></a></div></section>

      <section className="next-page"><div className="shell"><span>Explore our wider approach</span><a href="/learning-experience/"><strong>The Learning Experience</strong><ArrowRight /></a></div></section>
    </>
  )
}

const intraActivities = [
  { icon: Heart, title: 'Pastoral care', text: 'Strong bonds with class teachers and pastoral tutors create safety, trust and belonging.' },
  { icon: Users, title: 'Outreach', text: 'Students serve communities through teaching, road safety, environmental action and exchange.' },
  { icon: Palette, title: 'Arts', text: 'Visual and performing arts develop expression, cultural understanding and creative confidence.' },
  { icon: Brain, title: 'Life skills', text: 'Problem solving, decision making, resilience and communication prepare students for life.' },
  { icon: Trophy, title: 'Sports', text: 'Dedicated physical education, coaching, house competitions and annual athletics build teamwork.' },
  { icon: Sparkles, title: 'Hobbies & clubs', text: 'Weekly opportunities help students discover interests and pursue skills beyond academics.' },
]

const interEvents = [
  ['Drama Festival', 'A three-day celebration of theatre, dance and music that brings schools together to share ideas and creative practice.'],
  ['India Today Debate', 'Young debaters from India and abroad deliberate on contemporary issues through rigorous parliamentary debate.'],
  ['Inter-School Sports', 'Athletics, basketball, football, hockey, tennis and cricket tournaments across age groups and categories.'],
  ['Tech VViz', 'A technology festival featuring digital imaging, music creation, quizzes, gaming and multimedia challenges.'],
  ['Synapse', 'An annual science event inviting students to investigate their environment through experiments and challenges.'],
  ['Laissez Faire', 'Collaborative teams apply social-science thinking to real-world case studies and action-oriented solutions.'],
  ['Art Marathon', 'A two-day studio experience where students create, collaborate and exhibit work with practising artists.'],
  ['Speakers’ Forum', 'Literary and imaginative platforms for middle-school students, from book discussion to slam poetry.'],
]

function ProgrammesPage({ mode }) {
  const isIntra = mode === 'intra'
  return (
    <>
      <section className={`inner-hero programmes-hero ${isIntra ? 'intra-hero' : 'inter-hero'}`}>
        <div className="inner-hero__image" /><div className="inner-hero__shade" />
        <div className="shell inner-hero__content">
          <span className="page-kicker">Programmes · {isIntra ? 'Within our community' : 'Beyond our campus'}</span>
          <h1>{isIntra ? <>Discover a passion.<br /><em>Grow into yourself.</em></> : <>Meet the world.<br /><em>Rise to the occasion.</em></>}</h1>
          <p>{isIntra ? 'A rich programme of care, creativity, service, sport and exploration helps every student recognise and actualise their potential.' : 'Structured opportunities in academics, arts and sport build confidence, perspective and a healthy spirit of competition.'}</p>
        </div>
        <div className="inner-hero__index"><span>{isIntra ? '05' : '06'}</span><i /><small>{isIntra ? 'Intra-school' : 'Inter-school'}</small></div>
      </section>

      <div className="programme-switch" aria-label="Programme categories">
        <div className="shell"><a className={isIntra ? 'active' : ''} href="/programmes/intra-school/"><span>01</span>Intra-School</a><a className={!isIntra ? 'active' : ''} href="/programmes/inter-school/"><span>02</span>Inter-School</a></div>
      </div>

      {isIntra ? (
        <>
          <section className="programmes-intro"><div className="shell manifesto__grid"><div><span className="eyebrow">Growing from within</span><h2>A school experience as individual as <em>every child.</em></h2></div><div><p className="manifesto__lead">Our intra-school programmes create room for every learner to find an interest, develop a passion and grow at an individual pace.</p><p>Social-emotional development, integrated learning, creative expression, physical wellbeing and service come together to nurture healthy, capable and compassionate individuals.</p></div></div></section>
          <section className="intra-grid-section"><div className="shell"><div className="special-heading"><div><span className="eyebrow eyebrow--light">Life beyond lessons</span><h2>Experiences that become <em>part of who we are.</em></h2></div><p>Each programme is a deliberate part of learning—not an extra. Together, they build agency, curiosity, belonging and the confidence to try.</p></div><div className="programme-card-grid">{intraActivities.map(({ icon: Icon, title, text }, index) => <article key={title}><div><Icon size={25} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><ArrowRight size={18} /></article>)}</div></div></section>
          <section className="programme-feature"><div className="programme-feature__image intra-feature" /><div className="programme-feature__copy"><span className="eyebrow">Outside classroom learning</span><h2>The world is a powerful <em>teacher.</em></h2><p>Environment programmes, camps, science fairs, talks and exchange experiences allow students to apply ideas, encounter new perspectives and build lasting relationships with people and place.</p><div className="tag-row"><span>School camps</span><span>Science fair</span><span>Environment</span><span>Exchange</span></div></div></section>
        </>
      ) : (
        <>
          <section className="programmes-intro"><div className="shell manifesto__grid"><div><span className="eyebrow">Learning through encounter</span><h2>Competition with <em>curiosity and respect.</em></h2></div><div><p className="manifesto__lead">Inter-school programmes invite students to interface with the outside world in a purposeful, structured setting.</p><p>Meeting peers from diverse contexts develops confidence and perspective while fostering a healthy competitive spirit across academics, arts and sport.</p></div></div></section>
          <section className="event-showcase"><div className="shell"><div className="event-showcase__head"><span className="eyebrow eyebrow--light">Signature experiences</span><h2>Ideas shared.<br /><em>Talents tested.</em></h2></div><div className="inter-event-grid">{interEvents.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={18} /></article>)}</div></div></section>
          <section className="programme-feature reverse"><div className="programme-feature__image inter-feature" /><div className="programme-feature__copy"><span className="eyebrow">A wider community</span><h2>Many schools.<br /><em>One shared stage.</em></h2><p>Festivals and forums give young people a place to listen closely, articulate original ideas, collaborate across difference and celebrate excellence with generosity.</p><div className="tag-row"><span>Debate</span><span>Science</span><span>Technology</span><span>Arts</span><span>Sports</span></div></div></section>
        </>
      )}
      <section className="next-page"><div className="shell"><span>Switch programme</span><a href={isIntra ? '/programmes/inter-school/' : '/programmes/intra-school/'}><strong>{isIntra ? 'Inter-School Programmes' : 'Intra-School Programmes'}</strong><ArrowRight /></a></div></section>
    </>
  )
}

const campusSpaces = [
  { icon: Brain, title: 'Science & technology', text: 'Well-equipped laboratories and connected classrooms support experimentation, inquiry and digital learning.' },
  { icon: MessageCircle, title: 'Libraries', text: 'Two welcoming libraries offer quiet study, research resources and a culture of reading across the school.' },
  { icon: Palette, title: 'Visual & performing arts', text: 'Specialised studios, performance spaces and an auditorium give ideas a place to become visible.' },
  { icon: Trophy, title: 'Sport & movement', text: 'Fields, courts, a gymnasium and coaching facilities make physical wellbeing part of every school day.' },
  { icon: Heart, title: 'Therapy & wellbeing', text: 'Purpose-designed occupational therapy, sensory integration and medical spaces support individual needs.' },
  { icon: Users, title: 'Community spaces', text: 'Courtyards, gardens, play areas and mixed-use spaces encourage encounter, conversation and belonging.' },
]

function InfrastructurePage() {
  return (
    <>
      <section className="inner-hero infrastructure-hero">
        <div className="inner-hero__image" /><div className="inner-hero__shade" />
        <div className="shell inner-hero__content">
          <span className="page-kicker">Our Campus · Vasant Kunj</span>
          <h1>A campus built<br /><em>around childhood.</em></h1>
          <p>Eight green acres where classrooms, courtyards, gardens and playing fields come together as one continuous learning environment.</p>
        </div>
        <div className="inner-hero__index"><span>07</span><i /><small>Infrastructure</small></div>
      </section>

      <section className="campus-intro">
        <div className="shell campus-intro__grid">
          <div><span className="eyebrow">Space to grow</span><h2>The entire campus is <em>a classroom.</em></h2></div>
          <div><p className="manifesto__lead">Planned spaces for focused activity sit alongside flexible, mixed-use areas that invite curiosity, movement and unexpected connections.</p><p>Sports fields, gardens, play areas and courtyards are home to more than 400 species of trees and plants. The entire campus is accessible and challenge compliant.</p></div>
        </div>
        <div className="shell campus-numbers"><div><strong>8</strong><span>Acres of campus</span></div><div><strong>4</strong><span>Acres of built space</span></div><div><strong>400+</strong><span>Plant species</span></div><div><strong>100%</strong><span>Wireless enabled</span></div></div>
      </section>

      <section className="spaces-section">
        <div className="shell"><div className="special-heading"><div><span className="eyebrow eyebrow--light">Learning spaces</span><h2>Purposeful places.<br /><em>Open possibilities.</em></h2></div><p>Every environment is designed to support a different way of learning—from quiet concentration and scientific enquiry to collaboration, performance and play.</p></div><div className="spaces-grid">{campusSpaces.map(({ icon: Icon, title, text }, index) => <article key={title}><div><Icon size={25} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="green-campus">
        <div className="green-campus__image" />
        <div className="green-campus__copy"><span className="eyebrow">A living landscape</span><h2>Green space is not a backdrop. <em>It is part of learning.</em></h2><p>Shaded paths, planted courtyards and open fields create opportunities to observe changing seasons, learn from nature and find moments of calm throughout the day.</p><div className="tag-row"><span>Gardens</span><span>Courtyards</span><span>Playing fields</span><span>Outdoor learning</span></div></div>
      </section>

      <section className="safety-section">
        <div className="shell safety-grid"><div className="safety-heading"><span className="eyebrow">Health, safety & access</span><h2>Care built into <em>every detail.</em></h2><p>Healthy, secure and accessible environments allow students and teachers to focus on what matters most: learning and belonging.</p></div><div className="safety-list"><article><ShieldCheck size={25} /><div><h3>Health & medical care</h3><p>Two equipped medical rooms, three qualified nurses, a paediatrician on call and regular health checks.</p></div></article><article><Target size={25} /><div><h3>Prepared & protected</h3><p>First-responder training, fire and earthquake drills, CCTV, air purification and cyber-safety education.</p></div></article><article><MapPin size={25} /><div><h3>Responsible transport</h3><p>School transport follows applicable Delhi and national safety guidance, supported by encouraged carpooling.</p></div></article></div></div>
      </section>

      <section className="campus-gallery"><div className="gallery-one" /><div className="gallery-two" /><div className="gallery-title"><span>Explore the campus</span><h2>Spaces that feel<br /><em>like Vasant Valley.</em></h2></div></section>
      <section className="next-page"><div className="shell"><span>Continue exploring</span><a href="/learning-experience/"><strong>The Learning Experience</strong><ArrowRight /></a></div></section>
    </>
  )
}

const daySchedule = [
  ['08:00', 'Arrive & connect', 'The day begins in classrooms and alcoves—welcoming spaces for conversation, planning and settling in.'],
  ['08:00–09:35', 'Learning block one', 'Focused academic experiences shaped for each year group and designed around active participation.'],
  ['09:35', 'Breakfast together', 'A shared school meal and the first pause of the day, announced by music in the corridors.'],
  ['09:50–11:10', 'Learning block two', 'Inquiry, discussion, laboratories, studios and movement create varied ways to understand.'],
  ['11:10', 'Midday break', 'Time to move, play, read, meet friends and return to class refreshed.'],
  ['11:20–13:20', 'Learning block three', 'Longer sessions allow projects, practical work and interdisciplinary ideas to develop.'],
  ['13:20', 'Lunch & community', 'Students and teachers share lunch provided by the school, with menus available to families.'],
  ['13:45–15:00', 'Learning block four', 'Reflection, application and creative experiences bring the formal school day to a close.'],
]

function DayInSchoolPage() {
  return (
    <>
      <section className="inner-hero day-hero">
        <div className="inner-hero__image" /><div className="inner-hero__shade" />
        <div className="shell inner-hero__content">
          <span className="page-kicker">A Day at Vasant Valley · 8:00–3:00</span>
          <h1>Every day has<br /><em>its own rhythm.</em></h1>
          <p>Learning moves inside and outside the classroom—through focused lessons, shared meals, conversation, play, creative work and discovery.</p>
        </div>
        <div className="inner-hero__index"><span>08</span><i /><small>A day in school</small></div>
      </section>

      <section className="day-intro">
        <div className="shell manifesto__grid"><div><span className="eyebrow">Dynamic by design</span><h2>A full day of <em>learning and belonging.</em></h2></div><div><p className="manifesto__lead">A typical day at Vasant Valley is invigorating, social and purposeful—combining structure with the freedom to explore.</p><p>Each year group has three sections of approximately 30 students. Classrooms are organised around shared alcoves that become hubs for connection, collaboration and everyday community.</p></div></div>
      </section>

      <section className="day-timeline">
        <div className="shell"><div className="timeline-heading"><span className="eyebrow eyebrow--light">The daily schedule</span><h2>Four learning blocks.<br /><em>Three restorative breaks.</em></h2><p>Lesson lengths vary from 20 to 60 minutes by year group. There are no bells—the sound of music in the corridors signals a change in rhythm.</p></div><div className="schedule-list">{daySchedule.map(([time, title, text], index) => <article key={time}><span>{String(index + 1).padStart(2, '0')}</span><time>{time}</time><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
      </section>

      <section className="day-feature">
        <div className="day-feature__image" />
        <div className="day-feature__copy"><span className="eyebrow">Shared meals</span><h2>Food, friendship and a moment to <em>pause.</em></h2><p>Breakfast and lunch are provided for every student. These shared meals are part of the social fabric of school—a chance to slow down, talk and reconnect before the next experience begins.</p><div className="meal-points"><span><Heart size={19} /> Nutritious school meals</span><span><Users size={19} /> Everyone eats together</span><span><ShieldCheck size={19} /> Menus shared with families</span></div></div>
      </section>

      <section className="after-school">
        <div className="shell after-school__grid"><div><span className="eyebrow">After 3:00 pm</span><h2>The day can keep <em>unfolding.</em></h2><p>Students from Classes 3 to 12 may stay for optional camps in sport and the arts. Led by experienced practitioners, these programmes allow children to deepen skills in areas that genuinely interest them.</p><a className="button" href="/programmes/intra-school/">Explore programmes <ArrowRight size={16} /></a></div><div className="after-school__cards"><article><Trophy size={27} /><h3>Sports camps</h3><p>Focused coaching, practice and progression across a range of disciplines.</p></article><article><Palette size={27} /><h3>Arts camps</h3><p>Visual and performing arts experiences that turn curiosity into craft.</p></article></div></div>
      </section>

      <section className="day-quote"><div className="shell"><span>One small Vasant Valley tradition</span><blockquote>“You know it is break time when music begins playing in the corridors.”</blockquote></div></section>
      <section className="next-page"><div className="shell"><span>See where the day unfolds</span><a href="/infrastructure/"><strong>Explore Our Campus</strong><ArrowRight /></a></div></section>
    </>
  )
}

export default function InnerPage({ page }) {
  useEffect(() => { window.scrollTo(0, 0) }, [page])
  const content = page === 'vision' ? <VisionPage /> : page === 'international' ? <InternationalPage /> : page === 'special' ? <SpecialEducationPage /> : page === 'intra' || page === 'inter' ? <ProgrammesPage mode={page} /> : page === 'infrastructure' ? <InfrastructurePage /> : page === 'day' ? <DayInSchoolPage /> : <LearningPage />
  return <main id="page-top"><PageHeader active={page} />{content}<PageFooter /></main>
}
