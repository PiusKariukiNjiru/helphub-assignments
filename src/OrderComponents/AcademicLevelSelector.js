import React from 'react';

const AcademicLevelSelector = ({ level, setLevel }) => (
  <div className="field">
    <label htmlFor="academic-level">Academic Level</label>
    <select id="academic-level" value={level} onChange={(e) => setLevel(e.target.value)}>
      <option value="High School">High School</option>
      <option value="University">University</option>
      <option value="Master's">Master's</option>
      <option value="PhD">PhD</option>
    </select>
  </div>
);

export default AcademicLevelSelector;
