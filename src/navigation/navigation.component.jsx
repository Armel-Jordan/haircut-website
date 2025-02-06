import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Fonction pour détecter la section active lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const sections = ['home', 'products', 'team', 'why-choose-us', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    setIsMenuOpen(false);
    
    if (id === 'home') {
      handleLogoClick();
      return;
    }
    
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

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'products', label: t('products') },
    { id: 'team', label: t('team') },
    { id: 'why-choose-us', label: t('whyChooseUs') }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div 
              className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-gray-600 transition-colors"
              onClick={handleLogoClick}
            >
              {t('BEAUTY WOMAN')}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`/#${link.id}-top`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`${
                    activeSection === link.id
                      ? 'border-rose-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/services');
                }}
                className={`${
                  location.pathname === '/services'
                    ? 'border-rose-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t('services')}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              className="hidden md:block bg-pink-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-pink-700 transition-colors"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              {t('contact')}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`/#${link.id}-top`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`${
                activeSection === link.id
                  ? 'bg-rose-50 border-rose-500 text-rose-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              navigate('/services');
              setIsMenuOpen(false);
            }}
            className={`${
              location.pathname === '/services'
                ? 'bg-rose-50 border-rose-500 text-rose-700'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            {t('services')}
          </a>
          <button 
            className="w-full text-left px-3 py-2 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 transition-colors"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            {t('contact')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;