import type { Metadata } from 'next'
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Sun, Utensils, MapPin, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Day Trips & Weekend Getaways at Ajodhya Hill | The Divine Oasis, Purulia',
  description:
    'Plan a day trip or weekend getaway at The Divine Oasis atop Ajodhya Hill, Purulia. Family outing packages with hilltop lounge access, organic farm lunch, and forest trails.',
  keywords: [
    'day trips from Purulia',
    'picnic at Ajodhya Hill',
    'Purulia day outing',
    'family outing Purulia',
    'weekend getaway Purulia',
    'one day trip Purulia',
    'Purulia sightseeing',
    'nearby attractions Ajodhya Hill',
    'day package resort Purulia',
    'lounge day pass Purulia',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/events/day-trips',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Day Trips & Weekend Getaways at Ajodhya Hill | The Divine Oasis, Purulia',
    description:
      'Plan a family day trip or weekend getaway at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop lounge access, organic farm lunch, forest trails. Book your day out in Purulia.',
    url: 'https://thedivineoasisresort.com/events/day-trips',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg', width: 1200, height: 630, alt: 'Day Trips & Weekend Getaways at The Divine Oasis Ajodhya Hill' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Trips & Weekend Getaways at Ajodhya Hill | The Divine Oasis',
    description: 'Family day trip packages in Purulia at Ajodhya Hill. Hilltop lounge access, organic farm lunch & forest trails at The Divine Oasis.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg'],
  },
};


export default function DayTripsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristInformationCenter",
      "name": "The Divine Oasis Day Outing & Picnic Ajodhya Hill",
      "description": "Plan day trips and weekend getaways at The Divine Oasis atop Ajodhya Hill, Purulia. Family outing packages with organic farm lunch, hilltop lounge access, and forest trails.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "643G+4Q, Hilltop",
        "addressLocality": "Ajodhya",
        "addressRegion": "West Bengal",
        "postalCode": "723152",
        "addressCountry": "IN"
      },
      "telephone": "+91 99039 89950"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I plan a day picnic at Ajodhya Hill, Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The Divine Oasis offers day trips and picnics at Ajodhya Hill, Purulia with organic farm lunch packages, hilltop lounge access, and forest trails from 10 AM to 6 PM."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best weekend getaway in Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Divine Oasis is the best weekend getaway in Purulia at Ajodhya Hill with day outing packages, family-friendly activities, forest trails, and delicious organic farm lunch options."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a one day trip available at Ajodhya Hill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The Divine Oasis offers one day trip packages at Ajodhya Hill, Purulia including organic farm lunch, hilltop lounge access, and guided forest trails for families and groups."
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
        label="Day Trips & Weekend Getaways at Ajodhya Hill - The Divine Oasis, Purulia"
        title="Day Trips & Weekend Getaways at Ajodhya Hill - The Divine Oasis, Purulia"
        tagline="Plan day trips and weekend getaways at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop lounge access, organic farm lunch, forest trails. Best one day trip in Purulia for families and groups."
        image='https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Escape</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Quick Retreat, Lasting Memories</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Our day-out packages are designed for those seeking a quick escape from their busy schedules. Enjoy access to our hilltop lounge, organic farm dining, and customized event support at Ajodhya Hill.
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
                  <p className="font-serif text-forest text-xl italic">Organic Farm Lunch & Tea</p>
                </div>
              </div>

              <a 
                href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Book Direct Online
              </a>
            </div>
            <div className="relative aspect-square">
               <Image src='https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg' alt="Day Trips & Weekend Getaways at The Divine Oasis Ajodhya Hill" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Package Highlights</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">What&apos;s Included</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Sun, title: 'Hilltop Lounge Access', desc: 'Full access to our scenic hilltop seating area with forest views.' },
              { icon: Utensils, title: 'Organic Farm Lunch', desc: 'A delicious spread of vegetarian thali prepared from our own organic farm.' },
              { icon: MapPin, title: 'Forest Trails', desc: 'Guided nature walks and trails to Ajodhya Hills & Forest Reserve (0.4 km).' }
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