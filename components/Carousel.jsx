import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import heroimg from "../assets/hero.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../components/Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide><img src={heroimg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={heroimg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={heroimg} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}