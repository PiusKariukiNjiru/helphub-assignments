import React from 'react';
import './AssignmentFreeServices.css';
import Button from '../Button/Button';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';



const services = [
  {

    id: 1,
    image: 'images/turnitin-report1.png',
    alt: 'Turnitin Report',
    title: 'Turnitin Report with AI detection',
    description: `
      Our Turnitin Report with AI detection service is a cutting-edge solution designed to ensure the utmost integrity and originality of your academic work. With the combination of Turnitin's powerful plagiarism detection software and the advanced capabilities of AI, we offer a comprehensive and thorough analysis of your documents. When you submit your paper to us, our system rigorously scans it to ensure adherence to academic sources, publications, and citation norms. The AI detection component enhances our accuracy in identifying not only textual similarity but also paraphrasing and plagiarism in non-traditional forms. This ensures that your submission provides work with detailed reports that highlight any issues found, giving you the confidence that your work is entirely authentic and meets the highest academic standards. Our Turnitin Report with AI detection service is a mainstay in our commitment to academic integrity, and our dedication to providing you with reliable, credible, and original content.
    `,
  },

    
  {
    
    id: 2,
    image: 'images/resources.jpeg',
    alt: 'Resources for any Assignment',
    title: 'Resources for any Assignment',
    description: `
      At HelpHub Assignments, we take pride in our comprehensive "Resources for Any Assignment" service, designed to provide students with a rich variety of academic materials and tools to aid their studies. Our resources library contains an extensive range of reference materials, guides, templates, and academic tools. Whether you need research papers, sample assignments, detailed topic lists, or citation guidelines, we’ve got you covered. Our team is dedicated to providing you with the highest quality resources that you can rely on. With our "Resources for Any Assignment" service, you gain access to top-tier academic content that helps you excel in your studies. Partnering with HelpHub Assignments is like having a guide lighting up your academic journey. Come to HelpHub Assignments to see how beneficial partnering with us will be.
    `,
  },


  {
    id: 3,
    image: 'images/dessertation.png',
    alt: 'Topics for Dissertation and Thesis',
    title: 'Topics for Dissertation and Thesis',
    description: `
      At HelpHub Assignments, we understand the significance of choosing the right topics for your dissertation or thesis. Our "Topics for Dissertation and Thesis" service offers tailored assistance to help you identify and develop a research topic that is both impactful and manageable. Our expert team is dedicated to guiding you through the selection process and providing comprehensive support to refine and develop your research questions. We assist you in narrowing down broad ideas to focused, researchable topics that align with your academic goals. With our help, you can embark on your dissertation or thesis journey with confidence, knowing that your research is headed in the right direction. Partner with HelpHub Assignments for the best topics to propel you to success.
    `,
  },


  {
    id: 4,
    image: 'images/revisions.jpg',
    alt: 'Unlimited Revisions',
    title: 'Unlimited Revisions',
    description: `
      At HelpHub Assignments, we are dedicated to ensuring your complete satisfaction with our academic writing services. We understand that every assignment is unique and may require adjustments to meet your specific requirements and standards. That’s why we offer unlimited revisions for all our clients. Our unlimited revisions policy means that you can request changes to your assignment as many times as necessary until you are fully satisfied with the final product. Whether it’s a minor tweak or a significant rewrite, our team of experienced writers will work closely with you to ensure that your paper meets your expectations and academic standards. We believe in the importance of clear communication and collaboration throughout the revision process. By listening to your feedback and incorporating your suggestions, we strive to deliver a polished and well-crafted assignment that reflects your vision and meets your academic goals. With our commitment to quality and customer satisfaction, you can trust that your assignment is in good hands. Experience the peace of mind that comes with knowing your academic success is our top priority. Choose HelpHub Assignments for reliable, professional, and personalized academic writing services with unlimited revisions.
    `,
  },
];

const AssignmentFreeServices = () => {
  return (
    <>
    
    <div className="assignment-empire">
      <div className="assignment-empire-heading">
        <h2>Our Free Services</h2>
        <h1 className="title">HelpHub Assignments <span style={{ color: '#e7b523' }}>Free</span> Services</h1>
      </div>
      {services.map((service, index) => (
        <div className={`service ${index % 2 === 1 ? 'reverse' : ''}`} key={service.id}>
          <img src={service.image} alt={service.alt} className="service-image" />
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Button className = 'order-button' onClick={() => console.log('Hire an Expert clicked')}>
              Order Now
            </Button>
          </div>
        </div>
      ))}
    </div>
    <Testimonials />
    <Footer />

    </>
  );
};

export default AssignmentFreeServices;
