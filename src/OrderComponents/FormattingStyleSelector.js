import React from 'react';

const FormattingStyleSelector = ({ formattingStyle, setFormattingStyle, otherFormattingStyle, setOtherFormattingStyle }) => (
  <div className="field">
    <label htmlFor="formatting-style">Formatting Style</label>
    <select
      id="formatting-style"
      value={formattingStyle}
      onChange={(e) => setFormattingStyle(e.target.value)}
    >
      <option value="APA 7">APA 7</option>
      <option value="APA 6">APA 6</option>
      <option value="MLA">MLA</option>
      <option value="Chicago/Turabian">Chicago/Turabian</option>
      <option value="Harvard">Harvard</option>
      <option value="IEEE">IEEE</option>
      <option value="Other">Other</option>
    </select>
    {formattingStyle === 'Other' && (
      <input
        type="text"
        value={otherFormattingStyle}
        onChange={(e) => setOtherFormattingStyle(e.target.value)}
        placeholder="Specify style"
      />
    )}
  </div>
);

export default FormattingStyleSelector;
