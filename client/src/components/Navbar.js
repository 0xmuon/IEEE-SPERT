import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">IEEE-SPERT 2025</Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li>
          <div class = 'dropdown-toggle DropDown' data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
            About Us
          </div>
          <div class = 'dropdown-menu dropdown-lg-right dropdownMenu'>
            <a href = '#' class = 'dropdown-item dropdownItem'> About SVNIT</a>
            <a href = '#' class = 'dropdown-item'>About Surat</a>
          </div>
        </li>
        <div class = 'dropdown-toggle DropDown' data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
            Authors
          </div>
          <div class = 'dropdown-menu dropdown-lg-right dropdownMenu'>
            <a href = '#' class = 'dropdown-item dropdownItem'>Call for papers</a>
            <a href = '#' class = 'dropdown-item'>Camera Ready Paper Submission</a>
            <a href = '#' class = 'dropdown-item'>Publications and Templates</a>
          </div>
        <li>
        </li>
        <li><Link to="/committee" onClick={() => setIsOpen(false)}>Committee</Link></li>
        <li>
          <div class = 'dropdown-toggle DropDown' data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
            Speakers
          </div>
          <div class = 'dropdown-menu dropdown-lg-right dropdownMenu'>
            <a href = '#' class = 'dropdown-item dropdownItem'>Tutorial Speaker</a>
            <a href = '#' class = 'dropdown-item'>KeyNote Speakers</a>
          </div>
        </li>
        <li>
        <div class = 'dropdown-toggle DropDown' data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
            Event details
          </div>
          <div class = 'dropdown-menu dropdown-lg-right dropdownMenu'>
            <a href = '#' class = 'dropdown-item dropdownItem'>WIE events</a>
            <a href = '#' class = 'dropdown-item'>CSYP events</a>
            <a href = '#' class = 'dropdown-item'>Industry Events</a>
          </div>
        </li>
        <li><Link to="/special-sessions" onClick={() => setIsOpen(false)}>Special Sessions</Link></li>
        <li><Link to="/registration" onClick={() => setIsOpen(false)}>Registration</Link></li>
        <div class = 'dropdown-toggle DropDown' data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
            Awards
          </div>
          <div class = 'dropdown-menu dropdown-lg-right dropdownMenu'>
            <a href = '#' class = 'dropdown-item dropdownItem'>Student travel award</a>
            <a href = '#' class = 'dropdown-item'>Outstanding Doctoral Dissertation award</a>
            <a href = '#' class = 'dropdown-item'>Best Paper Award</a>
          </div>
        <li><Link to="/accommodation" onClick={() => setIsOpen(false)}>Accommodation</Link></li>
        <li><Link to="/venue-contact" onClick={() => setIsOpen(false)}>Venue & Contact</Link></li>
        <li><Link to="/sponsorship" onClick={() => setIsOpen(false)}>Sponsorship</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 