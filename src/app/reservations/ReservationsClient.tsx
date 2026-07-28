'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Phone, Calendar, Clock, Users } from 'lucide-react'
import { fetchAvailability, buildBookingUrl, todayString, addDays } from '@/lib/hotelmate'
import type { HotelProperty, HotelRoom, PropertyService, BusinessServiceDto } from '@/lib/hotelmate'
import { mapHotelMateRooms } from '@/lib/rooms'
import type { Room } from '@/lib/rooms'

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, '')

interface Props {
  fallbackRooms: string
}

function ReservationsContent({ fallbackRooms }: Props) {
  const fallback: Room[] = useMemo(() => JSON.parse(fallbackRooms), [fallbackRooms])
  const searchParams = useSearchParams()

  const fromDate = searchParams?.get('fromDate') ?? todayString()
  const toDate = searchParams?.get('toDate') ?? addDays(todayString(), 1)
  const noOfPersons = searchParams?.get('noOfPersons') ?? '1'
  const noOfRooms = searchParams?.get('noOfRooms') ?? '1'

  const [property, setProperty] = useState<HotelProperty | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [rooms, setRooms] = useState<Room[]>(fallback)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchAvailability({
      fromDate,
      toDate,
      noOfPersons: parseInt(noOfPersons) || 1,
      noOfRooms: parseInt(noOfRooms) || 1,
    })
      .then((data) => {
        setProperty(data)
        const live = mapHotelMateRooms(data.roomList)
        if (live.length > 0) setRooms(live)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [fromDate, toDate, noOfPersons, noOfRooms])

  const handleBookRoom = useCallback((room: Room | HotelRoom) => {
    const isHotelRoom = 'roomFacilities' in room
    const roomId = isHotelRoom ? String((room as HotelRoom).id) : (room as Room).roomId
    const roomName = 'name' in room ? (room as Room).name : ''
    const url = buildBookingUrl({
      fromDate,
      toDate,
      noOfRooms,
      noOfPersons,
      roomName,
      roomId,
    })
    window.location.href = url
  }, [fromDate, toDate, noOfRooms, noOfPersons])

  const hotelName = property?.name || 'Hotel Surya Bella Casa'
  const hotelDesc = stripHtml(property?.businessDescription || 'Comfortable and budget-friendly stay in Purnea')
  const hotelImages = property?.imageList || []
  const services: PropertyService[] = property?.propertyServicesList || []
  const addr = property?.address
  const serviceDto: BusinessServiceDto | undefined = property?.businessServiceDtoList?.[0]
  const checkInTime = serviceDto?.checkInTime

  return (
    <>
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
          {property?.mobile && (
            <span className="inline-flex items-center gap-1.5 bg-cream-dark px-3 py-2 rounded-full border border-gold/20">
              <Phone size={12} className="text-gold shrink-0" />
              {property.mobile}
            </span>
          )}
          {(checkInTime || true) && (
            <span className="inline-flex items-center gap-1.5 bg-cream-dark px-3 py-2 rounded-full border border-gold/20">
              <Clock size={12} className="text-gold shrink-0" />
              Check-in 12:00 PM · Check-out 12:00 PM
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
        </div>

        {/* Room list */}
        <div>
          <h2 className="font-display text-2xl italic text-forest mb-6 text-center">Choose Your Room</h2>
          {!loading && error && (
            <div className="max-w-xl mx-auto mb-6 p-4 bg-amber-50 border border-amber-200 rounded-sm">
              <p className="text-amber-800 font-sans text-sm">Showing estimated prices. Live rates will appear once connected.</p>
            </div>
          )}
          {rooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(rooms as (Room | HotelRoom)[]).map((room: Room | HotelRoom) => {
                const roomName = 'name' in room ? room.name : 'Room'
                const roomPrice = 'price' in room ? room.price : ('roomOnlyPrice' in room ? room.roomOnlyPrice || 0 : 0)
                const roomGuests = 'guests' in room ? room.guests : ('maximumOccupancy' in room ? room.maximumOccupancy || 2 : 2)
                const roomCount = 'noOfRooms' in room ? room.noOfRooms : 1
                const imageUrl = 'image' in room ? room.image : (room as HotelRoom).imageList?.[0]?.url || ''
                const roomDesc = 'description' in room ? room.description : stripHtml((room as HotelRoom).description || '')
                const roomId = 'roomFacilities' in room ? String((room as HotelRoom).id) : (room as Room).roomId

                return (
                  <div
                    key={roomId}
                    className="bg-cream-dark border border-gold/10 rounded-sm overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-md"
                  >
                    <div className="relative h-44 bg-forest/10">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={roomName}
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
                        ₹{roomPrice?.toFixed(0) || '—'}
                        <span className="text-ivory/60"> / night</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl italic text-forest mb-2">{roomName}</h3>
                      <p className="font-serif text-sm text-taupe leading-relaxed mb-4 line-clamp-2">
                        {roomDesc}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs font-sans text-taupe bg-cream px-2.5 py-1 rounded-full">
                          Up to {roomGuests} guests
                        </span>
                        <span className="text-xs font-sans text-taupe bg-cream px-2.5 py-1 rounded-full">
                          {roomCount} room{roomCount !== 1 ? 's' : ''} available
                        </span>
                      </div>
                      <button
                        onClick={() => handleBookRoom(room)}
                        className="w-full bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.15em] py-3 rounded-sm transition-all duration-300 hover:bg-gold-light"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center p-8 bg-cream-dark border border-gold/10 rounded-sm">
              <p className="font-serif text-taupe">Loading available rooms...</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default function ReservationsClient({ fallbackRooms }: Props) {
  return <ReservationsContent fallbackRooms={fallbackRooms} />
}
