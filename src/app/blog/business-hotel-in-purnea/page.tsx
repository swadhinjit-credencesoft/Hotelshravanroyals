import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Wifi } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Hotel in Purnea',
  description:
    'Best business hotel in Purnea near Bus Stand with conference hall, high-speed WiFi, and meeting room. Ideal corporate stay for professionals visiting Purnia. Book now.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/business-hotel-in-purnea',
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
            "headline": "Business Hotel in Purnea | Corporate Stay Near Bus Stand for Professionals",
            "description": "Guide to the best business hotel in Purnea near Bus Stand. Conference hall, high-speed WiFi, meeting rooms for corporate travelers at Hotel Surya Bella Casa.",
            "image": "https://bookonelocal.in/cdn/IMG_3703.avif",
            "datePublished": "2025-12-05",
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
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">Business Travel</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="font-sans text-[10px] text-taupe/60 tracking-wider">Dec 5, 2025</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
          Business Hotel in Purnea Near Bus Stand
        </h1>

        <div className="relative aspect-[16/9] mb-12 border border-gold/10">
          <Image
            src="https://bookonelocal.in/cdn/IMG_3703.avif"
            alt="Spacious room for business travelers at Hotel Surya Bella Casa Purnea"
            fill
            className="object-cover"
          />
        </div>

        <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose">
          <p>
            For business travelers visiting Purnia, finding a hotel that combines comfort with 
            productivity is essential. <strong><Link href="/business-hotel-in-purnia" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> is the premier business hotel 
            in Purnea near Bus Stand, offering the amenities and services that corporate guests need.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Corporate Amenities</h2>
          <p>
            Our hotel provides <strong>high-speed WiFi</strong> throughout the property, a dedicated 
            <strong>conference hall</strong>, and a <strong>meeting room</strong> equipped with 
            audio-visual facilities. Whether you need to host a client meeting or conduct a team 
            presentation, our spaces are designed for professional productivity.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Workspaces in Every Room</h2>
          <p>
            Each room features a <strong>dedicated work desk</strong>, ample power outlets, and 
            comfortable seating. Our Super Deluxe AC Rooms offer additional space ideal for 
            extended corporate stays and working professionals who need room to spread out.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Location Advantage</h2>
          <p>
            Located opposite <strong>Vikass Market</strong> and near <strong>Purnia Bus Stand</strong>, 
            our hotel offers easy access to government offices, banks, and commercial establishments. 
            The <strong>Purnea Junction Railway Station</strong> is just 6.1 km away, and auto-rickshaws 
            are readily available for local travel.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Extended Stay Services</h2>
          <p>
            For professionals on long-term assignments, we offer discounted weekly and monthly rates, 
            laundry services, 24/7 room service, and complimentary tea and coffee in all rooms. 
            Our team is available around the clock to assist with any business-related requirements.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <Link href="/rooms" className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold-light transition-all font-bold">
            <Wifi size={14} /> View Rooms for Business Travelers
          </Link>
        </div>
      </article>
    </main>
  )
}
