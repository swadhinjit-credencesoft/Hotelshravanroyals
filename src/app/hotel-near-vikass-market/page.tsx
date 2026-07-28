import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { MapPin, Star, Calendar, ArrowRight } from 'lucide-react';

const marketAmenities: AmenityItem[] = [
  { icon: 'ShoppingBag', title: 'Across from Vikass Market', description: 'Directly opposite Vikass Market. Shop for fabrics, garments, and daily essentials without any commute.' },
  { icon: 'Store', title: 'Local Sweets & Dining', description: 'Famous Purnea sweet shops and restaurants are within walking distance from the hotel entrance.' },
  { icon: 'Coffee', title: 'Tea & Snack Service', description: 'Complimentary morning tea and packaged snacks available at the front desk throughout the day.' },
  { icon: 'MapPin', title: 'Bhatta Bazar Connectivity', description: 'Just a quick rickshaw ride to Bhatta Bazar, Purnea&apos;s oldest wholesale and retail commercial district.' },
  { icon: 'Calendar', title: 'Business Meeting Access', description: 'Proximity to local businesses and banks makes Vikass Market area a preferred base for commercial travelers.' },
  { icon: 'Star', title: 'Evening Shopping Walks', description: 'The market area comes alive in the evenings. Step out for a relaxed shopping walk right opposite the hotel.' },
];

export const metadata = {
  title: 'Hotel Near Vikass Market Purnea',
  description: 'Looking for a hotel near Vikass Market Purnea? Hotel Surya Bella Casa is opposite Vikass Market in Suryalok Complex. Free WiFi, parking, AC rooms.',
  keywords: [
    'hotel near vikass market purnea', 'hotel opposite vikass market',
    'hotel near vikass market bihar', 'best hotel opposite vikass market Purnea',
    'AC rooms near vikass market', 'stay near vikass market Purnea',
    'budget hotel opposite vikass market', 'Suryalok Complex hotel near market',
    'hotel near shopping area Purnea', 'hotel near bhatta bazar Purnea',
    'hotel near bus stand purnea vikass market',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/hotel-near-vikass-market',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Hotel Near Vikass Market Purnea | Opposite Vikass Market',
    description: 'Best hotel opposite Vikass Market Purnea. Located near Bus Stand with free WiFi, parking, AC rooms. Perfect for shopping and business visits. Book direct for best rates.',
    url: 'https://hotelsuryabellacasa.com/hotel-near-vikass-market',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Hotel Near Vikass Market Purnea - Best Hotel Opposite Vikass Market Near Bus Stand - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Near Vikass Market Purnea | Opposite Vikass Market',
    description: 'Best hotel opposite Vikass Market Purnea near Bus Stand. Free WiFi, parking, AC. Book now for best rates.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function VikassMarketLandingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Hotel Near Vikass Market", "item": "https://hotelsuryabellacasa.com/hotel-near-vikass-market" }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Best Hotel Opposite Vikass Market Purnea - Near Bus Stand"
        title="Hotel Near Vikass Market Purnea - Free WiFi, Parking & AC Rooms"
        tagline="Looking for a hotel near Vikass Market Purnea? Hotel Surya Bella Casa is located directly opposite Vikass Market in Suryalok Complex, near Bus Stand. Enjoy free WiFi, parking, AC rooms, and 24/7 service at the best hotel opposite Vikass Market."
        image='https://bookonelocal.in/cdn/IMG_3739.avif'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Commercial Access</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Stay in the Commercial Heart of Purnea Opposite Vikass Market
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Vikass Market is one of Purnea&apos;s most active mercantile and consumer corridors. Whether you are visiting Purnea for a business deal, wholesale shopping, or leisure, staying at a <strong>hotel near Vikass Market</strong> puts you right in the center of the action.
              </p>
              <p>
                <strong>Hotel Surya Bella Casa</strong> is located in Suryalok Complex, directly opposite Vikass Market. This makes it incredibly easy to manage <Link href="/business-hotel-in-Purnea" className="text-gold hover:underline">business meetings</Link>, retail trips, or <Link href="/family-hotel-in-Purnea" className="text-gold hover:underline">family events</Link> without having to spend hours traveling back and forth through traffic. Browse our <Link href="/rooms" className="text-gold hover:underline">room categories</Link> and <Link href="/offers" className="text-gold hover:underline">special offers</Link>.
              </p>
              <p>
                Our rooms are peaceful sanctuaries that block out the urban hustle while keeping you connected to Purnea&apos;s finest sweet shops, local businesses, and restaurants.
              </p>
            </div>

            <div className="mt-12 bg-white p-8 border border-gold/10 rounded-sm">
              <h2 className="font-display text-2xl italic text-forest mb-4">Prime Commercial Access</h2>
              <ul className="space-y-4 font-sans text-base text-taupe">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Opposite Vikass Market:</strong> Literally across the street, letting you shop or hold meetings at any time of the day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Easy Parking:</strong> Safe on-site parking at Suryalok Complex so you can securely leave your vehicle while exploring the market.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Bhatta Bazar:</strong> Easy rickshaw connectivity to Bhatta Bazar for deeper commercial trade and local dining.</span>
                </li>
              </ul>
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
              <h3 className="font-display text-3xl italic mb-6">Stay Near the Market</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Enjoy comfortable accommodations with free Wi-Fi, elevator/lift access, and continuous power backup opposite Vikass Market.
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
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Places to Stay in Purnea</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/hotel-near-Purnea-bus-stand', label: 'Hotel Near Bus Stand' },
            { href: '/family-hotel-in-Purnea', label: 'Family Hotel in Purnea' },
            { href: '/business-hotel-in-Purnea', label: 'Business Hotel in Purnea' },
            { href: '/budget-hotel-in-Purnea', label: 'Budget Hotel in Purnea' },
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

      <LuxuryAmenities label="Market-Facing Convenience" heading="Shop, Stay, Repeat" amenities={marketAmenities} />
    </main>
  );
}
