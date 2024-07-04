import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "I am extremely grateful for the exceptional services provided by the Assignment Writing Services company. Their team of talented writers not only delivered my assignments on time but also ensured that the content was of the highest quality.",
    name: "John Doe",
    role: "Student",
    img: "images/pius.JPEG" // Replace with actual path to image
  },
  {
    id: 2,
    text: "I am filled with gratitude as I reflect on my academic journey, with the HelpHub Assignments as my guiding light. I know it might sound poetic but their unwavering support and exceptional assistance have played an important role in achieving good grades.",
    name: "angel Williams",
    role: "Student",
    img: "images/mercy.JPEG" // Replace with actual path to image
  },
  {
    id: 3,
    text: "I am extremely grateful for the exceptional services provided by the Assignment Writing Services company. Their team of talented writers not only delivered my assignments on time but also ensured that the content was of the highest quality.",
    name: "cate Doe",
    role: "Student",
    img: "images/mercy.JPEG" // Replace with actual path to image
  },
  {
    id: 4,
    text: "I am filled with gratitude as I reflect on my academic journey, with the HelpHub Assignments as my guiding light. I know it might sound poetic but their unwavering support and exceptional assistance have played an important role in achieving good grades.",
    name: "jane Williams",
    role: "Student",
    img: "images/pius.JPEG" // Replace with actual path to image
  },
  {
    id: 5,
    text: "I am extremely grateful for the exceptional services provided by the Assignment Writing Services company. Their team of talented writers not only delivered my assignments on time but also ensured that the content was of the highest quality.",
    name: "rufus Doe",
    role: "Student",
    img: "images/pius.JPEG" // Replace with actual path to image
  },
  {
    id: 6,
    text: "I am filled with gratitude as I reflect on my academic journey, with the HelpHub Assignments as my guiding light. I know it might sound poetic but their unwavering support and exceptional assistance have played an important role in achieving good grades.",
    name: "clinton Williams",
    role: "Student",
    img: "images/mercy.JPEG" // Replace with actual path to image
  },
  {
    id: 7,
    text: "I am filled with gratitude as I reflect on my academic journey, with the HelpHub Assignments as my guiding light. I know it might sound poetic but their unwavering support and exceptional assistance have played an important role in achieving good grades.",
    name: "mercy Williams",
    role: "Student",
    img: "images/mercy.JPEG" // Replace with actual path to image
  },
  {
    id: 8,
    text: "I am filled with gratitude as I reflect on my academic journey, with the HelpHub Assignments as my guiding light. I know it might sound poetic but their unwavering support and exceptional assistance have played an important role in achieving good grades.",
    name: "pius Williams",
    role: "Student",
    img: "images/pius.JPEG" // Replace with actual path to image
  }

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
        <button className="nav-button left" onClick={() => slide('prev')}>&#10094;</button>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial ${index === currentIndex || index === currentIndex + 1 ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: isSliding ? 'transform 1s ease-in-out' : 'none'
              }}
            >
              <img src={testimonial.img} alt={testimonial.name} />
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={() => slide('next')}>&#10095;</button>
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
    </div>
  );
};

export default TestimonialsCarousel;