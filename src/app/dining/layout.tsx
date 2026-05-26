import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farm-to-Table Restaurant & BBQ in Purnia | Hotel Bella Casa',
  description: 'Savor exquisite Maharashtrian thalis, coastal BBQ, and international cuisines at our multi-cuisine dining hall. Custom fish & mutton on request.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/dining',
  },
  openGraph: {
    title: 'Farm-to-Table Restaurant & BBQ in Purnia | Hotel Bella Casa',
    description: 'Savor exquisite Maharashtrian thalis, coastal BBQ, and international cuisines at our multi-cuisine dining hall. Custom fish & mutton on request.',
    url: 'https://hotelsuryabellacasa.com/dining',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farm-to-Table Restaurant & BBQ in Purnia | Hotel Bella Casa',
    description: 'Savor exquisite Maharashtrian thalis, coastal BBQ, and international cuisines at our multi-cuisine dining hall. Custom fish & mutton on request.',
  }
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
