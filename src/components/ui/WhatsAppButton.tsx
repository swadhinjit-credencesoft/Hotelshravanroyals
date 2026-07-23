'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MessageCircle, Phone, Mail, X, ArrowUpRight, Shield } from 'lucide-react'
import { buildWhatsAppUrl, trackBookingEvent } from '@/lib/hotelmate'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'

const BOOKING_URL = 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true'
const EMAIL = 'bellacasa561@gmail.com'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-3">

      {/* ── POPUP PANEL ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-[280px] rounded-2xl overflow-hidden select-none"
            style={{
              background: 'linear-gradient(170deg, #1A2B1B 0%, #0f1a10 60%, #0a120b 100%)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(200,169,110,0.15), inset 0 1px 0 rgba(200,169,110,0.1)',
            }}
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold accent */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

            {/* Header */}
            <div className="px-4 pt-3.5 pb-2.5 flex items-center justify-between">
              <div>
                <p className="font-sans text-[8px] uppercase tracking-[0.25em] text-gold/40">Hotel Surya Bella Casa</p>
                <h3 className="font-display text-[15px] italic text-ivory leading-tight mt-0.5">How would you like to book?</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-6 h-6 rounded-full bg-white/[0.04] hover:bg-gold/15 border border-white/[0.06] hover:border-gold/25 flex items-center justify-center text-ivory/25 hover:text-gold transition-all duration-200"
                aria-label="Close"
              >
                <X size={10} />
              </button>
            </div>

            {/* 4 Options */}
            <div className="px-3.5 pb-3.5 space-y-2">

              {/* Book Online */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackBookingEvent('booking_click', { source: 'floating_panel' }); setOpen(false) }}
                className="group flex items-center gap-3 w-full px-3.5 py-3 rounded-xl bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/20 hover:border-gold/45 hover:from-gold/25 hover:to-gold/10 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #C8A96E, #A07840)' }}>
                  <Calendar size={16} className="text-[#1a1004]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-gold block">Book Online</span>
                  <span className="font-sans text-[9px] text-ivory/30">Best rate guaranteed</span>
                </div>
                <ArrowUpRight size={13} className="text-gold/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </a>

              {/* WhatsApp */}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackWhatsAppClick('floating_panel'); setOpen(false) }}
                className="group flex items-center gap-3 w-full px-3.5 py-3 rounded-xl bg-[#25D366]/[0.06] hover:bg-[#25D366]/[0.12] border border-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #25D366, #1da851)' }}>
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#25D366]/80 block">WhatsApp</span>
                  <span className="font-sans text-[9px] text-ivory/30">Chat with us instantly</span>
                </div>
                <ArrowUpRight size={13} className="text-[#25D366]/30 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </a>

              {/* Call */}
              <a
                href="tel:+919835923601"
                onClick={() => { trackPhoneClick('floating_panel'); setOpen(false) }}
                className="group flex items-center gap-3 w-full px-3.5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-gold/20 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-gold/10 border border-gold/15">
                  <Phone size={16} className="text-gold/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-ivory/60 block">Call Now</span>
                  <span className="font-sans text-[9px] text-ivory/30">+91 98359 23601</span>
                </div>
                <ArrowUpRight size={13} className="text-ivory/15 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}?subject=Room%20Booking%20Enquiry&body=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Surya%20Bella%20Casa.`}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 w-full px-3.5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/12 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white/[0.08]">
                  <Mail size={16} className="text-ivory/40" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-ivory/50 block">Email</span>
                  <span className="font-sans text-[9px] text-ivory/30">Send enquiry</span>
                </div>
                <ArrowUpRight size={13} className="text-ivory/15 group-hover:text-ivory/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </a>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-white/[0.04] flex items-center justify-center gap-1.5">
              <Shield size={8} className="text-gold/20" />
              <span className="font-sans text-[7.5px] text-ivory/15 uppercase tracking-[0.18em]">Direct Booking · No OTA Markup</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TRIGGER BUTTON ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`group relative flex items-center gap-2 font-sans text-[11px] font-extrabold tracking-[0.18em] uppercase rounded-full transition-all duration-300 cursor-pointer ${
          open
            ? 'bg-forest-dark text-gold border border-gold/30 px-5 py-3.5 shadow-xl'
            : 'bg-gradient-to-r from-gold via-gold-light to-gold text-[#1a1004] px-6 py-4 shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:scale-105'
        }`}
        aria-label="Open booking options"
        style={!open ? { animation: 'bookingBtnPulse 2.5s ease-in-out infinite' } : undefined}
      >
        {!open && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 rounded-full pointer-events-none" />
        )}
        <span className="relative">{open ? <X size={15} /> : <Calendar size={15} />}</span>
        <span className="relative">{open ? 'Close' : 'Book Now'}</span>
      </button>
    </div>
  )
}
