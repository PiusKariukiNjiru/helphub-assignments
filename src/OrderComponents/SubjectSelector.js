import React from 'react';

const SubjectSelector = ({ subject, setSubject }) => {
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
      <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
        {subjects.map((subj) => (
          <option key={subj} value={subj}>
            {subj}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubjectSelector;
