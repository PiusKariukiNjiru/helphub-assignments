import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingCalc.css';

const useWritingPrice = (type, level, pages, urgency) => {
  const basePrice = 10;

  const typeMultipliers = {
    Rewriting: 1,
    Editing: 0.7,
    Proofreading: 0.5,
    'Writing from scratch': 1.2,
  };

  const levelMultipliers = {
    'High School': 1,
    Undergraduate: 1.2,
    "Master's": 1.5,
    PhD: 2,
  };

  const urgencyMultipliers = {
    336: 1, 288: 1.05, 240: 1.1, 192: 1.15, 144: 1.2, 96: 1.25, 72: 1.3, 48: 1.35, 24: 1.4,
    20: 1.45, 16: 1.5, 12: 1.55, 10: 1.6, 8: 1.65, 6: 1.7, 5: 1.75, 4: 1.8, 3: 1.85, 2: 1.9,
  };

  return useMemo(() => {
    const typeMultiplier = typeMultipliers[type];
    const levelMultiplier = levelMultipliers[level];
    const urgencyMultiplier = urgencyMultipliers[urgency];
    return (basePrice * typeMultiplier * levelMultiplier * urgencyMultiplier * pages).toFixed(2);
  }, [type, level, pages, urgency]);
};

const TypeSelector = React.memo(({ type, setType }) => (
  <div className="field">
    <label htmlFor="type-of-work">Type of work</label>
    <select id="type-of-work" value={type} onChange={(e) => setType(e.target.value)}>
      <option value="Writing from scratch">Writing</option>
      <option value="Rewriting">Rewriting</option>
      <option value="Editing">Editing</option>
      <option value="Proofreading">Proofreading</option>
    </select>
  </div>
));

const AcademicLevelSelector = React.memo(({ level, setLevel }) => (
  <div className="field">
    <label htmlFor="academic-level">Academic level</label>
    <select id="academic-level" value={level} onChange={(e) => setLevel(e.target.value)}>
      <option value="High School">High School</option>
      <option value="Undergraduate">University</option>
      <option value="Master's">Master's</option>
      <option value="PhD">PhD</option>
    </select>
  </div>
));

const PageCounter = React.memo(({ pages, setPages }) => (
  <div className="field">
    <label htmlFor="pages">Pages</label>
    <div className="counter">
      <button onClick={() => setPages(Math.max(1, pages - 1))}>-</button>
      <span>{pages}</span>
      <button onClick={() => setPages(Math.min(100, pages + 1))}>+</button>
    </div>
  </div>
));

const WordCounter = React.memo(({ pages }) => (
  <div className="word-counter">
    <span>{pages * 275} words</span>
  </div>
));

const UrgencySelector = React.memo(({ urgency, setUrgency }) => {
  const urgencyOptions = [
    { label: '14 days', value: 336 }, { label: '12 days', value: 288 }, { label: '10 days', value: 240 },
    { label: '8 days', value: 192 }, { label: '6 days', value: 144 }, { label: '4 days', value: 96 },
    { label: '3 days', value: 72 }, { label: '2 days', value: 48 }, { label: '1 day', value: 24 },
    { label: '20 hours', value: 20 }, { label: '16 hours', value: 16 }, { label: '12 hours', value: 12 },
    { label: '10 hours', value: 10 }, { label: '8 hours', value: 8 }, { label: '6 hours', value: 6 },
    { label: '5 hours', value: 5 }, { label: '4 hours', value: 4 }, { label: '3 hours', value: 3 },
    { label: '2 hours', value: 2 },
  ];

  const decreaseUrgency = () => {
    const index = urgencyOptions.findIndex(option => option.value === urgency);
    if (index < urgencyOptions.length - 1) setUrgency(urgencyOptions[index + 1].value);
  };

  const increaseUrgency = () => {
    const index = urgencyOptions.findIndex(option => option.value === urgency);
    if (index > 0) setUrgency(urgencyOptions[index - 1].value);
  };

  const currentOption = urgencyOptions.find(option => option.value === urgency);

  return (
    <div className="field">
      <label htmlFor="urgency">Urgency</label>
      <div className="counter">
        <button onClick={decreaseUrgency}>-</button>
        <span>{currentOption.label}</span>
        <button onClick={increaseUrgency}>+</button>
      </div>
    </div>
  );
});

const PriceDisplay = React.memo(({ price }) => (
  <div className="price-display">
    <span>$ {price}</span>
  </div>
));

const ContinueButton = React.memo(({ isDisabled, onClick }) => (
  <button className="continue-button" disabled={isDisabled} onClick={onClick}>Order Now</button>
));

const PricingCalc = () => {
  const [type, setType] = useState('Rewriting');
  const [level, setLevel] = useState('High School');
  const [pages, setPages] = useState(1);
  const [urgency, setUrgency] = useState(336);
  const navigate = useNavigate();

  const price = useWritingPrice(type, level, pages, urgency);
  const isDisabled = useMemo(() => pages < 1 || pages > 100, [pages]);

  const handleOrderNowClick = () => {
    navigate('/order-now');
  };

  return (
    <div className="pricing-calculator">
      <div className="pricing-grid">
        <TypeSelector type={type} setType={setType} />
        <AcademicLevelSelector level={level} setLevel={setLevel} />
        <div className="field-group">
          <PageCounter pages={pages} setPages={setPages} />
          <WordCounter pages={pages} />
        </div>
        <UrgencySelector urgency={urgency} setUrgency={setUrgency} />
      </div>
      <PriceDisplay price={price} />
      <ContinueButton isDisabled={isDisabled} onClick={handleOrderNowClick} />
    </div>
  );
};

export default PricingCalc;
