import React from 'react';
import './Registration.css'; // Import the CSS file for styling

function Registration() {
  return (
    <div className="registration-container">
      <h2>Registration Details</h2>
      <table className="registration-table">
        <thead>
          <tr>
            <th>Category</th>
            <th colSpan="2">EARLY BIRD RATES (Up to October 1, 2025)</th>
            <th colSpan="2">STANDARD RATES (After October 1, 2025)</th>
          </tr>
          <tr>
            <th></th>
            <th>IEEE Member</th>
            <th>Non-IEEE Member</th>
            <th>IEEE Member</th>
            <th>Non-IEEE Member</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Indian author (Academia / Industry)</td>
            <td>INR 11800</td>
            <td>INR 12980</td>
            <td>INR 12980</td>
            <td>INR 14160</td>
          </tr>
          <tr>
            <td>Indian student attendee</td>
            <td>INR 7080</td>
            <td>INR 8260</td>
            <td>INR 8260</td>
            <td>INR 9440</td>
          </tr>
          <tr>
            <td>Foreign author (Academia / Industry)</td>
            <td>$385</td>
            <td>$425</td>
            <td>$425</td>
            <td>$465</td>
          </tr>
          <tr>
            <td>Foreign student attendee</td>
            <td>$225</td>
            <td>$250</td>
            <td>$250</td>
            <td>$275</td>
          </tr>
        </tbody>
      </table>
      <div className="registration-note">
        <div className="note-box">
          <p>Note:</p>
          <ul>
            <li>Rates are inclusive of GST 18%</li>
            <li>One full author registration can register up to 2 papers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Registration; 