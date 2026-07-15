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

// Character Themes — maps character id or speaker type to a full color palette
const THEMES = {
  welcome: {
    bg: '#f5f0e8',
    panel: '#faf7f0',
    border: '#2a241a',
    textDark: '#1a1510',
    skyColor: '#181410'
  },
  // Character themes — warm retro-minimal palettes
  elon:       { bg: '#f2e8e4', panel: '#faf4f0', border: '#3d2018', textDark: '#1a1008', skyColor: '#1c1410' },
  sam:        { bg: '#e8ecf2', panel: '#f2f4f8', border: '#1a2840', textDark: '#0a1018', skyColor: '#101820' },
  dario:      { bg: '#eaf0ea', panel: '#f4f8f2', border: '#1a3020', textDark: '#081008', skyColor: '#101810' },
  demis:      { bg: '#f0e8f2', panel: '#f8f2f8', border: '#281a38', textDark: '#100818', skyColor: '#181020' },
  zhang:      { bg: '#f0ece4', panel: '#f8f4ec', border: '#2a2418', textDark: '#100c08', skyColor: '#1a1810' },

  // Speaker-type themes — subtle, understated
  engineer:   { bg: '#eceef0', panel: '#f4f6f8', border: '#1c2028', textDark: '#0c1014', skyColor: '#141820' },
  investor:   { bg: '#eef0ec', panel: '#f6f8f4', border: '#1a2818', textDark: '#0a1008', skyColor: '#101810' },
  politician: { bg: '#eaecf0', panel: '#f4f6fa', border: '#181c2a', textDark: '#080a14', skyColor: '#101420' },
  regulator:  { bg: '#eeebe8', panel: '#f6f4f2', border: '#2a2018', textDark: '#100c08', skyColor: '#181410' },
  staff:      { bg: '#eeeef0', panel: '#f6f6f8', border: '#1c1e22', textDark: '#0c0e10', skyColor: '#16181c' },
  journalist: { bg: '#eeeaec', panel: '#f6f4f6', border: '#281a20', textDark: '#10080c', skyColor: '#181418' },
  scientist:  { bg: '#eaecf0', panel: '#f4f6fa', border: '#181c2a', textDark: '#080c14', skyColor: '#121620' },
  military:   { bg: '#ebe9e4', panel: '#f4f2ee', border: '#2a2418', textDark: '#100c06', skyColor: '#161410' },
  legal:      { bg: '#ebe8e8', panel: '#f4f2f2', border: '#2a1c1c', textDark: '#0e0808', skyColor: '#161212' },
  academic:   { bg: '#eaeaee', panel: '#f4f4f8', border: '#1c1e28', textDark: '#0a0c14', skyColor: '#14161c' },
  board:      { bg: '#ececec', panel: '#f4f4f4', border: '#1c1c1c', textDark: '#080808', skyColor: '#141414' },
};

// Speaker → type mapping drives which theme + portrait each NPC uses
const SPEAKER_TYPES = {
  // Engineers / technical
  'Chief GPU Officer': 'engineer', 'xAI Lead Engineer': 'engineer', 'xAI Night-Shift Lead': 'engineer',
  'Chief Scientist Office': 'scientist', 'DeepMind Researcher': 'scientist', 'Safety Researcher': 'scientist',
  'Head of ChatGPT': 'engineer', 'Lead Constitution Author': 'scientist', 'Principal Investigator': 'scientist',
  'Research Ops': 'scientist', 'Superalignment Lead': 'scientist', 'Constitutional Team Lead': 'scientist',
  'Red Teamer': 'scientist', 'Jared Kaplan': 'scientist', 'AlphaFold Team Lead': 'scientist',
  'Internal Auditor': 'engineer', 'Logistics Manager': 'engineer', 'Platform Moderator Liaison': 'engineer',

  // Investors / capital
  'Abu Dhabi Sovereign Fund': 'investor', 'Secondary Market Investor': 'investor',
  'Sovereign Fund Partner': 'investor', 'Google Cloud VP': 'investor', 'Microsoft Accountant': 'investor',
  'CFO': 'investor', 'Tesla CFO': 'investor',

  // Politicians / government
  'Senate Committee Chairman': 'politician', 'Senate Counsel': 'politician', 'US Senator': 'politician',
  'Committee Staffer': 'politician', 'DOJ Contact': 'politician', 'State Partner PM': 'politician',
  'Trade Counsel': 'politician', 'Policy Advisor': 'politician', 'Municipal AI Office': 'politician',
  'European Research Host': 'politician', 'Tsinghua University Liaison': 'politician',
  'Royal Society Correspondent': 'politician', 'US Department of Defense': 'military',
  'SpaceX Flight Director': 'military',

  // Regulators
  'SEC Chairman': 'regulator', 'Compliance Inspector': 'regulator', 'Joint Regulatory Panel': 'regulator',
  'Joint Safety Chair': 'regulator', 'Federal Ethics Board': 'regulator',

  // Legal
  'Legal Advisor': 'legal', 'Trade Counsel': 'legal',

  // Staff / internal
  'Chief of Staff': 'staff', 'HR Lead': 'staff', 'People Ops': 'staff', 'Recruiting Lead': 'staff',
  'Marketing Director': 'staff', 'PR Director': 'staff', 'Employee Coalition': 'staff',
  'Loyal PI Cadre': 'staff', 'Zhipu Strategy Desk': 'staff',

  // Journalists / media
  'Whistleblower Journalist': 'journalist', 'Documentary Producer': 'journalist', 'Livestream Host': 'journalist',
  'Nature Editor Contact': 'journalist', 'Internet Desk': 'journalist',

  // Board members
  'Board Chair (New)': 'board', 'Alphabet Board Member': 'board', 'OpenAI Board Rep': 'board',
  'Friendly Board Source': 'board',

  // Corporate execs (use investor/politician theme)
  'Apple Executive': 'investor', 'Microsoft Executive': 'investor', 'Amazon Web Services Rep': 'investor',
  'AWS Account Lead': 'investor', 'Google Cloud Rep': 'investor', 'Google Ethics Lead': 'board',
  'YouTube Ads VP': 'investor', 'X Ad Manager': 'investor', 'X Trust & Safety Lead': 'staff',
  'State-Backed Enterprise CEO': 'investor', 'Domestic Silicon Vendor': 'engineer',
  'University Consortium': 'academic', 'Overseas Academic Partner': 'academic',
  'Overseas Partner': 'investor', 'Climate Science Partner': 'scientist',
  'Competitor Whisper': 'staff', 'Rival Lab Mole': 'staff', 'Anonymous Rival Exec': 'board',
  'Anonymous Staffer': 'staff', 'Unknown Number': 'staff', 'Encrypted Contact': 'staff',
  'Conference Chair': 'academic', 'Old Friend (Dinner)': 'staff', 'Former Student / Friend': 'staff',
  'Partner / Family Call': 'staff',

  // Character cameos — keep their own themes
  'Shivon Zilis': 'elon', 'Greg Brockman': 'sam', 'Ilya Sutskever': 'ilya',
  'Mira Murati': 'sam', 'Satya Nadella': 'investor', 'Helen Toner': 'board',
  'Sundar Pichai': 'board', 'Sergey Brin': 'board', 'Sam Altman': 'sam',
  'Daniela Amodei': 'dario',
};

