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
// Portfolio Dark Theme — #080808 / #252525 / #F0EDE8 / #A09890
const THEMES = {
  welcome: {
    bg: '#080808',
    panel: '#080808',
    border: '#252525',
    textDark: '#F0EDE8',
    skyColor: '#080808'
  },
  elon:       { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#F0EDE8', skyColor: '#080808' },
  sam:        { bg: '#0a0a0a', panel: '#0a0a0a', border: '#252525', textDark: '#F0EDE8', skyColor: '#080808' },
  dario:      { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#F0EDE8', skyColor: '#080808' },
  demis:      { bg: '#0a0a0a', panel: '#0a0a0a', border: '#252525', textDark: '#F0EDE8', skyColor: '#080808' },
  zhang:      { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#F0EDE8', skyColor: '#080808' },

  engineer:   { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  investor:   { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  politician: { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  regulator:  { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  staff:      { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  journalist: { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  scientist:  { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  military:   { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  legal:      { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  academic:   { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#A09890', skyColor: '#080808' },
  board:      { bg: '#080808', panel: '#080808', border: '#252525', textDark: '#F0EDE8', skyColor: '#080808' },
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

// --- Pixel Art Character Portraits ---
// Retro RPG-style pixel art sprites for each character
// Palette: 0=light/skin, 1=medium, 2=shadow, 3=hair/outline, 4=black/eyes, -1=transparent
const PX_COLORS = ['#F0EDE8','#A09890','#504A44','#252525','#080808'];

function pxP(d) {
  const h = d.length, w = d[0].length, S = 100;
  const c = Math.floor(S / Math.max(w, h));
  const ox = Math.floor((S - w * c) / 2);
  const oy = Math.floor((S - h * c) / 2);
  let s = '<svg viewBox="0 0 '+S+' '+S+'" shape-rendering="crispEdges">';
  s += '<rect x="0" y="0" width="'+S+'" height="'+S+'" fill="#080808"/>';
  s += '<rect x="0" y="0" width="'+S+'" height="'+S+'" fill="none" stroke="#252525" stroke-width="1"/>';
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const p = d[y][x];
      if (p >= 0) {
        s += '<rect x="'+(ox+x*c)+'" y="'+(oy+y*c)+'" width="'+c+'" height="'+c+'" fill="'+PX_COLORS[p]+'"/>';
      }
    }
  }
  return s + '</svg>';
}

const PORTRAITS = {
  // === SYSTEM (8x8 terminal icon) ===
  system: pxP([
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,3],
    [3,-1,0,0,0,0,-1,3],
    [3,-1,-1,0,0,-1,-1,3],
    [3,-1,-1,-1,-1,-1,-1,3],
    [3,0,-1,-1,-1,-1,0,3],
    [3,3,3,3,3,3,3,3]
  ]),

  // === MAIN CHARACTERS (10x12 pixel face portraits) ===

  elon: pxP([
    [3,3,3,3,3,3,3,3,3,3],
    [3,3,3,0,0,0,0,3,3,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,-1,4,-1,-1,4,-1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,1,2,2,2,2,1,1,-1],
    [-1,-1,1,1,1,1,1,1,-1,-1],
    [-1,-1,1,2,2,2,2,1,-1,-1],
    [-1,-1,-1,1,1,1,1,-1,-1,-1],
    [-1,-1,-1,-1,1,1,-1,-1,-1,-1]
  ]),

  sam: pxP([
    [-1,-1,-1,3,3,3,3,-1,-1,-1],
    [-1,-1,3,3,0,0,3,3,-1,-1],
    [-1,3,1,1,1,1,1,1,3,-1],
    [-1,3,1,1,1,1,1,1,3,-1],
    [3,1,-1,4,-1,-1,4,-1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,2,1,1,1,1,2,1,-1],
    [-1,-1,1,1,1,1,1,1,-1,-1],
    [-1,-1,1,0,0,0,0,1,-1,-1],
    [-1,-1,-1,1,1,1,1,-1,-1,-1],
    [-1,-1,-1,-1,1,1,-1,-1,-1,-1]
  ]),

  dario: pxP([
    [3,3,3,3,3,3,3,3,3,3],
    [3,3,1,1,1,1,1,1,3,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,4,-1,-1,-1,-1,4,1,3],
    [3,1,1,4,1,1,4,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,2,1,1,1,1,2,1,-1],
    [-1,-1,1,1,1,1,1,1,-1,-1],
    [-1,-1,1,2,2,2,2,1,-1,-1],
    [-1,-1,-1,1,1,1,1,-1,-1,-1],
    [-1,-1,-1,-1,1,1,-1,-1,-1,-1]
  ]),

  demis: pxP([
    [3,3,3,3,3,3,3,3,3,3],
    [3,3,0,0,0,0,0,0,3,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,-1,4,-1,-1,4,-1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,2,1,1,1,1,2,1,-1],
    [-1,-1,2,2,2,2,2,2,-1,-1],
    [-1,-1,2,2,2,2,2,2,-1,-1],
    [-1,-1,-1,2,2,2,2,-1,-1,-1],
    [-1,-1,-1,-1,2,2,-1,-1,-1,-1]
  ]),

  zhang: pxP([
    [3,3,3,3,3,3,3,3,3,3],
    [3,3,1,1,1,1,1,1,3,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,-1,4,4,4,4,-1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,2,2,2,2,2,2,1,-1],
    [-1,-1,1,1,1,1,1,1,-1,-1],
    [-1,-1,1,2,2,2,2,1,-1,-1],
    [-1,-1,-1,1,1,1,1,-1,-1,-1],
    [-1,-1,-1,-1,1,1,-1,-1,-1,-1]
  ]),

  ilya: pxP([
    [3,3,3,3,3,3,3,3,3,3],
    [3,3,0,0,0,0,0,0,3,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,-1,4,-1,-1,4,-1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,-1,1,1,1,1,1,1,-1,-1],
    [-1,-1,1,2,2,2,2,1,-1,-1],
    [-1,-1,-1,1,1,1,1,-1,-1,-1],
    [-1,-1,-1,-1,1,1,-1,-1,-1,-1]
  ]),

  sundar: pxP([
    [-1,-1,-1,3,3,3,3,-1,-1,-1],
    [-1,-1,3,3,0,0,3,3,-1,-1],
    [-1,3,1,1,1,1,1,1,3,-1],
    [-1,3,1,1,1,1,1,1,3,-1],
    [3,1,-1,4,-1,-1,4,-1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,2,1,1,1,1,2,1,-1],
    [-1,-1,1,1,1,1,1,1,-1,-1],
    [-1,-1,1,0,0,0,0,1,-1,-1],
    [-1,-1,-1,1,1,1,1,-1,-1,-1],
    [-1,-1,-1,-1,1,1,-1,-1,-1,-1]
  ]),

  sam_npc: pxP([
    [-1,-1,-1,3,3,3,3,-1,-1,-1],
    [-1,-1,3,3,0,0,3,3,-1,-1],
    [-1,3,1,1,1,1,1,1,3,-1],
    [-1,3,1,1,1,1,1,1,3,-1],
    [3,1,-1,4,-1,-1,4,-1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,1,2,1,1,1,1,2,1,-1],
    [-1,-1,1,1,1,1,1,1,-1,-1],
    [-1,-1,1,2,2,2,2,1,-1,-1],
    [-1,-1,-1,1,1,1,1,-1,-1,-1],
    [-1,-1,-1,-1,1,1,-1,-1,-1,-1]
  ]),

  // === NPC ARCHETYPES (8x8 pixel icons) ===

  engineer: pxP([
    [-1,3,3,3,3,3,3,-1],
    [3,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,3],
    [3,1,1,3,3,1,1,3],
    [3,1,1,3,3,1,1,3],
    [3,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,3],
    [-1,3,3,3,3,3,3,-1]
  ]),

  investor: pxP([
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,0,-1],
    [-1,-1,-1,-1,-1,1,1,-1],
    [-1,-1,-1,-1,3,1,1,-1],
    [-1,-1,-1,3,3,1,1,-1],
    [-1,-1,3,3,3,3,3,-1],
    [-1,1,1,1,1,1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1]
  ]),

  politician: pxP([
    [-1,-1,-1,3,3,-1,-1,-1],
    [-1,-1,3,0,0,3,-1,-1],
    [-1,-1,3,1,1,3,-1,-1],
    [-1,-1,3,1,1,3,-1,-1],
    [-1,3,3,1,1,3,3,-1],
    [3,3,3,1,1,3,3,3],
    [3,3,3,3,3,3,3,3],
    [-1,3,3,3,3,3,3,-1]
  ]),

  scientist: pxP([
    [-1,-1,3,-1,3,-1,-1,-1],
    [-1,3,-1,-1,-1,3,-1,-1],
    [-1,-1,-1,0,-1,-1,-1,-1],
    [1,1,1,-1,1,1,1,-1],
    [-1,-1,-1,0,-1,-1,-1,-1],
    [-1,3,-1,-1,-1,3,-1,-1],
    [-1,-1,3,-1,3,-1,-1,-1],
    [-1,-1,-1,3,-1,-1,-1,-1]
  ]),

  board: pxP([
    [-1,-1,-1,3,3,-1,-1,-1],
    [-1,3,3,0,0,3,3,-1],
    [-1,-1,3,0,0,3,-1,-1],
    [-1,3,3,3,3,3,3,-1],
    [-1,3,3,3,3,3,3,-1],
    [-1,-1,3,3,3,3,-1,-1],
    [-1,3,3,-1,-1,3,3,-1],
    [-1,-1,3,-1,-1,3,-1,-1]
  ]),

  journalist: pxP([
    [-1,-1,-1,0,-1,-1,-1,-1],
    [-1,-1,-1,0,-1,-1,-1,-1],
    [-1,-1,-1,0,-1,-1,-1,-1],
    [-1,-1,3,3,3,3,-1,-1],
    [-1,-1,3,0,0,3,-1,-1],
    [-1,-1,3,0,0,3,-1,-1],
    [-1,-1,3,3,3,3,-1,-1],
    [-1,-1,-1,3,-1,-1,-1,-1]
  ]),

  military: pxP([
    [-1,-1,3,-1,-1,3,-1,-1],
    [-1,-1,3,-1,-1,3,-1,-1],
    [3,3,3,3,3,3,3,3],
    [-1,-1,3,3,3,3,-1,-1],
    [-1,-1,3,3,3,3,-1,-1],
    [3,3,3,3,3,3,3,3],
    [-1,-1,3,-1,-1,3,-1,-1],
    [-1,-1,3,-1,-1,3,-1,-1]
  ]),

  regulator: pxP([
    [-1,-1,-1,3,3,-1,-1,-1],
    [-1,-1,3,-1,3,-1,-1,-1],
    [-1,3,3,-1,3,3,-1,-1],
    [-1,-1,-1,3,-1,-1,-1,-1],
    [-1,-1,-1,3,-1,-1,-1,-1],
    [-1,3,3,-1,3,3,-1,-1],
    [-1,-1,3,-1,3,-1,-1,-1],
    [-1,-1,-1,3,3,-1,-1,-1]
  ]),

  staff: pxP([
    [-1,-1,3,0,0,3,-1,-1],
    [-1,3,1,-1,-1,1,3,-1],
    [-1,-1,1,1,1,1,-1,-1],
    [-1,-1,1,1,1,1,-1,-1],
    [-1,1,-1,3,3,-1,1,-1],
    [-1,-1,1,3,3,1,-1,-1],
    [-1,1,-1,3,3,-1,1,-1],
    [-1,-1,3,3,3,3,-1,-1]
  ]),

  academic: pxP([
    [-1,-1,3,3,3,3,-1,-1],
    [-1,3,2,2,2,2,3,-1],
    [-1,3,1,1,2,2,3,-1],
    [-1,3,2,1,1,2,3,-1],
    [-1,3,2,2,1,1,3,-1],
    [-1,3,1,2,2,1,3,-1],
    [-1,3,3,3,3,3,3,-1],
    [-1,-1,3,3,3,3,-1,-1]
  ]),

  legal: pxP([
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,3,3,3,3,-1,-1],
    [-1,-1,3,1,1,3,-1,-1],
    [-1,-1,3,3,3,3,-1,-1],
    [-1,-1,-1,3,-1,-1,-1,-1],
    [-1,-1,-1,3,-1,-1,-1,-1],
    [-1,-1,3,3,3,3,-1,-1],
    [-1,-1,3,1,1,3,-1,-1]
  ]),

  // === SPECIAL ===

  friend: pxP([
    [-1,-1,3,-1,-1,3,-1,-1],
    [-1,3,0,-1,-1,0,3,-1],
    [3,0,-1,-1,-1,-1,0,3],
    [-1,3,-1,1,-1,3,-1,-1],
    [-1,-1,3,1,3,-1,-1,-1],
    [-1,3,-1,1,-1,3,-1,-1],
    [3,0,-1,-1,-1,-1,0,3],
    [-1,3,0,-1,-1,0,3,-1]
  ]),

  dead: pxP([
    [3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,3],
    [3,0,4,-1,4,-1,0,3],
    [3,0,-1,0,0,-1,0,3],
    [3,0,0,0,0,0,0,3],
    [3,0,-1,-1,-1,-1,0,3],
    [3,3,3,3,3,3,3,3],
    [-1,-1,3,3,3,3,-1,-1]
  ]),
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
    // left panel removed — safe null checks on narrativeLog/endingsBadge
    if (!this.narrativeLog) this.narrativeLog = { innerHTML: '', insertAdjacentHTML: () => {} };
    if (!this.endingsBadge) this.endingsBadge = { innerText: '' };
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
    // If light mode is active, skip inline styles — let CSS .light class handle it
    if (document.documentElement.classList.contains('light')) {
      const bgScene = document.getElementById('bg-scene');
      if (bgScene) {
        const bgSvg = getBackground(speaker, themeKey);
        bgScene.innerHTML = bgSvg + '<div class="grain"></div>';
      }
      return;
    }

    // Resolve the best theme: speaker-type > character > welcome (dark mode only)
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
    this.btnToggleSound.innerText = audio.enabled ? "ON" : "OFF";
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
      this.narrativeLog.innerHTML = '<div class="log-item">Ready.</div>';
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

    this.narrativeLog.innerHTML = `<div class="log-item">${charConfig.nameDisplay} online.</div>`;

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
