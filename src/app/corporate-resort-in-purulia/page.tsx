import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { Star, Calendar, Laptop, Wifi, Users, ArrowRight } from 'lucide-react';

const corporateAmenities: AmenityItem[] = [
  { icon: 'Laptop', title: 'Quiet Working Cottages', description: 'Each cottage doubles as a calm workstation — desks, seating areas, and zero traffic noise, so deep work actually happens here.' },
  { icon: 'Wifi', title: 'Reliable Hilltop Wi-Fi', description: 'Free Wi-Fi shared across the property so teams can run calls, share files, and stay connected to headquarters between sessions.' },
  { icon: 'Shield', title: 'Group Block Bookings', description: 'We block whole cottage clusters for teams — everyone sleeps in the same quiet neighbourhood of the resort.' },
  { icon: 'Clock', title: 'Express Check-In & Out', description: 'Large groups arrive together and leave together. Pre-arranged checklists keep the whole team moving without a queue at the desk.' },
  { icon: 'Calendar', title: 'GST Invoicing & Corporate Billing', description: 'Simplified corporate billing with proper GST invoices for travel, training, and reimbursement records.' },
  { icon: 'Users', title: 'Team Building & Evenings', description: 'Post-session evenings at the barbeque stand, social events on the lawns, and organic farm dinners that teams actually remember.' },
];

const corporateFaq = [
  {
    q: 'Is the Wi-Fi reliable enough for a work offsite?',
    a: 'Yes. Free Wi-Fi reaches the cottages and common areas, which our team members use for calls and remote work between sessions. For bandwidth-heavy needs, write to thedivineoasisresort@gmail.com before your dates so we can plan around your team.'
  },
  {
    q: 'Can you accommodate a whole team at once?',
    a: 'Easily. We take group block bookings across our cottage clusters — Premium Deluxe Mud Cottages (2–3 guests), VISTA Four Beds (4–6 guests), Luxury Suite Cottage (2–5) and Vista Pod Cottages (2–3) — so a team of any size can be housed together.'
  },
  {
    q: 'Do you provide GST invoices for corporate bookings?',
    a: 'Yes. Every corporate booking is invoiced with full GST documentation to support travel claims and reimbursements. Mention corporate billing when you book, or email thedivineoasisresort@gmail.com.'
  },
  {
    q: 'How do teams reach the resort?',
    a: 'The nearest main railhead is Purulia Junction (42.6 km away), from where the resort is reached via the road to Ajodhya Hill. Most teams arrive by car or pre-arranged transport and park on-site.'
  },
  {
    q: 'What happens after work hours during an offsite?',
    a: 'The evening is the resort&apos;s best feature — barbeque dinners, lawn sessions, drinks and hors d&apos;oeuvres on the seating area, and the calm of the forest. Teams tend to bond a lot faster here than in a meeting room.'
  },
];

export const metadata = {
  title: 'Corporate Resort in Purulia - Offsites with Wi-Fi & GST Invoicing',
  description: 'Planning a corporate offsite? The Divine Oasis is a corporate resort in Purulia with reliable Wi-Fi, group block bookings, a peaceful hilltop working environment, and GST invoicing. Near Purulia Junction.',
  keywords: [
    'corporate resort in purulia', 'corporate offsite resort purulia',
    'corporate retreat in ajodhya hills', 'team offsite near purulia',
    'resort for corporate guests in purulia', 'gst invoice resort purulia',
    'group block booking purulia resort', 'corporate meeting resort near purulia junction',
    'work from hilltop resort purulia', 'business resort in purulia west bengal',
    'team building resort in ajodhya hills', 'corporate stay with wifi in purulia',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/corporate-resort-in-purulia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Corporate Resort in Purulia | Hilltop Offsites with Reliable Wi-Fi',
    description: 'Best corporate resort in Purulia for offsites and retreats. Reliable Wi-Fi, group block bookings, peaceful hilltop workspaces, GST invoicing. Near Purulia Junction. Book The Divine Oasis now.',
    url: 'https://thedivineoasisresort.com/corporate-resort-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg', width: 1200, height: 630, alt: 'Corporate Resort in Purulia - The Divine Oasis - Hilltop Offsites in West Bengal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Resort in Purulia | The Divine Oasis - Offsites & Retreats',
    description: 'Corporate resort in Purulia with reliable Wi-Fi, group block bookings, and a peaceful hilltop working environment. GST invoicing available. Book now.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg'],
  },
};

