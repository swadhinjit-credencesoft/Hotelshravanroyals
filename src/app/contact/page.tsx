import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { siteConfig } from '@/data/site';
import { MapPin, Phone, Mail, Train, Car, MessageCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Directions | The Divine Oasis, Ajodhya Hill, Purulia',
  description:
    'Contact The Divine Oasis at Ajodhya Hill, Purulia. Call +91 99039 89950, WhatsApp, or email thedivineoasisresort@gmail.com. Located at 643G+4Q, Hilltop, Ajodhya, Purulia 723152.',
  keywords: [
    'contact The Divine Oasis Purulia',
    'resort booking phone number Purulia',
    'resort near Ajodhya Hill Purulia contact',
    'resort reservation Purulia',
    'whatsapp resort Purulia',
    'directions Ajodhya Hill resort',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: 'https://thedivineoasisresort.com/contact',
              },
            ],
          })
        }}
      />

      {/* Hero Header */}
      <div className="pt-40 pb-20 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Concierge</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-6">Contact & Directions</h1>
        <p className="font-serif text-lg md:text-xl text-taupe max-w-2xl mx-auto italic">
          Reach out to our dedicated team to plan your stay, request an event proposal, or coordinate your arrival.
        </p>
      </div>

      {/* LocalBusiness Schema for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "The Divine Oasis",
            "image": "https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "643G+4Q, Hilltop",
              "addressLocality": "Ajodhya",
              "addressRegion": "West Bengal",
              "postalCode": "723152",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 23.2028654,
              "longitude": 86.1268909
            },
            "url": "https://thedivineoasisresort.com/contact",
            "telephone": "+91 99039 89950",
            "email": "thedivineoasisresort@gmail.com",
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
                  href="https://wa.me/91990398950" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 bg-green-600 text-white font-sans text-[11px] uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-green-700 transition-all shadow-md group"
                 >
                    <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                    WhatsApp Us Now
                 </a>
                 <a 
                  href="tel:+91990398950" 
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
                     <a href="mailto:thedivineoasisresort@gmail.com" className="font-serif text-lg text-forest hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30">thedivineoasisresort@gmail.com</a>
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
                     <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">From Kolkata</h3>
                   </div>
                   <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                     <p>Take <strong>NH 19 (Old NH 2)</strong> west towards Asansol, then take NH 14 towards Purulia.</p>
                     <p>The drive is approximately 280 km and takes about 5.5-6.5 hours. The Divine Oasis is located at Hilltop, Ajodhya, Purulia 723152.</p>
                   </div>
                 </div>

                 <div className="group">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                       <Car size={16} />
                     </div>
                     <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">From Ranchi</h3>
                   </div>
                   <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                     <p>Take <strong>NH 20</strong> towards Purulia via Bundu and Tamar.</p>
                     <p>The drive is approximately 110 km and takes about 2.5-3 hours. The Divine Oasis is situated at Ajodhya Hill, Purulia.</p>
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
                     <p>The nearest major railway station is <strong>Purulia Junction (PRR)</strong>, well-connected to Kolkata, Tatanagar, and Ranchi.</p>
                     <p>From the station, The Divine Oasis is approximately 42.6 km via Purulia-Ajodhya Road. Taxis and auto-rickshaws are readily available.</p>
                   </div>
                 </div>

                 <div className="group">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                       <Clock size={16} />
                     </div>
                     <h3 className="font-sans text-sm uppercase tracking-widest text-forest font-bold">By Air</h3>
                   </div>
                   <div className="pl-11 space-y-3 font-serif text-base text-taupe leading-relaxed">
                     <p>The nearest airport is <strong>Netaji Subhas Chandra Bose International Airport (Kolkata)</strong>, approximately 280 km away.</p>
                     <p>From the airport, take NH 19 towards Purulia (5.5-6.5 hours drive). Alternatively, fly to Birsa Munda Airport (Ranchi) - 110 km away (2.5-3 hours drive).</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Right Column: Embedded Map */}
           <div>
             <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-square relative overflow-hidden border-y md:border border-gold/20 md:rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.5!2d86.1268!3d23.2028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjMsMTIgwzAubG8gOCYsMTEgwzAubG8gNDQ!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="The Divine Oasis Map Location"
               ></iframe>
             </div>
           </div>

         </div>
       </section>

    </main>
  );
}

