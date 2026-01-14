/* src/pages/ChillZone.js */
import React, { useState, useEffect } from 'react';
import './ChillZone.css';
import { Link } from 'react-router-dom';

// --- AUDIO SOURCES ---
const AUDIO_SOURCES = {
    rain: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-light-rain-loop-2393.mp3'),
    water: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-river-stream-moderate-flow-2461.mp3'),
    thunder: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-distant-thunder-rumble-1317.mp3'),
};

Object.values(AUDIO_SOURCES).forEach(audio => { 
    audio.loop = true; 
    audio.volume = 0.5; 
});

// --- DATA ---
const ACTIVITIES = [
  { id: 'TRUTHS', icon: '🤫', title: 'Two Truths', desc: 'Spot the liar in your team.', type: 'TEAM' },
  { id: 'EMOJI', icon: '🔮', title: 'Guess Emoji', desc: 'Decode these pop culture phrases.', type: 'GAME' },
  { id: 'RATHER', icon: '⚖️', title: 'Would You Rather', desc: 'Impossible choices await.', type: 'FUN' },
  { id: 'RAPID', icon: '⚡', title: 'Rapid Fire', desc: 'Fast answers, no thinking!', type: 'FUN' },
  { id: 'SHOW', icon: '🛸', title: 'Show & Tell', desc: 'Grab something from your desk.', type: 'TEAM' },
  { id: 'SONG', icon: '🎧', title: 'Guess Song', desc: 'Can you name the track?', type: 'GAME' },
  { id: 'DRAW', icon: '🎨', title: 'Pictionary', desc: 'Open Skribbl.io & draw.', type: 'TEAM' },
  { id: 'MEME', icon: '👾', title: 'Meme War', desc: 'Who has the best humor?', type: 'FUN' },
  { id: 'GRATITUDE', icon: '✨', title: 'Gratitude', desc: 'Share some positive vibes.', type: 'CHILL' },
  { id: 'DESK', icon: '🕵️', title: 'Guess Desk', desc: 'Whose setup is this?', type: 'CHILL' },
];

// --- COMPONENTS ---

