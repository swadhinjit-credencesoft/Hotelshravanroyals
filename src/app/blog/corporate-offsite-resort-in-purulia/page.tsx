import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Corporate Offsite Resort in Purulia | Hilltop Team Retreat',
  description:
    'Plan corporate offsites at a hilltop resort in Purulia. Seating areas for sessions, reliable Wi-Fi, farm catering, and team barbeque evenings at The Divine Oasis, Ajodhya.',
  keywords: [
    'corporate offsite resort purulia',
    'team retreat ajodhya hill',
    'corporate resort near ajodhya hills',
    'meeting resort purulia',
    'company offsite west bengal purulia',
    'team outing purulia ajodhya',
    'workation resort purulia',
    'divine oasis corporate retreat',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/corporate-offsite-resort-in-purulia',
  },
  openGraph: {
    title: 'Corporate Offsite Resort in Purulia | The Divine Oasis',
    description: 'A calm hilltop corporate offsite resort in Purulia — session spaces, free Wi-Fi, farm catering, and barbeque evenings at The Divine Oasis, Ajodhya Hills.',
    url: 'https://thedivineoasisresort.com/blog/corporate-offsite-resort-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2025-12-05T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064523804-WhatsApp Image 2026-05-11 at 15.42.14.jpg', width: 1200, height: 630, alt: 'Corporate offsite resort in Purulia - The Divine Oasis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Offsite Resort in Purulia',
    description: 'Hilltop corporate offsite resort in Purulia at The Divine Oasis — sessions, WiFi, farm catering, and team barbeque evenings.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064523804-WhatsApp Image 2026-05-11 at 15.42.14.jpg'],
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
    headline: 'Corporate Offsite Resort in Purulia | Hilltop Team Retreat',
    description: 'A calm hilltop corporate offsite resort in Purulia — session spaces, free Wi-Fi, farm catering, and barbeque evenings at The Divine Oasis.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064523804-WhatsApp Image 2026-05-11 at 15.42.14.jpg',
    datePublished: '2025-12-05',
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
        name: 'Is The Divine Oasis good for corporate offsites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, The Divine Oasis is a calm hilltop corporate offsite resort in Purulia with session seating areas, free Wi-Fi, and farm-based team catering.',
        },
      },
      {
        '@type': 'Question',
        name: 'How big a team can the resort host?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The resort comfortably hosts offsites of up to 30-40 people using the VISTA four-bed rooms, mud cottages, and pod cottages together.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Wi-Fi available at the resort?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, free Wi-Fi is provided across the resort, with dedicated seating areas suitable for working sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What team activities can be arranged?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Teams can enjoy sunrise treks in the Ajodhya Hills & Forest Reserve, Thurga Dam day trips, organic farm walks, and barbeque evenings.',
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
        category="Corporate Retreats"
        date="Dec 5, 2025"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064523804-WhatsApp Image 2026-05-11 at 15.42.14.jpg"
        heroAlt="Corporate offsite resort in Purulia - team retreat at The Divine Oasis, Ajodhya"
        relatedArticles={[
          { title: 'Corporate Event Venue in Purulia', link: '/blog/corporate-event-venue-in-purulia' },
          { title: 'Best Resorts Near Ajodhya Hill', link: '/blog/best-resorts-near-ajodhya-hill' },
          { title: 'Things to Do in Purulia', link: '/blog/things-to-do-in-purulia' },
          { title: 'Best Cottages in Ajodhya Hill', link: '/blog/best-cottages-in-ajodhya-hill' },
        ]}
        serviceLinks={[
          { label: 'Events', link: '/events' },
          { label: 'Rooms', link: '/rooms' },
          { label: 'Dining', link: '/dining' },
          { label: 'Contact', link: '/contact' },
          { label: 'How to Reach', link: '/how-to-reach' },
          { label: 'Book Now', link: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true' },
        ]}
      >
        <p>
          The best offsites don&apos;t necessarily happen in boardrooms by the highway — sometimes a team needs distance from the office to
          actually think together. <strong>Ajodhya Hill</strong> provides that reset, and
          <strong><Link href="/" className="text-gold hover:underline"> The Divine Oasis</Link></strong> is the
          <Link href="/blog/corporate-offsite-resort-in-purulia" className="text-gold hover:underline"> corporate offsite resort in Purulia</Link> where
          it all comes together: quiet session spaces, dependable free Wi-Fi, farm-cooked meals, and a hillside that turns into
          overnight team memories around the barbeque.
        </p>
        <p>
          The resort sits at <strong>0.4 km from the Ajodhya Hills &amp; Forest Reserve</strong> and about <strong>200 km from Kolkata</strong> —
          far enough to feel like a retreat, close enough for a Friday-to-Sunday arc. Evening air, forest mornings, and zero city noise make concentration
          and conversation flow far more easily than in a hotel near a noisy highway.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Sessions &amp; Work Spaces</h2>
        <p>
          Offsite sessions at The Divine Oasis run in our open and covered <strong>seating areas</strong>, which work well for brainstorming,
          planning, and review meetings. We set up comfortable arrangements for flip-charts and group work, and the
          <strong>free Wi-Fi</strong> keeps everyone connected to the office when they need to be.
        </p>
        <p>
          The beauty of a hilltop venue is the schedule mix: a focused morning session, then a working lunch of the resort&apos;s
          <strong>veg thali</strong>, then an afternoon where teams split — some continue working, some walk the <strong>organic farm</strong>,
          and some simply decompress. Teams come back sharper, not drained.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Accommodation for the Whole Team</h2>
        <p>
          Group bookings scale naturally across our inventory: the <strong>VISTA Four Beds</strong> rooms (4-6 guests each, ₹6,500/night) are
          ideal for team sharing, while <strong>Premium Deluxe Mud Cottages</strong> (₹4,255/night) and <strong>Vista Pod Cottages</strong>
          (₹4,000/night) add variety for managers and leads. The single <strong>Luxury Suite Cottage</strong> (₹7,225/night) is the natural
          pick for the senior leadership or a lead director.
        </p>
        <p>
          Every unit comes with <strong>geyser/hot water, flat screen TV, room service, and free Wi-Fi</strong>. For weekly offsites, the
          resort also offers <strong>luggage storage</strong> and comfortable common <strong>seating areas</strong> for late-evening
          debriefs. Compare the options in our <Link href="/blog/best-cottages-in-ajodhya-hill" className="text-gold hover:underline">cottage guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Team-Building Around the Hill</h2>
        <p>
          No offsite is complete without shared experience. A <strong>sunrise trek to Matha Buru</strong> in the forest reserve, a
          half-day trip to <strong>Thurga Dam (13.8 km)</strong>, and a heritage stop at the <strong>Deulghata temples (33.7 km)</strong> make
          excellent team outings — details in our
          <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline"> things to do guide</Link>.
        </p>
        <p>
          Evenings close with the <strong>barbeque stand</strong> and <strong>drinks &amp; hors d&apos;oeuvres</strong> — unhurried time around a
          fire where the real conversations happen. It&apos;s the part most teams remember longest.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">F&B &amp; Event Planning Support</h2>
        <p>
          Our kitchen plans around your schedule: working breakfasts, packed farm-thali lunches for day trips, and evening barbeque counters.
          The <strong>organic farm</strong> supplies much of the produce, so team lunches are fresher than the usual offsite catering. Tell us
          your session timings and we design the meal flow so nobody misses a meeting.
        </p>
        <p>
          Most offsites here are block-booked for 1-3 days. Share your dates and team size with us via the
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> booking engine</Link>
          or call <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a> — we will hold the cottage block and
          confirm the agenda support.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is The Divine Oasis good for corporate offsites?</h3>
        <p>
          Yes, The Divine Oasis is a <strong>calm hilltop corporate offsite resort</strong> in Purulia with session seating areas, free
          Wi-Fi, and farm-based team catering.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">How big a team can the resort host?</h3>
        <p>
          The resort comfortably hosts offsites of <strong>up to 30-40 people</strong> using the VISTA four-bed rooms, mud cottages, and pod
          cottages together.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is Wi-Fi available at the resort?</h3>
        <p>
          Yes, <strong>free Wi-Fi</strong> is provided across the resort, with dedicated seating areas suitable for working sessions.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What team activities can be arranged?</h3>
        <p>
          Teams can enjoy <strong>sunrise treks in the Ajodhya Hills &amp; Forest Reserve, Thurga Dam day trips, organic farm walks</strong>,
          and <strong>barbeque evenings</strong>.
        </p>

        <p>
          For those extending the stay, our <Link href="/blog/family-resort-in-ajodhya-hill" className="text-gold hover:underline">family
          resort guide</Link> and <Link href="/blog/purulia-travel-guide" className="text-gold hover:underline">Purulia travel guide</Link> round out the planning.
        </p>
      </BlogArticleLayout>
    </>
  )
}