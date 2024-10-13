// pages/tutor-signin.js
import React from "react";
import Link from "next/link";
import "./styles.css";
import Navbar from "@/components/navbars/Navbars";

const TutorSignIn = () => {
  return (
    <>
      <Navbar className="to-blue-950" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Welcome, Tutors!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          This is the platform where you can check your students' progress. We
          believe in the power of guidance and support to help our students
          excel.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          Remember, as a tutor, you play a vital role in shaping the learning
          experience. Your dedication and commitment are key to fostering a
          positive environment for growth.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          Thank you for being a part of our educational journey. Together, we
          can make a significant impact!
        </p>

        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition shadow-md">
            <Link href={"https://forms.gle/1eS8V1vkc4sdN5Aw9"} target="_blank">
              {" "}
              Register Student
            </Link>
          </button>
          <button className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition shadow-md">
            <Link href={"https://forms.gle/sWbvMqMwopHbuwdcA"} target="_blank">
              weekly report
            </Link>
          </button>
          <button className="bg-green-500 text-white rounded-lg px-6 py-3 hover:bg-green-600 transition shadow-md">
            <Link href={"/exam"}>exam results</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default TutorSignIn;
