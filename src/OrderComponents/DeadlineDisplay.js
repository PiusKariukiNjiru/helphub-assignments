import React, { useState, useEffect } from 'react';

const DeadlineDisplay = ({ deadline, setDeadline }) => {
  const [timeLeft, setTimeLeft] = useState('');
  
  useEffect(() => {
    const days = Math.floor(deadline / 24);
    const hours = deadline % 24;
    setTimeLeft(`${days} days and ${hours} hours`);
  }, [deadline]);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const now = new Date();
    const timeDifference = (selectedDate - now) / 3600000; // convert milliseconds to hours
    const validDeadline = Math.max(2, Math.min(720, Math.round(timeDifference)));
    setDeadline(validDeadline);
  };

  return (
    <div className="field">
      <label htmlFor="deadline">Deadline</label>
      <input type="datetime-local" id="deadline" onChange={handleDateChange} />
      <p>Time left: {timeLeft}</p>
    </div>
  );
};

export default DeadlineDisplay;
