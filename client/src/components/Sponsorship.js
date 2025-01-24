import React from 'react';

function Sponsorship() {
  return (
    <div className="sponsorship">
      <h1>Sponsorship</h1>
      <div className="sponsorship-content">
        <section className="sponsorship-levels">
          <h2>Sponsorship Opportunities</h2>
          <div className="sponsor-tier">
            <h3>Platinum Sponsor - $10,000</h3>
            <ul>
              <li>Premium logo placement</li>
              <li>5 conference registrations</li>
              <li>Exhibition booth</li>
            </ul>
          </div>
          <div className="sponsor-tier">
            <h3>Gold Sponsor - $5,000</h3>
            <ul>
              <li>Logo on conference materials</li>
              <li>3 conference registrations</li>
              <li>Display space</li>
            </ul>
          </div>
        </section>
        <section className="contact-info">
          <h2>Contact for Sponsorship</h2>
          <p>Email: sponsors@spert2025.com</p>
        </section>
      </div>
    </div>
  );
}

export default Sponsorship; 