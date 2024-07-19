import React, { useState } from 'react';

const OrderTypeSelector = ({ orderType, setOrderType, error }) => {
  const [touched, setTouched] = useState(false);

  const handleOrderTypeChange = (e) => {
    setOrderType(e.target.value);
    if (!touched) {
      setTouched(true);
    }
  };

  return (
    <div className="field">
      <label>Order Type</label>
      <div className="radio-group">
        {['Writing', 'Rewriting', 'Editing', 'Proofreading'].map((type) => (
          <label key={type}>
            <input
              type="radio"
              value={type}
              checked={orderType === type}
              onChange={handleOrderTypeChange}
            />
            {type}
          </label>
        ))}
      </div>
      {touched && error && (
        <small style={{ color: 'red' }}>{error}</small>
      )}
    </div>
  );
};

export default OrderTypeSelector;
