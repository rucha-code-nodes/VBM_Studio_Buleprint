/* src/components/ChillZone.js */
import React, { useState } from 'react';
import './chillZone.css';

const ChillZone = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('games');
  const [activeGame, setActiveGame] = useState('tictactoe'); // 'tictactoe' | 'bubblepop'

  // --- TIC-TAC-TOE LOGIC ---
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  };
  const winner = calculateWinner(board);
  const handleGameClick = (i) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  const resetTicTacToe = () => { setBoard(Array(9).fill(null)); setIsXNext(true); };

  // --- BUBBLE POP LOGIC ---
  const [bubbles, setBubbles] = useState(generateBubbles());
  const [score, setScore] = useState(0);

  function generateBubbles() {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      // Soothing Palette Colors
      color: ['#A4C3B2', '#6B9080', '#EAF4F4', '#CCE3DE'][Math.floor(Math.random() * 4)],
      popped: false
    }));
  }
  const popBubble = (id) => {
    setBubbles(bubbles.map(b => b.id === id ? { ...b, popped: true } : b));
    setScore(score + 10);
  };
  const resetBubblePop = () => { setBubbles(generateBubbles()); setScore(0); };

  // --- AI JOKES & QUOTES ---
  const [currentContent, setCurrentContent] = useState("Click to generate a smile! 😊");
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "I told my CSS joke to a backend developer, but they didn't get the style.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Artificial intelligence is no match for natural stupidity.",
    "Why did the developer quit his job? He didn't get arrays."
  ];
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Fix the cause, not the symptom. – Steve Maguire",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Make it work, make it right, make it fast. – Kent Beck"
  ];
  const generateJoke = () => setCurrentContent(jokes[Math.floor(Math.random() * jokes.length)]);
  const generateQuote = () => setCurrentContent(quotes[Math.floor(Math.random() * quotes.length)]);

  // --- MOOD MUSIC (Visual Only) ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Lo-Fi Beats");

  return (
    <div className="chill-modal-overlay">
      {/* Added 'expanded-mode' class if activeTab is games for fuller screen feel */}
      <div className={`chill-modal-box ${activeTab === 'games' ? 'expanded-mode' : ''}`}>
        
        {/* Header */}
        <div className="chill-header">
          <div className="header-title">
            <h3>☕ The Break Room</h3>
            <span className="badge-beta">v2.0</span>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Navigation Tabs */}
        <div className="chill-nav">
          <button className={`nav-item ${activeTab === 'games' ? 'active' : ''}`} onClick={() => setActiveTab('games')}>🎮 Games</button>
          <button className={`nav-item ${activeTab === 'relax' ? 'active' : ''}`} onClick={() => setActiveTab('relax')}>🧘 Relax</button>
          <button className={`nav-item ${activeTab === 'fun' ? 'active' : ''}`} onClick={() => setActiveTab('fun')}>😂 Fun Corner</button>
          <button className={`nav-item ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>🏆 Ranks</button>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="chill-content">
          
          {/* === GAMES TAB (Soothing Theme) === */}
          {activeTab === 'games' && (
            <div className="section-games">
              <div className="game-selector">
                <button className={`game-chip soothing ${activeGame === 'tictactoe' ? 'active' : ''}`} onClick={() => setActiveGame('tictactoe')}>Tic-Tac-Toe</button>
                <button className={`game-chip soothing ${activeGame === 'bubblepop' ? 'active' : ''}`} onClick={() => setActiveGame('bubblepop')}>Bubble Pop</button>
              </div>

              {activeGame === 'tictactoe' && (
                <div className="soothing-game-container">
                  <div className="soothing-status">{winner ? `🎉 Winner: ${winner}` : `Player Turn: ${isXNext ? 'X' : 'O'}`}</div>
                  <div className="soothing-tictactoe-grid">
                    {board.map((cell, i) => (
                      <button key={i} className={`soothing-cell ${cell}`} onClick={() => handleGameClick(i)}>{cell}</button>
                    ))}
                  </div>
                  <button className="btn-soothing" onClick={resetTicTacToe}>Restart Game</button>
                </div>
              )}

              {activeGame === 'bubblepop' && (
                <div className="soothing-game-container">
                  <div className="soothing-header">
                    <span>Score: {score}</span>
                    <button className="btn-tiny-soothing" onClick={resetBubblePop}>Reset</button>
                  </div>
                  <div className="bubble-grid">
                    {bubbles.map((b) => (
                      <div 
                        key={b.id} 
                        className={`bubble ${b.popped ? 'popped' : ''}`} 
                        style={{ backgroundColor: b.color }}
                        onClick={() => !b.popped && popBubble(b.id)}
                      >
                        {b.popped && "💨"}
                      </div>
                    ))}
                  </div>
                  <p className="soothing-hint">Pop the bubbles to unwind...</p>
                </div>
              )}
            </div>
          )}

          {/* === RELAX TAB === */}
          {activeTab === 'relax' && (
            <div className="section-relax">
              <div className="relax-card">
                <h4>🌬️ Breathing Guide</h4>
                <div className="breathing-circle-wrapper">
                  <div className="breathing-circle"></div>
                  <div className="breathe-instruction">Inhale... Exhale...</div>
                </div>
              </div>
              <div className="relax-card">
                <h4>🎧 Mood Music</h4>
                <div className="music-player">
                  <div className="track-info">
                    <span className="music-icon">{isPlaying ? '🔊' : '🔈'}</span>
                    <div className="track-details">
                      <span className="track-name">{currentTrack}</span>
                      <span className="track-status">{isPlaying ? "Now Playing" : "Paused"}</span>
                    </div>
                  </div>
                  <div className="player-controls">
                    <button onClick={() => setCurrentTrack("Forest Rain")}>🌧️</button>
                    <button onClick={() => setCurrentTrack("Lo-Fi Beats")}>🎵</button>
                    <button onClick={() => setCurrentTrack("Ocean Waves")}>🌊</button>
                    <button className="play-pause" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? "⏸" : "▶"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* === FUN CORNER TAB === */}
          {activeTab === 'fun' && (
            <div className="section-fun">
              <div className="fun-widget">
                <div className="ai-box">
                  <span className="ai-avatar">🤖</span>
                  <p className="ai-text">"{currentContent}"</p>
                </div>
                <div className="fun-buttons">
                  <button className="btn-fun purple" onClick={generateJoke}>Tell me a Joke</button>
                  <button className="btn-fun blue" onClick={generateQuote}>Inspire Me</button>
                </div>
              </div>
              <div className="meme-wall">
                <h4>📌 Meme Wall & Facts</h4>
                <div className="meme-grid">
                  <div className="meme-card">🐱 <p>Me deploying to prod on Friday</p></div>
                  <div className="meme-card">🔥 <p>This is fine.</p></div>
                  <div className="meme-card fact-card">💡 <strong>Fun Fact:</strong> The first computer bug was an actual moth.</div>
                  <div className="meme-card">💻 <p>It works on my machine!</p></div>
                </div>
              </div>
            </div>
          )}

          {/* === LEADERBOARD TAB === */}
          {activeTab === 'leaderboard' && (
            <div className="section-leaderboard">
              <div className="lb-header">
                <h4>🏆 Weekly Champions</h4>
                <span className="lb-subtitle">Resets every Monday</span>
              </div>
              <table className="lb-table">
                <thead><tr><th>#</th><th>Player</th><th>Game</th><th>Score</th></tr></thead>
                <tbody>
                  <tr className="gold"><td>1</td><td>Rucha</td><td>2048</td><td>10,420</td></tr>
                  <tr className="silver"><td>2</td><td>David</td><td>Bubble Pop</td><td>8,500</td></tr>
                  <tr className="bronze"><td>3</td><td>Sarah</td><td>Tic-Tac-Toe</td><td>50 Wins</td></tr>
                  <tr><td>4</td><td>Mike</td><td>Bubble Pop</td><td>6,200</td></tr>
                  <tr><td>5</td><td>Alex</td><td>2048</td><td>4,100</td></tr>
                </tbody>
              </table>
              <div className="challenge-box">
                <h5>🎯 Weekly Challenge</h5>
                <p>Reach 5000 points in Bubble Pop to win a coffee voucher!</p>
                <div className="progress-bar-bg"><div className="progress-bar-fill" style={{width: '65%'}}></div></div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ChillZone;