import React from 'react'
import Slider from "../components/Slider"
import TopProducts from '../components/TopProducts'
import Search from '../components/Search'
import store from '../stores/store';
function Home() {
  const { loader, category, categoryObj, setCategoryObj, topRating, setTopRating, searchText, setSearchText } = store();
  const textAlign = {
    textAlign: 'center'
  }
  return (
    <div className="container home">
      {searchText ? <Search /> :
        <>
          <Slider />
          <p style={textAlign} className='top-rate title'>TOP rating</p>
          <TopProducts />
        </>
      }
    </div>
  )
}

export default Home