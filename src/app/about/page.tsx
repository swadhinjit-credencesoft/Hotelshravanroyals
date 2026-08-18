'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

const values = [
  {
    title: 'Personal Attention',
    description: 'No corporate service standards here — just genuine care from the people who built and run this place, day in and day out.'
  },
  {
    title: 'Home-Style Food',
    description: 'Freshly prepared, generous and familiar. Meals are made to be shared around the table, and special dishes are prepared on request.'
  },
  {
    title: 'A Private Setting',
    description: 'An intimate property where the space feels like your own — not a crowded resort. Plenty of open grounds, greenery and quiet corners.'
  },
  {
    title: 'Everything in One Place',
    description: 'Rooms, pool, lawns, dining and experiences under one roof. For families, groups and celebrations, there is no planning or moving around required.'
  }
];

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      <CinematicHero 
        label="About Us"
        title="Built With Heart. Run Like Home."
        tagline="Unwind Karjat is run by the people who built it. A private, comfortable, good-food-and-good-times kind of getaway."
        image='/blog1.png'
      />

      {/* Organization Schema for SEO (E-E-A-T) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Unwind Karjat",
            "description": "A private boutique retreat in Karjat with comfortable rooms, a large pool, in-house dining, outdoor spaces and experiences for families, groups, celebrations and corporate getaways.",
            "url": "https://unwindkarjat.com",
            "logo": "https://unwindkarjat.com/unwindkarjatlogo.png",
            "image": "https://unwindkarjat.com/aboutimg.png",
            "email": "stay@unwindkarjat.com",
            "telephone": "+91919619198839",
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
            "sameAs": [
              "https://www.instagram.com/unwind_karjat"
            ]
          })
        }}
      />

      {/* The People Behind Unwind */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionLabel className="mb-6">The People Behind Unwind</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                Meet Kapil &amp; Savita
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-8 leading-relaxed">
                &ldquo;From Day 1, we have done everything ourselves — from the construction to the daily running of the property.&rdquo;
              </p>
              <div className="space-y-6 font-sans text-base text-taupe/80 leading-loose">
                <p>
                  We are Kapil &amp; Savita, a husband-and-wife team who have always believed that hospitality is about much more than rooms and service. It is about how a place makes people feel.
                </p>
                <p>
                  When we started Unwind, we wanted to create somewhere that felt different from a typical hotel. A place where people could arrive without a schedule, sit down for a good meal, spend an afternoon by the pool, laugh over a game, stay up a little late and simply enjoy being together.
                </p>
                <p>
                  In other words, a place where people could truly unwind.
                </p>
                <p>
                  Explore our <Link href="/rooms" className="text-gold hover:underline">rooms</Link>, our <Link href="/experiences" className="text-gold hover:underline">experiences</Link> and our <Link href="/dining" className="text-gold hover:underline">dining</Link>, and you will see what we mean.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden border border-gold/10"
            >
              <Image
                src='https://bookonelocal.in/cdn/2026-05-18-120147308-p1.jpg'
                alt="Kapil & Savita at Unwind Karjat"
                fill
                loading="lazy"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Than a Business */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="justify-center mb-6">More Than a Business</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-12">It Became Personal</h2>
            <GoldDivider className="justify-center mb-12" />
            <div className="space-y-8 font-serif text-lg text-taupe leading-relaxed italic">
              <p>
                Over time, Unwind has become a very personal part of our lives. We have watched families return year after year. We have celebrated birthdays, anniversaries, reunions and corporate milestones with our guests. We have seen first-time visitors arrive as strangers and leave feeling like they have discovered a place they want to come back to.
              </p>
              <p>
                And somewhere along the way, the people who make Unwind what it is became just as important to us.
              </p>
              <p>
                Many members of our team have been with us since Day One. They have seen the property evolve, been part of its challenges and its celebrations, and grown alongside us. That shared journey has created something we are particularly proud of — a genuine bond between the people who run Unwind and the people who look after our guests every day.
              </p>
              <p className="text-forest font-bold not-italic">
                For us, that matters. Because genuine hospitality cannot simply be taught through a manual. It comes from people who care about the place they work in and the guests they welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Way of Hospitality */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel className="mb-6">Our Way of Hospitality</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                Comfort Over Formality
              </h2>
              <GoldDivider className="mb-10" />
              <div className="space-y-6 font-sans text-base text-taupe/80 leading-loose">
                <p>
                  We don&apos;t want Unwind to feel formal. We want you to feel comfortable. We want our food to feel generous, our service to feel genuine and our team to feel approachable.
                </p>
                <p>
                  We want families to feel at ease, children to have fun, friends to spend time together and couples to find a little space of their own.
                </p>
                <p>
                  There will always be things we can improve — and we are constantly working on them. But the one thing we will never lose sight of is why we started.
                </p>
                <p className="text-forest font-bold not-italic">
                  To create a place where people can stay well, eat well and spend time well.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden border border-gold/10">
                <Image src='/inhouse.png' alt="Dining at Unwind Karjat" fill loading="lazy" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden border border-gold/10">
                <Image src='/Pool.png' alt="Pool at Unwind Karjat" fill loading="lazy" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden border border-gold/10">
                <Image src='/bbq.jpeg' alt="BBQ at Unwind Karjat" fill loading="lazy" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden border border-gold/10">
                <Image src='/outdoorspaces.jpeg' alt="Outdoor spaces at Unwind Karjat" fill loading="lazy" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Staying With Us Means */}
      <section className="py-24 bg-forest text-ivory">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <SectionLabel light className="justify-center mb-8">What Staying With Us Means</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic mb-12">Simple. Honest. Comfortable.</h2>
            <p className="font-serif text-xl italic text-ivory/70 mb-16 leading-relaxed">
              Unwind was built on a simple idea: a place to slow down, spend time with your people and simply enjoy the moment — with good food and good times as part of the deal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="border border-ivory/20 bg-forest/50 p-8 hover:bg-ivory/10 transition-colors duration-500"
                >
                  <h3 className="font-serif text-2xl italic text-gold mb-4">
                    {item.title}
                  </h3>
                  <div className="h-px bg-gold/30 w-12 mb-4" />
                  <p className="font-sans text-sm text-ivory/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From Our Family to Yours */}
      <section className="py-24 bg-champagne">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <SectionLabel className="justify-center mb-6">From Our Family to Yours</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-12">Why Guests Come Back</h2>
          <GoldDivider className="justify-center mb-12" />
          <div className="space-y-8 font-serif text-xl text-taupe leading-relaxed italic max-w-3xl mx-auto">
            <p>
              Perhaps that is why many of our guests come back. Not just for the rooms or the pool or the food.
            </p>
            <p className="text-forest font-bold not-italic">
              They come back for the feeling.
            </p>
            <p>
              And that, more than anything else, is what we hope Unwind continues to be — a place that feels familiar even when it is your first visit.
            </p>
            <div className="pt-8 border-t border-gold/20">
              <p className="font-display text-3xl italic text-forest">Come as guests.</p>
              <p className="font-display text-3xl italic text-gold mt-2">Leave feeling like you have been somewhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-video w-full border border-gold/10 overflow-hidden">
              <Image
                src='/images/exterior3.jpeg'
                alt="The grounds of Unwind Karjat in Karjat"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel className="mb-6">Location</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Close Enough to Come Easily.</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-8">
                Unwind Karjat is just over an hour and a half from both Mumbai and Pune — close enough for a quick getaway, far enough to feel like a break. Set on the Karjat-Chowk road in Wavarle, surrounded by open greenery.
              </p>
              <div className="space-y-4 mb-10">
                <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-bold">Address</p>
                <p className="font-serif text-forest text-xl italic">{siteConfig.address}</p>
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
                  Driving Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-forest text-center text-ivory border-t border-gold/10">
         <div className="max-w-3xl mx-auto px-6">
            <SectionLabel light className="justify-center mb-6">Plan Your Visit</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic mb-8">Your Weekend Could Be This Simple.</h2>
            <p className="font-serif text-xl italic text-ivory/70 mb-12">
              Book your stay, pack light and let Unwind do the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://bookone.io/Unwind-Karjat?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 duration-500 rounded-sm font-bold">
                 <Calendar size={16} />
                 Book Your Stay
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-ivory/30 text-ivory font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-ivory/10 transition-all rounded-sm">
                 <MessageCircle size={16} />
                 WhatsApp Us
              </a>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
