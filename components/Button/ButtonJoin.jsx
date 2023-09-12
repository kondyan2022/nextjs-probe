"use client";

import { Link } from "react-scroll";

export default function ButtonJoin() {
  return (
    <div
      className="relative md:absolute md:bottom-[67px] xl:bottom-[110px] 
                           md:right-[32px] xl:right-[104px] md:inline-block md:w-[230px] xl:w-auto "
    >
      <Link
        activeClass="active"
        to="SectionContact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        type="button"
        className="block h-[53px] md:h-[50px] xl:h-[71px] w-full md:w-[230px] xl:w-[293px] text-[18px]
                           xl:text-[32px] text-center leading-[2.67] xl:leading-[1.2] xl:pt-[16px]  hover:cursor-pointer 
                           text-white  font-bold bg-[#ffffff19] hover:bg-[#ffffff33]"
      >
        JOIN NOW
      </Link>
      <div className="absolute top-0 left-0 h-[8px] w-[42px] border-s border-t border-white "></div>
      <div className="absolute top-0 right-0 h-[8px] w-[42px] border-e border-t border-white "></div>
      <div className="absolute bottom-0 left-0 h-[8px] w-[42px] border-s border-b border-white "></div>
      <div className="absolute bottom-0 right-0 h-[8px] w-[42px] border-e  border-b border-white "></div>
    </div>
  );
}
