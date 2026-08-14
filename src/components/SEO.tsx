import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
}

function setMeta(name: string, content: string | undefined, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    (el as HTMLElement).setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  React.useEffect(() => {
    const siteName = 'ShawbellConsulting'
    document.title = title ? `${title} | ${siteName}` : siteName

    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('og:title', title ? `${title} | ${siteName}` : siteName, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')

    // canonical link
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.href = canonical
    }
  }, [title, description, keywords, canonical])

  return null
}
