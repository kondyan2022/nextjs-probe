"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Link } from "react-scroll";
import useWindowSize from "../../hooks/useWindowSize";

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { breakpoint } = useWindowSize();

  useEffect(() => {
    if (breakpoint !== "none") {
      setIsMenuOpen(false);
    }
  }, [breakpoint]);

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
    return () => clearAllBodyScrollLocks();
  }, [isMenuOpen]);

  return isMenuOpen ? (
    createPortal(
      <div
        className="fixed top-[0] left-[50%] translate-x-[-50%]   w-full h-full min-w-[320px] bg-[#010A05BF] 
              backdrop-blur-[25px] z-[1000] text-white mx-auto max-w-[640px]"
      >
        <button
          className="text-[14px] leading-[1.25] tracking-[1.4px] text-white  ml-auto mt-[43px] mr-[20px] block"
          type="button"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          CLOSE
        </button>
        <ul className="flex flex-col gap-[48px] text-center mt-[110px]">
          <li>
            <Link
              className="text-[18px] tracking-[1.8px] hover:cursor-pointer hover-effect"
              activeClass="active"
              to="SectionGallery"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="text-[18px] tracking-[1.8px] hover:cursor-pointer hover-effect"
              activeClass="active"
              to="SectionContact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>,
      document.body
    )
  ) : (
    <button
      type="button"
      onClick={() => {
        setIsMenuOpen(true);
      }}
      className="text-[14px] leading-[1.25] tracking-[1.4px] text-white md:hidden ml-auto mt-[43px]"
    >
      MENU
    </button>
  );
}
