import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Outdoor Wedding Venue in Purulia | Forest & Hilltop Ceremonies',
  description:
    'Book the best outdoor wedding venue in Purulia at The Divine Oasis. Open-air hilltop ceremonies, organic catering, and guest cottages near the Ajodhya Hills & Forest Reserve.',
  keywords: [
    'outdoor wedding venue purulia',
    'open air wedding ajodhya',
    'hilltop marriage venue purulia',
    'garden wedding ajodhya hills',
    'natural wedding venue west bengal',
    'outdoor ceremony resort purulia',
    'small outdoor wedding ajodhya',
    'forest wedding purulia',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/outdoor-wedding-venue-in-purulia',
  },
  openGraph: {
    title: 'Outdoor Wedding Venue in Purulia | The Divine Oasis',
    description: 'An outdoor wedding venue in Purulia — open-air hilltop ceremonies, organic catering, and guest cottages near the Ajodhya Hills & Forest Reserve at The Divine Oasis.',
    url: 'https://thedivineoasisresort.com/blog/outdoor-wedding-venue-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-07-05T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064511341-WhatsApp Image 2026-05-11 at 15.42.13 (2).jpg', width: 1200, height: 630, alt: 'Outdoor wedding venue in Purulia - The Divine Oasis Ajodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outdoor Wedding Venue in Purulia',
    description: 'Outdoor wedding venue in Purulia at The Divine Oasis — open-air hilltop ceremonies, organic catering, and guest cottages near Ajodhya Hills.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064511341-WhatsApp Image 2026-05-11 at 15.42.13 (2).jpg'],
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
    headline: 'Outdoor Wedding Venue in Purulia | Forest & Hilltop Ceremonies',
    description: 'An outdoor wedding venue in Purulia — open-air hilltop ceremonies, organic catering, and guest cottages near the Ajodhya Hills & Forest Reserve.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064511341-WhatsApp Image 2026-05-11 at 15.42.13 (2).jpg',
    datePublished: '2026-07-05',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'The Divine Oasis' },
    publisher: { '@type': 'Organization', name: 'The Divine Oasis' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best outdoor wedding venue in Purulia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Divine Oasis is the best outdoor wedding venue in Purulia — an open hilltop ground near Ajodhya Hills with forest backdrop, catering, and guest cottages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the venue covered in case of rain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We plan ceremony slots around weather and can set up covered/semi-covered reception seating, especially before the rainy months.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do couples get overnight stays?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the couple can stay in the Luxury Suite Cottage while guests book mud cottages, VISTA four-bed rooms, and pod cottages.',
        },
      },
      {
        '@type': 'Question',
        name: 'How early should we book an outdoor wedding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '3-6 months ahead is ideal, especially for peak season (November to February), so the venue, catering, and cottage block can be locked together.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogArticleLayout
        metadata={metadata}
        schema={schema}
        category="Events & Weddings"
        date="Jul 5, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064511341-WhatsApp Image 2026-05-11 at 15.42.13 (2).jpg"
        heroAlt="Outdoor wedding venue in Purulia - open-air hilltop ceremony at The Divine Oasis, Ajodhya"
        relatedArticles={[
          { title: 'Wedding Venue in Purulia', link: '/blog/wedding-venue-in-purulia' },
          { title: 'Birthday Party Resort in Purulia', link: '/blog/birthday-party-resort-in-purulia' },
          { title: 'Corporate Event Venue in Purulia', link: '/blog/corporate-event-venue-in-purulia' },
          { title: 'Places to Visit in Ajodhya Hill', link: '/blog/places-to-visit-in-ajodhya-hill' },
        ]}
        serviceLinks={[
          { label: 'Events', link: '/events' },
          { label: 'Rooms', link: '/rooms' },
          { label: 'Dining', link: '/dining' },
          { label: 'Gallery', link: '/gallery' },
          { label: 'Contact', link: '/contact' },
          { label: 'Book Now', link: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true' },
        ]}
      >
        <p>
          Some weddings are defined by their venue, and an <strong>outdoor wedding in Purulia</strong> is defined by the landscape itself.
          At <strong><Link href="/" className="text-gold hover:underline">The Divine Oasis</Link></strong>, the ceremony ground opens onto the
          ridges of <strong>Ajodhya Hill</strong>, minutes from the <strong>Ajodhya Hills &amp; Forest Reserve (0.4 km)</strong>. There are no
          columns or chandeliers — just sky, sal forest, and the people you invited. That&apos;s the point.
        </p>
        <p>
          Outdoor weddings suit couples who want intimacy instead of spectacle: smaller guest lists, real emotions, and photographs with
          actual landscape instead of a decorated wall. The resort was designed for exactly these events — see the full story in our
          <Link href="/blog/wedding-venue-in-purulia" className="text-gold hover:underline"> wedding venue guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">The Ceremony Ground</h2>
        <p>
          The open ground works for a compact outdoor ceremony of up to <strong>60-80 guests</strong>, with <strong>seating areas</strong>
          arranged to face either the morning light or the golden-hour sunset. For the pheras, the mandap-like open setting can be styled by our
          coordinators in line with your theme — minimal and natural usually looks best against the forest.
        </p>
        <p>
          Immediately after, the reception flows into the lawn — <strong>drinks &amp; hors d&apos;oeuvres</strong>, then a buffet-style spread or
          thali service. If the day is warm, covered reception seating is set up close to the dining area. Given the weather sensitivity of an
          outdoor event, the <strong>November to February</strong> window is our firm recommendation.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Catering &amp; Celebration Food</h2>
        <p>
          Wedding food at The Divine Oasis comes from the <strong>organic farm</strong>. The signature veg thali, seasonal curries, and
          regional specialities are the core; couples can add popular dishes from their own family menus. Non-vegetarian spreads and a
          <strong>barbeque counter</strong> for the reception are arranged with advance notice.
        </p>
        <p>
          Our catering team plans portioning around your final guest count and can taste-test the menu ahead of the wedding day. For the
          farm kitchen philosophy, see <Link href="/blog/organic-farm-dining-in-purulia" className="text-gold hover:underline">organic farm dining</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Guest Cottages for the Wedding Party</h2>
        <p>
          The wedding party stays on-site, which transforms the event into a two-day celebration. The couple gets the <strong>Luxury Suite
          Cottage (₹7,225/night)</strong>; families fill the <strong>5 Premium Deluxe Mud Cottages</strong> (₹4,255/night), the
          <strong>4 VISTA Four Beds</strong> rooms (₹6,500/night), and the <strong>2 Vista Pod Cottages</strong> (₹4,000/night). Each unit comes
          with <strong>free Wi-Fi, flat screen TV, geyser/hot water, and 24-hour room service</strong>.
        </p>
        <p>
          The night before, families gather for a <strong>mehndi or sangeet-style social event</strong> on the lawn; the morning after, guests
          are already on holiday in the hills. That&apos;s the real gift of an outdoor resort wedding — nobody rushes home.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Logistics &amp; Booking</h2>
        <p>
          The resort is <strong>42.6 km from Purulia Junction</strong> and about <strong>200 km from Kolkata</strong> by road. We provide route
          guidance and can coordinate taxis for families arriving by train. For booking, lock your date 3-6 months ahead and block the cottage
          inventory in the same reservation.
        </p>
        <p>
          Start planning by contacting us at <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a> or
          <a href="mailto:thedivineoasisresort@gmail.com" className="text-gold hover:underline"> thedivineoasisresort@gmail.com</a>, or
          reserve initial dates through the
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> booking engine</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What is the best outdoor wedding venue in Purulia?</h3>
        <p>
          <strong>The Divine Oasis</strong> is the best outdoor wedding venue in Purulia — an open hilltop ground near Ajodhya Hills with forest
          backdrop, catering, and guest cottages.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is the venue covered in case of rain?</h3>
        <p>
          We plan ceremony slots around weather and can set up <strong>covered/semi-covered reception seating</strong>, especially before the
          rainy months.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Do couples get overnight stays?</h3>
        <p>
          Yes, the couple can stay in the <strong>Luxury Suite Cottage</strong> while guests book mud cottages, VISTA four-bed rooms, and pod
          cottages.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">How early should we book an outdoor wedding?</h3>
        <p>
          <strong>3-6 months ahead</strong> is ideal, especially for peak season (November to February), so the venue, catering, and cottage
          block can be locked together.
        </p>

        <p>
          Let your guests explore while they celebrate — <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline">things to
          do in Purulia</Link> and <Link href="/blog/shopping-in-purulia" className="text-gold hover:underline">local markets</Link> are good
          starting points.
        </p>
      </BlogArticleLayout>
    </>
  )
}