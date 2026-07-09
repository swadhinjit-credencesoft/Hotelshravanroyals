'use client'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
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
import { ArrowRight, Calendar, Users, Bed, ChevronDown } from 'lucide-react'
import { heroSlides } from '@/data/hero'
import dynamic from 'next/dynamic'
import DatePicker from 'react-datepicker'
import { buildBookingUrl, trackBookingEvent } from '@/lib/hotelmate'

const ParticleCanvas = dynamic(() => import('@/components/ui/ParticleCanvas'), {
  ssr: false,
})

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

  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const fmt = (d: Date) => d.toISOString().slice(0, 10)

  const [checkIn, setCheckIn] = useState<Date>(today)
  const [checkOut, setCheckOut] = useState<Date>(tomorrow)
  const [guests, setGuests] = useState('1')
  const [rooms, setRooms] = useState('1')

  const handleCheckInChange = (date: Date | null) => {
    if (!date) return
    setCheckIn(date)
    if (date >= checkOut) {
      const next = new Date(date)
      next.setDate(next.getDate() + 1)
      setCheckOut(next)
    }
  }

  const handleCheckOutChange = (date: Date | null) => {
    if (date) setCheckOut(date)
  }

  const openBooking = useCallback(() => {
    trackBookingEvent('booking_click', { source: 'hero_booking_bar' })
    const url = buildBookingUrl({
      fromDate: fmt(checkIn),
      toDate: fmt(checkOut),
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
      aria-label="Hotel Surya Bella Casa Purnea - Best Hotel Near Bus Stand"
      itemScope
      itemType="https://schema.org/Hotel"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
    >
      {/* Schema.org microdata */}
      <meta itemProp="name" content="Hotel Surya Bella Casa" />
      <meta itemProp="alternateName" content="Hotel Surya Bella Casa Purnea" />
      <meta itemProp="description" content="Best Hotel in Purnea Near Bus Stand. Book direct for comfortable rooms with free WiFi, parking, rooftop restaurant, banquet hall, and conference hall." />
      <meta itemProp="telephone" content="+919835923601" />
      <meta itemProp="priceRange" content="₹₹" />
      <meta itemProp="url" content="https://hotelsuryabellacasa.com" />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content="Suryalok Complex, Opposite Vikass Market, Near Bus Stand" />
        <meta itemProp="addressLocality" content="Purnia" />
        <meta itemProp="addressRegion" content="Bihar" />
        <meta itemProp="postalCode" content="854301" />
        <meta itemProp="addressCountry" content="IN" />
      </div>
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
          preload="metadata"
          poster="https://bookonelocal.in/cdn/IMG_3815.avif"
          title="Hotel Surya Bella Casa - Premium Hotel in Purnea"
          aria-label="Video tour of Hotel Surya Bella Casa showing premium rooms and facilities"
          className={`w-full h-full object-cover ${reduced ? '' : 'animate-ken-burns'}`}
          style={{ animationName: reduced ? 'none' : 'kenBurns' }}
        >
          <track kind="captions" label="English captions" srcLang="en" />
        </video>
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
          <div className="flex flex-wrap gap-3 md:gap-5">
          <Link href={slide.primaryHref} itemProp="potentialAction" itemScope itemType="https://schema.org/ReserveAction">
  <motion.div
    className="group inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] md:text-[12px] uppercase tracking-[0.16em] px-6 md:px-10 py-3 md:py-4 rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.7 }}
    whileHover={{ y: -2 }}
    itemProp="name"
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
    className="inline-flex items-center gap-2 border border-gold/50 text-ivory font-sans text-[11px] md:text-[12px] uppercase tracking-[0.16em] px-6 md:px-10 py-3 md:py-4 rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
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
        className="hidden md:block absolute bottom-6 left-4 right-4 md:bottom-auto md:top-44 md:right-[6vw] md:left-auto w-auto max-w-[420px]"
        style={{ zIndex: 20 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        {/* Desktop Premium Booking Card (Compact, Right-Aligned, Glassy) */}
        <div className="flex flex-col gap-4 bg-[#121f13]/35 border-2 border-gold/30 rounded-2xl shadow-[0_30px_60px_rgba(26,16,4,0.4)] backdrop-blur-xl p-5 w-[380px]">
          <div className="flex items-center justify-between border-b border-gold/15 pb-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gold animate-ping" />
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold font-bold">Book Your Stay</span>
            </div>
            <span className="font-sans text-[9px] text-ivory/60 font-medium">Best Rate Guaranteed</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <DatePickerField label="Check-In" selected={checkIn} onChange={handleCheckInChange} minDate={today} icon={Calendar} />
            <DatePickerField label="Check-Out" selected={checkOut} onChange={handleCheckOutChange} minDate={new Date(checkIn.getTime() + 86400000)} icon={Calendar} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <BookingField label="Guests" type="number" value={guests} onChange={setGuests} options={['1','2','3','4']} icon={Users} />
            <BookingField label="Rooms" type="number" value={rooms} onChange={setRooms} icon={Bed} />
          </div>

          <button
            onClick={openBooking}
            className="w-full bg-gold text-[#1a1004] font-sans text-[12px] uppercase tracking-[0.18em] h-[52px] rounded-xl hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 font-bold shadow-xl shadow-gold/25 cursor-pointer relative overflow-hidden group"
            aria-label="Check Availability - Book Hotel in Purnea"
          >
            <span>Check Availability</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
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

function PopperContainer({ children }: { children?: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <>{children}</>
  return createPortal(children, document.body)
}

function DatePickerField({
  label,
  selected,
  onChange,
  minDate,
  icon: Icon,
}: {
  label: string
  selected: Date
  onChange: (date: Date | null) => void
  minDate: Date
  icon?: React.ComponentType<{ className?: string; size?: number }>
}) {
  const pickerRef = useRef<React.ComponentRef<typeof DatePicker>>(null)

  const handleIconClick = () => {
    pickerRef.current?.setOpen(true)
  }

  return (
    <div className="flex-1 bg-[#121f13]/30 hover:bg-[#121f13]/55 border border-gold/15 hover:border-gold/35 rounded-xl px-4 py-2 cursor-pointer group transition-all duration-300 flex items-center justify-between gap-2 h-[58px] min-w-[130px] backdrop-blur-sm">
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <label className="font-sans text-[9px] uppercase tracking-[0.18em] text-gold/75 block mb-0.5 pointer-events-none font-medium leading-none">
          {label}
        </label>
        <DatePicker
          ref={pickerRef}
          selected={selected}
          onChange={onChange}
          minDate={minDate}
          dateFormat="dd MMM yyyy"
          className="w-full bg-transparent border-0 text-ivory font-sans text-[13px] font-semibold focus:outline-none focus:ring-0 cursor-pointer py-0 m-0 leading-none h-5"
          wrapperClassName="w-full"
          popperPlacement="bottom-end"
          popperContainer={PopperContainer}
          calendarClassName="react-datepicker-custom"
          aria-label={label}
        />
      </div>
      {Icon && (
        <div
          className="text-gold/60 group-hover:text-gold group-hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
          onClick={handleIconClick}
        >
          <Icon size={15} />
        </div>
      )}
    </div>
  )
}



function BookingField({
  label,
  type = 'text',
  value,
  onChange,
  min,
  options,
  icon: Icon,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  min?: string
  options?: string[]
  icon?: React.ComponentType<{ className?: string; size?: number }>
}) {
  return (
    <div className="flex-1 bg-[#121f13]/30 hover:bg-[#121f13]/55 border border-gold/15 hover:border-gold/35 rounded-xl px-4 py-2 cursor-pointer group transition-all duration-300 flex items-center justify-between gap-2 h-[58px] min-w-[130px] backdrop-blur-sm">
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <label className="font-sans text-[9px] uppercase tracking-[0.18em] text-gold/75 block mb-0.5 pointer-events-none font-medium leading-none">
          {label}
        </label>
        <div className="relative flex items-center h-5">
          {options ? (
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              required
              className="w-full bg-transparent border-0 text-ivory font-sans text-[13px] font-semibold focus:outline-none focus:ring-0 cursor-pointer appearance-none pr-5 py-0 m-0 leading-none h-5"
              aria-label={label}
            >
              {options.map((opt) => (
                <option key={opt} value={opt} className="text-forest bg-cream">{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={type === 'number' ? 'number' : 'text'}
              value={value}
              min={min ?? (type === 'number' ? '1' : undefined)}
              onChange={(e) => onChange(e.target.value)}
              required
              className="booking-input w-full bg-transparent border-0 text-ivory placeholder-gold/50 font-sans text-[13px] font-semibold focus:outline-none focus:ring-0 cursor-pointer py-0 m-0 leading-none h-5"
              aria-label={label}
            />
          )}
        </div>
      </div>
      <div className="text-gold/60 group-hover:text-gold group-hover:scale-105 transition-all duration-300 flex-shrink-0">
        {options ? (
          <ChevronDown size={15} />
        ) : Icon ? (
          <Icon size={15} />
        ) : null}
      </div>
    </div>
  )
}
