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
    name: 'Weekday Special',
    tagline: 'Great savings on midweek stays',
    nights: 2,
    price: 3200,
    originalPrice: 4200,
    includes: [
      'Super Deluxe Room Stay',
      'Complimentary high-speed Wi-Fi',
      'Complimentary pure veg breakfast',
      'Free secure parking',
      'Early check-in availability',
    ],
    badge: 'Midweek Offer',
  },
  {
    id: 'o2',
    name: 'Corporate Package',
    tagline: 'Comfortable stay for business professionals',
    nights: 1,
    price: 1800,
    originalPrice: 2100,
    includes: [
      'Deluxe AC Room Stay',
      'Complimentary high-speed Wi-Fi',
      'Express check-in & check-out',
      'Pure vegetarian breakfast',
      'Dedicated room service',
    ],
    badge: 'Business Special',
  },
  {
    id: 'o3',
    name: 'Family Getaway',
    tagline: 'Safe and comfortable family stay',
    nights: 2,
    price: 6500,
    originalPrice: 7500,
    includes: [
      'Deluxe AC Room Stay',
      'Pure vegetarian breakfast & dinner included',
      '24-hour front desk & room service',
      'Lift access & 100% power backup',
      'Late check-out availability',
    ],
    badge: 'Family Package',
  },
]
