import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HairstyleCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

const HairstyleCard: React.FC<HairstyleCardProps> = ({
  id,
  name,
  description,
  price,
  duration,
  image
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <button
          onClick={() => navigate(`/booking/${id}`)}
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          {t('booking.bookNow')}
        </button>
      </div>
    </div>
  );
};

export default HairstyleCard;