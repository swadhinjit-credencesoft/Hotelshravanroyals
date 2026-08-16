import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Offsites near Mumbai & Pune',
  description: 'Corporate offsites and team gatherings at Unwind Karjat — stay, meals, pool and open spaces for small corporate groups, just over an hour and a half from Mumbai and Pune.',
  keywords: [
    'corporate offsite near mumbai',
    'corporate offsite karjat',
    'team offsite resort pune',
    'small corporate group venue',
    'corporate team outing karjat',
    'resort for corporate outings'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/events/corporate',
  },
  openGraph: {
    title: 'Corporate Offsites near Mumbai & Pune | Unwind Karjat',
    description: 'Corporate offsites and team gatherings at Unwind Karjat — stay, meals, pool and open spaces for small corporate groups, just over an hour and a half from Mumbai and Pune.',
    url: 'https://unwindkarjat.com/events/corporate',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/exterior8.jpeg',
        width: 1200,
        height: 630,
        alt: 'Corporate offsite at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Offsites near Mumbai & Pune | Unwind Karjat',
    description: 'Corporate offsites and team gatherings at Unwind Karjat — stay, meals, pool and open spaces for small corporate groups, just over an hour and a half from Mumbai and Pune.',
    images: ['https://unwindkarjat.com/images/exterior8.jpeg']
  }
}

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
