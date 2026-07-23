import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'

// Brand SVG icons
function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function YouTubeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

import { siteConfig } from '@/data/site'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Dining', href: '/dining' },
  { label: 'Events', href: '/events' },
  { label: 'Offers', href: '/offers' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const exploreLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'How to Reach', href: '/how-to-reach' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Near Bus Stand', href: '/hotel-near-purnia-bus-stand' },
  { label: 'Near Vikass Market', href: '/hotel-near-vikass-market' },
  { label: 'Budget Hotel', href: '/budget-hotel-in-purnia' },
  { label: 'Family Hotel', href: '/family-hotel-in-purnia' },
  { label: 'Business Hotel', href: '/business-hotel-in-purnia' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cancellation Policy', href: '/cancellation' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory/70" role="contentinfo">
      {/* Trust Signals */}
      <div className="border-b border-gold/10 py-4">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-taupe/60">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="font-sans text-[10px] uppercase tracking-[0.15em]">Secure Booking</span>
          </div>
          <div className="flex items-center gap-2 text-taupe/60">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="font-sans text-[10px] uppercase tracking-[0.15em]">Best Rate Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-taupe/60">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="font-sans text-[10px] uppercase tracking-[0.15em]">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-taupe/60">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
            <span className="font-sans text-[10px] uppercase tracking-[0.15em]">Free Cancellation</span>
          </div>
        </div>
      </div>
      {/* Match the same container width as Navbar and all other sections */}
     <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-10 pb-6">

        {/* Top Footer */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-y-10 gap-x-8 mb-10">  

          {/* Logo Section — left aligned, naturally sized */}
          <div className="flex-shrink-0 max-w-[280px]">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/suryabellacasalogo.png"
                alt="Hotel Surya Bella Casa Logo"
                width={180}
                height={80}
                className="object-contain"
                loading="lazy"
              />
            </Link>

            <p className="font-serif text-base leading-relaxed text-ivory/60 mb-4">
              {siteConfig.tagline}
            </p>

            <div className="space-y-3">

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-1 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <p className="font-sans text-sm text-ivory/60 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>

            </div>
          </div>

          {/* Right columns — tightly grouped, no stretch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap gap-x-12 gap-y-10">

            {/* Quick Links */}
            <div className="min-w-[130px]">
              <h3 className="font-serif text-2xl text-ivory mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-base text-ivory/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="min-w-[150px]">
              <h3 className="font-serif text-2xl text-ivory mb-4">Explore</h3>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-base text-ivory/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="min-w-[170px]">
              <h3 className="font-serif text-2xl text-ivory mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-base text-ivory/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timings */}
            <div className="min-w-[180px]">
              <h3 className="font-serif text-2xl text-ivory mb-4">Timings</h3>
              <div className="space-y-3">

                <div className="flex gap-3">
                  <Clock size={16} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold/70 mb-1">Check-In</p>
                    <p className="font-serif text-lg text-ivory/70">{siteConfig.checkInTime}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock size={16} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold/70 mb-1">Check-Out</p>
                    <p className="font-serif text-lg text-ivory/70">{siteConfig.checkOutTime}</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=25.7771,87.4753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 border border-gold/30 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 rounded-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="min-w-[70px]">
              <h3 className="font-serif text-2xl text-ivory mb-4">Socials</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hotel Surya Bella Casa on Facebook"
                  className="text-ivory/60 hover:text-gold transition-colors duration-300 w-fit"
                >
                  <FacebookIcon size={24} />
                </a>

                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hotel Surya Bella Casa on Instagram"
                  className="text-ivory/60 hover:text-gold transition-colors duration-300 w-fit"
                >
                  <InstagramIcon size={24} />
                </a>

                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hotel Surya Bella Casa on YouTube"
                  className="text-ivory/60 hover:text-gold transition-colors duration-300 w-fit"
                >
                  <YouTubeIcon size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-4" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="font-sans text-sm text-ivory/40 text-center md:text-left leading-relaxed">
            Designed and Developed By{' '}
            <a
              href="https://www.credencesoft.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              CredenceSoft
            </a>
            , Powered By{' '}
            <a
              href="https://bookonepms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              BookOne
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}