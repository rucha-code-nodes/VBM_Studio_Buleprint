
// import Home from './pages/Home';
// import Login from './pages/Login';
// import './App.css';

// function App() {
//   return (
//    <div className="App">
//       <Home />
//       <Login />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Application from './pages/Application';
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance';
import Feed from './pages/Feed';
import Tasks from './pages/Tasks';
import Documents from './pages/Documents';
import Notifications from './pages/Notifications';
import AdminPanel from './pages/AdminPanel'
import Chat from './pages/Chat';

import './App.css';
import Schedule from './pages/Schedule';

function App() {
  const MobileLoginRedirect = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
      try {
        const isMobile = window.innerWidth <= 768;
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const path = window.location.pathname;
        if (isMobile && !isLoggedIn && path !== '/login' && path !== '/signup') {
          navigate('/login');
        }
      } catch (e) {
        // ignore during server-side rendering or tests
      }
    }, [navigate]);
    return null;
  };

  return (
    <Router>
      <MobileLoginRedirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Application />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
