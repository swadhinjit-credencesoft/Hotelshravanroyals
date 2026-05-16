'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Users, Maximize } from 'lucide-react'
import { rooms } from '@/data/rooms'
import SectionLabel from '@/components/ui/SectionLabel'

function RoomCard({ room, index }: { room: (typeof rooms)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

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
        style={{ background: 'linear-gradient(to top, rgba(26,16,4,0.85) 0%, rgba(26,16,4,0) 60%)' }}
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
            {room.amenities.map((a) => (
              <span key={a} className="font-sans text-[10px] text-ivory/50 border border-ivory/20 px-2 py-0.5 rounded-sm">
                {a}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="font-serif text-xl text-gold font-light">
              From ${room.price.toLocaleString()}/night
            </span>
            <a
              href={`/rooms/${room.id}`}
              className="flex items-center gap-1 font-sans text-[11px] uppercase tracking-[0.12em] text-ivory border border-ivory/30 px-4 py-2 rounded-sm hover:border-gold hover:text-gold transition-colors"
              aria-label={`View ${room.name} details`}
            >
              View Suite <ArrowRight size={12} />
            </a>
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
    </motion.div>
  )
}

export default function RoomsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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
              <RoomCard room={room} index={i} />
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
