export interface Experience {
  id: string
  title: string
  category: string
  description: string
  duration: string
  image: string
  imageAlt: string
  season: 'Monsoon' | 'Winter' | 'Year-round'
  priceInfo?: string
}

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: 'The Pool',
    category: 'Leisure',
    description: 'Our large pool is at the heart of the property — perfect for lazy afternoons, family time and a refreshing break from the city.',
    duration: 'All day',
    image: '/Pool.png',
    imageAlt: 'The large swimming pool at Unwind Karjat',
    season: 'Year-round',
  },
  {
    id: 'e2',
    title: 'Lawn & Outdoor Spaces',
    category: 'Outdoors',
    description: 'Open spaces for games, conversations, celebrations and simply enjoying the outdoors.',
    duration: 'All day',
    image: '/outdoorspacess.jpeg',
    imageAlt: 'Lawn and outdoor spaces at Unwind Karjat',
    season: 'Year-round',
  },
  {
    id: 'e3',
    title: 'Games & Activities',
    category: 'Activities',
    description: 'Indoor and outdoor games, poolside activities and plenty of opportunities for some friendly competition.',
    duration: 'Through the day',
    image: '/sportsactivities.jpeg',
    imageAlt: 'Games and activities at Unwind Karjat',
    season: 'Year-round',
  },
  {
    id: 'e4',
    title: 'Music & Karaoke',
    category: 'Evening',
    description: 'Bring your people together for an evening of music, karaoke and good fun under the open sky.',
    duration: 'Evenings',
    image: '/celebrationsevenet.png',
    imageAlt: 'Music and karaoke evening at Unwind Karjat',
    season: 'Year-round',
  },
  {
    id: 'e5',
    title: 'Live Tandoor',
    category: 'Dining',
    description: 'Enjoy freshly prepared food and live tandoor preparations as part of the Unwind dining experience.',
    duration: 'Meal times',
    image: '/bbq.jpeg',
    imageAlt: 'Live tandoor and freshly prepared food at Unwind Karjat',
    season: 'Year-round',
    priceInfo: 'Included in meal plans'
  },
]
