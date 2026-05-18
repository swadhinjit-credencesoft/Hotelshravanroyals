export interface EstateEvent {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Parties' | 'Day Trips';
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
];
