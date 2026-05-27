'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Globe,
  Share2,
  Camera,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'

import { siteConfig } from '@/data/site'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Dining', href: '/dining' },
  // { label: 'Experiences', href: '/experiences' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cancellation Policy', href: '/cancellation' },
  { label: 'Terms & Conditions', href: '/terms' },
  
]

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory/70" role="contentinfo">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 pb-10">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* Logo Section */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/suryabellacasalogo.png"
                  alt="Hotel Surya Bella Casa Logo"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="font-serif text-base leading-relaxed text-ivory/60 max-w-[280px] mb-6">
              {siteConfig.tagline}
            </p>

            <div className="space-y-3">

              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-gold mt-1 flex-shrink-0"
                />

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-gold mt-1 flex-shrink-0"
                />

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-gold mt-1 flex-shrink-0"
                />

                <p className="font-sans text-sm text-ivory/60 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-2xl text-ivory mb-8">
              Quick Link
            </h3>

            <ul className="space-y-5">
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

          {/* Legal */}
          <div>
            <h3 className="font-serif text-2xl text-ivory mb-8">
              Legal
            </h3>

            <ul className="space-y-5">
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

          {/* Social & Visit */}
          <div>
            <h3 className="font-serif text-2xl text-ivory mb-8">
              Socials
            </h3>

            <div className="flex items-center gap-5 mb-10">

              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="text-ivory/60 hover:text-gold transition-colors duration-300"
              >
                <Share2 size={22} />
              </a>

              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="text-ivory/60 hover:text-gold transition-colors duration-300"
              >
                <Camera size={22} />
              </a>
            </div>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Clock
                  size={16}
                  className="text-gold mt-1 flex-shrink-0"
                />

                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold/70 mb-1">
                    Check-In
                  </p>

                  <p className="font-serif text-lg text-ivory/70">
                    {siteConfig.checkInTime}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={16}
                  className="text-gold mt-1 flex-shrink-0"
                />

                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold/70 mb-1">
                    Check-Out
                  </p>

                  <p className="font-serif text-lg text-ivory/70">
                    {siteConfig.checkOutTime}
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 border border-gold/30 px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 rounded-sm"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

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