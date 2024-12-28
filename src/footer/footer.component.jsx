import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__map">
          {/* A voir map  */}
        </div>
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>(123) 456-7890</p>
          <p>info@minerva.com</p>
          <p>beauty@gmail.com</p>
        </div>
        <div className="footer__location">
          <h3>Visit Us</h3>
          <p>200 W 86TH ST</p>
          <p>NEW YORK NY</p>
          <p>10024-3380 USA</p>
        </div>
        <div className="footer__newsletter">
          <h3>Subscribe to the newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Email..." />
            <button type="submit">→</button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__links">
          <a href="#sitemap">Sitemap</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <p>Copyright © MINERVA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
