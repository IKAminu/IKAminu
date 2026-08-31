import React, { useEffect } from 'react';

export const CybersecurityIsMostlyHumanDesign: React.FC = () => {
  useEffect(() => {
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

  return (
    <article className="max-w-3xl mx-auto px-4 pt-32 pb-20 text-slate-200 font-sans leading-relaxed">
      {/* Header / Meta */}
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
      </header>

      {/* Intro Narrative */}
      <section className="space-y-4 mb-8 text-lg text-slate-300">
        <p className="font-semibold text-slate-100">Monday morning. A busy organisation's office.</p>
        <p>The supervisor barges into the CSO's office.</p>
        <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 my-4 italic text-slate-200 bg-slate-900/40 rounded-r">
          "We've been hacked. The entire client database has been leaked! How could this have happened?"
        </blockquote>
        <p>The CSO sighs.</p>
        <blockquote className="border-l-4 border-slate-600 pl-4 py-1 my-4 italic text-slate-300">
          "My secretary clicked a phishing link..."
        </blockquote>
        <p>So what is the problem here?</p>
        <p className="font-medium text-white">
          Was the secretary the weakest link? Or was it the organisation that expected perfect human behaviour every single day?
        </p>
      </section>

      {/* The System & Human Behavior */}
      <section className="space-y-6 mb-10">
        <p>
          A few months ago, I developed a system called the <strong>Cyber Hygiene Compliance Monitoring System</strong>. Yes, I know, it's a mouthful.
        </p>
        <p>
          But it did one simple thing: It tried to embed good cyber hygiene into everyday behaviour.
        </p>
        <p>
          See, I realised that we humans are the weakest link in security. You might say, <em>"Well, duh."</em> But despite how obvious that sounds, it's a problem that persists to this day. Our daily habits almost always drift toward convenience, even when we know we're trading away security. That is true even for people who understand cybersecurity.
        </p>
        
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6 space-y-2">
          <p className="text-emerald-400 font-mono text-sm uppercase tracking-wider">Core Questions</p>
          <p className="text-xl font-medium text-white">What does it take to engineer security into behaviour?</p>
          <p className="text-xl font-medium text-white">How do you make a good security posture instinctive?</p>
        </div>

        <p>
          The technical side obviously matters. Firewalls, encryption, network configuration, Zero Trust, AI detection. We can't do without them.
        </p>
        <p>
          But those are the last line of defence. The first line of defence is still that poor secretary.
        </p>
        <p className="text-slate-400 italic">…And she got cleanly dribbled.</p>
      </section>

      {/* Convenience vs Security */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
          The Convenience Paradox
        </h2>
        <p>Let's zoom out.</p>
        <p>
          Imagine an organisation that makes security painfully inconvenient. They force employees to use 20-character passwords. Passwords must be changed every month. VPN access is painfully slow. Every request goes through approval chains that take days.
        </p>
        <p className="font-semibold text-white">What happens?</p>
        <ul className="list-disc list-inside space-y-2 text-slate-300 bg-slate-900/60 p-4 rounded-lg border border-slate-800">
          <li>People write passwords on sticky notes.</li>
          <li>They share accounts.</li>
          <li>They send credentials through WhatsApp.</li>
          <li>They use personal email because <em>"it's just easier."</em></li>
        </ul>
        <p>
          By trying to increase security, the system actually decreased it. Because humans almost always drift toward convenience.
        </p>
        <p>
          When you can't engineer convenience into the system, you have to build guardrails around it. Most people don't break security policies because they're malicious. They break them because the secure option is harder than the insecure one.
        </p>
      </section>

      {/* Cyber Hygiene Solution */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
          Rethinking Email & Phishing Controls
        </h2>
        <p>
          So let's go back to our secretary, and to the <strong>Cyber Hygiene Compliance Monitoring System</strong>. What would have happened if something like this had been deployed?
        </p>
        <p>
          Every link arriving in an email would first be scanned. If necessary, it would be opened inside an isolated virtual environment where its behaviour, scripts, and network activity could be analysed safely. The user wouldn't be thrown directly onto the website. Instead, they'd receive a summary explaining what the link does, whether it's considered safe, and any recommended precautions before they choose to continue. If everything checks out, they simply click a button to open the original page.
        </p>
        <p>This isn't even particularly revolutionary.</p>
        <p>
          Commercial products already provide variations of this idea; Microsoft Defender Safe Links, Proofpoint Targeted Attack Protection, VirusTotal, and others all move in this direction.
        </p>
        <div className="bg-emerald-950/40 border border-emerald-800/50 p-6 rounded-lg space-y-3">
          <p className="text-emerald-300 font-semibold">The Core Differentiator</p>
          <p className="text-slate-200">
            The difference with our approach was <strong>native integration</strong>, <strong>visual sandbox previews</strong>, <strong>pricing designed for individuals and SMEs</strong>, and far less deployment friction.
          </p>
          <p className="text-slate-300 text-sm">
            To the average person, that simply means it looks better, costs less, and works faster. And that's exactly what's needed if you want security to become behaviour.
          </p>
        </div>
      </section>

      {/* Measuring Habits & Design Principles */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
          Designing for Imperfect Humans
        </h2>
        <p>
          The goal of a human-centred system like this wasn't to monitor computers. It was to <strong>monitor habits</strong>.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-emerald-400">Observable</div>
          <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-emerald-400">Measurable</div>
          <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-emerald-400">Repeatable</div>
          <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-emerald-400">Improvalble</div>
        </div>
        <p>
          Once you can measure behaviour, you can reinforce good behaviour. Eventually, secure behaviour becomes the convenient behaviour.
        </p>
        <p>
          Point is, the best systems don't rely on memory or perfect daily decisions. They become so natural they're almost invisible:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
          <li><strong>Password managers</strong> instead of expecting people to remember dozens of passwords.</li>
          <li><strong>Multi-factor authentication</strong> instead of trusting passwords alone.</li>
          <li><strong>Automatic updates</strong> instead of relying on employees to click "Remind me later" for the seventeenth time.</li>
          <li><strong>Role-based permissions</strong> instead of assuming everyone can be trusted with everything.</li>
        </ul>
      </section>

      {/* Compliance Fatigue & Conclusion */}
      <section className="space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
          Compliance Fatigue & System Design
        </h2>
        <p>
          Once you've made it easy for our secretary to distinguish a phishing email from a legitimate one, you have to think bigger.
        </p>
        <p>
          One secretary making one mistake is manageable. A thousand employees making tiny mistakes every day becomes inevitable.
        </p>
        <p>
          Good security design exists to reduce <strong>compliance fatigue</strong>. The moment shortcuts become easier than the approved process, speed becomes more rewarding than security. That's where everything starts to collapse.
        </p>
        <p>
          Cybersecurity rarely fails because people are stupid. Some are, but most are not. It fails because the system quietly assumed people would be perfectly vigilant, every minute of every day. That assumption has never been realistic.
        </p>
        <p>
          Designing for human limitations, instead of pretending they don't exist, is where real cybersecurity begins.
        </p>
        <p>
          Every successful cyberattack teaches two lessons: One about technology. The other about people. The technology changes every year. Human behaviour rarely does.
        </p>
      </section>

      {/* Takeaway / Principle Box */}
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
      </footer>
    </article>
  );
};
