import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="App-header">
      <div className="logo">
        <img src="images/logo.png" alt="Crown Logo" />
        <h1>HelpHub Assignments</h1>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/order-now" className="order-now">Order Now</Link>

        
        
      </nav>
    </header>
  );
}

export default Header;