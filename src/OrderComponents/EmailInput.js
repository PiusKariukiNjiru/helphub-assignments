import React from 'react';

const EmailInput = ({ email, setEmail }) => {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="field">
      <label htmlFor="email" placeholder = 'olivia@gmail.com'>Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        aria-describedby="emailHelp"
        aria-invalid={!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
      />
      {email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
        <small id="emailHelp" style={{ color: 'red' }}>Invalid email format</small>
      )}
    </div>
  );
};

export default EmailInput;
