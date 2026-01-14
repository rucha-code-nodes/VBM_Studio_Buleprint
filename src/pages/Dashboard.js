



// /* src/pages/Dashboard.js */
// import React, { useState, useEffect } from 'react';
// import QuickCard from '../components/QuickCard';
// import BackButton from '../components/BackButton';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   // Update time every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const today = currentDateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//   const time = currentDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

//   // --- NAVIGATION HANDLERS ---
//   const handleAttendanceClick = () => window.location.href = '/attendance';
//   const handleTasksClick = () => window.location.href = '/tasks';
//   const handleScheduleClick = () => window.location.href = '/schedule';
//   const handleNotificationsClick = () => window.location.href = '/notifications';
//   const handleFeedClick = () => window.location.href = '/feed';
//   const handleDocument = () => window.location.href = '/documents';
//   const handleChat = () => window.location.href = '/chat';
//   const handleChillZone = () => window.location.href = '/chillzone';

//   return (
//     <div className="dashboard-layout">
//       <BackButton />
      
//       {/* --- Top Header Section --- */}
//       <header className="dashboard-header">
//         <div className="header-left">
//           <h1>Hello, Rucha <span className="wave">👋</span></h1>
//           <p className="welcome-text">Here's what's happening with your projects today.</p>
//         </div>
//         <div className="header-right">
//           <div className="date-badge">
//             <span className="icon">📅</span> {today}
//           </div>
//           <div className="time-badge">
//             <span className="icon">⏰</span> {time}
//           </div>
//         </div>
//       </header>

//       {/* --- Quick Stats Grid --- */}
//       <section className="quick-cards-grid">
        
//         <div className="card-wrapper" onClick={handleAttendanceClick}>
//             <QuickCard 
//               title="Today's Status" 
//               value="Punched In" 
//               icon="✅"
//               className="card-attendance"
//             />
//         </div>

//         <div className="card-wrapper" onClick={handleTasksClick}>
//             <QuickCard 
//               title="My Tasks" 
//               value="3 Pending" 
//               icon="📝" 
//               className="card-tasks"
//             />
//         </div>

//         <div className="card-wrapper" onClick={handleScheduleClick}>
//             <QuickCard 
//               title="Next Meeting" 
//               value="02:00 PM" 
//               icon="🗓️" 
//               className="card-meeting"
//             />
//         </div>

//         <div className="card-wrapper" onClick={handleDocument}>
//           <QuickCard 
//             title="Documents" 
//             value="Files" 
//             icon="📂" 
//             className="card-docs"
//           />
//         </div>

//         <div className="card-wrapper" onClick={handleNotificationsClick}>
//           <QuickCard 
//             title="Notifications" 
//             value="5 New" 
//             icon="🔔" 
//             className="card-notif"
//           />
//         </div>

//         <div className="card-wrapper" onClick={handleChat}>
//           <QuickCard 
//             title="Team Chat" 
//             value="Unread" 
//             icon="💬" 
//             className="card-chat"
//           />
//         </div>
//         <div className="card-wrapper" onClick={handleChillZone}>
//           <QuickCard 
//             title="Chill Zone" 
//             value="Unread" 
//             icon="😎" 
//             className="card-chat"
//           />
//         </div>

//       </section>

//       {/* --- Main Content Split --- */}
//       <section className="mid-section-grid">
        
//         {/* Calendar Widget */}
//         <div className="dashboard-widget calendar-widget" onClick={handleScheduleClick}>
//           <div className="widget-header">
//             <h3>My Schedule</h3>
//             <span className="link-arrow">Open Calendar ↗</span>
//           </div>

//           <div className="attractive-calendar">
//             <div className="cal-header">
//               <span>December 2025</span>
//               <div className="cal-nav"><span>‹</span><span>›</span></div>
//             </div>
//             <div className="cal-grid-header">
//               <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
//             </div>
//             <div className="cal-grid-body">
//               <span className="prev-month">29</span><span className="prev-month">30</span>
//               <span>1</span><span>2</span><span>3</span>
//               <span className="today">4</span>
//               <span>5</span><span>6</span><span>7</span>
//               <span className="has-event">8</span>
//               <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
//               <span className="has-event">15</span>
//             </div>
//           </div>
//         </div>

//         {/* Feed Widget */}
//         <div className="dashboard-widget feed-widget" onClick={handleFeedClick}>
//           <div className="widget-header">
//             <h3>Recent Updates</h3>
//             <span className="link-arrow">View Feed ↗</span>
//           </div>

//           <div className="updates-list-pro">
//             <div className="update-item">
//               <div className="update-icon blue">📂</div>
//               <div className="update-info">
//                 <h4>Design System v2.0</h4>
//                 <p>Uploaded by Design Team</p>
//                 <small>5 mins ago</small>
//               </div>
//             </div>

