import React, { useState } from 'react';
import Product from './ui/Product';
import store from '../stores/store';
import Loader from './ui/Loader';

function TopProducts({productId}) {
  const { loader,  topRating } = store();

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
    <>
      <div className="product">
        {/* topRating massiv bo'lsa, map() orqali har bir mahsulotni Product komponentida render qilamiz */}
        {topRating.slice(0, visibleProducts).map((product) => (
          <Product 
            key={product.id || product.name} // Noyob key sifatida product id yoki name ishlatiladi
            productId={product.id}
            name={product.name || product.title}
            price={product.price}
            rating={product.rating}
            imgUrl={product.images[0] || product.image || product.img || 'default-image-url.jpg'} // Default rasm
          />
        ))}
        {visibleProducts < topRating.length && (
        <button className="top__rating-btn"onClick={handleShowMore}>AGAIN</button>
      )}
      </div>
    </>
  );
}

export default TopProducts;
