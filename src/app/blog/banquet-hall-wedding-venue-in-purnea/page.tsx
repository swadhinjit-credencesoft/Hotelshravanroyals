import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Banquet Hall & Wedding Venue Purnea',
  description:
    'Plan your wedding at the best banquet hall in Purnea near Bus Stand. Marriage hall and wedding venue at Hotel Surya Bella Casa opposite Vikass Market.',
  keywords: [
    'banquet hall in purnea',
    'wedding venue in purnea',
    'marriage hall near purnea bus stand',
    'party hall purnea',
    'corporate event venue purnea',
    'engagement venue purnea',
    'birthday party hall purnea',
    'conference hall purnea',
    'hotel banquet purnea',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/banquet-hall-wedding-venue-in-purnea',
  },
  openGraph: {
    title: 'Banquet Hall & Wedding Venue Purnea | Marriage Hall Near Bus Stand',
    description: 'Best banquet hall near Purnea Bus Stand for weddings, receptions, and corporate events. Marble flooring, modern lighting, AC comfort at Hotel Surya Bella Casa.',
    url: 'https://hotelsuryabellacasa.com/blog/banquet-hall-wedding-venue-in-purnea',
    siteName: 'Hotel Surya Bella Casa',
    type: 'article',
    publishedTime: '2026-01-10T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Banquet Hall & Wedding Venue in Purnea | Marriage Hall Near Bus Stand',
    description: 'Complete guide to the best banquet hall and wedding venue in Purnea near Bus Stand. Marriage hall, conference room, and party venue at Hotel Surya Bella Casa.',
    image: 'https://bookonelocal.in/cdn/IMG_3766.avif',
    datePublished: '2026-01-10',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'Hotel Surya Bella Casa' },
    publisher: { '@type': 'Organization', name: 'Hotel Surya Bella Casa' },
  }

  return (
    <BlogArticleLayout
      metadata={metadata}
      schema={schema}
      category="Events & Weddings"
      date="Jan 10, 2026"
      heroImage="https://bookonelocal.in/cdn/IMG_3766.avif"
      heroAlt="Banquet hall and event space at Hotel Surya Bella Casa Purnea"
      relatedArticles={[
        { title: 'Wedding Venue in Purnea', link: '/blog/wedding-venue-in-Purnea' },
        { title: 'Birthday Party Venue in Purnea', link: '/blog/birthday-party-venue-in-Purnea' },
        { title: 'Corporate Event Venue in Purnea', link: '/blog/corporate-event-venue-in-Purnea' },
        { title: 'Luxury Hotel in Purnea', link: '/blog/luxury-hotel-in-Purnea' },
        { title: 'Rooftop Restaurant in Purnea', link: '/blog/rooftop-restaurant-in-purnea' },
      ]}
      serviceLinks={[
        { label: 'Banquet Hall', link: '/events' },
        { label: 'Catering', link: '/dining' },
        { label: 'Rooms', link: '/rooms' },
        { label: 'Gallery', link: '/gallery' },
        { label: 'Contact', link: '/contact' },
        { label: 'Book Now', link: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true' },
      ]}
    >
      <p>
        Finding the right <strong>banquet hall in Purnea</strong> for a wedding, reception, or corporate
        event can be challenging. <strong><Link href="/events" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> offers versatile event spaces
        located opposite Vikass Market, just minutes from Purnea Bus Stand and easily accessible from
        all parts of the city. Whether you are planning a <Link href="/events/weddings" className="text-gold hover:underline">wedding</Link> or a
        <Link href="/events/corporate" className="text-gold hover:underline"> corporate event</Link>, we have the perfect space.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Event Spaces & Capacity</h2>
      <p>
        Our venue features a beautifully decorated <strong>banquet hall</strong> capable of hosting
        wedding ceremonies, engagement parties, and social gatherings with a warm and elegant ambiance.
        The <strong>conference hall</strong> is ideal for <Link href="/events/corporate" className="text-gold hover:underline">business meetings, seminars, and corporate
        events</Link> with professional seating and audio-visual support.
      </p>
      <p>
        We also offer <strong>party hall facilities</strong> for <Link href="/blog/birthday-party-venue-in-Purnea" className="text-gold hover:underline">birthday celebrations</Link>, anniversary
        parties, and private gatherings. Our dedicated events team coordinates every detail from
        catering to decor.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Wedding Services</h2>
      <p>
        Planning a <strong>marriage hall in Purnea?</strong> Hotel Surya Bella Casa provides
        comprehensive <Link href="/events/weddings" className="text-gold hover:underline">wedding services</Link> including catering, decoration, music arrangement, and
        guest accommodation. Our in-house team handles all arrangements so you can focus on
        enjoying your special day. Browse our guide to <Link href="/blog/wedding-venue-in-Purnea" className="text-gold hover:underline">wedding venues in Purnea</Link> for more inspiration.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Why Choose Us for Your Event?</h2>
      <ul className="space-y-3 list-disc pl-6">
        <li>Prime location near Purnea Bus Stand and Vikass Market — easy for guests to reach</li>
        <li>Flexible event spaces for <Link href="/events/weddings" className="text-gold hover:underline">weddings</Link>, <Link href="/blog/birthday-party-venue-in-Purnea" className="text-gold hover:underline">parties</Link>, and <Link href="/events/corporate" className="text-gold hover:underline">meetings</Link></li>
        <li>In-house <Link href="/dining" className="text-gold hover:underline">catering</Link> with multi-cuisine menu options</li>
        <li><Link href="/rooms" className="text-gold hover:underline">Guest rooms</Link> available for out-of-town attendees</li>
        <li>Dedicated parking for event guests</li>
        <li>Experienced event coordination team</li>
      </ul>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Accommodation for Guests</h2>
      <p>
        Out-of-town guests can stay in our <Link href="/rooms/super-deluxe-room" className="text-gold hover:underline">Super Deluxe AC rooms</Link> or
        <Link href="/rooms/deluxe-ac-room" className="text-gold hover:underline"> Deluxe AC rooms</Link>. We offer special group rates for wedding and event blocks.
        Check our <Link href="/offers" className="text-gold hover:underline">special offers</Link> for event-related packages.
      </p>

      <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Plan Your Event Today</h2>
      <p>
        Read our guide to <Link href="/blog/corporate-event-venue-in-Purnea" className="text-gold hover:underline">corporate event venues in Purnea</Link> for business event planning.
        After your event, guests can explore <Link href="/blog/places-to-visit-in-purnea" className="text-gold hover:underline">places to visit in Purnea</Link> or enjoy
        a meal at our <Link href="/blog/rooftop-restaurant-in-purnea" className="text-gold hover:underline">rooftop restaurant</Link>.
      </p>
      <p>
        Contact us to discuss your event requirements. Reach out via
        <a href="tel:+919835923601" className="text-gold hover:underline"> +91 9835923601</a> or
        <Link href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> book online</Link>.
        You can also visit our <Link href="/contact" className="text-gold hover:underline">contact page</Link> for more details.
      </p>
    </BlogArticleLayout>
  )
}
