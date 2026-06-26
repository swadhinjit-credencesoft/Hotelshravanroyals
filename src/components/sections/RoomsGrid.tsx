'use client'

import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarCheck, Check, Maximize, Users, Zap } from 'lucide-react'
import { addDays, buildBookingUrl, todayString, trackBookingEvent } from '@/lib/hotelmate'
import { Room } from '@/lib/rooms'
import { useHotelMateRooms } from '@/lib/useHotelMateRooms'

export default function RoomsGrid() {
  const [filterPrice, setFilterPrice] = useState<string>('all')
  const [filterCapacity, setFilterCapacity] = useState<string>('all')
  const [comparisonMode, setComparisonMode] = useState<boolean>(false)
  const { rooms, loading, error } = useHotelMateRooms()

  const filteredRooms = rooms.filter((room) => {
    if (filterPrice === 'low' && room.price >= 5000) return false
    if (filterPrice === 'high' && room.price < 5000) return false
    if (filterCapacity === 'couple' && room.guests > 2) return false
    if (filterCapacity === 'family' && room.guests <= 2) return false
    return true
  })

  const handleBookNow = useCallback((room: Room) => {
    trackBookingEvent('booking_click', { source: 'rooms_grid', roomName: room.name, roomId: room.roomId })
    const today = todayString()
    const tomorrow = addDays(today, 1)
    const url = buildBookingUrl({
      fromDate: today,
      toDate: tomorrow,
      noOfRooms: '1',
      noOfPersons: '2',
      roomName: room.name,
      roomId: room.roomId,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <section className="py-12 md:py-24 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 border border-gold/20 shadow-sm rounded-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe/60">Price:</span>
              <select
                className="bg-transparent font-sans text-sm text-forest focus:outline-none border-b border-gold/30 pb-1"
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹5000</option>
                <option value="high">₹5000 &amp; Above</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe/60">Capacity:</span>
              <select
                className="bg-transparent font-sans text-sm text-forest focus:outline-none border-b border-gold/30 pb-1"
                value={filterCapacity}
                onChange={(e) => setFilterCapacity(e.target.value)}
              >
                <option value="all">All Sizes</option>
                <option value="couple">Couples (2 Guests)</option>
                <option value="family">Families (3+ Guests)</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setComparisonMode(!comparisonMode)}
            className={`font-sans text-[11px] uppercase tracking-[0.2em] px-6 py-3 border transition-all ${comparisonMode ? 'bg-gold text-[#1a1004] border-gold' : 'border-gold/30 text-gold hover:bg-gold/10'}`}
          >
            {comparisonMode ? 'Exit Comparison' : 'Compare Rooms'}
          </button>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-[560px] animate-pulse rounded-sm bg-white border border-gold/10" />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-sm border border-gold/20 bg-white p-8 font-serif text-taupe">
            We could not load live room data right now. Please try again shortly.
          </div>
        )}

        {!loading && !error && filteredRooms.length === 0 && (
          <div className="rounded-sm border border-gold/20 bg-white p-8 font-serif text-taupe">
            No rooms are available for the current selection.
          </div>
        )}

        {!loading && !error && filteredRooms.length > 0 && (
          <motion.div
            layout
            className={`grid gap-12 ${comparisonMode ? 'grid-cols-2 lg:grid-cols-4 gap-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
          >
            <AnimatePresence mode="popLayout">
              {filteredRooms.map((room) => (
                <motion.div
                  layout
                  key={room.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group flex flex-col bg-white border border-gold/10 p-6 shadow-sm hover:shadow-warm-lg transition-shadow duration-500 rounded-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm">
                    <Image src={room.image} alt={room.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      <div className="bg-cream/90 px-3 py-1 rounded-sm shadow-sm border border-gold/10">
                        <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-gold">{room.category}</span>
                      </div>
                      {room.price > 0 && (
                        <div className="bg-gold/90 px-3 py-1 rounded-sm shadow-sm flex items-center gap-1">
                          <Zap size={9} className="text-[#1a1004]" />
                          <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-[#1a1004] font-semibold">Live Rate</span>
                        </div>
                      )}
                      {!room.isAvailable && (
                        <div className="bg-rose-700/90 px-3 py-1 rounded-sm shadow-sm">
                          <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-white">Sold Out</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className={`font-display italic text-forest mb-2 ${comparisonMode ? 'text-2xl' : 'text-3xl'}`}>{room.name}</h3>
                    {!comparisonMode && (
                      <p className="font-serif text-base text-taupe/70 italic mb-6 leading-relaxed">{room.tagline}</p>
                    )}

                    <div className={`flex items-center gap-6 mb-6 text-taupe/80 ${comparisonMode ? 'flex-col items-start gap-3' : ''}`}>
                      <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest">
                        <Maximize size={14} className="text-gold" /> {room.noOfRooms} Rooms
                      </span>
                      <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest">
                        <Users size={14} className="text-gold" /> Up to {room.guests} Guests
                      </span>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-sans text-[10px] uppercase tracking-widest text-gold mb-3">Amenities</h4>
                      <ul className={`grid gap-2 ${comparisonMode ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {room.amenities.slice(0, 8).map((amenity) => (
                          <li key={amenity} className="flex items-center gap-2 font-sans text-xs text-taupe">
                            <Check size={12} className="text-gold" /> {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gold/10">
                      <div className="flex items-end justify-between mb-4">
                        <div className="flex flex-col">
                          <span className="font-sans text-[9px] uppercase tracking-widest text-gold/60 mb-0.5">From</span>
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-xl text-forest">
                              ₹{room.price.toLocaleString('en-IN')}
                              <span className="text-sm opacity-50 ml-1">/nt</span>
                            </span>
                            <span className="flex items-center gap-0.5 text-[9px] font-sans uppercase tracking-widest text-gold bg-gold/10 px-1.5 py-0.5 rounded-sm">
                              <Zap size={8} /> Live
                            </span>
                          </div>
                        </div>

                        {!comparisonMode && (
                          <Link href={`/rooms/${room.slug}`} className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-forest hover:text-gold transition-colors duration-300">
                            View Details <ArrowRight size={14} />
                          </Link>
                        )}
                      </div>

                      <button
                        onClick={() => handleBookNow(room)}
                        disabled={!room.isAvailable}
                        className={`w-full flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] py-3.5 rounded-sm transition-all duration-300 ${
                          !room.isAvailable
                            ? 'bg-taupe/10 text-taupe/40 cursor-not-allowed'
                            : 'bg-forest text-ivory hover:bg-gold hover:text-[#1a1004] active:scale-[0.98] cursor-pointer'
                        }`}
                        aria-label={`Book ${room.name} now`}
                      >
                        <CalendarCheck size={14} />
                        {!room.isAvailable ? 'Currently Unavailable' : 'Book Now'}
                      </button>

                      {comparisonMode && (
                        <Link href={`/rooms/${room.slug}`} className="mt-3 block text-center w-full bg-gold/10 text-forest font-sans text-[10px] uppercase tracking-[0.2em] py-3 hover:bg-gold transition-colors rounded-sm">
                          View Details
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  )
}
