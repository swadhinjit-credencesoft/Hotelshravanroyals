import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl md:text-8xl italic text-forest mb-4">404</h1>
      <h2 className="font-serif text-2xl md:text-3xl text-gold mb-6">Page Not Found</h2>
      <p className="font-sans text-sm text-forest/70 max-w-md mb-8 leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-widest px-8 py-3 rounded-sm hover:bg-gold-light transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
