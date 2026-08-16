import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weddings & Receptions in Karjat',
  description: 'Intimate weddings and receptions at Unwind Karjat — private lawns, stay for your guests and generous catering together in one relaxed place.',
  keywords: [
    'intimate wedding venue karjat',
    'wedding lawns near mumbai',
    'reception venue near pune',
    'wedding stay karjat',
    'karjat marriage lawn',
    'private wedding venue pune'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/events/weddings',
  },
  openGraph: {
    title: 'Weddings & Receptions in Karjat | Unwind Karjat',
    description: 'Intimate weddings and receptions at Unwind Karjat — private lawns, stay for your guests and generous catering together in one relaxed place.',
    url: 'https://unwindkarjat.com/events/weddings',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/exterior6.jpeg',
        width: 1200,
        height: 630,
        alt: 'Wedding celebration at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weddings & Receptions in Karjat | Unwind Karjat',
    description: 'Intimate weddings and receptions at Unwind Karjat — private lawns, stay for your guests and generous catering together in one relaxed place.',
    images: ['https://unwindkarjat.com/images/exterior6.jpeg']
  }
}

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
