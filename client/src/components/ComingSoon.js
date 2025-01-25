import React from 'react';
import './ComingSoon.css';

function ComingSoon({ pageName }) {
  return (
    <div className="coming-soon">
      <h1>{pageName}</h1>
      <div className="coming-soon-content">
        <h2>Coming Soon</h2>
        <p>This page is under construction. Please check back later.</p>
      </div>
    </div>
  );
}

export default ComingSoon; 