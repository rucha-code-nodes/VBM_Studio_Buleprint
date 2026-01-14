/* src/pages/Tasks.js */
import React, { useState } from 'react';
import './Tasks.css';
import BackButton from '../components/BackButton';

const Tasks = () => {
  // State for Tabs (Pending | In Progress | Completed)
  const [activeTab, setActiveTab] = useState('In Progress');

  // State for the Popup Modal
  const [selectedTask, setSelectedTask] = useState(null);

  // Mock Data (Same as before)
  const allTasks = [
    {
      id: 1,
      title: "Design Homepage UI",
      status: "In Progress",
      progress: 60,
      deadline: "2025-10-15",
      assignedBy: "David Scott",
      description: "Create high-fidelity wireframes for the new homepage using the blue color palette.",
      files: ["homepage-v1.fig", "assets.zip"]
    },
    {
      id: 2,
      title: "Fix Login API Bug",
      status: "Pending",
      progress: 0,
      deadline: "2025-10-12",
      assignedBy: "Sarah Jenkins",
      description: "Users are reporting timeout errors when logging in from mobile devices. Please investigate.",
      files: ["error-logs.txt"]
    },
    {
      id: 3,
      title: "Update Client Report",
      status: "Completed",
      progress: 100,
      deadline: "2025-09-30",
      assignedBy: "Rucha",
      description: "Compile the monthly SEO stats and send them to the client.",
      files: ["report-final.pdf"]
    },
    {
      id: 4,
      title: "Integrate Payment Gateway",
      status: "In Progress",
      progress: 30,
      deadline: "2025-10-20",
      assignedBy: "David Scott",
      description: "Set up Stripe API keys and create the checkout flow.",
      files: []
    }
  ];

  const filteredTasks = allTasks.filter(task => task.status === activeTab);

  return (
    <div className="tasks-container">
      <BackButton />
      
      <h2 className="page-title">Task Board</h2>

      {/* --- Tabs --- */}
      <div className="tabs-container">
        {['Pending', 'In Progress', 'Completed'].map(tab => (
          <button 
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- Tasks Grid --- */}
      <div className="tasks-grid">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div 
              key={task.id} 
              className="task-card" 
              onClick={() => setSelectedTask(task)}
            >
              <div className="task-header">
                <span className={`status-badge ${task.status.toLowerCase().replace(' ', '-')}`}>
                  {task.status}
                </span>
              </div>
              
              <h3 className="task-title">{task.title}</h3>
              
              <div className="progress-container">
                <div className="progress-header">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <div className="progress-track">
                  <div 
                    className="progress-fill" 
                    style={{width: `${task.progress}%`}}
                  ></div>
                </div>
              </div>

              <div className="task-footer">
                <div className="task-meta">
                  <span>📅 {task.deadline}</span>
                </div>
                <div className="task-assignee">
                  <span>👤 {task.assignedBy}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-tasks">No tasks found in this category.</div>
        )}
      </div>

      {/* --- Detail Popup Modal --- */}
      {selectedTask && (
        <div className="modal-overlay" onClick={() => setSelectedTask(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-header">
              <div>
                <span className="modal-section-title">Task Details</span>
                <h3>{selectedTask.title}</h3>
              </div>
              <button className="close-btn" onClick={() => setSelectedTask(null)}>×</button>
            </div>

            <div className="modal-body">
              <span className="modal-section-title">Description</span>
              <p className="modal-description">{selectedTask.description}</p>
              
              <div className="modal-files-section">
                <span className="modal-section-title">Attachments</span>
                {selectedTask.files.length > 0 ? (
                  <ul className="modal-files">
                    {selectedTask.files.map((file, index) => (
                      <li key={index}>📎 {file}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted" style={{fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-muted)'}}>No files attached.</p>
                )}
              </div>
              
              <div className="modal-grid">
                <div className="info-item">
                  <label>Deadline</label>
                  <span>{selectedTask.deadline}</span>
                </div>
                <div className="info-item">
                  <label>Assigned By</label>
                  <span>{selectedTask.assignedBy}</span>
                </div>
                <div className="info-item">
                  <label>Current Status</label>
                  <span style={{color: 'var(--primary-color)'}}>{selectedTask.status}</span>
                </div>
                <div className="info-item">
                  <label>Progress</label>
                  <span>{selectedTask.progress}%</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setSelectedTask(null)}>Close</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Tasks;