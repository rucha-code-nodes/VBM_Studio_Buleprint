/* src/pages/Home.js */
import React, { useState } from 'react';
import './Home.css';
import banner from '../assets/logo/logo1.jpeg';
import logoImg from '../assets/logo/logo6.jpeg';
import slide1 from '../assets/images/bg1.png';
import slide2 from '../assets/images/bg4.png';
import side1 from '../assets/images/side1.png';
import side2 from '../assets/images/side2.png';
import side3 from '../assets/images/side3.png';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {

  const slides = [slide1, slide2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sideSlides = [side1, side2, side3];
  const [sideIndex, setSideIndex] = useState(0);
  const [sidePaused, setSidePaused] = useState(false);
  // --- NEW: Blog/News Data (Add this before the return statement) ---
  const blogPosts = [
    {
      id: 1,
      category: "Product Launch",
      date: "Dec 22, 2025",
      title: "Introducing Employee Dashboard v2.0",
      desc: "A complete overhaul of our analytics engine, providing real-time insights into team productivity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" // Placeholder
    },
    {
      id: 2,
      category: "Community",
      date: "Dec 18, 2025",
      title: "VVBM Developers Summit Recap",
      desc: "Highlights from our annual meetup discussing the future of internal management tools.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" // Placeholder
    },
    {
      id: 3,
      category: "Tech Talk",
      date: "Dec 10, 2025",
      title: "How We Optimized 99.9% Uptime",
      desc: "A deep dive into our cloud infrastructure and how we handle scaling for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" // Placeholder
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) setCurrentIndex(i => (i + 1) % slides.length);
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!sidePaused) setSideIndex(i => (i + 1) % sideSlides.length);
    }, 4000); // change side slide every 4s
    return () => clearInterval(interval);
  }, [sidePaused, sideSlides.length]);

  return (
    <div className="landing-container">

      {/* --- Navbar --- */}
      <Navbar />

      {/* ============================
          FULL-SCREEN SLIDESHOW
      ============================ */}
      <div className="slideshow-container"
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}>
        <img
          src={slides[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slideshow-image"
        />

        {/* Left Arrow */}
        <button className="slide-btn left" onClick={prevSlide}>
          ❮
        </button>

        {/* Right Arrow */}
        <button className="slide-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>


      {/* ============================
            HERO SECTION 
      ============================ */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">✨ New: Employee Dashboard v2.0</div>
          <h1>Smart Internal Management <br/>
            <span className="highlight-text">Simplified.</span>
          </h1>

          <p className="hero-subtext">
            Streamline attendance, manage tasks, and collaborate with your team in one unified platform. Designed for modern workforces.
          </p>

          <div className="hero-buttons">
            <Link to="/login">
              <button className="btn btn-primary-gradient big-btn">Get Started Now</button>
            </Link>
            <button className="btn btn-outline big-btn">View Demo</button>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <strong>500+</strong> <span>Active Users</span>
            </div>
            <div className="stat-item">
              <strong>99.9%</strong> <span>Uptime</span>
            </div>
          </div>
        </div>

        {/* Right side hero image */}
        <div className="hero-image-container">
          <div className="illustration-wrapper">
            <div className="vertical-slideshow-container"
                 onMouseEnter={() => setSidePaused(true)}
                 onMouseLeave={() => setSidePaused(false)}>
              <img
                src={sideSlides[sideIndex]}
                alt={`side-slide-${sideIndex}`}
                className="vertical-slideshow-image"
              />
            </div>
          </div>
        </div>
      </header>


      {/* ============================
            FEATURES SECTION 
      ============================ */}
      <section className="features-section">
        <div className="section-header-center">
          <h2>Everything you need to work better</h2>
          <p>Powerful features to boost productivity and team alignment.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box blue">⏱</div>
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

      {/* ============================
           LATEST INSIGHTS SECTION 
      ============================ */}
      <section className="blog-section">
        <div className="section-header-center">
          <span className="badge-pill">From the Blog</span>
          <h2>Latest Updates & Discussions</h2>
          <p>Stay updated with our latest product launches and engineering insights.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-img" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>📅 {post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <a href="#read-more" className="read-more-link">
                  Read Discussion <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================
                FOOTER 
      ============================ */}
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
    </div>
  );
};

export default Home;

