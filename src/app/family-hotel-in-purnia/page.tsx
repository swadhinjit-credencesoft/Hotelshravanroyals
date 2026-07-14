import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { Star, Calendar, Shield, Users, Heart, ArrowRight } from 'lucide-react';

const familyAmenities: AmenityItem[] = [
  { icon: 'Users', title: 'Spacious Family Rooms', description: 'Room configurations that comfortably accommodate couples with children. Extra bedding available on request.' },
  { icon: 'Baby', title: 'Child-Friendly Environment', description: 'Safe, alcohol-free premises with attentive staff who understand family travel needs.' },
  { icon: 'Shield', title: 'Secure Premises', description: 'CCTV-monitored common areas and secure card-access room locks for total family safety.' },
  { icon: 'Heart', title: 'Pure Vegetarian Ethos', description: 'Non-vegetarian food is not permitted on premises, ensuring a pure and respectful atmosphere for all families.' },
  { icon: 'Utensils', title: 'Food Delivery Coordination', description: 'We coordinate with top-rated pure-veg local restaurants via Swiggy and Zomato for doorstep meals.' },
  { icon: 'ArrowUpCircle', title: 'Elevator for Elder Access', description: 'Modern lift access ensures elderly parents and guests with mobility needs can move with complete ease.' },
];

export const metadata = {
  title: 'Family Hotel in Purnia',
  description: 'Looking for a safe family hotel in Purnia? Hotel Surya Bella Casa offers spacious family rooms, lift access, CCTV security, pure vegetarian environment near Bus Stand. Best family hotel near Vikass Market. Book direct.',
  keywords: [
    'family hotel in purnia', 'family hotel in purnea', 'safe hotel purnea families',
    'family friendly hotel purnia bihar', 'best family hotel near bus stand purnia',
    'pure vegetarian hotel purnia', 'hotel with elevator for families purnia',
    'CCTV secure hotel for families purnia', 'hotel for couples and children purnia',
    'family stay near vikass market purnia', 'hotel with lift access purnia',
    'safe hotel for women purnia', 'family accommodation purnia bihar',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/family-hotel-in-purnia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Family Hotel in Purnia | Safe Stay Near Bus Stand Purnea',
    description: 'Best family hotel near Bus Stand Purnea. Spacious rooms, lift access, CCTV security, pure vegetarian. Book your family stay at Hotel Surya Bella Casa now.',
    url: 'https://hotelsuryabellacasa.com/family-hotel-in-purnia',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Family Hotel in Purnia - Safe Stay Near Bus Stand - Hotel Surya Bella Casa Purnea' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Hotel in Purnia | Stay Near Vikass Market',
    description: 'Best family hotel in Purnia with spacious rooms, elevator access, CCTV security, pure vegetarian environment. Near Bus Stand and Vikass Market.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function FamilyHotelLandingPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hotelsuryabellacasa.com" },
              { "@type": "ListItem", "position": 2, "name": "Family Hotel in Purnia", "item": "https://hotelsuryabellacasa.com/family-hotel-in-purnia" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Hotel Surya Bella Casa",
            "description": "Family hotel in Purnia with spacious rooms, elevator access, CCTV security, and pure vegetarian environment. Safe stay near Bus Stand and Vikass Market.",
            "url": "https://hotelsuryabellacasa.com",
            "telephone": "+919835923601",
            "email": "bellacasa561@gmail.com",
            "image": "https://bookonelocal.in/cdn/IMG_3815.avif",
            "logo": "https://hotelsuryabellacasa.com/suryabellacasalogo.png",
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
            "hasMap": "https://www.google.com/maps/place/?cid=8931275976043074034",
            "priceRange": "₹1,500 - ₹3,000",
            "checkinTime": "12:00",
            "checkoutTime": "12:00",
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Elevator", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "CCTV Security", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Best Family Hotel Near Bus Stand Purnea - Safe & Comfortable Stay"
        title="Family Hotel in Purnia - Spacious Rooms with Lift & CCTV Security"
        tagline="Planning a family stay in Purnia? Hotel Surya Bella Casa offers spacious family rooms with lift access, CCTV security, and pure vegetarian environment. Located near Bus Stand and Vikass Market. The safest family hotel in Purnea."
        image='https://bookonelocal.in/cdn/IMG_3764.avif'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Family Comfort</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              A Warm, Safe & Comfortable Haven for Families in Purnia
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Traveling with family, children, or elderly parents requires a hotel that understands care, safety, and hygiene. <strong>Hotel Surya Bella Casa</strong> prides itself on being Purnia&apos;s premier family-friendly stay.
              </p>
              <p>
                We focus on offering a peaceful, alcohol-free, and wholesome environment where families can truly relax. Our pure vegetarian guidelines guarantee a respectful atmosphere, and we provide seamless <Link href="/dining" className="text-gold hover:underline">food delivery coordination</Link> from top-rated local restaurants. See our <Link href="/rooms" className="text-gold hover:underline">spacious family rooms</Link> and <Link href="/offers" className="text-gold hover:underline">family packages</Link> for the best value.
              </p>
              <p>
                Equipped with modern amenities including air conditioning, flat screen TVs, geysers, and most importantly—a <strong>modern lift/elevator</strong>, we ensure elder family members face no difficulty during their stay.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Shield className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">24/7 Security</h3>
                <p className="font-sans text-sm text-taupe/70">Continuous monitoring, backup power, and attentive staff ensuring total family safety.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Users className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Spacious Rooms</h3>
                <p className="font-sans text-sm text-taupe/70">Super Deluxe and Deluxe AC rooms offering enough space for couples and kids.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Heart className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Pure Veg Ethos</h3>
                <p className="font-sans text-sm text-taupe/70">A completely pure and peaceful local family environment without any disruption.</p>
              </div>
            </div>
          </div>

          <div className="bg-forest text-ivory p-8 border border-gold/20 flex flex-col justify-between h-fit rounded-sm shadow-warm-lg">
            <div>
              <div className="flex items-center gap-1 mb-4 text-gold">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <h3 className="font-display text-3xl italic mb-6">Plan Your Family Stay</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Reserve well-appointed family rooms with lift access and dedicated concierge services near the Bus Stand.
              </p>
            </div>
            
            <a 
              href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-light transition-all rounded-sm font-bold"
            >
              <Calendar size={14} />
              Book Now Online
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Also Explore</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Options for Your Purnia Visit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/hotel-near-purnia-bus-stand', label: 'Hotel Near Bus Stand' },
            { href: '/hotel-near-vikass-market', label: 'Hotel Near Vikass Market' },
            { href: '/business-hotel-in-purnia', label: 'Business Hotel in Purnia' },
            { href: '/budget-hotel-in-purnia', label: 'Budget Hotel in Purnia' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 bg-white p-5 border border-gold/10 rounded-sm hover:border-gold/40 transition-all shadow-sm"
            >
              <span className="font-sans text-sm text-forest/80 group-hover:text-gold transition-colors">{item.label}</span>
              <ArrowRight size={14} className="text-gold ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      <LuxuryAmenities label="Family-First Amenities" heading="Thoughtful Care for Every Member" amenities={familyAmenities} />
    </main>
  );
}
