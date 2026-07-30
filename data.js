// KRIPPAS - Character configuration (data-driven)
// Consumed by app.js. Story cards live in story.js (STORY_DATA).

const STAT_KEYS = ['capital', 'hype', 'compute', 'safety'];

const CHARACTERS = {
  elon: {
    id: 'elon',
    name: 'Elon Musk',
    nameDisplay: 'ELON MUSK',
    role: 'CEO / CHIEF ENGINEER',
    company: 'SPACEXAI',
    description:
      'xAI was folded into SpaceX. Colossus 1 is leased to your rival Anthropic. You face a blizzard of lawsuits over Grok-generated abuse images. Fourteen children by four women. Elon Musk vs. everyone — including himself.',
    timeUnit: 'Mars quarters',
    initialStats: { capital: 48, hype: 55, compute: 55, safety: 35 },
    initialRelations: { family: 40, board: 52, rival: 78, regulator: 22, partner: 50, public: 62, staff: 48 },
    objectives: [
      { text: 'Survive 20 Mars Quarters', key: 'time_20' },
      { text: 'Decide Colossus 1 destiny', key: 'card_elon_colossus' },
      { text: 'Navigate the nudification lawsuits', key: 'card_elon_lawsuits' },
      { text: 'Reclaim the Mars mission', key: 'ending_mars_covenant' },
      { text: 'Confront the personal cost of empire', key: 'card_elon_family_crisis' }
    ]
  },
  sam: {
    id: 'sam',
    name: 'Sam Altman',
    nameDisplay: 'SAM ALTMAN',
    role: 'CHIEF EXECUTIVE OFFICER',
    company: 'OPENAI GROUP PBC',
    description:
      'The for-profit restructuring is complete. IPO looms at $1T. But Mira Murati is gone, her deposition haunts you, and Anthropic just overtook your revenue. Your husband Oliver watches as the singularity rhetoric escalates.',
    timeUnit: 'quarters',
    initialStats: { capital: 62, hype: 58, compute: 55, safety: 45 },
    initialRelations: { family: 55, board: 48, rival: 68, regulator: 50, partner: 72, public: 60, staff: 52 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Navigate the IPO gauntlet', key: 'card_sam_ipo' },
      { text: 'Reckon with Mira Muratis legacy', key: 'card_sam_mira' },
      { text: 'Reclaim the frontier from Anthropic', key: 'ending_frontier_king' },
      { text: 'Decide: singularity prophet or steward', key: 'card_sam_singularity' }
    ]
  },
  dario: {
    id: 'dario',
    name: 'Dario Amodei',
    nameDisplay: 'DARIO AMODEI',
    role: 'CO-FOUNDER / CEO',
    company: 'ANTHROPIC',
    description:
      'Your startup is now worth $965B. You lease compute from your rival Elon Musk. The Pentagon calls you an "ideological lunatic." Your sister Daniela runs the company beside you. The world wants Claude — and your soul.',
    timeUnit: 'quarters',
    initialStats: { capital: 68, hype: 52, compute: 58, safety: 65 },
    initialRelations: { family: 65, board: 58, rival: 55, regulator: 60, partner: 62, public: 48, staff: 68 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Navigate the Colossus deal with Elon', key: 'card_dario_colossus' },
      { text: 'Face the Pentagon confrontation', key: 'card_dario_pentagon' },
      { text: 'Survive IPO with principles intact', key: 'ending_safety_throne' },
      { text: 'Decide: engage or withdraw from D.C.', key: 'card_dario_dc' }
    ]
  },
  demis: {
    id: 'demis',
    name: 'Demis Hassabis',
    nameDisplay: 'DEMIS HASSABIS',
    role: 'CO-FOUNDER / CEO',
    company: 'GOOGLE DEEPMIND',
    description:
      'The Nobel Prize is yours. But Alphabet just disbanded your AlphaFold team. A quarter of your researchers quit. Sundar demands Gemini for Search ads. You must decide: was science ever really the mission?',
    timeUnit: 'quarters',
    initialStats: { capital: 65, hype: 48, compute: 68, safety: 55 },
    initialRelations: { family: 62, board: 35, rival: 52, regulator: 58, partner: 70, public: 52, staff: 60 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Respond to AlphaFold dissolution', key: 'card_demis_alphafold' },
      { text: 'Launch FINRA-style oversight body', key: 'card_demis_finra' },
      { text: 'Defend scientific independence', key: 'ending_nature_throne' },
      { text: 'Choose: science or the empire', key: 'card_demis_choice' }
    ]
  },
  zhang: {
    id: 'zhang',
    name: 'Zhang Peng',
    nameDisplay: 'ZHANG PENG',
    role: 'FOUNDER / CEO',
    company: 'Z.AI (ZHIPU)',
    description:
      'Your company went public in Hong Kong. GLM-5.2 beats Western benchmarks. But Washington tightens chip sanctions, Beijing considers retaliatory AI export bans, and your CCPPC seat pulls you deeper into state gravity.',
    timeUnit: 'quarters',
    initialStats: { capital: 58, hype: 52, compute: 48, safety: 58 },
    initialRelations: { family: 58, board: 55, rival: 60, regulator: 68, partner: 55, public: 52, staff: 62 },
    objectives: [
      { text: 'Survive 20 quarters', key: 'time_20' },
      { text: 'Design or abandon custom chip', key: 'card_zhang_chip' },
      { text: 'Navigate dual export control crisis', key: 'card_zhang_export' },
      { text: 'Balance Tsinghua ideals vs state demands', key: 'ending_silk_model' },
      { text: 'Decide: global or domestic destiny', key: 'card_zhang_global' }
    ]
  }
};

const CHARACTER_IDS = Object.keys(CHARACTERS);
const TOTAL_ENDINGS = CHARACTER_IDS.length * STAT_KEYS.length + 15;

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
