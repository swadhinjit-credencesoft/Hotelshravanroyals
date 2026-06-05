import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Pool Parties & Birthday Venues in Karjat | Unwind Karjat',
  description: 'Host vibrant poolside birthdays, private anniversaries, and social gatherings on our celebration deck. Custom event curation at Karjat\'s boutique resort.',
  keywords: [
    'pool party venue karjat',
    'birthday party resort mumbai',
    'private celebrations pune',
    'resort for group parties',
    'anniversary venue karjat',
    'celebration deck reservation'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/events/parties',
  },
  openGraph: {
    title: 'Private Pool Parties & Birthday Venues in Karjat | Unwind Karjat',
    description: 'Host vibrant poolside birthdays, private anniversaries, and social gatherings on our celebration deck. Custom event curation at Karjat\'s boutique resort.',
    url: 'https://unwindkarjat.com/events/parties',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/exterior3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vibrant Celebration Deck Party at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Pool Parties & Birthday Venues in Karjat | Unwind Karjat',
    description: 'Host vibrant poolside birthdays, private anniversaries, and social gatherings on our celebration deck. Custom event curation at Karjat\'s boutique resort.',
    images: ['https://unwindkarjat.com/images/exterior3.jpeg']
  }
}

export default function PartiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
