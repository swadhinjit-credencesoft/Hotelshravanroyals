export interface Testimonial {
  id: string
  name: string
  country: string
  rating: number
  text: string
  stayType: string
  avatar: string
  source: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Navin Jaiswal',
    country: 'India',
    rating: 5,
    text: 'I stayed at the hotel for 2 days and had all my meals in the restaurant. The rooms were clean and comfortable, the staff behavior was excellent, and the food taste was superb. Everyone was very cooperative. Highly recommended for anyone visiting Purnia looking for luxury rooms and a positive experience.',
    stayType: 'Family Stay',
    avatar: '/images/exterior6.jpeg',
    source: 'Google Reviews',
    date: 'May 2025',
  },
  {
    id: 't2',
    name: 'Ravi Prakash Sharma',
    country: 'India',
    rating: 5,
    text: 'Hotel was neat and clean and very close to the bus stand. The room quality was good, staff members were friendly and cooperative, and the restaurant food was awesome. Great choice for business travelers and transit stays.',
    stayType: 'Business Trip',
    avatar: '/images/exterior7.jpeg',
    source: 'Google Reviews',
    date: 'April 2025',
  },
  {
    id: 't3',
    name: 'Shruti Sinha',
    country: 'India',
    rating: 5,
    text: 'The ambience was mesmerizing and the hotel decoration looked beautiful. Everything was clean and well maintained. The best part was the humble and polite staff who assisted us in a very professional manner. Highly recommended for families.',
    stayType: 'Family Stay',
    avatar: '/images/exterior8.jpeg',
    source: 'MakeMyTrip',
    date: 'March 2025',
  },
  {
    id: 't4',
    name: 'Mohit Anthwal',
    country: 'India',
    rating: 5,
    text: 'Hotel is located at a very convenient place with all facilities available nearby. Staff was cooperative and helpful throughout the stay, and the room condition was very good. Great value for money and suitable for solo as well as business travelers.',
    stayType: 'Solo Business Stay',
    avatar: '/images/room1.jpeg',
    source: 'Google Reviews',
    date: 'February 2025',
  },
];
