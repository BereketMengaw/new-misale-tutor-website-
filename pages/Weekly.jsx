import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbars";
import DaysReport from "@/components/DaysReport/DaysReport";
import { useState } from "react";
import "./styles.css"; // You can remove this if you are not using it

const Register = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    tutorName: "",
    weekNumber: "",
    gradeLevel: "",
    subjects: {},
    comments: "", // Add comments to the formData state
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle grade level change
  const handleGradeLevelChange = (e) => {
    const selectedGradeLevel = e.target.value;
    setFormData({ ...formData, gradeLevel: selectedGradeLevel, subjects: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwPIAwV6mBjxSbYryYIV9i-7nkrhRB0crcwowurstJyo3KSVaKr1EPzFrbghpsZ9kKu/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          mode: "cors",
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const result = await response.json(); // Parse the JSON response

      if (result.success) {
        setIsPopupOpen(true); // Show success message
      } else {
        console.error("Submission failed:", result.message); // Handle error
      }
    } catch (error) {
      console.error("Error occurred during submission:", error); // Handle fetch error
    }
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="request-tutor min-h-screen flex flex-col mt-10">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Weekly Report
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="studentName"
                className="block text-sm font-medium text-gray-700"
              >
                Student's Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="tutorName"
                className="block text-sm font-medium text-gray-700"
              >
                Tutor's Name
              </label>
              <input
                type="text"
                name="tutorName"
                value={formData.tutorName}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Week Number
              </label>
              <select
                name="weekNumber"
                value={formData.weekNumber}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select Week</option>
                <option value="1">Week 1</option>
                <option value="2">Week 2</option>
                <option value="3">Week 3</option>
                <option value="4">Week 4</option>
              </select>
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                How many days a week have you tutored?
              </label>
              <select
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleGradeLevelChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Choose below</option>
                <option value="1">One day</option>
                <option value="2">Two days</option>
                <option value="3">Three days</option>
                <option value="4">Four days</option>
                <option value="5">Five days</option>
                <option value="6">Six days</option>
                <option value="7">Seven days</option>
              </select>
            </div>

            {/* Render the daysReport component */}
            <DaysReport
              gradeLevel={formData.gradeLevel}
              subjects={formData.subjects}
              setFormData={setFormData}
            />

            {/* New comments input field */}
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Comments or Information
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                rows="3"
                placeholder="Optional"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>

          {isPopupOpen && (
            <div className="popup mt-4 p-4 bg-green-100 text-green-800 rounded border border-green-400">
              <p>Submission Successful! We’ll contact you soon.</p>
              <button
                onClick={closePopup}
                className="mt-2 text-blue-500 hover:underline"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition shadow-md">
          <Link href={"register"}> Register Student</Link>
        </button>
        <button className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition shadow-md">
          <Link href={"Weekly"} target="_blank">
            weekly report
          </Link>
        </button>
        <button className="bg-green-500 text-white rounded-lg px-6 py-3 hover:bg-green-600 transition shadow-md">
          <Link href={"/exam"}>exam results</Link>
        </button>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-blue-950">
              Submission Successful!
            </h2>
            <p className="mt-2">
              You have successfully completed the weekly report!
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
  );
};

export default Register;
