import React, { useState, useEffect } from 'react';

const urgencyMultipliers = {
  720: 1.0,  // 30 days
  336: 1.1,  // 14 days
  240: 1.2,  // 10 days
  168: 1.3,  // 7 days
  120: 1.4,  // 5 days
  96: 1.5,   // 4 days
  72: 1.6,   // 3 days
  48: 1.8,   // 2 days
  36: 2.1,   // 36 hours
  24: 2.4,   // 24 hours
  12: 2.7,   // 12 hours
  6: 3.0,    // 6 hours
};

const DeadlineDisplay = ({ deadline, setDeadline, error }) => {
  const [touched, setTouched] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [urgencyMultiplier, setUrgencyMultiplier] = useState(urgencyMultipliers[720]);

  useEffect(() => {
    const days = Math.floor(deadline / 24);
    const hours = deadline % 24;
    setTimeLeft(`${days} days and ${hours} hours`);
    setUrgencyMultiplier(urgencyMultipliers[deadline] || 1); // Default multiplier if deadline is not in the list
  }, [deadline]);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const now = new Date();
    const timeDifference = (selectedDate - now) / 3600000; // convert milliseconds to hours
    const validDeadline = Math.max(1, Math.min(720, Math.round(timeDifference)));
    setDeadline(validDeadline);
    if (!touched) {
      setTouched(true);
    }
  };

  return (
    <div className="field">
      <label htmlFor="deadline">Deadline</label>
      <input
        type="datetime-local"
        id="deadline"
        onChange={handleDateChange}
        value={timeLeft ? new Date(Date.now() + deadline * 3600000).toISOString().slice(0, 16) : ''}
        aria-label={timeLeft}
        title={timeLeft}
        onBlur={() => setTouched(true)}
      />
      <p>Time left: {timeLeft}</p>
      
      {touched && error && (
        <small style={{ color: 'red' }}>{error}</small>
      )}
    </div>
  );
};

export default DeadlineDisplay;
