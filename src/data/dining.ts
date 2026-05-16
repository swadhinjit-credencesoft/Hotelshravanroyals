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
    name: 'The Main Dining Hall',
    tagline: 'Multi-Cuisine Delights',
    cuisine: 'Indian, Tandoor, Mughlai, Asian, Continental',
    description: 'A diverse menu featuring homestyle comfort and global classics, served in a cozy dining space.',
    hours: '7:30 AM – 10:30 PM daily',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=95',
    imageAlt: 'Cozy restaurant dining hall',
    reservationHref: '/contact',
  },
  {
    id: 'd2',
    name: 'Rustic Grill & BBQ',
    tagline: 'BBQ & Bonfire Package',
    cuisine: 'Grilled Specialties',
    description: 'Specialty live BBQ under the stars. Special Fish and Mutton available upon request. Add-on pricing applies.',
    hours: '7:00 PM – 11:00 PM',
    image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=95',
    imageAlt: 'Live barbecue grill in nature',
    reservationHref: '/contact',
  },
  {
    id: 'd3',
    name: 'The Café & Lounge',
    tagline: 'Tea, Coffee & Light Bites',
    cuisine: 'Café',
    description: 'Perfect for your morning tea or evening snacks. Every room also features a hot water kettle and mini-fridge.',
    hours: '7:00 AM – 9:00 PM',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=95',
    imageAlt: 'Relaxing cafe lounge area',
    reservationHref: '/contact',
  },
]
