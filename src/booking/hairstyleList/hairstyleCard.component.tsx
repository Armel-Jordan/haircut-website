import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hairstyle } from '../types/index.component';

interface Props {
  hairstyle: Hairstyle;
}

export const HairstyleCard = ({ hairstyle }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={hairstyle.image} 
        alt={hairstyle.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hairstyle.name}</h3>
        <p className="text-gray-600 mb-2">{hairstyle.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${hairstyle.price}</span>
          <span className="text-sm text-gray-500">{hairstyle.duration} min</span>
        </div>
        <button
          onClick={() => navigate(`/booking/${hairstyle.id}`)}
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};