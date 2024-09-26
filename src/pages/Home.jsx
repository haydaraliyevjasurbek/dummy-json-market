import React from 'react'
import Slider from "../components/Slider"
import TopProducts from '../components/TopProducts'
function Home() {
  return (
    <div className="container home">
        <Slider/>
        <p className='top-rate'>TOP rating</p>
        <TopProducts/>
    </div>
  )
}

export default Home