import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import { MapPin, Star, Calendar } from 'lucide-react';

const marketAmenities: AmenityItem[] = [
  { icon: 'ShoppingBag', title: 'Across from Vikass Market', description: 'Directly opposite Vikass Market. Shop for fabrics, garments, and daily essentials without any commute.' },
  { icon: 'Store', title: 'Local Sweets & Dining', description: 'Famous Purnia sweet shops and restaurants are within walking distance from the hotel entrance.' },
  { icon: 'Coffee', title: 'Tea & Snack Service', description: 'Complimentary morning tea and packaged snacks available at the front desk throughout the day.' },
  { icon: 'MapPin', title: 'Bhatta Bazar Connectivity', description: 'Just a quick rickshaw ride to Bhatta Bazar, Purnia&apos;s oldest wholesale and retail commercial district.' },
  { icon: 'Calendar', title: 'Business Meeting Access', description: 'Proximity to local businesses and banks makes Vikass Market area a preferred base for commercial travelers.' },
  { icon: 'Star', title: 'Evening Shopping Walks', description: 'The market area comes alive in the evenings. Step out for a relaxed shopping walk right opposite the hotel.' },
];

export const metadata = {
  title: 'Hotel Near Vikass Market Purnia | Best Stay Opposite Vikass Market | Hotel Surya Bella Casa',
  description: 'Looking for a hotel near Vikass Market Purnia? Hotel Surya Bella Casa is located opposite Vikass Market in Suryalok Complex, near Bus Stand. Free WiFi, parking, AC rooms. Best hotel opposite Vikass Market. Book direct.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/hotel-near-vikass-market',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Hotel Near Vikass Market Purnia | Opposite Vikass Market Near Bus Stand',
    description: 'Best hotel opposite Vikass Market Purnia. Located near Bus Stand with free WiFi, parking, AC rooms. Perfect for shopping and business visits. Book direct for best rates.',
    url: 'https://hotelsuryabellacasa.com/hotel-near-vikass-market',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Hotel Near Vikass Market Purnia - Best Hotel Opposite Vikass Market Near Bus Stand - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Near Vikass Market Purnia | Opposite Vikass Market Near Bus Stand',
    description: 'Best hotel opposite Vikass Market Purnia near Bus Stand. Free WiFi, parking, AC. Book now for best rates.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function VikassMarketLandingPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      <CinematicHero 
        label="Best Hotel Opposite Vikass Market Purnea - Near Bus Stand"
        title="Hotel Near Vikass Market Purnia - Free WiFi, Parking & AC Rooms"
        tagline="Looking for a hotel near Vikass Market Purnia? Hotel Surya Bella Casa is located directly opposite Vikass Market in Suryalok Complex, near Bus Stand. Enjoy free WiFi, parking, AC rooms, and 24/7 service at the best hotel opposite Vikass Market."
        image='https://bookonelocal.in/cdn/IMG_3739.avif'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Commercial Access</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Stay in the Commercial Heart of Purnia Opposite Vikass Market
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Vikass Market is one of Purnia&apos;s most active mercantile and consumer corridors. Whether you are visiting Purnia for a business deal, wholesale shopping, or leisure, staying at a <strong>hotel near Vikass Market</strong> puts you right in the center of the action.
              </p>
              <p>
                <strong>Hotel Surya Bella Casa</strong> is located in Suryalok Complex, directly opposite Vikass Market. This makes it incredibly easy to manage business meetings, retail trips, or family events without having to spend hours traveling back and forth through traffic.
              </p>
              <p>
                Our rooms are peaceful sanctuaries that block out the urban hustle while keeping you connected to Purnia&apos;s finest sweet shops, local businesses, and restaurants.
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

      <LuxuryAmenities label="Market-Facing Convenience" heading="Shop, Stay, Repeat" amenities={marketAmenities} />
    </main>
  );
}
