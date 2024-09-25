import React, { useEffect } from 'react'
import Nav from './components/Nav'
import useApi from './hook/useApi';
import Categories from './pages/Categories'
import store from './stores/store';
import Slider from './components/Slider';
import Loader from './components/ui/Loader';
import TopProducts from './components/TopProducts';
function App() {
  const { data, getApi,  } = useApi();
  const {loader, category, categoryObj, setCategoryObj, topRating, setTopRating } = store();
  useEffect(() => {
    getApi('products?limit=194');
  }, []); 

  useEffect(() => {
    if (data && data.products) {
      localStorage.setItem('category-obj', JSON.stringify(data.products));
      const filteredProducts = data.products.filter((product) => product.rating >= 4.8);
      localStorage.setItem('top-rating', JSON.stringify(filteredProducts));
      // console.log(categoryObj);
      setTopRating(filteredProducts);
    }
  }, [data]);



  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear(); 
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <div className='container'>
      {loader && <Loader />}
      <Nav/>
      {category ? <Categories/> : 
      <>
      <Slider/>
      <p className='top-rate'>TOP rating</p>
      <TopProducts/>
      </>}
    </div>
  )
}

export default App