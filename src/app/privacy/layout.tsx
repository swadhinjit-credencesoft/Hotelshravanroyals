import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Lodge & Resort Stays | Hotel Bella Casa',
  description: 'Read the privacy policy guidelines of Hotel Bella Casa regarding data collection, storage, and customer reservation security protocols.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Lodge & Resort Stays | Hotel Bella Casa',
    description: 'Read the privacy policy guidelines of Hotel Bella Casa regarding data collection, storage, and customer reservation security protocols.',
    url: 'https://hotelsuryabellacasa.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Lodge & Resort Stays | Hotel Bella Casa',
    description: 'Read the privacy policy guidelines of Hotel Bella Casa regarding data collection, storage, and customer reservation security protocols.',
  }
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
