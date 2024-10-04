import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link import qilindi
import store from '../stores/store';
import useApi from '../hook/useApi';
import Product from './ui/Product';
import Loader from './ui/Loader';

function Search() {
    const { searchText, setSearchText } = store();
    const { data, getApi, loading } = useApi();

    useEffect(() => {
        const handler = setTimeout(() => {
            getApi(`products/search?q=${searchText}`);
        }, 1000);


        return () => {
            clearTimeout(handler);
        };
    }, [searchText]); 


    return ( 
        <div className="search ">
            {loading && <Loader />}
            <div className="search__content container">
                {data && data.products?.length > 0 ? ( 
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
                    <p className="title">Product not available.</p>
                )}
            </div>
        </div>
    );
}

export default Search;
