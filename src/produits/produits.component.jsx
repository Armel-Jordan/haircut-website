import React from 'react';
import './produits.styles.scss';

const Produits = () => {
  const products = [
    {
      id: 1,
      name: 'Volumize Guts 10',
      price: 55,
      image: './images/prducts/image1.jpg'
    },
    {
      id: 2,
      name: 'Hot Air Comb',
      price: 235,
      image: './images/prducts/image2.jpg'
    },
    {
      id: 3,
      name: 'Absolut Repair Loreal',
      price: 48,
      image: './images/prducts/image3.jpg'
    },
    {
      id: 4,
      name: 'Volume Condutioner',
      price: 48,
      image: '/images/prducts/image4.jpg'
    }
  ];

  return (
    <section className="products">
      <h2>Our products</h2>
      <p>Experience the difference with top-tier products that enhance both the aesthetics and health of your hair.</p>
      <div className="products__grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="product-card__cart">Add to Cart</button>
          </div>
        ))}
      </div>
      <button className="products__store">Open Store</button>
    </section>
  );
};

export default Produits;