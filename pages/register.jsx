// RequestTutor.jsx
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbars";
import Link from "next/link";
import GradeReport from "@/components/GradeReport/GradeReport";
import { useState } from "react";
import "./styles.css"; // You can remove this if you are not using it

const Register = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    tutorName: "",
    schoolName: "",
    gradeLevel: "",
    startingDate: "",
    subjects: {},
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
        "https://script.google.com/macros/s/AKfycbwXBqvYxibX5XqHIn6DFWpj2BzopNPQtuDPrqFkFn0WC4wmfN2-O8IYoYEV-ingsRry/exec",
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
            Register Your New Student Here
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
                htmlFor="parentName"
                className="block text-sm font-medium text-gray-700"
              >
                Parent's Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
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
                htmlFor="schoolName"
                className="block text-sm font-medium text-gray-700"
              >
                Student School Name
              </label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="gradeLevel"
                className="block text-sm font-medium text-gray-700"
              >
                Grade Level
              </label>
              <select
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleGradeLevelChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select Grade Level</option>
                <option value="KG">KG (1-3)</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11-Natural">Grade 11 Natural</option>
                <option value="11-Social">Grade 11 Social</option>
                <option value="12-Natural">Grade 12 Natural</option>
                <option value="12-Social">Grade 12 Social</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="startingDate"
                className="block text-sm font-medium text-gray-700"
              >
                Starting Date
              </label>
              <input
                type="date"
                name="startingDate"
                value={formData.startingDate}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Render the GradeReport component */}
            <GradeReport
              gradeLevel={formData.gradeLevel}
              subjects={formData.subjects}
              setFormData={setFormData}
            />

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
              You have successfully registered your tutees! We anticipate great
              tutoring experiences from you.
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
