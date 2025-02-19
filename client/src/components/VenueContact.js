import React from 'react';
import './VenueContact.css';

function VenueContact() {
  return (
    <div className="venue-contact">
      <h1>Venue & Contact</h1>
      <div className="contact-info">
        <h2>Contact</h2>
        <p>
          (IEEE-SPERT 2025)<br />
          Sardar Vallabhbhai National Institute of Technology, Surat<br />
          <a href="mailto:ieee.sefet.2025@svnit.ac.in">ieee.spert@svnit.ac.in</a><br />
          SVNIT, Surat - 395007 (Gujarat) India
        </p>
      </div>
      <div className="venue-info">
        <h2>Venue</h2>
        <p>
          Sardar Vallabhbhai National Institute of Technology, Surat: Located in Athwa, Surat, Gujarat 395007, India.
        </p>
        <div className="map-container">
          <iframe
            title="SVNIT Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6299713642265!2d72.78262877485321!3d21.167119180517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1739285605447!5m2!1sen!2sus"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VenueContact; 