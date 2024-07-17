
import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';
const testimonials = [
  {
    id: 1,
    text: "I always struggle with academic writing which is why my friend recommended me this service. To say I am pleasantly surprised is an understatement. It is an excellent service with exceptional writers.",
    name: "Megan Austin",
    role: "Newcastle, UK",
    img: 'images/testimony3.jpg'
  },
  {
    id: 2,
    text: "I am filled with gratitude as I reflect on my academic journey, with the HelpHub Assignments as my guiding light. I know it might sound poetic but their unwavering support and exceptional assistance have played an important role in achieving good grades.",
    name: "Kieran Williams",
    role: "California, USA",
    img: "/images/testimony1.png"
  },
  {
    id: 3,
    text: "I am extremely grateful for the exceptional services provided by the HelpHub Assignments. Their team of talented writers not only delivered my assignments on time but also ensured that the content was of the highest quality.",
    name: "Cate Lloyed",
    role: "London, UK",
    img: "/images/testimony2.png"
  },
  {
    id: 4,
    text: "Thanks for delivering a well-drafted document on a complicated topic. I was able to submit an excellent sociology assignment and got appreciation from my professor. Thanks a lot to the entire team! You guys whom I can trust for my assignments.",    
    name: "Amelie Mclean",
    role: "Newcastle, UK",
    img: "/images/testimony4.png"
  },
  {
    id: 5,
    text: "I never received an A+ grade for my project since I am weak at collecting details effectively. But after contacting the team of HelpHub Assgnments, my dream became a reality, and I ranked first in project work. Thanks to you.",
    name: "Poppy Chamberlain",
    role: "London, UK",
    img: "/images/testimony5.png"
  },
  {
    id: 6,
    text: "I have had a fantastic experience with pro-academic-writer.com. I have ordered papers from their website for nine months now and I am always more than satisfied with the quality of their products. They do a thorough research and collect a lot of information to look at the topic from different angles. Thank you!",
    name: "Mariah Kimberly",
    role: "Columbus, USA",
    img: "/images/testimony6.png"
  },
  
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const slide = useCallback((direction) => {
    if (!isSliding) {
      setIsSliding(true);
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2));
      }
    }
  }, [isSliding]);

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSliding]);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      slide('next');
    }, 4000);

    return () => clearInterval(autoSlideTimer);
  }, [slide]);

  return (
    <div className="testimonials-carousel">
      <div className="testimonials-carousel-title">
        <h2>Testimonials</h2>
        <h3>What our customers say</h3>
      </div>
      <div className="testimonials-wrapper">
        <div className="testimonials-container" style={{ transform: `translateX(-${currentIndex * 50}%)`, transition: isSliding ? 'transform 1s ease-in-out' : 'none' }}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial ${index === currentIndex || index === currentIndex + 1 ? 'active' : ''}`}>
              <img src={testimonial.img} alt={testimonial.name} />
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx * 2 ? 'active' : ''}`}
            onClick={() => {
              if (!isSliding) {
                setIsSliding(true);
                setCurrentIndex(idx * 2);
              }
            }}
          ></span>
        ))}
      </div>
      <div className='bttns'>
        <button className="nav-button left" onClick={() => slide('prev')}>&#10094;</button>
        <button className="nav-button right" onClick={() => slide('next')}>&#10095;</button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
