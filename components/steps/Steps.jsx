"use client";

import React, { useState } from "react";
import Image from "next/image";

const Steps = () => {
  return (
    <>
      <h1 className="text-4xl  justify-center  font-extrabold text-center mt-10 animate-fade-in bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent relative">
        Simple Steps to Request a <br /> Tutor
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center pt-5 mb-20 space-y-10 md:space-y-0 md:space-x-10">
        <Step href="">
          <RequestStep />
        </Step>
        <Step href="">
          <ReceiveStep />
        </Step>
        <Step href="">
          <SelectStep />
        </Step>
      </div>
    </>
  );
};

const RequestStep = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "+1234567890"; // Replace with your phone number

  return (
    <div className="relative text-center transition-transform transform hover:scale-105 p-6 border border-blue-300 rounded-lg shadow-lg bg-white h-64 flex flex-col justify-center">
      <Image
        src="/steps/phone-call.svg"
        alt="Step 1"
        width={300}
        height={400}
        className="w-20 h-20 mb-5 mx-auto"
      />
      <div className="font-bold text-lg text-blue-700">Step 01: Request</div>
      <p className="text-gray-600 mt-2">
        Choose how you'd like to request a tutor:
      </p>
      <div className="mt-4 space-y-2">
        <button
          className="bg-blue-500 text-white mx-3 px-6 py-2 rounded-md transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Call Us Now
        </button>
        {isHovered && (
          <div className="absolute bg-gray-800 text-white text-sm rounded-md p-2 top-20 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ">
            {phoneNumber}
          </div>
        )}
        <button className="bg-green-500 text-white px-6 py-2 rounded-md transition duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
          Fill the Form
        </button>
      </div>
    </div>
  );
};

const ReceiveStep = () => {
  return (
    <div className="text-center transition-transform transform hover:scale-105   p-6 border border-purple-300 rounded-lg shadow-lg bg-white h-64 flex flex-col justify-center">
      <Image
        src="/steps/square.svg"
        alt="Step 2"
        className="w-20 h-20 mb-5 mx-auto "
        width={300}
        height={400}
      />
      <div className="font-bold text-lg text-purple-700">Step 02: Receive</div>
      <p className="text-gray-600">
        Get tailored tutor recommendations{" "}
        <span className="text-purple-500 font-semibold">within 24 hrs</span>
      </p>
    </div>
  );
};

const SelectStep = () => {
  return (
    <div className="text-center transition-transform transform hover:scale-105 p-6 border border-green-300 rounded-lg shadow-lg bg-white h-64 flex flex-col justify-center">
      <Image
        src="/steps/check.svg"
        alt="Step 3"
        className="w-20 h-20 mb-5 mx-auto"
        width={300}
        height={400}
      />
      <div className="font-bold text-lg text-green-700">Step 03: Select</div>
      <p className="text-gray-600">
        Choose the perfect tutor and{" "}
        <span className="text-green-500 font-semibold">
          start your first lesson!
        </span>
      </p>
    </div>
  );
};

const Step = ({ href, children }) => {
  return (
    <a href={href} className="flex flex-col items-center">
      {children}
    </a>
  );
};

export default Steps;
