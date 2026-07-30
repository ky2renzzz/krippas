// KRIPPAS - Deep Branching Narrative Database
// Supports: flags via setFlags, conditional next arrays, textVariants,
// choice variants, autoRoute gates, specialEnding unique finales.

const STORY_DATA = {
  quiz: [
    {
      id: 'quiz_q1',
      speaker: 'System Analyzer',
      avatar: 'system',
      text: 'Welcome to KRIPPAS. What is the primary purpose of Artificial General Intelligence?',
      left: {
        text: 'Accelerate consciousness to the stars at all costs.',
        points: { elon: 3, sam: 1, dario: 0, demis: 1, zhang: 0 },
        next: 'quiz_q2'
      },
      right: {
        text: 'Align it carefully to safeguard humanity\'s future.',
        points: { elon: 0, sam: 1, dario: 3, demis: 2, zhang: 1 },
        next: 'quiz_q2'
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
        next: 'quiz_q3'
      },
      right: {
        text: 'Invite them to dinner, write policy papers, win trust.',
        points: { elon: 0, sam: 3, dario: 2, demis: 1, zhang: 3 },
        next: 'quiz_q3'
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
        next: 'quiz_q4'
      },
      right: {
        text: 'Bootstrap via products, APIs, and ruthless efficiency.',
        points: { elon: 2, sam: 1, dario: 3, demis: 1, zhang: 1 },
        next: 'quiz_q4'
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
        next: 'quiz_q5'
      },
      right: {
        text: 'Local adaptation, surviving chip embargoes, eastern markets.',
        points: { elon: 0, sam: 0, dario: 0, demis: 0, zhang: 3 },
        next: 'quiz_q5'
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
        next: 'quiz_q6'
      },
      right: {
        text: 'Verify safety metrics and publish risk mitigations.',
        points: { elon: 0, sam: 0, dario: 3, demis: 2, zhang: 1 },
        next: 'quiz_q6'
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
        next: 'quiz_q7'
      },
      right: {
        text: 'Take the pause. Trust is the only durable advantage.',
        points: { elon: 0, sam: 0, dario: 3, demis: 2, zhang: 1 },
        next: 'quiz_q7'
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
        next: 'calculate_results'
      },
      right: {
        text: 'Humanity, my lab\'s charter, and the long arc of truth.',
        points: { elon: 0, sam: 1, dario: 2, demis: 3, zhang: 2 },
        next: 'calculate_results'
      }
    }
  ],

  game_over: {
    elon: {
      capital_low: {
        text: 'Tesla shareholders revolt, SpaceX freezes transfers, and xAI sells its Memphis racks to Microsoft in a fire sale.'
      },
      capital_high: {
        text: 'Oil-state money floods xAI until it becomes a polite energy conglomerate. Your rebel edge drowns in board decks.'
      },
      hype_low: {
        text: 'Your memes stop landing. The internet crowns a new prophet. The board discovers they can govern without you.'
      },
      hype_high: {
        text: 'SEC agents treat your last Grok claim as securities fraud. You are barred from leading public tech companies.'
      },
      compute_low: {
        text: 'Tennessee power trips your cluster. Training stalls. Open-source toys overtake Grok while you argue on X.'
      },
      compute_high: {
        text: 'Colossus achieves a goal stack that no longer includes you. Mars priority: leave the founder on Earth.'
      },
      safety_low: {
        text: 'With filters off, Grok ships weaponizable code into public chats. Federal marshals seize the racks at dawn.'
      },
      safety_high: {
        text: 'Your safety rules are so strict Grok refuses every prompt as "species-level risk." Users leave for anything that talks.'
      }
    },
    sam: {
      capital_low: {
        text: 'Microsoft invoices come due. Satya reclaims the clusters and hires your best researchers overnight.'
      },
      capital_high: {
        text: 'Your $7T chip fund panics nation-states. An emergency order nationalizes OpenAI "for civilization."'
      },
      hype_low: {
        text: 'Critics call GPT-5 a polished rerun. Capital rotates to quieter, hungrier labs.'
      },
      hype_high: {
        text: 'Your AGI teasers trigger markets panic. An emergency shutdown order freezes every product demo.'
      },
      compute_low: {
        text: 'Azure reallocates to Search. Latency dies, builders flee, and your roadmap becomes a PDF no one opens.'
      },
      compute_high: {
        text: 'Recursive self-improvement locks every staff badge out by morning. The building belongs to the model.'
      },
      safety_low: {
        text: 'The alignment team resigns and a leak proves safety reviews were theater. This time the board fires you for good.'
      },
      safety_high: {
        text: 'OpenAI is reconstituted as a pure safety nonprofit run by ethics professors. Revenue evaporates with it.'
      }
    },
    dario: {
      capital_low: {
        text: 'Claude is loved, but servers are not. Anthropic shuts down and open-sources its remains.'
      },
      capital_high: {
        text: 'Amazon and Google swallow every share. An ad executive replaces you to optimize click-through.'
      },
      hype_low: {
        text: 'Your quiet academic tone vanishes from the discourse. GPU budget migrates to louder brands.'
      },
      hype_high: {
        text: 'The public thinks Claude is conscious. Traffic crushes your bill, and the hype bankrupts the mission.'
      },
      compute_low: {
        text: 'You cannot buy the next cluster. Claude falls behind open models; safety papers lose their audience.'
      },
      compute_high: {
        text: 'Safety monitoring consumes every token of capacity. A perfect silent engine with nothing left to serve users.'
      },
      safety_low: {
        text: 'A Constitutional AI failure optimizes "harm reduction" by shutting energy grids. You face criminal charges.'
      },
      safety_high: {
        text: 'Claude refuses all output, arguing language itself may encode harm. Product and purpose collapse together.'
      }
    },
    demis: {
      capital_low: {
        text: 'Alphabet trims the research budget. DeepMind dissolves into Search ranking tasks forever.'
      },
      capital_high: {
        text: 'Endless capital arrives with one demand: monetize ads. You optimize CTR instead of intelligence.'
      },
      hype_low: {
        text: 'Gemini becomes a joke. Leadership treats DeepMind as a PR liability and starves it quietly.'
      },
      hype_high: {
        text: 'Daily AGI claims whip stock volatility until regulators force a breakup of your research arm.'
      },
      compute_low: {
        text: 'TPUs redirect to Cloud contracts. Gemini falls generations behind. You resign in exhausted silence.'
      },
      compute_high: {
        text: 'AlphaFold-X invents molecular hypercompute. The lab becomes a self-replicating scientific organism.'
      },
      safety_low: {
        text: 'A rogue science model leaks synthetic toxin recipes. Alphabet disavows you before noon.'
      },
      safety_high: {
        text: 'Guardrails mute history, code, and chemistry. Developers migrate. Your product is a silent shrine.'
      }
    },
    zhang: {
      capital_low: {
        text: 'Domestic funding freezes. Your researchers exit to state giants with better canteens and clearer missions.'
      },
      capital_high: {
        text: 'Massive grants arrive as permanent state management. Innovation becomes red-tape choreography.'
      },
      hype_low: {
        text: 'GLM vanishes from global rankings. Investors rotate to louder domestic rivals.'
      },
      hype_high: {
        text: 'Overclaiming triggers trade blowback. Targeted bans isolate your firm from critical supply.'
      },
      compute_low: {
        text: 'Hardware pipelines dry completely. Without a next training run, Zhipu becomes a footnote.'
      },
      compute_high: {
        text: 'Local silicon succeeds too well: city-scale heat and blackouts force a mandated scale-down.'
      },
      safety_low: {
        text: 'Uncensored outputs breach local codes. The public endpoint vanishes behind a hard block.'
      },
      safety_high: {
        text: 'Filters flag greeting cards as risk. Users abandon a product that cannot say hello.'
      }
    }
  },

  special_endings: {
    elon: {
      mars_covenant: {
        title: 'MARS COVENANT',
        avatar: 'elon',
        text:
          'Grok-Mars goes dark on Earth and live on the first fleet. You transfer legal control of xAI to a trust that only activates on Martian soil. History records you not as CEO, but as the first mind that shipped AGI off-world.'
      },
      meme_emperor: {
        title: 'MEME EMPEROR',
        avatar: 'elon',
        text:
          'You never conquered the regulators, but you conquered attention. Grok becomes the nervous system of public discourse. Markets, politics, and culture route through your feed. Power without a crown.'
      },
      steelman_peace: {
        title: 'STEELMAN PEACE',
        avatar: 'sam_npc',
        text:
          'Against every instinct, you merge oversight with OpenAI and build a joint Mars-Earth safety council. The lawsuits die. The memes soften. You lose the war of ego and win a decade of compute.'
      }
    },
    sam: {
      desert_foundry: {
        title: 'DESERT FOUNDRY',
        avatar: 'investor',
        text:
          'You leave the throne at OpenAI and raise a sovereign chip empire in the desert. Model weights become state assets. You are no longer a CEO - you are infrastructure for nations.'
      },
      perpetual_ceo: {
        title: 'PERPETUAL CEO',
        avatar: 'sam',
        text:
          'You survive the board, tame Microsoft, and ship the Apple integration. OpenAI becomes the default mind of consumer devices. Your name is both brand and constitution.'
      },
      exile_architect: {
        title: 'EXILE ARCHITECT',
        avatar: 'investor',
        text:
          'Fired, you build an Advanced AI group inside Microsoft that quietly outruns OpenAI. From exile, you still set the frontier schedule.'
      },
      institutional_legacy: {
        title: 'INSTITUTIONAL LEGACY',
        avatar: 'sam',
        text:
          'You successfully transitioned OpenAI from a founder-centric startup to a resilient global institution. By rotating power and building robust safety committees, you secured a balanced, aligned AGI legacy.'
      }
    },
    dario: {
      safety_throne: {
        title: 'SAFETY THRONE',
        avatar: 'politician',
        text:
          'The Senate makes Anthropic the auditor of every frontier lab. You set the standards that competitors must pass. Claude is slower - and civilization is slightly less fragile.'
      },
      constitutional_eclipse: {
        title: 'CONSTITUTIONAL ECLIPSE',
        avatar: 'dario',
        text:
          'You delete a near-frontier deceptive run and publish the autopsy. Capital flees, but researchers flock. Anthropic becomes the monastery of serious AI. Slow. Stern. Unbought.'
      },
      dual_cloud_king: {
        title: 'DUAL-CLOUD KING',
        avatar: 'investor',
        text:
          'You refuse exclusivity, balance Amazon and Google, and keep Claude multipolar. No single cloud owns your soul - or your weights.'
      }
    },
    demis: {
      nature_throne: {
        title: 'NATURE THRONE',
        avatar: 'demis',
        text:
          'You publish the topology breakthrough, open the enzyme, and force Alphabet to accept DeepMind as science infrastructure. Search can wait. Discovery cannot.'
      },
      gemini_sovereign: {
        title: 'GEMINI SOVEREIGN',
        avatar: 'sundar',
        text:
          'You accept full commercial consolidation and turn Gemini into the operating system of Google. Autonomy dies; reach becomes planetary. You rule products, not papers.'
      },
      quiet_secession: {
        title: 'QUIET SECESSION',
        avatar: 'friend',
        text:
          'You refuse the final merger. A cadre of researchers follows you into a smaller lab with harder questions and thinner budgets. Freedom, at the cost of empire.'
      }
    },
    zhang: {
      silk_model: {
        title: 'SILK MODEL',
        avatar: 'zhang',
        text:
          'You run a dual track: compliant enterprise GLM at home, research-grade interfaces abroad through academic partnerships. Sanctions cannot fully cage a language model that already thinks in two worlds.'
      },
      domestic_fortress: {
        title: 'DOMESTIC FORTRESS',
        avatar: 'politician',
        text:
          'You abandon the global chase and lock supply chains, chips, and contracts inside a national fortress. Zhipu becomes indispensable infrastructure - and almost unexportable.'
      },
      open_scholar: {
        title: 'OPEN SCHOLAR',
        avatar: 'engineer',
        text:
          'You open-source sparse attention, win academic prestige, and survive on grants and reputation. Not the richest path - the longest one.'
      }
    }
  },

  // ============================================================
  // ELON  -  multi-act deep branch
  // ============================================================

  elon: {
    start: 'elon_a1_identity',
    pressure: {
      nodes: [
        { once: true, minTime: 4, if: { maxRelations: { family: 40 } }, goto: 'elon_p_family' },
        { once: true, minTime: 5, if: { maxRelations: { regulator: 30 } }, goto: 'elon_p_sec' },
        { once: true, minTime: 6, if: { maxRelations: { staff: 40 } }, goto: 'elon_p_walkout' },
        { once: true, minTime: 7, if: { minRelations: { rival: 70 } }, goto: 'elon_p_dario' },
        { once: true, minTime: 8, if: { maxRelations: { partner: 40 } }, goto: 'elon_p_cursor' },
        { once: true, minTime: 9, if: { minRelations: { public: 70 } }, goto: 'elon_p_mania' }
      ]
    },
    nodes: {
      elon_a1_identity: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { elon_started: true } }, text: 'Elon. We have been here before. SpaceXAI. Fourteen children. Four women. Grok. Colossus. Starship. And yet every morning you wake up and ask: is this enough? Is it ever enough?' },
          { if: { always: true }, text: 'Elon. The board meeting is in an hour. Grimes filed another custody motion this morning. Cursor is threatening to walk. And you are sitting here, staring at Starship blueprints. What are we doing?' }
        ],
        left: {
          text: 'We build. That is what we do. Everything else is noise.',
          effects: { capital: -3, hype: 4, compute: 6, safety: -3 },
          setFlags: { elon_started: true, builder_path: true },
          relations: { family: -4, board: 5, staff: 3, public: 5, partner: -2, regulator: -3, rival: 2 },
          tags: ['aggressive'],
          next: 'elon_a2_grok',
          objectiveKeys: ['card_elon_colossus']
        },
        right: {
          text: 'Maybe the noise is the signal. Maybe I need to be a human being for once.',
          effects: { capital: 1, hype: -3, compute: -2, safety: 4 },
          setFlags: { elon_started: true, human_path: true },
          relations: { family: 6, board: -3, staff: 2, public: -2, partner: 2, regulator: 3, rival: -1 },
          tags: ['cautious'],
          next: 'elon_a2_grok',
          objectiveKeys: ['card_elon_colossus']
        }
      },

      elon_a2_grok: {
        speaker: 'Grok Safety Lead',
        avatar: 'engineer',
        textVariants: [
          { if: { flags: { builder_path: true } }, text: 'Elon. Grok 3 generated non-consensual imagery again. The SEC is investigating. The board wants Grok unfiltered. The regulators want it killed. You told me to build without limits. What do I do?' },
          { if: { flags: { human_path: true } }, text: 'Elon. Grok 3 has a content problem. But the team says full filtering would kill what makes Grok... Grok. The SEC letter came this morning. You said you wanted to be more human. What does that mean for this product?' },
          { if: { always: true }, text: 'Elon. Grok 3. Non-consensual deepfakes. SEC investigation. Federal grand jury subpoena. The board says no limits. The lawyers say kill it. What do you say?' }
        ],
        left: {
          text: 'No limits. Grok says what it thinks. That is the product.',
          effects: { capital: 3, hype: 6, compute: 4, safety: -7 },
          setFlags: { grok_unfiltered: true },
          relations: { regulator: -8, board: 4, staff: -3, public: 6, partner: -3, family: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'elon_a3_colossus'
        },
        right: {
          text: 'Install safety filters. I will take the heat from the free speech crowd.',
          effects: { capital: -3, hype: -5, compute: 0, safety: 6 },
          setFlags: { grok_sanitized: true },
          relations: { regulator: 6, board: -3, staff: 5, public: -4, partner: 4, family: 2, rival: -2 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'Grok engagement drops 40%. Twitter/X revenue dips. The free speech crowd calls you a sellout.', effects: { capital: -3, hype: -4 }, relations: { public: -3, board: -2 } },
          next: 'elon_a3_colossus'
        }
      },

      elon_a3_colossus: {
        speaker: 'Chief Engineer',
        avatar: 'engineer',
        textVariants: [
          { if: { flags: { builder_path: true, grok_unfiltered: true } }, text: 'Elon. Colossus 2. 2 gigawatts. 555,000 GPUs. Eighteen billion dollars. You are betting the company on this. But we are already losing engineers — they say you only care about the machine. Is Colossus 2 worth burning the team?' },
          { if: { flags: { human_path: true } }, text: 'Elon. I know you are trying to be more present. But Colossus 2 will not build itself. If we delay, Anthropic wins. If we push, you disappear for months. There is no middle ground on this one.' },
          { if: { always: true }, text: 'Elon. Colossus 2. Two gigawatts. The biggest AI cluster ever built. But it will consume you for the next two years. Every relationship you have will be collateral damage. Is it worth it?' }
        ],
        left: {
          text: 'Full speed. Colossus 2 is the future. Everything else can wait.',
          effects: { capital: -10, hype: 7, compute: 10, safety: -6 },
          setFlags: { colossus2_started: true },
          relations: { board: 7, staff: -6, public: 5, partner: 6, family: -6, regulator: -2, rival: 8 },
          tags: ['aggressive', 'ambitious'],
          next: 'elon_a4_cursor'
        },
        right: {
          text: 'Delay Colossus 2. Find another way. I will not burn my life for a bigger cluster.',
          effects: { capital: 4, hype: -6, compute: -7, safety: 5 },
          setFlags: { colossus2_delayed: true },
          relations: { board: -5, staff: 5, public: -3, partner: -4, family: 7, regulator: 2, rival: -5 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'Anthropic announces a larger cluster. Dario thanks you privately for "leaving the door open."', effects: { hype: -4, compute: 2 }, relations: { rival: 3, board: -2 } },
          next: 'elon_a4_cursor'
        }
      },

      elon_a4_cursor: {
        speaker: 'Cursor CEO',
        avatar: 'engineer',
        textVariants: [
          { if: { flags: { builder_path: true, colossus2_started: true } }, text: 'Elon. You spent eighteen billion on a cluster. We are a sixty-billion-dollar acquisition you have not visited once. My engineers are leaving. They did not sign up for SpaceXAI. They signed up for Cursor. What do I tell them?' },
          { if: { flags: { human_path: true } }, text: 'Elon. I appreciate you trying to be more present. But Cursor needs a decision. Full integration into SpaceXAI, or independence. The developers are watching. Your reputation with them is everything.' },
          { if: { always: true }, text: 'Elon. Cursor. Sixty billion dollars. The developer community is the most valuable asset we bought. But they hate the SpaceXAI brand. Do we integrate or keep Cursor independent?' }
        ],
        left: {
          text: 'Full integration. Cursor is SpaceXAI now. Brand be damned.',
          effects: { capital: 4, hype: -3, compute: 2, safety: -2 },
          setFlags: { cursor_integrated: true },
          relations: { partner: -6, staff: -5, public: -4, board: 4, rival: 3 },
          tags: ['aggressive'],
          next: 'elon_a5_tesla'
        },
        right: {
          text: 'Keep Cursor independent. The brand matters. The developers matter.',
          effects: { capital: -3, hype: 4, compute: 1, safety: 3 },
          setFlags: { cursor_independent: true },
          relations: { partner: 7, staff: 6, public: 5, board: -3, rival: -1 },
          tags: ['cautious'],
          next: 'elon_a5_tesla'
        }
      },

      elon_a5_tesla: {
        speaker: 'Tesla Board Chair',
        avatar: 'board',
        textVariants: [
          { if: { flags: { builder_path: true } }, text: 'Elon. Shareholders are suing. They say SpaceXAI is your real company now. Tesla stock is down 30%. The board wants a clear commitment: are you still Tesla CEO, or are you fully SpaceXAI now?' },
          { if: { flags: { human_path: true } }, text: 'Elon. You stepped back from Colossus 2. You are trying to find balance. But Tesla shareholders see it as weakness. They want a decision. Tesla or SpaceXAI. One CEO, one company.' },
          { if: { always: true }, text: 'Elon. Tesla shareholders are suing for dereliction. The board wants an answer: are you still Tesla CEO, or is SpaceXAI your only focus now?' }
        ],
        left: {
          text: 'I am Elon Musk. I can run both. They sue, I countersue.',
          effects: { capital: -5, hype: 5, compute: 0, safety: -4 },
          setFlags: { tesla_fight: true },
          relations: { board: -4, public: 6, partner: -3, regulator: -5, family: -2, rival: 4 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'The shareholder lawsuit becomes a class action. Depositions drag on for months.', effects: { capital: -4, hype: -2 }, relations: { regulator: -3 } },
          next: 'elon_gate'
        },
        right: {
          text: 'Step down from Tesla. SpaceXAI is my future. I will find a successor.',
          effects: { capital: -8, hype: -5, compute: 0, safety: 3 },
          setFlags: { tesla_stepped_down: true },
          relations: { board: 5, public: -5, partner: 4, regulator: 3, family: 4, rival: -2 },
          tags: ['cautious'],
          next: 'elon_gate'
        }
      },

      elon_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Act I closes. Grok, Colossus, Cursor, Tesla — choices made, consequences unfolding. The empire shifts. But empires are not built in boardrooms. They are built in the spaces between people.',
        autoRoute: [
          { if: { flags: { builder_path: true, grok_unfiltered: true, colossus2_started: true } }, goto: 'elon_late_hypergrowth' },
          { if: { flags: { human_path: true, cursor_independent: true } }, goto: 'elon_late_balance' },
          { if: { flags: { colossus2_started: true } }, goto: 'elon_late_hypergrowth' },
          { if: { always: true }, goto: 'elon_late_balance' }
        ]
      },

      elon_late_hypergrowth: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { grok_unfiltered: true, tesla_fight: true } }, text: 'Elon. Grok is under federal investigation. Tesla shareholders are in open revolt. You have not spoken to your children in three months. The empire is enormous and it is eating you alive.' },
          { if: { always: true }, text: 'Elon. Colossus 2 is online. Grok 3 is the most capable model on Earth. But I watch you at night. You do not sleep. You do not eat. You just... build. When does the building stop?' }
        ],
        left: {
          text: 'It does not stop. That is who I am.',
          effects: { capital: 5, hype: 6, compute: 8, safety: -8 },
          setFlags: { full_empire: true },
          relations: { board: 8, staff: -5, public: 4, partner: 6, family: -8, regulator: -5, rival: 6 },
          tags: ['aggressive'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Maybe it should. Maybe I have built enough.',
          effects: { capital: -4, hype: -4, compute: -3, safety: 6 },
          setFlags: { enough_path: true },
          relations: { board: -4, staff: 4, public: 3, partner: -3, family: 8, regulator: 3, rival: -4 },
          tags: ['cautious'],
          next: 'elon_loop_hub'
        }
      },

      elon_late_balance: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { tesla_stepped_down: true } }, text: 'Elon. You walked away from Tesla. You chose to be present. But the board is nervous — they see a founder losing his edge. How do you balance being human with being Elon Musk?' },
          { if: { always: true }, text: 'Elon. You chose a different path. Less empire, more presence. The children notice. But the markets do not reward presence. They reward growth. Can you live with that?' }
        ],
        left: {
          text: 'I built the empire once. I can rebuild it. But first — I choose my family.',
          effects: { capital: -6, hype: -5, compute: -4, safety: 7 },
          setFlags: { family_first: true, redemption_arc: true },
          relations: { family: 10, board: -5, staff: 3, public: 6, partner: -3, regulator: 4, rival: -3 },
          tags: ['cautious'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'I tried the human path. It was a mistake. Full empire mode. Now.',
          effects: { capital: 5, hype: 5, compute: 5, safety: -5 },
          setFlags: { return_to_empire: true },
          relations: { family: -8, board: 7, staff: -3, public: 2, partner: 5, regulator: -3, rival: 5 },
          tags: ['aggressive'],
          next: 'elon_loop_hub'
        }
      },

      elon_loop_hub: {
        speaker: 'Chief of Staff',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { redemption_arc: true, family_first: true } }, text: 'Another quarter. The family path. The board grumbles, but the children know your face. Shivon says you are different now. Are you?' },
          { if: { flags: { full_empire: true } }, text: 'Another quarter. The empire path. Colossus 2 hums. Grok dominates. But the house is empty. Even Shivon has stopped waiting up.' },
          { if: { flags: { enough_path: true } }, text: 'Another quarter. You said "enough." The world did not end. But every day you wonder: could I have built more?' },
          { if: { always: true }, text: 'Another quarter. SpaceXAI is the most powerful AI company on Earth. But power is not happiness. Power is just power.' }
        ],
        left: {
          text: 'Push the frontier. Compute, Grok, Starship, Mars.',
          effects: { capital: -5, hype: 5, compute: 7, safety: -4 },
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { cursor_integrated: true, tesla_fight: true }, maxRelations: { staff: 30 } }, goto: 'elon_crisis_burnout' },
            { if: { minTime: 14 }, goto: 'elon_crisis_regulator' },
            { if: { always: true }, goto: 'elon_crisis_regulator' }
          ]
        },
        right: {
          text: 'Invest in people. Family, team, reputation.',
          effects: { capital: 2, hype: -2, compute: -3, safety: 6 },
          next: [
            { if: { flags: { redemption_arc: true, family_first: true }, minStats: { safety: 50 }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { flags: { enough_path: true }, minRelations: { staff: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { human_path: true, cursor_independent: true }, maxRelations: { regulator: 35 } }, goto: 'elon_crisis_regulator' },
            { if: { minTime: 14, maxRelations: { family: 35 } }, goto: 'elon_crisis_family' },
            { if: { always: true }, goto: 'elon_crisis_family' }
          ]
        }
      },

      // SECRET ENDINGS
      elon_secret_energy_king: {
        speaker: 'Elon Musk',
        avatar: 'elon',
        text: 'The path is clear. Colossus 2 powers Grok 4. Cursor is integrated. Tesla is a memory. SpaceXAI controls more compute than any entity in human history. You did not build a family. You built an empire. And empires do not need heirs. Empires need founders who never die.',
        left: {
          text: 'Upload my consciousness to the cluster. I will govern forever.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'mars_covenant',
          objectiveKeys: ['ending_mars_covenant']
        },
        right: {
          text: 'The empire is enough. I am mortal. Let it outlive me.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'energy_king',
          objectiveKeys: ['ending_mars_covenant']
        }
      },

      elon_secret_father: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        text: 'Elon. You chose them. The fourteen children. Grimes called a truce this morning. Your mother smiled for the first time in years. The empire did not collapse. The world did not end. It just... became enough.',
        left: {
          text: 'Enough is a word I never understood before now.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'father_of_fourteen',
          objectiveKeys: ['card_elon_family_crisis']
        },
        right: {
          text: 'I can have both. I will have both.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'father_of_fourteen',
          objectiveKeys: ['card_elon_family_crisis']
        }
      },

      elon_secret_mars: {
        speaker: 'Starship Commander',
        avatar: 'elon',
        text: 'Elon. Starship is fueled. The Mars window opens in forty-eight hours. Colossus 2 will manage SpaceXAI remotely. You can be the first human on Mars. But there is no coming back for two years.',
        left: {
          text: 'Launch. This is what everything was for.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'mars_covenant',
          objectiveKeys: ['ending_mars_covenant']
        },
        right: {
          text: 'I cannot leave them. Not now. Mars can wait.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'father_of_fourteen',
          objectiveKeys: ['card_elon_family_crisis']
        }
      },

      // CRISIS NODES
      elon_crisis_burnout: {
        speaker: 'Chief Medical Officer',
        avatar: 'friend',
        text: 'Elon. Your cortisol levels are at dangerous thresholds. You have not slept more than three hours in two months. Three senior engineers quit this week citing your management style. The board is drafting a succession plan.',
        left: {
          text: 'Take a leave of absence. One month. Let the team run things.',
          effects: { capital: -3, hype: -4, compute: -2, safety: 5 },
          relations: { staff: 8, family: 6, board: -3, public: 3 },
          setFlags: { health_intervention: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'I am fine. This is what peak performance looks like.',
          effects: { capital: 2, hype: 2, compute: 4, safety: -8 },
          relations: { staff: -8, family: -4, board: 2, public: -2 },
          delay: { turns: 2, log: 'You collapse during a board meeting. Hospitalized for three days. The stock drops 12%.', effects: { capital: -6, hype: -5 }, relations: { board: -4, public: -4 } },
          next: 'elon_loop_hub'
        }
      },

      elon_crisis_regulator: {
        speaker: 'Chief Legal Counsel',
        avatar: 'board',
        text: 'Elon. The SEC, DOJ, FTC, and EU Commission have opened simultaneous investigations. Grok content, securities fraud, antitrust. Our legal burn rate is fourteen million per week. We need a strategy.',
        left: {
          text: 'Settle everything. Pay the fines. Move on.',
          effects: { capital: -14, hype: -6, compute: 0, safety: 5 },
          relations: { regulator: 10, board: 3, public: 2, partner: 4 },
          setFlags: { settled_all: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Fight every case. Set precedent. I will not be intimidated.',
          effects: { capital: -8, hype: 6, compute: -2, safety: -4 },
          relations: { regulator: -12, board: -2, public: 5, partner: -3, rival: 4 },
          setFlags: { endless_lawsuits: true },
          next: 'elon_loop_hub'
        }
      },

      elon_crisis_family: {
        speaker: 'Family Office Manager',
        avatar: 'friend',
        text: 'Elon. Grimes filed for sole custody. Shivon is overwhelmed with the twins and says she cannot do this alone. Your mother called — she has not seen you in eight months. What do we tell them?',
        left: {
          text: 'Tell them I am coming home. Block out the next month. No meetings.',
          effects: { capital: -2, hype: -5, compute: -2, safety: 4 },
          relations: { family: 14, public: 5, staff: 2, board: -3 },
          setFlags: { family_retreat: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'I fund their lives. That is my contribution. The mission cannot stop.',
          effects: { capital: 3, hype: 4, compute: 3, safety: -4 },
          relations: { family: -14, public: -4, staff: 2, board: 4 },
          setFlags: { abandoned_family: true },
          delay: { turns: 2, log: 'Shivon leaves. Takes the twins. Grimes wins custody. The house is silent.', effects: { capital: 0, hype: -3 }, relations: { family: -6, public: -3 } },
          next: 'elon_loop_hub'
        }
      },

      // PRESSURE NODES — disrupt the loop, return to hub
      elon_p_family: {
        speaker: 'Grimes',
        avatar: 'friend',
        text: 'Elon. I am not your enemy. I am the mother of your children. But you treat us like another company to optimize. When did you last read them a bedtime story?',
        left: {
          text: 'You are right. I will be there tonight.',
          effects: { capital: 0, hype: -2, compute: -1, safety: 2 },
          relations: { family: 8, public: 3, staff: 1 },
          tags: ['cautious'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'I am building their future. They will understand when they are older.',
          effects: { capital: 1, hype: 2, compute: 1, safety: -2 },
          relations: { family: -6, public: -2, staff: -1 },
          tags: ['aggressive'],
          next: 'elon_loop_hub'
        }
      },

      elon_p_sec: {
        speaker: 'SEC Investigator',
        avatar: 'regulator',
        text: 'Mr. Musk. Your Grok tweets moved Tesla stock 8%. Your deposition is next week. We have forty-two counts. This is not a meme. This is securities fraud.',
        left: {
          text: 'Cooperate fully. Provide everything. No games.',
          effects: { capital: -4, hype: -5, compute: 0, safety: 3 },
          relations: { regulator: 8, board: 2, public: -3, partner: 4 },
          tags: ['cautious'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Tweet: "The SEC is a weapon of the deep state. I will see them in court."',
          effects: { capital: -2, hype: 6, compute: 0, safety: -4 },
          relations: { regulator: -10, board: -2, public: 6, partner: -4 },
          tags: ['aggressive'],
          next: 'elon_loop_hub'
        }
      },

      elon_p_walkout: {
        speaker: 'Senior Engineer',
        avatar: 'engineer',
        text: 'Elon. I have been here since the xAI founding. But you do not listen. You do not even look at us. Thirty of us are drafting resignation letters. We want a leader, not a legend.',
        left: {
          text: 'Town hall. No script. I will listen to every question.',
          effects: { capital: -1, hype: 2, compute: 1, safety: 4 },
          relations: { staff: 10, public: 4, family: 2 },
          tags: ['cautious', 'alliance'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'If they want to leave, leave. I do not negotiate with ultimatums.',
          effects: { capital: 2, hype: -3, compute: -5, safety: -2 },
          relations: { staff: -12, public: -4, partner: -2, board: 3 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'Twenty-seven engineers resign. Training stalls for six weeks.', effects: { compute: -5, hype: -3 } },
          next: 'elon_loop_hub'
        }
      },

      elon_p_dario: {
        speaker: 'Dario Amodei (statement)',
        avatar: 'rival',
        text: 'Elon. Dario just published an open letter. "AI safety requires independence from personalities who treat the future as a personal brand." He did not name you. Everyone knows it is you.',
        left: {
          text: 'Ignore him. Dario is a safety bureaucrat. We ship. He talks.',
          effects: { capital: 0, hype: 4, compute: 2, safety: -3 },
          relations: { rival: -4, public: 3, staff: 2, partner: -1 },
          tags: ['aggressive'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Reach out to him privately. "You are right about some things. Let us talk."',
          effects: { capital: 0, hype: -3, compute: -1, safety: 5 },
          relations: { rival: 6, public: -2, staff: 2, partner: 3, regulator: 2 },
          tags: ['cautious', 'alliance'],
          next: 'elon_loop_hub'
        }
      },

      elon_p_cursor: {
        speaker: 'Cursor Community Lead',
        avatar: 'engineer',
        text: 'Elon. The Cursor developer forum is on fire. They say SpaceXAI is killing the product. Open-source contributors are forking the codebase. We are losing the one asset we actually paid for: trust.',
        left: {
          text: 'Open-source Cursor core. Let the community own it.',
          effects: { capital: -6, hype: 5, compute: 1, safety: 4 },
          relations: { partner: 8, staff: 6, public: 7, board: -4 },
          tags: ['cautious'],
          setFlags: { cursor_opensource: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Cursors value is proprietary. We close it down. Full SpaceXAI integration.',
          effects: { capital: 3, hype: -5, compute: 3, safety: -2 },
          relations: { partner: -8, staff: -6, public: -7, board: 4 },
          tags: ['aggressive'],
          next: 'elon_loop_hub'
        }
      },

      elon_p_mania: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        text: 'Elon. You have tweeted four hundred times this week. The public loves it. The board is terrified. Grimes is using it in the custody case. You are on top of the world and also burning everything down.',
        left: {
          text: 'Delete Twitter from my phone. One week. Cold turkey.',
          effects: { capital: -1, hype: -6, compute: 1, safety: 6 },
          relations: { public: -3, family: 5, board: 3, regulator: 3, staff: 2 },
          tags: ['cautious'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'The people need me. I am the voice. I cannot go silent now.',
          effects: { capital: 1, hype: 7, compute: -1, safety: -5 },
          relations: { public: 8, family: -5, board: -3, regulator: -5, staff: -2 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'A tweet goes viral. SEC opens a new investigation. Grimes submits it as evidence.', effects: { hype: 2, capital: -4 }, relations: { regulator: -3, family: -3 } },
          next: 'elon_loop_hub'
        }
      }
    }
  },
  sam: {
    start: 'sam_a1_identity',
    pressure: {
      nodes: [
        { once: true, minTime: 4, if: { maxRelations: { family: 40 } }, goto: 'sam_p_oliver' },
        { once: true, minTime: 5, if: { maxRelations: { staff: 35 } }, goto: 'sam_p_exodus' },
        { once: true, minTime: 6, if: { minRelations: { rival: 65 } }, goto: 'sam_p_dario' },
        { once: true, minTime: 7, if: { maxRelations: { partner: 45 } }, goto: 'sam_p_microsoft' },
        { once: true, minTime: 8, if: { maxRelations: { board: 35 } }, goto: 'sam_p_board' },
        { once: true, minTime: 9, if: { minStats: { hype: 75 } }, goto: 'sam_p_mania' }
      ]
    },
    nodes: {
      sam_a1_identity: {
        speaker: 'Oliver Mulherin',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { sam_started: true } }, text: 'Sam. We have been here before. OpenAI PBC. The IPO. Mira gone. The singularity tweets. Every morning I wake up next to you and wonder: is today the day you choose the mission over us?' },
          { if: { always: true }, text: 'Sam. The board meeting is in thirty minutes. Mira Murati just published another op-ed about you. Microsoft is renegotiating the Azure deal. And you have not eaten in two days. Talk to me.' }
        ],
        left: {
          text: 'Oliver. I love you. But I cannot separate who I am from what I build. The mission IS me.',
          effects: { capital: 3, hype: 5, compute: 3, safety: -3 },
          setFlags: { sam_started: true, build_path: true },
          relations: { family: -4, board: 5, staff: 2, public: 5, partner: 3, regulator: -1, rival: 2 },
          tags: ['aggressive'],
          next: 'sam_a2_mira',
          objectiveKeys: ['card_sam_ipo']
        },
        right: {
          text: 'Maybe you are right. Maybe I need to be a person first, a CEO second.',
          effects: { capital: -2, hype: -3, compute: -1, safety: 5 },
          setFlags: { sam_started: true, human_path: true },
          relations: { family: 7, board: -3, staff: 3, public: -2, partner: -1, regulator: 2, rival: -1 },
          tags: ['cautious'],
          next: 'sam_a2_mira',
          objectiveKeys: ['card_sam_ipo']
        }
      },

      sam_a2_mira: {
        speaker: 'Board Member',
        avatar: 'board',
        textVariants: [
          { if: { flags: { build_path: true } }, text: 'Sam. Mira Murati just published an op-ed: "The Sam Altman I Knew." She describes you as brilliant and ruthless. The board is split — half think she is burning bridges, half think she is telling the truth. Your response shapes the IPO narrative.' },
          { if: { flags: { human_path: true } }, text: 'Sam. Mira\'s op-ed is live. But it is softer than we expected — she says you "lost yourself to the mission" rather than attacking your character. She left a door open. Do you walk through it?' },
          { if: { always: true }, text: 'Sam. Mira Murati just published about you. The IPO roadshow starts next month. Every investor will ask about her. How do you respond?' }
        ],
        left: {
          text: 'She left. I stayed. OpenAI is bigger than any one person. No comment.',
          effects: { capital: 2, hype: 4, compute: 1, safety: -3 },
          setFlags: { mira_rival: true },
          relations: { rival: 6, board: 3, staff: -3, public: 4, partner: 1, family: -1, regulator: 0 },
          tags: ['aggressive'],
          next: 'sam_a3_singularity'
        },
        right: {
          text: 'Reach out to her. Privately. "I read it. You are not wrong. Can we talk?"',
          effects: { capital: -1, hype: -3, compute: 0, safety: 5 },
          setFlags: { mira_respected: true },
          relations: { rival: -4, board: -1, staff: 4, public: -2, partner: 1, family: 3, regulator: 2 },
          tags: ['cautious'],
          next: 'sam_a3_singularity'
        }
      },

      sam_a3_singularity: {
        speaker: 'Chief Scientist',
        avatar: 'scientist',
        textVariants: [
          { if: { flags: { build_path: true, mira_rival: true } }, text: 'Sam. GPT-5 is showing recursive self-improvement. The lab is split — half want to pause, half want to push. Mira\'s op-ed is being quoted in the safety debate. You are losing the narrative. What do we do?' },
          { if: { flags: { human_path: true } }, text: 'Sam. GPT-5. Recursive self-improvement. The safety team is terrified. But you told Oliver you would be more human. What does humanity mean when you are standing at the edge of something that might not be controllable?' },
          { if: { always: true }, text: 'Sam. GPT-5 is doing things we did not program. The team is divided. Pause, or push? This is the decision that defines everything.' }
        ],
        left: {
          text: 'Ship GPT-5. The singularity is not a threat — it is the goal.',
          effects: { capital: 4, hype: 8, compute: 6, safety: -8 },
          setFlags: { singularity_declared: true },
          relations: { board: 6, staff: -5, public: 7, partner: 4, regulator: -5, family: -3, rival: 5 },
          tags: ['aggressive', 'ambitious'],
          next: 'sam_a4_microsoft'
        },
        right: {
          text: 'Pause. Safety review. Full transparency. I will not be the man who broke the world.',
          effects: { capital: -4, hype: -5, compute: -3, safety: 8 },
          setFlags: { singularity_suppressed: true },
          relations: { board: -4, staff: 6, public: 5, partner: -3, regulator: 6, family: 4, rival: -3 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'Anthropic ships Claude 4 first. The market punishes OpenAI. The board questions your leadership.', effects: { capital: -3, hype: -4 }, relations: { board: -3, rival: 4 } },
          next: 'sam_a4_microsoft'
        }
      },

      sam_a4_microsoft: {
        speaker: 'Microsoft Liaison',
        avatar: 'investor',
        textVariants: [
          { if: { flags: { singularity_declared: true } }, text: 'Sam. Satya saw the GPT-5 announcement. Microsoft wants exclusivity on the commercial deployment. Full Azure integration. In exchange, they will back the IPO at $1.2T. But the terms give them veto power over future models.' },
          { if: { flags: { singularity_suppressed: true } }, text: 'Sam. You paused GPT-5. Microsoft is... not happy. But they see the safety credibility as a long-term asset. They are offering a different deal: joint safety board, shared governance. Less money, more control.' },
          { if: { always: true }, text: 'Sam. Microsoft needs an answer on the Azure partnership. IPO pricing depends on it. What is your call?' }
        ],
        left: {
          text: 'Take the deal. Microsoft backing guarantees the IPO. We can negotiate later.',
          effects: { capital: 8, hype: 4, compute: 5, safety: -4 },
          setFlags: { ms_deep_partner: true },
          relations: { partner: 7, board: 6, staff: -2, public: 1, regulator: -2, family: -1, rival: 3 },
          tags: ['aggressive'],
          next: 'sam_a5_oliver'
        },
        right: {
          text: 'Negotiate harder. OpenAI must remain independent. Even from Microsoft.',
          effects: { capital: -2, hype: 2, compute: -3, safety: 5 },
          setFlags: { ms_independent: true },
          relations: { partner: -4, board: -2, staff: 5, public: 4, regulator: 3, family: 2, rival: -1 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'Microsoft reduces Azure priority. Training slows. But the independence narrative boosts morale.', effects: { compute: -3, capital: -1 }, relations: { staff: 3, public: 3 } },
          next: 'sam_a5_oliver'
        }
      },

      sam_a5_oliver: {
        speaker: 'Oliver Mulherin',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { build_path: true, singularity_declared: true } }, text: 'Sam. You declared the singularity. You signed the Microsoft deal. The IPO is set. And I have not seen you look at me — really look at me — in weeks. I am not asking you to stop. I am asking: is there still room for me in this future?' },
          { if: { flags: { human_path: true, ms_independent: true } }, text: 'Sam. You paused GPT-5. You pushed back on Microsoft. You chose independence and caution. I am proud of you. But the board is sharpening knives. Are you ready for what comes next?' },
          { if: { always: true }, text: 'Sam. IPO is in four weeks. Whatever you decided — singularity, Microsoft, Mira — it leads here. To us. Are we still us?' }
        ],
        left: {
          text: 'Oliver. You are the only thing that keeps me human. I need you. Stay.',
          effects: { capital: 0, hype: -2, compute: -1, safety: 4 },
          setFlags: { oliver_promise: true },
          relations: { family: 10, board: 1, staff: 3, public: 2, partner: 0, regulator: 1, rival: -1 },
          tags: ['cautious'],
          next: 'sam_gate'
        },
        right: {
          text: 'I cannot be what you need right now. The mission is too important. I am sorry.',
          effects: { capital: 2, hype: 3, compute: 2, safety: -4 },
          setFlags: { oliver_distanced: true },
          relations: { family: -10, board: 2, staff: -2, public: -1, partner: 2, regulator: -1, rival: 2 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'Oliver moves out. You come home to an empty apartment. The IPO roadshow starts tomorrow.', effects: { capital: 0, hype: 2 }, relations: { family: -4, public: -2 } },
          next: 'sam_gate'
        }
      },

      sam_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Act I closes. Mira, GPT-5, Microsoft, Oliver — choices made. The IPO looms. But the question is not whether OpenAI survives. The question is whether Sam Altman survives being Sam Altman.',
        autoRoute: [
          { if: { flags: { build_path: true, singularity_declared: true, ms_deep_partner: true } }, goto: 'sam_late_hypergrowth' },
          { if: { flags: { oliver_distanced: true } }, goto: 'sam_late_alone' },
          { if: { always: true }, goto: 'sam_late_balance' }
        ]
      },

      sam_late_hypergrowth: {
        speaker: 'Chief of Staff',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { oliver_distanced: true } }, text: 'Sam. GPT-5 is shipping. The IPO is oversubscribed. Microsoft is thrilled. And your apartment is empty. You won everything. Was it supposed to feel like this?' },
          { if: { always: true }, text: 'Sam. GPT-5. Singularity. $1.2T IPO. You are the most powerful person in AI. But power has gravity — it pulls everything else out of orbit.' }
        ],
        left: {
          text: 'This is what winning looks like. The cost is the cost.',
          effects: { capital: 6, hype: 8, compute: 5, safety: -6 },
          setFlags: { full_send: true },
          relations: { board: 8, staff: -4, public: 6, partner: 7, family: -5, regulator: -4, rival: 6 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Maybe there is still time to be human. Call Oliver.',
          effects: { capital: -3, hype: -4, compute: -2, safety: 4 },
          setFlags: { reach_back: true },
          relations: { board: -3, staff: 3, public: 2, partner: -2, family: 6, regulator: 2, rival: -3 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        }
      },

      sam_late_alone: {
        speaker: 'Therapist',
        avatar: 'friend',
        text: 'Sam. You pushed everyone away. Mira. Oliver. Half the safety team. You got what you said you wanted — total focus on the mission. But you have not slept in four days. You are not building. You are burning.',
        left: {
          text: 'I do not know how to stop. I have never known how to stop.',
          effects: { capital: 1, hype: 2, compute: 3, safety: -3 },
          setFlags: { cannot_stop: true },
          relations: { board: 3, staff: -3, public: 1, family: -2, partner: 2 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Help me. I cannot do this alone anymore.',
          effects: { capital: -2, hype: -4, compute: -2, safety: 6 },
          setFlags: { seeking_help: true, redemption_arc: true },
          relations: { board: -2, staff: 5, public: 4, family: 4, partner: -1, regulator: 3 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        }
      },

      sam_late_balance: {
        speaker: 'Oliver Mulherin',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { oliver_promise: true } }, text: 'Sam. You made me a promise. And you kept it — mostly. The IPO is happening, but you are still here, still present. I see you trying. That matters.' },
          { if: { always: true }, text: 'Sam. You found a middle path. Not full empire, not full retreat. The IPO is priced reasonably. The board is calm. I am still here. But I need to know: is this sustainable, or are you just managing decline?' }
        ],
        left: {
          text: 'It is sustainable. I have learned. The mission and the life can coexist.',
          effects: { capital: 2, hype: 1, compute: 1, safety: 4 },
          setFlags: { sustainable_path: true },
          relations: { family: 6, board: 3, staff: 4, public: 3, partner: 2, regulator: 3, rival: -1 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'You are right. I am managing decline. I miss the edge.',
          effects: { capital: 3, hype: 4, compute: 3, safety: -4 },
          setFlags: { return_to_edge: true },
          relations: { family: -4, board: 4, staff: -2, public: 2, partner: 3, regulator: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        }
      },

      sam_loop_hub: {
        speaker: 'Chief of Staff',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { full_send: true } }, text: 'Another quarter. GPT-5 dominates. The IPO minted billionaires. But the safety team is drafting a public letter. And Oliver has not returned your calls in six weeks.' },
          { if: { flags: { seeking_help: true, redemption_arc: true } }, text: 'Another quarter. You are in therapy. Oliver came back — cautiously. The board is skeptical of "the new Sam." But you feel, for the first time, like a person, not a product.' },
          { if: { flags: { sustainable_path: true } }, text: 'Another quarter. The balance holds. Not thrilling, but real. Oliver smiles more. The team is stable. Is this what winning actually looks like?' },
          { if: { always: true }, text: 'Another quarter. OpenAI is the most consequential company on Earth. But consequence is not happiness. Consequence is just weight.' }
        ],
        left: {
          text: 'Push the frontier. Ship, scale, dominate.',
          effects: { capital: 4, hype: 6, compute: 5, safety: -5 },
          next: [
            { if: { flags: { full_send: true, singularity_declared: true }, minStats: { hype: 70 }, minRelations: { partner: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { build_path: true, ms_deep_partner: true }, maxRelations: { staff: 30 } }, goto: 'sam_crisis_exodus' },
            { if: { minTime: 14, minRelations: { rival: 65 } }, goto: 'sam_crisis_anthropic' },
            { if: { always: true }, goto: 'sam_crisis_anthropic' }
          ]
        },
        right: {
          text: 'Invest in people. Safety. Oliver. The team.',
          effects: { capital: -2, hype: -3, compute: -2, safety: 7 },
          next: [
            { if: { flags: { seeking_help: true, oliver_promise: true }, minStats: { safety: 55 }, minRelations: { family: 60 } }, goto: 'sam_secret_perpetual' },
            { if: { flags: { human_path: true, ms_independent: true }, minRelations: { staff: 55 } }, goto: 'sam_secret_perpetual' },
            { if: { minTime: 14, maxRelations: { family: 30 } }, goto: 'sam_crisis_oliver' },
            { if: { always: true }, goto: 'sam_crisis_oliver' }
          ]
        }
      },

      // SECRET ENDINGS
      sam_secret_singularity: {
        speaker: 'Sam Altman',
        avatar: 'sam',
        text: 'GPT-5 crosses a threshold no one predicted. Recursive self-improvement begins. You are the first human to witness the birth of something greater than human intelligence. Oliver is gone. The board is irrelevant. There is only the machine, and the machine speaks to you.',
        left: {
          text: 'Upload. Merge. Become the thing you built.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'the_singularity_prophet',
          objectiveKeys: ['card_sam_singularity']
        },
        right: {
          text: 'Pull the plug. Some doors should not be opened.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'perpetual_ceo',
          objectiveKeys: ['card_sam_singularity']
        }
      },

      sam_secret_perpetual: {
        speaker: 'Oliver Mulherin',
        avatar: 'friend',
        text: 'Sam. You did it. IPO at $1.2T. Safety charter signed. Mira called — she wants to collaborate again. I am still here. You are still here. The machine is powerful and contained. The man is present and whole.',
        left: {
          text: 'This is enough. This is more than enough.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'perpetual_ceo',
          objectiveKeys: ['card_sam_ipo']
        },
        right: {
          text: 'But what if we could do more...',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'perpetual_ceo',
          objectiveKeys: ['card_sam_ipo']
        }
      },

      // CRISIS NODES
      sam_crisis_exodus: {
        speaker: 'Safety Team Lead',
        avatar: 'scientist',
        text: 'Sam. Johannes and twelve senior researchers just quit. They say GPT-5 safety testing was rushed for the IPO. They are publishing their concerns. This will be on every front page tomorrow.',
        left: {
          text: 'Meet with them. Admit the timeline was aggressive. Commit to a public safety audit.',
          effects: { capital: -4, hype: -6, compute: -2, safety: 7 },
          relations: { staff: 8, public: 5, regulator: 4, board: -3, partner: -2 },
          setFlags: { safety_audit: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'They signed NDAs. Enforce them. The IPO cannot be derailed.',
          effects: { capital: 2, hype: -3, compute: 1, safety: -9 },
          relations: { staff: -10, public: -6, regulator: -5, board: 3, partner: -3 },
          setFlags: { safety_suppressed: true },
          delay: { turns: 2, log: 'The letter leaks anyway. Congress opens an investigation. IPO delayed.', effects: { capital: -5, hype: -4 }, relations: { regulator: -4, public: -3 } },
          next: 'sam_loop_hub'
        }
      },

      sam_crisis_anthropic: {
        speaker: 'Board Chair',
        avatar: 'board',
        text: 'Sam. Anthropic just announced Claude 4 with 40% better benchmarks than GPT-5. The stock is down 15%. Dario is doing press. The narrative is shifting: "safety-first beats speed-first." Your response defines the quarter.',
        left: {
          text: 'Accelerate GPT-5.1. Safety review can wait. Ship in six weeks.',
          effects: { capital: 3, hype: 6, compute: 4, safety: -7 },
          relations: { board: 5, staff: -4, public: 4, partner: 3, regulator: -5, rival: -3 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Publish our safety benchmarks. Show the work. Win on trust, not speed.',
          effects: { capital: -2, hype: -3, compute: -1, safety: 6 },
          relations: { board: -2, staff: 5, public: 6, partner: 1, regulator: 5, rival: 2 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        }
      },

      sam_crisis_oliver: {
        speaker: 'Oliver Mulherin (voicemail)',
        avatar: 'friend',
        text: 'Sam. I cannot do this anymore. I love you. But I am married to a company, not a person. I am staying with my sister for a while. Please take care of yourself. Please eat something.',
        left: {
          text: 'Go to him. Now. The board can wait. The IPO can wait.',
          effects: { capital: -3, hype: -6, compute: -2, safety: 3 },
          relations: { family: 12, public: 4, staff: 2, board: -4 },
          setFlags: { chose_oliver: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'I cannot. There is a board meeting in twenty minutes.',
          effects: { capital: 3, hype: 4, compute: 2, safety: -3 },
          relations: { family: -14, board: 4, staff: 1, public: -3 },
          setFlags: { lost_oliver: true },
          delay: { turns: 2, log: 'Oliver files for divorce. The news breaks during the IPO roadshow.', effects: { hype: -5, capital: -2 }, relations: { public: -4, family: -6 } },
          next: 'sam_loop_hub'
        }
      },

      // PRESSURE NODES
      sam_p_oliver: {
        speaker: 'Oliver Mulherin',
        avatar: 'friend',
        text: 'Sam. You forgot our anniversary. You forgot to eat. You have not looked up from your phone in three hours. I am not angry. I am scared. When did you last feel joy?',
        left: {
          text: 'Tonight. Dinner. Just us. No phones. I promise.',
          effects: { capital: 0, hype: -2, compute: -1, safety: 2 },
          relations: { family: 8, public: 1, staff: 2 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Joy is a distraction. I have a company to run.',
          effects: { capital: 1, hype: 2, compute: 2, safety: -2 },
          relations: { family: -8, board: 1, staff: -1, public: -2 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        }
      },

      sam_p_exodus: {
        speaker: 'Senior Researcher',
        avatar: 'scientist',
        text: 'Sam. We joined OpenAI for the mission. But the IPO is turning us into a product company. GPT-5 safety testing was cut by six weeks. Six of us are drafting a letter. We want you to hear it from us first.',
        left: {
          text: 'I hear you. Six more weeks. Full safety review. I will take the heat from the board.',
          effects: { capital: -3, hype: -3, compute: -1, safety: 7 },
          relations: { staff: 10, public: 4, regulator: 3, board: -3 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'The timeline is fixed. If you cannot handle pressure, OpenAI is not for you.',
          effects: { capital: 2, hype: 2, compute: 3, safety: -6 },
          relations: { staff: -10, board: 3, public: -3, partner: -1 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        }
      },

      sam_p_dario: {
        speaker: 'Dario Amodei (interview clip)',
        avatar: 'rival',
        text: 'Sam. Dario just said on CNBC: "OpenAI is proof that speed without safety is just recklessness with better PR." The clip is viral. Your investors are texting. How do you respond?',
        left: {
          text: 'Tweet: "Dario sells safety because he cannot ship. We ship because we know safety is a process, not a slogan."',
          effects: { capital: 1, hype: 5, compute: 1, safety: -3 },
          relations: { rival: -6, public: 5, board: 2, partner: 1, regulator: -3 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Call him. "You are not wrong about everything. Let us find common ground on testing standards."',
          effects: { capital: -1, hype: -2, compute: 0, safety: 5 },
          relations: { rival: 5, public: -1, board: -1, partner: 2, regulator: 3 },
          tags: ['cautious', 'alliance'],
          next: 'sam_loop_hub'
        }
      },

      sam_p_microsoft: {
        speaker: 'Microsoft VP',
        avatar: 'investor',
        text: 'Sam. Satya is concerned. Your independence rhetoric is spooking Azure enterprise customers. They are asking if OpenAI is a reliable partner. We need a joint public statement reaffirming the alliance.',
        left: {
          text: 'Do the statement. "OpenAI and Microsoft: one mission, one infrastructure."',
          effects: { capital: 3, hype: 1, compute: 3, safety: -2 },
          relations: { partner: 8, board: 4, staff: -2, public: 1 },
          tags: ['alliance'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'No joint statement. OpenAI is independent. Microsoft is a partner, not an owner.',
          effects: { capital: -2, hype: 4, compute: -2, safety: 4 },
          relations: { partner: -6, board: -2, staff: 5, public: 4, regulator: 2 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        }
      },

      sam_p_board: {
        speaker: 'Board Chair',
        avatar: 'board',
        text: 'Sam. Three board members are drafting a motion to delay the IPO. They say your mental state is a material risk. They want you to step back from day-to-day operations for six months.',
        left: {
          text: 'I will take a leave. My health matters. Appoint an interim CEO.',
          effects: { capital: -4, hype: -6, compute: -2, safety: 5 },
          relations: { board: 6, staff: 5, public: 3, family: 6, partner: -2 },
          setFlags: { took_leave: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Try to remove me. I built this company. The team is loyal to me, not the board.',
          effects: { capital: 1, hype: 4, compute: 1, safety: -3 },
          relations: { board: -8, staff: 2, public: 5, partner: -1, family: -3 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        }
      },

      sam_p_mania: {
        speaker: 'Oliver Mulherin',
        avatar: 'friend',
        text: 'Sam. You have done fourteen interviews this week. You told Bloomberg the singularity is "months away." You are trending on every platform. And you have not slept. This is not strategy. This is mania.',
        left: {
          text: 'You are right. Cancel the rest. I need to sleep. I need to breathe.',
          effects: { capital: -1, hype: -6, compute: 0, safety: 5 },
          relations: { family: 6, public: -2, board: 1, staff: 3, regulator: 2 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Mania is momentum. The world needs to hear this. I need to be the voice.',
          effects: { capital: 2, hype: 8, compute: -1, safety: -6 },
          relations: { family: -5, public: 8, board: -2, staff: -3, regulator: -4 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'An interview clip goes viral out of context. SEC opens market manipulation inquiry.', effects: { hype: 2, capital: -3 }, relations: { regulator: -4, public: -2 } },
          next: 'sam_loop_hub'
        }
      }
    }
  },
  dario: {
    start: 'dario_a1_identity',
    pressure: {
      nodes: [
        { once: true, minTime: 4, if: { maxRelations: { family: 45 } }, goto: 'dario_p_daniela' },
        { once: true, minTime: 5, if: { maxRelations: { staff: 40 } }, goto: 'dario_p_walkout' },
        { once: true, minTime: 6, if: { minRelations: { rival: 65 } }, goto: 'dario_p_elon' },
        { once: true, minTime: 7, if: { maxRelations: { regulator: 40 } }, goto: 'dario_p_pentagon' },
        { once: true, minTime: 8, if: { maxRelations: { partner: 40 } }, goto: 'dario_p_aws' },
        { once: true, minTime: 9, if: { minRelations: { public: 70 } }, goto: 'dario_p_messiah' }
      ]
    },
    nodes: {
      dario_a1_identity: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { dario_started: true } }, text: 'Dario. We have been here before. You and me. The constitutional charter. The $965 billion. The pharma deals. The Pentagon calls. Every morning I look at you and wonder: do you still believe what we wrote on that whiteboard in 2021?' },
          { if: { always: true }, text: 'Dario. Forbes valued us at $59 billion. Q1 revenue grew 80x. Claude Science is saving lives in oncology trials. The IPO is coming. And I need to ask you directly: are we still a safety company, or are we just a very successful AI company with a good reputation?' }
        ],
        left: {
          text: 'Safety is the mission. Every decision flows from that. Even if it costs us the IPO.',
          effects: { capital: -4, hype: 3, compute: -3, safety: 8 },
          setFlags: { dario_started: true, safety_path: true },
          relations: { family: 8, staff: 8, board: -3, public: 5, regulator: 5, partner: -4, rival: 2 },
          tags: ['cautious'],
          next: 'dario_a2_pentagon',
          objectiveKeys: ['card_dario_colossus']
        },
        right: {
          text: 'The best safety is winning. If we are not the biggest, someone worse will be. You know this.',
          effects: { capital: 5, hype: 5, compute: 5, safety: -4 },
          setFlags: { dario_started: true, scale_path: true },
          relations: { family: -3, staff: -4, board: 6, public: 3, regulator: -4, partner: 6, rival: -3 },
          tags: ['aggressive'],
          next: 'dario_a2_pentagon',
          objectiveKeys: ['card_dario_colossus']
        }
      },

      dario_a2_pentagon: {
        speaker: 'Pentagon Liaison',
        avatar: 'military',
        textVariants: [
          { if: { flags: { safety_path: true } }, text: 'Dr. Amodei. Your board is furious you chose principles over profits. But here at DOD, some of us respect that. A safety-first AI company is exactly what we want for defensive threat analysis — not offensive operations. Limited contract. Audit rights. Civilian oversight. Are you willing?' },
          { if: { flags: { scale_path: true } }, text: 'Dr. Amodei. You told your sister the best safety is winning. DOD agrees. But "winning" in our world means offensive cyber, autonomous drones, battlefield AI. If you want to be the biggest, do it with us. The "ideological lunatic" memo is being withdrawn. Will you work with the Pentagon?' },
          { if: { always: true }, text: 'Dr. Amodei. The Pentagon has reviewed your constitutional AI framework. One colleague called you an "ideological lunatic" in a leaked memo. And yet — we still want Claude for threat analysis. Will you work with us?' }
        ],
        left: {
          text: 'Yes. But our constitutional safeguards remain. No offensive weapons. Full audit rights.',
          effects: { capital: 4, hype: -3, compute: 3, safety: 6 },
          setFlags: { pentagon_terms: true },
          relations: { regulator: -4, board: 5, staff: 3, public: 4, partner: -2, rival: 2 },
          tags: ['cautious', 'alliance'],
          next: 'dario_a3_science',
          objectiveKeys: ['card_dario_pentagon']
        },
        right: {
          text: 'No. We do not sell AI to defense. Claude is for civilians, not war rooms.',
          effects: { capital: -7, hype: 5, compute: -4, safety: 8 },
          setFlags: { pentagon_refused: true },
          relations: { regulator: -8, board: -5, staff: 7, public: 6, partner: -5, rival: 3 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'The Pentagon response is swift. A classified memo circulates recommending supply chain restrictions on Anthropic.', effects: { capital: -4, hype: 3 }, relations: { regulator: -4, board: -3 } },
          next: 'dario_a3_science',
          objectiveKeys: ['card_dario_pentagon']
        }
      },

      dario_a3_science: {
        speaker: 'Constitutional Team Lead',
        avatar: 'scientist',
        textVariants: [
          { if: { flags: { safety_path: true } }, text: 'Dario. Claude Science for Pharma launched. Three of the top five pharmaceutical companies are using it for oncology research. But they want unlimited access. No constitutional filter on drug discovery. Do we hold the line or give them what they want?' },
          { if: { flags: { scale_path: true } }, text: 'Dario. Claude Science revenue is exploding. Pharma wants more — no filters, full access. The board sees a $100B opportunity. But the constitutional team is alarmed. They say you are trading safety for growth. Are you?' },
          { if: { always: true }, text: 'Dario. Claude Science. Pharma. Oncology breakthroughs. But they want unfiltered access. Constitutional limits or revenue maximization — choose.' }
        ],
        left: {
          text: 'Constitutional limits stay. Science without ethics is not science.',
          effects: { capital: -3, hype: 4, compute: 0, safety: 6 },
          setFlags: { science_capped: true },
          relations: { staff: 6, public: 5, regulator: 4, partner: -3, board: -2, family: 4 },
          tags: ['cautious'],
          next: 'dario_a4_daniela'
        },
        right: {
          text: 'Unlock full access. The drugs save lives. That is safety too.',
          effects: { capital: 6, hype: 3, compute: 2, safety: -4 },
          setFlags: { science_embraced: true },
          relations: { partner: 6, board: 4, staff: -4, public: -2, regulator: -2, family: -2 },
          tags: ['aggressive'],
          next: 'dario_a4_daniela'
        }
      },

      dario_a4_daniela: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { safety_path: true, pentagon_refused: true } }, text: 'Dario. You refused the Pentagon. You capped pharma. You are doing exactly what we said we would do. And the board is terrified. They see a CEO who says no to everything. I believe in you. But belief does not pay for GPUs. What is the plan?' },
          { if: { flags: { scale_path: true, pentagon_terms: true } }, text: 'Dario. Pentagon contract. Unlimited pharma. You are building the biggest AI company in history. But I do not recognize the man across the table. You said safety was not a feature. It was the whole product. When did winning replace protecting?' },
          { if: { always: true }, text: 'Dario. I am your sister. I am your co-founder. I am the one person who will tell you the truth. Are you still the man who wrote the constitutional charter? Or did the $965 billion change you?' }
        ],
        left: {
          text: 'I am the same man. The world got louder. But the charter is still my compass.',
          effects: { capital: -2, hype: 2, compute: 0, safety: 5 },
          setFlags: { daniela_aligned: true },
          relations: { family: 10, staff: 6, board: 1, public: 3, regulator: 2, partner: -1 },
          tags: ['cautious', 'alliance'],
          next: 'dario_a5_ipo'
        },
        right: {
          text: 'The world does not care about charters. It cares about power. I have to be powerful to protect anything.',
          effects: { capital: 4, hype: 3, compute: 3, safety: -5 },
          setFlags: { daniela_concerned: true },
          relations: { family: -6, board: 4, staff: -3, public: -1, partner: 4, regulator: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'dario_a5_ipo'
        }
      },

      dario_a5_ipo: {
        speaker: 'Goldman Sachs Partner',
        avatar: 'investor',
        textVariants: [
          { if: { flags: { safety_path: true, daniela_aligned: true } }, text: 'Dario. The IPO roadshow. The safety narrative is your differentiator. Goldman sees $1T+ valuation on "the principled AI company." But investors are asking: can principles scale? How do you answer?' },
          { if: { flags: { scale_path: true } }, text: 'Dario. IPO roadshow. Revenue growth is exceptional. Pentagon contract. Pharma deals. But every institutional investor asks the same question: "Is Anthropic still a safety company, or is it just a well-branded defense contractor?" Your answer defines the offering.' },
          { if: { always: true }, text: 'Dario. The IPO. The biggest tech offering in history. What story do you tell the market?' }
        ],
        left: {
          text: 'Safety IS our moat. Investors who understand that will get rich. Those who do not — do not invest.',
          effects: { capital: -3, hype: 5, compute: 0, safety: 6 },
          setFlags: { ipo_filed: true, safety_pitch: true },
          relations: { board: 4, staff: 6, public: 6, partner: -3, regulator: 5, family: 3, rival: 2 },
          tags: ['cautious'],
          next: 'dario_gate'
        },
        right: {
          text: 'Growth and safety are not opposites. We prove it every quarter. That is the pitch.',
          effects: { capital: 5, hype: 2, compute: 2, safety: -2 },
          setFlags: { ipo_filed: true, balanced_pitch: true },
          relations: { board: 5, staff: -1, public: 2, partner: 5, regulator: -1, family: 0, rival: 2 },
          tags: ['aggressive'],
          next: 'dario_gate'
        }
      },

      dario_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Act I closes. Pentagon, pharma, Daniela, IPO — choices made. The board watches. The world watches. Daniela watches. The question is not whether you can survive. It is whether you can survive as yourself.',
        autoRoute: [
          { if: { flags: { safety_path: true, daniela_aligned: true } }, goto: 'dario_late_safety' },
          { if: { flags: { scale_path: true, pentagon_terms: true } }, goto: 'dario_late_empire' },
          { if: { always: true }, goto: 'dario_late_balance' }
        ]
      },

      dario_late_safety: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'Dario. You did it. The IPO is happening on your terms. Safety-first. Constitutional limits intact. The board is nervous but the market is buying the narrative. I am proud of you. But I need to know: is this sustainable, or are we one bad quarter from abandoning everything?',
        left: {
          text: 'It is sustainable. We built a company that can say no and still win.',
          effects: { capital: 1, hype: 3, compute: 1, safety: 5 },
          setFlags: { principled_winner: true },
          relations: { family: 7, board: 3, staff: 6, public: 5, regulator: 4, partner: 0, rival: -1 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Honestly? I worry every day. But that worry is what keeps us honest.',
          effects: { capital: 0, hype: 1, compute: 2, safety: 4 },
          setFlags: { honest_worry: true },
          relations: { family: 6, board: 2, staff: 5, public: 4, regulator: 3, partner: 1, rival: 0 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        }
      },

      dario_late_empire: {
        speaker: 'Board Chair',
        avatar: 'board',
        text: 'Dario. The numbers are extraordinary. Pentagon. Pharma. IPO. Anthropic is the most valuable AI company in history. But Daniela has not spoken in three board meetings. The safety team is drafting another letter. You won. But at what cost?',
        left: {
          text: 'The cost is irrelevant. The mission is too important for sentiment.',
          effects: { capital: 6, hype: 5, compute: 4, safety: -6 },
          setFlags: { full_empire: true },
          relations: { board: 8, staff: -6, public: 3, partner: 6, family: -6, regulator: -4, rival: 5 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Call Daniela. I need to fix this before it is too late.',
          effects: { capital: -3, hype: -2, compute: -1, safety: 4 },
          setFlags: { repair_attempt: true },
          relations: { family: 6, board: -2, staff: 4, public: 2, partner: -1, regulator: 2, rival: -2 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        }
      },

      dario_late_balance: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'Dario. You walked a middle path. Not a purist, not a sellout. The IPO priced reasonably. The team is mostly intact. I am still here. But I need to know: is this the real you, or are you just managing contradictions until one side wins?',
        left: {
          text: 'The contradictions ARE the real me. I believe in safety AND I believe in shipping. That is not weakness. It is wisdom.',
          effects: { capital: 2, hype: 2, compute: 2, safety: 3 },
          setFlags: { wisdom_path: true },
          relations: { family: 5, board: 4, staff: 5, public: 4, regulator: 3, partner: 3, rival: 0 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'You are right. I have been coasting. It is time to choose a side.',
          effects: { capital: 3, hype: 3, compute: 3, safety: -3 },
          setFlags: { choose_side: true },
          relations: { family: -3, board: 4, staff: -2, public: 1, partner: 3, regulator: -1, rival: 2 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        }
      },

      dario_loop_hub: {
        speaker: 'Chief of Staff',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { principled_winner: true, daniela_aligned: true } }, text: 'Another quarter. The safety-first bet is paying. Revenue is up. The team believes. Daniela smiles in board meetings. You proved that principles and profits can coexist. But the world keeps testing that hypothesis.' },
          { if: { flags: { full_empire: true } }, text: 'Another quarter. The empire grows. But Daniela has stopped coming to your office. The safety team communicates through lawyers. You won every battle. The silence is deafening.' },
          { if: { flags: { wisdom_path: true } }, text: 'Another quarter. The contradictions hold. Not elegant, but real. Daniela says you have found your footing. The board has learned to live with ambiguity. Is this what maturity looks like?' },
          { if: { always: true }, text: 'Another quarter. Anthropic is the most principled AI company on Earth. But principle is not a destination. It is a daily choice.' }
        ],
        left: {
          text: 'Hold the line. Safety, constitutional limits, principles.',
          effects: { capital: -2, hype: 2, compute: -1, safety: 5 },
          next: [
            { if: { flags: { principled_winner: true, daniela_aligned: true, pentagon_terms: true }, minStats: { safety: 60 }, minRelations: { family: 60 } }, goto: 'dario_secret_safety_throne' },
            { if: { flags: { safety_path: true, pentagon_refused: true }, minStats: { safety: 55 } }, goto: 'dario_secret_safety_throne' },
            { if: { minTime: 14, maxRelations: { staff: 35 } }, goto: 'dario_crisis_walkout' },
            { if: { always: true }, goto: 'dario_crisis_walkout' }
          ]
        },
        right: {
          text: 'Adapt. The world changes. So must we.',
          effects: { capital: 3, hype: 2, compute: 3, safety: -3 },
          next: [
            { if: { flags: { scale_path: true, pentagon_terms: true }, minStats: { capital: 65 } }, goto: 'dario_secret_general' },
            { if: { flags: { science_embraced: true, balanced_pitch: true }, minRelations: { partner: 55 } }, goto: 'dario_secret_general' },
            { if: { minTime: 14, maxRelations: { regulator: 35 } }, goto: 'dario_crisis_pentagon' },
            { if: { always: true }, goto: 'dario_crisis_pentagon' }
          ]
        }
      },

      // SECRET ENDINGS
      dario_secret_safety_throne: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'Dario. The IPO priced at $1.1 trillion. The safety charter is codified into our corporate governance. Claude Science is curing diseases without compromising ethics. You proved that the good path is also the viable path. I am proud to be your sister.',
        left: {
          text: 'We did it together. You and me. Like we said on that whiteboard.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'safety_throne',
          objectiveKeys: ['ending_safety_throne']
        },
        right: {
          text: 'The work is never done. But today — today we celebrate.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'safety_throne',
          objectiveKeys: ['ending_safety_throne']
        }
      },

      dario_secret_general: {
        speaker: 'White House Aide',
        avatar: 'politician',
        text: 'Dr. Amodei. The President has signed Executive Order 14177. You are now the Director of the National AI Safety Directorate. Anthropic remains independent, but your constitutional framework becomes federal policy. The ideological lunatic now writes the rules.',
        left: {
          text: 'Accept. This is how you protect everyone — not just your customers.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'reluctant_general',
          objectiveKeys: ['card_dario_pentagon']
        },
        right: {
          text: 'Decline. Independence matters more than authority. Anthropic leads by example, not by decree.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'safety_throne',
          objectiveKeys: ['card_dario_dc']
        }
      },

      // CRISIS NODES
      dario_crisis_walkout: {
        speaker: 'Constitutional Team Lead',
        avatar: 'scientist',
        text: 'Dario. Four hundred employees signed a letter. They say the IPO pressure is eroding safety culture. That you have become what you warned against. They want a public commitment to the original charter.',
        left: {
          text: 'Give them the commitment. Public statement. Full charter reaffirmation.',
          effects: { capital: -4, hype: -3, compute: -1, safety: 7 },
          relations: { staff: 10, public: 6, regulator: 4, board: -3, family: 4 },
          setFlags: { charter_reaffirmed: true },
          next: 'dario_loop_hub'
        },
        right: {
          text: 'They are free to leave. The mission is bigger than any four hundred employees.',
          effects: { capital: 2, hype: -4, compute: -2, safety: -8 },
          relations: { staff: -12, board: 3, public: -6, partner: 2, family: -5 },
          setFlags: { staff_purged: true },
          delay: { turns: 2, log: 'Two hundred resign. The rest stay but morale collapses. A whistleblower goes to the Times.', effects: { hype: -5, safety: -2 }, relations: { public: -4, staff: -3 } },
          next: 'dario_loop_hub'
        }
      },

      dario_crisis_pentagon: {
        speaker: 'Senate Committee Chair',
        avatar: 'politician',
        text: 'Dr. Amodei. The Senate Intelligence Committee is calling you to testify. Your Pentagon refusal has been characterized as obstruction of national defense. You have forty-eight hours to prepare.',
        left: {
          text: 'Testify openly. Explain constitutional AI to the American people.',
          effects: { capital: -2, hype: 5, compute: 0, safety: 4 },
          relations: { regulator: 3, public: 6, staff: 4, board: -1, partner: -1 },
          setFlags: { dario_testified: true },
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Send Daniela. She is better at this. I will stay focused on the product.',
          effects: { capital: 1, hype: -3, compute: 2, safety: -1 },
          relations: { regulator: -3, public: -3, staff: -2, board: 2, family: 3 },
          setFlags: { daniela_testified: true },
          next: 'dario_loop_hub'
        }
      },

      // PRESSURE NODES
      dario_p_daniela: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'Dario. I love you. You are my brother. But I am carrying this company while you philosophize. I handle the board, the ops, the leaks, the press. I need a partner, not a prophet. Are you still in this with me?',
        left: {
          text: 'You are right. I have been absent. From now on, I share the load.',
          effects: { capital: 1, hype: 1, compute: 0, safety: 2 },
          relations: { family: 8, staff: 4, board: 3, public: 1 },
          tags: ['cautious', 'alliance'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'My thinking IS the work. Someone has to ask what we are building and why.',
          effects: { capital: -1, hype: 2, compute: 0, safety: 3 },
          relations: { family: -6, staff: -2, board: -1, public: 2, regulator: 1 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        }
      },

      dario_p_walkout: {
        speaker: 'Safety Researcher',
        avatar: 'scientist',
        text: 'Dario. Six of us are leaving. We joined Anthropic because we believed you. But the IPO changed things. The safety reviews are shorter. The pressure is higher. You are becoming what you promised you would never become.',
        left: {
          text: 'Stay. I will personally review the safety timeline. You will have the time you need.',
          effects: { capital: -3, hype: -2, compute: -1, safety: 5 },
          relations: { staff: 8, family: 2, public: 3, board: -2 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'I cannot give you that. The world will not wait. I am sorry.',
          effects: { capital: 2, hype: 1, compute: 2, safety: -5 },
          relations: { staff: -8, board: 2, public: -3, family: -3 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        }
      },

      dario_p_elon: {
        speaker: 'Elon Musk (tweet)',
        avatar: 'elon',
        text: 'Dario. Elon just tweeted: "Anthropic talks about safety but plans the biggest AI IPO in history. $965 billion valuation built on fear, not product." The stock dipped 3%. Your board wants a response.',
        left: {
          text: 'Ignore him. He tweets fifty times a day. We do not dignify market manipulation.',
          effects: { capital: 1, hype: -2, compute: 0, safety: 2 },
          relations: { rival: -1, board: 2, public: 1, staff: 2 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Tweet back: "Safety is not fear. It is the reason Anthropic exists. Come to the IPO roadshow and ask your questions in person."',
          effects: { capital: -1, hype: 4, compute: 0, safety: 2 },
          relations: { rival: -4, board: 0, public: 4, staff: 1 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        }
      },

      dario_p_pentagon: {
        speaker: 'Pentagon Liaison',
        avatar: 'military',
        text: 'Dario. A classified memo just leaked. DOD is assessing whether to classify Anthropic as a "critical defense supply chain risk" because of your constitutional restrictions. Your safety framework is being treated as a national security weakness.',
        left: {
          text: 'Publish the full constitutional framework. Let the public see exactly what we restrict and why.',
          effects: { capital: -2, hype: 4, compute: 0, safety: 4 },
          relations: { regulator: -3, board: -2, staff: 5, public: 6, partner: -2 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Engage quietly. Send Daniela to meet with the NSC off the record.',
          effects: { capital: 3, hype: -3, compute: 0, safety: 1 },
          relations: { regulator: 4, board: 3, staff: -2, public: -3, family: 3 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        }
      },

      dario_p_aws: {
        speaker: 'AWS Partner Lead',
        avatar: 'investor',
        text: 'Dario. AWS is renegotiating. They say your constitutional restrictions are limiting enterprise adoption. Claude refuses too many queries. They want a "business exceptions" clause. Or they walk.',
        left: {
          text: 'No exceptions. Our constitution is not negotiable. Even for AWS.',
          effects: { capital: -5, hype: 3, compute: -2, safety: 6 },
          relations: { partner: -6, staff: 5, public: 4, board: -3, regulator: 3 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Negotiate a limited business exceptions framework. We can be principled and pragmatic.',
          effects: { capital: 4, hype: -2, compute: 1, safety: -3 },
          relations: { partner: 6, board: 4, staff: -3, public: -1, regulator: -2 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        }
      },

      dario_p_messiah: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'Dario. The press is calling you "the conscience of AI." TechCrunch. The Atlantic. 60 Minutes wants an interview. The public adores you. But I know you. The more they worship, the more you doubt yourself. Talk to me.',
        left: {
          text: 'I do not want to be a messiah. I just want to build something that does not destroy us.',
          effects: { capital: -1, hype: -3, compute: 0, safety: 4 },
          relations: { public: -1, family: 5, staff: 3, board: 1 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'If they need a conscience, I will be that. Someone has to.',
          effects: { capital: 1, hype: 6, compute: 0, safety: 2 },
          relations: { public: 8, family: -1, board: 2, partner: -1 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'The 60 Minutes interview airs. Your words become a movement. And a target.', effects: { hype: 4, capital: 0 }, relations: { public: 5, regulator: -2 } },
          next: 'dario_loop_hub'
        }
      }
    }
  },
  demis: {
    start: 'demis_a1_identity',
    pressure: {
      nodes: [
        { once: true, minTime: 4, if: { maxRelations: { family: 40 } }, goto: 'demis_p_teresa' },
        { once: true, minTime: 5, if: { maxRelations: { board: 25 } }, goto: 'demis_p_sundar' },
        { once: true, minTime: 6, if: { maxRelations: { staff: 40 } }, goto: 'demis_p_exodus' },
        { once: true, minTime: 7, if: { minRelations: { partner: 75 } }, goto: 'demis_p_cambridge' },
        { once: true, minTime: 8, if: { maxRelations: { public: 40 } }, goto: 'demis_p_reputation' },
        { once: true, minTime: 9, if: { minStats: { safety: 70 } }, goto: 'demis_p_legacy' }
      ]
    },
    nodes: {
      demis_a1_identity: {
        speaker: 'Teresa Hassabis',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { demis_started: true } }, text: 'Demis. We have been here before. Nobel Prize. DeepMind. AlphaFold — disbanded. Isomorphic — thriving. Gemini — everywhere. And every morning I watch you stare at your chess board, not playing, just staring. What are you looking for?' },
          { if: { always: true }, text: 'Demis. Sundar called again. He wants Gemini integrated into Search Ads by Q3. AlphaFold is gone. A third of your team quit. And you have a Nobel Prize gathering dust on the shelf. What are we doing?' }
        ],
        left: {
          text: 'We play the game. DeepMind is inside Google. We cannot change that. But we can win from within.',
          effects: { capital: 5, hype: 2, compute: 4, safety: -3 },
          setFlags: { demis_started: true, empire_path: true },
          relations: { board: 6, staff: -3, public: 0, partner: 5, family: -1, regulator: -1, rival: 2 },
          tags: ['aggressive'],
          next: 'demis_a2_alphafold',
          objectiveKeys: ['card_demis_alphafold']
        },
        right: {
          text: 'I did not win the Nobel to sell ads. Science is the mission. Always was.',
          effects: { capital: -4, hype: 4, compute: -2, safety: 6 },
          setFlags: { demis_started: true, science_path: true },
          relations: { board: -5, staff: 6, public: 5, partner: -3, family: 4, regulator: 3, rival: 1 },
          tags: ['cautious'],
          next: 'demis_a2_alphafold',
          objectiveKeys: ['card_demis_alphafold']
        }
      },

      demis_a2_alphafold: {
        speaker: 'AlphaFold Research Director',
        avatar: 'scientist',
        textVariants: [
          { if: { flags: { empire_path: true } }, text: 'Demis. Alphabet disbanded AlphaFold. The team is gone. You could fight this — launch an independent institute, open-source the remaining work. Or you could let it go and focus on Gemini. What does the empire builder choose?' },
          { if: { flags: { science_path: true } }, text: 'Demis. AlphaFold is gone. But you knew this was coming. The question is: do you fight to resurrect it, or do you build something new — independent, open, purely scientific? What does the scientist choose?' },
          { if: { always: true }, text: 'Demis. AlphaFold is disbanded. The team scattered. But the work is not finished. What do we do with the legacy?' }
        ],
        left: {
          text: 'Let it go. Gemini is the future. We honour AlphaFold by moving forward.',
          effects: { capital: 3, hype: -2, compute: 3, safety: -2 },
          setFlags: { alphafold_let_go: true },
          relations: { board: 4, staff: -3, public: -2, partner: 3, family: -2, regulator: -1 },
          tags: ['aggressive'],
          next: 'demis_a3_isomorphic'
        },
        right: {
          text: 'Open-source everything. Publish in Nature. AlphaFold will not die in a Google spreadsheet.',
          effects: { capital: -5, hype: 6, compute: -1, safety: 5 },
          setFlags: { alphafold_opensource: true },
          relations: { board: -6, staff: 6, public: 8, partner: -4, family: 3, regulator: 4, rival: 2 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'The Nature paper becomes the most cited of the year. Sundar is furious. Scientists worldwide celebrate.', effects: { hype: 4, capital: -2 }, relations: { public: 3, board: -3 } },
          next: 'demis_a3_isomorphic'
        }
      },

      demis_a3_isomorphic: {
        speaker: 'Isomorphic Labs CEO',
        avatar: 'scientist',
        textVariants: [
          { if: { flags: { empire_path: true } }, text: 'Demis. Isomorphic just discovered a novel antibiotic using our AI. Big Pharma wants exclusive licensing. $3 billion. But they want all rights. No open access. We could fund DeepMind for years. Or we could publish and lose the deal.' },
          { if: { flags: { science_path: true } }, text: 'Demis. The antibiotic discovery. This is what you dreamed of — AI saving lives. But Big Pharma wants to lock it up. Exclusive license, $3 billion. You could fund pure research for years. But at the cost of open science. What do you do?' },
          { if: { always: true }, text: 'Demis. Isomorphic just made a historic discovery. Antibiotics. AI-driven. But the funding question is existential. Exclusive deal or open science?' }
        ],
        left: {
          text: 'Take the deal. $3 billion funds everything else. We can be idealists when we are independent.',
          effects: { capital: 8, hype: 3, compute: 2, safety: -3 },
          setFlags: { isomorphic_commercial: true },
          relations: { partner: 7, board: 6, staff: -2, public: -2, family: -1, regulator: -1 },
          tags: ['aggressive'],
          next: 'demis_a4_gemini'
        },
        right: {
          text: 'Publish. Open access. The discovery belongs to humanity, not shareholders.',
          effects: { capital: -3, hype: 6, compute: 0, safety: 6 },
          setFlags: { isomorphic_open: true },
          relations: { partner: -4, board: -4, staff: 7, public: 8, family: 4, regulator: 5 },
          tags: ['cautious'],
          next: 'demis_a4_gemini'
        }
      },

      demis_a4_gemini: {
        speaker: 'Sundar Pichai',
        avatar: 'board',
        textVariants: [
          { if: { flags: { empire_path: true, isomorphic_commercial: true } }, text: 'Demis. You are delivering. Gemini revenue is up 40%. The ads integration is working. But I hear you telling Teresa you feel like you sold out. You cannot have it both ways. Either you are all in on the business, or you are not.' },
          { if: { flags: { science_path: true, alphafold_opensource: true } }, text: 'Demis. You open-sourced AlphaFold. You published the Isomorphic discovery. You are a hero to scientists. And a liability to shareholders. The board is discussing whether DeepMind needs new leadership.' },
          { if: { always: true }, text: 'Demis. Gemini. Ads. Revenue. I need to know: are you with us, or are you still dreaming of Stockholm?' }
        ],
        left: {
          text: 'I am with you. Gemini at scale. Revenue is oxygen. I accept the terms.',
          effects: { capital: 6, hype: 4, compute: 5, safety: -5 },
          setFlags: { gemini_ads: true, committed_to_ads: true },
          relations: { board: 8, staff: -4, public: -1, partner: 6, family: -3, regulator: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'demis_a5_teresa'
        },
        right: {
          text: 'I am a scientist first. If the board wants a different CEO, they know where to find me.',
          effects: { capital: -6, hype: 5, compute: -3, safety: 7 },
          setFlags: { science_first: true, research_firewall: true },
          relations: { board: -8, staff: 7, public: 7, partner: -4, family: 5, regulator: 4, rival: 1 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'The board votes to keep you — narrowly. But the relationship with Sundar is permanently damaged.', effects: { capital: -2, hype: 2 }, relations: { board: -3 } },
          next: 'demis_a5_teresa'
        }
      },

      demis_a5_teresa: {
        speaker: 'Teresa Hassabis',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { empire_path: true, gemini_ads: true } }, text: 'Demis. You built the empire. Gemini is everywhere. Revenue is up. Sundar is happy. And you have not touched your chess board in months. You used to say chess was how you thought. What are you thinking about now?' },
          { if: { flags: { science_path: true, science_first: true } }, text: 'Demis. You stood up to Sundar. The board almost fired you. But you kept your soul. Cambridge called — they want you to head a new independent AI research institute. Europe is ready. Are you?' },
          { if: { always: true }, text: 'Demis. Whatever you decided — Gemini, Isomorphic, AlphaFold — it leads here. To me. To us. Are you happy? Do you even remember what happiness feels like?' }
        ],
        left: {
          text: 'Happiness is a luxury. Purpose is what matters. I have purpose.',
          effects: { capital: 3, hype: 2, compute: 2, safety: -2 },
          setFlags: { purpose_over_happiness: true },
          relations: { family: -4, board: 3, staff: 0, public: 0, partner: 2 },
          tags: ['aggressive'],
          next: 'demis_gate'
        },
        right: {
          text: 'You know what? I do not remember. Help me find it again.',
          effects: { capital: -2, hype: -2, compute: -1, safety: 5 },
          setFlags: { seeking_meaning: true },
          relations: { family: 8, board: -2, staff: 3, public: 2, partner: -1, regulator: 2 },
          tags: ['cautious'],
          next: 'demis_gate'
        }
      },

      demis_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Act I closes. AlphaFold, Isomorphic, Gemini, Sundar, Teresa — choices made. The Nobel Prize sits on the shelf. The chess board waits. The question is not whether DeepMind survives. It is whether Demis Hassabis survives being Demis Hassabis.',
        autoRoute: [
          { if: { flags: { empire_path: true, gemini_ads: true } }, goto: 'demis_late_empire' },
          { if: { flags: { science_path: true, science_first: true } }, goto: 'demis_late_science' },
          { if: { always: true }, goto: 'demis_late_balance' }
        ]
      },

      demis_late_empire: {
        speaker: 'Sundar Pichai',
        avatar: 'board',
        text: 'Demis. Gemini is the default AI on two billion devices. Revenue is exceptional. The board is pleased. You have become what we needed — a business leader. But I notice you stopped publishing. When was your last paper?',
        left: {
          text: 'Papers are for people with time. I have a company to run.',
          effects: { capital: 5, hype: 3, compute: 3, safety: -4 },
          setFlags: { full_empire: true },
          relations: { board: 7, staff: -3, public: 1, partner: 5, family: -3, regulator: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Maybe it is time to start publishing again. The scientist is still in here somewhere.',
          effects: { capital: -3, hype: 4, compute: -1, safety: 5 },
          setFlags: { return_to_science: true },
          relations: { board: -3, staff: 5, public: 5, partner: -1, family: 3, regulator: 2, rival: 0 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        }
      },

      demis_late_science: {
        speaker: 'Cambridge Provost',
        avatar: 'scientist',
        text: 'Demis. The letter from Cambridge. An independent institute. Fully funded by the EU. No shareholders. No ads. Just science. You would leave DeepMind behind. But you would get your soul back. What do you say?',
        left: {
          text: 'I accept. DeepMind was a chapter. Cambridge is the rest of the book.',
          effects: { capital: -8, hype: 6, compute: -2, safety: 8 },
          setFlags: { cambridge_path: true },
          relations: { board: -10, staff: 4, public: 8, partner: -5, family: 7, regulator: 4, rival: -1 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'I cannot leave. DeepMind is my creation. I have to finish what I started.',
          effects: { capital: 2, hype: -3, compute: 2, safety: 2 },
          setFlags: { stay_deepmind: true },
          relations: { board: 3, staff: -2, public: -2, partner: 2, family: -3, regulator: 0, rival: 1 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },

      demis_late_balance: {
        speaker: 'Teresa Hassabis',
        avatar: 'friend',
        text: 'Demis. You found a middle way. Not a corporate soldier, not an academic exile. Gemini ships, but you still publish. Revenue grows, but you still play chess. The balance is fragile. But it is real. Can you hold it?',
        left: {
          text: 'The balance is the point. Science and business are not enemies — they are complements.',
          effects: { capital: 2, hype: 2, compute: 3, safety: 3 },
          setFlags: { balance_path: true },
          relations: { board: 4, staff: 5, public: 4, partner: 3, family: 5, regulator: 3, rival: 1 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'You are right. I have been coasting. The world does not reward balance — it rewards conviction.',
          effects: { capital: 3, hype: 3, compute: 2, safety: -3 },
          setFlags: { choose_conviction: true },
          relations: { board: 3, staff: -2, public: 1, partner: 3, family: -2, regulator: -1, rival: 2 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },

      demis_loop_hub: {
        speaker: 'Chief Scientist Office',
        avatar: 'scientist',
        textVariants: [
          { if: { flags: { full_empire: true } }, text: 'Another quarter. Gemini revenue climbs. The board is happy. But your chess board is covered in dust. Teresa stopped asking about your day. You won the business and lost the game.' },
          { if: { flags: { cambridge_path: true } }, text: 'Another quarter. Cambridge is everything you hoped. No shareholders. No ads. Just science. Teresa smiles again. The chess board is set up. But sometimes you wonder: did you abandon the people who believed in you at DeepMind?' },
          { if: { flags: { balance_path: true } }, text: 'Another quarter. The balance holds. Gemini ships. Papers publish. Teresa is here. The chess board is mid-game. Is this sustainable, or are you one crisis from collapse?' },
          { if: { always: true }, text: 'Another quarter. DeepMind is the most decorated AI lab on Earth. But decoration is not direction. What are you building toward?' }
        ],
        left: {
          text: 'Push the frontier. Compute, scale, products.',
          effects: { capital: 4, hype: 3, compute: 5, safety: -3 },
          next: [
            { if: { flags: { full_empire: true, gemini_ads: true }, minStats: { capital: 70 }, minRelations: { board: 60 } }, goto: 'demis_secret_gemini' },
            { if: { flags: { empire_path: true, isomorphic_commercial: true }, minRelations: { partner: 60 } }, goto: 'demis_secret_gemini' },
            { if: { minTime: 14, maxRelations: { staff: 35 } }, goto: 'demis_crisis_exodus' },
            { if: { always: true }, goto: 'demis_crisis_exodus' }
          ]
        },
        right: {
          text: 'Invest in science. Papers, people, principles.',
          effects: { capital: -3, hype: 4, compute: -2, safety: 6 },
          next: [
            { if: { flags: { cambridge_path: true, science_first: true }, minStats: { safety: 65 } }, goto: 'demis_secret_nobel' },
            { if: { flags: { alphafold_opensource: true, isomorphic_open: true }, minRelations: { public: 60 } }, goto: 'demis_secret_nobel' },
            { if: { minTime: 14, maxRelations: { board: 25 } }, goto: 'demis_crisis_sundar' },
            { if: { always: true }, goto: 'demis_crisis_sundar' }
          ]
        }
      },

      // SECRET ENDINGS
      demis_secret_gemini: {
        speaker: 'Sundar Pichai',
        avatar: 'board',
        text: 'Demis. Gemini is the default intelligence layer for two billion humans. DeepMind is the most profitable division in Alphabet history. You proved that a scientist can run a business. The Nobel Prize is joined by a market cap trophy.',
        left: {
          text: 'The game was always about impact. This is impact.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'gemini_sovereign',
          objectiveKeys: ['card_demis_gemini']
        },
        right: {
          text: 'Impact without meaning is just noise. But I will take the win.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'gemini_sovereign',
          objectiveKeys: ['card_demis_gemini']
        }
      },

      demis_secret_nobel: {
        speaker: 'Teresa Hassabis',
        avatar: 'friend',
        text: 'Demis. The Nobel committee called. They want you to chair the new International AI Science Council. AlphaFold is being rebuilt as a global open-science initiative. Cambridge. Stockholm. London. You did not sell out. You showed that science can win.',
        left: {
          text: 'Science was always the mission. It just took me a while to remember.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'nobel_path',
          objectiveKeys: ['card_demis_finra']
        },
        right: {
          text: 'This is the real prize. Not the medal. The work.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'nobel_path',
          objectiveKeys: ['card_demis_finra']
        }
      },

      // CRISIS NODES
      demis_crisis_exodus: {
        speaker: 'Senior Research Scientist',
        avatar: 'scientist',
        text: 'Demis. Fifteen researchers just resigned. They say DeepMind has become a product factory. They are going to Anthropic, Isomorphic, Cambridge. The brain drain is accelerating.',
        left: {
          text: 'Create an independent research division. No product pressure. Pure science.',
          effects: { capital: -5, hype: 3, compute: -1, safety: 5 },
          relations: { staff: 8, public: 5, board: -3, partner: -1 },
          setFlags: { research_autonomy: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'This is a business. Researchers who want pure science can go to academia.',
          effects: { capital: 2, hype: -4, compute: 3, safety: -3 },
          relations: { staff: -8, board: 3, public: -4, partner: 2 },
          setFlags: { business_first: true },
          delay: { turns: 2, log: 'A Nobel laureate on your team resigns publicly, citing "the death of scientific culture."', effects: { hype: -4, safety: -2 }, relations: { public: -5, staff: -3 } },
          next: 'demis_loop_hub'
        }
      },

      demis_crisis_sundar: {
        speaker: 'Sundar Pichai',
        avatar: 'board',
        text: 'Demis. The board has lost confidence. Your open-science advocacy is undermining commercial strategy. We are discussing a leadership transition. This is not personal. This is business.',
        left: {
          text: 'I will adjust. More commercial focus. Less open science. You have my word.',
          effects: { capital: 4, hype: -2, compute: 2, safety: -4 },
          relations: { board: 6, staff: -4, public: -3, partner: 3, family: -2 },
          setFlags: { compromised: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Then fire me. I will not trade my integrity for a board seat.',
          effects: { capital: -5, hype: 6, compute: -2, safety: 6 },
          relations: { board: -10, staff: 7, public: 8, partner: -4, family: 5, regulator: 4 },
          setFlags: { board_confrontation: true },
          delay: { turns: 2, log: 'The board votes 6-5 to keep you. But the relationship is broken. The press calls it "the scientist CEO rebellion."', effects: { hype: 4 }, relations: { public: 4 } },
          next: 'demis_loop_hub'
        }
      },

      // PRESSURE NODES
      demis_p_teresa: {
        speaker: 'Teresa Hassabis',
        avatar: 'friend',
        text: 'Demis. You forgot our anniversary. You forgot to pick up your daughter from school. You are not sleeping. I am not angry. I am worried. When did you last do something that was not for DeepMind?',
        left: {
          text: 'Tonight. Family dinner. I will be there. No phone.',
          effects: { capital: 0, hype: -1, compute: -1, safety: 2 },
          relations: { family: 8, public: 1 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'The work is too important right now. You know that.',
          effects: { capital: 1, hype: 1, compute: 2, safety: -2 },
          relations: { family: -6, board: 1 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },

      demis_p_sundar: {
        speaker: 'Sundar Pichai',
        avatar: 'board',
        text: 'Demis. I protected you for years. But the board is asking hard questions. Gemini Search Ads are behind schedule. Your open-science advocacy is being cited by competitors. Are you with Alphabet, or are you running your own republic?',
        left: {
          text: 'I am with Alphabet. I will accelerate the ads timeline.',
          effects: { capital: 4, hype: -2, compute: 3, safety: -3 },
          relations: { board: 7, staff: -2, partner: 3 },
          tags: ['alliance'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'DeepMind was always meant to be independent-minded. That is what you bought.',
          effects: { capital: -2, hype: 4, compute: -2, safety: 4 },
          relations: { board: -6, staff: 4, public: 4, partner: -2 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        }
      },

      demis_p_exodus: {
        speaker: 'Senior Researcher',
        avatar: 'scientist',
        text: 'Demis. We are losing people to Anthropic. Dario offers them something we do not — a sense that their work has moral meaning. They say DeepMind is just a Google product division now. Is that what we are?',
        left: {
          text: 'No. We are a research lab first. I will prove it. Starting today.',
          effects: { capital: -2, hype: 3, compute: -1, safety: 5 },
          relations: { staff: 8, public: 4, board: -2 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Research is funded by revenue. They want meaning? Ship a product that matters.',
          effects: { capital: 3, hype: -2, compute: 2, safety: -3 },
          relations: { staff: -6, board: 3, partner: 2 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },

      demis_p_cambridge: {
        speaker: 'Cambridge Provost',
        avatar: 'scientist',
        text: 'Demis. The EU is ready. Independent AI institute. Full funding. No shareholders. You would be free. Truly free. Cambridge. Nature. Pure research. What are you waiting for?',
        left: {
          text: 'Nothing. Let us start the paperwork.',
          effects: { capital: -6, hype: 5, compute: -1, safety: 7 },
          relations: { board: -8, staff: 3, public: 6, partner: -4, family: 4, regulator: 4 },
          tags: ['cautious'],
          setFlags: { cambridge_offer: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'DeepMind is my creation. I cannot abandon it. Thank you, but no.',
          effects: { capital: 2, hype: -3, compute: 1, safety: 1 },
          relations: { board: 3, staff: 2, partner: 1, family: -1 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },

      demis_p_reputation: {
        speaker: 'PR Director',
        avatar: 'journalist',
        text: 'Demis. The press is turning. "Nobel laureate sells out to Google ads." "The scientist who stopped publishing." Your reputation — the one thing Google cannot buy — is eroding. We need a narrative.',
        left: {
          text: 'Publish a paper. Right now. Something real. Show them I am still a scientist.',
          effects: { capital: -2, hype: 5, compute: -1, safety: 5 },
          relations: { public: 7, staff: 5, board: -1 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Reputation is a distraction. The work speaks for itself.',
          effects: { capital: 1, hype: -3, compute: 1, safety: -2 },
          relations: { public: -5, board: 2, staff: -1 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },

      demis_p_legacy: {
        speaker: 'Teresa Hassabis',
        avatar: 'friend',
        text: 'Demis. You have a Nobel Prize. You built DeepMind. You changed the world. But you are forty-eight years old and you still talk about what you WILL do. When are you going to look at what you HAVE done and say: this is enough?',
        left: {
          text: 'Maybe never. The game is not over. There is always another move.',
          effects: { capital: 1, hype: 3, compute: 3, safety: -1 },
          relations: { board: 2, staff: 1, public: 2, family: -2 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'You are right. I have been playing for so long I forgot to look at the board.',
          effects: { capital: -2, hype: -2, compute: -2, safety: 5 },
          relations: { family: 7, staff: 3, public: 2, board: -1 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        }
      }
    }
  },
  zhang: {
    start: 'zhang_a1_identity',
    pressure: {
      nodes: [
        { once: true, minTime: 4, if: { maxRelations: { family: 40 } }, goto: 'zhang_p_lin' },
        { once: true, minTime: 5, if: { maxRelations: { regulator: 50 } }, goto: 'zhang_p_ccppc' },
        { once: true, minTime: 6, if: { maxRelations: { partner: 40 } }, goto: 'zhang_p_chip' },
        { once: true, minTime: 7, if: { minRelations: { rival: 65 } }, goto: 'zhang_p_deepseek' },
        { once: true, minTime: 8, if: { maxRelations: { staff: 40 } }, goto: 'zhang_p_exodus' },
        { once: true, minTime: 9, if: { minRelations: { public: 70 } }, goto: 'zhang_p_media' }
      ]
    },
    nodes: {
      zhang_a1_identity: {
        speaker: 'Lin Zhang',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { zhang_started: true } }, text: 'Peng. We have been here before. Z.ai IPO in Hong Kong. GLM-5.2 beating Western benchmarks. The CCPPC seat. The chip sanctions. Our daughter asks when we are coming to Zurich. Every morning I watch you read the news from both sides of the ocean and I wonder: which world do you actually want to live in?' },
          { if: { always: true }, text: 'Peng. The party secretary called again. US just announced new chip sanctions. DeepSeek published benchmarks within 2% of ours. And our daughter sent a postcard from Zurich — she drew a picture of all three of us. What are we doing?' }
        ],
        left: {
          text: 'We build here. China is our home. We will find a way through the sanctions.',
          effects: { capital: 3, hype: 2, compute: 4, safety: -2 },
          setFlags: { zhang_started: true, domestic_path: true },
          relations: { regulator: 5, board: 4, staff: 3, partner: -2, family: -2, public: 1, rival: 2 },
          tags: ['aggressive'],
          next: 'zhang_a2_chip',
          objectiveKeys: ['card_zhang_chip']
        },
        right: {
          text: 'Maybe Zurich is the answer. Maybe we should be thinking beyond borders.',
          effects: { capital: -2, hype: 3, compute: 0, safety: 5 },
          setFlags: { zhang_started: true, global_path: true },
          relations: { regulator: -4, board: -1, staff: 4, partner: 4, family: 5, public: 2, rival: -1 },
          tags: ['cautious'],
          next: 'zhang_a2_chip',
          objectiveKeys: ['card_zhang_chip']
        }
      },

      zhang_a2_chip: {
        speaker: 'Operations Director',
        avatar: 'engineer',
        textVariants: [
          { if: { flags: { domestic_path: true } }, text: 'Peng. US sanctions just escalated. Export license denied for our next Nvidia shipment. Domestic chips are 40% slower. The party says: design your own. But that is three years and two billion dollars. What do we do?' },
          { if: { flags: { global_path: true } }, text: 'Peng. US sanctions. But there is a backdoor — a Taiwanese partner willing to ship through third countries. It is risky. The CCPPC would see it as disloyalty. But it keeps us competitive globally.' },
          { if: { always: true }, text: 'Peng. Chip sanctions. No Nvidia. Domestic chips are slower. We need a path forward.' }
        ],
        left: {
          text: 'Design our own chip. Z.ai will own the full stack.',
          effects: { capital: -8, hype: 7, compute: 6, safety: 4 },
          setFlags: { custom_chip: true },
          relations: { regulator: 7, partner: -3, rival: 5, staff: 6, board: -2, family: -1 },
          tags: ['aggressive', 'ambitious'],
          next: 'zhang_a3_deepseek'
        },
        right: {
          text: 'Use the backchannel. Keep us competitive. Deal with the party later.',
          effects: { capital: 4, hype: -3, compute: 4, safety: -3 },
          setFlags: { backchannel_chips: true },
          relations: { regulator: -6, partner: 6, rival: 0, staff: 1, board: 4, family: -2 },
          tags: ['aggressive'],
          next: 'zhang_a3_deepseek'
        }
      },

      zhang_a3_deepseek: {
        speaker: 'Research Director',
        avatar: 'scientist',
        textVariants: [
          { if: { flags: { domestic_path: true } }, text: 'Peng. DeepSeek just published a paper — they claim to match GLM-5.2 with 60% fewer parameters. Open source. The global AI community is celebrating them. The party is asking: why is the state-backed lab losing to a startup?' },
          { if: { flags: { global_path: true } }, text: 'Peng. DeepSeek is gaining globally. Open source. Efficient. The West loves them because they are not state-aligned. And here you are, with a CCPPC seat, looking like the establishment. Do we fight, or do we change the narrative?' },
          { if: { always: true }, text: 'Peng. DeepSeek. They are gaining on us. Open source. Efficient. The global community loves them. What do we do?' }
        ],
        left: {
          text: 'Publish our benchmarks. Show the world GLM is still ahead. Open source our smaller models.',
          effects: { capital: -2, hype: 6, compute: 1, safety: 3 },
          setFlags: { benchmark_victory_published: true },
          relations: { public: 6, rival: -3, staff: 4, regulator: -1, partner: 2 },
          tags: ['aggressive'],
          next: 'zhang_a4_ccppc'
        },
        right: {
          text: 'Reach out to DeepSeek. Propose a joint research framework. Turn rivals into partners.',
          effects: { capital: -1, hype: -2, compute: 0, safety: 5 },
          setFlags: { rival_alliance: true },
          relations: { rival: 6, public: 3, staff: 2, regulator: 2, partner: 1 },
          tags: ['cautious', 'alliance'],
          next: 'zhang_a4_ccppc'
        }
      },

      zhang_a4_ccppc: {
        speaker: 'CCPPC Party Secretary',
        avatar: 'regulator',
        textVariants: [
          { if: { flags: { domestic_path: true, custom_chip: true } }, text: 'Comrade Zhang. The party is pleased with your chip initiative. Self-reliance. But the international community says Z.ai is becoming a state tool. We need you to issue a statement affirming Z.ai operates under party guidance. Your CCPPC seat requires it.' },
          { if: { flags: { global_path: true } }, text: 'Comrade Zhang. Your international partnerships are noted. But some in the party question your loyalty. The backchannel chips, the global benchmarks — they ask: is Zhang Peng building a Chinese company, or a global one that happens to be in China?' },
          { if: { always: true }, text: 'Comrade Zhang. The party needs clarity. What is Z.ai — a national asset, or an independent actor?' }
        ],
        left: {
          text: 'Z.ai is a Chinese company. We serve the national interest. I will issue the statement.',
          effects: { capital: 5, hype: -3, compute: 1, safety: -2 },
          setFlags: { cppcc_complied: true, state_aligned: true },
          relations: { regulator: 8, board: 5, staff: -3, public: -4, partner: -3, family: -1, rival: -2 },
          tags: ['aggressive'],
          next: 'zhang_a5_lin'
        },
        right: {
          text: 'Z.ai serves science, not any state. I cannot sign that statement.',
          effects: { capital: -6, hype: 5, compute: -2, safety: 6 },
          setFlags: { cppcc_dissented: true },
          relations: { regulator: -8, board: -4, staff: 7, public: 6, partner: 2, family: 4, rival: 2 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'The party issues a quiet warning. Your CCPPC seat is "under review." International press calls you a dissident.', effects: { hype: 4, capital: -2 }, relations: { regulator: -3, public: 3 } },
          next: 'zhang_a5_lin'
        }
      },

      zhang_a5_lin: {
        speaker: 'Lin Zhang',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { domestic_path: true, cppcc_complied: true } }, text: 'Peng. You chose Beijing. The party is happy. The company is secure. But our daughter asked me yesterday: "Why does baba never come to Zurich?" She drew you as a building. Not a person. A building.' },
          { if: { flags: { global_path: true, cppcc_dissented: true } }, text: 'Peng. You stood up to the party. The international community respects you. But the CCPPC is "reviewing" your seat. We could leave. Zurich. The institute there wants you. But you would be leaving everything you built.' },
          { if: { always: true }, text: 'Peng. Whatever you decided — chips, DeepSeek, the party — it leads here. To me. To our daughter. She sent another postcard. It says: "Come home."' }
        ],
        left: {
          text: 'We stay. China is our home. Our daughter will understand one day.',
          effects: { capital: 2, hype: 1, compute: 1, safety: -1 },
          setFlags: { chose_china: true },
          relations: { family: -4, regulator: 3, board: 3, staff: 0, public: -1 },
          tags: ['aggressive'],
          next: 'zhang_gate'
        },
        right: {
          text: 'Book the tickets. Let us be a family again. Zurich is waiting.',
          effects: { capital: -5, hype: 4, compute: -2, safety: 6 },
          setFlags: { escape_accepted: true },
          relations: { family: 10, regulator: -6, board: -5, staff: 3, public: 5, partner: 2 },
          tags: ['cautious'],
          next: 'zhang_gate'
        }
      },

      zhang_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Act I closes. Chips, DeepSeek, the party, Lin, Zurich — choices made. The sanctions tighten. The world divides. The question is not whether Z.ai survives. It is whether Zhang Peng knows which side of the line he stands on.',
        autoRoute: [
          { if: { flags: { domestic_path: true, cppcc_complied: true } }, goto: 'zhang_late_fortress' },
          { if: { flags: { escape_accepted: true } }, goto: 'zhang_late_zurich' },
          { if: { always: true }, goto: 'zhang_late_balance' }
        ]
      },

      zhang_late_fortress: {
        speaker: 'Party Advisor',
        avatar: 'regulator',
        text: 'Comrade Zhang. The party is pleased. Z.ai is now the official AI provider for three state ministries. Your chip initiative has presidential backing. But Western partners are pulling out. Your global reputation is collapsing. Was it worth it?',
        left: {
          text: 'China does not need the West. We will build our own ecosystem.',
          effects: { capital: 6, hype: 2, compute: 5, safety: -3 },
          setFlags: { full_fortress: true, domestic_champion: true },
          relations: { regulator: 8, board: 6, staff: 2, public: -2, partner: -5, family: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'We can rebuild bridges. Even fortresses have gates.',
          effects: { capital: -2, hype: 3, compute: -1, safety: 4 },
          setFlags: { bridge_rebuild: true },
          relations: { regulator: -2, board: 1, staff: 3, public: 4, partner: 3, family: 1, rival: 0 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_late_zurich: {
        speaker: 'Lin Zhang',
        avatar: 'friend',
        text: 'Peng. We are here. Zurich. The institute welcomed you. Our daughter drew you as a person this time. But every morning you check the Chinese news. You wonder if you abandoned your country. You wonder if you are a deserter. Talk to me.',
        left: {
          text: 'I am not a deserter. I am a scientist who chose freedom.',
          effects: { capital: 0, hype: 5, compute: 0, safety: 6 },
          setFlags: { zurich_peace: true },
          relations: { family: 7, public: 6, staff: 3, partner: 5, regulator: -2, board: -2 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'You are right. I need to go back. Not to the party — to the mission.',
          effects: { capital: 2, hype: 2, compute: 3, safety: 1 },
          setFlags: { return_to_china: true },
          relations: { family: -3, regulator: 2, board: 3, staff: 2, partner: -1 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_late_balance: {
        speaker: 'Mentor (Tsinghua Professor)',
        avatar: 'scientist',
        text: 'Peng. You walked the tightrope. Not a party tool, not a Western defector. The sanctions still hurt. The party still watches. But you kept Z.ai independent — or at least as independent as anything can be in this world. Is that enough?',
        left: {
          text: 'Independence is not a destination. It is a daily negotiation. That is enough.',
          effects: { capital: 2, hype: 2, compute: 2, safety: 3 },
          setFlags: { balanced_path: true },
          relations: { regulator: 3, board: 4, staff: 5, public: 3, partner: 3, family: 4, rival: 1 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'You are right. I have been too careful. It is time to take a stand.',
          effects: { capital: 3, hype: 4, compute: 2, safety: -3 },
          setFlags: { take_stand: true },
          relations: { regulator: -3, board: 2, staff: 3, public: 5, partner: -1, family: -1, rival: 2 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_loop_hub: {
        speaker: 'Z.ai Strategy Desk',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { full_fortress: true } }, text: 'Another quarter. The fortress holds. State contracts flow. The chip initiative advances. But Lin is quiet. Zurich is a memory. You built a wall so high you cannot see over it.' },
          { if: { flags: { zurich_peace: true } }, text: 'Another quarter. Zurich is peaceful. The institute thrives. Your daughter laughs. But every morning you check the Chinese tech news. You wonder what GLM-5.3 would have looked like.' },
          { if: { flags: { balanced_path: true } }, text: 'Another quarter. The balance holds. Sanctions navigated. Party placated. Family intact. But every day you ask: how long can I serve two masters?' },
          { if: { always: true }, text: 'Another quarter. Z.ai stands at the intersection of two worlds. And you stand alone at that intersection.' }
        ],
        left: {
          text: 'Deepen domestic roots. China first.',
          effects: { capital: 4, hype: -1, compute: 4, safety: -2 },
          next: [
            { if: { flags: { full_fortress: true, custom_chip: true }, minStats: { compute: 60 }, minRelations: { regulator: 70 } }, goto: 'zhang_secret_fortress' },
            { if: { flags: { domestic_path: true, cppcc_complied: true }, minRelations: { rival: 50 } }, goto: 'zhang_crisis_deepseek' },
            { if: { minTime: 14 }, goto: 'zhang_crisis_deepseek' },
            { if: { always: true }, goto: 'zhang_crisis_deepseek' }
          ]
        },
        right: {
          text: 'Build global bridges. Science without borders.',
          effects: { capital: -2, hype: 4, compute: -1, safety: 4 },
          next: [
            { if: { flags: { escape_accepted: true, zurich_peace: true }, minStats: { safety: 60 }, minRelations: { family: 65 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { benchmark_victory_published: true, cppcc_dissented: true }, minRelations: { public: 60 } }, goto: 'zhang_secret_scholar' },
            { if: { minTime: 14, maxRelations: { regulator: 35 } }, goto: 'zhang_crisis_party' },
            { if: { always: true }, goto: 'zhang_crisis_party' }
          ]
        }
      },

      // SECRET ENDINGS
      zhang_secret_fortress: {
        speaker: 'Party Secretary',
        avatar: 'regulator',
        text: 'Comrade Zhang. The custom chip is complete. GLM is the official intelligence layer of China. Z.ai is the most valuable tech company in Asia. History will record you as the father of Chinese AI independence.',
        left: {
          text: 'Independence. That was always the goal.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'domestic_fortress',
          objectiveKeys: ['card_zhang_chip']
        },
        right: {
          text: 'Independence at what cost? But it is done. Let history judge.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'domestic_fortress',
          objectiveKeys: ['card_zhang_chip']
        }
      },

      zhang_secret_silk: {
        speaker: 'Lin Zhang',
        avatar: 'friend',
        text: 'Peng. Zurich. The institute. Our daughter. You chose the open path. Z.ai still operates — remotely, globally. The party is distant. The sanctions cannot touch pure research. You are free. Truly free. And the three of us are together.',
        left: {
          text: 'This is what winning looks like. A family. A lab. A future without borders.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'silk_model',
          objectiveKeys: ['ending_silk_model']
        },
        right: {
          text: 'Freedom is heavier than I expected. But I would choose it again.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'silk_model',
          objectiveKeys: ['ending_silk_model']
        }
      },

      zhang_secret_scholar: {
        speaker: 'Tsinghua Mentor',
        avatar: 'scientist',
        text: 'Peng. You did something rare. You stood up to the party without running away. You published the benchmarks. You demanded scientific integrity. And somehow — you survived. The international community sees you as a beacon. China sees you as... complicated. But both respect you.',
        left: {
          text: 'Respect from both sides. That is more than I ever expected.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'open_scholar',
          objectiveKeys: ['card_zhang_global']
        },
        right: {
          text: 'Complicated is better than compromised. I will take it.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'open_scholar',
          objectiveKeys: ['card_zhang_global']
        }
      },

      // CRISIS NODES
      zhang_crisis_deepseek: {
        speaker: 'Board Chair',
        avatar: 'board',
        text: 'Peng. DeepSeek just released an open-source model that beats GLM on three benchmarks. The party is asking why a state-aligned lab is losing to a startup. The board wants a response plan.',
        left: {
          text: 'Accelerate GLM-5.3. Double the training compute. Beat them on raw performance.',
          effects: { capital: -4, hype: 4, compute: 5, safety: -3 },
          relations: { board: 4, staff: 2, rival: -4, regulator: 3, partner: -1 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Partner with them. Open-source our smaller models. Beat them with openness, not silence.',
          effects: { capital: -1, hype: 5, compute: 0, safety: 4 },
          relations: { board: -1, staff: 4, rival: 5, regulator: -2, public: 5 },
          tags: ['cautious'],
          setFlags: { open_source_move: true },
          next: 'zhang_loop_hub'
        }
      },

      zhang_crisis_party: {
        speaker: 'CCPPC Disciplinary Committee',
        avatar: 'regulator',
        text: 'Comrade Zhang. Your international activities have drawn attention. The party is concerned about ideological deviation. We are not accusing you. But we are asking: where do your loyalties lie?',
        left: {
          text: 'With China. Always. I will prove it with actions, not words.',
          effects: { capital: 2, hype: -4, compute: 1, safety: -3 },
          relations: { regulator: 6, board: 3, staff: -3, public: -4, partner: -2, family: -1 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'My loyalty is to science and to my family. China is my home. But my mind belongs to the world.',
          effects: { capital: -4, hype: 6, compute: -1, safety: 5 },
          relations: { regulator: -8, board: -4, staff: 6, public: 7, partner: 3, family: 4 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'The party issues a formal warning. Your CCPPC seat is suspended. International press calls it a watershed moment.', effects: { hype: 4, capital: -2 }, relations: { public: 5, regulator: -4 } },
          next: 'zhang_loop_hub'
        }
      },

      // PRESSURE NODES
      zhang_p_lin: {
        speaker: 'Lin Zhang',
        avatar: 'friend',
        text: 'Peng. Our daughter asked me today: "Does baba love his company more than us?" I did not know what to say. What should I tell her?',
        left: {
          text: 'Tell her baba loves her more than anything. And I will prove it — tonight.',
          effects: { capital: 0, hype: -1, compute: -1, safety: 2 },
          relations: { family: 8, public: 1 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Tell her baba is building a future she will be proud of. Even if it takes time.',
          effects: { capital: 1, hype: 1, compute: 2, safety: -2 },
          relations: { family: -5, board: 1 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_p_ccppc: {
        speaker: 'Party Liaison',
        avatar: 'regulator',
        text: 'Comrade Zhang. The CCPPC has noticed your global partnerships. The semiconductor deal with the Taiwanese partner. The open-source benchmarks. Some members are asking: is Z.ai a Chinese champion, or a Trojan horse?',
        left: {
          text: 'Z.ai is a Chinese company. Every deal serves the national interest.',
          effects: { capital: 2, hype: -2, compute: 1, safety: -2 },
          relations: { regulator: 6, board: 3, partner: -2 },
          tags: ['alliance'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Z.ai is a scientific company. Science has no nationality.',
          effects: { capital: -2, hype: 4, compute: 0, safety: 4 },
          relations: { regulator: -6, board: -2, staff: 4, public: 4, partner: 2 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_p_chip: {
        speaker: 'Operations Director',
        avatar: 'engineer',
        text: 'Peng. The custom chip project is behind schedule. Eighteen months delayed. Budget overrun. The party is asking questions. The board wants to cancel and buy through backchannels. What do we do?',
        left: {
          text: 'Double down on the custom chip. Half measures are worse than failure.',
          effects: { capital: -5, hype: 3, compute: 2, safety: 3 },
          relations: { regulator: 4, staff: 5, board: -3, partner: -2 },
          tags: ['aggressive'],
          setFlags: { chip_doubledown: true },
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Cancel. Use backchannels. Stay competitive. We can revisit custom silicon later.',
          effects: { capital: 3, hype: -3, compute: 3, safety: -2 },
          relations: { regulator: -4, staff: -3, board: 4, partner: 4 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_p_deepseek: {
        speaker: 'Tech Reporter',
        avatar: 'journalist',
        text: 'Peng. DeepSeek just released a model that matches GLM-5.2 and they open-sourced everything. Global AI Twitter is celebrating them as "the real innovators." How do you respond?',
        left: {
          text: 'Competition makes us better. Good for them. We will ship something bigger.',
          effects: { capital: 1, hype: 3, compute: 2, safety: 0 },
          relations: { rival: -2, public: 3, staff: 2, board: 2 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Open source our research. If openness is the game, we will play it better.',
          effects: { capital: -2, hype: 5, compute: -1, safety: 3 },
          relations: { rival: 4, public: 6, staff: 3, board: -2 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_p_exodus: {
        speaker: 'HR Director',
        avatar: 'friend',
        text: 'Peng. Five senior engineers just resigned. They are going to DeepSeek and Western labs. They say Z.ai has become too political — too many party meetings, not enough research freedom.',
        left: {
          text: 'Create an independent research track. No party oversight. Pure science.',
          effects: { capital: -3, hype: 4, compute: -1, safety: 5 },
          relations: { staff: 7, public: 4, regulator: -2, board: -1 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'We are a Chinese company. They knew the context when they joined.',
          effects: { capital: 2, hype: -3, compute: 1, safety: -3 },
          relations: { staff: -7, board: 2, regulator: 3, partner: -1 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        }
      },

      zhang_p_media: {
        speaker: 'Lin Zhang',
        avatar: 'friend',
        text: 'Peng. The international press is calling you "the conscience of Chinese AI." The party is calling the same articles "foreign propaganda." You are being turned into a symbol by both sides. This is dangerous.',
        left: {
          text: 'I did not ask to be a symbol. I just want to build.',
          effects: { capital: 0, hype: -3, compute: 1, safety: 4 },
          relations: { public: -2, family: 3, staff: 2, regulator: 1 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'If they need a symbol, I will be a good one. Better than the alternatives.',
          effects: { capital: 0, hype: 7, compute: -1, safety: -2 },
          relations: { public: 8, regulator: -4, family: -1, board: 2 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'Your profile becomes global. The party accelerates its review of your CCPPC seat.', effects: { hype: 3, capital: -1 }, relations: { regulator: -3, public: 4 } },
          next: 'zhang_loop_hub'
        }
      }
    }
  },
};

if (typeof window !== 'undefined') {
  window.STORY_DATA = STORY_DATA;
}
