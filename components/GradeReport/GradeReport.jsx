// GradeReport.jsx
import React from "react";

// Ethiopian curriculum-aligned subjects for each grade level
const subjectsByGrade = {
  KG: [
    "Social Interaction",
    "Play-Based Learning",
    "Basic Math",
    "Motor Skills",
    "Amharic Language Development",
  ],
  1: ["Amharic", "English", "Math", "Science"],
  2: ["Amharic", "English", "Math", "Science"],
  3: ["Amharic", "English", "Math", "Science"],
  4: ["Amharic", "English", "Math", "Science"],
  5: ["Amharic", "English", "Math", "Science"],
  6: ["Amharic", "English", "Math", "Science"],
  7: [
    "Amharic",
    "English",
    "Math",
    "Social Science",
    "PVA",
    "IT",
    "Citizenship",
    "CTE",
  ],
  8: [
    "Amharic",
    "English",
    "Math",
    "Social Science",
    "PVA",
    "IT",
    "Citizenship",
    "CTE",
  ],
  9: [
    "Amharic",
    "English",
    "Biology",
    "Chemistry",
    "Citizenship",
    "Economics",
    "Geography",
    "History",
    "Math",
    "Physics",
  ],
  10: [
    "Amharic",
    "English",
    "Biology",
    "Chemistry",
    "Citizenship",
    "Economics",
    "Geography",
    "History",
    "Math",
    "Physics",
  ],
  "11-Natural": [
    "Biology",
    "Chemistry",
    "Physics",
    "TD",
    "English",
    "Civics",
    "Math",
  ],
  "11-Social": [
    "Geography",
    "History",
    "Economics",
    "Business",
    "English",
    "Civics",
    "Math",
  ],
  "12-Natural": [
    "Biology",
    "Chemistry",
    "Physics",
    "TD",
    "English",
    "Civics",
    "Math",
  ],
  "12-Social": [
    "Geography",
    "History",
    "Economics",
    "Business",
    "English",
    "Civics",
    "Math",
  ],
};

const GradeReport = ({ gradeLevel, subjects, setFormData }) => {
  const handleSubjectChange = (e, subject) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      subjects: { ...prevFormData.subjects, [subject]: value },
    }));
  };

  const selectedSubjects = subjectsByGrade[gradeLevel];

  return (
    <div className="subject-selection space-y-2">
      <h2 className="text-xl font-semibold">Subject Last Semister Grade</h2>
      {selectedSubjects &&
        selectedSubjects.map((subject, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-gray-700">{subject}</label>
            <input
              type="text"
              placeholder="Enter grade or comment"
              value={subjects[subject] || ""}
              onChange={(e) => handleSubjectChange(e, subject)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
    </div>
  );
};

export default GradeReport;
