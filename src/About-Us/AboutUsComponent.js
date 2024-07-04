import React from 'react';
import './AboutUsComponent.css';

const AboutUsComponent = () => {
    return (
        <div className='main-container'>
        <div className="about-us-heading">
           <h3>About Us</h3>
        </div>
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-title">
                    
                    <h1>Welcome to HelpHub Assignments: Your Trusted Global Assignment Writing Service</h1>
                    <p>
                        At HelpHub Assignments, we have been revolutionizing the world of academic writing since 2016. 
                        With our unmatched expertise and commitment to excellence, we have become a leading provider 
                        of comprehensive assignment solutions. From management to healthcare, finance to technical 
                        subjects, our dedicated team of professionals covers a wide range of disciplines, ensuring that 
                        we meet the diverse needs of our clients.
                    </p>
                </div>
            </div>
            <div className="about-us-image">
                <img src="/assets/images/logo.png" alt="HelpHub Assignments Logo" />
            </div>
        </div>
        </div>
    );
};

export default AboutUsComponent;
