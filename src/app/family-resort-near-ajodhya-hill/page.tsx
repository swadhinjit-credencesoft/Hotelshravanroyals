import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { Star, Calendar, Shield, Users, Leaf, ArrowRight } from 'lucide-react';

const familyAmenities: AmenityItem[] = [
  { icon: 'Users', title: 'Family Rooms & Group Cottages', description: 'From family rooms to whole cottage blocks, configs comfortably fit parents, kids, and grandparents — extra bedding and adjoining options on request.' },
  { icon: 'Heart', title: 'Safe, Scenic & Alcohol-Free', description: 'A gated hilltop property, quiet pathways, and a wholesome environment where children can roam freely in the forest air.' },
  { icon: 'Leaf', title: 'Organic Farm & Veg Meals', description: 'Our own organic farm supplies the kitchen. Expect fresh veg thalis and wholesome family-style meals without the hotel markup.' },
  { icon: 'Utensils', title: 'Dining & Room Service', description: 'Sit together over meals, or order 24-hour room service for the kids&apos; early dinners while the adults enjoy the evening.' },
  { icon: 'Shield', title: 'Secure & Staffed 24/7', description: 'Our staff is always on site, lantern-lit paths are monitored, and room service runs around the clock for total peace of mind.' },
  { icon: 'Star', title: 'Barbeque & Evenings Together', description: 'Gather at the barbeque stand or the seating area for family evenings with snacks and warm drinks under the hill stars.' },
];

const familyFaq = [
  {
    q: 'Is The Divine Oasis safe for children?',
    a: 'Yes. The resort is a gated hilltop property with staff available 24/7, family rooms, and a calm, alcohol-free environment. The forest reserve is 0.4 km away, so the property itself remains a safe, contained space for kids.'
  },
  {
    q: 'Which rooms work best for a family?',
    a: 'Families of 4–6 typically book the VISTA Four Beds cottage (₹6,500/night) or pair two Premium Deluxe Mud Cottages (₹4,255/night each). Smaller families do well in the Luxury Suite Cottage (₹7,225/night, up to 5 guests).'
  },
  {
    q: 'What do children eat at the resort?',
    a: 'Our meals centre on fresh, organic produce from the on-site farm — veg thalis, simple home-style dishes, and flexible portions. Room service is available 24 hours, and we gladly adjust timing for early family dinners.'
  },
  {
    q: 'What is there to do with the family nearby?',
    a: 'Ajodhya Hills &amp; Forest Reserve (0.4 km) offers easy forest walks and rock pools, Thurga Dam (13.8 km) is a family picnic spot, and Deulghata Temples (33.7 km) make a scenic heritage afternoon. Our team can help you plan each day.'
  },
  {
    q: 'How do I book a family stay near Ajodhya Hill?',
    a: 'Book online through the button on this page, call +91 99039 89950, or email thedivineoasisresort@gmail.com. For group stays across several cottages, mention the number of families and we will map out the best layout.'
  },
];

export const metadata = {
  title: 'Family Resort near Ajodhya Hill - Safe Cottage Stays in Purulia',
  description: 'Planning a family trip to the hills? The Divine Oasis is a family resort near Ajodhya Hill in Purulia with Family Rooms, group cottages, organic farm meals, and a safe, scenic forest setting. Book your family cottage stay.',
  keywords: [
    'family resort near ajodhya hill', 'family resort in ajodhya hill purulia',
    'family cottage resort in purulia', 'safe family resort near ajodhya hills',
    'group cottage stay ajodhya hill', 'organic meals family resort purulia',
    'family rooms ajodhya hill resort', 'family weekend trip purulia hills',
    'kids friendly resort near purulia', 'family outing ajodhya hills west bengal',
    'family resort near purulia west bengal', 'family stay ajodhya hills and forest reserve',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/family-resort-near-ajodhya-hill',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Family Resort near Ajodhya Hill | Safe & Scenic Cottages in Purulia',
    description: 'Best family resort near Ajodhya Hill in Purulia. Family Rooms, group cottage stays, organic farm meals, and a safe forest setting. Perfect for kids and grandparents. Book The Divine Oasis now.',
    url: 'https://thedivineoasisresort.com/family-resort-near-ajodhya-hill',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-063246599-WhatsApp Image 2026-05-11 at 15.52.07 (1).jpg', width: 1200, height: 630, alt: 'Family Resort near Ajodhya Hill - The Divine Oasis - Safe Cottage Stays in Purulia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Resort near Ajodhya Hill | The Divine Oasis - Purulia',
    description: 'Safe family resort near Ajodhya Hill with Family Rooms, group cottages, and organic meals. A wholesome forest escape for the whole family.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063246599-WhatsApp Image 2026-05-11 at 15.52.07 (1).jpg'],
  },
};

