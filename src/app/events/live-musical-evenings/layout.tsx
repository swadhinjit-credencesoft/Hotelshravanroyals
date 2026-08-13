import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Live Music & Acoustic Bonfire Nights in Karjat',
  description: 'Experience magical acoustic evenings, live band performances, and cozy bonfire jam sessions under the stars at Unwind Karjat.',
  keywords: [
    'live music resort karjat',
    'acoustic nights mumbai',
    'bonfire jam session pune',
    'music under stars karjat',
    'musical events weekend',
    'resort events maharashtra'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/events/live-musical-evenings',
  },
  openGraph: {
    title: 'Live Music & Acoustic Bonfire Nights in Karjat | Unwind Karjat',
    description: 'Experience magical acoustic evenings, live band performances, and cozy bonfire jam sessions under the stars at Unwind Karjat.',
    url: 'https://unwindkarjat.com/events/live-musical-evenings',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/exterior2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Live Acoustic Performance under the Stars at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Music & Acoustic Bonfire Nights in Karjat | Unwind Karjat',
    description: 'Experience magical acoustic evenings, live band performances, and cozy bonfire jam sessions under the stars at Unwind Karjat.',
    images: ['https://unwindkarjat.com/images/exterior2.jpeg']
  }
}

export default function LiveMusicalEveningsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
