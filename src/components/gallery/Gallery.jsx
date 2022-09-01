import React from "react";
import AVTR1 from "../../assets/gal1.png";
import AVTR2 from "../../assets/gal2.png";
import AVTR3 from "../../assets/gal3.png";
import AVTR4 from "../../assets/gal4.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./gallery.css";

// import required modules
import { Pagination } from "swiper";


const Gallery = () => {
  return (
    <section id="gallery">
        <h5>Take a Look</h5>
        <h2>Gallery</h2>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide><img src={AVTR1}/></SwiperSlide>
        <SwiperSlide><img src={AVTR2}/></SwiperSlide>
        <SwiperSlide><img src={AVTR3}/></SwiperSlide>
        <SwiperSlide><img src={AVTR4}/></SwiperSlide>
        <SwiperSlide><img src={AVTR1}/></SwiperSlide>
        <SwiperSlide><img src={AVTR2}/></SwiperSlide>
        <SwiperSlide><img src={AVTR3}/></SwiperSlide>
        <SwiperSlide><img src={AVTR4}/></SwiperSlide>
  
      
      </Swiper>
    </section>
  );
};

export default Gallery;
