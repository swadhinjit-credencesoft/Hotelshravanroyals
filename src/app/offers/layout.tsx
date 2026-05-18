import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seasonal Packages & Resort Offers | Unwind Karjat',
  description: 'Save on your weekend getaways near Mumbai. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.',
  alternates: {
    canonical: 'https://unwindkarjat.com/offers',
  },
  openGraph: {
    title: 'Seasonal Packages & Resort Offers | Unwind Karjat',
    description: 'Save on your weekend getaways near Mumbai. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.',
    url: 'https://unwindkarjat.com/offers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seasonal Packages & Resort Offers | Unwind Karjat',
    description: 'Save on your weekend getaways near Mumbai. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.',
  }
}

export default function OffersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
