import React, { useState } from 'react';

const AcademicLevelSelector = ({ level, setLevel, error }) => {
  const [touched, setTouched] = useState(false);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
    if (!touched) {
      setTouched(true);
    }
  };

  return (
    <div className="field">
      <label htmlFor="academic-level">Academic Level</label>
      <select
        id="academic-level"
        value={level}
        onChange={handleLevelChange}
        onBlur={() => setTouched(true)}
      >
        <option value="High School">High School</option>
        <option value="University">University</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>
      </select>
      {touched && error && (
        <small style={{ color: 'red' }}>{error}</small>
      )}
    </div>
  );
};

export default AcademicLevelSelector;
