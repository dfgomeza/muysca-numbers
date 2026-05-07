import { useState, useEffect, useMemo } from 'react'
import { muyscaNumbers } from './data/numbers'
import { translations } from './data/translations'
import './App.css'

// --- ASSETS LOADERS ---
const illustrationFiles = import.meta.glob('./assets/illustrations/**/*.png', { eager: true });
const soundFiles = import.meta.glob('./assets/sounds/*.ogg', { eager: true });

// --- UTILS ---
const playSound = (name) => {
  const soundPath = `./assets/sounds/${name}.ogg`;
  const soundModule = soundFiles[soundPath];
  
  if (soundModule) {
    const audioSrc = typeof soundModule === 'string' ? soundModule : soundModule.default;
    const audio = new Audio(audioSrc);
    audio.play().catch(e => console.warn("Error playing sound:", e));
  }
};

// --- COMPONENTS ---
const MuyscaText = ({ text }) => {
  if (!text) return null;
  
  // Regex para encontrar los caracteres específicos de la fuente (mapeo definitivo)
  // Cuerpo: a-j (manos), k-s (pies), x, y, z (z=ytu opcional)
  // Glifos: 0-9, A-K, L (L=0 absoluto)
  const parts = text.toString().split(/([0-9A-Lxa-syz])/g);
  
  return (
    <>
      {parts.map((part, i) => {
        if (/^[0-9A-Lxa-syz]$/.test(part)) {
          return (
            <span key={i} className="muysca-numbers-font" style={{ 
              fontSize: '1.2em', 
              verticalAlign: 'middle', 
              margin: '0 0.1rem',
              display: 'inline-block'
            }}>
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

const Glyph = ({ num, size = "small" }) => {
  return (
    <div className={`glyph-svg ${num.id >= 11 ? 'foot' : ''} ${size} muysca-numbers-font`}>
      {num.glyph}
    </div>
  );
};

const ObjectCounter = ({ count, language }) => {
  const t = translations[language].objects;
  const paths = Object.keys(illustrationFiles);
  
  const categories = useMemo(() => {
    return [...new Set(paths.map(p => p.split('/')[3]))].filter(Boolean);
  }, [paths]);

  const selectedCategory = useMemo(() => {
    return categories[Math.floor(Math.random() * categories.length)];
  }, [categories]);

  const categoryImages = useMemo(() => {
    if (!selectedCategory) return [];
    return paths
      .filter(p => p.includes(`/${selectedCategory}/`))
      .map(p => {
        const module = illustrationFiles[p];
        return typeof module === 'string' ? module : module.default;
      })
      .filter(Boolean);
  }, [selectedCategory, paths]);

  const items = useMemo(() => {
    if (categoryImages.length === 0) return [];
    return Array.from({ length: count }, (_, i) => {
      const isFlipped = Math.random() > 0.5 ? -1 : 1;
      return {
        imgSrc: categoryImages[Math.floor(Math.random() * categoryImages.length)],
        style: {
          transform: `rotate(${Math.random() * 20 - 10}deg) scale(${0.9 + Math.random() * 0.2}) scaleX(${isFlipped})`,
          margin: `${Math.random() * 5}px`,
        }
      };
    });
  }, [count, categoryImages]);

  return (
    <div className="object-counter-container">
      <h3>{t.format(count, t.names[selectedCategory])}</h3>
      <div className={`objects-territory ${count > 10 ? 'many-items' : 'few-items'}`}>
        {items.map((item, i) => (
          <div key={i} className="object-item-wrapper" style={item.style}>
            <img src={item.imgSrc} alt={selectedCategory} className="object-img" />
          </div>
        ))}
        {count === 0 && <p className="empty-msg">{t.empty}</p>}
      </div>
    </div>
  );
};

const Confetti = ({ language }) => (
  <div className="confetti-container">
    {Array.from({ length: 60 }).map((_, i) => (
      <div key={i} className="confetti-piece" style={{
        left: `${Math.random() * 100}%`,
        backgroundColor: ['#FFD166', '#EF476F', '#06D6A0', '#118AB2'][Math.floor(Math.random() * 4)],
        animationDelay: `${Math.random() * 3}s`,
        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
        width: `${Math.random() * 10 + 8}px`,
        height: `${Math.random() * 10 + 8}px`
      }} />
    ))}
    <div className="feedback-popup">
      <h2>{translations[language].play.wellDone}</h2>
    </div>
  </div>
);

const NumberDetail = ({ number, language, onUpdateSelection, t }) => {
  const [showGlyph, setShowGlyph] = useState(false);

  // Resetear la vista al cambiar de número
  useEffect(() => {
    setShowGlyph(false);
  }, [number?.id]);

  if (!number) return null;

  return (
    <div className="detail-panel expanded" onClick={e => e.stopPropagation()}>
      <div className="detail-header">
        <div className="detail-title-group">
          <div className="name-row">
            <h2 className="detail-title">{number.name.toUpperCase()} {number.lugo_name && <span className="lugo-name">, {number.lugo_name}</span>}</h2>
            
          </div>
          {number.fon && <span className="phonology-aid">{number.fon}</span>}
        </div>
        <button className="sound-button" onClick={() => playSound(number.name)}>
          🔊
        </button>
      </div>
      <div className="detail-layout">
        <section className="detail-section symbol-side">
          <div className="detail-glyph-box">
            <div className={`pedagogical-stage ${showGlyph ? 'glyph-view' : 'finger-view'}`}>
              <span className="muysca-numbers-font detail-main-char">
                {showGlyph ? number.glyph : number.fingers}
              </span>
            </div>
          </div>
          <button 
            className="toy-button step-button" 
            onClick={() => setShowGlyph(!showGlyph)}
          >
            {showGlyph ? t.learn.showBody : t.learn.discover}
          </button>
        </section>
        <section className="detail-section quantity-side">
          <ObjectCounter count={number.count} language={language} />
        </section>
      </div>
      {onUpdateSelection && (
        <button className="close-btn" onClick={() => onUpdateSelection(null)}>{t.learn.close}</button>
      )}
    </div>
  );
};

function App() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];
  
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentLevel, setCurrentLevel] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  
  const [gameState, setGameState] = useState({
    target: null,
    options: [],
    feedback: null, 
    score: 0
  });

  const getLevelNumbers = () => {
    if (currentLevel === 1) return muyscaNumbers.filter(n => n.id >= 1 && n.id <= 5);
    if (currentLevel === 2) return muyscaNumbers.filter(n => n.id >= 6 && n.id <= 10);
    if (currentLevel === 3) return muyscaNumbers.filter(n => n.id >= 11);
    return [];
  };

  const startNewRound = () => {
    const levelNumbers = getLevelNumbers();
    if (levelNumbers.length === 0) return;
    const target = levelNumbers[Math.floor(Math.random() * levelNumbers.length)];
    let options = [target];
    while (options.length < 3) {
      const randomNum = levelNumbers[Math.floor(Math.random() * levelNumbers.length)];
      if (!options.find(o => o.id === randomNum.id)) options.push(randomNum);
    }
    options = options.sort(() => Math.random() - 0.5);
    setGameState(prev => ({ ...prev, target, options, feedback: null }));
    setTimeout(() => playSound(target.name), 500);
  };

  const handleOptionClick = (num) => {
    if (gameState.feedback === 'correct') return;
    if (num.id === gameState.target.id) {
      setGameState(prev => ({ ...prev, feedback: 'correct', score: prev.score + 1 }));
      setTimeout(startNewRound, 2500);
      playSound('celebration'); 

    } else {
      setGameState(prev => ({ ...prev, feedback: 'incorrect' }));
      playSound(gameState.target.name);
      setTimeout(() => setGameState(prev => ({ ...prev, feedback: null })), 800);
    }
  };

  useEffect(() => {
    if (currentScreen === 'play') startNewRound();
  }, [currentScreen]);

  const renderWelcome = () => (
    <div className="welcome-screen fade-in">
      <div className="lang-toggle">
        <button onClick={() => setLanguage('es')} className={language === 'es' ? 'active' : ''}>ES</button>
        <button onClick={() => setLanguage('chb')} className={language === 'chb' ? 'active' : ''}>CHB</button>
      </div>
      <h1 className="main-title">{t.welcome.title}</h1>
      
      <button className="toy-button start-button" onClick={() => setCurrentScreen('level-select')}>
        {t.welcome.start}
      </button>
    </div>
  );

  const renderLevelSelect = () => (
    <div className="level-select-screen fade-in">
      <h2>{t.levelSelect.title}</h2>
      <div className="level-grid">
        <button onClick={() => { setCurrentLevel(1); setCurrentScreen('dashboard'); }} className="toy-button level-card level-1">
          <span className="level-number">1</span>
          <span>{t.levelSelect.level1}</span>
        </button>
        <button onClick={() => { setCurrentLevel(2); setCurrentScreen('dashboard'); }} className="toy-button level-card level-2">
          <span className="level-number">2</span>
          <span>{t.levelSelect.level2}</span>
        </button>
        <button onClick={() => { setCurrentLevel(3); setCurrentScreen('dashboard'); }} className="toy-button level-card level-3">
          <span className="level-number">3</span>
          <span>{t.levelSelect.level3}</span>
        </button>
      </div>
      <button className="back-link" onClick={() => setCurrentScreen('welcome')}>{t.levelSelect.back}</button>
    </div>
  );

  const renderDashboard = () => (
    <div className="dashboard-screen fade-in">
      <nav className="top-nav">
        <button className="back-button" onClick={() => setCurrentScreen('level-select')}>{t.dashboard.changeLevel}</button>
        <div className="level-indicator">
          {t.dashboard.level(currentLevel)}
        </div>
      </nav>
      <div className="menu-grid">
        <button className="toy-button menu-button learn" onClick={() => setCurrentScreen('learn')}>
          <div className="menu-icon">🖐️</div>
          <span>{t.dashboard.learn}</span>
        </button>
        <button className="toy-button menu-button play" onClick={() => setCurrentScreen('play')}>
          <div className="menu-icon">🧩</div>
          <span>{t.dashboard.play}</span>
        </button>
      </div>
    </div>
  );

  const renderLearn = () => (
    <div className="learn-screen fade-in">
      <nav className="top-nav">
        <button className="back-button" onClick={() => setCurrentScreen('dashboard')}>{t.learn.menu}</button>
        <h2>{t.learn.title(currentLevel)}</h2>
      </nav>
      <div className="learn-content-layout">
        <div className="numbers-sidebar">
          <div className="numbers-grid">
            {getLevelNumbers().map((num) => (
              <div 
                key={num.id} 
                className={`number-card ${selectedNumber?.id === num.id ? 'selected' : ''}`} 
                onClick={() => {
                  setSelectedNumber(num);
                  playSound(num.name);
                }}
              >
                <Glyph num={num} />
                <span className="card-name">{num.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="detail-view-panel">
          {selectedNumber ? (
            <NumberDetail number={selectedNumber} language={language} t={t} />
          ) : (
            <div className="select-prompt">
              <div className="prompt-icon">👈</div>
              <p>{t.learn.selectPrompt}</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal only shown on mobile/portrait via CSS */}
      {selectedNumber && (
        <div className="modal-overlay" onClick={() => setSelectedNumber(null)}>
          <NumberDetail 
            number={selectedNumber} 
            language={language} 
            onUpdateSelection={setSelectedNumber} 
            t={t} 
          />
        </div>
      )}
    </div>
  );

  const renderPlay = () => (
    <div className="play-screen fade-in">
      <nav className="top-nav">
        <button className="back-button" onClick={() => { setCurrentScreen('dashboard'); setGameState(prev => ({...prev, score: 0})); }}>{t.play.menu}</button>
        <div className="score-badge">✨ {gameState.score}</div>
      </nav>
      {gameState.target && (
        <div className="game-container">
          {gameState.feedback === 'correct' && <Confetti language={language} />}
          <div className="instruction-zone">
            <h2>{t.play.find}</h2>
            <div className="target-name-container">
              <div className="target-name">{gameState.target.name.toUpperCase()}</div>
              <button className="sound-button" onClick={() => playSound(gameState.target.name)}>
                🔊
              </button>
            </div>
          </div>
          <div className="options-grid">
            {gameState.options.map((option) => (
              <div 
                key={option.id}                 
                className={`option-card ${gameState.feedback === 'correct' && option.id === gameState.target.id ? 'celebrate' : ''} ${gameState.feedback === 'incorrect' ? 'shake' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                <Glyph num={option} size="medium" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="app-container">
      {/* Dev Font Preview - Muestra la secuencia completa del mapa definitivo */}
      {/*}
      <div className="muysca-numbers-font" style={{ 
        padding: '1rem', 
        background: '#fff', 
        borderBottom: '4px solid var(--primary-teal)',
        fontSize: '2rem',
        textAlign: 'center',
        letterSpacing: '8px',
        color: 'var(--primary-teal)',
        zIndex: 10000,
        position: 'relative',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        0123456789A BCDEFGHJ KL abcde fghij klmno pqrs xy
      </div>
      */}

      {currentScreen === 'welcome' && renderWelcome()}
      {currentScreen === 'level-select' && renderLevelSelect()}
      {currentScreen === 'dashboard' && renderDashboard()}
      {currentScreen === 'learn' && renderLearn()}
      {currentScreen === 'play' && renderPlay()}
    </div>
  );
}

export default App;
