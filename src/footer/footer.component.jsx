import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className="section-anchor" id="contact-top">
    <footer className="footer" id="contact">
      <div className="footer__content">
        <div className="footer__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.8876811952395!2d-71.24772372346876!3d46.83402037123363!2m3!1f0!2f0!3f0!
            3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897d1119ee79d%3A0x27c810e1c1c32c25!2s1565%20Bd%20P%C3%A8re-
            Leli%C3%A8vre%2C%20Quebec%20City%2C%20QC%20G1M%201P2!5e0!3m2!1sen!2sca!4v1709840000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            padding="10px"
            margin="10px "
          />
        </div>
        
        <div className="footer__info">
          <div className="footer__contact">
            <h3>Contact Us</h3>
            <p>+1(873) 664-6350</p>
            <p>info@minerva.com</p>
            <p>carrer@minerva.com</p>
          </div>

          <div className="footer__location">
            <h3>Visit Us</h3>
            <p>1-1565 boulevard Pere-Leliere</p>
            <p>G1M 1P2 QC</p>
          </div>
          <div className="footer__newsletter">
            <h3>Subscribe to the newsletter</h3>
            <div className="newsletter__form">
              <input type="email" placeholder="Email..." />
              <button type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__links">
          <a href="#sitemap">Sitemap</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <p className="footer__copyright">
          Copyright © Cyndy. All Rights Reserved.
        </p>
      </div>
      </footer>
    </div>
  );
};


export default Footer;
