import React, { useState } from 'react';
import './produits.styles.scss';

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
    <section className="products" id="products">
      <div className="section-anchor" id="products-top"></div>
      <h2>Our products</h2>
      <p>Experience the difference with top-tier products that enhance both the aesthetics and health of your hair.</p>
      
      <div className="products__container">
        <button 
          className="products__arrow products__arrow--left"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          &#8592;
        </button>

        <div className="products__grid">
          {visibleProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button className="product-card__cart">Add to Cart</button>
            </div>
          ))}
        </div>

        <button 
          className="products__arrow products__arrow--right"
          onClick={handleNext}
          disabled={startIndex >= maxStartIndex}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Produits;