'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Users, Maximize, Zap } from 'lucide-react'
import { rooms } from '@/data/rooms'
import { buildBookingUrl, todayString, addDays } from '@/lib/hotelmate'
import { useLivePrices, RoomLivePrice } from '@/lib/useLivePrices'
import { useRouter } from 'next/navigation'
import SectionLabel from '@/components/ui/SectionLabel'

interface RoomCardProps {
  room: (typeof rooms)[0]
  index: number
  liveData?: RoomLivePrice
  priceLoading: boolean
}

function RoomCard({ room, index, liveData, priceLoading }: RoomCardProps) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const router = useRouter()

  const displayPrice = liveData?.price ?? room.price
  const isLive = liveData?.isLive ?? false

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    const today = todayString()
    const tomorrow = addDays(today, 1)
    const url = buildBookingUrl({
      fromDate: today,
      toDate: tomorrow,
      noOfRooms: '1',
      noOfPersons: '2',
      roomName: room.name,
      roomId: liveData?.roomId ?? undefined,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('a')) {
      return
    }
    router.push(`/rooms/${room.slug}`)
  }

  return (
    <motion.div
      ref={ref}
      className="room-card relative flex-shrink-0 overflow-hidden cursor-pointer rounded-sm"
      style={{ width: '380px', height: '540px' }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={handleCardClick}
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
          loading="lazy"
          className="object-cover"
          sizes="400px"
        />
      </motion.div>

      {/* Category pill */}
      <div className="absolute top-4 right-4 z-10 bg-cream/90 px-3 py-1 rounded-sm">
        <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-gold">{room.category}</span>
      </div>

      {/* Live price badge top-left */}
      {isLive && !priceLoading && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gold/90 px-2 py-1 rounded-sm">
          <Zap size={9} className="text-[#1a1004]" />
          <span className="font-sans text-[9px] uppercase tracking-widest text-[#1a1004] font-semibold">Live Rate</span>
        </div>
      )}

      {/* At-rest: minimal info at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-5 z-0"
        style={{ pointerEvents: hovered ? 'none' : 'auto' }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-px w-8 bg-gold/60 mb-3" />
        <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-ivory/50">{room.category}</p>
        {/* Show price at rest too */}
        <div className="mt-2 flex items-center gap-2">
          {priceLoading ? (
            <span className="font-sans text-[10px] text-ivory/40 animate-pulse">Loading…</span>
          ) : (
            <>
              <span className="font-serif text-base text-ivory/80">
                From ₹{displayPrice.toLocaleString('en-IN')}
              </span>
              {isLive && <Zap size={10} className="text-gold" />}
            </>
          )}
        </div>
      </motion.div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-7 z-10"
        style={{ 
          background: 'linear-gradient(to top, rgba(26,16,4,0.92) 0%, rgba(26,16,4,0.3) 50%, rgba(26,16,4,0) 80%)',
          pointerEvents: hovered ? 'auto' : 'none'
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

          <div className="flex flex-wrap gap-2 mb-5">
            {room.amenities.slice(0, 5).map((a) => (
              <span key={a} className="font-sans text-[10px] text-ivory/50 border border-ivory/20 px-2 py-0.5 rounded-sm">
                {a}
              </span>
            ))}
          </div>

          {/* Price row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              {priceLoading ? (
                <span className="font-sans text-xs text-gold/60 animate-pulse">Checking rate…</span>
              ) : (
                <>
                  <span className="font-serif text-xl text-gold font-light">
                    ₹{displayPrice.toLocaleString('en-IN')}/night
                  </span>
                  {isLive && (
                    <span className="font-sans text-[9px] uppercase tracking-widest text-gold/70 mt-0.5 flex items-center gap-1">
                      <Zap size={9} /> Live API Rate
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Primary: Book Now */}
            <button
              onClick={handleBookNow}
              className="flex-1 flex items-center justify-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.14em] bg-gold text-[#1a1004] px-4 py-2.5 rounded-sm hover:bg-[#e8c97a] transition-colors font-semibold"
              aria-label={`Book ${room.name} now`}
            >
              Book Now <ArrowRight size={12} />
            </button>

            {/* Secondary: View Details */}
            <Link
              href={`/rooms/${room.slug}`}
              className="flex items-center gap-1 font-sans text-[11px] uppercase tracking-[0.12em] text-ivory border border-ivory/30 px-4 py-2.5 rounded-sm hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
              aria-label={`View ${room.name} details`}
              onClick={(e) => e.stopPropagation()}
            >
              View Room
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function RoomsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const { prices, loading: priceLoading } = useLivePrices()

  const scroll = (dir: 'left' | 'right') => {
    if (!containerRef.current) return
    containerRef.current.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' })
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
          <SectionLabel className="mb-4">Rooms &amp; Stays</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest mb-4 leading-tight">
            Your Private World Awaits
          </h2>
          <p className="font-serif text-xl font-light text-taupe leading-relaxed">
            Distinctive spaces designed around privacy, comfort and the quiet beauty of nature.
          </p>
        </div>
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-forest border border-forest/30 px-7 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors whitespace-nowrap self-start md:self-auto"
        >
          View All Rooms <ArrowRight size={13} />
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative">
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
          {rooms.map((room, i) => (
            <div key={room.id} style={{ scrollSnapAlign: 'start' }}>
              <RoomCard
                room={room}
                index={i}
                liveData={prices[room.slug]}
                priceLoading={priceLoading}
              />
            </div>
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
