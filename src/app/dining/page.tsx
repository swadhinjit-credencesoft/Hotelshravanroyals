import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import DiningSection from '@/components/sections/DiningSection';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { Coffee, Flame, UtensilsCrossed } from 'lucide-react';

export default function DiningPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Culinary Experience"
        title="Flavors of Karjat"
        tagline="From rustic local delicacies to multi-cuisine feasts, experience dining that satisfies the soul."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2400&q=95"
      />
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "The Dining Hall at Unwind Karjat",
            "servesCuisine": ["Indian", "Tandoor", "Mughlai", "Asian", "Continental"],
            "description": "Authentic dining experience in Karjat featuring local specialties and global favorites.",
            "menu": {
              "@type": "Menu",
              "name": "Main Menu",
              "hasMenuSection": [
                { "@type": "MenuSection", "name": "Local Specialties", "description": "Fish and Mutton on request" },
                { "@type": "MenuSection", "name": "Global Classics", "description": "Asian and Continental favorites" }
              ]
            }
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
             Our chefs blend authentic Maharashtrian techniques with global inspirations. Enjoy a diverse range of Indian, Tandoor, Mughlai, Asian, and Continental cuisine. <span className="text-gold font-bold">Special Fish and Mutton dishes are prepared upon request</span> to ensure maximum freshness.
           </p>
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
      <section className="py-24 bg-white border-y border-gold/10">
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
                Enjoy a hassle-free stay with our comprehensive meal plan covering all major meals and evening snacks. Choose from our extensive buffet or à la carte menu.
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
      </section>

      {/* Photo Gallery - Ambient Photography */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Visual Feast</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Ambient Dining Scenes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            <div className="relative overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=95" alt="Warm ambient dining atmosphere" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="relative overflow-hidden group row-span-2">
               <Image src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=95" alt="Chef preparing local delicacies" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="relative overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=95" alt="Gourmet plated dish" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="relative overflow-hidden group row-span-2">
               <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=95" alt="Rustic grill setup" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="relative overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=95" alt="Outdoor dining at dusk" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="relative overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=95" alt="Refreshing cocktails and drinks" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
        </div>
      </section>

      <DiningSection />

      {/* In-Room Amenities Callout */}
      <section className="py-20 bg-forest text-center text-ivory">
        <div className="max-w-2xl mx-auto px-6">
          <Coffee className="text-gold mx-auto mb-8" size={40} />
          <h2 className="font-display text-4xl italic mb-6">In-Room Convenience</h2>
          <p className="font-serif text-ivory/80 leading-[1.8] mb-10 text-lg italic">
            For your absolute comfort, every room at Unwind Karjat is equipped with a hot water kettle, complimentary tea/coffee supplies, and a mini-fridge for your personal use.
          </p>
          <GoldDivider className="justify-center" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