function getSpeakerType(speaker) {
  if (!speaker) return 'engineer';
  if (SPEAKER_TYPES[speaker]) return SPEAKER_TYPES[speaker];
  // Fallback heuristic
  const s = speaker.toLowerCase();
  if (s.includes('engineer') || s.includes('developer') || s.includes('tech') || s.includes('lead')) return 'engineer';
  if (s.includes('investor') || s.includes('fund') || s.includes('capital') || s.includes('cfo') || s.includes('cloud')) return 'investor';
  if (s.includes('senat') || s.includes('politic') || s.includes('minister') || s.includes('govern')) return 'politician';
  if (s.includes('regulat') || s.includes('complian') || s.includes('sec ') || s.includes('chairman')) return 'regulator';
  if (s.includes('journal') || s.includes('media') || s.includes('press') || s.includes('reporter')) return 'journalist';
  if (s.includes('scientist') || s.includes('research') || s.includes('professor')) return 'scientist';
  if (s.includes('military') || s.includes('defense') || s.includes('army')) return 'military';
  if (s.includes('lawyer') || s.includes('counsel') || s.includes('legal') || s.includes('attorney')) return 'legal';
  if (s.includes('board') || s.includes('director')) return 'board';
  if (s.includes('staff') || s.includes('officer') || s.includes('advisor') || s.includes('chief')) return 'staff';
  return 'engineer';
}

// --- Distinctive Character Portraits (100x100 geometric, retro-minimal) ---
const PORTRAIT_SHADOW = `<polygon points="0,0 75,0 35,100 0,100" fill="rgba(255,255,255,0.1)"/>
  <polygon points="75,0 100,0 60,100 35,100" fill="rgba(0,0,0,0.06)"/>`;

