'use client';

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import NewsletterSection from '@/components/sections/NewsletterSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { siteConfig } from '@/data/site'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar forceDark={true} />
      
      {/* Hero Section */}
      <div className="pt-40 pb-16 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Concierge</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-6">Contact Us</h1>
        <p className="font-serif text-xl text-taupe max-w-2xl mx-auto leading-relaxed">
          We look forward to welcoming you to our royal retreat. Reach out to us for reservations, inquiries, or special requests.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-6 md:px-10 pb-24">
        
        {/* Contact Info */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-12">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full">
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-white shadow-sm group-hover:bg-forest transition-colors duration-300 mb-4">
                <MapPin className="text-gold group-hover:text-ivory transition-colors duration-300 w-6 h-6" />
              </div>
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-taupe mb-2 mt-1">Address</h3>
              <p className="font-serif text-lg text-forest leading-relaxed max-w-[280px]">
                {siteConfig.address}
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-white shadow-sm group-hover:bg-forest transition-colors duration-300 mb-4">
                <Phone className="text-gold group-hover:text-ivory transition-colors duration-300 w-6 h-6" />
              </div>
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-taupe mb-2 mt-1">Phone</h3>
              <a href={`tel:${siteConfig.phone}`} className="font-serif text-lg text-forest hover:text-gold transition-colors">
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-white shadow-sm group-hover:bg-forest transition-colors duration-300 mb-4">
                <Mail className="text-gold group-hover:text-ivory transition-colors duration-300 w-6 h-6" />
              </div>
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-taupe mb-2 mt-1">Email</h3>
              <a href={`mailto:${siteConfig.email}`} className="font-serif text-lg text-forest hover:text-gold transition-colors break-all">
                {siteConfig.email}
              </a>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-white shadow-sm group-hover:bg-forest transition-colors duration-300 mb-4">
                <Clock className="text-gold group-hover:text-ivory transition-colors duration-300 w-6 h-6" />
              </div>
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-taupe mb-2 mt-1">Check-In / Out</h3>
              <p className="font-serif text-lg text-forest">
                In: {siteConfig.checkInTime} <br/> Out: {siteConfig.checkOutTime}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Map Section */}
      <div className="w-full h-[500px] bg-taupe/10 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.39719363073!2d79.5225!3d26.7865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbKwDQ3JzExLjQiTiA3OcKwMzEnMjEuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) opacity(0.9)' }}
          allowFullScreen
          loading="lazy"
          title="Hotel Location"
        ></iframe>
      </div>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
