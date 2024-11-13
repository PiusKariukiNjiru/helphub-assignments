import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppButton.css'; // Import the CSS file

const WhatsAppButton = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Duration of the shake animation
    }, 6000); // Interval for the shake animation

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.location.href = 'https://wa.me/254784996377?text=Hello%2C%20I%20need%20assistance%20with%20my%20assignment.'; // Customer support message
  };

  const buttonStyle = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000, 
  };

  const iconStyle = {
    color: 'white',
    fontSize: '30px',
  };

  return (
    <div
      style={buttonStyle}
      onClick={handleClick}
      className={shake ? 'shake' : ''}
    >
      <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
    </div>
  );
};

export default WhatsAppButton;
