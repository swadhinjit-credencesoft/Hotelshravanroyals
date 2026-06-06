import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Hotel Surya Bella Casa — Purnia, Bihar | +91 9835923601',
  description: 'Contact Hotel Surya Bella Casa in Purnia, Bihar. Call +91 9835923601 or email bellacasa561@gmail.com. Located at Suryalok Complex, Near Bus Stand, Purnia 854301.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Hotel Surya Bella Casa — Purnia, Bihar | +91 9835923601',
    description: 'Contact Hotel Surya Bella Casa in Purnia, Bihar. Call +91 9835923601 or email bellacasa561@gmail.com. Located at Suryalok Complex, Near Bus Stand, Purnia 854301.',
    url: 'https://hotelsuryabellacasa.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hotel Surya Bella Casa — Purnia, Bihar | +91 9835923601',
    description: 'Contact Hotel Surya Bella Casa in Purnia, Bihar. Call +91 9835923601 or email bellacasa561@gmail.com. Located at Suryalok Complex, Near Bus Stand, Purnia 854301.',
  }
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hotelsuryabellacasa.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://hotelsuryabellacasa.com/contact"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
