// /* src/pages/Signup.js */
// import React, { useState } from 'react';
// import './Auth.css';
// import { useNavigate } from 'react-router-dom';


// const Signup = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log("Signing up:", fullName, email);
//      navigate('/Dashboard');
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <div className="auth-header">
//           <span className="auth-logo">VVBM Portal</span>
//           <h2>Create Account</h2>
//           <p>Join the team management portal.</p>
//         </div>

//         <form onSubmit={handleSignup}>
//           {/* Extra Field for Signup: Name */}
//           <div className="input-group">
//             <label>Full Name</label>
//             <input 
//               type="text" 
//               placeholder="John Doe" 
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required 
//             />
//           </div>

//           <div className="input-group">
//             <label>Email Address</label>
//             <input 
//               type="email" 
//               placeholder="name@company.com" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required 
//             />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input 
//               type="password" 
//               placeholder="Create a strong password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required 
//             />
//           </div>

//           <button type="submit" className="auth-btn">Sign Up</button>
//         </form>

//         <div className="auth-footer">
//           Already have an account? <a href="/login" className="link">Login</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

/* src/pages/Signup.js */
import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import ruchaImg from "../assets/Profile.jpg";

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up:", fullName, email);
    // In a real app, you would validate and send data to backend here
    navigate('/dashboard');
  };

  // --- Right Side Content: Employee Portraits (Mock) ---
  // Using the same data as Login for consistency
  const employees = [
    { image: ruchaImg, name: "Rucha", role: "Dev" }, { image: ruchaImg, name: "Rucha", role: "Dev" },
        { image: ruchaImg, name: "Rucha", role: "Dev" }, { image: ruchaImg, name: "Rucha", role: "Dev" }
        
  ];

  return (
    <div className="auth-container">
      
      {/* --- LEFT SIDE: SIGNUP FORM (40%) --- */}
      <div className="auth-left">
        <div className="auth-box">
          <div className="auth-header">
            <span className="auth-logo">VVBM Portal</span>
            <h2>Create Account</h2>
            <p>Join the team management portal.</p>
          </div>

          <form onSubmit={handleSignup}>
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

      {/* --- RIGHT SIDE: TEAM SHOWCASE (Updated Structure) --- */}
      <div className="auth-right">
        <div className="team-showcase">
          <h1 className="showcase-title">Meet Our Team</h1>
          <p className="showcase-desc">
            We are a group of passionate individuals working together to build the future of internal management. Join us and be part of the journey.
          </p>
          
          <div className="employee-grid-portrait">
  {employees.map((emp, index) => (
    <div key={index} className="emp-card">
      <div className="emp-portrait">
        <img src={emp.image} alt={emp.name} className="emp-photo" />
      </div>
      
      <div className="emp-info">
        <span className="emp-name">{emp.name}</span>
        <span className="emp-role">{emp.role}</span>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

    </div>
  );
};

export default Signup;