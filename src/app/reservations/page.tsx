import type { Metadata } from 'next'
import { FALLBACK_ROOMS } from '@/lib/rooms'
import { Suspense } from 'react'
import ReservationsClient from './ReservationsClient'

export const metadata: Metadata = {
  title: 'Book Your Stay Online | Hotel Surya Bella Casa Purnea',
  description:
    'Book deluxe AC rooms, family rooms & budget stays at Hotel Surya Bella Casa near Purnea Bus Stand. Free WiFi, parking, 24/7 room service. Best hotel booking in Purnea, Bihar.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/reservations',
  },
}

export default function ReservationsPage() {
  const fallbackRoomsJson = JSON.stringify(FALLBACK_ROOMS)
  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hotelsuryabellacasa.com" },
              { "@type": "ListItem", "position": 2, "name": "Reservations", "item": "https://hotelsuryabellacasa.com/reservations" }
            ]
          })
        }}
      />
      <div className="pt-32 pb-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Suspense fallback={
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="relative h-56 md:h-72 rounded-sm overflow-hidden bg-forest/10 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin mb-4" />
                <p className="font-serif text-taupe">Loading available rooms...</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-cream-dark border border-gold/10 rounded-sm overflow-hidden">
                  <div className="h-44 bg-gold/10 animate-pulse" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-gold/10 w-3/4 rounded animate-pulse" />
                    <div className="h-4 bg-gold/10 w-full rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }>
          <ReservationsClient fallbackRooms={fallbackRoomsJson} />
        </Suspense>
      </div>
    </main>
  )
}
