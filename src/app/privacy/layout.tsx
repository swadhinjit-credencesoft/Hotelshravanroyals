import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Lodge & Resort Stays | Unwind Karjat',
  description: 'Read the privacy policy guidelines of Unwind Karjat regarding data collection, storage, and customer reservation security protocols.',
  alternates: {
    canonical: 'https://unwindkarjat.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Lodge & Resort Stays | Unwind Karjat',
    description: 'Read the privacy policy guidelines of Unwind Karjat regarding data collection, storage, and customer reservation security protocols.',
    url: 'https://unwindkarjat.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Lodge & Resort Stays | Unwind Karjat',
    description: 'Read the privacy policy guidelines of Unwind Karjat regarding data collection, storage, and customer reservation security protocols.',
  }
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
