import React from "react";
import styles from "./.module.scss";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import OfferCard from "../OfferCard";

export default function OffersSlider({items}) {
  // console.log(items);
  return (
    <div className={styles.offers__slider__wrapper}>
      <SwiperSlider
        paginated={false}
        centeredSlides={true}
        loop={true}
        autoPlay={{ play: true, delay: 5000 }}
        breakPoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          567: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 36,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 42,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <OfferCard
            index={index}
              item={item.data}
            />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
