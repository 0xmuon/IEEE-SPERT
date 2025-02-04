import React from 'react';
import './VenueContact.css';

function VenueContact() {
  return (
    <div className="venue-contact">
      <h1>Venue & Contact</h1>
      <div className="contact-info">
        <h2>Contact</h2>
        <p>
          General Chairs (SPERT 2025)<br />
          Sardar Vallabhbhai National Institute of Technology, Surat<br />
          <a href="mailto:ieee.sefet.2025@gmail.com">ieee.sefet.2025@gmail.com</a><br />
          Jawahar Lal Nehru Marg, Surat - 302017 (Gujarat) India
        </p>
      </div>
      <div className="venue-info">
        <h2>Venue</h2>
        <div className="map-container">
          <iframe
            title="SVNIT Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d72.12345678901234!3d21.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0a1234567890%3A0x1234567890abcdef!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%2C%20Surat!5e0!3m2!1sen!2sin!4v1234567890123"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VenueContact; 