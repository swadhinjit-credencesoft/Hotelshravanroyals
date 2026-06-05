import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karjat Travel Blog & Itineraries | Unwind Karjat',
  description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
  keywords: [
    'karjat travel guide',
    'sahyadris monsoon itinerary',
    'corporate retreat checklist',
    'weekend travel tips',
    'things to do in karjat blog'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/blog',
  },
  openGraph: {
    title: 'Karjat Travel Blog & Itineraries | Unwind Karjat',
    description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
    url: 'https://unwindkarjat.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/bloghero.png',
        width: 1200,
        height: 630,
        alt: 'The Karjat Journal Nature Cover'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karjat Travel Blog & Itineraries | Unwind Karjat',
    description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
    images: ['https://unwindkarjat.com/bloghero.png']
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
