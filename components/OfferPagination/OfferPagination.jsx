import { React, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import offerData from "@/public/data/offer.json";

export default function OfferPagination() {
  const swiper = useSwiper();
  const [activePage, setActivePage] = useState(swiper?.activePage ?? 0);

  useEffect(() => {
    swiper.slideTo(activePage);
  }, [activePage, swiper]);

  return (
    <ul
      className="uppercase text-white font-extralight text-[20x] md:text-[22px] xl:text-[28px] 
                    leading-[0.85] md:leading-[0.81] xl:leading-[0.85]  
                    flex flex-col gap-[16px] w-[165px] md:w-[210px] xl:w-[260px]"
    >
      {offerData.map(({ menuText, index: key }, index) => (
        <li
          key={key}
          className={`cursor-pointer ${
            activePage === index ? "active-pagination-item" : "pagination-item"
          }`}
          onClick={() => {
            setActivePage(index);
          }}
        >
          {menuText}
        </li>
      ))}
    </ul>
  );
}
