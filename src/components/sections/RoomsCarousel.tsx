'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Users, Maximize } from 'lucide-react'
import { fetchAvailability, PROPERTY_ID } from '@/services/api'
import { buildBookingEngineUrl } from '@/lib/hotelmate-availability'
import SectionLabel from '@/components/ui/SectionLabel'

interface ApiRoom {
  id: number
  name: string
  description?: string
  roomOnlyPrice?: number
  maxAdult?: number
  maxChildren?: number
  maximumOccupancy?: number
  size?: number
  imageList?: { url: string }[]
}

interface NormalizedRoom {
  id: string
  name: string
  tagline: string
  size: number
  guests: number
  price: number
  category: string
  image: string
  imageAlt: string
  amenities: string[]
}

function normalizeRoom(room: ApiRoom): NormalizedRoom {
  const image =
    room.imageList && room.imageList.length > 0
      ? room.imageList[0].url
      : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=95'

  const stripped = room.description
    ? room.description.replace(/<[^>]*>?/gm, '').trim()
    : ''
  const tagline = stripped.length > 60 ? stripped.slice(0, 60) + '…' : stripped || 'An exclusive retreat curated for you'

  const nameLower = room.name.toLowerCase()
  let category = 'deluxe'
  if (nameLower.includes('suite')) category = 'suite'
  else if (nameLower.includes('villa')) category = 'villa'
  else if (nameLower.includes('standard') || nameLower.includes('classic')) category = 'standard'

  const guests = room.maximumOccupancy ?? ((room.maxAdult ?? 2) + (room.maxChildren ?? 0))

  return {
    id: String(room.id),
    name: room.name,
    tagline,
    size: room.size ?? 45,
    guests,
    price: room.roomOnlyPrice ?? 0,
    category,
    image,
    imageAlt: room.name,
    amenities: [],
  }
}

