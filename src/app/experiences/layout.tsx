import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monsoon Treks, Infinity Pool & Activities',
  description: 'Immerse in unique outdoor experiences near Mumbai, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
  keywords: [
    'things to do in karjat',
    'kondana caves trek',
    'resort with infinity pool near mumbai',
    'guided forest treks',
    'winter bonfires karjat',
    'bhivpuri waterfalls visit'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/experiences',
  },
  openGraph: {
    title: 'Monsoon Treks, Infinity Pool & Activities | Unwind Karjat',
    description: 'Immerse in unique outdoor experiences near Mumbai, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
    url: 'https://unwindkarjat.com/experiences',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/nature-view.png',
        width: 1200,
        height: 630,
        alt: 'Nature view and experiences at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monsoon Treks, Infinity Pool & Activities | Unwind Karjat',
    description: 'Immerse in unique outdoor experiences near Mumbai, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
    images: ['https://unwindkarjat.com/images/nature-view.png']
  }
}

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
