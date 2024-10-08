
import * as React from 'react';
import { CiGrid41 } from "react-icons/ci"; 
import { IoSearch } from "react-icons/io5"; 
import { IoMdClose } from "react-icons/io"; 
import { IoMdCart } from "react-icons/io"; 
import store from '../stores/store';
import { Link } from 'react-router-dom';
import Breadcrumb from './ui/Breadcrumb';
function Nav() {
  const { category, setCategory, searchBtn, setSearchBtn, searchText, setSearchText } = store();
  const handleCategoryToggle = (e) => {
    e.preventDefault();
    setCategory(!category);
  };
  return (
    <>
      <nav className="nav container">
        <Link className='nav__logo' href="/">Dummy JSON</Link>
        <Link to="/product" className='nav__category-btn'>
          <CiGrid41 className='search__icon' />  <p className='nav__category-name'>{"category".toUpperCase()}</p>
        </Link>
        <div className='nav__search-content'>
          <input
            className='nav__search-inp'
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} 
          />
          <button className='nav__search-btn' onClick={() => { setSearchBtn(searchBtn), setSearchText("") }}>
            {!searchText ? <IoSearch className='search__icon' /> : <IoMdClose className='search__icon' />}
          </button>
        </div>
        <Link to="/cart" className='nav__cart'><IoMdCart /> <p className='nav__cart-name'>Basket</p></Link>
        <Link to="/login" className='nav__login-btn'>LOGIN</Link>
      </nav>
      <Breadcrumb/>
    </>
  );
}

export default Nav;
