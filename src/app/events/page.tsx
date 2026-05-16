'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { estateEvents } from '@/data/events';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Users, IndianRupee, MessageSquare, ArrowRight, Utensils, GlassWater } from 'lucide-react';

const TABS = ['Weddings', 'Corporate', 'Parties', 'Day Trips'];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('Weddings');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ date: '', type: '', guests: '', budget: '', name: '', phone: '' });

  const filteredEvents = estateEvents.filter(e => e.category === activeTab);
  // If no events for the tab, fallback to showing all or a generic message.
  const displayEvents = filteredEvents.length > 0 ? filteredEvents : estateEvents;

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Events & Celebrations"
        title="Unforgettable Gatherings"
        tagline="From intimate forest weddings to strategic corporate retreats, we provide the perfect backdrop for your significant moments."
        image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=2400&q=95"
      />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the wedding capacity at Unwind Karjat?",
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
          })
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
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">From authentic Maharashtrian thalis to lavish Continental spreads, our culinary team designs menus tailored precisely to your guests' palates.</p>
            </div>
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <GlassWater className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Barbecue & Bonfire</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">Our signature live grills under the Karjat sky. Perfect for pre-wedding events, corporate mixers, or intimate birthday celebrations.</p>
            </div>
            <div className="border border-ivory/10 p-8 hover:bg-ivory/5 transition-colors group">
              <Utensils className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display text-2xl italic mb-4">Specialty Menus</h3>
              <p className="font-serif text-ivory/70 leading-relaxed text-sm">Dedicated Jain menus, vegan setups, and our highly-requested local Fish & Mutton delicacies prepared on special request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-step Enquiry Form */}
      <section className="py-24 bg-cream border-t border-gold/10" id="enquiry">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center mb-6">Let's Connect</SectionLabel>
            <h2 className="font-display text-5xl italic text-forest mb-4">Request a Proposal</h2>
            <p className="font-serif text-taupe text-lg italic">Let our event concierges craft the perfect package for you.</p>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-warm-lg border border-gold/20 rounded-sm relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold/10">
              <div className="h-full bg-gold transition-all duration-500" style={{ width: `${(formStep / 4) * 100}%` }} />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-4">
              <AnimatePresence mode="wait">
                {formStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mb-8 flex items-center gap-3 text-gold"><Calendar /> <span className="font-sans uppercase tracking-widest text-sm text-forest">When is the event?</span></div>
                    <input type="date" className="w-full border-b border-gold/30 pb-3 font-sans text-lg text-forest focus:outline-none focus:border-gold bg-transparent mb-8" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                    <button onClick={() => setFormStep(2)} className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 flex items-center gap-2 hover:bg-gold-light ml-auto">Next <ArrowRight size={14}/></button>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mb-8 flex items-center gap-3 text-gold"><Users /> <span className="font-sans uppercase tracking-widest text-sm text-forest">Event Details</span></div>
                    <select className="w-full border-b border-gold/30 pb-3 font-sans text-lg text-forest focus:outline-none focus:border-gold bg-transparent mb-8" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate Retreat</option>
                      <option value="Party">Birthday / Party</option>
                    </select>
                    <input type="number" placeholder="Estimated Guest Count" className="w-full border-b border-gold/30 pb-3 font-sans text-lg text-forest focus:outline-none focus:border-gold bg-transparent mb-8" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} />
                    <div className="flex justify-between">
                      <button onClick={() => setFormStep(1)} className="text-taupe font-sans text-[11px] uppercase tracking-widest hover:text-gold">Back</button>
                      <button onClick={() => setFormStep(3)} className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 flex items-center gap-2 hover:bg-gold-light">Next <ArrowRight size={14}/></button>
                    </div>
                  </motion.div>
                )}

                {formStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mb-8 flex items-center gap-3 text-gold"><IndianRupee /> <span className="font-sans uppercase tracking-widest text-sm text-forest">Budget Estimation</span></div>
                    <select className="w-full border-b border-gold/30 pb-3 font-sans text-lg text-forest focus:outline-none focus:border-gold bg-transparent mb-8" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                      <option value="">Select Budget Range</option>
                      <option value="< 5L">Under ₹5 Lakhs</option>
                      <option value="5L - 10L">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="10L+">Above ₹10 Lakhs</option>
                    </select>
                    <div className="flex justify-between">
                      <button onClick={() => setFormStep(2)} className="text-taupe font-sans text-[11px] uppercase tracking-widest hover:text-gold">Back</button>
                      <button onClick={() => setFormStep(4)} className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 flex items-center gap-2 hover:bg-gold-light">Next <ArrowRight size={14}/></button>
                    </div>
                  </motion.div>
                )}

                {formStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mb-8 flex items-center gap-3 text-gold"><MessageSquare /> <span className="font-sans uppercase tracking-widest text-sm text-forest">Contact Information</span></div>
                    <input type="text" placeholder="Full Name" className="w-full border-b border-gold/30 pb-3 font-sans text-lg text-forest focus:outline-none focus:border-gold bg-transparent mb-6" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <input type="tel" placeholder="Phone Number" className="w-full border-b border-gold/30 pb-3 font-sans text-lg text-forest focus:outline-none focus:border-gold bg-transparent mb-8" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    <div className="flex justify-between items-center">
                      <button onClick={() => setFormStep(3)} className="text-taupe font-sans text-[11px] uppercase tracking-widest hover:text-gold">Back</button>
                      <button onClick={() => alert("Enquiry submitted!")} className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light">Submit Enquiry</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
