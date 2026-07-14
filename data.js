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
      'You prioritize pure horsepower GPU cluster expansion, defying regulators in public, and building Mars-optimized code systems.',
    timeUnit: 'Mars quarters',
    initialStats: { capital: 55, hype: 70, compute: 75, safety: 35 },
    objectives: [
      { text: 'Reach 10 Mars Quarters', key: 'time_10' },
      { text: 'Face the OpenAI Board', key: 'card_elon_6' },
      { text: 'Spin up Memphis power', key: 'card_elon_1' }
    ]
  },
  sam: {
    id: 'sam',
    name: 'Sam Altman',
    nameDisplay: 'SAM ALTMAN',
    role: 'CHIEF EXECUTIVE OFFICER',
    company: 'OPENAI',
    description:
      'You balance board oversight, massive investments, and corporate structural changes while shipping GPT models.',
    timeUnit: 'quarters',
    initialStats: { capital: 70, hype: 60, compute: 65, safety: 45 },
    objectives: [
      { text: 'Secure Apple distribution deal', key: 'card_sam_reign_restored_left' },
      { text: 'Survive the Board Mutiny', key: 'card_sam_reign_restored' },
      { text: 'Fund desert chip foundries', key: 'card_sam_hardware_era_left' }
    ]
  },
  dario: {
    id: 'dario',
    name: 'Dario Amodei',
    nameDisplay: 'DARIO AMODEI',
    role: 'FOUNDER / CEO',
    company: 'ANTHROPIC',
    description:
      "Your weapon is Constitutional AI. Can you make Claude scale safely without bankrupting the company?",
    timeUnit: 'quarters',
    initialStats: { capital: 45, hype: 45, compute: 55, safety: 75 },
    objectives: [
      { text: 'Accept Senate audit partnership', key: 'card_dario_loop_left' },
      { text: 'Stay multi-cloud independent', key: 'card_dario_2_right' },
      { text: 'Keep full safety evals on Claude', key: 'card_dario_1_left' }
    ]
  },
  demis: {
    id: 'demis',
    name: 'Demis Hassabis',
    nameDisplay: 'DEMIS HASSABIS',
    role: 'DIRECTOR',
    company: 'DEEPMIND',
    description:
      "You protect DeepMind's academic freedoms against Google's commercial search and ads pressure.",
    timeUnit: 'quarters',
    initialStats: { capital: 80, hype: 40, compute: 85, safety: 55 },
    objectives: [
      { text: 'Publish topology breakthrough', key: 'card_demis_3_left' },
      { text: 'Defend research autonomy', key: 'card_demis_5_right' },
      { text: "Merge Sergey's compiler patch", key: 'card_demis_6_left' }
    ]
  },
  zhang: {
    id: 'zhang',
    name: 'Zhang Peng',
    nameDisplay: 'ZHANG PENG',
    role: 'FOUNDER / CEO',
    company: 'ZHIPU',
    description:
      'You navigate local silicon supplies, state content guidelines, and fight to establish Chinese GLM frontier models.',
    timeUnit: 'quarters',
    initialStats: { capital: 55, hype: 50, compute: 55, safety: 60 },
    objectives: [
      { text: 'Source domestic AI chips', key: 'card_zhang_2_left' },
      { text: 'Win enterprise supply-chain deal', key: 'card_zhang_4_left' },
      { text: 'Deploy real-time moderation', key: 'card_zhang_5_left' }
    ]
  }
};

const CHARACTER_IDS = Object.keys(CHARACTERS);
const TOTAL_ENDINGS = CHARACTER_IDS.length * STAT_KEYS.length * 2;

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
