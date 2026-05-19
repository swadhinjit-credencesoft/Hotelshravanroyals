'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { buildBookingUrl } from '@/lib/hotelmate'

function ReservationsIframe() {
  const searchParams = useSearchParams()
  
  // Extract all parameters safely
  const fromDate = searchParams.get('fromDate') || undefined
  const toDate = searchParams.get('toDate') || undefined
  const noOfRooms = searchParams.get('noOfRooms') || undefined
  const noOfPersons = searchParams.get('noOfPersons') || undefined
  const roomName = searchParams.get('roomName') || undefined
  const roomId = searchParams.get('roomId') || undefined

  const iframeUrl = buildBookingUrl({
    fromDate,
    toDate,
    noOfRooms,
    noOfPersons,
    roomName,
    roomId
  })

  return (
    <div className="w-full max-w-5xl mx-auto bg-cream-dark border border-gold/20">
      <iframe
        src={iframeUrl}
        className="w-full border-0"
        style={{ height: '800px' }}
        title="Unwind Karjat Booking Engine"
        allow="payment"
      />
    </div>
  )
}

export default function ReservationsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-32 pb-32 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Availability</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-8">Secure Your Stay</h1>
        <p className="font-serif text-xl text-taupe max-w-xl mx-auto leading-relaxed mb-12">
          Select your preferred dates and sanctuary. Book directly through our secure booking engine.
        </p>

        <Suspense fallback={
          <div className="w-full max-w-5xl mx-auto bg-cream-dark border border-gold/20 flex items-center justify-center" style={{ height: '800px' }}>
            <p className="font-sans text-sm text-gold uppercase tracking-[0.2em] animate-pulse">Loading Booking Portal...</p>
          </div>
        }>
          <ReservationsIframe />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
