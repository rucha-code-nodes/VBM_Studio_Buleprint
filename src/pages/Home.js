// /* src/pages/Home.js */
// import React from 'react';
// import './Home.css';
// import banner from '../assets/logo/logo1.jpeg';
// import { Link } from 'react-router-dom';


// const Home = () => {
//   return (
//     <div className="landing-container">
      
//       {/* --- Navbar --- */}
//       <nav className="navbar">
//         <div className="logo">
//            {/* Replace src with your actual logo path */}
//           <span className="logo-text">VVBM Portal</span>
//         </div>
//         <div className="nav-buttons">
//           {/* [cite: 14, 15] Two big buttons: Login and Signup */}
//           {/* <button className="btn btn-outline">Signup</button>
//           <button className="btn btn-primary">Login</button> */}
//           <Link to="/signup">
//     <button className="btn btn-outline">Signup</button>
//   </Link>

//   <Link to="/login">
//     <button className="btn btn-primary">Login</button>
//   </Link>
//         </div>
//       </nav>

//       {/* --- Hero Section (Banner) --- */}
//       <header className="hero-section">
//         <div className="hero-content">
//           {/* [cite: 6] Tagline */}
//           <h1>Smart Internal Management System</h1>
//           <p>Manage attendance, tasks, and team communication in one place.</p>
//           <div className="hero-buttons">
//             <button className="btn btn-primary big-btn">Get Started</button>
//           </div>
//         </div>
//         <div className="hero-image">
//            {/* [cite: 12] Nice banner illustration */}
//           <div className="placeholder-illustration">
//               <img src={banner} alt="Banner" />
//           </div>
//         </div>
//       </header>

//       {/* --- Features Section --- */}
//       <section className="features-section">
//         <h2>Everything you need to work better</h2>
//         <div className="features-grid">
//           {/* [cite: 8] */}
//           <div className="feature-card">
//             <h3>⏱️ Mark Attendance</h3>
//             <p>Punch in and out with a single click and track your hours.</p>
//           </div>
//           {/* [cite: 9] */}
//           <div className="feature-card">
//             <h3>📋 Track Tasks</h3>
//             <p>Manage projects and view your daily to-do list easily.</p>
//           </div>
//           {/* [cite: 10] */}
//           <div className="feature-card">
//             <h3>💬 Team Chat</h3>
//             <p>Collaborate with your team seamlessly in real-time.</p>
//           </div>
//           {/* [cite: 11] */}
//           <div className="feature-card">
//             <h3>📅 View Schedules</h3>
//             <p>Keep track of meetings and deadlines in one place.</p>
//           </div>
//         </div>
//       </section>

//       {/* --- Footer  --- */}
//       <footer className="footer">
//         <p>© 2025 VVBM Company. All rights reserved.</p>
//         <div className="footer-links">
//           <span>Contact Support</span>
//           <span>Privacy Policy</span>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default Home;




/* src/pages/Home.js */
import React from 'react';
import './Home.css';
import banner from '../assets/logo/logo1.jpeg'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing-container">
      
      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-symbol">💠</span>
          <span className="logo-text">VVBM Portal</span>
        </div>
        <div className="nav-buttons">
          <Link to="/signup">
            <button className="btn btn-ghost">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary-gradient">Login</button>
          </Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">✨ New: Employee Dashboard v2.0</div>
          <h1>Smart Internal Management <br/><span className="highlight-text">Simplified.</span></h1>
          <p className="hero-subtext">
            Streamline attendance, manage tasks, and collaborate with your team in one unified platform. Designed for modern workforces.
          </p>
          <div className="hero-buttons">
             <Link to="/login">
                <button className="btn btn-primary-gradient big-btn">Get Started Now</button>
             </Link>
             <button className="btn btn-outline big-btn">View Demo</button>
          </div>
          
          <div className="stats-row">
            <div className="stat-item">
              <strong>500+</strong> <span>Active Users</span>
            </div>
            <div className="stat-item">
              <strong>99.9%</strong> <span>Uptime</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-blob"></div>
          <div className="illustration-wrapper">
             <img src={banner} alt="VVBM Dashboard Preview" className="floating-img" />
          </div>
        </div>
      </header>

      {/* --- Features Section --- */}
      <section className="features-section">
        <div className="section-header-center">
          <h2>Everything you need to work better</h2>
          <p>Powerful features to boost productivity and team alignment.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box blue">⏱️</div>
            <h3>Smart Attendance</h3>
            <p>Punch in/out with geolocation tracking and get automated weekly reports.</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-box orange">📋</div>
            <h3>Task Management</h3>
            <p>Assign, track, and complete tasks with our intuitive Kanban-style board.</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-box green">💬</div>
            <h3>Real-time Chat</h3>
            <p>Seamless communication with direct messages and group channels.</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-box purple">📅</div>
            <h3>Dynamic Schedule</h3>
            <p>Sync meetings and deadlines automatically with your Google Calendar.</p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-text-white">VVBM Portal</span>
            <p>© 2025 VVBM Technologies.</p>
          </div>
          <div className="footer-links">
            <a href="#support">Support</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;