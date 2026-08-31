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

export default function TheHiddenCostOfPoorBusinessSystems() {
  useEffect(() => {
    document.title = 'The Hidden Cost of Poor Business Systems | IK Aminu'
    window.scrollTo(0, 0)
  }, [])

  const goToWriting = () => {
    const button = Array.from(document.querySelectorAll('button')).find(
      (el) => el.textContent?.trim() === 'Writing'
    ) as HTMLButtonElement | undefined
    button?.click()
  }

  return (
    <article style={{ maxWidth: '760px', margin: '0 auto', padding: '120px 24px 100px' }}>
      <header style={{ marginBottom: '64px' }}>
        <button type="button" onClick={goToWriting} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#16a374', background: 'transparent', border: 0, padding: 0, cursor: 'pointer', marginBottom: '40px' }}>
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
          Business · Systems · By IK Aminu
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
          The Hidden Cost of Poor Business Systems
        </h1>
        <div style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: '12px',
          color: '#7a7772',
          letterSpacing: '0.04em',
        }}>
          August 2026 · 8 min read
        </div>
      </header>

      <div>
        <p style={{ ...bodyStyle, fontSize: '20px', color: '#d3cec7', lineHeight: 1.7 }}>
          Imagine this…
        </p>
        <p style={bodyStyle}>It’s 9:14am. A high-ticket client sends a message to your business. But it’s 9:14am. Even the early birds are having their coffee now, so nobody answers.</p>
        <p style={bodyStyle}>At 10:30, someone finally sees the message. He assumes someone else is handling it, shrugs, and opens the next Slack message.</p>
        <p style={bodyStyle}>At 1:00pm, the customer follows up. Then they follow up again through a different channel because apparently WhatsApp, email, and Instagram are now three separate departments.</p>
        <p style={bodyStyle}>At 4:00pm, someone finally responds. “Sorry for the delay.” As if sorry had ever saved a business.</p>

        <div style={calloutStyle}>
          <p style={{ ...bodyStyle, color: '#ede8e1', fontSize: '20px', lineHeight: 1.6 }}>
            How much did that delay cost the business?
          </p>
          <p style={{ ...bodyStyle, marginTop: '12px' }}>
            The obvious answer is nothing… Right? The customer hasn’t complained. Nobody got fired. The office is still running. The lights are still on.
          </p>
          <p style={{ ...bodyStyle, color: '#ede8e1', marginTop: '12px' }}>
            But the business just paid for it.
          </p>
        </div>

        <p style={bodyStyle}>This is the strange thing about poor business systems. They don’t always produce dramatic failures. Most of the time, they produce friction.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>And friction accumulates.</p>

        <p style={bodyStyle}>An employee spends fifteen minutes looking for a document that should have taken thirty seconds to find. A lead gets forgotten because nobody was assigned to follow up. A customer waits three hours for a response because everyone assumed somebody else was handling it. Two employees enter the same information into two different spreadsheets. Someone asks a question that has already been answered twenty times because the answer exists only inside another employee’s head.</p>
        <p style={bodyStyle}>None of these events look serious on their own. That is exactly why they persist.</p>
        <p style={bodyStyle}>A broken machine that stops working gets attention. Someone calls a technician. The problem is visible.</p>
        <p style={bodyStyle}>A bad process that wastes fifteen minutes every day is much harder to notice.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>It just becomes Tuesday.</p>

        <div style={calloutStyle}>
          <p style={{ ...bodyStyle, color: '#ede8e1' }}>One employee loses fifteen minutes a day because a process is poorly designed.</p>
          <p style={{ ...bodyStyle, fontSize: '30px', color: '#16a374', marginTop: '16px' }}>15 min × 250 days = 62.5 hours/year</p>
          <p style={{ ...bodyStyle, color: '#ede8e1', marginTop: '12px' }}>Now multiply that across ten employees.</p>
          <p style={{ ...bodyStyle, fontSize: '30px', color: '#16a374', marginTop: '8px' }}>625 hours</p>
          <p style={{ ...bodyStyle, marginTop: '12px' }}>And remember, we’re still talking about one tiny inefficiency.</p>
        </div>

        <p style={bodyStyle}>This is where the cost of poor systems becomes difficult to see. Some business costs don’t appear neatly on the balance sheet. They appear as wasted time, lost attention, missed opportunities, duplicated work, employee frustration, delayed decisions, and customers who quietly decide to take their money somewhere else.</p>
        <p style={bodyStyle}>A business can be functioning and still be inefficient.</p>
        <p style={bodyStyle}>That distinction matters.</p>
        <p style={bodyStyle}>A company can make money while wasting enormous amounts of time. It can have good employees who spend half their day compensating for bad processes. It can have customers who are satisfied enough to stay while still receiving a slower and less consistent experience than they should.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>The fact that something works doesn’t mean it works well.</p>
        <p style={bodyStyle}>This is why I became increasingly interested in systems.</p>
        <p style={bodyStyle}>I stopped looking only at whether something worked and started asking how much effort it required to keep working.</p>
        <p style={bodyStyle}>There is a difference between a process that works once and a system that works repeatedly.</p>
        <p style={bodyStyle}>A founder manually remembering to follow up with every lead is technically a process.</p>
        <p style={bodyStyle}>A CRM automatically recording the lead, assigning responsibility, scheduling the follow-up, and reminding the salesperson is a system.</p>
        <p style={bodyStyle}>Both can produce the same result.</p>
        <p style={bodyStyle}>One requires someone to remember. The other is designed so that remembering isn’t the main mechanism keeping the process alive.</p>
        <p style={bodyStyle}>That difference becomes extremely important as a business scales.</p>

        <h2 style={sectionTitleStyle}>When the founder becomes the infrastructure</h2>
        <p style={bodyStyle}>One of the easiest ways to identify a poorly designed business is to look at what happens when the founder isn’t around.</p>
        <p style={bodyStyle}>Only the founder knows the passwords. Only the founder knows which client needs calling. Only the founder knows how a particular task is supposed to be done. Every unusual problem eventually reaches the founder.</p>
        <p style={bodyStyle}>Employees constantly ask, “What should I do?” Someone needs approval, so they call the founder. A client has a question, so they call the founder. An employee needs a document, so they call the founder. A process breaks, so they call the founder.</p>
        <p style={bodyStyle}>Eventually, the founder isn’t running the business.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>The founder is the business’s operating system.</p>
        <p style={bodyStyle}>This is especially common in small businesses because it works at first. The founder is usually the person who built the process, so naturally they know how everything works. When there are three employees, this can actually be efficient. Everyone can just ask the person who knows.</p>
        <p style={bodyStyle}>Then there are ten employees. Then twenty. Then fifty. Suddenly, one person’s brain has become a bottleneck for the entire organisation.</p>
        <p style={bodyStyle}>If removing one person causes the business to stop functioning, that person isn’t simply an employee or founder anymore. They have become infrastructure.</p>
        <p style={bodyStyle}>And infrastructure should not exist inside someone’s memory.</p>
        <PrincipleCallout>Your sole job as a founder is to fire yourself from as many roles as possible.<br /><span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#7a7772' }}>Some very smart person.</span></PrincipleCallout>

        <h2 style={sectionTitleStyle}>The work nobody counts</h2>
        <p style={bodyStyle}>There is work people are paid to do. Then there is work the system forces them to do.</p>
        <p style={bodyStyle}>Imagine a salesperson who spends an hour every day searching through old WhatsApp conversations, checking spreadsheets, asking colleagues for information, manually updating records, and trying to remember which customers need follow-up.</p>
        <p style={bodyStyle}>They are technically working. But they aren’t selling.</p>
        <p style={bodyStyle}>The business is paying a salesperson’s salary and then using part of that salary to pay for administrative work created by its own poor systems.</p>
        <p style={bodyStyle}>This happens everywhere.</p>
        <p style={bodyStyle}>An employee copies information from one spreadsheet into another. Someone downloads an attachment from email and uploads it into another platform. A manager checks whether a task has been completed by messaging five different people. A customer explains the same problem to three different employees because nobody can see the previous conversation.</p>
        <p style={bodyStyle}>None of these activities are necessarily difficult. That’s what makes them dangerous.</p>
        <p style={bodyStyle}>They are small enough to be tolerated and frequent enough to become expensive.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>Sometimes the problem isn’t that your employees aren’t working hard enough. It’s that you’re paying them to work around the system instead of inside it.</p>

        <h2 style={sectionTitleStyle}>Scale makes small problems expensive</h2>
        <p style={bodyStyle}>Small inefficiencies are tolerable at small scale. Then the business grows.</p>
        <p style={bodyStyle}>One missed lead is unfortunate. One hundred missed leads is a system.</p>
        <p style={bodyStyle}>One employee needing the founder’s help is manageable. Twenty employees needing the founder’s help is a bottleneck.</p>
        <p style={bodyStyle}>One manual spreadsheet is fine. Ten departments maintaining ten versions of the same spreadsheet is organisational warfare disguised as administration.</p>
        <p style={bodyStyle}>Growth doesn’t make these problems disappear. It multiplies them.</p>
        <p style={bodyStyle}>If one employee spends fifteen minutes dealing with an unnecessary task, ten employees can turn that into hours of lost capacity every day.</p>
        <p style={bodyStyle}>If one customer waits too long for a response, it is a customer service problem. If every customer waits too long for a response, it is an operating problem.</p>
        <p style={bodyStyle}>This is also why some businesses feel like they suddenly became difficult to manage when they started growing.</p>
        <p style={bodyStyle}>They didn’t suddenly become difficult. The business simply became large enough for its existing weaknesses to become visible.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>Scale doesn’t repair a system. It magnifies it.</p>

        <h2 style={sectionTitleStyle}>The five things poor systems consume</h2>
        <p style={bodyStyle}>The financial cost is usually the easiest to understand. Wasted labour costs money. Lost leads cost revenue. Errors create refunds, rework, and sometimes reputational damage.</p>
        <p style={bodyStyle}>But money is only one part of the problem.</p>
        <div style={{ margin: '36px 0' }}>
          {[
            ['Time', 'People spend hours performing tasks that should have been simplified, delegated, or automated.'],
            ['Attention', 'Every unnecessary notification, manual check, repeated question, and context switch takes a small piece of someone’s concentration.'],
            ['Consistency', 'When the same process depends on who happens to be handling it, customers receive different experiences from the same company.'],
            ['Opportunity', 'The cost is also what those wasted hours could have produced.'],
          ].map(([title, text]) => (
            <div key={title} style={{ padding: '22px 0', borderTop: '1px solid rgba(237,232,225,0.08)' }}>
              <div style={{ color: '#16a374', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>{title}</div>
              <p style={bodyStyle}>{text}</p>
            </div>
          ))}
        </div>
        <p style={bodyStyle}>If an employee spends two hours every week maintaining a broken process, the cost isn’t only those two hours. It is also what those two hours could have produced.</p>
        <p style={bodyStyle}>The salesperson could have spoken to more customers. The designer could have improved the product. The manager could have solved a larger problem. The founder could have worked on the next stage of the business instead of answering the same question for the hundredth time.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>A bad system doesn’t only consume resources. It consumes the opportunity to use those resources properly.</p>

        <h2 style={sectionTitleStyle}>Don’t automate the mess</h2>
        <p style={bodyStyle}>This is where the conversation around automation often goes wrong.</p>
        <p style={bodyStyle}>Businesses hear “systems” and immediately start looking for software. Then they buy a CRM. Then another tool. Then an AI assistant. Then an automation platform. Then six months later they have successfully automated a process that nobody understood in the first place.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>Automation is not a substitute for thinking.</p>
        <p style={bodyStyle}>A bad process automated is still a bad process. It is simply capable of producing bad results faster.</p>
        <p style={bodyStyle}>Before automating anything, understand the process. Then simplify it. Then standardise it. Then automate the parts that actually benefit from automation.</p>
        <div style={{ ...calloutStyle, textAlign: 'center' }}>
          {['Understand', 'Simplify', 'Standardise', 'Automate'].map((step, index) => (
            <React.Fragment key={step}>
              <div style={{ fontFamily: "'Gloock', Georgia, serif", fontSize: '22px', color: '#ede8e1' }}>{step}</div>
              {index < 3 && <div style={{ color: '#16a374', margin: '8px 0' }}>↓</div>}
            </React.Fragment>
          ))}
        </div>
        <p style={bodyStyle}>If five people have five different ways of doing the same task, the first problem isn’t that they don’t have enough software. The first problem is that there isn’t one agreed way of doing the task.</p>
        <p style={bodyStyle}>The system has to exist before the automation can improve it.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>A simple process that works consistently is more valuable than a sophisticated process that only one employee understands.</p>

        <h2 style={sectionTitleStyle}>Find the friction</h2>
        <p style={bodyStyle}>You don’t need a consultant, a six-month transformation project, or an unnecessarily large whiteboard to start finding these problems.</p>
        <p style={bodyStyle}>Look at the things your people repeatedly complain about. Ask what they keep searching for. Ask what they keep entering twice. Ask which tasks require someone to remember something at a particular time. Ask which questions employees repeatedly ask each other. Ask what would stop working tomorrow if one particular employee didn’t come to work.</p>
        <p style={bodyStyle}>Those questions usually reveal more about the health of a business than another meeting about “efficiency.”</p>
        <p style={bodyStyle}>A useful test for any recurring process is simple.</p>

        <div style={{ margin: '32px 0', borderTop: '1px solid rgba(237,232,225,0.1)' }}>
          {[
            'Does someone have to remember to do it?',
            'Does the same information get entered more than once?',
            'Does someone regularly have to ask another person how to do it?',
            'Does the process change depending on who handles it?',
            'Would the process stop if one particular person disappeared tomorrow?',
          ].map(question => (
            <div key={question} style={{ padding: '18px 0', borderBottom: '1px solid rgba(237,232,225,0.1)', color: '#d3cec7', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.5 }}>
              <span style={{ color: '#16a374', marginRight: '12px' }}>+</span>{question}
            </div>
          ))}
        </div>

        <p style={bodyStyle}>If the answer is yes repeatedly, you probably have a systems problem.</p>
        <p style={bodyStyle}>The solution won’t always be automation. Sometimes it is a better document. Sometimes it is a clearer responsibility. Sometimes it is one shared database instead of four spreadsheets. Sometimes it is removing a step entirely. Sometimes the best system is simply making the correct thing easier to do.</p>
        <p style={bodyStyle}>That is the part people often miss.</p>
        <p style={bodyStyle}>Good systems aren’t necessarily complicated. They reduce the number of things people have to remember, repeat, search for, or work around.</p>
        <p style={bodyStyle}>The most expensive problems in a business are often the ones nobody considers problems.</p>
        <p style={bodyStyle}>The five minutes here. The forgotten lead there. The spreadsheet nobody trusts. The employee waiting for approval. The founder answering the same question for the hundredth time.</p>
        <p style={bodyStyle}>Individually, none of them look catastrophic. Together, they become the operating cost of the business.</p>
        <p style={{ ...bodyStyle, ...emphasisStyle }}>Good systems don’t simply make businesses faster. They make wasted effort harder to produce.</p>

        <div style={{ marginTop: '72px', padding: '40px 0', borderTop: '1px solid rgba(237,232,225,0.14)' }}>
          <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#16a374', marginBottom: '18px' }}>Principle</div>
          <p style={{ fontFamily: "'Gloock', Georgia, serif", color: '#ede8e1', fontSize: 'clamp(24px, 4vw, 34px)', lineHeight: 1.35, margin: 0 }}>
            If a business repeatedly spends human effort preventing the same problem, it doesn’t have a people problem. It has a systems problem.
          </p>
        </div>
      </div>
    </article>
  )
}
