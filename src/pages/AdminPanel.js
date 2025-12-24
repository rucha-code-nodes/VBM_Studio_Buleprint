// /* src/pages/AdminPanel.js */
// import React, { useState } from 'react';
// import './AdminPanel.css';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('employees'); // 'employees', 'tasks', 'announcements'
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState(''); // 'addEmployee', 'addTask', 'addAnnouncement'

//   // --- MOCK DATA ---
//   const [employees, setEmployees] = useState([
//     { id: 1, name: "Rucha", email: "rucha@vvbm.com", role: "Developer", dept: "IT", status: "Active" },
//     { id: 2, name: "David Scott", email: "david@vvbm.com", role: "Manager", dept: "Operations", status: "Active" },
//     { id: 3, name: "Sarah Jenkins", email: "sarah@vvbm.com", role: "HR", dept: "HR", status: "Blocked" },
//   ]);

//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Design Homepage", assignedTo: "Rucha", priority: "High", deadline: "2025-10-20", status: "In Progress" },
//     { id: 2, title: "Update Policy Doc", assignedTo: "Sarah Jenkins", priority: "Medium", deadline: "2025-10-25", status: "Pending" },
//   ]);

//   const [announcements, setAnnouncements] = useState([
//     { id: 1, title: "Diwali Holiday", date: "2025-11-01", content: "Office will be closed." },
//     { id: 2, title: "Server Maintenance", date: "2025-10-15", content: "Downtime expected 2am-4am." },
//   ]);

//   // --- ACTIONS ---
//   const handleDelete = (id, type) => {
//     if (window.confirm("Are you sure you want to delete this item?")) {
//       if (type === 'employee') setEmployees(employees.filter(e => e.id !== id));
//       if (type === 'task') setTasks(tasks.filter(t => t.id !== id));
//       if (type === 'announcement') setAnnouncements(announcements.filter(a => a.id !== id));
//     }
//   };

//   const openModal = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };

//   // --- RENDER HELPERS ---
//   const renderEmployees = () => (
//     <div className="admin-section">
//       <div className="section-header">
//         <h2>Employee Management</h2>
//         <div className="header-actions">
//           <input type="text" placeholder="Search employees..." className="search-input" />
//           <button className="btn-primary" onClick={() => openModal('addEmployee')}>+ Add Employee</button>
//         </div>
//       </div>

//       <div className="table-container">
//         <table className="admin-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Department</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map(emp => (
//               <tr key={emp.id}>
//                 <td>
//                   <div className="user-cell">
//                     <div className="avatar-small">{emp.name.charAt(0)}</div>
//                     {emp.name}
//                   </div>
//                 </td>
//                 <td>{emp.email}</td>
//                 <td><span className="role-badge">{emp.role}</span></td>
//                 <td>{emp.dept}</td>
//                 <td>
//                   <span className={`status-badge ${emp.status.toLowerCase()}`}>
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td>
//                   <button className="btn-icon">✏️</button>
//                   <button className="btn-icon delete" onClick={() => handleDelete(emp.id, 'employee')}>🗑️</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   const renderTasks = () => (
//     <div className="admin-section">
//       <div className="section-header">
//         <h2>Task Assignment</h2>
//         <button className="btn-primary" onClick={() => openModal('addTask')}>+ Create Task</button>
//       </div>

//       <div className="grid-container">
//         {tasks.map(task => (
//           <div key={task.id} className="admin-card task-card">
//             <div className="card-header">
//               <h3>{task.title}</h3>
//               <span className={`priority-dot ${task.priority.toLowerCase()}`}></span>
//             </div>
//             <p><strong>Assigned To:</strong> {task.assignedTo}</p>
//             <p><strong>Deadline:</strong> {task.deadline}</p>
//             <div className="card-footer">
//               <span className={`status-text ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span>
//               <button className="btn-text delete" onClick={() => handleDelete(task.id, 'task')}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderAnnouncements = () => (
//     <div className="admin-section">
//       <div className="section-header">
//         <h2>Announcements</h2>
//         <button className="btn-primary" onClick={() => openModal('addAnnouncement')}>+ New Announcement</button>
//       </div>

