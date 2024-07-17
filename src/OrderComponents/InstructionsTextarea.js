import React from 'react';

const InstructionsTextarea = ({ instructions, setInstructions }) => {
  const maxChars = 2000;

  return (
    <div className="field">
      <label htmlFor="instructions">Detailed Instructions</label>
      <textarea
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        maxLength={maxChars}
        placeholder="Enter detailed instructions"
        rows="5"
      />
      <small>{maxChars - instructions.length} characters remaining</small>
    </div>
  );
};

export default InstructionsTextarea;
