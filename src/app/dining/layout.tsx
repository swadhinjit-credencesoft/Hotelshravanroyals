import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bespoke Dining & Local Cuisine',
  description: 'Savour fresh, farm-to-table Maharashtrian delicacies and global cuisines at Unwind Karjat. Explore our all-inclusive meal plans and live BBQ setups.',
  keywords: [
    'karjat local food',
    'resort restaurant near mumbai',
    'all inclusive meal plan karjat',
    'farm to table karjat',
    'bbq and bonfire package',
    'best dining in karjat'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/dining',
  },
  openGraph: {
    title: 'Bespoke Dining & Local Cuisine | Unwind Karjat',
    description: 'Savour fresh, farm-to-table Maharashtrian delicacies and global cuisines at Unwind Karjat. Explore our all-inclusive meal plans and live BBQ setups.',
    url: 'https://unwindkarjat.com/dining',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/dining.png',
        width: 1200,
        height: 630,
        alt: 'Elegant Farm-To-Table Dining Hall at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bespoke Dining & Local Cuisine | Unwind Karjat',
    description: 'Savour fresh, farm-to-table Maharashtrian delicacies and global cuisines at Unwind Karjat. Explore our all-inclusive meal plans and live BBQ setups.',
    images: ['https://unwindkarjat.com/images/dining.png']
  }
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
