import React, { useState, useEffect } from 'react';
import useOrderForm from './useOrderForm';
import useFormValidation from './useFormValidation';
import EmailInput from './EmailInput';
import OrderTypeSelector from './OrderTypeSelector';
import AcademicLevelSelector from './AcademicLevelSelector';
import DeadlineDisplay from './DeadlineDisplay';
import PageCounter from './PageCounter';
import ResourceCounter from './ResourceCounter';
import FormattingStyleSelector from './FormattingStyleSelector';
import SubjectSelector from './SubjectSelector';
import TopicInput from './TopicInput';
import InstructionsTextarea from './InstructionsTextarea';
import FileUploader from './FileUploader';
import SubmitButton from './SubmitButton';
import './OrderNow.css';

const OrderNow = () => {
  const {
    email, setEmail,
    orderType, setOrderType,
    level, setLevel,
    deadline, setDeadline,
    pages, setPages,
    resources, setResources,
    formattingStyle, setFormattingStyle,
    otherFormattingStyle, setOtherFormattingStyle,
    subject, setSubject,
    topic, setTopic,
    instructions, setInstructions,
    files, setFiles,
    price
  } = useOrderForm();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const errors = useFormValidation({
    email, orderType, level, deadline, pages, resources,
    formattingStyle, otherFormattingStyle, subject,
    topic, instructions, files, price
  }, step);

  const handleNextStep = () => {
    if (Object.keys(errors).length > 0) {
      setSubmitMessage('Please fix the errors before proceeding.');
      return;
    }
    setSubmitMessage('');
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setSubmitMessage('');
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setSubmitMessage('Please fix the errors before submitting.');
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('orderType', orderType);
      formData.append('level', level);
      formData.append('deadline', deadline);
      formData.append('pages', pages);
      formData.append('resources', resources);
      formData.append('formattingStyle', formattingStyle);
      formData.append('otherFormattingStyle', otherFormattingStyle);
      formData.append('subject', subject);
      formData.append('topic', topic);
      formData.append('instructions', instructions);
      formData.append('price', price);

      files.forEach(file => {
        formData.append('files', file);
      });

      const response = await fetch('/submit-order', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage('Order submitted successfully!');
      } else {
        setSubmitMessage('Error submitting order.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitMessage('Error submitting order.');
    }

    setIsSubmitting(false);
  };

  const formatDeadline = (deadline) => {
    const days = Math.floor(deadline / 24);
    const hours = deadline % 24;
    return `${days} days and ${hours} hours`;
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      {step === 1 && (
        <div className="form-step">
          <div>
            <h2>Step 1</h2>
          </div>
          <EmailInput email={email} setEmail={setEmail} error={errors.email} />
          <OrderTypeSelector orderType={orderType} setOrderType={setOrderType} error={errors.orderType} />
          <AcademicLevelSelector level={level} setLevel={setLevel} error={errors.level} />
          <PageCounter pages={pages} setPages={setPages} error={errors.pages} />
          <DeadlineDisplay deadline={deadline} setDeadline={setDeadline} error={errors.deadline} />
          <button type="button" onClick={handleNextStep} className="next-button">
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="form-step">
          <div>
            <h2>Step 2</h2>
          </div>
          <FormattingStyleSelector
            formattingStyle={formattingStyle}
            setFormattingStyle={setFormattingStyle}
            otherFormattingStyle={otherFormattingStyle}
            setOtherFormattingStyle={setOtherFormattingStyle}
          />
          <SubjectSelector subject={subject} setSubject={setSubject} error={errors.subject} />
          <TopicInput topic={topic} setTopic={setTopic} />
          <div className="step-buttons">
            <button type="button" onClick={handlePrevStep} className="prev-button">Back</button>
            <button type="button" onClick={handleNextStep} className="next-button">
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="form-step">
          <div>
            <h2>Step 3</h2>
          </div>
          <ResourceCounter resources={resources} setResources={setResources} />
          <InstructionsTextarea instructions={instructions} setInstructions={setInstructions} />
          <FileUploader files={files} setFiles={setFiles} />
          <div className="step-buttons">
            <button type="button" onClick={handlePrevStep} className="prev-button">Back</button>
            <button type="button" onClick={handleNextStep} className="next-button">
              Next
            </button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="form-step">
          <div>
            <h2>Step 4</h2>
          </div>
          <div className="form-summary">
            <h3>Review Your Order</h3>
            <h5>Email: {email}</h5>
            <h5>Order Type: {orderType}</h5>
            <h5>Academic Level: {level}</h5>
            <h5>Deadline: {formatDeadline(deadline)}</h5>
            <h5>Pages: {pages} ({pages * 275} words)</h5>
            <h5>Resources: {resources}</h5>
            <h5>Formatting Style: {formattingStyle} {formattingStyle === 'Other' && `(${otherFormattingStyle})`}</h5>
            <h5>Subject: {subject}</h5>
            <h5>Topic: {topic}</h5>
            <h5>Instructions: {instructions}</h5>
            <h5>Files: {files.map(file => file.name).join(', ')}</h5>
            <h4>Price: ${price}</h4>
          </div>
          <div className="step-buttons">
            <button type="button" onClick={handlePrevStep} className="prev-button">Back</button>
            <SubmitButton handleSubmit={handleSubmit} />
          </div>
        </div>
      )}
      {isSubmitting && <p>Submitting your order...</p>}
      {submitMessage && <p>{submitMessage}</p>}
    </form>
  );
};

export default OrderNow;
