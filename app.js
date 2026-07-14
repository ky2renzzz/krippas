// KRIPPAS Game Logic & UI Manager

// --- Audio Manager (Web Audio API Synthesizer) ---
class AudioManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playSwipe() {
    if (!this.enabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playSelect() {
    if (!this.enabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.setValueAtTime(800, this.ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  playGameOver() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    const freqs = [100, 125, 150, 180];
    freqs.forEach((f) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, now);
      osc.frequency.linearRampToValueAtTime(f * 0.8, now + 1.6);
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 1.6);
    });
  }

  playChime() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((note, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, now + index * 0.08);
      
      gain.gain.setValueAtTime(0.04, now + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.4);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.45);
    });
  }
}

const audio = new AudioManager();

// Character Themes (Colors matching the Reigns stylistic screenshots)
const THEMES = {
  welcome: {
    bg: '#c2a76f',
    panel: '#ebd9a0',
    border: '#362511',
    textDark: '#221a0f',
    skyColor: '#121820'
  },
  elon: {
    bg: '#47312a', // Rust red/brown Mars style
    panel: '#a38174',
    border: '#2e1913',
    textDark: '#1e0f0b',
    skyColor: '#281510'
  },
  sam: {
    bg: '#253545', // Deep space corporate blue
    panel: '#67819c',
    border: '#111b24',
    textDark: '#081017',
    skyColor: '#0a141d'
  },
  dario: {
    bg: '#25382b', // Constitutional safety green
    panel: '#658f71',
    border: '#0f1c13',
    textDark: '#07100a',
    skyColor: '#0d2114'
  },
  demis: {
    bg: '#34233c', // Academic research purple
    panel: '#7c5e8c',
    border: '#1e0d24',
    textDark: '#120517',
    skyColor: '#1b0f24'
  },
  zhang: {
    bg: '#3c3625', // Tsinghua ochre/stone style
    panel: '#918667',
    border: '#221d10',
    textDark: '#120f08',
    skyColor: '#1f1a10'
  }
};

// --- Vector SVGs generation for Reigns-like geometric portraits with classic diagonal lighting shafts ---
const PORTRAIT_SHADOW = `<polygon points="0,0 75,0 35,100 0,100" fill="rgba(255, 255, 255, 0.12)"/>
  <polygon points="75,0 100,0 60,100 35,100" fill="rgba(0, 0, 0, 0.08)"/>`;

