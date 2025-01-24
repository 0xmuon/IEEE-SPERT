import React from 'react';

function Awards() {
  return (
    <div className="awards">
      <h1>Awards</h1>
      <div className="awards-content">
        <section>
          <h2>Best Paper Awards</h2>
          <ul>
            <li>Best Technical Paper: $1000</li>
            <li>Best Student Paper: $500</li>
            <li>Best Presentation: $300</li>
          </ul>
        </section>
        <section>
          <h2>Special Recognition</h2>
          <p>Additional awards and recognition details will be announced.</p>
        </section>
      </div>
    </div>
  );
}

export default Awards; 