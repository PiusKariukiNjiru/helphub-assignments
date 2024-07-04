import React from 'react';
import './Assignments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Assignments = () => {
  return (
    <div className="assignments-container">
      <h2 className="assignments-title">We Handle Assignments on Various Subjects</h2>
      <p className="assignments-subtitle">
        Take a look at some of our popular subjects. Can’t See Yours? <a href="tel:+254784996377">Give us a call</a> and we will get you an expert to help with your assignment.
      </p>
      <div className="assignments-grid">
        <div className="assignment-category">
          <div className="icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <ul>
            <li>Marketing assignments</li>
            <li>Finance assignments</li>
            <li>Management assignments</li>
            <li>Macroeconomics assignments</li>
          </ul>
        </div>
        <div className="assignment-category">
          <div className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <ul>
            <li>Economics assignments</li>
            <li>Business management assignments</li>
            <li>Business assignments</li>
            <li>Accounting assignments</li>
          </ul>
        </div>
        <div className="assignment-category">
          <div className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <ul>
            <li>MBA assignments</li>
            <li>Statistics Assignments</li>
            <li>Microeconomics assignments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
