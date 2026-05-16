export interface Venue {
  id: string
  name: string
  tagline: string
  cuisine: string
  description: string
  hours: string
  image: string
  imageAlt: string
  reservationHref: string
}

export const venues: Venue[] = [
  {
    id: 'd1',
    name: 'The Veranda',
    tagline: 'Open-air dining above the forest canopy',
    cuisine: 'Contemporary European',
    description: 'Seasonal tasting menus crafted from locally-sourced produce. Twelve courses. One unforgettable evening.',
    hours: '6:00 PM – 10:30 PM daily',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=95',
    imageAlt: 'Open air restaurant terrace at twilight',
    reservationHref: '/contact',
  },
  {
    id: 'd2',
    name: 'Salt & Stone',
    tagline: 'Wood-fired, shore-to-table',
    cuisine: 'Coastal Grill',
    description: 'Live fire cooking meets pristine seafood. Our fishermen set out before dawn so you can dine at dusk.',
    hours: '12:00 PM – 3:00 PM, 6:00 PM – 11:00 PM',
    image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=95',
    imageAlt: 'Wood fired grill restaurant interior',
    reservationHref: '/contact',
  },
  {
    id: 'd3',
    name: 'The Drawing Room',
    tagline: 'Afternoon tea. Evening cocktails.',
    cuisine: 'Bar & Lounge',
    description: 'Rare whiskeys, hand-pressed juices, and pastry by our in-house chocolatier. All day, unhurried.',
    hours: '10:00 AM – 1:00 AM',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=95',
    imageAlt: 'Elegant cocktail lounge with leather seating',
    reservationHref: '/contact',
  },
]
