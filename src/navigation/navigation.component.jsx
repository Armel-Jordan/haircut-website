import React from 'react';
import './navigation.styles.scss';

const Navigation = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(`${id}-top`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">BEAUTY WOMAN</div>
        <div className="navbar__links">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products</a>
          <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>Our team</a>
          <a href="#why-choose-us" onClick={(e) => handleNavClick(e, 'why-choose-us')}>Why Choose Us</a>
        </div>
        <button 
          className="navbar__contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navigation;