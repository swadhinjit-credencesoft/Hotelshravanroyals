import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Retreats & Offsite Venues near Mumbai',
  description: 'Host productive corporate retreats, strategy meets, and team-building offsites at Unwind Karjat. Modern conference facilities, premium cottages, and team activities.',
  keywords: [
    'corporate retreat near mumbai',
    'corporate offsite karjat',
    'team building resort mumbai',
    'business conference venue pune',
    'corporate team outing karjat',
    'resort for corporate outings'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/events/corporate',
  },
  openGraph: {
    title: 'Corporate Retreats & Offsite Venues near Mumbai | Unwind Karjat',
    description: 'Host productive corporate retreats, strategy meets, and team-building offsites at Unwind Karjat. Modern conference facilities, premium cottages, and team activities.',
    url: 'https://unwindkarjat.com/events/corporate',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/exterior8.jpeg',
        width: 1200,
        height: 630,
        alt: 'Corporate Hub Strategy Meeting Room at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Retreats & Offsite Venues near Mumbai | Unwind Karjat',
    description: 'Host productive corporate retreats, strategy meets, and team-building offsites at Unwind Karjat. Modern conference facilities, premium cottages, and team activities.',
    images: ['https://unwindkarjat.com/images/exterior8.jpeg']
  }
}

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
