import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Purnia, Bihar | +91 9835923601',
  description: 'Contact Hotel Surya Bella Casa in Purnia, Bihar. Call +91 9835923601 or email bellacasa561@gmail.com. Located at Suryalok Complex, Near Bus Stand, Purnia 854301.',
  keywords: ['contact hotel surya bella casa', 'purnia hotel phone number', 'hotel near bus stand purnia', 'suryalok complex purnia', 'hotel purnia email', 'purnia hotel address', 'hotel purnia contact number', 'hotel surya bella casa location', 'purnia hotel map', 'hotel reception purnia', 'purnia hotel whatsapp number', 'hotel near vikass market contact', 'purnia hotel directions', 'hotel surya bella casa call'],
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
    title: 'Contact Hotel Surya Bella Casa — Purnia, Bihar | +91 9835923601',
    description: 'Contact Hotel Surya Bella Casa in Purnia, Bihar. Call +91 9835923601 or email bellacasa561@gmail.com. Located at Suryalok Complex, Near Bus Stand, Purnia 854301.',
    url: 'https://hotelsuryabellacasa.com/contact',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Contact Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hotel Surya Bella Casa — Purnia, Bihar | +91 9835923601',
    description: 'Contact Hotel Surya Bella Casa in Purnia. Call +91 9835923601.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
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
