


// /* src/pages/Home.js */
// import React, { useState } from 'react';
// import './Home.css';
// import banner from '../assets/logo/logo1.jpeg'; // Ensure path is correct
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [showJobModal, setShowJobModal] = useState(false);

//   const handleJobSubmit = (e) => {
//     e.preventDefault();
//     alert("Application Submitted! We will contact you soon.");
//     setShowJobModal(false);
//   };

//   // Mock Data for Blog Section
//   const blogPosts = [
//     {
//       id: 1,
//       author: "Alex Johnson",
//       role: "Lead Developer",
//       initials: "AJ",
//       title: "Migrating to React 18: Our Journey",
//       excerpt: "We recently upgraded our core platform to React 18. Here's how we handled concurrent rendering and automatic batching to improve performance by 40%.",
//       tags: ["React", "Performance"],
//       date: "Oct 24, 2025",
//       readTime: "5 min read",
//       category: "Frontend",
//       // Gradient to simulate a blog cover image
//       coverGradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" 
//     },
//     {
//       id: 2,
//       author: "Sarah Smith",
//       role: "UI/UX Designer",
//       initials: "SS",
//       title: "Redesigning the Admin Dashboard",
//       excerpt: "A deep dive into our design system overhaul. Focusing on accessibility (a11y) and dark mode integration for better user experience.",
//       tags: ["Design System", "UX"],
//       date: "Oct 20, 2025",
//       readTime: "4 min read",
//       category: "Design",
//       coverGradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)"
//     },
//     {
//       id: 3,
//       author: "Mike Brown",
//       role: "Backend Engineer",
//       initials: "MB",
//       title: "Scaling with Microservices",
//       excerpt: "Transitioning from a monolith to microservices using Node.js and Docker. Challenges faced during deployment and lessons learned.",
//       tags: ["Backend", "DevOps"],
//       date: "Oct 15, 2025",
//       readTime: "7 min read",
//       category: "Engineering",
//       coverGradient: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)"
//     }
//   ];

//   return (
//     <div className="landing-container">
      
//       {/* --- Navbar --- */}
//       <nav className="navbar">
//         <div className="logo">
//           <span className="logo-symbol">💠</span>
//           <span className="logo-text">VVBM Portal</span>
//         </div>
//         <div className="nav-buttons">
//           <Link to="/signup">
//             <button className="btn btn-ghost">Create Account</button>
//           </Link>
//           <Link to="/login">
//             <button className="btn btn-primary-gradient">Login</button>
//           </Link>
//         </div>
//       </nav>

//       {/* --- Hero Section --- */}
//       <header className="hero-section">
//         <div className="hero-content">
//           <div className="badge-pill">✨ New: Employee Dashboard v2.0</div>
//           <h1>Smart Internal Management <br/><span className="highlight-text">Simplified.</span></h1>
//           <p className="hero-subtext">
//             Streamline attendance, manage tasks, and collaborate with your team in one unified platform. Designed for modern workforces.
//           </p>
//           <div className="hero-buttons">
//              {/* Updated Button: Opens Modal */}
//              <button 
//                className="btn btn-primary-gradient big-btn"
//                onClick={() => setShowJobModal(true)}
//              >
//                Get Started Now
//              </button>
//              <button className="btn btn-outline big-btn">View Demo</button>
//           </div>
          
//           <div className="stats-row">
//             <div className="stat-item">
//               <strong>500+</strong> <span>Active Users</span>
//             </div>
//             <div className="stat-item">
//               <strong>99.9%</strong> <span>Uptime</span>
//             </div>
//           </div>
//         </div>

//         <div className="hero-image-container">
//           <div className="hero-blob"></div>
//           <div className="illustration-wrapper">
//              <img src={banner} alt="VVBM Dashboard Preview" className="floating-img" />
//           </div>
//         </div>
//       </header>

