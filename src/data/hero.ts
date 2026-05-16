export interface HeroSlide {
  id: string
  tagline: string
  headline: string
  subheadline: string
  image: string
  imageAlt: string
  primaryCta: string
  primaryHref: string
  secondaryCta: string
  secondaryHref: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 's1',
    tagline: 'A Sanctuary Awaits',
    headline: 'Where Time Stands Still',
    subheadline: 'Nestled among ancient forest and private shore — crafted for those who seek the extraordinary.',
    image: 'https://bookonelocal.in/cdn/IMG_6387.mp4',
    imageAlt: 'Luxury resort infinity pool at golden hour',
    primaryCta: 'Reserve Your Suite',
    primaryHref: '/reservations',
    secondaryCta: 'Explore the Inn',
    secondaryHref: '/rooms',
  },
  {
    id: 's2',
    tagline: 'Culinary Excellence',
    headline: 'A Table Above the World',
    subheadline: 'Chef-curated tasting menus where the horizon meets the sea. Every meal an occasion.',
    image: 'https://bookonelocal.in/cdn/IMG_6260.mp4',
    imageAlt: 'Private terrace fine dining at sunset',
    primaryCta: 'View Dining',
    primaryHref: '/dining',
    secondaryCta: 'Reserve a Table',
    secondaryHref: '/contact',
  },
  {
    id: 's3',
    tagline: 'Spa & Wellness',
    headline: 'Surrender to Stillness',
    subheadline: 'Ancient rituals meet contemporary indulgence across 4,000 sq ft of pure restoration.',
    image: 'https://bookonelocal.in/cdn/IMG_6295.mp4',
    imageAlt: 'Spa treatment room with candles and stone bath',
    primaryCta: 'Discover the Spa',
    primaryHref: '/experiences',
    secondaryCta: 'Book a Treatment',
    secondaryHref: '/reservations',
  },
  {
    id: 's4',
    tagline: 'Spa & Wellness',
    headline: 'Surrender to Stillness',
    subheadline: 'Ancient rituals meet contemporary indulgence across 4,000 sq ft of pure restoration.',
    image: 'https://bookonelocal.in/cdn/IMG_6294.mp4',
    imageAlt: 'Spa treatment room with candles and stone bath',
    primaryCta: 'Discover the Spa',
    primaryHref: '/experiences',
    secondaryCta: 'Book a Treatment',
    secondaryHref: '/reservations',
  },
]

export const heroStats = [
  { value: '47', label: 'Private Suites' },
  { value: '4', label: 'Dining Venues' },
  { value: '12', label: 'Acres of Grounds' },
  { value: '5★', label: 'Forbes Rating' },
]
