import React, { useState } from 'react';
import './EmailInput.css';

const EmailInput = ({ email, setEmail }) => {
  const [touched, setTouched] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!touched) {
      setTouched(true);
    }
  };

  return (
    <div className="field">
      <label htmlFor="email">Email</label>
      <div className="email-input-container">
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailChange}
          aria-describedby="emailHelp"
          aria-invalid={touched && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
        />
        <span className="tooltip">
          ?
          <span className="tooltiptext">
            This email will be used to communicate on the progress of the order and submission of the completed work
          </span>
        </span>
      </div>
      {touched && email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
        <small id="emailHelp" style={{ color: 'red' }}></small>
      )}
    </div>
  );
};

export default EmailInput;
