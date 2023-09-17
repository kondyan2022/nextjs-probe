"use client";
import { Link } from "react-scroll";
import logo from "../public/img/logo-m.png";
import Image from "next/image";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";

const Header = () => (
  <header className="h-[287px] min-w-[320px] mb-[-287px] bg-transparent relative z-10">
    <div
      className="container mx-auto min-w-[320px] max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] 
    px-[20px] md:px-[32px] xl:px-[105px] flex justify-between"
    >
      <div className="inline-block w-[61px] h-[34px] mt-[36px] md:mt-[25px] ">
        <Image src={logo} className="h-[21px] w-[59px]" alt="logo" />
        <div className="font-karantina text-[14px] leading-[1] text-white tracking-[2.59px] font-normal mt-[2px]">
          CarpTravel
        </div>
      </div>
      <nav className="hidden md:inline-block mt-[39px] xl:mt-[34px] mr-[31px] md:mr-0 ">
        <ul className="flex gap-x-[24px] text-sm">
          <li>
            <Link
              href="/"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-[14px] tracking-[1.4px] text-white hover:cursor-pointer hover-effect"
            >
              About
            </Link>
          </li>
          {/* 
          <li>
            <a href="#" className="text-[14px] tracking-[1.4px] text-white">
              Carry
            </a>{" "}
          </li> */}
          <li>
            <Link
              activeClass="active"
              href="/"
              to="offer"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-[14px] tracking-[1.4px] text-white hover:cursor-pointer hover-effect"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              href="/"
              to="SectionGallery"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-[14px] tracking-[1.4px] text-white hover:cursor-pointer hover-effect"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              href="/"
              to="SectionContact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-[14px] tracking-[1.4px] text-white hover:cursor-pointer hover-effect"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </div>
  </header>
);

export default Header;
