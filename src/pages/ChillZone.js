// /* src/pages/ChillZone.js */
// import React, { useState, useEffect, useRef } from 'react';
// import './ChillZone.css';
// import Navbar from '../components/Navbar'; // Assuming you have this
// import BackButton from '../components/BackButton';

// const ChillZone = () => {
//   const [activeModule, setActiveModule] = useState('MENU'); // MENU, MEME, GAME, QUIZ, BODY, SOUND, DRAW, SOCIAL
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

//   // Timer Countdown
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const m = Math.floor(seconds / 60);
//     const s = seconds % 60;
//     return `${m}:${s < 10 ? '0' : ''}${s}`;
//   };

//   // --- COMPONENT: MENU ---
//   const Menu = () => (
//     <div className="chill-grid">
//       <div className="chill-card" onClick={() => setActiveModule('MEME')}>
//         <div className="icon-large">😄</div>
//         <h3>Mood Boost</h3>
//         <p>Instant daily laugh</p>
//       </div>
//       <div className="chill-card" onClick={() => setActiveModule('GAME')}>
//         <div className="icon-large">🎮</div>
//         <h3>Micro Games</h3>
//         <p>2-min brain refresh</p>
//       </div>
//       <div className="chill-card" onClick={() => setActiveModule('QUIZ')}>
//         <div className="icon-large">🧠</div>
//         <h3>Emoji Quiz</h3>
//         <p>Guess the movie</p>
//       </div>
//       <div className="chill-card" onClick={() => setActiveModule('BODY')}>
//         <div className="icon-large">🧘</div>
//         <h3>Body Reset</h3>
//         <p>60s guided stretch</p>
//       </div>
//       <div className="chill-card" onClick={() => setActiveModule('SOUND')}>
//         <div className="icon-large">🎵</div>
//         <h3>Sound Therapy</h3>
//         <p>Focus & Rain sounds</p>
//       </div>
//       <div className="chill-card" onClick={() => setActiveModule('DRAW')}>
//         <div className="icon-large">🎨</div>
//         <h3>Doodle Pad</h3>
//         <p>Draw stress away</p>
//       </div>
//       <div className="chill-card" onClick={() => setActiveModule('SOCIAL')}>
//         <div className="icon-large">🤝</div>
//         <h3>Team Vibe</h3>
//         <p>Send good vibes</p>
//       </div>
//     </div>
//   );

//   // --- COMPONENT: 1. MEME / JOKES ---
//   const MemeSection = () => {
//     const jokes = [
//       { q: "Why do programmers prefer dark mode?", a: "Because light attracts bugs." },
//       { q: "I told my boss 3 companies were after me...", a: "He asked which ones. I said Gas, Water, and Electricity." },
//       { q: "Why did the developer go broke?", a: "Because he used up all his cache." },
//       { q: "Project Manager: 'Can we do this by Friday?'", a: "Dev: 'Which Friday?'" }
//     ];
//     const [index, setIndex] = useState(0);
//     const [showPunchline, setShowPunchline] = useState(false);

//     return (
//       <div className="module-container">
//         <h2>😄 Daily Laugh Break</h2>
//         <div className="meme-box">
//           <p className="joke-setup">{jokes[index].q}</p>
//           {showPunchline ? (
//             <p className="joke-punchline fade-in">{jokes[index].a}</p>
//           ) : (
//             <button className="chill-btn" onClick={() => setShowPunchline(true)}>See Answer</button>
//           )}
//         </div>
//         <div className="controls">
//           <button className="chill-btn-outline" onClick={() => {
//             setIndex((index + 1) % jokes.length);
//             setShowPunchline(false);
//           }}>Next Joke ➡️</button>
//         </div>
//       </div>
//     );
//   };

//   // --- COMPONENT: 2. MICRO GAME (Reaction Test) ---
//   const GameSection = () => {
//     const [gameState, setGameState] = useState('WAITING'); // WAITING, READY, CLICKED, EARLY
//     const [score, setScore] = useState(null);
//     const [timerId, setTimerId] = useState(null);
//     const startTimeRef = useRef(null);

