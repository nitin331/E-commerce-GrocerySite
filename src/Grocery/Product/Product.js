import React, { useState } from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Product = ({addToCart }) => {
  
  const products= [
    {
      name: 'Avacado',
      image: 'images/istockphoto-1299023802-612x612.jpg',
      price: 160,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Kiwi',
      image: 'images/dlqlO3YfSWGsQ4Tka1YVPQ.webp',
      price: 110,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Nescafe',
      image: 'images/product-3.jpg',
      price: 150,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Water melon',
      image: 'images/product-4.jpg',
      price: 50,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Heinz Ketchup',
      image: 'images/product-5.jpg',
      price: 230,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Mint Leaves',
      image: 'images/product-6.jpg',
      price: 20,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Bananas',
      image: 'images/bananas-on-the-same-branch-isolated-on-yellow-pastel-color-background-free-photo.jpg',
      price: 50,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Double Stuffed Oreos',
      image: 'images/double-stuffed-oreos.webp',
      price: 40,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    }
  ];

  return (
    <section className="product" id="product">
    <h1 className="heading">
      our <span>products</span>
    </h1>
    <div className="box-container">
      {products.map((product, index) => (
        <div className="box" key={index}>
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="content">
            <h3>{product.name}</h3>
            <div className="price">{product.price}</div>
            <div className="stars">
              {product.stars.map((star, starIndex) => (
                <FontAwesomeIcon icon={star} key={starIndex} />
              ))}
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)} // Pass the product object to addToCart
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Product;
