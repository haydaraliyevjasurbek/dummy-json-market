import React, { useEffect } from 'react'
import Nav from './components/Nav'
import useApi from './hook/useApi';
import Categories from './pages/Categories'
import store from './stores/store';
import Slider from './components/Slider';
function App() {
  const { data, getApi, loading } = useApi();
  const {loader, category, categoryObj, setCategoryObj, topRating, setTopRating } = store();
  useEffect(() => {
    getApi('products?limit=194');
  }, []); 

  useEffect(() => {
    if (data && data.products) {
      localStorage.setItem('category-obj', JSON.stringify(data.products));
      const filteredProducts = data.products.filter((product) => product.rating >= 4.8);
      localStorage.setItem('top-rating', JSON.stringify(filteredProducts));
      console.log(categoryObj);
      // Filter products with rating >= 4.5
      setTopRating(filteredProducts);
    }
  }, [data]); // data o'zgarganda ishlaydi


  // `beforeunload` hodisasini qo'shish
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear(); 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // O'chirish
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <div className='container'>
      <Nav/>
      {category ? <Categories/>  : 
      <>
      <Slider/>
      
      </>}
      
      
    </div>
  )
}

export default App