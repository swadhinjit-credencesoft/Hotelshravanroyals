import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Car, Calendar, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BrandStatement from '@/components/sections/BrandStatement';
import RoomsCarousel from '@/components/sections/RoomsCarousel';
import ParallaxDivider from '@/components/sections/ParallaxDivider';
import DiningSection from '@/components/sections/DiningSection';
import ExperiencesGrid from '@/components/sections/ExperiencesGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FaqSection from '@/components/sections/FaqSection';
import HistorySection from '@/components/sections/HistorySection';
import ArtOfStaySection from '@/components/sections/ArtOfStaySection';
import SectionLabel from '@/components/ui/SectionLabel';

const faqs = [
  {
    question: 'How far is Unwind Karjat from Mumbai and Pune?',
    answer: 'Unwind Karjat is just over an hour and a half from both Mumbai and Pune — close enough for a quick getaway, far enough to feel like a break.'
  },
  {
    question: 'How many rooms does Unwind Karjat have?',
    answer: 'The property has 10 rooms, including our Family Room that comfortably sleeps up to 8 guests — ideal for family and group getaways.'
  },
  {
    question: 'Is Unwind Karjat pet-friendly?',
    answer: 'Unwind Karjat is currently not a pet-friendly property.'
  },
  {
    question: 'Is the pool available to all guests?',
    answer: 'Yes. The pool is available to all resident guests of the property.'
  },
  {
    question: 'Do you host corporate offsites and private events?',
    answer: 'Yes. We regularly host corporate offsites and private events, and can customise stays, meals and activities for your group.'
  }
];

export default function Home() {
  return (
    <main className="relative bg-cream min-h-screen" id="main-content">
      <Navbar />
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "@id": "https://unwindkarjat.com/#organization",
            "name": "Unwind Karjat",
            "description": "A private boutique retreat in Karjat with comfortable rooms, a large pool, in-house dining, outdoor spaces and experiences for families, groups, celebrations and corporate getaways.",
            "url": "https://unwindkarjat.com",
            "logo": "https://unwindkarjat.com/unwindkarjatlogo.png",
            "image": [
              "https://unwindkarjat.com/og-image.png",
              "https://unwindkarjat.com/images/resort-exterior.png"
            ],
            "email": "stay@unwindkarjat.com",
            "telephone": "+91919619198839",
            "priceRange": "₹₹",
            "currenciesAccepted": "INR",
            "checkinTime": "13:00",
            "checkoutTime": "11:00",
            "numberOfRooms": 10,
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
            "hasMap": "https://www.google.com/maps/search/?api=1&query=Unwind+Karjat+Wavarle+Karjat+Maharashtra",
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "In-house Restaurant", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true }
            ],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://bookone.io/Unwind-Karjat?bookingEngine=true",
                "inLanguage": "en-IN",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "LodgingReservation",
                "name": "Unwind Karjat Room Booking"
              }
            },
            "sameAs": [
              "https://www.instagram.com/unwind_karjat"
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://unwindkarjat.com/#website",
            "name": "Unwind Karjat",
            "url": "https://unwindkarjat.com",
            "description": "A private boutique retreat in Karjat for families, groups and celebrations.",
            "inLanguage": "en",
            "publisher": {
              "@id": "https://unwindkarjat.com/#organization"
            }
          })
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Introduction */}
      <BrandStatement />

      {/* Stay */}
      <RoomsCarousel />

      {/* Experience */}
      <ExperiencesGrid />

      {/* Dining */}
      <DiningSection />

      {/* Parallax Quote Divider */}
      <ParallaxDivider />

      {/* Events */}
      <section className="relative py-28 overflow-hidden bg-forest">
        <Image
          src='/images/exterior8.jpeg'
          alt="Celebrations on the lawns at Unwind Karjat"
          fill
          loading="lazy"
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-forest/80" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <SectionLabel light className="justify-center mb-6">Events & Celebrations</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl italic text-ivory mb-8">
            Bring Your People. We&apos;ll Take Care of the Rest.
          </h2>
          <p className="font-serif text-lg md:text-xl text-ivory/80 italic leading-relaxed mb-12 max-w-2xl mx-auto">
            Birthdays, family get-togethers, corporate offsites and private celebrations — all in one relaxed place, with accommodation, food and open spaces together.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center gap-3 bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.25em] px-10 py-5 hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 duration-500 rounded-sm font-bold"
          >
            <Calendar size={16} />
            Explore Events
          </Link>
        </div>
      </section>

      {/* Why Unwind */}
      <ArtOfStaySection />

      {/* Location */}
      <section className="py-28 bg-white border-t border-gold/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionLabel className="mb-6">Location</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">
              Close Enough to Come Easily.
            </h2>
            <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
              Unwind Karjat is just over an hour and a half from both Mumbai and Pune — close enough for a quick getaway, far enough to feel like a break. Set on the Karjat-Chowk road in Wavarle, surrounded by open greenery.
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4">
                <Car size={18} className="text-gold shrink-0" />
                <p className="font-sans text-sm text-taupe"><span className="text-forest font-bold">~1.5 hrs</span> from Mumbai via the Mumbai-Pune Expressway</p>
              </div>
              <div className="flex items-center gap-4">
                <Car size={18} className="text-gold shrink-0" />
                <p className="font-sans text-sm text-taupe"><span className="text-forest font-bold">~1.5 hrs</span> from Pune via the Mumbai-Pune Expressway</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={18} className="text-gold shrink-0" />
                <p className="font-sans text-sm text-taupe">Check-in at 1:00 PM · Check-out at 11:00 AM</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-gold shrink-0" />
                <p className="font-sans text-sm text-taupe">Karjat - Chowk Rd, behind Baba Dairy, Wavarle, Karjat, Maharashtra 410206</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=18.922485,73.315053"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-forest/90 transition-all rounded-sm"
              >
                <MapPin size={14} />
                Get Directions
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-gold/30 text-gold font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold/5 transition-all rounded-sm"
              >
                Reach Us
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-gold/10">
            <Image src='https://bookonelocal.in/cdn/2026-05-18-120147308-p1.jpg' alt="Unwind Karjat location on Karjat-Chowk Road" fill loading="lazy" className="object-cover" />
          </div>
        </div>
      </section>

      {/* About */}
      <HistorySection />

      {/* Gallery Section with Lightbox */}
      <GallerySection viewAllHref="/gallery" />

      {/* Reviews */}
      <TestimonialsSection />

      {/* FAQ (answers match on-page FAQPage schema) */}
      <FaqSection
        title="Questions, Answered"
        label="Good to Know"
        faqs={faqs}
      />

      {/* Final CTA */}
      <section className="py-28 bg-champagne border-t border-gold/10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel className="justify-center mb-6">Plan Your Visit</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-6">
            Your Weekend Could Be This Simple.
          </h2>
          <p className="font-serif text-taupe text-lg md:text-xl italic max-w-xl mx-auto leading-relaxed mb-12">
            Book your stay, pack light and let Unwind do the rest. We&apos;ll handle the rooms, the food and the good times.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://bookone.io/Unwind-Karjat?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 duration-500 rounded-sm font-bold"
            >
              <Calendar size={16} />
              Book Your Stay
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-forest/90 transition-all rounded-sm"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact */}
      <NewsletterSection />

      <Footer />
    </main>
  );
}
