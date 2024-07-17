import React from 'react';

const SubmitButton = ({ handleSubmit }) => (
  <button type="submit" className="submit-button" onClick={handleSubmit}>
    Submit Order
  </button>
);

export default SubmitButton;
