import React from "react";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import MealCard from "../MealCard";

export default function MealsSlider({ type, items }) {
  return (
    <div className="meals__slider__wrapper">
      <SwiperSlider
        loop={false}
        paginated={false}
        centeredSlides={false}
        autoPlay={{ play: true, delay: 5000 }}
        breakPoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          567: {
            slidesPerView: 1.5,
            spaceBetween: 21,
          },
          992: {
            slidesPerView: 2.5,
            spaceBetween: 21,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 21,
          },
          1440: {
            slidesPerView: 3.75,
            spaceBetween: 21,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <MealCard type={type} item={item} />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
