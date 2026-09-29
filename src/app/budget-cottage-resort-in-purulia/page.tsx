import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { DollarSign, Star, Calendar, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const budgetAmenities: AmenityItem[] = [
  { icon: 'DollarSign', title: 'Cottages From ₹4,000 a Night', description: 'The Vista Pod Cottage starts at ₹4,000/night — a real forest cottage with geyser, TV, and Wi-Fi, not a roadside room.' },
  { icon: 'Sparkles', title: 'Immaculate Housekeeping', description: 'Daily professional cleaning, fresh linens, sanitized bathrooms, and spotless common areas across every budget category.' },
  { icon: 'ShieldCheck', title: 'No Hidden Charges', description: 'What you see is what you pay. Transparent pricing with no surprise resort fees or add-ons at check-in.' },
  { icon: 'BadgePercent', title: 'Value With the Essentials', description: 'Free Wi-Fi, smart TV, geyser, and 24-hour room service included on even the lowest-priced cottage.' },
  { icon: 'Headphones', title: '24/7 Room Service', description: 'Round-the-clock assistance for late arrivals, tea at dawn, and anything the forest evening requires.' },
  { icon: 'Calendar', title: 'Flexible Booking Options', description: 'Easy online booking with instant confirmation via the booking engine, or direct booking over the phone.' },
];

const budgetFaq = [
  {
    q: 'What is the cheapest stay at The Divine Oasis?',
    a: 'The Vista Pod Cottage starts at ₹4,000/night and suits 2–3 guests. The Premium Deluxe Mud Cottages are ₹4,255/night, the VISTA Four Beds ₹6,500/night (4–6 guests), and the Luxury Suite Cottage ₹7,225/night (2–5 guests).'
  },
  {
    q: 'Are there any hidden charges at check-in?',
    a: 'No. Our pricing is transparent — the rate you book is the rate you pay, with no resort fees or surprise add-ons. Free Wi-Fi, geyser, smart TV, and room service are included in every cottage.'
  },
  {
    q: 'Is a budget forest stay better than a budget hotel in town?',
    a: 'For most travellers, yes. A budget cottage here puts you inside Ajodhya Hills (0.4 km from the forest reserve) for roughly what a standard room costs elsewhere — but with forest views, cleaner air, and a genuinely peaceful night.'
  },
  {
    q: 'What does the price include?',
    a: 'Every cottage includes free Wi-Fi, hand sanitizer, geyser, smart TV, and 24-hour room service. The barbeque stand, seating areas, and lawns are available for relaxed evenings, and veg thalis are served fresh on request.'
  },
  {
    q: 'How far is the resort from Purulia Junction?',
    a: 'Purulia Junction is 42.6 km from the resort. Most guests arrive by car via the road to Ajodhya Hill; on-site parking is available. Call +91 99039 89950 if you need help planning the drive.'
  },
];

export const metadata = {
  title: 'Budget Cottage Resort in Purulia - Forest Stays From ₹4,000',
  description: 'Looking for a budget cottage resort in Purulia? The Divine Oasis offers value-for-money forest escapes from ₹4,000 a night — clean cottages, free Wi-Fi, no hidden charges. Book your affordable stay near Ajodhya Hill.',
  keywords: [
    'budget cottage resort in purulia', 'cheap cottage resort purulia',
    'affordable resort near ajodhya hill', 'budget forest resort in ajodhya hills',
    'value for money resort purulia', 'budget stay near ajodhya hills west bengal',
    'cottage resort from 4000 purulia', 'low price resort in ajodhya hills',
    'affordable forest resort in purulia', 'no hidden charges resort purulia',
    'best budget cottages in ajodhya hill', 'cheap cottage stay in purulia hills',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/budget-cottage-resort-in-purulia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Budget Cottage Resort in Purulia | Forest Stays From ₹4,000 a Night',
    description: 'Best budget cottage resort in Purulia. Value-for-money forest escapes from ₹4,000/night with free Wi-Fi, no hidden charges, near Ajodhya Hill. Book The Divine Oasis now.',
    url: 'https://thedivineoasisresort.com/budget-cottage-resort-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-063648495-WhatsApp Image 2026-05-11 at 15.52.45 (1).jpg', width: 1200, height: 630, alt: 'Budget Cottage Resort in Purulia - The Divine Oasis - Affordable Forest Escapes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Cottage Resort in Purulia | The Divine Oasis',
    description: 'Affordable forest cottages from ₹4,000 a night near Ajodhya Hill. Free Wi-Fi, no hidden charges, genuine value. Book The Divine Oasis now.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063648495-WhatsApp Image 2026-05-11 at 15.52.45 (1).jpg'],
  },
};

