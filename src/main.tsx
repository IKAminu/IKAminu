import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { type Page } from './App'
import './index.css'

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/about/': 'about',
  '/writing/': 'writing',
  '/projects/': 'projects',
  '/web4/': 'web4',
  '/principles/': 'principles',
  '/now/': 'now',
  '/writing/why-marketing-is-really-a-systems-problem/': 'marketing-systems',
  '/writing/cybersecurity-is-mostly-human-design/': 'cybersecurity-is-mostly-human-design',
  '/writing/hidden-cost-of-poor-business-systems/': 'hidden-cost-of-poor-business-systems',
  '/writing/competence-is-designed/': 'competence-is-designed',
}

const normalisePath = (value: string) => {
  const clean = value.split('?')[0].split('#')[0]
  if (clean === '/') return '/'
  return clean.endsWith('/') ? clean : `${clean}/`
}

const initialPage = pathToPage[normalisePath(window.location.pathname)] ?? 'home'

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <App initialPage={initialPage} />
  </React.StrictMode>,
)
