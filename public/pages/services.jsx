import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbars";

import React from "react";

import "./styles.css";

const services = [
  {
    title: "Private Home Tutor",
    description:
      "Personalized tutoring for grades 1-12. Our experienced tutors provide tailored lessons in subjects like Math, Science, and English, ensuring your child excels in their studies.",
  },
  {
    title: "Specialized Exam Preparation",
    description:
      "Get ready for exams like GAT, TOEFL, IELTS, and more. Our specialized tutors focus on strategies and skills to help you achieve your best score.",
  },
  {
    title: "Skill Development Tutoring",
    description:
      "Enhance your skills with our specialized tutors in areas like coding, art, music, and languages. Tailored lessons to fit your interests and goals.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mt-20 mx-auto mb-28 p-5 text-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
            Explore Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Discover the tailored tutoring services we offer to help students
            succeed in their academic journey.
          </p>
          <div className="mt-5">
            <hr className="border-t-2 border-blue-500 w-1/4 mx-auto" />
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-teal-600 rounded-lg w-72 m-2 p-5 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 transform-gpu"
            >
              <h3 className="text-2xl mb-3 text-teal-600 font-semibold">
                {service.title}
              </h3>
              <p className="text-base text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
