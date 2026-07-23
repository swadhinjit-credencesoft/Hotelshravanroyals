import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Family Hotel in Purnea',
  description:
    'Best family hotel in Purnea near Bus Stand. Spacious family rooms, safe environment, elevator access, and 24/7 staff assistance at Hotel Surya Bella Casa.',
  keywords: [
    'family hotel in purnea',
    'safe hotel for families purnea',
    'family stay near purnea bus stand',
    'spacious family rooms purnea',
    'hotel with elevator purnea',
    'family friendly hotel purnia',
    'couple friendly hotel purnea',
    'senior citizen friendly hotel purnea',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/family-hotel-in-purnea',
  },
  openGraph: {
    title: 'Family Hotel in Purnea | Safe Stay Near Bus Stand',
    description: 'Best family hotel near Purnea Bus Stand with spacious rooms, elevator access, CCTV security, and pure vegetarian environment. Safe stay for families visiting Purnia.',
    url: 'https://hotelsuryabellacasa.com/blog/family-hotel-in-purnea',
    siteName: 'Hotel Surya Bella Casa',
    type: 'article',
    publishedTime: '2025-11-18T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3764.avif', width: 1200, height: 630, alt: 'Family Hotel in Purnea - Safe Stay Near Bus Stand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Hotel in Purnea | Safe Family Stay',
    description: 'Best family hotel in Purnea with spacious rooms, lift access, and CCTV security. Safe and comfortable stay near Bus Stand.',
    images: ['https://bookonelocal.in/cdn/IMG_3764.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Family Hotel in Purnea | Safe Family Stay Near Bus Stand & Vikass Market',
    description: 'Complete guide to the best family hotel in Purnea near Bus Stand. Safe, spacious family rooms with modern amenities at Hotel Surya Bella Casa.',
    image: 'https://bookonelocal.in/cdn/IMG_3701.avif',
    datePublished: '2025-11-18',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'Hotel Surya Bella Casa' },
    publisher: { '@type': 'Organization', name: 'Hotel Surya Bella Casa' },
  }

  return (
    <BlogArticleLayout
      metadata={metadata}
      schema={schema}
      category="Family Stay"
      date="Nov 18, 2025"
      heroImage="https://bookonelocal.in/cdn/IMG_3701.avif"
      heroAlt="Family-friendly room at Hotel Surya Bella Casa Purnea"
      relatedArticles={[
        { title: 'Best Hotels in Purnea Near Bus Stand', link: '/blog/best-hotels-in-purnea-near-bus-stand' },
        { title: 'Luxury Hotel in Purnia', link: '/blog/luxury-hotel-in-purnia' },
        { title: 'Business Hotel in Purnea', link: '/blog/business-hotel-in-purnea' },
        { title: 'Family Restaurant in Purnia', link: '/blog/family-restaurant-in-purnia' },
        { title: 'Places to Visit in Purnea', link: '/blog/places-to-visit-in-purnea' },
      ]}
      serviceLinks={[
        { label: 'Family Rooms', link: '/rooms' },
        { label: 'Restaurant', link: '/dining' },
        { label: 'Gallery', link: '/gallery' },
        { label: 'Contact', link: '/contact' },
        { label: 'Book Now', link: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true' },
        { label: 'Offers', link: '/offers' },
      ]}
    >
      <p>
        Traveling with family requires careful planning to ensure safety, comfort, and convenience.
        <strong><Link href="/" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> is the ideal family hotel in Purnea near Bus Stand,
        offering a welcoming environment for couples, parents with children, and senior citizens. Explore our
        <Link href="/rooms" className="text-gold hover:underline"> family-friendly rooms</Link> designed for every type of family stay.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Family-Friendly Rooms</h2>
      <p>
        Our <strong>Deluxe AC and Super Deluxe AC Rooms</strong> offer ample space for families.
        Each room is equipped with comfortable bedding, a mini-fridge, a flat-screen TV, and an
        attached bathroom with geyser for hot water. Extra mattresses can be arranged for children
        upon request. <Link href="/rooms/super-deluxe-room" className="text-gold hover:underline">View Super Deluxe AC rooms</Link> or
        <Link href="/rooms/deluxe-ac-room" className="text-gold hover:underline"> Deluxe AC rooms</Link> for detailed amenities.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Safety & Convenience</h2>
      <p>
        We prioritize family safety with <strong>24/7 staff assistance</strong>, secure key-card
        access to rooms, and a <strong>lift/elevator</strong> for easy access to upper floors —
        particularly helpful for elderly family members and guests with luggage. The property
        maintains a pure vegetarian environment, ensuring a comfortable stay for all guests.
        Have questions? Check our <Link href="/faq" className="text-gold hover:underline">FAQ page</Link> for common family stay queries.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Nearby for Families</h2>
      <p>
        Located opposite <strong>Vikass Market</strong>, families can enjoy shopping, dining, and
        exploring local attractions within walking distance. <strong>Maa Puran Devi Temple</strong>
        and <strong>Kali Mandir</strong> are just a short auto ride away, making it easy to plan
        a spiritual outing during your stay. Read our guide to <Link href="/blog/places-to-visit-in-purnea" className="text-gold hover:underline">places to visit in Purnea</Link> for
        more family-friendly attractions.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Dining for the Whole Family</h2>
      <p>
        Our <Link href="/dining" className="text-gold hover:underline">rooftop restaurant</Link> serves a variety of cuisines including Indian, Tandoor, Mughlai,
        Asian, and Continental. We also coordinate with local restaurants via Swiggy and Zomato
        for doorstep delivery, giving families plenty of dining options. Check our guide to
        <Link href="/blog/family-restaurant-in-purnia" className="text-gold hover:underline"> family restaurants in Purnia</Link> for more recommendations.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Plan Your Family Trip to Purnea</h2>
      <p>
        Our <Link href="/blog/best-hotels-in-purnea-near-bus-stand" className="text-gold hover:underline">best hotels near bus stand</Link> guide helps you choose the perfect accommodation.
        For a complete trip plan, read our <Link href="/blog/purnia-travel-guide" className="text-gold hover:underline">Purnia travel guide</Link>.
        Families can also enjoy our <Link href="/blog/rooftop-restaurant-in-purnea" className="text-gold hover:underline">rooftop restaurant</Link> and explore
        <Link href="/blog/shopping-in-purnia" className="text-gold hover:underline"> shopping in Purnia</Link>. If you are interested in events, we host
        <Link href="/events/weddings" className="text-gold hover:underline"> family weddings</Link> and celebrations.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Book Your Family Stay</h2>
      <p>
        Check our <Link href="/offers" className="text-gold hover:underline">special offers</Link> for family packages. <Link href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Book directly</Link> for the best rates or call
        <a href="tel:+919835923601" className="text-gold hover:underline"> +91 9835923601</a> for family booking assistance. Visit our
        <Link href="/contact" className="text-gold hover:underline"> contact page</Link> for directions and more information. For business travelers visiting with family, see our
        <Link href="/blog/business-hotel-in-purnea" className="text-gold hover:underline"> business hotel guide</Link>.
      </p>
    </BlogArticleLayout>
  )
}
