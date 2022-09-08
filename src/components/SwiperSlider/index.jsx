import React from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SwiperSlider({
  children,
  centeredSlides,
  loop,
  paginated,
  breakPoints,
  autoPlay,
}) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ enabled: autoPlay.play, delay: autoPlay.delay }}
      breakpoints={breakPoints}
      pagination={paginated && { paginated: true }}
      centeredSlides={centeredSlides || false}
      loop={loop}
    >
      {children}
    </Swiper>
  );
}
