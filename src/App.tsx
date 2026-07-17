import { useState, useEffect } from 'react'
import portraitImg from './portrait.png';
import verticalImg from './vertical.png';
import horizontalImg from './horizontal.png';
import vertical1Img from './vertical1.png';
import horizontal1Img from './horizontal1.png';
import img5Img from './img5.png';

// ── Types ─────────────────────────────────────────────────────────────────────

type Page = 'home' | 'about' | 'writing' | 'projects' | 'web4' | 'principles' | 'now'

// ── Design tokens ─────────────────────────────────────────────────────────────

const C = {
  bg: '#0b0b0b',
  surface: '#111111',
  surfaceAlt: '#0f0f0f',
  text: '#ede8e1',
  muted: '#7a7772',
  mutedLight: '#a09b96',
  emerald: '#0e6649',
  emeraldBright: '#16a374',
  emeraldDim: 'rgba(14, 102, 73, 0.15)',
  border: 'rgba(237, 232, 225, 0.08)',
  borderMid: 'rgba(237, 232, 225, 0.14)',
  borderHover: 'rgba(237, 232, 225, 0.25)',
}

const F = {
  display: "'Gloock', Georgia, serif",
  body: "'DM Sans', system-ui, sans-serif",
}

// ── Data ──────────────────────────────────────────────────────────────────────

const ARTICLES = [
  {
    id: 1,
    title: "Why Marketing Is Really a Systems Problem",
    date: "July 2026",
    category: "Marketing · Systems",
    excerpt: "Most marketing fails not because the message is wrong, but because the infrastructure behind it is broken. Marketing is the output of your business system — amplifying what already exists, for better or worse.",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Cybersecurity Is Mostly Human Design",
    date: "June 2026",
    category: "Cybersecurity · Systems",
    excerpt: "The weakest link in any security system isn't the firewall. It's the behavior pattern of the people operating within it. Security is a design problem first.",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Why Businesses Fail Because of Systems, Not People",
    date: "June 2026",
    category: "Business · Leadership",
    excerpt: "We fire people when we should redesign processes. Most organizational failure is a failure of system design, not individual performance.",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Competence Is Designed",
    date: "May 2026",
    category: "Leadership · Excellence",
    excerpt: "Consistent high performance isn't a personality trait. It's the result of systems, feedback loops, and deliberate constraints built over time.",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 5,
    title: "The Hidden Cost of Inconsistency",
    date: "May 2026",
    category: "Business · Operations",
    excerpt: "Inconsistency is the most expensive habit in any organization. It erodes trust, compounds errors, and makes everything harder than it needs to be.",
    readTime: "6 min read",
    featured: false,
  },
]

const PRINCIPLES = [
  {
    number: "01",
    title: "Build systems before hiring people.",
    body: "People perform to the level of the systems surrounding them. Hiring before systematizing is how you create chaos at scale.",
  },
  {
    number: "02",
    title: "Reputation compounds faster than revenue.",
    body: "Revenue is linear. Reputation is exponential. Decisions that protect your reputation are often the most valuable investments you will ever make.",
  },
  {
    number: "03",
    title: "Every recurring problem deserves a process.",
    body: "If something goes wrong twice, it is not bad luck — it is a missing system. Document, formalize, and eliminate variance.",
  },
  {
    number: "04",
    title: "Complexity is often disguised indecision.",
    body: "When a system feels too complicated, the root cause is almost always an unresolved decision upstream. Simplify by deciding.",
  },
  {
    number: "05",
    title: "Marketing amplifies reality; it rarely replaces it.",
    body: "Great marketing makes a great product spread faster. Poor marketing applied to a weak product only accelerates failure.",
  },
  {
    number: "06",
    title: "Competence is engineered, not improvised.",
    body: "Consistent excellence is the result of deliberate system design — feedback loops, constraints, and intentional practice — not raw talent or luck.",
  },
 ]

const WEB4_SERVICES = [
  {
    title: "AI Automation",
    body: "We design and deploy AI systems that eliminate repetitive work, accelerate decision-making, and free your team to focus on what compounds.",
  },
  {
    title: "Website Development",
    body: "High-performance digital infrastructure built to convert, communicate, and scale. Engineered for growth, not just aesthetics.",
  },
  {
    title: "Brand Strategy",
    body: "A coherent brand is a growth asset. We build the positioning, voice, and visual identity that makes your market position defensible.",
  },
  {
    title: "Marketing Systems",
    body: "End-to-end demand generation built as a repeatable system — not a series of disconnected campaigns.",
  },
  {
    title: "Digital Growth",
    body: "Integrated strategy that connects your brand, content, and conversion infrastructure into a measurable growth engine.",
  },
]

const NOW_ITEMS = [
  "Building Web4 — developing client systems and internal infrastructure.",
  "Researching AI systems for African businesses and how automation changes competitive advantage in emerging markets.",
  "Writing a series on systems thinking applied to business operations, marketing, and leadership.",
  "Laying the groundwork for a long-term holding company structure across technology, media, and services.",
  "Reading: The Personal MBA (Josh Kaufman), The Hard Thing About Hard Things (Ben Horowitz).",
]

