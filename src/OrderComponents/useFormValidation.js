import { useState, useEffect } from 'react';

const useFormValidation = (formState, currentStep) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
    if (currentStep === 1 || currentStep > 1) {
      if (!formState.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = 'Invalid email format';
      }
    }
    if (currentStep === 2 || currentStep > 2) {
      if (!formState.subject) {
        newErrors.subject = 'Subject is required';
      }
    }
    if (currentStep === 1 || currentStep > 1) {
      if (formState.pages < 1 || formState.pages > 100) {
        newErrors.pages = 'Pages must be between 1 and 100';
      }
    }
    setErrors(newErrors);
  }, [formState, currentStep]);

  return errors;
};

export default useFormValidation;
