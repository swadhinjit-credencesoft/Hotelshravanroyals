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
            "name": "Unwind Karjat",
            "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Karjat - Chowk Rd, behind Baba Dairy, Wavarle",
              "addressLocality": "Karjat",
              "addressRegion": "Maharashtra",
              "postalCode": "410206",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.922485,
              "longitude": 73.315053
            },
            "url": "https://unwindkarjat.com/contact",
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
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">From Mumbai</h3>
                  </div>
                  <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                    <p>Take the <strong>Mumbai-Pune Expressway</strong> and exit at <strong>Chowk/Karjat</strong>.</p>
                    <p>Follow the Karjat-Chowk Road for 15km. Look for <strong>Baba Dairy</strong> on your right; Unwind Karjat is located immediately behind it in Wavarle.</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <Car size={16} />
                    </div>
                    <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">From Pune</h3>
                  </div>
                  <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                    <p>Take the <strong>Mumbai-Pune Expressway</strong> towards Mumbai. Exit at <strong>Lonavala/Khopoli</strong>.</p>
                    <p>Continue towards Karjat via the Old Highway. Turn right towards Chowk and follow signs for Unwind Karjat.</p>
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
                    <p>Board a <strong>Central Line Fast Train</strong> to <strong>Karjat Railway Station</strong>. </p>
                    <p>From the station, we are just a 10-minute rickshaw ride away. Contact us for complimentary pickup coordination.</p>
                  </div>
                </div>

                <div className="bg-[#fdfcf8] p-8 border border-gold/20 rounded-sm shadow-sm">
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-gold mb-4 flex items-center gap-2"><Clock size={14} /> Arrival Essentials</h4>
                  <ul className="font-serif text-sm text-taupe space-y-3">
                    <li className="flex gap-3"><span className="text-gold">✔</span> Secure Valet Parking (Complimentary)</li>
                    <li className="flex gap-3"><span className="text-gold">✔</span> Electric Vehicle Charging Points</li>
                    <li className="flex gap-3"><span className="text-gold">✔</span> 24/7 Concierge for Route Guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map */}
          <div>
            <div className="bg-white p-8 md:p-12 shadow-warm-lg rounded-sm border border-gold/10 mb-12 mx-6 md:mx-0">
              <h2 className="font-display text-3xl italic text-forest mb-8">Send an Enquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Full Name</label>
                  <input type="text" className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent" placeholder="Your Name" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Phone</label>
                    <input type="tel" className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent" placeholder="+91" required />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Travel Date</label>
                    <input type="date" className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent" />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 block mb-2">Message</label>
                  <textarea className="w-full border-b border-gold/30 pb-3 font-sans text-sm text-forest focus:outline-none focus:border-gold transition-colors bg-transparent resize-none" rows={4} placeholder="Your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-5 hover:bg-gold-light transition-all rounded-sm font-bold">
                  Send Message
                </button>
              </form>
            </div>

            {/* Embedded Map - Full width on mobile by removing parent padding/margin if needed */}
            <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-square relative overflow-hidden border-y md:border border-gold/20 md:rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-inner">
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
