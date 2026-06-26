export default function Loading() {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin mb-4" role="status" aria-label="Loading" />
        <p className="font-serif text-taupe text-lg">Loading...</p>
      </div>
    </main>
  )
}
