'use client'

import { MessageCircle, PhoneCall, Calendar } from 'lucide-react'
import { buildWhatsAppUrl, buildBookingUrl, trackBookingEvent } from '@/lib/hotelmate'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'
import { appendUTMToURL } from '@/lib/utm'

export default function MobileStickyBar() {
  const rawBookingUrl = buildBookingUrl()
  const bookingUrl = appendUTMToURL(rawBookingUrl)

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden bg-[#1a1004] border-t-2 border-gold/40 px-3 py-2 shadow-[0_-8px_40px_rgba(201,168,76,0.15)]"
      style={{ boxShadow: '0 -8px 40px rgba(201,168,76,0.15), 0 -2px 10px rgba(0,0,0,0.4)' }}
    >
      {/* Top gold glow accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
      <div className="flex items-center justify-between gap-1">
        <div className="flex-shrink-0 min-w-0">
          <div className="inline-flex items-center gap-1.5 bg-gold/15 border border-gold/25 rounded-sm px-2 py-0.5 mb-0.5">
            <span className="text-[6px] leading-none text-gold font-sans uppercase tracking-[0.15em] font-bold">★ BEST RATE</span>
          </div>
          <span className="font-sans text-[10px] text-ivory block leading-tight font-medium">Book Direct &amp; Save</span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* WhatsApp */}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('mobile_sticky_bar')}
            className="flex items-center justify-center gap-1 bg-green-600/20 border border-green-500/40 text-green-400 px-2.5 py-2 rounded-sm text-[9px] uppercase tracking-[0.1em] font-sans font-semibold hover:bg-green-600/30 active:scale-95 transition-all"
            aria-label="Enquire via WhatsApp"
          >
            <MessageCircle size={13} />
          </a>
          {/* Call Now */}
          <a
            href="tel:+919835923601"
            onClick={() => trackPhoneClick('mobile_sticky_bar')}
            className="flex items-center justify-center gap-1 bg-gold/10 border border-gold/30 text-gold px-2.5 py-2 rounded-sm text-[9px] uppercase tracking-[0.1em] font-sans font-semibold hover:bg-gold/20 active:scale-95 transition-all"
            aria-label="Call hotel"
          >
            <PhoneCall size={13} />
          </a>
          {/* Book Now */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingEvent('booking_click', { source: 'mobile_sticky_bar' })}
            className="flex items-center gap-1.5 bg-gradient-to-r from-gold to-amber-400 text-[#1a1004] px-4 py-2 rounded-sm text-[11px] uppercase tracking-[0.15em] font-sans font-extrabold hover:brightness-110 transition-all active:scale-[0.95] animate-cta-pulse"
            aria-label="Book your stay now"
          >
            <Calendar size={14} />
            <span>Book</span>
          </a>
        </div>
      </div>
    </div>
  )
}
