"use client";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import SimpleGallery from "./SimpleGallery";
import SwiperSlider from "./SwiperSlider";

export default function Slider() {
  const { breakpoint } = useWindowSize();
  console.log("Slider--->", breakpoint);
  return breakpoint === "none" ? (
    <SimpleGallery />
  ) : (
    <SwiperSlider breakpoint={breakpoint} />
  );
}
