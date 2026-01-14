/* src/pages/Feed.js */
import React, { useState } from 'react';
import './Feed.css';
import BackButton from '../components/BackButton';

const Feed = () => {
  // Simulator for Admin Role (Change to false to hide the "Create" button)
  const isAdmin = true;

  // Mock Data for Posts
  const [posts] = useState([
    {
      id: 1,
      adminName: "Sarah Jenkins",
      adminRole: "HR Manager",
      time: "2 hours ago",
      title: "🎉 Annual Retreat Announcement!",
      description: "We are excited to announce that this year's company retreat will be held in Goa! Please check the attached itinerary for details.",
      image: null, 
      reactions: { like: 12, love: 5 },
      comments: [
        { user: "Rucha", text: "Wow, excited!" },
        { user: "Amit", text: "Can't wait." }
      ]
    },
    {
      id: 2,
      adminName: "David Scott",
      adminRole: "CTO",
      time: "5 hours ago",
      title: "System Maintenance Update",
      description: "The internal portal will be down for maintenance this Sunday from 2 AM to 4 AM. Please save your work.",
      image: "maintenance-banner", 
      reactions: { like: 4, love: 0 },
      comments: []
    }
  ]);

  // State to track which comments section is open
  const [openComments, setOpenComments] = useState({});

  const toggleComments = (postId) => {
    setOpenComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="feed-container">
      <BackButton />
      
      {/* --- Top Button (Admin Only) --- */}
      {isAdmin && (
        <div className="create-post-card">
          <div className="admin-avatar-placeholder" style={{width: '40px', height: '40px', fontSize: '1rem', margin: 0}}>A</div>
          <div className="create-input-fake">
            Post an announcement...
          </div>
          <button className="btn btn-primary">Post</button>
        </div>
      )}

      {/* --- Feed List --- */}
      <div className="feed-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            
            {/* Header: Admin Info */}
            <div className="post-header">
              <div className="admin-avatar-placeholder">
                {post.adminName.charAt(0)}
              </div>
              <div className="post-info">
                <h4 className="admin-name">{post.adminName}</h4>
                <span className="admin-role">{post.adminRole} • {post.time}</span>
              </div>
            </div>

            {/* Content */}
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-desc">{post.description}</p>
              
              {/* Image Preview Placeholder */}
              {post.image && (
                <div className="post-media-placeholder">
                   📷 Image Attachment
                </div>
              )}
            </div>

            {/* Reaction Bar */}
            <div className="post-actions">
              <button className="action-btn">
                 <span>👍</span> {post.reactions.like}
              </button>
              <button className="action-btn">
                 <span>❤️</span> {post.reactions.love}
              </button>
              <button 
                className="action-btn comment-btn"
                onClick={() => toggleComments(post.id)}
              >
                 <span>💬</span> {post.comments.length} Comments
              </button>
            </div>

            {/* Collapsible Comment Section */}
            {openComments[post.id] && (
              <div className="comment-section">
                {post.comments.length > 0 ? (
                  post.comments.map((c, idx) => (
                    <div key={idx} className="comment-bubble">
                      <strong>{c.user}</strong> {c.text}
                    </div>
                  ))
                ) : (
                  <p className="no-comments">No comments yet. Be the first!</p>
                )}
                
                {/* Input for new comment */}
                <div className="comment-input-row">
                  <input type="text" placeholder="Write a comment..." />
                  <button className="btn-small">Send</button>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;