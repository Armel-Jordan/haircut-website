import React from 'react';
import HairstyleCard from './hairstyleCard.component';

const hairstyles = [
  {
    id: 1,
    name: 'Coupe Classique',
    image: '/images/coupe-classique.jpg',
    price: 35,
    duration: 30,
  },
  {
    id: 2,
    name: 'Coupe + Coloration',
    image: '/images/coloration.jpg',
    price: 75,
    duration: 90,
  },
  // Ajoutez d'autres styles...
];

const HairstyleList = ({ onSelectHairstyle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {hairstyles.map((style) => (
        <HairstyleCard
          key={style.id}
          hairstyle={style}
          onSelect={() => onSelectHairstyle(style)}
        />
      ))}
    </div>
  );
};

export default HairstyleList;