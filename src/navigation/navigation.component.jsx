import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Fonction pour détecter la section active lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const sections = ['home', 'products', 'team', 'why-choose-us', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset pour la navigation fixe

      for (const section of sections) {
        const element = document.getElementById(`${section}-top`);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false); // Fermer le menu mobile après un clic
    
    if (location.pathname !== '/') {
      navigate('/');
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
    setIsMenuOpen(false); // Fermer le menu mobile après un clic
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'team', label: 'Our team' },
    { id: 'why-choose-us', label: 'Why Choose Us' }
  ];

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

          {/* Menu pour écrans moyens et grands */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => link.id === 'home' 
                  ? (e.preventDefault(), location.pathname === '/' 
                      ? window.scrollTo({ top: 0, behavior: 'smooth' }) 
                      : navigate('/'))
                  : handleNavClick(e, link.id)
                }
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${activeSection === link.id 
                    ? 'text-pink-600 hover:text-pink-700' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                  ${location.pathname === '/' ? 'cursor-pointer' : ''}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bouton Contact */}
          <button 
            className="hidden md:block bg-pink-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-pink-700 transition-colors"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact Us
          </button>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => link.id === 'home' 
                  ? (e.preventDefault(), location.pathname === '/' 
                      ? window.scrollTo({ top: 0, behavior: 'smooth' }) 
                      : navigate('/'))
                  : handleNavClick(e, link.id)
                }
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${activeSection === link.id 
                    ? 'text-pink-600 bg-gray-50' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
            <button 
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-pink-600 hover:bg-pink-700 transition-colors"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;