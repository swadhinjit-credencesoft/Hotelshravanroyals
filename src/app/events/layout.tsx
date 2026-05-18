import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destination Weddings & Corporate Offsites | Unwind Karjat',
  description: 'Host beautiful forest weddings and strategic corporate offsite retreats near Pune and Mumbai. Premium lawns & modern corporate hubs for up to 250 guests.',
  alternates: {
    canonical: 'https://unwindkarjat.com/events',
  },
  openGraph: {
    title: 'Destination Weddings & Corporate Offsites | Unwind Karjat',
    description: 'Host beautiful forest weddings and strategic corporate offsite retreats near Pune and Mumbai. Premium lawns & modern corporate hubs for up to 250 guests.',
    url: 'https://unwindkarjat.com/events',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destination Weddings & Corporate Offsites | Unwind Karjat',
    description: 'Host beautiful forest weddings and strategic corporate offsite retreats near Pune and Mumbai. Premium lawns & modern corporate hubs for up to 250 guests.',
  }
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
