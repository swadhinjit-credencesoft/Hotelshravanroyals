'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Phone, Calendar, Clock, Users } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { fetchAvailability, buildBookingUrl, todayString, addDays } from '@/lib/hotelmate'
import type { HotelProperty, HotelRoom } from '@/lib/hotelmate'

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, '')

function ReservationsContent() {
  const searchParams = useSearchParams()

  const fromDate = searchParams.get('fromDate') || todayString()
  const toDate = searchParams.get('toDate') || addDays(todayString(), 1)
  const noOfPersons = searchParams.get('noOfPersons') || '1'
  const noOfRooms = searchParams.get('noOfRooms') || '1'

  const [property, setProperty] = useState<HotelProperty | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<{ name: string; id: number } | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchAvailability({
      fromDate,
      toDate,
      noOfPersons: parseInt(noOfPersons) || 1,
      noOfRooms: parseInt(noOfRooms) || 1,
    })
      .then(setProperty)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [fromDate, toDate, noOfPersons, noOfRooms])

  const iframeUrl = buildBookingUrl({
    fromDate,
    toDate,
    noOfRooms,
    noOfPersons,
    roomName: selectedRoom?.name,
    roomId: selectedRoom?.id?.toString(),
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hydrate = property as any
  const hotelName = property?.name || 'Hotel'
  const hotelDesc = stripHtml(property?.businessDescription || '')
  const hotelImages = property?.imageList || []
  const services: Array<{ id: number | null; name: string }> = hydrate?.propertyServicesList || []
  const addr = property?.address
  const checkInTime = hydrate?.businessServiceDtoList?.[0]?.checkInTime as string | undefined
  const checkOutTime = hydrate?.businessServiceDtoList?.[0]?.checkOutTime as string | undefined

  return (
    <>
      {/* Loading skeleton */}
      {loading && (
        <div className="animate-pulse space-y-8">
          <div className="h-64 bg-gold/10 rounded-sm max-w-5xl mx-auto" />
          <div className="h-6 bg-gold/10 w-1/3 mx-auto rounded" />
          <div className="h-4 bg-gold/10 w-2/3 mx-auto rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-cream-dark border border-gold/10 rounded-sm overflow-hidden">
                <div className="h-44 bg-gold/10" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-gold/10 w-3/4 rounded" />
                  <div className="h-4 bg-gold/10 w-full rounded" />
                  <div className="h-4 bg-gold/10 w-2/3 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="max-w-xl mx-auto mb-14 p-6 bg-red-50 border border-red-200 rounded-sm">
          <p className="text-red-700 font-sans text-sm">Unable to load availability. Please try again.</p>
        </div>
      )}

      {/* Content */}
      {!loading && !error && property && (
        <div className="text-left max-w-5xl mx-auto space-y-12">
          {/* Hotel header */}
          <div className="relative h-56 md:h-72 rounded-sm overflow-hidden bg-forest/10">
            {hotelImages[0]?.url ? (
              <Image src={hotelImages[0].url} alt={hotelName} fill className="object-cover" sizes="100vw" priority />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="font-sans text-xs uppercase tracking-widest text-gold/30">{hotelName}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="font-display text-3xl md:text-5xl italic text-ivory mb-2">{hotelName}</h1>
              {hotelDesc && (
                <p className="font-serif text-sm md:text-base text-ivory/80 max-w-2xl line-clamp-2 leading-relaxed">{hotelDesc}</p>
              )}
            </div>
          </div>

          {/* Hotel info bar */}
          <div className="flex flex-wrap gap-3 text-xs font-sans text-taupe">
            {addr && (
              <span className="inline-flex items-center gap-1.5 bg-cream-dark px-3 py-2 rounded-full border border-gold/20">
                <MapPin size={12} className="text-gold shrink-0" />
                {[addr.streetName, addr.city, addr.state].filter(Boolean).join(', ')}
              </span>
            )}
            {property.mobile && (
              <span className="inline-flex items-center gap-1.5 bg-cream-dark px-3 py-2 rounded-full border border-gold/20">
                <Phone size={12} className="text-gold shrink-0" />
                {property.mobile}
              </span>
            )}
            {checkInTime && checkOutTime && (
              <span className="inline-flex items-center gap-1.5 bg-cream-dark px-3 py-2 rounded-full border border-gold/20">
                <Clock size={12} className="text-gold shrink-0" />
                Check-in {checkInTime} · Check-out {checkOutTime}
              </span>
            )}
          </div>

          {/* Amenities grid */}
          {services.length > 0 && (
            <div>
              <h2 className="font-display text-2xl italic text-forest mb-5 text-center">Amenities & Services</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {services
                  .filter((s: { name: string | null }) => s.name && !s.name.includes('Distance') && !s.name.includes('Railway') && !s.name.includes('College'))
                  .slice(0, 10)
                  .map((svc: { id: number | null; name: string }, i: number) => (
                    <span key={svc.id || i} className="inline-flex items-center gap-1.5 bg-cream-dark text-taupe font-sans text-xs px-3.5 py-2 rounded-full border border-gold/20 hover:border-gold/40 transition-colors">
                      {svc.name}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Summary bar */}
          <div className="flex flex-wrap gap-3 justify-center text-sm font-sans text-taupe">
            <span className="inline-flex items-center gap-1.5 bg-cream-dark px-4 py-2 rounded-full border border-gold/20">
              <Calendar size={14} className="text-gold" />
              {fromDate} — {toDate}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-cream-dark px-4 py-2 rounded-full border border-gold/20">
              <Users size={14} className="text-gold" />
              {noOfPersons} Guest{parseInt(noOfPersons) !== 1 ? 's' : ''}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-cream-dark px-4 py-2 rounded-full border border-gold/20">
              {noOfRooms} Room{parseInt(noOfRooms) !== 1 ? 's' : ''}
            </span>
            {selectedRoom && (
              <span className="inline-flex items-center gap-1.5 bg-forest/10 text-forest px-4 py-2 rounded-full border border-forest/20">
                {selectedRoom.name}
              </span>
            )}
          </div>

          {/* Room list */}
          <div>
            <h2 className="font-display text-2xl italic text-forest mb-6 text-center">
              {selectedRoom ? 'Select Another Room' : 'Choose Your Room'}
            </h2>
            {property.roomList && property.roomList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.roomList.map((room: HotelRoom) => (
                  <div
                    key={room.id}
                    className={`bg-cream-dark border rounded-sm overflow-hidden transition-all duration-300 ${
                      selectedRoom?.id === room.id
                        ? 'border-gold shadow-lg ring-1 ring-gold/30'
                        : 'border-gold/10 hover:border-gold/30 hover:shadow-md'
                    }`}
                  >
                    <div className="relative h-44 bg-forest/10">
                      {room.imageList?.[0]?.url ? (
                        <Image
                          src={room.imageList[0].url}
                          alt={room.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gold/30 font-sans text-xs uppercase tracking-wider">
                          No image
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-forest/90 text-ivory font-sans text-xs px-3 py-1.5 rounded-full">
                        ₹{room.roomOnlyPrice?.toFixed(0) || '—'}
                        <span className="text-ivory/60"> / night</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl italic text-forest mb-2">{room.name}</h3>
                      <p className="font-serif text-sm text-taupe leading-relaxed mb-4 line-clamp-2">
                        {stripHtml(room.description || '')}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs font-sans text-taupe bg-cream px-2.5 py-1 rounded-full">
                          Up to {room.maximumOccupancy} guests
                        </span>
                        <span className="text-xs font-sans text-taupe bg-cream px-2.5 py-1 rounded-full">
                          {room.noOfRooms} room{room.noOfRooms !== 1 ? 's' : ''} available
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          setSelectedRoom(
                            selectedRoom?.id === room.id
                              ? null
                              : { name: room.name, id: room.id },
                          )
                        }
                        className={`w-full font-sans text-xs uppercase tracking-[0.15em] py-3 rounded-sm transition-all duration-300 ${
                          selectedRoom?.id === room.id
                            ? 'bg-forest text-ivory'
                            : 'bg-gold text-[#1a1004] hover:bg-gold-light'
                        }`}
                      >
                        {selectedRoom?.id === room.id ? 'Selected' : 'Select Room'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-8 bg-cream-dark border border-gold/10 rounded-sm">
                <p className="font-serif text-taupe">No rooms available for the selected dates.</p>
              </div>
            )}
          </div>

          {/* Booking engine iframe */}
          <div>
            <h2 className="font-display text-2xl italic text-forest mb-6 text-center">Complete Your Booking</h2>
            <div className="bg-cream-dark border border-gold/20">
              <iframe
                src={iframeUrl}
                className="w-full border-0"
                style={{ height: '800px' }}
                title="Hotel Booking Engine"
                allow="payment"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function ReservationsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-32 pb-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Suspense fallback={
          <div className="max-w-5xl mx-auto animate-pulse space-y-8">
            <div className="h-64 bg-gold/10 rounded-sm" />
            <div className="h-6 bg-gold/10 w-1/3 mx-auto rounded" />
            <div className="h-4 bg-gold/10 w-2/3 mx-auto rounded" />
          </div>
        }>
          <ReservationsContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
