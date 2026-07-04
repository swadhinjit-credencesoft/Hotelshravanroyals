'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/site'
import MagneticButton from '@/components/ui/MagneticButton'
import { BOOKING_ENGINE_URL } from '@/lib/hotelmate'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/rooms' },
  // { label: 'Experiences', href: '/experiences' },
  { label: 'Events', href: '/events' },
  { label: 'Dining', href: '/dining' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  // { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60))
    return unsub
  }, [scrollY])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md shadow-warm border-b border-gold/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
            <Image
              src="/suryabellacasalogo.png"
              alt="Hotel Surya Bella Casa Logo"
              width={180}
              height={106}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>
 
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-gold focus-visible:text-gold focus-visible:outline-none ${
                  scrolled || !isHome ? 'text-forest' : 'text-ivory'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
 
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              as="a"
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-6 py-2.5 rounded-sm hover:bg-gold-light transition-colors duration-300 shadow-md"
              aria-label="Book your stay now"
            >
              Book Now
            </MagneticButton>
          </div>
 
          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled || !isHome ? 'text-forest' : 'text-ivory'} hover:text-gold`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            id="mobile-menu-trigger"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-forest flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 h-24">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <Image
                  src="/suryabellacasalogo.png"
                  alt="Hotel Surya Bella Casa Logo"
                  width={160}
                  height={94}
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-ivory/70 hover:text-gold"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-10 gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-4xl italic text-ivory/80 hover:text-gold transition-colors duration-300 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-10 pb-12 border-t border-ivory/10 pt-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold mb-2">Concierge</p>
              <a href={`tel:${siteConfig.phone}`} className="font-serif text-xl text-ivory/80 hover:text-gold transition-colors">
                {siteConfig.phone}
              </a>
              <div className="mt-6">
                <a
                  href={BOOKING_ENGINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-8 py-3 rounded-sm hover:bg-gold-light transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
