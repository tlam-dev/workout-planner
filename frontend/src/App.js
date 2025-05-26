import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Schedule from './pages/Schedule';
import Workouts from './pages/Workouts';
import Settings from './pages/Settings';


function Home() {
  return (
    <div className="page" id="home">
      <h1>Welcome to the Workout Schdule App!</h1>
      <h2>Track your workouts, plan your weekly schedule, and manage settings—all in one place!</h2>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
