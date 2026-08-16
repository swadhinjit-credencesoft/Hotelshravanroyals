'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { todayString, addDays, buildBookingUrl, fetchAvailability, matchLocalRoomToApi } from '@/lib/hotelmate'
import { useLivePrices } from '@/lib/useLivePrices'
import { 
  Wifi, 
  Wind, 
  Tv, 
  Car, 
  Coffee, 
  Bath, 
  ChevronRight, 
  Users, 
  Maximize, 
  Eye,
  CheckCircle2,
  Calendar,
  ArrowRight,
  X,
  Zap
} from 'lucide-react'

import { Room } from '@/data/rooms'

const amenityIcons: Record<string, React.ElementType> = {
  'AC': Wind,
  'Wifi': Wifi,
  'TV': Tv,
  'Parking': Car,
  'Room Service': Coffee,
  'Geyser': Bath,
  'Private Sit-out': Eye,
  'Balcony': Eye,
  'King Bed': Users,
  'Double Bed': Users,
  'Mini Fridge': Coffee,
}

interface RoomDetailClientProps {
  room: Room;
  otherRooms: Room[];
}

export default function RoomDetailClient({ room, otherRooms }: RoomDetailClientProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  // Fetch live price from API for the header "Starting from" display
  const { prices: livePrices, loading: headerPriceLoading } = useLivePrices()
  const headerLiveData = livePrices[room.slug]
  const headerPrice = headerLiveData?.price ?? room.price
  const isHeaderLive = headerLiveData?.isLive ?? false

  // Gallery: prefer real photos from the HotelMate API, fall back to local
  const galleryImages = headerLiveData?.images?.length
    ? headerLiveData.images
    : [room.image]
  const heroImage = galleryImages[activeImage] ?? galleryImages[0] ?? room.image

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    'name': room.name,
    'description': room.description,
    'image': galleryImages.map((img: string) =>
      img.startsWith('http') ? img : `https://unwindkarjat.com${img}`
    ),
    'occupancy': {
      '@type': 'QuantitativeValue',
      'value': room.guests
    },
    'amenityFeature': room.amenities.map((a: string) => ({
      '@type': 'LocationFeatureSpecification',
      'name': a,
      'value': true
    }))
  }

  return (
    <main className="bg-[#fdfcf8] min-h-screen pt-20" id="main-content">
      <Navbar />
      
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://unwindkarjat.com' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Rooms', 'item': 'https://unwindkarjat.com/rooms' },
              { '@type': 'ListItem', 'position': 3, 'name': room.name, 'item': `https://unwindkarjat.com/rooms/${room.slug}` }
            ]
          })
        }}
      />

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[80vh]"
            >
              <Image
                src={heroImage}
                alt={room.imageAlt}
                fill
                loading="lazy"
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumbs */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-taupe/60">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link href="/rooms" className="hover:text-gold transition-colors">Rooms</Link>
          <ChevronRight size={10} />
          <span className="text-forest">{room.name}</span>
        </nav>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">
        {/* Left Column: Content */}
        <div className="lg:col-span-8">
          {/* Hero Image / Gallery Trigger */}
          <div 
            className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-4 group cursor-zoom-in shadow-2xl"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={heroImage}
              alt={room.imageAlt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
              sizes="(max-w-1024px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-sm text-white font-sans text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to Enlarge
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
              {galleryImages.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-colors ${
                    i === activeImage ? 'border-gold' : 'border-transparent hover:border-gold/40'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${room.name} photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-6 mb-8 border-b border-gold/10 pb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-forest mb-2">{room.name}</h1>
              <p className="font-sans text-gold uppercase tracking-[0.2em] text-[11px]">{room.tagline}</p>
            </motion.div>
            <motion.div 
              className="text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-taupe/60 text-[10px] uppercase tracking-widest mb-1 font-sans">Starting from</p>
              {headerPriceLoading ? (
                <p className="text-xl font-sans text-taupe/40 animate-pulse">Fetching live rate…</p>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <p className="text-3xl font-serif text-forest">
                    ₹{headerPrice.toLocaleString('en-IN')}
                    <span className="text-sm font-sans text-taupe/60 ml-1">/ night</span>
                  </p>
                  {isHeaderLive && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-sans uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded-sm">
                      <Zap size={9} /> Live API Rate
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold shadow-sm">
                <Users size={20} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-taupe/60 font-sans mb-1">Capacity</p>
                <p className="font-serif text-forest text-sm md:text-base">Up to {room.guests} Guests</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold shadow-sm">
                <Maximize size={20} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-taupe/60 font-sans mb-1">Space</p>
                <p className="font-serif text-forest text-sm md:text-base">{room.size} sq.m</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold shadow-sm">
                <Eye size={20} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-taupe/60 font-sans mb-1">View Type</p>
                <p className="font-serif text-forest text-sm md:text-base">{room.view}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl text-forest mb-6">About the Stay</h2>
            <p className="font-serif text-forest/70 text-lg leading-relaxed mb-8">
              {room.description}
            </p>
          </section>

          {/* Amenities Grid */}
          <section className="mb-16 bg-cream/30 p-8 rounded-sm">
            <h2 className="font-serif text-2xl text-forest mb-8">Room Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
              {room.amenities.map((amenity: string) => {
                const Icon = amenityIcons[amenity] || CheckCircle2
                return (
                  <div key={amenity} className="flex items-center gap-3">
                    <Icon size={18} className="text-gold" />
                    <span className="font-sans text-[13px] text-forest/80 uppercase tracking-widest">{amenity}</span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Policies Accordion */}
          <section className="mb-16 border-t border-gold/10 pt-12">
            <h2 className="font-serif text-2xl text-forest mb-8">Policies & Info</h2>
            <div className="space-y-4">
              {[
                { title: 'Check-in & Check-out', content: 'Check-in: 1:00 PM | Check-out: 11:00 AM' },
                { title: 'Extra Bed Policy', content: 'Available on request for an additional charge of ₹1,500 per night.' },
                { title: 'Cancellation Policy', content: 'Free cancellation up to 48 hours before arrival. 100% charge for late cancellations.' }
              ].map((policy, i) => (
                <div key={i} className="border-b border-gold/10 pb-4">
                  <div className="flex items-center justify-between w-full group py-2">
                    <span className="font-serif text-lg text-forest group-hover:text-gold transition-colors">{policy.title}</span>
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                  <p className="font-serif text-forest/60 text-sm mt-2">{policy.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <BookingSidebar room={room} />
        </div>
      </div>

      {/* Cross-links */}
      <section className="bg-cream/20 py-24 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-forest mb-12 text-center italic">Explore Other Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherRooms.map(r => (
              <Link key={r.slug} href={`/rooms/${r.slug}`} className="group relative aspect-[16/7] overflow-hidden rounded-sm">
                <Image
                  src={livePrices[r.slug]?.images?.[0] ?? r.image}
                  alt={r.imageAlt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <p className="text-gold text-[10px] uppercase tracking-widest mb-1">{r.tagline}</p>
                  <h3 className="text-ivory font-serif text-2xl group-hover:text-gold transition-colors flex items-center gap-3">
                    {r.name}
                    <ArrowRight size={18} />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function BookingSidebar({ room }: { room: Room }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')
  const [roomsCount, setRoomsCount] = useState('1')
  const [livePrice, setLivePrice] = useState<number | null>(null)
  const [liveRoomId, setLiveRoomId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isAvailable, setIsAvailable] = useState(true)

  // Initialize dates safely in client to avoid hydration mismatch
  useEffect(() => {
    setCheckIn(todayString())
    setCheckOut(addDays(todayString(), 1))
  }, [])

  useEffect(() => {
    if (!checkIn || !checkOut) return

    let active = true
    async function checkLiveAvailability() {
      setLoading(true)
      try {
        const data = await fetchAvailability({
          fromDate: checkIn,
          toDate: checkOut,
          noOfRooms: Number(roomsCount),
          noOfPersons: Number(guests)
        })
        
        if (!active) return

        const matched = matchLocalRoomToApi(data.roomList, room.slug, room.name)

        if (matched) {
          setLiveRoomId(String(matched.id))
          // Prefer first rate plan amount, then roomOnlyPrice, then static fallback
          const matchedPlan = matched.ratesAndAvailabilityDtos?.[0]?.roomRatePlans?.[0]
          const price = matchedPlan?.amount || matched.roomOnlyPrice || room.price
          setLivePrice(price)
          const noOfAvailable = matched.ratesAndAvailabilityDtos?.[0]?.noOfAvailable ?? 1
          setIsAvailable(noOfAvailable > 0)
        } else {
          setIsAvailable(false)
          setLivePrice(null)
          setLiveRoomId(null)
        }
      } catch (err) {
        console.error("CORS or network error fetching live rate. Falling back to local data.", err)
        if (active) {
          // Gracefully fallback to static price
          setLivePrice(room.price)
          setIsAvailable(true)
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    checkLiveAvailability()
    return () => { active = false }
  }, [checkIn, checkOut, guests, roomsCount, room.name, room.price])

  const handleBookNow = useCallback(() => {
    const url = buildBookingUrl({
      fromDate: checkIn || undefined,
      toDate: checkOut || undefined,
      noOfPersons: guests || undefined,
      noOfRooms: roomsCount || undefined,
      roomName: room.name,
      roomId: liveRoomId || undefined
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [checkIn, checkOut, guests, roomsCount, room.name, liveRoomId])

  const handleCheckInChange = (val: string) => {
    setCheckIn(val)
    if (val && (!checkOut || checkOut <= val)) {
      setCheckOut(addDays(val, 1))
    }
  }

  return (
      <div className="bg-forest p-8 rounded-sm shadow-2xl text-ivory">
      <h3 className="font-display italic text-2xl mb-2 text-gold">Plan Your Stay</h3>
      <p className="font-sans text-[11px] uppercase tracking-widest text-ivory/60 mb-6 border-b border-ivory/10 pb-4">
        Secure your {room.name} at Unwind Karjat
      </p>

      {/* Date Fields */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="font-sans text-[10px] uppercase tracking-widest text-gold/70 block mb-1">Check-In</label>
          <input
            type="date"
            value={checkIn}
            min={todayString()}
            onChange={(e) => handleCheckInChange(e.target.value)}
            className="w-full bg-transparent border-b border-gold/30 text-ivory placeholder-gold/50 font-sans text-sm pb-1 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label className="font-sans text-[10px] uppercase tracking-widest text-gold/70 block mb-1">Check-Out</label>
          <input
            type="date"
            value={checkOut}
            min={checkIn ? addDays(checkIn, 1) : todayString()}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent border-b border-gold/30 text-ivory placeholder-gold/50 font-sans text-sm pb-1 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-sans text-[10px] uppercase tracking-widest text-gold/70 block mb-1">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent border-b border-gold/30 text-ivory font-sans text-sm pb-1 focus:outline-none focus:border-gold transition-colors"
            >
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={String(n)} className="text-forest">{n} Guest{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-sans text-[10px] uppercase tracking-widest text-gold/70 block mb-1">Rooms</label>
            <select
              value={roomsCount}
              onChange={(e) => setRoomsCount(e.target.value)}
              className="w-full bg-transparent border-b border-gold/30 text-ivory font-sans text-sm pb-1 focus:outline-none focus:border-gold transition-colors"
            >
              {[1, 2, 3, 4].map(n => (
                <option key={n} value={String(n)} className="text-forest">{n} Room{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Pricing / Live Status */}
      <div className="space-y-4 mb-8 border-t border-ivory/10 pt-6">
        <div className="flex items-center justify-between">
          <span className="font-serif">{room.name}</span>
          <div className="text-right">
            {loading ? (
              <span className="text-gold font-sans text-xs animate-pulse">Checking live rate...</span>
            ) : isAvailable ? (
              <div className="flex flex-col items-end">
                <span className="font-serif text-xl text-gold">₹{(livePrice || room.price).toLocaleString('en-IN')}</span>
                {livePrice && (
                  <span className="text-[9px] uppercase tracking-widest text-gold/80 bg-gold/10 px-1.5 py-0.5 rounded-sm font-sans mt-1 flex items-center gap-1">
                    ⚡ Live Rate
                  </span>
                )}
              </div>
            ) : (
              <span className="text-rose-400 font-sans text-xs uppercase tracking-wider">Sold Out / Unavailable</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between text-ivory/60 text-sm">
          <span>Taxes & Fees</span>
          <span>Calculated at checkout</span>
        </div>
      </div>

      <button
        onClick={handleBookNow}
        className="w-full bg-gold text-[#1a1004] py-4 rounded-sm font-sans text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-gold-light transition-all active:scale-[0.98]"
      >
        <Calendar size={14} />
        {isAvailable ? 'Book Sanctuary' : 'Check Alternate Dates'}
      </button>
    </div>
  )
}
