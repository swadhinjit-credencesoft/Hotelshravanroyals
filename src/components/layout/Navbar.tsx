'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Calendar, Sparkles, Phone, Mail, ExternalLink, ChevronUp, Users, ArrowRight, BadgeCheck } from 'lucide-react'
import { buildBookingUrl, trackBookingEvent } from '@/lib/hotelmate'
import { trackPhoneClick } from '@/lib/analytics'
import { appendUTMToURL } from '@/lib/utm'
import { siteConfig } from '@/data/site'

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ROOMS', href: '/rooms' },
  { label: 'OFFERS', href: '/offers' },
  { label: 'DINING', href: '/dining' },
  { label: 'EVENTS', href: '/events' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [bookingMenuOpen, setBookingMenuOpen] = useState(false)
  const bookingMenuRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Booking machine state
  const today = new Date()
  const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1)
  const fmtDisplay = (d: Date) => d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
  const fmtIso = (d: Date) => d.toISOString().slice(0, 10)
  const [checkIn, setCheckIn] = useState<Date>(today)
  const [checkOut, setCheckOut] = useState<Date>(tomorrow)
  const [guests, setGuests] = useState('2')

  const handleBookingOpen = useCallback(() => {
    trackBookingEvent('booking_click', { source: 'floating_popup_engine' })
    const url = appendUTMToURL(buildBookingUrl({ fromDate: fmtIso(checkIn), toDate: fmtIso(checkOut), noOfPersons: guests }))
    window.open(url, '_blank', 'noopener,noreferrer')
    setBookingMenuOpen(false)
  }, [checkIn, checkOut, guests])

  // Close booking menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (bookingMenuRef.current && !bookingMenuRef.current.contains(e.target as Node)) {
        setBookingMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

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
      {/* 1. Top Offer Ticker — Forest Dark + Gold Text */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-forest-dark border-b border-gold/30 text-gold text-[10px] sm:text-[11px] font-bold uppercase tracking-widest py-1.5 px-4 overflow-hidden shadow-md">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 whitespace-nowrap w-full justify-around">
            <span className="flex items-center gap-1.5 text-gold-light">
              <Sparkles size={12} className="text-gold" /> SPECIAL OFFER: BOOK DIRECT FOR BEST RATES GUARANTEED
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-ivory/90">
              📍 OPPOSITE VIKASS MARKET, NEAR BUS STAND, PURNEA
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-gold-light">
              📶 FREE HIGH-SPEED WI-FI &amp; PARKING INCLUDED
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-ivory/90">
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
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingEvent('booking_click', { source: 'mobile_nav_quick' })}
              className="bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-widest font-extrabold px-4 py-2 rounded-full shadow-md"
            >
              BOOK NOW
            </a>

            <button
              className={`p-2 transition-colors focus:outline-none ${
                scrolled || !isHome ? 'text-forest hover:text-gold' : 'text-ivory hover:text-gold'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-forest-dark flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <Image
                  src="/suryabellacasalogo.png"
                  alt="Hotel Surya Bella Casa"
                  width={150}
                  height={88}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-ivory/70 hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-4 overflow-y-auto py-6" aria-label="Mobile Navigation Menu">
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
                    className={`font-serif text-2xl italic transition-colors ${
                      pathname === link.href ? 'text-gold font-bold' : 'text-ivory/90 hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-8 pb-10 border-t border-gold/20 pt-6 shrink-0 bg-forest-dark">
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
                className="w-full flex items-center justify-center gap-2 bg-gold text-[#1a1004] font-sans text-xs font-extrabold tracking-widest uppercase py-3.5 rounded-full shadow-lg"
              >
                <Calendar size={15} />
                <span>Book Your Stay Online</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Floating Bottom-Right Booking Machine */}
      <div ref={bookingMenuRef} className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-3">

        <AnimatePresence>
          {bookingMenuOpen && (
            <motion.div
              className="w-[340px] mb-1 rounded-3xl overflow-hidden select-none"
              style={{
                background: 'linear-gradient(160deg, #1A2B1B 0%, #0d1a0e 100%)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(200,169,110,0.2), inset 0 1px 0 rgba(200,169,110,0.15)',
              }}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ── HEADER ── */}
              <div className="relative px-5 pt-5 pb-4">
                <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.32em] text-gold/60 mb-1">Hotel Surya Bella Casa</p>
                    <h3 className="font-serif text-ivory text-[20px] italic leading-none">Reserve Your Stay</h3>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} viewBox="0 0 12 12" width="10" height="10" fill="#C8A96E"><polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.7 2.7,10.5 3.5,7 1,4.8 4.5,4.5"/></svg>
                      ))}
                      <span className="font-sans text-[9px] text-gold/50 ml-1.5 tracking-wide">Top Rated · Purnea</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setBookingMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-ivory/30 hover:text-gold transition-all duration-200"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* ── BOOKING ENGINE FIELDS ── */}
              <div className="px-4 pb-4">
                <div
                  className="rounded-2xl overflow-hidden border border-gold/15"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  {/* Check In */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gold/10 hover:bg-white/[0.03] transition-colors cursor-pointer group"
                    onClick={() => {
                      const d = prompt('Enter Check-In date (YYYY-MM-DD)', fmtIso(checkIn))
                      if (d) { const dt = new Date(d); if (!isNaN(dt.getTime())) setCheckIn(dt) }
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Calendar size={14} className="text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-gold/50 leading-none mb-1">Check-In</p>
                      <p className="font-sans text-[13px] font-semibold text-ivory leading-none">{fmtDisplay(checkIn)}</p>
                    </div>
                    <span className="text-gold/30 font-sans text-[10px]">›</span>
                  </div>

                  {/* Check Out */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gold/10 hover:bg-white/[0.03] transition-colors cursor-pointer group"
                    onClick={() => {
                      const d = prompt('Enter Check-Out date (YYYY-MM-DD)', fmtIso(checkOut))
                      if (d) { const dt = new Date(d); if (!isNaN(dt.getTime())) setCheckOut(dt) }
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Calendar size={14} className="text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-gold/50 leading-none mb-1">Check-Out</p>
                      <p className="font-sans text-[13px] font-semibold text-ivory leading-none">{fmtDisplay(checkOut)}</p>
                    </div>
                    <span className="text-gold/30 font-sans text-[10px]">›</span>
                  </div>

                  {/* Guests */}
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Users size={14} className="text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-gold/50 leading-none mb-1">Guests</p>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="bg-transparent text-ivory font-sans text-[13px] font-semibold focus:outline-none cursor-pointer border-0 p-0 leading-none w-full"
                      >
                        {['1','2','3','4','5','6'].map(n => (
                          <option key={n} value={n} className="text-forest-dark bg-cream">{n} Guest{n !== '1' ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* ── CHECK AVAILABILITY BUTTON ── */}
                <button
                  onClick={handleBookingOpen}
                  className="group mt-3 w-full relative overflow-hidden rounded-2xl py-4 flex items-center justify-center gap-2.5 font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#1a1004] shadow-xl shadow-gold/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'linear-gradient(110deg, #C8A96E 0%, #E8C98A 50%, #C8A96E 100%)' }}
                >
                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                  <BadgeCheck size={16} className="relative text-[#1a1004]/70" />
                  <span className="relative">Check Availability</span>
                  <ArrowRight size={15} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Best rate badge */}
                <div className="mt-2.5 flex items-center justify-center gap-1.5">
                  <div className="w-3 h-px bg-gold/25" />
                  <span className="font-sans text-[9px] text-gold/40 uppercase tracking-[0.2em]">Best Rate Guaranteed · No Hidden Fees</span>
                  <div className="w-3 h-px bg-gold/25" />
                </div>
              </div>

              {/* ── DIVIDER ── */}
              <div className="flex items-center gap-3 px-5 pb-3">
                <div className="flex-1 h-px bg-gold/10" />
                <span className="text-gold/25 font-sans text-[9px] uppercase tracking-[0.18em]">or reach us via</span>
                <div className="flex-1 h-px bg-gold/10" />
              </div>

              {/* ── CONTACT OPTIONS ── */}
              <div className="px-4 pb-4 grid grid-cols-3 gap-2">

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/919835923601?text=${encodeURIComponent('Hi! I would like to book a room at Hotel Surya Bella Casa.')}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setBookingMenuOpen(false)}
                  className="group flex flex-col items-center gap-2 py-3.5 rounded-2xl bg-white/[0.035] hover:bg-[#25D366]/15 border border-white/[0.06] hover:border-[#25D366]/35 transition-all duration-250 hover:scale-[1.04]"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg,#25D366,#1da851)' }}>
                    <svg viewBox="0 0 32 32" width="17" height="17" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.003 3C9.374 3 4 8.373 4 15.001c0 2.127.558 4.126 1.532 5.864L4 29l8.335-1.516A12.94 12.94 0 0 0 16.003 28C22.63 28 28 22.628 28 16S22.63 3 16.003 3zm0 23.454a10.89 10.89 0 0 1-5.554-1.52l-.398-.236-4.947.899.916-4.83-.26-.41A10.865 10.865 0 0 1 5.091 16c0-6.01 4.902-10.91 10.912-10.91S26.91 9.99 26.91 16s-4.896 10.454-10.907 10.454zm6.004-7.808c-.33-.164-1.944-.958-2.246-1.068-.301-.11-.52-.164-.74.164-.22.329-.851 1.068-1.043 1.287-.192.22-.384.247-.714.082-.33-.164-1.392-.513-2.651-1.636-.98-.874-1.64-1.953-1.834-2.282-.193-.33-.02-.508.144-.672.149-.148.33-.384.494-.576.165-.192.22-.329.33-.548.11-.22.055-.411-.027-.576-.082-.164-.74-1.783-1.014-2.44-.267-.641-.54-.554-.74-.565l-.63-.01c-.22 0-.576.082-.877.411-.302.329-1.152 1.124-1.152 2.742s1.18 3.181 1.344 3.4c.165.22 2.322 3.545 5.628 4.97.787.34 1.4.543 1.879.695.789.25 1.508.215 2.076.13.633-.094 1.944-.795 2.219-1.563.274-.768.274-1.427.192-1.563-.082-.137-.302-.22-.631-.384z"/>
                    </svg>
                  </div>
                  <span className="font-sans text-[10px] font-semibold text-ivory/70 group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}?subject=Room%20Booking%20Enquiry&body=Hi%2C%20I%20would%20like%20to%20book%20a%20room.`}
                  onClick={() => setBookingMenuOpen(false)}
                  className="group flex flex-col items-center gap-2 py-3.5 rounded-2xl bg-white/[0.035] hover:bg-gold/10 border border-white/[0.06] hover:border-gold/25 transition-all duration-250 hover:scale-[1.04]"
                >
                  <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                    <Mail size={15} className="text-gold group-hover:text-gold-light transition-colors" />
                  </div>
                  <span className="font-sans text-[10px] font-semibold text-ivory/70 group-hover:text-gold transition-colors">Email</span>
                </a>

                {/* Call */}
                <a
                  href="tel:+919835923601"
                  onClick={() => { trackPhoneClick('floating_popup'); setBookingMenuOpen(false) }}
                  className="group flex flex-col items-center gap-2 py-3.5 rounded-2xl bg-white/[0.035] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/15 transition-all duration-250 hover:scale-[1.04]"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
                    <Phone size={15} className="text-ivory/60 group-hover:text-ivory transition-colors" />
                  </div>
                  <span className="font-sans text-[10px] font-semibold text-ivory/70 group-hover:text-ivory transition-colors">Call</span>
                </a>

              </div>

              {/* ── FOOTER ── */}
              <div className="px-5 py-3 border-t border-gold/10 flex items-center justify-between">
                <span className="font-sans text-[9px] text-ivory/20 uppercase tracking-[0.18em]">Direct Booking · No OTA Markup</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-gold/25" />)}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* ── TRIGGER BUTTON ── */}
        <button
          onClick={() => setBookingMenuOpen((v) => !v)}
          className={`group relative overflow-hidden flex items-center gap-2.5 font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase px-7 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${
            bookingMenuOpen
              ? 'bg-forest-dark text-gold border border-gold/40'
              : 'bg-gold text-[#1a1004] shadow-gold/35 hover:shadow-gold/50'
          }`}
          aria-label="Open booking options"
        >
          {!bookingMenuOpen && (
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          )}
          <span className="relative">{bookingMenuOpen ? <ChevronUp size={16} /> : <Sparkles size={16} />}</span>
          <span className="relative">BOOK NOW</span>
        </button>
      </div>
    </>
  )
}
