/* src/pages/Documents.js */
import React, { useState } from 'react';
import './Documents.css';
import BackButton from '../components/BackButton';

const Documents = () => {
  const [activeFolder, setActiveFolder] = useState('All Files');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'name'

  // Mock Data: Folders
  const folders = [
    { id: 'all', name: 'All Files', icon: '🗂️' },
    { id: 'policies', name: 'Company Policies', icon: '⚖️' },
    { id: 'reports', name: 'Monthly Reports', icon: '📊' },
    { id: 'designs', name: 'Design Assets', icon: '🎨' },
    { id: 'invoices', name: 'Invoices', icon: '🧾' },
  ];

  // Mock Data: Files
  const allFiles = [
    { id: 1, name: "Employee_Handbook_2025.pdf", type: "pdf", folder: "policies", size: "2.4 MB", date: "2025-10-01", uploadedBy: "Sarah Jenkins" },
    { id: 2, name: "Q3_Financial_Summary.xlsx", type: "excel", folder: "reports", size: "1.1 MB", date: "2025-10-05", uploadedBy: "David Scott" },
    { id: 3, name: "Logo_Pack_Final.zip", type: "zip", folder: "designs", size: "15 MB", date: "2025-09-28", uploadedBy: "Rucha" },
    { id: 4, name: "Meeting_Notes_Oct.docx", type: "doc", folder: "reports", size: "450 KB", date: "2025-10-10", uploadedBy: "Amit" },
    { id: 5, name: "Leave_Policy_v2.pdf", type: "pdf", folder: "policies", size: "1.2 MB", date: "2025-08-15", uploadedBy: "Sarah Jenkins" },
    { id: 6, name: "Dashboard_Mockup.png", type: "img", folder: "designs", size: "3.5 MB", date: "2025-10-12", uploadedBy: "Rucha" },
  ];

  // Logic: Filter files based on active folder
  const filteredFiles = activeFolder === 'All Files' 
    ? allFiles 
    : allFiles.filter(f => folders.find(fold => fold.name === activeFolder).id === f.folder);

  // Logic: Sort files
  const sortedFiles = [...filteredFiles].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return new Date(b.date) - new Date(a.date); // Date descending
  });

  // Helper: Get Icon based on file type
  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf': return '📕';
      case 'excel': return '📗';
      case 'doc': return '📘';
      case 'zip': return '📦';
      case 'img': return '🖼️';
      default: return '📄';
    }
  };

  return (
    <div className="docs-container">
      
      {/* --- Sidebar (Folders) --- */}
      <aside className="docs-sidebar">
        <div className="sidebar-header">
          <h3>File Manager</h3>
        </div>
        <ul className="folder-list">
          {folders.map(folder => (
            <li 
              key={folder.id} 
              className={`folder-item ${activeFolder === folder.name ? 'active' : ''}`}
              onClick={() => setActiveFolder(folder.name)}
            >
              <span className="folder-icon">{folder.icon}</span>
              <span className="folder-name">{folder.name}</span>
            </li>
          ))}
        </ul>
        
        {/* Storage Widget */}
        <div className="storage-widget">
          <p>Storage Used</p>
          <div className="storage-bar">
            <div className="storage-fill" style={{width: '65%'}}></div>
          </div>
          <small>6.5 GB / 10 GB used</small>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="docs-main">
        
        {/* Top Bar */}
        <div className="docs-topbar">
          <div className="breadcrumb">
            <h2>{activeFolder}</h2>
            <span className="file-count">{sortedFiles.length} files</span>
          </div>
          
          <div className="docs-actions">
            <div className="sort-box">
              <label>Sort by:</label>
              <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                <option value="date">Date (Newest)</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
            
            <div className="view-toggles">
              <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>≣</button>
              <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>☷</button>
            </div>

            <button className="btn-upload">☁️ Upload File</button>
          </div>
        </div>

        {/* Files Area */}
        <div className={`files-area ${viewMode}`}>
          {sortedFiles.length > 0 ? (
            sortedFiles.map(file => (
              <div key={file.id} className="file-card">
                <div className="file-icon-box">
                  {getFileIcon(file.type)}
                </div>
                <div className="file-info">
                  <h4 className="file-name" title={file.name}>{file.name}</h4>
                  <div className="file-meta">
                    <span>{file.size}</span>
                    <span>• {file.date}</span>
                  </div>
                  <div className="file-uploader">
                    👤 {file.uploadedBy}
                  </div>
                </div>
                <div className="file-options">⋮</div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>📂 This folder is empty.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
};

export default Documents;