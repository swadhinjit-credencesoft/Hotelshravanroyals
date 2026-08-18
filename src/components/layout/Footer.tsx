'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/data/site'

const quickLinks = [
  { label: 'Stay', href: '/rooms' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Dining', href: '/dining' },
  { label: 'Events & Celebrations', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory/70" role="contentinfo">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="font-serif text-xl tracking-[0.18em] uppercase text-ivory">
                Unwind
              </div>
              <div className="font-sans text-[9px] tracking-[0.28em] uppercase text-gold mt-0.5">
                Karjat
              </div>
            </Link>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold mb-3">
              {siteConfig.brandThought}
            </p>
            <p className="font-serif text-base italic text-ivory/50 mb-6 leading-relaxed max-w-[220px]">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                aria-label="Follow us on Instagram"
                className="text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* <a
                href={siteConfig.social.facebook}
                aria-label="Follow us on Facebook"
                className="text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                <Share2 size={18} />
              </a> */}
              {/* <a
                href={siteConfig.social.twitter}
                aria-label="Follow us on X (Twitter)"
                className="text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                <Camera size={18} />
              </a> */}
              <a
                href={siteConfig.whatsapp}
                aria-label="Chat with us on WhatsApp"
                className="text-ivory/40 hover:text-[#25D366] transition-colors duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-ivory/50 leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold/60 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-gold/60 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Visit */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold mb-6">
              Visit Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Clock size={15} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-gold/60 mb-1">Check-In</p>
                  <p className="font-serif text-base text-ivory/60">{siteConfig.checkInTime}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={15} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-gold/60 mb-1">Check-Out</p>
                  <p className="font-serif text-base text-ivory/60">{siteConfig.checkOutTime}</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps?q=Unwind,+Karjat,+Karjat+-+Chowk+Rd,+behind+Baba+Dairy,+Wavarle,+Maharashtra+410206&ftid=0x3be7fb0039371721:0x6c226bd87e40fd2f&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjI0LjEuNzY5MjczNTU2MBgAINeCAypaLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJJTg%3D%3D&skid=f4b3cd0b-935d-4d04-9db5-6d5d2e525f90&g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-gold border border-gold/30 px-4 py-2 rounded-sm hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Get directions to Unwind Karjat"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-ivory/30 tracking-wide">
            © {new Date().getFullYear()} Unwind Karjat. All Rights Reserved. Designed by <a href="https://www.credencesoft.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">CredenceSoft</a>, Powered By <a href="https://bookonepms.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">BookOne</a>.
          </p>
          <div className="flex gap-4 flex-wrap justify-end max-w-full md:max-w-[50%]">
            {/* <Link href="/sitemap.xml" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Sitemap
            </Link>
            <span className="text-ivory/20">·</span> */}
            <Link href="/privacy" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-ivory/20">·</span>
            <Link href="/terms" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-ivory/20">·</span>
            <Link href="/cancellation" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
