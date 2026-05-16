'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { siteConfig } from '@/data/site';
import { MapPin, Phone, Mail, Clock, Train, Car, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

      <section className="py-12 md:py-20 border-t border-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info & Directions */}
          <div>
            <div className="mb-16">
              <h2 className="font-display text-3xl italic text-forest mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-1">Direct Line</p>
                    <a href={`tel:${siteConfig.phone}`} className="font-serif text-2xl text-forest hover:text-gold transition-colors">{siteConfig.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-1">WhatsApp</p>
                    <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="font-serif text-2xl text-forest hover:text-green-600 transition-colors">Chat with us instantly</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-1">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="font-serif text-lg text-forest hover:text-gold transition-colors">{siteConfig.email}</a>
                    <p className="font-sans text-xs text-taupe/60 mt-1">Expected response: within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-1">Address</p>
                    <p className="font-serif text-lg text-forest">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <GoldDivider className="mb-16" />

            <div>
              <h2 className="font-display text-3xl italic text-forest mb-8">How to Reach Us</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="text-gold" size={18} />
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-semibold">From Mumbai (Road)</h3>
                  </div>
                  <p className="font-serif text-base text-taupe leading-relaxed">
                    Take the Mumbai-Pune Expressway. Take the exit for Chowk/Karjat. Follow the Karjat-Chowk Road for about 15km. Unwind Karjat is located behind Baba Dairy in Wavarle village. Approx. travel time: 1.5 - 2 hours.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="text-gold" size={18} />
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-semibold">From Pune (Road)</h3>
                  </div>
                  <p className="font-serif text-base text-taupe leading-relaxed">
                    Take the Mumbai-Pune Expressway towards Mumbai. Take the Lonavala/Khopoli exit. Continue towards Karjat via the old Mumbai-Pune highway. Approx. travel time: 2 - 2.5 hours.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Train className="text-gold" size={18} />
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-semibold">By Train</h3>
                  </div>
                  <p className="font-serif text-base text-taupe leading-relaxed">
                    The nearest railway station is <strong>Karjat Railway Station</strong> (approx. 10 mins away). Frequent local trains run from CSMT (Mumbai) to Karjat. 
                  </p>
                </div>

                <div className="bg-gold/5 p-6 border border-gold/20 rounded-sm">
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-gold mb-3 flex items-center gap-2"><Clock size={14} /> Good to Know</h4>
                  <ul className="font-serif text-sm text-taupe space-y-2 list-disc list-inside">
                    <li>Complimentary secure valet parking available on-site.</li>
                    <li>Station pickup/drop-off can be arranged upon request.</li>
                    <li>Check-in: {siteConfig.checkInTime} | Check-out: {siteConfig.checkOutTime}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map */}
          <div>
            <div className="bg-white p-8 md:p-12 shadow-warm-lg rounded-sm border border-gold/10 mb-12">
              <h2 className="font-display text-3xl italic text-forest mb-8">Send an Enquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Full Name</label>
                  <input type="text" className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Phone Number</label>
                  <input type="tel" className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Travel Date</label>
                    <input type="date" className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent" />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Guests</label>
                    <input type="number" className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent" placeholder="2" min="1" />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Message</label>
                  <textarea className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent resize-none" rows={4} placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-all">
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Embedded Map */}
            <div className="aspect-square md:aspect-video lg:aspect-square w-full relative overflow-hidden border border-gold/20 rounded-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.200375618456!2d73.31505357597148!3d18.922485556773534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb0039371721%3A0x6c226bd87e40fd2f!2sUnwind%2C%20Karjat!5e0!3m2!1sen!2sin!4v1715750000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Unwind Karjat Map Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
