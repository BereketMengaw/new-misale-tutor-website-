import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbarother/Navbarother";
import React from "react";

const AboutUs = () => {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "20px",
    width: "100%",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const sectionStyle = {
    margin: "20px 0",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "800px",
  };

  const titleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#555",
    margin: "10px 0",
  };

  const teamContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "30px",
  };

  const teamMemberStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const teamMembers = [
    { name: "Bereket Mengaw", role: "Main Coordinator" },
    { name: "Taddese Mulu(MSC)", role: "Academic Strategist" },
    { name: "Misrak Habtamu", role: "HR Officer" },
  ];

  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <header style={headerStyle}>
          <h1>About Us</h1>
        </header>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            We strive to provide the best tutoring services tailored to each
            student's needs. Our goal is to foster a love for learning and to
            help students achieve their academic goals.
          </p>
          <h2 style={titleStyle}>Our Vision</h2>
          <p style={paragraphStyle}>
            To be the leading provider of personalized tutoring services,
            empowering students to excel in their education and beyond.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Meet Our Team</h2>
          <div style={teamContainerStyle}>
            {teamMembers.map((member, index) => (
              <div key={index} style={teamMemberStyle}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
