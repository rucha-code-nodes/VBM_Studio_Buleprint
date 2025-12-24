// /* src/pages/Signup.js */
// import React, { useState } from 'react';
// import './Auth.css';
// import { useNavigate } from 'react-router-dom';
// import BackButton from '../components/BackButton';


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
//       <BackButton />
//         <div className="auth-box">
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
import BackButton from '../components/BackButton';

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

  // Dummy data for visual display
  const teamMembers = [
    { name: "Sarah Jenkins", role: "Frontend Lead", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "David Kim", role: "Product Manager", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Elena Rodriguez", role: "UX Designer", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Marcus Johnson", role: "Backend Engineer", img: "https://randomuser.me/api/portraits/men/86.jpg" },
    { name: "Priya Patel", role: "DevOps Engineer", img: "https://randomuser.me/api/portraits/women/29.jpg" },
    { name: "Tom Baker", role: "QA Specialist", img: "https://randomuser.me/api/portraits/men/11.jpg" },
   
    
  ];

  return (
    <div className="auth-page-wrapper">
      
      {/* --- LEFT SIDE: Meet The Team (70%) --- */}
      <div className="auth-image-side">
        <div className="team-header">
          <h1>Meet The Team</h1>
          <p>Join a world-class group of engineers, designers, and thinkers building the future of internal management.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-avatar-wrapper">
                <img src={member.img} alt={member.name} className="member-avatar" />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <span className="member-role">{member.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- RIGHT SIDE: Form (30%) --- */}
      <div className="auth-form-side">
        <div className="back-button-wrapper">
            <BackButton />
        </div>
        
        <div className="auth-box">
          <div className="auth-header">
            <span className="auth-logo">VVBM Portal</span>
            <h2>Create Account</h2>
            <p>Start your journey with us.</p>
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

    </div>
  );
};

export default Signup;