//       {/* --- Features Section --- */}
//       <section className="features-section">
//         <div className="section-header-center">
//           <h2>Everything you need to work better</h2>
//           <p>Powerful features to boost productivity and team alignment.</p>
//         </div>
        
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="icon-box blue">⏱️</div>
//             <h3>Smart Attendance</h3>
//             <p>Punch in/out with geolocation tracking and get automated weekly reports.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="icon-box orange">📋</div>
//             <h3>Task Management</h3>
//             <p>Assign, track, and complete tasks with our intuitive Kanban-style board.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="icon-box green">💬</div>
//             <h3>Real-time Chat</h3>
//             <p>Seamless communication with direct messages and group channels.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="icon-box purple">📅</div>
//             <h3>Dynamic Schedule</h3>
//             <p>Sync meetings and deadlines automatically with your Google Calendar.</p>
//           </div>
//         </div>
//       </section>

//       {/* --- NEW: Professional Blog Section --- */}
//       <section className="blog-section">
//         <div className="section-header-center">
//           <span className="section-subtitle">LATEST UPDATES</span>
//           <h2>Inside VVBM Engineering</h2>
//           <p>Insights, updates, and stories from the team building the future of work.</p>
//         </div>

//         <div className="blog-grid">
//           {blogPosts.map((post) => (
//             <article key={post.id} className="blog-card">
//               {/* Decorative Header (Simulating Cover Image) */}
//               <div className="blog-cover" style={{ background: post.coverGradient }}>
//                 <span className="blog-category-badge">{post.category}</span>
//               </div>

//               <div className="blog-content">
//                 <div className="blog-meta-top">
//                   <span className="meta-date">{post.date}</span>
//                   <span className="meta-dot">·</span>
//                   <span className="meta-read">{post.readTime}</span>
//                 </div>

//                 <h3 className="blog-title">{post.title}</h3>
//                 <p className="blog-excerpt">{post.excerpt}</p>

//                 <div className="blog-tags">
//                    {post.tags.map((tag, i) => <span key={i}>#{tag}</span>)}
//                 </div>

//                 <div className="blog-divider"></div>

//                 <div className="blog-footer">
//                   <div className="author-block">
//                     <div className="author-avatar">{post.initials}</div>
//                     <div className="author-text">
//                       <strong>{post.author}</strong>
//                       <small>{post.role}</small>
//                     </div>
//                   </div>
//                   <button className="read-more-icon" aria-label="Read article">
//                     ↗
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* --- Footer --- */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-brand">
//             <span className="logo-text-white">VVBM Portal</span>
//             <p>© 2025 VVBM Technologies.</p>
//           </div>
//           <div className="footer-links">
//             <a href="#support">Support</a>
//             <a href="#privacy">Privacy Policy</a>
//             <a href="#terms">Terms of Service</a>
//           </div>
//         </div>
//       </footer>

//       {/* --- JOB APPLICATION MODAL --- */}
//       {showJobModal && (
//         <div className="job-modal-overlay">
//           <div className="job-modal-box">
//             <div className="job-modal-header">
//               <h3>🚀 Join Our Team</h3>
//               <button className="close-btn" onClick={() => setShowJobModal(false)}>×</button>
//             </div>
//             <p className="job-modal-subtitle">Fill out the form below to apply for a position.</p>
            
//             <form className="job-form" onSubmit={handleJobSubmit}>
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input type="text" placeholder="John Doe" required />
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Email Address</label>
//                   <input type="email" placeholder="john@example.com" required />
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number</label>
//                   <input type="tel" placeholder="+91 98765 43210" required />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Field of Interest</label>
//                 <select required defaultValue="">
//                   <option value="" disabled>Select your field</option>
//                   <option value="developer">Full Stack Developer</option>
//                   <option value="developer">Frontend Developer</option>
//                   <option value="developer">Backend Developer</option>
//                   <option value="developer">Python Developer</option>
//                   <option value="designer">UI/UX Design</option>
//                   <option value="marketing">Digital Marketing</option>
//                   <option value="hr">Human Resources</option>
//                   <option value="sales">Sales</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Upload Resume (PDF/DOC)</label>
//                 <div className="file-upload-wrapper">
//                    <input type="file" id="resume" required />
//                    <div className="file-custom-btn">📂 Choose File</div>
//                 </div>
//               </div>

//               <button type="submit" className="btn btn-primary-gradient full-width-btn">Submit Application</button>
//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Home;



