import React from "react";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import ResSumCard from "../ResSumCard";

export default function RestaurantsSlider({ type, items }) {
  return (
    <div className="restaurants__slider__wrapper">
      <SwiperSlider
        loop={false}
        centeredSlides={false}
        paginated={false}
        autoPlay={{ play: true, delay: 5000 }}
        breakPoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          425: {
            slidesPerView: 3,
            spaceBetween: 21,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 21,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 21,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 21,
          },
          1440: {
            slidesPerView: 7.5,
            spaceBetween: 21,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <ResSumCard type={type} item={item} />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
