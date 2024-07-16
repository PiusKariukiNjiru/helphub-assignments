import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import Button from '../Button/Button';
import Testimonials from '../Testimonials/Testimonials';
import Assignments from './Assignments';
import HeroSection from './HeroSection';
import Footer from '../Footer/Footer';

const services = [
  {
    id: 1,
    image: '/images/Online-Assignment-Help.jpg',
    alt: 'Online Assignment Help',
    title: 'Online Assignment Help',
    description: `Online Assignment Help service, where academic excellence meets personalized support. We understand the demands of modern education and the challenges students face in meeting stringent deadlines while maintaining top-notch quality. Our dedicated team of experienced writers and subject matter experts is here to lighten your academic burden and guide you towards success. Whether you need assistance with essays, research papers, presentations, or any other assignment, our platform offers a comprehensive solution tailored to your specific needs. With our commitment to originality, timely delivery, and customer satisfaction, you can trust us to deliver exceptional results. Embrace the convenience and reliability of our Online Assignment Help service, and unlock your true academic potential with us by your side. Let's embark on this journey together and pave the way for a successful academic career.`,
  },
  {
    id: 2,
    image: '/images/Essay-Writing.png',
    alt: 'Custom Essay Writing Help',
    title: 'Custom Essay Writing Help',
    description: `HelpHub Assignments' Custom Essay Writing Help service, your one-stop destination for expert assistance in crafting impeccable essays. We understand that each student's academic journey is unique, and that's why our team of skilled writers is dedicated to providing customized solutions that cater to your specific requirements. Whether you need help with topic selection, structuring, research, or simply refining your writing, we have the expertise to deliver outstanding results. Our commitment to quality ensures that each essay is meticulously crafted, adhering to academic standards and reflecting your unique voice. With our Custom Essay Writing Help service, you can confidently submit well-crafted essays that stand out and secure top grades. Embrace the convenience and excellence of our service, and let us help you succeed in your academic endeavors.`,
  },
  {
    id: 3,
    image: '/images/Dissertation-Writing.jpg',
    alt: 'Dissertation Writing Help',
    title: 'Dissertation Writing Help',
    description: `Dissertation Writing Help service a trusted platform that offers comprehensive support for your most significant academic undertaking. We understand that writing a dissertation can be a daunting task, and that's why our team of experienced writers and researchers is here to guide you every step of the way. From choosing a compelling topic to conducting thorough research and structuring your work, our experts are committed to delivering a well-crafted and original dissertation that meets the highest academic standards. We recognize the importance of this milestone in your academic journey, and thus, our service is tailored to your unique needs and requirements. With our Dissertation Writing Help service, you can embrace the confidence of submitting a well-researched, impeccably written dissertation that showcases your expertise and sets you on the path to success. Let us be your reliable partner in this challenging journey, and witness the difference our expertise can make in your academic career.`,
  },
  {
    id: 4,
    image: '/images/all-Writing.png',
    alt: 'All Writing Services',
    title: 'All Writing Services',
    description: `HelpHub Assignments's All Type Writing Service, a comprehensive and versatile platform designed to meet all your academic and creative writing needs. Our company takes pride in offering a wide range of writing services that cater to students across different disciplines and academic levels. Whether you need assistance with essays, research papers, case studies, literature reviews, creative writing, or any other writing project, our team of skilled writers and subject matter experts is here to deliver top-notch results. We understand the importance of timely submissions and high-quality content, which is why we prioritize your satisfaction and academic success above all else. Embrace the convenience of a single platform for all your writing requirements, and let us be your trusted partner in your journey towards excellence. Experience the confidence that comes with knowing your assignments are in capable hands, as we work tirelessly to deliver exceptional and plagiarism-free work tailored to your specific needs. With our All Type Writing Service, achieving academic excellence has never been easier.`,
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order-now');
  };

  return (
    <>
      <HeroSection />
      <div className="assignment-empire">
        <div className="assignment-empire-heading">
          <h2>Our Excellent Services</h2>
        </div>
        {services.map((service, index) => (
          <div className={`service ${index % 2 === 1 ? 'reverse' : ''}`} key={service.id}>
            <img src={service.image} alt={service.alt} className="service-image" />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Button className='order-button' onClick={handleOrderNow}>
                Order Now
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Assignments />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;