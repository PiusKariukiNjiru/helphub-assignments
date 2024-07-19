import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useWritingPrice from '../OrderComponents/useWritingPrice';
import './PricingCalc.css';
import AcademicLevelSelector from '../OrderComponents/AcademicLevelSelector';
import OrderTypeSelector from '../OrderComponents/OrderTypeSelector';
import PageCounter from '../OrderComponents/PageCounter';
import DeadlineDisplay from '../OrderComponents/DeadlineDisplay';

const PriceDisplay = React.memo(({ price }) => (
  <div className="price-display">
    <span>$ {price}</span>
  </div>
));

const ContinueButton = React.memo(({ isDisabled, onClick }) => (
  <button className="continue-button" disabled={isDisabled} onClick={onClick}>Order Now</button>
));

const PricingCalc = () => {
  const [orderType, setOrderType] = useState('Rewriting');
  const [level, setLevel] = useState('High School');
  const [pages, setPages] = useState(1);
  const [deadline, setDeadline] = useState(336);
  const navigate = useNavigate();

  const price = useWritingPrice(orderType, level, pages, deadline);
  const isDisabled = useMemo(() => pages < 1 || pages > 100, [pages]);

  const handleOrderNowClick = () => {
    navigate('/order-now-main');
  };

  return (
    <div className="pricing-calculator">
      <div className="pricing-header">
        <h2>Calculate Your Order Price</h2>
      </div>
      <div className="pricing-grid">
        <OrderTypeSelector orderType={orderType} setOrderType={setOrderType} />
        <AcademicLevelSelector level={level} setLevel={setLevel} />
        <PageCounter pages={pages} setPages={setPages} />
        <DeadlineDisplay deadline={deadline} setDeadline={setDeadline} />
      </div>
      <PriceDisplay price={price} />
      <ContinueButton isDisabled={isDisabled} onClick={handleOrderNowClick} />
    </div>
  );
};

export default PricingCalc;
