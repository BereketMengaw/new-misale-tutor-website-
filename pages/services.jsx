import Navbar from "@/components/navbar/Navbar";
import Navbarother from "@/components/navbarother/Navbarother";
import React from "react";

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
      <Navbarother />
      <div style={styles.container}>
        <h2 style={styles.title}>Our Services</h2>
        <div style={styles.cardContainer}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
    fontSize: "2rem",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    background: "#e0f7fa", // Light blue background
    border: "1px solid #00796b", // Darker blue border
    borderRadius: "8px",
    width: "300px",
    margin: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
  },
  cardTitle: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default Services;
