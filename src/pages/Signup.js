/* src/pages/Signup.js */
import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up:", fullName, email);
     navigate('/Dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <span className="auth-logo">VVBM Portal</span>
          <h2>Create Account</h2>
          <p>Join the team management portal.</p>
        </div>

        <form onSubmit={handleSignup}>
          {/* Extra Field for Signup: Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Create a strong password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        <div className="auth-footer">
          Already have an account? <a href="/login" className="link">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;