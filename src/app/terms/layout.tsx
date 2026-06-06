import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hotel Surya Bella Casa Purnia',
  description: 'Read the terms and conditions of Hotel Surya Bella Casa, Purnia, Bihar. Understand our booking, check-in/check-out, and guest conduct policies.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms & Conditions | Hotel Surya Bella Casa Purnia',
    description: 'Read the terms and conditions of Hotel Surya Bella Casa, Purnia, Bihar. Understand our booking, check-in/check-out, and guest conduct policies.',
    url: 'https://hotelsuryabellacasa.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Hotel Surya Bella Casa Purnia',
    description: 'Read the terms and conditions of Hotel Surya Bella Casa, Purnia, Bihar. Understand our booking, check-in/check-out, and guest conduct policies.',
  }
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
