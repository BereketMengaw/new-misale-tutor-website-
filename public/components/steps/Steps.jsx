"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const RequestTutor = () => {
  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-extrabold mt-10">How to Get a Tutors</h1>
      <div className="mt-2">
        <hr className="border-t-2 border-blue-500 w-1/6 mx-auto" />
      </div>
      <p className="mt-4 text-lg">
        To get personalized tutor recommendations, you can choose one of the
        following options:
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center pt-5 mb-20">
        <RequestOption
          href="/request-tutor"
          title="Fill Out the Form"
          description="Complete our quick online form to request a tutor."
          image="/steps/square.svg" // Replace with your form image path
        />
        <div className="flex flex-col items-center m-2 p-6 border rounded-lg shadow-lg bg-white h-64">
          <Image
            src="/steps/phone-call.svg"
            alt="Call Us"
            width={100}
            height={100}
          />
          <div className="font-bold">Call Us</div>
          <p className="text-gray-600 text-center">
            Speak directly with our team to request a tutor.
          </p>
          <p className="mt-2 text-lg font-semibold text-blue-500">
            +251907152943
          </p>
        </div>
      </div>
    </div>
  );
};

const RequestOption = ({ href, title, description, image }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white m-2 h-64" // Set a fixed height
    >
      <Image src={image} alt={title} width={100} height={100} />
      <div className="font-bold">{title}</div>
      <p className="text-gray-600 text-center">{description}</p>
    </Link>
  );
};

export default RequestTutor;
