"use client";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { SwiperButtonNext, SwiperButtonPrev } from "@/components/SwiperButtons";
import GalleryCard from "@/components/GalleryCard/GalleryCard";

const SwiperSlider = ({ breakpoint }) => {
  return (
    <Swiper
      key={breakpoint === "md" ? "123" : "456"}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: breakpoint === "md" ? 415 : 800,
        depth: 0,
        modifier: 1,
        slideShadows: false,
        scale: breakpoint === "md" ? 0.2915 : 0.5165,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
    >
      {[1, 2, 3, 4, 5, 6].map((elem) => (
        <SwiperSlide key={elem}>
          <GalleryCard
            src={`/img/gallery-${elem}.jpg`}
            alt="photo"
            imageSize={
              breakpoint === "md"
                ? { width: 458, height: 306 }
                : { width: 669, height: 447 }
            }
          />
        </SwiperSlide>
      ))}
      <div className="w-full mt-[-42px] flex justify-center gap-x-[450px] xl:gap-x-[640px] bg-transparent">
        <SwiperButtonPrev /> <SwiperButtonNext />
      </div>
    </Swiper>
  );
};

export default SwiperSlider;
