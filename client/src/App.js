import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Authors from './components/Authors';
import Committee from './components/Committee';
import Speakers from './components/Speakers';
import EventDetails from './components/EventDetails';
import SpecialSessions from './components/SpecialSessions';
import Registration from './components/Registration';
import Awards from './components/Awards';
import Accommodation from './components/Accommodation';
import VenueContact from './components/VenueContact';
import Sponsorship from './components/Sponsorship';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/event-details" element={<EventDetails />} />
            <Route path="/special-sessions" element={<SpecialSessions />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/venue-contact" element={<VenueContact />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;