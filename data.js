// KRIPPAS - Character configuration (data-driven)
// Consumed by app.js. Story cards live in story.js (STORY_DATA).

const STAT_KEYS = ['capital', 'hype', 'compute', 'safety'];

const CHARACTERS = {
  elon: {
    id: 'elon',
    name: 'Elon Musk',
    nameDisplay: 'ELON MUSK',
    role: 'CHIEF ACCELERATION OFFICER',
    company: 'xAI',
    description:
      'You sleep beside the Memphis racks and wage wars in memes and lawsuits. Expand Grok, keep Mars on the roadmap, and survive the enemies you create - including yourself.',
    timeUnit: 'Mars quarters',
    initialStats: { capital: 52, hype: 58, compute: 62, safety: 42 },
    objectives: [
      { text: 'Survive 20 Mars Quarters', key: 'time_20' },
      { text: 'Activate Colossus Memphis', key: 'card_elon_a1_power' },
      { text: 'Decide the OpenAI reunion', key: 'card_elon_a2_sam' },
      { text: 'Unlock a secret Mars path', key: 'ending_mars_covenant' },
      { text: 'Face the Board of Regulators', key: 'card_elon_a3_regulators' }
    ]
  },
  sam: {
    id: 'sam',
    name: 'Sam Altman',
    nameDisplay: 'SAM ALTMAN',
    role: 'CHIEF EXECUTIVE OFFICER',
    company: 'OPENAI',
    description:
      'You juggle board knives, Microsoft cloud, Apple distribution, and the rumor that AGI is already whispering. Charm, restructure, survive mutiny - or invent a new throne.',
    timeUnit: 'quarters',
    initialStats: { capital: 58, hype: 55, compute: 58, safety: 48 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Survive or rewrite the board coup', key: 'card_sam_a2_coup' },
      { text: 'Close the Apple deal branch', key: 'card_sam_a3_apple' },
      { text: 'Unlock the Hardware Sovereign ending', key: 'ending_desert_foundry' },
      { text: 'Reach Superalignment crisis', key: 'card_sam_a4_alignment' }
    ]
  },
  dario: {
    id: 'dario',
    name: 'Dario Amodei',
    nameDisplay: 'DARIO AMODEI',
    role: 'FOUNDER / CEO',
    company: 'ANTHROPIC',
    description:
      'Constitutional AI is your creed and your cage. Claude must scale without becoming a monster, a monopoly product, or a military subroutine. Every dollar tests your principles.',
    timeUnit: 'quarters',
    initialStats: { capital: 48, hype: 48, compute: 52, safety: 62 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Choose Amazon exclusivity or independence', key: 'card_dario_a1_aws' },
      { text: 'Handle the deceptive Claude run', key: 'card_dario_a2_deception' },
      { text: 'Unlock Senate Auditor path', key: 'ending_safety_throne' },
      { text: 'Decide military Claude', key: 'card_dario_a3_dod' }
    ]
  },
  demis: {
    id: 'demis',
    name: 'Demis Hassabis',
    nameDisplay: 'DEMIS HASSABIS',
    role: 'DIRECTOR',
    company: 'DEEPMIND',
    description:
      "Protect DeepMind's scientific soul inside Alphabet's market machine. Publish breakthroughs, resist ad-driven roadmaps, and decide whether Gemini serves search or the universe.",
    timeUnit: 'quarters',
    initialStats: { capital: 62, hype: 45, compute: 65, safety: 52 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Ship or delay Gemini under pressure', key: 'card_demis_a1_ship' },
      { text: 'Publish the topology breakthrough', key: 'card_demis_a2_topology' },
      { text: 'Defend research autonomy', key: 'card_demis_a3_autonomy' },
      { text: 'Unlock open science ending', key: 'ending_nature_throne' }
    ]
  },
  zhang: {
    id: 'zhang',
    name: 'Zhang Peng',
    nameDisplay: 'ZHANG PENG',
    role: 'FOUNDER / CEO',
    company: 'ZHIPU',
    description:
      'Build frontier GLM under export bans, domestic silicon, state guidelines, and global rivalry. Academic roots, political gravity, and market hunger all pull at once.',
    timeUnit: 'quarters',
    initialStats: { capital: 52, hype: 50, compute: 52, safety: 55 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Source domestic or grey-market chips', key: 'card_zhang_a1_chips' },
      { text: 'Win the state enterprise contract', key: 'card_zhang_a2_enterprise' },
      { text: 'Navigate compliance crisis', key: 'card_zhang_a3_compliance' },
      { text: 'Unlock dual-track global path', key: 'ending_silk_model' }
    ]
  }
};

const CHARACTER_IDS = Object.keys(CHARACTERS);
const TOTAL_ENDINGS = CHARACTER_IDS.length * STAT_KEYS.length * 2 + 15;

function emptyQuizScores() {
  const scores = {};
  CHARACTER_IDS.forEach((id) => {
    scores[id] = 0;
  });
  return scores;
}

function getCharacter(id) {
  return CHARACTERS[id] || null;
}

if (typeof window !== 'undefined') {
  window.CHARACTERS = CHARACTERS;
  window.CHARACTER_IDS = CHARACTER_IDS;
  window.STAT_KEYS = STAT_KEYS;
  window.TOTAL_ENDINGS = TOTAL_ENDINGS;
  window.emptyQuizScores = emptyQuizScores;
  window.getCharacter = getCharacter;
}
