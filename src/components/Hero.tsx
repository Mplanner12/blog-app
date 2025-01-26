/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-fit lg:pt-[26.25%] pb-[10.25%]"
      // style={{ paddingTop: "26.25%", paddingBottom: "10.25%" }}
    >
      <img
        src="/hero-img.png"
        alt="Hero image"
        className="absolute top-0 left-0 w-full lg:h-full object-contain lg:object-cover"
      />
    </div>
  );
};

export default Hero;
