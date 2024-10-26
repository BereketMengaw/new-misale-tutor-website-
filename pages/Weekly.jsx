import React, { useState } from "react";
import Navbar from "@/components/navbars/Navbars";
import "./styles.css";
import Footer from "@/components/footer/Footer";

function WeeklyReport() {
  const [formData, setFormData] = useState({
    week: "",
    studentName: "",
    tutorName: "",
    tutor_days: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
    comments: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.tutor_days) {
      setFormData((prev) => ({
        ...prev,
        tutor_days: {
          ...prev.tutor_days,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a simplified data object with only checked days
    const dataToSubmit = {
      ...formData,
      tutor_days: Object.keys(formData.tutor_days).filter(
        (day) => formData.tutor_days[day]
      ),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby2TJBG0iY6zLiBI4oWnVSzqFMDnOBSnzMMNKswPThizLCUX9jvsjIISqnBzLkoRplf/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSubmit),
        }
      );

      const result = await response.json();
      if (result.success) {
        setFormStatus("Report submitted successfully!");
      } else {
        setFormStatus("Failed to submit report.");
      }
    } catch (error) {
      setFormStatus("Error occurred during submission.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-14">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-700">
            Weekly Student Engagement Report
          </h3>

          <div>
            <label
              htmlFor="week"
              className="block text-lg font-semibold text-gray-600"
            >
              Select the week:
            </label>
            <input
              type="week"
              id="week"
              name="week"
              required
              value={formData.week}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="studentName"
              className="block text-lg font-semibold text-gray-600"
            >
              Student Name:
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="tutorName"
              className="block text-lg font-semibold text-gray-600"
            >
              Tutor Name:
            </label>
            <input
              type="text"
              id="tutorName"
              name="tutorName"
              required
              value={formData.tutorName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-600">
              Which days did you tutor this week?
            </label>
            <div className="mt-2 space-y-2">
              {Object.keys(formData.tutor_days).map((day) => (
                <div key={day}>
                  <input
                    type="checkbox"
                    id={day}
                    name={day}
                    checked={formData.tutor_days[day]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={day} className="text-gray-700">
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="comments"
              className="block text-lg font-semibold text-gray-600"
            >
              Additional comments or concerns:
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter any additional comments"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit Weekly Report
            </button>
          </div>
          {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default WeeklyReport;
