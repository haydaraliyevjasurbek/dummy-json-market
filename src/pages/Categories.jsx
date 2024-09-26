import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Link ni import qilish
import useApi from '../hook/useApi';
import store from '../stores/store';
import Loader from '../components/ui/Loader';

function Categories() {
    const { data, getApi, loading } = useApi();
    const { category, setCategory, loader, setLoader, categoryObj, setCategoryObj } = store();
    
    // Tanlangan kategoriya uchun holat
    const [hoveredCategory, setHoveredCategory] = useState(null);

    useEffect(() => {
        getApi(`products?limit=194`);
    }, [category]);

    // Mahsulotlar mavjudligini tekshirish
    const products = data?.products || [];

    // Takrorlanmas category-larni olish va alifbo bo'yicha tartiblash
    const uniqueCategories = [...new Set(products.map(item => item.category))]
        .sort((a, b) => a.localeCompare(b));

    // Birinchi kategoriya o'rnatish uchun useEffect
    useEffect(() => {
        if (uniqueCategories.length > 0 && !hoveredCategory) {
            setHoveredCategory(uniqueCategories[0]);
        }
    }, [uniqueCategories, hoveredCategory]);

    // Hozirgi hover qilingan kategoriya asosida mahsulotlarni filtrlash
    const filteredProducts = products.filter(product => product.category === hoveredCategory);

    return (
        <div className='categories'>
            <div className="categories__title">
                <ul className='categories__name-list'>
                    {loader && <Loader />}
                    {uniqueCategories.map((category, index) => (
                        <li 
                            key={index} 
                            className=""
                            onMouseEnter={() => setHoveredCategory(category)} // Hover bo'lganda kategoriya o'rnatiladi
                            onMouseLeave={() => setHoveredCategory(uniqueCategories[0])} // Hoverdan chiqishda birinchi kategoriya o'rnatiladi
                        >
                            <a href="#" className="categories__title-link">{category}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hover qilingan kategoriya nomini va mahsulotlarini ko'rsatish */}
            <div className="categories__item-content">
                {hoveredCategory && (
                    <>
                        {/* Kategoriya nomini chiqarish */}
                        <h3>{hoveredCategory}</h3>
                        
                        {/* Kategoriya bo'yicha mahsulotlar ro'yxati */}
                        <ul className="categories__item-name">
                            {loader && <Loader />}

                            {filteredProducts.map((item, index) => (
                                <li key={index} className="">
                                    <Link to={`/products/${item.id}`} className="categories__title-link">{item.title}</Link>
                                    {/* Link komponenti yordamida mahsulotga o'tish */}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default Categories;
