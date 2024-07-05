import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileAlt, faBook, faPen } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './ExcellentServices.css';


const ExcellentServices = () => {
  const navigate = useNavigate();
  const services = [
    
    {
      icon: faDesktop,
      title: 'Online Assignment Help',
      description: 'We understand the demands of modern education and the challenges students face in meeting stringent deadlines while maintaining top-notch quality.'
    },
    {
      icon: faFileAlt,
      title: 'Custom Essay Writing Help',
      description: "HelpHub Assignments' Custom Essay Writing Help service, your one-stop destination for expert assistance in crafting impeccable essays."
    },
    {
      icon: faBook,
      title: 'Dissertation Writing Help',
      description: "We always understand that writing a dissertation can be a daunting task, and that's why our team experienced writers and researchers is here to guide you every step of the way."
    },
    {
      icon: faPen,
      title: 'All Writing Services',
      description: "HelpHub Assignments' All Type Writing Service, a comprehensive and versatile platform designed to meet all your academic and creative writing needs."
    }
  ];

  
    const sectionRef = useRef(null);
    const serviceRefs = useRef([]);

    useEffect(() => {
      const sectionRefCurrent = sectionRef.current;
      const serviceRefsCurrent = serviceRefs.current;
    
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
    
      serviceRefsCurrent.forEach(ref => {
        if (ref) observer.observe(ref);
      });
    
      return () => {
        if (sectionRefCurrent) {
          observer.unobserve(sectionRefCurrent);
        }
    
        serviceRefsCurrent.forEach(ref => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, []);
    

    const handleReadMore = () => {
      navigate('/services', { replace: true });
    };

    return (
      <section className="excellent-services" ref={sectionRef}>
        <div className="service-header">
          <h3 className="service-subtitle">Excellent Services</h3>
          <h2 className="service-title">Get Only New And Unique HelpHub Assignments Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
              ref={el => serviceRefs.current[index] = el}
            >
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Button onClick={handleReadMore}>
              Read more
            </Button>
            </div>
          ))}
        </div>
      </section>
    );
  
};
export default ExcellentServices;