const PORTRAITS = {
  system: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#2d2218"/>
    <polygon points="50,15 85,35 85,75 50,90 15,75 15,35" fill="#4d3b2a" stroke="#ebd9a0" stroke-width="2"/>
    <circle cx="50" cy="53" r="18" fill="#1b140e" stroke="#8e1c19" stroke-width="1.5"/>
    <line x1="50" y1="15" x2="50" y2="35" stroke="#ebd9a0" stroke-width="1.5"/>
    ${PORTRAIT_SHADOW}
  </svg>`,
  
  elon: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#2d221e"/>
    <polygon points="50,95 15,50 50,20 85,50" fill="#44322c"/>
    <polygon points="50,20 32,50 50,62 68,50" fill="#fcf6eb"/> <!-- Face -->
    <polygon points="32,50 50,82 68,50 50,62" fill="#decab2"/> <!-- Chin/Jaw -->
    <polygon points="40,25 60,25 65,15 35,15" fill="#1f1410"/> <!-- Hair -->
    <rect x="38" y="44" width="7" height="3" fill="#1f1410"/> <!-- Eyes -->
    <rect x="55" y="44" width="7" height="3" fill="#1f1410"/>
    <polygon points="46,54 54,54 50,59" fill="#decab2"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  sam: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1d2c3d"/>
    <polygon points="10,100 50,60 90,100" fill="#283d54"/> <!-- Suit -->
    <polygon points="50,60 38,80 50,86 62,80" fill="#ffffff"/> <!-- Collar -->
    <polygon points="30,30 70,30 74,56 50,75 26,56" fill="#ecd2be"/> <!-- Face -->
    <polygon points="28,30 72,30 65,14 35,14" fill="#6e4c3e"/> <!-- Hair -->
    <rect x="36" y="43" width="7" height="3" fill="#3a2215"/>
    <rect x="57" y="43" width="7" height="3" fill="#3a2215"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  dario: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1d3023"/>
    <polygon points="10,100 50,65 90,100" fill="#2d4a36"/> <!-- Coat -->
    <polygon points="30,26 70,26 74,55 50,72 26,55" fill="#f0d5c3"/> <!-- Face -->
    <rect x="31" y="38" width="14" height="11" fill="none" stroke="#362511" stroke-width="2.5"/> <!-- Glasses -->
    <rect x="55" y="38" width="14" height="11" fill="none" stroke="#362511" stroke-width="2.5"/>
    <line x1="45" y1="43" x2="55" y2="43" stroke="#362511" stroke-width="2"/>
    <!-- Curly Hair -->
    <path d="M 28 26 C 20 16, 40 6, 50 16 C 60 6, 80 16, 72 26 Z" fill="#5c4335"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  demis: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#2d1c33"/>
    <polygon points="15,100 50,62 85,100" fill="#3e2947"/>
    <polygon points="32,26 68,26 71,55 50,72 29,55" fill="#eed1bd"/> <!-- Face -->
    <polygon points="30,26 70,26 66,15 34,15" fill="#1c0f24"/> <!-- Hair -->
    <circle cx="42" cy="43" r="3" fill="#221105"/>
    <circle cx="58" cy="43" r="3" fill="#221105"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  zhang: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#2e2b1f"/>
    <polygon points="15,100 50,65 85,100" fill="#3d3725"/>
    <polygon points="32,28 68,28 72,56 50,72 28,56" fill="#fadcbe"/>
    <polygon points="30,28 70,28 66,13 34,13" fill="#0d0c08"/>
    <!-- Glasses -->
    <rect x="33" y="40" width="12" height="8" fill="none" stroke="#0d0c08" stroke-width="2"/>
    <rect x="55" y="40" width="12" height="8" fill="none" stroke="#0d0c08" stroke-width="2"/>
    <line x1="45" y1="44" x2="55" y2="44" stroke="#0d0c08" stroke-width="2"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  engineer: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#282a2d"/>
    <polygon points="25,100 50,70 75,100" fill="#1d2a3d"/>
    <polygon points="34,35 66,35 68,60 50,72 32,60" fill="#f0dcd0"/>
    <polygon points="30,35 70,35 65,22 35,22" fill="#8e1c19"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  politician: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1b1b2a"/>
    <polygon points="15,100 50,60 85,100" fill="#2c3a5e"/>
    <polygon points="30,25 70,25 73,55 50,73 27,55" fill="#f2d5c4"/>
    <polygon points="27,25 73,25 65,10 35,10" fill="#d2d8e0"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  investor: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#222b25"/>
    <polygon points="20,100 50,65 80,100" fill="#2a4d33"/>
    <polygon points="32,28 68,28 72,56 50,72 28,56" fill="#fcdcbb"/>
    <circle cx="40" cy="44" r="7" fill="none" stroke="#d4af37" stroke-width="2"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  lawyer: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#2e1b1b"/>
    <polygon points="20,100 50,65 80,100" fill="#4d2424"/>
    <polygon points="32,30 68,30 70,55 50,70 30,55" fill="#ecdcd0"/>
    <polygon points="30,30 70,30 65,20 35,20" fill="#1c0a0a"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  board: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#2b2b2b"/>
    <polygon points="20,100 50,60 80,100" fill="#151515"/>
    <polygon points="33,26 67,26 70,54 50,70 30,54" fill="#eed1bd"/>
    <rect x="35" y="38" width="10" height="6" fill="none" stroke="#8e1c19" stroke-width="2"/>
    <rect x="55" y="38" width="10" height="6" fill="none" stroke="#8e1c19" stroke-width="2"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  ilya: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#22232b"/>
    <polygon points="20,100 50,66 80,100" fill="#2f354f"/>
    <polygon points="32,28 68,28 72,56 50,72 28,56" fill="#eed3bd"/>
    <path d="M 28 28 Q 20 15, 35 15 Q 50 15, 65 15 Q 80 15, 72 28" fill="#544335"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  sundar: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#122030"/>
    <polygon points="15,100 50,64 85,100" fill="#25354f"/>
    <polygon points="33,26 67,26 70,54 50,70 30,54" fill="#d8b29c"/>
    <polygon points="30,26 70,26 65,16 35,16" fill="#1d1d18"/>
    <polygon points="30,52 50,70 70,52 70,58 50,74 30,58" fill="#1d1d18"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  friend: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#222e3f"/>
    <polygon points="20,100 50,70 80,100" fill="#4d648d"/>
    <polygon points="34,35 66,35 68,60 50,72 32,60" fill="#ecdcd0"/>
    <circle cx="50" cy="28" r="14" fill="#e2b27d"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  sam_npc: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1d2c3d"/>
    <polygon points="15,100 50,60 85,100" fill="#283d54"/>
    <polygon points="30,30 70,30 74,56 50,75 26,56" fill="#ecd2be"/>
    <polygon points="28,30 72,30 65,14 35,14" fill="#6e4c3e"/>
    <!-- Glowing blue cybereyes -->
    <circle cx="40" cy="43" r="2.5" fill="#00ffaa"/>
    <circle cx="60" cy="43" r="2.5" fill="#00ffaa"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  dead: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#110508"/>
    <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="#2d050c" stroke="#8e1c19" stroke-width="2"/>
    <line x1="30" y1="35" x2="45" y2="50" stroke="#8e1c19" stroke-width="3"/>
    <line x1="45" y1="35" x2="30" y2="50" stroke="#8e1c19" stroke-width="3"/>
    <line x1="55" y1="35" x2="70" y2="50" stroke="#8e1c19" stroke-width="3"/>
    <line x1="70" y1="35" x2="55" y2="50" stroke="#8e1c19" stroke-width="3"/>
    <path d="M 35 70 Q 50 55, 65 70" fill="none" stroke="#8e1c19" stroke-width="3"/>
    ${PORTRAIT_SHADOW}
  </svg>`
};

