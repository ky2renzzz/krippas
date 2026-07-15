// KRIPPAS — Dynamic Background Landscapes (SVG)
// Each background is a 1000×600 viewBox vector scene rendered behind the game viewport.
// Opacity is 0.45–0.55 so the landscape stays moody and never overpowers the UI.

const BACKGROUNDS = {

  default: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#080c14"/>
    <circle cx="820" cy="140" r="52" fill="#e8e0d0" opacity="0.9"/>
    <circle cx="810" cy="130" r="8" fill="#d4c8b0" opacity="0.3"/>
    <circle cx="835" cy="155" r="5" fill="#d4c8b0" opacity="0.2"/>
    <circle cx="800" cy="120" r="3" fill="#d4c8b0" opacity="0.25"/>
    <circle cx="100" cy="80" r="1.5" fill="#fff" opacity="0.3"/>
    <circle cx="280" cy="50" r="1" fill="#fff" opacity="0.2"/>
    <circle cx="450" cy="90" r="2" fill="#fff" opacity="0.35"/>
    <circle cx="680" cy="60" r="1.2" fill="#fff" opacity="0.25"/>
    <circle cx="920" cy="40" r="1.8" fill="#fff" opacity="0.3"/>
    <circle cx="150" cy="170" r="1" fill="#fff" opacity="0.15"/>
    <circle cx="600" cy="30" r="1.5" fill="#fff" opacity="0.2"/>
    <polygon points="-50,600 150,340 400,600" fill="#0e1220" opacity="0.8"/>
    <polygon points="120,600 380,290 650,600" fill="#111828" opacity="0.75"/>
    <polygon points="300,600 550,310 800,600" fill="#0d1422" opacity="0.7"/>
    <polygon points="480,600 720,280 980,600" fill="#101a2c" opacity="0.65"/>
    <polygon points="700,600 900,350 1100,600" fill="#0c101c" opacity="0.6"/>
    <polygon points="-50,600 350,440 750,600" fill="#060910" opacity="0.5"/>
    <path d="M 0 480 Q 200 430 400 470 Q 600 510 800 460 Q 900 440 1000 470 L 1000 600 L 0 600 Z" fill="#0a0e18" opacity="0.4"/>
  </svg>`,

  welcome: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#060a14"/>
    <circle cx="280" cy="160" r="35" fill="#fff" opacity="0.7"/>
    <circle cx="280" cy="160" r="50" fill="#aaccff" opacity="0.06"/>
    <circle cx="740" cy="120" r="22" fill="#e8dcc8" opacity="0.5"/>
    <circle cx="740" cy="120" r="35" fill="#ccaa88" opacity="0.04"/>
    <circle cx="500" cy="200" r="80" fill="#6688cc" opacity="0.04"/>
    <circle cx="120" cy="60" r="1.5" fill="#fff" opacity="0.3"/>
    <circle cx="380" cy="80" r="1" fill="#fff" opacity="0.2"/>
    <circle cx="550" cy="40" r="2" fill="#fff" opacity="0.35"/>
    <circle cx="880" cy="70" r="1.2" fill="#fff" opacity="0.25"/>
    <circle cx="200" cy="220" r="1" fill="#fff" opacity="0.15"/>
    <rect x="430" y="280" width="18" height="80" fill="#1a2a3d" opacity="0.5"/>
    <polygon points="410,280 470,280 455,230 425,230" fill="#182840" opacity="0.45"/>
    <rect x="520" y="300" width="14" height="60" fill="#1a2a3d" opacity="0.4"/>
    <polygon points="505,300 545,300 535,260 515,260" fill="#182840" opacity="0.35"/>
    <rect x="600" y="320" width="20" height="40" fill="#1a2a3d" opacity="0.35"/>
    <polygon points="585,320 635,320 620,270 600,270" fill="#182840" opacity="0.3"/>
    <polygon points="-50,600 200,340 450,600" fill="#0a1220"/>
    <polygon points="180,600 440,290 700,600" fill="#0e1828"/>
    <polygon points="380,600 600,320 850,600" fill="#0a1422"/>
    <polygon points="580,600 780,350 1050,600" fill="#0c1624"/>
  </svg>`,

  elon: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#1a0e08"/>
    <circle cx="850" cy="100" r="4" fill="#5588cc" opacity="0.7"/>
    <circle cx="850" cy="100" r="8" fill="#5588cc" opacity="0.05"/>
    <circle cx="120" cy="70" r="1.2" fill="#ffcc99" opacity="0.3"/>
    <circle cx="350" cy="50" r="1" fill="#ffcc99" opacity="0.2"/>
    <circle cx="620" cy="90" r="1.5" fill="#ffcc99" opacity="0.25"/>
    <circle cx="940" cy="40" r="1" fill="#ffcc99" opacity="0.2"/>
    <ellipse cx="400" cy="340" rx="160" ry="70" fill="#2d1810" opacity="0.8"/>
    <ellipse cx="400" cy="350" rx="80" ry="35" fill="#3a2216" opacity="0.7"/>
    <path d="M 360 280 L 440 280 L 450 250 L 350 250 Z" fill="#1a2a1a" opacity="0.5"/>
    <polygon points="360,280 440,280 420,250 380,250" fill="#224422" opacity="0.4"/>
    <polygon points="-50,600 250,370 600,600" fill="#241410"/>
    <polygon points="400,600 750,340 1100,600" fill="#281510"/>
    <polygon points="100,600 500,420 900,600" fill="#2a1812"/>
    <path d="M 200 380 Q 250 360 300 385 Q 260 400 200 380 Z" fill="#3a2016" opacity="0.4"/>
    <path d="M 600 370 Q 650 350 700 375 Q 640 395 600 370 Z" fill="#3a2016" opacity="0.35"/>
  </svg>`,

  sam: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#060e18"/>
    <rect x="80" y="220" width="30" height="380" fill="#0e1a2a"/>
    <rect x="120" y="140" width="40" height="460" fill="#122030"/>
    <rect x="170" y="180" width="28" height="420" fill="#0e1a2a"/>
    <rect x="210" y="100" width="50" height="500" fill="#142638"/>
    <rect x="270" y="260" width="35" height="340" fill="#0e1a2a"/>
    <rect x="680" y="160" width="45" height="440" fill="#122030"/>
    <rect x="740" y="120" width="38" height="480" fill="#142638"/>
    <rect x="790" y="200" width="55" height="400" fill="#0e1a2a"/>
    <rect x="860" y="140" width="32" height="460" fill="#122030"/>
    <line x1="80" y1="220" x2="300" y2="100" stroke="#00ffcc" stroke-width="0.5" opacity="0.15"/>
    <line x1="300" y1="100" x2="740" y2="120" stroke="#00ffcc" stroke-width="0.5" opacity="0.12"/>
    <line x1="210" y1="100" x2="210" y2="600" stroke="#00ffcc" stroke-width="0.3" opacity="0.1"/>
    <circle cx="160" cy="120" r="1.5" fill="#00ffaa" opacity="0.4"/>
    <circle cx="270" cy="80" r="2" fill="#00ffaa" opacity="0.35"/>
    <circle cx="760" cy="100" r="1.5" fill="#00ffaa" opacity="0.3"/>
    <circle cx="880" cy="120" r="1" fill="#00ffaa" opacity="0.25"/>
    <circle cx="950" cy="60" r="3" fill="#00ffcc" opacity="0.6"/>
    <circle cx="950" cy="60" r="6" fill="#00ffcc" opacity="0.04"/>
  </svg>`,

  dario: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#081208"/>
    <rect x="60" y="140" width="12" height="460" fill="#1a2a18"/>
    <rect x="90" y="120" width="10" height="480" fill="#142216"/>
    <rect x="140" y="100" width="14" height="500" fill="#1a2a18"/>
    <rect x="200" y="80" width="16" height="520" fill="#142216"/>
    <rect x="280" y="130" width="10" height="470" fill="#1a2a18"/>
    <rect x="340" y="90" width="14" height="510" fill="#142216"/>
    <rect x="640" y="110" width="12" height="490" fill="#1a2a18"/>
    <rect x="720" y="70" width="16" height="530" fill="#142216"/>
    <rect x="800" y="100" width="14" height="500" fill="#1a2a18"/>
    <rect x="880" y="140" width="12" height="460" fill="#142216"/>
    <path d="M 0 440 Q 200 380 500 420 Q 800 460 1000 400 L 1000 600 L 0 600 Z" fill="#0a160a" opacity="0.5"/>
    <path d="M 200 400 Q 400 360 600 400 Q 800 440 1000 390" fill="none" stroke="#336644" stroke-width="1" opacity="0.2"/>
    <circle cx="150" cy="300" r="1" fill="#88cc88" opacity="0.3"/>
    <circle cx="350" cy="280" r="1.5" fill="#88cc88" opacity="0.25"/>
    <circle cx="580" cy="310" r="1" fill="#88cc88" opacity="0.3"/>
    <circle cx="780" cy="290" r="1.2" fill="#88cc88" opacity="0.25"/>
    <circle cx="920" cy="320" r="1" fill="#88cc88" opacity="0.2"/>
    <polygon points="-50,600 300,440 650,600" fill="#0c1a0c"/>
    <polygon points="400,600 700,420 1050,600" fill="#0a160a"/>
  </svg>`,

  demis: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#0e0818"/>
    <rect x="300" y="220" width="400" height="380" fill="#181028" opacity="0.7"/>
    <rect x="320" y="240" width="360" height="360" fill="#120c20" opacity="0.6"/>
    <rect x="340" y="260" width="320" height="340" fill="#181028" opacity="0.5"/>
    <polygon points="300,220 500,140 700,220" fill="#1a1230" opacity="0.6"/>
    <polygon points="300,220 500,180 700,220" fill="#20183a" opacity="0.4"/>
    <rect x="470" y="140" width="60" height="10" fill="#2a2050" opacity="0.5"/>
    <rect x="480" y="130" width="40" height="10" fill="#2a2050" opacity="0.4"/>
    <rect x="450" y="220" width="20" height="100" fill="#1a1230" opacity="0.5"/>
    <rect x="530" y="220" width="20" height="100" fill="#1a1230" opacity="0.5"/>
    <rect x="490" y="200" width="20" height="20" fill="#2a2050" opacity="0.4"/>
    <circle cx="500" cy="170" r="3" fill="#d6a2e8" opacity="0.5"/>
    <circle cx="150" cy="80" r="1" fill="#fff" opacity="0.2"/>
    <circle cx="350" cy="50" r="1.5" fill="#fff" opacity="0.25"/>
    <circle cx="650" cy="60" r="1" fill="#fff" opacity="0.2"/>
    <circle cx="850" cy="90" r="1.2" fill="#fff" opacity="0.3"/>
    <path d="M 200 80 Q 300 40 500 60 Q 700 80 800 50" fill="none" stroke="#d6a2e8" stroke-width="0.8" opacity="0.2"/>
    <polygon points="-50,600 350,400 750,600" fill="#140a20"/>
    <polygon points="400,600 650,360 1050,600" fill="#10081a"/>
  </svg>`,

  zhang: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#0e0c08"/>
    <circle cx="750" cy="130" r="55" fill="#e8dcc0" opacity="0.75"/>
    <circle cx="740" cy="120" r="8" fill="#d4c8a0" opacity="0.2"/>
    <circle cx="760" cy="145" r="5" fill="#d4c8a0" opacity="0.15"/>
    <circle cx="735" cy="110" r="3" fill="#d4c8a0" opacity="0.18"/>
    <polygon points="200,380 300,280 400,380" fill="#1a1810" opacity="0.6"/>
    <polygon points="210,380 300,300 390,380" fill="#14120c" opacity="0.5"/>
    <rect x="285" y="280" width="30" height="6" fill="#221a10" opacity="0.5"/>
    <rect x="290" y="270" width="20" height="5" fill="#221a10" opacity="0.4"/>
    <polygon points="600,400 720,300 840,400" fill="#1a1810" opacity="0.55"/>
    <polygon points="610,400 720,320 830,400" fill="#14120c" opacity="0.45"/>
    <rect x="705" y="300" width="30" height="6" fill="#221a10" opacity="0.5"/>
    <polygon points="-50,600 250,340 550,600" fill="#14120c"/>
    <polygon points="180,600 450,360 750,600" fill="#1a1810"/>
    <polygon points="480,600 700,380 1000,600" fill="#100e0a"/>
    <circle cx="120" cy="60" r="1" fill="#fff" opacity="0.15"/>
    <circle cx="400" cy="40" r="1.2" fill="#fff" opacity="0.12"/>
    <circle cx="900" cy="70" r="1" fill="#fff" opacity="0.15"/>
    <path d="M 100 350 Q 200 320 250 340" fill="none" stroke="#d4c8a0" stroke-width="0.5" opacity="0.2"/>
    <path d="M 600 380 Q 700 350 750 370" fill="none" stroke="#d4c8a0" stroke-width="0.5" opacity="0.15"/>
  </svg>`,

  samurai: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#1a0f15"/>
    <rect x="200" y="220" width="18" height="380" fill="#cc4433" opacity="0.6"/>
    <rect x="218" y="240" width="8" height="360" fill="#cc4433" opacity="0.5"/>
    <rect x="200" y="220" width="80" height="8" fill="#cc4433" opacity="0.5"/>
    <rect x="180" y="210" width="120" height="8" fill="#cc4433" opacity="0.35"/>
    <polygon points="-50,600 250,340 550,600" fill="#1a0f15"/>
    <polygon points="200,600 500,360 800,600" fill="#140a10"/>
    <circle cx="60" y="60" r="25" fill="#ffccaa" opacity="0.7"/>
    <circle cx="60" y="60" r="35" fill="#ffccaa" opacity="0.05"/>
    <circle cx="60" y="60" r="18" fill="#ffddaa" opacity="0.5"/>
    <rect x="120" y="180" width="80" height="16" fill="#1a0f15" opacity="0.7"/>
    <rect x="140" y="196" width="40" height="14" fill="#1a0f15" opacity="0.6"/>
    <polygon points="120,180 200,180 220,120 100,120" fill="#2a1830" opacity="0.4"/>
    <circle cx="140" cy="140" r="8" fill="#ff8899" opacity="0.3"/>
    <circle cx="170" cy="145" r="6" fill="#ff8899" opacity="0.2"/>
    <circle cx="200" cy="150" r="7" fill="#ff8899" opacity="0.25"/>
    <circle cx="155" cy="130" r="5" fill="#ff8899" opacity="0.2"/>
    <circle cx="110" cy="100" r="1" fill="#ffccaa" opacity="0.2"/>
    <circle cx="330" cy="80" r="1.5" fill="#ffccaa" opacity="0.15"/>
    <circle cx="600" cy="50" r="1" fill="#fff" opacity="0.15"/>
    <circle cx="850" cy="70" r="1.2" fill="#fff" opacity="0.2"/>
  </svg>`,

  viking: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#080c14"/>
    <path d="M 0 500 Q 200 480 400 500 Q 600 520 800 490 Q 900 480 1000 500 L 1000 600 L 0 600 Z" fill="#0a1220"/>
    <path d="M 0 520 Q 300 480 600 530 Q 800 510 1000 520 L 1000 600 L 0 600 Z" fill="#060c18"/>
    <polygon points="200,580 400,550 600,580" fill="#0a1220"/>
    <polygon points="200,590 400,560 600,590" fill="#060c18"/>
    <polygon points="220,600 400,530 380,600" fill="#0a1220" opacity="0.5"/>
    <rect x="300" y="440" width="4" height="60" fill="#1a2030" opacity="0.6"/>
    <polygon points="280,440 320,440 310,400 290,400" fill="#1a2030" opacity="0.4"/>
    <path d="M 0 300 Q 200 260 400 300 Q 600 340 800 290 Q 900 270 1000 300" fill="none" stroke="#44aa66" stroke-width="4" opacity="0.25"/>
    <path d="M 0 280 Q 200 240 400 280 Q 600 320 800 270 Q 900 250 1000 280" fill="none" stroke="#44aa66" stroke-width="3" opacity="0.15"/>
    <path d="M 0 320 Q 200 280 400 320 Q 600 360 800 310 Q 900 290 1000 320" fill="none" stroke="#8866cc" stroke-width="3" opacity="0.15"/>
    <polygon points="-50,600 200,340 450,600" fill="#0a1422"/>
    <polygon points="250,600 500,350 750,600" fill="#141c30"/>
    <polygon points="550,600 800,380 1050,600" fill="#0a1422"/>
    <circle cx="150" cy="80" r="1.5" fill="#fff" opacity="0.25"/>
    <circle cx="450" cy="50" r="1" fill="#fff" opacity="0.2"/>
    <circle cx="700" cy="60" r="1.2" fill="#fff" opacity="0.2"/>
    <circle cx="880" cy="90" r="1.5" fill="#fff" opacity="0.3"/>
    <rect x="700" y="420" width="8" height="60" fill="#1a2030" opacity="0.4"/>
    <rect x="750" y="430" width="8" height="50" fill="#1a2030" opacity="0.35"/>
    <rect x="650" y="440" width="6" height="40" fill="#1a2030" opacity="0.3"/>
  </svg>`,

  nature: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#060e0a"/>
    <circle cx="780" cy="140" r="48" fill="#eef0e0" opacity="0.8"/>
    <circle cx="770" cy="130" r="7" fill="#dde0cc" opacity="0.2"/>
    <circle cx="790" cy="155" r="4" fill="#dde0cc" opacity="0.15"/>
    <polygon points="-50,600 180,380 420,600" fill="#0a160e"/>
    <polygon points="120,600 380,350 650,600" fill="#0c1a10"/>
    <polygon points="300,600 550,370 820,600" fill="#0a160e"/>
    <polygon points="520,600 750,390 1050,600" fill="#0c1a10"/>
    <path d="M 0 420 Q 200 380 500 440 Q 750 400 1000 430 L 1000 600 L 0 600 Z" fill="#08140c" opacity="0.6"/>
    <path d="M 200 400 Q 300 350 500 430 Q 700 380 900 420" fill="none" stroke="#226644" stroke-width="2" opacity="0.3"/>
    <path d="M 400 430 Q 450 410 500 435" fill="none" stroke="#226644" stroke-width="1.5" opacity="0.2"/>
    <rect x="320" y="310" width="4" height="80" fill="#0a160e" opacity="0.5"/>
    <polygon points="280,310 360,310 340,250 300,250" fill="#0c1a10" opacity="0.4"/>
    <rect x="580" y="290" width="5" height="90" fill="#0a160e" opacity="0.55"/>
    <polygon points="540,290 630,290 600,220 560,220" fill="#0c1a10" opacity="0.45"/>
    <circle cx="160" cy="60" r="1.5" fill="#fff" opacity="0.2"/>
    <circle cx="450" cy="40" r="1" fill="#fff" opacity="0.15"/>
    <circle cx="680" cy="80" r="1.2" fill="#fff" opacity="0.2"/>
    <circle cx="920" cy="50" r="1" fill="#fff" opacity="0.18"/>
    <polygon points="160,500 170,520 150,520" fill="#1a2a18" opacity="0.4"/>
    <polygon points="170,505 180,525 160,525" fill="#1a2a18" opacity="0.35"/>
    <polygon points="155,510 165,530 145,530" fill="#1a2a18" opacity="0.35"/>
    <polygon points="680,490 690,510 670,510" fill="#1a2a18" opacity="0.4"/>
    <polygon points="690,495 700,515 680,515" fill="#1a2a18" opacity="0.35"/>
  </svg>`,

  lab: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.45">
    <rect width="1000" height="600" fill="#0a0d14"/>
    <rect x="0" y="0" width="1000" height="300" fill="#0e1220" opacity="0.5"/>
    <line x1="0" y1="300" x2="1000" y2="300" stroke="#1a2240" stroke-width="1"/>
    <rect x="100" y="340" width="30" height="15" fill="#162040" opacity="0.5"/>
    <rect x="100" y="355" width="10" height="30" fill="#162040" opacity="0.5"/>
    <rect x="120" y="355" width="10" height="30" fill="#162040" opacity="0.5"/>
    <rect x="300" y="380" width="40" height="20" fill="#162040" opacity="0.5"/>
    <rect x="300" y="400" width="12" height="40" fill="#162040" opacity="0.5"/>
    <rect x="322" y="400" width="12" height="40" fill="#162040" opacity="0.5"/>
    <circle cx="500" cy="350" r="80" fill="none" stroke="#1a2a50" stroke-width="2" opacity="0.4"/>
    <circle cx="500" cy="350" r="60" fill="none" stroke="#1a2a50" stroke-width="1.5" opacity="0.3"/>
    <circle cx="500" cy="350" r="40" fill="none" stroke="#1a2a50" stroke-width="1" opacity="0.25"/>
    <rect x="700" y="320" width="20" height="40" fill="#162040" opacity="0.5"/>
    <circle cx="710" cy="310" r="10" fill="#162040" opacity="0.45"/>
    <rect x="850" y="360" width="50" height="12" fill="#162040" opacity="0.5"/>
    <rect x="850" y="372" width="12" height="30" fill="#162040" opacity="0.5"/>
    <rect x="870" y="372" width="12" height="30" fill="#162040" opacity="0.5"/>
    <rect x="888" y="372" width="12" height="30" fill="#162040" opacity="0.5"/>
    <circle cx="500" cy="350" r="8" fill="#4488ff" opacity="0.5"/>
    <circle cx="710" cy="310" r="3" fill="#4488ff" opacity="0.4"/>
    <circle cx="100" cy="348" r="2" fill="#44ff88" opacity="0.4"/>
    <circle cx="300" cy="388" r="2" fill="#ff6644" opacity="0.4"/>
    <circle cx="856" cy="366" r="2" fill="#88ff44" opacity="0.4"/>
    <rect x="480" y="280" width="40" height="60" fill="none" stroke="#4488ff" stroke-width="1" opacity="0.3"/>
    <line x1="500" y1="260" x2="500" y2="240" stroke="#4488ff" stroke-width="1" opacity="0.3"/>
    <circle cx="500" cy="230" r="8" fill="#4488ff" opacity="0.15"/>
    <polygon points="440,300 560,300 500,250" fill="none" stroke="#4488ff" stroke-width="0.8" opacity="0.15"/>
  </svg>`,

  colossus: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.48">
    <rect width="1000" height="600" fill="#06080c"/>
    <rect x="0" y="280" width="1000" height="40" fill="#0a0e14" opacity="0.7"/>
    <rect x="0" y="360" width="1000" height="40" fill="#0a0e14" opacity="0.7"/>
    <rect x="50" y="200" width="18" height="200" fill="#0c1018" opacity="0.6"/>
    <rect x="80" y="200" width="18" height="200" fill="#0c1018" opacity="0.6"/>
    <rect x="110" y="200" width="18" height="200" fill="#0c1018" opacity="0.6"/>
    <rect x="160" y="180" width="18" height="220" fill="#0c1018" opacity="0.6"/>
    <rect x="190" y="180" width="18" height="220" fill="#0c1018" opacity="0.6"/>
    <rect x="220" y="180" width="18" height="220" fill="#0c1018" opacity="0.6"/>
    <rect x="300" y="160" width="18" height="240" fill="#0c1018" opacity="0.6"/>
    <rect x="330" y="160" width="18" height="240" fill="#0c1018" opacity="0.6"/>
    <rect x="360" y="160" width="18" height="240" fill="#0c1018" opacity="0.6"/>
    <rect x="620" y="180" width="18" height="220" fill="#0c1018" opacity="0.6"/>
    <rect x="650" y="180" width="18" height="220" fill="#0c1018" opacity="0.6"/>
    <rect x="680" y="180" width="18" height="220" fill="#0c1018" opacity="0.6"/>
    <rect x="750" y="200" width="18" height="200" fill="#0c1018" opacity="0.6"/>
    <rect x="780" y="200" width="18" height="200" fill="#0c1018" opacity="0.6"/>
    <rect x="810" y="200" width="18" height="200" fill="#0c1018" opacity="0.6"/>
    <rect x="860" y="200" width="18" height="200" fill="#0c1018" opacity="0.6"/>
    <rect x="470" y="120" width="60" height="280" fill="#0c1018" opacity="0.7"/>
    <rect x="480" y="140" width="40" height="240" fill="#080a10" opacity="0.8"/>
    <circle cx="500" cy="260" r="18" fill="#ff4444" opacity="0.5"/>
    <circle cx="500" cy="260" r="30" fill="#ff4444" opacity="0.06"/>
    <rect x="65" y="210" width="6" height="3" fill="#00ff44" opacity="0.6"/>
    <rect x="175" y="190" width="6" height="3" fill="#44ff00" opacity="0.5"/>
    <rect x="315" y="170" width="6" height="3" fill="#00ff44" opacity="0.6"/>
    <rect x="635" y="190" width="6" height="3" fill="#44ff00" opacity="0.5"/>
    <rect x="765" y="210" width="6" height="3" fill="#00ff44" opacity="0.6"/>
    <circle cx="140" cy="60" r="1" fill="#fff" opacity="0.15"/>
    <circle cx="500" cy="40" r="1.5" fill="#fff" opacity="0.2"/>
    <circle cx="850" cy="80" r="1" fill="#fff" opacity="0.15"/>
    <rect x="0" y="200" width="1000" height="2" fill="#101418" opacity="0.4"/>
    <rect x="0" y="280" width="1000" height="2" fill="#101418" opacity="0.4"/>
    <rect x="0" y="360" width="1000" height="2" fill="#101418" opacity="0.4"/>
  </svg>`,

  supercomputer: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.48">
    <rect width="1000" height="600" fill="#060810"/>
    <rect x="0" y="400" width="1000" height="200" fill="#080c16" opacity="0.7"/>
    <line x1="0" y1="400" x2="1000" y2="400" stroke="#1a2040" stroke-width="1.5" opacity="0.4"/>
    <rect x="100" y="420" width="800" height="4" stroke="#0a1020" stroke-width="0.5" opacity="0.5"/>
    <rect x="100" y="460" width="800" height="4" stroke="#0a1020" stroke-width="0.5" opacity="0.5"/>
    <rect x="100" y="500" width="800" height="4" stroke="#0a1020" stroke-width="0.5" opacity="0.5"/>
    <rect x="100" y="540" width="800" height="4" stroke="#0a1020" stroke-width="0.5" opacity="0.5"/>
    <rect x="460" y="220" width="80" height="180" fill="#0c1020" opacity="0.8"/>
    <rect x="470" y="250" width="60" height="120" fill="#080c18" opacity="0.9"/>
    <circle cx="500" cy="310" r="20" fill="#ffcc44" opacity="0.45"/>
    <circle cx="500" cy="310" r="35" fill="#ffcc44" opacity="0.08"/>
    <circle cx="500" cy="310" r="10" fill="#ffeebb" opacity="0.6"/>
    <line x1="500" y1="220" x2="500" y2="190" stroke="#ffcc44" stroke-width="1.5" opacity="0.25"/>
    <line x1="300" y1="180" x2="500" y2="310" stroke="#4488ff" stroke-width="1" opacity="0.12"/>
    <line x1="700" y1="180" x2="500" y2="310" stroke="#4488ff" stroke-width="1" opacity="0.12"/>
    <line x1="200" y1="300" x2="500" y2="310" stroke="#4488ff" stroke-width="0.8" opacity="0.1"/>
    <line x1="800" y1="300" x2="500" y2="310" stroke="#4488ff" stroke-width="0.8" opacity="0.1"/>
    <line x1="500" y1="100" x2="500" y2="310" stroke="#ffcc44" stroke-width="0.8" opacity="0.1"/>
    <circle cx="500" cy="310" r="50" fill="none" stroke="#ffcc44" stroke-width="0.8" opacity="0.1"/>
    <circle cx="500" cy="310" r="65" fill="none" stroke="#4488ff" stroke-width="0.5" opacity="0.08"/>
    <circle cx="500" cy="310" r="80" fill="none" stroke="#4488ff" stroke-width="0.3" opacity="0.06"/>
    <circle cx="200" cy="80" r="1" fill="#fff" opacity="0.15"/>
    <circle cx="450" cy="50" r="1.5" fill="#fff" opacity="0.2"/>
    <circle cx="750" cy="70" r="1" fill="#fff" opacity="0.15"/>
    <circle cx="900" cy="45" r="1.2" fill="#fff" opacity="0.18"/>
    <path d="M 400 440 Q 500 430 600 450 Q 550 480 450 470 Z" fill="#4488ff" opacity="0.05"/>
  </svg>`,

  office: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.46">
    <rect width="1000" height="600" fill="#080a10"/>
    <rect x="0" y="420" width="1000" height="180" fill="#0c0e14" opacity="0.7"/>
    <rect x="0" y="420" width="1000" height="2" fill="#1a1e28" opacity="0.5"/>
    <rect x="60" y="350" width="70" height="70" fill="#0e1018" opacity="0.6"/>
    <rect x="70" y="360" width="50" height="30" fill="#2a3a5a" opacity="0.2"/>
    <rect x="200" y="340" width="70" height="80" fill="#0e1018" opacity="0.6"/>
    <rect x="210" y="350" width="50" height="30" fill="#2a4a3a" opacity="0.2"/>
    <rect x="340" y="360" width="70" height="60" fill="#0e1018" opacity="0.55"/>
    <rect x="350" y="370" width="50" height="25" fill="#4a3a2a" opacity="0.2"/>
    <rect x="480" y="330" width="70" height="90" fill="#0e1018" opacity="0.6"/>
    <rect x="490" y="340" width="50" height="30" fill="#2a3a5a" opacity="0.2"/>
    <rect x="620" y="350" width="70" height="70" fill="#0e1018" opacity="0.55"/>
    <rect x="630" y="360" width="50" height="25" fill="#4a2a3a" opacity="0.2"/>
    <rect x="760" y="340" width="70" height="80" fill="#0e1018" opacity="0.6"/>
    <rect x="770" y="350" width="50" height="30" fill="#2a3a5a" opacity="0.2"/>
    <rect x="900" y="360" width="70" height="60" fill="#0e1018" opacity="0.55"/>
    <rect x="910" y="370" width="50" height="25" fill="#3a4a2a" opacity="0.2"/>
    <rect x="0" y="280" width="1000" height="140" fill="none" stroke="#1a1e28" stroke-width="0.5" opacity="0.4"/>
    <line x1="200" y1="280" x2="200" y2="420" stroke="#1a1e28" stroke-width="0.5" opacity="0.4"/>
    <line x1="500" y1="280" x2="500" y2="420" stroke="#1a1e28" stroke-width="0.5" opacity="0.4"/>
    <line x1="800" y1="280" x2="800" y2="420" stroke="#1a1e28" stroke-width="0.5" opacity="0.4"/>
    <rect x="400" y="200" width="120" height="80" fill="#0a0e16" opacity="0.5"/>
    <rect x="420" y="215" width="80" height="50" fill="#2a3a5a" opacity="0.25"/>
    <rect x="680" y="220" width="100" height="60" fill="#0a0e16" opacity="0.5"/>
    <rect x="695" y="232" width="70" height="36" fill="#3a4a2a" opacity="0.25"/>
    <rect x="100" y="240" width="60" height="40" fill="#0a0e16" opacity="0.45"/>
    <circle cx="140" cy="50" r="1" fill="#fff" opacity="0.12"/>
    <circle cx="450" cy="30" r="1.5" fill="#fff" opacity="0.15"/>
    <circle cx="780" cy="60" r="1" fill="#fff" opacity="0.12"/>
  </svg>`,

  engineer: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.48">
    <rect width="1000" height="600" fill="#080a0e"/>
    <rect x="0" y="440" width="1000" height="160" fill="#0c0e12" opacity="0.7"/>
    <rect x="100" y="340" width="80" height="100" fill="#0e1018" opacity="0.6"/>
    <rect x="110" y="350" width="60" height="40" fill="#1a1e28" opacity="0.5"/>
    <rect x="110" y="400" width="25" height="40" fill="#1a1e28" opacity="0.4"/>
    <rect x="145" y="400" width="25" height="40" fill="#1a1e28" opacity="0.4"/>
    <rect x="400" y="320" width="120" height="120" fill="#0e1018" opacity="0.6"/>
    <rect x="420" y="340" width="80" height="40" fill="#1a1e28" opacity="0.5"/>
    <line x1="400" y1="320" x2="400" y2="250" stroke="#1a1e28" stroke-width="4" opacity="0.4"/>
    <line x1="520" y1="320" x2="550" y2="240" stroke="#1a1e28" stroke-width="3" opacity="0.35"/>
    <circle cx="420" cy="310" r="3" fill="#ff8833" opacity="0.6"/>
    <circle cx="450" cy="310" r="2" fill="#ff8833" opacity="0.4"/>
    <rect x="700" y="350" width="90" height="90" fill="#0e1018" opacity="0.6"/>
    <rect x="710" y="360" width="70" height="30" fill="#1a1e28" opacity="0.5"/>
    <rect x="850" y="370" width="70" height="70" fill="#0e1018" opacity="0.55"/>
    <rect x="855" y="380" width="60" height="15" fill="#1a1e28" opacity="0.45"/>
    <circle cx="890" cy="370" r="4" fill="#4488ff" opacity="0.5"/>
    <polygon points="550,200 600,180 650,200 630,240 570,240" fill="#0e1018" opacity="0.5"/>
    <line x1="600" y1="180" x2="600" y2="140" stroke="#1a1e28" stroke-width="3" opacity="0.4"/>
    <circle cx="600" cy="130" r="4" fill="#ff8833" opacity="0.5"/>
    <circle cx="200" cy="60" r="1" fill="#fff" opacity="0.12"/>
    <circle cx="550" cy="40" r="1.2" fill="#fff" opacity="0.15"/>
    <circle cx="800" cy="70" r="1" fill="#fff" opacity="0.12"/>
  </svg>`,

  investor: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.48">
    <rect width="1000" height="600" fill="#060a08"/>
    <rect x="80" y="300" width="20" height="300" fill="#0e1a12"/>
    <rect x="110" y="220" width="24" height="380" fill="#0e1a12"/>
    <rect x="145" y="260" width="20" height="340" fill="#0e1a12"/>
    <rect x="175" y="200" width="28" height="400" fill="#0e1a12"/>
    <rect x="215" y="280" width="20" height="320" fill="#0e1a12"/>
    <rect x="245" y="180" width="24" height="420" fill="#0e1a12"/>
    <rect x="280" y="240" width="28" height="360" fill="#0e1a12"/>
    <rect x="320" y="160" width="22" height="440" fill="#0e1a12"/>
    <rect x="355" y="220" width="26" height="380" fill="#0e1a12"/>
    <rect x="400" y="140" width="30" height="460" fill="#122018"/>
    <rect x="445" y="200" width="25" height="400" fill="#0e1a12"/>
    <rect x="485" y="120" width="28" height="480" fill="#142218"/>
    <rect x="530" y="180" width="24" height="420" fill="#0e1a12"/>
    <rect x="570" y="160" width="30" height="440" fill="#122018"/>
    <rect x="615" y="200" width="26" height="400" fill="#0e1a12"/>
    <circle cx="120" cy="50" r="2" fill="#ffd700" opacity="0.3"/>
    <circle cx="250" cy="40" r="1.5" fill="#ffd700" opacity="0.25"/>
    <circle cx="500" cy="30" r="2.5" fill="#ffd700" opacity="0.35"/>
    <circle cx="750" cy="50" r="1.8" fill="#ffd700" opacity="0.25"/>
    <circle cx="900" cy="35" r="1.5" fill="#ffd700" opacity="0.2"/>
    <rect x="0" y="300" width="1000" height="2" fill="#1a2a1a" opacity="0.3"/>
    <rect x="0" y="450" width="1000" height="2" fill="#1a2a1a" opacity="0.25"/>
  </svg>`,

  politician: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#060810"/>
    <rect x="0" y="350" width="1000" height="250" fill="#0a0e18" opacity="0.7"/>
    <rect x="300" y="180" width="400" height="170" fill="#0e1422" opacity="0.6"/>
    <polygon points="300,180 500,100 700,180" fill="#101830" opacity="0.5"/>
    <rect x="470" y="90" width="60" height="10" fill="#141e38" opacity="0.5"/>
    <rect x="480" y="80" width="40" height="10" fill="#141e38" opacity="0.4"/>
    <rect x="430" y="220" width="40" height="130" fill="#0e1422" opacity="0.5"/>
    <rect x="530" y="220" width="40" height="130" fill="#0e1422" opacity="0.5"/>
    <rect x="470" y="200" width="60" height="20" fill="#121830" opacity="0.45"/>
    <rect x="0" y="440" width="1000" height="6" fill="#1a2030" opacity="0.3"/>
    <rect x="0" y="480" width="1000" height="4" fill="#1a2030" opacity="0.25"/>
    <rect x="0" y="520" width="1000" height="3" fill="#1a2030" opacity="0.2"/>
    <rect x="80" y="390" width="4" height="210" fill="#1a2238" opacity="0.3"/>
    <rect x="280" y="390" width="4" height="210" fill="#1a2238" opacity="0.3"/>
    <rect x="480" y="390" width="4" height="210" fill="#1a2238" opacity="0.3"/>
    <rect x="680" y="390" width="4" height="210" fill="#1a2238" opacity="0.3"/>
    <rect x="880" y="390" width="4" height="210" fill="#1a2238" opacity="0.3"/>
    <circle cx="150" cy="70" r="1.5" fill="#fff" opacity="0.15"/>
    <circle cx="500" cy="40" r="2" fill="#fff" opacity="0.2"/>
    <circle cx="800" cy="60" r="1" fill="#fff" opacity="0.15"/>
  </svg>`,

  regulator: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.48">
    <rect width="1000" height="600" fill="#080808"/>
    <rect x="200" y="200" width="600" height="400" fill="#0c0c0c" opacity="0.7"/>
    <rect x="220" y="220" width="560" height="380" fill="#101010" opacity="0.5"/>
    <rect x="230" y="240" width="540" height="360" fill="#0e0e0e" opacity="0.6"/>
    <path d="M 230 280 Q 300 240 400 260 Q 500 280 600 250 Q 700 230 770 270" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.5"/>
    <rect x="260" y="300" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <rect x="290" y="300" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <rect x="320" y="300" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <rect x="260" y="330" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <rect x="290" y="330" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <rect x="500" y="300" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <rect x="530" y="300" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <rect x="650" y="300" width="15" height="15" fill="none" stroke="#2a2a2a" stroke-width="1" opacity="0.5"/>
    <circle cx="500" cy="420" r="40" fill="none" stroke="#2a2020" stroke-width="2" opacity="0.4"/>
    <circle cx="500" cy="420" r="25" fill="none" stroke="#2a2020" stroke-width="1.5" opacity="0.35"/>
    <line x1="475" y1="395" x2="525" y2="445" stroke="#2a2020" stroke-width="1.5" opacity="0.35"/>
    <line x1="525" y1="395" x2="475" y2="445" stroke="#2a2020" stroke-width="1.5" opacity="0.35"/>
    <rect x="485" y="400" width="30" height="8" fill="#2a2020" opacity="0.4"/>
    <rect x="490" y="420" width="20" height="30" fill="#2a2020" opacity="0.4"/>
    <circle cx="200" cy="80" r="1" fill="#d4a860" opacity="0.25"/>
    <circle cx="500" cy="50" r="1.5" fill="#d4a860" opacity="0.3"/>
    <circle cx="800" cy="70" r="1" fill="#d4a860" opacity="0.25"/>
  </svg>`,

  staff: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.44">
    <rect width="1000" height="600" fill="#080a0e"/>
    <rect x="0" y="440" width="1000" height="160" fill="#0c0e14" opacity="0.6"/>
    <rect x="120" y="380" width="40" height="60" fill="#0e1018" opacity="0.5"/>
    <circle cx="140" cy="370" r="15" fill="#2a2a20" opacity="0.3"/>
    <rect x="250" y="370" width="60" height="70" fill="#0e1018" opacity="0.5"/>
    <rect x="260" y="380" width="40" height="30" fill="#1a1e28" opacity="0.3"/>
    <rect x="420" y="360" width="60" height="80" fill="#0e1018" opacity="0.5"/>
    <rect x="430" y="370" width="40" height="25" fill="#1a1e28" opacity="0.3"/>
    <circle cx="450" cy="340" r="8" fill="#443322" opacity="0.3"/>
    <rect x="600" y="390" width="30" height="50" fill="#0e1018" opacity="0.45"/>
    <rect x="740" y="370" width="60" height="70" fill="#0e1018" opacity="0.5"/>
    <rect x="750" y="380" width="40" height="30" fill="#1a1e28" opacity="0.3"/>
    <rect x="880" y="380" width="40" height="60" fill="#0e1018" opacity="0.5"/>
    <circle cx="900" cy="370" r="12" fill="#332a22" opacity="0.3"/>
    <line x1="140" y1="370" x2="140" y2="340" stroke="#2a2a20" stroke-width="1" opacity="0.3"/>
    <line x1="270" y1="380" x2="270" y2="350" stroke="#2a2a20" stroke-width="1" opacity="0.3"/>
    <line x1="760" y1="380" x2="760" y2="350" stroke="#2a2a20" stroke-width="1" opacity="0.3"/>
    <line x1="900" y1="370" x2="900" y2="340" stroke="#332a22" stroke-width="1" opacity="0.3"/>
    <circle cx="200" cy="60" r="1.2" fill="#fff" opacity="0.1"/>
    <circle cx="500" cy="40" r="1.5" fill="#fff" opacity="0.12"/>
    <circle cx="750" cy="70" r="1" fill="#fff" opacity="0.1"/>
  </svg>`,

  journalist: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.48">
    <rect width="1000" height="600" fill="#0a080a"/>
    <rect x="300" y="280" width="400" height="320" fill="#0e0c0e" opacity="0.6"/>
    <rect x="320" y="300" width="360" height="300" fill="#120e10" opacity="0.5"/>
    <rect x="340" y="320" width="320" height="280" fill="#100c0e" opacity="0.5"/>
    <circle cx="500" cy="470" r="70" fill="none" stroke="#2a1a1a" stroke-width="1.5" opacity="0.35"/>
    <circle cx="500" cy="470" r="45" fill="none" stroke="#2a1a1a" stroke-width="1" opacity="0.3"/>
    <line x1="460" y1="430" x2="540" y2="510" stroke="#2a1a1a" stroke-width="1" opacity="0.3"/>
    <line x1="540" y1="430" x2="460" y2="510" stroke="#2a1a1a" stroke-width="1" opacity="0.3"/>
    <rect x="440" y="450" width="20" height="40" fill="#1a1220" opacity="0.3"/>
    <rect x="540" y="450" width="20" height="40" fill="#1a1220" opacity="0.3"/>
    <rect x="460" y="440" width="80" height="10" fill="#1a1220" opacity="0.4"/>
    <circle cx="850" cy="100" r="4" fill="#ff4466" opacity="0.45"/>
    <circle cx="850" cy="100" r="8" fill="#ff4466" opacity="0.06"/>
    <rect x="0" y="350" width="1000" height="2" stroke="#201418" stroke-width="0.5" opacity="0.3"/>
    <rect x="0" y="500" width="1000" height="2" stroke="#201418" stroke-width="0.5" opacity="0.25"/>
    <circle cx="150" cy="60" r="1" fill="#fff" opacity="0.12"/>
    <circle cx="400" cy="50" r="1.5" fill="#fff" opacity="0.15"/>
    <circle cx="700" cy="70" r="1" fill="#fff" opacity="0.12"/>
    <circle cx="920" cy="40" r="1.2" fill="#fff" opacity="0.15"/>
  </svg>`,

  scientist: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.48">
    <rect width="1000" height="600" fill="#06080e"/>
    <circle cx="500" cy="380" r="140" fill="none" stroke="#1a2840" stroke-width="2" opacity="0.3"/>
    <circle cx="500" cy="380" r="110" fill="none" stroke="#1a2840" stroke-width="1.5" opacity="0.25"/>
    <circle cx="500" cy="380" r="80" fill="none" stroke="#1a2840" stroke-width="1" opacity="0.2"/>
    <circle cx="500" cy="380" r="50" fill="none" stroke="#1a2840" stroke-width="1" opacity="0.15"/>
    <circle cx="500" cy="380" r="20" fill="#2a5088" opacity="0.15"/>
    <circle cx="500" cy="380" r="8" fill="#4488ff" opacity="0.4"/>
    <line x1="300" y1="380" x2="700" y2="380" stroke="#1a2840" stroke-width="1" opacity="0.2"/>
    <line x1="500" y1="180" x2="500" y2="580" stroke="#1a2840" stroke-width="1" opacity="0.2"/>
    <line x1="360" y1="240" x2="640" y2="520" stroke="#1a2840" stroke-width="0.8" opacity="0.15"/>
    <line x1="640" y1="240" x2="360" y2="520" stroke="#1a2840" stroke-width="0.8" opacity="0.15"/>
    <rect x="0" y="500" width="1000" height="100" fill="#0a0e16" opacity="0.5"/>
    <circle cx="150" cy="80" r="1.5" fill="#4488ff" opacity="0.2"/>
    <circle cx="450" cy="50" r="1" fill="#4488ff" opacity="0.15"/>
    <circle cx="680" cy="70" r="1.2" fill="#4488ff" opacity="0.18"/>
    <circle cx="880" cy="40" r="1" fill="#4488ff" opacity="0.15"/>
  </svg>`,

  military: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#06080a"/>
    <rect x="0" y="480" width="1000" height="120" fill="#0a0c10" opacity="0.7"/>
    <rect x="0" y="460" width="1000" height="4" fill="#1a1e24" opacity="0.4"/>
    <rect x="50" y="400" width="15" height="60" fill="#0c1018" opacity="0.5"/>
    <rect x="80" y="410" width="15" height="50" fill="#0c1018" opacity="0.45"/>
    <rect x="110" y="390" width="15" height="70" fill="#0c1018" opacity="0.5"/>
    <circle cx="500" cy="200" r="120" fill="none" stroke="#1a2820" stroke-width="1.5" opacity="0.3"/>
    <circle cx="500" cy="200" r="80" fill="none" stroke="#1a2820" stroke-width="1" opacity="0.25"/>
    <circle cx="500" cy="200" r="40" fill="none" stroke="#1a2820" stroke-width="0.8" opacity="0.2"/>
    <line x1="380" y1="200" x2="620" y2="200" stroke="#1a2820" stroke-width="1" opacity="0.25"/>
    <line x1="500" y1="80" x2="500" y2="320" stroke="#1a2820" stroke-width="1" opacity="0.25"/>
    <line x1="500" y1="200" x2="700" y2="100" stroke="#44ff88" stroke-width="1.2" opacity="0.2"/>
    <circle cx="700" cy="100" r="4" fill="#44ff88" opacity="0.3"/>
    <circle cx="700" cy="100" r="2" fill="#44ff88" opacity="0.5"/>
    <polygon points="750,350 800,320 850,350" fill="none" stroke="#1a1e24" stroke-width="1" opacity="0.3"/>
    <polygon points="150,350 200,310 250,350" fill="none" stroke="#1a1e24" stroke-width="1" opacity="0.3"/>
    <circle cx="800" cy="60" r="1.5" fill="#ff4422" opacity="0.3"/>
    <circle cx="300" cy="40" r="1" fill="#fff" opacity="0.12"/>
    <circle cx="600" cy="50" r="1.2" fill="#fff" opacity="0.15"/>
  </svg>`,

  academic: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#080a0e"/>
    <rect x="50" y="120" width="14" height="480" fill="#121420" opacity="0.5"/>
    <rect x="70" y="140" width="10" height="460" fill="#10121c" opacity="0.5"/>
    <rect x="85" y="130" width="12" height="470" fill="#121420" opacity="0.5"/>
    <rect x="140" y="100" width="16" height="500" fill="#10121c" opacity="0.5"/>
    <rect x="162" y="120" width="10" height="480" fill="#121420" opacity="0.5"/>
    <rect x="240" y="90" width="14" height="510" fill="#10121c" opacity="0.5"/>
    <rect x="260" y="110" width="10" height="490" fill="#121420" opacity="0.5"/>
    <rect x="670" y="100" width="14" height="500" fill="#10121c" opacity="0.5"/>
    <rect x="690" y="120" width="10" height="480" fill="#121420" opacity="0.5"/>
    <rect x="750" y="90" width="16" height="510" fill="#10121c" opacity="0.5"/>
    <rect x="770" y="110" width="12" height="490" fill="#121420" opacity="0.5"/>
    <rect x="840" y="130" width="14" height="470" fill="#10121c" opacity="0.5"/>
    <rect x="860" y="150" width="10" height="450" fill="#121420" opacity="0.5"/>
    <rect x="0" y="400" width="1000" height="200" fill="#0c0e14" opacity="0.5"/>
    <rect x="400" y="280" width="200" height="120" fill="#0e1018" opacity="0.4"/>
    <rect x="420" y="300" width="160" height="80" fill="#141820" opacity="0.3"/>
    <circle cx="500" cy="250" r="10" fill="#d4c8a0" opacity="0.15"/>
    <path d="M 470 380 Q 500 360 530 380 Q 515 400 485 400 Z" fill="#10121c" opacity="0.4"/>
    <circle cx="200" cy="30" r="1.5" fill="#c8d0e0" opacity="0.15"/>
    <circle cx="550" cy="40" r="1" fill="#c8d0e0" opacity="0.12"/>
    <circle cx="800" cy="50" r="1.2" fill="#c8d0e0" opacity="0.15"/>
  </svg>`,

  legal: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.5">
    <rect width="1000" height="600" fill="#080606"/>
    <rect x="0" y="400" width="1000" height="200" fill="#0c0a0a" opacity="0.6"/>
    <rect x="50" y="420" width="900" height="4" fill="#1a1010" opacity="0.4"/>
    <rect x="50" y="480" width="900" height="4" fill="#1a1010" opacity="0.35"/>
    <rect x="50" y="540" width="900" height="4" fill="#1a1010" opacity="0.3"/>
    <rect x="350" y="340" width="300" height="60" fill="#0c0a0a" opacity="0.6"/>
    <rect x="360" y="350" width="280" height="40" fill="#100c0c" opacity="0.5"/>
    <rect x="440" y="280" width="120" height="60" fill="#0c0a0a" opacity="0.6"/>
    <rect x="450" y="290" width="100" height="40" fill="#100c0c" opacity="0.5"/>
    <rect x="490" y="360" width="20" height="40" fill="#1a1010" opacity="0.4"/>
    <circle cx="500" cy="240" r="30" fill="none" stroke="#2a1818" stroke-width="1.5" opacity="0.35"/>
    <circle cx="500" cy="240" r="18" fill="none" stroke="#2a1818" stroke-width="1" opacity="0.3"/>
    <line x1="475" y1="215" x2="525" y2="265" stroke="#2a1818" stroke-width="1.5" opacity="0.3"/>
    <line x1="525" y1="215" x2="475" y2="265" stroke="#2a1818" stroke-width="1.5" opacity="0.3"/>
    <rect x="485" y="220" width="30" height="6" fill="#2a1818" opacity="0.35"/>
    <rect x="490" y="235" width="20" height="25" fill="#2a1818" opacity="0.35"/>
    <rect x="460" y="380" width="20" height="30" fill="#0c0a0a" opacity="0.5"/>
    <rect x="520" y="380" width="20" height="30" fill="#0c0a0a" opacity="0.5"/>
    <circle cx="200" cy="80" r="1" fill="#d4a0a0" opacity="0.2"/>
    <circle cx="500" cy="50" r="1.5" fill="#d4a0a0" opacity="0.25"/>
    <circle cx="800" cy="70" r="1" fill="#d4a0a0" opacity="0.2"/>
  </svg>`,

  board: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.45">
    <rect width="1000" height="600" fill="#040404"/>
    <rect x="200" y="370" width="600" height="230" fill="#080808" opacity="0.7"/>
    <rect x="220" y="385" width="560" height="200" fill="#0a0a0a" opacity="0.6"/>
    <line x1="220" y1="385" x2="780" y2="385" stroke="#181818" stroke-width="2" opacity="0.5"/>
    <line x1="220" y1="585" x2="780" y2="585" stroke="#181818" stroke-width="1" opacity="0.4"/>
    <rect x="280" y="400" width="60" height="40" fill="#0c0c0c" opacity="0.5"/>
    <rect x="360" y="400" width="60" height="40" fill="#0c0c0c" opacity="0.5"/>
    <rect x="440" y="400" width="60" height="40" fill="#0c0c0c" opacity="0.5"/>
    <rect x="520" y="400" width="60" height="40" fill="#0c0c0c" opacity="0.5"/>
    <rect x="600" y="400" width="60" height="40" fill="#0c0c0c" opacity="0.5"/>
    <rect x="680" y="400" width="60" height="40" fill="#0c0c0c" opacity="0.5"/>
    <circle cx="500" cy="370" r="5" fill="#fff" opacity="0.08"/>
    <circle cx="500" cy="370" r="12" fill="#fff" opacity="0.03"/>
    <rect x="480" y="280" width="40" height="90" fill="#060606" opacity="0.5"/>
    <rect x="490" y="300" width="20" height="50" fill="#080808" opacity="0.4"/>
    <circle cx="200" cy="80" r="1" fill="#fff" opacity="0.06"/>
    <circle cx="500" cy="40" r="1.5" fill="#fff" opacity="0.08"/>
    <circle cx="800" cy="60" r="1" fill="#fff" opacity="0.06"/>
  </svg>`,

  gameover: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.55">
    <rect width="1000" height="600" fill="#040202"/>
    <circle cx="780" cy="200" r="60" fill="#cc2200" opacity="0.35"/>
    <circle cx="780" cy="200" r="45" fill="#ee3300" opacity="0.25"/>
    <circle cx="780" cy="200" r="30" fill="#ff4400" opacity="0.15"/>
    <polygon points="-50,600 200,380 450,600" fill="#0a0303"/>
    <polygon points="150,600 400,360 650,600" fill="#080202"/>
    <polygon points="300,600 550,390 800,600" fill="#0a0303"/>
    <polygon points="500,600 700,370 950,600" fill="#080202"/>
    <polygon points="650,600 850,400 1050,600" fill="#0a0303"/>
    <rect x="300" y="280" width="8" height="100" fill="#0a0303" opacity="0.6"/>
    <rect x="350" y="260" width="6" height="120" fill="#080202" opacity="0.6"/>
    <rect x="450" y="300" width="10" height="80" fill="#0a0303" opacity="0.5"/>
    <rect x="550" y="270" width="7" height="110" fill="#080202" opacity="0.6"/>
    <rect x="620" y="290" width="9" height="90" fill="#0a0303" opacity="0.5"/>
    <rect x="700" y="250" width="6" height="130" fill="#080202" opacity="0.6"/>
    <circle cx="200" cy="100" r="1" fill="#ff4422" opacity="0.2"/>
    <circle cx="500" cy="60" r="1.5" fill="#ff4422" opacity="0.15"/>
    <circle cx="900" cy="80" r="1" fill="#ff4422" opacity="0.2"/>
    <path d="M 200 450 Q 400 400 600 460 Q 800 420 950 440" fill="none" stroke="#2a0808" stroke-width="2" opacity="0.3"/>
  </svg>`,
};

if (typeof window !== 'undefined') {
  window.BACKGROUNDS = BACKGROUNDS;
}
