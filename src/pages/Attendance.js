/* src/pages/Attendance.js */
import React, { useState, useEffect } from 'react';
import './Attendance.css';
import BackButton from '../components/BackButton';

const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [totalHours, setTotalHours] = useState(0); 
  const [lastCheckIn, setLastCheckIn] = useState('--:--');
  const [lastCheckOut, setLastCheckOut] = useState('--:--');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fake weekly data with different statuses
  const weeklyData = [
    { day: 'Mon', hours: 8.5, status: 'ontime' },
    { day: 'Tue', hours: 7.0, status: 'early' },
    { day: 'Wed', hours: 9.0, status: 'ontime' },
    { day: 'Thu', hours: 8.0, status: 'ontime' },
    { day: 'Fri', hours: 5.5, status: 'active' }, // Today
    { day: 'Sat', hours: 0, status: 'off' },
    { day: 'Sun', hours: 0, status: 'off' },
  ];

  const handlePunch = () => {
    const timeStr = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    if (!isCheckedIn) {
      setIsCheckedIn(true);
      setLastCheckIn(timeStr);
    } else {
      setIsCheckedIn(false);
      setLastCheckOut(timeStr);
      setTotalHours(prev => prev + 4.5); // Simulation
    }
  };

  return (
    <div className="attendance-layout">
      <BackButton />
      
      {/* --- Main Card: Punch Interface --- */}
      <div className="punch-card-container">
        
        {/* Header Section */}
        <div className="punch-header">
          <div>
            <h2 className="page-title">Attendance</h2>
            <p className="date-subtext">
              {currentTime.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          <div className="live-clock">
            {currentTime.toLocaleTimeString('en-US', { hour12: false })}
          </div>
        </div>

        {/* The Big Button UI */}
        <div className="punch-interaction-area">
          <div className={`ring-container ${isCheckedIn ? 'active' : ''}`}>
            <div className="ring-pulse"></div>
            <button 
              className={`main-punch-btn ${isCheckedIn ? 'btn-out' : 'btn-in'}`}
              onClick={handlePunch}
            >
              <div className="btn-content">
                <span className="icon">{isCheckedIn ? "🛑" : "👆"}</span>
                <span className="text">{isCheckedIn ? "Punch OUT" : "Punch IN"}</span>
              </div>
            </button>
          </div>

          <div className="status-indicator">
            <span className={`status-dot ${isCheckedIn ? 'online' : 'offline'}`}></span>
            <span>Current Status: <strong>{isCheckedIn ? "Working" : "Not Checked In"}</strong></span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-dashboard">
          <div className="stat-box">
            <span className="stat-label">Check In</span>
            <span className="stat-value text-green">{lastCheckIn}</span>
          </div>
          <div className="stat-box border-sides">
            <span className="stat-label">Check Out</span>
            <span className="stat-value text-red">{lastCheckOut}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Total Hrs</span>
            <span className="stat-value text-blue">{totalHours} <small>hrs</small></span>
          </div>
        </div>

        {/* Location Footer */}
        <div className="location-footer">
          <span className="location-icon">📍</span>
          <span>Detected Location: <strong>Headquarters (192.168.1.15)</strong></span>
          <span className="secure-badge">🔒 Secure</span>
        </div>
      </div>

      {/* --- Side Panel: Analytics --- */}
      <div className="analytics-card-container">
        <h3 className="section-title">Weekly Activity</h3>
        
        <div className="chart-wrapper">
          {weeklyData.map((data, idx) => (
            <div key={idx} className="chart-column">
              <div className="bar-container">
                <div 
                  className={`bar-fill ${data.status}`} 
                  style={{ height: `${(data.hours / 10) * 100}%` }}
                >
                  <span className="tooltip">{data.hours}h</span>
                </div>
              </div>
              <span className="day-label">{data.day}</span>
            </div>
          ))}
        </div>

        <div className="chart-legend">
          <div className="legend-item"><span className="dot ontime"></span>On Time</div>
          <div className="legend-item"><span className="dot early"></span>Early</div>
        </div>

        <div className="summary-box">
          <h4>Weekly Summary</h4>
          <p>You have worked <strong>38 hours</strong> this week. Great consistency!</p>
          <div className="progress-bar-bg">
            <div className="progress-bar-val" style={{width: '85%'}}></div>
          </div>
          <small style={{color: 'var(--text-muted)'}}>Target: 45 Hours</small>
        </div>
      </div>

    </div>
  );
};

export default Attendance;