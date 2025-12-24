



// import React, { useState } from 'react';
// import './Auth.css';
// import BackButton from '../components/BackButton';
// // import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   // OTP Flow States
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [role, setRole] = useState('employee'); // Default role
  
//   // View State: 'login', 'forgot-password', 'verify-otp', 'reset-password'
//   const [view, setView] = useState('login'); 
  
//   // const navigate = useNavigate();

//   // --- LOGIN HANDLER ---
//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log(`Logging in as ${role} with:`, email, password);
    
//     // Simulate saving role to session
//     localStorage.setItem('userRole', role);

//     // Navigate based on role (Future logic)
//     if (role === 'admin') {
//       window.location.href = '/adminpanel'; 
//     } else {
//       window.location.href = '/dashboard';
//     }
//   };

//   const handleGoogleLogin = () => {
//     console.log("Initiating Google Login...");
//     // Future logic: Call Firebase or Backend API for Google Auth
//   };

//   // --- RESET PASSWORD FLOW HANDLERS ---

//   // Step 1: Send OTP
//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     if (!email) {
//         alert("Please enter your email.");
//         return;
//     }
//     console.log("Sending OTP to:", email);
//     // Simulate API call
//     alert(`OTP sent to ${email} (Check console/demo for '1234')`);
//     setView('verify-otp'); 
//   };

//   // Step 2: Verify OTP
//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     // Simulate OTP check (Accept "1234" or any 4-digit code for demo)
//     if (otp.length === 4) {
//         console.log("OTP Verified");
//         setView('reset-password');
//     } else {
//         alert("Invalid OTP. Please enter a 4-digit code.");
//     }
//   };

//   // Step 3: Set New Password
//   const handleResetPasswordFinal = (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//         alert("Passwords do not match!");
//         return;
//     }
//     console.log("Password reset for:", email);
//     alert("Password reset successfully! Please login.");
//     setView('login');
//     // Clear sensitive fields
//     setOtp('');
//     setNewPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <div className="auth-container">
//       <BackButton />
//         <div className="auth-box">
        
//         {/* ================= VIEW: LOGIN FORM ================= */}
//         {view === 'login' && (
//           <>
//             <div className="auth-header">
//               <span className="auth-logo">VVBM Portal</span>
//               <h2>{role === 'admin' ? 'Admin Login' : 'Welcome Back'}</h2>
//               <p>Please enter your details to sign in.</p>
//             </div>

//             {/* Role Switch */}
//             <div className="role-switch-container">
//               <button 
//                 type="button" 
//                 className={`role-btn ${role === 'employee' ? 'active' : ''}`}
//                 onClick={() => setRole('employee')}
//               >
//                 Employee
//               </button>
//               <button 
//                 type="button" 
//                 className={`role-btn ${role === 'admin' ? 'active' : ''}`}
//                 onClick={() => setRole('admin')}
//               >
//                 Admin
//               </button>
//             </div>

//             <form onSubmit={handleLogin}>
//               <div className="input-group">
//                 <label>{role === 'admin' ? 'Admin ID' : 'Email or Company ID'}</label>
//                 <input 
//                   type="text" 
//                   placeholder={role === 'admin' ? "admin@vvbm.com" : "Enter your email or ID"} 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required 
//                 />
//               </div>

//               <div className="input-group">
//                 <label>Password</label>
//                 <input 
//                   type="password" 
//                   placeholder="••••••••" 
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required 
//                 />
//               </div>

//               <div style={{textAlign: 'right', marginBottom: '15px'}}>
//                 <button 
//                   type="button" 
//                   className="link-btn" 
//                   onClick={() => setView('forgot-password')}
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               <button type="submit" className="auth-btn">
//                 {role === 'admin' ? 'Login to Admin Panel' : 'Login'}
//               </button>
//             </form>

//             <div className="separator">
//               <span>OR</span>
//             </div>

//             <button type="button" className="google-btn" onClick={handleGoogleLogin}>
//               <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
//                 <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
//                   <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
//                   <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
//                   <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
//                   <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
//                 </g>
//               </svg>
//               Sign in with Google
//             </button>

//             <div className="auth-footer">
//               Don't have an account? <a href="/signup" className="link">Sign up</a>
//             </div>
//           </>
//         )}

//         {/* ================= VIEW: STEP 1 - EMAIL INPUT ================= */}
//         {view === 'forgot-password' && (
//           <>
//             <div className="auth-header">
//               <span className="auth-logo">VVBM Portal</span>
//               <h2>Reset Password</h2>
//               <p>Enter your email to receive an OTP.</p>
//             </div>

//             <form onSubmit={handleSendOtp}>
//               <div className="input-group">
//                 <label>Email Address</label>
//                 <input 
//                   type="email" 
//                   placeholder="Enter your registered email" 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required 
//                 />
//               </div>

//               <button type="submit" className="auth-btn">
//                 Send OTP
//               </button>

//               <div style={{marginTop: '15px', textAlign: 'center'}}>
//                 <button type="button" className="link-btn" onClick={() => setView('login')}>
//                   Back to Login
//                 </button>
//               </div>
//             </form>
//           </>
//         )}

//         {/* ================= VIEW: STEP 2 - OTP VERIFICATION ================= */}
//         {view === 'verify-otp' && (
//           <>
//             <div className="auth-header">
//               <span className="auth-logo">VVBM Portal</span>
//               <h2>Verify OTP</h2>
//               <p>Enter the 4-digit code sent to {email}.</p>
//             </div>

