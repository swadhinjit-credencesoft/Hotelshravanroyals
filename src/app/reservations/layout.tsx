import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Stay | Hotel Bella Casa',
  description: 'Secure your room booking at Hotel Bella Casa in Purnia. Select dates and room type to book directly through our secure booking engine.',
  alternates: {
    canonical: 'https://hotelbellacasa.com/reservations',
  },
  openGraph: {
    title: 'Book Your Stay | Hotel Bella Casa',
    description: 'Secure your room booking at Hotel Bella Casa in Purnia. Select dates and room type to book directly through our secure booking engine.',
    url: 'https://hotelbellacasa.com/reservations',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Stay | Hotel Bella Casa',
    description: 'Secure your room booking at Hotel Bella Casa in Purnia. Select dates and room type to book directly through our secure booking engine.',
  }
}

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
