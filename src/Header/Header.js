import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="App-header">
      <div className="logo">
          <div>
              <img src="/logo.png" alt="Logo" />
          </div>
          <div>
              <p>HelpHub</p>
              <p>Assignments</p>
          </div>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Homes</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
        <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        <Link to="/samples" className={location.pathname === '/samples' ? 'active' : ''}>Samples</Link>
        <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
        <Link to="/order-display" className={`order-now ${location.pathname === '/order-display' ? 'active' : ''}`}>Order Now</Link>
      </nav>
    </header>
  );
}

export default Header;
