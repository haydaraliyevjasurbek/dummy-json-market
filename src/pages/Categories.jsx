import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hook/useApi';
import Loader from '../components/ui/Loader';
import Product from '../components/ui/Product';

function Categories() {
    const listStyle = {
        listStyle: 'none',
    };
    const { data, getApi, loading } = useApi();
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        getApi(`products?limit=194`);
    }, []);

    const products = data && data.products ? data.products : [];
    const uniqueCategories = [...new Set(products.map(item => item.category))].sort((a, b) => a.localeCompare(b));
    const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : [];
    return (
        <div className='categories'>
            <div className="categories__title">
                <ul className='categories__name-list'>
                    {loading && <Loader />}
                    {uniqueCategories.length > 0 ? (
                        uniqueCategories.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                            >
                                <Link href="#" className="categories__title-link">
                                    {category.replace("-", " ").toUpperCase()}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>Hech kategoriya mavjud emas.</li>
                    )}
                </ul>
            </div>
            <div className="categories__item-content">
                {(selectedCategory && (
                    <>
                        <h3 className='title'>{selectedCategory.replace("-", " ").toUpperCase()}</h3>
                        <ul className="categories__item-name">
                            {loading && <Loader />}
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((item, index) => (
                                 
                                            <Product
                                                key={item.id} 
                                                name={item.name || item.title}
                                                productId={item.id}
                                                price={item.price}
                                                rating={item.rating}
                                                imgUrl={item.images[0] || item.image || item.img || 'fav.png'} 
                                            />
                                ))
                            ) : (
                                <li className="title">Mahsulot mavjud emas.</li>
                            )}
                        </ul>
                    </>
                ) ) || (
                    <li className="title" style={listStyle}>Select CATEGORY!</li>
                )}
            </div>
        </div>
    );
}

export default Categories;
