import React from 'react';

function EventDetails() {
  return (
    <div className="event-details">
      <h1>Event Details</h1>
      <div className="event-info">
        <section>
          <h2>Conference Schedule</h2>
          <ul>
            <li>Day 1: Opening Ceremony & Keynote Speeches</li>
            <li>Day 2: Technical Sessions & Workshops</li>
            <li>Day 3: Paper Presentations & Closing Ceremony</li>
          </ul>
        </section>
        <section>
          <h2>Important Dates</h2>
          <ul>
            <li>Paper Submission Deadline: March 15, 2025</li>
            <li>Acceptance Notification: April 30, 2025</li>
            <li>Conference Dates: June 15-17, 2025</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default EventDetails; 