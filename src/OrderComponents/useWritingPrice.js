import { useMemo } from 'react';

const useWritingPrice = (type, level, pages, urgency) => {
  const basePrice = 10;

  const typeMultipliers = {
    'Rewriting': 1,
    'Editing': 0.7,
    'Proofreading': 0.5,
    'Writing from scratch': 1.2,
  };

  const levelMultipliers = {
    'High School': 1,
    'Undergraduate': 1.2,
    "Master's": 1.5,
    'PhD': 2,
  };

  const urgencyMultipliers = {
    336: 1, 288: 1.05, 240: 1.1, 192: 1.15, 144: 1.2, 96: 1.25, 72: 1.3, 48: 1.35, 24: 1.4,
    20: 1.45, 16: 1.5, 12: 1.55, 10: 1.6, 8: 1.65, 6: 1.7, 5: 1.75, 4: 1.8, 3: 1.85, 2: 1.9,
  };

  return useMemo(() => {
    const typeMultiplier = typeMultipliers[type] || 1;
    const levelMultiplier = levelMultipliers[level] || 1;
    const urgencyMultiplier = urgencyMultipliers[urgency] || 1;
    const calculatedPrice = (basePrice * typeMultiplier * levelMultiplier * urgencyMultiplier * pages);
    return isNaN(calculatedPrice) ? '0.00' : calculatedPrice.toFixed(2);
  }, [type, level, pages, urgency]);
};

export default useWritingPrice;
