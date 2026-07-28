'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { ArrowRight, Calendar, Users, Star, ArrowUpRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { buildBookingUrl, trackBookingEvent } from '@/lib/hotelmate'
import { trackSearch } from '@/lib/analytics'
import { appendUTMToURL } from '@/lib/utm'

const ParticleCanvas = dynamic(() => import('@/components/ui/ParticleCanvas'), {
  ssr: false,
})

const heroSlides = [
  {
    src: 'https://bookonelocal.in/cdn/IMG_3815.avif',
    alt: 'Hotel Surya Bella Casa — Premium hotel in Purnea with luxury rooms, rooftop restaurant, and banquet hall',
    headline1: 'Where Comfort',
    headline2: 'Meets',
    headline3: 'Luxury',
    subtitle: 'Warm hospitality, affordable luxury',
    badge: 'Top Rated in Purnea',
  },
  {
    src: 'https://bookonelocal.in/cdn/IMG_3808.avif',
    alt: 'Comfortable clean rooms at Hotel Surya Bella Casa Purnea — best hotel near Bus Stand',
    headline1: 'Your Perfect',
    headline2: 'Room',
    headline3: 'Awaits',
    subtitle: 'Clean, modern & thoughtfully designed',
    badge: 'AC & Non-AC Options',
  },
  {
    src: 'https://bookonelocal.in/cdn/IMG_3784.avif',
    alt: 'Hotel Surya Bella Casa interiors — modern amenities and warm hospitality in Purnea',
    headline1: 'Experience',
    headline2: 'True',
    headline3: 'Hospitality',
    subtitle: 'Where every guest becomes family',
    badge: 'Since 2019 · Purnea',
  },
]

