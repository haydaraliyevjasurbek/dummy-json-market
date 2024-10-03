import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hook/useApi';
import Loader from '../components/ui/Loader';
import store from '../stores/store'; // store import qilish
function ProductDetail() {
    const { loader, category, categoryObj, setCategoryObj, topRating, setTopRating } = store();
    const { id } = useParams(); // URL parametridan id ni olish
    const { data, getApi, loading, error } = useApi(); // error holatini qo'shish

    const [product, setProduct] = useState(() => {
        const savedProduct = localStorage.getItem('product_item');
        return savedProduct ? JSON.parse(savedProduct) : {};
    });

    useEffect(() => {
        getApi(`products/${id}`);
    }, [id]);

    useEffect(() => {
        if (data) {
            setProduct(data);
            localStorage.setItem('product_item', JSON.stringify(data));
        }
    }, [data, id]);

    if (loading) {
        return <Loader />;
    }
    const [num, setNum] = useState(0);
    const { addToCart } = store(); // addToCart funksiyasini olish
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
        <>
            {loader && <Loader />}
            {data && (
                <>
                    <div className="product-detail">
                        <div className="product-detail__img-container">
                            <div className="product-detail__img-selected">
                                {product.images?.map((item, index) => (
                                    <button className="product-detail__selected-btn" key={index} onClick={() => setNum(index)}>
                                        <img className="product-detail__selected-img" src={item} alt="" />
                                    </button>
                                ))}
                            </div>
                            <div className="product-detail__img-content">
                                <img src={product.images?.[num]} className="product-detail__img" />
                            </div>
                        </div>
                        <div className='product-detail-text'>
                            <p className="product-detail__price">NAME: {product.title}</p>
                            <p className="product-detail__price">PRICE:  {product.price} $</p>
                            <p className="product-detail__price">BRAND: {product.brand || "No bread"}</p>
                            <p className="product-detail__price">RETURN: {product.returnPolicy}</p>
                            <p className="product-detail__price">DESCRIPTION: {product.description}</p>
                        </div>
                    <button className="product__get-btn" onClick={handleAddToCart}>BASKET</button> {/* Savatga qo'shish tugmasi */}
                    </div>
                </>
            )}
        </>
    );
}

export default ProductDetail;
