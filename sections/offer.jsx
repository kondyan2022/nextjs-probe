"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Pagination, Navigation, EffectFade } from "swiper/modules";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import OfferSlide from "@/components/OfferSlide/OfferSlide";
import offerData from "@/public/data/offer.json";
import OfferPagination from "@/components/OfferPagination/OfferPagination";
import Image from "next/image";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export default function Offer() {
  return (
    <section id="offer">
      <SectionContainer>
        <Swiper
          effect="fade"
          noSwiping={true}
          pagination={{
            type: "fraction",
            formatFractionCurrent: function (number) {
              return "0" + number;
            },
            formatFractionTotal: function (number) {
              return "0" + number;
            },
            renderFraction: function (currentClass, totalClass) {
              return `<span class=${currentClass}></span>/<span class=${totalClass}></span>`;
            },
          }}
          // navigation={  true}
          modules={[Pagination, Navigation, EffectFade]}
          className="offer-main-swiper"
        >
          {offerData.map((elem) => (
            <SwiperSlide key={elem.index}>
              <OfferSlide image={elem.bgImage}>
                <div
                  className="w-full h-full flex flex-col md:flex-row pt-[146px] md:pt-[118px] xl:pt-[142x] gap-[12px] md:gap-[20px]
                                      md:items-end   text-white"
                >
                  <Image
                    src={`/img/${elem.image.mobile.uri}`}
                    alt="photo"
                    width={elem.image.mobile.width}
                    height={elem.image.mobile.height}
                    className="w-[280px] md:w-[463px] xl:w-[607px] h-[213px] md:h-[370px] xl:h-[429px]"
                  ></Image>
                  <div className="flex flex-col  grow md:grow-0 md:gap-[34px]  xl:ml-auto xl:self-stretch">
                    <h3 className="text-right md:text-left w-[280px] md:w-[200px] text-[12px] font-extralight leading-[2] tracking-[2.4px] xl:mt-[12px]">
                      {elem.headerText}
                    </h3>
                    <div
                      className="mt-auto w-[280px] md:w-[221px] xl:w-[293px] self-end text-[14px] md:text-[13px] xl:text-[18px] font-extralight  
                                leading-[1.43] md:leading-[1.53] xl:leading-[1.33] xl:mt-auto md:text-justify"
                    >
                      {elem.text}
                    </div>
                  </div>
                </div>
              </OfferSlide>
            </SwiperSlide>
          ))}
          <div className="absolute bottom-[210px] md:bottom-[267px] xl:bottom-[360px] left-[20px] md:left-[516px] xl:left-[731px]  w-fill h-40 z-50">
            <OfferPagination />
          </div>
        </Swiper>
        <h2
          className="text-[40px] md:text-[67px] xl:text-[98px] 
                            tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px]
                            leading-[1.4] font-thin text-white
                            absolute left-[20px] md:left-[32px] xl:left-[104px] top-[54px] md:top-[65px] xl:top-[104px]
                              z-10"
        >
          WE <span className="font-medium ">OFFER</span>
        </h2>
      </SectionContainer>
    </section>
  );
}
