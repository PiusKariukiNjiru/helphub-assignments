import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './OurFreeServices.css';
import Button from '../Button/Button';

const OurFreeServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Turnitin Report with AI detection",
      description: "Our Turnitin Report with AI detection service is a cutting-edge solution designed to ensure the utmost integrity and originality of your academic work."
    },
    {
      title: "Resources for any Assignment",
      description: "We take pride in our comprehensive \"Resources for Any Assignment\" service, designed to provide students with an extensive array of academic materials studies."
    },
    {
      title: "Topics for Dissertation and Thesis",
      description: "Our \"Topics for Dissertation and Thesis\" service is designed to assist students in finding compelling and relevant research ideas across various disciplines."
    },
    {
      title: "Unlimited Revisions",
      description: "Get academic writing help with unlimited revisions for guaranteed satisfaction. We provide perfectly tailored assignments that meet your specific needs and requirements."
    }
  ];

  const serviceCardRefs = useRef([]);
  const titleRef = useRef(null);

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

    const titleRefCopy = titleRef.current;
    if (titleRefCopy) observer.observe(titleRefCopy);

    const serviceCardRefsCopy = serviceCardRefs.current;
    serviceCardRefsCopy.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (titleRefCopy) observer.unobserve(titleRefCopy);
      serviceCardRefsCopy.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleReadMore = () => {
    navigate('/our-free-services', { replace: true });
  };

  return (
    <div className="services-container">
      <div className='services-container_title' ref={titleRef}>
        <h2>Our Free Services</h2>
        <h1 className="title">HelpHub Assignments <span style={{ color: '#e7b523' }}>Free</span> Services</h1>
      </div>
      <div className="service-cards">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            ref={el => serviceCardRefs.current[index] = el}
          >
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <Button onClick={handleReadMore}>
              Read more
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFreeServices;
