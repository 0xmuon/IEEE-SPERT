import React from 'react';

function Accommodation() {
  return (
    <div className="accommodation">
      <h1>Accommodation</h1>
      <div className="accommodation-content">
        <section className="recommended-hotels">
          <h2>Recommended Hotels</h2>
          <ul>
            <li>
              <h3>Grand Hotel</h3>
              <p>Distance from venue: 0.5 km</p>
              <p>Special conference rate: $150/night</p>
            </li>
            <li>
              <h3>City Plaza Hotel</h3>
              <p>Distance from venue: 1 km</p>
              <p>Special conference rate: $120/night</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Accommodation; 