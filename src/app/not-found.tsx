import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | Hotel Surya Bella Casa',
  description: 'The page you are looking for does not exist. Return to Hotel Surya Bella Casa homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/dining', label: 'Dining' },
  { href: '/events', label: 'Events & Banquet' },
  { href: '/offers', label: 'Offers' },
  { href: '/contact', label: 'Contact' },
]

export default function NotFound() {
  return (
    <main className="bg-cream min-h-screen flex flex-col justify-between">
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 max-w-[600px] mx-auto">
        <h1 className="font-display text-8xl md:text-9xl text-gold mb-6 font-light">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl italic text-forest mb-6">Page Not Found</h2>
        <p className="font-sans text-taupe/80 mb-4 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className="font-sans text-taupe/60 text-sm mb-10">
          Need help? Call us at <a href="tel:+919835923601" className="text-gold hover:underline">+91 9835923601</a>
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {quickLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[10px] uppercase tracking-[0.15em] text-forest border border-gold/30 px-5 py-3 rounded-sm hover:bg-gold hover:text-[#1a1004] hover:border-gold transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-light transition-all rounded-sm font-bold shadow-md"
        >
          Return Home
        </Link>
      </div>

    </main>
  )
}
