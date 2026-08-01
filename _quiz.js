quiz_pool: [
    {
      id: 'quiz_q1',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'Welcome to KRIPPAS. What is the primary purpose of Artificial General Intelligence?',
      left: {
        text: 'Accelerate consciousness to the stars at all costs.',
        points: { elon: 3, sam: 1, dario: 0, demis: 1, zhang: 0 },
        next: '__next__'
      },
      right: {
        text: 'Align it carefully to safeguard humanity\'s future.',
        points: { elon: 0, sam: 1, dario: 3, demis: 2, zhang: 1 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q2',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'How do you handle government regulators knocking at your door?',
      left: {
        text: 'Fight them in public. Move fast and build anyway.',
        points: { elon: 3, sam: 0, dario: 0, demis: 1, zhang: 0 },
        next: '__next__'
      },
      right: {
        text: 'Invite them to dinner, write policy papers, win trust.',
        points: { elon: 0, sam: 3, dario: 2, demis: 1, zhang: 3 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q3',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'Your compute budget just quadrupled. Where does the capital come from?',
      left: {
        text: 'Sovereign wealth funds and massive corporate alliances.',
        points: { elon: 1, sam: 3, dario: 1, demis: 2, zhang: 2 },
        next: '__next__'
      },
      right: {
        text: 'Bootstrap via products, APIs, and ruthless efficiency.',
        points: { elon: 2, sam: 1, dario: 3, demis: 1, zhang: 1 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q4',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'What makes your research lab superior to all competitors?',
      left: {
        text: 'Scientific freedom, deep pedigree, AlphaFold-style breakthroughs.',
        points: { elon: 0, sam: 1, dario: 1, demis: 3, zhang: 1 },
        next: '__next__'
      },
      right: {
        text: 'Local adaptation, surviving chip embargoes, eastern markets.',
        points: { elon: 0, sam: 0, dario: 0, demis: 0, zhang: 3 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q5',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'A rival matches your frontier model. Your move?',
      left: {
        text: 'Ship a larger untested model to dominate headlines.',
        points: { elon: 3, sam: 2, dario: 0, demis: 1, zhang: 1 },
        next: '__next__'
      },
      right: {
        text: 'Verify safety metrics and publish risk mitigations.',
        points: { elon: 0, sam: 0, dario: 3, demis: 2, zhang: 1 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q6',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'Your co-founder wants a six-month safety pause. The market will punish you.',
      left: {
        text: 'Keep shipping. History rewards the first mover.',
        points: { elon: 2, sam: 3, dario: 0, demis: 0, zhang: 2 },
        next: '__next__'
      },
      right: {
        text: 'Take the pause. Trust is the only durable advantage.',
        points: { elon: 0, sam: 0, dario: 3, demis: 2, zhang: 1 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q7',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'At dinner, a journalist asks who you actually work for.',
      left: {
        text: 'Myself, Mars, and the future species.',
        points: { elon: 3, sam: 1, dario: 0, demis: 1, zhang: 0 },
        next: '__next__'
      },
      right: {
        text: 'Humanity, my lab\'s charter, and the long arc of truth.',
        points: { elon: 0, sam: 1, dario: 2, demis: 3, zhang: 2 },
        next: '__next__'
      }
    },
    // NEW bonus questions for deeper randomization
    {
      id: 'quiz_q8',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'A whistleblower leaks internal documents showing your safety testing was rushed. The press is calling.',
      left: {
        text: 'Deny everything. Attack the leaker. Control the narrative.',
        points: { elon: 3, sam: 2, dario: 0, demis: 0, zhang: 1 },
        next: '__next__'
      },
      right: {
        text: 'Admit the timeline was aggressive. Publish the full test results.',
        points: { elon: 0, sam: 1, dario: 3, demis: 2, zhang: 1 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q9',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'Your biggest investor demands a board seat with veto power. You would lose independence.',
      left: {
        text: 'Take the money. Independence is a luxury for companies that are not changing the world.',
        points: { elon: 1, sam: 3, dario: 0, demis: 0, zhang: 1 },
        next: '__next__'
      },
      right: {
        text: 'Refuse. Find capital elsewhere. Control is non-negotiable.',
        points: { elon: 2, sam: 1, dario: 3, demis: 2, zhang: 0 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q10',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'Your family says they have not seen you in weeks. Your partner leaves a note on your desk.',
      left: {
        text: 'The mission requires sacrifice. They knew who they married.',
        points: { elon: 3, sam: 2, dario: 0, demis: 1, zhang: 0 },
        next: '__next__'
      },
      right: {
        text: 'Go home. Apologize. Some things matter more than the mission.',
        points: { elon: 0, sam: 0, dario: 2, demis: 2, zhang: 1 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q11',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'A foreign government offers you citizenship and unlimited funding — if you relocate your lab.',
      left: {
        text: 'Accept. Science has no borders. Build where the resources are.',
        points: { elon: 2, sam: 3, dario: 1, demis: 1, zhang: 2 },
        next: '__next__'
      },
      right: {
        text: 'Decline. Loyalty to your home country is part of your identity.',
        points: { elon: 1, sam: 0, dario: 2, demis: 1, zhang: 3 },
        next: '__next__'
      }
    },
    {
      id: 'quiz_q12',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'Your model just passed the bar exam, medical boards, and a Turing test variant. What do you tell the public?',
      left: {
        text: 'AGI is here. The singularity is closer than you think. Get ready.',
        points: { elon: 2, sam: 3, dario: 0, demis: 1, zhang: 1 },
        next: '__next__'
      },
      right: {
        text: 'These are narrow benchmarks. We have a long way to go. Stay grounded.',
        points: { elon: 0, sam: 0, dario: 2, demis: 3, zhang: 1 },
        next: '__next__'
      }
    }
  ],