const Menu = ({ onSelect }) => (
  <div className="chill-grid">
    {ACTIVITIES.map((item) => (
      <div key={item.id} className="chill-card" onClick={() => onSelect(item.id)}>
        <span className="card-badge">{item.type}</span>
        <div className="card-icon">{item.icon}</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
);

const TwoTruths = () => (
  <div className="module-container">
    <div className="module-header">
      <span className="module-tag">Team Activity</span>
      <h2>🤫 Two Truths & A Lie</h2>
    </div>
    <div className="activity-box">
      <p className="big-text">
        1. Each person shares <strong>2 Truths</strong> and <strong>1 Lie</strong>.<br/><br/>
        2. The team votes on which one is the LIE! 🕵️‍♀️
      </p>
    </div>
    <p style={{color: 'var(--text-muted)'}}>Great for breaking the ice!</p>
  </div>
);

const GuessEmoji = () => {
  const puzzles = [
    { emojis: "🦁 👑", answer: "The Lion King" },
    { emojis: "☕ 💻 🐛", answer: "Debugging Code" },
    { emojis: "🕷️ 🧍", answer: "Spider-Man" },
    { emojis: "🏠 🎈 🎈", answer: "Up" },
    { emojis: "🦇 👨", answer: "Batman" }
  ];
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  return (
    <div className="module-container">
      <div className="module-header">
        <span className="module-tag">Mini Game</span>
        <h2>🔮 Guess the Emoji</h2>
      </div>
      <div className="activity-box">
        <div className="huge-emoji">{puzzles[index].emojis}</div>
        {reveal ? (
          <h2 className="reveal-text">{puzzles[index].answer}</h2>
        ) : (
          <button className="chill-btn primary" onClick={() => setReveal(true)}>Reveal Answer</button>
        )}
      </div>
      <button className="chill-btn secondary" onClick={() => {
        setIndex((i) => (i + 1) % puzzles.length);
        setReveal(false);
      }}>Next Puzzle →</button>
    </div>
  );
};

const WouldYouRather = () => {
  const questions = [
    ["Work from home forever 🏠", "Free office snacks forever 🍕"],
    ["No more meetings 📞", "No more emails 📧"],
    ["Unlimited coffee ☕", "Unlimited sleep 😴"],
    ["Internet Explorer speed 🐢", "Broken mouse 🖱️"],
    ["Sing in every meeting 🎤", "Wear a suit at home 👔"]
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="module-container">
      <div className="module-header">
        <span className="module-tag">Discussion</span>
        <h2>⚖️ Would You Rather?</h2>
      </div>
      <div className="activity-box">
        <button className="option-btn">{questions[index][0]}</button>
        <div style={{color: 'var(--primary-color)', fontWeight: 'bold', margin: '10px'}}>OR</div>
        <button className="option-btn">{questions[index][1]}</button>
      </div>
      <button className="chill-btn secondary" onClick={() => setIndex((i) => (i + 1) % questions.length)}>
        Next Question →
      </button>
    </div>
  );
};

const RapidFire = () => {
  const questions = [
    "Tea or Coffee?",
    "Morning or Night?",
    "IOS or Android?",
    "Beach or Mountains?",
    "Pizza or Burger?",
    "Marvel or DC?"
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="module-container">
      <div className="module-header">
        <span className="module-tag">Speed Round</span>
        <h2>⚡ Rapid Fire</h2>
      </div>
      <div className="activity-box">
        <h1 className="big-text" style={{fontSize: '3rem'}}>{questions[index]}</h1>
      </div>
      <button className="chill-btn primary" onClick={() => setIndex((i) => (i + 1) % questions.length)}>
        Next ⏩
      </button>
    </div>
  );
};

const ShowTell = () => (
  <div className="module-container">
    <div className="module-header">
      <span className="module-tag">Team Bonding</span>
      <h2>🛸 Show & Tell</h2>
    </div>
    <div className="activity-box">
      <p className="big-text">Grab something from your desk! 🌵☕</p>
      <br/>
      <p style={{color: 'var(--text-muted)'}}>
        <strong>The Challenge:</strong><br/>
        Show a pet, plant, gadget, or snack.<br/>
        Talk about it for exactly <strong>30 seconds</strong>.
      </p>
    </div>
  </div>
);

const GuessSong = () => {
  const songs = [
    { emoji: "👶 🦈", answer: "Baby Shark" },
    { emoji: "🌧️ ☔", answer: "Umbrella (Rihanna)" },
    { emoji: "🚀 👨‍🚀", answer: "Rocket Man" },
    { emoji: "❄️ ⛄ 👸", answer: "Let it Go" }
  ];
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  return (
    <div className="module-container">
      <div className="module-header">
        <span className="module-tag">Music Quiz</span>
        <h2>🎧 Guess the Song</h2>
      </div>
      <div className="activity-box">
        <div className="huge-emoji">{songs[index].emoji}</div>
        {reveal ? (
          <h2 className="reveal-text">{songs[index].answer}</h2>
        ) : (
          <button className="chill-btn primary" onClick={() => setReveal(true)}>Reveal Track</button>
        )}
      </div>
      <button className="chill-btn secondary" onClick={() => {
        setIndex((i) => (i + 1) % songs.length);
        setReveal(false);
      }}>Next Track →</button>
    </div>
  );
};

const Pictionary = () => (
  <div className="module-container">
    <div className="module-header">
      <span className="module-tag">Creative</span>
      <h2>🎨 Pictionary</h2>
    </div>
    <div className="activity-box">
      <p className="big-text">Time to Draw!</p>
      <p style={{marginBottom: '25px', color: 'var(--text-muted)'}}>Use <strong>Skribbl.io</strong> or your Zoom Whiteboard.</p>
      <a href="https://skribbl.io/" target="_blank" rel="noreferrer">
        <button className="chill-btn primary">Open Skribbl.io ↗</button>
      </a>
    </div>
  </div>
);

const MemeChallenge = () => (
  <div className="module-container">
    <div className="module-header">
      <span className="module-tag">Fun</span>
      <h2>👾 Meme Challenge</h2>
    </div>
    <div className="activity-box">
      <p style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>Topic of the Day:</p>
      <h2 style={{fontSize: '2rem', margin: '15px 0'}}>“Monday Morning Meetings”</h2>
      <br/>
      <p style={{color: 'var(--text-muted)'}}>
        Find a meme that fits. Drop it in chat. Vote for the best one!
      </p>
    </div>
  </div>
);

const Gratitude = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if(input) {
      setItems([input, ...items]);
      setInput("");
    }
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <span className="module-tag">Wellbeing</span>
        <h2>✨ Gratitude Wall</h2>
      </div>
      <div className="activity-box">
        <p style={{marginBottom: '15px', color: 'var(--text-muted)'}}>Share one good thing about your week:</p>
        <div style={{display: 'flex', gap: '10px'}}>
          <input 
            className="gratitude-input" 
            placeholder="I am thankful for..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && add()}
          />
          <button className="chill-btn primary" onClick={add}>+</button>
        </div>
        <div className="gratitude-list">
          {items.map((item, i) => (
            <div key={i} className="gratitude-item">💫 {item}</div>
          ))}
          {items.length === 0 && <span style={{opacity: 0.5, fontStyle: 'italic', fontSize: '0.9rem'}}>Positive vibes pending...</span>}
        </div>
      </div>
    </div>
  );
};

const GuessDesk = () => (
  <div className="module-container">
    <div className="module-header">
      <span className="module-tag">Mystery</span>
      <h2>🕵️ Guess the Desk</h2>
    </div>
    <div className="activity-box">
      <p className="big-text">Whose setup is this?</p>
      <ul style={{textAlign: 'left', display: 'inline-block', color: 'var(--text-muted)', lineHeight: '1.8', listStyle: 'none'}}>
        <li>📸 Send a photo of your desk to the host.</li>
        <li>📺 Host shares screen.</li>
        <li>💬 Everyone guesses in chat!</li>
      </ul>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const ChillZone = () => {
  const [activeModule, setActiveModule] = useState('MENU'); 
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
        clearInterval(timer);
        Object.values(AUDIO_SOURCES).forEach(audio => audio.pause());
    };
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const toggleAudio = (type) => {
    if (currentAudio) {
        AUDIO_SOURCES[currentAudio].pause();
        AUDIO_SOURCES[currentAudio].currentTime = 0;
    }
    if (currentAudio === type) {
        setCurrentAudio(null);
    } else {
        AUDIO_SOURCES[type].play().catch(e => console.log("Audio Error:", e));
        setCurrentAudio(type);
    }
  };

  return (
    <div className="chill-zone-wrapper">
      {/* Background */}
      <div className="magic-forest-bg">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>
      
      {/* Navbar */}
      <nav className="chill-nav">
        <div className="nav-brand">
            <span className="leaf-icon">🌌</span>
            <h1>Chill Zone</h1>
        </div>
        
        <div className="audio-controls">
             <button className={`audio-btn ${currentAudio === 'rain' ? 'active' : ''}`} onClick={() => toggleAudio('rain')} title="Rain">🌧️</button>
             <button className={`audio-btn ${currentAudio === 'water' ? 'active' : ''}`} onClick={() => toggleAudio('water')} title="Ocean">🌊</button>
             <button className={`audio-btn ${currentAudio === 'thunder' ? 'active' : ''}`} onClick={() => toggleAudio('thunder')} title="Thunder">⛈️</button>
        </div>

        <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div className="timer-capsule">
                <span>Timer:</span>
                <strong>{formatTime(timeLeft)}</strong>
            </div>
            <Link to="/dashboard">
                 <button className="exit-btn">Exit</button>
            </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="chill-main">
        {activeModule !== 'MENU' && (
            <button className="back-link" onClick={() => setActiveModule('MENU')}>
                ← Back to Activities
            </button>
        )}

        <div className="content-stage">
            {activeModule === 'MENU' && <Menu onSelect={setActiveModule} />}
            {activeModule === 'TRUTHS' && <TwoTruths />}
            {activeModule === 'EMOJI' && <GuessEmoji />}
            {activeModule === 'RATHER' && <WouldYouRather />}
            {activeModule === 'RAPID' && <RapidFire />}
            {activeModule === 'SHOW' && <ShowTell />}
            {activeModule === 'SONG' && <GuessSong />}
            {activeModule === 'DRAW' && <Pictionary />}
            {activeModule === 'MEME' && <MemeChallenge />}
            {activeModule === 'GRATITUDE' && <Gratitude />}
            {activeModule === 'DESK' && <GuessDesk />}
        </div>
      </main>
    </div>
  );
};

export default ChillZone;