//             <div className="update-item">
//               <div className="update-icon orange">📢</div>
//               <div className="update-info">
//                 <h4>Mandatory HR Training</h4>
//                 <p>New policy video uploaded</p>
//                 <small>1 hour ago</small>
//               </div>
//             </div>

//             <div className="update-item">
//               <div className="update-icon green">💼</div>
//               <div className="update-info">
//                 <h4>Project Gamma Kickoff</h4>
//                 <p>Meeting moved to 10 AM</p>
//                 <small>2 hours ago</small>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default Dashboard;



/* src/pages/Dashboard.js */
import React, { useState, useEffect } from 'react';
import QuickCard from '../components/QuickCard';
import BackButton from '../components/BackButton';
import './Dashboard.css';

const Dashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const today = currentDateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const time = currentDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // --- NAVIGATION HANDLERS ---
  const handleAttendanceClick = () => window.location.href = '/attendance';
  const handleTasksClick = () => window.location.href = '/tasks';
  const handleScheduleClick = () => window.location.href = '/schedule';
  const handleNotificationsClick = () => window.location.href = '/notifications';
  const handleFeedClick = () => window.location.href = '/feed';
  const handleDocument = () => window.location.href = '/documents';
  const handleChat = () => window.location.href = '/chat';
  const handleChillZone = () => window.location.href = '/chillzone';

  return (
    <div className="dashboard-layout">
      <BackButton />
      
      {/* --- Top Header Section --- */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Dashboard <span className="highlight-text">Overview</span></h1>
          <p className="welcome-text">Welcome back, Rucha! Here is your daily briefing.</p>
        </div>
        <div className="header-right">
          <div className="date-badge">
            <span className="icon">📅</span> {today}
          </div>
        </div>
      </header>

      {/* --- Main Grid Layout --- */}
      <div className="dashboard-grid">
        
        {/* Row 1: Key Metrics (Big Cards) */}
        <div className="grid-section metrics-section">
          
          {/* Card 1: Attendance (Hero Card) */}
          <div className="modern-card hero-card" onClick={handleAttendanceClick}>
            <div className="card-top">
              <span className="card-label">Attendance</span>
              <span className="card-icon-lg">✅</span>
            </div>
            <div className="card-main">
              <h2>Punched In</h2>
              <p>On Time: 09:00 AM</p>
            </div>
            <div className="progress-bar-thin"><div className="fill" style={{width: '100%'}}></div></div>
          </div>

          {/* Card 2: Tasks (Data Visualization Style) */}
          <div className="modern-card" onClick={handleTasksClick}>
            <div className="card-top">
              <span className="card-label">Pending Tasks</span>
              <span className="card-icon-lg">📝</span>
            </div>
            <div className="card-center">
              <span className="big-number">3</span>
              <span className="sub-text">Tasks</span>
            </div>
            <div className="card-footer-text">Due Today</div>
          </div>

          {/* Card 3: Notifications (Alert Style) */}
          <div className="modern-card alert-card" onClick={handleNotificationsClick}>
            <div className="card-top">
              <span className="card-label">Alerts</span>
              <span className="card-icon-lg">🔔</span>
            </div>
            <div className="card-center">
              <span className="big-number">5</span>
              <span className="sub-text">New</span>
            </div>
            <div className="card-footer-text">Check Updates</div>
          </div>

        </div>

        {/* Row 2: Content Modules */}
        <div className="grid-section content-section">
          
          {/* Module 1: Schedule List */}
          <div className="modern-card list-card" onClick={handleScheduleClick}>
            <div className="card-header-row">
              <h3>Today's Schedule</h3>
              <span className="arrow-link">View All →</span>
            </div>
            <div className="schedule-list-preview">
              <div className="schedule-item">
                <span className="time">10:00 AM</span>
                <span className="event">Team Sync</span>
              </div>
              <div className="schedule-item active">
                <span className="time">02:00 PM</span>
                <span className="event">Client Meeting</span>
                <span className="status-dot"></span>
              </div>
              <div className="schedule-item">
                <span className="time">04:30 PM</span>
                <span className="event">Code Review</span>
              </div>
            </div>
          </div>

          {/* Module 2: Tools Grid */}
          <div className="modern-card tools-card">
            <div className="card-header-row">
              <h3>Quick Tools</h3>
            </div>
            <div className="tools-grid">
              <div className="tool-btn" onClick={handleDocument}>
                <span className="tool-icon">📂</span>
                <span>Docs</span>
              </div>
              <div className="tool-btn" onClick={handleChat}>
                <span className="tool-icon">💬</span>
                <span>Chat</span>
              </div>
              <div className="tool-btn" onClick={handleFeedClick}>
                <span className="tool-icon">📰</span>
                <span>Feed</span>
              </div>
              <div className="tool-btn" onClick={handleChillZone}>
                <span className="tool-icon">😎</span>
                <span>Chill</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;