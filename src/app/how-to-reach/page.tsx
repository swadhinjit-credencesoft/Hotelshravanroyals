import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import { Train, Bus, Car, Plane, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Reach Us & Travel Guide',
  description:
    'Complete travel guide to reach Hotel Surya Bella Casa in Purnea. Directions from Purnea Junction Railway Station, Bus Stand, nearby cities like Patna, Siliguri, and Bhagalpur. Book direct!',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/how-to-reach',
  },
  openGraph: {
    title: 'How to Reach Hotel Surya Bella Casa Purnea | Travel Guide',
    description: 'Complete travel directions to reach Hotel Surya Bella Casa in Purnea. Guide from railway station, bus stand, and nearby cities. Book your stay now.',
    url: 'https://hotelsuryabellacasa.com/how-to-reach',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'How to Reach Hotel Surya Bella Casa Purnea - Travel Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach Hotel Surya Bella Casa Purnea',
    description: 'Complete travel guide to reach Hotel Surya Bella Casa in Purnea. Directions from railway station, bus stand, and nearby cities.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const routes = [
  {
    icon: Train,
    title: 'By Railway',
    subtitle: 'Purnea Junction (6.1 km)',
    details: [
      'Nearest station: Purnea Junction Railway Station',
      'Distance from hotel: 6.1 km (15 min drive)',
      'Auto-rickshaw and e-rickshaw readily available outside station',
      'Fare from station: ₹150-200 by auto-rickshaw',
      'Major connections: Katihar, Bhagalpur, Saharsa, Barsoi',
    ],
  },
  {
    icon: Bus,
    title: 'By Road / Bus',
    subtitle: 'Purnia Bus Stand (walking distance)',
    details: [
      'Nearest bus stop: Purnia Main Bus Stand (just 200m walk)',
      'Regular buses from Patna (6 hrs), Bhagalpur (3 hrs), Siliguri (4 hrs)',
      'State and private buses operate regularly to Purnia',
      'Hotel is opposite Vikass Market, easily visible from Bus Stand',
      'Parking available on-site for private vehicles',
    ],
  },
  {
    icon: Car,
    title: 'By Car / Taxi',
    subtitle: 'Well-connected by NH-31 and NH-27',
    details: [
      'From Patna: ~260 km via NH-31 (6 hrs drive)',
      'From Siliguri: ~180 km via NH-27 (4 hrs drive)',
      'From Bhagalpur: ~100 km via NH-31 (2.5 hrs drive)',
      'From Katihar: ~35 km via NH-31 (45 min drive)',
      'GPS: Suryalok Complex, Opposite Vikass Market, Near Bus Stand, Purnia',
    ],
  },
  {
    icon: Plane,
    title: 'By Air',
    subtitle: 'Nearest airports',
    details: [
      'Bagdogra Airport (IXB): ~180 km, 4 hrs drive',
      'Patna Airport (PAT): ~260 km, 6 hrs drive',
      'Darbhanga Airport (DBR): ~120 km, 3 hrs drive (upcoming flights)',
      'Taxi services available from all airports',
      'Hotel can arrange pickup on request',
    ],
  },
]

export default function HowToReachPage() {
  return (
    <main className="bg-cream min-h-screen pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Reach Hotel Surya Bella Casa Purnea",
            "description": "Complete travel directions and transportation options to reach Hotel Surya Bella Casa in Purnia, Bihar.",
            "author": { "@type": "Organization", "name": "Hotel Surya Bella Casa" },
            "about": { "@type": "Hotel", "name": "Hotel Surya Bella Casa" }
          })
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">Travel Guide</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl italic text-forest mb-6">
            How to Reach Hotel Surya Bella Casa Purnea
          </h1>
          <p className="font-serif text-xl text-taupe max-w-2xl mx-auto leading-relaxed">
            Located opposite Vikass Market near the main Bus Stand, Hotel Surya Bella Casa is easily accessible 
            by road, rail, and air. Here is your complete travel guide to reaching the best hotel in Purnia, Bihar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {routes.map((route, i) => (
            <div key={i} className="bg-white border border-gold/10 rounded-sm p-8 md:p-10 hover:shadow-warm-lg transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center">
                  <route.icon className="text-gold" size={24} />
                </div>
                <div>
                  <h2 className="font-display text-2xl italic text-forest">{route.title}</h2>
                  <p className="font-sans text-sm text-gold font-medium">{route.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {route.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <MapPin size={14} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-sans text-[14px] text-taupe/80 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-forest text-ivory/80 rounded-sm p-10 md:p-16 mb-24">
          <h2 className="font-display text-3xl md:text-4xl italic text-ivory mb-6">
            Need Help Reaching Us?
          </h2>
          <p className="font-serif text-lg leading-relaxed mb-8 max-w-2xl">
            Our front desk team can assist you with local transport arrangements, 
            pickup from the railway station or bus stand, and provide detailed 
            directions. Call us or message on WhatsApp for personalized assistance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919835923601"
              className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-gold-light transition-all font-bold"
            >
              Call +91 9835923601
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919835923601&text=Hi! I need help with directions to Hotel Surya Bella Casa Purnea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/50 text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-gold/10 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8 text-center">
            Address for GPS
          </h2>
          <div className="bg-white border border-gold/10 rounded-sm p-8 text-center max-w-lg mx-auto">
            <p className="font-serif text-xl text-forest font-medium mb-2">
              Suryalok Complex
            </p>
            <p className="font-sans text-base text-taupe/80 mb-2">
              Opposite Vikass Market, Near Bus Stand
            </p>
            <p className="font-sans text-base text-taupe/80 mb-6">
              Purnia, Bihar 854301
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=25.7771,87.4753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-gold-light transition-all font-bold"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
