const fs = require('fs')
const path = require('path')

const publicDir = path.join(__dirname, '../public')
const site = process.env.SITE_URL || 'https://www.shawbellconsulting.com'

function generateRobots() {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  const txt = `User-agent: *\nAllow: /\nSitemap: ${site.replace(/\/$/, '')}/sitemap.xml\n`
  const out = path.join(publicDir, 'robots.txt')
  fs.writeFileSync(out, txt, 'utf8')
  console.log('robots.txt written to', out)
}

generateRobots()
