import { useState, useEffect } from 'react';

const useFormValidation = (formState, currentStep) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
    if (currentStep === 1 || currentStep > 1) {
      if (!formState.email) {
        newErrors.email = 'Email is required';
      } else if (!formState.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formState.orderType) {
        newErrors.orderType = 'Order type is required';
      }
      if (!formState.level) {
        newErrors.level = 'Academic level is required';
      }
      if (formState.pages < 1 || formState.pages > 100) {
        newErrors.pages = 'Pages must be between 1 and 100';
      }
      if (!formState.deadline) {
        newErrors.deadline = 'Deadline is required';
      }
    }
    if (currentStep === 2 || currentStep > 2) {
      if (!formState.subject || formState.subject === "Select the Subject") {
        newErrors.subject = 'Subject is required';
      }
    }
    setErrors(newErrors);
  }, [formState, currentStep]);

  return errors;
};

export default useFormValidation;
