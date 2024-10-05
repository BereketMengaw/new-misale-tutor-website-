"use client";
import React, { useState } from "react";
import Counter from "./counter"; // Assuming you have a Counter component
import Image from "next/image";

function Results() {
  const [cards, setCards] = useState([
    {
      title: "Achievement 1",
      count: "100",
      description: "Students enrolled since 2022.",
    },
    {
      title: "Achievement 2",
      count: "250",
      description: "Tutors certified in various subjects.",
    },
    {
      title: "Achievement 3",
      count: "1500",
      description: "Lessons conducted successfully.",
    },
  ]);

  return (
    <div className="result  flex flex-col bg-fixed bg-cover bg-no-repeat bg-center">
      <h1 className="flex justify-center text-4xl pb-3 pt-5 text-white">
        Our Achievements
      </h1>
      <h2 className="flex justify-center text-2xl pb-5 text-gray-300">
        Celebrating our milestones since 2022
      </h2>
      <div className="flex justify-center items-center">
        <div className="results-container mx-auto grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 lg:flex lg:space-x-4">
          {cards.map((card, index) => (
            <div
              className="text-blue-900 bg-gray-200 opacity-80 rounded-md text-2xl font-semibold flex flex-col justify-center p-5"
              key={index}
            >
              <Counter targetCount={card.count} />
              <p className="text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