// Objectives now live on CHARACTERS in data.js

// --- Game Engine Class ---
class GameEngine {
  constructor() {
    this.state = {
      gameState: 'welcome',
      quizAnswers: emptyQuizScores(),
      quizStep: 0,
      currentCharacter: null,
      currentCardNode: null,
      stats: { capital: 50, hype: 50, compute: 50, safety: 50 },
      timeInPower: 0,
      unlockedEndings: [],
      completedObjectives: []
    };

    this.dragStart = { x: 0, y: 0 };
    this.dragOffset = { x: 0, y: 0 };
    this.isDragging = false;

    this.initDOM();
    this.bindEvents();
    this.loadStatsFromStorage();
    this.updateEndingsUI();
    this.applyTheme('welcome');
  }

  getCharacterConfig(id = this.state.currentCharacter) {
    return getCharacter(id);
  }

  getStory(id = this.state.currentCharacter) {
    return window.STORY_DATA && window.STORY_DATA[id] ? window.STORY_DATA[id] : null;
  }

  getObjectives(id = this.state.currentCharacter) {
    const config = this.getCharacterConfig(id);
    return config && config.objectives ? config.objectives : [];
  }

  defaultStats() {
    return { capital: 50, hype: 50, compute: 50, safety: 50 };
  }

  cloneStats(source) {
    const base = this.defaultStats();
    if (!source) return { ...base };
    STAT_KEYS.forEach((key) => {
      if (typeof source[key] === 'number') {
        base[key] = Math.max(0, Math.min(100, source[key]));
      }
    });
    return base;
  }

