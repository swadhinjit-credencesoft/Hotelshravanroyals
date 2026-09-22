import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { MapPin, Star, Calendar, Car, Mountain, Coffee, ArrowRight } from 'lucide-react';

const baghmundiAmenities: AmenityItem[] = [
  { icon: 'MapPin', title: 'The Gateway Post', description: 'Baghmundi is the sub-divisional town that serves as the gateway to Ajodhya Hills. We sit above it, right in the hills, as the closest resort to all the trailheads.' },
  { icon: 'Mountain', title: 'Above the Town, Inside the Hills', description: 'The Divine Oasis is tucked onto Ajodhya Hill rather than the market road, so you skip the town bustle without losing its convenience.' },
  { icon: 'Car', title: 'Baghmundi–Ajodhya Road Access', description: 'Approachable via the Baghmundi–Ajodhya road from the town below, with parking on-site for private vehicles and self-drive groups.' },
  { icon: 'Coffee', title: 'Tea, Veg Thali & Local Meals', description: 'After a day in the hills, our dining serves comforting veg thalis, tea, drinks and hors d&apos;oeuvres — no need to drive back down to eat.' },
  { icon: 'Tent', title: 'Trekking & Camping Base', description: 'Use the resort as your base camp for forest treks, rock pools, and viewpoints across the Ajodhya hills, then return to a hot shower and a real bed.' },
  { icon: 'Calendar', title: 'Barabhum & Jharkhand Access', description: 'Barabhum, on the Jharkhand side near the Bengal border, is 38.5 km away — handy for guests travelling in from across the state line.' },
];

const baghmundiFaq = [
  {
    q: 'Where is Baghmundi in relation to the resort?',
    a: 'Baghmundi is the sub-divisional town and the main gateway to Ajodhya Hills in Purulia. The Divine Oasis is located on the hilltop above Baghmundi, reachable via the Baghmundi–Ajodhya road. Ajodhya Hills & Forest Reserve begins just 0.4 km from the resort.'
  },
  {
    q: 'Can I reach the resort from Jharkhand side?',
    a: 'Yes. Barabhum, on the Jharkhand side near the Bengal border, is only 38.5 km from the resort. Guests driving in from the adjoining districts of Jharkhand find the hills easily approachable through this route.'
  },
  {
    q: 'Is there a market or dining option at the resort itself?',
    a: 'You do not need to head back into town. The resort serves veg thalis, tea and snacks, drinks and hors d&apos;oeuvres, and has a barbeque stand for the evenings. The gateway town below covers any provisions you may need.'
  },
  {
    q: 'Why stay above Baghmundi instead of in the town?',
    a: 'Because the hills are the reason you came. Staying on Ajodhya Hill puts you 0.4 km from the forest reserve, in cooler air and quieter surroundings, with Thurga Dam (13.8 km) and Deulghata Temples (33.7 km) still within easy day-trip range.'
  },
  {
    q: 'How do I book a cottage near Baghmundi?',
    a: 'Use the online booking link on this page, call +91 99039 89950, or write to thedivineoasisresort@gmail.com. Cottages start from ₹4,000 a night with free Wi-Fi, geyser, and 24-hour room service.'
  },
];

export const metadata = {
  title: 'Resort near Baghmundi - Gateway Stay for Ajodhya Hills, Purulia',
  description: 'Looking for a resort near Baghmundi? The Divine Oasis sits in the Ajodhya Hills above Baghmundi, the gateway town to the hills in Purulia. Approachable via the Baghmundi-Ajodhya road, near Barabhum. Book a hilltop cottage.',
  keywords: [
    'resort near baghmundi', 'resort in baghmundi', 'baghmundi resort purulia',
    'gateway to ajodhya hills baghmundi', 'resort on baghmundi ajodhya road',
    'stay in ajodhya hills from baghmundi', 'resort near barabhum',
    'resort accessible from jharkhand', 'cottage resort baghmundi',
    'best stay near ajodhya hills gateway', 'resort near baghmundi purulia west bengal',
    'hilltop resort above baghmundi',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/resort-near-baghmundi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Resort near Baghmundi | Hilltop Cottages Above the Gateway Town',
    description: 'Best resort near Baghmundi, the gateway town for Ajodhya Hills in Purulia. The Divine Oasis sits above the town on Ajodhya Hill, approachable via the Baghmundi-Ajodhya road. Near Barabhum and Jharkhand. Book now.',
    url: 'https://thedivineoasisresort.com/resort-near-baghmundi',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg', width: 1200, height: 630, alt: 'Resort near Baghmundi - The Divine Oasis - Gateway to Ajodhya Hills in Purulia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort near Baghmundi | The Divine Oasis - Gateway to the Hills',
    description: 'Hilltop resort above Baghmundi, the gateway town for Ajodhya Hills in Purulia. Approachable via the Baghmundi-Ajodhya road, near Barabhum. Book your cottage now.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg'],
  },
};

