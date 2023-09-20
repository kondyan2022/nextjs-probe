import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlideSwiperButtonNext() {
  const swiper = useSwiper();

  return (
    <button
      className="slider-button text-[33px] text-white font-thin uppercase hover-effect"
      onClick={() => swiper.slidePrev()}
    >
      prev
    </button>
  );
}