export default function CorporateResortLandingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Corporate Resort in Purulia", "item": "https://thedivineoasisresort.com/corporate-resort-in-purulia" }
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
            "url": "https://thedivineoasisresort.com/corporate-resort-in-purulia",
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
            "mainEntity": corporateFaq.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })
        }}
      />

      <CinematicHero 
        label="Best Corporate Resort in Purulia - Offsites, Wi-Fi & GST Invoicing"
        title="Corporate Resort in Purulia - A Peaceful Hilltop Base for Teams"
        tagline="Planning a corporate offsite or team retreat? The Divine Oasis is a corporate resort in Purulia offering reliable Wi-Fi, group cottage block bookings, a calm hilltop working environment, and clean GST invoicing — just 42.6 km from Purulia Junction."
        image='https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Corporate Comfort</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Offsites Work Better When the Venue Has Nothing to Distract You
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Every city offsite follows the same script — conference room, cycle-shed parking, a buffet, and a commute. It works, but it rarely inspires anything. Teams that step onto the <strong>hilltop at The Divine Oasis</strong> step out of the routine entirely: pine air, open sky, and a quiet that lets morning strategy sessions actually hold people&apos;s attention.
              </p>
              <p>
                As a <strong>corporate resort in Purulia</strong>, we built the basics around teams. Free <strong>Wi-Fi</strong> reaches every cottage and the common areas, so calls, dashboards, and file transfers keep flowing between sessions. For groups we take <strong>block bookings across the cottage clusters</strong> — from the <Link href="/rooms/vista-four-beds" className="text-gold hover:underline">VISTA Four Beds</Link> (4–6 guests) to rows of <Link href="/rooms/premium-deluxe-mud-cottages" className="text-gold hover:underline">Premium Deluxe Mud Cottages</Link> (2–3 each) and the <Link href="/rooms/luxury-suite-cottage" className="text-gold hover:underline">Luxury Suite Cottage</Link> for senior leadership. Walk through the options on our <Link href="/rooms" className="text-gold hover:underline">rooms page</Link>.
              </p>
              <p>
                The unglamorous parts are handled too: <strong>express check-in and check-out</strong> for large parties, <strong>GST invoices</strong> for every corporate booking, and a single point of contact before, during, and after your dates at <a href="mailto:thedivineoasisresort@gmail.com" className="text-gold hover:underline">thedivineoasisresort@gmail.com</a>. Reach us by road from <strong>Purulia Junction (42.6 km)</strong> or straight onto the Ajodhya Hill — directions and parking are uncomplicated.
              </p>
              <p>
                And when the laptops close, the resort does what a hotel cannot. Organise a <Link href="/events/corporate" className="text-gold hover:underline">corporate evening</Link> around our barbeque stand, hold a casual <Link href="/events" className="text-gold hover:underline">team dinner</Link> with drinks and hors d&apos;oeuvres on the lawns, or send the team into the forest reserve, <strong>0.4 km</strong> away, for the kind of conversation that spreadsheets never produce. See our <Link href="/experiences" className="text-gold hover:underline">experiences</Link> and <Link href="/offers" className="text-gold hover:underline">offers</Link> to shape the itinerary.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Laptop className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Focused Workspaces</h3>
                <p className="font-sans text-sm text-taupe/70">Quiet cottages and seating areas with zero city noise between structured sessions.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Wifi className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Connected Hilltop</h3>
                <p className="font-sans text-sm text-taupe/70">Reliable free Wi-Fi so the team stays in touch with the office while off-site.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Users className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Block Bookings</h3>
                <p className="font-sans text-sm text-taupe/70">Entire cottage clusters reserved for your team, with GST-billed paperwork throughout.</p>
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
              <h3 className="font-display text-3xl italic mb-6">Book Your Corporate Stay</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Plan an offsite with group block bookings, reliable Wi-Fi, GST invoicing, and evenings your team will remember.
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
              <p className="font-sans text-xs text-ivory/60 mb-2">Corporate bookings &amp; GST:</p>
              <a href="mailto:thedivineoasisresort@gmail.com" className="font-serif text-sm text-gold hover:underline block">thedivineoasisresort@gmail.com</a>
              <a href="tel:+91990398950" className="font-sans text-xs text-ivory/70 hover:text-gold block mt-1">+91 99039 89950</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Also Explore</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Corporate Travel Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/resort-near-ajodhya-hill', label: 'Resort Near Ajodhya Hill' },
            { href: '/resort-near-baghmundi', label: 'Resort Near Baghmundi' },
            { href: '/family-resort-near-ajodhya-hill', label: 'Family Resort Near Ajodhya Hill' },
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

      <LuxuryAmenities label="Corporate Essentials" heading="Built for the Offsite Team" amenities={corporateAmenities} />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Guest Questions</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-12">Frequently Asked Questions</h2>
        <div className="space-y-10">
          {corporateFaq.map((item) => (
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