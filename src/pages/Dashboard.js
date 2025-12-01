




// import React, { useState, useEffect } from 'react';
// // We will use this later to switch pages
// // import { useNavigate } from 'react-router-dom'; 
// import QuickCard from '../components/QuickCard';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());
//   // const navigate = useNavigate(); // For future page switching

//   // Update time every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const today = currentDateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//   const time = currentDateTime.toLocaleTimeString('en-US');

//   // --- NEW FUNCTION TO HANDLE NAVIGATION ---
//   const handleAttendanceClick = () => {
//     console.log("Navigating to Attendance Page...");
//     // Later, when we set up the Router, you will use:
//     // navigate('/attendance');
//     window.location.href = '/attendance'; // Temporary way to test if you have routing set up
//   };

//   const handleFeed = () => {
//     console.log("Navigating to Feed Page...");
//     // Later, when we set up the Router, you will use:
//     // navigate('/attendance');
//     window.location.href = '/feed'; // Temporary way to test if you have routing set up
//   };

//   const handleScheduleClick = () => {
//     window.location.href = '/schedule'; 
//   };  

//   return (
//     <div className="dashboard-layout">
      
//       {/* --- Top Section --- */}
//       <div className="dashboard-header">
//         <h1>Hello Rucha 👋</h1>
//         <p className="date-time">{today} | {time}</p>
//       </div>

//       {/* --- Quick Cards (3–4 boxes) --- */}
//       <div className="quick-cards-grid">
        
//         {/* --- LINKED CARD: CLICKS TO ATTENDANCE PAGE --- */}
//         {/* We wrap this card in a clickable div or add onClick to it */}
//         <div onClick={handleAttendanceClick} style={{ cursor: 'pointer' }}>
//             <QuickCard 
//               title="Today's Status" 
//               value="Punched In (9:00 AM)" 
//               icon="✅"
//               className="hover-effect" // Optional extra class
//             />
//         </div>

//         {/* Total Hours Worked */}
//         <QuickCard 
//           title="Total Hours" 
//           value="4.5 / 8 Hrs" 
//           icon="⏳"
//         />
//         {/* Upcoming Meeting */}
//         <QuickCard 
//           title="Next Meeting" 
//           value="Project Review (2:00 PM)" 
//           icon="🗓️"
//         />
//         {/* Notifications Count */}
//         <div onClick={handleFeed} style={{ cursor: 'pointer' }}>
//   <QuickCard 
//     title="Notifications" 
//     value="5 Unread" 
//     icon="🔔"
//   />
// </div>

// {/* Schedule Link (New) - You can also link this card if you want */}
//         <div onClick={handleScheduleClick} style={{ cursor: 'pointer' }}>
//             <QuickCard title="Next Meeting" value="Project Review (2:00 PM)" icon="🗓️" />
//         </div>

//       </div>

//       {/* --- Mid Section: Calendar & Updates --- */}
//       <div className="mid-section-grid">
        
//         {/* --- Mini Calendar --- */}
//         <div className="mini-calendar-box" onClick={handleScheduleClick} style={{ cursor: 'pointer' }}>
//           <h3>My Schedule ↗</h3> 
//           <div className="calendar-placeholder">
//             {/* You can keep this simple or put a static image/grid here */}
//             <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:'5px', textAlign:'center', fontSize:'0.8rem'}}>
//                 <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
//                 <span style={{color:'#ccc'}}>29</span><span>30</span><span>1</span><span>2</span><span>3</span><span style={{background:'#2563EB', color:'white', borderRadius:'50%'}}>4</span><span>5</span>
//             </div>
//             <p style={{marginTop:'20px', fontSize:'0.9rem', color:'#64748B'}}>Click to view full calendar</p>
//           </div>
//         </div>

//         {/* --- Recent Updates --- */}
//         <div className="recent-updates-box">
//           <h3>Recent Company Updates</h3>
//           <ul className="updates-list">
//             <li>🎉 New design system documents uploaded. (5m ago)</li>
//             <li>📢 Mandatory HR policy training on Friday. (1h ago)</li>
//             <li>💼 Project Gamma Kickoff Meeting moved to 10 AM. (2h ago)</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