export default function BudgetCottageResortLandingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Budget Cottage Resort in Purulia", "item": "https://thedivineoasisresort.com/budget-cottage-resort-in-purulia" }
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
            "url": "https://thedivineoasisresort.com/budget-cottage-resort-in-purulia",
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
            "mainEntity": budgetFaq.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })
        }}
      />

      <CinematicHero 
        label="Best Budget Cottage Resort in Purulia - Stays From ₹4,000 a Night"
        title="Budget Cottage Resort in Purulia - Real Forest Stays, No Hidden Charges"
        tagline="Looking for an affordable resort in Purulia? The Divine Oasis offers value-for-money forest escapes starting at ₹4,000 a night — clean Vista Pod and Premium Deluxe Mud Cottages with free Wi-Fi, 24/7 room service, and transparent pricing near Ajodhya Hill."
        image='https://bookonelocal.in/cdn/2026-05-13-063648495-WhatsApp Image 2026-05-11 at 15.52.45 (1).jpg'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Pocket-Friendly Stay</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              A Real Forest Cottage for the Price of an Ordinary Room
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                &ldquo;Budget&rdquo; usually means a boxy room beside a highway. At a <strong>budget cottage resort in Purulia</strong>, it should mean the opposite: a wooden-and-mud cottage under the trees, a geyser after a cold hill evening, a smart TV, and honest pricing. That is the whole idea behind <strong>The Divine Oasis</strong>.
              </p>
              <p>
                Our cheapest category, the <Link href="/rooms/vista-pod-cottage" className="text-gold hover:underline">Vista Pod Cottage</Link>, starts at <strong>₹4,000 a night</strong> (2–3 guests). A step up, the <Link href="/rooms/premium-deluxe-mud-cottages" className="text-gold hover:underline">Premium Deluxe Mud Cottages</Link> run <strong>₹4,255 a night</strong> (2–3 guests). Larger parties stretch the same budget across the <Link href="/rooms/vista-four-beds" className="text-gold hover:underline">VISTA Four Beds</Link> at <strong>₹6,500</strong> (4–6 guests) or fold into the <Link href="/rooms/luxury-suite-cottage" className="text-gold hover:underline">Luxury Suite Cottage</Link> at <strong>₹7,225</strong> (2–5 guests). Every option includes free Wi-Fi, geyser, hand sanitizer, smart TV, and 24-hour room service — see all of them on the <Link href="/rooms" className="text-gold hover:underline">rooms page</Link>.
              </p>
              <p>
                We keep the structure honest: <strong>no hidden charges</strong>, no resort fees appearing at the desk, and no surprises on check-out. What you book online is what you pay, and housekeeping is done to the same standard across every category. For groups travelling together, clustered cottages often work out cheaper per head than a bus ride plus a mid-range hotel — check the <Link href="/offers" className="text-gold hover:underline">current offers</Link> before you decide.
              </p>
              <p>
                Location keeps the value real too. The forest reserve of Ajodhya Hills begins only <strong>0.4 km</strong> away, Thurga Dam is <strong>13.8 km</strong>, Deulghata Temples <strong>33.7 km</strong>, and Purulia Junction <strong>42.6 km</strong>. You pay for the forest, and the forest is next door. Dine at the resort with simple veg thalis, gather at the barbeque stand, or explore our <Link href="/experiences" className="text-gold hover:underline">experiences</Link> — the hill days fill themselves.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <DollarSign className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Honest Pricing</h3>
                <p className="font-sans text-sm text-taupe/70">Transparent rates from ₹4,000 a night with nothing added at the desk.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Sparkles className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Spotless Cottages</h3>
                <p className="font-sans text-sm text-taupe/70">Daily cleaning and fresh linens even on the lowest-priced categories.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <ShieldCheck className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">No Surprises</h3>
                <p className="font-sans text-sm text-taupe/70">Free Wi-Fi, geyser, TV, and 24-hour room service are simply included.</p>
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
              <h3 className="font-display text-3xl italic mb-6">Book a Budget Stay</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Reserve an affordable forest cottage with free Wi-Fi, geyser, and 24/7 room service — your money goes into the stay, not the charges.
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
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Affordable Options in Purulia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/resort-near-ajodhya-hill', label: 'Resort Near Ajodhya Hill' },
            { href: '/resort-near-baghmundi', label: 'Resort Near Baghmundi' },
            { href: '/family-resort-near-ajodhya-hill', label: 'Family Resort Near Ajodhya Hill' },
            { href: '/corporate-resort-in-purulia', label: 'Corporate Resort in Purulia' },
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

      <LuxuryAmenities label="Budget-Friendly Features" heading="Maximum Value, Minimum Spend" amenities={budgetAmenities} />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Guest Questions</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-12">Frequently Asked Questions</h2>
        <div className="space-y-10">
          {budgetFaq.map((item) => (
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