import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import { Train, Bus, Car, Plane, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Reach The Divine Oasis | Ajodhya Hill, Purulia Travel Guide',
  description:
    'Complete travel guide to reach The Divine Oasis at Ajodhya Hill, Purulia. Directions from Purulia Junction (42.6 km), Ranchi (110 km), Kolkata (280 km), and by air/rail/road.',
  keywords: [
    'how to reach Ajodhya Hill',
    'Purulia directions',
    'Purulia Junction railway station',
    'Ajodhya Hill resort',
    'Purulia airport distance',
    'travel to Purulia West Bengal',
    'reach The Divine Oasis',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/how-to-reach',
  },
  openGraph: {
    title: 'How to Reach The Divine Oasis | Ajodhya Hill, Purulia Travel Guide',
    description: 'Complete travel directions to reach The Divine Oasis at Ajodhya Hill, Purulia. Guide from Purulia Junction, Ranchi, Kolkata, and nearby cities. Book your stay now.',
    url: 'https://thedivineoasisresort.com/how-to-reach',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg', width: 1200, height: 630, alt: 'How to Reach The Divine Oasis Ajodhya Hill - Travel Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach The Divine Oasis | Ajodhya Hill, Purulia',
    description: 'Complete travel guide to reach The Divine Oasis at Ajodhya Hill, Purulia. Directions from Purulia Junction, Ranchi, Kolkata, and nearby cities.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
    subtitle: 'Purulia Junction (42.6 km)',
    details: [
      'Nearest station: Purulia Junction (PRR)',
      'Distance from resort: 42.6 km (~60-70 min drive)',
      'Taxis and auto-rickshaws readily available outside station',
      'Fare from station: â‚¹1,200-1,500 by taxi',
      'Major connections: Kolkata, Tatanagar, Ranchi, Adra, Bokaro',
    ],
  },
  {
    icon: Bus,
    title: 'By Road / Bus',
    subtitle: 'Ajodhya Hills & Forest Reserve (0.4 km)',
    details: [
      'Regular buses from Ranchi (2.5 hrs), Kolkata (5.5-6.5 hrs), Tatanagar (2 hrs)',
      'State and private buses operate regularly to Purulia town',
      'From Purulia, take local taxi to Ajodhya Hill (38.5 km via Baghmundi)',
      'Resort is 0.4 km from Ajodhya Hills & Forest Reserve entrance',
      'Parking available on-site for private vehicles',
    ],
  },
  {
    icon: Car,
    title: 'By Car / Taxi',
    subtitle: 'Well-connected by NH 19, NH 20, NH 14',
    details: [
      'From Kolkata: ~280 km via NH 19 & NH 14 (5.5-6.5 hrs drive)',
      'From Ranchi: ~110 km via NH 20 (2.5-3 hrs drive)',
      'From Tatanagar/Jamshedpur: ~90 km via NH 18 (2 hrs drive)',
      'From Asansol: ~80 km via NH 14 (2 hrs drive)',
      'GPS: 643G+4Q, Hilltop, Ajodhya, Purulia 723152',
    ],
  },
  {
    icon: Plane,
    title: 'By Air',
    subtitle: 'Nearest airports',
    details: [
      'Birsa Munda Airport, Ranchi (IXR): ~110 km, 2.5-3 hrs drive',
      'Netaji Subhas Chandra Bose Airport, Kolkata (CCU): ~280 km, 5.5-6.5 hrs drive',
      'Sonari Airport, Jamshedpur (IXW): ~90 km, 2 hrs drive (limited flights)',
      'Taxi services available from all airports',
      'Resort can arrange pickup on prior request',
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
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'How to Reach',
                item: 'https://thedivineoasisresort.com/how-to-reach',
              },
            ],
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Reach The Divine Oasis Ajodhya Hill",
            "description": "Complete travel directions and transportation options to reach The Divine Oasis at Ajodhya Hill, Purulia, West Bengal.",
            "author": { "@type": "Organization", "name": "The Divine Oasis" },
            "about": { "@type": "Hotel", "name": "The Divine Oasis" }
          })
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">Travel Guide</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl italic text-forest mb-6">
            How to Reach The Divine Oasis Ajodhya Hill
          </h1>
          <p className="font-serif text-xl text-taupe max-w-2xl mx-auto leading-relaxed">
            Perched atop Ajodhya Hill in Purulia, The Divine Oasis is accessible by rail, road, and air. 
            Here is your complete travel guide to reaching our forest resort in Purulia, West Bengal.
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
            pickup from Purulia Junction, and provide detailed directions. 
            Call us or message on WhatsApp for personalized assistance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+91990398950"
              className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-gold-light transition-all font-bold"
            >
              Call +91 99039 89950
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=91990398950&text=Hi! I need help with directions to The Divine Oasis Ajodhya Hill"
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
              The Divine Oasis
            </p>
            <p className="font-sans text-base text-taupe/80 mb-2">
              643G+4Q, Hilltop
            </p>
            <p className="font-sans text-base text-taupe/80 mb-2">
              Ajodhya, Purulia, West Bengal 723152
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=23.2028654,86.1268909"
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
