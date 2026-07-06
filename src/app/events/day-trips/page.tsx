import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Sun, Utensils, MapPin, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function DayTripsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristInformationCenter",
      "name": "Hotel Surya Bella Casa Day Outing & Picnic Purnea",
      "description": "Plan day trips and picnics in Purnea at Hotel Surya Bella Casa near Bus Stand. Weekend getaway, family outing, pool day pass with lunch.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
        "addressLocality": "Purnea",
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
          "name": "Can I plan a day picnic in Purnea near Bus Stand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Hotel Surya Bella Casa offers day trips and picnics in Purnea near Bus Stand with lunch packages, lounge access, and city tours from 10 AM to 6 PM."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best weekend getaway in Purnea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel Surya Bella Casa is the best weekend getaway in Purnea near Bus Stand with day outing packages, family-friendly activities, and delicious lunch options."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a one day trip available in Purnea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Hotel Surya Bella Casa offers one day trip packages in Purnea near Bus Stand including lunch, lounge access, and guided city tours for families and groups."
          }
        }
      ]
    }
  ];

  return (
    <main className="bg-cream min-h-screen">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CinematicHero 
        label="Day Trips & Picnics in Purnea - Weekend Getaway Near Bus Stand"
        title="Day Trips & Picnics in Purnea - Weekend Getaway, Family Outing & Pool Day Pass"
        tagline="Plan day trips and picnics in Purnea at Hotel Surya Bella Casa near Bus Stand. Weekend getaway, family outing, pool day pass with lunch. Best one day trip in Purnea for families and groups."
        image='/images/room2.jpeg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Escape</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Quick Retreat, Lasting Memories</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Our day-out packages are designed for those seeking a quick escape from their busy schedules. Enjoy access to our comfortable lounges, local dining options, and customized event support.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Clock className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Timings</p>
                  <p className="font-serif text-forest text-xl italic">10 AM - 6 PM</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Utensils className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Includes</p>
                  <p className="font-serif text-forest text-xl italic">Lunch & Tea</p>
                </div>
              </div>

              <a 
                href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Book Direct Online
              </a>
            </div>
            <div className="relative aspect-square">
               <Image src='/images/exterior.jpeg' alt="Day Trips & Picnics in Purnea - Weekend Getaway Near Bus Stand | Hotel Surya Bella Casa" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Package Highlights</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">What&apos;s Included</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Sun, title: 'Comfort & Lounge Access', desc: 'Full access to our premium air-conditioned rooms and guest lounges.' },
              { icon: Utensils, title: 'Lavish Buffet Lunch', desc: 'A wide spread of Indian and global cuisines prepared by our expert chefs.' },
              { icon: MapPin, title: 'City Tours', desc: 'Guided local sightseeing and shopping excursions around Purnia town.' }
            ].map((feature, i) => (
              <div key={i} className="text-center p-10 bg-white border border-gold/10 hover:shadow-warm-lg transition-all duration-500 group">
                <feature.icon className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display text-2xl italic text-forest mb-4">{feature.title}</h3>
                <p className="font-serif text-taupe leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-ivory text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl italic mb-8">Ready for a Day Out?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/events#enquiry" className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
              Request Day Package
            </Link>
          </div>
          <p className="mt-8 font-sans text-[10px] uppercase tracking-widest text-ivory/40">*Prior booking mandatory for day-trips.</p>
        </div>
      </section>

    </main>
  );
}
