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
    name: 'Organic Farm Dining',
    tagline: 'Farm-to-table, fresh from our own farm',
    cuisine: 'Vegetarian Farm Thali & Local Bengali',
    description: 'Dine on organic produce grown right here at The Divine Oasis. Our beloved veg thali brings seasonal farm vegetables, local rice, and traditional Bengali flavours to your table, prepared fresh daily by our kitchen.',
    hours: 'Breakfast 8:00 – 11:00 AM · Lunch 12:30 – 3:30 PM · Dinner 7:30 – 10:30 PM',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg',
    imageAlt: 'Organic farm-to-table dining at The Divine Oasis Ajodhya Hill',
    reservationHref: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true',
  },
  {
    id: 'd2',
    name: 'Barbeque Evenings',
    tagline: 'Grill under the open hilltop sky',
    cuisine: 'Live Barbeque & Grill Stand',
    description: 'As dusk falls over Ajodhya Hills, our barbeque stand comes alive. Gather around the warmth of the grill with your group, enjoy the forest breeze, and make unforgettable evenings part of your stay.',
    hours: '6:30 PM – 10:00 PM (weather permitting)',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.12.jpg',
    imageAlt: 'Barbeque evening at The Divine Oasis Ajodhya Hill',
    reservationHref: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true',
  },
  {
    id: 'd3',
    name: 'Drinks & Hors d\'oeuvres Lounge',
    tagline: 'Relax in our scenic seating area',
    cuisine: 'Beverages, Snacks & Hors d\'oeuvres',
    description: 'Unwind with drinks and light bites at our hilltop seating area. Perfect for quiet mornings with a book, slow chats with friends, or a celebratory toast with family against the backdrop of the Ajodhya forest.',
    hours: '11:00 AM – 10:30 PM daily',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg',
    imageAlt: 'Scenic seating area and lounge at The Divine Oasis',
    reservationHref: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true',
  }
]