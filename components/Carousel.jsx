import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../components/Carousel.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]} // Include Autoplay here
        className="mySwiper"
        loop={true}
        
      >
        <SwiperSlide className='sub-swipe'>Slide 1</SwiperSlide>
        <SwiperSlide className='sub-swipe'>Slide 2</SwiperSlide>
        <SwiperSlide className='sub-swipe'>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
