'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { siteConfig } from '@/data/site';
import { MapPin, Phone, Mail, Clock, Train, Car, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <div className="pt-40 pb-20 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Concierge</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-6">Contact & Directions</h1>
        <p className="font-serif text-lg md:text-xl text-taupe max-w-2xl mx-auto italic">
          Reach out to our dedicated team to plan your stay, request an event proposal, or coordinate your arrival.
        </p>
      </div>

      {/* LocalBusiness Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Hotel Bella Casa",
            "image": '/images/room2.jpeg',
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
              "addressLocality": "Purnia",
              "addressRegion": "Bihar",
              "postalCode": "854301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.76889728,
              "longitude": 87.47058097
            },
            "url": "https://hotelsuryabellacasa.com/contact",
            "telephone": siteConfig.phone,
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }}
      />

      <section className="py-12 md:py-20 border-t border-gold/10">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info & Directions */}
          <div className="px-6 md:px-0">
            <div className="mb-16">
              <h2 className="font-display text-3xl italic text-forest mb-8">Quick Connect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                 <a 
                  href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-3 bg-green-600 text-white font-sans text-[11px] uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-green-700 transition-all shadow-md group"
                 >
                    <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                    WhatsApp Us Now
                 </a>
                 <a 
                  href={`tel:${siteConfig.phone}`} 
                  className="flex items-center justify-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-forest/90 transition-all shadow-md group"
                 >
                    <Phone size={18} className="group-hover:scale-110 transition-transform" />
                    Call Concierge
                 </a>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-1">Email Enquiry</p>
                    <a href={`mailto:${siteConfig.email}`} className="font-serif text-lg text-forest hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30">{siteConfig.email}</a>
                    <p className="font-sans text-[9px] text-taupe/60 mt-1 uppercase tracking-tighter">Response time: &lt; 2 Hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-1">Location</p>
                    <p className="font-serif text-lg text-forest leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <GoldDivider className="mb-16" />

            <div>
              <h2 className="font-display text-3xl italic text-forest mb-8">Detailed Directions</h2>
              
              <div className="space-y-10">
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <Car size={16} />
                    </div>
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">From Patna</h3>
                  </div>
                  <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                    <p>Take <strong>NH 31</strong> eastwards towards Purnia via Begusarai, Khagaria, and Katihar.</p>
                    <p>The drive is approximately 230 km and takes about 5-6 hours. Hotel Bella Casa is located at Suryalok Complex, opposite Vikass Market, near Bus Stand.</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <Car size={16} />
                    </div>
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">From Siliguri</h3>
                  </div>
                  <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                    <p>Take <strong>NH 27</strong> south to <strong>NH 31</strong>, then proceed west towards Purnia.</p>
                    <p>The drive is approximately 200 km and takes about 4-5 hours. Hotel Bella Casa is situated in the heart of the city near the main bus stand.</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <Train size={16} />
                    </div>
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">By Railway</h3>
                  </div>
                  <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                    <p>The nearest major railway station is <strong>Purnia Junction (PRNA)</strong>, well-connected to Patna, Kolkata, and New Jalpaiguri.</p>
                    <p>From the station, Hotel Bella Casa is approximately 1 km via Bus Stand Road. Auto-rickshaws and cycle-rickshaws are readily available.</p>
                  </div>
                </div>

                <div className="bg-[#fdfcf8] p-8 border border-gold/20 rounded-sm shadow-sm">
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-gold mb-4 flex items-center gap-2"><Clock size={14} /> Arrival Essentials</h4>
                  <ul className="font-serif text-sm text-taupe space-y-3">
                    <li className="flex gap-3"><span className="text-gold">âœ”</span> Secure Valet Parking (Complimentary)</li>
                    <li className="flex gap-3"><span className="text-gold">âœ”</span> Electric Vehicle Charging Points</li>
                    <li className="flex gap-3"><span className="text-gold">âœ”</span> 24/7 Concierge for Route Guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map */}
          <div>
            {/* Embedded Map - Full width on mobile by removing parent padding/margin if needed */}
            <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-square relative overflow-hidden border-y md:border border-gold/20 md:rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8!2d87.4706!3d25.7689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2efc24c4a7af%3A0x0!2sHotel+Bella+Casa!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Bella Casa Map Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
