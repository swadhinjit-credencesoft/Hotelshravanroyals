'use client'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
// import Image from 'next/image'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { heroSlides } from '@/data/hero'
import ParticleCanvas from '@/components/ui/ParticleCanvas'
import { buildBookingUrl, addDays, todayString } from '@/lib/hotelmate'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const SLIDE_DURATION = 8000

  // Auto-advance slides
  useEffect(() => {
    if (reduced) return
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % heroSlides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [reduced])

  // Scroll parallax
  const { scrollY } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollY, [0, 700], ['0%', '28%'])
  const contentY = useTransform(scrollY, [0, 500], ['0%', '-12%'])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 })
  const imgSpringX = useSpring(mouseX, { stiffness: 30, damping: 18 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reduced || window.innerWidth < 1024) return
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.width / 2) / rect.width) * 20
    const y = ((e.clientY - rect.height / 2) / rect.height) * 20
    mouseX.set(x)
    mouseY.set(y)
  }, [reduced, mouseX, mouseY])

  const checkoutRef = useRef<HTMLInputElement>(null)
  const [checkIn, setCheckIn] = useState(todayString())
  const [checkOut, setCheckOut] = useState(addDays(todayString(), 1))
  const [guests, setGuests] = useState('1')
  const [rooms, setRooms] = useState('1')

  const handleCheckInChange = (date: string) => {
    setCheckIn(date)
    setCheckOut(prev => date && (!prev || prev <= date) ? addDays(date, 1) : prev)
  }

  const handleCheckOutChange = (date: string) => {
    setCheckOut(date)
  }

  const openBooking = useCallback(() => {
    const url = buildBookingUrl({
      fromDate: checkIn || undefined,
      toDate: checkOut || undefined,
      noOfPersons: guests || undefined,
      noOfRooms: rooms || undefined,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [checkIn, checkOut, guests, rooms])

  const slide = heroSlides[currentSlide]
  const words = slide.headline.split(' ')

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '650px' }}
      role="banner"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
    >
      {/* z-0: Background video (static, never re-mounts) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: reduced ? 0 : imageY, x: reduced ? 0 : imgSpringX }}
      >
        <video
          src="https://bookonelocal.in/cdn/website-home-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://bookonelocal.in/cdn/IMG_3815.avif"
          className={`w-full h-full object-cover ${reduced ? '' : 'animate-ken-burns'}`}
          style={{ animationName: reduced ? 'none' : 'kenBurns' }}
        />
      </motion.div>

      {/* z-1: Atmospheric overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to top, rgba(26,16,4,0.88) 0%, rgba(26,16,4,0.35) 45%, rgba(26,16,4,0.08) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to right, rgba(26,16,4,0.55) 0%, transparent 55%)',
        }}
      />

      {/* z-2: Particles */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <ParticleCanvas />
      </div>

      {/* z-3: Grain */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 3, opacity: 0.03, width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* z-10: Main content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center pb-24 md:pb-32 pt-32 md:pt-40"
        style={{ zIndex: 10, y: reduced ? 0 : contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="px-6 md:px-[6vw] max-w-[700px]"
          style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }}
        >
          {/* Tagline */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.span
              className="inline-block h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold">
              {slide.tagline}
            </span>
          </motion.div>

          {/* Headline — word-by-word */}
   <h1
  className="font-display font-normal italic text-ivory mb-5 leading-[1.08]"
  style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
>
  <AnimatePresence mode="wait">
    <motion.span key={slide.id} className="inline">
      {words.map((word, i) => (
        <motion.span
          key={`${slide.id}-${word}-${i}`}
          className="inline-block mr-[0.2em]"
          initial={{ opacity: 0, y: 70, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.9,
            delay: 0.8 + i * 0.09,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ perspective: 1000, display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  </AnimatePresence>
</h1>

          {/* Gold rule */}
          <motion.div
            className="h-px bg-gold mb-5"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{ width: 80 }}
          />

          {/* Subheadline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${slide.id}`}
              className="font-serif text-xl md:text-[22px] font-light text-ivory/80 max-w-[550px] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              {slide.subheadline}
            </motion.p>
          </AnimatePresence>

          {/* CTA row */}
          <div className="flex flex-wrap gap-5">
          <Link href={slide.primaryHref}>
  <motion.div
    className="group inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[12px] uppercase tracking-[0.16em] px-10 py-4 rounded-sm hover:bg-gold-light transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.7 }}
    whileHover={{ y: -2 }}
  >
    {slide.primaryCta}
    <ArrowRight
      size={14}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </motion.div>
</Link>
           <Link href={slide.secondaryHref}>
  <motion.div
    className="inline-flex items-center gap-2 border border-gold/50 text-ivory font-sans text-[12px] uppercase tracking-[0.16em] px-10 py-4 rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.85 }}
  >
    {slide.secondaryCta}
  </motion.div>
</Link>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-10 md:mt-12 px-6 md:px-[6vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
        </motion.div>
      </motion.div>

      {/* Booking bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ zIndex: 10 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div
          className="hidden md:block border-t border-gold/15"
          style={{ background: 'rgba(251,247,240,0.07)', backdropFilter: 'blur(16px)' }}
        >
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-4">
            <div className="flex items-center gap-0 md:gap-6">
              <BookingField label="Check-In" type="date" value={checkIn} onChange={handleCheckInChange} min={todayString()} />
              <div className="hidden md:block w-px h-8 bg-gold/20" />
              <BookingField label="Check-Out" type="date" value={checkOut} onChange={handleCheckOutChange} inputRef={checkoutRef} min={checkIn ? addDays(checkIn, 1) : todayString()} />
              <div className="hidden md:block w-px h-8 bg-gold/20" />
              <BookingField label="Guests" type="number" value={guests} onChange={setGuests} options={['1','2','3','4']} />
              <div className="hidden md:block w-px h-8 bg-gold/20" />
              <BookingField label="Rooms" type="number" value={rooms} onChange={setRooms} />
              <div className="ml-auto pl-6">
                <button
                  onClick={openBooking}
                  className="bg-gold text-[#1a1004] font-sans text-[12px] uppercase tracking-[0.15em] px-10 py-3.5 rounded-sm hover:bg-gold-light transition-colors whitespace-nowrap inline-block"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile book button */}
        <div className="md:hidden flex justify-center pb-6">
          <button
            onClick={openBooking}
            className="bg-gold text-[#1a1004] font-sans text-[12px] uppercase tracking-[0.16em] px-10 py-4 rounded-full shadow-warm-lg"
          >
            Book Now
          </button>
        </div>
      </motion.div>

      {/* Slide dots commented out */}

      {/* Scroll indicator */}
      {/* <div
        className="absolute bottom-48 left-1/2 -translate-x-1/2"
        style={{ zIndex: 20 }}
      >
        <ScrollIndicator />
      </div> */}
    </section>
  )
}

function BookingField({ label, type = 'text', value, onChange, inputRef: externalRef, min, options }: { label: string; type?: string; value: string; onChange: (v: string) => void; inputRef?: React.RefObject<HTMLInputElement | null>; min?: string; options?: string[] }) {
  const [isMounted, setIsMounted] = useState(false)
  const internalRef = useRef<HTMLInputElement>(null)
  const inputRef = externalRef || internalRef

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleContainerClick = () => {
    if (options) return
    const el = inputRef.current
    if (type === 'date' && el) {
      const inputEl = el as HTMLInputElement & { showPicker?: () => void }
      try {
        if (inputEl.showPicker) inputEl.showPicker()
        else inputEl.focus()
      } catch { inputEl.focus() }
    }
  }

  return (
    <div
      className="flex-1 px-4 py-1 cursor-pointer group"
      style={{ minWidth: type === 'number' && !options ? '80px' : '140px' }}
      onClick={handleContainerClick}
    >
      <label className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold/70 block mb-1 pointer-events-none">
        {label}
      </label>
      <div className="relative flex items-center">
        {options ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent border-b border-gold/40 text-ivory font-sans text-[14px] pb-1 focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
            aria-label={label}
          >
            {options.map((opt) => (
              <option key={opt} value={opt} className="text-forest">{opt}</option>
            ))}
          </select>
        ) : (
          <input
            ref={inputRef as React.Ref<HTMLInputElement>}
            type={isMounted && type === 'date' ? 'date' : type === 'number' ? 'number' : 'text'}
            value={value}
            min={min ?? (type === 'number' ? '1' : undefined)}
            onChange={(e) => onChange(e.target.value)}
            className={`booking-input w-full bg-transparent border-b border-gold/40 text-ivory placeholder-gold/50 font-sans text-[14px] pb-1 focus:outline-none focus:border-gold transition-colors ${type === 'date' ? 'pr-6' : ''}`}
            aria-label={label}
          />
        )}
        {type === 'date' && (
          <Calendar size={12} className="absolute right-0 bottom-2 text-gold/50 group-hover:text-gold transition-colors pointer-events-none" />
        )}
      </div>
    </div>
  )
}
