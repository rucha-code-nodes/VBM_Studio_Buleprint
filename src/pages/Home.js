/* src/pages/Home.js */
import React from 'react';
import './Home.css';
import banner from '../assets/logo/logo1.jpeg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="landing-container">
      
      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="logo">
           {/* Replace src with your actual logo path */}
          <span className="logo-text">VVBM Portal</span>
        </div>
        <div className="nav-buttons">
          {/* [cite: 14, 15] Two big buttons: Login and Signup */}
          {/* <button className="btn btn-outline">Signup</button>
          <button className="btn btn-primary">Login</button> */}
          <Link to="/signup">
    <button className="btn btn-outline">Signup</button>
  </Link>

  <Link to="/login">
    <button className="btn btn-primary">Login</button>
  </Link>
        </div>
      </nav>

      {/* --- Hero Section (Banner) --- */}
      <header className="hero-section">
        <div className="hero-content">
          {/* [cite: 6] Tagline */}
          <h1>Smart Internal Management System</h1>
          <p>Manage attendance, tasks, and team communication in one place.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary big-btn">Get Started</button>
          </div>
        </div>
        <div className="hero-image">
           {/* [cite: 12] Nice banner illustration */}
          <div className="placeholder-illustration">
              <img src={banner} alt="Banner" />
          </div>
        </div>
      </header>

      {/* --- Features Section --- */}
      <section className="features-section">
        <h2>Everything you need to work better</h2>
        <div className="features-grid">
          {/* [cite: 8] */}
          <div className="feature-card">
            <h3>⏱️ Mark Attendance</h3>
            <p>Punch in and out with a single click and track your hours.</p>
          </div>
          {/* [cite: 9] */}
          <div className="feature-card">
            <h3>📋 Track Tasks</h3>
            <p>Manage projects and view your daily to-do list easily.</p>
          </div>
          {/* [cite: 10] */}
          <div className="feature-card">
            <h3>💬 Team Chat</h3>
            <p>Collaborate with your team seamlessly in real-time.</p>
          </div>
          {/* [cite: 11] */}
          <div className="feature-card">
            <h3>📅 View Schedules</h3>
            <p>Keep track of meetings and deadlines in one place.</p>
          </div>
        </div>
      </section>

      {/* --- Footer  --- */}
      <footer className="footer">
        <p>© 2025 VVBM Company. All rights reserved.</p>
        <div className="footer-links">
          <span>Contact Support</span>
          <span>Privacy Policy</span>
        </div>
      </footer>

    </div>
  );
};

export default Home;