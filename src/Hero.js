import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [fileName, setFileName] = useState('No file chosen');
  const [formData, setFormData] = useState({
    service: 'writing',
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    description: '',
    file: null
  });

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setFormData({ ...formData, file: event.target.files[0] });
    } else {
      setFileName('No file chosen');
      setFormData({ ...formData, file: null });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    try {
      const response = await fetch('/submit-hero-form', {
        method: 'POST',
        body: data
      });
      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({
          service: 'writing',
          fullName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          description: '',
          file: null
        });
        setFileName('No file chosen');
      } else {
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  useEffect(() => {
    // Add a class to initiate the reveal animation after component mounts
    document.querySelector('.hero-content').classList.add('reveal');
    document.querySelector('.form-section').classList.add('reveal');
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2>Assignment Help Service</h2>
        <p>
          "Looking for premier assignment help? You've come to the right place! Subscribe to our newsletter for exclusive tips,
          resources, and updates to excel in your academic journey."
        </p>
        <ul className="features">
          <li>✓ 7+ Years Of Experience in Academic Writing</li>
          <li>✓ 500+ Academic Assignment Writers</li>
          <li>✓ 100+ Students Support Executive</li>
          <li>✓ Global Assignment Helper</li>
        </ul>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="radio-group">
            <label>
              <input type="radio" name="service" value="writing" checked={formData.service === 'writing'} onChange={handleChange} />
              Writing
            </label>
            <label>
              <input type="radio" name="service" value="rewriting" checked={formData.service === 'rewriting'} onChange={handleChange} />
              Rewriting
            </label>
            <label>
              <input type="radio" name="service" value="editing" checked={formData.service === 'editing'} onChange={handleChange} />
              Editing
            </label>
          </div>
          <div className="input-group">
            <input type="text" name="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Your Subject/Course Code" value={formData.subject} onChange={handleChange} required />
          </div>
          <textarea name="description" placeholder="Enter Assignment Description" value={formData.description} onChange={handleChange} required />
          <div className="file-upload">
            <label htmlFor="file" className="file-upload-label">Upload your assignment</label>
            <input type="file" id="file" name="file" onChange={handleFileChange} />
            <span className="file-name">{fileName}</span>
          </div>
          <button type="submit">LET'S START</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
