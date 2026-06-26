'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 border-2 border-gold/30 border-t-gold rounded-full animate-spin mb-6 mx-auto" />
        <h1 className="font-display text-4xl italic text-forest mb-4">Something went wrong</h1>
        <p className="font-serif text-taupe text-lg mb-8 leading-relaxed">
          We apologize for the inconvenience. Please try again or contact us directly.
        </p>
        <button
          onClick={reset}
          className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-8 py-3 rounded-sm hover:bg-gold-light transition-colors"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}
