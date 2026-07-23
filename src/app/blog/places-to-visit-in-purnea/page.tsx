import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Places to Visit in Purnea',
  description:
    'Explore the best places to visit in Purnea near Hotel Surya Bella Casa. Puran Devi Temple, Kali Mandir, Jalalgarh Fort, and local attractions.',
  keywords: [
    'places to visit in purnea',
    'tourist attractions purnea',
    'things to do in purnea',
    'maa puran devi temple',
    'kali mandir purnea',
    'jalalgarh fort purnea',
    'purnea sightseeing',
    'purnea bihar travel guide',
    'vikass market purnea',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/places-to-visit-in-purnea',
  },
  openGraph: {
    title: 'Places to Visit in Purnea | Tourist Attractions & Local Guide',
    description: 'Discover the best places to visit in Purnea - Maa Puran Devi Temple, Kali Mandir, Jalalgarh Fort, shopping markets, and more. Complete Purnea travel guide.',
    url: 'https://hotelsuryabellacasa.com/blog/places-to-visit-in-purnea',
    siteName: 'Hotel Surya Bella Casa',
    type: 'article',
    publishedTime: '2025-10-22T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3809.avif', width: 1200, height: 630, alt: 'Places to Visit in Purnea - Tourist Attractions Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Visit in Purnea | Travel Guide',
    description: 'Explore the best tourist attractions in Purnea - temples, forts, markets, and more near Hotel Surya Bella Casa.',
    images: ['https://bookonelocal.in/cdn/IMG_3809.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const attractions = [
  {
    name: 'Maa Puran Devi Temple',
    distance: '10 mins drive',
    description: 'One of the oldest and most significant temples in Purnia, believed to be the origin of the city\'s name. A must-visit spiritual landmark.',
  },
  {
    name: 'Kali Mandir',
    distance: '5 mins drive',
    description: 'A highly revered temple in central Purnia dedicated to Goddess Kali. Known for its peaceful atmosphere and devotional significance.',
  },
  {
    name: 'Jalalgarh Fort',
    distance: '25 mins drive',
    description: 'A 300-year-old historic fort exhibiting a unique blend of Hindu and Islamic architecture. Built to protect the Seemanchal region from invaders.',
  },
  {
    name: 'Vikass Market',
    distance: '2 min walk',
    description: 'The largest commercial market in Purnia, located right opposite the hotel. Shop for fabrics, garments, electronics, and local handicrafts.',
  },
  {
    name: 'Bhatta Bazar',
    distance: '5 mins drive',
    description: 'Purnia\'s oldest commercial district known for traditional goods, local eateries, and authentic Bihari snacks.',
  },
  {
    name: 'Purnea Junction Railway Station',
    distance: '15 mins drive (6.1 km)',
    description: 'The main railway station connecting Purnia to Katihar, Bhagalpur, Saharsa, and major cities in Bihar and West Bengal.',
  },
]

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Places to Visit in Purnea | Nearby Attractions & Things to Do',
    description: 'Complete guide to places to visit in Purnea near Hotel Surya Bella Casa. Temples, forts, markets, and local attractions.',
    image: 'https://hotelsuryabellacasa.com/purneacity.jpg',
    datePublished: '2025-10-22',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'Hotel Surya Bella Casa' },
    publisher: { '@type': 'Organization', name: 'Hotel Surya Bella Casa' },
  }

  return (
    <BlogArticleLayout
      metadata={metadata}
      schema={schema}
      category="Travel Guide"
      date="Oct 22, 2025"
      heroImage="/purneacity.jpg"
      heroAlt="Purnea cityscape - Places to visit near Hotel Surya Bella Casa"
      relatedArticles={[
        { title: 'Things to Do in Purnia', link: '/blog/things-to-do-in-purnia' },
        { title: 'Purnia Travel Guide', link: '/blog/purnia-travel-guide' },
        { title: 'Local Food Guide in Purnia', link: '/blog/local-food-guide-in-purnia' },
        { title: 'Shopping in Purnia', link: '/blog/shopping-in-purnia' },
        { title: 'Best Hotels in Purnea Near Bus Stand', link: '/blog/best-hotels-in-purnea-near-bus-stand' },
      ]}
      serviceLinks={[
        { label: 'Hotel', link: '/' },
        { label: 'Restaurant', link: '/dining' },
        { label: 'Rooms', link: '/rooms' },
        { label: 'Contact', link: '/contact' },
        { label: 'Book Now', link: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true' },
        { label: 'How to Reach', link: '/how-to-reach' },
      ]}
    >
      <p>
        Purnia (also spelled Purnea) is the largest city in the Seemanchal region of Bihar, rich in
        history, culture, and spiritual significance. Whether you are visiting for business or leisure,
        there are several attractions near <strong><Link href="/" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> that are worth exploring.
      </p>
      <p>
        Located centrally at Suryalok Complex opposite Vikass Market and near the Bus Stand, our hotel
        provides easy access to all major attractions in and around Purnia. Book one of our
        <Link href="/rooms" className="text-gold hover:underline"> comfortable rooms</Link> and use our location as your base to explore the city.
      </p>

      <div className="mt-12 space-y-8">
        {attractions.map((attraction, i) => (
          <div key={i} className="bg-white border border-gold/10 rounded-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div>
                <h2 className="font-display text-xl italic text-forest mb-2">{attraction.name}</h2>
                <p className="font-sans text-sm text-gold font-medium mb-3">{attraction.distance}</p>
                <p className="font-sans text-base text-taupe/80 leading-relaxed">{attraction.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">After Sightseeing, Dine With Us</h2>
      <p>
        After a day of exploring, return to Hotel Surya Bella Casa for a delicious meal at our
        <Link href="/dining" className="text-gold hover:underline"> rooftop restaurant</Link>. We serve multi-cuisine dishes including Indian, Tandoor, Mughlai,
        and Continental. For more dining options in the city, check our
        <Link href="/blog/best-restaurant-in-purnia" className="text-gold hover:underline"> best restaurant in Purnia</Link> guide.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Plan Your Complete Purnea Trip</h2>
      <p>
        Our <Link href="/blog/purnia-travel-guide" className="text-gold hover:underline">Purnia travel guide</Link> has everything you need to plan your visit.
        Discover <Link href="/blog/shopping-in-purnia" className="text-gold hover:underline">shopping in Purnia</Link> for local handicrafts and garments, or explore
        the <Link href="/blog/things-to-do-in-purnia" className="text-gold hover:underline">things to do in Purnia</Link> for more activity ideas. Food lovers should read our
        <Link href="/blog/local-food-guide-in-purnia" className="text-gold hover:underline"> local food guide in Purnia</Link> for authentic Bihari cuisine.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Book Your Stay</h2>
      <p>
        Looking for a place to stay while exploring Purnea? Our
        <Link href="/blog/best-hotels-in-purnea-near-bus-stand" className="text-gold hover:underline"> best hotels near bus stand</Link> guide
        will help you choose. <Link href="/rooms/super-deluxe-room" className="text-gold hover:underline">Super Deluxe AC rooms</Link> and
        <Link href="/rooms/deluxe-ac-room" className="text-gold hover:underline"> Deluxe AC rooms</Link> are available at competitive rates.
        Check our <Link href="/offers" className="text-gold hover:underline">special offers</Link> or
        <Link href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> book directly online</Link>. For assistance, call
        <a href="tel:+919835923601" className="text-gold hover:underline"> +91 9835923601</a>.
      </p>
    </BlogArticleLayout>
  )
}
