import { useState } from "react";

const RequestTutor = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    parentsName: "",
    studentName: "",
    gradeLevel: "",
    location: "",
    how: "",
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    try {
      // Send POST request to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw62TawJYQEXHqWxx62Lw6UknehcfOx7hUvXZCxCaBSZvccHWGMkXQZA2QA8-wyRomm/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          mode: "cors",
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      // Parse the JSON response from server
      const result = await response.json();

      // Show success or error message based on response
      if (response.success) {
        // response.ok is true for status in the range 200-299
        const result = await response.json(); // parse the JSON response
        alert("Form submitted successfully!"); // alert on success
      } else {
        alert(
          "There was an error submitting the form. Status: " + response.status
        ); // alert on error with status
      }
    } catch (error) {
      console.error("Error occurred during submission:", error);
      alert(
        "You are successfully submitted your data , we will contact you very soon !"
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "28px", marginBottom: "20px" }}>
        Your Personalized Tutoring Journey Starts Here
      </h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Get your child the support they need! Fill in the details below, and
        we’ll pair you with the best tutors.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="parentsName"
          placeholder="Parent's Name"
          value={formData.parentsName}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="studentName"
          placeholder="Student's Name"
          value={formData.studentName}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="gradeLevel"
          placeholder="Grade Level"
          value={formData.gradeLevel}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="school"
          placeholder="School Name"
          value={formData.school}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="how"
          placeholder="How many days a week do you want tutoring?"
          value={formData.how}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "20px",
  width: "100%",
};

export default RequestTutor;
