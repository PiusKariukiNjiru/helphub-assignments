import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturesAndAbout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHandshake, faBookOpenReader, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

function FeaturesAndAbout() {
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const sectionRefCurrent = sectionRef.current;
    const featuresRefCurrent = featuresRef.current;
    const aboutRefCurrent = aboutRef.current;
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    if (sectionRefCurrent) {
      observer.observe(sectionRefCurrent);
    }
  
    if (featuresRefCurrent) {
      observer.observe(featuresRefCurrent);
    }
  
    if (aboutRefCurrent) {
      observer.observe(aboutRefCurrent);
    }
  
    return () => {
      if (sectionRefCurrent) {
        observer.unobserve(sectionRefCurrent);
      }
  
      if (featuresRefCurrent) {
        observer.unobserve(featuresRefCurrent);
      }
  
      if (aboutRefCurrent) {
        observer.unobserve(aboutRefCurrent);
      }
    };
  }, []);
  

  const handleAboutUs = () => {
    navigate('/about');
  };

  return (
    <div className="features-and-about" ref={sectionRef}>
      <div className="features-container" ref={featuresRef}>
        <div className="feature-card">
          <div className="icon calendar"></div>
          <FontAwesomeIcon icon={faCalendarDays} />
          <h3>On Time Delivery</h3>
          <p>At HelpHub Assignments, we understand the importance of on-time delivery. We guarantee timely submission, ensuring you secure good grades and earn the acknowledgment you deserve</p>
        </div>
        <div className="feature-card">
          <div className="icon support"></div>
          <FontAwesomeIcon icon={faHandshake} />
          <h3>24 X 7 Live Help</h3>
          <p>At HelpHub Assignments, we believe that your academic success should never be delayed. That's why our 24/7 live help is always available, ready to address your concerns and provide immediate assistance</p>
        </div>
        <div className="feature-card">
          <div className="icon book"></div>
          <FontAwesomeIcon icon={faBookOpenReader} />
          <h3>Services For All Subjects</h3>
          <p>One-Stop Solution: Say goodbye to searching! At HelpHub Assignments, we cover all subjects, including technical fields. No more hassle - find comprehensive academic support in one place. Experience convenience today!</p>
        </div>
        <div className="feature-card">
          <div className="icon price-tag"></div>
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
          <h3>Best Price Guarantee</h3>
          <p>At HelpHub Assignments, we understand the struggles of students, which is why we prioritize your needs. Enjoy the best prices in the industry without compromising on quality. Your academic success is our utmost priority!</p>
        </div>
      </div>
      <div className="about-section" ref={aboutRef}>
        <h2>About Us</h2>
        <h1>Welcome to HelpHub Assignments</h1>
        <h3>Your Trusted Global Assignment Writing Service</h3>
        <p>At HelpHub Assignments, we have been revolutionizing the world of academic writing since 2016. With our unmatched expertise and commitment to excellence, we have become a leading provider of comprehensive assignment solutions. From management to healthcare, finance to technical subjects, our dedicated team of professionals covers a wide range of disciplines, ensuring that we meet the diverse needs of our clients. Get the best assignment help for students in Australia, Germany, USA, and the UK at affordable prices.</p>
        <Button onClick={handleAboutUs}>
          Read More
        </Button>
      </div>
    </div>
  );
}

export default FeaturesAndAbout;
