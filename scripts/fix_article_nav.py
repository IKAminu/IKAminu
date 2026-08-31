from pathlib import Path
import re

# Marketing article
p = Path('src/why-marketing-is-really-a-systems-problem.tsx')
s = p.read_text()
if 'const goToWriting = () =>' not in s:
    marker = "  }, [])\n\nreturn ("
    insert = """  }, [])

  const goToWriting = () => {
    const button = Array.from(document.querySelectorAll('button')).find(
      (el) => el.textContent?.trim() === 'Writing'
    ) as HTMLButtonElement | undefined
    button?.click()
  }

  const goToCybersecurity = () => {
    goToWriting()
    window.setTimeout(() => {
      const button = Array.from(document.querySelectorAll('button')).find(
        (el) => el.textContent?.includes('Cybersecurity is mostly human design')
      ) as HTMLButtonElement | undefined
      button?.click()
    }, 100)
  }

return ("""
    if marker not in s:
        raise SystemExit('Marketing component marker not found')
    s = s.replace(marker, insert, 1)
s = re.sub(r'''      <a\s+href="#writing"\s+onClick=\{\(e\) => \{.*?\n      </a>''', '''      <button type="button" onClick={goToWriting} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: F.body, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.emeraldBright, background: 'transparent', border: 0, padding: 0, marginBottom: '40px', cursor: 'pointer' }}>
        ← Back to Writing
      </button>''', s, count=1, flags=re.S)
s = re.sub(r'''        <a\s+href="/writing/cybersecurity-is-mostly-human-design"\s+style=\{\{''', '''        <button type="button" onClick={goToCybersecurity} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}>
          <div style={{''', s, count=1)
s = s.replace('''          </p>\n        </a>\n      </footer>''', '''          </p>
          </div>
        </button>
      </footer>''', 1)
p.write_text(s)

# Cybersecurity article
p = Path('src/Cybersecurity_is_mostly_human_design.tsx')
s = p.read_text()
s = s.replace("import React from 'react';", "import React, { useEffect } from 'react';", 1)
if 'const goToWriting = () =>' not in s:
    marker = "export const CybersecurityIsMostlyHumanDesign: React.FC = () => {\n"
    insert = marker + """  useEffect(() => {
    document.title = 'Cybersecurity is mostly human design | IK Aminu'
    window.scrollTo(0, 0)
  }, [])

  const goToWriting = () => {
    const button = Array.from(document.querySelectorAll('button')).find(
      (el) => el.textContent?.trim() === 'Writing'
    ) as HTMLButtonElement | undefined
    button?.click()
  }

  const goToHiddenCost = () => {
    goToWriting()
    window.setTimeout(() => {
      const button = Array.from(document.querySelectorAll('button')).find(
        (el) => el.textContent?.includes('The Hidden Cost of Poor Business Systems')
      ) as HTMLButtonElement | undefined
      button?.click()
    }, 100)
  }

"""
    if marker not in s:
        raise SystemExit('Cybersecurity component marker not found')
    s = s.replace(marker, insert, 1)
s = s.replace('className="max-w-3xl mx-auto px-4 py-12 text-slate-200 font-sans leading-relaxed"', 'className="max-w-3xl mx-auto px-4 pt-32 pb-20 text-slate-200 font-sans leading-relaxed"', 1)
old = '''      {/* Header / Meta */}
      <header className="mb-10 pb-6 border-b border-slate-800">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Cybersecurity is mostly human design
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span>By IK Aminu</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>'''
new = '''      {/* Header / Meta */}
      <header className="mb-10 pb-6 border-b border-slate-800">
        <button type="button" onClick={goToWriting} className="inline-flex items-center gap-2 mb-10 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-400 hover:text-emerald-300 transition-colors">
          ← Back to Writing
        </button>
        <div className="flex items-center gap-3 text-sm text-slate-400 mb-5 flex-wrap">
          <span className="text-emerald-400 uppercase tracking-[0.12em] text-[11px]">Cybersecurity · Systems · By IK Aminu</span>
          <span>•</span>
          <span>August 2026</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Cybersecurity is mostly human design
        </h1>
      </header>'''
if old not in s:
    raise SystemExit('Cybersecurity header not found')
s = s.replace(old, new, 1)
old = '''      {/* Takeaway / Principle Box */}
      <footer className="bg-gradient-to-r from-slate-900 to-emerald-950/60 border border-emerald-500/30 p-6 rounded-xl text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">Core Principle</p>
        <blockquote className="text-xl md:text-2xl font-bold text-white italic">
          "Security isn't built by expecting perfect people. It's built by designing for imperfect ones."
        </blockquote>
      </footer>'''
new = '''      {/* Takeaway / Principle Box */}
      <footer className="mt-12 space-y-8">
        <div className="bg-gradient-to-r from-slate-900 to-emerald-950/60 border border-emerald-500/30 p-6 rounded-xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">Core Principle</p>
          <blockquote className="text-xl md:text-2xl font-bold text-white italic">
            "Security isn't built by expecting perfect people. It's built by designing for imperfect ones."
          </blockquote>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mb-4">Up Next</p>
          <button type="button" onClick={goToHiddenCost} className="w-full text-left bg-slate-900 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-lg transition-colors">
            <span className="text-[11px] uppercase tracking-[0.1em] text-emerald-400">Business Systems</span>
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">The Hidden Cost of Poor Business Systems →</h3>
            <p className="text-sm text-slate-400 mt-2">How small inefficiencies quietly consume time, attention, and opportunity.</p>
          </button>
        </div>
      </footer>'''
if old not in s:
    raise SystemExit('Cybersecurity footer not found')
s = s.replace(old, new, 1)
p.write_text(s)

# Hidden Cost article
p = Path('src/the-hidden-cost-of-poor-business-systems.tsx')
s = p.read_text()
s = s.replace("import React from 'react'", "import React, { useEffect } from 'react'", 1)
if 'const goToWriting = () =>' not in s:
    marker = "export default function TheHiddenCostOfPoorBusinessSystems() {\n"
    insert = marker + """  useEffect(() => {
    document.title = 'The Hidden Cost of Poor Business Systems | IK Aminu'
    window.scrollTo(0, 0)
  }, [])

  const goToWriting = () => {
    const button = Array.from(document.querySelectorAll('button')).find(
      (el) => el.textContent?.trim() === 'Writing'
    ) as HTMLButtonElement | undefined
    button?.click()
  }

"""
    if marker not in s:
        raise SystemExit('Hidden Cost component marker not found')
    s = s.replace(marker, insert, 1)
marker = "      <header style={{ marginBottom: '64px' }}>\n"
insert = marker + """        <button type="button" onClick={goToWriting} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#16a374', background: 'transparent', border: 0, padding: 0, cursor: 'pointer', marginBottom: '40px' }}>
          ← Back to Writing
        </button>
"""
if marker not in s:
    raise SystemExit('Hidden Cost header not found')
s = s.replace(marker, insert, 1)
p.write_text(s)

print('Article navigation patch applied')