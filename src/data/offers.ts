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
    name: 'Monsoon Magic',
    tagline: 'Experience the Sahyadri rains',
    nights: 2,
    price: 9999,
    originalPrice: 12500,
    includes: [
      'Red Brick Cottage Stay',
      'Complimentary trek to Bhivpuri Falls',
      'High tea with hot fritters',
      'Infinity pool access',
      'Forest birdwatching session',
    ],
    badge: 'Limited Seasonal',
  },
  {
    id: 'o2',
    name: 'Corporate Reconnect',
    tagline: 'Team offsites that inspire',
    nights: 1,
    price: 4500,
    originalPrice: 5500,
    includes: [
      'Deluxe Room Stay',
      'Dedicated meeting hub access',
      'Team building BBQ night',
      'All-inclusive meal plan',
      'Station pickup/drop-off',
    ],
    badge: 'Per Person / Per Night',
  },
  {
    id: 'o3',
    name: 'Romantic Hideaway',
    tagline: 'Intimate forest escape',
    nights: 2,
    price: 14999,
    originalPrice: 18000,
    includes: [
      'Forest Facing Room',
      'Private bonfire & music',
      'Customized 3-course dinner',
      'Breakfast in bed',
      'Late check-out availability',
    ],
    badge: 'Couples Only',
  },
]
