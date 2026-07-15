import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Hotel Surya Bella Casa in Purnea, Bihar. Call +91 9835923601. Located at Suryalok Complex, Opposite Vikass Market, Near Bus Stand, Purnea 854301. Best hotel near Purnea Bus Stand, near Railway Station.',
  keywords: ['contact hotel surya bella casa purnea', 'hotel near bus stand purnea', 'hotel purnea phone number', 'hotel opp vikass market purnea', 'hotel surya bella casa address', 'purnea hotel contact number', 'hotel near railway station purnea', 'hotel in mariam nagar purnea', 'hotel near gulabbagh purnea', 'hotel near line bazar purnea', 'hotel near purnea junction', 'hotel near airport purnea', 'hotel near nh-31 purnea', 'hotel in bhatta bazar purnea', 'hotel surya bella casa whatsapp number'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/contact',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Contact Hotel Surya Bella Casa | +91 9835923601',
    description: 'Contact Hotel Surya Bella Casa in Purnea. Call +91 9835923601. Located at Suryalok Complex, Opposite Vikass Market, Near Bus Stand, Purnea 854301.',
    url: 'https://hotelsuryabellacasa.com/contact',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3784.avif',
        width: 1200,
        height: 630,
        alt: 'Contact Hotel Surya Bella Casa Purnea - Hotel Near Bus Stand Near Railway Station',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hotel Surya Bella Casa | +91 9835923601',
    description: 'Contact Hotel Surya Bella Casa in Purnea near Bus Stand and Railway Station. Call +91 9835923601.',
    images: ['https://bookonelocal.in/cdn/IMG_3784.avif'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: 'https://hotelsuryabellacasa.com/contact',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
