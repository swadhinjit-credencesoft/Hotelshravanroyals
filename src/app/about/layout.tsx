import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Nature Resort near Mumbai | Unwind Karjat',
  description: 'Discover the philosophy, origins, and eco-friendly commitments of Unwind Karjat, a boutique nature retreat framing the scenic Sahyadri mountains.',
  alternates: {
    canonical: 'https://unwindkarjat.com/about',
  },
  openGraph: {
    title: 'About Us | Nature Resort near Mumbai | Unwind Karjat',
    description: 'Discover the philosophy, origins, and eco-friendly commitments of Unwind Karjat, a boutique nature retreat framing the scenic Sahyadri mountains.',
    url: 'https://unwindkarjat.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Nature Resort near Mumbai | Unwind Karjat',
    description: 'Discover the philosophy, origins, and eco-friendly commitments of Unwind Karjat, a boutique nature retreat framing the scenic Sahyadri mountains.',
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