//     const startGame = () => {
//       setGameState('WAITING');
//       setScore(null);
//       const delay = Math.floor(Math.random() * 2000) + 1000;
//       const id = setTimeout(() => {
//         setGameState('READY');
//         startTimeRef.current = Date.now();
//       }, delay);
//       setTimerId(id);
//     };

//     const handleClick = () => {
//       if (gameState === 'WAITING') {
//         clearTimeout(timerId);
//         setGameState('EARLY');
//       } else if (gameState === 'READY') {
//         const timeTaken = Date.now() - startTimeRef.current;
//         setScore(timeTaken);
//         setGameState('CLICKED');
//       }
//     };

//     return (
//       <div className="module-container">
//         <h2>⚡ Reaction Speed Test</h2>
//         <p>Click anywhere when the box turns GREEN.</p>
        
//         <div 
//           className={`reaction-box ${gameState.toLowerCase()}`} 
//           onMouseDown={handleClick}
//         >
//           {gameState === 'IDLE' && "Start Game"}
//           {gameState === 'WAITING' && "Wait for it..."}
//           {gameState === 'READY' && "CLICK NOW!"}
//           {gameState === 'CLICKED' && `${score} ms`}
//           {gameState === 'EARLY' && "Too Fast! Try again."}
//         </div>

//         {gameState !== 'WAITING' && gameState !== 'READY' && (
//            <button className="chill-btn" onClick={startGame}>Start New Game</button>
//         )}
//       </div>
//     );
//   };

//   // --- COMPONENT: 3. EMOJI QUIZ ---
//   const QuizSection = () => {
//     const questions = [
//       { emoji: "🦁 👑", answer: "The Lion King" },
//       { emoji: "🚢 🧊 💔", answer: "Titanic" },
//       { emoji: "👻 🚫", answer: "Ghostbusters" },
//       { emoji: "🕷️ 🧍", answer: "Spider-Man" },
//       { emoji: "🦖 🏞️", answer: "Jurassic Park" }
//     ];
//     const [qIndex, setQIndex] = useState(0);
//     const [revealed, setRevealed] = useState(false);

//     return (
//       <div className="module-container">
//         <h2>🎬 Guess the Movie</h2>
//         <div className="quiz-card">
//           <div className="quiz-emoji">{questions[qIndex].emoji}</div>
//           {revealed ? (
//             <h3 className="fade-in answer-text">{questions[qIndex].answer}</h3>
//           ) : (
//             <button className="chill-btn" onClick={() => setRevealed(true)}>Reveal Answer</button>
//           )}
//         </div>
//         <button className="chill-btn-outline" onClick={() => {
//             setQIndex((qIndex + 1) % questions.length);
//             setRevealed(false);
//         }}>Next Question</button>
//       </div>
//     );
//   };

