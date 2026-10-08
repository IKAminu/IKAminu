import React from 'react'
import { renderToString } from 'react-dom/server'
import App, { type Page } from './App'

export const pageRoutes: Array<{
  path: string
  page: Page
  title: string
  description: string
  type?: 'website' | 'article'
}> = [
  {
    path: '/',
    page: 'home',
    title: 'IK Aminu | Systems, Strategy & Web4',
    description: 'IK Aminu is a systems design partner for aviation companies and scaling founders, working across marketing systems, AI, automation, cybersecurity and business operations.',
  },
  {
    path: '/about/',
    page: 'about',
    title: 'About IK Aminu | Systems Design Partner',
    description: 'Learn about IK Aminu, founder of WEB4 and a systems design partner focused on business systems, marketing, AI automation, cybersecurity and aviation.',
  },
  {
    path: '/writing/',
    page: 'writing',
    title: 'Writing | IK Aminu',
    description: 'Essays by IK Aminu on systems, strategy, marketing, cybersecurity, leadership, competence and business operations.',
  },
  {
    path: '/projects/',
    page: 'projects',
    title: 'Projects | IK Aminu',
    description: 'Selected projects by IK Aminu across cybersecurity, web applications, business systems, automation and digital operations.',
  },
  {
    path: '/web4/',
    page: 'web4',
    title: 'WEB4 | Systems, Automation & Digital Operations',
    description: 'WEB4 helps ambitious businesses build, automate and improve their digital operations through websites, AI automation, marketing systems and business infrastructure.',
  },
  {
    path: '/principles/',
    page: 'principles',
    title: 'Principles | IK Aminu',
    description: 'Principles behind IK Aminu’s approach to systems, competence, leadership, business and effective execution.',
  },
  {
    path: '/now/',
    page: 'now',
    title: 'Now | IK Aminu',
    description: 'What IK Aminu is currently building, learning and working on.',
  },
  {
    path: '/writing/why-marketing-is-really-a-systems-problem/',
    page: 'marketing-systems',
    title: 'Why Marketing Is Really a Systems Problem | IK Aminu',
    description: 'Most marketing fails not because the message is wrong, but because the infrastructure behind it is broken.',
    type: 'article',
  },
  {
    path: '/writing/cybersecurity-is-mostly-human-design/',
    page: 'cybersecurity-is-mostly-human-design',
    title: 'Cybersecurity Is Mostly Human Design | IK Aminu',
    description: 'Designing for human limitations, instead of pretending they do not exist, is where real cybersecurity begins.',
    type: 'article',
  },
  {
    path: '/writing/hidden-cost-of-poor-business-systems/',
    page: 'hidden-cost-of-poor-business-systems',
    title: 'The Hidden Cost of Poor Business Systems | IK Aminu',
    description: 'Poor business systems create friction, waste time, consume attention and quietly turn small inefficiencies into significant operating costs.',
    type: 'article',
  },
  {
    path: '/writing/competence-is-designed/',
    page: 'competence-is-designed',
    title: 'Competence Is Designed | IK Aminu',
    description: 'Consistent high performance is rarely a personality trait. It is the result of systems, feedback and deliberate practice built over time.',
    type: 'article',
  },
]

export function renderPage(page: Page) {
  return renderToString(
    <React.StrictMode>
      <App initialPage={page} />
    </React.StrictMode>,
  )
}
