import React from 'react';
// import './ProductNotAvailable.scss'; // SCSS faylini import qilsh

const ProductNotAvailable = () => {
    return (
        <div className="product-not-available">
            <h1 className="product-not-available__title">Product Not Available</h1>
            <p className="product-not-available__text">Sorry, this product is currently not available.</p>
        </div>
    );
};

export default ProductNotAvailable;
