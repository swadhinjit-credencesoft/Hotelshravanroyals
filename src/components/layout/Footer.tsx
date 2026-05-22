'use client'

import Link from 'next/link'
import { Globe, Share2, Camera, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/data/site'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Rooms & Suites', href: '/rooms' },
  { label: 'Dining', href: '/dining' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory/70" role="contentinfo">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 â€” Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="font-serif text-xl tracking-[0.18em] uppercase text-ivory">
                Bella Casa
              </div>
              <div className="font-sans text-[9px] tracking-[0.28em] uppercase text-gold mt-0.5">
                Hotel
              </div>
            </Link>
            <p className="font-serif text-base italic text-ivory/50 mb-6 leading-relaxed max-w-[220px]">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                aria-label="Follow us on Instagram"
                className="text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                <Globe size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="Follow us on Facebook"
                className="text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                <Share2 size={18} />
              </a>
              <a
                href={siteConfig.social.twitter}
                aria-label="Follow us on X (Twitter)"
                className="text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                <Camera size={18} />
              </a>
              <a
                href={`https://wa.me/9835923601`}
                aria-label="Chat with us on WhatsApp"
                className="text-ivory/40 hover:text-[#25D366] transition-colors duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 â€” Quick Links */}
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

          {/* Col 3 â€” Contact */}
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

          {/* Col 4 â€” Visit */}
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
                href="https://www.google.com/maps?q=Hotel+Bella+Casa,+Purnia,+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-gold border border-gold/30 px-4 py-2 rounded-sm hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Get directions to Hotel Bella Casa"
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
            Designed and Developed By <a href="https://www.credencesoft.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">CredenceSoft</a>, Powered By <a href="https://bookonepms.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">BookOne</a>.
          </p>
          <div className="flex gap-4 flex-wrap justify-end max-w-[50%]">
            {/* <Link href="/sitemap.xml" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Sitemap
            </Link>
            <span className="text-ivory/20">Â·</span> */}
            <Link href="/privacy" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-ivory/20">Â·</span>
            <Link href="/terms" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-ivory/20">Â·</span>
            <Link href="/cancellation" className="font-sans text-[11px] text-ivory/30 hover:text-gold transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
