import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbars";
import React from "react";

import "./styles.css";
import Link from "next/link";

function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="mt-16 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to Misale Tutors!
        </h1>
        <p className="text-gray-700 mb-6">
          At Misale Tutors, we are dedicated to providing personalized education
          solutions to students of all ages. Our mission is to empower learners
          with the knowledge and skills they need to succeed in their academic
          journey. We believe in fostering a positive learning environment that
          encourages growth and development.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Job Opportunities</h2>
        <p className="text-gray-700 mb-6">
          We are currently looking for passionate individuals to join our team
          in the following roles:
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Home Tutor</h3>
          <p className="text-gray-600 mb-4">
            As a Home Tutor, you will provide personalized educational support
            to students in their homes. This role includes planning lessons,
            helping with homework, and assessing student progress to ensure
            academic success.
          </p>
          <Link
            href="https://forms.gle/cAFJmdFpJwQ3cpW68"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
          >
            Apply for Home Tutor Job
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Marketing Agent</h3>
          <p className="text-gray-600 mb-4">
            As a Marketing Agent, you will be responsible for creating and
            executing marketing strategies to promote our services.
          </p>
          <Link
            href="https://forms.gle/9uj59SgbfaG1LUEm6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-200"
          >
            Apply for Marketing Job
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jobs;
