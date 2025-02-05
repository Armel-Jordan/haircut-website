import React from 'react';

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
    <div className="scroll-mt-16" id="why-choose-us-top">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-pink-600 mb-2">{stats.clients}</h3>
              <p className="text-lg text-gray-600">Satisfied clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-pink-600 mb-2">{stats.salons}</h3>
              <p className="text-lg text-gray-600">Salons around the city</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;