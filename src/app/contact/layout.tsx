import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Directions | Resort Location Map | Unwind Karjat',
  description: 'Find contact phone numbers, email address, and step-by-step driving directions from Mumbai & Pune to Unwind Karjat. View our resort map location.',
  keywords: [
    'how to reach karjat',
    'unwind karjat direction',
    'karjat resort phone number',
    'contact unwind karjat',
    'resort location map karjat'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/contact',
  },
  openGraph: {
    title: 'Contact & Directions | Resort Location Map | Unwind Karjat',
    description: 'Find contact phone numbers, email address, and step-by-step driving directions from Mumbai & Pune to Unwind Karjat. View our resort map location.',
    url: 'https://unwindkarjat.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/room2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Concierge Desk and Directions at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Directions | Resort Location Map | Unwind Karjat',
    description: 'Find contact phone numbers, email address, and step-by-step driving directions from Mumbai & Pune to Unwind Karjat. View our resort map location.',
    images: ['https://unwindkarjat.com/images/room2.jpeg']
  }
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
