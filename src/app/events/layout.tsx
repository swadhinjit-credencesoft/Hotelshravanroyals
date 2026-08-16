import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events & Celebrations near Mumbai & Pune',
  description: 'Birthdays, family get-togethers, corporate offsites and private celebrations at Unwind Karjat — with stay, food and open spaces together in one place.',
  alternates: {
    canonical: 'https://unwindkarjat.com/events',
  },
  openGraph: {
    title: 'Events & Celebrations near Mumbai & Pune | Unwind Karjat',
    description: 'Birthdays, family get-togethers, corporate offsites and private celebrations at Unwind Karjat — with stay, food and open spaces together in one place.',
    url: 'https://unwindkarjat.com/events',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/exterior2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Events and Celebrations at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events & Celebrations near Mumbai & Pune | Unwind Karjat',
    description: 'Birthdays, family get-togethers, corporate offsites and private celebrations at Unwind Karjat — with stay, food and open spaces together in one place.',
    images: ['https://unwindkarjat.com/images/exterior2.jpeg']
  }
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
