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
        href="/"
        to="contacts"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="block h-[53px] md:h-[50px] xl:h-[71px] w-full md:w-[230px] xl:w-[293px] text-[18px]
                           xl:text-[32px] text-center leading-[2.67] xl:leading-[1.2] xl:pt-[16px]  cursor-pointer 
                           text-white  font-bold bg-[#ffffff19] hover:bg-[#ffffff33] focus:bg-[#ffffff33]
                            transition-colors duration-500 
                            border [border-image:url('/img/button-mobile.svg')_1_1_1_1_stretch_stretch]
                            xl:[border-image:url('/img/button-desktop.svg')_1_1_1_1_stretch_stretch]"
      >
        JOIN NOW
      </Link>
    </div>
  );
}