const PORTRAITS = {
  system: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1a1a24"/>
    <polygon points="50,12 88,34 88,78 50,92 12,78 12,34" fill="#2a2a3d" stroke="#5a5a7a" stroke-width="1"/>
    <circle cx="50" cy="55" r="16" fill="#11111a" stroke="#cc3333" stroke-width="1.5"/>
    <circle cx="50" cy="55" r="5" fill="#cc3333" opacity="0.8"/>
    <line x1="50" y1="12" x2="50" y2="34" stroke="#5a5a7a" stroke-width="1.5"/>
    <line x1="12" y1="56" x2="88" y2="56" stroke="#5a5a7a" stroke-width="0.6" opacity="0.3"/>
  </svg>`,

  // === MAIN CHARACTERS — recognizable features ===

  elon: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1e2835"/>
    <rect x="20" y="55" width="60" height="50" fill="#181f28"/> <!-- dark tee -->
    <polygon points="28,32 72,32 76,58 50,80 24,58" fill="#f0dcc8"/> <!-- face -->
    <polygon points="26,32 74,32 70,50 30,50" fill="#f5e4d0"/> <!-- upper face highlight -->
    <polygon points="28,32 72,32 66,16 34,16" fill="#4a3020"/> <!-- short brown hair -->
    <polygon points="32,42 42,42 38,48" fill="#2a1a10"/> <!-- left brow -->
    <polygon points="58,42 68,42 62,48" fill="#2a1a10"/> <!-- right brow -->
    <rect x="34" y="44" width="8" height="3" rx="1" fill="#1a0a05"/> <!-- left eye -->
    <rect x="58" y="44" width="8" height="3" rx="1" fill="#1a0a05"/> <!-- right eye -->
    <circle cx="38" cy="45" r="1.5" fill="#6ab"/> <!-- blue iris hint -->
    <circle cx="62" cy="45" r="1.5" fill="#6ab"/>
    <polygon points="44,55 56,55 52,61 48,61" fill="#c4a88a"/> <!-- slight smile -->
    <polygon points="50,58 50,64 46,68 54,68" fill="#d4b898"/> <!-- chin shadow -->
    ${PORTRAIT_SHADOW}
  </svg>`,

  sam: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1a2838"/>
    <polygon points="12,100 50,60 88,100" fill="#1c3048"/> <!-- suit -->
    <polygon points="50,60 38,78 50,85 62,78" fill="#ffffff"/> <!-- shirt collar -->
    <polygon points="46,58 54,58 54,72 46,72" fill="#3a5a8a"/> <!-- tie -->
    <polygon points="30,28 70,28 74,58 50,78 26,58" fill="#f0dac4"/> <!-- face -->
    <polygon points="28,28 72,28 66,14 34,14" fill="#5a3828"/> <!-- brown hair -->
    <path d="M 30 18 Q 50 10 70 18 L 66 16 Q 50 10 34 16 Z" fill="#6a4430"/> <!-- hair highlight -->
    <rect x="34" y="44" width="9" height="3" rx="1.5" fill="#2a1508"/>
    <rect x="57" y="44" width="9" height="3" rx="1.5" fill="#2a1508"/>
    <circle cx="39" cy="45" r="1.5" fill="#5a8a5a"/> <!-- hazel hint -->
    <circle cx="62" cy="45" r="1.5" fill="#5a8a5a"/>
    <polygon points="46,56 54,56 50,60" fill="#c8a882"/> <!-- subtle smile -->
    ${PORTRAIT_SHADOW}
  </svg>`,

  dario: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1a2a20"/>
    <polygon points="14,100 50,64 86,100" fill="#2a4436"/> <!-- coat -->
    <polygon points="28,26 72,26 76,56 50,78 24,56" fill="#f0d4c0"/> <!-- face -->
    <!-- Curly/wavy hair -->
    <path d="M 28 26 Q 22 10 36 12 Q 48 6 60 12 Q 74 8 72 26" fill="#4a3028"/>
    <path d="M 24 28 Q 18 18 30 16 Q 40 10 48 14" fill="#5a3a30" opacity="0.5"/>
    <!-- Rectangular glasses -->
    <rect x="30" y="40" width="16" height="10" rx="2" fill="none" stroke="#2a1a10" stroke-width="2.2"/>
    <rect x="54" y="40" width="16" height="10" rx="2" fill="none" stroke="#2a1a10" stroke-width="2.2"/>
    <line x1="46" y1="44" x2="54" y2="44" stroke="#2a1a10" stroke-width="2"/>
    <circle cx="36" cy="45" r="1.5" fill="#3a2a1a"/> <!-- eyes behind glasses -->
    <circle cx="62" cy="45" r="1.5" fill="#3a2a1a"/>
    <!-- Beard -->
    <polygon points="34,58 50,64 66,58 60,68 50,72 40,68" fill="#4a3028" opacity="0.7"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  demis: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#241a30"/>
    <polygon points="18,100 50,62 82,100" fill="#342848"/> <!-- jacket -->
    <polygon points="30,26 70,26 74,56 50,76 26,56" fill="#e8cfb8"/> <!-- olive/warm skin -->
    <!-- Dark curly hair -->
    <path d="M 28 26 Q 20 8 38 10 Q 50 6 62 10 Q 80 8 72 26" fill="#1a1020"/>
    <path d="M 22 28 Q 16 14 34 12 Q 44 8 52 12" fill="#2a1830" opacity="0.5"/>
    <circle cx="40" cy="44" r="3.5" fill="#1a0a05"/> <!-- dark eyes -->
    <circle cx="60" cy="44" r="3.5" fill="#1a0a05"/>
    <circle cx="41" cy="43" r="1" fill="#fff" opacity="0.4"/> <!-- eye glint -->
    <circle cx="61" cy="43" r="1" fill="#fff" opacity="0.4"/>
    <polygon points="42,56 58,56 52,64 48,64" fill="#c4a88a"/> <!-- warm smile -->
    ${PORTRAIT_SHADOW}
  </svg>`,

  zhang: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#221e18"/>
    <polygon points="16,100 50,64 84,100" fill="#3a3428"/> <!-- suit -->
    <polygon points="50,64 42,78 50,84 58,78" fill="#f0f0f0"/> <!-- collar -->
    <polygon points="30,28 70,28 74,56 50,76 26,56" fill="#f5dfc8"/> <!-- face -->
    <polygon points="28,28 72,28 66,14 34,14" fill="#0c0808"/> <!-- black hair -->
    <!-- Glasses -->
    <rect x="32" y="40" width="14" height="8" rx="2" fill="none" stroke="#0c0808" stroke-width="2"/>
    <rect x="54" y="40" width="14" height="8" rx="2" fill="none" stroke="#0c0808" stroke-width="2"/>
    <line x1="46" y1="44" x2="54" y2="44" stroke="#0c0808" stroke-width="2"/>
    <circle cx="37" cy="44" r="1.5" fill="#0c0808"/>
    <circle cx="60" cy="44" r="1.5" fill="#0c0808"/>
    <line x1="44" y1="55" x2="56" y2="55" stroke="#c8a888" stroke-width="1.5"/> <!-- neutral mouth -->
    ${PORTRAIT_SHADOW}
  </svg>`,

  // === NPCs — distinct archetypes ===

  engineer: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#202830"/>
    <polygon points="22,100 50,68 78,100" fill="#283848"/> <!-- overalls/workwear -->
    <polygon points="32,32 68,32 72,58 50,76 28,58" fill="#eed8c4"/>
    <polygon points="30,32 70,32 64,22 36,22" fill="#3a2a20"/> <!-- brown hair -->
    <rect x="34" y="20" width="32" height="6" rx="2" fill="#cc4422" opacity="0.8"/> <!-- red cap/beanie -->
    <rect x="36" y="44" width="7" height="2.5" rx="1" fill="#1a0a05"/>
    <rect x="57" y="44" width="7" height="2.5" rx="1" fill="#1a0a05"/>
    <circle cx="40" cy="45" r="1" fill="#fff" opacity="0.3"/>
    <circle cx="61" cy="45" r="1" fill="#fff" opacity="0.3"/>
    <line x1="45" y1="54" x2="55" y2="54" stroke="#c4a088" stroke-width="1.5"/>
  </svg>`,

  investor: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1a2418"/>
    <polygon points="16,100 50,60 84,100" fill="#2a3a28"/> <!-- suit -->
    <polygon points="50,60 40,76 50,82 60,76" fill="#f8f8f0"/> <!-- white shirt -->
    <polygon points="46,60 54,60 54,72 46,72" fill="#ccaa44"/> <!-- gold tie -->
    <polygon points="30,28 70,28 74,56 50,76 26,56" fill="#f8e4d0"/>
    <polygon points="28,28 72,28 66,20 34,20" fill="#c8c0b0"/> <!-- grey/white hair -->
    <circle cx="39" cy="43" r="2" fill="#2a1a08"/>
    <circle cx="61" cy="43" r="2" fill="#2a1a08"/>
    <polygon points="44,54 56,54 50,58" fill="#d4b898"/> <!-- smug smile -->
  </svg>`,

  politician: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#182030"/>
    <polygon points="14,100 50,58 86,100" fill="#1c2840"/> <!-- dark suit -->
    <polygon points="50,58 40,76 50,82 60,76" fill="#ffffff"/>
    <polygon points="46,60 54,60 54,70 46,70" fill="#882222"/> <!-- red tie -->
    <polygon points="30,26 70,26 74,56 50,76 26,56" fill="#f0dcc8"/>
    <polygon points="28,26 72,26 64,14 36,14" fill="#d0d4e0"/> <!-- silver hair -->
    <rect x="34" y="42" width="8" height="2.5" rx="1" fill="#1a1008"/>
    <rect x="58" y="42" width="8" height="2.5" rx="1" fill="#1a1008"/>
    <circle cx="38" cy="43" r="1" fill="#4466aa" opacity="0.4"/>
    <circle cx="62" cy="43" r="1" fill="#4466aa" opacity="0.4"/>
    <polygon points="44,54 56,54 50,58" fill="#c4a888"/>
  </svg>`,

  ilya: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1c2030"/>
    <polygon points="18,100 50,64 82,100" fill="#2a3450"/>
    <polygon points="30,28 70,28 74,58 50,78 26,58" fill="#f0dcc8"/> <!-- face -->
    <path d="M 32 34 Q 50 42 68 34 L 70 28 L 60 28 Q 50 32 40 28 L 30 28 Z" fill="#5a4a38"/> <!-- receding hairline -->
    <rect x="33" y="40" width="14" height="9" rx="2" fill="none" stroke="#1a1410" stroke-width="2.2"/> <!-- glasses -->
    <rect x="53" y="40" width="14" height="9" rx="2" fill="none" stroke="#1a1410" stroke-width="2.2"/>
    <line x1="47" y1="44" x2="53" y2="44" stroke="#1a1410" stroke-width="2"/>
    <circle cx="38" cy="45" r="1.5" fill="#1a1410"/>
    <circle cx="60" cy="45" r="1.5" fill="#1a1410"/>
    <line x1="44" y1="56" x2="56" y2="56" stroke="#c4a088" stroke-width="1.5"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  sundar: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#14202c"/>
    <polygon points="14,100 50,60 86,100" fill="#1c3044"/> <!-- suit -->
    <polygon points="50,60 42,76 50,82 58,76" fill="#f0f0f0"/>
    <polygon points="30,26 70,26 74,56 50,76 26,56" fill="#d4b498"/> <!-- dark skin -->
    <polygon points="28,26 72,26 66,16 34,16" fill="#14100c"/> <!-- dark hair -->
    <polygon points="34,52 50,70 66,52 66,58 50,74 34,58" fill="#14100c" opacity="0.6"/> <!-- goatee -->
    <rect x="33" y="40" width="14" height="8" rx="2" fill="none" stroke="#0a0808" stroke-width="2"/> <!-- glasses -->
    <rect x="53" y="40" width="14" height="8" rx="2" fill="none" stroke="#0a0808" stroke-width="2"/>
    <line x1="47" y1="44" x2="53" y2="44" stroke="#0a0808" stroke-width="2"/>
    <circle cx="38" cy="44" r="1.5" fill="#0a0808"/>
    <circle cx="60" cy="44" r="1.5" fill="#0a0808"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  scientist: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1a2430"/>
    <polygon points="20,100 50,66 80,100" fill="#f8f8f8" opacity="0.85"/> <!-- lab coat -->
    <polygon points="36,30 64,30 68,56 50,74 32,56" fill="#f0dcc8"/>
    <polygon points="34,30 66,30 60,20 40,20" fill="#3a2a1a"/>
    <rect x="34" y="40" width="12" height="7" rx="2" fill="none" stroke="#1a1410" stroke-width="1.8"/>
    <rect x="54" y="40" width="12" height="7" rx="2" fill="none" stroke="#1a1410" stroke-width="1.8"/>
    <line x1="46" y1="43" x2="54" y2="43" stroke="#1a1410" stroke-width="1.8"/>
    <circle cx="39" cy="43" r="1.5" fill="#1a1410"/>
    <circle cx="60" cy="43" r="1.5" fill="#1a1410"/>
    <line x1="46" y1="54" x2="54" y2="54" stroke="#c4a088" stroke-width="1.2"/>
  </svg>`,

  board: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#181818"/>
    <polygon points="16,100 50,60 84,100" fill="#101010"/> <!-- dark suit -->
    <polygon points="50,60 42,76 50,82 58,76" fill="#e8e8e8"/> <!-- white shirt -->
    <polygon points="46,60 54,60 54,68 46,68" fill="#882222"/> <!-- red tie -->
    <polygon points="30,26 70,26 74,56 50,76 26,56" fill="#e8d8c8"/>
    <polygon points="28,26 72,26 66,16 34,16" fill="#3a3a3a"/> <!-- grey hair -->
    <rect x="36" y="42" width="7" height="2.5" rx="1" fill="#1a1a1a"/>
    <rect x="57" y="42" width="7" height="2.5" rx="1" fill="#1a1a1a"/>
    <line x1="44" y1="54" x2="56" y2="54" stroke="#b8a088" stroke-width="1.5"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  journalist: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1c1820"/>
    <polygon points="20,100 50,66 80,100" fill="#2a2430"/>
    <polygon points="32,28 68,28 72,56 50,74 28,56" fill="#f0dac4"/>
    <polygon points="30,28 70,28 64,16 36,16" fill="#3a2830"/> <!-- messy dark hair -->
    <polygon points="32,18 40,14 44,18" fill="#3a2830"/>
    <polygon points="56,18 64,14 68,18" fill="#3a2830"/>
    <rect x="36" y="42" width="7" height="2.5" rx="1" fill="#1a0810"/>
    <rect x="57" y="42" width="7" height="2.5" rx="1" fill="#1a0810"/>
    <polygon points="44,54 56,54 50,60" fill="#c4a088"/> <!-- slight smirk -->
  </svg>`,

  military: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#181410"/>
    <polygon points="16,100 50,58 84,100" fill="#282018"/> <!-- uniform -->
    <polygon points="50,58 40,72 50,78 60,72" fill="#3a3028"/> <!-- collar -->
    <polygon points="30,28 70,28 74,56 50,76 26,56" fill="#e8d4bc"/>
    <polygon points="28,30 72,30 66,22 34,22" fill="#1a1810"/> <!-- cap/hair -->
    <rect x="30" y="20" width="40" height="8" rx="2" fill="#2a2418"/> <!-- beret/cap -->
    <rect x="36" y="44" width="6" height="2" rx="1" fill="#1a0a05"/>
    <rect x="58" y="44" width="6" height="2" rx="1" fill="#1a0a05"/>
    <line x1="46" y1="56" x2="54" y2="56" stroke="#c4a088" stroke-width="1.5"/>
  </svg>`,

  regulator: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1c1a18"/>
    <polygon points="14,100 50,62 86,100" fill="#282420"/>
    <polygon points="50,62 42,76 50,82 58,76" fill="#e8e8e0"/>
    <polygon points="46,63 54,63 54,70 46,70" fill="#554433"/>
    <polygon points="30,28 70,28 74,56 50,76 26,56" fill="#ecd8c4"/>
    <polygon points="28,28 72,28 66,20 34,20" fill="#3a3028"/>
    <rect x="34" y="40" width="12" height="7" rx="2" fill="none" stroke="#1a1410" stroke-width="1.8"/>
    <rect x="54" y="40" width="12" height="7" rx="2" fill="none" stroke="#1a1410" stroke-width="1.8"/>
    <line x1="46" y1="43" x2="54" y2="43" stroke="#1a1410" stroke-width="1.8"/>
    <line x1="43" y1="56" x2="57" y2="56" stroke="#c4a088" stroke-width="1.5"/>
  </svg>`,

  staff: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1c1e24"/>
    <polygon points="22,100 50,70 78,100" fill="#2a2e36"/>
    <polygon points="34,32 66,32 70,58 50,76 30,58" fill="#eedcc8"/>
    <polygon points="32,32 68,32 62,20 38,20" fill="#4a3628"/>
    <circle cx="42" cy="44" r="2.5" fill="#1a1008"/>
    <circle cx="58" cy="44" r="2.5" fill="#1a1008"/>
    <circle cx="43" cy="43" r="0.8" fill="#fff" opacity="0.3"/>
    <circle cx="59" cy="43" r="0.8" fill="#fff" opacity="0.3"/>
    <polygon points="46,54 54,54 50,58" fill="#c8b098"/>
  </svg>`,

  academic: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#181c24"/>
    <polygon points="18,100 50,64 82,100" fill="#282e3a"/>
    <polygon points="50,64 42,78 50,84 58,78" fill="#e8e4dc"/>
    <polygon points="30,28 70,28 74,56 50,76 26,56" fill="#f0dcc8"/>
    <path d="M 30 28 Q 50 34 70 28 L 72 22 Q 50 28 28 22 Z" fill="#c8ccd8"/> <!-- white/grey hair -->
    <rect x="34" y="40" width="12" height="7" rx="2" fill="none" stroke="#1a1818" stroke-width="1.8"/>
    <rect x="54" y="40" width="12" height="7" rx="2" fill="none" stroke="#1a1818" stroke-width="1.8"/>
    <line x1="46" y1="43" x2="54" y2="43" stroke="#1a1818" stroke-width="1.8"/>
    <polygon points="44,54 56,54 50,59" fill="#c4a888"/>
  </svg>`,

  legal: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1a1618"/>
    <polygon points="16,100 50,62 84,100" fill="#282024"/> <!-- dark suit -->
    <polygon points="50,62 42,78 50,84 58,78" fill="#f0ece8"/> <!-- white shirt -->
    <polygon points="46,63 54,63 54,70 46,70" fill="#663333"/> <!-- burgundy tie -->
    <polygon points="32,28 68,28 72,56 50,74 28,56" fill="#ecd8c4"/>
    <polygon points="30,28 70,28 64,18 36,18" fill="#1a0e0e"/>
    <circle cx="42" cy="44" r="2.5" fill="#1a0e0e"/>
    <circle cx="58" cy="44" r="2.5" fill="#1a0e0e"/>
    <line x1="43" y1="55" x2="57" y2="55" stroke="#c4a088" stroke-width="1.5"/>
  </svg>`,

  friend: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#1c2a38"/>
    <polygon points="22,100 50,72 78,100" fill="#2a4058"/>
    <polygon points="34,34 66,34 70,60 50,76 30,60" fill="#f0dcc8"/>
    <circle cx="50" cy="26" r="12" fill="#c8a878"/> <!-- bald/round head -->
    <polygon points="38,34 62,34 58,26 42,26" fill="#c8a878"/>
    <circle cx="42" cy="44" r="2.5" fill="#1a0a05"/>
    <circle cx="58" cy="44" r="2.5" fill="#1a0a05"/>
    <circle cx="43" cy="43" r="0.8" fill="#fff" opacity="0.35"/>
    <circle cx="59" cy="43" r="0.8" fill="#fff" opacity="0.35"/>
    <polygon points="44,54 56,54 50,60" fill="#c4a088"/> <!-- friendly smile -->
  </svg>`,

  sam_npc: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#182838"/>
    <polygon points="14,100 50,60 86,100" fill="#1c3048"/>
    <polygon points="50,60 38,78 50,85 62,78" fill="#f0ece8"/>
    <polygon points="30,28 70,28 74,58 50,78 26,58" fill="#f0dac4"/>
    <polygon points="28,28 72,28 66,14 34,14" fill="#5a3828"/>
    <!-- Glowing cyber eyes -->
    <circle cx="39" cy="44" r="3" fill="#00ffaa" opacity="0.9"/>
    <circle cx="61" cy="44" r="3" fill="#00ffaa" opacity="0.9"/>
    <circle cx="39" cy="44" r="5" fill="#00ffaa" opacity="0.1"/>
    <circle cx="61" cy="44" r="5" fill="#00ffaa" opacity="0.1"/>
    <line x1="44" y1="55" x2="56" y2="55" stroke="#c8a882" stroke-width="1.2"/>
    ${PORTRAIT_SHADOW}
  </svg>`,

  dead: `<svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="#0a0204"/>
    <polygon points="50,10 85,30 85,70 50,92 15,70 15,30" fill="#1a0410" stroke="#88ff3366" stroke-width="1"/>
    <line x1="28" y1="34" x2="44" y2="50" stroke="#ccff3366" stroke-width="2.5"/>
    <line x1="44" y1="34" x2="28" y2="50" stroke="#ccff3366" stroke-width="2.5"/>
    <line x1="56" y1="34" x2="72" y2="50" stroke="#ccff3366" stroke-width="2.5"/>
    <line x1="72" y1="34" x2="56" y2="50" stroke="#ccff3366" stroke-width="2.5"/>
    <path d="M 34 72 Q 50 58, 66 72" fill="none" stroke="#ccff3366" stroke-width="2.5"/>
    <circle cx="50" cy="52" r="3" fill="#ccff3366" opacity="0.4"/>
  </svg>`,
};

// Resolve a background SVG by speaker or type, falling back to character theme
function getBackground(speaker, currentCharacter) {
  const type = getSpeakerType(speaker);
  const B = window.BACKGROUNDS || {};
  if (currentCharacter && B[currentCharacter]) return B[currentCharacter];
  if (B[type]) return B[type];
  return B.default || '';
}

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
      flags: {},
      relations: {},
      delayed: [],
      recentTags: [],
      lastEffects: null,
      visitedNodes: {},
      timeInPower: 0,
      unlockedEndings: [],
      completedObjectives: []
    };

    this.dragStart = { x: 0, y: 0 };
    this.dragOffset = { x: 0, y: 0 };
    this.isDragging = false;
    this.choiceLocked = false;
    this.activePointerId = null;

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

  // --- Narrative condition / adaptation helpers ---
  evaluateCondition(cond) {
    if (!cond) return true;
    if (cond.always) return true;

    if (cond.flags) {
      for (const key in cond.flags) {
        const want = !!cond.flags[key];
        const have = !!this.state.flags[key];
        if (want !== have) return false;
      }
    }
    if (cond.notFlags) {
      for (const key in cond.notFlags) {
        if (cond.notFlags[key] && this.state.flags[key]) return false;
        if (!cond.notFlags[key] && !this.state.flags[key]) return false;
      }
    }
    if (cond.minStats) {
      for (const key in cond.minStats) {
        if ((this.state.stats[key] ?? 0) < cond.minStats[key]) return false;
      }
    }
    if (cond.maxStats) {
      for (const key in cond.maxStats) {
        if ((this.state.stats[key] ?? 0) > cond.maxStats[key]) return false;
      }
    }
    if (typeof cond.minTime === 'number' && this.state.timeInPower < cond.minTime) return false;
    if (typeof cond.maxTime === 'number' && this.state.timeInPower > cond.maxTime) return false;
    if (cond.visited) {
      for (const nodeId of cond.visited) {
        if (!this.state.visitedNodes[nodeId]) return false;
      }
    }
    if (cond.notVisited) {
      for (const nodeId of cond.notVisited) {
        if (this.state.visitedNodes[nodeId]) return false;
      }
    }
    if (typeof cond.minVisits === 'object') {
      for (const nodeId in cond.minVisits) {
        if ((this.state.visitedNodes[nodeId] || 0) < cond.minVisits[nodeId]) return false;
      }
    }
    if (cond.minRelations) {
      for (const key in cond.minRelations) {
        if (this.getRelation(key) < cond.minRelations[key]) return false;
      }
    }
    if (cond.maxRelations) {
      for (const key in cond.maxRelations) {
        if (this.getRelation(key) > cond.maxRelations[key]) return false;
      }
    }
    if (cond.tagsAny && Array.isArray(cond.tagsAny)) {
      const have = this.state.recentTags || [];
      if (!cond.tagsAny.some((t) => have.includes(t))) return false;
    }
    if (cond.tagsAll && Array.isArray(cond.tagsAll)) {
      const have = this.state.recentTags || [];
      if (!cond.tagsAll.every((t) => have.includes(t))) return false;
    }
    return true;
  }

  pickVariant(list, fallback) {
    if (!Array.isArray(list) || !list.length) return fallback;
    for (const item of list) {
      if (item && this.evaluateCondition(item.if || item.when || null)) {
        return item;
      }
    }
    return fallback;
  }

  resolveChoice(rawChoice) {
    if (!rawChoice) return null;
    if (Array.isArray(rawChoice.variants)) {
      const picked = this.pickVariant(rawChoice.variants, null);
      if (picked) {
        return {
          text: picked.text ?? rawChoice.text ?? '',
          effects: picked.effects || rawChoice.effects || null,
          setFlags: { ...(rawChoice.setFlags || {}), ...(picked.setFlags || {}) },
          clearFlags: picked.clearFlags || rawChoice.clearFlags || null,
          next: picked.next !== undefined ? picked.next : rawChoice.next,
          specialEnding: picked.specialEnding || rawChoice.specialEnding || null,
          objectiveKeys: picked.objectiveKeys || rawChoice.objectiveKeys || null,
          log: picked.log || rawChoice.log || null,
          relations: { ...(rawChoice.relations || {}), ...(picked.relations || {}) },
          tags: picked.tags || rawChoice.tags || null,
          delay: picked.delay || rawChoice.delay || null,
          smart: picked.smart !== undefined ? picked.smart : rawChoice.smart
        };
      }
    }
    return {
      text: rawChoice.text || '',
      effects: rawChoice.effects || null,
      setFlags: rawChoice.setFlags || null,
      clearFlags: rawChoice.clearFlags || null,
      next: rawChoice.next,
      specialEnding: rawChoice.specialEnding || null,
      objectiveKeys: rawChoice.objectiveKeys || null,
      log: rawChoice.log || null,
      relations: rawChoice.relations || null,
      tags: rawChoice.tags || null,
      delay: rawChoice.delay || null,
      smart: rawChoice.smart
    };
  }

  clampStat(v) {
    return Math.max(0, Math.min(100, Math.round(v)));
  }

  defaultRelations() {
    return {
      family: 50,
      board: 50,
      rival: 50,
      regulator: 50,
      partner: 50,
      public: 50,
      staff: 50
    };
  }

  getRelation(key) {
    if (typeof this.state.relations[key] !== 'number') return 50;
    return this.state.relations[key];
  }

  applyRelations(deltaMap) {
    if (!deltaMap || typeof deltaMap !== 'object') return;
    for (const key in deltaMap) {
      const cur = this.getRelation(key);
      this.state.relations[key] = this.clampStat(cur + deltaMap[key]);
    }
    // Soft sync: extreme relations bleed into visible bars over time.
    if (this.getRelation('public') >= 70) this.state.stats.hype = this.clampStat(this.state.stats.hype + 1);
    if (this.getRelation('public') <= 30) this.state.stats.hype = this.clampStat(this.state.stats.hype - 1);
    if (this.getRelation('partner') >= 70) this.state.stats.capital = this.clampStat(this.state.stats.capital + 1);
    if (this.getRelation('partner') <= 30) this.state.stats.capital = this.clampStat(this.state.stats.capital - 1);
    if (this.getRelation('staff') >= 70) this.state.stats.compute = this.clampStat(this.state.stats.compute + 1);
    if (this.getRelation('staff') <= 30) this.state.stats.safety = this.clampStat(this.state.stats.safety - 1);
    if (this.getRelation('regulator') <= 30) this.state.stats.safety = this.clampStat(this.state.stats.safety - 1);
    if (this.getRelation('family') <= 25) this.state.stats.hype = this.clampStat(this.state.stats.hype - 1);
  }

  queueDelay(delaySpec) {
    if (!delaySpec) return;
    const list = Array.isArray(delaySpec) ? delaySpec : [delaySpec];
    list.forEach((d) => {
      if (!d) return;
      const turns = typeof d.turns === 'number' ? d.turns : 2;
      this.state.delayed.push({
        remaining: Math.max(1, turns),
        effects: d.effects || null,
        setFlags: d.setFlags || null,
        clearFlags: d.clearFlags || null,
        relations: d.relations || null,
        log: d.log || null,
        goto: d.goto || d.next || null,
        force: !!d.force
      });
    });
  }

  processDelayedEffects() {
    if (!Array.isArray(this.state.delayed) || !this.state.delayed.length) return null;
    const due = [];
    const keep = [];
    this.state.delayed.forEach((d) => {
      const next = { ...d, remaining: d.remaining - 1 };
      if (next.remaining <= 0) due.push(next);
      else keep.push(next);
    });
    this.state.delayed = keep;

    let forcedGoto = null;
    due.forEach((d) => {
      if (d.effects) this.applySmartEffects(d.effects, { silent: true, smart: true });
      if (d.relations) this.applyRelations(d.relations);
      this.applyFlags(d.setFlags, d.clearFlags);
      if (d.log) {
        this.narrativeLog.insertAdjacentHTML(
          'afterbegin',
          `<div class="log-item system">AFTERMATH: ${d.log}</div>`
        );
      }
      if (d.goto && (d.force || !forcedGoto)) forcedGoto = d.goto;
    });
    return forcedGoto;
  }

  // Context-aware stat deltas: same "choice magnitude" hits differently
  // depending on your current position and relationships.
  applySmartEffects(rawEffects, options = {}) {
    const smart = options.smart !== false;
    const base = {};
    STAT_KEYS.forEach((k) => {
      base[k] = 0;
    });
    if (!rawEffects) {
      this.state.lastEffects = base;
      return base;
    }

    const s = this.state.stats;
    const out = { ...base };
    for (const k of STAT_KEYS) {
      if (typeof rawEffects[k] === 'number') out[k] = rawEffects[k];
    }

    if (smart) {
      // Diminishing returns near extremes (harder to stack infinite power, softer near collapse).
      for (const k of STAT_KEYS) {
        const delta = out[k];
        if (!delta) continue;
        const cur = s[k] ?? 50;
        if (delta > 0) {
          if (cur >= 85) out[k] = Math.max(1, Math.round(delta * 0.35));
          else if (cur >= 70) out[k] = Math.max(1, Math.round(delta * 0.65));
          else if (cur <= 25) out[k] = Math.round(delta * 1.15);
        } else {
          if (cur <= 15) out[k] = Math.min(-1, Math.round(delta * 0.45));
          else if (cur <= 30) out[k] = Math.round(delta * 0.75);
          else if (cur >= 80) out[k] = Math.round(delta * 1.15);
        }
      }

      // Cascade tradeoffs: ambition taxes safety, safety taxes speed, hype feeds capital then burn, etc.
      if (out.compute > 0) {
        out.safety += -Math.max(1, Math.round(out.compute * 0.35));
        out.capital += -Math.max(0, Math.round(out.compute * 0.2));
      }
      if (out.safety > 0) {
        out.compute += -Math.max(0, Math.round(out.safety * 0.25));
        if (this.getRelation('regulator') >= 60) out.hype += 1;
      }
      if (out.hype > 0) {
        out.capital += Math.max(0, Math.round(out.hype * 0.2));
        if (this.getRelation('regulator') <= 40) out.safety += -Math.max(1, Math.round(out.hype * 0.25));
      }
      if (out.capital > 0) {
        // Money attracts oversight and product pressure.
        out.safety += -Math.max(0, Math.round(out.capital * 0.12));
        if (this.getRelation('board') <= 40) out.hype += -1;
      }
      if (out.capital < 0) {
        // Burn rate hurts staff morale/compute capacity slightly.
        out.compute += -Math.max(0, Math.round(Math.abs(out.capital) * 0.15));
      }

      // Relationship modifiers amplify political reality.
      if (this.getRelation('rival') >= 70 && out.hype > 0) out.hype = Math.max(1, out.hype - 2);
      if (this.getRelation('partner') <= 35 && out.capital > 0) out.capital = Math.max(1, Math.round(out.capital * 0.6));
      if (this.getRelation('staff') <= 35 && out.compute > 0) out.compute = Math.max(1, Math.round(out.compute * 0.6));
      if (this.getRelation('family') <= 30 && out.hype > 0) out.safety += -1;

      // Recent behavioral tags create short-term narrative momentum.
      const tags = this.state.recentTags || [];
      if (tags.includes('aggressive') && out.safety < 0) out.safety -= 1;
      if (tags.includes('cautious') && out.compute > 0) out.compute = Math.max(1, out.compute - 1);
      if (tags.includes('alliance') && out.capital > 0) out.capital += 1;
      if (tags.includes('betrayal') && out.hype !== 0) out.hype += out.hype > 0 ? -1 : -1;
    }

    // Apply + keep for UI dots.
    for (const k of STAT_KEYS) {
      out[k] = Math.round(out[k] || 0);
      s[k] = this.clampStat((s[k] ?? 50) + out[k]);
    }
    this.state.lastEffects = out;
    return out;
  }

  rememberTags(tags) {
    if (!tags) return;
    const list = Array.isArray(tags) ? tags : [tags];
    this.state.recentTags = [...list, ...(this.state.recentTags || [])].slice(0, 8);
  }

  // World reacts to your portfolio of decisions, not just the last click.
  pickWorldPressureNode() {
    const story = this.getStory();
    if (!story || !story.pressure || !Array.isArray(story.pressure.nodes)) return null;
    if (this.state.timeInPower < 3) return null;
    // Every 3-4 turns, pressure scene can cut in if conditions match.
    if (this.state.timeInPower % 3 !== 0) return null;

    for (const entry of story.pressure.nodes) {
      if (!entry || !entry.goto) continue;
      if (entry.if && !this.evaluateCondition(entry.if)) continue;
      if (entry.minTime && this.state.timeInPower < entry.minTime) continue;
      if (entry.once && this.state.visitedNodes[entry.goto]) continue;
      return entry.goto;
    }
    return null;
  }

  getResolvedNode(nodeId) {
    const story = this.getStory();
    if (!story || !story.nodes) return null;
    const node = story.nodes[nodeId];
    if (!node) return null;

    let text = node.text || '';
    if (Array.isArray(node.textVariants)) {
      const v = this.pickVariant(node.textVariants, null);
      if (v && v.text) text = v.text;
    }

    let speaker = node.speaker || 'Unknown';
    if (Array.isArray(node.speakerVariants)) {
      const v = this.pickVariant(node.speakerVariants, null);
      if (v && v.speaker) speaker = v.speaker;
    }

    let avatar = node.avatar || 'engineer';
    if (Array.isArray(node.avatarVariants)) {
      const v = this.pickVariant(node.avatarVariants, null);
      if (v && v.avatar) avatar = v.avatar;
    }

    const left = this.resolveChoice(node.left);
    const right = this.resolveChoice(node.right);

    return { id: nodeId, raw: node, text, speaker, avatar, left, right };
  }

  applyFlags(setFlags, clearFlags) {
    if (setFlags && typeof setFlags === 'object') {
      for (const key in setFlags) {
        this.state.flags[key] = !!setFlags[key];
      }
    }
    if (Array.isArray(clearFlags)) {
      clearFlags.forEach((key) => {
        delete this.state.flags[key];
      });
    } else if (clearFlags && typeof clearFlags === 'object') {
      for (const key in clearFlags) {
        if (clearFlags[key]) delete this.state.flags[key];
      }
    }
  }

  resolveNextTarget(nextSpec) {
    const story = this.getStory();
    if (!nextSpec) return story ? story.start : null;

    if (typeof nextSpec === 'string') return nextSpec;

    if (Array.isArray(nextSpec)) {
      for (const branch of nextSpec) {
        if (!branch) continue;
        const cond = branch.if || branch.when || null;
        if (!cond || this.evaluateCondition(cond)) {
          return branch.goto || branch.next || null;
        }
      }
      return story ? story.start : null;
    }

    if (typeof nextSpec === 'object') {
      if (nextSpec.goto || nextSpec.next) {
        if (!nextSpec.if || this.evaluateCondition(nextSpec.if)) {
          return nextSpec.goto || nextSpec.next;
        }
      }
    }
    return story ? story.start : null;
  }

  markVisited(nodeId) {
    if (!nodeId) return;
    this.state.visitedNodes[nodeId] = (this.state.visitedNodes[nodeId] || 0) + 1;
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

    this.mainCard = document.getElementById('main-card');
    this.cardWrapper = document.getElementById('card-wrapper') || document.querySelector('.card-wrapper');
    this.indicatorLeft = document.getElementById('indicator-left');
    this.indicatorRight = document.getElementById('indicator-right');
    this.stampLeft = document.getElementById('stamp-left');
    this.stampRight = document.getElementById('stamp-right');
    this.swipeHint = document.getElementById('swipe-hint');

    this.dialogueText = document.getElementById('dialogue-text');
    this.speakerName = document.getElementById('speaker-name');
    this.cardSpeakerLabel = document.getElementById('card-speaker-label');
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

  applyTheme(themeKey, speaker) {
    // Resolve the best theme: speaker-type > character > welcome
    let theme;
    if (speaker) {
      const speakerType = getSpeakerType(speaker);
      theme = THEMES[speakerType] || THEMES[themeKey] || THEMES.welcome;
    } else {
      theme = THEMES[themeKey] || THEMES.welcome;
    }

    document.documentElement.style.setProperty('--bg-color', theme.bg);
    document.documentElement.style.setProperty('--panel-bg', theme.panel);
    document.documentElement.style.setProperty('--card-border', theme.border);
    document.documentElement.style.setProperty('--text-dark', theme.textDark);
    document.documentElement.style.setProperty('--sky-color', theme.skyColor);

    // Apply background sky color + dynamic landscape SVG
    const bgScene = document.getElementById('bg-scene');
    if (bgScene) {
      bgScene.style.backgroundColor = theme.skyColor;
      const bgSvg = getBackground(speaker, themeKey);
      bgScene.innerHTML = bgSvg + '<div class="grain"></div>';
    }
  }

  bindEvents() {
    this.btnStartQuiz.addEventListener('click', () => this.transitionTo('quiz'));
    this.btnStartGame.addEventListener('click', () => this.transitionTo('game'));
    this.btnRestart.addEventListener('click', () => this.resetGame());
    this.btnToggleSound.addEventListener('click', () => this.toggleSound());

    document.addEventListener('keydown', (e) => {
      if (this.state.gameState !== 'game' || this.choiceLocked) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        this.performChoice('left');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        this.performChoice('right');
      }
    });

    // Pointer events: one path for mouse + touch
    if (this.cardWrapper) {
      this.cardWrapper.addEventListener('pointerdown', (e) => this.dragStartHandler(e));
      this.cardWrapper.addEventListener('pointermove', (e) => this.dragMoveHandler(e));
      this.cardWrapper.addEventListener('pointerup', (e) => this.dragEndHandler(e));
      this.cardWrapper.addEventListener('pointercancel', (e) => this.dragEndHandler(e));
      this.cardWrapper.addEventListener('lostpointercapture', () => {
        if (this.isDragging) this.dragEndHandler();
      });
    }
  }

  swipeThreshold() {
    const w = this.cardWrapper ? this.cardWrapper.clientWidth : 280;
    return Math.max(64, Math.min(110, w * 0.26));
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
    this.state.flags = {};
    this.state.relations = this.defaultRelations();
    if (charConfig.initialRelations) {
      Object.assign(this.state.relations, charConfig.initialRelations);
    }
    this.state.delayed = [];
    this.state.recentTags = [];
    this.state.lastEffects = null;
    this.state.visitedNodes = {};
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

    let guard = 0;
    while (guard < 20) {
      guard++;
      const node = this.getResolvedNode(this.state.currentCardNode);
      if (!node) {
        this.state.currentCardNode = story.start;
        continue;
      }

      // Auto-skip gate nodes that route based purely on flags
      if (node.raw && node.raw.autoRoute) {
        const route = this.resolveNextTarget(node.raw.autoRoute);
        if (route && route !== this.state.currentCardNode) {
          this.state.currentCardNode = route;
          continue;
        }
      }

      this.markVisited(this.state.currentCardNode);

      this.dialogueText.innerText = node.text;
      this.speakerName.innerText = node.speaker;
      if (this.cardSpeakerLabel) this.cardSpeakerLabel.innerText = node.speaker;

      // Dynamic portrait: try speaker-type portrait first, then explicit avatar
      const speakerType = getSpeakerType(node.speaker);
      const portraitKey = node.avatar || speakerType || 'engineer';
      this.cardPortrait.innerHTML = PORTRAITS[portraitKey] || PORTRAITS[speakerType] || PORTRAITS.engineer;

      // Dynamic theme per speaker
      this.applyTheme(this.state.currentCharacter, node.speaker);

      if (this.indicatorLeft) this.indicatorLeft.innerText = node.left ? node.left.text : '';
      if (this.indicatorRight) this.indicatorRight.innerText = node.right ? node.right.text : '';

      this.resetCardTransform(false);
      this.setChoicePreview(null, 0);
      this.hideChangeDots();
      if (this.swipeHint) this.swipeHint.classList.remove('hidden');
      return;
    }

    this.state.currentCardNode = story.start;
  }

  resetCardTransform(animate) {
    if (!this.mainCard) return;
    this.mainCard.style.transition = animate
      ? 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease'
      : 'none';
    this.mainCard.style.transform = 'translate3d(0px, 0px, 0) rotate(0deg)';
    this.mainCard.style.opacity = '1';
  }

  dragStartHandler(e) {
    if (this.state.gameState !== 'game' || this.choiceLocked) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    this.isDragging = true;
    this.activePointerId = e.pointerId;
    this.dragStart.x = e.clientX;
    this.dragStart.y = e.clientY;
    this.dragOffset = { x: 0, y: 0 };

    try {
      this.cardWrapper.setPointerCapture(e.pointerId);
    } catch (_) {
      /* ignore */
    }

    this.mainCard.style.transition = 'none';
    this.mainCard.classList.add('dragging');
    if (this.swipeHint) this.swipeHint.classList.add('hidden');
  }

  dragMoveHandler(e) {
    if (!this.isDragging || this.choiceLocked || this.state.gameState !== 'game') return;
    if (this.activePointerId !== null && e.pointerId !== this.activePointerId) return;

    this.dragOffset.x = e.clientX - this.dragStart.x;
    this.dragOffset.y = e.clientY - this.dragStart.y;

    if (Math.abs(this.dragOffset.x) > 6) {
      e.preventDefault();
    }

    // Slight resistance curve for smoother feel
    const x = this.dragOffset.x;
    const dampX = Math.sign(x) * Math.min(Math.abs(x), 220);
    const rot = Math.max(-16, Math.min(16, dampX * 0.055));
    const y = Math.max(-18, Math.min(28, this.dragOffset.y * 0.1));
    this.mainCard.style.transform =
      `translate3d(${dampX}px, ${y}px, 0) rotate(${rot}deg)`;

    const node = this.getResolvedNode(this.state.currentCardNode);
    if (!node) return;

    const threshold = this.swipeThreshold();
    const strength = Math.min(1, Math.abs(dampX) / threshold);

    if (dampX > 18) {
      this.setChoicePreview('right', strength, node.right && node.right.text);
      this.showChangeDots(node.right && node.right.effects);
    } else if (dampX < -18) {
      this.setChoicePreview('left', strength, node.left && node.left.text);
      this.showChangeDots(node.left && node.left.effects);
    } else {
      this.setChoicePreview(null, 0);
      this.hideChangeDots();
    }
  }

  setChoicePreview(side, strength = 0, text = '') {
    const showLeft = side === 'left';
    const showRight = side === 'right';
    const alpha = Math.max(0, Math.min(1, strength));

    if (this.stampLeft) {
      this.stampLeft.classList.toggle('visible', showLeft);
      this.stampLeft.style.opacity = showLeft ? String(0.25 + alpha * 0.75) : '0';
    }
    if (this.stampRight) {
      this.stampRight.classList.toggle('visible', showRight);
      this.stampRight.style.opacity = showRight ? String(0.25 + alpha * 0.75) : '0';
    }

    if (this.mainCard) {
      this.mainCard.classList.toggle('lean-left', showLeft);
      this.mainCard.classList.toggle('lean-right', showRight);
    }
  }

  dragEndHandler(e) {
    if (!this.isDragging) return;
    if (e && this.activePointerId !== null && e.pointerId !== this.activePointerId) return;

    this.isDragging = false;
    this.mainCard.classList.remove('dragging');

    if (this.cardWrapper && this.activePointerId !== null) {
      try {
        this.cardWrapper.releasePointerCapture(this.activePointerId);
      } catch (_) {
        /* ignore */
      }
    }
    this.activePointerId = null;

    const threshold = this.swipeThreshold();
    if (this.dragOffset.x > threshold) {
      this.performChoice('right');
    } else if (this.dragOffset.x < -threshold) {
      this.performChoice('left');
    } else {
      this.resetCardTransform(true);
      this.setChoicePreview(null, 0);
      this.hideChangeDots();
      if (this.swipeHint) this.swipeHint.classList.remove('hidden');
    }
    this.dragOffset = { x: 0, y: 0 };
  }

  flyCardOut(direction) {
    return new Promise((resolve) => {
      if (!this.mainCard) {
        resolve();
        return;
      }
      const dir = direction === 'left' ? -1 : 1;
      const distance = Math.max(window.innerWidth * 0.9, 420);
      this.mainCard.style.transition =
        'transform 0.36s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.28s ease';
      this.mainCard.style.transform =
        `translate3d(${dir * distance}px, 36px, 0) rotate(${dir * 24}deg)`;
      this.mainCard.style.opacity = '0';
      window.setTimeout(resolve, 310);
    });
  }

  flyCardIn() {
    return new Promise((resolve) => {
      if (!this.mainCard) {
        resolve();
        return;
      }
      this.mainCard.style.transition = 'none';
      this.mainCard.style.opacity = '0';
      this.mainCard.style.transform = 'translate3d(0px, 22px, 0) scale(0.96)';
      void this.mainCard.offsetWidth;
      this.mainCard.style.transition =
        'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease';
      this.mainCard.style.transform = 'translate3d(0px, 0px, 0) scale(1)';
      this.mainCard.style.opacity = '1';
      window.setTimeout(resolve, 280);
    });
  }

  async performChoice(direction) {
    if (this.state.gameState !== 'game' || this.choiceLocked) return;

    const story = this.getStory();
    const node = this.getResolvedNode(this.state.currentCardNode);
    if (!node || !story) return;

    const choice = direction === 'left' ? node.left : node.right;
    if (!choice) return;

    this.choiceLocked = true;
    this.isDragging = false;
    this.setChoicePreview(direction, 1, choice.text);
    audio.playSwipe();

    await this.flyCardOut(direction);

    // Apply resolution only after the leave animation starts/completes
    const nodeId = this.state.currentCardNode;
    const actionKey = `card_${nodeId}_${direction}`;
    this.completeObjective(actionKey);
    this.completeObjective(`card_${nodeId}`);

    if (Array.isArray(choice.objectiveKeys)) {
      choice.objectiveKeys.forEach((k) => this.completeObjective(k));
    }

    this.applyFlags(choice.setFlags, choice.clearFlags);
    this.applyRelations(choice.relations);
    this.rememberTags(choice.tags);
    this.queueDelay(choice.delay);
    this.applySmartEffects(choice.effects, { smart: choice.smart !== false });

    this.state.timeInPower++;
    this.hudTimeVal.innerText = this.state.timeInPower;

    if (this.state.timeInPower >= 10) this.completeObjective('time_10');
    if (this.state.timeInPower >= 20) this.completeObjective('time_20');
    if (this.state.timeInPower >= 30) this.completeObjective('time_30');

    const preview = node.text.length > 36 ? `${node.text.slice(0, 36)}...` : node.text;
    const choiceText = choice.log || choice.text;
    const logMsg = `<div class="log-item">"${preview}"<br/>→ <span class="player-choice">${choiceText}</span></div>`;
    this.narrativeLog.insertAdjacentHTML('afterbegin', logMsg);

    this.updateStatsUI();
    this.setChoicePreview(null, 0);
    this.hideChangeDots();

    if (choice.specialEnding) {
      this.choiceLocked = false;
      this.triggerSpecialEnding(choice.specialEnding);
      return;
    }

    const triggerGameOver = this.checkGameOverTriggers();
    if (triggerGameOver) {
      this.choiceLocked = false;
      this.triggerGameOverSequence(triggerGameOver);
      return;
    }

    const delayedGoto = this.processDelayedEffects();
    if (delayedGoto && story.nodes[delayedGoto]) {
      this.state.currentCardNode = delayedGoto;
    } else {
      const pressure = this.pickWorldPressureNode();
      if (pressure && story.nodes[pressure]) {
        this.state.currentCardNode = pressure;
      } else {
        this.state.currentCardNode = this.resolveNextTarget(choice.next) || story.start;
      }
    }

    this.renderCurrentCard();
    await this.flyCardIn();
    this.choiceLocked = false;
  }

  showChangeDots(effects) {
    this.hideChangeDots();
    // Preview uses smart estimation so the dots reflect real cascades.
    if (!effects) return;
    const preview = this.estimateSmartEffects(effects);
    for (const stat in preview) {
      if (preview[stat] !== 0) {
        const query = document.querySelector(`#stat-${stat} .change-dot`);
        if (query) query.classList.add('active');
      }
    }
  }

  estimateSmartEffects(rawEffects) {
    // Non-mutating mirror of applySmartEffects for UI preview.
    const s = { ...this.state.stats };
    const out = { capital: 0, hype: 0, compute: 0, safety: 0 };
    if (!rawEffects) return out;
    for (const k of STAT_KEYS) {
      if (typeof rawEffects[k] === 'number') out[k] = rawEffects[k];
    }
    for (const k of STAT_KEYS) {
      const delta = out[k];
      if (!delta) continue;
      const cur = s[k] ?? 50;
      if (delta > 0) {
        if (cur >= 85) out[k] = Math.max(1, Math.round(delta * 0.35));
        else if (cur >= 70) out[k] = Math.max(1, Math.round(delta * 0.65));
      } else if (delta < 0) {
        if (cur <= 15) out[k] = Math.min(-1, Math.round(delta * 0.45));
        else if (cur <= 30) out[k] = Math.round(delta * 0.75);
      }
    }
    if (out.compute > 0) out.safety += -Math.max(1, Math.round(out.compute * 0.35));
    if (out.safety > 0) out.compute += -Math.max(0, Math.round(out.safety * 0.25));
    if (out.hype > 0) out.capital += Math.max(0, Math.round(out.hype * 0.2));
    if (out.capital > 0) out.safety += -Math.max(0, Math.round(out.capital * 0.12));
    for (const k of STAT_KEYS) out[k] = Math.round(out[k] || 0);
    return out;
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
        if (val <= 15) {
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

  triggerSpecialEnding(endingKey) {
    audio.playGameOver();
    const endingSignature = `${this.state.currentCharacter}_${endingKey}`;
    this.saveEndingToStorage(endingSignature);
    this.completeObjective(endingKey);
    this.completeObjective(`ending_${endingKey}`);

    const specials = window.STORY_DATA && window.STORY_DATA.special_endings
      ? window.STORY_DATA.special_endings[this.state.currentCharacter]
      : null;
    const data = specials ? specials[endingKey] : null;
    const fallback = 'A secret path closes behind you. History will debate what you became.';

    document.getElementById('gameover-text').innerText =
      data && data.text ? data.text : fallback;
    document.getElementById('gameover-portrait').innerHTML =
      (data && data.avatar && PORTRAITS[data.avatar]) || PORTRAITS.dead;
    const title = document.querySelector('.gameover-title');
    if (title) title.innerText = (data && data.title) || 'PATH COMPLETE';

    this.transitionTo('gameover');
  }

  resetGame() {
    this.state.currentCharacter = null;
    this.state.currentCardNode = null;
    this.state.stats = this.defaultStats();
    this.state.flags = {};
    this.state.relations = this.defaultRelations();
    this.state.delayed = [];
    this.state.recentTags = [];
    this.state.lastEffects = null;
    this.state.visitedNodes = {};
    this.state.timeInPower = 0;
    this.state.quizStep = 0;
    this.state.quizAnswers = emptyQuizScores();
    this.choiceLocked = false;
    this.isDragging = false;
    this.activePointerId = null;
    this.dragOffset = { x: 0, y: 0 };
    this.hideChangeDots();
    this.setChoicePreview(null, 0);
    this.resetCardTransform(false);
    this.updateStatsUI();
    if (this.swipeHint) this.swipeHint.classList.remove('hidden');
    const title = document.querySelector('.gameover-title');
    if (title) title.innerText = 'SYSTEM OFFLINE';
    this.transitionTo('welcome');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.Game = new GameEngine();
});
