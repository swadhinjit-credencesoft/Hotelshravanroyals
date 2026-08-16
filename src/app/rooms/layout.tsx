import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms & Stays near Mumbai & Pune',
  description: 'Comfortable rooms and stays at Unwind Karjat — Lawn & Pool Facing Rooms, Farm Facing Rooms, the Red Brick Suite and a Family Room for up to 8 guests.',
  keywords: [
    'rooms in karjat',
    'boutique resort karjat',
    'lawn pool facing rooms karjat',
    'farm facing rooms karjat',
    'karjat family room',
    'resort stays near pune'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/rooms',
  },
  openGraph: {
    title: 'Rooms & Stays near Mumbai & Pune | Unwind Karjat',
    description: 'Comfortable rooms and stays at Unwind Karjat — Lawn & Pool Facing Rooms, Farm Facing Rooms, the Red Brick Suite and a Family Room for up to 8 guests.',
    url: 'https://unwindkarjat.com/rooms',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/Lawn-Facing-Room.png',
        width: 1200,
        height: 630,
        alt: 'Rooms at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooms & Stays near Mumbai & Pune | Unwind Karjat',
    description: 'Comfortable rooms and stays at Unwind Karjat — Lawn & Pool Facing Rooms, Farm Facing Rooms, the Red Brick Suite and a Family Room for up to 8 guests.',
    images: ['https://unwindkarjat.com/Lawn-Facing-Room.png']
  }
}

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
