import React, { useState } from 'react';
import './EmailInput.css';

const EmailInput = ({ email, setEmail, error }) => {
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
          aria-invalid={touched && !!error}
          onBlur={() => setTouched(true)}
        />
        <span className="tooltip">
          ?
          <span className="tooltiptext">
            This email will be used to communicate on the progress of the order and submission of the completed work
          </span>
        </span>
      </div>
      {touched && error && (
        <small id="emailHelp" style={{ color: 'red' }}>{error}</small>
      )}
    </div>
  );
};

export default EmailInput;
