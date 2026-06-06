import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dining in Purnia | Pure Vegetarian Food — Hotel Surya Bella Casa',
  description: 'Enjoy pure vegetarian dining at Hotel Surya Bella Casa, Purnia. Order from top local restaurants via Swiggy & Zomato or explore Vikass Market street food nearby.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/dining',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Dining in Purnia | Pure Vegetarian Food — Hotel Surya Bella Casa',
    description: 'Enjoy pure vegetarian dining at Hotel Surya Bella Casa, Purnia. Order from top local restaurants via Swiggy & Zomato or explore Vikass Market street food nearby.',
    url: 'https://hotelsuryabellacasa.com/dining',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dining in Purnia | Pure Vegetarian Food — Hotel Surya Bella Casa',
    description: 'Enjoy pure vegetarian dining at Hotel Surya Bella Casa, Purnia. Order from top local restaurants via Swiggy & Zomato or explore Vikass Market street food nearby.',
  }
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
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
                "name": "Dining",
                "item": "https://hotelsuryabellacasa.com/dining"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
