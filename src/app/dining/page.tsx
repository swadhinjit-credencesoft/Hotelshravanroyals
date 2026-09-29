import Image from 'next/image';
import DiningSection from '@/components/sections/DiningSection';
import type { Metadata } from 'next';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Organic Farm Dining & Barbeque Evenings | The Divine Oasis, Ajodhya Hill',
  description: 'Experience farm-to-table organic veg thali, barbeque under the open sky, and drinks with hors d\'oeuvres at The Divine Oasis resort atop Ajodhya Hill, Purulia.',
  alternates: {
    canonical: 'https://thedivineoasisresort.com/dining',
  },
  keywords: [
    'organic farm dining Purulia',
    'farm to table restaurant Purulia',
    'vegetarian restaurant Ajodhya Hill',
    'barbeque resort Purulia',
    'best dinner place Purulia',
    'family dining Purulia',
    'hilltop restaurant West Bengal',
    'vegetarian thali Purulia',
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
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Dining',
                item: 'https://thedivineoasisresort.com/dining',
              },
            ],
          })
        }}
      />

      <CinematicHero 
        label="Organic Farm Dining & Barbeque Evenings at Ajodhya Hill"
        title="Farm-to-Table Dining at The Divine Oasis, Purulia"
        tagline="Experience organic farm-to-table veg thali, barbeque under the open sky, and drinks with hors d&apos;oeuvres at our hilltop seating area. Pure vegetarian resort dining in Purulia."
        image='https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg'
      />
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "The Divine Oasis - Farm-to-Table Dining",
            "description": "Organic farm-to-table vegetarian thali, barbeque evenings, and drinks at the hilltop seating area. Pure vegetarian resort dining at The Divine Oasis, Ajodhya Hill, Purulia.",
            "url": "https://thedivineoasisresort.com/dining",
            "image": "https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg",
            "telephone": "+91990398950",
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
            "servesCuisine": ["Vegetarian Thali", "Organic Farm-to-Table", "Barbeque", "Indian"],
            "priceRange": "â‚¹300 - â‚¹800",
            "acceptsReservations": "True",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "22:00" }
            ],
            "hasMenu": {
              "@type": "Menu",
              "name": "Farm-to-Table Vegetarian Menu",
              "description": "Organic veg thali, seasonal farm vegetables, local rice, Bengali flavours"
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
                "name": "What dining options are available at The Divine Oasis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Divine Oasis offers organic farm-to-table vegetarian thali, barbeque evenings at our barbeque stand, and drinks with hors d&apos;oeuvres at our scenic hilltop seating area. All meals are pure vegetarian."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a restaurant at The Divine Oasis Ajodhya Hill?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, The Divine Oasis features farm-to-table dining with fresh organic vegetables from our own farm, served in our hilltop dining area with forest views."
                }
              },
              {
                "@type": "Question",
                "name": "Do you serve non-vegetarian food at The Divine Oasis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, The Divine Oasis is a pure vegetarian resort. We serve fresh organic veg thali and vegetarian barbeque options. Non-vegetarian food is not permitted on the property."
                }
              },
              {
                "@type": "Question",
                "name": "What are the dining hours at The Divine Oasis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Breakfast 8:00 â€“ 11:00 AM, Lunch 12:30 â€“ 3:30 PM, Dinner 7:30 â€“ 10:30 PM. Barbeque evenings 6:30 PM â€“ 10:00 PM (weather permitting)."
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
             &ldquo;From Our Farm, To Your Table.&rdquo;
           </h2>
           <p className="font-sans text-lg text-taupe leading-relaxed">
             Our kitchen crafts every meal using organic vegetables grown right here at The Divine Oasis. Savour seasonal farm produce, local rice, and traditional Bengali flavours in our beloved veg thali, served fresh daily in our hilltop dining area with forest views.
           </p>
        </div>
      </section>

      {/* Restaurant Content */}
      <section className="py-16 bg-white border-t border-gold/10">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8 text-center">
            Farm-to-Table Dining & Barbeque Evenings at Ajodhya Hill
          </h2>
          <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose max-w-3xl mx-auto">
            <p>
              <strong>The Divine Oasis</strong> offers a unique dining experience atop Ajodhya Hill, 
              where the forest meets the farm. Our organic farm produces the vegetables that grace your plate daily â€” 
              fresh, seasonal, and completely vegetarian.
            </p>
            <p>
              Enjoy our signature veg thali with locally sourced ingredients, or gather around the barbeque stand 
              for memorable evenings under the starlit sky. Our scenic seating area offers drinks and hors d&apos;oeuvres 
              with panoramic views of the Ajodhya Hills & Forest Reserve.
            </p>
            <p>
              <strong>In-cottage dining</strong> is also available for guests who prefer the comfort of their cottages. 
              Each cottage at The Divine Oasis comes with complimentary tea/coffee supplies and a mini-fridge for your convenience.
            </p>
          </div>
        </div>
      </section>

{/* Cuisine Cards */}
      <section className="py-12 bg-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Organic Veg Thali', image: 'https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg' },
              { name: 'Barbeque Evenings', image: 'https://bookonelocal.in/cdn/2026-05-13-064516081-WhatsApp Image 2026-05-11 at 15.42.12.jpg' },
              { name: 'Drinks & Hors d\'oeuvres', image: 'https://bookonelocal.in/cdn/2026-05-13-064459381-WhatsApp Image 2026-05-11 at 15.42.11.jpg' },
              { name: 'Farm-to-Table', image: 'https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.13 (1).jpg' },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-gold/10 overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} at The Divine Oasis — Ajodhya Hill, Purulia`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="p-6 font-sans text-[10px] uppercase tracking-[0.2em] text-center text-taupe group-hover:text-gold transition-colors">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiningSection />

      {/* In-Cottage Amenities Callout */}
      <section className="py-20 bg-forest text-center text-ivory">
        <div className="max-w-2xl mx-auto px-6">
          <Coffee className="text-gold mx-auto mb-8" size={40} />
          <h2 className="font-display text-4xl italic mb-6">In-Cottage Convenience</h2>
          <p className="font-serif text-ivory/80 leading-[1.8] mb-10 text-lg italic">
            For your absolute comfort, every cottage at The Divine Oasis is equipped with a hot water kettle, complimentary tea/coffee supplies, and a mini-fridge for your personal use.
          </p>
          <GoldDivider className="justify-center" />
        </div>
      </section>

    </main>
  );
}


