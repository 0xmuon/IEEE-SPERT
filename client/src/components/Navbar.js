import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have a CSS file for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src="https://i.ibb.co/JWhJB86S/SPERT2025.png" 
          alt="SPERT Expanded Logo" 
          className="navbar-logo" 
        />
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        </button>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/authors" onClick={() => setIsOpen(false)}>Authors</Link></li>
        <li><Link to="/committee" onClick={() => setIsOpen(false)}>Committee</Link></li>
        <li><Link to="/speakers" onClick={() => setIsOpen(false)}>Speakers</Link></li>
        <li><Link to="/event-details" onClick={() => setIsOpen(false)}>Event Details</Link></li>
        <li><Link to="/special-sessions" onClick={() => setIsOpen(false)}>Special Sessions</Link></li>
        <li><Link to="/registration" onClick={() => setIsOpen(false)}>Registration</Link></li>
        <li><Link to="/awards" onClick={() => setIsOpen(false)}>Awards</Link></li>
        <li><Link to="/accommodation" onClick={() => setIsOpen(false)}>Accommodation</Link></li>
        <li><Link to="/venue-contact" onClick={() => setIsOpen(false)}>Venue & Contact</Link></li>
        <li><Link to="/sponsorship" onClick={() => setIsOpen(false)}>Sponsorship</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 