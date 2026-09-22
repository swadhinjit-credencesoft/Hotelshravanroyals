import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Birthday Party Resort in Purulia | Private Celebrations at Ajodhya',
  description:
    'Celebrate a birthday at a resort in Purulia. Private party spaces, barbeque stands, group cottage bookings, and organic celebration food at The Divine Oasis, Ajodhya.',
  keywords: [
    'birthday party resort purulia',
    'party venue ajodhya hill',
    'private party purulia resort',
    'birthday celebration west bengal purulia',
    'surprise party resort ajodhya',
    'group party venue ajodhya',
    'outdoor birthday rigions purulia',
    'divine oasis birthday party',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/birthday-party-resort-in-purulia',
  },
  openGraph: {
    title: 'Birthday Party Resort in Purulia | The Divine Oasis',
    description: 'A birthday party resort in Purulia — private party spaces, barbeque evenings, group cottage bookings, and organic celebration food at The Divine Oasis, Ajodhya.',
    url: 'https://thedivineoasisresort.com/blog/birthday-party-resort-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-07-03T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064455582-WhatsApp Image 2026-05-11 at 15.42.15 (1).jpg', width: 1200, height: 630, alt: 'Birthday party resort in Purulia - The Divine Oasis Ajodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Party Resort in Purulia',
    description: 'Birthday party resort in Purulia at The Divine Oasis — private spaces, barbeque evenings, and group cottage stays on Ajodhya Hill.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064455582-WhatsApp Image 2026-05-11 at 15.42.15 (1).jpg'],
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
    headline: 'Birthday Party Resort in Purulia | Private Celebrations at Ajodhya',
    description: 'A birthday party resort in Purulia — private party spaces, barbeque evenings, group cottage bookings, and organic celebration food at The Divine Oasis.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064455582-WhatsApp Image 2026-05-11 at 15.42.15 (1).jpg',
    datePublished: '2026-07-03',
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
        name: 'Can I host a birthday party at The Divine Oasis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, The Divine Oasis is a popular birthday party resort in Purulia — private lawn spaces, barbeque evenings, and group cottage stays on Ajodhya Hill.',
        },
      },
      {
        '@type': 'Question',
        name: 'What party sizes work at the resort?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Private parties of 15-60 guests work well, with the lawn and seating areas arranged around your group. Overnight groups fit the cottage inventory.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the kitchen do a birthday cake and special menu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, celebration desserts, custom menu tweaks, and barbeque counters are arranged with advance notice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do day visitors get a party setup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, with advance booking we set up lawn seating, a barbeque stand, and food service for day-visitor parties too.',
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
        category="Events & Parties"
        date="Jul 3, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064455582-WhatsApp Image 2026-05-11 at 15.42.15 (1).jpg"
        heroAlt="Birthday party resort in Purulia - private celebration at The Divine Oasis, Ajodhya"
        relatedArticles={[
          { title: 'Outdoor Wedding Venue in Purulia', link: '/blog/outdoor-wedding-venue-in-purulia' },
          { title: 'Wedding Venue in Purulia', link: '/blog/wedding-venue-in-purulia' },
          { title: 'Corporate Event Venue in Purulia', link: '/blog/corporate-event-venue-in-purulia' },
          { title: 'Family Resort in Ajodhya Hill', link: '/blog/family-resort-in-ajodhya-hill' },
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
          Some birthdays deserve more than a city restaurant table — they deserve a weekend. A <strong>birthday party resort in Purulia</strong>
          turns one evening into a full celebration: guests arrive on Friday, the party happens under the open sky, and everyone wakes up on a
          hill. At <strong><Link href="/" className="text-gold hover:underline">The Divine Oasis</Link></strong>, milestone birthdays, sweet
          sixteen-style bashes, retirement parties, and big family birthdays all have a natural home.
        </p>
        <p>
          The resort&apos;s <strong>lawn and seating areas</strong> give you a private party ground with the 
          <strong> Ajodhya Hills &amp; Forest Reserve (0.4 km)</strong> as the backdrop — no windowless banquet hall required.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">The Party Setup</h2>
        <p>
          We arrange the space around your guest list: seating clusters for 15-60 people, a music-friendly corner, and a stage area for games,
          toasts, and cake cutting. For evening parties, the <strong>barbeque stand</strong> is the centrepiece — skewers, smoke, and the smell
          of dinner on the hill. <strong>Drinks &amp; hors d&apos;oeuvres</strong> keep guests comfortable as everyone arrives.
        </p>
        <p>
          Decorations stay with our event team — keep it low-key and natural, or add a theme; the open setting looks great with simple styling.
          Kids&apos; birthdays enjoy the free space to run while adults take the seating area. See the
          <Link href="/blog/outdoor-wedding-venue-in-purulia" className="text-gold hover:underline"> outdoor event guide</Link> for how the same
          ground works for bigger occasions.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Celebration Food</h2>
        <p>
          Birthday food here means the <strong>farm-fresh veg thali</strong>, regional specialities, and a requested dish or two from the birthday
          person&apos;s favourite list. The kitchen can arrange a <strong>celebration cake</strong>, custom desserts, and a
          <strong>barbeque counter</strong> for the dinner hour — all with advance notice.
        </p>
        <p>
          For a wholesome mid-party break, the <strong>organic farm</strong> walk doubles as entertainment, and the local-food angle makes your
          party feel distinct from another city dinner. Our <Link href="/blog/local-food-guide-in-purulia" className="text-gold hover:underline">food
          guide</Link> explains the flavours behind the thali.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Turning a Party into a Stay</h2>
        <p>
          The best part of a resort party: nobody drives home. Groups book the <strong>Premium Deluxe Mud Cottages</strong> (₹4,255/night),
          <strong>VISTA Four Beds</strong> rooms (₹6,500/night, 4-6 guests), and <strong>Vista Pod Cottages</strong> (₹4,000/night) as one block.
          Everyone wakes up to hill air, breakfast thali, and plans for <strong>Thurga Dam (13.8 km)</strong> or a
          <strong>Deulghata (33.7 km)</strong> drive — the party simply continues into the next day.
        </p>
        <p>
          Each unit carries <strong>free Wi-Fi, flat screen TV, geyser/hot water, 24-hour room service, and hand sanitizer</strong>, plus we hold
          <strong>luggage storage</strong> for the group&apos;s bags during check-in and checkout hours.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Booking a Birthday at The Divine Oasis</h2>
        <p>
          Weekend party dates in the <strong>October-March</strong> window book quickly. Share your guest count, preferred day, and whether you
          want a day-party or an overnight celebration when you call
          <a href="tel:+91990398950" className="text-gold hover:underline"> +91 99039 89950</a> or email
          <a href="mailto:thedivineoasisresort@gmail.com" className="text-gold hover:underline"> thedivineoasisresort@gmail.com</a>. You can also
          reserve initial dates via the
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> booking engine</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can I host a birthday party at The Divine Oasis?</h3>
        <p>
          Yes, The Divine Oasis is a popular <strong>birthday party resort in Purulia</strong> — private lawn spaces, barbeque evenings, and group
          cottage stays on Ajodhya Hill.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What party sizes work at the resort?</h3>
        <p>
          Private parties of <strong>15-60 guests</strong> work well, with the lawn and seating areas arranged around your group. Overnight groups
          fit the cottage inventory.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can the kitchen do a birthday cake and special menu?</h3>
        <p>
          Yes, <strong>celebration desserts, custom menu tweaks, and barbeque counters</strong> are arranged with advance notice.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Do day visitors get a party setup?</h3>
        <p>
          Yes, with advance booking we set up <strong>lawn seating, a barbeque stand, and food service</strong> for day-visitor parties too.
        </p>

        <p>
          For arrival plans, see <Link href="/blog/resorts-near-purulia-railway-station" className="text-gold hover:underline">how to reach</Link>
          and <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline">what to do after the party</Link>.
        </p>
      </BlogArticleLayout>
    </>
  )
}