import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farm-to-Table Restaurant & BBQ in Karjat | Unwind Karjat',
  description: 'Savor exquisite Maharashtrian thalis, coastal BBQ, and international cuisines at our multi-cuisine dining hall. Custom fish & mutton on request.',
  alternates: {
    canonical: 'https://unwindkarjat.com/dining',
  },
  openGraph: {
    title: 'Farm-to-Table Restaurant & BBQ in Karjat | Unwind Karjat',
    description: 'Savor exquisite Maharashtrian thalis, coastal BBQ, and international cuisines at our multi-cuisine dining hall. Custom fish & mutton on request.',
    url: 'https://unwindkarjat.com/dining',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farm-to-Table Restaurant & BBQ in Karjat | Unwind Karjat',
    description: 'Savor exquisite Maharashtrian thalis, coastal BBQ, and international cuisines at our multi-cuisine dining hall. Custom fish & mutton on request.',
  }
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
