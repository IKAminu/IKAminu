import fs from 'node:fs/promises'
import path from 'node:path'
import { pageRoutes, renderPage } from '../dist-server/entry-server.js'

const dist = path.resolve('dist')
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

const renderHead = (route) => {
  const canonical = `https://ikaminu.cc.cd${route.path}`
  const ogType = route.type ?? 'website'
  const schema = route.type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: route.title.replace(' | IK Aminu', ''),
        description: route.description,
        author: { '@type': 'Person', name: 'IK Aminu', url: 'https://ikaminu.cc.cd/' },
        publisher: { '@type': 'Person', name: 'IK Aminu' },
        mainEntityOfPage: canonical,
      }
    : null

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:image" content="https://ikaminu.cc.cd/og-image.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="https://ikaminu.cc.cd/og-image.png" />`,
    schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : '',
  ].join('\n    ')
}

for (const route of pageRoutes) {
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<link rel="canonical"[^>]*>/, '')
    .replace(/<meta property="og:[^>]*>/g, '')
    .replace(/<meta name="twitter:[^>]*>/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
    .replace('</head>', '    ' + renderHead(route) + '\\n  </head>')
    .replace('<div id="root"></div>', `<div id="root">${renderPage(route.page)}</div>`)

  const outDir = path.join(dist, route.path === '/' ? '' : route.path)
  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(path.join(outDir, 'index.html'), html)
}

console.log(`Prerendered ${pageRoutes.length} pages.`)
