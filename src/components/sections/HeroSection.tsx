'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
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
import { heroSlides, heroStats } from '@/data/hero'
// import { awards } from '@/data/awards'
import ParticleCanvas from '@/components/ui/ParticleCanvas'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import { buildBookingEngineUrl } from '@/lib/hotelmate-availability'

// Count-up hook
function useCountUp(target: string, active: boolean) {
  const [value, setValue] = useState('0')
  const isNumeric = !isNaN(parseInt(target))
  const numTarget = parseInt(target)

  useEffect(() => {
    if (!active || !isNumeric) {
      setValue(target)
      return
    }
    let start = 0
    const duration = 1800
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(String(Math.floor(eased * numTarget)))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [active, target, isNumeric, numTarget])

  return value
}

function StatItem({ stat, index, active }: { stat: { value: string; label: string }; index: number; active: boolean }) {
  const displayValue = useCountUp(stat.value, active)
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 2.0 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="font-serif text-3xl md:text-[38px] text-gold font-light leading-none">
        {displayValue}
      </span>
      <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-ivory/60 mt-1">
        {stat.label}
      </span>
    </motion.div>
  )
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [statsActive, setStatsActive] = useState(false)
  
  // Booking state
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [roomType, setRoomType] = useState('1')

  const getBookingLink = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return buildBookingEngineUrl({
      baseUrl: 'https://bookone.io/Hotel-Shravan-Royal-Inn',
      checkIn: checkIn ? new Date(checkIn) : today,
      checkOut: checkOut ? new Date(checkOut) : tomorrow,
      adults: parseInt(guests) || 2,
      rooms: parseInt(roomType) || 1,
    });
  };
  
  const heroRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const SLIDE_DURATION = 8000

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

  // Auto-advance slides
  useEffect(() => {
    if (reduced) return
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % heroSlides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [reduced])

  // Activate stats count-up
  useEffect(() => {
    const t = setTimeout(() => setStatsActive(true), 2000)
    return () => clearTimeout(t)
  }, [])

  const slide = heroSlides[currentSlide]
  const words = slide.headline.split(' ')

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
      role="banner"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
    >
      {/* z-0: Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: reduced ? 0 : imageY, x: reduced ? 0 : imgSpringX }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            {slide.image.match(/\.(mp4|webm|ogg)$/) ? (
              <video
                src={slide.image}
                autoPlay
                muted
                loop
                playsInline
                className={`w-full h-full object-cover ${reduced ? '' : 'animate-ken-burns'}`}
                style={{ animationName: reduced ? 'none' : 'kenBurns' }}
              />
            ) : (
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority
                quality={100}
                className={`object-cover ${reduced ? '' : 'animate-ken-burns'}`}
                sizes="100vw"
                style={{ animationName: reduced ? 'none' : 'kenBurns' }}
              />
            )}
          </motion.div>
        </AnimatePresence>
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
        className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-28 pt-32"
        style={{ zIndex: 10, y: reduced ? 0 : contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="px-6 md:px-[6vw] max-w-[700px]"
          style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }}
        >
          {/* Award pill */}
          {/* <motion.div
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-gold/20 backdrop-blur-sm rounded-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold/90">
              {awards[0]}
            </span>
          </motion.div> */}

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
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            aria-live="polite"
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
            style={{ width: 70 }}
          />

          {/* Subheadline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${slide.id}`}
              className="font-serif text-lg md:text-[21px] font-light text-ivory/80 max-w-[500px] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              {slide.subheadline}
            </motion.p>
          </AnimatePresence>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={slide.primaryHref}
              className="group inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-9 py-4 rounded-sm hover:bg-gold-light transition-all duration-300"
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
            </motion.a>
            <motion.a
              href={slide.secondaryHref}
              className="inline-flex items-center gap-2 border border-gold/50 text-ivory font-sans text-[11px] uppercase tracking-[0.16em] px-9 py-4 rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.85 }}
            >
              {slide.secondaryCta}
            </motion.a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-8 md:mt-10 px-6 md:px-[6vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <div className="flex flex-wrap gap-8 md:gap-0">
            {heroStats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <StatItem stat={stat} index={i} active={statsActive} />
                {i < heroStats.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-gold/30 mx-8" />
                )}
              </div>
            ))}
          </div>
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
              <BookingField label="Check-In" placeholder="Arrival date" type="date" value={checkIn} onChange={setCheckIn} />
              <div className="hidden md:block w-px h-8 bg-gold/20" />
              <BookingField label="Check-Out" placeholder="Departure date" type="date" value={checkOut} onChange={setCheckOut} />
              <div className="hidden md:block w-px h-8 bg-gold/20" />
              <BookingField label="Guests" placeholder="2 guests" type="number" value={guests} onChange={setGuests} />
              <div className="hidden md:block w-px h-8 bg-gold/20" />
              <BookingField label="Room Type" placeholder="Any room" type="number" value={roomType} onChange={setRoomType} />
              <div className="ml-auto pl-6">
                <a
                  href={getBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.15em] px-8 py-3 rounded-sm hover:bg-gold-light transition-colors whitespace-nowrap inline-block"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile book button */}
        <div className="md:hidden flex justify-center pb-6">
          <a
            href={getBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-10 py-4 rounded-full shadow-warm-lg"
          >
            Book Now
          </a>
        </div>
      </motion.div>

      {/* Slide dots (bottom-right) */}
      <div
        className="absolute bottom-24 right-6 md:right-10 flex flex-col gap-2 items-end"
        style={{ zIndex: 20 }}
      >
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(i)}
            className="relative overflow-hidden flex items-center gap-2 group"
            aria-label={`Go to slide ${i + 1}: ${s.tagline}`}
          >
            <motion.span
              className="font-sans text-[10px] uppercase tracking-[0.14em] text-ivory/40 group-hover:text-ivory/70 transition-colors hidden md:block"
              animate={{ opacity: currentSlide === i ? 1 : 0 }}
            >
              {s.tagline}
            </motion.span>
            <motion.div
              className="bg-gold/40 rounded-full overflow-hidden"
              animate={{
                width: currentSlide === i ? 28 : 6,
                height: currentSlide === i ? 28 : 6,
                borderRadius: currentSlide === i ? '2px' : '9999px',
                backgroundColor: currentSlide === i ? 'rgba(200,169,110,1)' : 'rgba(200,169,110,0.4)',
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentSlide === i && (
                <motion.div
                  className="h-full bg-gold-dark/40"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
              )}
            </motion.div>
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 20 }}
      >
        <ScrollIndicator />
      </div>
    </section>
  )
}

