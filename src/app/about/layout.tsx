import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Nature Resort in Purnia | Hotel Bella Casa',
  description: 'Discover the philosophy, origins, and eco-friendly commitments of Hotel Bella Casa, a boutique nature retreat framing the scenic Sahyadri mountains.',
  alternates: {
    canonical: 'https://hotelbellacasa.com/about',
  },
  openGraph: {
    title: 'About Us | Nature Resort in Purnia | Hotel Bella Casa',
    description: 'Discover the philosophy, origins, and eco-friendly commitments of Hotel Bella Casa, a boutique nature retreat framing the scenic Sahyadri mountains.',
    url: 'https://hotelbellacasa.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Nature Resort in Purnia | Hotel Bella Casa',
    description: 'Discover the philosophy, origins, and eco-friendly commitments of Hotel Bella Casa, a boutique nature retreat framing the scenic Sahyadri mountains.',
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
