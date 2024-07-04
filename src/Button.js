import React from 'react';
import './Button.css';

function Button({ children, onClick, className = '', as: Component = 'button', ...props }) {
  return (
    <Component className={`button ${className}`} onClick={onClick} {...props}>
      {children}
    </Component>
  );
}

export default Button;