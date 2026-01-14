import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo/logo6.jpeg';
import '../components/Navbar.css';

const Navbar = ({ showBackButton = true }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  // Don't show back button on home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {showBackButton && !isHomePage && (
          <button className="back-btn-circle" onClick={handleBack} title="Go back">
            ←
          </button>
        )}
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="VVBM" className="logo-image" />
          <span className="logo-text">VVBM Portal</span>
        </Link>
      </div>

      <div className="nav-buttons">
        <Link to="/apply">
          <button className="btn btn-ghost">Apply Now</button>
        </Link>
        {/* <Link to="/signup">
          <button className="btn btn-ghost">Create Account</button>
        </Link> */}
        <Link to="/login">
          <button className="btn btn-primary-gradient">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
