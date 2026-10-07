import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  image?: string
  type?: string
  url?: string
}

function resolveAbsoluteUrl(value?: string) {
  if (!value) return undefined
  if (/^https?:\/\//i.test(value)) return value
  if (typeof window !== 'undefined') {
    return new URL(value, window.location.origin).toString()
  }
  return value.startsWith('/') ? `https://www.shawbellconsulting.com${value}` : value
}

function setMeta(name: string, content: string | undefined, attr = 'name') {
  if (!content) return

  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null

  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }

  el.setAttribute('content', content)
}

export default function SEO({ title, description, keywords, canonical, image, type = 'website', url }: SEOProps) {
  React.useEffect(() => {
    const siteName = 'ShawbellConsulting'
    const fullTitle = title ? `${title} | ${siteName}` : siteName
    const pageDescription = description || 'ShawbellConsulting delivers strategic legal and business advisory services in Ghana and beyond.'
    const resolvedImage = resolveAbsoluteUrl(image)
    const resolvedUrl = resolveAbsoluteUrl(url || canonical)

    document.title = fullTitle

    setMeta('description', pageDescription)
    setMeta('keywords', keywords)
    setMeta('og:site_name', siteName, 'property')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', pageDescription, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:image', resolvedImage, 'property')
    setMeta('og:url', resolvedUrl, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', pageDescription)
    setMeta('twitter:image', resolvedImage)

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
  }, [title, description, keywords, canonical, image, type, url])

  return null
}
