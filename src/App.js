



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Application from './pages/Application';
// import Dashboard from './pages/Dashboard';
// import Attendance from './pages/Attendance';
// import Feed from './pages/Feed';
// import Tasks from './pages/Tasks';
// import Documents from './pages/Documents';
// import Notifications from './pages/Notifications';
// import AdminPanel from './pages/AdminPanel';
// import Chat from './pages/Chat';
// import ChillZone from './pages/ChillZone';
// import Schedule from './pages/Schedule';

// // Import the BackButton component
// import BackButton from './components/BackButton'; 

// import './App.css';

// // --- Helper Component to conditionally show Back Button ---
// // (Optional: You can remove the 'if' logic if you strictly want it on ALL pages including Home)
// const GlobalBackButton = () => {
//   const location = useLocation();
//   // Don't show back button on the Home page ("/") if you don't want to
//   // if (location.pathname === '/') return null; 
  
//   return (
//     <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 9999 }}>
//       <BackButton />
//     </div>
//   );
// };

// function App() {
//   const MobileLoginRedirect = () => {
//     const navigate = useNavigate();
//     React.useEffect(() => {
//       try {
//         const isMobile = window.innerWidth <= 768;
//         const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//         const path = window.location.pathname;
//         if (isMobile && !isLoggedIn && path !== '/login' && path !== '/signup') {
//           navigate('/login');
//         }
//       } catch (e) {
//         // ignore during server-side rendering or tests
//       }
//     }, [navigate]);
//     return null;
//   };

//   return (
//     <Router>
//       {/* --- GLOBAL BACK BUTTON --- */}
//       {/* This places the button fixed at top-left on EVERY page */}
//       <GlobalBackButton />

//       <MobileLoginRedirect />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/apply" element={<Application />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         {/* Dashboard Page */}
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/attendance" element={<Attendance />} />
//         <Route path="/feed" element={<Feed />} />
//         <Route path="/tasks" element={<Tasks />} />
//         <Route path="/schedule" element={<Schedule />} />
//         <Route path="/documents" element={<Documents />} />
//         <Route path="/notifications" element={<Notifications />} />
//         <Route path="/chat" element={<Chat />} />
//         <Route path="/adminpanel" element={<AdminPanel />} />
//         <Route path="/chillzone" element={<ChillZone />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Application from './pages/Application';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Feed from './pages/Feed';
import Tasks from './pages/Tasks';
import Documents from './pages/Documents';
import Notifications from './pages/Notifications';
import AdminPanel from './pages/AdminPanel';
import Chat from './pages/Chat';
import ChillZone from './pages/ChillZone';
import Schedule from './pages/Schedule';

import BackButton from './components/BackButton'; 
import './App.css';

// --- Helper: Global Back Button ---
const GlobalBackButton = () => {
  const location = useLocation();

  // Hide Global Back Button on Home, Login, and Signup
  // (Because Login/Signup already have their own, and Home is the landing page)
  const hiddenPaths = ['/', '/login', '/signup'];
  
  if (hiddenPaths.includes(location.pathname)) {
    return null; 
  }

  return (
    <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 9999 }}>
      <BackButton />
    </div>
  );
};

// --- Helper: Redirect Mobile Users ---
const MobileLoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook into location to run check on every page change

  React.useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    // FIX: Check for 'userRole' instead of 'isLoggedIn'
    // If userRole exists in storage, we assume they are logged in.
    const isUserAuthenticated = !!localStorage.getItem('userRole'); 

    const path = location.pathname;

    // If mobile, NOT logged in, and NOT on a public page -> Kick to Login
    if (isMobile && !isUserAuthenticated && path !== '/login' && path !== '/signup' && path !== '/' && path !== '/apply') {
      console.log("Mobile Guard: Redirecting to login...");
      navigate('/login');
    }
  }, [navigate, location]); // Re-run this check whenever URL changes

  return null;
};

function App() {
  return (
    <Router>
      <GlobalBackButton />
      <MobileLoginRedirect />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Application />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/chillzone" element={<ChillZone />} />
      </Routes>
    </Router>
  );
}

export default App;