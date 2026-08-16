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
    name: 'The In-House Restaurant',
    tagline: 'Good Food Is Part of the Stay',
    cuisine: 'Indian, Tandoor & Comfort Food',
    description: 'Relaxed, generous and made for meals that turn into long conversations. From Indian favourites and tandoor specialities to chef-led preparations, food here is meant to be enjoyed together.',
    hours: '7:30 AM – 10:30 PM daily',
    image: '/TheMainDiningHall.png',
    imageAlt: 'The relaxed in-house restaurant at Unwind Karjat',
    reservationHref: 'https://bookone.io/Unwind-Karjat?bookingEngine=true',
  },
  {
    id: 'd2',
    name: 'Live Tandoor & BBQ',
    tagline: 'Freshly Prepared. Generously Served.',
    cuisine: 'Tandoor & Grill Specialties',
    description: 'Enjoy live tandoor preparations and evening barbecue setups as part of the Unwind dining experience. Special Fish and Mutton dishes are prepared upon request for maximum freshness.',
    hours: '7:00 PM – 11:00 PM',
    image: '/images/exterior.jpeg',
    imageAlt: 'Live tandoor and barbecue under the sky at Unwind Karjat',
    reservationHref: 'https://bookone.io/Unwind-Karjat?bookingEngine=true',
  },
  {
    id: 'd3',
    name: 'Breakfast by the Pool',
    tagline: 'Start the Day Right',
    cuisine: 'Breakfast & Light Bites',
    description: 'Whether it is breakfast by the pool, a relaxed lunch, evening snacks or dinner with friends and family — every meal at Unwind is an experience, not an afterthought.',
    hours: '7:00 AM – 9:00 PM',
    image: '/images/exterior2.jpeg',
    imageAlt: 'Breakfast and relaxed meals at Unwind Karjat',
    reservationHref: 'https://bookone.io/Unwind-Karjat?bookingEngine=true',
  },
]
