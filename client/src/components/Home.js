import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="conference-header">
        <div className="logo-container left">
          {/* Remove SPERT2025 logo */}
          <img 
            src={process.env.PUBLIC_URL + '/assets/SPERT2025.png'} 
            alt="SPERT 2025 Logo" 
            className="conference-logo" 
          />
        </div>
        
        <div className="conference-info">
          <h1>IEEE International Conference </h1>
          <h2>(IEEE SPERT 2025)</h2>
          <h3>19 Dec - 21 Dec, 2025</h3>
          <h3>Surat, Gujarat, INDIA</h3>
        </div>

        {/* Remove NIT_SURAT.svg logo */}
        {/* <div className="logo-container right">
          <img 
            src={process.env.PUBLIC_URL + '/assets/NIT_SURAT.svg'} 
            alt="NIT Surat Logo" 
            className="institution-logo" 
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home; 