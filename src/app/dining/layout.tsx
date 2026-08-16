import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dining at Unwind Karjat',
  description: 'Good food is part of the stay. Home-style meals, live tandoor and BBQ, and breakfast by the pool at Unwind Karjat — generous, familiar and best enjoyed together.',
  keywords: [
    'karjat local food',
    'resort restaurant near mumbai',
    'in house dining karjat',
    'tandoor and bbq karjat',
    'breakfast by the pool',
    'best dining in karjat'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/dining',
  },
  openGraph: {
    title: 'Dining at Unwind Karjat | Unwind Karjat',
    description: 'Good food is part of the stay. Home-style meals, live tandoor and BBQ, and breakfast by the pool at Unwind Karjat — generous, familiar and best enjoyed together.',
    url: 'https://unwindkarjat.com/dining',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/dining.png',
        width: 1200,
        height: 630,
        alt: 'Dining at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dining at Unwind Karjat | Unwind Karjat',
    description: 'Good food is part of the stay. Home-style meals, live tandoor and BBQ, and breakfast by the pool at Unwind Karjat — generous, familiar and best enjoyed together.',
    images: ['https://unwindkarjat.com/images/dining.png']
  }
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
