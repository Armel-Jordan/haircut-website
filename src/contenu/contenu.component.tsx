import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const backgroundImages = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];
 const Contenu = () => {  // Suppression du : FC
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            opacity: 0.7 
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <Scissors className="w-16 h-16 mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-center">
            Get The Hair Style<br />You Deserve
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-center">
            Discover a world of sophistication and personalized beauty at MINERVA. 
            Our salon is more than just a place for haircuts; it's a haven where 
            your unique style takes center stage.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contenu;