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
    title: 'Hilltop Weddings & Family Celebrations',
    category: 'Weddings',
    description: 'Host a dream outdoor wedding or family celebration surrounded by the forest of Ajodhya Hills. A storybook setting for ceremonies, receptions, and multi-day festivities.',
    capacity: 'Up to 100 guests',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg',
    features: ['Scenic outdoor celebration spaces', 'Family & group room blocks', 'Organic farm dining & barbeque'],
  },
  {
    id: 'e2',
    title: 'Corporate Retreats & Team Offsites',
    category: 'Corporate',
    description: 'Take the team away from the boardroom and into the calm of Ajodhya Hills. Focused offsites, strategy sessions, and team-bonding retreats with reliable Wi-Fi and attentive service.',
    capacity: 'Group bookings up to 25',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg',
    features: ['Free high-speed Wi-Fi', 'Peaceful, focused environment', 'Group accommodation options'],
  },
  {
    id: 'e3',
    title: 'Birthday & Private Group Parties',
    category: 'Parties',
    description: 'Celebrate birthdays, anniversaries, and private milestones in the open air of a forest resort. Block a clutch of cottages and let the hills do the decorating.',
    capacity: 'Up to 40 guests',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064459381-WhatsApp Image 2026-05-11 at 15.42.11.jpg',
    features: ['Barbeque & bonfire evenings', 'Vista cottages for the group', 'Friendly, attentive hosts'],
  },
  {
    id: 'e4',
    title: 'Weekend Day Trips from Ajodhya',
    category: 'Day Trips',
    description: 'A hassle-free hilltop base for exploring the Ajodhya Hills & Forest Reserve, Thurga Dam, and Deulghata Temples. Arrive early, stay the day, and soak in the forest breeze.',
    capacity: 'Day visitors welcome',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg',
    features: ['0.4 km from Ajodhya Hills & Forest Reserve', 'Packaged veg meals available', 'Luggage storage for early arrivals'],
  },
];