export interface EstateEvent {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Parties' | 'Live Musical Evenings' |'Day Trips' ;
  description: string;
  capacity: string;
  image: string;
  features: string[];
}

export const estateEvents: EstateEvent[] = [
  {
    id: 'e1',
    title: 'Outdoor Wedding Lawns',
    category: 'Weddings',
    description: 'A magical open-air setting surrounded by the Sahyadri hills, perfect for your special day.',
    capacity: 'Up to 250 guests',
    image: '/images/exterior3.jpeg',
    features: ['Custom floral decoration', 'Multi-cuisine catering', 'Bridal suite included'],
  },
  {
    id: 'e2',
    title: 'The Corporate Hub',
    category: 'Corporate',
    description: 'Where strategy meets serenity. Equipped with modern tech for offsites and board retreats.',
    capacity: 'Up to 60 guests',
    image: '/images/exterior4.jpeg',
    features: ['High-speed Wi-Fi', 'Projector & sound system', 'Team-building activities'],
  },
  {
    id: 'e3',
    title: 'Poolside Celebrations',
    category: 'Parties',
    description: 'An intimate setting by the infinity pool for birthday parties and private get-togethers.',
    capacity: 'Up to 40 guests',
    image: '/images/exterior5.jpeg',
    features: ['Live BBQ setup', 'Pool access', 'Custom music playlists'],
  },
  {
    id: 'e4',
    title: 'Acoustic Nights',
    category: 'Live Musical Evenings',
    description: 'Soulful acoustic performances by talented local artists under the starlit Karjat sky. Perfect for intimate gatherings and romantic evenings.',
    capacity: 'Up to 80 guests',
    image: '/images/exterior2.jpeg',
    features: ['Live acoustic artists', 'Bonfire setup', 'Custom song requests'],
  },
  {
    id: 'e5',
    title: 'Live Bands & DJ Nights',
    category: 'Live Musical Evenings',
    description: 'High-energy performances with professional live bands and DJs for weddings, parties, and corporate celebrations.',
    capacity: 'Up to 150 guests',
    image: '/images/exterior6.jpeg',
    features: ['Professional sound system', 'Custom playlists', 'Stage lighting'],
  },
  {
    id: 'e6',
    title: 'Bonfire Jam Sessions',
    category: 'Live Musical Evenings',
    description: 'An interactive musical experience where guests become part of the performance around a warm bonfire.',
    capacity: 'Up to 40 guests',
    image: '/images/exterior5.jpeg',
    features: ['Guided jam sessions', 'Instruments provided', 'Late-night setup'],
  },
  {
    id: 'e7',
    title: 'Day Picnic Package',
    category: 'Day Trips',
    description: 'A perfect one-day escape from the city. Enjoy pool access, manicured lawns, guided nature trails and a lavish multi-cuisine buffet lunch.',
    capacity: 'Up to 100 guests',
    image: '/images/exterior.jpeg',
    features: ['Infinity pool access', 'Lavish buffet lunch', 'Guided nature trails', 'Lawn games included'],
  },
  {
    id: 'e8',
    title: 'Group Day Outing',
    category: 'Day Trips',
    description: 'Curated group day-trip packages for corporate teams, school trips, and large families — complete with activities and catering.',
    capacity: 'Up to 200 guests',
    image: '/images/exterior3.jpeg',
    features: ['Team building activities', 'BBQ & bonfire option', 'Dedicated coordinator', 'Prior booking required'],
  },
];
