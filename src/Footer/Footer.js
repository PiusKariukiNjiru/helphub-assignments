import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube,faXTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">HelpHub Assignments</h2>
        
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/order-display" className="order-now-main">Order Now</Link>
        </nav>
        
        <div className="social-icons">
          <a href="https://www.facebook.com/payaz.kariuki" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          
          <a href="https://x.com/helphub_assign?t=1-qzXUvoD7E2s8qL6ebqAQ&s=09" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.tiktok.com/@helphub.assignments?_t=8oLljCzAoIX&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.instagram.com/helphub_assignments?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        
        <p className="copyright">Copyright © 2024 | Powered by Pius Designs</p>
      </div>
    </footer>
  );
};

export default Footer;