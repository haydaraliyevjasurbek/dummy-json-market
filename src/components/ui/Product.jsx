import React from 'react';
import { FaStar } from "react-icons/fa"; // star icon
import { FaRegHeart } from "react-icons/fa"; // heart
import store from '../../stores/store'; // store import qilish

function Product({ id, name, price, rating, imgUrl }) {
  const { addToCart } = store(); // addToCart funksiyasini olish

  // Reytingni butun son qilib olish uchun Math.round dan foydalanamiz
  const roundedRating = Math.round(rating);

  // Yulduzlarni render qilish uchun massiv hosil qilamiz
  const stars = Array(5).fill(false).map((_, index) => index < roundedRating);

  // Mahsulotni savatga qo'shish funksiyasi
  const handleAddToCart = () => {
    const product = {
      id, // mahsulotning id-si
      name,
      price,
      imgUrl
    };
    addToCart(product); // Mahsulotni savatga qo'shish
    // alert(`${name} savatga qo'shildi!`); // Xabar chiqish
  };

  return (
    <div className="product__content">
      <span className="product__like"><FaRegHeart /></span>
      <div className="product__content-img">
        <img className="product__img" src={imgUrl} alt="img" />
      </div>
      <p className="product__name">{name}</p>
      <p className="product__price">{price} $</p>
      <div className="product__star">
        {/* Yulduzlarni mapping qilish */}
        {stars.map((isActive, index) => (
          <FaStar key={index} color={isActive ? 'yellow' : 'gray'} />
        ))}
      </div>
      <button className="product__get-btn" onClick={handleAddToCart}>Savatga</button> {/* Savatga qo'shish tugmasi */}
    </div>
  );
}

export default Product;
