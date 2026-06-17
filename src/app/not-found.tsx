import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Hotel Surya Bella Casa',
  description: 'The page you are looking for does not exist. Return to Hotel Surya Bella Casa homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="bg-cream min-h-screen flex flex-col justify-between">
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 max-w-[600px] mx-auto">
        <h1 className="font-display text-8xl md:text-9xl text-gold mb-6 font-light">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl italic text-forest mb-6">Page Not Found</h2>
        <p className="font-sans text-taupe/80 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-all rounded-sm font-bold shadow-md"
        >
          Return Home
        </Link>
      </div>

    </main>
  )
}
