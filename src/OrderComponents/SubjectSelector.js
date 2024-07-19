import React, { useState } from 'react';

const SubjectSelector = ({ subject, setSubject, error }) => {
  const [touched, setTouched] = useState(false);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    if (!touched) {
      setTouched(true);
    }
  };

  const subjects = [
    "Select the Subject", "Business and Entrepreneurship", "English", "History", "Nursing", "Accounting",
    "African-American Studies", "Anthropology", "Architecture", "Art, Theatre and Film",
    "Biology", "Calculus", "Chemistry", "Communication Strategies", "Computer Science",
    "Coursework", "Criminology", "Economics", "Education", "Environmental Issues",
    "Ethics", "Finance", "Geography", "Healthcare", "International and Public Relations",
    "Law and Legal Issues", "Linguistics", "Literature", "Macroeconomics", "Management",
    "Marketing", "Mathematics", "Microeconomics", "Music", "Nutrition", "Other",
    "Philosophy", "Physics", "Political Science", "Presentation/Powerpoint", "Psychology",
    "Religion and Theology", "Science", "Sociology", "Sport", "Statistics", "Technology",
    "Tourism"
  ];

  return (
    <div className="field">
      <label htmlFor="subject">Subject</label>
      <select id="subject" value={subject} onChange={handleSubjectChange} onBlur={() => setTouched(true)}>
        {subjects.map((subj) => (
          <option key={subj} value={subj}>
            {subj}
          </option>
        ))}
      </select>
      {touched && error && (
        <small style={{ color: 'red' }}>{error}</small>
      )}
    </div>
  );
};

export default SubjectSelector;