function RoomCard({ room, index, totalRooms = 3 }: { room: NormalizedRoom; index: number; totalRooms?: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const widthClass = totalRooms === 1 
    ? 'w-[85vw] md:w-full max-w-[1000px]' 
    : totalRooms === 2 
      ? 'w-[85vw] sm:w-[45vw] max-w-[700px]' 
      : 'w-[85vw] sm:w-[380px] lg:w-[450px] xl:w-[500px]';

  const bookingUrl = (() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return buildBookingEngineUrl({
      baseUrl: 'https://bookone.io/Hotel-Shravan-Royal-Inn',
      checkIn: today,
      checkOut: tomorrow,
      adults: room.guests || 2,
      rooms: 1,
    })
  })()

  return (
    <motion.a
      ref={ref}
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`room-card relative flex-shrink-0 overflow-hidden cursor-pointer rounded-sm block ${widthClass}`}
      style={{ height: '540px', scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={room.image}
          alt={room.imageAlt}
          fill
          className="object-cover"
          sizes="400px"
        />
      </motion.div>

      {/* Category pill */}
      <div className="absolute top-4 right-4 z-10 bg-cream/90 px-3 py-1 rounded-sm">
        <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-gold">{room.category}</span>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-7"
        style={{
          background: 'linear-gradient(to top, rgba(26,16,4,0.85) 0%, rgba(26,16,4,0) 60%)',
          pointerEvents: hovered ? 'auto' : 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-gold mb-2">{room.tagline}</p>
          <h3 className="font-display text-2xl italic text-ivory mb-1">{room.name}</h3>

          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1.5 font-sans text-[11px] text-ivory/60">
              <Maximize size={12} /> {room.size} m²
            </span>
            <span className="flex items-center gap-1.5 font-sans text-[11px] text-ivory/60">
              <Users size={12} /> {room.guests} guests
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-serif text-xl text-gold font-light">
              {room.price > 0 ? `₹${room.price.toLocaleString()}/night` : 'Contact for pricing'}
            </span>
            <div
              className="flex items-center gap-1 font-sans text-[11px] uppercase tracking-[0.12em] text-ivory border border-ivory/30 px-4 py-2 rounded-sm hover:border-gold hover:text-gold transition-colors"
              aria-label={`Book ${room.name}`}
            >
              Book Now <ArrowRight size={12} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* At-rest: minimal name at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-5"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-px w-8 bg-gold/60 mb-3" />
        <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-ivory/50">{room.category}</p>
      </motion.div>
    </motion.a>
  )
}

function SkeletonCard({ totalRooms = 3 }: { totalRooms?: number }) {
  const widthClass = totalRooms === 1 
    ? 'w-[85vw] md:w-full max-w-[1000px]' 
    : totalRooms === 2 
      ? 'w-[85vw] sm:w-[45vw] max-w-[700px]' 
      : 'w-[85vw] sm:w-[380px] lg:w-[450px] xl:w-[500px]';

  return (
    <div
      className={`flex-shrink-0 rounded-sm overflow-hidden bg-champagne/60 animate-pulse ${widthClass}`}
      style={{ height: '540px', scrollSnapAlign: 'start' }}
    />
  )
}

export default function RoomsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [rooms, setRooms] = useState<NormalizedRoom[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const pad = (n: number) => String(n).padStart(2, '0')
    const fromDate = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`
    const toDate = `${tomorrow.getFullYear()}-${pad(tomorrow.getMonth() + 1)}-${pad(tomorrow.getDate())}`

    fetchAvailability(PROPERTY_ID, fromDate, toDate)
      .then((data) => {
        if (data && data.roomList && data.roomList.length > 0) {
          setRooms(data.roomList.map(normalizeRoom))
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load rooms for carousel:', err)
        setLoading(false)
      })
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    if (!containerRef.current) return
    containerRef.current.scrollBy({ left: dir === 'right' ? 600 : -600, behavior: 'smooth' })
    setTimeout(() => {
      if (!containerRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }, 400)
  }

  return (
    <section className="bg-champagne py-24 overflow-hidden" aria-label="Rooms and suites">
      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <SectionLabel className="mb-4">Rooms &amp; Suites</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest mb-4 leading-tight">
            Your Private World Awaits
          </h2>
          <p className="font-serif text-xl font-light text-taupe leading-relaxed">
            Forty-seven sanctuaries, each one curated around solitude, beauty, and quiet intention.
          </p>
        </div>
        <a
          href="/rooms"
          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-forest border border-forest/30 px-7 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors whitespace-nowrap self-start md:self-auto"
        >
          View All Suites <ArrowRight size={13} />
        </a>
      </div>

      {/* Carousel */}
      <div className="relative max-w-[1600px] mx-auto">
        {/* Scroll arrows */}
        <button
          onClick={() => scroll('left')}
          className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 border border-gold/30 text-gold bg-cream/90 backdrop-blur-sm rounded-sm hover:border-gold hover:bg-cream transition-all ${!canScrollLeft ? 'opacity-30 pointer-events-none' : ''}`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll('right')}
          className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 border border-gold/30 text-gold bg-cream/90 backdrop-blur-sm rounded-sm hover:border-gold hover:bg-cream transition-all ${!canScrollRight ? 'opacity-30 pointer-events-none' : ''}`}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable track */}
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide drag-cursor pb-4 px-6 md:px-10"
          style={{ scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          onScroll={(e) => {
            const el = e.currentTarget
            setCanScrollLeft(el.scrollLeft > 10)
            setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
          }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : rooms.map((room, i) => (
                <RoomCard key={room.id} room={room} index={i} totalRooms={rooms.length} />
              ))}
          {/* Spacer */}
          <div className="flex-shrink-0 w-2" />
        </div>
      </div>

      {/* Drag hint */}
      <div className="flex justify-center mt-6 md:hidden">
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-taupe/60">Swipe to explore</p>
      </div>
    </section>
  )
}
