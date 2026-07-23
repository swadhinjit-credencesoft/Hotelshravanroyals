'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Calendar, Sparkles } from 'lucide-react'
import { trackBookingEvent } from '@/lib/hotelmate'
import { trackPhoneClick } from '@/lib/analytics'
import { appendUTMToURL } from '@/lib/utm'
import { buildBookingUrl } from '@/lib/hotelmate'

const navLinks = [
  { label: 'HOME', href: '/', title: 'Home — Hotel Surya Bella Casa' },
  { label: 'ROOMS', href: '/rooms', title: 'Luxury Rooms in Purnea' },
  { label: 'OFFERS', href: '/offers', title: 'Special Hotel Offers' },
  { label: 'DINING', href: '/dining', title: 'Restaurant & Dining' },
  { label: 'EVENTS', href: '/events', title: 'Events & Banquet Hall' },
  { label: 'GALLERY', href: '/gallery', title: 'Hotel Photo Gallery' },
  { label: 'BLOG', href: '/blog', title: 'Hotel Blog & Travel Tips' },
  { label: 'ABOUT', href: '/about', title: 'About Hotel Surya Bella Casa' },
  { label: 'CONTACT', href: '/contact', title: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 40))
    return unsub
  }, [scrollY])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const bookingUrl = appendUTMToURL(buildBookingUrl())

  return (
    <>
      {/* 1. Top Offer Ticker — Scrolling Marquee */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-forest-dark border-b border-gold/30 text-gold text-[10px] sm:text-[11px] font-bold uppercase tracking-widest py-1.5 overflow-hidden shadow-md">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* First set */}
            <span className="flex items-center gap-1.5 text-gold-light whitespace-nowrap px-6">
              <Sparkles size={12} className="text-gold" /> SPECIAL OFFER: BOOK DIRECT FOR BEST RATES GUARANTEED
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            <span className="flex items-center gap-1.5 text-ivory/90 whitespace-nowrap px-6">
              📍 OPPOSITE VIKASS MARKET, NEAR BUS STAND, PURNEA
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            <span className="flex items-center gap-1.5 text-gold-light whitespace-nowrap px-6">
              📶 FREE HIGH-SPEED WI-FI &amp; PARKING INCLUDED
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            <span className="flex items-center gap-1.5 text-ivory/90 whitespace-nowrap px-6">
              🏨 DELUXE AC ROOMS FROM ₹1,500/NIGHT
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            {/* Duplicate set for seamless loop */}
            <span className="flex items-center gap-1.5 text-gold-light whitespace-nowrap px-6">
              <Sparkles size={12} className="text-gold" /> SPECIAL OFFER: BOOK DIRECT FOR BEST RATES GUARANTEED
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            <span className="flex items-center gap-1.5 text-ivory/90 whitespace-nowrap px-6">
              📍 OPPOSITE VIKASS MARKET, NEAR BUS STAND, PURNEA
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            <span className="flex items-center gap-1.5 text-gold-light whitespace-nowrap px-6">
              📶 FREE HIGH-SPEED WI-FI &amp; PARKING INCLUDED
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            <span className="flex items-center gap-1.5 text-ivory/90 whitespace-nowrap px-6">
              🏨 DELUXE AC ROOMS FROM ₹1,500/NIGHT
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Header — Translucent Cream on Scroll, Transparent on Top */}
      <motion.header
        className={`fixed top-[28px] left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md shadow-warm border-b border-gold/15 py-2.5'
            : 'bg-gradient-to-b from-forest-dark/80 via-forest-dark/40 to-transparent py-3.5'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none shrink-0">
            <Image
              src="/suryabellacasalogo.png"
              alt="Hotel Surya Bella Casa"
              width={180}
              height={106}
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  title={link.title}
                  aria-label={link.title}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 relative py-1 ${
                    isActive
                      ? 'text-gold font-extrabold'
                      : scrolled || !isHome
                      ? 'text-forest hover:text-gold'
                      : 'text-ivory hover:text-gold'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right: Gold BOOK NOW Pill Button + Circle Menu Icon */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingEvent('booking_click', { source: 'navbar_right_cta' })}
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-[#1a1004] font-sans text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-full shadow-md shadow-gold/20 hover:scale-105 transition-all duration-300"
              aria-label="Book Now"
            >
              <Calendar size={14} />
              <span>BOOK NOW</span>
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                scrolled || !isHome
                  ? 'bg-forest/10 border-gold/30 text-forest hover:bg-gold/20 hover:text-gold'
                  : 'bg-white/10 border-white/20 text-ivory hover:bg-gold/20 hover:text-gold'
              }`}
              aria-label="Open Menu"
            >
              <Menu size={18} />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingEvent('booking_click', { source: 'mobile_nav_quick' })}
              className="bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md min-h-[36px] flex items-center"
            >
              BOOK NOW
            </a>

            <button
              className={`p-2.5 rounded-full transition-colors focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center ${
                scrolled || !isHome ? 'text-forest hover:text-gold' : 'text-ivory hover:text-gold'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-forest-dark flex flex-col"
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-gold/20">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <Image
                  src="/suryabellacasalogo.png"
                  alt="Hotel Surya Bella Casa"
                  width={150}
                  height={88}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory/70 hover:text-gold transition-colors rounded-full"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6 sm:px-8 gap-3 sm:gap-4 overflow-y-auto py-6" aria-label="Mobile Navigation Menu">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.03 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-serif text-[22px] sm:text-2xl italic transition-colors block py-1 ${
                      pathname === link.href ? 'text-gold font-bold' : 'text-ivory/90 hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 sm:px-8 pb-8 sm:pb-10 border-t border-gold/20 pt-6 shrink-0 bg-forest-dark">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-2">Direct Contact</p>
              <a
                href="tel:+919835923601"
                onClick={() => trackPhoneClick('mobile_drawer')}
                className="font-serif text-lg text-ivory hover:text-gold transition-colors block mb-4"
              >
                +91 9835923601
              </a>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackBookingEvent('booking_click', { source: 'mobile_drawer_cta' })
                  setMobileOpen(false)
                }}
                className="w-full flex items-center justify-center gap-2 bg-gold text-[#1a1004] font-sans text-xs font-extrabold tracking-widest uppercase py-3.5 rounded-full shadow-lg min-h-[48px]"
              >
                <Calendar size={15} />
                <span>Book Your Stay Online</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  )
}
