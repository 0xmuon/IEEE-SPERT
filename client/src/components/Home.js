import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://i.ibb.co/xtx2cvZY/Gira-falls.jpg",
    "https://i.ibb.co/4Z4S2chm/national-park.jpg",
    "https://i.ibb.co/QFHnxq40/Statue-of-Unity.webp"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home">
      <div className="conference-header">
        <div className="logo-container left-logo">
          <img 
            src="https://i.ibb.co/JWhJB86S/SPERT2025.png" 
            alt="SPERT 2025 Logo" 
            className="conference-logo" 
            width="400" 
            height="150"
          />
        </div>
        
        <div className="conference-info">
          <h1 className="conference-title">IEEE International Conference</h1>
          <h2 className="conference-subtitle">IEEE International Conference on Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025</h2>
          <h3 className="conference-dates">19 Dec - 21 Dec, 2025</h3>
          <h3 className="conference-location">Surat, Gujarat, INDIA</h3>
        </div>

        <div className="logo-container right-logo">
          <img 
            src="https://i.ibb.co/DgPtSdG6/svnit-logo.png" 
            alt="SVNIT Logo" 
            className="conference-logo" 
            width="400" 
            height="150"
          />
        </div>
      </div>

      <div className="sponsor-img">
        <img 
          src="https://i.ibb.co/ks9mhG84/guj-section-logo.png" 
          alt="guj-section-logo"
        />
        <img src="https://i.ibb.co/tpxKrPdZ/IAS-logo.webp" alt="IAS-logo" />
        <img src="https://i.ibb.co/4gjF501z/IEEE-IES-Logo.png" alt="IEEE-IES-Logo" />
        <img src="https://i.ibb.co/mrdb1b5s/ieee-logo.png" alt="ieee-logo" />
        <img src="https://i.ibb.co/rRDfdZv7/PELS-logo.png" alt="PELS-logo" />
      </div>

      <div className="content-container">
        <div className="left-content">
          <h2 className="welcome-title">Welcome to IEEE SPERT 2025</h2>
          <p className="welcome-description">
            The IEEE International Conference on Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) aims to bring together experts and researchers to discuss advancements in these critical fields. This conference will explore innovative solutions and technologies that drive the future of energy and transportation, fostering collaboration and knowledge sharing among participants.
          </p>

          <h2 className="tracks-title">Regular Tracks:</h2>
          <ul className="track-list">
            <li>Power converters for Integration of Renewable Energy into the grid, its control and management</li>
            <li>Energy Management and Storage Technologies</li>
            <li>Charging Systems and Infrastructure for Electrical transportation</li>
            <li>Power Converters and Drive systems for Electric Vehicles</li>
            <li>Control and Automation</li>
            <li>Grid resiliency and flexibility</li>
            <li>AI, Big data and Cybersecurity for power, energy and transportation</li>
            <li>Electricity market and regulatory framework</li>
          </ul>

          <div className="conference-description">
            <h2 className="description-title">Conference Overview</h2>
            <p>
              The International Conference on Smart Power, Energy, Renewables, and Transportation aims to explore the integration of advanced energy systems, renewable energy sources, and sustainable transportation solutions. 
            </p>
            <p>
              Topics include smart grid technologies, energy storage, IoT applications in power systems, and the role of artificial intelligence in optimizing energy distribution. The conference also covers renewable energy advancements in solar, wind, and biofuels, alongside the evolution of electric and hybrid vehicles.
            </p>
            <p>
              It highlights sustainable mobility, smart transportation systems, and the environmental impacts of energy technologies. Discussions will focus on policy, regulation, and economic strategies to accelerate the transition toward a cleaner, more efficient energy and transportation future.
            </p>
            <p>
              The event provides a platform for collaboration between experts from academia, industry, and government to drive innovations in these critical sectors.
            </p>
          </div>
        </div>

        <div className="right-content">
          <h2 className="important-dates-title">Important Dates</h2>
          <table className="important-dates-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st June 2025</td>
                <td>Paper Submission Deadline</td>
              </tr>
              <tr>
                <td>15th July 2025</td>
                <td>Notification of Acceptance</td>
              </tr>
              <tr>
                <td>1st August 2025</td>
                <td>Camera Ready Submission</td>
              </tr>
              <tr>
                <td>19th Dec 2025</td>
                <td>Conference Begins</td>
              </tr>
              <tr>
                <td>21st Dec 2025</td>
                <td>Conference Ends</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Major Tourist Attractions Section */}
      <div className="tourist-attractions">
        <h2 className="attractions-title">Major Tourist Attractions</h2>
        <div className="slider">
          <button className="slider-button" onClick={prevSlide}>❮</button>
          <div className="">
            <div className="image-wrapper">
              <img src={images[currentIndex]} alt="Tourist Attraction" className="attraction-image" />
              {currentIndex === 0 && ( // Check if the current image is Gira Falls
                <div className="overlay">
                  <span className="overlay-text">Gira Falls</span>
                </div>
              )}
              {currentIndex === 1 && ( // Check if the current image is the National Park
                <div className="overlay">
                  <span className="overlay-text">Jambugodha Wildlife Sanctuary</span>
                </div>
              )}
              {currentIndex === 2 && ( // Check if the current image is the Statue of Unity
                <div className="overlay">
                  <span className="overlay-text">Statue of Unity</span>
                </div>
              )}
            </div>
          </div>
          <button className="slider-button" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
}

export default Home;