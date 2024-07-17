import React from 'react';

const OrderTypeSelector = ({ orderType, setOrderType }) => (
  <div className="field">
    <label>Order Type</label>
    <div className="radio-group">
      {['Writing', 'Editing', 'Rewriting', 'Proofreading'].map((type) => (
        <label key={type}>
          <input
            type="radio"
            value={type}
            checked={orderType === type}
            onChange={() => setOrderType(type)}
          />
          {type}
        </label>
      ))}
    </div>
  </div>
);

export default OrderTypeSelector;