//       <div className="announcement-list">
//         {announcements.map(ann => (
//           <div key={ann.id} className="admin-card announcement-card">
//             <div className="ann-content">
//               <h3>{ann.title}</h3>
//               <p>{ann.content}</p>
//               <small>Posted on: {ann.date}</small>
//             </div>
//             <div className="ann-actions">
//               <button className="btn-icon">✏️</button>
//               <button className="btn-icon delete" onClick={() => handleDelete(ann.id, 'announcement')}>🗑️</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="admin-layout">
      
//       {/* --- SIDEBAR --- */}
//       <aside className="admin-sidebar">
//         <div className="sidebar-brand">
//           <h3>Admin Panel</h3>
//         </div>
//         <nav className="admin-nav">
//           <button className={activeTab === 'employees' ? 'active' : ''} onClick={() => setActiveTab('employees')}>
//             👥 Employees
//           </button>
//           <button className={activeTab === 'tasks' ? 'active' : ''} onClick={() => setActiveTab('tasks')}>
//             📝 Assign Tasks
//           </button>
//           <button className={activeTab === 'announcements' ? 'active' : ''} onClick={() => setActiveTab('announcements')}>
//             📢 Announcements
//           </button>
//         </nav>
//         <div className="sidebar-footer">
//           <button className="logout-btn" onClick={() => window.location.href='/login'}>← Logout</button>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="admin-content">
//         {activeTab === 'employees' && renderEmployees()}
//         {activeTab === 'tasks' && renderTasks()}
//         {activeTab === 'announcements' && renderAnnouncements()}
//       </main>

//       {/* --- MODAL (Generic) --- */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <div className="modal-header">
//               <h3>
//                 {modalType === 'addEmployee' && 'Add New Employee'}
//                 {modalType === 'addTask' && 'Assign New Task'}
//                 {modalType === 'addAnnouncement' && 'Post Announcement'}
//               </h3>
//               <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
//             </div>
            
//             <div className="modal-body">
//               {/* Conditional Forms */}
//               {modalType === 'addEmployee' && (
//                 <form className="admin-form">
//                   <input type="text" placeholder="Full Name" />
//                   <input type="email" placeholder="Email Address" />
//                   <div className="form-row">
//                     <select><option>Developer</option><option>Manager</option><option>HR</option></select>
//                     <input type="text" placeholder="Department" />
//                   </div>
//                   <input type="file" />
//                 </form>
//               )}

//               {modalType === 'addTask' && (
//                 <form className="admin-form">
//                   <input type="text" placeholder="Task Title" />
//                   <textarea placeholder="Description"></textarea>
//                   <div className="form-row">
//                     <input type="date" />
//                     <select>
//                       <option>High Priority</option>
//                       <option>Medium Priority</option>
//                       <option>Low Priority</option>
//                     </select>
//                   </div>
//                   <select>
//                     <option>Assign to Rucha</option>
//                     <option>Assign to David</option>
//                   </select>
//                 </form>
//               )}

//               {modalType === 'addAnnouncement' && (
//                 <form className="admin-form">
//                   <input type="text" placeholder="Title" />
//                   <textarea placeholder="Announcement Content"></textarea>
//                 </form>
//               )}
//             </div>

//             <div className="modal-footer">
//               <button className="btn-primary" onClick={() => setShowModal(false)}>Save</button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default AdminPanel;



