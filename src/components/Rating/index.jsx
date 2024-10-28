import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleSelect = (value) => {
    setRating(value)
  }
  
  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
      {[1, 2, 3, 4, 5].map((v) => (
          <Star 
            key={v} 
            value={v} 
            glowing={rating >= v}
            onSelect={handleSelect} 
          />
        ))}
      </div>
    </div>
  );
};
