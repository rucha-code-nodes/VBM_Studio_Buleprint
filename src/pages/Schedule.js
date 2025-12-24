/* src/pages/Schedule.js */
import React, { useState } from 'react';
import './Schedule.css';
import BackButton from '../components/BackButton';

const Schedule = () => {
  const [view, setView] = useState('Week'); // Day, Week, Month

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  // Mock Data: Added 'duration' to simulate height later if needed
  const events = [
    { id: 1, title: "Team Standup", time: "09:00 AM", type: "meeting", day: "Mon" },
    { id: 2, title: "Project Review", time: "02:00 PM", type: "work", day: "Mon" },
    { id: 3, title: "Client Call", time: "11:00 AM", type: "urgent", day: "Wed" },
    { id: 4, title: "Design Workshop", time: "01:00 PM", type: "workshop", day: "Fri" },
    { id: 5, title: "Lunch Break", time: "01:00 PM", type: "break", day: "Mon" },
    { id: 6, title: "Lunch Break", time: "01:00 PM", type: "break", day: "Tue" },
    { id: 7, title: "Lunch Break", time: "01:00 PM", type: "break", day: "Wed" },
    { id: 8, title: "Code Review", time: "10:00 AM", type: "work", day: "Thu" },
  ];

  // Helper to find event for a specific day & time
  const getEvent = (day, time) => {
    return events.find(e => e.day === day && e.time === time);
  };

  return (
    <div className="schedule-layout">
      
      {/* --- Main Calendar Section --- */}
      <div className="calendar-container">
        
        {/* Header */}
        <div className="schedule-header">
          <div>
            <h2>My Schedule</h2>
            <p className="date-range">December 4 — December 10, 2025</p>
          </div>
          <div className="header-actions">
            <div className="view-filters">
              {['Day', 'Week', 'Month'].map(v => (
                <button 
                  key={v} 
                  className={`filter-btn ${view === v ? 'active' : ''}`} 
                  onClick={() => setView(v)}
                >
                  {v}
                </button>
              ))}
            </div>
            <button className="btn-primary add-event-btn">+ Add Event</button>
          </div>
        </div>

        {/* The Grid */}
        <div className="calendar-grid">
          
          {/* Header Row (Days) */}
          <div className="grid-header-row">
            <div className="time-col-header"></div> {/* Empty top-left corner */}
            {weekDays.map(day => (
              <div key={day} className="day-header">
                <span className="day-name">{day}</span>
                {/* Random dates for visual realism */}
                <span className={`day-date ${day === 'Thu' ? 'today' : ''}`}>
                  {day === 'Mon' ? '4' : day === 'Tue' ? '5' : day === 'Wed' ? '6' : day === 'Thu' ? '7' : '8'}
                </span>
              </div>
            ))}
          </div>

          {/* Time Rows */}
          <div className="grid-body">
            {timeSlots.map(time => (
              <div key={time} className="grid-row">
                
                {/* Time Label Column */}
                <div className="time-label">{time}</div>

                {/* Day Columns for this Time */}
                {weekDays.map(day => {
                  const event = getEvent(day, time);
                  return (
                    <div key={`${day}-${time}`} className="grid-cell">
                      {event && (
                        <div className={`event-block ${event.type}`}>
                          <span className="event-title">{event.title}</span>
                          <span className="event-time">{event.time}</span>
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            ))}
            
            {/* Visual: Red line simulating "Current Time" (placed absolutely) */}
            <div className="current-time-line" style={{top: '42%'}}>
              <div className="red-dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Side Task Panel (Right Sidebar) --- */}
      <div className="side-panel">
        <div className="side-header">
          <h3>Tasks Queue</h3>
          <span className="badge">3 Pending</span>
        </div>

        <div className="mini-task-card priority-high">
          <div className="task-row">
            <input type="checkbox" />
            <span>Submit Q3 Report</span>
          </div>
          <span className="tag red">Urgent</span>
        </div>

        <div className="mini-task-card priority-med">
          <div className="task-row">
            <input type="checkbox" />
            <span>Email HR regarding policy</span>
          </div>
          <span className="tag orange">Medium</span>
        </div>

        <div className="mini-task-card priority-low">
          <div className="task-row">
            <input type="checkbox" />
            <span>Update Figma assets</span>
          </div>
          <span className="tag blue">Low</span>
        </div>
        
        {/* Placeholder for a small month view or notes */}
        <div className="notes-box">
          <h4>📝 Quick Notes</h4>
          <p>Don't forget to prepare slides for Friday's workshop.</p>
        </div>
      </div>

    </div>
  );
};

export default Schedule;