import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        <Link to="/order-now" className={`order-now ${location.pathname === '/order-now' ? 'active' : ''}`}>Order Now</Link>
      </nav>
    </header>
  );
}

export default Header;
