import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Places to Visit in Purulia | Nearby Attractions',
  description: 'Explore places to visit in Purulia and nearby attractions near The Divine Oasis. Maa Puran Devi Temple, Purulia Court, Polytechnic, shopping markets. Best things to do in Purulia, West Bengal. Book your stay now.',
  keywords: ['places to visit in Purulia', 'things to do in Purulia', 'Purulia nearby attractions', 'maa puran devi temple Purulia', 'Purulia court', 'district hospital Purulia', 'polytechnic Purulia', 'shopping market Purulia', 'bus terminal Purulia', 'Purulia sightseeing', 'Purulia city tour', 'Purulia local markets', 'weekend activities Purulia', 'Purulia West Bengal tourism', 'hotel near attractions Purulia'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/experiences',
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
    title: 'Places to Visit in Purulia | Nearby Attractions',
    description: 'Explore places to visit in Purulia and nearby attractions near The Divine Oasis. Maa Puran Devi Temple, shopping markets, and more. Best things to do in Purulia.',
    url: 'https://thedivineoasisresort.com/experiences',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Experiences at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Visit in Purulia | Nearby Attractions',
    description: 'Explore places to visit in Purulia near The Divine Oasis. Temples, markets, attractions near Ajodhya Hill.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
}

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Experiences',
                item: 'https://thedivineoasisresort.com/experiences',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
