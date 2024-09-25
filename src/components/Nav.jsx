// Nav.jsx
import React from 'react';
import { CiGrid41 } from "react-icons/ci"; // category icon
import { IoSearch } from "react-icons/io5"; // search icon
import { IoMdClose } from "react-icons/io"; // close icon
import { IoMdCart } from "react-icons/io"; // cart icon
import { IoIosHeartEmpty } from "react-icons/io"; // like icon
import store from '../stores/store';

function Nav() {
  const { category, setCategory, searchBtn, setSearchBtn, searchText, setSearchText } = store();
  
  return (
    <nav className="nav">
      <a href="/">Dummy JSON</a>
      
      <button className='nav__category-btn' onClick={() => setCategory(!category)}>
        {!category ? <CiGrid41 className='search__icon' /> : <IoMdClose className='search__icon' />} category
      </button>

      <div className='nav__search-content'>
        <input 
          className='nav__search-inp' 
          type="text" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // inputdan qiymat olish
        />
        <button className='nav__search-btn' onClick={() => { setSearchBtn(!searchBtn)}}>
          {!searchBtn ? <IoSearch className='search__icon' /> : <IoMdClose className='search__icon' />}
        </button>
      </div>
    
      <a href="" className='nav__cart'><IoMdCart /> Savat</a>
      <a href="" className='nav__like'><IoIosHeartEmpty /> Tanlanganlar</a>
      <button className='nav__login-btn'>Kirish</button>
    </nav>
  );
}

export default Nav;
