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
  openGraph: {
    title: 'Business Hotel in Purnea | Corporate Stay Near Bus Stand',
    description: 'Best business hotel near Purnea Bus Stand with conference hall, high-speed WiFi, and workspace. Ideal for corporate travelers and professionals.',
    url: 'https://hotelsuryabellacasa.com/blog/business-hotel-in-purnea',
    siteName: 'Hotel Surya Bella Casa',
    type: 'article',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3709.jpeg', width: 1200, height: 630, alt: 'Business Hotel in Purnea - Corporate Stay Near Bus Stand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Hotel in Purnea | Corporate Stay',
    description: 'Best business hotel near Purnea Bus Stand. High-speed WiFi, conference hall, and workspace for corporate travelers. Book your corporate stay now.',
    images: ['https://bookonelocal.in/cdn/IMG_3709.jpeg'],
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
            "headline": "Business Hotel in Purnea - Corporate Stay Near Bus Stand",
            "description": "Discover the best business hotel in Purnea near Bus Stand with high-speed WiFi, conference hall, and comfortable workspaces for corporate travelers and professionals visiting Purnia, Bihar.",
            "image": "https://bookonelocal.in/cdn/IMG_3709.jpeg",
            "datePublished": "2024-01-15",
            "dateModified": "2024-06-01",
            "author": {
              "@type": "Organization",
              "name": "Hotel Surya Bella Casa"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hotel Surya Bella Casa"
            }
          })
        }}
      />

      <article className="max-w-[900px] mx-auto px-6 md:px-10 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-taupe/60 mb-8">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gold/40">/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <span className="text-gold/40">/</span>
          <span className="text-gold font-bold">Business Hotel in Purnea</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-6 leading-tight">
            Business Hotel in Purnea: Your Ideal Corporate Stay Near Bus Stand
          </h1>
          <div className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-6">
            <span>Hotel Surya Bella Casa</span>
            <span className="w-px h-3 bg-gold/30" />
            <span>Jan 15, 2024</span>
            <span className="w-px h-3 bg-gold/30" />
            <span>5 min read</span>
          </div>
          <div className="relative w-full aspect-[2/1] rounded-sm overflow-hidden">
            <Image
              src="https://bookonelocal.in/cdn/IMG_3709.jpeg"
              alt="Business Hotel in Purnea - Corporate Stay Near Bus Stand"
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
        </header>

        <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
          <p>
            Purnea is emerging as a key commercial and administrative center in Bihar, attracting business travelers from across the country. If you are looking for a <strong>business hotel in Purnea</strong> that combines professional amenities with comfortable accommodation, <Link href="/" className="text-gold hover:underline">Hotel Surya Bella Casa</Link> is your ideal choice.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Why Choose Hotel Surya Bella Casa for Business?</h2>
          <p>
            Located opposite <strong>Vikass Market</strong> and just steps from the <strong>Purnea Bus Stand</strong>, our hotel offers unmatched convenience for corporate travelers. Here is why we are the preferred business hotel in Purnea:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li><strong>High-Speed WiFi:</strong> Enterprise-grade fiber optic internet with backup link for uninterrupted video conferences.</li>
            <li><strong>Dedicated Work Desks:</strong> Spacious work areas with ergonomic seating and ample power outlets in premium rooms.</li>
            <li><strong>Conference Hall:</strong> Fully equipped meeting space for corporate presentations and team discussions.</li>
            <li><strong>Business Support:</strong> Print, scan, and fax assistance available at the front desk.</li>
            <li><strong>Express Check-In/Out:</strong> Zero-wait departure process with pre-arranged billing for corporate travelers.</li>
            <li><strong>Corporate Billing:</strong> Simplified invoicing with GST compliance for easy reimbursement.</li>
          </ul>

          <div className="bg-forest/5 border-l-4 border-gold p-6 my-8">
            <p className="font-serif text-lg text-forest italic">
              &ldquo;The best business hotel in Purnea near Bus Stand. High-speed WiFi, comfortable work desk, and peaceful rooms. Perfect for corporate travelers.&rdquo;
            </p>
            <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mt-3">— Verified Business Traveler</p>
          </div>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Prime Location for Business</h2>
          <p>
            Our location at <strong>Suryalok Complex, opposite Vikass Market</strong>, puts you minutes away from Purnea&apos;s commercial hubs including Bhatta Bazar, Line Bazar, and the main banking district. The <Link href="/how-to-reach" className="text-gold hover:underline">convenient access</Link> to Purnea Junction Railway Station (6.1 km) and the Bus Stand makes travel seamless.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Room Options for Professionals</h2>
          <p>
            Choose from our <Link href="/rooms" className="text-gold hover:underline">range of rooms</Link> designed for business travelers. Our Super Deluxe and Deluxe AC rooms offer the perfect environment for both work and rest. For extended corporate stays, check our <Link href="/offers" className="text-gold hover:underline">corporate packages</Link> with special rates.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Amenities for Corporate Guests</h2>
          <p>
            We understand the needs of business travelers. Our amenities include 24/7 power backup, secure parking, elevator access, and round-the-clock front desk assistance. The <Link href="/dining" className="text-gold hover:underline">food delivery coordination</Link> with local restaurants ensures you never miss a meal during busy workdays.
          </p>

          <div className="bg-gold/5 border border-gold/20 p-8 rounded-sm mt-10 text-center">
            <h3 className="font-display text-2xl italic text-forest mb-3">Book Your Corporate Stay Today</h3>
            <p className="font-serif text-taupe mb-6">Experience the best business hotel in Purnea. Special corporate tariffs available.</p>
            <a
              href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.18em] px-8 py-3 rounded-sm hover:bg-gold-light transition-colors font-bold"
            >
              Book Corporate Stay
            </a>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-16 pt-10 border-t border-gold/10">
          <h3 className="font-display text-2xl italic text-forest mb-6">Related Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/business-hotel-in-purnia', label: 'Business Hotel in Purnia - Landing Page' },
              { href: '/rooms', label: 'View All Rooms & Suites' },
              { href: '/events/corporate', label: 'Conference Hall & Corporate Events' },
              { href: '/offers', label: 'Corporate Packages & Offers' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 bg-white p-4 border border-gold/10 rounded-sm hover:border-gold/40 transition-all"
              >
                <Wifi size={14} className="text-gold flex-shrink-0" />
                <span className="font-sans text-sm text-forest/80 group-hover:text-gold transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
