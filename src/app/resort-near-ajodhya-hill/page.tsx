import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { MapPin, Star, Calendar, Camera, Users, Heart, ArrowRight } from 'lucide-react';

const ajodhyaHillAmenities: AmenityItem[] = [
  { icon: 'MapPin', title: '0.4 km from the Forest Reserve', description: 'Ajodhya Hills & Forest Reserve begins minutes from your cottage. Trekking trails, rock formations, and misty lookouts are practically on the doorstep.' },
  { icon: 'Camera', title: 'Hilltop Sunrises & Sunsets', description: 'Golden light rolls over the Purulia landscape every morning and evening — a spectacle no town hotel can match.' },
  { icon: 'Users', title: 'Family & Couple Cottage Stays', description: 'Private mud cottages for two, larger cottages for families and groups, each tucked into the quiet of the forest.' },
  { icon: 'Heart', title: 'A Genuinely Quiet Retreat', description: 'Birdsong, pine air, and cool hill breezes instead of town traffic. This is why guests describe it as a true forest escape.' },
  { icon: 'Calendar', title: 'Thurga Dam & Deulghata Day Trips', description: 'Thurga Dam is 13.8 km and the Deulghata Temples are 33.7 km away — easy excursions from the hills.' },
  { icon: 'Shield', title: 'Safe, Secure, Staffed 24/7', description: 'A gated hilltop property with attentive staff and round-the-clock room service for a worry-free stay.' },
];

const ajodhyaHillFaq = [
  {
    q: 'Where exactly is The Divine Oasis located?',
    a: 'The Divine Oasis sits atop Ajodhya Hill at 643G+4Q, Hilltop, Ajodhya, Purulia, West Bengal 723152. It is the closest resort to Ajodhya Hills & Forest Reserve, which begins just 0.4 km from the property.'
  },
  {
    q: 'How far is the resort from Thurga Dam and Deulghata Temples?',
    a: 'Thurga Dam is 13.8 km away and the Deulghata Temples are 33.7 km from the resort — both make comfortable day trips from Ajodhya Hill.'
  },
  {
    q: 'Is staying at the hilltop better than staying in town?',
    a: 'For most travelers, yes. You wake up inside the forest with cooler air, birdsong, and sunrise views, and you skip the long daily climb from Purulia. Purulia Junction is 42.6 km away, so reaching the resort takes time — that is exactly why our guests stay on the hill rather than commute from town.'
  },
  {
    q: 'Which cottages are available for couples?',
    a: 'Couples typically choose the Premium Deluxe Mud Cottages (₹4,255/night, 2–3 guests) or the Vista Pod Cottage (₹4,000/night, 2–3 guests). Both include free Wi-Fi, geyser, flat-screen TV and 24-hour room service.'
  },
  {
    q: 'How do I book a cottage near Ajodhya Hill?',
    a: 'Book online through the booking engine at the booking button on this page, call +91 99039 89950, or write to thedivineoasisresort@gmail.com. Group and family stays can also be arranged over the phone.'
  },
];