/* src/pages/Dashboard.js */
import React, { useState, useEffect } from 'react';
import QuickCard from '../components/QuickCard';
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
  const time = currentDateTime.toLocaleTimeString('en-US');

  // --- NAVIGATION HANDLERS (The Links) ---
  
  const handleAttendanceClick = () => {
    window.location.href = '/attendance'; 
  };

  const handleTasksClick = () => {
    window.location.href = '/tasks'; // Fixed: Now goes to Tasks Page
  };

  const handleScheduleClick = () => {
    window.location.href = '/schedule'; 
  };

  const handleNotificationsClick = () => {
    window.location.href = '/notifications'; // Fixed: Now goes to Notifications Page
  };

  const handleFeedClick = () => {
    window.location.href = '/feed'; // Fixed: Now goes to Feed Page
  };
  const handleDocument = () => {
    window.location.href = '/documents'; // Fixed: Now goes to Feed Page
  };
  const handleChat = () => {
    window.location.href = '/chat'; // Fixed: Now goes to Feed Page
  };

  return (
    <div className="dashboard-layout">
      
      {/* --- Top Section --- */}
      <div className="dashboard-header">
        <h1>Hello Rucha 👋</h1>
        <p className="date-time">{today} | {time}</p>
      </div>

      {/* --- Quick Cards Grid --- */}
      <div className="quick-cards-grid">
        
        {/* 1. ATTENDANCE CARD */}
        <div onClick={handleAttendanceClick} style={{ cursor: 'pointer' }}>
            <QuickCard 
              title="Today's Status" 
              value="Punched In (9:00 AM)" 
              icon="✅"
              className="hover-effect"
            />
        </div>

        {/* 2. MY TASKS CARD (New & Separate) */}
        <div onClick={handleTasksClick} style={{ cursor: 'pointer' }}>
            <QuickCard 
              title="My Tasks" 
              value="3 Pending" 
              icon="📝" 
              className="hover-effect"
            />
        </div>

        {/* 3. SCHEDULE CARD */}
        <div onClick={handleScheduleClick} style={{ cursor: 'pointer' }}>
            <QuickCard 
              title="Next Meeting" 
              value="Review (2:00 PM)" 
              icon="🗓️" 
              className="hover-effect"
            />
        </div>

        {/* 4. NOTIFICATIONS CARD (Fixed Link) */}
        <div onClick={handleDocument} style={{ cursor: 'pointer' }}>
          <QuickCard 
            title="Documents" 
            value="Check" 
            icon="📜 " 
            className="hover-effect"
          />
        </div>

        <div onClick={handleNotificationsClick} style={{ cursor: 'pointer' }}>
          <QuickCard 
            title="Notifications" 
            value="5 Unread" 
            icon="🔔" 
            className="hover-effect"
          />
        </div>
        <div onClick={handleChat} style={{ cursor: 'pointer' }}>
          <QuickCard 
            title="Chat" 
            value="5 Unread" 
            icon="🗫 " 
            className="hover-effect"
          />
        </div>

      </div>

      {/* --- Mid Section: Calendar & Updates --- */}
      <div className="mid-section-grid">
        
        {/* Mini Calendar Box -> Links to Schedule */}
        {/* --- Attractive Mini Calendar Box -> Links to Schedule --- */}
        <div className="mini-calendar-box" onClick={handleScheduleClick} style={{ cursor: 'pointer' }}>
          <div className="box-header">
            <h3>My Schedule</h3>
            <span className="open-link">Open ↗</span>
          </div>

          <div className="attractive-calendar-widget">
            {/* Calendar Header (Month) */}
            <div className="cal-header">
              <span>December 2025</span>
              <div className="cal-arrows">
                <span>‹</span><span>›</span>
              </div>
            </div>

            {/* Week Days */}
            <div className="cal-days-row">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>

            {/* Dates Grid */}
            <div className="cal-dates-grid">
              {/* Previous month dates (faded) */}
              <span className="fade">29</span>
              <span className="fade">30</span>
              
              {/* Current month dates */}
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span className="active-date">4</span> {/* Today */}
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span className="event-date">8</span> {/* Has Event */}
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span className="event-date">15</span> {/* Has Event */}
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>
              <span>21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
              <span>25</span>
              <span>26</span>
              <span>27</span>
              <span>28</span>
              <span>29</span>
              <span>30</span>
              <span>31</span>
            </div>
          </div>
        </div>

        {/* Recent Updates Box -> Links to Feed */}
        {/* --- Professional Recent Updates Box -> Links to Feed --- */}
        <div className="recent-updates-box" onClick={handleFeedClick} style={{ cursor: 'pointer' }}>
          <div className="box-header">
            <h3>Company Feed</h3>
            <span className="open-link">View All ↗</span>
          </div>

          <div className="updates-list-pro">
            
            {/* Update Item 1: Document */}
            <div className="update-item">
              <div className="update-icon-box blue-bg">
                <span>📂</span>
              </div>
              <div className="update-content">
                <p className="update-title">New Design System v2.0</p>
                <p className="update-desc">Uploaded by Design Team</p>
                <span className="update-time">5 mins ago</span>
              </div>
            </div>

            {/* Update Item 2: Announcement */}
            <div className="update-item">
              <div className="update-icon-box orange-bg">
                <span>📢</span>
              </div>
              <div className="update-content">
                <p className="update-title">Mandatory HR Training</p>
                <p className="update-desc">Policy updates on sexual harassment...</p>
                <span className="update-time">1 hour ago</span>
              </div>
            </div>

            {/* Update Item 3: Meeting */}
            <div className="update-item">
              <div className="update-icon-box green-bg">
                <span>💼</span>
              </div>
              <div className="update-content">
                <p className="update-title">Project Gamma Kickoff</p>
                <p className="update-desc">Meeting rescheduled to 10 AM</p>
                <span className="update-time">2 hours ago</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;