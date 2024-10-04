import React from 'react';
import { FaStar } from "react-icons/fa"; 
import store from '../../stores/store'; 
import { Link } from 'react-router-dom';
function Product({ productId, id, name, price, rating, imgUrl }) {
  const { addToCart } = store(); 
  const roundedRating = Math.round(rating);
  const stars = Array(5).fill(false).map((_, index) => index < roundedRating);
  const handleAddToCart = () => {
    const product = {
      productId, 
      name,
      price,
      imgUrl
    };
    addToCart(product); 
  };
  return (
    <div className="product__content">
      <Link to={`/product/${productId}`}>
        <div className="product__content-img">
          <img className="product__img" src={imgUrl} alt="img" />
        </div>
        <p className="product__name">{name}</p>
        <p className="product__price">{price} $</p>
        <div className="product__star">
          {stars.map((isActive, index) => (
        <FaStar key={index} fill={isActive ? '#b6b7fd' : 'gray'} />
      ))}
        </div>
      </Link>
      <button className="product__get-btn" onClick={handleAddToCart}>BASKET</button>
    </div>
  );
}

export default Product;
