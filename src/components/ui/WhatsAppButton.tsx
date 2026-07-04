'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/hotelmate'

const PHONE = '919835923601'

export default function WhatsAppButton() {
  const trackClick = (source: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', { source })
    }
  }

  return (
    <div className="fixed bottom-28 md:bottom-8 right-6 md:right-8 z-40 flex flex-col items-end gap-3">
      {/* Call Button */}
      <a
        href={`tel:+91${PHONE}`}
        onClick={() => trackClick('call_button')}
        className="bg-forest text-ivory p-3.5 rounded-full shadow-2xl hover:bg-gold hover:text-forest hover:scale-110 transition-all duration-300 group"
        aria-label="Call Hotel Surya Bella Casa"
      >
        <Phone size={22} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-forest px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gold/10 pointer-events-none">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick('floating_button')}
        className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group animate-pulse-glow"
        aria-label="Chat on WhatsApp for booking enquiry"
      >
        <MessageCircle size={28} />

        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-forest px-4 py-2.5 rounded-sm text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gold/10 pointer-events-none">
          Book via WhatsApp
        </span>
      </a>
    </div>
  )
}
