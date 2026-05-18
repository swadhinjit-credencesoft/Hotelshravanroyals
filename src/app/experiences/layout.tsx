import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monsoon Treks, Infinity Pool & Activities | Unwind Karjat',
  description: 'Immerse in unique outdoor experiences near Mumbai, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
  alternates: {
    canonical: 'https://unwindkarjat.com/experiences',
  },
  openGraph: {
    title: 'Monsoon Treks, Infinity Pool & Activities | Unwind Karjat',
    description: 'Immerse in unique outdoor experiences near Mumbai, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
    url: 'https://unwindkarjat.com/experiences',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monsoon Treks, Infinity Pool & Activities | Unwind Karjat',
    description: 'Immerse in unique outdoor experiences near Mumbai, including guided forest treks, winter bonfires, and trips to Kondana Caves and Bhivpuri Falls.',
  }
}

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
