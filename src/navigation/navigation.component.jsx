import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    // Si on n'est pas sur la page d'accueil, rediriger d'abord
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la navigation soit terminée avant de scroller
      setTimeout(() => {
        const element = document.getElementById(`${id}-top`);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, juste scroller
      const element = document.getElementById(`${id}-top`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleLogoClick = () => {
    // Si on est déjà sur la page d'accueil, scroll vers le haut
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Sinon, rediriger vers l'accueil
      navigate('/');
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            onClick={handleLogoClick}
            className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-gray-600 transition-colors"
          >
            BEAUTY WOMAN
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" 
               onClick={(e) => {
                 e.preventDefault();
                 if (location.pathname === '/') {
                   window.scrollTo({
                     top: 0,
                     behavior: 'smooth'
                   });
                 } else {
                   navigate('/');
                 }
               }}
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a href="#products" 
               onClick={(e) => handleNavClick(e, 'products')}
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </a>
            <a href="#team" 
               onClick={(e) => handleNavClick(e, 'team')}
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Our team
            </a>
            <a href="#why-choose-us" 
               onClick={(e) => handleNavClick(e, 'why-choose-us')}
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Why Choose Us
            </a>
          </div>
          <button 
            className="bg-pink-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-pink-700 transition-colors"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;