import React, { useEffect, useRef } from 'react';
import Button from './Button';
import './ProfessionalExperts.css';

function ProfessionalExperts() {
  const sectionRef = useRef(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="professional-experts" ref={sectionRef}>
      <h2 className="section-title">Our Professional Experts</h2>
      <h3 className="section-subtitle">
        Hire HelpHub Assignments Expert Assignment Writer And See The Difference In Your Grade
      </h3>
      <div className="content-wrapper">
        <p className="description">
          At HelpHub Assignments, we take great pride in our rigorous and meticulous process of hiring Professional Experts for our assignment writing help service. Our team of experts is carefully selected to ensure that they possess not only exceptional academic qualifications but also a wealth of experience in their respective fields. Each potential expert undergoes a comprehensive assessment to gauge their expertise, writing abilities, and understanding of academic standards. We prioritize hiring individuals who are passionate about assisting students and are dedicated to delivering top-quality work.
        </p>
        <p className="description">
          Our experts come from diverse backgrounds, enabling us to cater to a wide range of subjects and topics. With this stringent hiring process, we guarantee that our clients receive the best possible assistance, and their academic needs are met with precision and professionalism. Rest assured, when you seek assignment writing help from HelpHub Assignments, you'll be working with qualified and committed Professional Experts, making your academic journey a smooth and successful one.
        </p>
      </div>
      <Button onClick={() => console.log('Hire an Expert clicked')}>
        Hire an Expert
      </Button>
    </section>
  );
}

export default ProfessionalExperts;
