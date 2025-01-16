import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hairstyle } from '../types/index.component';
import './hairstyle.card.styles.scss';

interface Props {
  hairstyle: Hairstyle;
}

export const HairstyleCard = ({ hairstyle }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="hairstyle-card">
      <img 
        src={hairstyle.image} 
        alt={hairstyle.name}
        className="hairstyle-card__image"
      />
      <div className="hairstyle-card__content">
        <h3 className="hairstyle-card__title">{hairstyle.name}</h3>
        <p className="hairstyle-card__description">{hairstyle.description}</p>
        <div className="hairstyle-card__details">
          <span className="hairstyle-card__price">${hairstyle.price}</span>
          <span className="hairstyle-card__duration">{hairstyle.duration} min</span>
        </div>
        <button
          onClick={() => navigate(`/booking/${hairstyle.id}`)}
          className="hairstyle-card__button"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};