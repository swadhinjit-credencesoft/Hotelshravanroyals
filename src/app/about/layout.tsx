import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Nature Resort near Mumbai',
  description: 'Discover the philosophy, origins, and eco-friendly commitments of Unwind Karjat, a boutique nature retreat framing the scenic Sahyadri mountains.',
  keywords: [
    'about unwind karjat',
    'eco friendly resort maharashtra',
    'sahyadri hills nature retreat',
    'boutique resort founders',
    'sustainable luxury cottages'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/about',
  },
  openGraph: {
    title: 'About Us | Nature Resort near Mumbai | Unwind Karjat',
    description: 'Discover the philosophy, origins, and eco-friendly commitments of Unwind Karjat, a boutique nature retreat framing the scenic Sahyadri mountains.',
    url: 'https://unwindkarjat.com/about',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/aboutimg.png',
        width: 1200,
        height: 630,
        alt: 'About Unwind Karjat - Where the Wild Meets the Refined'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Nature Resort near Mumbai | Unwind Karjat',
    description: 'Discover the philosophy, origins, and eco-friendly commitments of Unwind Karjat, a boutique nature retreat framing the scenic Sahyadri mountains.',
    images: ['https://unwindkarjat.com/aboutimg.png']
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
