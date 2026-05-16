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
      'Forest Suite',
      'Daily champagne breakfast',
      'Couples spa ritual',
      'Private dinner on the terrace',
      'Sunset yacht hour',
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
    name: 'Culinary Journey',
    tagline: 'Experience the royal treatment',
    nights: 4,
    price: 6800,
    originalPrice: 7900,
    includes: [
      'Coastal Villa',
      "Chef's table (2 evenings)",
      'Winery day trip',
      'Cooking master class',
      'Tasting menu every evening',
    ],
  },
]
