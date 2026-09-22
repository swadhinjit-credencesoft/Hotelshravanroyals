import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Purulia Travel Blog | Forest Resorts & Attractions',
  description: 'Purulia travel blog by The Divine Oasis. Best resorts near Ajodhya Hill, organic farm dining, wedding venues, places to visit, and Purulia travel guides. Book direct.',
  keywords: ['purulia travel blog', 'best resorts near ajodhya hill', 'forest resort in purulia', 'places to visit in ajodhya hill', 'top dining in purulia', 'wedding venues in purulia', 'resorts near purulia railway station', 'weekend trip to purulia', 'tourist attractions in purulia', 'family resort in ajodhya hill', 'thing to do in purulia', 'purulia food guide', 'purulia sightseeing blog', 'purulia west bengal travel guide'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Purulia Travel Blog | Forest Resorts & Attractions',
    description: 'Purulia travel blog by The Divine Oasis. Best resorts near Ajodhya Hill, organic farm dining, wedding venues, places to visit, and Purulia travel guides.',
    url: 'https://thedivineoasisresort.com/blog',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis Purulia Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purulia Travel Blog | Forest Resorts & Attractions',
    description: 'Purulia travel blog - best resorts near Ajodhya Hill, organic farm dining, places to visit, wedding venues in Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://thedivineoasisresort.com/blog',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}