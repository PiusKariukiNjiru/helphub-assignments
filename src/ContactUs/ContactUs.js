import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import Footer from '../Footer';
import Testimonials from '../Testimonials';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('192.168.100.31:3001/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmissionStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('Error sending message. Please try again.');
    }
  };

  return (
    <>
      <div className="contact-us-container">
        <div className="left-section">
          <h1>Contact Us</h1>
          <div className="contact-info">
            <p><span className="icon">✉️</span> helphubassignments@gmail.com</p>
            <p><span className="icon">📞</span> Support: +25484996377</p>
          </div>
        </div>
        <div className="right-section">
          <h2>We'd love to hear from you!</h2>
          <h3>Let's get in touch</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="olivia@untitledui.com" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+1 (555) 000-0000" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Type your message here" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
            {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
          </form>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default ContactUs;
