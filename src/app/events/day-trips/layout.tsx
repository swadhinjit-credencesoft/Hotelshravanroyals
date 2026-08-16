import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One Day Picnics & Day Outing Packages in Karjat',
  description: 'A relaxed day out near Mumbai and Pune — pool and lawn time, games, music and a generous meal at Unwind Karjat.',
  keywords: [
    'day picnic karjat',
    'one day resort outing mumbai',
    'day packages near pune',
    'resort entry with lunch karjat',
    'day trip near mumbai',
    'family day outing resort'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/events/day-trips',
  },
  openGraph: {
    title: 'One Day Picnics & Day Outing Packages in Karjat | Unwind Karjat',
    description: 'A relaxed day out near Mumbai and Pune — pool and lawn time, games, music and a generous meal at Unwind Karjat.',
    url: 'https://unwindkarjat.com/events/day-trips',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/room2.jpeg',
        width: 1200,
        height: 630,
        alt: 'A relaxed day out at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Day Picnics & Day Outing Packages in Karjat | Unwind Karjat',
    description: 'A relaxed day out near Mumbai and Pune — pool and lawn time, games, music and a generous meal at Unwind Karjat.',
    images: ['https://unwindkarjat.com/images/room2.jpeg']
  }
}

export default function DayTripsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
