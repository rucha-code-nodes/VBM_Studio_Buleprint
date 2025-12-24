/* src/pages/Notifications.js */
import React, { useState } from 'react';
import './Notifications.css';
import BackButton from '../components/BackButton';

const Notifications = () => {
  const [filter, setFilter] = useState('all'); // 'all' or 'unread'
  
  // Mock Data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'task',
      title: 'New Task Assigned',
      text: 'Complete the Homepage UI design by Monday morning.',
      time: '2 hours ago',
      isUnread: true,
      sender: 'David Scott'
    },
    {
      id: 2,
      type: 'meeting',
      title: 'Meeting Rescheduled',
      text: 'The Project Gamma kickoff has been moved to 10:00 AM.',
      time: '4 hours ago',
      isUnread: true,
      sender: 'System'
    },
    {
      id: 3,
      type: 'announcement',
      title: 'Holiday Announcement',
      text: 'The office will be closed this Friday for the company retreat.',
      time: '1 day ago',
      isUnread: false,
      sender: 'HR Department'
    },
    {
      id: 4,
      type: 'task',
      title: 'Task Deadline Approaching',
      text: 'Submit your monthly expense report.',
      time: '1 day ago',
      isUnread: false,
      sender: 'Finance'
    },
    {
      id: 5,
      type: 'security',
      title: 'Password Expiring Soon',
      text: 'Please update your portal password within 3 days.',
      time: '2 days ago',
      isUnread: false,
      sender: 'IT Admin'
    }
  ]);

  // Filter logic
  const displayedNotifications = filter === 'unread' 
    ? notifications.filter(n => n.isUnread) 
    : notifications;

  // Actions
  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isUnread: false } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isUnread: false })));
  };

  const deleteNotification = (id, e) => {
    e.stopPropagation();
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Helper: Get Icon & Color based on type
  const getTypeStyles = (type) => {
    switch(type) {
      case 'task': return { icon: '📝', class: 'type-blue' };
      case 'meeting': return { icon: '🗓️', class: 'type-purple' };
      case 'announcement': return { icon: '📢', class: 'type-orange' };
      case 'security': return { icon: '🔒', class: 'type-red' };
      default: return { icon: '🔔', class: 'type-gray' };
    }
  };

  return (
    <div className="notif-container">
      
      {/* Header */}
      <div className="notif-header">
        <div>
          <h2>Notifications</h2>
          <p className="notif-subtitle">You have {notifications.filter(n => n.isUnread).length} unread messages</p>
        </div>
        <div className="header-actions">
          <button className="btn-text" onClick={markAllAsRead}>Mark all as read</button>
          <div className="notif-filters">
            <button 
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-pill ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread
            </button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="notif-list">
        {displayedNotifications.length > 0 ? (
          displayedNotifications.map(notif => {
            const { icon, class: colorClass } = getTypeStyles(notif.type);
            
            return (
              <div 
                key={notif.id} 
                className={`notif-card ${notif.isUnread ? 'unread' : ''}`}
                onClick={() => markAsRead(notif.id)}
              >
                {/* Unread Dot */}
                {notif.isUnread && <div className="unread-dot"></div>}

                {/* Icon */}
                <div className={`notif-icon-box ${colorClass}`}>
                  {icon}
                </div>

                {/* Content */}
                <div className="notif-content">
                  <div className="notif-top-row">
                    <h4 className="notif-title">{notif.title}</h4>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                  <p className="notif-text">{notif.text}</p>
                  <span className="notif-sender">From: {notif.sender}</span>
                </div>

                {/* Delete Action (Hover) */}
                <button 
                  className="delete-btn" 
                  title="Remove"
                  onClick={(e) => deleteNotification(notif.id, e)}
                >
                  ×
                </button>
              </div>
            );
          })
        ) : (
          <div className="empty-notif">
            <span className="empty-icon">🔕</span>
            <p>No notifications found.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Notifications;