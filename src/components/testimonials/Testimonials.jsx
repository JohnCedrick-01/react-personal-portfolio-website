import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Lenie Marcos",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur suscipit quidem itaque quas reiciendis? Alias suscipit veritatis labore deserunt eligendi vel harum molestias earum, nulla iste asperiores. Atque, enim repudiandae."
  },
  {
    avatar: AVTR2,
    name: "Bongbong Aquino",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur suscipit quidem itaque quas reiciendis? Alias suscipit veritatis labore deserunt eligendi vel harum molestias earum, nulla iste asperiores. Atque, enim repudiandae."
  },
  {
    avatar: AVTR3,
    name: "Kiko Duterte",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur suscipit quidem itaque quas reiciendis? Alias suscipit veritatis labore deserunt eligendi vel harum molestias earum, nulla iste asperiores. Atque, enim repudiandae."
  },
  {
    avatar: AVTR4,
    name: "Sarah Robredo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur suscipit quidem itaque quas reiciendis? Alias suscipit veritatis labore deserunt eligendi vel harum molestias earum, nulla iste asperiores. Atque, enim repudiandae."
  }

];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
          
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
