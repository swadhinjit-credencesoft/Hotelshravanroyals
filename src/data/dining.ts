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
    name: 'Food Delivery & Local Dining',
    tagline: 'Order from Swiggy & Zomato',
    cuisine: 'Pure Vegetarian Delicacies (Local Partner Restaurants)',
    description: 'Guests can easily order vegetarian food from popular local restaurants in Purnia via Swiggy and Zomato. Note: Non-vegetarian food is not allowed on the property premises.',
    hours: 'Available throughout the day',
    image: 'https://bookonelocal.in/cdn/IMG_3791.avif',
    imageAlt: 'Pure Vegetarian Dining setup reference',
    reservationHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
  },
  {
    id: 'd2',
    name: 'Local Markets & Cafes',
    tagline: 'Explore Purnia City Centre',
    cuisine: 'Street Food & Snacks',
    description: 'Located in Suryalok Complex, the hotel is surrounded by Vikass Market and local sweet shops where you can relish authentic Bihari snacks and delicacies.',
    hours: '9:00 AM – 10:00 PM daily',
    image: 'https://bookonelocal.in/cdn/IMG_3788.avif',
    imageAlt: 'Suryalok Complex local market area',
    reservationHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
  }
]
