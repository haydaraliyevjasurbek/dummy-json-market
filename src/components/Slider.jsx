import React, { useRef, useState, useEffect } from 'react'
import store from '../stores/store';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/swiper-bundle.css';

// import required modules
import { EffectCube, Autoplay } from 'swiper/modules';
import Loader from './ui/Loader';
function Slider() {
    const {loader, topRating, categoryObj, setCategoryObj } = store();
    
    // console.log(topRating)
    return (
        <div>
            {loader && <Loader />}
            {topRating && <Swiper
                effect={'cube'}
                grabCursor={false}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                loop={true}
                autoplay={{ 
                    delay: 2500, 
                    disableOnInteraction: false,
                }}
                modules={[EffectCube, Autoplay]}
                className="slider"
            >
                {topRating.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="slider__item" >
                            <p className="slider__title">{item.brand || item.category}</p>
                            <img
                                src={item.images[0]}
                                alt=""
                                className="slider__img"
                            />
                        </SwiperSlide>
                    );
                })}


            </Swiper>}
            


            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                autoplay={{ 
                    delay: 1000,
                    disableOnInteraction: false, 
                }}
                modules={[EffectCube, Autoplay]}
                className="category"
            >
                <SwiperSlide className="category__item">Slide 1</SwiperSlide>
                <SwiperSlide className="category__item">Slide 2</SwiperSlide>
                <SwiperSlide className="category__item">Slide 3</SwiperSlide>
                <SwiperSlide className="category__item">Slide 4</SwiperSlide>
                <SwiperSlide className="category__item">Slide 5</SwiperSlide>
                <SwiperSlide className="category__item">Slide 6</SwiperSlide>
                <SwiperSlide className="category__item">Slide 7</SwiperSlide>
                <SwiperSlide className="category__item">Slide 8</SwiperSlide>
                <SwiperSlide className="category__item">Slide 9</SwiperSlide>
            </Swiper>

        </div>
    )
}
export default Slider
