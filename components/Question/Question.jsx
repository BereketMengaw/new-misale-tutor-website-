import React from "react";

const TutorRequestForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Tutor Request Form
        </h2>

        <form>
          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="parentName"
            >
              Parent&apos;s Name
            </label>
            <input
              type="text"
              id="parentName"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="childName"
            >
              Child&apos;s Name
            </label>
            <input
              type="text"
              id="childName"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="tutoringLevel"
            >
              Tutoring Level
            </label>
            <select
              id="tutoringLevel"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Level</option>
              <option value="elementary">Elementary</option>
              <option value="middle-school">Middle School</option>
              <option value="high-school">High School</option>
              <option value="college">College</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="preferredDays"
            >
              Preferred Days
            </label>
            <input
              type="text"
              id="preferredDays"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Monday, Wednesday"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="preferredTime"
            >
              Preferred Time
            </label>
            <input
              type="time"
              id="preferredTime"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="contactNumber"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="additionalInfo"
            >
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Any specific requests or details..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorRequestForm;