const SLIDE_INTERVAL = 3000

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  // Parallax scroll effect
  const { scrollY } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollY, [0, 700], ['0%', '20%'])
  const contentY = useTransform(scrollY, [0, 500], ['0%', '-10%'])
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0])

  // Mouse tilt effect (content only — image uses parallax only to avoid blur)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reduced || window.innerWidth < 1024) return
      const rect = heroRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = ((e.clientX - rect.width / 2) / rect.width) * 16
      const y = ((e.clientY - rect.height / 2) / rect.height) * 16
      mouseX.set(x)
      mouseY.set(y)
    },
    [reduced, mouseX, mouseY]
  )

  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const fmt = (d: Date) => {
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}-${month}-${year}`
  }
  const fmtIso = (d: Date) => d.toISOString().slice(0, 10)

  const [checkIn, setCheckIn] = useState<Date>(today)
  const [checkOut, setCheckOut] = useState<Date>(tomorrow)
  const [guests, setGuests] = useState('2')

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

  // Hero image carousel — auto-rotate every 3s
  useEffect(() => {
    if (reduced || paused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [reduced, paused])

  const openBooking = useCallback(() => {
    trackBookingEvent('booking_click', { source: 'hero_booking_bar' })
    trackSearch({
      checkIn: fmtIso(checkIn),
      checkOut: fmtIso(checkOut),
      guests: guests || 1,
      rooms: 1,
      source: 'hero_booking_bar',
    })
    const rawUrl = buildBookingUrl({
      fromDate: fmtIso(checkIn),
      toDate: fmtIso(checkOut),
      noOfPersons: guests || undefined,
    })
    const url = appendUTMToURL(rawUrl)
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [checkIn, checkOut, guests])

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 md:pt-44 pb-6 md:pb-12 bg-forest-dark"
      style={{ minHeight: '100svh' }}
      role="banner"
      aria-label="Hotel Surya Bella Casa — Best Hotel in Purnea Near Bus Stand"
      itemScope
      itemType="https://schema.org/Hotel"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      {/* SEO microdata */}
      <meta itemProp="name" content="Hotel Surya Bella Casa" />
      <meta itemProp="description" content="Best Hotel in Purnea near Bus Stand. Book direct for best rates. Free WiFi, AC rooms, rooftop restaurant." />
      <meta itemProp="telephone" content="+919835923601" />
      <meta itemProp="url" content="https://hotelsuryabellacasa.com" />
      {/* Background Image Carousel — Premium 4K Crossfade */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: reduced ? 0 : imageY }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Low-quality blur placeholder — uses current slide */}
        <div
          className="absolute inset-0 z-[1] blur-2xl scale-110 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Slide images — stacked, crossfade via opacity */}
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={100}
            className={`absolute inset-0 z-[2] w-full h-full object-cover hero-bg-image transition-opacity duration-[1500ms] ease-in-out ${
              i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              imageRendering: 'auto',
              WebkitFontSmoothing: 'antialiased',
            }}
          />
        ))}

        {/* Minimal cinematic gradient — text readability only */}
        <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        {/* Subtle vignette for premium depth */}
        <div className="absolute inset-0 z-[3] opacity-40" style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }} />

        {/* Slide indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[4] flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${
                i === currentSlide
                  ? 'w-6 h-1.5 bg-gold'
                  : 'w-1.5 h-1.5 bg-ivory/40 hover:bg-ivory/70'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Particle Canvas */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {!reduced && <ParticleCanvas />}
      </div>

      {/* CENTERED HERO CONTENT — STAY-CASA DESIGN */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full text-center my-auto flex flex-col items-center"
        style={{ y: reduced ? 0 : contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="max-w-4xl flex flex-col items-center"
          style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }}
        >
          {/* Headline — animated with slides */}
          <h1 className="font-sans font-light tracking-tight text-ivory text-[32px] sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-3 md:mb-4 text-balance" itemProp="name">
            <span className={`transition-opacity duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              Where Comfort <br />
              <span className="text-gold font-serif italic">Meets</span> Luxury
            </span>
            <span className={`transition-opacity duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              Your Perfect <br />
              <span className="text-gold font-serif italic">Room</span> Awaits
            </span>
            <span className={`transition-opacity duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              Experience <br />
              <span className="text-gold font-serif italic">True</span> Hospitality
            </span>
          </h1>

          {/* Subtitle — animated with slides */}
          <div className="relative mb-5 px-2">
            <p className={`font-sans text-sm sm:text-lg md:text-xl font-light text-ivory/90 max-w-xl transition-opacity duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              Warm hospitality, affordable luxury
            </p>
            <p className={`font-sans text-sm sm:text-lg md:text-xl font-light text-ivory/90 max-w-xl transition-opacity duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              Clean, modern &amp; thoughtfully designed
            </p>
            <p className={`font-sans text-sm sm:text-lg md:text-xl font-light text-ivory/90 max-w-xl transition-opacity duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              Where every guest becomes family
            </p>
          </div>

          {/* Rating Badge — animated with slides */}
          <div className="inline-flex items-center gap-2 bg-forest-dark border border-gold/30 px-3.5 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-8 shadow-md relative">
            <div className="flex text-gold gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            <span className={`text-[10px] sm:text-[11px] font-sans text-ivory font-medium tracking-wide transition-opacity duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute left-0 right-0 flex items-center justify-center pointer-events-none'}`}>
              Top Rated in Purnea
            </span>
            <span className={`text-[10px] sm:text-[11px] font-sans text-ivory font-medium tracking-wide transition-opacity duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute left-0 right-0 flex items-center justify-center pointer-events-none'}`}>
              AC &amp; Non-AC Options
            </span>
            <span className={`text-[10px] sm:text-[11px] font-sans text-ivory font-medium tracking-wide transition-opacity duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0 absolute left-0 right-0 flex items-center justify-center pointer-events-none'}`}>
              Since 2019 · Purnea
            </span>
          </div>

          {/* Action Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 items-center mb-6 px-2">
            <a
              href={appendUTMToURL(buildBookingUrl())}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingEvent('booking_click', { source: 'hero_center_cta_primary' })}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-gold via-gold-light to-gold hover:brightness-110 text-forest-dark font-sans text-[11px] sm:text-xs font-extrabold tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl shadow-gold/25 hover:scale-105 transition-all duration-300"
            >
              <span>BOOK YOUR STAY</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-forest-dark hover:bg-forest border border-gold/40 text-ivory font-sans text-[11px] sm:text-xs font-bold tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>EXPLORE ROOMS</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* HORIZONTAL BOOKING BAR — HIDDEN ON MOBILE, VISIBLE ON MD+ */}
      <motion.div
        className="hidden md:block relative z-20 max-w-[920px] mx-auto px-4 w-full mt-3 md:mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-cream/95 backdrop-blur-md border border-gold/25 rounded-full overflow-hidden shadow-[0_8px_40px_rgba(26,16,4,0.35)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/20 p-1.5">
          {/* Check In */}
          <DatePickerBarField label="CHECK IN" selected={checkIn} onChange={handleCheckInChange} minDate={today} formattedText={fmt(checkIn)} />

          {/* Check Out */}
          <DatePickerBarField label="CHECK OUT" selected={checkOut} onChange={handleCheckOutChange} minDate={new Date(checkIn.getTime() + 86400000)} formattedText={fmt(checkOut)} />

          {/* Guests */}
          <GuestsBarField label="GUESTS" value={guests} onChange={setGuests} />

          {/* Action Button: CHECK RATES → */}
          <button
            onClick={openBooking}
            className="w-full bg-gold hover:bg-gold-light text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.15em] font-extrabold py-3 px-5 rounded-full flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer shadow-md hover:scale-105"
            aria-label="Check Rates"
          >
            <span>CHECK RATES</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>
    </section>
  )
}

function PopperContainer({ children }: { children?: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <>{children}</>
  return createPortal(children, document.body)
}

function DatePickerBarField({
  label,
  selected,
  onChange,
  minDate,
  formattedText,
}: {
  label: string
  selected: Date
  onChange: (date: Date | null) => void
  minDate: Date
  formattedText: string
}) {
  const pickerRef = useRef<React.ComponentRef<typeof DatePicker>>(null)

  return (
    <div
      onClick={() => pickerRef.current?.setOpen(true)}
      className="px-5 py-2.5 flex flex-col justify-center cursor-pointer hover:bg-gold/5 transition-colors group rounded-full"
    >
      <div className="flex items-center gap-1 text-gold-dark text-[9px] font-bold uppercase tracking-widest leading-none mb-0.5">
        <Calendar size={11} className="text-gold-dark" />
        <span>{label}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-forest font-sans text-[13px] font-semibold tracking-wide leading-tight">
          {formattedText}
        </span>
        <DatePicker
          ref={pickerRef}
          selected={selected}
          onChange={onChange}
          minDate={minDate}
          dateFormat="dd-MM-yyyy"
          className="hidden"
          popperPlacement="bottom-start"
          popperContainer={PopperContainer}
          calendarClassName="react-datepicker-custom"
          aria-label={label}
        />
      </div>
    </div>
  )
}

function GuestsBarField({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="px-5 py-2.5 flex flex-col justify-center hover:bg-gold/5 transition-colors rounded-full">
      <div className="flex items-center gap-1 text-gold-dark text-[9px] font-bold uppercase tracking-widest leading-none mb-0.5">
        <Users size={11} className="text-gold-dark" />
        <span>{label}</span>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-forest font-sans text-[13px] font-semibold tracking-wide focus:outline-none cursor-pointer border-0 p-0 leading-tight"
        aria-label={label}
      >
        <option value="1" className="text-forest-dark bg-cream">1 Guest</option>
        <option value="2" className="text-forest-dark bg-cream">2 Guests +</option>
        <option value="3" className="text-forest-dark bg-cream">3 Guests +</option>
        <option value="4" className="text-forest-dark bg-cream">4 Guests +</option>
      </select>
    </div>
  )
}
