import React, { useEffect, useState } from 'react'
import { router } from "./router";
import Nav from './components/Nav'
import useApi from './hook/useApi';
import Categories from './pages/Categories'
import store from './stores/store';
import Loader from './components/ui/Loader';
import TopProducts from './components/TopProducts';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Search from './components/Search';
function App() {
  const { data, getApi,  } = useApi();
  const {loader, category, categoryObj, setCategoryObj, topRating, setTopRating, searchText, setSearchText } = store();
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

  return (
    <div className="container">
    <Router>
    {loader && <Loader />}
     <Nav />
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
          ))}
      </Routes>
        <Footer/>
    </Router>
    </div>
  )
}

export default App