export default function FamilyResortNearAjodhyaHillLandingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Family Resort near Ajodhya Hill", "item": "https://thedivineoasisresort.com/family-resort-near-ajodhya-hill" }
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
            "url": "https://thedivineoasisresort.com/family-resort-near-ajodhya-hill",
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
            "mainEntity": familyFaq.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })
        }}
      />

      <CinematicHero 
        label="Best Family Resort Near Ajodhya Hill - Safe & Scenic Cottage Stays"
        title="Family Resort Near Ajodhya Hill - Group Cottages, Organic Meals & Forest Air"
        tagline="Planning a family trip to the hills? The Divine Oasis is a family resort near Ajodhya Hill in Purulia offering Family Rooms, group cottage stays, organic farm meals, and a safe, scenic forest setting — just 0.4 km from Ajodhya Hills & Forest Reserve."
        image='https://bookonelocal.in/cdn/2026-05-13-063246599-WhatsApp Image 2026-05-11 at 15.52.07 (1).jpg'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Family Comfort</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              A Safe, Scenic Family Retreat Above the Hills
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                A family holiday in the hills is about more than beds — it is about the kids running freely in cool air, three generations eating the same meal together, and nobody worrying about safety or the evening&apos;s plans. <strong>The Divine Oasis</strong> is a <strong>family resort near Ajodhya Hill</strong> built around exactly that idea.
              </p>
              <p>
                We offer <Link href="/rooms" className="text-gold hover:underline">Family Rooms and group cottage layouts</Link> that sleep two to six guests comfortably — from the <Link href="/rooms/luxury-suite-cottage" className="text-gold hover:underline">Luxury Suite Cottage</Link> for a small family to the <Link href="/rooms/vista-four-beds" className="text-gold hover:underline">VISTA Four Beds</Link> for bigger clans, plus clusters of <Link href="/rooms/premium-deluxe-mud-cottages" className="text-gold hover:underline">Premium Deluxe Mud Cottages</Link> for multi-family trips. Whichever you pick, the property is gated, staffed round the clock, and quiet enough that kids are safe while parents unwind on the seating area.
              </p>
              <p>
                Meals are the other half of a good family trip. Our <Link href="/dining" className="text-gold hover:underline">kitchen cooks from our own organic farm</Link>, serving fresh veg thalis and home-style meals with no frills and no rush. Early kids&apos; dinners, extra portions, warm tea at sunset — just ask. In the evenings, families gather at the barbeque stand or around the picnic-style lawns while the hill cools down and the stars come out.
              </p>
              <p>
                The hills themselves are the bonus. Ajodhya Hills &amp; Forest Reserve begins <strong>0.4 km</strong> from the cottages, Thurga Dam is <strong>13.8 km</strong>, and Deulghata Temples are <strong>33.7 km</strong> — easy, scenic outings with a hot shower and a warm dinner waiting when you return. Plan the days with our team, or simply stay put and let the forest entertain the kids. See our <Link href="/events" className="text-gold hover:underline">family events</Link> and <Link href="/experiences" className="text-gold hover:underline">hill experiences</Link> for ideas.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Shield className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Safe &amp; Tension-Free</h3>
                <p className="font-sans text-sm text-taupe/70">Gated property, attentive staff, 24/7 room service, and hand sanitizer in every cottage.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Leaf className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Organic, Family Meals</h3>
                <p className="font-sans text-sm text-taupe/70">Fresh veg thalis from the on-site organic farm — wholesome and priced honestly.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Users className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Group Cottage Stays</h3>
                <p className="font-sans text-sm text-taupe/70">Multi-family trips fit naturally across our cottage clusters and four-bed units.</p>
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
                Reserve Family Rooms or a cluster of cottages with organic meals, barbeque evenings, and the forest reserve at your doorstep.
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
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Options for Your Family Trip</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/resort-near-ajodhya-hill', label: 'Resort Near Ajodhya Hill' },
            { href: '/resort-near-baghmundi', label: 'Resort Near Baghmundi' },
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

      <LuxuryAmenities label="Family-First Amenities" heading="Thoughtful Care for Every Member" amenities={familyAmenities} />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Guest Questions</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-12">Frequently Asked Questions</h2>
        <div className="space-y-10">
          {familyFaq.map((item) => (
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