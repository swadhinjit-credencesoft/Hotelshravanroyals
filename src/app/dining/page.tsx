import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
      
      <section className="py-24 bg-cream text-center">
        <div className="max-w-4xl mx-auto px-6">
           <SectionLabel className="justify-center mb-8">The Philosophy</SectionLabel>
           <h2 className="font-serif text-3xl md:text-5xl italic text-forest mb-8">
             &ldquo;Locally Sourced. Lovingly Crafted.&rdquo;
           </h2>
           <p className="font-sans text-lg text-taupe leading-relaxed">
             Our chefs blend authentic Maharashtrian techniques with global inspirations. Enjoy a diverse range of Indian, Tandoor, Mughlai, Asian, and Continental cuisine. Special Fish and Mutton dishes are prepared upon request to ensure maximum freshness.
           </p>
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
            <div className="p-8 border border-gold/20 shadow-sm rounded-sm hover:shadow-warm-lg transition-shadow bg-cream/50">
              <UtensilsCrossed className="text-gold mb-6" size={32} />
              <h3 className="font-display text-2xl italic text-forest mb-2">All-Inclusive Meal Plan</h3>
              <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-6">Breakfast, Lunch, High Tea & Dinner</p>
              <p className="font-serif text-taupe mb-8 leading-relaxed">
                Enjoy a hassle-free stay with our comprehensive meal plan covering all major meals and evening snacks. Choose from our extensive buffet or à la carte menu.
              </p>
              <div className="text-forest font-serif text-3xl mb-2">₹2,000 <span className="text-sm font-sans uppercase tracking-widest opacity-60">/ person / day</span></div>
            </div>

            <div className="p-8 border border-gold/20 shadow-sm rounded-sm hover:shadow-warm-lg transition-shadow bg-cream/50">
              <Flame className="text-red-500/80 mb-6" size={32} />
              <h3 className="font-display text-2xl italic text-forest mb-2">BBQ & Bonfire Package</h3>
              <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-6">Evening Add-on</p>
              <p className="font-serif text-taupe mb-8 leading-relaxed">
                Elevate your evening with a private bonfire setup and a live BBQ grill featuring marinated vegetables, paneer, and meats (Fish/Mutton on request).
              </p>
              <div className="text-forest font-serif text-3xl mb-2">₹1,500 <span className="text-sm font-sans uppercase tracking-widest opacity-60">/ couple</span></div>
            </div>
          </div>
        </div>
      </section>

      <DiningSection />

      {/* In-Room Amenities Callout */}
      <section className="py-16 bg-forest text-center text-ivory">
        <div className="max-w-2xl mx-auto px-6">
          <Coffee className="text-gold mx-auto mb-6" size={32} />
          <h2 className="font-display text-3xl italic mb-4">In-Room Convenience</h2>
          <p className="font-serif text-ivory/80 leading-relaxed mb-8">
            For your comfort, every room at Unwind Karjat is equipped with a hot water kettle, complimentary tea/coffee supplies, and a mini-fridge for your personal use.
          </p>
          <GoldDivider className="justify-center" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
