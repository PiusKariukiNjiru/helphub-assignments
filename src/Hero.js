import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('No file chosen');
    }
  };

  useEffect(() => {
    // Add a class to initiate the reveal animation after component mounts
    document.querySelector('.hero-content').classList.add('reveal');
    document.querySelector('.form-section').classList.add('reveal');
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <main className="hero-section">
      <div className="hero-content">
        <h2>Assignment Help Service</h2>
        <p>
          "Looking for premier assignment Help? You've come to the right place! Subscribe to our newsletter for exclusive tips, resources, and updates to excel in your academic journey."
        </p>
        <ul className="features">
          <li>✓ 7+ Years Of Experience in Academic Writing</li>
          <li>✓ 500+ Academic Assignment Writers</li>
          <li>✓ 100+ Students Support Executive</li>
          <li>✓ Global Assignment Helper</li>
        </ul>
      </div>
      <div className="form-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="radio-group">
            <label><input type="radio" name="service" value="writing" defaultChecked /> Writing</label>
            <label><input type="radio" name="service" value="rewriting" /> Rewriting</label>
            <label><input type="radio" name="service" value="editing" /> Editing</label>
          </div>
          <div className="input-group">
            <input type="text" placeholder="Enter Full Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Your Subject/Course Code" required />
          </div>
          <textarea placeholder="Enter Assignment Description" required></textarea>
          <div className="file-upload">
            <label>Upload your assignment</label>
            <div className="file-input-wrapper">
              <input type="file" id="file-upload" onChange={handleFileChange} />
              <label htmlFor="file-upload" className="file-upload-label">Choose File</label>
              <span className="file-name">{fileName}</span>
              <button type="submit">LET'S START</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Hero;
