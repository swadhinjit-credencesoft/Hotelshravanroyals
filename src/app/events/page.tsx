'use client';

import { useState } from 'react';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { estateEvents } from '@/data/events';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, ArrowRight, Utensils, GlassWater } from 'lucide-react';

const TABS = ['Weddings', 'Corporate', 'Parties', 'Day Trips'];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('Weddings');

  const filteredEvents = estateEvents.filter(e => e.category === activeTab);
  // If no events for the tab, fallback to showing all or a generic message.
  const displayEvents = filteredEvents.length > 0 ? filteredEvents : estateEvents;

  return (
    <main className="bg-cream min-h-screen">
      
      <CinematicHero
        label="Events & Celebrations"
        title="Unforgettable Gatherings"
        tagline="From intimate forest weddings to strategic corporate retreats, we provide the perfect backdrop for your significant moments."
        image='https://bookonelocal.in/cdn/IMG_7431.mp4'
      />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "EventVenue",
              "name": "Hotel Bella Casa Event Spaces",
              "description": "Premium outdoor lawns, corporate hub, and poolside venues for weddings, parties, and corporate retreats in Purnia.",
              "url": "https://hotelsuryabellacasa.com/events",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
                "addressLocality": "Purnia",
                "addressRegion": "Bihar",
                "postalCode": "854301",
                "addressCountry": "IN"
              },
              "telephone": "+91 9835923601"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the wedding capacity at Hotel Bella Casa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our outdoor wedding lawns can comfortably host up to 250 guests with bespoke catering and decor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide corporate offsite facilities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have a dedicated Corporate Hub with high-speed Wi-Fi, projectors, and team-building activities for up to 60 guests."
                  }
                }
              ]
            }
          ])
        }}
      />

      {/* Hero Tabs */}
      <div className="bg-white border-b border-gold/20 sticky top-20 z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center overflow-x-auto no-scrollbar">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-8 py-6 font-sans text-[11px] uppercase tracking-[0.2em] transition-colors relative ${activeTab === tab ? 'text-forest font-bold' : 'text-taupe/60 hover:text-forest'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
              )}
            </button>
          ))}
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <SectionLabel className="justify-center mb-6">Our Venues</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest">Spaces for {activeTab}</h2>
            <GoldDivider className="justify-center mt-8" />
            <div className="mt-8">
              <a
                href={`/events/${activeTab.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-gold hover:text-forest transition-colors"
              >
                View Dedicated {activeTab} Page <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="space-y-24">
            {displayEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`relative aspect-[4/3] overflow-hidden border border-gold/10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={event.image} alt={event.title} fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">{event.category}</span>
                  <h3 className="font-display text-4xl md:text-5xl italic text-forest mb-6">{event.title}</h3>
                  <p className="font-serif text-lg text-taupe mb-8 leading-relaxed italic">{event.description}</p>
                  <p className="font-sans text-xs text-taupe/60 mb-8 uppercase tracking-widest bg-gold/5 inline-block px-4 py-2 border border-gold/20 rounded-sm">Capacity: {event.capacity}</p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-taupe font-sans text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a href="#enquiry" className="bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-forest/90 transition-all rounded-sm">Enquire Now</a>
                    <a href={`/events/${activeTab.toLowerCase().replace(' ', '-')}`} className="border border-gold/30 text-gold font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold/5 transition-all rounded-sm">Learn More</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Overview */}
      <section className="bg-forest py-24 text-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <SectionLabel light className="justify-center mb-6">Culinary Excellence</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl italic mb-12">Bespoke Catering</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <Utensils className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Multi-Cuisine Feasts</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">From authentic North Indian and regional cuisines to lavish Continental spreads, our culinary team designs menus tailored precisely to your guests&apos; palates.</p>
            </div>
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <GlassWater className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Barbecue & Bonfire</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">Our signature live grills under the Purnia sky. Perfect for pre-wedding events, corporate mixers, or family celebrations.</p>
            </div>
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <Utensils className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Specialty Menus</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">Dedicated Jain menus, vegan setups, and our highly-requested local vegetarian delicacies prepared on special request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Booking CTA Block */}
      <section className="py-24 bg-cream border-t border-gold/10 text-center" id="enquiry">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel className="justify-center mb-6">Let&apos;s Connect</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl italic text-forest mb-6">Start Your Journey</h2>
          <p className="font-serif text-taupe text-lg md:text-xl italic max-w-xl mx-auto leading-relaxed mb-12">
            Whether planning a dream wedding, corporate retreat, or private celebration, let us craft the perfect experience. Secure your dates directly via our booking portal.
          </p>
          <a
            href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 duration-500 rounded-sm font-bold"
          >
            <Calendar size={16} />
            Book Now / Request Proposal
          </a>
        </div>
      </section>

    </main>
  );
}
