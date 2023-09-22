"use client";
import logo from "../public/img/logo-m.png";
import Image from "next/image";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import Link from "next/link";

const Header = () => (
  <header className="h-[287px] min-w-[320px] mb-[-287px] bg-transparent relative z-10">
    <div
      className="container mx-auto min-w-[320px] max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] 
    px-[20px] md:px-[32px] xl:px-[105px] flex justify-between"
    >
      <Link
        href="/"
        className="inline-block w-[61px] h-[34px] mt-[36px] md:mt-[25px]"
      >
        <Image src={logo} className="h-[21px] w-[59px]" alt="logo" />

        <div className="font-karantina text-[14px] leading-[1] text-white tracking-[2.59px] font-normal mt-[2px]">
          CarpTravel
        </div>
      </Link>

      <HeaderMenu />
      <BurgerMenu />
    </div>
  </header>
);

export default Header;
