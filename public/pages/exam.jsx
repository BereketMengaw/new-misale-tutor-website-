import { useState } from "react";

const StudentPerformance = () => {
  const [selectedGrade, setSelectedGrade] = useState("kg1"); // Default selection
  const [performanceData, setPerformanceData] = useState({
    studentName: "",
    examType: "Midterm", // Default exam type
    subjects: {},
  });

  const handleGradeChange = (e) => {
    const grade = e.target.value;
    setSelectedGrade(grade);
    // Initialize performance data for the selected grade
    setPerformanceData({
      studentName: "",
      examType: "Midterm", // Reset exam type on grade change
      subjects: getSubjectsForGrade(grade),
    });
  };

  const getSubjectsForGrade = (grade) => {
    switch (grade) {
      case "kg1":
      case "kg2":
      case "kg3":
        return {
          Reading: "",
          Speaking: "",
          Dancing: "",
          PhysicalEducation: "",
        };
      case "grade1":
      case "grade2":
      case "grade3":
      case "grade4":
        return {
          Amharic: "",
          English: "",
          Mathematics: "",
          Science: "",
          SocialStudies: "",
          PhysicalEducation: "",
        };
      case "grade5":
      case "grade6":
      case "grade7":
      case "grade8":
        return {
          Amharic: "",
          English: "",
          Mathematics: "",
          NaturalScience: "", // Includes Biology and Physics
          SocialStudies: "",
          PhysicalEducation: "",
        };
      case "grade9":
      case "grade10":
        return {
          Amharic: "",
          English: "",
          Mathematics: "",
          Biology: "",
          Chemistry: "",
          Physics: "",
          Geography: "",
        };
      case "grade11":
        return {
          Physics: "",
          Chemistry: "",
          Biology: "",
          Mathematics: "",
          English: "",
          Geography: "",
        };
      case "grade12":
        return {
          Sociology: "",
          History: "",
          Geography: "",
          Economics: "",
          Amharic: "",
          English: "",
        };
      default:
        return {};
    }
  };

  const handleInputChange = (subject, value) => {
    setPerformanceData((prevData) => ({
      ...prevData,
      subjects: {
        ...prevData.subjects,
        [subject]: value,
      },
    }));
  };

  const handleExamTypeChange = (e) => {
    setPerformanceData((prevData) => ({
      ...prevData,
      examType: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", performanceData);
    // Here you would typically send this data to your backend/API for processing
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Student Performance Submission
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="studentName" className="block mb-2 font-semibold">
            Student Name:
          </label>
          <input
            type="text"
            id="studentName"
            value={performanceData.studentName}
            onChange={(e) =>
              setPerformanceData({
                ...performanceData,
                studentName: e.target.value,
              })
            }
            className="block w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="examType" className="block mb-2 font-semibold">
            Exam Type:
          </label>
          <select
            id="examType"
            value={performanceData.examType}
            onChange={handleExamTypeChange}
            className="block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Midterm">Midterm</option>
            <option value="Final">Final</option>
            <option value="Quiz">Quiz</option>
            <option value="Assignment">Assignment</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="grade" className="block mb-2 font-semibold">
            Select Grade Level:
          </label>
          <select
            id="grade"
            value={selectedGrade}
            onChange={handleGradeChange}
            className="block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="kg1">KG 1</option>
            <option value="kg2">KG 2</option>
            <option value="kg3">KG 3</option>
            <option value="grade1">Grade 1</option>
            <option value="grade2">Grade 2</option>
            <option value="grade3">Grade 3</option>
            <option value="grade4">Grade 4</option>
            <option value="grade5">Grade 5</option>
            <option value="grade6">Grade 6</option>
            <option value="grade7">Grade 7</option>
            <option value="grade8">Grade 8</option>
            <option value="grade9">Grade 9</option>
            <option value="grade10">Grade 10</option>
            <option value="grade11">Grade 11</option>
            <option value="grade12">Grade 12</option>
          </select>
        </div>

        {Object.keys(performanceData.subjects).map((subject) => (
          <div key={subject} className="mb-4">
            <label htmlFor={subject} className="block mb-2 font-semibold">
              {subject} Score:
            </label>
            <input
              type="text"
              id={subject}
              value={performanceData.subjects[subject]}
              onChange={(e) => handleInputChange(subject, e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Submit Performance Data
        </button>
      </form>
    </div>
  );
};

export default StudentPerformance;
