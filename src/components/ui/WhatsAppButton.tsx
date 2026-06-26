'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', { source: 'floating_button' })
    }
  }

  return (
    <a
      href="https://wa.me/9835923601"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-28 md:bottom-8 right-6 md:right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />

      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-forest px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gold/10">
        How can we help?
      </span>
    </a>
  )
}
