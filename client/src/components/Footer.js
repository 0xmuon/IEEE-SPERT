import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-12-19T00:00:00Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="countdown-container">
        <div className="countdown-box">
          <span>{countdown.days}</span>
          <div className="label">Days</div>
        </div>
        <div className="countdown-box">
          <span>{countdown.hours}</span>
          <div className="label">Hours</div>
        </div>
        <div className="countdown-box">
          <span>{countdown.minutes}</span>
          <div className="label">Minutes</div>
        </div>
        <div className="countdown-box">
          <span>{countdown.seconds}</span>
          <div className="label">Seconds</div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
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