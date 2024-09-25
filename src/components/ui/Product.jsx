import React from 'react';
import { FaStar } from "react-icons/fa"; // star icon
import { FaRegHeart } from "react-icons/fa"; // heart

function Product({ name, price, rating, imgUrl }) {
  // Reytingni butun son qilib olish uchun Math.round dan foydalanamiz
  const roundedRating = Math.round(rating);

  // Yulduzlarni render qilish uchun massiv hosil qilamiz
  const stars = Array(5).fill(false).map((_, index) => index < roundedRating);

  return (
    <div className="product__content">
      <span className="product__like"><FaRegHeart /></span>
      <div className="product__content-img">
        <img className="product__img" src={imgUrl} alt="img" />
      </div>
      <p className="product__name" >{name}</p>
      <p className="product__price">{price} $</p>
      <div className="product__star">
        {/* Yulduzlarni mapping qilish */}
        {stars.map((isActive, index) => (
          <FaStar key={index} color={isActive ? 'yellow' : 'gray'} />
        ))}
      </div>
      <button className="product__get-btn">Savatga</button>
    </div>
  );
}

export default Product;
