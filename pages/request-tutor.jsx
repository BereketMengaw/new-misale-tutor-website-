import NavbarOther from "@/components/navbarother/Navbarother";
import React, { useState } from "react";

const ContactForm = () => {
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [school, setSchool] = useState(""); // New state for school
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxU6xAXEnBuYZ_12Uvz9EvsVHMyyjyzpWC7PjzCySfaIZoKVK-l0I44Byxvsf45DnCoGA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentName,
          studentName,
          gradeLevel,
          school,
          location,
          days,
        }),
      }
    );

    if (response.ok) {
      alert("Form submitted successfully!");
      setParentName("");
      setStudentName("");
      setGradeLevel("");
      setSchool("");
      setLocation("");
      setDays("");
    } else {
      alert("Error submitting form");
    }
  };

  return (
    <div>
      <NavbarOther />
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="form-title">Tutor Request Form</h2>

        <div className="form-group">
          <label>Parent&apos;s Name:</label>
          <input
            type="text"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Student&apos;s Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Grade Level:</label>
          <input
            type="text"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>School:</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>How many days:</label>
          <input
            type="text"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>

      <style jsx>{`
        .contact-form {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          display: flex;
          flex-direction: column;
        }

        .form-title {
          text-align: center;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
        }

        .form-input {
          width: 100%;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .form-button {
          width: 100%;
          padding: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }

        .form-button:hover {
          background-color: #45a049;
        }

        /* Responsive styles */
        @media (max-width: 600px) {
          .contact-form {
            padding: 15px;
          }

          .form-button {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
