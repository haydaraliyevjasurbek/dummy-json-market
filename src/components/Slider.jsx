import React, { useRef, useState, useEffect } from 'react'
import store from '../stores/store';
import useApi from '../hook/useApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/swiper-bundle.css';
import { EffectCube, Autoplay } from 'swiper/modules';
import Loader from './ui/Loader';
function Slider() {
    const { loader, topRating, categoryObj, setCategoryObj, categoryList, setCategoryList, } = store();
    const { data, getApi, loading } = useApi();
    useEffect(() => {
        getApi(`products/category-list`);
    }, []);
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
                            <p className="slider__title">
                                {item.brand ? item.brand.replace("-", " ").toUpperCase() : item.title.replace("-", " ").toUpperCase()}
                            </p>
                            <img
                                src={item.images[0]}
                                alt=""
                                className="slider__img"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>}
        </div>
    )
}
export default Slider
