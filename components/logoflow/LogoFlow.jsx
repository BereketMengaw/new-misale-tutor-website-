"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const logos = [
  "/schoolsLogo/abune.jpg",
  "/schoolsLogo/andinet.jpg",
  "/schoolsLogo/cruise.jpg",
  "/schoolsLogo/hillside.jpg",
  "/schoolsLogo/lebawi.jpg",
  "/schoolsLogo/sot.jpg",
  "/schoolsLogo/zagol.jpg",
  "/schoolsLogo/abune.jpg",
  "/schoolsLogo/andinet.jpg",
  "/schoolsLogo/cruise.jpg",
  "/schoolsLogo/hillside.jpg",
  "/schoolsLogo/lebawi.jpg",
  "/schoolsLogo/sot.jpg",
  "/schoolsLogo/zagol.jpg",
  "/schoolsLogo/andinet.jpg",
  "/schoolsLogo/cruise.jpg",
  "/schoolsLogo/hillside.jpg",
  "/schoolsLogo/lebawi.jpg",
  "/schoolsLogo/sot.jpg",
  "/schoolsLogo/zagol.jpg",
  // Add more logo paths as needed
];

const LogoRiver = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalWidth = carouselRef.current.scrollWidth;
    gsap.to(carouselRef.current, {
      x: `-${totalWidth / 2}px`,
      ease: "linear",
      duration: 30, // Adjust this value to control the speed of the scroll
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden  bg-white w-full mx-auto mt-10 rounded-lg">
      <div
        className="flex items-center space-x-6  whitespace-nowrap"
        ref={carouselRef}
      >
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-none">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-10 rounded-3xl opacity-80  hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoRiver;
