import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link import qilindi
import store from '../stores/store';
import useApi from '../hook/useApi';
import Product from './ui/Product';
import Loader from './ui/Loader';

function Search() {
    const { category, setCategory, searchBtn, setSearchBtn, searchText, setSearchText } = store();
    const { data, getApi, loading } = useApi();

    // Mahsulotlar ro'yxatini olish
    useEffect(() => {
        const handler = setTimeout(() => {
            getApi(`products/search?q=${searchText}`);
        }, 1000);

        // Cleanup function to clear the timeout
        return () => {
            clearTimeout(handler);
        };
    }, [searchText]); // searchText o'zgarishi bilan yana chaqiriladi

    // data kelganda konsolga chiqishi
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]); // data o'zgarishi bilan chaqiriladi

    return ( 
        <div className="search ">
            {loading && <Loader />}
            <div className="search__content container">
                {data && data.products?.length > 0 ? ( // data mavjudligini va mahsulotlar ro'yxatini tekshirish
                    data.products.map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`} className="products__link">
                            <Product
                                name={item.name || item.title}
                                productId={item.id}
                                price={item.price}
                                rating={item.rating}
                                imgUrl={item.images[0] || item.image || item.img || 'default-image-url.jpg'} // Default rasm
                            />
                        </Link>
                    ))
                ) : (
                    <p className="title">Mahsulot mavjud emas.</p>
                )}
            </div>
        </div>
    );
}

export default Search;
