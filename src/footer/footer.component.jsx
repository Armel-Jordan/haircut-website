import React from 'react';

const Footer = () => {
  return (
    <div className="scroll-mt-16" id="contact-top">
      <footer className="bg-gray-900 text-white pt-16 pb-6" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                title="Localisation du salon de coiffure"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.8876811952395!2d-71.24772372346876!3d46.83402037123363!2m3!1f0!2f0!3f0!
                3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897d1119ee79d%3A0x27c810e1c1c32c25!2s1565%20Bd%20P%C3%A8re-
                Leli%C3%A8vre%2C%20Quebec%20City%2C%20QC%20G1M%201P2!5e0!3m2!1sen!2sca!4v1709840000000!5m2!1sen!2sca"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="mb-2 text-gray-300">+1(873) 664-6350</p>
                <p className="mb-2 text-gray-300">info@minerva.com</p>
                <p className="mb-2 text-gray-300">carrer@minerva.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="mb-2 text-gray-300">1-1565 boulevard Pere-Leliere</p>
                <p className="mb-2 text-gray-300">G1M 1P2 QC</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Email..." 
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500 text-white"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                <a href="#sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
              <p className="text-gray-400">
                Copyright  Cyndy. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
