import React from 'react';
import './WhyChooseUs.css';

const reasons = [
    {
        title: "7+ Years of Experience in Academic Writing:",
        description: "With over seven years of experience in the industry, we have honed our skills to perfection. Our seasoned writers possess the knowledge and expertise required to deliver top-notch assignments that meet the highest academic standards."
    },
    {
        title: "500+ Academic Assignment Writers:",
        description: "We take great pride in our team of highly qualified and proficient assignment writers. Our writers are carefully selected based on their educational background, writing skills, and subject expertise. Rest assured that your assignments will be handled by the best in the business."
    },
    {
        title: "100+ Students Support Executive:",
        description: "We understand the importance of prompt and efficient customer support. Our dedicated team of student support executives is available 24/7 to address your queries, provide guidance, and ensure a seamless experience throughout your assignment journey."
    },
    {
        title: "Global Assignment Helper:",
        description: "Our services extend beyond borders. No matter where you are located, our global assignment helpers are ready to assist you. We cater to students from all around the world, offering personalized solutions tailored to their specific academic requirements."
    }
];

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us-container">
            <button className="why-choose-button">Why Choose Us</button>
            <h1>Why Choose HelpHub Assignments?</h1>
            <div className="reasons-container">
                {reasons.map((reason, index) => (
                    <div className="reason-card" key={index}>
                        <h2>{reason.title}</h2>
                        <p>{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
