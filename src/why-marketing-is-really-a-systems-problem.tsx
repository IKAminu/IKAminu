import React, { useEffect } from 'react'

// - Shared Design Tokens matching App.tsx
const C = {
  bg: '#0b0b0b',
  surface: '#121212',
  surfaceAlt: '#171717',
  border: 'rgba(255, 255, 255, 0.08)',
  borderMid: 'rgba(255, 255, 255, 0.15)',
  text: '#ede8e1',
  muted: '#888888',
  mutedLight: '#b0b0b0',
  emerald: '#0e6649',
  emeraldBright: '#16a374',
}

const F = {
  display: "'Gloock', Georgia, serif",
  body: "'DM Sans', -apple-system, sans-serif",
}

export default function WhyMarketingIsASystemsProblem() {
  useEffect(() => {
    // Dynamic page title for SEO & Browser tab
    document.title = "Why Marketing Is Really a Systems Problem | IK Aminu"
    window.scrollTo(0, 0)
  }, [])

  const navigate = (page: 'writing' | 'cybersecurity-is-mostly-human-design') => {
    window.dispatchEvent(new CustomEvent('site:navigate', { detail: page }))
  }

  const goToWriting = () => navigate('writing')
  const goToCybersecurity = () => navigate('cybersecurity-is-mostly-human-design')

return (
  <div style={{ backgroundColor: C.bg, minHeight: '100vh', color: C.text, fontFamily: F.body, padding: '120px 24px 80px' }}>
    
    {/* Top Header / Back Navigation */}
    <header style={{ maxWidth: '760px', margin: '0 auto 60px' }}>
      <button type="button" onClick={goToWriting} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: F.body, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright, background: 'transparent', border: 0, padding: 0, marginBottom: '40px', cursor: 'pointer' }}>
        ← Back to Writing
      </button>
      
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: F.body, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright }}>
            Marketing · Systems · By IK Aminu
          </span>
          <span style={{ color: C.muted }}>•</span>
          <span style={{ fontFamily: F.body, fontSize: '13px', color: C.muted }}>
            July 2026 • 8 min read
          </span>
        </div>

        <h1 style={{
          fontFamily: F.display,
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: C.text,
          marginBottom: '24px'
        }}>
          Why Marketing Is Really a Systems Problem.
        </h1>

        <p style={{ fontFamily: F.body, fontSize: '18px', color: C.mutedLight, lineHeight: 1.7, fontStyle: 'italic', borderLeft: `2px solid ${C.emeraldBright}`, paddingLeft: '20px' }}>
          Most marketing fails not because the message is wrong, but because the infrastructure behind it is broken. Marketing is the output of your business system, amplifying what already exists, for better or worse.
        </p>
      </header>

      {/* Main Article Content */}
      <main style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Most people hear the word 'marketing' and immediately think ‘ads’. They picture flashy videos, billboards, Instagram reels, influencers, Meta Ads Manager, Google Ads, SEO, or whichever platform is currently convincing founders that salvation is only one monthly subscription away.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          So they do what almost everyone does.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          They open a Meta Ads account, spend three hours trying to figure out the ancient black magic that is Meta Ads Manager, burn through a chunk of their budget, get a handful of clicks and maybe one lead, then conclude that "Facebook ads don't work."
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Others go one step further. They hire an agency (see WEB4), invest in branding, content, social media management, websites, and advertising, only to spend the next few weeks refreshing WhatsApp while asking the same question every founder eventually asks:
        </p>

        <blockquote style={{
          fontFamily: F.display,
          fontSize: '24px',
          fontStyle: 'italic',
          color: C.text,
          margin: '20px 0',
          paddingLeft: '24px',
          borderLeft: `2px solid ${C.emeraldBright}`
        }}>
          "Where are the leads?"
        </blockquote>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          There is nothing inherently wrong with any of this. Agencies matter. Advertising matters. Branding matters. Good creative matters. The problem is that they're usually trying to solve the wrong problem.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Usually, marketing isn't the thing that is broken in all this. More often than not it’s the business system. Businesses suffer from a systems problem that happens to reveal itself through marketing.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Marketing has developed a strange reputation over the years. People treat it like a magical machine. Feed it enough money and customers are supposed to appear. That would honestly be nice. As an agency owner I can tell you that It would have saved our agency from explaining the same thing every Tuesday morning.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Unfortunately, we are not in a fairytale land. Marketing doesn't create demand, ever. It only amplifies whatever already exists, if that’s missing or broken? get ready to sink money.
        </p>

        <h2 style={{ fontFamily: F.display, fontSize: '28px', color: C.text, marginTop: '24px', fontWeight: 400 }}>
          Analogy: Think about an aircraft's radio.
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          A radio allows the pilot to communicate with hundreds of people across enormous distances. It is incredibly powerful. But if the pilot gives the wrong coordinates, poor instructions, or doesn't know where he's flying, a better radio doesn't solve the problem. It simply allows more people to hear the mistake.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Marketing works the exact same way. In so which, If your offer is confusing, marketing helps more people become confused.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          If your pricing makes no sense, marketing helps more people decide not to buy. Or worse, makes the wrong people come to you.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          If your customer experience is frustrating, marketing simply delivers more disappointed customers into the same experience.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          The amplifier isn't broken. The problem is the signal going into it. Marketing works much the same way. Two companies can spend exactly the same amount on advertising and achieve completely different outcomes because the quality of the underlying message determines how effectively the budget is used. One business earns several dollars for every dollar invested, while the other concludes that marketing is a waste of money, even though the real issue was never the advertising spend itself.
        </p>

        <h2 style={{ fontFamily: F.display, fontSize: '28px', color: C.text, marginTop: '24px', fontWeight: 400 }}>
          Consider the journey from product to loyal customer.
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          A business first builds something people actually want. Then it figures out who that product is really for. That becomes positioning. Positioning shapes the brand. The brand influences the marketing. Marketing generates conversations that become sales. Sales hand customers to delivery. Delivery determines satisfaction. Satisfied customers return and recommend others.
        </p>

        {/* Visual Pipeline Block */}
        <div style={{
          backgroundColor: C.surfaceAlt,
          border: `1px solid ${C.border}`,
          padding: '28px 20px',
          borderRadius: '6px',
          margin: '20px 0',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.emeraldBright, display: 'block', marginBottom: '16px' }}>
            Linear Demand Pipeline
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', alignItems: 'center', fontSize: '14px', color: C.text }}>
            <span>Product</span> → <span>Positioning</span> → <span>Brand</span> → <span style={{ color: C.emeraldBright, fontWeight: 'bold' }}>Marketing</span> → <span>Sales</span> → <span>Delivery</span> → <span>Retention</span> → <span>Referrals</span>
          </div>
        </div>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Notice something here, marketing sits in the dead middle of the process. It isn't the beginning, and it isn't the end. Instead, it depends on every system that comes before it, while every system that follows determines whether the marketing ultimately becomes profitable.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Suppose your sales process is inconsistent. Some enquiries receive replies in five minutes while others wait three days because someone forgot to charge the office phone. Marketing doesn't fix that. It simply gives your sales team more people to accidentally ignore.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Suppose your onboarding process is poor. Customers buy once, become confused, and quietly disappear. More advertising only increases the number of customers who leave disappointed.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Suppose your positioning is unclear. You try to sell to everyone because everyone has money, at least in theory. Your website talks to restaurant owners, hospitals, construction companies, schools, travel agencies, and barbers at exactly the same time. Marketing faithfully delivers that confused message to thousands of people.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          The amplifier isn't broken. The issue is the signal. This is why experienced marketers rarely fixate on colours, fonts, logos, or button placements in the early stages. Those elements certainly have their place, but they only become meaningful once the underlying message, offer, and positioning are already working.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          An elegant website cannot compensate for an offer nobody understands. Beautiful branding cannot rescue poor customer service. Brilliant advertisements cannot consistently sell a product that solves no meaningful problem.
        </p>

        <h2 style={{ fontFamily: F.display, fontSize: '28px', color: C.text, marginTop: '24px', fontWeight: 400 }}>
          Good marketing exposes weaknesses.
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Ironically, that's one of its greatest strengths.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          A successful marketing campaign is often the fastest audit a business will ever receive. If large numbers of people see your offer and don't buy, you've learned something valuable. If they buy but don't stay, you've learned something else. If they stay but never recommend anyone, the system has identified another weak point.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Marketing constantly tells you where the business leaks. The mistake is assuming the leak exists inside marketing itself. Most of the time it doesn't.
        </p>

        <h2 style={{ fontFamily: F.display, fontSize: '28px', color: C.text, marginTop: '24px', fontWeight: 400 }}>
          Scaling the Machine
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Founders often ask how they can scale their marketing. The better question is whether the business underneath is ready to be scaled at all.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Growth multiplies everything. It multiplies strengths, but it also multiplies weaknesses. A business with poor delivery doesn't become successful because it reaches more customers. It simply disappoints more people in less time.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          The same principle applies everywhere. A larger sales team doesn't fix a broken onboarding process. More traffic doesn't fix unclear positioning. Bigger advertising budgets don't fix products customers don't actually value.
        </p>

        <blockquote style={{
          fontFamily: F.display,
          fontSize: '24px',
          fontStyle: 'italic',
          color: C.text,
          margin: '20px 0',
          paddingLeft: '24px',
          borderLeft: `2px solid ${C.emeraldBright}`
        }}>
          Scale is multiplication. It never changes the equation.
        </blockquote>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          The businesses that grow consistently aren't usually the ones with the cleverest advertisements. They're the ones whose systems are quietly doing their jobs.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.mutedLight }}>
          Marketing simply makes those systems visible.
        </p>
      </main>

      {/* Footer Navigation & Up Next Section */}
      <footer style={{ maxWidth: '760px', margin: '80px auto 0', paddingTop: '40px', borderTop: `1px solid ${C.border}` }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, display: 'block', marginBottom: '16px' }}>
          Up Next
        </span>
        
        <button type="button" onClick={goToCybersecurity} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}>
          <div style={{
            display: 'block',
            backgroundColor: C.surfaceAlt,
            border: `1px solid ${C.border}`,
            padding: '28px',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'border-color 0.2s ease'
          }}
        >
          <span style={{ fontSize: '11px', color: C.emeraldBright, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Cybersecurity Systems
          </span>
          <h3 style={{ fontFamily: F.display, fontSize: '22px', color: C.text, margin: '8px 0', fontWeight: 400 }}>
            Cybersecurity Is Mostly Human Design →
          </h3>
          <p style={{ fontSize: '14px', color: C.mutedLight, margin: 0 }}>
            The weakest link in any security system isn't the firewall. It's the behavior pattern of the people operating within it.
          </p>
          </div>
        </button>
      </footer>

    </div>
  )
}