// ── Shared components ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: F.body,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: C.emeraldBright,
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }}>
      <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: C.emeraldBright, flexShrink: 0 }} />
      {children}
    </div>
  )
}

function Rule() {
  return <div style={{ borderTop: `1px solid ${C.border}`, width: '100%' }} />
}

function ImagePlaceholder({ aspectRatio = '4/5' }: { aspectRatio?: string }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio,
      position: 'relative',
      backgroundColor: '#0c160f',
      border: `1px solid rgba(14, 102, 73, 0.3)`,
    }}>
      {/* Corner brackets */}
      {[
        { top: -1, left: -1, borderTop: `2px solid ${C.emerald}`, borderLeft: `2px solid ${C.emerald}` },
        { top: -1, right: -1, borderTop: `2px solid ${C.emerald}`, borderRight: `2px solid ${C.emerald}` },
        { bottom: -1, left: -1, borderBottom: `2px solid ${C.emerald}`, borderLeft: `2px solid ${C.emerald}` },
        { bottom: -1, right: -1, borderBottom: `2px solid ${C.emerald}`, borderRight: `2px solid ${C.emerald}` },
      ].map((style, i) => (
        <div key={i} style={{ position: 'absolute', width: 20, height: 20, ...style }} />
      ))}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}>
        <div style={{ width: '32px', height: '1px', backgroundColor: `rgba(14, 102, 73, 0.4)` }} />
        <span style={{
          fontFamily: F.body,
          fontSize: '10px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: `rgba(14, 102, 73, 0.5)`,
        }}>Portrait</span>
        <div style={{ width: '32px', height: '1px', backgroundColor: `rgba(14, 102, 73, 0.4)` }} />
      </div>
    </div>
  )
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav({ currentPage, setPage }: { currentPage: Page; setPage: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Track window resizing natively to ensure perfect layout control
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    
    // Initial check
    onResize()
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const navLinks: { label: string; page: Page }[] = [
    { label: 'About', page: 'about' },
    { label: 'Writing', page: 'writing' },
    { label: 'Projects', page: 'projects' },
    { label: 'Web4', page: 'web4' },
    { label: 'Principles', page: 'principles' },
    { label: 'Now', page: 'now' },
  ]

  const handleNav = (p: Page) => {
    setPage(p)
    setMobileOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(11, 11, 11, 0.96)' : C.bg,
        borderBottom: `1px solid ${scrolled ? C.borderMid : C.border}`,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}>
          {/* Logo Name Link (with nowrap protection) */}
          <button
            onClick={() => handleNav('home')}
            style={{
              fontFamily: F.display,
              fontSize: '18px',
              color: C.text,
              letterSpacing: '-0.02em',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = C.emeraldBright)}
            onMouseLeave={e => (e.currentTarget.style.color = C.text)}
          >
            IK Aminu
          </button>

          {/* Desktop Navigation Links */}
          <div style={{ 
            display: isMobile ? 'none' : 'flex', 
            gap: '36px', 
            alignItems: 'center' 
          }}>
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                style={{
                  fontFamily: F.body,
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: currentPage === page ? C.emeraldBright : C.muted,
                  transition: 'color 0.2s ease',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { if (currentPage !== page) e.currentTarget.style.color = C.text }}
                onMouseLeave={e => { if (currentPage !== page) e.currentTarget.style.color = C.muted }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: isMobile ? 'flex' : 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '22px',
                height: '1px',
                backgroundColor: C.text,
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: mobileOpen
                  ? i === 0 ? 'translateY(6px) rotate(45deg)' : i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {isMobile && mobileOpen && (
          <div style={{
            backgroundColor: '#0d0d0d',
            borderTop: `1px solid ${C.border}`,
            padding: '24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                style={{
                  fontFamily: F.body,
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: currentPage === page ? C.emeraldBright : C.muted,
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  border: 'none',
                  width: '100%',
                  padding: '4px 0',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}

// ── Global Footer ─────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ 
      borderTop: `1px solid ${C.border}`, 
      padding: '40px 24px', 
      marginTop: 'auto',
      backgroundColor: C.bg 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        {/* Left Side: Copyright or Brand Note */}
        <span style={{ 
          fontFamily: F.body, 
          fontSize: '11px', 
          letterSpacing: '0.04em', 
          color: C.muted 
        }}>
          © 2026 IK Aminu. Built with systems.
        </span>

        {/* Right Side: Minimal Social Footprint Links */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {[
            { label: 'WA', href: 'https://wa.me/234XXXXXXXXXX' },
            { label: 'LN', href: 'https://linkedin.com/in/YOUR_USERNAME' },
            { label: 'X', href: 'https://x.com/YOUR_USERNAME' },
            { label: 'IG', href: 'https://instagram.com/YOUR_USERNAME' }
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                fontFamily: F.body, 
                fontSize: '11px', 
                fontWeight: 500, 
                letterSpacing: '0.08em', 
                color: C.muted, 
                textDecoration: 'none',
                transition: 'color 0.2s ease' 
              }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
// ── Home Page ─────────────────────────────────────────────────────────────────

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 32px 100px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gap: '64px',
          width: '100%',
          alignItems: 'center',
        }}
          className="grid-cols-1 md:grid-cols-[55fr_45fr]"
        >
          {/* Left */}
          <div>
            <div className="anim-fade-up" style={{ marginBottom: '28px' }}>
              <SectionLabel>Founder · Systems Thinker</SectionLabel>
            </div>
            <h1
              className="anim-fade-up-delay-1"
              style={{
                fontFamily: F.display,
                fontSize: 'clamp(44px, 6vw, 80px)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: C.text,
                marginBottom: '36px',
              }}
            >
              Engineering
              <br />
              Competence
              <br />
              <em style={{ fontStyle: 'italic', color: C.emeraldBright }}>Through Systems.</em>
            </h1>
            <p
              className="anim-fade-up-delay-2"
              style={{
                fontFamily: F.body,
                fontSize: '17px',
                fontWeight: 300,
                color: C.mutedLight,
                lineHeight: 1.75,
                maxWidth: '520px',
                marginBottom: '48px',
              }}
            >
              Founder of Web4. I build systems that help businesses grow through strategy,
              AI, marketing, and technology. I also write about the principles behind building
              businesses, people, and organizations that perform consistently over time as well as 
              about Psychology, Philosophy and any other intrest.
            </p>
            <div className="anim-fade-up-delay-3" style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setPage('writing')}
                style={{
                  fontFamily: F.body,
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: C.text,
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  backgroundColor: C.emerald,
                  border: `1px solid ${C.emerald}`,
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = C.emeraldBright
                  e.currentTarget.style.borderColor = C.emeraldBright
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = C.emerald
                  e.currentTarget.style.borderColor = C.emerald
                }}
              >
                Read My Thinking
              </button>
              <button
                onClick={() => setPage('web4')}
                style={{
                  fontFamily: F.body,
                  fontSize: '14px',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: C.muted,
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = C.text}
                onMouseLeave={e => e.currentTarget.style.color = C.muted}
              >
                Explore Web4 →
              </button>
            </div>
          </div>

          {/* Right: portrait image */}
          <div className="anim-fade-up-delay-2 w-full max-w-md mx-auto md:max-w-none">
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={portraitImg} 
                alt="Portrait" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Rule />

      {/* About preview */}
      <section style={{ padding: '100px 32px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '64px', alignItems: 'start' }}
          className="md:grid-cols-[1fr_2fr]"
        >
          <div>
            <SectionLabel>About</SectionLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.muted, letterSpacing: '0.02em' }}>
              Founder · Builder · Writer
            </p>
          </div>
          <div>
            <p style={{
              fontFamily: F.display,
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: C.text,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}>
              "My understanding of business didn't begin in a startup. It began watching
              my father build a travel company after decades in aviation."
            </p>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8, marginBottom: '32px' }}>
              That formative view of a person applying accumulated expertise to build something
              systematic, real and lasting shaped how I think about business, leadership, and growth.
              I've carried that lens into Web4 and every system I've built since...
            </p>
            <button
              onClick={() => setPage('about')}
              style={{
                fontFamily: F.body,
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.emeraldBright,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
              onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
            >
              Full Story →
            </button>
          </div>
        </div>
      </section>

      <Rule />

      {/* Featured articles */}
      <section style={{ padding: '100px 32px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <SectionLabel>Writing</SectionLabel>
          <button
            onClick={() => setPage('writing')}
            style={{ fontFamily: F.body, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, transition: 'color 0.2s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = C.text}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}
          >
            All Articles →
          </button>
        </div>

        {/* Featured article */}
        <button
          onClick={() => setPage('writing')}
          style={{ width: '100%', textAlign: 'left', marginBottom: '48px', display: 'block' }}
        >
          <div
            style={{
              padding: '48px',
              border: `1px solid ${C.border}`,
              backgroundColor: C.surfaceAlt,
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = C.borderMid
              e.currentTarget.style.backgroundColor = '#111'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = C.border
              e.currentTarget.style.backgroundColor = C.surfaceAlt
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright }}>
                {ARTICLES[0].category}
              </span>
              <span style={{ fontFamily: F.body, fontSize: '12px', color: C.muted }}>
                {ARTICLES[0].date} · {ARTICLES[0].readTime}
              </span>
            </div>
            <h3 style={{
              fontFamily: F.display,
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: C.text,
              marginBottom: '20px',
            }}>
              {ARTICLES[0].title}
            </h3>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.7, maxWidth: '640px' }}>
              {ARTICLES[0].excerpt}
            </p>
          </div>
        </button>

        {/* Article grid */}
        <div style={{ display: 'grid', gap: '1px', backgroundColor: C.border }}
          className="md:grid-cols-2"
        >
          {ARTICLES.slice(1, 5).map((article) => (
            <button
              key={article.id}
              onClick={() => setPage('writing')}
              style={{ textAlign: 'left', backgroundColor: C.bg, padding: '36px', transition: 'background-color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = C.surfaceAlt}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = C.bg}
            >
              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright }}>
                  {article.category}
                </span>
              </div>
              <h4 style={{
                fontFamily: F.display,
                fontSize: '22px',
                fontWeight: 400,
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
                color: C.text,
                marginBottom: '14px',
              }}>
                {article.title}
              </h4>
              <p style={{ fontFamily: F.body, fontSize: '14px', color: C.muted, lineHeight: 1.6, marginBottom: '20px' }}>
                {article.excerpt.split('.')[0]}.
              </p>
              <span style={{ fontFamily: F.body, fontSize: '12px', color: C.muted }}>
                {article.date} · {article.readTime}
              </span>
            </button>
          ))}
        </div>
      </section>

      <Rule />

      {/* Projects preview */}
      <section style={{ padding: '100px 32px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel>Projects</SectionLabel>
        <div style={{ display: 'grid', gap: '24px' }} className="md:grid-cols-2">
          {[
            {
              title: "Cyber Hygiene Compliance Monitoring System",
              tag: "Cybersecurity · Automation",
              body: "A system that transforms unsafe cybersecurity habits into measurable, repeatable behaviors through automation and continuous monitoring.",
            },
            {
              title: "Web4",
              tag: "Growth Systems · Company",
              body: "A growth systems company built to help businesses scale through AI automation, brand strategy, marketing systems, and digital infrastructure.",
            },
          ].map((project) => (
            <button
              key={project.title}
              onClick={() => setPage('projects')}
              style={{
                textAlign: 'left',
                border: `1px solid ${C.border}`,
                padding: '40px',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.borderMid}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
            >
              <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright, display: 'block', marginBottom: '20px' }}>
                {project.tag}
              </span>
              <h3 style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em', color: C.text, marginBottom: '16px' }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: F.body, fontSize: '14px', color: C.muted, lineHeight: 1.7 }}>
                {project.body}
              </p>
            </button>
          ))}
        </div>
      </section>

      <Rule />

      {/* Principles preview */}
      <section style={{ padding: '100px 32px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <SectionLabel>Principles</SectionLabel>
          <button
            onClick={() => setPage('principles')}
            style={{ fontFamily: F.body, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, transition: 'color 0.2s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = C.text}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}
          >
            All Principles →
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PRINCIPLES.slice(0, 3).map((p, i) => (
            <button
              key={p.number}
              onClick={() => setPage('principles')}
              style={{
                display: 'grid',
                textAlign: 'left',
                padding: '36px 0',
                borderTop: `1px solid ${C.border}`,
                transition: 'padding-left 0.2s ease',
                gridTemplateColumns: '48px 1fr',
                gap: '24px',
                alignItems: 'start',
                ...(i === PRINCIPLES.slice(0, 3).length - 1 ? { borderBottom: `1px solid ${C.border}` } : {}),
              }}
              onMouseEnter={e => e.currentTarget.style.paddingLeft = '12px'}
              onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
            >
              <span style={{ fontFamily: F.body, fontSize: '12px', color: C.emeraldBright, letterSpacing: '0.05em', paddingTop: '4px' }}>
                {p.number}
              </span>
              <div>
                <h4 style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 400, lineHeight: 1.3, color: C.text, marginBottom: '10px', letterSpacing: '-0.01em' }}>
                  {p.title}
                </h4>
                <p style={{ fontFamily: F.body, fontSize: '14px', color: C.muted, lineHeight: 1.7 }}>
                  {p.body}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Rule />

      {/* Now preview */}
      <section style={{ padding: '100px 32px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '64px' }} className="md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel>Now</SectionLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.muted }}>Last updated<br />July 2026</p>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {NOW_ITEMS.slice(0, 3).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: C.emeraldBright, marginTop: '9px', flexShrink: 0 }} />
                  <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.7 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPage('now')}
              style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.emeraldBright, transition: 'opacity 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Read full update →
            </button>
          </div>
        </div>
      </section>

      <Rule />

{/* Contact */}
      <section id="contact" style={{ padding: '100px 32px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <SectionLabel>Contact</SectionLabel>
        <h2 style={{
          fontFamily: F.display,
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          color: C.text,
          marginBottom: '24px',
        }}>
          Let's build something that lasts.
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, marginBottom: '48px' }}>
          Reach out via email or connect on any of the platforms below.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <a
            href="mailto:ikaminumail@gmail.com"
            style={{
              fontFamily: F.display,
              fontSize: '22px',
              color: C.text,
              letterSpacing: '-0.01em',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = C.emeraldBright}
            onMouseLeave={e => e.currentTarget.style.color = C.text}
          >
            ikaminumail@gmail.com
          </a>
          
          <div style={{ display: 'flex', gap: '28px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* WhatsApp */}
            <a
              href="https://wa.me/2347017190683" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              WhatsApp
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/IKaminu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              LinkedIn
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/IKAMINU"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              X
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/ikaminu_"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              Instagram
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/18Y7h7ybNH/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// ── About Page ────────────────────────────────────────────────────────────────

function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 100px' }}>
      <div className="anim-fade-in">
        <SectionLabel>About</SectionLabel>
        <h1 style={{
          fontFamily: F.display,
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          color: C.text,
          marginBottom: '80px',
          maxWidth: '800px',
        }}>
          IK Aminu
        </h1>

        {/* ── SECTION ONE: Dad's mention ── */}
        <div style={{ display: 'grid', gap: '80px', alignItems: 'start', marginBottom: '80px' }} className="grid-cols-1 md:grid-cols-[300px_1fr]">
          
          {/* Left Side: Image & Meta Items */}
          <div>
            {/* Custom Image Wrapper with Hover Controls */}
            <div 
              style={{
                width: '100%',
                aspectRatio: '3/4',
                position: 'relative',
                border: '1px solid rgba(14, 102, 73, 0.3)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
              className="group"
            >
              {/*Main Image */}
              <img 
                src={img5Img} 
                alt="IK Aminu" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Hover Overlay*/}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#0c160f',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'opacity 0.3s ease',
                }}
                className="opacity-0 group-hover:opacity-90"
              >
                <div style={{ width: '32px', height: '1px', backgroundColor: 'rgba(14, 102, 73, 0.6)' }} />
                <span style={{
                  fontFamily: F.body,
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: C.emeraldBright,
                  fontWeight: 500,
                }}>
                  2026
                </span>
                <div style={{ width: '32px', height: '1px', backgroundColor: 'rgba(14, 102, 73, 0.6)' }} />
              </div>

              {/*Corners */}
              {[
                { top: -1, left: -1, borderTop: `2px solid ${C.emerald}`, borderLeft: `2px solid ${C.emerald}` },
                { top: -1, right: -1, borderTop: `2px solid ${C.emerald}`, borderRight: `2px solid ${C.emerald}` },
                { bottom: -1, left: -1, borderBottom: `2px solid ${C.emerald}`, borderLeft: `2px solid ${C.emerald}` },
                { bottom: -1, right: -1, borderBottom: `2px solid ${C.emerald}`, borderRight: `2px solid ${C.emerald}` },
              ].map((style, i) => (
                <div key={i} style={{ position: 'absolute', width: 16, height: 16, ...style, pointerEvents: 'none' }} />
              ))}
            </div>

            {/* Meta Table Items directly underneath image */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Company', value: 'Web4' },
                { label: 'Focus', value: 'Business Systems' },
                { label: 'Location', value: 'Nigeria' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${C.border}`, paddingBottom: '12px' }}>
                  <span style={{ fontFamily: F.body, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted }}>{label}</span>
                  <span style={{ fontFamily: F.body, fontSize: '13px', color: C.mutedLight }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Narrative Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p style={{ fontFamily: F.display, fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 400, lineHeight: 1.55, color: C.text, letterSpacing: '-0.01em' }}>
              My understanding of business didn't begin in a startup. It began watching my father
              build a travel company after decades in aviation.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8 }}>
              He didn't build it by accident, rather by applying everything he had learned
              about precision, reliability, and systems, the same principles that kept aircraft
              airborne; when he was Regional Manager, UK, in Nigerian Airways; when he was Executive Director Kabo Air; 
              When he was MD/CEO Savannah air and other such airlines; to the messy, 
              human terrain of commerce in his later endeavors. 
            </p>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8 }}>
              What fascinated me wasn't simply the titles he held, but the mindset behind them. Aviation is an industry that 
              has absolutely no tolerance for disorder. Aircraft don't stay in the sky because people hope they will. They stay 
              there because thousands of carefully designed systems, procedures, checklists, and professionals work together 
              with extraordinary precision. Reliability isn't optional. Small mistakes compound. Details matter. Looking back, 
              I realize those principles never left him. When he transitioned into entrepreneurship and founded a travel company 
              specializing in Hajj, Umrah, and international travel services, he wasn't starting from scratch. He was translating 
              decades of operational discipline into an entirely different environment. The same habits that keep aircraft operating 
              safely and efficiently; clear processes, accountability, preparation, consistency, and trust, became 
              the foundation of the business he built.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8 }}>
              That was my first real education
              in what business actually is: a set of systems, designed by people, run by people,
              and ultimately failing or succeeding based on the quality of those systems.
              I've carried that framing into everything I've built since. Business problems are
              systems problems. Not people problems, not market problems. systems problems. When
              an organization struggles to grow, the fix isn't always a new hire or a bigger budget.
              Often it's a missing process, an unresolved ambiguity, or a feedback loop that never
              got built.
            </p>
          </div>
        </div>

        {/* ── SECTION TWO: WEB4 & Collage ── */}
        <div style={{ display: 'grid', gap: '80px', alignItems: 'center', marginBottom: '48px' }} className="grid-cols-1 md:grid-cols-[1fr_1fr]">
          {/* Text on the left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8 }}>
              I didn't appreciate any of this growing up. Like most children, I saw the outcomes long before I 
              understood the systems producing them. Only years later, after building my own agency, making expensive 
              mistakes, managing clients, working with people, and struggling with growth, did I realize I had been receiving an 
              education all along. My father never told are systems and organisation, but his career and actions - His life
              demonstrated it every day. That realization permanently changed how I think about entrepreneurship. Today, 
              when I design websites, build automations, structure marketing campaigns, or create operational workflows, 
              I'm rarely thinking only about the immediate task. I'm thinking about the system behind it. Because I've come 
              to believe that businesses don't rise or fall primarily because of ideas or effort. They rise or fall because 
              of the quality of the systems the people inside them choose to build.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8 }}>
              I founded Web4 with a simple conviction: that most businesses have more growth
              potential than they're currently accessing, and that the gap is almost always systemic.
              We close that gap through marketing systems, AI automation, brand strategy, and
              digital infrastructure. Built deliberately, geared specially towards each individual system.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8 }}>
              I also write. Not just to document what I've done, but to sharpen what I think. The act
              of putting a principle into writing tests whether it's actually a principle, or just
              a preference. Everything I publish here has passed that test.
            </p>
            <div style={{ borderLeft: `2px solid ${C.emerald}`, paddingLeft: '24px', marginTop: '16px' }}>
              <p style={{ fontFamily: F.display, fontSize: '20px', fontWeight: 400, lineHeight: 1.5, color: C.text, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
                "The long game requires patience with the process and impatience with the result.
                I try to hold both."
              </p>
            </div>
          </div>

          {/* Right Side: Dynamic Collage Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '100%' }}>
            
            {/* Top Left: Vertical 1 */}
            <div style={{ aspectRatio: '3/4', backgroundColor: C.surfaceAlt, border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
              <img 
                src={verticalImg} 
                alt="About focus" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            {/* Top Right: Horizontal 1 */}
            <div style={{ aspectRatio: '4/3', backgroundColor: C.surfaceAlt, border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden', alignSelf: 'start' }}>
              <img 
                src={horizontalImg} 
                alt="Systems landscape" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            {/* Bottom Left: Horizontal 2 */}
            <div style={{ aspectRatio: '4/3', backgroundColor: C.surfaceAlt, border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
              <img 
                src={horizontal1Img} 
                alt="Workspace session" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            {/* Bottom Right: Vertical 2 */}
            <div style={{ aspectRatio: '3/4', backgroundColor: C.surfaceAlt, border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden', marginTop: '-25%' }}>
              <img 
                src={vertical1Img} 
                alt="Process details" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
          </div>
        </div>

        {/* ── SECTION THREE: Action Buttons ── */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px', justifyContent: 'flex-start' }}>
          <button
            onClick={() => setPage('writing')}
            style={{
              fontFamily: F.body, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: C.text, padding: '12px 24px', border: `1px solid ${C.borderMid}`,
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.emeraldBright; e.currentTarget.style.color = C.emeraldBright }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderMid; e.currentTarget.style.color = C.text }}
          >
            Read My Writing
          </button>
          <button
            onClick={() => setPage('web4')}
            style={{
              fontFamily: F.body, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: C.text, padding: '12px 24px', backgroundColor: C.emerald,
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = C.emeraldBright}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = C.emerald}
          >
            Explore Web4
          </button>
        </div>

      </div>
    </div>
  )
}
// ── Writing Page ──────────────────────────────────────────────────────────────

function WritingPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 100px' }}>
      <div className="anim-fade-in">
        <SectionLabel>Writing</SectionLabel>
        <h1 style={{
          fontFamily: F.display,
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          color: C.text,
          marginBottom: '24px',
        }}>
          Essays on Systems, psychology, <br />
          <em style={{ fontStyle: 'italic', color: C.emeraldBright }}>Business & Competence.</em>
        </h1>
        <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, maxWidth: '560px', lineHeight: 1.7, marginBottom: '80px' }}>
          These are not opinion pieces. They are working principles, tested everyday,
          refined through practice, published to hold myself accountable.
        </p>

        {/* Featured article */}
        <div style={{ marginBottom: '2px' }}>
          <div style={{
            border: `1px solid ${C.border}`,
            backgroundColor: C.surfaceAlt,
            padding: '56px',
            marginBottom: '2px',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.borderMid}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright }}>Featured</span>
                <span style={{ width: '1px', height: '12px', backgroundColor: C.border }} />
                <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted }}>{ARTICLES[0].category}</span>
              </div>
              <span style={{ fontFamily: F.body, fontSize: '13px', color: C.muted }}>{ARTICLES[0].date} · {ARTICLES[0].readTime}</span>
            </div>
            <h2 style={{ fontFamily: F.display, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.text, marginBottom: '24px' }}>
              {ARTICLES[0].title}
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '17px', color: C.mutedLight, lineHeight: 1.75, maxWidth: '680px' }}>
              {ARTICLES[0].excerpt}
            </p>
          </div>
        </div>

        {/* Article list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {ARTICLES.slice(1).map((article) => (
            <div
              key={article.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'start',
                padding: '36px 40px',
                border: `1px solid ${C.border}`,
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = C.borderMid
                e.currentTarget.style.backgroundColor = C.surfaceAlt
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.border
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <div>
                <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright, display: 'block', marginBottom: '14px' }}>
                  {article.category}
                </span>
                <h3 style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 400, lineHeight: 1.25, color: C.text, letterSpacing: '-0.01em', marginBottom: '12px' }}>
                  {article.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '14px', color: C.muted, lineHeight: 1.6 }}>
                  {article.excerpt.split('.')[0]}.
                </p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span style={{ fontFamily: F.body, fontSize: '12px', color: C.muted, display: 'block', marginBottom: '6px' }}>{article.date}</span>
                <span style={{ fontFamily: F.body, fontSize: '12px', color: C.muted }}>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Projects Page ─────────────────────────────────────────────────────────────

function ProjectsPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 100px' }}>
      <div className="anim-fade-in">
        <SectionLabel>Projects</SectionLabel>
        <h1 style={{ fontFamily: F.display, fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.text, marginBottom: '80px' }}>
          Meaningful Work.
        </h1>

        {/* Featured project */}
        <div style={{ border: `1px solid ${C.border}`, marginBottom: '24px' }}>
          <div style={{
            padding: '56px',
            borderBottom: `1px solid ${C.border}`,
            backgroundColor: '#0c160f',
          }}>
            <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright, display: 'block', marginBottom: '24px' }}>
              Cybersecurity · Automation · Behavioral Systems
            </span>
            <h2 style={{ fontFamily: F.display, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.text, marginBottom: '24px' }}>
              Cyber Hygiene Compliance
              <br />Monitoring System
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '17px', color: C.mutedLight, lineHeight: 1.75, maxWidth: '680px' }}>
              A system that transforms unsafe cybersecurity habits into measurable, repeatable
              behaviors through automation and continuous monitoring. Built on the premise that
              most security failures are behavioral, not technical.
            </p>
          </div>
          <div style={{ padding: '48px 56px' }}>
            <div style={{ display: 'grid', gap: '32px' }} className="md:grid-cols-3">
              {[
                { label: 'Problem', body: 'Organizations train employees on cybersecurity once, then assume compliance. Habits erode. Risk compounds silently.' },
                { label: 'Approach', body: 'Automated behavior tracking and nudging creates accountability loops. Compliance becomes measurable rather than assumed.' },
                { label: 'Outcome', body: 'Repeatable security behaviors embedded into daily workflows. Measurable improvement in compliance posture over time.' },
              ].map(({ label, body }) => (
                <div key={label}>
                  <h4 style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.emeraldBright, marginBottom: '12px' }}>
                    {label}
                  </h4>
                  <p style={{ fontFamily: F.body, fontSize: '14px', color: C.muted, lineHeight: 1.7 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Web4 project */}
        <div
          style={{
            border: `1px solid ${C.border}`,
            padding: '48px',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease',
          }}
          onClick={() => setPage('web4')}
          onMouseEnter={e => e.currentTarget.style.borderColor = C.borderMid}
          onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright, display: 'block', marginBottom: '16px' }}>
                Growth Systems · Company
              </span>
              <h2 style={{ fontFamily: F.display, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', color: C.text, marginBottom: '16px' }}>
                Web4
              </h2>
              <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.7, maxWidth: '600px' }}>
                A growth systems company helping businesses scale through AI automation, brand strategy,
                marketing systems, and high-performance digital infrastructure.
              </p>
            </div>
            <span style={{ fontFamily: F.body, fontSize: '13px', color: C.emeraldBright }}>View Web4 →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Web4 Page ─────────────────────────────────────────────────────────────────

function Web4Page() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 100px' }}>
      <div className="anim-fade-in">
        <SectionLabel>Web4</SectionLabel>
        <div style={{ display: 'grid', gap: '80px', marginBottom: '100px' }} className="md:grid-cols-2">
          <div>
            <h1 style={{ fontFamily: F.display, fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.text, marginBottom: '32px' }}>
              A Growth Systems
              <br /><em style={{ fontStyle: 'italic', color: C.emeraldBright }}>Company.</em>
            </h1>
            <p style={{ fontFamily: F.body, fontSize: '17px', color: C.mutedLight, lineHeight: 1.8 }}>
              Web4 exists on a single conviction: that most businesses have more growth potential
              than they're currently accessing. The gap is almost always systemic.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, lineHeight: 1.8 }}>
              We don't sell tactics. We engineer the infrastructure for sustained, measurable growth;
              connecting brand, marketing, technology, strategy and AI into a coherent system that compounds
              over time.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, lineHeight: 1.8 }}>
              Our clients don't just get deliverables. They get systems that keep working after we leave.
            </p>
          </div>
        </div>

        <Rule />

        <div style={{ padding: '80px 0' }}>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', color: C.text, marginBottom: '56px' }}>
            What We Build
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {WEB4_SERVICES.map((service, i) => (
              <div
                key={service.title}
                style={{
                  display: 'grid',
                  padding: '40px 0',
                  borderTop: `1px solid ${C.border}`,
                  gap: '40px',
                  alignItems: 'start',
                  ...(i === WEB4_SERVICES.length - 1 ? { borderBottom: `1px solid ${C.border}` } : {}),
                }}
                className="md:grid-cols-[240px_1fr]"
              >
                <div>
                  <span style={{ fontFamily: F.body, fontSize: '12px', letterSpacing: '0.08em', color: C.emeraldBright, textTransform: 'uppercase' }}>
                    0{i + 1}
                  </span>
                  <h3 style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 400, lineHeight: 1.3, color: C.text, marginTop: '10px', letterSpacing: '-0.01em' }}>
                    {service.title}
                  </h3>
                </div>
                <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, lineHeight: 1.75 }}>
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Rule />

        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', color: C.text, marginBottom: '24px' }}>
            Ready to build a system that compounds?
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, marginBottom: '40px' }}>
            We work with a small number of clients at a time. Reach out to start the conversation.
          </p>
          <a
            href="mailto:ikaminumail@gmail.com"
            style={{
              fontFamily: F.body, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: C.text, padding: '14px 32px', backgroundColor: C.emerald,
              transition: 'background-color 0.2s ease', display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = C.emeraldBright}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = C.emerald}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Principles Page ───────────────────────────────────────────────────────────

function PrinciplesPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 100px' }}>
      <div className="anim-fade-in">
        <SectionLabel>Principles</SectionLabel>
        <h1 style={{ fontFamily: F.display, fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.text, marginBottom: '24px' }}>
          How I Think.
        </h1>
        <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, maxWidth: '560px', lineHeight: 1.75, marginBottom: '80px' }}>
          These are some of my operating principles, not just aspirations. They govern decisions, shape priorities,
          and get tested every time something goes wrong.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.number}
              style={{
                display: 'grid',
                padding: '52px 0',
                borderTop: `1px solid ${C.border}`,
                gap: '24px',
                alignItems: 'start',
                ...(i === PRINCIPLES.length - 1 ? { borderBottom: `1px solid ${C.border}` } : {}),
              }}
              className="md:grid-cols-[64px_1fr]"
            >
              <span style={{ fontFamily: F.body, fontSize: '13px', color: C.emeraldBright, letterSpacing: '0.06em', paddingTop: '6px', fontWeight: 500 }}>
                {p.number}
              </span>
              <div>
                <h3 style={{ fontFamily: F.display, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, lineHeight: 1.25, color: C.text, marginBottom: '20px', letterSpacing: '-0.015em' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '16px', color: C.muted, lineHeight: 1.8, maxWidth: '640px' }}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Now Page ──────────────────────────────────────────────────────────────────

function NowPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 100px' }}>
      <div className="anim-fade-in">
        <SectionLabel>Now</SectionLabel>
        <div style={{ display: 'grid', gap: '80px', alignItems: 'start' }} className="md:grid-cols-[220px_1fr]">
          <div>
            <p style={{ fontFamily: F.body, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, marginBottom: '8px' }}>
              Last updated
            </p>
            <p style={{ fontFamily: F.display, fontSize: '18px', color: C.text }}>July 2026</p>
            <div style={{ marginTop: '40px', borderTop: `1px solid ${C.border}`, paddingTop: '32px' }}>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>
                A /now page shows what I'm focused on at this point in time. Inspired by Derek Sivers.
              </p>
            </div>
          </div>

          <div>
            <h1 style={{ fontFamily: F.display, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.025em', color: C.text, marginBottom: '48px' }}>
              What I'm working on right now.
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {NOW_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '20px 1fr',
                    gap: '20px',
                    padding: '28px 0',
                    borderTop: `1px solid ${C.border}`,
                    alignItems: 'start',
                    ...(i === NOW_ITEMS.length - 1 ? { borderBottom: `1px solid ${C.border}` } : {}),
                  }}
                >
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: C.emeraldBright, marginTop: '10px' }} />
                  <p style={{ fontFamily: F.body, fontSize: '16px', color: C.mutedLight, lineHeight: 1.8 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '64px', padding: '40px', backgroundColor: '#0c160f', border: `1px solid rgba(14, 102, 73, 0.2)` }}>
              <p style={{ fontFamily: F.display, fontSize: '20px', fontWeight: 400, lineHeight: 1.55, color: C.text, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
                "Every company, essay, and system I build today
                is a brick in a structure I expect to be standing in thirty years."
              </p>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: C.muted, marginTop: '20px' }}>— IK Aminu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />
      case 'about': return <AboutPage setPage={setCurrentPage} />
      case 'writing': return <WritingPage />
      case 'projects': return <ProjectsPage setPage={setCurrentPage} />
      case 'web4': return <Web4Page />
      case 'principles': return <PrinciplesPage />
      case 'now': return <NowPage />
    }
  }

  return (
    <div style={{ 
      backgroundColor: C.bg, 
      minHeight: '100vh', 
      color: C.text,
      display: 'flex',
      flexDirection: 'column' // Sets up a vertical stack structure
    }}>
      <Nav currentPage={currentPage} setPage={setCurrentPage} />
      
      {/* The main content */}
      <main key={currentPage} className="anim-fade-in" style={{ flex: 1 }}>
        {renderPage()}
      </main>

      {/* The footer */}
      <Footer />
    </div>
  )
}
