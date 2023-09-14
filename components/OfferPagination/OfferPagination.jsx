import { React, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export default function OfferPagination() {
  const swiper = useSwiper();
  const [activePage, setActivePage] = useState(swiper?.activePage ?? 0);

  return (
    <ul
      className="uppercase text-white font-extralight text-[20x] md:text-[22px] xl:text-[28px] 
                    leading-[0.85] md:leading-[0.81] xl:leading-[0.85]  
                    flex flex-col gap-[16px] w-[170px] md:w-[210px] xl:w-[260px]"
    >
      <li
        className={`cursor-pointer ${
          swiper.activeIndex === 0
            ? "active-pagination-item"
            : "pagination-item"
        }`}
        onClick={() => {
          setActivePage(0);
          swiper.slideTo(0);
        }}
      >
        ATVs Traveling
      </li>
      <li
        className={`${
          swiper.activeIndex === 1
            ? "active-pagination-item"
            : "pagination-item"
        }`}
        onClick={() => {
          setActivePage(1);
          swiper.slideTo(1);
        }}
      >
        Rock climbing
      </li>
      <li
        className={`${
          swiper.activeIndex === 2
            ? "active-pagination-item"
            : "pagination-item"
        }`}
        onClick={() => {
          setActivePage(2);
          swiper.slideTo(2);
        }}
      >
        Hot air ballooning
      </li>
      <li
        className={`${
          swiper.activeIndex === 3
            ? "active-pagination-item"
            : "pagination-item"
        }`}
        onClick={() => {
          setActivePage(3);
          swiper.slideTo(3);
        }}
      >
        Skydiving
      </li>
      <li
        className={`${
          swiper.activeIndex === 4
            ? "active-pagination-item"
            : "pagination-item"
        }`}
        onClick={() => {
          setActivePage(4);
          swiper.slideTo(4);
        }}
      >
        Rafting
      </li>
    </ul>
  );
}
