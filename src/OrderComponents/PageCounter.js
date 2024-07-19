import React, { useState } from 'react';

const PageCounter = ({ pages, setPages, error }) => {
  const [touched, setTouched] = useState(false);

  const handlePageChange = (delta) => {
    setPages(prevPages => Math.max(0, Math.min(100, prevPages + delta)));
    if (!touched) {
      setTouched(true);
    }
  };

  return (
    <div className="field">
      <label htmlFor="pages">Pages</label>
      <div className="counter">
        <button type="button" onClick={() => handlePageChange(-1)}>-</button>
        <span>{pages}</span>
        <button type="button" onClick={() => handlePageChange(1)}>+</button>
      </div>
      {touched && error && (
        <small style={{ color: 'red' }}>{error}</small>
      )}
    </div>
  );
};

export default PageCounter;
