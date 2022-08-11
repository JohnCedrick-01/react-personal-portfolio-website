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
    name: "Jerilyn Aquino",
    review:
      "Web Development is exactly what our business has been lacking. Thanks to Web Development, we've just launched our 5th website! Absolutely wonderful!"
  },
  {
    avatar: AVTR2,
    name: "Jason Rivera",
    review:
    "It's really wonderful. I STRONGLY recommend it to EVERYONE interested in running a successful online business! We are extremely satisfied with the results."
  },
  {
    avatar: AVTR3,
    name: "Alvin Root",
    review:
    "Wow what great service, I love it! Nice work on your Artificial Intelligence. Artificial Intelligence should be nominated for service of the year."
  },
  {
    avatar: AVTR4,
    name: "Justine Andrei Andal",
    review:
    "It's incredible. You've saved our business! Man, this thing is getting better and better as I learn more about it."
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
                <img src={avatar} alt={name}/>
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
