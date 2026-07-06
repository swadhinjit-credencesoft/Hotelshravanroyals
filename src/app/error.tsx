'use client'

import Link from 'next/link'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-display text-4xl italic text-forest mb-4">Something went wrong</h1>
        <p className="font-serif text-taupe text-lg mb-4 leading-relaxed">
          We apologize for the inconvenience. Please try again or contact us directly.
        </p>
        <p className="font-sans text-taupe/60 text-sm mb-10">
          Need help? Call <a href="tel:+919835923601" className="text-gold hover:underline">+91 9835923601</a>
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-8 py-3 rounded-sm hover:bg-gold-light transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-gold/30 text-forest font-sans text-[11px] uppercase tracking-[0.16em] px-8 py-3 rounded-sm hover:bg-gold/5 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  )
}