  initDOM() {
    this.screens = {
      welcome: document.getElementById('screen-welcome'),
      quiz: document.getElementById('screen-quiz'),
      reveal: document.getElementById('screen-reveal'),
      game: document.getElementById('screen-game'),
      gameover: document.getElementById('screen-gameover')
    };

    this.btnStartQuiz = document.getElementById('btn-start-quiz');
    this.btnStartGame = document.getElementById('btn-start-game');
    this.btnRestart = document.getElementById('btn-restart');
    this.btnToggleSound = document.getElementById('btn-toggle-sound');
    
    this.btnSwipeLeft = document.getElementById('btn-swipe-left');
    this.btnSwipeRight = document.getElementById('btn-swipe-right');

    this.mainCard = document.getElementById('main-card');
    this.cardWrapper = document.querySelector('.card-wrapper');
    this.indicatorLeft = document.getElementById('indicator-left');
    this.indicatorRight = document.getElementById('indicator-right');

    this.dialogueText = document.getElementById('dialogue-text');
    this.speakerName = document.getElementById('speaker-name');
    this.cardPortrait = document.getElementById('card-portrait');
    this.hudPlayerName = document.getElementById('hud-player-name');
    this.hudPlayerRole = document.getElementById('hud-player-role');
    this.hudTimeVal = document.getElementById('hud-time-val');
    this.hudTimeUnit = document.getElementById('hud-time-unit');

    this.narrativeLog = document.getElementById('narrative-log');
    this.endingsBadge = document.getElementById('unlocked-endings-count');
    this.objectivesChecklist = document.getElementById('objectives-checklist');
  }

  loadStatsFromStorage() {
    try {
      const savedEndings = localStorage.getItem('krippas_endings');
      if (savedEndings) {
        this.state.unlockedEndings = JSON.parse(savedEndings);
        this.updateEndingsUI();
      }
      const savedObjectives = localStorage.getItem('krippas_objectives');
      if (savedObjectives) {
        this.state.completedObjectives = JSON.parse(savedObjectives);
      }
    } catch (e) {
      console.warn("Storage read failed", e);
    }
  }

  saveEndingToStorage(endingKey) {
    if (!this.state.unlockedEndings.includes(endingKey)) {
      this.state.unlockedEndings.push(endingKey);
      try {
        localStorage.setItem('krippas_endings', JSON.stringify(this.state.unlockedEndings));
      } catch (e) {
        console.warn("Storage write failed", e);
      }
      this.updateEndingsUI();
    }
  }

  updateEndingsUI() {
    const total = typeof TOTAL_ENDINGS === 'number' ? TOTAL_ENDINGS : 40;
    this.endingsBadge.innerText = `${this.state.unlockedEndings.length} / ${total}`;
  }

  applyTheme(themeKey) {
    const theme = THEMES[themeKey] || THEMES.welcome;
    document.documentElement.style.setProperty('--bg-color', theme.bg);
    document.documentElement.style.setProperty('--panel-bg', theme.panel);
    document.documentElement.style.setProperty('--card-border', theme.border);
    document.documentElement.style.setProperty('--text-dark', theme.textDark);

    // Apply background sky color dynamically
    const bgScene = document.getElementById('bg-scene');
    if (bgScene) {
      bgScene.style.backgroundColor = theme.skyColor;
    }
  }

  bindEvents() {
    this.btnStartQuiz.addEventListener('click', () => this.transitionTo('quiz'));
    this.btnStartGame.addEventListener('click', () => this.transitionTo('game'));
    this.btnRestart.addEventListener('click', () => this.resetGame());
    this.btnToggleSound.addEventListener('click', () => this.toggleSound());

    this.btnSwipeLeft.addEventListener('click', () => this.performChoice('left'));
    this.btnSwipeRight.addEventListener('click', () => this.performChoice('right'));

    document.addEventListener('keydown', (e) => {
      if (this.state.gameState !== 'game') return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        this.performChoice('left');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        this.performChoice('right');
      }
    });

    this.cardWrapper.addEventListener('mousedown', (e) => this.dragStartHandler(e));
    this.cardWrapper.addEventListener('touchstart', (e) => this.dragStartHandler(e), { passive: true });

    document.addEventListener('mousemove', (e) => this.dragMoveHandler(e));
    document.addEventListener('touchmove', (e) => this.dragMoveHandler(e), { passive: false });

