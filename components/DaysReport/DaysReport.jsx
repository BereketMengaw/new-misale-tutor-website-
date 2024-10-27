import React from "react";

const subjectsByGrade = {
  1: ["Day one"],
  2: ["Day one", "Day two"],
  3: ["Day one", "Day two", "Day three"],
  4: ["Day one", "Day two", "Day three", "Day four"],
  5: ["Day one", "Day two", "Day three", "Day four", "Day five"],
  6: ["Day one", "Day two", "Day three", "Day four", "Day five", "Day six"],
  7: [
    "Day one",
    "Day two",
    "Day three",
    "Day four",
    "Day five",
    "Day six",
    "Day seven",
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
      {selectedSubjects &&
        selectedSubjects.map((subject, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-gray-700">{subject}</label>
            <select
              value={subjects[subject] || ""}
              onChange={(e) => handleSubjectChange(e, subject)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        ))}
    </div>
  );
};

export default GradeReport;