//   // --- COMPONENT: 4. BODY RESET (Breathing) ---
//   const BodySection = () => {
//     const [phase, setPhase] = useState('Inhale'); // Inhale, Hold, Exhale
//     const [count, setCount] = useState(4);
    
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCount((c) => {
//           if (c === 1) {
//             if (phase === 'Inhale') { setPhase('Hold'); return 7; }
//             if (phase === 'Hold') { setPhase('Exhale'); return 8; }
//             if (phase === 'Exhale') { setPhase('Inhale'); return 4; }
//           }
//           return c - 1;
//         });
//       }, 1000);
//       return () => clearInterval(interval);
//     }, [phase]);

//     return (
//       <div className="module-container">
//         <h2>🧘 4-7-8 Breathing</h2>
//         <div className={`breathing-circle ${phase.toLowerCase()}`}>
//           <span>{phase}</span>
//           <h1>{count}</h1>
//         </div>
//         <p>Follow the circle to lower your heart rate.</p>
//       </div>
//     );
//   };

//   // --- COMPONENT: 5. SOUND THERAPY ---
//   const SoundSection = () => {
//     // Just visual simulation for demo purposes
//     const [playing, setPlaying] = useState(null);

//     return (
//       <div className="module-container">
//         <h2>🎵 Focus Sounds</h2>
//         <div className="sound-grid">
//             {['Rain', 'Forest', 'Lo-Fi Beats', 'Coffee Shop'].map((sound) => (
//                 <button 
//                     key={sound}
//                     className={`sound-btn ${playing === sound ? 'playing' : ''}`}
//                     onClick={() => setPlaying(playing === sound ? null : sound)}
//                 >
//                     {playing === sound ? '⏸' : '▶'} {sound}
//                 </button>
//             ))}
//         </div>
//         {playing && <div className="now-playing-bar">Now Playing: <strong>{playing}</strong> (Simulated)</div>}
//       </div>
//     );
//   };

//   // --- COMPONENT: 6. DOODLE PAD ---
//   const DrawSection = () => {
//     const canvasRef = useRef(null);
//     const [isDrawing, setIsDrawing] = useState(false);

//     const startDrawing = ({ nativeEvent }) => {
//       const { offsetX, offsetY } = nativeEvent;
//       const ctx = canvasRef.current.getContext("2d");
//       ctx.beginPath();
//       ctx.moveTo(offsetX, offsetY);
//       setIsDrawing(true);
//     };

//     const draw = ({ nativeEvent }) => {
//       if (!isDrawing) return;
//       const { offsetX, offsetY } = nativeEvent;
//       const ctx = canvasRef.current.getContext("2d");
//       ctx.lineTo(offsetX, offsetY);
//       ctx.stroke();
//     };

//     const stopDrawing = () => {
//       const ctx = canvasRef.current.getContext("2d");
//       ctx.closePath();
//       setIsDrawing(false);
//     };

//     const clearCanvas = () => {
//         const ctx = canvasRef.current.getContext("2d");
//         ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//     };

//     return (
//       <div className="module-container">
//         <div className="draw-header">
//             <h2>🎨 Free Draw</h2>
//             <button className="chill-btn-small" onClick={clearCanvas}>Clear Board</button>
//         </div>
//         <canvas
//           ref={canvasRef}
//           className="doodle-canvas"
//           width={500}
//           height={300}
//           onMouseDown={startDrawing}
//           onMouseMove={draw}
//           onMouseUp={stopDrawing}
//           onMouseLeave={stopDrawing}
//         />
//         <p className="tiny-text">No save button. Just create and let go.</p>
//       </div>
//     );
//   };

//   // --- COMPONENT: 7. SOCIAL ---
//   const SocialSection = () => {
//       const [voted, setVoted] = useState(false);
//       return (
//         <div className="module-container">
//             <h2>🤝 Team Vibe Check</h2>
//             {!voted ? (
//                 <>
//                 <p>How are you feeling right now? (Anonymous)</p>
//                 <div className="emoji-row">
//                     <button className="emoji-btn" onClick={() => setVoted(true)}>🔥 On Fire</button>
//                     <button className="emoji-btn" onClick={() => setVoted(true)}>🙂 Good</button>
//                     <button className="emoji-btn" onClick={() => setVoted(true)}>😫 Tired</button>
//                 </div>
//                 </>
//             ) : (
//                 <div className="fade-in">
//                     <h3>Thanks for sharing!</h3>
//                     <p>60% of the team is feeling 🔥 today.</p>
//                     <button className="chill-btn-outline" onClick={() => setVoted(false)}>Vote Again</button>
//                 </div>
//             )}
            
//             <hr className="divider"/>
            
//             <h3>Send Appreciation</h3>
//             <div className="kudo-box">
//                 <input type="text" placeholder="e.g., Thanks Sarah for the help..." />
//                 <button className="chill-btn-small">Send</button>
//             </div>
//         </div>
//       );
//   }

//   return (
//     <div className="chill-zone-wrapper">
//       <div className="chill-header">
//         <div className="header-left">
//           <h1>🔥 Chill Zone</h1>
//           <span className="chill-timer">⏱ {formatTime(timeLeft)} remaining</span>
//         </div>
//         <button className="close-zone-btn" onClick={() => window.history.back()}>Exit to Work</button>
//       </div>

//       <div className="chill-content">
//         {activeModule !== 'MENU' && (
//           <button className="back-menu-btn" onClick={() => setActiveModule('MENU')}>
//             ← Back to Menu
//           </button>
//         )}

//         {activeModule === 'MENU' && <Menu />}
//         {activeModule === 'MEME' && <MemeSection />}
//         {activeModule === 'GAME' && <GameSection />}
//         {activeModule === 'QUIZ' && <QuizSection />}
//         {activeModule === 'BODY' && <BodySection />}
//         {activeModule === 'SOUND' && <SoundSection />}
//         {activeModule === 'DRAW' && <DrawSection />}
//         {activeModule === 'SOCIAL' && <SocialSection />}
//       </div>
//     </div>
//   );
// };

// export default ChillZone;

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

// Configure audio to loop and set volume
Object.values(AUDIO_SOURCES).forEach(audio => { 
    audio.loop = true; 
    audio.volume = 0.6; 
});

// --- DATA FOR ACTIVITIES ---
const ACTIVITIES = [
  { id: 'TRUTHS', icon: '🤫', title: 'Two Truths', desc: 'Find the liar', type: 'TEAM' },
  { id: 'EMOJI', icon: '🔮', title: 'Guess Emoji', desc: 'Decode the phrase', type: 'GAME' },
  { id: 'RATHER', icon: '⚖️', title: 'Would You Rather', desc: 'Work Edition', type: 'FUN' },
  { id: 'RAPID', icon: '⚡', title: 'Rapid Fire', desc: 'Fast questions', type: 'FUN' },
  { id: 'SHOW', icon: '🛸', title: 'Show & Tell', desc: '30s desk tour', type: 'TEAM' },
  { id: 'SONG', icon: '🎧', title: 'Guess Song', desc: 'Hum or Emoji', type: 'GAME' },
  { id: 'DRAW', icon: '🎨', title: 'Pictionary', desc: 'Draw & Guess', type: 'TEAM' },
  { id: 'MEME', icon: '👾', title: 'Meme War', desc: 'Best meme wins', type: 'FUN' },
  { id: 'GRATITUDE', icon: '✨', title: 'Gratitude', desc: 'Positive vibes', type: 'CHILL' },
  { id: 'DESK', icon: '🕵️', title: 'Guess Desk', desc: 'Whose setup?', type: 'CHILL' },
];

// --- SUB-COMPONENTS (Activities) ---

const Menu = ({ onSelect }) => (
  <div className="chill-grid fade-in-up">
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

// ... (KEEP ALL ACTIVITY COMPONENTS SAME AS BEFORE: TwoTruths, GuessEmoji, etc.) ...
// I am pasting them here for completeness to ensure you have the full file structure.

const TwoTruths = () => (
  <div className="module-container pop-in">
    <div className="module-header">
      <h2>🤫 Two Truths & A Lie</h2>
      <span className="module-tag">Team Activity</span>
    </div>
    <div className="activity-box">
      <p className="big-text">
        1. Each person shares <strong>2 Truths</strong> and <strong>1 Lie</strong> about themselves.<br/><br/>
        2. The team votes on which one is the LIE! 🕵️‍♀️
      </p>
    </div>
    <p style={{color: '#c4b5fd'}}>Great for breaking the ice in meetings!</p>
  </div>
);

const GuessEmoji = () => {
  const puzzles = [
    { emojis: "🦁 👑", answer: "The Lion King" },
    { emojis: "☕ 💻 🐛", answer: "Debugging Coffee" },
    { emojis: "🕷️ 🧍", answer: "Spider-Man" },
    { emojis: "🏠 🎈 🎈", answer: "Up" },
    { emojis: "🌑 🧛 🐺", answer: "Twilight" }
  ];
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  return (
    <div className="module-container pop-in">
      <div className="module-header">
        <h2>🔮 Guess the Emoji</h2>
      </div>
      <div className="activity-box">
        <div className="huge-emoji">{puzzles[index].emojis}</div>
        {reveal ? (
          <h2 className="reveal-text">{puzzles[index].answer}</h2>
        ) : (
          <button className="chill-btn primary" onClick={() => setReveal(true)}>Cast Reveal Spell</button>
        )}
      </div>
      <button className="chill-btn secondary" onClick={() => {
        setIndex((i) => (i + 1) % puzzles.length);
        setReveal(false);
      }}>Next Challenge →</button>
    </div>
  );
};

const WouldYouRather = () => {
  const questions = [
    ["Work from home forever 🏠", "Free office snacks forever 🍕"],
    ["No more meetings 🚫📞", "No more emails 🚫📧"],
    ["Unlimited coffee ☕", "Unlimited nap time 😴"],
    ["Slow internet 🐢", "Broken mouse 🖱️"],
    ["Sing in every meeting 🎤", "Wear a suit at home 👔"]
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="module-container pop-in">
      <div className="module-header">
        <h2>⚖️ Would You Rather?</h2>
      </div>
      <div className="activity-box">
        <button className="option-btn">{questions[index][0]}</button>
        <div style={{color: '#c084fc', fontWeight: '900', margin: '15px', fontSize: '1.2rem'}}>OR</div>
        <button className="option-btn">{questions[index][1]}</button>
      </div>
      <button className="chill-btn secondary" onClick={() => setIndex((i) => (i + 1) % questions.length)}>
        Next Dilemma →
      </button>
    </div>
  );
};

const RapidFire = () => {
  const questions = [
    "Tea or Coffee? ☕",
    "Morning person or Night owl? 🌙",
    "Pizza or Biryani? 🍛",
    "Mountains or Beach? 🏖️",
    "IOS or Android? 📱",
    "Dogs or Cats? 🐱"
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="module-container pop-in">
      <div className="module-header">
        <h2>⚡ Rapid Fire</h2>
      </div>
      <div className="activity-box">
        <h1 className="big-text" style={{fontSize: '2.5rem'}}>{questions[index]}</h1>
      </div>
      <button className="chill-btn primary full-width" onClick={() => setIndex((i) => (i + 1) % questions.length)}>
        Next Question ⏩
      </button>
    </div>
  );
};

const ShowTell = () => (
  <div className="module-container pop-in">
    <div className="module-header">
      <h2>🛸 Show & Tell</h2>
    </div>
    <div className="activity-box">
      <p className="big-text">
        Grab something from your desk or room! 🌵☕🧸
      </p>
      <br/>
      <p style={{fontSize: '1.1rem', color: '#e9d5ff'}}>
        <strong>Rules:</strong><br/><br/>
        1. Show a pet, plant, mug, or gadget.<br/>
        2. Talk about it for exactly <strong>30 seconds</strong>.
      </p>
    </div>
  </div>
);

const GuessSong = () => {
  const songs = [
    { emoji: "👶 🦈", answer: "Baby Shark" },
    { emoji: "🌧️ ☔", answer: "Umbrella (Rihanna)" },
    { emoji: "💍 💍 💍", answer: "Single Ladies" },
    { emoji: "🚀 👨‍🚀 ✨", answer: "Space Oddity" },
    { emoji: "❄️ ⛄ 👸", answer: "Let it Go" }
  ];
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  return (
    <div className="module-container pop-in">
      <div className="module-header">
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
  <div className="module-container pop-in">
    <div className="module-header">
      <h2>🎨 Virtual Pictionary</h2>
    </div>
    <div className="activity-box">
      <p className="big-text">Time to Draw!</p>
      <p style={{marginBottom: '25px', fontSize: '1.2rem', color: '#c4b5fd'}}>Use <strong>Skribbl.io</strong> or your Zoom/Teams Whiteboard.</p>
      <a href="https://skribbl.io/" target="_blank" rel="noreferrer">
        <button className="chill-btn primary">Open Skribbl.io ↗</button>
      </a>
    </div>
  </div>
);

const MemeChallenge = () => (
  <div className="module-container pop-in">
    <div className="module-header">
      <h2>👾 Meme Challenge</h2>
    </div>
    <div className="activity-box">
      <p className="big-text" style={{color: '#c084fc'}}>Today's Topic:</p>
      <h2 style={{fontSize: '2.5rem', margin: '20px 0'}}>“Monday Morning Mood”</h2>
      <br/>
      <p style={{textAlign: 'left', display: 'inline-block', color: '#e9d5ff'}}>
        1. Find a meme that fits the topic.<br/>
        2. Drop it in the chat.<br/>
        3. Vote for the winner! 👑
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
    <div className="module-container pop-in">
      <div className="module-header">
        <h2>✨ Gratitude Round</h2>
      </div>
      <div className="activity-box">
        <p style={{marginBottom: '15px', fontSize: '1.2rem', color: '#e9d5ff'}}>Share one good thing about your week:</p>
        <div style={{display: 'flex', gap: '10px'}}>
          <input 
            className="gratitude-input" 
            placeholder="I am thankful for..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && add()}
          />
          <button className="chill-btn primary" style={{padding: '0 25px', fontSize: '1.5rem'}} onClick={add}>+</button>
        </div>
        
        <div className="gratitude-list">
          {items.map((item, i) => (
            <div key={i} className="gratitude-item">💫 {item}</div>
          ))}
          {items.length === 0 && <span style={{opacity: 0.5, fontStyle: 'italic'}}>Positive vibes loading...</span>}
        </div>
      </div>
    </div>
  );
};

const GuessDesk = () => (
  <div className="module-container pop-in">
    <div className="module-header">
      <h2>🕵️ Guess the Desk</h2>
    </div>
    <div className="activity-box">
      <p className="big-text">Whose setup is this?</p>
      <br/>
      <ul style={{textAlign: 'left', display: 'inline-block', fontSize: '1.1rem', color: '#e9d5ff', lineHeight: '1.6', listStyleType: 'none'}}>
        <li>📸 Everyone sends a photo of their desk to the host.</li>
        <li>🤫 (Remember to blur sensitive info!)</li>
        <li>📺 The host shows them one by one.</li>
        <li>💬 Guess the owner in the chat!</li>
      </ul>
    </div>
  </div>
);

// --- MAIN PAGE ---

const ChillZone = () => {
  const [activeModule, setActiveModule] = useState('MENU'); 
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins
  const [currentAudio, setCurrentAudio] = useState(null);

  // Timer logic
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

  // Audio Toggle Logic
  const toggleAudio = (type) => {
    if (currentAudio) {
        AUDIO_SOURCES[currentAudio].pause();
        AUDIO_SOURCES[currentAudio].currentTime = 0;
    }
    if (currentAudio === type) {
        setCurrentAudio(null);
    } else {
        AUDIO_SOURCES[type].play().catch(e => console.log("Audio play error:", e));
        setCurrentAudio(type);
    }
  };

  return (
    <div className="chill-zone-wrapper">
      <div className="magic-forest-bg">
        {/* MOVING PARTICLES (The "Torches") */}
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>
      
      {/* Navbar with Audio Controls */}
      <nav className="chill-nav">
        <div className="nav-brand">
            <span className="leaf-icon">🌙</span>
            <h1>Chill Zone</h1>
        </div>
        
        {/* AUDIO CONTROLS */}
        <div className="audio-controls">
             <button className={`audio-btn ${currentAudio === 'rain' ? 'active' : ''}`} onClick={() => toggleAudio('rain')} title="Rain">🌧️</button>
             <button className={`audio-btn ${currentAudio === 'water' ? 'active' : ''}`} onClick={() => toggleAudio('water')} title="Water Flow">🌊</button>
             <button className={`audio-btn ${currentAudio === 'thunder' ? 'active' : ''}`} onClick={() => toggleAudio('thunder')} title="Thunder">⛈️</button>
        </div>

        <div className="timer-capsule">
             <span>Time:</span>
             <strong>{formatTime(timeLeft)}</strong>
        </div>
        <Link to="/dashboard" className="exit-link">
             <button className="exit-btn">Exit</button>
        </Link>
      </nav>

      {/* Main Content */}
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