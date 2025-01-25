import React from 'react';
import { Link } from 'react-router-dom';
import jaipur from '../assets/jaipur-skyline.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <img src={jaipur} alt="Jaipur Skyline" className="skyline-image" />
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="https://www.svnit.ac.in/index.php" target="_blank" rel="noopener noreferrer">About SVNIT</a></li>
            <li><Link to="/authors">Call for papers</Link></li>
            <li><Link to="/speakers">Invited Speakers</Link></li>
            <li><Link to="/committee">Committees</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/authors">Submission</Link></li>
            <li><Link to="/event-details">Publication</Link></li>
            <li><Link to="/special-sessions">Tutorial/Workshop</Link></li>
            <li><Link to="/venue-contact">Contact us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Downloads</h3>
          <ul>
            <li><a href="/downloads/presentation-template">Presentation Template</a></li>
            <li><a href="/downloads/brochure">Brochure</a></li>
            <li><a href="/downloads/paper-template">Paper Template</a></li>
            <li><a href="/downloads/registration-form">Registration Form</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>SPERT © 2025</p>
      </div>
    </footer>
  );
}

export default Footer; 