import React, { useState } from 'react';
import './AdminPanel.css';
import BackButton from '../components/BackButton';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('employees'); 
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedRole, setSelectedRole] = useState('Developer'); // For Role Page

  // --- MOCK DATA ---
  const [employees, setEmployees] = useState([
    { id: 1, name: "Rucha", email: "rucha@vvbm.com", role: "Developer", dept: "IT", status: "Active" },
    { id: 2, name: "David Scott", email: "david@vvbm.com", role: "Manager", dept: "Operations", status: "Active" },
    { id: 3, name: "Sarah Jenkins", email: "sarah@vvbm.com", role: "HR", dept: "HR", status: "Blocked" },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: "Design Homepage", assignedTo: "Rucha", priority: "High", deadline: "2025-10-20", status: "In Progress" },
    { id: 2, title: "Update Policy Doc", assignedTo: "Sarah Jenkins", priority: "Medium", deadline: "2025-10-25", status: "Pending" },
  ]);

  const [projects] = useState([
    { id: 1, name: "VVBM Portal", team: ["Rucha", "David"], progress: 75, deadline: "2025-12-01", taskCount: 24, desc: "Internal management system development." },
    { id: 2, name: "Mobile App v2", team: ["Rucha"], progress: 30, deadline: "2026-02-15", taskCount: 12, desc: "Revamping the customer facing app." },
  ]);

  const [attendance] = useState([
    { date: "2025-10-01", in: "09:00 AM", out: "06:00 PM", total: "9h", status: "On Time" },
    { date: "2025-10-02", in: "09:15 AM", out: "06:15 PM", total: "9h", status: "Late" },
    { date: "2025-10-03", in: "09:00 AM", out: "05:00 PM", total: "8h", status: "Early Leave" },
  ]);

  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Diwali Holiday", date: "2025-11-01", content: "Office will be closed." },
    { id: 2, title: "Server Maintenance", date: "2025-10-15", content: "Downtime expected 2am-4am." },
  ]);

  const [documents] = useState([
    { id: 1, name: "Employee_Handbook.pdf", type: "pdf", uploadedBy: "Admin", date: "2025-01-10" },
    { id: 2, name: "Q3_Financials.xlsx", type: "excel", uploadedBy: "David", date: "2025-09-15" },
  ]);

  const rolesList = ['Admin', 'Mentor', 'Developer', 'HR', 'Designer'];
  const [permissions, setPermissions] = useState({
    viewDashboard: true,
    manageTasks: true,
    uploadDocs: false,
    postAnnouncements: false,
    accessAdmin: false,
    chatAccess: true
  });

  // --- ACTIONS ---
  const handleDelete = (id, type) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      if (type === 'employee') setEmployees(employees.filter(e => e.id !== id));
      if (type === 'task') setTasks(tasks.filter(t => t.id !== id));
      if (type === 'announcement') setAnnouncements(announcements.filter(a => a.id !== id));
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const togglePermission = (perm) => {
    setPermissions(prev => ({ ...prev, [perm]: !prev[perm] }));
  };

  // --- 1. EMPLOYEES ---
  const renderEmployees = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>Employee Management</h2>
        <div className="header-actions">
          <input type="text" placeholder="Search employees..." className="search-input" />
          <select className="filter-select"><option>All Roles</option><option>Developer</option><option>HR</option></select>
          <button className="btn-primary" onClick={() => openModal('addEmployee')}>+ Add Employee</button>
        </div>
      </div>
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr><th>Photo</th><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td><div className="avatar-small">{emp.name.charAt(0)}</div></td>
                <td><strong>{emp.name}</strong></td>
                <td>{emp.email}</td>
                <td><span className="role-badge">{emp.role}</span></td>
                <td>{emp.dept}</td>
                <td><span className={`status-badge ${emp.status.toLowerCase()}`}>{emp.status}</span></td>
                <td>
                  <button className="btn-icon">✏️</button>
                  <button className="btn-icon delete" onClick={() => handleDelete(emp.id, 'employee')}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // --- 2. TASKS ---
  const renderTasks = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>Task Assignment</h2>
        <button className="btn-primary" onClick={() => openModal('addTask')}>+ Create Task</button>
      </div>
      <div className="grid-container">
        {tasks.map(task => (
          <div key={task.id} className="admin-card task-card">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className={`priority-dot ${task.priority.toLowerCase()}`}></span>
            </div>
            <p><strong>Assigned To:</strong> {task.assignedTo}</p>
            <p><strong>Deadline:</strong> {task.deadline}</p>
            <div className="card-footer">
              <span className={`status-text ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span>
              <button className="btn-text delete" onClick={() => handleDelete(task.id, 'task')}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- 3. PROJECTS ---
  const renderProjects = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>Project Management</h2>
        <button className="btn-primary" onClick={() => openModal('addProject')}>+ Create Project</button>
      </div>
      <div className="grid-container">
        {projects.map(proj => (
          <div key={proj.id} className="admin-card project-card">
            <h3>{proj.name}</h3>
            <p className="proj-desc">{proj.desc}</p>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{width: `${proj.progress}%`}}></div>
            </div>
            <div className="proj-stats">
              <span>Tasks: {proj.taskCount}</span>
              <span>Due: {proj.deadline}</span>
            </div>
            <div className="team-avatars">
              {proj.team.map((m, i) => <div key={i} className="avatar-tiny" title={m}>{m.charAt(0)}</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- 4. ATTENDANCE ---
  const renderAttendance = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>Attendance Reports</h2>
        <div className="header-actions">
           <select className="filter-select"><option>Select Employee</option><option>Rucha</option></select>
           <input type="month" className="search-input" />
        </div>
      </div>
      <div className="chart-placeholder">
         {/* Placeholder for Graph */}
         <div className="fake-graph">
            {[60, 80, 45, 90, 70, 85, 60].map((h, i) => (
                <div key={i} className="graph-bar" style={{height: `${h}%`}}></div>
            ))}
         </div>
         <p style={{textAlign:'center', marginTop: '10px', color:'#64748B'}}>Attendance Trends (Last 7 Days)</p>
      </div>
      <div className="table-container" style={{marginTop: '20px'}}>
        <table className="admin-table">
          <thead><tr><th>Date</th><th>Check In</th><th>Check Out</th><th>Total Hours</th><th>Status</th></tr></thead>
          <tbody>
            {attendance.map((rec, i) => (
              <tr key={i}>
                <td>{rec.date}</td><td>{rec.in}</td><td>{rec.out}</td><td>{rec.total}</td>
                <td><span className={`status-badge ${rec.status.toLowerCase().replace(' ', '')}`}>{rec.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // --- 5. ANNOUNCEMENTS ---
  const renderAnnouncements = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>Announcements</h2>
        <button className="btn-primary" onClick={() => openModal('addAnnouncement')}>+ New Announcement</button>
      </div>
      <div className="announcement-list">
        {announcements.map(ann => (
          <div key={ann.id} className="admin-card announcement-card">
            <div className="ann-content">
              <h3>{ann.title}</h3>
              <p>{ann.content}</p>
              <small>Posted on: {ann.date}</small>
            </div>
            <div className="ann-actions">
              <button className="btn-icon">✏️</button>
              <button className="btn-icon delete" onClick={() => handleDelete(ann.id, 'announcement')}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- 6. DOCUMENTS ---
  const renderDocuments = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>Document Management</h2>
        <button className="btn-primary" onClick={() => alert("Upload logic")}>☁️ Upload File</button>
      </div>
      <div className="docs-layout">
        <div className="docs-folders">
           <h4>Folders</h4>
           <ul>
             <li className="active">📁 Company Policies</li>
             <li>📁 HR Documents</li>
             <li>📁 Financials</li>
             <li>📁 Training Material</li>
           </ul>
           <button className="btn-text">+ Create Folder</button>
        </div>
        <div className="docs-files">
           <table className="admin-table">
             <thead><tr><th>Name</th><th>Type</th><th>Uploaded By</th><th>Date</th><th>Actions</th></tr></thead>
             <tbody>
               {documents.map(doc => (
                 <tr key={doc.id}>
                   <td>{doc.name}</td><td>{doc.type}</td><td>{doc.uploadedBy}</td><td>{doc.date}</td>
                   <td><button className="btn-text delete">Delete</button></td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );

  // --- 7. ROLES & PERMISSIONS ---
  const renderRoles = () => (
    <div className="admin-section">
      <div className="section-header"><h2>Roles & Permissions</h2></div>
      <div className="roles-layout">
        <div className="roles-list">
           {rolesList.map(r => (
             <div key={r} className={`role-item ${selectedRole === r ? 'active' : ''}`} onClick={() => setSelectedRole(r)}>
               {r}
             </div>
           ))}
        </div>
        <div className="permissions-panel">
           <h3>Permissions for: <span className="text-blue">{selectedRole}</span></h3>
           <div className="perm-grid">
             {Object.keys(permissions).map(perm => (
               <div key={perm} className="perm-row">
                 <span>{perm.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                 <label className="switch">
                   <input type="checkbox" checked={permissions[perm]} onChange={() => togglePermission(perm)} />
                   <span className="slider round"></span>
                 </label>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );

  // --- 8. SETTINGS ---
  const renderSettings = () => (
    <div className="admin-section">
      <div className="section-header"><h2>System Settings</h2></div>
      <div className="settings-grid">
         <div className="admin-card settings-card">
            <h3>🏢 Company Info</h3>
            <input type="text" className="admin-input" defaultValue="VVBM Technologies" />
            <input type="text" className="admin-input" defaultValue="contact@vvbm.com" />
            <button className="btn-primary small">Save</button>
         </div>
         <div className="admin-card settings-card">
            <h3>🎨 Branding</h3>
            <p>Upload Logo</p>
            <input type="file" className="admin-input" />
            <button className="btn-primary small">Update Logo</button>
         </div>
         <div className="admin-card settings-card">
            <h3>🔔 Notification Settings</h3>
            <div className="perm-row"><span>Email Alerts</span> <input type="checkbox" defaultChecked /></div>
            <div className="perm-row"><span>System Popups</span> <input type="checkbox" defaultChecked /></div>
         </div>
         <div className="admin-card settings-card">
            <h3>💾 Backup & Data</h3>
            <button className="btn-outline">Download Full Backup</button>
            <button className="btn-text delete" style={{marginTop: '10px'}}>Reset System Data</button>
         </div>
      </div>
    </div>
  );

  return (
    <div className="admin-layout">
      <BackButton />
      
      {/* --- SIDEBAR --- */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand"><h3>Admin Panel</h3></div>
        <nav className="admin-nav">
          <button className={activeTab === 'employees' ? 'active' : ''} onClick={() => setActiveTab('employees')}>👥 Employees</button>
          <button className={activeTab === 'tasks' ? 'active' : ''} onClick={() => setActiveTab('tasks')}>📝 Tasks</button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>🚀 Projects</button>
          <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>📊 Attendance</button>
          <button className={activeTab === 'announcements' ? 'active' : ''} onClick={() => setActiveTab('announcements')}>📢 Announcements</button>
          <button className={activeTab === 'documents' ? 'active' : ''} onClick={() => setActiveTab('documents')}>📂 Documents</button>
          <button className={activeTab === 'roles' ? 'active' : ''} onClick={() => setActiveTab('roles')}>🛡️ Roles</button>
          <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>⚙️ Settings</button>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={() => window.location.href='/login'}>← Logout</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="admin-content">
        {activeTab === 'employees' && renderEmployees()}
        {activeTab === 'tasks' && renderTasks()}
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'attendance' && renderAttendance()}
        {activeTab === 'announcements' && renderAnnouncements()}
        {activeTab === 'documents' && renderDocuments()}
        {activeTab === 'roles' && renderRoles()}
        {activeTab === 'settings' && renderSettings()}
      </main>

      {/* --- MODAL --- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3>
                {modalType === 'addEmployee' && 'Add New Employee'}
                {modalType === 'addTask' && 'Assign New Task'}
                {modalType === 'addProject' && 'Create New Project'}
                {modalType === 'addAnnouncement' && 'Post Announcement'}
              </h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            
            <div className="modal-body">
              {modalType === 'addEmployee' && (
                <form className="admin-form">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email Address" />
                  <input type="password" placeholder="Initial Password" />
                  <div className="form-row">
                    <select><option>Developer</option><option>Manager</option><option>HR</option></select>
                    <input type="text" placeholder="Department" />
                  </div>
                  <input type="text" placeholder="Skills (comma separated)" />
                  <label>Profile Photo:</label>
                  <input type="file" />
                </form>
              )}

              {modalType === 'addTask' && (
                <form className="admin-form">
                  <input type="text" placeholder="Task Title" />
                  <textarea placeholder="Description"></textarea>
                  <div className="form-row">
                    <input type="date" />
                    <select><option>High</option><option>Medium</option><option>Low</option></select>
                  </div>
                  <select><option>Assign to Rucha</option><option>Assign to David</option></select>
                  <label>Attach File:</label>
                  <input type="file" />
                </form>
              )}

              {modalType === 'addProject' && (
                  <form className="admin-form">
                      <input type="text" placeholder="Project Name" />
                      <textarea placeholder="Description"></textarea>
                      <div className="form-row">
                          <input type="date" placeholder="Deadline" />
                          <input type="number" placeholder="Initial Team Size" />
                      </div>
                  </form>
              )}

              {modalType === 'addAnnouncement' && (
                <form className="admin-form">
                  <input type="text" placeholder="Title" />
                  <textarea placeholder="Announcement Content"></textarea>
                  <label>Image/Video:</label>
                  <input type="file" />
                </form>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn-primary" onClick={() => setShowModal(false)}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;