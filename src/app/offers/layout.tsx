import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seasonal Packages & Resort Offers | Unwind Karjat',
  description: 'Save on your weekend getaways near Mumbai. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.',
  keywords: [
    'karjat resort discounts',
    'weekend getaway deals',
    'monsoon stay packages',
    'cottage booking offers',
    'resort loyalty deals',
    'hotel special packages karjat'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/offers',
  },
  openGraph: {
    title: 'Seasonal Packages & Resort Offers | Unwind Karjat',
    description: 'Save on your weekend getaways near Mumbai. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.',
    url: 'https://unwindkarjat.com/offers',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/resort-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Special Deals and Offers at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seasonal Packages & Resort Offers | Unwind Karjat',
    description: 'Save on your weekend getaways near Mumbai. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.',
    images: ['https://unwindkarjat.com/images/resort-exterior.png']
  }
}

export default function OffersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
