import React from 'react';
import './navigation.styles.scss';

const Navigation = () => {
  return (
     <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">BEAUTY WOMAN</div>
        <div className="navbar__links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#team">Our team</a>
          <a href="#blog">Blog</a>
        </div>
        <button className="navbar__contact">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navigation;