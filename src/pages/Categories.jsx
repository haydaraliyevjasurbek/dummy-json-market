import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hook/useApi';
import store from '../stores/store';
import Loader from '../components/ui/Loader';
import Product from '../components/ui/Product';

function Categories() {
    const listStyle = {
        listStyle: 'none',
    };
    
    const { data, getApi, loading } = useApi();

    const [selectedCategory, setSelectedCategory] = useState(null);

    // Mahsulotlar ro'yxatini olish
    useEffect(() => {
        getApi(`products?limit=194`);
        
    }, []);

    // Mahsulotlardan kategoriyalarni olish
    const products = data && data.products ? data.products : [];
    const uniqueCategories = [...new Set(products.map(item => item.category))].sort((a, b) => a.localeCompare(b));

    // Tanlangan kategoriya uchun mahsulotlarni filtr qilish
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
                                onClick={() => setSelectedCategory(category)} // Kategoriya bosilganda o'rnatiladi
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
                                 
                                        <Link key={index} to={`/products/${item.id}`} className="categories__title-linkk">
                                            <Product
                                                key={item.id} // Noyob key sifatida product id yoki name ishlatiladi
                                                name={item.name || item.title}
                                                productId={item.id}
                                                price={item.price}
                                                rating={item.rating}
                                                imgUrl={item.images[0] || item.image || item.img || 'default-image-url.jpg'} // Default rasm
                                            />
                                        </Link>
                                  
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
