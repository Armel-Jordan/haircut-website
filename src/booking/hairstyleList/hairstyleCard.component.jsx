import React from 'react';

const HairstyleCard = ({ hairstyle, onSelect }) => {
  const { name, image, price, duration } = hairstyle;
  
  return (
    <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{price}€</p>
        <p className="text-gray-500">{duration} min</p>
        <button
          onClick={onSelect}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Réserver
        </button>
      </div>
    </div>
  );
};

export default HairstyleCard;