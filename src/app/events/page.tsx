'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { estateEvents } from '@/data/events';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Utensils, GlassWater } from 'lucide-react';
import FaqSection from '@/components/sections/FaqSection';

const TABS = ['Weddings', 'Corporate', 'Parties', 'Day Trips', 'Live Musical Evenings'];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('Weddings');

  const filteredEvents = estateEvents.filter(e => e.category === activeTab);
  // If no events for the tab, fallback to showing all or a generic message.
  const displayEvents = filteredEvents.length > 0 ? filteredEvents : estateEvents;

  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      <CinematicHero
        label="Events & Celebrations"
        title="Bring Your People. We'll Take Care of the Rest."
        tagline="Some occasions deserve more than a restaurant table. Unwind Karjat offers a private and relaxed setting for it all."
        image='/celebrationsevenet.png'
      />

      {/* What we host */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
          <SectionLabel className="justify-center mb-6">What We Host</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-10">Your Celebration. Your People. Your Unwind.</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {['Birthday Celebrations', 'Family Get-Togethers', 'Corporate Offsites', 'Team Retreats', 'Anniversary Celebrations', 'Intimate Parties', 'Day Events', 'Private Group Stays', 'Small Celebrations & Gatherings'].map((item) => (
              <span key={item} className="font-sans text-[11px] uppercase tracking-[0.14em] text-taupe bg-white border border-gold/20 px-5 py-3 rounded-sm">
                {item}
              </span>
            ))}
          </div>
          <p className="font-serif text-lg text-taupe italic max-w-2xl mx-auto mt-10 leading-relaxed">
            With accommodation, food, open spaces, poolside areas and event facilities all within one property, you can bring the entire experience together in one place.
          </p>
        </div>
      </section>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "EventVenue",
              "name": "Unwind Karjat Event Spaces",
              "description": "Lawns, poolside areas and open spaces for private celebrations, family gatherings, corporate offsites and group stays in Karjat.",
              "url": "https://unwindkarjat.com/events",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Karjat - Chowk Rd, behind Baba Dairy, Wavarle",
                "addressLocality": "Karjat",
                "addressRegion": "Maharashtra",
                "postalCode": "410206",
                "addressCountry": "IN"
              },
              "telephone": "+91919619198839"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can we book the property for a private event?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Unwind can host private celebrations, family gatherings, corporate events and group stays, subject to availability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide corporate offsite facilities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We regularly accommodate corporate groups and can customise stay, meals and activities according to the group's requirements."
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
                href={`/events/${activeTab.toLowerCase().replace(/\s+/g, '-')}`}
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
                  {event.video ? (
                    <video
                      src={event.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image src={event.image} alt={event.title} fill loading="lazy" className="object-cover hover:scale-105 transition-transform duration-1000" />
                  )}
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
                    <a href={`/events/${activeTab.toLowerCase().replace(/\s+/g, '-')}`} className="border border-gold/30 text-gold font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold/5 transition-all rounded-sm">Learn More</a>
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
          <SectionLabel light className="justify-center mb-6">Food & Gatherings</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl italic mb-12">Good Food. Good Times.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <Utensils className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Generous Spreads</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">From Indian favourites and tandoor specialities to comfort food, our menus are designed to be enjoyed together.</p>
            </div>
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <GlassWater className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Live Tandoor & BBQ</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">Freshly prepared live tandoor and barbecue setups for events, with special Fish and Mutton dishes on request.</p>
            </div>
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <Utensils className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Custom Menus</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">Tell us what you are planning and we will help you put the food — and the whole day — together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionLabel className="mb-6">Corporate</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Work Somewhere Different.</h2>
            <p className="font-serif text-lg text-taupe leading-relaxed mb-8">
              Step away from the office without stepping too far away from Pune. Unwind Karjat is designed for small corporate groups looking for a change of environment — whether it is a team offsite, leadership meet, annual gathering or simply a day away from the usual routine.
            </p>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-10">Work. Connect. Unwind.</p>
            <Link
              href="https://bookone.io/Unwind-Karjat?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
            >
              Plan a Corporate Stay
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-gold/10">
            <Image src='/corporate111.jpeg' alt="Corporate offsite at Unwind Karjat" fill loading="lazy" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Family & Groups */}
      <section className="py-24 bg-champagne">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden border border-gold/10">
            <Image src='/parties.jpeg' alt="Family stay at Unwind Karjat" fill loading="lazy" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel className="mb-6">Family & Groups</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">More Time Together. Less Planning.</h2>
            <p className="font-serif text-lg text-taupe leading-relaxed mb-8">
              The best family getaways are rarely about doing more — they are about everyone being together. At Unwind, families and groups can stay, eat, swim, play and celebrate without having to move from one venue to another.
            </p>
            <p className="font-sans text-sm text-taupe mb-10 max-w-lg leading-relaxed">
              With our Family Room, multiple room categories, open spaces and group-friendly facilities, the property works particularly well for families and private groups.
            </p>
            <Link
              href="https://bookone.io/Unwind-Karjat?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
            >
              Plan a Group Stay
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ (answers match on-page FAQPage schema) */}
      <FaqSection
        title="Event Planning Questions"
        label="Planning Help"
        faqs={[
          {
            question: 'Can we book the property for a private event?',
            answer: 'Yes. Unwind can host private celebrations, family gatherings, corporate events and group stays, subject to availability.'
          },
          {
            question: 'Do you provide corporate offsite facilities?',
            answer: 'Yes. We regularly accommodate corporate groups and can customise stay, meals and activities according to the group\'s requirements.'
          },
          {
            question: 'Is Unwind suitable for families and groups?',
            answer: 'Yes. The property is designed particularly well for families and private groups, with a large pool, lawn, games, dining and a dedicated Family Room.'
          }
        ]}
      />

      {/* Dynamic Booking CTA Block */}
      <section className="py-24 bg-cream border-t border-gold/10 text-center" id="enquiry">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel className="justify-center mb-6">Let&apos;s Connect</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl italic text-forest mb-6">Tell Us What You Are Planning</h2>
          <p className="font-serif text-taupe text-lg md:text-xl italic max-w-xl mx-auto leading-relaxed mb-12">
            Whether it is a birthday, family gathering, corporate offsite or private group stay, we will help you put it together. Secure your dates directly via our booking portal.
          </p>
          <a
            href="https://bookone.io/Unwind-Karjat?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 duration-500 rounded-sm font-bold"
          >
            <Calendar size={16} />
            Plan Your Event
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
