import React from 'react';

const PageCounter = ({ pages, setPages }) => (
  <div className="field">
    <label htmlFor="pages">Pages</label>
    <div className="counter">
      <button type="button" onClick={(e) => { e.preventDefault(); setPages(Math.max(1, pages - 1)); }}>-</button>
      <span>{pages}</span>
      <button type="button" onClick={(e) => { e.preventDefault(); setPages(Math.min(100, pages + 1)); }}>+</button>
    </div>
  </div>
);

export default PageCounter;
