import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Things to Do in Purulia | Trekking, Dams & Forest Activities',
  description:
    'Looking for things to do in Purulia? Trek Ajodhya Hills, visit Thurga Dam and Deulghata, explore the organic farm, and enjoy barbeque evenings from The Divine Oasis.',
  keywords: [
    'things to do in purulia',
    'trekking ajodhya hills',
    'thurga dam activities',
    'deulghata excursions',
    'purulia weekend activities',
    'ajodhya hill trek',
    'matha buru trek',
    'organic farm visit purulia',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/things-to-do-in-purulia',
  },
  openGraph: {
    title: 'Things to Do in Purulia | The Divine Oasis',
    description: 'Things to do in Purulia — trek Ajodhya Hills, visit Thurga Dam and Deulghata, walk the organic farm, and enjoy barbeque evenings from The Divine Oasis.',
    url: 'https://thedivineoasisresort.com/blog/things-to-do-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-06-28T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg', width: 1200, height: 630, alt: 'Things to do in Purulia - The Divine Oasis Ajodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Things to Do in Purulia',
    description: 'Trek Ajodhya Hills, visit Thurga Dam and Deulghata, walk the organic farm, and enjoy barbeque evenings — from The Divine Oasis, Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
    headline: 'Things to Do in Purulia | Trekking, Dams & Forest Activities',
    description: 'Things to do in Purulia — trek Ajodhya Hills, visit Thurga Dam and Deulghata, walk the organic farm, and enjoy barbeque evenings.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
    datePublished: '2026-06-28',
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
        name: 'What are the top things to do in Purulia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trek the Ajodhya Hills & Forest Reserve (including Matha Buru), picnic at Thurga Dam, and explore the Deulghata temples — all from a base at The Divine Oasis.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Matha Buru trekking suitable for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the Matha Buru trail is a manageable sunrise trek for regular hikers; carry water and start early with sturdy shoes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which activities are good for families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thurga Dam picnic, organic farm walks, lawn time, and family barbeque evenings are perfect for families with children.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the resort arrange day trips?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, taxes to Thurga Dam and Deulghata can be arranged at the front desk, along with packed farm-thali picnic boxes.',
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
        category="Travel Guide"
        date="Jun 28, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg"
        heroAlt="Things to do in Purulia - trekking and forest activities from The Divine Oasis, Ajodhya"
        relatedArticles={[
          { title: 'Places to Visit in Ajodhya Hill', link: '/blog/places-to-visit-in-ajodhya-hill' },
          { title: 'Purulia Travel Guide', link: '/blog/purulia-travel-guide' },
          { title: 'Best Resorts Near Ajodhya Hill', link: '/blog/best-resorts-near-ajodhya-hill' },
          { title: 'Local Food Guide in Purulia', link: '/blog/local-food-guide-in-purulia' },
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
          Purulia is a district made for doing, not just seeing. There are hills to climb, dam walls to walk, ancient temples to photograph,
          and forests that call for slow walks. This guide to <strong>things to do in Purulia</strong> is written from
          <strong><Link href="/" className="text-gold hover:underline"> The Divine Oasis</Link></strong> — a base camp on
          <strong>Ajodhya Hill</strong>, just <strong>0.4 km from the Ajodhya Hills &amp; Forest Reserve</strong> — where every activity below is
          an easy morning or afternoon away.
        </p>
        <p>
          Mix and match by energy level: place your pack on the <strong>Matha Buru</strong> summit for a sunrise, drift through
          <strong>Thurga Dam</strong> with a picnic thali, and end every day with the resort&apos;s organic farm and barbeque.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Trek the Ajodhya Hills &amp; Forest Reserve</h2>
        <p>
          The signature Purulia experience is the trail network inside the <strong>Ajodhya Hills &amp; Forest Reserve</strong>. The standout is the
          <strong>Matha Buru trek</strong> — the highest point of the district — best done at sunrise when the light turns the laterite land
          golden. The trail is achievable for regular walkers; carry water, wear grippy shoes, and start early.
        </p>
        <p>
          In and after the monsoon, seasonal waterfalls such as <strong>Bamni and Turi</strong> run strongly and are superb rewards for the climb.
          This is the hike we recommend booking into the first morning of your stay. Details on the full reserve are in our
          <Link href="/blog/places-to-visit-in-ajodhya-hill" className="text-gold hover:underline"> places to visit guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Picnic Day: Thurga Dam (13.8 km)</h2>
        <p>
          A half-day at <strong>Thurga Dam</strong> is the classic Purulia afternoon — a scenic drive, a wide reservoir, viewpoints along the ridge,
          and plenty of peace. Take a <strong>packed farm-thali box</strong> from the resort and turn it into a lakeside lunch. Families love
          this one; there&apos;s space to wander and no crowd pressure.
        </p>
        <p>
          Back on the hill by late afternoon, the rest of the day belongs to the resort: lawn rest, then the evening
          <Link href="/blog/best-dinner-place-in-purulia" className="text-gold hover:underline"> barbeque dinner</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Step Back at Deulghata (33.7 km)</h2>
        <p>
          The ancient <strong>Deulghata temple ruins</strong> preserve a cluster of deul-style shrines that are among the finest brick monuments in
          the region. A morning here — dry, exposed site, so go early with water — pairs beautifully with lunch back at the resort. History
          enthusiasts should not skip this; the carvings alone justify the drive.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">At the Resort: Farm, Lawn &amp; Evenings</h2>
        <p>
          The resort&apos;s own <strong>organic farm</strong> is an activity in itself — walk the vegetable rows, photograph the crops, and watch your
          lunch take shape. The open <strong>lawns and seating areas</strong> handle the rest of the day: books, board games, naps, and kids running
          free. And the <strong>barbeque stand with drinks &amp; hors d&apos;oeuvres</strong> closes the evening better than any restaurant.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Sample Three-Day Purulia Arc</h2>
        <p>
          <strong>Day 1:</strong> arrive, lunch thali, farm and lawn time, barbeque night.
          <strong>Day 2:</strong> Matha Buru sunrise trek, brunch, Thurga Dam picnic, evening rest.
          <strong>Day 3:</strong> Deulghata morning, brunch, checkout — or Barabhum (38.5 km) food-and-tea stop en route. This loop is detailed
          further in the <Link href="/blog/purulia-travel-guide" className="text-gold hover:underline">Purulia travel guide</Link>.
        </p>
        <p>
          Book your cottage and activities together — call <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a> or
          reserve via the
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> booking engine</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What are the top things to do in Purulia?</h3>
        <p>
          <strong>Trek the Ajodhya Hills &amp; Forest Reserve</strong> (including Matha Buru), picnic at <strong>Thurga Dam</strong>, and explore the
          <strong>Deulghata temples</strong> — all from a base at The Divine Oasis.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is Matha Buru trekking suitable for beginners?</h3>
        <p>
          Yes, the <strong>Matha Buru trail is a manageable sunrise trek</strong> for regular hikers; carry water and start early with sturdy shoes.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Which activities are good for families?</h3>
        <p>
          <strong>Thurga Dam picnic, organic farm walks, lawn time, and family barbeque evenings</strong> are perfect for families with children.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can the resort arrange day trips?</h3>
        <p>
          Yes, <strong>taxis to Thurga Dam and Deulghata</strong> can be arranged at the front desk, along with packed farm-thali picnic boxes.
        </p>

        <p>
          Build your pack list and route with <Link href="/blog/shopping-in-purulia" className="text-gold hover:underline">market tips</Link> and
          <Link href="/blog/resorts-near-purulia-railway-station" className="text-gold hover:underline"> travel logistics</Link>.
        </p>
      </BlogArticleLayout>
    </>
  )
}