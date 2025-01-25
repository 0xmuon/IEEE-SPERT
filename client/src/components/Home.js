import React from 'react';
import spertLogo from '../assets/SPERT2025.svg';
import nitLogo from '../assets/NIT_SURAT.svg';

function Home() {
  return (
    <div className="home">
      <div className="conference-header">
        <div className="logo-container left">
          <img src={spertLogo} alt="SPERT 2025 Logo" className="conference-logo" />
        </div>
        
        <div className="conference-info">
          <h1>IEEE International Conference </h1>
          <h2>(IEEE SPERT 2025)</h2>
          <h3>19 Dec - 21 Dec, 2025</h3>
          <h3>Surat, Gujarat, INDIA</h3>
        </div>

        <div className="logo-container right">
          <img src={nitLogo} alt="NIT Surat Logo" className="institution-logo" />
        </div>
      </div>
    </div>
  );
}

export default Home; 