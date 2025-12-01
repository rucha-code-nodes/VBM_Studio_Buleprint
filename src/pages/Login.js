// /* src/pages/Login.js */
// import React, { useState } from 'react';
// import './Auth.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Logging in with:", email, password);
//     navigate('/Dashboard');
//     // Logic to go to Dashboard will go here later
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <div className="auth-header">
//           {/* Company logo (center) [cite: 22] */}
//           <span className="auth-logo">VVBM Portal</span>
//           {/* Welcome text [cite: 23] */}
//           <h2>Welcome Back</h2>
//           <p>Please enter your details to sign in.</p>
//         </div>

//         <form onSubmit={handleLogin}>
//           {/* Input: Email / Company ID [cite: 25] */}
//           <div className="input-group">
//             <label>Email or Company ID</label>
//             <input 
//               type="text" 
//               placeholder="Enter your email or ID" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required 
//             />
//           </div>

//           {/* Input: Password [cite: 26] */}
//           <div className="input-group">
//             <label>Password</label>
//             <input 
//               type="password" 
//               placeholder="••••••••" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required 
//             />
//           </div>

//           {/* Small text: Forgot password? [cite: 28] */}
//           <div style={{textAlign: 'right', marginBottom: '10px'}}>
//             <span className="link" style={{fontSize: '0.85rem'}}>Forgot password?</span>
//           </div>

//           {/* Login button (big, centered) [cite: 27] */}
//           <button type="submit" className="auth-btn">Login</button>
//         </form>

//         <div className="auth-footer">
//           Don't have an account? <a href="/signup" className="link">Sign up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


/* src/pages/Login.js */
import React, { useState } from 'react';
import './Auth.css';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee'); // Default role
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role} with:`, email, password);
    
    // Simulate saving role to session
    localStorage.setItem('userRole', role);

    // Navigate based on role (Future logic)
    if (role === 'admin') {
      window.location.href = '/adminpanel'; // Or just /dashboard with admin rights
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <span className="auth-logo">VVBM Portal</span>
          <h2>{role === 'admin' ? 'Admin Login' : 'Welcome Back'}</h2>
          <p>Please enter your details to sign in.</p>
        </div>

        {/* --- Role Toggle Switch --- */}
        <div className="role-switch-container">
          <button 
            type="button" 
            className={`role-btn ${role === 'employee' ? 'active' : ''}`}
            onClick={() => setRole('employee')}
          >
            Employee
          </button>
          <button 
            type="button" 
            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleLogin}>
          {/* Input: Email / Company ID */}
          <div className="input-group">
            <label>{role === 'admin' ? 'Admin ID' : 'Email or Company ID'}</label>
            <input 
              type="text" 
              placeholder={role === 'admin' ? "admin@vvbm.com" : "Enter your email or ID"} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          {/* Input: Password */}
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div style={{textAlign: 'right', marginBottom: '10px'}}>
            <span className="link" style={{fontSize: '0.85rem'}}>Forgot password?</span>
          </div>

          <button type="submit" className="auth-btn">
            {role === 'admin' ? 'Login to Admin Panel' : 'Login'}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <a href="/signup" className="link">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;