export default function ResortNearBaghmundiLandingPage() {
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thedivineoasisresort.com" },
              { "@type": "ListItem", "position": 2, "name": "Resort near Baghmundi", "item": "https://thedivineoasisresort.com/resort-near-baghmundi" }
            ]
          })
        }}
      />

      {/* Resort Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            "name": "The Divine Oasis",
            "url": "https://thedivineoasisresort.com/resort-near-baghmundi",
            "telephone": "+91990398950",
            "email": "thedivineoasisresort@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "643G+4Q, Hilltop, Ajodhya",
              "addressLocality": "Purulia",
              "addressRegion": "West Bengal",
              "postalCode": "723152",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 23.2028654,
              "longitude": 86.1268909
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": baghmundiFaq.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })
        }}
      />

      <CinematicHero 
        label="Best Resort Near Baghmundi - Gateway to Ajodhya Hills in Purulia"
        title="Resort Near Baghmundi - Hilltop Cottages Above the Gateway Town"
        tagline="Looking for a resort near Baghmundi? The Divine Oasis sits in the Ajodhya Hills above Baghmundi, the sub-divisional gateway town for Ajodhya Hills in Purulia. Approachable via the Baghmundi-Ajodhya road, with Barabhum and the Jharkhand border just 38.5 km away."
        image='https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Gateway Access</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Stay Above the Town, Right Inside the Hills
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Most visitors to Ajodhya Hills overnight in the plains and drive up and down the mountain every single day. It works — until you realise the forest, the sunrises, and the cool evenings belong to the people who actually stay on the hill. A <strong>resort near Baghmundi</strong> is the ideal compromise: convenient to the gateway town&apos;s shops, buses, and fuel, yet planted firmly in the forest.
              </p>
              <p>
                Baghmundi is the sub-divisional town and the official gateway to Ajodhya Hills in Purulia. <strong>The Divine Oasis</strong> is perched on the hilltop above the town, reached by turning off the plains road onto the <strong>Baghmundi–Ajodhya road</strong>. From here, Ajodhya Hills &amp; Forest Reserve begins just <strong>0.4 km</strong> away, Thurga Dam is <strong>13.8 km</strong>, the Deulghata Temples <strong>33.7 km</strong>, and Purulia Junction <strong>42.6 km</strong>.
              </p>
              <p>
                Travelling from the Jharkhand side? <strong>Barabhum (38.5 km)</strong>, on the Jharkhand side near the Bengal border, connects the hills to a wide sweep of the neighbouring state. Place the resort as your base, unpack once, and spend your days trekking, exploring <Link href="/rooms/vista-four-beds" className="text-gold hover:underline">VISTA Four Beds</Link> for the whole group, or settling into a <Link href="/experiences" className="text-gold hover:underline">hill experience</Link>. See our <Link href="/rooms" className="text-gold hover:underline">cottage options</Link> and <Link href="/offers" className="text-gold hover:underline">current offers</Link> before you arrive.
              </p>
              <p>
                After dark, the gateway town below settles down — so we built the evening into the stay itself: <Link href="/dining" className="text-gold hover:underline">veg thalis and tea at the resort</Link>, drinks and hors d&apos;oeuvres on the seating area, and a barbeque stand for slow dinners under the open sky. That is the real advantage of sleeping on the mountain instead of near the market.
              </p>
            </div>

            <div className="mt-12 bg-white p-8 border border-gold/10 rounded-sm">
              <h2 className="font-display text-2xl italic text-forest mb-4">Getting Around From Baghmundi</h2>
              <ul className="space-y-4 font-sans text-base text-taupe">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Baghmundi town (gateway):</strong> directly below the hills, connected via the Baghmundi–Ajodhya road.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Ajodhya Hills &amp; Forest Reserve:</strong> 0.4 km — the entry to the forests is effectively at the resort doorstep.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Thurga Dam:</strong> 13.8 km, and <strong>Deulghata Temples:</strong> 33.7 km — both fine day trips.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Barabhum (38.5 km):</strong> on the Jharkhand side near the Bengal border, for guests coming from across the state line.</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Mountain className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Best of Both Worlds</h3>
                <p className="font-sans text-sm text-taupe/70">Gateway-town convenience for supplies and transport, plus genuine hilltop forest living.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Car className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Simple Road Access</h3>
                <p className="font-sans text-sm text-taupe/70">Reach us on the Baghmundi–Ajodhya road with on-site parking for cars and self-drive groups.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Coffee className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Evenings Stay Up Here</h3>
                <p className="font-sans text-sm text-taupe/70">Tea, veg thali, and barbeque at the resort — no reason to descend back into town after dinner.</p>
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
              <h3 className="font-display text-3xl italic mb-6">Book Your Gateway Stay</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Reserve a hilltop cottage above Baghmundi with free Wi-Fi, 24-hour room service, and steps to the Ajodhya Hills.
              </p>
            </div>
            
            <a 
              href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-light transition-all rounded-sm font-bold"
            >
              <Calendar size={14} />
              Book Now Online
            </a>

            <div className="mt-6 text-center">
              <p className="font-sans text-xs text-ivory/60 mb-2">Questions? Call or write us:</p>
              <a href="tel:+91990398950" className="font-serif text-base text-gold hover:underline block">+91 99039 89950</a>
              <a href="mailto:thedivineoasisresort@gmail.com" className="font-sans text-xs text-ivory/70 hover:text-gold block mt-1">thedivineoasisresort@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Also Explore</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Stays Around Baghmundi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/resort-near-ajodhya-hill', label: 'Resort Near Ajodhya Hill' },
            { href: '/family-resort-near-ajodhya-hill', label: 'Family Resort Near Ajodhya Hill' },
            { href: '/corporate-resort-in-purulia', label: 'Corporate Resort in Purulia' },
            { href: '/budget-cottage-resort-in-purulia', label: 'Budget Cottage Resort in Purulia' },
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

      <LuxuryAmenities label="Gateway Town Convenience" heading="From Baghmundi to the Hills" amenities={baghmundiAmenities} />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Guest Questions</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-12">Frequently Asked Questions</h2>
        <div className="space-y-10">
          {baghmundiFaq.map((item) => (
            <div key={item.q} className="bg-white border border-gold/10 rounded-sm p-8">
              <h3 className="font-display text-xl italic text-forest mb-3">{item.q}</h3>
              <p className="font-sans text-base text-taupe/80 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}