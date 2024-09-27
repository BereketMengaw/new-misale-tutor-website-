import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbars";
import React from "react";
import "./styles.css";

const AboutUs = () => {
  const teamMembers = [
    { name: "Bereket Mengaw", role: "Main Coordinator" },
    { name: "Taddese Mulu (MSC)", role: "Academic Strategist" },
    { name: "Misrak Habtamu", role: "HR Officer" },
  ];

  return (
    <>
      <>
        <Navbar />
        <div className="flex flex-col items-center p-5 mt-16 back font-sans">
          <header className="bg-transparent text-white p-5 w-full text-center rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl font-bold">About Us</h1>
          </header>

          <section className=" p-5 bg-white rounded-lg shadow-md w-4/5 max-w-2xl transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl mb-3 text-blue-600">Our Mission</h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              We strive to provide the best tutoring services tailored to each
              student's needs. Our goal is to foster a love for learning and to
              help students achieve their academic goals.
            </p>
            <h2 className="text-2xl mb-3 text-blue-600">Our Vision</h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              To be the leading provider of personalized tutoring services,
              empowering students to excel in their education and beyond.
            </p>
          </section>

          <section className="my-5 p-5 bg-white rounded-lg shadow-md w-4/5 max-w-2xl transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl mb-3 text-blue-600">Meet Our Team</h2>
            <div className="flex justify-around flex-wrap mt-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg w-48 text-center m-2 shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </>
    </>
  );
};

export default AboutUs;
