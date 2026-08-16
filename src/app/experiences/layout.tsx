import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiences at Unwind Karjat',
  description: 'The pool, open lawns, games, music and karaoke at Unwind Karjat — there is always something to do, or nothing at all.',
  keywords: [
    'things to do in karjat',
    'resort with pool near mumbai',
    'lawn games resort karjat',
    'karaoke and music karjat',
    'bonfires near pune',
    'relaxing resort getaways'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/experiences',
  },
  openGraph: {
    title: 'Experiences at Unwind Karjat | Unwind Karjat',
    description: 'The pool, open lawns, games, music and karaoke at Unwind Karjat — there is always something to do, or nothing at all.',
    url: 'https://unwindkarjat.com/experiences',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/nature-view.png',
        width: 1200,
        height: 630,
        alt: 'Experiences at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiences at Unwind Karjat | Unwind Karjat',
    description: 'The pool, open lawns, games, music and karaoke at Unwind Karjat — there is always something to do, or nothing at all.',
    images: ['https://unwindkarjat.com/images/nature-view.png']
  }
}

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