function BookingField({ label, placeholder, type = 'text', value, onChange }: { label: string; placeholder: string; type?: string; value: string; onChange: (val: string) => void }) {
  const [isMounted, setIsMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleContainerClick = () => {
    const el = inputRef.current
    if (type === 'date' && el) {
      const inputEl = el as HTMLInputElement & { showPicker?: () => void }
      try {
        if (inputEl.showPicker) {
          inputEl.showPicker()
        } else {
          inputEl.focus()
        }
      } catch {
        inputEl.focus()
      }
    } else if (el) {
      el.focus();
    }
  }

  return (
    <div 
      className="flex-1 min-w-[140px] px-4 py-1 cursor-pointer group"
      onClick={handleContainerClick}
    >
      <label className="font-sans text-[9px] uppercase tracking-[0.18em] text-gold/70 block mb-1 pointer-events-none">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type={isMounted && type === 'date' ? 'date' : type}
          min={type === 'number' ? '1' : undefined}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`booking-input w-full bg-transparent border-b border-gold/40 text-ivory placeholder-gold/50 font-sans text-[12px] pb-1 focus:outline-none focus:border-gold transition-colors ${type === 'date' ? 'pr-6' : ''}`}
          aria-label={label}
        />
        {type === 'date' && (
          <Calendar size={12} className="absolute right-0 bottom-2 text-gold/50 group-hover:text-gold transition-colors pointer-events-none" />
        )}
      </div>
    </div>
  )
}
