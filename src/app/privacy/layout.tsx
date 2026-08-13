import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Lodge & Resort Stays',
  description: 'Read the privacy policy guidelines of Unwind Karjat regarding data collection, storage, and customer reservation security protocols.',
  keywords: [
    'unwind karjat privacy policy',
    'resort reservation terms',
    'hotel reservation safety',
    'data security policy'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Lodge & Resort Stays | Unwind Karjat',
    description: 'Read the privacy policy guidelines of Unwind Karjat regarding data collection, storage, and customer reservation security protocols.',
    url: 'https://unwindkarjat.com/privacy',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/resort-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Lodge & Resort Stays | Unwind Karjat',
    description: 'Read the privacy policy guidelines of Unwind Karjat regarding data collection, storage, and customer reservation security protocols.',
    images: ['https://unwindkarjat.com/images/resort-exterior.png']
  }
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
