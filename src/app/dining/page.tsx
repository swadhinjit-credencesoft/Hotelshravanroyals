// import Image from 'next/image';
import DiningSection from '@/components/sections/DiningSection';
import type { Metadata } from 'next';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { Coffee } from 'lucide-react';
// import { Coffee, Flame, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rooftop Restaurant & Dining',
  description: 'Best rooftop restaurant in Purnea at Hotel Surya Bella Casa near Bus Stand. Multi-cuisine dining with Indian, Tandoor, Mughlai, Asian & Continental food. Pure veg & non-veg options.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/dining',
  },
  keywords: [
    'restaurant in purnea',
    'rooftop restaurant purnea',
    'best food in purnia',
    'multi cuisine restaurant purnea',
    'hotel dining purnia',
    'pure vegetarian restaurant purnea',
    'non veg restaurant near bus stand purnea',
  ],
}

export default function DiningPage() {
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
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Dining',
                item: 'https://hotelsuryabellacasa.com/dining',
              },
            ],
          })
        }}
      />

      <CinematicHero 
        label="Best Rooftop Restaurant in Purnea - Family Restaurant Near Bus Stand"
        title="Best Restaurant in Purnea - Rooftop Dining & Multi Cuisine"
        tagline="Looking for the best restaurant in Purnea? Enjoy rooftop dining, family restaurant near Bus Stand serving Indian, Tandoor, Mughlai, Asian & Continental cuisine. Best dinner restaurant in Purnea - Hotel Surya Bella Casa."
        image='https://bookonelocal.in/cdn/IMG_7424.mp4'
      />
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Rooftop Restaurant - Hotel Surya Bella Casa",
            "description": "Multi-cuisine rooftop restaurant at Hotel Surya Bella Casa in Purnea. Serving Indian, Tandoor, Mughlai, Asian, and Continental dishes. Pure vegetarian environment on property.",
            "url": "https://hotelsuryabellacasa.com/dining",
            "image": "https://bookonelocal.in/cdn/IMG_3808.avif",
            "telephone": "+919835923601",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
              "addressLocality": "Purnia",
              "addressRegion": "Bihar",
              "postalCode": "854301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.7771,
              "longitude": 87.4753
            },
            "servesCuisine": ["Indian", "Tandoor", "Mughlai", "Asian", "Continental"],
            "priceRange": "₹300 - ₹800",
            "acceptsReservations": "True",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "23:00" }
            ],
            "hasMenu": {
              "@type": "Menu",
              "name": "Multi-Cuisine Menu",
              "description": "Indian, Tandoor, Mughlai, Asian, and Continental dishes"
            },
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.5",
              "bestRating": "5"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best rooftop restaurant in Purnea?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa has the best rooftop restaurant in Purnea, located near Bus Stand opposite Vikass Market."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a good family restaurant in Purnea near Bus Stand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Hotel Surya Bella Casa is a family restaurant in Purnea near Bus Stand offering pure vegetarian food, Indian, Tandoor, Mughlai, Asian and Continental cuisine."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best dinner restaurants in Purnea?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa's rooftop restaurant is one of the best dinner restaurants in Purnea, serving multi cuisine options in a family-friendly atmosphere."
                }
              },
              {
                "@type": "Question",
                "name": "Do you have a non-veg restaurant in Purnea?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Hotel Surya Bella Casa serves both veg and non-veg options including special Fish and Mutton dishes prepared upon request at our restaurant in Purnea."
                }
              }
            ]
          })
        }}
      />

      <section className="py-24 bg-cream text-center">
        <div className="max-w-4xl mx-auto px-6">
           <SectionLabel className="justify-center mb-8">The Philosophy</SectionLabel>
           <h2 className="font-serif text-3xl md:text-5xl italic text-forest mb-8">
             &ldquo;Locally Sourced. Lovingly Crafted.&rdquo;
           </h2>
           <p className="font-sans text-lg text-taupe leading-relaxed">
             Our chefs blend authentic Bihari techniques with global inspirations. Enjoy a diverse range of Indian, Tandoor, Mughlai, Asian, and Continental cuisine. <span className="text-gold font-bold">Special Fish and Mutton dishes are prepared upon request</span> to ensure maximum freshness.
           </p>
        </div>
      </section>

      {/* Restaurant Content */}
      <section className="py-16 bg-white border-t border-gold/10">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8 text-center">
            Rooftop Restaurant & Dining in Purnea Near Bus Stand
          </h2>
          <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose max-w-3xl mx-auto">
            <p>
              <strong>Hotel Surya Bella Casa</strong> offers one of the finest rooftop dining experiences in Purnia, 
              located just steps from the main <strong>Bus Stand</strong> and opposite <strong>Vikass Market</strong>. 
              Our multi-cuisine restaurant serves a wide array of Indian, Tandoor, Mughlai, Asian, and Continental 
              dishes prepared by experienced chefs.
            </p>
            <p>
              Whether you are looking for a family dinner, a business lunch, or a romantic evening, 
              our rooftop setting provides a relaxed atmosphere with views of the Purnia cityscape. 
              We take pride in using fresh, locally sourced ingredients to craft every dish.
            </p>
            <p>
              Special <strong>Fish and Mutton</strong> dishes are prepared upon advance request to ensure 
              maximum freshness and quality. Our chefs are happy to customize spice levels and preparations 
              according to your preferences. For guests who prefer pure vegetarian meals, we offer an 
              extensive selection of vegetarian Indian and continental options.
            </p>
            <p>
              <strong>In-room dining</strong> is also available for guests who prefer the comfort of their rooms. 
              Each room at Hotel Surya Bella Casa is equipped with a hot water kettle, complimentary tea/coffee 
              supplies, and a mini-fridge for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Cuisine Cards */}
      <section className="py-12 bg-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Indian', 'Tandoor', 'Mughlai', 'Asian', 'Continental'].map((item) => (
              <div key={item} className="bg-white p-8 border border-gold/10 text-center hover:bg-gold/5 transition-all group">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-taupe group-hover:text-gold transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      {/* <section className="py-24 bg-white border-y border-gold/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Dining Packages</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Meal Plans & Add-ons</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 border border-gold/20 shadow-sm rounded-sm hover:shadow-warm-lg transition-all bg-[#fdfcf8] group">
              <UtensilsCrossed className="text-gold mb-8 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-display text-3xl italic text-forest mb-4">All-Inclusive Meal Plan</h3>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-8">Breakfast, Lunch, High Tea & Dinner</p>
              <p className="font-serif text-taupe mb-10 leading-relaxed text-lg">
                Enjoy a hassle-free stay with our comprehensive meal plan covering all major meals and evening snacks. Choose from our extensive buffet or ÃƒÂ  la carte menu.
              </p>
              <div className="text-forest font-serif text-4xl">₹2,000 <span className="text-sm font-sans uppercase tracking-[0.15em] opacity-50">/ person / day</span></div>
            </div>

            <div className="p-10 border border-gold/20 shadow-sm rounded-sm hover:shadow-warm-lg transition-all bg-[#fdfcf8] group">
              <Flame className="text-red-500/80 mb-8 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-display text-3xl italic text-forest mb-4">BBQ & Bonfire Package</h3>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-8">Evening Add-on Experience</p>
              <p className="font-serif text-taupe mb-10 leading-relaxed text-lg">
                Elevate your evening with a private bonfire setup and a live BBQ grill featuring marinated vegetables, paneer, and meats (<span className="italic">Fish/Mutton on request</span>).
              </p>
              <div className="text-forest font-serif text-4xl">₹1,500 <span className="text-sm font-sans uppercase tracking-[0.15em] opacity-50">/ couple</span></div>
            </div>
          </div>
        </div>
      </section> */}

      <DiningSection />

      {/* In-Room Amenities Callout */}
      <section className="py-20 bg-forest text-center text-ivory">
        <div className="max-w-2xl mx-auto px-6">
          <Coffee className="text-gold mx-auto mb-8" size={40} />
          <h2 className="font-display text-4xl italic mb-6">In-Room Convenience</h2>
          <p className="font-serif text-ivory/80 leading-[1.8] mb-10 text-lg italic">
            For your absolute comfort, every room at Hotel Surya Bella Casa is equipped with a hot water kettle, complimentary tea/coffee supplies, and a mini-fridge for your personal use.
          </p>
          <GoldDivider className="justify-center" />
        </div>
      </section>

    </main>
  );
}
