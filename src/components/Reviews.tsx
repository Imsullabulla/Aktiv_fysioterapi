import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Anne K',
    text: 'Rasmus fra Aktiv Fysioterapi får mine varmeste anbefalinger. Han skaber en behagelig og tryg atmosfære. Vi fik udover behandlingen også øvelser til at udføre hjemme.',
    rating: 5,
    date: '2 uger siden'
  },
  {
    id: '2',
    author: 'Rikke Hald',
    text: 'Utrolig kompetent og professionel behandling af mine hoftesmerter. Jeg har været enormt glad for hele forløbet og den måde, jeg er blevet behandlet og mødt på.',
    rating: 5,
    date: '1 måned siden'
  },
  {
    id: '3',
    author: 'Henrik Nielsen',
    text: 'Vi havde vores nyfødte datter i forløb. Vi fik yderst kompetent rådgivning og øvelser, og vores datter opnåede hurtigt bedring. De bedste anbefalinger herfra.',
    rating: 5,
    date: '3 måneder siden'
  }
];

export const Reviews: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {REVIEWS.map((review) => (
        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col h-full">
          <div className="flex gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-brand-secondary text-brand-secondary" />
            ))}
          </div>
          <p className="text-charcoal/80 italic mb-6 flex-grow">"{review.text}"</p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
            <span className="font-bold text-charcoal">{review.author}</span>
            <span className="text-xs text-charcoal/40 uppercase tracking-wider">{review.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
