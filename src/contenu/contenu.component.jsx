// src/components/Contenu.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './contenu.styles.scss';

const Contenu = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  // Images de fond pour le carrousel
  const backgroundImages = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  ];

  // Changement automatique d'image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id='home'>
      <div className="section-anchor" id="home-top"></div>
      {/* Carrousel d'images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero__background ${
            currentImageIndex === index ? 'hero__background--active' : ''
          }`}
        >
          <div 
            className="hero__image"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="hero__overlay" />
        </div>
      ))}

      {/* Contenu principal */}
      <div className="hero__content">
        <h1>Get Hair Style<br />You Deserve</h1>
        <p>Discover a world of sophistication and personalized beauty at MINERVA. 
           Our salon is more than just a place for haircuts; it's a haven where 
           your unique style takes center stage.</p>
        <button 
          className="hero__cta"
          onClick={() => navigate('/booking')}
        >
          Book appointment
        </button>
      </div>

      {/* Indicateurs du carrousel */}
      <div className="hero__indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`hero__indicator ${
              currentImageIndex === index ? 'hero__indicator--active' : ''
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Contenu;