//             <form onSubmit={handleVerifyOtp}>
//               <div className="input-group">
//                 <label>One Time Password (OTP)</label>
//                 <input 
//                   type="text" 
//                   placeholder="e.g. 1234" 
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   maxLength="4"
//                   style={{textAlign: 'center', letterSpacing: '0.2em', fontSize: '1.2rem'}}
//                   required 
//                 />
//               </div>

//               <button type="submit" className="auth-btn">
//                 Verify Code
//               </button>

//               <div style={{marginTop: '15px', textAlign: 'center'}}>
//                 <button type="button" className="link-btn" onClick={() => setView('forgot-password')}>
//                   Change Email
//                 </button>
//               </div>
//             </form>
//           </>
//         )}

//         {/* ================= VIEW: STEP 3 - NEW PASSWORD ================= */}
//         {view === 'reset-password' && (
//           <>
//             <div className="auth-header">
//               <span className="auth-logo">VVBM Portal</span>
//               <h2>New Password</h2>
//               <p>Create a new strong password.</p>
//             </div>

//             <form onSubmit={handleResetPasswordFinal}>
//               <div className="input-group">
//                 <label>New Password</label>
//                 <input 
//                   type="password" 
//                   placeholder="••••••••" 
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   required 
//                 />
//               </div>

//               <div className="input-group">
//                 <label>Confirm Password</label>
//                 <input 
//                   type="password" 
//                   placeholder="••••••••" 
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required 
//                 />
//               </div>

//               <button type="submit" className="auth-btn">
//                 Reset Password
//               </button>
//             </form>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Login;




/* src/pages/Login.js */
import React, { useState } from 'react';
import './Auth.css';
import BackButton from '../components/BackButton';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // OTP Flow States
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [role, setRole] = useState('employee'); // Default role
  
  // View State
  const [view, setView] = useState('login'); 
  
  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role} with:`, email, password);
    localStorage.setItem('userRole', role);
    if (role === 'admin') {
      window.location.href = '/adminpanel'; 
    } else {
      window.location.href = '/dashboard';
    }
  };

  const handleGoogleLogin = () => {
    console.log("Initiating Google Login...");
  };

  // Reset Flow Handlers
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email) { alert("Please enter your email."); return; }
    alert(`OTP sent to ${email} (Check console/demo for '1234')`);
    setView('verify-otp'); 
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length === 4) { setView('reset-password'); } 
    else { alert("Invalid OTP."); }
  };

  const handleResetPasswordFinal = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) { alert("Passwords do not match!"); return; }
    alert("Password reset successfully!");
    setView('login');
    setOtp(''); setNewPassword(''); setConfirmPassword('');
  };

  // Dummy Team Data
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
      
      {/* --- LEFT SIDE: Meet The Team --- */}
      <div className="auth-image-side">
        <div className="team-header">
          <h1>Meet The Team</h1>
          <p>Welcome back! See who is online and working with you today.</p>
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

      {/* --- RIGHT SIDE: Form (Blue) --- */}
      <div className="auth-form-side">
        <div className="back-button-wrapper">
            <BackButton />
        </div>

        <div className="auth-box">
        
        {view === 'login' && (
          <>
            <div className="auth-header">
              <span className="auth-logo">VVBM Portal</span>
              <h2>{role === 'admin' ? 'Admin Login' : 'Welcome Back'}</h2>
              <p>Login to your account.</p>
            </div>

            <div className="role-switch-container">
              <button type="button" className={`role-btn ${role === 'employee' ? 'active' : ''}`} onClick={() => setRole('employee')}>
                Employee
              </button>
              <button type="button" className={`role-btn ${role === 'admin' ? 'active' : ''}`} onClick={() => setRole('admin')}>
                Admin
              </button>
            </div>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>{role === 'admin' ? 'Admin ID' : 'Email or Company ID'}</label>
                <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <div style={{textAlign: 'right', marginBottom: '15px'}}>
                <button type="button" className="link-btn" onClick={() => setView('forgot-password')}>
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="auth-btn">
                {role === 'admin' ? 'Login to Admin Panel' : 'Login'}
              </button>
            </form>

            <div className="separator">
              <span>OR</span>
            </div>

            <button type="button" className="google-btn" onClick={handleGoogleLogin}>
              {/* Added Google SVG Icon below */}
              <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                </g>
              </svg>
              Sign in with Google
            </button>

            <div className="auth-footer">
              Don't have an account? <a href="/signup" className="link">Sign up</a>
            </div>
          </>
        )}

        {/* Forgot Password Views (Simplified for brevity, uses same blue styling) */}
        {view === 'forgot-password' && (
          <>
            <div className="auth-header">
              <h2>Reset Password</h2>
              <p>Enter email for OTP.</p>
            </div>
            <form onSubmit={handleSendOtp}>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <button type="submit" className="auth-btn">Send OTP</button>
              <div style={{marginTop: '15px', textAlign: 'center'}}>
                <button type="button" className="link-btn" onClick={() => setView('login')}>Back to Login</button>
              </div>
            </form>
          </>
        )}

        {view === 'verify-otp' && (
          <>
            <div className="auth-header"><h2>Verify OTP</h2></div>
            <form onSubmit={handleVerifyOtp}>
              <div className="input-group">
                <label>OTP Code</label>
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} style={{textAlign: 'center', letterSpacing: '0.2em'}} required />
              </div>
              <button type="submit" className="auth-btn">Verify</button>
            </form>
          </>
        )}

        {view === 'reset-password' && (
          <>
            <div className="auth-header"><h2>New Password</h2></div>
            <form onSubmit={handleResetPasswordFinal}>
              <div className="input-group">
                <label>New Password</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
              <button type="submit" className="auth-btn">Reset</button>
            </form>
          </>
        )}
        
        </div>
      </div>
    </div>
  );
};

export default Login;