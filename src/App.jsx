import React, { useEffect, useState } from 'react'
import { router } from "./router";
import Nav from './components/Nav'
import useApi from './hook/useApi';
import store from './stores/store';
import Loader from './components/ui/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  const { data, getApi,  } = useApi();
  const {loader, topRating, setTopRating, } = store();
  useEffect(() => {
    getApi('products?limit=194');
  }, []); 

  useEffect(() => {
    if (data && data.products) {
      localStorage.setItem('category-obj', JSON.stringify(data.products));
      const filteredProducts = data.products.filter((product) => product.rating >= 4.8);
      localStorage.setItem('top-rating', JSON.stringify(filteredProducts));
      setTopRating(filteredProducts);
    }
  }, [data]);

  return (
    <div className="container">
    <Router>
    {loader && <Loader />}
     <Nav />
     <main>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
          ))}
      </Routes>
      </main>
        <Footer/>
    </Router>
    </div>
  )
}

export default App