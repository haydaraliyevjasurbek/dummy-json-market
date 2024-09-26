import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hook/useApi';
import Loader from '../components/ui/Loader';
import store from '../stores/store';

function ProductDetail() {
    const { loader, category, categoryObj, setCategoryObj, topRating, setTopRating } = store();
    const { id } = useParams(); // URL parametridan id ni olish
    const { data, getApi, loading, error } = useApi(); // error holatini qo'shish

    const [product, setProduct] = useState(() => {
        // localStorage dan saqlangan ma'lumotni olish
        const savedProduct = localStorage.getItem('product_item');
        return savedProduct ? JSON.parse(savedProduct) : {};
    });

    useEffect(() => {
        // Mahsulot ma'lumotlarini olish
        getApi(`products/${id}`); // `id` ni URL dan olingan
    }, [id]);

    useEffect(() => {
        if (data) {
            setProduct(data); // Agar data mavjud bo'lsa, uni oling
            // Mahsulotni localStorage ga saqlash
            localStorage.setItem('product_item', JSON.stringify(data)); // Har safar yangi mahsulotni saqlash
        }
        console.log('API javobi:', data);
    }, [data, id]);

    if (loading) {
        return <Loader />; // Yuklanayotgan paytda Loader ko'rsatish
    }

    if (error) {
        return <div>Xato: {error.message}</div>; // Xato holatini ko'rsatish
    }

    // product bo'sh bo'lsa xabar ko'rsatish
    if (!product || Object.keys(product).length === 0) {
        return <div>Mahsulot topilmadi</div>;
    }

    return (
        <div className="data">
            {loader && <Loader />} 
            <div className="product-detail">
                <h2>{product.title}</h2> {/* Mahsulot nomi */}
                <p>{product.description}</p> {/* Mahsulot tavsifi */}
                <img src={product.images?.[0] || "https://www.thuvienapi.com/static/fav.png"} alt={product.title} /> {/* Mahsulot rasmi */}
                <p>Price: {product.price}$</p> {/* Mahsulot narxi */}
            </div>
        </div>
    );
}

export default ProductDetail;
