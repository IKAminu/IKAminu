import React, { useEffect } from 'react'

const bodyStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', system-ui, sans-serif",
  color: '#b8b3ad',
  fontSize: '17px',
  lineHeight: 1.85,
  margin: 0,
}

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "'Gloock', Georgia, serif",
  color: '#ede8e1',
  fontSize: '30px',
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  margin: '72px 0 24px',
}

const calloutStyle: React.CSSProperties = {
  margin: '44px 0',
  padding: '28px 30px',
  background: '#111111',
  border: '1px solid rgba(237, 232, 225, 0.1)',
  borderLeft: '2px solid #16a374',
}

const emphasisStyle: React.CSSProperties = {
  color: '#ede8e1',
  fontWeight: 500,
}

function PrincipleCallout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ ...calloutStyle, textAlign: 'center' }}>
      <p style={{
        ...bodyStyle,
        color: '#ede8e1',
        fontFamily: "'Gloock', Georgia, serif",
        fontSize: '22px',
        lineHeight: 1.5,
        margin: 0,
      }}>{children}</p>
    </div>
  )
}

export default function CompetenceIsDesigned() {
  useEffect(() => {
    document.title = 'Competence Is Designed | IK Aminu'
    window.scrollTo(0, 0)
  }, [])

  const navigate = (page: 'writing' | 'hidden-cost-of-poor-business-systems') => {
    window.dispatchEvent(new CustomEvent('site:navigate', { detail: page }))
  }

  return (
    <article style={{ maxWidth: '760px', margin: '0 auto', padding: '120px 24px 100px' }}>
      <header style={{ marginBottom: '64px' }}>
        <button type="button" onClick={() => navigate('writing')} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#16a374', background: 'transparent', border: 0, padding: 0, cursor: 'pointer', marginBottom: '40px' }}>
          ← Back to Writing
        </button>
        <div style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#16a374',
          marginBottom: '24px',
        }}>
          Leadership · Excellence · By IK Aminu
        </div>
        <h1 style={{
          fontFamily: "'Gloock', Georgia, serif",
          color: '#ede8e1',
          fontSize: 'clamp(42px, 7vw, 68px)',
          lineHeight: 1.02,
          letterSpacing: '-0.035em',
          fontWeight: 400,
          margin: '0 0 24px',
        }}>
          Competence Is Designed
        </h1>
        <div style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: '12px',
          color: '#7a7772',
          letterSpacing: '0.04em',
        }}>
          September 2026 · 10 min read
        </div>
      </header>

      <div>
        <p style={bodyStyle}>30,000 feet in the air, a Boeing 737 is preparing to land at Heathrow Airport.</p>
        <p style={bodyStyle}>It is a few hundred feet from the runway when the wind decides to throw a tantrum, in typical London fashion.</p>
        <p style={bodyStyle}>You, sitting in your seat, grip the handrest and, because you are seated in the first cabin, you can see into the cockpit.</p>
        <p style={bodyStyle}>Your palms start sweating. You are murmuring a prayer against the unfortunate. You see the pilot calmly reading the dashboard, then he contacts the tower and goes, "ATC, Big-atanov going around." Big-atanov is the call sign.</p>
        <p style={bodyStyle}>He retracts the gear, increases thrust, adjusts the flaps, and clicks a thousand other little buttons you don't understand, then smoothly raises the plane again.</p>
        <p style={bodyStyle}>The plane circles around until the wind finally behaves, and you eventually touch the ground without so much as a shiver.</p>
        <p style={bodyStyle}>You look at the pilot and secretly think, "He's competent."</p>
        <p style={bodyStyle}>But you don't clap because you don't want to be called cringe.</p>
        <p style={bodyStyle}>You called him competent because, to you, it looked like cold-blooded competence.</p>
        <p style={bodyStyle}>Calm voice. Correct decisions. No hesitation. No panic.</p>
        <p style={bodyStyle}>But that pilot isn't relying purely on intelligence or natural ability.</p>
        <p style={bodyStyle}>He has years of training behind him. Checklists. Standard operating procedures. Simulators. Crew coordination. Repeated scenarios. Hundreds, perhaps thousands, of hours spent encountering situations that most passengers will experience once in their lives, if ever.</p>
        <p style={bodyStyle}>So how much of the competence belonged to the person, and how much belonged to the environment that trained and supported them?</p>

        <h2 style={sectionTitleStyle}>We misunderstand competence</h2>
        <p style={bodyStyle}>This is where I think we misunderstand competence.</p>
        <p style={bodyStyle}>Most people think competence looks something like this:</p>
        <div style={calloutStyle}>
          <p style={{ ...bodyStyle, color: '#16a374', fontFamily: "'Gloock', Georgia, serif", fontSize: '22px' }}>Person → Skill → Good performance.</p>
        </div>
        <p style={bodyStyle}>But reality is closer to:</p>
        <div style={calloutStyle}>
          <p style={{ ...bodyStyle, color: '#16a374', fontFamily: "'Gloock', Georgia, serif", fontSize: '22px' }}>Person + Training + Environment + Feedback + Systems → Good performance.</p>
        </div>
        <p style={bodyStyle}>A competent person isn't necessarily someone who always knows what to do.</p>
        <p style={bodyStyle}>Sometimes they are simply someone who has encountered the situation before.</p>
        <p style={bodyStyle}>Sometimes they have trained for it so many times that the correct response has become almost automatic.</p>
        <p style={bodyStyle}>Sometimes they have built an environment around themselves that makes the correct action easier to take and the wrong action harder to take.</p>
        <p style={bodyStyle}>That distinction matters.</p>
        <p style={bodyStyle}>Because we often look at the final performance and attribute the entire thing to the individual. We see the pilot calmly aborting a landing and think, "That man is naturally composed under pressure."</p>
        <p style={bodyStyle}>Perhaps.</p>
        <p style={bodyStyle}>But there is another possibility.</p>
        <p style={bodyStyle}>Perhaps he has simply spent enough time preparing for pressure that pressure is no longer unfamiliar.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>This is why I think competence is not just possessed. It is designed.</p>

        <h2 style={sectionTitleStyle}>The environment matters</h2>
        <p style={bodyStyle}>Consider something much less dramatic than flying an aircraft.</p>
        <p style={bodyStyle}>Imagine two people who are equally capable of cooking. Give one of them a professional kitchen. Every tool has a place. Ingredients are prepared before service. Recipes are standardised. Stations are organised. The equipment works. Someone checks the quality of the food before it leaves the kitchen.</p>
        <p style={bodyStyle}>Now put the other person in a chaotic kitchen. The knives are missing. Half the ingredients haven't been prepared. Nobody knows which recipe they are using. Orders keep changing. The equipment is unreliable, and everyone is constantly asking each other what to do.</p>
        <p style={bodyStyle}>After an hour, one person will probably look highly competent.</p>
        <p style={bodyStyle}>The other may look completely useless.</p>
        <p style={bodyStyle}>But did their actual ability change?</p>
        <p style={bodyStyle}>No.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>The environment changed what their ability could produce.</p>

        <p style={bodyStyle}>This is the part that gets missed when we talk about competence.</p>
        <p style={bodyStyle}>Competence is the ability to consistently produce a desired result.</p>
        <p style={bodyStyle}>The word "consistently" matters.</p>
        <p style={bodyStyle}>Anyone can perform well once.</p>
        <p style={bodyStyle}>A salesperson can accidentally close a major client. A founder can make one brilliant decision. A student can pass one difficult exam. A programmer can solve one difficult problem. A pilot can handle one difficult landing.</p>
        <p style={bodyStyle}>None of these things, by themselves, tell us very much.</p>
        <p style={bodyStyle}>Competence appears when the result becomes repeatable.</p>
        <div style={calloutStyle}>
          <p style={{ ...bodyStyle, color: '#ede8e1', marginBottom: '12px' }}>Can you do it again tomorrow?</p>
          <p style={{ ...bodyStyle, color: '#ede8e1', marginBottom: '12px' }}>Can you do it when you're tired?</p>
          <p style={{ ...bodyStyle, color: '#ede8e1', marginBottom: '12px' }}>Can you do it when the conditions change?</p>
          <p style={{ ...bodyStyle, color: '#ede8e1', marginBottom: '12px' }}>Can someone else follow the same process and produce a similar result?</p>
          <p style={{ ...bodyStyle, color: '#ede8e1' }}>Can the result survive a bad day?</p>
        </div>
        <p style={bodyStyle}>That is where ability becomes competence.</p>
        <p style={bodyStyle}>And repeatability requires structure.</p>
        <PrincipleCallout>Talent creates potential.<br />Practice develops ability.<br />Systems make ability repeatable.</PrincipleCallout>

        <h2 style={sectionTitleStyle}>Where competence comes from</h2>
        <p style={bodyStyle}>Take a surgeon.</p>
        <p style={bodyStyle}>We don't expect a surgeon to walk into an operating room and simply remember to be competent. The environment is built around reducing avoidable mistakes. There are procedures, equipment checks, sterile protocols, verification steps, specialised roles, monitoring and post-operation care.</p>
        <p style={bodyStyle}>The surgeon still needs to be skilled. The system does not perform the surgery for them.</p>
        <p style={bodyStyle}>It simply makes it less likely that everything depends on what one human happens to remember in a stressful moment.</p>
        <p style={bodyStyle}>The same thing happens with athletes.</p>
        <p style={bodyStyle}>An elite athlete doesn't wake up every morning and magically perform at an elite level. Their performance has been built through training schedules, coaching, repetition, recovery, feedback and preparation.</p>
        <p style={bodyStyle}>Eventually, what looks like natural ability from the outside is often the result of thousands of small decisions made long before anyone was watching.</p>
        <p style={bodyStyle}>Business is no different.</p>
        <p style={bodyStyle}>A founder might be excellent at serving clients personally. They might remember every customer's name, know exactly how to solve every problem and have an instinct for what a client wants.</p>
        <p style={bodyStyle}>But if the quality of the business disappears whenever that founder leaves the room, then the competence belongs to the person, not the business.</p>
        <p style={bodyStyle}>The business has not yet learned how to reproduce the founder.</p>
        <p style={bodyStyle}>A mature organisation transfers competence into processes, documentation, training, standards and feedback.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>That is when competence becomes scalable.</p>

        <h2 style={sectionTitleStyle}>Systems don't replace competence</h2>
        <p style={bodyStyle}>This doesn't mean systems make everyone competent.</p>
        <p style={bodyStyle}>They don't.</p>
        <p style={bodyStyle}>A terrible pilot with a checklist is still a terrible pilot, and I would prefer not to discover the limits of aviation safety through personal experimentation.</p>
        <p style={bodyStyle}>Systems cannot replace competence.</p>
        <p style={bodyStyle}>They can preserve it, develop it and make it repeatable.</p>
        <p style={bodyStyle}>The reverse is also true.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>Raw talent without structure often looks less competent than moderate talent with excellent preparation.</p>

        <h2 style={sectionTitleStyle}>Design the environment</h2>
        <p style={bodyStyle}>This is something you can see even in ordinary life.</p>
        <p style={bodyStyle}>Why do some people always seem organised?</p>
        <p style={bodyStyle}>Why do some people consistently deliver good work?</p>
        <p style={bodyStyle}>Why do some people seem reliable when everyone else starts panicking?</p>
        <p style={bodyStyle}>Sometimes it is talent.</p>
        <p style={bodyStyle}>But often, they have simply designed systems around themselves.</p>
        <p style={bodyStyle}>They prepare before they need to perform.</p>
        <p style={bodyStyle}>They keep notes instead of trusting memory.</p>
        <p style={bodyStyle}>They use routines to reduce unnecessary decisions.</p>
        <p style={bodyStyle}>They review mistakes instead of simply moving past them.</p>
        <p style={bodyStyle}>They build feedback into their work.</p>
        <p style={bodyStyle}>They rehearse difficult situations before they happen.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>Their competence isn't entirely inside their head. It is distributed across the systems around them.</p>

        <h2 style={sectionTitleStyle}>Remove unnecessary demands</h2>
        <p style={bodyStyle}>Think about something as simple as a password manager.</p>
        <p style={bodyStyle}>A person who remembers 40 passwords perfectly might appear to have an excellent memory.</p>
        <p style={bodyStyle}>A person who uses a password manager doesn't need to remember them at all.</p>
        <p style={bodyStyle}>Which person is more competent at password management?</p>
        <p style={bodyStyle}>The obvious answer might be the first person, because they possess the ability.</p>
        <p style={bodyStyle}>But the second person has designed their environment so that the ability isn't required.</p>
        <p style={bodyStyle}>That is an important distinction.</p>
        <p style={bodyStyle}>Good systems don't always make you better at the task itself.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>Sometimes they remove the need for you to perform unnecessary parts of the task.</p>

        <h2 style={sectionTitleStyle}>The system carries the memory</h2>
        <p style={bodyStyle}>This is also why checklists are so powerful.</p>
        <p style={bodyStyle}>A checklist doesn't make a pilot smarter.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>It makes forgetting something harder.</p>
        <p style={bodyStyle}>A CRM doesn't make a salesperson persuasive.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>It makes forgetting to follow up harder.</p>
        <p style={bodyStyle}>Documentation doesn't make an employee more intelligent.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>It makes important knowledge less dependent on memory.</p>
        <p style={bodyStyle}>Automation doesn't make a process inherently better.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>It makes a good process easier to repeat.</p>
        <p style={bodyStyle}>The common thread is that the system takes some of the burden away from the individual.</p>

        <h2 style={sectionTitleStyle}>Competence has a history</h2>
        <p style={bodyStyle}>And this is where I think we should change the way we think about competence.</p>
        <p style={bodyStyle}>We often admire competence as though it were a personality trait.</p>
        <p style={bodyStyle}>As though some people simply came out of the factory with the "competent" setting enabled.</p>
        <p style={bodyStyle}>But when you look closely, competence usually has a history.</p>
        <p style={bodyStyle}>Someone taught them.</p>
        <p style={bodyStyle}>Someone corrected them.</p>
        <p style={bodyStyle}>They practised.</p>
        <p style={bodyStyle}>They failed.</p>
        <p style={bodyStyle}>They received feedback.</p>
        <p style={bodyStyle}>They changed their method.</p>
        <p style={bodyStyle}>They repeated the process.</p>
        <p style={bodyStyle}>Eventually, the thing became easier.</p>
        <p style={bodyStyle}>Eventually, it became reliable.</p>
        <p style={bodyStyle}>Eventually, it looked natural.</p>
        <p style={bodyStyle}>That final stage is deceptive.</p>
        <p style={bodyStyle}>The better someone becomes at something, the less visible the structure that produced their ability becomes.</p>
        <p style={bodyStyle}>The pilot doesn't look like someone following years of training.</p>
        <p style={bodyStyle}>He just looks calm.</p>
        <p style={bodyStyle}>The athlete doesn't look like someone following a training programme.</p>
        <p style={bodyStyle}>They just perform.</p>
        <p style={bodyStyle}>The experienced founder doesn't look like someone following a carefully built operating system.</p>
        <p style={bodyStyle}>They just seem to know what to do.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>But that apparent naturalness is often the final product of a very unnatural amount of preparation.</p>

        <h2 style={sectionTitleStyle}>Build what you want to rely on</h2>
        <p style={bodyStyle}>And that is the part worth copying.</p>
        <p style={bodyStyle}>You don't need to become the person who can remember everything.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>You need to build a system that remembers what you shouldn't have to.</p>
        <p style={bodyStyle}>You don't need to become the person who never makes mistakes.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>You need to build a process that catches predictable mistakes.</p>
        <p style={bodyStyle}>You don't need to rely on being calm in every difficult situation.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>You can rehearse the difficult situations before they happen.</p>
        <p style={bodyStyle}>You don't need to make yourself infinitely disciplined.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>You can make the right behaviour easier to repeat.</p>
        <p style={bodyStyle}>That is what good systems do.</p>
        <p style={bodyStyle}>They turn individual ability into reliable behaviour.</p>
        <p style={bodyStyle}>And reliable behaviour into consistent results.</p>

        <h2 style={sectionTitleStyle}>Go back to the pilot</h2>
        <p style={bodyStyle}>Go back to that pilot.</p>
        <p style={bodyStyle}>From the passenger's seat, it looks like one man calmly saving a plane from a bad landing.</p>
        <p style={bodyStyle}>From the cockpit, it is something much more ordinary.</p>
        <p style={bodyStyle}>Training. Procedures. Instruments. Communication. Practice. Experience. Checklists. Coordination.</p>
        <p style={bodyStyle}>The competence is real.</p>
        <p style={bodyStyle}>But it was not created in that moment.</p>
        <p style={bodyStyle}>That moment simply revealed it.</p>
        <p style={bodyStyle}>We tend to admire competence at the point where it becomes visible. The more useful question is what was built before that moment to make the performance possible.</p>
        <p style={bodyStyle}>Competence is rarely an accident.</p>
        <p style={bodyStyle}>It is trained, tested, corrected and reinforced until good performance becomes repeatable.</p>
        <PrincipleCallout>Competence isn't just something you possess.<br />Competence is something you design.</PrincipleCallout>
        <p style={{ ...bodyStyle, color: '#7a7772', fontSize: '14px', marginTop: '44px' }}>
          <strong style={{ color: '#16a374' }}>Principle:</strong> Consistent high performance is rarely a personality trait. It is the result of systems, feedback and deliberate practice built over time.
        </p>

        <div style={{ marginTop: '64px', paddingTop: '28px', borderTop: '1px solid rgba(237, 232, 225, 0.08)' }}>
          <button type="button" onClick={() => navigate('hidden-cost-of-poor-business-systems')} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7a7772', background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}>
            ← Previous article: The Hidden Cost of Poor Business Systems
          </button>
        </div>
      </div>
    </article>
  )
}
