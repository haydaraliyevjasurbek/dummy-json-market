import React, { useState } from 'react';
import Product from './ui/Product';
import store from '../stores/store';
import Loader from './ui/Loader';

function TopProducts() {
  const { loader, category, categoryObj, setCategoryObj, topRating, setTopRating } = store();

  // Nechta mahsulot ko'rsatishni boshqarish uchun state
  const [visibleProducts, setVisibleProducts] = useState(10);

  // loader yoki topRating hali mavjud bo'lmasa, yuklash holatini ko'rsatamiz
  if (loader || !topRating || topRating.length === 0) {
    return <Loader />; // Yuklash holati
  }

  // Ko'proq mahsulotlarni ko'rsatish funktsiyasi
  const handleShowMore = () => {
    setVisibleProducts(prevVisible => prevVisible + 10); // Keyingi 10 mahsulotni qo'shamiz
  };

  return (
    <div className="product">
      {/* topRating massiv bo'lsa, map() orqali har bir mahsulotni Product komponentida render qilamiz */}
      {topRating.slice(0, visibleProducts).map((product, index) => (
        <Product
          key={index} // React uchun noyob key
          name={product.name} 
          price={product.price} 
          rating={product.rating} 
          imgUrl={product.images[0]} 
        />
      ))}

      {/* Agar ko'rsatish uchun qolgan mahsulotlar bo'lsa, "Ko'proq ko'rsatish" tugmasini ko'rsatamiz */}
      {visibleProducts < topRating.length && (
        <button onClick={handleShowMore}>Ko'proq ko'rsatish</button>
      )}
    </div>
  );
}

export default TopProducts;
