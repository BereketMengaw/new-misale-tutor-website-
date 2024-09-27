import Footer from "@/components/footer/Footer";

import Navbar from "@/components/navbars/Navbars";

import "./styles.css";

import { useState } from "react";

const RequestTutor = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to manage form data
  const [formData, setFormData] = useState({
    parentsName: "",
    studentName: "",
    gradeLevel: "",
    location: "",
    how: "",
    phone: "",
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
      } else {
      }
    } catch (error) {
      console.error("Error occurred during submission:", error);
      alert(
        "You are successfully submitted your data , we will contact you very soon !"
      );
    }
    setIsPopupOpen(true); // Show the popup
  };

  //for pop up in the submittion
  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto p-5 my-24 font-sans text-center border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
        <h1 className="text-gray-800 text-2xl mb-5 font-bold">
          Your Personalized Tutoring Journey Starts Here
        </h1>
        <p className="text-gray-600 mb-7">
          Get your child the support they need! Fill in the details below, and
          we’ll pair you with the best tutors.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <label
            className="w-full text-left text-gray-700"
            htmlFor="parentsName"
          >
            Parent's Name
          </label>
          <input
            type="text"
            id="parentsName"
            name="parentsName"
            value={formData.parentsName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
          />

          <label
            className="w-full text-left text-gray-700"
            htmlFor="studentName"
          >
            Student's Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
          />

          <label
            className="w-full text-left text-gray-700"
            htmlFor="gradeLevel"
          >
            Grade Level
          </label>
          <input
            type="text"
            id="gradeLevel"
            name="gradeLevel"
            value={formData.gradeLevel}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
          />

          <label className="w-full text-left text-gray-700" htmlFor="school">
            School Name
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
          />

          <label className="w-full text-left text-gray-700" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
          />

          <label className="w-full text-left text-gray-700" htmlFor="how">
            Days per Week
          </label>
          <input
            type="text"
            id="how"
            name="how"
            value={formData.how}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
          />

          <label className="w-full text-left text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
          />

          <button
            type="submit"
            className="w-full p-3 mt-5 bg-green-500 text-white rounded-md text-base hover:bg-green-600 transition duration-200 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Submission Successful!</h2>
            <p className="mt-2">Thank you for submitting your information.</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RequestTutor;
