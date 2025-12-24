



// /* src/pages/Dashboard.js */
// import React, { useState, useEffect } from 'react';
// import QuickCard from '../components/QuickCard';
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
//   const time = currentDateTime.toLocaleTimeString('en-US');

//   // --- NAVIGATION HANDLERS (The Links) ---
  
//   const handleAttendanceClick = () => {
//     window.location.href = '/attendance'; 
//   };

//   const handleTasksClick = () => {
//     window.location.href = '/tasks'; // Fixed: Now goes to Tasks Page
//   };

//   const handleScheduleClick = () => {
//     window.location.href = '/schedule'; 
//   };

//   const handleNotificationsClick = () => {
//     window.location.href = '/notifications'; // Fixed: Now goes to Notifications Page
//   };

//   const handleFeedClick = () => {
//     window.location.href = '/feed'; // Fixed: Now goes to Feed Page
//   };
//   const handleDocument = () => {
//     window.location.href = '/documents'; // Fixed: Now goes to Feed Page
//   };
//   const handleChat = () => {
//     window.location.href = '/chat'; // Fixed: Now goes to Feed Page
//   };

//   return (
//     <div className="dashboard-layout">
      
//       {/* --- Top Section --- */}
//       <div className="dashboard-header">
//         <h1>Hello Rucha 👋</h1>
//         <p className="date-time">{today} | {time}</p>
//       </div>

//       {/* --- Quick Cards Grid --- */}
//       <div className="quick-cards-grid">
        
//         {/* 1. ATTENDANCE CARD */}
//         <div onClick={handleAttendanceClick} style={{ cursor: 'pointer' }}>
//             <QuickCard 
//               title="Today's Status" 
//               value="Punched In (9:00 AM)" 
//               icon="✅"
//               className="hover-effect"
//             />
//         </div>

//         {/* 2. MY TASKS CARD (New & Separate) */}
//         <div onClick={handleTasksClick} style={{ cursor: 'pointer' }}>
//             <QuickCard 
//               title="My Tasks" 
//               value="3 Pending" 
//               icon="📝" 
//               className="hover-effect"
//             />
//         </div>

//         {/* 3. SCHEDULE CARD */}
//         <div onClick={handleScheduleClick} style={{ cursor: 'pointer' }}>
//             <QuickCard 
//               title="Next Meeting" 
//               value="Review (2:00 PM)" 
//               icon="🗓️" 
//               className="hover-effect"
//             />
//         </div>

//         {/* 4. NOTIFICATIONS CARD (Fixed Link) */}
//         <div onClick={handleDocument} style={{ cursor: 'pointer' }}>
//           <QuickCard 
//             title="Documents" 
//             value="Check" 
//             icon="📜 " 
//             className="hover-effect"
//           />
//         </div>

//         <div onClick={handleNotificationsClick} style={{ cursor: 'pointer' }}>
//           <QuickCard 
//             title="Notifications" 
//             value="5 Unread" 
//             icon="🔔" 
//             className="hover-effect"
//           />
//         </div>
//         <div onClick={handleChat} style={{ cursor: 'pointer' }}>
//           <QuickCard 
//             title="Chat" 
//             value="5 Unread" 
//             icon="🗫 " 
//             className="hover-effect"
//           />
//         </div>

//       </div>

//       {/* --- Mid Section: Calendar & Updates --- */}
//       <div className="mid-section-grid">
        
//         {/* Mini Calendar Box -> Links to Schedule */}
//         {/* --- Attractive Mini Calendar Box -> Links to Schedule --- */}
//         <div className="mini-calendar-box" onClick={handleScheduleClick} style={{ cursor: 'pointer' }}>
//           <div className="box-header">
//             <h3>My Schedule</h3>
//             <span className="open-link">Open ↗</span>
//           </div>

//           <div className="attractive-calendar-widget">
//             {/* Calendar Header (Month) */}
//             <div className="cal-header">
//               <span>December 2025</span>
//               <div className="cal-arrows">
//                 <span>‹</span><span>›</span>
//               </div>
//             </div>

//             {/* Week Days */}
//             <div className="cal-days-row">
//               <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
//             </div>

//             {/* Dates Grid */}
//             <div className="cal-dates-grid">
//               {/* Previous month dates (faded) */}
//               <span className="fade">29</span>
//               <span className="fade">30</span>
              
//               {/* Current month dates */}
//               <span>1</span>
//               <span>2</span>
//               <span>3</span>
//               <span className="active-date">4</span> {/* Today */}
//               <span>5</span>
//               <span>6</span>
//               <span>7</span>
//               <span className="event-date">8</span> {/* Has Event */}
//               <span>9</span>
//               <span>10</span>
//               <span>11</span>
//               <span>12</span>
//               <span>13</span>
//               <span>14</span>
//               <span className="event-date">15</span> {/* Has Event */}
//               <span>16</span>
//               <span>17</span>
//               <span>18</span>
//               <span>19</span>
//               <span>20</span>
//               <span>21</span>
//               <span>22</span>
//               <span>23</span>
//               <span>24</span>
//               <span>25</span>
//               <span>26</span>
//               <span>27</span>
//               <span>28</span>
//               <span>29</span>
//               <span>30</span>
//               <span>31</span>
//             </div>
//           </div>
//         </div>

