import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Family Resort in Ajodhya Hill | Kid-Friendly Forest Stay',
  description:
    'Best family resort in Ajodhya Hill, Purulia. Family rooms, VISTA four-bed cottage, organic farm walks, and safe open spaces for kids at The Divine Oasis.',
  keywords: [
    'family resort ajodhya hill',
    'family stay purulia',
    'resort for kids ajodhya',
    'family rooms purulia resort',
    'kid friendly resort ajodhya',
    'weekend family trip purulia',
    'large family cottage ajodhya',
    'children friendly forest resort',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/family-resort-in-ajodhya-hill',
  },
  openGraph: {
    title: 'Family Resort in Ajodhya Hill | The Divine Oasis',
    description: 'A safe, kid-friendly family resort in Ajodhya Hill, Purulia — family rooms, VISTA four-bed cottage, farm walks, and open forest spaces at The Divine Oasis.',
    url: 'https://thedivineoasisresort.com/blog/family-resort-in-ajodhya-hill',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2025-11-18T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-063550245-WhatsApp Image 2026-05-11 at 15.54.31 (1).jpg', width: 1200, height: 630, alt: 'Family resort in Ajodhya Hill - The Divine Oasis Purulia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Resort in Ajodhya Hill',
    description: 'Family resort in Ajodhya Hill at The Divine Oasis — family rooms, a four-bed cottage, organic farm walks, and safe open forest spaces.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063550245-WhatsApp Image 2026-05-11 at 15.54.31 (1).jpg'],
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
    headline: 'Family Resort in Ajodhya Hill | Kid-Friendly Forest Stay',
    description: 'A safe, kid-friendly family resort in Ajodhya Hill, Purulia — family rooms, VISTA four-bed cottage, farm walks, and open forest spaces.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-063550245-WhatsApp Image 2026-05-11 at 15.54.31 (1).jpg',
    datePublished: '2025-11-18',
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
        name: 'Is The Divine Oasis good for families with children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, The Divine Oasis is a safe, kid-friendly family resort on Ajodhya Hill with family rooms, open lawn spaces, farm walks, and 24-hour staff assistance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which room suits a family of five?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The VISTA Four Beds cottage (4-6 occupancy, ₹6,500/night) is the best choice for larger families and groups.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there activities for children at the resort?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Children can enjoy the organic farm, open lawns and seating areas, short nature walks near the forest reserve (0.4 km), and family dining at the resort.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the food suitable for kids?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the farm-to-table veg thali and simple local dishes are mild, fresh, and easy to customise for children.',
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
        category="Family Stay"
        date="Nov 18, 2025"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-063550245-WhatsApp Image 2026-05-11 at 15.54.31 (1).jpg"
        heroAlt="Family resort in Ajodhya Hill - spacious family accommodation at The Divine Oasis, Purulia"
        relatedArticles={[
          { title: 'Best Cottages in Ajodhya Hill', link: '/blog/best-cottages-in-ajodhya-hill' },
          { title: 'Family Dining in Purulia', link: '/blog/family-dining-in-purulia' },
          { title: 'Places to Visit in Ajodhya Hill', link: '/blog/places-to-visit-in-ajodhya-hill' },
          { title: 'Best Resorts Near Ajodhya Hill', link: '/blog/best-resorts-near-ajodhya-hill' },
        ]}
        serviceLinks={[
          { label: 'View Rooms', link: '/rooms' },
          { label: 'Dining', link: '/dining' },
          { label: 'Gallery', link: '/gallery' },
          { label: 'Contact', link: '/contact' },
          { label: 'Book Now', link: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true' },
        ]}
      >
        <p>
          Family holidays have a way of being judged on tiny things: whether the kids are safe, whether the grandparents can rest,
          and whether everyone actually eats well. A <strong>family resort in Ajodhya Hill</strong> solves all three at once. At
          <strong><Link href="/" className="text-gold hover:underline"> The Divine Oasis</Link></strong>, families come for the forest and
          stay for the freedom — open lawns, a small organic farm, walking distance to the <strong>Ajodhya Hills &amp; Forest Reserve (0.4 km)</strong>,
          and rooms that comfortably fit a whole family in one place.
        </p>
        <p>
          Because the resort is compact and self-contained, children get a safe holiday: no traffic, no crowds — just hill air, birds,
          and space to run. Grandparents enjoy the calm seating areas, and parents finally get to exhale.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Rooms Built for Families</h2>
        <p>
          The standout for families is the <strong>VISTA Four Beds</strong> cottage — <strong>₹6,500/night</strong>, sleeping
          <strong>4-6 guests</strong> comfortably. It is the practical choice for a family of five or two families travelling together.
          For smaller families, the <strong>Premium Deluxe Mud Cottages</strong> (₹4,255/night, 2-3 guests) offer a cosy forest hideout with
          all modern comforts, and the <strong>Vista Pod Cottages</strong> (₹4,000/night, 2-3 guests) add a budget-friendly option.
        </p>
        <p>
          Every room carries what parents actually need after a day out: <strong>geyser/hot water</strong>, a <strong>flat screen TV</strong>,
          <strong>free Wi-Fi</strong>, <strong>24-hour room service</strong>, and <strong>hand sanitizer</strong> in each unit. Detailed
          comparisons are in our <Link href="/blog/best-cottages-in-ajodhya-hill" className="text-gold hover:underline">cottage guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">What Kids Love at the Resort</h2>
        <p>
          Children take to the <strong>organic farm</strong> immediately — spotting vegetables, running through the aisles, and watching food
          go from the field to the kitchen. The open <strong>lawns and seating areas</strong> allow free play under adult supervision, and
          short <strong>nature walks</strong> near the forest reserve are gentle enough for younger kids.
        </p>
        <p>
          A half-day at <strong>Thurga Dam (13.8 km)</strong> with a packed farm-thali picnic is a family classic, while older kids and teens
          will enjoy the <strong>Matha Buru</strong> sunrise trek. Our
          <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline"> things to do guide</Link> rates each activity by effort level.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Family-Friendly Dining</h2>
        <p>
          Meals at The Divine Oasis are built around the <strong>farm-to-table veg thali</strong> — rice, dal, seasonal vegetables, and
          chokha-style sides that are mild, fresh, and easy for children. Kitchen staff happily adjust spice and portion sizes for kids and
          for elderly guests. Read more in our
          <Link href="/blog/family-dining-in-purulia" className="text-gold hover:underline"> family dining guide</Link>.
        </p>
        <p>
          Evenings wrap up with the <strong>barbeque stand</strong> and shared <strong>snacks</strong> — for many families this is the most
          loved part of the day, as everyone gathers around the fire before bedtime.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Planning a Family Weekend</h2>
        <p>
          A classic family arc: arrive Friday evening, relax; Saturday — sunrise walk or Thurga Dam picnic, lunch back at the resort,
          farm play in the afternoon, barbeque dinner; Sunday — Deulghata temples (33.7 km) en route back, or a lazy morning and a
          straight drive home. Extra luggage and picnic gear are looked after with our <strong>luggage storage</strong>.
        </p>
        <p>
          Reserve early — weekends between <strong>October and March</strong> fill up fast with Kolkata families. Book the VISTA four-bed
          room or a pair of mud cottages through the
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> booking engine</Link>,
          or call <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a> for help choosing rooms.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is The Divine Oasis good for families with children?</h3>
        <p>
          Yes, The Divine Oasis is a <strong>safe, kid-friendly family resort</strong> on Ajodhya Hill with family rooms, open lawn spaces,
          farm walks, and 24-hour staff assistance.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Which room suits a family of five?</h3>
        <p>
          The <strong>VISTA Four Beds</strong> cottage (4-6 occupancy, ₹6,500/night) is the best choice for larger families and groups.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Are there activities for children at the resort?</h3>
        <p>
          Children can enjoy the <strong>organic farm, open lawns and seating areas, short nature walks</strong> near the forest reserve
          (0.4 km), and <strong>family dining</strong> at the resort.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is the food suitable for kids?</h3>
        <p>
          Yes, the farm-to-table <strong>veg thali</strong> and simple local dishes are mild, fresh, and easy to customise for children.
        </p>

        <p>
          Extend the celebration with our <Link href="/blog/birthday-party-resort-in-purulia" className="text-gold hover:underline">birthday
          party</Link> and <Link href="/blog/shopping-in-purulia" className="text-gold hover:underline">local market</Link> guides.
        </p>
      </BlogArticleLayout>
    </>
  )
}