// KRIPPAS — Minimal Dark Background Landscapes (SVG)
// Only dark grays — void black (#0b0e12), carbon (#181a1d), graphite (#1f2124), slate (#303235)

const BACKGROUNDS = {

  default: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <polygon points="-50,600 200,340 450,600" fill="var(--border)" opacity="0.6"/>
    <polygon points="250,600 500,300 750,600" fill="var(--border)" opacity="0.5"/>
    <polygon points="550,600 800,350 1050,600" fill="var(--border)" opacity="0.4"/>
  </svg>`,

  welcome: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <polygon points="-50,600 200,340 450,600" fill="var(--border)" opacity="0.6"/>
    <polygon points="250,600 500,300 750,600" fill="var(--border)" opacity="0.5"/>
    <polygon points="550,600 800,350 1050,600" fill="var(--border)" opacity="0.4"/>
  </svg>`,

  elon: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect width="1000" height="600" fill="var(--background)"/>
    <polygon points="-50,600 250,370 600,600" fill="var(--border)" opacity="0.7"/>
    <polygon points="400,600 750,340 1100,600" fill="var(--border)" opacity="0.6"/>
  </svg>`,

  sam: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="80" y="300" width="20" height="300" fill="var(--border)" opacity="0.5"/>
    <rect x="120" y="200" width="30" height="400" fill="var(--border)" opacity="0.5"/>
    <rect x="170" y="250" width="25" height="350" fill="var(--border)" opacity="0.4"/>
    <rect x="210" y="150" width="40" height="450" fill="var(--border)" opacity="0.4"/>
    <rect x="270" y="300" width="30" height="300" fill="var(--border)" opacity="0.5"/>
    <rect x="700" y="200" width="40" height="400" fill="var(--border)" opacity="0.5"/>
    <rect x="760" y="150" width="35" height="450" fill="var(--border)" opacity="0.4"/>
    <rect x="810" y="250" width="45" height="350" fill="var(--border)" opacity="0.4"/>
    <rect x="870" y="200" width="30" height="400" fill="var(--border)" opacity="0.5"/>
  </svg>`,

  dario: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="60" y="200" width="12" height="400" fill="var(--border)" opacity="0.5"/>
    <rect x="90" y="180" width="10" height="420" fill="var(--border)" opacity="0.4"/>
    <rect x="140" y="160" width="14" height="440" fill="var(--border)" opacity="0.5"/>
    <rect x="200" y="140" width="16" height="460" fill="var(--border)" opacity="0.4"/>
    <rect x="280" y="190" width="10" height="410" fill="var(--border)" opacity="0.5"/>
    <rect x="720" y="130" width="16" height="470" fill="var(--border)" opacity="0.4"/>
    <rect x="800" y="160" width="14" height="440" fill="var(--border)" opacity="0.5"/>
    <rect x="880" y="200" width="12" height="400" fill="var(--border)" opacity="0.4"/>
  </svg>`,

  demis: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="350" y="200" width="300" height="400" fill="var(--border)" opacity="0.6"/>
    <polygon points="350,200 500,100 650,200" fill="var(--border)" opacity="0.5"/>
    <rect x="480" y="100" width="40" height="10" fill="var(--border)" opacity="0.4"/>
    <polygon points="-50,600 350,400 750,600" fill="var(--border)" opacity="0.5"/>
    <polygon points="400,600 650,360 1050,600" fill="var(--border)" opacity="0.4"/>
  </svg>`,

  zhang: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <polygon points="-50,600 250,340 550,600" fill="var(--border)" opacity="0.6"/>
    <polygon points="180,600 450,360 750,600" fill="var(--border)" opacity="0.5"/>
    <polygon points="480,600 700,380 1000,600" fill="var(--border)" opacity="0.4"/>
  </svg>`,

  // === Archetype backgrounds ===

  engineer: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="100" y="340" width="80" height="100" fill="var(--border)" opacity="0.6"/>
    <rect x="400" y="320" width="120" height="120" fill="var(--border)" opacity="0.6"/>
    <rect x="700" y="350" width="90" height="90" fill="var(--border)" opacity="0.6"/>
  </svg>`,

  investor: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="80" y="300" width="20" height="300" fill="var(--border)" opacity="0.6"/>
    <rect x="110" y="220" width="24" height="380" fill="var(--border)" opacity="0.6"/>
    <rect x="145" y="260" width="20" height="340" fill="var(--border)" opacity="0.5"/>
    <rect x="175" y="200" width="28" height="400" fill="var(--border)" opacity="0.5"/>
    <rect x="400" y="140" width="30" height="460" fill="var(--border)" opacity="0.6"/>
    <rect x="485" y="120" width="28" height="480" fill="var(--border)" opacity="0.5"/>
    <rect x="570" y="160" width="30" height="440" fill="var(--border)" opacity="0.5"/>
  </svg>`,

  politician: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="300" y="180" width="400" height="170" fill="var(--border)" opacity="0.6"/>
    <polygon points="300,180 500,100 700,180" fill="var(--border)" opacity="0.5"/>
    <rect x="430" y="220" width="40" height="130" fill="var(--border)" opacity="0.5"/>
    <rect x="530" y="220" width="40" height="130" fill="var(--border)" opacity="0.5"/>
    <rect x="0" y="440" width="1000" height="6" fill="var(--border)" opacity="0.3"/>
  </svg>`,

  regulator: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="200" y="200" width="600" height="400" fill="var(--border)" opacity="0.6"/>
    <circle cx="500" cy="420" r="40" fill="none" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.4"/>
    <circle cx="500" cy="420" r="25" fill="none" stroke="var(--text-dim)" stroke-width="1" opacity="0.35"/>
  </svg>`,

  staff: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.35">
    <rect width="1000" height="600" fill="var(--background)"/>
    <rect x="250" y="370" width="60" height="70" fill="var(--border)" opacity="0.5"/>
    <rect x="420" y="360" width="60" height="80" fill="var(--border)" opacity="0.5"/>
    <rect x="740" y="370" width="60" height="70" fill="var(--border)" opacity="0.5"/>
  </svg>`,

  journalist: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="300" y="280" width="400" height="320" fill="var(--border)" opacity="0.6"/>
    <circle cx="500" cy="470" r="70" fill="none" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.35"/>
    <circle cx="500" cy="470" r="45" fill="none" stroke="var(--text-dim)" stroke-width="1" opacity="0.3"/>
  </svg>`,

  military: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect width="1000" height="600" fill="var(--background)"/>
    <rect x="0" y="360" width="1000" height="240" fill="var(--border)" opacity="0.5"/>
    <rect x="470" y="120" width="60" height="240" fill="var(--border)" opacity="0.6"/>
  </svg>`,

  scientist: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <circle cx="500" cy="350" r="80" fill="none" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/>
    <circle cx="500" cy="350" r="50" fill="none" stroke="var(--text-dim)" stroke-width="1" opacity="0.3"/>
  </svg>`,

  board: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect width="1000" height="600" fill="var(--background)"/>
    <rect x="400" y="200" width="200" height="400" fill="var(--border)" opacity="0.6"/>
    <polygon points="400,200 500,120 600,200" fill="var(--border)" opacity="0.5"/>
  </svg>`,

  legal: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="350" y="200" width="300" height="400" fill="var(--border)" opacity="0.6"/>
    <line x1="500" y1="200" x2="500" y2="600" stroke="var(--text-dim)" stroke-width="1" opacity="0.3"/>
  </svg>`,

  academic: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <polygon points="400,300 500,200 600,300 500,400" fill="var(--border)" opacity="0.6"/>
    <rect x="300" y="300" width="400" height="300" fill="var(--border)" opacity="0.5"/>
  </svg>`,

  // Legacy / unused archetypes — reused minimal shapes
  nature: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect width="1000" height="600" fill="var(--background)"/>
    <polygon points="-50,600 180,380 420,600" fill="var(--border)" opacity="0.6"/>
    <polygon points="120,600 380,350 650,600" fill="var(--border)" opacity="0.5"/>
    <polygon points="300,600 550,370 820,600" fill="var(--border)" opacity="0.4"/>
    <polygon points="520,600 750,390 1050,600" fill="var(--border)" opacity="0.4"/>
  </svg>`,

  lab: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.35">
    <circle cx="500" cy="350" r="80" fill="none" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/>
    <circle cx="500" cy="350" r="50" fill="none" stroke="var(--text-dim)" stroke-width="1" opacity="0.25"/>
    <rect x="100" y="340" width="30" height="15" fill="var(--border)" opacity="0.5"/>
    <rect x="300" y="380" width="40" height="20" fill="var(--border)" opacity="0.5"/>
    <rect x="700" y="320" width="20" height="40" fill="var(--border)" opacity="0.5"/>
  </svg>`,

  colossus: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="470" y="120" width="60" height="480" fill="var(--border)" opacity="0.6"/>
    <rect x="100" y="200" width="18" height="400" fill="var(--border)" opacity="0.5"/>
    <rect x="300" y="160" width="18" height="440" fill="var(--border)" opacity="0.5"/>
    <rect x="650" y="180" width="18" height="420" fill="var(--border)" opacity="0.5"/>
    <rect x="810" y="200" width="18" height="400" fill="var(--border)" opacity="0.5"/>
  </svg>`,

  supercomputer: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <rect x="460" y="220" width="80" height="380" fill="var(--border)" opacity="0.7"/>
    <line x1="100" y1="420" x2="900" y2="420" stroke="var(--text-dim)" stroke-width="1" opacity="0.4"/>
    <line x1="100" y1="460" x2="900" y2="460" stroke="var(--text-dim)" stroke-width="1" opacity="0.3"/>
    <line x1="100" y1="500" x2="900" y2="500" stroke="var(--text-dim)" stroke-width="1" opacity="0.3"/>
    <line x1="100" y1="540" x2="900" y2="540" stroke="var(--text-dim)" stroke-width="1" opacity="0.3"/>
  </svg>`,

  office: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.35">
    <rect x="60" y="350" width="70" height="70" fill="var(--border)" opacity="0.6"/>
    <rect x="200" y="340" width="70" height="80" fill="var(--border)" opacity="0.6"/>
    <rect x="340" y="360" width="70" height="60" fill="var(--border)" opacity="0.55"/>
    <rect x="480" y="330" width="70" height="90" fill="var(--border)" opacity="0.6"/>
    <rect x="620" y="350" width="70" height="70" fill="var(--border)" opacity="0.55"/>
    <rect x="760" y="340" width="70" height="80" fill="var(--border)" opacity="0.6"/>
    <rect x="900" y="360" width="70" height="60" fill="var(--border)" opacity="0.55"/>
  </svg>`,

  viking: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <polygon points="-50,600 200,340 450,600" fill="var(--border)" opacity="0.6"/>
    <polygon points="250,600 500,300 750,600" fill="var(--border)" opacity="0.5"/>
    <polygon points="550,600 800,350 1050,600" fill="var(--border)" opacity="0.4"/>
  </svg>`,

  samurai: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.4">
    <polygon points="-50,600 250,340 550,600" fill="var(--border)" opacity="0.6"/>
    <polygon points="200,600 500,360 800,600" fill="var(--border)" opacity="0.5"/>
  </svg>`,
};
