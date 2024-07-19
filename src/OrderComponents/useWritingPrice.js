import { useMemo } from 'react';

const useWritingPrice = (type, level, pages, urgency) => {
  const basePrice = 10;

  const typeMultipliers = {
    'Writing': 1,
    'Rewriting': 0.8,
    'Editing': 0.7,
    'Proofreading': 0.5,
    
  };

  const levelMultipliers = {
    'High School': 0.8,
    'University': 1,
    "Master's": 1.2,
    'PhD': 1.5,
  };

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

  const getUrgencyMultiplier = (urgency) => {
    if (urgency <= 6) return 3.0;
    if (urgency <= 12) return 2.7;
    if (urgency <= 24) return 2.4;
    if (urgency <= 36) return 2.1;
    if (urgency <= 48) return 1.8;
    if (urgency <= 72) return 1.6;
    if (urgency <= 96) return 1.5;
    if (urgency <= 120) return 1.4;
    if (urgency <= 168) return 1.3;
    if (urgency <= 240) return 1.2;
    if (urgency <= 336) return 1.1;
    return 1.0;
  };

  return useMemo(() => {
    const typeMultiplier = typeMultipliers[type] || 1;
    const levelMultiplier = levelMultipliers[level] || 1;
    const urgencyMultiplier = getUrgencyMultiplier(urgency);
    const calculatedPrice = (basePrice * typeMultiplier * levelMultiplier * urgencyMultiplier * pages);
    return isNaN(calculatedPrice) ? '0.00' : calculatedPrice.toFixed(2);
  }, [type, level, pages, urgency]);
};

export default useWritingPrice;
