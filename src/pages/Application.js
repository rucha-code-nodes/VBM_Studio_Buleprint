import React, { useState } from 'react';
import './Application.css';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/logo6.jpeg';
import BackButton from '../components/BackButton';

const Application = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' && files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend/admin
    console.log('Application submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="application-container">
      <BackButton />
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="VVBM" className="logo-image" />
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

      {/* Application Form Section */}
      <section className="application-section">
        <div className="form-wrapper">
          <div className="form-header">
            <h1>Join Our Team</h1>
            <p>Send us your application, resume, and let us know why you'd be a great fit!</p>
          </div>

          {submitted ? (
            <div className="success-message">
              <h2>✓ Application Submitted!</h2>
              <p>Thank you for your interest. We'll review your application and contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="application-form">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Position */}
              <div className="form-group">
                <label htmlFor="position">Position Applied For *</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Senior Developer, HR Manager"
                />
              </div>

              {/* Resume Upload */}
              <div className="form-group">
                <label htmlFor="resume">Upload Resume (PDF/DOC) *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  required
                  accept=".pdf,.doc,.docx"
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Tell Us About Yourself *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share your experience, skills, and why you'd be a great addition to our team..."
                  rows="6"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary-gradient submit-btn">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
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

export default Application;