//         {/* Recent Updates Box -> Links to Feed */}
//         {/* --- Professional Recent Updates Box -> Links to Feed --- */}
//         <div className="recent-updates-box" onClick={handleFeedClick} style={{ cursor: 'pointer' }}>
//           <div className="box-header">
//             <h3>Company Feed</h3>
//             <span className="open-link">View All ↗</span>
//           </div>

//           <div className="updates-list-pro">
            
//             {/* Update Item 1: Document */}
//             <div className="update-item">
//               <div className="update-icon-box blue-bg">
//                 <span>📂</span>
//               </div>
//               <div className="update-content">
//                 <p className="update-title">New Design System v2.0</p>
//                 <p className="update-desc">Uploaded by Design Team</p>
//                 <span className="update-time">5 mins ago</span>
//               </div>
//             </div>

//             {/* Update Item 2: Announcement */}
//             <div className="update-item">
//               <div className="update-icon-box orange-bg">
//                 <span>📢</span>
//               </div>
//               <div className="update-content">
//                 <p className="update-title">Mandatory HR Training</p>
//                 <p className="update-desc">Policy updates on sexual harassment...</p>
//                 <span className="update-time">1 hour ago</span>
//               </div>
//             </div>

//             {/* Update Item 3: Meeting */}
//             <div className="update-item">
//               <div className="update-icon-box green-bg">
//                 <span>💼</span>
//               </div>
//               <div className="update-content">
//                 <p className="update-title">Project Gamma Kickoff</p>
//                 <p className="update-desc">Meeting rescheduled to 10 AM</p>
//                 <span className="update-time">2 hours ago</span>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
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

  return (
    <div className="dashboard-layout">
      <BackButton />
      
      {/* --- Top Header Section --- */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Hello, Rucha <span className="wave">👋</span></h1>
          <p className="welcome-text">Here's what's happening with your projects today.</p>
        </div>
        <div className="header-right">
          <div className="date-badge">
            <span className="icon">📅</span> {today}
          </div>
          <div className="time-badge">
            <span className="icon">⏰</span> {time}
          </div>
        </div>
      </header>

      {/* --- Quick Stats Grid --- */}
      <section className="quick-cards-grid">
        
        <div className="card-wrapper" onClick={handleAttendanceClick}>
            <QuickCard 
              title="Today's Status" 
              value="Punched In" 
              icon="✅"
              className="card-attendance"
            />
        </div>

        <div className="card-wrapper" onClick={handleTasksClick}>
            <QuickCard 
              title="My Tasks" 
              value="3 Pending" 
              icon="📝" 
              className="card-tasks"
            />
        </div>

        <div className="card-wrapper" onClick={handleScheduleClick}>
            <QuickCard 
              title="Next Meeting" 
              value="02:00 PM" 
              icon="🗓️" 
              className="card-meeting"
            />
        </div>

        <div className="card-wrapper" onClick={handleDocument}>
          <QuickCard 
            title="Documents" 
            value="Files" 
            icon="📂" 
            className="card-docs"
          />
        </div>

        <div className="card-wrapper" onClick={handleNotificationsClick}>
          <QuickCard 
            title="Notifications" 
            value="5 New" 
            icon="🔔" 
            className="card-notif"
          />
        </div>

        <div className="card-wrapper" onClick={handleChat}>
          <QuickCard 
            title="Team Chat" 
            value="Unread" 
            icon="💬" 
            className="card-chat"
          />
        </div>

      </section>

      {/* --- Main Content Split --- */}
      <section className="mid-section-grid">
        
        {/* Calendar Widget */}
        <div className="dashboard-widget calendar-widget" onClick={handleScheduleClick}>
          <div className="widget-header">
            <h3>My Schedule</h3>
            <span className="link-arrow">Open Calendar ↗</span>
          </div>

          <div className="attractive-calendar">
            <div className="cal-header">
              <span>December 2025</span>
              <div className="cal-nav"><span>‹</span><span>›</span></div>
            </div>
            <div className="cal-grid-header">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="cal-grid-body">
              <span className="prev-month">29</span><span className="prev-month">30</span>
              <span>1</span><span>2</span><span>3</span>
              <span className="today">4</span>
              <span>5</span><span>6</span><span>7</span>
              <span className="has-event">8</span>
              <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
              <span className="has-event">15</span>
            </div>
          </div>
        </div>

        {/* Feed Widget */}
        <div className="dashboard-widget feed-widget" onClick={handleFeedClick}>
          <div className="widget-header">
            <h3>Recent Updates</h3>
            <span className="link-arrow">View Feed ↗</span>
          </div>

          <div className="updates-list-pro">
            <div className="update-item">
              <div className="update-icon blue">📂</div>
              <div className="update-info">
                <h4>Design System v2.0</h4>
                <p>Uploaded by Design Team</p>
                <small>5 mins ago</small>
              </div>
            </div>

            <div className="update-item">
              <div className="update-icon orange">📢</div>
              <div className="update-info">
                <h4>Mandatory HR Training</h4>
                <p>New policy video uploaded</p>
                <small>1 hour ago</small>
              </div>
            </div>

            <div className="update-item">
              <div className="update-icon green">💼</div>
              <div className="update-info">
                <h4>Project Gamma Kickoff</h4>
                <p>Meeting moved to 10 AM</p>
                <small>2 hours ago</small>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Dashboard;