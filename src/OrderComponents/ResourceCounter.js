import React from 'react';

const ResourceCounter = ({ resources, setResources }) => (
  <div className="field">
    <label htmlFor="resources">Number of Cited Resources</label>
    <div className="counter">
      <button type="button" onClick={(e) => { e.preventDefault(); setResources(Math.max(0, resources - 1)); }}>-</button>
      <span>{resources}</span>
      <button type="button" onClick={(e) => { e.preventDefault(); setResources(Math.min(100, resources + 1)); }}>+</button>
    </div>
    <small>Include the number of sources you want cited in your paper.</small>
  </div>
);

export default ResourceCounter;
