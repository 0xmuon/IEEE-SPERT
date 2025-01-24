import React from 'react';

function Committee() {
  return (
    <div className="committee">
      <h1>Committee</h1>
      <div className="committee-content">
        <section className="organizing-committee">
          <h2>Organizing Committee</h2>
          <ul>
            <li>Dr. John Doe - Conference Chair</li>
            <li>Dr. Jane Smith - Technical Program Chair</li>
            <li>Prof. Robert Johnson - Advisory Committee Head</li>
          </ul>
        </section>
        <section className="technical-committee">
          <h2>Technical Committee</h2>
          <ul>
            <li>Dr. Sarah Wilson - Technical Lead</li>
            <li>Prof. Michael Brown - Research Coordinator</li>
            <li>Dr. Emily Davis - Publications Chair</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Committee; 