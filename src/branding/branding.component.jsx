import React from 'react';
import './branding.styles.scss';

const Branding = () => {
  return (
    <div className="branding" id="home-top">
      <div className="branding__overlay">
        <div className="branding__content">
          <h1 className="branding__title">L'Art de la Beauté</h1>
          <p className="branding__slogan">
            Révélez votre beauté naturelle avec nos soins capillaires d'exception
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branding; 