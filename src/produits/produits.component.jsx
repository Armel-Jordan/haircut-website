import React, { useState } from 'react';

const Produits = () => {
  const [startIndex, setStartIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'Volumize Guts 10',
      price: 55,
      image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Hot Air Comb',
      price: 235,
      image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Absolut Repair Loreal',
      price: 48,
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Volume Conditioner',
      price: 48,
      image: 'https://images.unsplash.com/photo-1624984624366-5e37becce930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Hair Serum Pro',
      price: 62,
      image: 'https://images.unsplash.com/photo-1599305090598-fe179d501226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Styling Cream',
      price: 42,
      image: 'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const productsPerPage = 4;
  const maxStartIndex = Math.max(0, products.length - productsPerPage);

  const handlePrevious = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(maxStartIndex, prev + 1));
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="scroll-mt-16" id="products-top">
      <section className="py-16 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our products</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Experience the difference with top-tier products that enhance both the aesthetics and health of your hair.
          </p>
          
          <div className="relative">
            <button 
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 
                ${startIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
              {visibleProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-xl mb-4">${product.price}</p>
                    <button className="w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10
                ${startIndex >= maxStartIndex ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={handleNext}
              disabled={startIndex >= maxStartIndex}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produits;