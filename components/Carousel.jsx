import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import heroimg from "../assets/hero-new.png"
import { Autoplay } from 'swiper/modules';

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
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500, // Delay between slides (in ms)
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        
      >
        <SwiperSlide><img src={heroimg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={heroimg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={heroimg} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}