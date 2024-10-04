import React, { useState } from 'react';
import Product from './ui/Product';
import store from '../stores/store';
import Loader from './ui/Loader';

function TopProducts({productId}) {
  const { loader,  topRating } = store();

  const [visibleProducts, setVisibleProducts] = useState(10);

  if (loader || !topRating || topRating.length === 0) {
    return <Loader />; 
  }

  const handleShowMore = () => {
    setVisibleProducts(prevVisible => prevVisible + 10);
  };
  return (
    <>
      <div className="product">
        {topRating.slice(0, visibleProducts).map((product) => (
          <Product 
            key={product.id || product.name}
            productId={product.id}
            name={product.name || product.title}
            price={product.price}
            rating={product.rating}
            imgUrl={product.images[0] || product.image || product.img || 'gav.png'} 
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
