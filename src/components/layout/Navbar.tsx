'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/site'
import MagneticButton from '@/components/ui/MagneticButton'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Dining', href: '/dining' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

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
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-warm border-b border-gold/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
            <span className={`font-serif text-lg tracking-[0.18em] uppercase transition-colors duration-300 ${scrolled ? 'text-forest' : 'text-ivory'}`}>
              Unwind
            </span>
            <span className={`font-sans text-[9px] tracking-[0.28em] uppercase mt-0.5 transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-gold-light'}`}>
              Karjat
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-gold focus-visible:text-gold focus-visible:outline-none ${
                  scrolled ? 'text-forest/70' : 'text-ivory/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-4">
            {/*
            <a
              href={`tel:${siteConfig.phone}`}
              className={`font-sans text-[11px] tracking-[0.12em] transition-colors duration-300 ${scrolled ? 'text-taupe' : 'text-ivory/60'} hover:text-gold hidden sm:block`}
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
            */}
            <MagneticButton
              as="a"
              href="/reservations"
              className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-6 py-2.5 rounded-sm hover:bg-gold-light transition-colors duration-300"
              aria-label="Book your stay now"
            >
              Book Now
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-forest' : 'text-ivory'} hover:text-gold`}
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
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-serif text-lg tracking-[0.18em] uppercase text-ivory">
                Unwind Karjat
              </span>
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
                  href="/reservations"
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
