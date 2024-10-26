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
    additional: "",
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
    }
    setIsPopupOpen(true); // Show the popup
  };

  //for pop up in the submittion
  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <>
      <div className="asking">
        <Navbar className="mb-0" />

        <div className="max-w-md mx-auto pb-5 my-24 font-sans text-center border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
          <h1 className="text-blue-950 text-3xl mt-5 mb-4 font-bold shadow-md p-2 rounded-lg transition-transform transform hover:scale-105">
            Your Personalized Tutoring Journey
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            Fill in the details below, and we’ll pair you with the best tutors!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-4 md:px-8 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label
                  className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
                  htmlFor="parentsName"
                >
                  Parent&apos;s Name
                </label>
                <input
                  type="text"
                  id="parentsName"
                  name="parentsName"
                  value={formData.parentsName}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
                  htmlFor="studentName"
                >
                  Student&apos;s Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
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
                className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
              />
            </div>

            <div>
              <label
                className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
                htmlFor="school"
              >
                School Name
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
              />
            </div>

            <div>
              <label
                className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
              />
            </div>

            <div>
              <label
                className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
                htmlFor="how"
              >
                Days per Week
              </label>
              <input
                type="text"
                id="how"
                name="how"
                value={formData.how}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
              />
            </div>

            <div>
              <label
                className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
                htmlFor="phone"
              >
                Additional Consideration
              </label>
              <input
                type="text"
                id="additional"
                name="additional"
                value={formData.additional}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
              />
            </div>

            <div>
              <label
                className="block text-left text-blue-950 mb-1 font-semibold transition-colors hover:text-blue-950"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-950 transition-shadow hover:shadow-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 mt-4 bg-blue-950 text-white rounded-md text-base hover:bg-blue-800 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold text-blue-950">
                Submission Successful!
              </h2>
              <p className="mt-2">
                Thank you for submitting your information. We will contact you
                very soon!
              </p>
              <button
                onClick={closePopup}
                className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default RequestTutor;
