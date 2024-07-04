import React from 'react';
import './SuccessComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBullseye, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const successData = [
  {
    icon: faCheckCircle,
    title: 'Success Rate and Customer Reviews',
    description: 'When it comes to assignment writing services, our success rate speaks for itself. We have helped thousands of students achieve their academic goals, earning us a stellar global rating. Our commitment to customer satisfaction is reflected in the positive reviews and testimonials we receive from our valued clients.',
  },
  {
    icon: faBullseye,
    title: 'Marketing Assignments and More',
    description: 'Whether you need help with marketing assignments or any other academic tasks, our expert writers are equipped to handle it all. We cover a vast array of subjects and offer specialized services to meet your unique requirements. At HelpHub Assignments, we believe in delivering excellence, professionalism, and utmost satisfaction to our clients. When you hire our assignment writing services, you can be confident that you are partnering with the best in the industry.',
  },
  {
    icon: faClipboardCheck,
    title: 'Finished Papers and Dissertations',
    description: 'We understand the significance of submitting high-quality papers within deadlines. Our experienced writers meticulously research, analyze, and craft well-structured assignments, ensuring that each paper is a masterpiece. Additionally, we specialize in dissertation writing, providing comprehensive assistance for this crucial academic endeavor.',
  },
];

const SuccessComponent = () => {
  return (
    <div className="success-container">
      {successData.map((item, index) => (
        <div key={index} className="success-card">
          <FontAwesomeIcon icon={item.icon} size="4x" className="success-icon" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SuccessComponent;
