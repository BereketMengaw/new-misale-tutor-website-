"use client";
import React, { useEffect, useState } from "react";

const Card = () => {
  const images = [
    "/hero/graduate.png",
    "/hero/meeting.jpg",
    "/hero/schoolOne.png",
  ];
  const title = "Dynamic Card Title";
  const description = "This is a description that changes .";

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="  lg:mt-32 lg:mr-40 text-white flex flex-col items-center">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt={title}
          className="md:h-96 md:w-96 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-center">{title}</h2>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default Card;
