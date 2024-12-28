import React from 'react';
import './whyChooseUs.styles.scss';

const WhyChooseUs = () => {
  const stats = {
    clients: '30k',
    salons: '15'
  };

  const features = [
    {
      icon: '👥',
      title: 'Expert Stylists',
      description: 'Our team of highly skilled and experienced stylists is dedicated to staying on the cutting edge of industry trends.'
    },
    {
      icon: '🎨',
      title: 'Personalized Service',
      description: 'Your unique style is our priority. Enjoy personalized consultations with our stylists.'
    },
    {
      icon: '💫',
      title: 'Trendsetting',
      description: "We're not just following trends; we're setting them."
    },
    {
      icon: '✨',
      title: 'Premium Products',
      description: 'We believe in using only the best. Our premium hair care and styling products ensure quality results.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="section-anchor" id="why-choose-us-top"></div>
      <h2>Why Choose Us</h2>
      <div className="why-choose-us__stats">
        <div className="stat">
          <h3>{stats.clients}</h3>
          <p>Satisfied clients</p>
        </div>
        <div className="stat">
          <h3>{stats.salons}</h3>
          <p>Salons around the city</p>
        </div>
      </div>
      <div className="why-choose-us__features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-card__icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;