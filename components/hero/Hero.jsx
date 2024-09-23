import React from "react";
import Card from "./Cards";

function Hero() {
  return (
    <div className="bg-blue-950 sm:w-full flex flex-col md:flex-row h-screen">
      {/* Card for small screens */}
      <div className="md:hidden">
        <Card />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col sm:mt-0 justify-center items-center text-center md:text-left md:justify-start p-5 md:p-10 lg:mt-36">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-text-gradient mb-4">
          We are Misale Tutor
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
          Best Tutor Service in Addis Ababa
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-lg">
          A team of high-achieving professional tutors and mentoring team
          dedicated to your success.
        </p>
      </div>

      {/* Card for medium and larger screens */}
      <div className="hidden md:flex md:flex-shrink-0 ">
        <Card />
      </div>
    </div>
  );
}

export default Hero;
