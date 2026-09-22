import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banquet Hall & Events Purulia | Near Ajodhya Hill',
  description: 'Best banquet hall in Purulia at The Divine Oasis near Ajodhya Hill. Wedding hall, marriage hall, conference hall, birthday party hall near Ajodhya Hill. Host weddings, corporate events & parties. Book now.',
  keywords: ['banquet hall Purulia', 'wedding hall Purulia', 'marriage hall Purulia', 'event venue Purulia', 'party hall Purulia', 'conference hall Purulia', 'best banquet hall in Purulia', 'wedding venue Purulia', 'marriage hall near Ajodhya Hill Purulia', 'birthday party hall Purulia', 'corporate event venue Purulia', 'reception hall Purulia', 'seminar hall Purulia', 'event hall near Ajodhya Hill Purulia', 'celebration venue Purulia'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/events',
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
    title: 'Banquet Hall & Events Purulia | Near Ajodhya Hill',
    description: 'Best banquet hall in Purulia at The Divine Oasis near Ajodhya Hill. Wedding hall, marriage hall, conference hall, birthday party hall. Host weddings, corporate events & parties in Purulia.',
    url: 'https://thedivineoasisresort.com/events',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Events & Banquet Hall at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banquet Hall & Events Purulia | Near Ajodhya Hill',
    description: 'Best banquet hall in Purulia at The Divine Oasis near Ajodhya Hill. Wedding, marriage, conference & party halls. Book now.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Events',
                item: 'https://thedivineoasisresort.com/events',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
