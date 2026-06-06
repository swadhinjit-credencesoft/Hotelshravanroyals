import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hotel Surya Bella Casa Purnia',
  description: 'Read the privacy policy of Hotel Surya Bella Casa, Purnia, Bihar — guidelines on data collection, storage, and reservation security.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Hotel Surya Bella Casa Purnia',
    description: 'Read the privacy policy of Hotel Surya Bella Casa, Purnia, Bihar — guidelines on data collection, storage, and reservation security.',
    url: 'https://hotelsuryabellacasa.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Hotel Surya Bella Casa Purnia',
    description: 'Read the privacy policy of Hotel Surya Bella Casa, Purnia, Bihar — guidelines on data collection, storage, and reservation security.',
  }
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
