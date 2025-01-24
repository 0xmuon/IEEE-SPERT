import React from 'react';

function Speakers() {
  return (
    <div className="speakers">
      <h1>Keynote Speakers</h1>
      <div className="speakers-grid">
        <div className="speaker-card">
          <h2>Prof. Alan Smith</h2>
          <p>MIT University</p>
          <p>Topic: "Future of AI in Engineering"</p>
        </div>
        <div className="speaker-card">
          <h2>Dr. Maria Garcia</h2>
          <p>Stanford University</p>
          <p>Topic: "Sustainable Engineering Practices"</p>
        </div>
      </div>
    </div>
  );
}

export default Speakers; 