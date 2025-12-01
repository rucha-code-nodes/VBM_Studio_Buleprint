/* src/pages/Chat.js */
import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const Chat = () => {
  const [activeChatId, setActiveChatId] = useState(1);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  // Mock Data: Chat List
  const [chats] = useState([
    {
      id: 1,
      name: "Development Team",
      type: "group",
      avatar: "🚀",
      lastMessage: "David: I pushed the latest commit.",
      time: "10:30 AM",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      type: "direct",
      avatar: "SJ",
      lastMessage: "Can we reschedule the meeting?",
      time: "9:15 AM",
      unread: 1,
      online: true
    },
    {
      id: 3,
      name: "David Scott",
      type: "direct",
      avatar: "DS",
      lastMessage: "Thanks for the update!",
      time: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: 4,
      name: "General Announcements",
      type: "group",
      avatar: "📢",
      lastMessage: "HR: Office closed on Friday.",
      time: "Yesterday",
      unread: 0,
      online: true
    }
  ]);

  // Mock Data: Messages for the active chat
  const [messages, setMessages] = useState({
    1: [
      { id: 1, text: "Hey team, is the UI ready?", sender: "Rucha", time: "10:00 AM", isMe: true },
      { id: 2, text: "Almost there, just fixing the navbar.", sender: "David", time: "10:05 AM", isMe: false },
      { id: 3, text: "Great! Let me know when to review.", sender: "Rucha", time: "10:06 AM", isMe: true },
      { id: 4, text: "I pushed the latest commit.", sender: "David", time: "10:30 AM", isMe: false },
    ],
    2: [
      { id: 1, text: "Hi Sarah, are you free?", sender: "Rucha", time: "9:00 AM", isMe: true },
      { id: 2, text: "Can we reschedule the meeting?", sender: "Sarah", time: "9:15 AM", isMe: false },
    ],
    3: [
      { id: 1, text: "Thanks for the update!", sender: "David", time: "Yesterday", isMe: false },
    ],
    4: [
      { id: 1, text: "Office closed on Friday.", sender: "HR", time: "Yesterday", isMe: false },
    ]
  });

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeChatId]);

  // Handle Sending Message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: "Rucha",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage]
    }));
    
    setInputText('');
  };

  const activeChatInfo = chats.find(c => c.id === activeChatId);

  return (
    <div className="chat-layout">
      
      {/* --- Left Side: Chat List --- */}
      <aside className="chat-sidebar">
        <div className="sidebar-header">
          <h2>Messages</h2>
          <button className="new-chat-btn">✏️</button>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search chats..." />
        </div>

        <div className="chat-list">
          {chats.map(chat => (
            <div 
              key={chat.id} 
              className={`chat-item ${activeChatId === chat.id ? 'active' : ''}`}
              onClick={() => setActiveChatId(chat.id)}
            >
              <div className="avatar-container">
                <div className={`avatar ${chat.type === 'group' ? 'group-avatar' : ''}`}>
                  {chat.avatar}
                </div>
                {chat.online && <div className="online-dot"></div>}
              </div>
              
              <div className="chat-preview">
                <div className="chat-name-row">
                  <h4>{chat.name}</h4>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-msg-row">
                  <p>{chat.lastMessage}</p>
                  {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* --- Right Side: Chat Window --- */}
      <main className="chat-window">
        
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <h3>{activeChatInfo?.name}</h3>
            <span className="status-text">
              {activeChatInfo?.type === 'group' ? '4 members' : activeChatInfo?.online ? 'Online' : 'Offline'}
            </span>
          </div>
          <div className="header-actions">
            <button>📞</button>
            <button>📹</button>
            <button>ℹ️</button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="messages-area">
          {messages[activeChatId]?.map((msg, index) => (
            <div key={msg.id} className={`message-row ${msg.isMe ? 'my-message' : 'other-message'}`}>
              
              {!msg.isMe && activeChatInfo.type === 'group' && (
                 <span className="sender-name-label">{msg.sender}</span>
              )}
              
              <div className="bubble">
                <p>{msg.text}</p>
                <span className="msg-time">{msg.time} {msg.isMe && '✓✓'}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form className="chat-input-area" onSubmit={handleSendMessage}>
          <button type="button" className="attach-btn" title="Attach File">📎</button>
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className="send-btn">➤</button>
        </form>

      </main>
    </div>
  );
};

export default Chat;