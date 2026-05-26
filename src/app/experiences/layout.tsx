import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monsoon Treks, Infinity Pool & Activities | Hotel Bella Casa',
  description: 'Immerse in unique outdoor experiences in Purnia, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/experiences',
  },
  openGraph: {
    title: 'Monsoon Treks, Infinity Pool & Activities | Hotel Bella Casa',
    description: 'Immerse in unique outdoor experiences in Purnia, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
    url: 'https://hotelsuryabellacasa.com/experiences',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monsoon Treks, Infinity Pool & Activities | Hotel Bella Casa',
    description: 'Immerse in unique outdoor experiences in Purnia, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
  }
}

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
