import type { Metadata } from 'next'

// Set NEXT_PUBLIC_SITE_URL if the production origin changes.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://hotelshravanroyal.com',
)

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteUrl)

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Hotel Shravan Royal Inn',
      locale: 'en_IN',
      type: 'website',
      images: [{
        url: new URL('/Shravan%20Logo.png', siteUrl),
        alt: 'Shravan Royal Inn logo',
      }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [new URL('/Shravan%20Logo.png', siteUrl)],
    },
  }
}

export function breadcrumbSchema(path: string, title: string) {
  const items = [{ name: 'Home', path: '/' }]
  if (path.startsWith('/rooms/')) items.push({ name: 'Rooms', path: '/rooms' })
  if (path !== '/') items.push({ name: title, path })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  }
}
