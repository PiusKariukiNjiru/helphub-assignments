import React from 'react';

const TopicInput = ({ topic, setTopic }) => {
  const maxChars = 200;

  return (
    <div className="field">
      <label htmlFor="topic">Topic</label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        maxLength={maxChars}
        placeholder="Enter topic"
      />
      <small>{maxChars - topic.length} characters remaining</small>
    </div>
  );
};

export default TopicInput;
