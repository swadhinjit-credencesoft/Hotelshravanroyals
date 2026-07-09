import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Banquet Hall & Wedding Venue Purnea',
  description:
    'Plan your wedding at the best banquet hall in Purnea near Bus Stand. Marriage hall, wedding venue, and conference room for events at Hotel Surya Bella Casa opposite Vikass Market. Book now.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/banquet-hall-wedding-venue-in-purnea',
  },
  openGraph: {
    title: 'Banquet Hall & Wedding Venue Purnea | Marriage Hall Near Bus Stand',
    description: 'Best banquet hall near Purnea Bus Stand for weddings, receptions, and corporate events. Marble flooring, modern lighting, AC comfort at Hotel Surya Bella Casa.',
    url: 'https://hotelsuryabellacasa.com/blog/banquet-hall-wedding-venue-in-purnea',
    siteName: 'Hotel Surya Bella Casa',
    type: 'article',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3809.avif', width: 1200, height: 630, alt: 'Banquet Hall & Wedding Venue Purnea - Marriage Hall Near Bus Stand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banquet Hall & Wedding Venue Purnea',
    description: 'Best wedding venue and banquet hall near Purnea Bus Stand. Plan your dream wedding at Hotel Surya Bella Casa.',
    images: ['https://bookonelocal.in/cdn/IMG_3809.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function BlogPost() {
  return (
    <main className="bg-cream min-h-screen pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Banquet Hall & Wedding Venue in Purnea | Marriage Hall Near Bus Stand",
            "description": "Complete guide to the best banquet hall and wedding venue in Purnea near Bus Stand. Marriage hall, conference room, and party venue at Hotel Surya Bella Casa.",
            "image": "https://bookonelocal.in/cdn/IMG_3766.avif",
            "datePublished": "2026-01-10",
            "dateModified": "2026-07-06",
            "author": { "@type": "Organization", "name": "Hotel Surya Bella Casa" },
            "publisher": { "@type": "Organization", "name": "Hotel Surya Bella Casa" }
          })
        }}
      />

      <article className="max-w-[800px] mx-auto px-6 md:px-10 pb-24">
        <div className="mb-8">
          <Link href="/blog" className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold hover:text-forest transition-colors">
            &larr; Back to Blog
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">Events & Weddings</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="font-sans text-[10px] text-taupe/60 tracking-wider">Jan 10, 2026</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
          Banquet Hall & Wedding Venue in Purnea Near Bus Stand
        </h1>

        <div className="relative aspect-[16/9] mb-12 border border-gold/10">
          <Image
            src="https://bookonelocal.in/cdn/IMG_3766.avif"
            alt="Banquet hall and event space at Hotel Surya Bella Casa Purnea"
            fill
            className="object-cover"
          />
        </div>

        <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose">
          <p>
            Finding the right <strong>banquet hall in Purnea</strong> for a wedding, reception, or corporate 
            event can be challenging. <strong><Link href="/events" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> offers versatile event spaces 
            located opposite Vikass Market, just minutes from Purnia Bus Stand and easily accessible from 
            all parts of the city.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Event Spaces & Capacity</h2>
          <p>
            Our venue features a beautifully decorated <strong>banquet hall</strong> capable of hosting 
            wedding ceremonies, engagement parties, and social gatherings with a warm and elegant ambiance. 
            The <strong>conference hall</strong> is ideal for business meetings, seminars, and corporate 
            events with professional seating and audio-visual support.
          </p>
          <p>
            We also offer <strong>party hall facilities</strong> for birthday celebrations, anniversary 
            parties, and private gatherings. Our dedicated events team coordinates every detail from 
            catering to decor.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Wedding Services</h2>
          <p>
            Planning a <strong>marriage hall in Purnea?</strong> Hotel Surya Bella Casa provides 
            comprehensive wedding services including catering, decoration, music arrangement, and 
            guest accommodation. Our in-house team handles all arrangements so you can focus on 
            enjoying your special day.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Why Choose Us for Your Event?</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li>Prime location near Purnia Bus Stand and Vikass Market</li>
            <li>Flexible event spaces for weddings, parties, and meetings</li>
            <li>In-house catering with multi-cuisine menu options</li>
            <li>Guest rooms available for out-of-town attendees</li>
            <li>Dedicated parking for event guests</li>
            <li>Experienced event coordination team</li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-wrap gap-3">
          <Link href="/events" className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold-light transition-all font-bold">
            <Calendar size={14} /> Explore Event Spaces
          </Link>
          <a href="https://www.google.com/maps/dir/?api=1&destination=25.7771,87.4753" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold/30 text-forest font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold/10 transition-all">
            <MapPin size={14} /> Visit Our Venue
          </a>
        </div>
      </article>
    </main>
  )
}
