import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hotel Surya Bella Casa — Best Hotel in Purnia, Bihar',
  description: 'Learn about Hotel Surya Bella Casa, established in 2019 in Purnia, Bihar. Committed to warm hospitality, clean rooms, and affordable stays for families and business travelers.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'About Hotel Surya Bella Casa — Best Hotel in Purnia, Bihar',
    description: 'Learn about Hotel Surya Bella Casa, established in 2019 in Purnia, Bihar. Committed to warm hospitality, clean rooms, and affordable stays for families and business travelers.',
    url: 'https://hotelsuryabellacasa.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hotel Surya Bella Casa — Best Hotel in Purnia, Bihar',
    description: 'Learn about Hotel Surya Bella Casa, established in 2019 in Purnia, Bihar. Committed to warm hospitality, clean rooms, and affordable stays for families and business travelers.',
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
                "name": "About",
                "item": "https://hotelsuryabellacasa.com/about"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
