import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banquet Hall & Events Purnea | Near Bus Stand',
  description: 'Best banquet hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Wedding hall, marriage hall, conference hall, birthday party hall near Vikass Market. Host weddings, corporate events & parties. Book now.',
  keywords: ['banquet hall purnea', 'wedding hall purnea', 'marriage hall purnea', 'event venue purnea', 'party hall purnea', 'conference hall purnea', 'best banquet hall in purnea', 'wedding venue purnea', 'marriage hall near bus stand purnea', 'birthday party hall purnea', 'corporate event venue purnea', 'reception hall purnea', 'seminar hall purnea', 'event hall near vikass market purnea', 'celebration venue purnea'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events',
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
    title: 'Banquet Hall & Events Purnea | Near Bus Stand',
    description: 'Best banquet hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Wedding hall, marriage hall, conference hall, birthday party hall. Host weddings, corporate events & parties in Purnea.',
    url: 'https://hotelsuryabellacasa.com/events',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3809.avif',
        width: 1200,
        height: 630,
        alt: 'Events & Banquet Hall at Hotel Surya Bella Casa Purnea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banquet Hall & Events Purnea | Near Bus Stand',
    description: 'Best banquet hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Wedding, marriage, conference & party halls. Book now.',
    images: ['https://bookonelocal.in/cdn/IMG_3809.avif'],
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
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
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Events',
                item: 'https://hotelsuryabellacasa.com/events',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