/* src/pages/Home.js */
import React, { useState, useEffect } from 'react';
import './Home.css';
import banner from '../assets/logo/logo1.jpeg'; // Ensure path is correct
import { Link } from 'react-router-dom';

const Home = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const [theme, setTheme] = useState('light');
  

  // Toggle Theme Function
  


  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const handleJobSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted! We will contact you soon.");
    setShowJobModal(false);
  };
  const faqs = [
    { question: "Is VVBM Portal free for small teams?", answer: "Yes! We offer a free tier for teams up to 10 members with basic features included." },
    { question: "Can I integrate this with Slack?", answer: "Absolutely. We support native integrations with Slack, Microsoft Teams, and Google Workspace." },
    { question: "How secure is my data?", answer: "We use bank-grade 256-bit encryption for all data at rest and in transit. Your privacy is our priority." },
    { question: "Do you offer on-premise solutions?", answer: "Yes, for enterprise clients we offer self-hosted versions of the portal." }
  ];

  const testimonials = [
    { name: "Jessica Lee", role: "HR Manager", text: "VVBM transformed how we track attendance. It's automated, accurate, and the team loves the mobile app.", avatar: "JL" },
    { name: "Mark Doe", role: "CTO, TechFlow", text: "The task management features rival the big players. Finally, a tool that developers and managers both enjoy.", avatar: "MD" },
    { name: "Samantha Wu", role: "Operations Lead", text: "We reduced our admin overhead by 40% within the first month. The reporting tools are a lifesaver.", avatar: "SW" }
  ];

  // Mock Data for Blog Section
  const blogPosts = [
    {
      id: 1,
      author: "Alex Johnson",
      role: "Lead Developer",
      initials: "AJ",
      title: "Migrating to React 18: Our Journey",
      excerpt: "We recently upgraded our core platform to React 18. Here's how we handled concurrent rendering and automatic batching to improve performance by 40%.",
      tags: ["React", "Performance"],
      date: "Oct 24, 2025",
      readTime: "5 min read",
      category: "Frontend",
      coverGradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" 
    },
    {
      id: 2,
      author: "Sarah Smith",
      role: "UI/UX Designer",
      initials: "SS",
      title: "Redesigning the Admin Dashboard",
      excerpt: "A deep dive into our design system overhaul. Focusing on accessibility (a11y) and dark mode integration for better user experience.",
      tags: ["Design System", "UX"],
      date: "Oct 20, 2025",
      readTime: "4 min read",
      category: "Design",
      coverGradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)"
    },
    {
      id: 3,
      author: "Mike Brown",
      role: "Backend Engineer",
      initials: "MB",
      title: "Scaling with Microservices",
      excerpt: "Transitioning from a monolith to microservices using Node.js and Docker. Challenges faced during deployment and lessons learned.",
      tags: ["Backend", "DevOps"],
      date: "Oct 15, 2025",
      readTime: "7 min read",
      category: "Engineering",
      coverGradient: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)"
    }
  ];

  return (
    <div className="landing-container" data-theme={theme}>
      
      {/* --- Fun & Professional Navbar --- */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-bg">
            <span className="logo-emoji">🚀</span>
          </div>
          <div className="logo-text-group">
            <span className="logo-title">VVBM</span>
            <span className="logo-subtitle">Portal</span>
          </div>
        </div>

        <div className="nav-actions">
          {/* Theme Toggle Switch */}
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
              <div className="slider round">
                <span className="icon-sun">☀️</span>
                <span className="icon-moon">🌙</span>
              </div>
            </label>
          </div>

          <div className="nav-buttons">
            <Link to="/signup">
              <button className="btn btn-ghost">Create Account</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-primary-gradient">Login</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="pulse-dot"></span> New: Employee Dashboard v2.0
          </div>
          <h1>Smart Internal Management <br/><span className="highlight-text">Simplified.</span></h1>
          <p className="hero-subtext">
            Streamline attendance, manage tasks, and collaborate with your team in one unified platform. Designed for modern workforces to stay connected and productive.
          </p>
          <div className="hero-buttons">
             <button 
               className="btn btn-primary-gradient big-btn bounce-hover"
               onClick={() => setShowJobModal(true)}
             >
               Get Started Now
             </button>
             <button className="btn btn-outline big-btn">View Demo</button>
          </div>
          
          <div className="stats-row">
            <div className="stat-item">
              <strong>500+</strong> <span>Active Users</span>
            </div>
            <div className="stat-item">
              <strong>99.9%</strong> <span>Uptime</span>
            </div>
            <div className="stat-item">
              <strong>24/7</strong> <span>Support</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-blob"></div>
          <div className="illustration-wrapper">
             <img src={banner} alt="VVBM Dashboard Preview" className="floating-img" />
             {/* Floating badge for fun */}
             <div className="floating-badge top-right">
                <span>⚡ Boost Productivity</span>
             </div>
             <div className="floating-badge bottom-left">
                <span>🔒 Secure Data</span>
             </div>
          </div>
        </div>
      </header>

      {/* --- Features Section --- */}
      <section className="features-section">
        <div className="section-header-center">
          <h2>Everything you need to work better</h2>
          <p>Powerful features to boost productivity and team alignment.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box blue">⏱️</div>
            <h3>Smart Attendance</h3>
            <p>Punch in/out with geolocation tracking and get automated weekly reports.</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-box orange">📋</div>
            <h3>Task Management</h3>
            <p>Assign, track, and complete tasks with our intuitive Kanban-style board.</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-box green">💬</div>
            <h3>Real-time Chat</h3>
            <p>Seamless communication with direct messages and group channels.</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-box purple">📅</div>
            <h3>Dynamic Schedule</h3>
            <p>Sync meetings and deadlines automatically with your Google Calendar.</p>
          </div>
        </div>
      </section>

      {/* --- Professional Blog Section --- */}
      <section className="blog-section">
        <div className="section-header-center">
          <span className="section-subtitle">LATEST UPDATES</span>
          <h2>Inside VVBM Engineering</h2>
          <p>Insights, updates, and stories from the team building the future of work.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-cover" style={{ background: post.coverGradient }}>
                <span className="blog-category-badge">{post.category}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta-top">
                  <span className="meta-date">{post.date}</span>
                  <span className="meta-dot">·</span>
                  <span className="meta-read">{post.readTime}</span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-tags">
                   {post.tags.map((tag, i) => <span key={i}>#{tag}</span>)}
                </div>

                <div className="blog-divider"></div>

                <div className="blog-footer">
                  <div className="author-block">
                    <div className="author-avatar">{post.initials}</div>
                    <div className="author-text">
                      <strong>{post.author}</strong>
                      <small>{post.role}</small>
                    </div>
                  </div>
                  <button className="read-more-icon" aria-label="Read article">
                    ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="faq-section">
        <div className="section-header-center">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeAccordion === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
              <div className="faq-question">
                {faq.question}
                <span className="faq-toggle">{activeAccordion === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to transform your workflow?</h2>
          <p>Join 500+ companies using VVBM Portal today.</p>
          <button className="btn btn-white big-btn" onClick={() => setShowJobModal(true)}>Start Your Free Trial</button>
        </div>
      </section>


      {/* --- Footer --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-text-white">VVBM Portal</span>
            <p>© 2025 VVBM Technologies.</p>
          </div>
          <div className="footer-links">
            <a href="#support">Support</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* --- JOB APPLICATION MODAL --- */}
      {showJobModal && (
        <div className="job-modal-overlay">
          <div className="job-modal-box">
            <div className="job-modal-header">
              <h3>🚀 Join Our Team</h3>
              <button className="close-btn" onClick={() => setShowJobModal(false)}>×</button>
            </div>
            <p className="job-modal-subtitle">Fill out the form below to apply for a position.</p>
            
            <form className="job-form" onSubmit={handleJobSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div className="form-group">
                <label>Field of Interest</label>
                <select required defaultValue="">
                  <option value="" disabled>Select your field</option>
                  <option value="developer">Full Stack Developer</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="designer">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="hr">Human Resources</option>
                  <option value="sales">Sales</option>
                </select>
              </div>

              <div className="form-group">
                <label>Upload Resume (PDF/DOC)</label>
                <div className="file-upload-wrapper">
                   <input type="file" id="resume" required />
                   <div className="file-custom-btn">📂 Choose File</div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary-gradient full-width-btn">Submit Application</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;