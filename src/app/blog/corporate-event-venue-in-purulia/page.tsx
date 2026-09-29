import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Corporate Event Venue in Purulia | Conference & Team Outings',
  description:
    'Host corporate events in Purulia at The Divine Oasis. Session seating, free Wi-Fi, farm catering, and barbeque team evenings above the Ajodhya Hills & Forest Reserve.',
  keywords: [
    'corporate event venue purulia',
    'conference venue ajodhya',
    'meeting resort purulia',
    'corporate meet ajodhya hills',
    'business event venue west bengal purulia',
    'annual meet resort ajodhya',
    'corporate team outing purulia resort',
    'divine oasis corporate events',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/corporate-event-venue-in-purulia',
  },
  openGraph: {
    title: 'Corporate Event Venue in Purulia | The Divine Oasis',
    description: 'A corporate event venue in Purulia — session seating, free Wi-Fi, farm catering, and barbeque team evenings above the Ajodhya Hills & Forest Reserve.',
    url: 'https://thedivineoasisresort.com/blog/corporate-event-venue-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-07-01T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064523804-WhatsApp Image 2026-05-11 at 15.42.14.jpg', width: 1200, height: 630, alt: 'Corporate event venue in Purulia - The Divine Oasis Ajodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Event Venue in Purulia',
    description: 'Corporate event venue in Purulia at The Divine Oasis — sessions, free Wi-Fi, farm catering, and team barbeque evenings on Ajodhya Hill.',
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
    headline: 'Corporate Event Venue in Purulia | Conference & Team Outings',
    description: 'A corporate event venue in Purulia — session seating, free Wi-Fi, farm catering, and barbeque team evenings above the Ajodhya Hills & Forest Reserve.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064523804-WhatsApp Image 2026-05-11 at 15.42.14.jpg',
    datePublished: '2026-07-01',
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
        name: 'Can The Divine Oasis host corporate events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, The Divine Oasis hosts corporate events in Purulia — strategy meets, townhalls, annual get-togethers, and team outings with session seating and catering.',
        },
      },
      {
        '@type': 'Question',
        name: 'What sizes of corporate events fit the venue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meetings of up to 30-40 delegates work well with seating and lunch setups; bigger team outings can use the lawns with a barbeque reception.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Wi-Fi reliable for presentations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Free Wi-Fi is available across the resort, and the seating areas can be arranged for AV presentations with advance planning.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do corporate groups get a full-day package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, day corporate packages include venue setup, farm-fresh lunch thali, tea breaks, and evening barbeque for the group.',
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
        category="Business Events"
        date="Jul 1, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064523804-WhatsApp Image 2026-05-11 at 15.42.14.jpg"
        heroAlt="Corporate event venue in Purulia - meeting and team event at The Divine Oasis, Ajodhya"
        relatedArticles={[
          { title: 'Corporate Offsite Resort in Purulia', link: '/blog/corporate-offsite-resort-in-purulia' },
          { title: 'Wedding Venue in Purulia', link: '/blog/wedding-venue-in-purulia' },
          { title: 'Birthday Party Resort in Purulia', link: '/blog/birthday-party-resort-in-purulia' },
          { title: 'Best Resorts Near Ajodhya Hill', link: '/blog/best-resorts-near-ajodhya-hill' },
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
          Meetings don&apos;t have to happen between highways and tea stalls. A <strong>corporate event venue in Purulia</strong> — genuinely
          away from the city — changes how a team talks, plans, and bonds. <strong><Link href="/" className="text-gold hover:underline">The Divine
          Oasis</Link></strong> on <strong>Ajodhya Hill</strong> hosts strategy sessions, townhalls, annual meets, and full team outings, with the
          <strong> Ajodhya Hills &amp; Forest Reserve (0.4 km)</strong> serving as the venue&apos;s backdrop.
        </p>
        <p>
          For companies based in Kolkata and the Raghunathpur-Purulia belt, the ~200 km drive or a short train to
          <Link href="/blog/resorts-near-purulia-railway-station" className="text-gold hover:underline"> Purulia Junction (42.6 km)</Link> makes
          this an easy one- or two-day destination.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Room &amp; Session Setup</h2>
        <p>
          Our covered and open <strong>seating areas</strong> can be arranged for boardroom-style or workshop-style sessions of up to
          <strong>30-40 delegates</strong>. Free <strong>Wi-Fi</strong> keeps presentations and calls running, and our team can stage AV,
          flip-charts, and breakout corners with advance planning. The open air keeps energy up — short sessions run between farm walks instead
          of coffee-chain breaks.
        </p>
        <p>
          For large celebratory events — annual meets, milestone milestones, or family-day outings — the lawns hold bigger groups with buffet-style
          lunches and an evening <strong>barbeque stand</strong>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">The Day Corporate Package</h2>
        <p>
          A typical day runs like this: arrival and session 1 with tea, a farm-fresh <strong>veg thali</strong> lunch, session 2 or free time on
          the hill, then a barbeque and drinks wrap-up before the group heads out or checks into cottages. Packed farm-thali boxes are available
          for teams that want to work through a <strong>Thurga Dam (13.8 km)</strong> day trip.
        </p>
        <p>
          Our kitchen customises menus — including non-vegetarian options on request — around your schedule, so no meeting is interrupted by the
          lunch rush. More on the food in our
          <Link href="/blog/organic-farm-dining-in-purulia" className="text-gold hover:underline"> farm dining guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Overnight Corporate Groups</h2>
        <p>
          Multi-day events work best as overnight stays. Teams spread across the <strong>VISTA Four Beds</strong> rooms (₹6,500/night, 4-6 guests),
          <strong>Premium Deluxe Mud Cottages</strong> (₹4,255/night), and <strong>Vista Pod Cottages</strong> (₹4,000/night). The single
          <strong>Luxury Suite Cottage</strong> (₹7,225/night) is reserved for leadership. Every unit has <strong>geyser/hot water, smart TV,
          free Wi-Fi, room service, and hand sanitizer</strong> — see the
          <Link href="/blog/best-cottages-in-ajodhya-hill" className="text-gold hover:underline"> cottage guide</Link> for full details.
        </p>
        <p>
          Evening programming is where teams remember the trip: sunrise treks to <strong>Matha Buru</strong>, organic farm walks, lawn games, and
          the barbeque dinners. Ideas in our <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline">activities guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Planning &amp; Enquiries</h2>
        <p>
          Share the event date, headcount, and session plan when you enquire, and we&apos;ll prepare a package with venue setup, catering, and an
          accommodation block. Contact us at <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a> or
          <a href="mailto:thedivineoasisresort@gmail.com" className="text-gold hover:underline"> thedivineoasisresort@gmail.com</a>. For dates and
          initial holds, the
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> booking engine</Link>
          works too.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can The Divine Oasis host corporate events?</h3>
        <p>
          Yes, The Divine Oasis hosts <strong>corporate events in Purulia</strong> — strategy meets, townhalls, annual get-togethers, and team
          outings with session seating and catering.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What sizes of corporate events fit the venue?</h3>
        <p>
          Meetings of up to <strong>30-40 delegates</strong> work well with seating and lunch setups; bigger team outings can use the lawns with
          a barbeque reception.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is Wi-Fi reliable for presentations?</h3>
        <p>
          <strong>Free Wi-Fi</strong> is available across the resort, and the seating areas can be arranged for AV presentations with advance
          planning.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Do corporate groups get a full-day package?</h3>
        <p>
          Yes, day corporate packages include <strong>venue setup, farm-fresh lunch thali, tea breaks, and evening barbeque</strong> for the
          group.
        </p>

        <p>
          Follow the event with <Link href="/blog/corporate-offsite-resort-in-purulia" className="text-gold hover:underline">offsite planning</Link>
          and <Link href="/blog/best-dining-near-ajodhya-hill" className="text-gold hover:underline">dining tips</Link>.
        </p>
      </BlogArticleLayout>
    </>
  )
}