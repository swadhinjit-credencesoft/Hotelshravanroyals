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
    name: 'Weekend Forest Escape',
    tagline: 'Two blissful nights in a mud cottage',
    nights: 2,
    price: 8510,
    originalPrice: 9800,
    includes: [
      'Premium Deluxe Mud Cottage stay',
      'Organic farm breakfast',
      'Barbeque evening on request',
      'Free Wi-Fi & room service',
      'Forest-view seating area',
    ],
    badge: 'Weekend Offer',
  },
  {
    id: 'o2',
    name: 'Corporate Retreat Package',
    tagline: 'A focused offsite in the hilltop calm',
    nights: 1,
    price: 7225,
    originalPrice: 8500,
    includes: [
      'Luxury Suite Cottage stay',
      'High-speed Wi-Fi for the team',
      'Organic veg thali meals',
      'Express check-in & check-out',
      'Luggage storage on arrival',
    ],
    badge: 'Business Special',
  },
  {
    id: 'o3',
    name: 'Family Hilltop Getaway',
    tagline: 'Spacious Vista Four Beds for the whole family',
    nights: 2,
    price: 13000,
    originalPrice: 15000,
    includes: [
      'Vista Four Beds cottage stay',
      'Organic farm breakfast & dinner',
      'Drinks & hors d\'oeuvres evening',
      '24/7 front desk & room service',
      'Late check-out on availability',
    ],
    badge: 'Family Package',
  },
]