export interface Offer {
  id: string
  name: string
  tagline: string
  nights: number
  price: number
  originalPrice: number
  includes: string[]
  badge?: string
}

export const offers: Offer[] = [
  {
    id: 'o1',
    name: 'Honeymoon Escape',
    tagline: 'Begin forever here',
    nights: 5,
    price: 8400,
    originalPrice: 10200,
    includes: [
      'Deluxe Suite',
      'Daily champagne breakfast',
      'Romantic room decoration',
      'Private terrace evening',
      'Complimentary welcome gift',
    ],
    badge: 'Most Popular',
  },
  {
    id: 'o2',
    name: 'Forest Immersion',
    tagline: 'Disconnect. Restore. Return.',
    nights: 3,
    price: 4200,
    originalPrice: 4800,
    includes: [
      'Garden Pavilion',
      'Forest foraging walk',
      'Morning yoga daily',
      'Complimentary minibar',
    ],
  },
  {
    id: 'o3',
    name: 'Royal Jaipur Experience',
    tagline: 'Discover the Pink City in style',
    nights: 4,
    price: 6800,
    originalPrice: 7900,
    includes: [
      'Deluxe Room Stay',
      'Private heritage city tour',
      'Local market exploration',
      'Elephant Fort visit package',
      'Complimentary airport transfer',
    ],
  },
]