    document.addEventListener('mouseup', () => this.dragEndHandler());
    document.addEventListener('touchend', () => this.dragEndHandler());
  }

  toggleSound() {
    audio.enabled = !audio.enabled;
    this.btnToggleSound.innerText = audio.enabled ? "🔊 SOUND ON" : "🔇 SOUND OFF";
    audio.playSelect();
  }

  transitionTo(screenName) {
    audio.playSelect();
    Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
    this.screens[screenName].classList.add('active');
    this.state.gameState = screenName;

    if (screenName === 'quiz') {
      this.applyTheme('welcome');
      this.state.quizStep = 0;
      this.state.quizAnswers = emptyQuizScores();
      this.renderQuizQuestion();
    } else if (screenName === 'game') {
      this.applyTheme(this.state.currentCharacter);
      this.startGameSession();
    } else if (screenName === 'welcome') {
      this.applyTheme('welcome');
      this.narrativeLog.innerHTML = '<div class="log-item">System ready. Start assessment to begin.</div>';
      this.objectivesChecklist.innerHTML = '';
      this.hudPlayerName.innerText = '—';
      this.hudPlayerRole.innerText = '—';
      this.hudTimeVal.innerText = '0';
      this.hudTimeUnit.innerText = 'quarters';
    }
  }

  // --- Quiz ---
  renderQuizQuestion() {
    const quiz = window.STORY_DATA && window.STORY_DATA.quiz;
    if (!quiz || !quiz[this.state.quizStep]) {
      console.error('Quiz data missing');
      return;
    }

    const question = quiz[this.state.quizStep];
    const progress = (this.state.quizStep / quiz.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    document.getElementById('quiz-question-text').innerText = question.text;

    const optLeft = document.getElementById('quiz-opt-left');
    const optRight = document.getElementById('quiz-opt-right');
    const freshLeft = optLeft.cloneNode(true);
    const freshRight = optRight.cloneNode(true);
    freshLeft.innerText = question.left.text;
    freshRight.innerText = question.right.text;
    optLeft.replaceWith(freshLeft);
    optRight.replaceWith(freshRight);

    freshLeft.addEventListener('click', () => this.quizAnswerSelect('left'));
    freshRight.addEventListener('click', () => this.quizAnswerSelect('right'));
  }

  quizAnswerSelect(choice) {
    audio.playSwipe();
    const quiz = window.STORY_DATA.quiz;
    const question = quiz[this.state.quizStep];
    if (!question) return;

    const branch = choice === 'left' ? question.left : question.right;
    const points = branch && branch.points ? branch.points : {};

    for (const key in points) {
      if (Object.prototype.hasOwnProperty.call(this.state.quizAnswers, key)) {
        this.state.quizAnswers[key] += points[key];
      }
    }

    this.state.quizStep++;
    if (this.state.quizStep < quiz.length) {
      this.renderQuizQuestion();
    } else {
      this.calculateQuizResults();
    }
  }

  calculateQuizResults() {
    let maxChar = CHARACTER_IDS[0] || 'elon';
    let maxScore = -1;

    for (const key in this.state.quizAnswers) {
      if (this.state.quizAnswers[key] > maxScore) {
        maxScore = this.state.quizAnswers[key];
        maxChar = key;
      }
    }

    const config = this.getCharacterConfig(maxChar);
    if (!config) {
      console.error('Unknown character from quiz:', maxChar);
      maxChar = CHARACTER_IDS[0];
    }

    this.state.currentCharacter = maxChar;
    const charConfig = this.getCharacterConfig(maxChar);

    document.getElementById('reveal-portrait').innerHTML = PORTRAITS[maxChar] || PORTRAITS.system;
    document.getElementById('reveal-name').innerText = charConfig.nameDisplay;
    document.getElementById('reveal-role').innerText = `${charConfig.role} (${charConfig.company})`;
    document.getElementById('reveal-description').innerText = charConfig.description;

    this.transitionTo('reveal');
  }

  // --- Game Loop ---
  startGameSession() {
    audio.playChime();

    const charConfig = this.getCharacterConfig();
    const story = this.getStory();
    if (!charConfig || !story) {
      console.error('Cannot start session: missing character or story data');
      this.transitionTo('welcome');
      return;
    }

    this.state.stats = this.cloneStats(charConfig.initialStats);
    this.state.timeInPower = 0;
    this.state.currentCardNode = story.start;
    this.hudTimeVal.innerText = '0';

    this.hudPlayerName.innerText = charConfig.nameDisplay;
    this.hudPlayerRole.innerText = charConfig.company;
    this.hudTimeUnit.innerText = charConfig.timeUnit;

    this.narrativeLog.innerHTML = `<div class="log-item">Initialized session for ${charConfig.nameDisplay}...</div>`;

    this.initObjectivesUI();
    this.updateStatsUI();
    this.renderCurrentCard();
  }

  initObjectivesUI() {
    const list = this.getObjectives();
    this.objectivesChecklist.innerHTML = '';
    list.forEach((obj) => {
      const isCompleted = this.state.completedObjectives.includes(
        `${this.state.currentCharacter}_${obj.key}`
      );
      const item = document.createElement('div');
      item.className = 'obj-item';
      item.innerHTML = `<span class="obj-checkbox ${isCompleted ? 'checked' : ''}"></span> <span>${obj.text}</span>`;
      this.objectivesChecklist.appendChild(item);
    });
  }

  completeObjective(key) {
    const list = this.getObjectives();
    const obj = list.find((o) => o.key === key);
    const storageKey = `${this.state.currentCharacter}_${key}`;
    if (obj && !this.state.completedObjectives.includes(storageKey)) {
      this.state.completedObjectives.push(storageKey);
      try {
        localStorage.setItem('krippas_objectives', JSON.stringify(this.state.completedObjectives));
      } catch (e) {
        console.warn('Storage write failed', e);
      }

      this.initObjectivesUI();

      const logMsg = `<div class="log-item system">OBJECTIVE ACHIEVED: ${obj.text}</div>`;
      this.narrativeLog.insertAdjacentHTML('afterbegin', logMsg);
    }
  }

  renderCurrentCard() {
    const story = this.getStory();
    if (!story) return;

    const node = story.nodes[this.state.currentCardNode];
    if (!node) {
      this.state.currentCardNode = story.start;
      this.renderCurrentCard();
      return;
    }

    this.dialogueText.innerText = node.text;
    this.speakerName.innerText = node.speaker;

    const portraitKey = node.avatar || 'engineer';
    this.cardPortrait.innerHTML = PORTRAITS[portraitKey] || PORTRAITS.engineer;

    this.indicatorLeft.innerText = node.left ? node.left.text : '';
    this.indicatorRight.innerText = node.right ? node.right.text : '';

    this.mainCard.style.transform = 'rotate(0deg) translate(0px, 0px)';
    this.indicatorLeft.style.opacity = 0;
    this.indicatorRight.style.opacity = 0;
    this.hideChangeDots();
  }

  dragStartHandler(e) {
    if (this.state.gameState !== 'game') return;
    this.isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    this.dragStart.x = clientX;
    this.dragStart.y = clientY;
    this.mainCard.style.transition = 'none';
  }

  dragMoveHandler(e) {
    if (!this.isDragging || this.state.gameState !== 'game') return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    this.dragOffset.x = clientX - this.dragStart.x;
    this.dragOffset.y = clientY - this.dragStart.y;

    const rotation = this.dragOffset.x * 0.08;
    this.mainCard.style.transform = `translate(${this.dragOffset.x}px, ${this.dragOffset.y * 0.15}px) rotate(${rotation}deg)`;

    const story = this.getStory();
    const node = story && story.nodes ? story.nodes[this.state.currentCardNode] : null;
    if (!node) return;

    if (this.dragOffset.x > 30) {
      this.indicatorRight.style.opacity = Math.min((this.dragOffset.x - 30) / 70, 1);
      this.indicatorLeft.style.opacity = 0;
      this.showChangeDots(node.right && node.right.effects);
    } else if (this.dragOffset.x < -30) {
      this.indicatorLeft.style.opacity = Math.min((-this.dragOffset.x - 30) / 70, 1);
      this.indicatorRight.style.opacity = 0;
      this.showChangeDots(node.left && node.left.effects);
    } else {
      this.indicatorLeft.style.opacity = 0;
      this.indicatorRight.style.opacity = 0;
      this.hideChangeDots();
    }
  }

  dragEndHandler() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.mainCard.style.transition = 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)';

    if (this.dragOffset.x > 100) {
      this.performChoice('right');
    } else if (this.dragOffset.x < -100) {
      this.performChoice('left');
    } else {
      this.mainCard.style.transform = 'rotate(0deg) translate(0px, 0px)';
      this.indicatorLeft.style.opacity = 0;
      this.indicatorRight.style.opacity = 0;
      this.hideChangeDots();
    }
    this.dragOffset = { x: 0, y: 0 };
  }

  performChoice(direction) {
    if (this.state.gameState !== 'game') return;

    const story = this.getStory();
    const node = story && story.nodes ? story.nodes[this.state.currentCardNode] : null;
    if (!node) return;

    const choice = direction === 'left' ? node.left : node.right;
    if (!choice) return;

    audio.playSwipe();

    const actionKey = `card_${this.state.currentCardNode}_${direction}`;
    this.completeObjective(actionKey);
    this.completeObjective(`card_${this.state.currentCardNode}`);

    if (choice.effects) {
      for (const stat in choice.effects) {
        if (!Object.prototype.hasOwnProperty.call(this.state.stats, stat)) continue;
        this.state.stats[stat] += choice.effects[stat];
        this.state.stats[stat] = Math.max(0, Math.min(100, this.state.stats[stat]));
      }
    }

    this.state.timeInPower++;
    this.hudTimeVal.innerText = this.state.timeInPower;

    if (this.state.timeInPower >= 10) {
      this.completeObjective('time_10');
    }

    const preview = node.text.length > 30 ? `${node.text.slice(0, 30)}...` : node.text;
    const logMsg = `<div class="log-item">"${preview}"<br/>→ <span class="player-choice">${choice.text}</span></div>`;
    this.narrativeLog.insertAdjacentHTML('afterbegin', logMsg);

    this.updateStatsUI();

    const triggerGameOver = this.checkGameOverTriggers();
    if (triggerGameOver) {
      this.triggerGameOverSequence(triggerGameOver);
      return;
    }

    this.state.currentCardNode = choice.next || story.start;
    this.renderCurrentCard();
  }

  showChangeDots(effects) {
    this.hideChangeDots();
    if (!effects) return;
    for (const stat in effects) {
      if (effects[stat] !== 0) {
        const query = document.querySelector(`#stat-${stat} .change-dot`);
        if (query) query.classList.add('active');
      }
    }
  }

  hideChangeDots() {
    document.querySelectorAll('.change-dot').forEach((dot) => dot.classList.remove('active'));
  }

  updateStatsUI() {
    for (const stat of STAT_KEYS) {
      const val = this.state.stats[stat] ?? 50;
      const fill = document.querySelector(`#stat-${stat} .bar-fill`);
      const indicator = document.getElementById(`stat-${stat}`);

      if (fill) fill.style.height = `${val}%`;

      if (indicator) {
        if (val <= 15 || val >= 85) {
          indicator.classList.add('danger');
        } else {
          indicator.classList.remove('danger');
        }
      }
    }
  }

  checkGameOverTriggers() {
    for (const stat of STAT_KEYS) {
      const val = this.state.stats[stat];
      if (val <= 0) return `${stat}_low`;
      if (val >= 100) return `${stat}_high`;
    }
    return null;
  }

  triggerGameOverSequence(reasonKey) {
    audio.playGameOver();

    const endingSignature = `${this.state.currentCharacter}_${reasonKey}`;
    this.saveEndingToStorage(endingSignature);

    const byChar = window.STORY_DATA && window.STORY_DATA.game_over
      ? window.STORY_DATA.game_over[this.state.currentCharacter]
      : null;
    const gameOverData = byChar ? byChar[reasonKey] : null;
    const fallback =
      'Your empire collapses under its own contradictions. The protocol terminates.';

    document.getElementById('gameover-text').innerText =
      gameOverData && gameOverData.text ? gameOverData.text : fallback;
    document.getElementById('gameover-portrait').innerHTML = PORTRAITS.dead;

    this.transitionTo('gameover');
  }

  resetGame() {
    this.state.currentCharacter = null;
    this.state.currentCardNode = null;
    this.state.stats = this.defaultStats();
    this.state.timeInPower = 0;
    this.state.quizStep = 0;
    this.state.quizAnswers = emptyQuizScores();
    this.hideChangeDots();
    this.updateStatsUI();
    this.transitionTo('welcome');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.Game = new GameEngine();
});
