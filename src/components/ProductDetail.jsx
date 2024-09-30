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
    return (
        <>
            {loader && <Loader />}
            {data && (
                <div className="product-detail">
                    <div className="product-detail__img-content">
                        <div className="product-detail__img-selected">
                            {product.images?.map((item, index) => (
                                <button className="product-detail__selected-btn" key={index} onClick={() => setNum(index)}>
                                    <img className="product-detail__selected-img" src={item} alt="" />
                                </button>
                            ))}
                        </div>
                        <img src={product.images?.[num] } className="product-detail__img" />
                    </div>
                    <div className='product-detail-text'>
                        <h2 className="product-detail__title">{product.title}</h2>
                        <p className="product-detail__price">Price:  { product.price} $</p>
                        <p className="product-detail__price">Brand: {product.brand || "no bread"}</p>
                        <p className="product-detail__price">Return: {product.returnPolicy}</p>
                        <p className="product-detail__description">{product.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductDetail;
