const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, '../src/pages')
const publicDir = path.join(__dirname, '../public')
const baseUrl = process.env.SITE_URL || 'https://www.shawbellconsulting.com'

function pascalToKebab(name) {
  if (name === 'Home') return ''
  const kebab = name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
  return kebab
}

function buildRoutes() {
  if (!fs.existsSync(pagesDir)) return ['/']
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'))
  const routes = files
    .filter(f => !/Detail|\[|^_/i.test(f))
    .map(f => {
      const name = path.basename(f, '.tsx')
      const slug = pascalToKebab(name)
      return slug === '' ? '/' : `/${slug}`
    })
  const uniq = Array.from(new Set(['/', ...routes.filter(r => r !== '/')]))
  // Try to include dynamic routes from src/lib/data.ts (publications, services)
  try {
    const dataFile = fs.readFileSync(path.join(__dirname, '../src/lib/data.ts'), 'utf8')

    function extractIds(varName) {
      const re = new RegExp(`export const ${varName}\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm')
      const m = dataFile.match(re)
      if (!m) return []
      const block = m[1]
      const ids = []
      const idRe = /id:\s*'([^']+)'/g
      let im
      while ((im = idRe.exec(block)) !== null) ids.push(im[1])
      return ids
    }

    const pubIds = extractIds('publications')
    pubIds.forEach(id => uniq.push(`/publications/${id}`))

    const legalIds = extractIds('legalServices')
    legalIds.forEach(id => uniq.push(`/legal-services/${id}`))

    const advIds = extractIds('advisoryServices')
    advIds.forEach(id => uniq.push(`/business-advisory/${id}`))
  } catch (e) {
    // ignore parse errors
  }
  return uniq
}

function generateSitemap() {
  const routes = buildRoutes()
  const lastmod = new Date().toISOString().split('T')[0]
  const urls = routes.map(route => {
    const loc = `${baseUrl.replace(/\/$/, '')}${route}`
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  const out = path.join(publicDir, 'sitemap.xml')
  fs.writeFileSync(out, xml, 'utf8')
  console.log('Sitemap written to', out)
}

generateSitemap()