export const metadata = {
  title: 'Resort near Ajodhya Hill - Forest Cottage Stay in Purulia',
  description: 'Looking for the best resort near Ajodhya Hill? The Divine Oasis is a forest resort at Ajodhya Hills & Forest Reserve (0.4 km), close to Thurga Dam & Deulghata. Family and couple cottage stays in Purulia, West Bengal.',
  keywords: [
    'resort near ajodhya hill', 'best resort near ajodhya hill',
    'forest resort in ajodhya hills west bengal', 'resort near ajodhya hills and forest reserve',
    'cottage stay near ajodhya hill', 'resort near thurga dam', 'resort near deulghata temples',
    'forest cottages in ajodhya hills purulia', 'couple cottage stay ajodhya hill',
    'family resort near ajodhya hill west bengal', 'resort in ajodhya hill purulia',
    'ajodhya hills resort booking', 'resort near purulia west bengal',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/resort-near-ajodhya-hill',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Resort near Ajodhya Hill | Forest Cottages at Ajodhya Hills & Forest Reserve',
    description: 'Best forest resort near Ajodhya Hill in Purulia. Located 0.4 km from Ajodhya Hills & Forest Reserve, near Thurga Dam and Deulghata. Family and couple cottage stays. Book The Divine Oasis now.',
    url: 'https://thedivineoasisresort.com/resort-near-ajodhya-hill',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg', width: 1200, height: 630, alt: 'Resort near Ajodhya Hill - The Divine Oasis - Forest Cottage Stay in Purulia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort near Ajodhya Hill | The Divine Oasis - Purulia',
    description: 'Forest resort 0.4 km from Ajodhya Hills & Forest Reserve, close to Thurga Dam and Deulghata. Family and couple cottages. Book The Divine Oasis now.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
};

export default function ResortNearAjodhyaHillLandingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Resort near Ajodhya Hill", "item": "https://thedivineoasisresort.com/resort-near-ajodhya-hill" }
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
            "url": "https://thedivineoasisresort.com/resort-near-ajodhya-hill",
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
            "mainEntity": ajodhyaHillFaq.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })
        }}
      />

      <CinematicHero 
        label="Best Resort Near Ajodhya Hill - Forest Cottage Stay in Purulia"
        title="Resort Near Ajodhya Hill - Inside the Forest, Just 0.4 km from the Reserve"
        tagline="Looking for the best resort near Ajodhya Hill? The Divine Oasis is a serene forest resort atop Ajodhya Hill in Purulia, West Bengal — just 0.4 km from Ajodhya Hills & Forest Reserve, with Thurga Dam and Deulghata nearby. Private mud cottages, forest views, and round-the-clock service."
        image='https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Hilltop Forest Stay</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              A Forest Resort Minutes From Ajodhya Hills &amp; Forest Reserve
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Ajodhya Hill is West Bengal&apos;s most accessible forest retreat — a high ridge of waterfalls, rock pools, pine groves, and quiet tribal villages that most visitors only see as a day trip. Staying at a <strong>resort near Ajodhya Hill</strong> means you get the whole forest to yourself at sunrise, after the last excursion bus has gone.
              </p>
              <p>
                <strong>The Divine Oasis</strong> is the resort closest to the action, located at the Hilltop in Ajodhya, Purulia. Ajodhya Hills &amp; Forest Reserve is just <strong>0.4 km</strong> away, Thurga Dam is <strong>13.8 km</strong>, and the ancient Deulghata Temples are <strong>33.7 km</strong>. Whether you are here for a <Link href="/family-resort-near-ajodhya-hill" className="text-gold hover:underline">family weekend</Link> or a <Link href="/budget-cottage-resort-in-purulia" className="text-gold hover:underline">budget forest escape</Link>, every trail and viewpoint is a short drive or walk from your cottage. Browse our <Link href="/rooms" className="text-gold hover:underline">cottage categories</Link> and <Link href="/experiences" className="text-gold hover:underline">hill experiences</Link> to plan your days.
              </p>
              <p>
                Staying in town means a long daily drive up the hill, city noise at night, and a room with a view of the street. Staying at the hilltop means cool pine air, birdsong instead of traffic, sunrise over the valley, and your own <Link href="/rooms/premium-deluxe-mud-cottages" className="text-gold hover:underline">Premium Deluxe Mud Cottage</Link> or <Link href="/rooms/vista-pod-cottage" className="text-gold hover:underline">Vista Pod Cottage</Link> tucked into the greenery — at prices that start from <strong>₹4,000 a night</strong>.
              </p>
              <p>
                Every cottage comes with free Wi-Fi, a flat-screen TV, geyser, hand sanitizer, and 24-hour room service, so you can disconnect from the world without giving up the essentials. After exploring, unwind on your private seating area with drinks and hors d&apos;oeuvres, or gather around the barbeque stand under the stars.
              </p>
            </div>

            <div className="mt-12 bg-white p-8 border border-gold/10 rounded-sm">
              <h2 className="font-display text-2xl italic text-forest mb-4">Distances From the Hilltop</h2>
              <ul className="space-y-4 font-sans text-base text-taupe">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Ajodhya Hills &amp; Forest Reserve:</strong> Right at the doorstep, only 0.4 km from the resort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Thurga Dam:</strong> 13.8 km away — a scenic water body and picnic spot on the hills.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Deulghata Temples:</strong> 33.7 km away, home to some of West Bengal&apos;s finest terracotta ruins.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Purulia Junction:</strong> 42.6 km away — the main railhead for reaching the hills.</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Camera className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Views You Cannot Fake</h3>
                <p className="font-sans text-sm text-taupe/70">Forest-fringed cottages with open sky, morning mist, and valley views in place of a town window.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Users className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Built for the Hills</h3>
                <p className="font-sans text-sm text-taupe/70">Couples, families, and friend groups each find their own cottage layout and quiet corner.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Heart className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Why It Beats Town</h3>
                <p className="font-sans text-sm text-taupe/70">Cooler climate, cleaner air, no commutes, and the reserve next door — the town simply cannot compete.</p>
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
              <h3 className="font-display text-3xl italic mb-6">Book Your Hilltop Escape</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Reserve a forest cottage at the edge of Ajodhya Hills &amp; Forest Reserve with free Wi-Fi, 24-hour room service, and sunrise views.
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
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Ways to Explore the Hills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/resort-near-baghmundi', label: 'Resort Near Baghmundi' },
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

      <LuxuryAmenities label="The Resort Advantage" heading="Why the Hilltop Beats the Town" amenities={ajodhyaHillAmenities} />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Guest Questions</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-12">Frequently Asked Questions</h2>
        <div className="space-y-10">
          {ajodhyaHillFaq.map((item) => (
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