"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Card = () => {
  const cards = [
    {
      image: "/hero/meeting.png",
      title: "Team Meeting",
      description: " Discussions to build a high-achieving environment..",
    },
    {
      image: "/hero/cardone.png",
      title: "Personalised guidance ",
      description: "Providing best service as a family",
    },
    {
      image: "/hero/cardtwo.png",
      title: "Become better always",
      description: "We build learning charactor in childrens",
    },
    {
      image: "/hero/cardthree.png",
      title: "Highly technical",
      description: "We have highly skilled tutors with great achivments",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);

  return (
    <div className="lg:mt-32 lg:mr-40 text-white flex flex-col items-center">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={cards[currentIndex].image}
          alt={cards[currentIndex].title}
          height={400}
          width={300}
          className="md:h-96 md:w-96 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-center">
        {cards[currentIndex].title}
      </h2>
      <p className="text-gray-300 text-center">
        {cards[currentIndex].description}
      </p>
    </div>
  );
};

export default Card;
