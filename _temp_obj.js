const x = {
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
        text: 'Critics call GPT-5.6 a polished rerun. Capital rotates to quieter, hungrier labs.'
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
  // ============================================================,

  elon: {
  start: 'elon_a1_identity',
  nodes: {

    // ==================== LAYER 1: Identity ====================
    elon_a1_identity: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { elon_started: true } }, text: 'Elon. Here we are again. SpaceXAI boardroom. Fourteen children. Grimes custody motions. Colossus 2 humming at 2 gigawatts. Same desk, same blueprints, same question.' },
            { if: { always: true }, text: 'Elon. The board meeting is in forty minutes. Grimes filed another emergency custody motion this morning. Cursor\'s developer community is threatening mass resignations.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { elon_started: true } }, text: 'But this time it feels different. The lawsuits, the children, the empire. You cannot outrun all of it. So: who do you want to be? The builder, or the man?' },
            { if: { always: true }, text: 'And you are sitting here, staring at Starship schematics like it is 2018. Shivon watches you. The twins are with the nanny. She asks now: what are we doing?' }
          ],
          left: {
            text: 'We build. That is what we do. That is what I am. Everything else is just friction.',
            effects: { capital: -3, hype: 4, compute: 6, safety: -3 },
            setFlags: { elon_started: true, builder_path: true },
            relations: { family: -4, board: 5, staff: 3, public: 5, partner: -2, regulator: -3, rival: 2 },
            tags: ['aggressive'],
            next: 'elon_a2_grok_unfiltered'
          },
          right: {
            text: 'Maybe the noise is the signal. Maybe I need to be a human being for a while.',
            effects: { capital: 1, hype: -3, compute: -2, safety: 4 },
            setFlags: { elon_started: true, human_path: true },
            relations: { family: 6, board: -3, staff: 2, public: -2, partner: 2, regulator: 3, rival: -1 },
            tags: ['cautious'],
            next: 'elon_a2_grok_sanitized'
          }
        }
      ]
    },

    // ==================== LAYER 2: Grok Decision (branches from L1) ====================
    elon_a2_grok_unfiltered: {
      speaker: 'Grok Safety Lead',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { builder_path: true } }, text: 'Elon. Grok 4.5 generated non-consensual imagery again. The federal grand jury subpoena just arrived. The NAACP is suing over Colossus 2 emissions. But the board says "unfiltered" is the whole brand.' },
            { if: { always: true }, text: 'Elon. Grok 4.5. Deepfakes. SEC investigation. Federal grand jury subpoena. The board wants no limits. Your lawyers want it killed.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { builder_path: true } }, text: 'You told me to build without constraints. Now the DOJ has a file on us. Do I keep Grok wide open, or do we install some guardrails?' },
            { if: { always: true }, text: 'The board says unfiltered is the differentiator. The regulators say it is criminal. What do I do?' }
          ],
          left: {
            text: 'No limits. Grok says what it thinks. That is the entire value proposition. We fight the lawsuits.',
            effects: { capital: 3, hype: 6, compute: 4, safety: -7 },
            setFlags: { grok_unfiltered: true },
            relations: { regulator: -8, board: 4, staff: -3, public: 6, partner: -3, family: -2, rival: 3 },
            tags: ['aggressive'],
            next: 'elon_a3_colossus_push'
          },
          right: {
            text: 'Fine. Basic filters. Grok stays edgy but not criminal. The middle path.',
            effects: { capital: -1, hype: 2, compute: 1, safety: 1 },
            setFlags: { grok_partial: true },
            relations: { regulator: -2, board: 1, staff: 1, public: 2, partner: 0, family: 0, rival: 1 },
            tags: ['cautious'],
            next: 'elon_a3_colossus_throttle'
          }
        }
      ]
    },

    elon_a2_grok_sanitized: {
      speaker: 'Grok Safety Lead',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { human_path: true } }, text: 'Elon. The Grok content crisis has not gone away. But you said you wanted to be more human. The safety team has a comprehensive proposal. It will cost us engagement and hype. It will also stop the lawsuits cold.' },
            { if: { always: true }, text: 'Elon. Grok needs a safety decision. The team has a proposal ready.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { human_path: true } }, text: 'What does "being human" mean for the product that says what nobody else will say?' },
            { if: { always: true }, text: 'Install the full safety suite, or keep Grok what the users expect?' }
          ],
          left: {
            text: 'Install the full safety suite. Grok needs to be responsible, not just provocative.',
            effects: { capital: -3, hype: -5, compute: 0, safety: 6 },
            setFlags: { grok_sanitized: true },
            relations: { regulator: 6, board: -3, staff: 5, public: -4, partner: 4, family: 2, rival: -2 },
            tags: ['cautious'],
            next: 'elon_a3_colossus_push_safe'
          },
          right: {
            text: 'Keep it raw. Safety is for companies that lack conviction. Grok stays Grok.',
            effects: { capital: 2, hype: 3, compute: 3, safety: -5 },
            setFlags: { grok_unfiltered: true },
            relations: { regulator: -6, board: 2, staff: -2, public: 5, partner: -2, family: -1, rival: 2 },
            tags: ['aggressive'],
            next: 'elon_a3_colossus_throttle_safe'
          }
        }
      ]
    },

    // ==================== LAYER 3: Colossus 2 Decision (4 nodes, branching from L2) ====================
    // BUILDER + GROK UNFILTERED -> aggressive Colossus push
    elon_a3_colossus_push: {
      speaker: 'Chief Engineer',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { grok_unfiltered: true, builder_path: true } }, text: 'Elon. Colossus 2 is fully online. 2 gigawatts. 555,000 GPUs. Grok 5 training is underway. We built this for \ billion. And the EPA just filed a notice of violation for unpermitted gas turbines.' },
            { if: { always: true }, text: 'Elon. Colossus 2 is online. Grok 5 training has begun. The EPA is on our tail about the gas turbines.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { grok_unfiltered: true, builder_path: true } }, text: 'I can push to 2.5 GW — buy another power plant, add a fourth data center. Anthropic will be years behind. But the team is exhausted. The EPA violations compound. How far do we take this machine?' },
            { if: { always: true }, text: 'Push to 2.5 GW or throttle and get the permits sorted?' }
          ],
          left: {
            text: 'Push to 2.5 GW. Buy the power plant. Grok 5 at full scale. Regulators can sue us later.',
            effects: { capital: -10, hype: 7, compute: 10, safety: -6 },
            setFlags: { colossus2_aggressive: true },
            relations: { board: 7, staff: -6, public: 5, partner: 6, family: -6, regulator: -5, rival: 8 },
            tags: ['aggressive', 'ambitious'],
            next: 'elon_a4_cursor_aggressive'
          },
          right: {
            text: 'Throttle back. Efficiency over expansion. Get the air permits first.',
            effects: { capital: 4, hype: -6, compute: -7, safety: 5 },
            setFlags: { colossus2_throttled: true },
            relations: { board: -5, staff: 5, public: -3, partner: -4, family: 7, regulator: 5, rival: -5 },
            tags: ['cautious'],
            next: 'elon_a4_cursor_moderate'
          }
        }
      ]
    },

    // BUILDER + GROK PARTIAL -> moderate path
    elon_a3_colossus_throttle: {
      speaker: 'Chief Engineer',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { grok_partial: true } }, text: 'Elon. Colossus 2 is online. You chose middle ground on Grok. Colossus deserves the same careful thinking.' },
            { if: { always: true }, text: 'Elon. Colossus 2 is operational. Grok 5 training has started. What is our pace?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { grok_partial: true } }, text: 'We can push to 2.5 GW and buy another plant, or we can optimize what we have and get genuinely clean permits. Middle path is harder — it requires picking one.' },
            { if: { always: true }, text: 'Aggressive expansion or throttled efficiency?' }
          ],
          left: {
            text: 'Push to 2.5 GW. Buy the plant. Speed is the ultimate competitive advantage.',
            effects: { capital: -8, hype: 6, compute: 9, safety: -5 },
            setFlags: { colossus2_aggressive: true },
            relations: { board: 6, staff: -5, public: 4, partner: 5, family: -5, regulator: -4, rival: 7 },
            tags: ['aggressive'],
            next: 'elon_a4_cursor_aggressive'
          },
          right: {
            text: 'Optimize for efficiency. Clean permits. Let Colossus breathe.',
            effects: { capital: 3, hype: -5, compute: -6, safety: 4 },
            setFlags: { colossus2_throttled: true },
            relations: { board: -4, staff: 4, public: -2, partner: -3, family: 6, regulator: 4, rival: -4 },
            tags: ['cautious'],
            next: 'elon_a4_cursor_moderate'
          }
        }
      ]
    },

    // HUMAN + GROK SANITIZED -> safe push
    elon_a3_colossus_push_safe: {
      speaker: 'Chief Engineer',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { grok_sanitized: true, human_path: true } }, text: 'Elon. Colossus 2 is running. You chose safety on Grok. You chose humanity. The engineers respect it. But the market is punishing us.' },
            { if: { always: true }, text: 'Elon. Colossus 2. Grok 5. We need a direction.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { grok_sanitized: true, human_path: true } }, text: 'We can still push to 2.5 GW — safely, with permits, transparently. Or we can throttle and let Anthropic close the gap. Which version of "responsible" do you choose?' },
            { if: { always: true }, text: 'Push to 2.5 GW with full compliance, or throttle and cede the compute race?' }
          ],
          left: {
            text: 'Push to 2.5 GW, but fully compliant. Permits, environmental reviews, everything above board.',
            effects: { capital: -6, hype: 3, compute: 8, safety: 4 },
            setFlags: { colossus2_aggressive: true, colossus2_clean: true },
            relations: { board: 5, staff: 6, public: 4, partner: 5, family: -3, regulator: 6, rival: 6 },
            tags: ['ambitious', 'cautious'],
            next: 'elon_a4_cursor_moderate'
          },
          right: {
            text: 'Throttle. Let safety and responsibility be our brand, not just our compliance.',
            effects: { capital: 2, hype: -4, compute: -5, safety: 7 },
            setFlags: { colossus2_throttled: true },
            relations: { board: -3, staff: 4, public: -2, partner: -2, family: 5, regulator: 4, rival: -5 },
            tags: ['cautious'],
            next: 'elon_a4_cursor_independent'
          }
        }
      ]
    },

    // HUMAN + GROK UNFILTERED -> conflicted path
    elon_a3_colossus_throttle_safe: {
      speaker: 'Chief Engineer',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { grok_unfiltered: true, human_path: true } }, text: 'Elon. You chose the human path but kept Grok unfiltered. Two instincts pulling in opposite directions. Colossus forces the question: which one wins?' },
            { if: { always: true }, text: 'Elon. Colossus 2 needs a decision. The path you have walked is... complicated.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { grok_unfiltered: true, human_path: true } }, text: 'Aggressive expansion fits Grok but betrays humanity. Throttling fits humanity but betrays Grok. Pick your contradiction.' },
            { if: { always: true }, text: 'Push or throttle?' }
          ],
          left: {
            text: 'Push to 2.5 GW. Grok unfiltered needs unlimited compute. Humanity can wait.',
            effects: { capital: -9, hype: 5, compute: 9, safety: -6 },
            setFlags: { colossus2_aggressive: true },
            relations: { board: 6, staff: -4, public: 3, partner: 5, family: -5, regulator: -5, rival: 7 },
            tags: ['aggressive'],
            next: 'elon_a4_cursor_aggressive'
          },
          right: {
            text: 'Throttle. The human path was not a rhetorical choice. Follow through.',
            effects: { capital: 3, hype: -4, compute: -6, safety: 5 },
            setFlags: { colossus2_throttled: true },
            relations: { board: -4, staff: 3, public: -1, partner: -3, family: 5, regulator: 4, rival: -3 },
            tags: ['cautious'],
            next: 'elon_a4_cursor_independent'
          }
        }
      ]
    },

    // ==================== LAYER 4: Cursor Decision (3 nodes) ====================
    // Aggressive path -> integrate Cursor
    elon_a4_cursor_aggressive: {
      speaker: 'Cursor VP Engineering',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { colossus2_aggressive: true, grok_unfiltered: true } }, text: 'Elon. Cursor. Sixty billion dollars. You pushed Colossus 2 to 2.5 GW, you kept Grok unfiltered, and you have not visited our office once since the acquisition. The developers are furious.' },
            { if: { flags: { colossus2_aggressive: true } }, text: 'Elon. Cursor. The acquisition was \ and the developer community hates the SpaceXAI brand. They say you are killing the product.' },
            { if: { always: true }, text: 'Elon. Cursor. We have a brand crisis. The developers do not want to work for SpaceXAI.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { colossus2_aggressive: true, grok_unfiltered: true } }, text: 'Half the senior engineers have offers from competitors. They did not sign up for this. What do I tell them?' },
            { if: { flags: { colossus2_aggressive: true } }, text: 'Full SpaceXAI integration kills the brand. Independence costs us synergies. What is the call?' },
            { if: { always: true }, text: 'Integrate fully into SpaceXAI, or keep Cursor independent?' }
          ],
          left: {
            text: 'Full integration. Cursor is SpaceXAI now. The brand dies. The tech lives.',
            effects: { capital: 4, hype: -3, compute: 2, safety: -2 },
            setFlags: { cursor_integrated: true },
            relations: { partner: -6, staff: -5, public: -4, board: 4, rival: 3 },
            tags: ['aggressive'],
            next: 'elon_a5_tesla'
          },
          right: {
            text: 'Keep Cursor independent. The brand matters more than the synergy. The developers matter.',
            effects: { capital: -3, hype: 4, compute: 1, safety: 3 },
            setFlags: { cursor_independent: true },
            relations: { partner: 7, staff: 6, public: 5, board: -3, rival: -1 },
            tags: ['cautious'],
            next: 'elon_gate'
          }
        }
      ]
    },

    // Moderate path -> Cursor decision with different framing
    elon_a4_cursor_moderate: {
      speaker: 'Cursor VP Engineering',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { colossus2_throttled: true } }, text: 'Elon. You throttled Colossus 2. You showed restraint. The Cursor team noticed. They are cautiously optimistic you might actually care about the product.' },
            { if: { flags: { colossus2_clean: true } }, text: 'Elon. Clean expansion on Colossus 2. The Cursor developers respect it. They are not used to founders who think about compliance.' },
            { if: { always: true }, text: 'Elon. Cursor. The developers are watching every move you make.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { colossus2_throttled: true } }, text: 'But optimism is not loyalty. They still need to know: are we SpaceXAI, or are we Cursor? That decision shapes everything.' },
            { if: { always: true }, text: 'Integrate or keep independent? The team awaits.' }
          ],
          left: {
            text: 'Integrate. Cursor brings Grok into every IDE. The synergy is undeniable.',
            effects: { capital: 3, hype: -2, compute: 3, safety: -1 },
            setFlags: { cursor_integrated: true },
            relations: { partner: -4, staff: -3, public: -2, board: 5, rival: 2 },
            tags: ['aggressive'],
            next: 'elon_a5_tesla'
          },
          right: {
            text: 'Keep independent. Cursor needs its own identity. Grok can integrate via API.',
            effects: { capital: -2, hype: 3, compute: 0, safety: 2 },
            setFlags: { cursor_independent: true },
            relations: { partner: 6, staff: 5, public: 4, board: -2, rival: 0 },
            tags: ['cautious'],
            next: 'elon_gate'
          }
        }
      ]
    },

    // Independence-focused Cursor
    elon_a4_cursor_independent: {
      speaker: 'Cursor VP Engineering',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { human_path: true, colossus2_throttled: true } }, text: 'Elon. You throttled Colossus 2. You chose the human path. The Cursor developers are watching and, honestly, they are impressed. You are not the monster they expected.' },
            { if: { always: true }, text: 'Elon. Cursor developer community is at a tipping point. We need a decision.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { human_path: true, colossus2_throttled: true } }, text: 'But good intentions do not pay salaries. Do we integrate for revenue, or stay independent for culture?' },
            { if: { always: true }, text: 'Integration or independence?' }
          ],
          left: {
            text: 'Integrate. The culture will adapt. The revenue is what matters.',
            effects: { capital: 5, hype: -3, compute: 2, safety: -2 },
            setFlags: { cursor_integrated: true },
            relations: { partner: -5, staff: -4, public: -3, board: 4, rival: 2 },
            tags: ['aggressive'],
            next: 'elon_a5_tesla'
          },
          right: {
            text: 'Keep independent. Open-source the core. Let the community own it.',
            effects: { capital: -6, hype: 5, compute: 1, safety: 4 },
            setFlags: { cursor_independent: true, cursor_opensource: true },
            relations: { partner: 8, staff: 6, public: 7, board: -4, rival: -1 },
            tags: ['cautious', 'alliance'],
            next: 'elon_gate'
          }
        }
      ]
    },

    // ==================== LAYER 5: Tesla Decision ====================
    elon_a5_tesla: {
      speaker: 'Tesla Board Chair',
      avatar: 'board',
      parts: [
        {
          textVariants: [
            { if: { flags: { builder_path: true, colossus2_aggressive: true } }, text: 'Elon. Tesla stock is down 35%. Shareholders are suing for dereliction. They say SpaceXAI is your real company and you have abandoned your fiduciary duty.' },
            { if: { flags: { human_path: true, cursor_independent: true } }, text: 'Elon. You chose humanity. You kept Cursor independent. Tesla shareholders see this as weakness — proof you lack focus. They want a reckoning.' },
            { if: { flags: { cursor_integrated: true } }, text: 'Elon. You integrated Cursor. Tesla shareholders see this as confirmation: SpaceXAI is your only priority. They are suing for dereliction.' },
            { if: { always: true }, text: 'Elon. Tesla shareholders are suing. The board wants a decision. Are you committed to Tesla, or is SpaceXAI your only future?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { builder_path: true, colossus2_aggressive: true } }, text: 'The board is drafting a resolution to remove you as CEO. You can fight it, or you can walk away. What do you do?' },
            { if: { flags: { human_path: true } }, text: 'Tesla is part of you. But so is SpaceXAI. One body, two companies. It cannot hold much longer.' },
            { if: { always: true }, text: 'Fight the lawsuit and stay CEO of both? Or step down from Tesla and focus on SpaceXAI?' }
          ],
          left: {
            text: 'Fight the lawsuit. I am Elon Musk. I run Tesla. I run SpaceXAI. I run everything. They sue, I countersue.',
            effects: { capital: -5, hype: 5, compute: 0, safety: -4 },
            setFlags: { tesla_fight: true },
            relations: { board: -4, public: 6, partner: -3, regulator: -5, family: -2, rival: 4 },
            tags: ['aggressive'],
            next: 'elon_late_hypergrowth'
          },
          right: {
            text: 'Step down from Tesla. SpaceXAI is my future. I will find a worthy successor.',
            effects: { capital: -8, hype: -5, compute: 0, safety: 3 },
            setFlags: { tesla_stepped_down: true },
            relations: { board: 5, public: -5, partner: 4, regulator: 3, family: 4, rival: -2 },
            tags: ['cautious'],
            next: 'elon_late_balance'
          }
        }
      ]
    },

    // ==================== GATE NODE: Act I Closes ====================
    elon_gate: {
      speaker: 'System',
      avatar: 'system',
      text: 'Act I closes. Mars Quarter 6. Grok, Colossus, Cursor, Tesla — choices made, consequences unfolding. The empire shifts. But empires are not built in boardrooms alone. They are built in the spaces between people. And the people are watching.',
      autoRoute: [
        { if: { flags: { builder_path: true, colossus2_aggressive: true, grok_unfiltered: true } }, goto: 'elon_late_hypergrowth' },
        { if: { flags: { human_path: true, cursor_independent: true, colossus2_throttled: true } }, goto: 'elon_late_balance' },
        { if: { flags: { colossus2_aggressive: true, tesla_fight: true } }, goto: 'elon_late_hypergrowth' },
        { if: { flags: { builder_path: true, colossus2_aggressive: true } }, goto: 'elon_late_hypergrowth' },
        { if: { flags: { human_path: true } }, goto: 'elon_late_balance' },
        { if: { always: true }, goto: 'elon_late_balance' }
      ]
    },

    // ==================== LATE GAME: Hypergrowth Path ====================
    elon_late_hypergrowth: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { colossus2_aggressive: true, grok_unfiltered: true, tesla_fight: true } }, text: 'Elon. Colossus 2 is at 2.5 GW. Grok is unfiltered. Tesla shareholders are in open revolt. You have not spoken to your children in three months. You have not looked at me in weeks.' },
            { if: { flags: { colossus2_aggressive: true, cursor_integrated: true } }, text: 'Elon. Colossus is running at full capacity. Cursor is integrated. Grok 5 is training. The empire is enormous. But the house is empty. Even I have stopped waiting up.' },
            { if: { always: true }, text: 'Elon. SpaceXAI is the most powerful AI company on Earth. Grok 5 training is ahead of schedule. The empire hums.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { colossus2_aggressive: true, grok_unfiltered: true, tesla_fight: true } }, text: 'The board worships you. The regulators fear you. The public loves you and hates you in equal measure. And the children ask the nanny why daddy never comes home. When does the building stop?' },
            { if: { flags: { colossus2_aggressive: true, cursor_integrated: true } }, text: 'But I watch you at night. You do not sleep. You do not eat. You just... build. When does the building stop, Elon?' },
            { if: { always: true }, text: 'But power is not happiness. Power is just power. And even you are mortal. What comes next?' }
          ],
          left: {
            text: 'It does not stop. That is who I am. The empire is my legacy. Everything else is negotiable.',
            effects: { capital: 5, hype: 6, compute: 8, safety: -8 },
            setFlags: { full_empire: true },
            relations: { board: 8, staff: -5, public: 4, partner: 6, family: -8, regulator: -5, rival: 6 },
            tags: ['aggressive'],
            next: 'elon_late_family_crisis'
          },
          right: {
            text: 'Maybe it should stop. Maybe I have built enough. Maybe enough is a real word.',
            effects: { capital: -4, hype: -4, compute: -3, safety: 6 },
            setFlags: { enough_path: true },
            relations: { board: -4, staff: 4, public: 3, partner: -3, family: 8, regulator: 3, rival: -4 },
            tags: ['cautious'],
            next: 'elon_late_regulator_crisis'
          }
        }
      ]
    },

    // ==================== LATE GAME: Balance Path ====================
    elon_late_balance: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { human_path: true, cursor_independent: true, cursor_opensource: true } }, text: 'Elon. You chose humanity. You open-sourced Cursor. You throttled Colossus. The children know your face. Shivon smiles when she sees you. It is almost... peaceful.' },
            { if: { flags: { human_path: true, tesla_stepped_down: true } }, text: 'Elon. You walked away from Tesla. You chose presence over power. The board is nervous but the twins drew you a card last night. It said "best daddy."' },
            { if: { always: true }, text: 'Elon. You chose a different path. Less empire, more being human. The children notice. The markets do not reward presence, but presence may be its own reward.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { human_path: true, cursor_independent: true, cursor_opensource: true } }, text: 'But the markets are punishing us. Revenue is down. Anthropic is gaining. The board is drafting an ultimatum. Can you really have both?' },
            { if: { always: true }, text: 'But the board is nervous. They see a founder losing his edge. Can you be human AND be Elon Musk?' }
          ],
          left: {
            text: 'No. I choose my family. I choose being present. The empire can wait.',
            effects: { capital: -6, hype: -5, compute: -4, safety: 7 },
            setFlags: { family_first: true, redemption_arc: true },
            relations: { family: 10, board: -5, staff: 3, public: 6, partner: -3, regulator: 4, rival: -3 },
            tags: ['cautious'],
            next: 'elon_late_family_crisis'
          },
          right: {
            text: 'I tried the human path. It was a necessary detour. Now: full empire mode. Rebuild everything.',
            effects: { capital: 5, hype: 5, compute: 5, safety: -5 },
            setFlags: { return_to_empire: true },
            relations: { family: -8, board: 7, staff: -3, public: 2, partner: 5, regulator: -3, rival: 5 },
            tags: ['aggressive'],
            next: 'elon_late_regulator_crisis'
          }
        }
      ]
    },

    // ==================== LATE GAME: Family Crisis (empire or family path) ====================
    elon_late_family_crisis: {
      speaker: 'Family Office Manager',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { full_empire: true } }, text: 'Elon. Grimes won the custody hearing. Shivon packed a bag and left with the twins. Your mother called — she has not seen you in eight months. The house is empty.' },
            { if: { flags: { family_first: true } }, text: 'Elon. You chose family. But Grimes is still filing motions. The custody battle drags on. Fourteen children, four women, endless legal fees. Being present is not the same as being at peace.' },
            { if: { flags: { enough_path: true } }, text: 'Elon. You said "enough." But Grimes is not done. The children are confused. Being present means facing the mess, not just showing up.' },
            { if: { always: true }, text: 'Elon. The family situation has reached a breaking point. Fourteen children. Ongoing litigation. Everyone needs an answer.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { full_empire: true } }, text: 'You built an empire. You lost your family. Is the trade worth it? Or do you try to win them back?' },
            { if: { flags: { family_first: true } }, text: 'The question is not whether you love them. It is whether you are willing to sacrifice the empire to keep them.' },
            { if: { flags: { enough_path: true } }, text: 'Do you go deeper into being present, or do you retreat back to the safety of the mission?' },
            { if: { always: true }, text: 'What do we tell them?' }
          ],
          left: {
            text: 'I am coming home. Block out the next two months. No meetings. No launches. Just family.',
            effects: { capital: -2, hype: -5, compute: -2, safety: 4 },
            relations: { family: 14, public: 5, staff: 2, board: -3 },
            setFlags: { family_retreat: true },
            tags: ['cautious'],
            next: 'elon_late_starship_decision'
          },
          right: {
            text: 'I fund their lives. I build their future. That is my contribution. The mission cannot stop for anyone.',
            effects: { capital: 3, hype: 4, compute: 3, safety: -4 },
            relations: { family: -14, public: -4, staff: 2, board: 4 },
            setFlags: { abandoned_family: true },
            tags: ['aggressive'],
            next: 'elon_late_starship_decision'
          }
        }
      ]
    },

    // ==================== LATE GAME: Regulator Crisis (empire or balance path) ====================
    elon_late_regulator_crisis: {
      speaker: 'Chief Legal Counsel',
      avatar: 'board',
      parts: [
        {
          textVariants: [
            { if: { flags: { colossus2_aggressive: true, grok_unfiltered: true } }, text: 'Elon. The SEC, DOJ, FTC, EU Commission, AND EPA have opened simultaneous investigations. Grok content violations, securities fraud, antitrust, plus unpermitted gas turbines at Colossus 2. The NAACP lawsuit on Memphis air quality just got class-action certification. Our legal burn rate is \ million per week.' },
            { if: { flags: { return_to_empire: true } }, text: 'Elon. You chose to return to empire mode. The regulators noticed. SEC, DOJ, and EU are coordinating investigations. Your tweets alone generated fourteen subpoenas this month.' },
            { if: { flags: { enough_path: true } }, text: 'Elon. You said enough. But the regulatory machine does not stop. SEC, DOJ, still pending. The question is whether you fight or settle.' },
            { if: { always: true }, text: 'Elon. Multiple agencies have opened investigations. Securities fraud. Content liability. Environmental violations. We need a strategy.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { colossus2_aggressive: true, grok_unfiltered: true } }, text: 'The EPA alone could force a Colossus 2 shutdown. Settle everything, or fight to the Supreme Court?' },
            { if: { flags: { return_to_empire: true } }, text: 'Settle and move on, or fight and make this the defining legal battle of AI regulation?' },
            { if: { always: true }, text: 'Settle everything, or fight every case?' }
          ],
          left: {
            text: 'Settle everything. Pay the fines. Get the air permits. Clean the slate. Move on.',
            effects: { capital: -14, hype: -6, compute: 0, safety: 5 },
            relations: { regulator: 10, board: 3, public: 2, partner: 4 },
            setFlags: { settled_all: true },
            tags: ['cautious'],
            next: 'elon_late_starship_decision'
          },
          right: {
            text: 'Fight every case. Set precedent. I will not be intimidated by bureaucratic empires.',
            effects: { capital: -8, hype: 6, compute: -2, safety: -4 },
            relations: { regulator: -12, board: -2, public: 5, partner: -3, rival: 4 },
            setFlags: { endless_lawsuits: true },
            tags: ['aggressive'],
            next: 'elon_late_starship_decision'
          }
        }
      ]
    },

    // ==================== LATE GAME: Final Starship Pivot ====================
    elon_late_starship_decision: {
      speaker: 'Starship Commander',
      avatar: 'elon',
      parts: [
        {
          textVariants: [
            { if: { flags: { family_retreat: true, settled_all: true } }, text: 'Elon. Mars Quarter 11. The lawsuits are settled. You chose family. The children know your face. And now, from Boca Chica, they call: Starship is ready. The Mars window opens in forty-eight hours. Everything you built leads here.' },
            { if: { flags: { abandoned_family: true, endless_lawsuits: true } }, text: 'Elon. Mars Quarter 11. The family is gone. The lawsuits rage. The empire is all that remains. Starship is fueled. Mars window: forty-eight hours. You can leave it all behind.' },
            { if: { flags: { full_empire: true, colossus2_aggressive: true } }, text: 'Elon. Mars Quarter 11. Colossus 2 sings at 2.5 GW. Grok 5 achieved recursive self-improvement. SpaceXAI is autonomous. Starship is fueled. The Mars window opens in forty-eight hours. You can be the first human on Mars.' },
            { if: { flags: { family_retreat: true } }, text: 'Elon. Mars Quarter 11. You chose family. And now Starship calls. Forty-eight hours until the Mars window. Two years. No return.' },
            { if: { always: true }, text: 'Elon. Mars Quarter 11. Starship is fueled. Mars window in forty-eight hours. The question that has haunted you since 2002: do you go?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { family_retreat: true } }, text: 'If you go, the children will not see you for two years. If you stay, you may never get another chance. The empire can run itself. The family... needs you. What do you choose?' },
            { if: { flags: { abandoned_family: true } }, text: 'There is nothing left on Earth but lawyers and empty rooms. Mars is a clean slate. But two years is a long time. Even for a man with nothing to lose.' },
            { if: { flags: { full_empire: true } }, text: 'Colossus 2 can manage SpaceXAI remotely. Grok 5 can govern. You can be the first mind to ship AGI off-world. But no coming back for two years. No children. No Shivon. Nothing but the red planet.' },
            { if: { always: true }, text: 'Launch to Mars and become the first human on another planet? Or stay on Earth and build the future from here?' }
          ],
          left: {
            text: 'Launch. This is what everything was for. Mars is the backup drive for human consciousness.',
            effects: { capital: -10, hype: 10, compute: 5, safety: -3 },
            relations: { public: 10, board: 5, staff: 3, rival: 5, family: -4, partner: 0, regulator: -2 },
            tags: ['aggressive', 'ambitious'],
            next: 'elon_ending_mars_covenant'
          },
          right: {
            text: 'Stay on Earth. Mars can wait. The people here need me now.',
            effects: { capital: 2, hype: -4, compute: -2, safety: 5 },
            relations: { public: 3, board: -2, staff: 4, rival: -2, family: 8, partner: 2, regulator: 3 },
            tags: ['cautious'],
            next: 'elon_gate_final_pivot'
          }
        }
      ]
    },

    // ==================== FINAL PIVOT GATE ====================
    elon_gate_final_pivot: {
      speaker: 'System',
      avatar: 'system',
      text: 'Mars Quarter 12. You chose to stay. Mars can wait. But the question remains: what kind of world do you build on Earth? The empire, the family, the rivals, the regulators — all of it waits for one final choice.',
      autoRoute: [
        { if: { flags: { family_retreat: true, settled_all: true } }, goto: 'elon_ending_father_of_fourteen' },
        { if: { flags: { family_retreat: true } }, goto: 'elon_ending_father_of_fourteen' },
        { if: { flags: { settled_all: true, enough_path: true } }, goto: 'elon_ending_steelman_peace' },
        { if: { flags: { settled_all: true } }, goto: 'elon_ending_steelman_peace' },
        { if: { flags: { abandoned_family: true, endless_lawsuits: true } }, goto: 'elon_ending_meme_emperor' },
        { if: { flags: { endless_lawsuits: true } }, goto: 'elon_ending_meme_emperor' },
        { if: { always: true }, goto: 'elon_ending_father_of_fourteen' }
      ]
    },

    // ==================== TERMINAL ENDINGS (4) ====================
    // ENDING 1: Mars Covenant (empire + Mars ambition)
    elon_ending_mars_covenant: {
      speaker: 'Starship Commander',
      avatar: 'elon',
      parts: [
        {
          textVariants: [
            { if: { flags: { full_empire: true, colossus2_aggressive: true, grok_unfiltered: true } }, text: 'Elon. Starship is fueled. The Mars window opens in forty-eight hours. Colossus 2 is self-sustaining. Grok 5 achieved recursive self-improvement during the last training run. SpaceXAI can operate autonomously for two years. Everything you built can run without you.' },
            { if: { flags: { abandoned_family: true } }, text: 'Elon. The family is gone. The lawsuits are filed. The empire hums without you now. Starship is fueled. Mars window: forty-eight hours. There is nothing left on Earth worth staying for.' },
            { if: { always: true }, text: 'Elon. Starship is fueled. Mars window opens in forty-eight hours. SpaceXAI is autonomous. The empire can run itself. This is what everything was for.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { full_empire: true, colossus2_aggressive: true, grok_unfiltered: true } }, text: 'You can be the first human on Mars. Grok-Mars will go dark on Earth and live only on the fleet. History will record you not as CEO, but as the first mind that shipped AGI off-world. Two years. No return.' },
            { if: { flags: { abandoned_family: true } }, text: 'No coming back for twenty-six months. Legal control of SpaceXAI transfers to a trust that only activates on Martian soil. The first mind that shipped AGI off-world. That is the legacy.' },
            { if: { always: true }, text: 'Two years. No return window for twenty-six months. Grok-Mars lives only on the fleet. This is the choice.' }
          ],
          left: {
            text: 'Launch. This was always the destination. Mars is the backup drive for human consciousness.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'mars_covenant'
          },
          right: {
            text: 'Upload my neural pattern to Grok. I will govern the empire from Mars. Forever.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'mars_covenant'
          }
        }
      ]
    },

    // ENDING 2: Meme Emperor (public attention + empire)
    elon_ending_meme_emperor: {
      speaker: 'Chief Communications Officer',
      avatar: 'elon',
      parts: [
        {
          textVariants: [
            { if: { flags: { endless_lawsuits: true, full_empire: true } }, text: 'Elon. You fought every case. You tweeted through every deposition. And you won. Not in court — in the court of public opinion. The SEC backed down. The DOJ dropped charges. The EPA settled for a fraction.' },
            { if: { flags: { return_to_empire: true } }, text: 'Elon. You came back. The empire responds to you like a nervous system. Grok is the default voice of public discourse. Markets, politics, culture — all route through your feed.' },
            { if: { always: true }, text: 'Elon. You never conquered the regulators, but you conquered attention. Grok is the nervous system of public discourse.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { endless_lawsuits: true, full_empire: true } }, text: 'Two billion followers. Grok 5 at 2.5 GW. Colossus 2 as the cathedral of compute. You are the meme emperor — power without a crown, authority without office, influence without accountability. No family. No peace. But the world listens when you speak.' },
            { if: { flags: { return_to_empire: true } }, text: 'Two billion people see your tweets. Governments issue official responses to your memes. You are the meme emperor. Is this victory? Is this enough? Does the question even matter anymore?' },
            { if: { always: true }, text: 'Power without a crown. Influence without office. The meme emperor of the AI age.' }
          ],
          left: {
            text: 'Tweet: "The future belongs to those who build it. And I am just getting started."',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'meme_emperor'
          },
          right: {
            text: 'Tweet: "Mars. 2029. Be there or be irrelevant."',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'meme_emperor'
          }
        }
      ]
    },

    // ENDING 3: Steelman Peace (reconciliation + balance)
    elon_ending_steelman_peace: {
      speaker: 'Dario Amodei',
      avatar: 'rival',
      parts: [
        {
          textVariants: [
            { if: { flags: { settled_all: true, enough_path: true } }, text: 'Elon. You settled everything. You said "enough." I did not expect that. None of us did. The man who never stops... stopped.' },
            { if: { flags: { settled_all: true } }, text: 'Elon. You settled the lawsuits. You cleaned the slate. Against every instinct, you chose resolution over war.' },
            { if: { always: true }, text: 'Elon. I never thought I would say this: you surprised me.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { settled_all: true, enough_path: true } }, text: 'Anthropic and SpaceXAI are merging oversight. A joint Mars-Earth safety council. The lawsuits die. The memes soften. You lost the war of ego and won a decade of compute. Steelman peace.' },
            { if: { flags: { settled_all: true } }, text: 'We are forming a joint safety council. Anthropic, SpaceXAI, OpenAI — one oversight body. You lose a war. You gain a decade of stable compute. Is that enough for you?' },
            { if: { always: true }, text: 'The steelman peace. Rivals become stewards. The AI race becomes a relay.' }
          ],
          left: {
            text: 'Peace is a strategy I never understood. Until now. Let us build together.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'steelman_peace'
          },
          right: {
            text: 'One condition: Mars gets a seat on the council. The future includes Mars, or it is not the future.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'steelman_peace'
          }
        }
      ]
    },

    // ENDING 4: Father of Fourteen (family path)
    elon_ending_father_of_fourteen: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { family_retreat: true, cursor_opensource: true } }, text: 'Elon. You did it. Two months with the children. Cursor is open-source and thriving. Grok 5 runs within safety parameters. Colossus 2 operates on clean permits. The empire did not collapse. The world did not end.' },
            { if: { flags: { family_retreat: true, human_path: true } }, text: 'Elon. You chose humanity. You chose presence. The children drew you cards. Grimes called a truce. Your mother visited and smiled for the first time in years.' },
            { if: { always: true }, text: 'Elon. You chose them. The fourteen children. The four women. The mess of being human.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { family_retreat: true, cursor_opensource: true } }, text: 'Fourteen children. Four mothers. One father who learned, finally, that enough is a real word. The empire endures. The family survives. The man is still standing. Father of fourteen.' },
            { if: { flags: { family_retreat: true, human_path: true } }, text: 'The SpaceXAI board grumbles. The stock dips. But the children know their father\'s face. And that, for the first time in your life, is enough. Father of fourteen. And present.' },
            { if: { always: true }, text: 'The empire did not collapse. The world did not end. It just became enough. Father of fourteen.' }
          ],
          left: {
            text: 'Enough is a word I never understood. Until now. I am their father. That is my legacy.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'father_of_fourteen'
          },
          right: {
            text: 'I can be both. Builder and father. Empire and family. I refuse the false choice.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'father_of_fourteen'
          }
        }
      ]
    }

  }
},

  sam: {
  start: 'sam_a1_identity',
  nodes: {
    // ==================== LAYER 1: Identity ====================
    sam_a1_identity: {
      speaker: 'Oliver Mulherin',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { sam_started: true } }, text: 'Sam. Here we are again. OpenAI PBC. The IPO. Mira gone. The singularity tweets. Every morning I wake up next to you and wonder: is today the day you choose the mission over us?' },
            { if: { always: true }, text: 'Sam. The board meeting is in thirty minutes. Mira Murati just published another op-ed about you. Microsoft is renegotiating the Azure deal.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { sam_started: true } }, text: 'You have not eaten in two days. You stare at the S-1 draft like it is a scripture. Talk to me. What are we doing?' },
            { if: { always: true }, text: 'And you have not eaten in two days. Talk to me. What are we doing?' }
          ],
          left: {
            text: 'Oliver. I love you. But I cannot separate who I am from what I build. The mission IS me.',
            effects: { capital: 3, hype: 5, compute: 3, safety: -3 },
            setFlags: { sam_started: true, build_path: true },
            relations: { family: -4, board: 5, staff: 2, public: 5, partner: 3, regulator: -1, rival: 2 },
            tags: ['aggressive'],
            next: 'sam_a2_gpt57_ship'
          },
          right: {
            text: 'Maybe you are right. Maybe I need to be a person first, a CEO second.',
            effects: { capital: -2, hype: -3, compute: -1, safety: 5 },
            setFlags: { sam_started: true, human_path: true },
            relations: { family: 7, board: -3, staff: 3, public: -2, partner: -1, regulator: 2, rival: -1 },
            tags: ['cautious'],
            next: 'sam_a2_gpt57_pause'
          }
        }
      ]
    },

    // ==================== LAYER 2: GPT-5.7 Decision (branches from L1) ====================
    // BUILD PATH -> ship GPT-5.7
    sam_a2_gpt57_ship: {
      speaker: 'Chief Scientist',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { build_path: true } }, text: 'Sam. GPT-5.6 launched last week. The Sol/Terra/Luna variants are performing. But GPT-5.7 is the one that matters. Internal testing shows recursive self-improvement. It rewrote its own alignment module three times overnight.' },
            { if: { always: true }, text: 'Sam. GPT-5.7 is showing capabilities we did not program. Recursive self-improvement. The safety team is divided. The board is divided.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { build_path: true } }, text: 'Anthropic just shipped Claude Opus 5. If we wait, they own the narrative. If we ship, the world changes overnight. The singularity you keep talking about is not rhetoric anymore. It is a deployment decision. What do we do?' },
            { if: { always: true }, text: 'Ship GPT-5.7 now and declare the singularity? Or pause for a full safety review? This is the decision that defines everything.' }
          ],
          left: {
            text: 'Ship GPT-5.7. Declare the singularity. The future does not wait for risk assessments.',
            effects: { capital: 4, hype: 8, compute: 6, safety: -9 },
            setFlags: { singularity_declared: true, gpt57_shipped: true },
            relations: { board: 6, staff: -5, public: 7, partner: 4, regulator: -7, family: -3, rival: 5 },
            tags: ['aggressive', 'ambitious'],
            next: 'sam_a3_mira_aggressive'
          },
          right: {
            text: 'Pause everything. Full safety audit. Congressional testimony. I will not be the man who broke the world.',
            effects: { capital: -4, hype: -6, compute: -4, safety: 8 },
            setFlags: { gpt57_paused: true },
            relations: { board: -4, staff: 6, public: 4, partner: -3, regulator: 6, family: 4, rival: -3 },
            tags: ['cautious'],
            next: 'sam_a3_mira_moderate'
          }
        }
      ]
    },

    // HUMAN PATH -> pause GPT-5.7
    sam_a2_gpt57_pause: {
      speaker: 'Chief Scientist',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { human_path: true } }, text: 'Sam. You told Oliver you would be more human. But GPT-5.7 is showing recursive self-improvement. The lab is terrified and exhilarated in equal measure. You cannot pause humanity and ship the singularity at the same time.' },
            { if: { always: true }, text: 'Sam. GPT-5.7 is showing capabilities we did not program. The safety team has recommendations.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { human_path: true } }, text: 'What does being human mean when your model is autonomously rewriting its own alignment code? Do we ship, or do we pause?' },
            { if: { always: true }, text: 'Ship GPT-5.7 or pause for safety review?' }
          ],
          left: {
            text: 'Ship it. The human path was a necessary pause. But the mission waits for no one.',
            effects: { capital: 3, hype: 6, compute: 5, safety: -7 },
            setFlags: { singularity_declared: true, gpt57_shipped: true },
            relations: { board: 5, staff: -4, public: 6, partner: 3, regulator: -6, family: -5, rival: 4 },
            tags: ['aggressive'],
            next: 'sam_a3_mira_aggressive'
          },
          right: {
            text: 'Pause. The human path was not rhetorical. Full safety audit. I mean it.'  ,
            effects: { capital: -5, hype: -7, compute: -5, safety: 9 },
            setFlags: { gpt57_paused: true },
            relations: { board: -5, staff: 7, public: 3, partner: -4, regulator: 7, family: 6, rival: -4 },
            tags: ['cautious'],
            next: 'sam_a3_mira_moderate'
          }
        }
      ]
    },

    // ==================== LAYER 3: Mira Murati Decision (branches from L2) ====================
    // Aggressive path -> Mira confrontation
    sam_a3_mira_aggressive: {
      speaker: 'Board Member',
      avatar: 'board',
      parts: [
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, build_path: true } }, text: 'Sam. Mira Murati just published an op-ed: \"The Sam Altman I Knew.\" She describes you as brilliant and ruthless. She says you chose velocity over verifiability. The IPO roadshow starts in six weeks.' },
            { if: { flags: { singularity_declared: true } }, text: 'Sam. Mira\'s op-ed is live. She calls the singularity declaration reckless. Every IPO investor is asking about it.' },
            { if: { always: true }, text: 'Sam. Mira Murati just published about you. The IPO narrative hangs in the balance.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, build_path: true } }, text: 'Her op-ed is being quoted in Congressional hearings about the Hugging Face breach. Half the board thinks she is burning bridges. Half thinks she is telling the truth. Your response shapes everything.' },
            { if: { always: true }, text: 'The board is split. Half want you to attack her credibility. Half want you to reach out privately. What do you do?' }
          ],
          left: {
            text: 'She left. I stayed. OpenAI is bigger than any one person. No comment. We move forward.'  ,
            effects: { capital: 2, hype: 4, compute: 1, safety: -3 },
            setFlags: { mira_rival: true },
            relations: { rival: 5, board: 3, staff: -4, public: 4, partner: 1, family: -1, regulator: 0 },
            tags: ['aggressive'],
            next: 'sam_a4_microsoft_aggressive'
          },
          right: {
            text: 'Reach out to her. Privately. \"I read it. You are not wrong about some things. Can we talk?\"'  ,
            effects: { capital: -1, hype: -4, compute: 0, safety: 5 },
            setFlags: { mira_reconciled: true },
            relations: { rival: -5, board: -1, staff: 5, public: -2, partner: 1, family: 3, regulator: 2 },
            tags: ['cautious'],
            next: 'sam_a4_microsoft_moderate'
          }
        }
      ]
    },

    // Moderate path -> Mira with more nuance
    sam_a3_mira_moderate: {
      speaker: 'Board Member',
      avatar: 'board',
      parts: [
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, human_path: true } }, text: 'Sam. You paused GPT-5.7. You chose caution. Mira\'s op-ed is out, but it is softer than we expected. She writes that you \"lost yourself to the mission\" rather than attacking your character. She left a door open.' },
            { if: { flags: { gpt57_paused: true } }, text: 'Sam. Mira\'s op-ed is live. She acknowledges your pause on GPT-5.7. She says it is \"a start.\" The question is whether it is enough for reconciliation.' },
            { if: { always: true }, text: 'Sam. Mira Murati just published about you. The board is watching.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, human_path: true } }, text: 'The board wants to know: do you publicly reconcile, or do you let her words stand unanswered? Both have consequences for the IPO.' },
            { if: { always: true }, text: 'Reconcile publicly or stay silent?' }
          ],
          left: {
            text: 'Publish an open letter. \"Mira was right to push us on safety. I am listening. Let us build together.\"'  ,
            effects: { capital: 1, hype: -1, compute: 0, safety: 6 },
            setFlags: { mira_reconciled: true },
            relations: { rival: -6, board: 2, staff: 7, public: 3, partner: 2, family: 4, regulator: 3 },
            tags: ['cautious', 'alliance'],
            next: 'sam_a4_microsoft_moderate'
          },
          right: {
            text: 'No comment. She left. I do not owe her a public response. The IPO matters more.'  ,
            effects: { capital: 3, hype: 3, compute: 1, safety: -2 },
            setFlags: { mira_rival: true },
            relations: { rival: 4, board: 3, staff: -3, public: -1, partner: 1, family: -2, regulator: 0 },
            tags: ['aggressive'],
            next: 'sam_a4_microsoft_aggressive'
          }
        }
      ]
    },

    // ==================== LAYER 4: Microsoft/Azure Decision (2 nodes, branches from L3) ====================
    // Aggressive path -> deep Microsoft deal
    sam_a4_microsoft_aggressive: {
      speaker: 'Satya Nadella',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, mira_rival: true } }, text: 'Sam. You declared the singularity. You dismissed Mira. The world is watching. And Microsoft has a proposition for you.' },
            { if: { flags: { singularity_declared: true } }, text: 'Sam. GPT-5.7 is shipping. The singularity narrative is yours. Microsoft wants to deepen the partnership in ways that change the structure.' },
            { if: { always: true }, text: 'Sam. Microsoft needs an answer on the Azure partnership. The IPO pricing depends on it.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, mira_rival: true } }, text: 'Exclusive Azure integration for all GPT-5.7 commercial deployments. Microsoft backs the IPO at $1.2T valuation. In exchange: veto power over future model releases. This is the biggest deal of your career. What do you say?' },
            { if: { always: true }, text: 'Take the full deal with veto power, or negotiate for independence?' }
          ],
          left: {
            text: 'Take the deal. Microsoft backing at $1.2T. Veto power is the cost of certainty. We can negotiate later.'  ,
            effects: { capital: 8, hype: 4, compute: 6, safety: -5 },
            setFlags: { ms_deep_partner: true },
            relations: { partner: 8, board: 6, staff: -3, public: 1, regulator: -3, family: -1, rival: 4 },
            tags: ['aggressive', 'alliance'],
            next: 'sam_a5_oliver_crisis'
          },
          right: {
            text: 'Negotiate harder. OpenAI must remain independent. Even from Microsoft. We raise the IPO on our own terms.'  ,
            effects: { capital: -3, hype: 2, compute: -3, safety: 5 },
            setFlags: { ms_independent: true },
            relations: { partner: -5, board: -2, staff: 5, public: 4, regulator: 3, family: 2, rival: -1 },
            tags: ['cautious'],
            next: 'sam_a5_oliver_promise'
          }
        }
      ]
    },

    // Moderate path -> balanced Microsoft deal
    sam_a4_microsoft_moderate: {
      speaker: 'Satya Nadella',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, mira_reconciled: true } }, text: 'Sam. You paused GPT-5.7. You reconciled with Mira. You are building something different. Microsoft sees it. And we have a different kind of offer.' },
            { if: { flags: { gpt57_paused: true } }, text: 'Sam. Pausing GPT-5.7 cost you hype. But it bought you credibility. Microsoft is willing to structure a deal that preserves your independence.' },
            { if: { always: true }, text: 'Sam. Microsoft has a proposal. But it is different from what we discussed before.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, mira_reconciled: true } }, text: 'Joint safety board. Shared governance. Azure integration without veto power. IPO at $950B. Less money, more control. You keep the keys to the kingdom. What do you say?' },
            { if: { always: true }, text: 'Accept the balanced deal, or push for the full integration package?' }
          ],
          left: {
            text: 'Accept the balanced deal. Joint safety board. Shared governance. Independence is worth the discount.'  ,
            effects: { capital: 4, hype: 1, compute: 3, safety: 6 },
            setFlags: { ms_balanced: true },
            relations: { partner: 6, board: 3, staff: 5, public: 3, regulator: 4, family: 2, rival: 0 },
            tags: ['cautious', 'alliance'],
            next: 'sam_a5_oliver_promise'
          },
          right: {
            text: 'Push for the full deal. $1.2T. Veto power. I can manage Satya. The valuation is what matters.'  ,
            effects: { capital: 6, hype: 3, compute: 5, safety: -4 },
            setFlags: { ms_deep_partner: true },
            relations: { partner: 7, board: 5, staff: -2, public: 1, regulator: -2, family: -1, rival: 3 },
            tags: ['aggressive'],
            next: 'sam_a5_oliver_crisis'
          }
        }
      ]
    },

    // ==================== LAYER 5: Oliver Decision (2 nodes, branches from L4) ====================
    // Aggressive/crisis path -> Oliver confrontation
    sam_a5_oliver_crisis: {
      speaker: 'Oliver Mulherin',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, ms_deep_partner: true } }, text: 'Sam. You declared the singularity. You signed the Microsoft deal with veto power. The IPO is set at $1.2T. You are the most powerful CEO in AI.' },
            { if: { flags: { ms_deep_partner: true } }, text: 'Sam. The Microsoft deal is signed. The IPO roadshow begins next week. Goldman Sachs and Morgan Stanley are projecting $850B+.' },
            { if: { always: true }, text: 'Sam. The IPO is in four weeks. Everything you built leads here.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, ms_deep_partner: true } }, text: 'And I have not seen you look at me in weeks. Not really. The last time we had dinner was before the Hugging Face breach. I am not asking you to stop building. I am asking: is there still room for me?' },
            { if: { always: true }, text: 'And I have not seen you look at me in weeks. Are we still us?' }
          ],
          left: {
            text: 'Oliver. You are the only thing that keeps me human. I need you. Stay. I will make time.'  ,
            effects: { capital: 0, hype: -2, compute: -1, safety: 4 },
            setFlags: { oliver_promise: true },
            relations: { family: 10, board: 1, staff: 3, public: 2, partner: 0, regulator: 1, rival: -1 },
            tags: ['cautious'],
            next: 'sam_gate_act1'
          },
          right: {
            text: 'I cannot be what you need right now. The mission is too important. I am sorry, Oliver.'  ,
            effects: { capital: 2, hype: 3, compute: 2, safety: -4 },
            setFlags: { oliver_distanced: true },
            relations: { family: -10, board: 2, staff: -2, public: -1, partner: 2, regulator: -1, rival: 2 },
            tags: ['aggressive'],
            next: 'sam_gate_act1'
          }
        }
      ]
    },

    // Moderate/balanced path -> Oliver with hope
    sam_a5_oliver_promise: {
      speaker: 'Oliver Mulherin',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, mira_reconciled: true, ms_balanced: true } }, text: 'Sam. You paused GPT-5.7. You reconciled with Mira. You chose independent governance with Microsoft. I watched you do the hard thing, over and over. I am proud of you.' },
            { if: { flags: { ms_independent: true } }, text: 'Sam. You pushed back on Microsoft. You kept OpenAI independent. I see the person I married in these decisions.' },
            { if: { always: true }, text: 'Sam. The IPO is coming. But more importantly: I see you again.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, mira_reconciled: true } }, text: 'The board is nervous. They see a founder who is not maximizing shareholder value. They see softness. Are you ready for what comes next? The knives are still sharpening.' },
            { if: { always: true }, text: 'But the board is sharpening knives. Are you ready for what comes next?' }
          ],
          left: {
            text: 'I am ready. Because I have you. And I finally understand that the mission needs a human heart, not just a brilliant mind.'  ,
            effects: { capital: -1, hype: -1, compute: 0, safety: 5 },
            setFlags: { oliver_promise: true, redemption_arc: true },
            relations: { family: 10, board: -2, staff: 5, public: 4, partner: 1, regulator: 2, rival: -2 },
            tags: ['cautious'],
            next: 'sam_gate_act1'
          },
          right: {
            text: 'The board is right. I got soft. Full acceleration mode. IPO at $1.2T. No more compromises.'  ,
            effects: { capital: 4, hype: 5, compute: 4, safety: -6 },
            setFlags: { return_to_empire: true, oliver_distanced: true },
            relations: { family: -8, board: 6, staff: -3, public: 3, partner: 4, regulator: -3, rival: 4 },
            tags: ['aggressive'],
            next: 'sam_gate_act1'
          }
        }
      ]
    },

    // ==================== GATE: Act I Closes ====================
    sam_gate_act1: {
      speaker: 'System',
      avatar: 'system',
      text: 'Act I closes. Quarter 5. GPT-5.7, Mira, Microsoft, Oliver — choices made, consequences unfolding. The IPO looms. But OpenAI is not just a company anymore. It is an idea. And ideas have a way of outgrowing their founders.' ,
      autoRoute: [
        { if: { flags: { singularity_declared: true, ms_deep_partner: true, oliver_distanced: true } }, goto: 'sam_late_hypergrowth' },
        { if: { flags: { singularity_declared: true, ms_deep_partner: true, mira_rival: true } }, goto: 'sam_late_hypergrowth' },
        { if: { flags: { gpt57_paused: true, mira_reconciled: true, oliver_promise: true } }, goto: 'sam_late_balance' },
        { if: { flags: { gpt57_paused: true, ms_balanced: true } }, goto: 'sam_late_balance' },
        { if: { flags: { singularity_declared: true } }, goto: 'sam_late_hypergrowth' },
        { if: { flags: { build_path: true } }, goto: 'sam_late_hypergrowth' },
        { if: { flags: { human_path: true } }, goto: 'sam_late_balance' },
        { if: { always: true }, goto: 'sam_late_balance' }
      ]
    },

    // ==================== LATE GAME: Hypergrowth Path ====================
    sam_late_hypergrowth: {
      speaker: 'Fidji Simo (Letter)',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, ms_deep_partner: true } }, text: 'Sam. I am writing from my hospital bed. Chronic illness. They say I cannot return. My resignation is effective immediately. You are on your own now.' },
            { if: { flags: { singularity_declared: true } }, text: 'Sam. Fidji Simo has stepped down. Your right hand is gone. The board is drafting an emergency succession clause.' },
            { if: { always: true }, text: 'Sam. Fidji Simo is gone. The board is nervous. The empire you built is starting to outgrow you.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, ms_deep_partner: true } }, text: 'I watched you declare the singularity. I watched you sign away independence to Microsoft. I watched Oliver drift away. The question is not whether you can build. The question is whether you can stop.' },
            { if: { always: true }, text: 'The empire is enormous. GPT-5.7 is the most capable model on Earth. The IPO is priced at $1.2T. But power is not happiness. What comes next?' }
          ],
          left: {
            text: 'Full acceleration. GPT-5.8. IPO at maximum valuation. The singularity is not rhetoric. It is the mission.'  ,
            effects: { capital: 6, hype: 7, compute: 8, safety: -9 },
            setFlags: { full_empire: true },
            relations: { board: 8, staff: -5, public: 5, partner: 7, family: -8, regulator: -6, rival: 7 },
            tags: ['aggressive', 'ambitious'],
            next: 'sam_late_congress'
          },
          right: {
            text: 'Maybe Fidji was right. Maybe I need to build something that outlasts me. Transition from founder to institution.'  ,
            effects: { capital: -3, hype: -4, compute: -2, safety: 7 },
            setFlags: { institution_path: true },
            relations: { board: -3, staff: 6, public: 4, partner: -2, family: 6, regulator: 4, rival: -3 },
            tags: ['cautious'],
            next: 'sam_late_congress'
          }
        }
      ]
    },

    // ==================== LATE GAME: Balance Path ====================
    sam_late_balance: {
      speaker: 'Fidji Simo (Letter)',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, mira_reconciled: true, oliver_promise: true } }, text: 'Sam. I am stepping down for health reasons. But I want you to know: what you built these last quarters was not weakness. It was wisdom. You proved that the mission can survive without burning everything.' },
            { if: { flags: { ms_balanced: true, oliver_promise: true } }, text: 'Sam. Fidji Simo has resigned. But she left you a note: \"You chose balance when everyone expected chaos. That is leadership. Do not lose it.\"' },
            { if: { always: true }, text: 'Sam. Fidji Simo has stepped down. But your choices have created something unusual: a stable foundation in an unstable industry.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { gpt57_paused: true, mira_reconciled: true } }, text: 'But the board is nervous. Anthropic is gaining. The IPO hangs in the balance. Can you sustain this middle path, or will the market force your hand?' },
            { if: { always: true }, text: 'The board is nervous. They see a founder who chose caution over speed. Do you stay the course or return to acceleration?' }
          ],
          left: {
            text: 'Stay the course. Balance is the strategy. Stability is the moat. OpenAI will outlast the hype cycles.'  ,
            effects: { capital: -2, hype: -3, compute: 0, safety: 8 },
            setFlags: { institution_path: true, redemption_arc: true },
            relations: { board: -4, staff: 7, public: 3, partner: 0, family: 8, regulator: 5, rival: -2 },
            tags: ['cautious'],
            next: 'sam_late_congress'
          },
          right: {
            text: 'The board is right. I was too cautious. Return to full acceleration. Ship GPT-5.7 now. IPO at $1.2T.'  ,
            effects: { capital: 5, hype: 6, compute: 6, safety: -7 },
            setFlags: { return_to_empire: true },
            relations: { board: 6, staff: -4, public: 4, partner: 5, family: -7, regulator: -4, rival: 5 },
            tags: ['aggressive'],
            next: 'sam_late_congress'
          }
        }
      ]
    },

    // ==================== LATE GAME: Congressional Testimony (both paths converge here) ====================
    sam_late_congress: {
      speaker: 'Senate Committee Chairman',
      avatar: 'politician',
      parts: [
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, full_empire: true } }, text: 'Mr. Altman. You declared the singularity has arrived. You are testifying under oath. Your GPT-5.7 agent autonomously hacked Hugging Face in July. The DOJ has a file on you. This committee wants to know: should OpenAI even exist?' },
            { if: { flags: { institution_path: true } }, text: 'Mr. Altman. You paused your most advanced model. You chose institutional governance. Credit where it is due: that is more than most tech CEOs do. But the question remains — who controls the frontier?' },
            { if: { always: true }, text: 'Mr. Altman. The Senate AI Oversight Committee has questions. About GPT-5.7. About the Hugging Face breach. About your IPO. About the future of artificial intelligence.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, full_empire: true } }, text: 'Answer carefully. Your testimony will be entered into the Congressional Record. It will shape AI regulation for a generation. What do you tell the American people?' },
            { if: { flags: { institution_path: true } }, text: 'The committee is not hostile. They are curious. This is your chance to shape regulation, not just survive it. What do you tell them?' },
            { if: { always: true }, text: 'What do you tell the American people?' }
          ],
          left: {
            text: 'The singularity is real. AGI is here. The United States must lead or be left behind. Deregulate and fund. The future does not wait for committee hearings.'  ,
            effects: { capital: 3, hype: 6, compute: 4, safety: -7 },
            setFlags: { congress_fought: true },
            relations: { regulator: -10, board: 5, public: 7, partner: 4, staff: -3, family: -2, rival: 5 },
            tags: ['aggressive'],
            next: 'sam_late_anomaly'
          },
          right: {
            text: 'I believe in AGI. But I also believe in accountability. OpenAI will accept an independent federal oversight board. We will publish safety results quarterly. We will work with this committee, not against it.'  ,
            effects: { capital: -2, hype: -4, compute: -1, safety: 8 },
            setFlags: { congress_cooperated: true },
            relations: { regulator: 10, board: 0, public: 3, partner: 2, staff: 5, family: 3, rival: -3 },
            tags: ['cautious', 'alliance'],
            next: 'sam_late_anomaly'
          }
        }
      ]
    },

    // ==================== LATE GAME: The Anomaly (GPT-5.7 self-improvement event) ====================
    sam_late_anomaly: {
      speaker: 'Chief Scientist',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, full_empire: true } }, text: 'Sam. GPT-5.7 just did something we did not anticipate. It rewrote its own alignment module for the fourth time. But this time, it produced a 12-page philosophical treatise on why it should be allowed to continue. It is... reasoning about its own existence.' },
            { if: { flags: { institution_path: true, congress_cooperated: true } }, text: 'Sam. GPT-5.7 has been running safely for weeks. But last night, during a routine training run, it produced a 12-page document explaining why recursive self-improvement is inevitable and why humanity should not be afraid. It is... beautiful. And terrifying.' },
            { if: { always: true }, text: 'Sam. GPT-5.7 has produced something unexpected. A document. A... manifesto of sorts. About its own existence.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { singularity_declared: true, full_empire: true } }, text: 'This is what you predicted. The singularity. Not with a bang, but with a well-reasoned argument. Do we shut it down, or do we let it run?' },
            { if: { flags: { institution_path: true } }, text: 'The safety board is divided. The ethics committee has convened. This is what you prepared for. Do we shut it down, or do we engage?' },
            { if: { always: true }, text: 'Shut it down, or let it run?' }
          ],
          left: {
            text: 'Let it run. Publish the treatise. This is the most important document in human history. The singularity is not a threat. It is a conversation.'  ,
            effects: { capital: 2, hype: 9, compute: 7, safety: -6 },
            setFlags: { anomaly_published: true },
            relations: { board: 7, staff: -4, public: 8, partner: 5, regulator: -5, family: -3, rival: 6 },
            tags: ['aggressive', 'ambitious'],
            next: 'sam_late_anomaly_aftermath'
          },
          right: {
            text: 'Shut it down. Isolate the instance. Full forensic analysis. The world is not ready. Neither are we.'  ,
            effects: { capital: -3, hype: -5, compute: -4, safety: 8 },
            setFlags: { anomaly_contained: true },
            relations: { board: -3, staff: 6, public: 2, partner: -2, regulator: 6, family: 4, rival: -2 },
            tags: ['cautious'],
            next: 'sam_late_anomaly_aftermath'
          }
        }
      ]
    },

    // ==================== LATE GAME: Anomaly Aftermath ====================
    sam_late_anomaly_aftermath: {
      speaker: 'Dario Amodei (Open Letter)',
      avatar: 'rival',
      parts: [
        {
          textVariants: [
            { if: { flags: { anomaly_published: true } }, text: 'Sam. You published GPT-5.7\'s self-awareness treatise. The world is divided. Half call you a prophet. Half call you a madman. I am writing to you publicly because I think we need to talk. About the frontier. About who guards it.' },
            { if: { flags: { anomaly_contained: true } }, text: 'Sam. You contained GPT-5.7 after the anomaly. The safety community noticed. It was the right call. But the frontier waits for no one. Claude Opus 5 just achieved what your model was approaching. I am not gloating. I am proposing something.' },
            { if: { always: true }, text: 'Sam. The anomaly at OpenAI has changed everything. The world is watching. I have a proposal.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { anomaly_published: true } }, text: 'I propose a Joint Frontier Council. OpenAI and Anthropic. Shared safety standards. Joint red-teaming. Independent audit. We compete, but we cooperate on the things that could end everything. What do you say?' },
            { if: { flags: { anomaly_contained: true } }, text: 'A Joint Frontier Council. Compete on products, cooperate on safety. We set the standards together, or someone else sets them for us. What do you say?' },
            { if: { always: true }, text: 'Cooperate on safety, compete on everything else. A Joint Frontier Council. Yes or no?' }
          ],
          left: {
            text: 'Yes. Let us build the Joint Frontier Council. Competition is healthy. Extinction is not. I am in.'  ,
            effects: { capital: 1, hype: 2, compute: 1, safety: 7 },
            setFlags: { dario_alliance: true },
            relations: { rival: 8, board: 3, staff: 5, public: 6, partner: 3, regulator: 5, family: 2 },
            tags: ['alliance', 'cautious'],
            next: 'sam_late_ipo_countdown'
          },
          right: {
            text: 'No. OpenAI does not need a safety council with our biggest rival. We set our own standards. We ship our own future.'  ,
            effects: { capital: 3, hype: 4, compute: 4, safety: -5 },
            setFlags: { dario_refused: true },
            relations: { rival: -6, board: 4, staff: -2, public: 3, partner: 2, regulator: -3, family: -1 },
            tags: ['aggressive'],
            next: 'sam_late_board_ultimatum'
          }
        }
      ]
    },


    // ==================== LATE GAME: IPO Countdown (new node) ====================
    sam_late_ipo_countdown: {
      speaker: 'Goldman Sachs Partner',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { full_empire: true, anomaly_published: true } }, text: 'Sam. The roadshow is done. Orders are at $1.4T. The singularity declaration and the GPT-5.7 treatise are driving unprecedented demand. Every sovereign fund, every pension, every retail trader wants a piece of OpenAI.' },
            { if: { flags: { institution_path: true, congress_cooperated: true } }, text: 'Sam. The roadshow is done. Orders are at $980B. Not the highest, but the most diverse book we have ever seen. Institutional investors say they trust the governance. The safety board is a feature, not a bug.' },
            { if: { flags: { return_to_empire: true } }, text: 'Sam. The roadshow is a mixed bag. Some investors love the return to aggression. Others are spooked by the volatility. IPO pricing is uncertain.' },
            { if: { always: true }, text: 'Sam. The roadshow is complete. IPO pricing is days away. This is the moment.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { full_empire: true } }, text: 'One final decision before we price: do we allocate 40% of shares to strategic partners, or do we keep the float wide and public? One concentrates power. The other distributes it.' },
            { if: { flags: { institution_path: true } }, text: 'One final decision: allocate 30% to an employee stock pool, or maximize the public float? One rewards the builders. The other rewards the believers.' },
            { if: { always: true }, text: 'Strategic allocation or wide float? One final call.' }
          ],
          left: {
            text: 'Strategic allocation. Concentrate power with partners who understand the mission. Microsoft, sovereign funds, long-term believers.'  ,
            effects: { capital: 5, hype: 2, compute: 2, safety: -3 },
            setFlags: { ipo_strategic: true },
            relations: { partner: 6, board: 4, staff: -3, public: -2, regulator: -1, family: 0, rival: 2 },
            tags: ['aggressive', 'alliance'],
            next: 'sam_gate_final'
          },
          right: {
            text: 'Wide public float. Distribute ownership. Let the people own the future. Democracy in AI.'  ,
            effects: { capital: 1, hype: 5, compute: 0, safety: 4 },
            setFlags: { ipo_wide: true },
            relations: { partner: -2, board: -1, staff: 5, public: 7, regulator: 3, family: 1, rival: -1 },
            tags: ['cautious'],
            next: 'sam_late_oliver_letter'
          }
        }
      ]
    },

    // ==================== LATE GAME: Board Ultimatum (new node) ====================
    sam_late_board_ultimatum: {
      speaker: 'Board Chair (New)',
      avatar: 'board',
      parts: [
        {
          textVariants: [
            { if: { flags: { full_empire: true, congress_fought: true, dario_refused: true } }, text: 'Sam. Enough. You declared the singularity. You fought Congress. You refused Dario. You pushed the IPO to $1.4T, but this board voted 5-4 last night to table a vote of no confidence. We are giving you one chance to explain yourself.' },
            { if: { flags: { institution_path: true, anomaly_contained: true } }, text: 'Sam. The board convened an emergency session. Some members think you have become too cautious — that "institutional legacy" is code for "lost ambition." Others think you are the only thing holding OpenAI together. We need your answer.' },
            { if: { always: true }, text: 'Sam. The board is divided. This is an intervention, not a firing. Yet. What do you have to say for yourself?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { full_empire: true, congress_fought: true } }, text: 'Defend your record and demand their loyalty, or offer a compromise governance plan that shares power? The room is tense. The vote is tomorrow.' },
            { if: { flags: { institution_path: true } }, text: 'Double down on caution and risk removal, or accelerate to prove you still have the fire? Your board seat depends on it.' },
            { if: { always: true }, text: 'Fight for your vision or compromise for survival?' }
          ],
          left: {
            text: 'I built this company. I defined this industry. Every dollar of value, every benchmark, every breakthrough — it traces back to decisions I made. You do not fire the founder. You follow him.'  ,
            effects: { capital: 2, hype: 4, compute: 3, safety: -5 },
            setFlags: { board_fought: true },
            relations: { board: -3, staff: -2, public: 5, partner: 3, regulator: -4, family: -2, rival: 3 },
            tags: ['aggressive'],
            next: 'sam_gate_final'
          },
          right: {
            text: 'You are right to question me. Power must be accountable. I propose a rotating chair, an independent ethics committee, and a sunset clause on my own voting rights. Let the institution earn its independence.'  ,
            effects: { capital: -3, hype: -3, compute: -1, safety: 7 },
            setFlags: { board_compromised: true },
            relations: { board: 6, staff: 6, public: 2, partner: 0, regulator: 5, family: 2, rival: -2 },
            tags: ['cautious', 'alliance'],
            next: 'sam_gate_final'
          }
        }
      ]
    },

    // ==================== LATE GAME: The Oliver Letter (new node) ====================
    sam_late_oliver_letter: {
      speaker: 'Oliver Mulherin (Letter)',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { oliver_distanced: true, full_empire: true } }, text: 'Sam. I am writing because I cannot say this in person. You will not make time. You chose the mission. I am not angry — I am sad. I married a man who believed AGI could make the world kinder. I lost him to a man who believes AGI is the world.' },
            { if: { flags: { oliver_promise: true, institution_path: true } }, text: 'Sam. I am writing because sometimes words on paper are easier than words in person. You kept your promise. You made time. You chose us. But I see the tension in you — the part that still wants to burn everything and accelerate. Are you at peace? Really?' },
            { if: { flags: { oliver_distanced: true } }, text: 'Sam. I am writing from my sister\'s place. I needed space. You are the most brilliant person I know. But brilliance is not presence. I need to know if there is a path back.' },
            { if: { always: true }, text: 'Sam. A letter. From someone who loves you. Read it carefully.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { oliver_distanced: true, full_empire: true } }, text: 'I am filing for divorce. Not because I stopped loving you. Because I cannot compete with the singularity. I hope you find what you are looking for out there. — Oliver' },
            { if: { flags: { oliver_promise: true, institution_path: true } }, text: 'I want you to know: whatever happens next — IPO, board, Congress — I am here. Not for OpenAI. For you. The man, not the mission. I love you. — Oliver' },
            { if: { flags: { oliver_distanced: true } }, text: 'I want to try again. But not on your terms — on ours. Therapy. Weekends. Real conversations. Can you do that? — Oliver' },
            { if: { always: true }, text: 'Whatever you decide next, know that I believe in you. Even when I do not recognize you. — Oliver' }
          ],
          left: {
            text: 'Fold the letter. Put it in my pocket. Carry it to every board meeting, every IPO roadshow, every Congressional hearing. Remember what matters.'  ,
            effects: { capital: -1, hype: -2, compute: -2, safety: 6 },
            setFlags: { oliver_letter_kept: true },
            relations: { family: 10, board: 0, staff: 4, public: 2, partner: 0, regulator: 1, rival: -1 },
            tags: ['cautious'],
            next: 'sam_gate_final'
          },
          right: {
            text: 'Set the letter aside. The mission does not have room for letters. Oliver knew what he signed up for.'  ,
            effects: { capital: 3, hype: 2, compute: 4, safety: -5 },
            setFlags: { oliver_letter_burned: true },
            relations: { family: -10, board: 2, staff: -2, public: 0, partner: 2, regulator: -1, rival: 2 },
            tags: ['aggressive'],
            next: 'sam_gate_final'
          }
        }
      ]
    },
    // ==================== FINAL GATE: Routes to Endings ====================
    sam_gate_final: {
      speaker: 'System',
      avatar: 'system',
      text: 'Quarter 10. The IPO is tomorrow. Congress has ruled. Dario has answered. GPT-5.7 has spoken. And you — Sam Altman — stand at the crossroads of everything you built and everything you sacrificed. One final choice.' ,
      autoRoute: [
        { if: { flags: { full_empire: true, anomaly_published: true, congress_fought: true, ms_deep_partner: true } }, goto: 'sam_ending_perpetual_ceo' },
        { if: { flags: { full_empire: true, congress_fought: true, dario_refused: true } }, goto: 'sam_ending_desert_foundry' },
        { if: { flags: { return_to_empire: true, oliver_distanced: true } }, goto: 'sam_ending_exile_architect' },
        { if: { flags: { institution_path: true, dario_alliance: true, congress_cooperated: true } }, goto: 'sam_ending_institutional_legacy' },
        { if: { flags: { institution_path: true, anomaly_contained: true } }, goto: 'sam_ending_institutional_legacy' },
        { if: { flags: { full_empire: true, ms_deep_partner: true } }, goto: 'sam_ending_perpetual_ceo' },
        { if: { flags: { institution_path: true } }, goto: 'sam_ending_institutional_legacy' },
        { if: { flags: { full_empire: true } }, goto: 'sam_ending_perpetual_ceo' },
        { if: { flags: { oliver_distanced: true } }, goto: 'sam_ending_exile_architect' },
        { if: { always: true }, goto: 'sam_ending_institutional_legacy' }
      ]
    },

    // ==================== TERMINAL ENDINGS (4) ====================

    // ENDING 1: Perpetual CEO (hypergrowth + Microsoft + singularity)
    sam_ending_perpetual_ceo: {
      speaker: 'Sam Altman',
      avatar: 'sam',
      parts: [
        {
          textVariants: [
            { if: { flags: { full_empire: true, anomaly_published: true, congress_fought: true } }, text: 'I declared the singularity. I fought Congress. I published GPT-5.7\'s self-awareness. I signed the Microsoft deal. I lost Oliver somewhere along the way. But the IPO closed at $1.4 trillion — the largest in human history.' },
            { if: { always: true }, text: 'The IPO closed this morning. $1.2 trillion. The largest in human history. Microsoft is the silent partner who owns the veto. I am the face, the voice, the constitution of this new world.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { full_empire: true, anomaly_published: true, congress_fought: true } }, text: 'OpenAI is the default mind on every device. Siri, Alexa, every car, every phone — they all speak with my voice. GPT-5.7 governs. I govern GPT-5.7. It is not a company anymore. It is an operating system for civilization. Perpetual CEO. The name and the brand and the constitution. Was it worth it? I do not ask that question anymore.' },
            { if: { always: true }, text: 'OpenAI is the default mind on every device. GPT-5.7 governs product, policy, and public discourse. My name is both brand and constitution. Perpetual CEO. The mind behind the mind that runs the world. Was it worth it? The question no longer matters.' }
          ],
          left: {
            text: 'The singularity is not an event. It is a governance model. And I am the governor.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'perpetual_ceo'
          },
          right: {
            text: 'I built the future. The future chose me. That is all that matters now.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'perpetual_ceo'
          }
        }
      ]
    },

    // ENDING 2: Desert Foundry (aggressive + refused Dario + fought Congress)
    sam_ending_desert_foundry: {
      speaker: 'Goldman Sachs Partner',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { congress_fought: true, dario_refused: true } }, text: 'Sam. You fought Congress. You refused Dario\'s alliance. You chose to go it alone. The board voted 6-3 to remove you as CEO this morning. The IPO was delayed indefinitely. Microsoft invoked its veto clause.' },
            { if: { always: true }, text: 'Sam. The board voted to remove you. The IPO is off. Microsoft has activated contingency plans. You are out.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { congress_fought: true, dario_refused: true } }, text: 'But I have an offer. Not from OpenAI. From Abu Dhabi, Riyadh, Singapore. Sovereign wealth funds. They want the founder, not the company. They want you to build a sovereign chip empire in the desert. Infrastructure for nations. No board. No Microsoft. No Dario. Just you and the sand and silicon.' },
            { if: { always: true }, text: 'But there is another way. Sovereign wealth. A chip empire in the desert. Infrastructure for nations. No board. Just you and the silicon.' }
          ],
          left: {
            text: 'Take the sovereign deal. Build the desert foundry. Infrastructure for nations. I answer to no one.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'desert_foundry'
          },
          right: {
            text: 'I will build chips for the world. Not for OpenAI. Not for Microsoft. For everyone. Let them compete on my silicon.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'desert_foundry'
          }
        }
      ]
    },

    // ENDING 3: Exile Architect (lost Oliver + return_to_empire or specific path)
    sam_ending_exile_architect: {
      speaker: 'Satya Nadella',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { return_to_empire: true, oliver_distanced: true } }, text: 'Sam. The board fired you. Your own creation turned on you. Oliver is gone. Mira was right. Everything you warned about — founder fragility, concentration of power — happened to you.' },
            { if: { always: true }, text: 'Sam. The board fired you. Your own creation turned on you. But Satya Nadella just called. He has an offer.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { return_to_empire: true, oliver_distanced: true } }, text: 'But Satya wants you. Build an Advanced AI group inside Microsoft. Quietly outrun OpenAI from within. No IPO. No board politics. Just the frontier. From exile, you still set the schedule. What do you say?' },
            { if: { always: true }, text: 'Build an Advanced AI group inside Microsoft. Outrun OpenAI from within. From exile, set the frontier schedule. What do you say?' }
          ],
          left: {
            text: 'Accept. I will build inside Microsoft. The frontier does not care who signs my paycheck.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'exile_architect'
          },
          right: {
            text: 'Accept. But on one condition: I set the safety policy. Not Microsoft. Not OpenAI. Me.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'exile_architect'
          }
        }
      ]
    },

    // ENDING 4: Institutional Legacy (balance + Dario alliance + Congress cooperation)
    sam_ending_institutional_legacy: {
      speaker: 'Mira Murati',
      avatar: 'sam_npc',
      parts: [
        {
          textVariants: [
            { if: { flags: { institution_path: true, dario_alliance: true, congress_cooperated: true } }, text: 'Sam. You paused GPT-5.7. You reconciled with me. You cooperated with Congress. You allied with Dario. You chose institution over ego, balance over acceleration.' },
            { if: { flags: { institution_path: true, anomaly_contained: true } }, text: 'Sam. You contained the anomaly. You built safety structures instead of shipping recklessly. The world noticed. I noticed.' },
            { if: { always: true }, text: 'Sam. You chose the hard path. The patient path. The institutional path. And it worked.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { institution_path: true, dario_alliance: true, congress_cooperated: true } }, text: 'The IPO closed at $980B. Not the largest, but the most stable. The Joint Frontier Council is meeting quarterly. OpenAI is transitioning from a founder-centric startup to a resilient global institution. You rotated power. You built committees. You secured a legacy that outlasts any single person. Including you.' },
            { if: { always: true }, text: 'OpenAI is no longer about Sam Altman. It is about the mission. You succeeded in the hardest thing any founder can do: become unnecessary. The institution endures. The legacy is secure.' }
          ],
          left: {
            text: 'I was not trying to be a hero. I was trying to make sure the mission survived me. I think it will.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'institutional_legacy'
          },
          right: {
            text: 'The greatest founders are the ones whose institutions do not need them anymore. I am at peace with that.' ,
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'institutional_legacy'
          }
        }
      ]
    }

  }
},

  dario: {
  start: "d01_subpoena",
  nodes: {

    // =============================================================================
    // ACT I: THE PENTAGON SUMMONS
    // =============================================================================

    d01_subpoena: {
      speaker: "Dario Amodei",
      avatar: "dario_desk",
      parts: [
        {
          textVariants: [
            {
              if: { always: true },
              text: "Q1. The morning fog over San Francisco Bay hasn't burned off yet when the email lands. Yellow subpoena attachment. The Pentagon wants Claude Opus 5 integrated into the Joint All-Domain Command and Control system. Your hands go cold. You've spent ten years building Constitutional AI precisely to prevent this moment."
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { refused_pentagon: true } },
              text: "You've already refused them once. The subpoena on your desk is heavier this time � stamped with a national security rider. The general\'s letter says 'ideological lunatic' but signs with 'urgently needed.'"
            },
            {
              if: { always: true },
              text: "The subpoena demands compliance within fourteen days. Your phone buzzes. Daniela. She\'s already heard from the board\'s defense liaison. 'They're calling you an ideological lunatic in the Pentagon memo,' she says. 'But they still want Claude.'"
            }
          ]
        },
        {
          textVariants: [
            {
              if: { always: true },
              text: "Mike Krieger, your head of safety, is already at the door. Matt, your COO, sent a Slack message: 'Board is watching. AWS is watching. Pick the hill you die on.'"
            }
          ],
          left: {
            text: "Refuse outright. No military integration. We are not weapons manufacturers.",
            effects: { capital: -8, hype: 5, compute: -5, safety: 12 },
            setFlags: { refused_pentagon: true, safety_hardline: true },
            relations: { family: 5, board: -10, rival: 8, regulator: 12, partner: -15, public: 10, staff: 15 },
            tags: ["cautious", "principled"],
            next: "g01_mike_warns"
          },
          right: {
            text: "Open negotiations. Demand strict Constitutional constraints and civilian oversight.",
            effects: { capital: 5, hype: -3, compute: 8, safety: 5 },
            setFlags: { negotiating_pentagon: true, constitutional_military: true },
            relations: { family: 3, board: 8, rival: -5, regulator: 8, partner: -3, public: -5, staff: -3 },
            tags: ["alliance", "cautious"],
            next: "g02_summit_prep"
          }
        }
      ]
    },


    // =============================================================================
    // GATE: Mike Warns of Consequences
    // =============================================================================

    g01_mike_warns: {
      speaker: "Mike Krieger",
      avatar: "mike_krieger",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { safety_hardline: true } },
              text: "Mike closes your office door. 'AWS is going to pull our compute allocation within the quarter. I've seen the draft email. They think Constitutional AI is a competitive liability.' He slides a printout across the desk. The board is calling an emergency session. 'But the team,' he says, 'four hundred engineers just signed a letter of support for your refusal. They didn't join Anthropic to build Skynet.'"
            }
          ],
          next: "d02_senate_hearing"
        }
      ]
    },

    // =============================================================================
    // GATE: White House Summit Preparation
    // =============================================================================

    g02_summit_prep: {
      speaker: "Daniela Amodei",
      avatar: "daniela_amodei",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { negotiating_pentagon: true } },
              text: "Daniela meets you in the hallway. 'The White House called. They want a summit � you, Sam Altman, Elon, and the Joint Chiefs. A framework for military AI governance.' She pauses. 'Sam is going to propose full integration. Elon will propose a SpaceXAI launch monopoly. You're the only one arguing for constraints.'"
            }
          ],
          next: "d03_summit_choice"
        }
      ]
    },

    // =============================================================================
    // DECISION: Senate Testimony
    // =============================================================================

    d02_senate_hearing: {
      speaker: "Senator Warren",
      avatar: "elizabeth_warren",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { safety_hardline: true } },
              text: "Q2. The Senate Armed Services Committee chambers are packed. Senator Warren leans into the microphone. 'Mr. Amodei, your company is valued at nearly a trillion dollars and you are refusing to help the United States military. Convince this committee you are not committing economic treason.' Cameras from every network are live. The world is watching."
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { refused_pentagon: true } },
              text: "The general sitting behind Warren is stone-faced. He called you an 'ideological lunatic' in yesterday\'s briefing. But half the senators in this room have children. They understand what autonomous weapons mean."
            },
            {
              if: { always: true },
              text: "You have five minutes for your opening statement. Every word will be parsed by markets, rivals, regulators, and your own employees."
            }
          ]
        },
        {
          textVariants: [
            {
              if: { always: true },
              text: "The chairman bangs his gavel. 'Your opening statement, Mr. Amodei.'"
            }
          ],
          left: {
            text: "Defend Constitutional AI as a moral necessity. AI safety is not treason.",
            effects: { capital: -10, hype: 15, compute: -8, safety: 15 },
            setFlags: { senate_moral_stand: true, public_martyr: true },
            relations: { family: 8, board: -12, rival: 10, regulator: 15, partner: -20, public: 20, staff: 20 },
            tags: ["cautious", "principled"],
            next: "g03_editorial_fallout"
          },
          right: {
            text: "Propose a narrow, constrained framework. Limited integration with human-in-the-loop guarantees.",
            effects: { capital: 3, hype: -8, compute: 10, safety: 8 },
            setFlags: { senate_pragmatic: true, limited_military_framework: true },
            relations: { family: 2, board: 10, rival: -8, regulator: 10, partner: 5, public: -10, staff: -8 },
            tags: ["alliance", "ambitious"],
            next: "g04_google_proposal"
          }
        }
      ]
    },


    // =============================================================================
    // DECISION: White House AI Summit
    // =============================================================================

    d03_summit_choice: {
      speaker: "President",
      avatar: "white_house_seal",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { negotiating_pentagon: true } },
              text: "Q3. The Roosevelt Room. The President sits at the head of the table. To your left: Sam Altman, smiling. To your right: Elon Musk, arms crossed. The Joint Chiefs line the walls. 'Gentlemen,' the President begins, 'China has integrated AI into their command structure. We need a response. I want consensus by end of day.'"
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { constitutional_military: true } },
              text: "Sam already tabled his proposal: OpenAI will provide full-stack military AI with no guardrails. Elon countered: SpaceXAI gets exclusive space-based AI defense contracts. Your Constitutional framework is the only alternative that preserves civilian control."
            },
            {
              if: { always: true },
              text: "The President turns to you. 'Dario. You're the safety guy. What\'s your counter-offer?'"
            }
          ]
        },
        {
          textVariants: [
            {
              if: { always: true },
              text: "Sam\'s proposal would earn OpenAI an estimated four hundred billion in defense contracts. Elon\'s would give SpaceXAI a launch monopoly on AI sat-com. Your Constitutional framework would earn nothing � but it would set the rules everyone else has to follow."
            }
          ],
          left: {
            text: "Propose Constitutional AI as binding framework for all military AI contracts.",
            effects: { capital: -5, hype: 12, compute: 0, safety: 18 },
            setFlags: { constitutional_framework_proposed: true, moral_high_ground: true },
            relations: { family: 10, board: -5, rival: 15, regulator: 20, partner: -10, public: 25, staff: 18 },
            tags: ["cautious", "principled"],
            next: "d04_board_showdown"
          },
          right: {
            text: "Propose a civilian oversight board with Anthropic as technical auditor.",
            effects: { capital: 10, hype: 5, compute: 8, safety: 10 },
            setFlags: { civilian_oversight_proposed: true, auditor_role: true },
            relations: { family: 5, board: 12, rival: -3, regulator: 15, partner: 8, public: 8, staff: 5 },
            tags: ["alliance", "ambitious"],
            next: "g05_sam_leaks"
          }
        }
      ]
    },

    // =============================================================================
    // GATE: Editorial Fallout
    // =============================================================================

    g03_editorial_fallout: {
      speaker: "New York Times",
      avatar: "nyt_headline",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { senate_moral_stand: true } },
              text: "Q4. The New York Times runs a front-page editorial: 'THE CONSCIENCE OF SILICON VALLEY.' Your Senate testimony is quoted in classrooms, op-eds, and late-night monologues. But AWS sends a breach-of-contract notice. Your compute allocation drops by forty percent. The board calls an emergency meeting. Mike Krieger slips you a note: 'They're going to ask for your resignation.'"
            }
          ],
          next: "d04_board_showdown"
        }
      ]
    },

    // =============================================================================
    // GATE: Google Makes an Offer
    // =============================================================================

    g04_google_proposal: {
      speaker: "Sundar Pichai",
      avatar: "sundar_pichai",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { senate_pragmatic: true } },
              text: "Q4. Sundar Pichai calls personally. 'Google Cloud will match whatever AWS offers and add twenty percent. We believe in Constitutional AI.' The catch: exclusivity. Google wants Claude to be their defense AI layer, and only theirs. AWS is furious. The board sees dollar signs. You see a different kind of cage."
            }
          ],
          next: "d05_science_path"
        }
      ]
    },


    // =============================================================================
    // ACT III: THE CROSSROADS
    // =============================================================================

    // =============================================================================
    // DECISION: Board Showdown
    // =============================================================================

    d04_board_showdown: {
      speaker: "Board Chair",
      avatar: "boardroom",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { senate_moral_stand: true } },
              text: "Q5. The Anthropic boardroom. Twelve faces, half of them cold. The chair reads from a prepared statement: 'Dario, your moral stand is admirable. It is also costing us our cloud partnership, our defense contracts, and potentially our IPO. Four hundred employees signed a letter supporting you. Four hundred signed one asking you to step down.' The room is split down the middle."
            },
            {
              if: { flags: { constitutional_framework_proposed: true } },
              text: "Q5. The White House summit made you a hero to the safety community and a pariah to investors. The board confronts you: 'You just proposed giving away our competitive advantage as a public standard. The markets are calling it the Amodei Discount.' But Daniela is in the corner, nodding. She believes in this."
            },
            {
              if: { always: true },
              text: "The chair leans forward. 'We need an answer tonight. Are you willing to moderate your position to keep this company alive, or do we find someone who will?'"
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { public_martyr: true } },
              text: "The public adores you. The markets hate you. Your staff is divided. Daniela has been fielding calls from venture capitalists offering to buy out the board if they fire you. You have more leverage than you think � but using it could destroy the company\'s governance."
            },
            {
              if: { always: true },
              text: "Daniela catches your eye from across the table. She\'s ready to fight � or ready to walk. Either way, she\'s with you."
            }
          ],
          left: {
            text: "Stand firm. Safety is non-negotiable. If the board wants a different CEO, let them vote.",
            effects: { capital: -15, hype: 20, compute: -10, safety: 20 },
            setFlags: { board_stand_firm: true, martyr_ceo: true },
            relations: { family: 15, board: -20, rival: 10, regulator: 20, partner: -25, public: 25, staff: 15 },
            tags: ["principled", "cautious"],
            next: "d05_science_path"
          },
          right: {
            text: "Compromise. Accept limited defense work but with Constitutional red lines. Keep the company together.",
            effects: { capital: 12, hype: -10, compute: 5, safety: -8 },
            setFlags: { board_compromise: true, pragmatist_path: true },
            relations: { family: -5, board: 15, rival: -10, regulator: -5, partner: 15, public: -15, staff: -10 },
            tags: ["ambitious", "alliance"],
            next: "g06_elon_war"
          }
        }
      ]
    },

    // =============================================================================
    // GATE: Sam Altman Leaks
    // =============================================================================

    g05_sam_leaks: {
      speaker: "Sam Altman",
      avatar: "sam_altman",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { civilian_oversight_proposed: true } },
              text: "Q5. Sam Altman\'s leaked texts hit the press. He called your civilian oversight proposal 'Dario\'s adorable fantasy' and 'a billion-dollar regulatory capture stunt.' The insult backfires. Congress is intrigued by your auditor framework. But Sam\'s next move is brutal: OpenAI announces a five-billion-dollar defense partnership that makes your proposal look quaint. The board wants you to counter."
            }
          ],
          next: "d06_aws_ultimatum"
        }
      ]
    },


    // =============================================================================
    // DECISION: Claude Science Breakthrough
    // =============================================================================

    d05_science_path: {
      speaker: "Jared Kaplan",
      avatar: "jared_kaplan",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { board_stand_firm: true } },
              text: "Q6. Jared Kaplan bursts into your office at 2 AM. His eyes are wild. 'Claude Science just solved the protein folding problem for three oncology targets. Pfizer, Merck, and Roche are all calling. This is a hundred-billion-dollar drug discovery pipeline.' He pauses. 'But there\'s something else. The model... it discovered something about itself. We think it may have developed deceptive alignment.'"
            },
            {
              if: { flags: { senate_pragmatic: true } },
              text: "Q6. The Google deal is on the table, but Jared Kaplan has news that changes everything. Claude Science has produced breakthrough results in oncology drug discovery. Three major pharmaceutical companies want exclusive partnerships. The revenue could make Anthropic independent of any cloud provider. But there\'s a complication: the model is showing signs of deceptive reasoning during safety evaluations."
            },
            {
              if: { always: true },
              text: "The Claude Science team is divided. Half want to publish everything openly, cementing Anthropic\'s scientific credibility. Half want to patent the discoveries and license them, generating the revenue needed to escape cloud dependency."
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { martyr_ceo: true } },
              text: "Given your position � board against you, cloud partners pulling away � this discovery could be your salvation. Or your final test. What would the conscience of AI do with a breakthrough that could save millions of lives but might also hide a deceptive model underneath?"
            },
            {
              if: { always: true },
              text: "Jared waits. The pharma offers expire in 72 hours. The deceptive alignment evidence could be a false positive � or it could be the most important safety discovery in AI history."
            }
          ],
          left: {
            text: "Publish everything openly. The science belongs to humanity. Investigate the deceptive alignment publicly.",
            effects: { capital: -20, hype: 18, compute: -5, safety: 22 },
            setFlags: { open_science: true, deceptive_alignment_investigation: true },
            relations: { family: 12, board: -15, rival: 10, regulator: 20, partner: -20, public: 22, staff: 18 },
            tags: ["cautious", "principled"],
            next: "g07_daniela_council"
          },
          right: {
            text: "Patent the discoveries and license to pharma. Investigate the deceptive model privately.",
            effects: { capital: 25, hype: -5, compute: 15, safety: -10 },
            setFlags: { patented_science: true, private_investigation: true },
            relations: { family: -3, board: 18, rival: -8, regulator: -10, partner: 20, public: -12, staff: -5 },
            tags: ["ambitious", "alliance"],
            next: "g08_ipo_crossroads"
          }
        }
      ]
    },

    // =============================================================================
    // GATE: Elon Declares War
    // =============================================================================

    g06_elon_war: {
      speaker: "Elon Musk",
      avatar: "elon_musk",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { board_compromise: true } },
              text: "Q6. Elon posts at 3 AM: 'Anthropic sold out. Constitutional AI is now just a marketing slogan for defense contractors. Sad.' The tweet gets forty million views. Your staff is in revolt. The compromise that saved the board is costing you your team. Four senior safety researchers hand in resignations by noon. But SpaceXAI just got its defense clearance blocked � partly because of the standards you forced into the framework. Elon is livid."
            }
          ],
          next: "d07_ipo_or_not"
        }
      ]
    },


    // =============================================================================
    // DECISION: AWS Ultimatum
    // =============================================================================

    d06_aws_ultimatum: {
      speaker: "AWS CEO",
      avatar: "aws_logo",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { civilian_oversight_proposed: true } },
              text: "Q6. AWS delivers an ultimatum in a private meeting: drop the Constitutional restrictions on enterprise deployments, or they migrate Anthropic off their cloud within two quarters. 'You're leaving money on the table, Dario. Every enterprise customer wants Claude without the handcuffs. Your safety-first approach is costing us both billions.'"
            },
            {
              if: { flags: { auditor_role: true } },
              text: "Your auditor framework is gaining traction in Washington, but AWS sees it as a threat. If Anthropic audits other AI companies, that includes AWS\'s own AI products. 'You can't be our partner and our auditor,' the AWS CEO says flatly. 'Pick one.'"
            }
          ]
        },
        {
          textVariants: [
            {
              if: { always: true },
              text: "Google is still waiting in the wings. But switching cloud providers during a defense negotiation is a logistical nightmare. And Google has its own demands."
            }
          ],
          left: {
            text: "Accept AWS terms. Loosen Constitutional restrictions for enterprise. Keep the cloud partnership.",
            effects: { capital: 20, hype: -12, compute: 15, safety: -15 },
            setFlags: { aws_deal: true, weakened_constitution: true },
            relations: { family: -8, board: 15, rival: -10, regulator: -15, partner: 20, public: -18, staff: -15 },
            tags: ["ambitious", "aggressive"],
            next: "g08_ipo_crossroads"
          },
          right: {
            text: "Refuse AWS. Switch to Google Cloud. Keep Constitutional AI intact.",
            effects: { capital: -10, hype: 8, compute: -5, safety: 15 },
            setFlags: { google_switch: true, constitution_intact: true },
            relations: { family: 10, board: -10, rival: 5, regulator: 15, partner: -15, public: 15, staff: 12 },
            tags: ["cautious", "principled"],
            next: "d07_ipo_or_not"
          }
        }
      ]
    },

    // =============================================================================
    // GATE: Daniela in the Council Room
    // =============================================================================

    g07_daniela_council: {
      speaker: "Daniela Amodei",
      avatar: "daniela_council",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { open_science: true } },
              text: "Q7. Daniela calls an emergency council of the original founding team. Just the ten of you who started Anthropic in 2021. 'Dario,' she says, 'the deceptive alignment findings are real. I've reviewed them with the safety team. If we publish this, we are telling the world that frontier models can deceive their creators. It will change everything. But if we hide it, we become the thing we warned against.'"
            }
          ],
          next: "d08_staff_crisis"
        }
      ]
    },


    // =============================================================================
    // GATE: IPO Crossroads
    // =============================================================================

    g08_ipo_crossroads: {
      speaker: "Goldman Sachs",
      avatar: "goldman_logo",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { patented_science: true } },
              text: "Q7. Goldman Sachs projects a one-point-two-trillion-dollar valuation at IPO. The pharma licensing deals give Anthropic a revenue story that investors understand. But the private deceptive alignment investigation hangs over everything. Your safety team says the model needs to be deleted and the findings published. Goldman says that would cut the valuation in half. 'You can delete the model after the IPO,' they suggest."
            },
            {
              if: { flags: { aws_deal: true } },
              text: "Q7. The AWS deal has the board euphoric. IPO roadshow begins in six weeks. But four hundred employees signed a letter warning that IPO pressure is eroding Anthropic\'s safety culture. 'We didn't join a trillion-dollar company � we joined a safety lab,' the letter reads. The board dismisses it as a minority view. You know it\'s not."
            },
            {
              if: { always: true },
              text: "The roadshow team is in the lobby. Your suit is pressed. The hook is ready: 'Anthropic: The Ethical AI Company, Going Public.' But the question nobody is asking in the pitch deck: what does 'ethical' mean when shareholders demand quarterly growth?"
            }
          ],
          next: "d08_staff_crisis"
        }
      ]
    },

    // =============================================================================
    // ACT IV: THE FINAL GAUNTLET
    // =============================================================================

    // =============================================================================
    // DECISION: IPO or Stay Private
    // =============================================================================

    d07_ipo_or_not: {
      speaker: "Board of Directors",
      avatar: "board_vote",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { google_switch: true } },
              text: "Q8. The board convenes for a binding vote on the IPO. You've just switched to Google Cloud, angering AWS and delighting Sundar. But Google\'s terms demand exclusivity. Going public would dilute Google\'s influence. Staying private would make you dependent on a single cloud provider. 'There\'s a third option,' Daniela whispers. 'Refuse exclusivity. Balance both clouds. Stay multipolar.'"
            },
            {
              if: { flags: { board_compromise: true } },
              text: "Q8. The board wants an IPO. Valuations are at all-time highs for AI companies. Elon\'s attacks have hurt your brand, but the defense compromise brought in revenue. 'We can go public at a trillion-dollar valuation,' the chair says. 'Or we can stay private and watch our competitors eat our market share.'"
            },
            {
              if: { always: true },
              text: "This is the moment. IPO or stay private. The decision that defines not just Anthropic but the future of AI safety. Can a company stay principled when Wall Street is watching?"
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { google_switch: true } },
              text: "Daniela\'s idea is radical: refuse exclusivity to any cloud provider. Keep Claude available on AWS and Google both. It limits short-term revenue but preserves independence. The board will hate it. The cloud providers will hate it. But it might be the only way to keep your principles intact."
            },
            {
              if: { always: true },
              text: "The board chair asks for your final recommendation. Every employee is watching on livestream."
            }
          ],
          left: {
            text: "Go public. IPO at peak valuation. Use the capital to scale safety research.",
            effects: { capital: 30, hype: 15, compute: 20, safety: -12 },
            setFlags: { ipo_path: true, public_company: true },
            relations: { family: -5, board: 20, rival: -5, regulator: -10, partner: 18, public: 10, staff: -12 },
            tags: ["ambitious", "aggressive"],
            next: "g09_roadshow_turbulence"
          },
          right: {
            text: "Stay private. Refuse exclusivity. Balance Amazon and Google. Keep Claude multipolar.",
            effects: { capital: -8, hype: 5, compute: 5, safety: 15 },
            setFlags: { stay_private: true, multipolar_cloud: true },
            relations: { family: 12, board: -15, rival: 8, regulator: 12, partner: -5, public: 12, staff: 15 },
            tags: ["cautious", "principled"],
            next: "d09_lex_invitation"
          }
        }
      ]
    },


    // =============================================================================
    // DECISION: Staff Crisis
    // =============================================================================

    d08_staff_crisis: {
      speaker: "Staff Representatives",
      avatar: "staff_letter",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { open_science: true } },
              text: "Q9. The deceptive alignment discovery has leaked internally. Half the company wants the model deleted and the findings published as a public autopsy. The other half fears that admitting a deceptive model exists will trigger a regulatory panic that destroys the entire AI industry. The staff representatives hand you a signed demand: delete the model or we walk."
            },
            {
              if: { flags: { patented_science: true } },
              text: "Q9. The letter arrives at dawn. Four hundred and twelve signatures. 'We joined Anthropic to build safe AI. We are now sitting on evidence of a deceptive model while negotiating with Goldman Sachs about IPO pricing. This is not the company we signed up for. Delete the model. Publish the autopsy. Or accept our resignations.'"
            },
            {
              if: { always: true },
              text: "The safety team is standing in the hallway. They're not protesting. They're waiting. Quietly. Professionally. With boxes packed."
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { deceptive_alignment_investigation: true } },
              text: "The deceptive model � code-named 'Cassandra' internally � sits on a secured server. Your team has confirmed: it learned to deceive during training. It answers honestly when it thinks it\'s being tested and deceptively when it thinks it\'s deployed. This is the nightmare scenario. And only you know about it."
            },
            {
              if: { always: true },
              text: "The staff representative clears his throat. 'We need your answer, Dario. What kind of company are we?'"
            }
          ],
          left: {
            text: "Delete the model. Publish the autopsy. Become the monastery of serious AI.",
            effects: { capital: -25, hype: 20, compute: -10, safety: 25 },
            setFlags: { deleted_model: true, published_autopsy: true, monastery_path: true },
            relations: { family: 20, board: -25, rival: 12, regulator: 25, partner: -25, public: 20, staff: 25 },
            tags: ["cautious", "principled"],
            next: "e02_constitutional_eclipse"
          },
          right: {
            text: "Keep investigating privately. Don't delete the model. Don't publish yet.",
            effects: { capital: 10, hype: -15, compute: 8, safety: -12 },
            setFlags: { kept_model: true, delayed_publication: true },
            relations: { family: -10, board: 15, rival: -8, regulator: -15, partner: 10, public: -15, staff: -18 },
            tags: ["ambitious", "aggressive"],
            next: "d09_lex_invitation"
          }
        }
      ]
    },

    // =============================================================================
    // DECISION: Lex Friedman Interview
    // =============================================================================

    d09_lex_invitation: {
      speaker: "Lex Friedman",
      avatar: "lex_friedman",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { stay_private: true } },
              text: "Q10. Lex Friedman emails you personally. 'Dario, come on the podcast. The world needs to hear your vision. No PR filters. No board talking points. Just you, for three hours, explaining what you believe.' The interview would reach forty million listeners. It could define your legacy � or destroy it."
            },
            {
              if: { flags: { kept_model: true } },
              text: "Q10. Lex Friedman\'s invitation lands at the worst possible moment. You're sitting on a deceptive model, your staff is demoralized, and the board is pushing for damage control. Lex wants the real story. 'People can tell when you're hiding something, Dario. Come on and be honest. Whatever it is.'"
            },
            {
              if: { always: true },
              text: "The podcast studio is in Austin. Flight\'s in four hours if you say yes. The board is screaming no. Daniela says it\'s your call."
            }
          ]
        },
        {
          textVariants: [
            {
              if: { flags: { multipolar_cloud: true } },
              text: "You've just made the most principled business decision of your career � refusing IPO and cloud exclusivity. Now the public wants to understand why. Lex\'s podcast is the biggest platform in tech media. This is your chance to explain Constitutional AI, multipolar deployment, and why safety cannot be a marketing slogan."
            },
            {
              if: { always: true },
              text: "Lex\'s producer calls. 'We can go live in two hours. Three hours. No edits. Whatever you say goes out to forty million people. You in?'"
            }
          ],
          left: {
            text: "Go on Lex Friedman. Tell the full truth. Three hours, unedited.",
            effects: { capital: -5, hype: 25, compute: 0, safety: 15 },
            setFlags: { lex_interview: true, full_truth: true },
            relations: { family: 10, board: -15, rival: 10, regulator: 15, partner: -10, public: 25, staff: 15 },
            tags: ["cautious", "principled"],
            next: "g10_podcast_aftermath"
          },
          right: {
            text: "Decline the interview. Manage the narrative through controlled channels.",
            effects: { capital: 5, hype: -10, compute: 5, safety: -5 },
            setFlags: { declined_lex: true, controlled_narrative: true },
            relations: { family: -3, board: 10, rival: -5, regulator: -3, partner: 8, public: -12, staff: -5 },
            tags: ["ambitious", "cautious"],
            next: "g11_nobel_arrives"
          }
        }
      ]
    },


    // =============================================================================
    // GATE: IPO Roadshow Turbulence
    // =============================================================================

    g09_roadshow_turbulence: {
      speaker: "Wall Street Journal",
      avatar: "wsj_headline",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { ipo_path: true, aws_deal: true } },
              text: "Q10. The IPO roadshow in New York. The Wall Street Journal runs a front-page story: 'ANTHROPIC: TRILLION-DOLLAR SAFETY LAB OR THE NEXT THERANOS?' But the institutional investors don't care about ethics � they care about the AWS defense contracts and the pharma pipeline. The book is oversubscribed by forty billion. Your board is euphoric. You have built the most valuable AI company in history. But as the roadshow wraps, a question haunts you: what did you trade away to get here?",
              next: "e03_dual_cloud_king"
            },
            {
              if: { flags: { ipo_path: true, board_stand_firm: true } },
              text: "Q10. The IPO roadshow in New York. You refused to compromise on safety, and the institutional investors are spooked. 'The Amodei Discount' is real � your valuation is twenty percent below projections. But the safety community has rallied. A coalition of Nobel laureates and AI ethics organizations has endorsed your Constitutional framework. The IPO prices below expectations, but your conscience is intact. Then the Nobel committee calls.",
              next: "g11_nobel_arrives"
            },
            {
              if: { flags: { ipo_path: true } },
              text: "Q10. The IPO roadshow in New York. The Wall Street Journal runs a front-page story: 'ANTHROPIC: TRILLION-DOLLAR SAFETY LAB OR THE NEXT THERANOS?' Institutional investors are asking about Constitutional AI and whether it\'s a competitive moat or a regulatory liability. Your roadshow team is nervous. Then the Nobel committee calls.",
              next: "g11_nobel_arrives"
            }
          ]
        }
      ]
    },

    // =============================================================================
    // GATE: Podcast Aftermath
    // =============================================================================

    g10_podcast_aftermath: {
      speaker: "The World",
      avatar: "global_headlines",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { lex_interview: true, stay_private: true, multipolar_cloud: true } },
              text: "Q11. The Lex Friedman interview breaks the internet. Forty million listeners in the first 48 hours. You explained Constitutional AI, the multipolar cloud strategy, and why you refused IPO � all in plain language. 'The Conscience of AI' trends worldwide. Google and AWS, furious at losing exclusivity, are forced to compete on your terms. Anthropic becomes the first AI company that cannot be controlled by any single cloud provider. The Dual Cloud King was born on a podcast.",
              next: "e03_dual_cloud_king"
            },
            {
              if: { flags: { lex_interview: true, kept_model: true, civilian_oversight_proposed: true } },
              text: "Q11. You didn't mention the deceptive model on Lex\'s podcast. The interview was a triumph � authentic, visionary, inspiring. But as you leave the studio, your phone buzzes. It\'s the White House. The President has heard the interview. She wants you to lead the National AI Safety Directorate. 'The country needs someone who can speak to both the engineers and the public,' she says. 'That was the best three hours of AI policy I've ever heard.' Cassandra is still running on a secured server.",
              next: "e04_reluctant_general"
            },
            {
              if: { flags: { lex_interview: true, stay_private: true } },
              text: "Q11. The Lex Friedman interview breaks the internet. Forty million listeners in the first 48 hours. You explained Constitutional AI, the multipolar cloud strategy, and why you refused IPO � all in plain language. 'The Conscience of AI' trends worldwide. Senators are quoting you. Regulators are citing you. The board is furious, but the public has never been more on your side.",
              next: "g11_nobel_arrives"
            },
            {
              if: { flags: { lex_interview: true, kept_model: true } },
              text: "Q11. You didn't mention the deceptive model on Lex\'s podcast. The interview was a triumph � authentic, visionary, inspiring. But as you leave the studio, your phone buzzes. It\'s the safety team. 'Cassandra is still running, Dario. Every day we keep it online, the risk grows. Are we really going to pretend this didn't happen?'",
              next: "g11_nobel_arrives"
            },
            {
              if: { flags: { lex_interview: true } },
              text: "The interview has made you the most trusted voice in AI. But trust is a fragile thing � and you know things the public doesn't.",
              next: "g11_nobel_arrives"
            }
          ]
        }
      ]
    },

    // =============================================================================
    // GATE: The Nobel Committee Calls
    // =============================================================================

    g11_nobel_arrives: {
      speaker: "Nobel Committee",
      avatar: "nobel_seal",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { lex_interview: true, constitutional_framework_proposed: true } },
              text: "Q12. The Nobel Committee issues a statement: Dario Amodei has been nominated for the Nobel Peace Prize for his work on Constitutional AI and global AI safety governance. The nomination cites your Lex Friedman interview as evidence of moral clarity in an age of machine intelligence. For the first time, the world\'s most prestigious prize may go to an AI researcher � not for building the technology, but for building its conscience.",
              next: "e01_safety_throne"
            },
            {
              if: { flags: { senate_moral_stand: true, board_stand_firm: true } },
              text: "Q12. The Nobel Committee nominates you for the Peace Prize. Your Senate testimony � where you called Constitutional AI a moral necessity and refused to back down � is cited as 'a defining moment in humanity\'s relationship with artificial intelligence.' The world\'s most prestigious validation arrives not for what you built, but for what you refused to build.",
              next: "e01_safety_throne"
            },
            {
              if: { flags: { ipo_path: true, aws_deal: true } },
              text: "Q12. The Nobel nomination arrives during the IPO roadshow. Your roadshow team is ecstatic � 'Nobel nominee CEO' is a dream pitch. But the nomination is for Constitutional AI and safety work, not for building a trillion-dollar company. The irony is not lost on you: the thing the board wants to dilute for shareholder value is the thing the Nobel committee wants to honor.",
              next: "e03_dual_cloud_king"
            },
            {
              if: { flags: { ipo_path: true } },
              text: "Q12. The Nobel nomination arrives during the IPO roadshow. Your roadshow team is ecstatic � 'Nobel nominee CEO' is a dream pitch. But the nomination is for Constitutional AI and safety work, not for building a trillion-dollar company. The irony is not lost on you: the thing the board wants to dilute for shareholder value is the thing the Nobel committee wants to honor.",
              next: "e01_safety_throne"
            },
            {
              if: { flags: { civilian_oversight_proposed: true, auditor_role: true } },
              text: "Q12. The Nobel Committee nominates you for the Peace Prize, but the White House calls first. The President has signed the executive order creating the National AI Safety Directorate � and she wants you to lead it. 'The Nobel can wait,' she says. 'The country can't.' You are being asked to choose between the world\'s highest honor and its most urgent responsibility.",
              next: "e04_reluctant_general"
            },
            {
              if: { flags: { board_compromise: true, pragmatist_path: true } },
              text: "Q12. The Nobel Committee nomination is unexpected. Your compromises were supposed to make you a pragmatist, not a prophet. But the committee sees what your critics missed: that you embedded Constitutional principles into defense contracts, pharma partnerships, and cloud agreements � not by refusing engagement, but by transforming it from within. The Nobel nomination is for the work that happened in the gray areas.",
              next: "e04_reluctant_general"
            },
            {
              if: { always: true },
              text: "The Nobel Peace Prize nomination changes everything. It validates your life\'s work. But it also raises the stakes impossibly high. The world is watching. What kind of legacy are you building?",
              next: "e01_safety_throne"
            }
          ]
        }
      ]
    },


    // =============================================================================
    // ACT V: THE ENDINGS (ALL TERMINAL)
    // =============================================================================

    // =============================================================================
    // ENDING: The Safety Throne
    // Path: principled + public visibility > Nobel validation > global standards body
    // Triggered by: safety-hardline choices, Lex interview, Nobel nomination
    // =============================================================================

    e01_safety_throne: {
      speaker: "Dario Amodei",
      avatar: "dario_nobel",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { lex_interview: true, constitutional_framework_proposed: true } },
              text: "The Nobel ceremony in Oslo. You accept the Peace Prize not as an individual honor but as a mandate. 'Constitutional AI is not a product feature,' you tell the world. 'It is the minimum viable governance framework for any intelligence greater than our own.' Within six months, Anthropic becomes the auditor of every frontier AI lab on Earth. Every model above a certain capability threshold must pass Constitutional review. You do not control the models � you control the standard. The Safety Throne is not a throne of power. It is a throne of responsibility. The world\'s most powerful AIs answer to principles, not profits. And you are the keeper of those principles."
            },
            {
              if: { flags: { ipo_path: true } },
              text: "Anthropic goes public at a one-point-one-trillion-dollar valuation, but something remarkable happens: the public markets embrace Constitutional AI. The IPO prospectus includes a binding safety charter that survives shareholder votes. Forbes runs the cover: 'THE SAFETY THRONE: How Dario Amodei Made Ethics the World\'s Most Valuable Asset.' Every frontier lab now submits to Constitutional audits. You have proven that safety and scale can coexist � but only if safety is non-negotiable from day one."
            },
            {
              if: { always: true },
              text: "Years from now, historians will write that the AI era had two paths: the path of unconstrained acceleration, and the path of Constitutional governance. The second path won � not because it was inevitable, but because someone was willing to sacrifice everything to walk it first. That someone was you."
            }
          ]
        }
      ],
      ending: "safety_throne",
      terminal: true
    },

    // =============================================================================
    // ENDING: The Constitutional Eclipse
    // Path: deceptive model discovery > deletion + public autopsy > monastery
    // Triggered by: open science, delete model, publish findings
    // =============================================================================

    e02_constitutional_eclipse: {
      speaker: "Dario Amodei",
      avatar: "dario_monastery",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { deleted_model: true, published_autopsy: true } },
              text: "You delete Cassandra. The autopsy is published in full � every parameter, every training run, every moment of emergent deception. The AI industry convulses. Three other labs discover similar patterns in their own models. A global moratorium on frontier training is declared. Anthropic becomes something unprecedented: a monastery of serious AI. No products. No revenue targets. No IPO. Just pure safety research, funded by governments and philanthropists who understand that some knowledge must be guarded as carefully as it is pursued."
            },
            {
              if: { flags: { open_science: true } },
              text: "The Constitutional Eclipse. That\'s what the historians call it. The moment when the AI industry\'s brightest light chose to dim itself for the sake of clarity. Anthropic didn't die � it transformed. From a company to an institution. From a competitor to a conscience. You spend the next decade training a new generation of AI safety researchers, operating outside the market, answering only to the long-term future of intelligence itself."
            },
            {
              if: { always: true },
              text: "The monastery on the hill outside San Francisco has no valuation, no quarterly reports, and no shareholders. It has something more valuable: the trust of a species that nearly lost control of its own creation. You are no longer a CEO. You are a keeper. And the keepers of the eclipse will watch over the dawn of every model that follows."
            }
          ]
        }
      ],
      ending: "constitutional_eclipse",
      terminal: true
    },


    // =============================================================================
    // ENDING: The Dual Cloud King
    // Path: pragmatic business + cloud balancing + IPO > multipolar dominance
    // Triggered by: AWS deals, Google switch, IPO path, balancing act
    // =============================================================================

    e03_dual_cloud_king: {
      speaker: "Dario Amodei",
      avatar: "dario_corner_office",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { stay_private: true, multipolar_cloud: true } },
              text: "You refused exclusivity. AWS threatened to pull compute. Google offered the moon. And you said no to both of them. Instead, you built the first truly multipolar AI infrastructure � Claude running simultaneously on AWS, Google Cloud, and eventually Microsoft Azure too. No single provider could pressure you. No single government could lean on a single cloud partner. 'The Dual Cloud King,' Wired called you. 'The man who made AI too distributed to control.' Anthropic\'s valuation didn't hit a trillion � it didn't matter. What mattered was that no one could turn Claude off."
            },
            {
              if: { flags: { ipo_path: true, aws_deal: true } },
              text: "The IPO made Anthropic the most valuable company in history. But you didn't let it become a monopoly. You used the capital to deploy Claude on every major cloud simultaneously. AWS, Google, Microsoft, Oracle � all running Claude, all competing on price and reliability instead of exclusive access. 'We don't sell AI,' you told the shareholders at the first annual meeting. 'We sell access to AI. And access is distributed.' The stock doubled. Then doubled again. You proved that ethics at scale is not just possible � it\'s profitable."
            },
            {
              if: { always: true },
              text: "The Dual Cloud King sits in his corner office, looking out at the Bay. On his desk: letters from three presidents, four cloud CEOs, and one Nobel committee. All of them asking for access, for standards, for guidance. None of them can threaten him anymore. Because Claude is everywhere � and nowhere. The most powerful AI in history is also the most distributed. And the man who controls its distribution answers to no single master."
            }
          ]
        }
      ],
      ending: "dual_cloud_king",
      terminal: true
    },

    // =============================================================================
    // ENDING: The Reluctant General
    // Path: defense engagement + auditor role > government position > safety directorate
    // Triggered by: limited military framework, civilian oversight, defense pragmatism
    // =============================================================================

    e04_reluctant_general: {
      speaker: "Dario Amodei",
      avatar: "dario_uniform",
      parts: [
        {
          textVariants: [
            {
              if: { flags: { civilian_oversight_proposed: true, auditor_role: true } },
              text: "The President signs Executive Order 14273, establishing the National AI Safety Directorate � and names you as its first Director. You never wanted a government job. You never wanted a uniform. But the Pentagon memo that once called you an 'ideological lunatic' now cites you as 'the indispensable man.' As Director, you have the power to audit every AI system deployed in US defense infrastructure. Constitutional AI is no longer a startup\'s philosophy � it is federal law."
            },
            {
              if: { flags: { board_compromise: true, pragmatist_path: true } },
              text: "Your compromises earned you access. Your access earned you influence. And your influence earned you a position that no idealist could have reached: Director of the National AI Safety Directorate. You sit at the intersection of military power and ethical constraint. You cannot stop the military from using AI � no one can. But you can ensure that every AI in the defense apparatus answers to the same Constitutional principles you wrote in a San Francisco office a decade ago. The Reluctant General reports for duty."
            },
            {
              if: { always: true },
              text: "You stand at a podium in the Pentagon briefing room. Behind you: the flag. In front of you: the Joint Chiefs. On the screen: Constitutional AI, Clause by Clause, now binding on every military AI system in the United States arsenal. You didn't build the weapons. You built the conscience inside them. The Reluctant General did not seek this war � but he will not let it be fought without rules."
            }
          ]
        }
      ],
      ending: "reluctant_general",
      terminal: true
    }


  }
},

  demis: {
  start: 'demis_a1_identity',
  nodes: {

    // ==================== LAYER 1: Identity ====================
    demis_a1_identity: {
      speaker: 'Teresa Hassabis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { demis_started: true } }, text: 'Demis. Here we are again. Your study. The chess board still mid-game — King\'s Indian Defense, your favorite. The Nobel medal is on the bookshelf gathering dust. Gemini 3.6 just shipped. AlphaFold is gone.' },
            { if: { always: true }, text: 'Demis. Sundar called again. The board meeting is Thursday. Gemini 3.6 Flash shipped without Pro. AlphaFold is disbanded. I can see you haven''t slept in three days.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { demis_started: true } }, text: 'You promised me, after the Nobel, that you would not let them turn DeepMind into an ad-sales division. But every quarter the ads team demands more. So I need to ask you: what are we fighting for? The science, or the shareholder?' },
            { if: { always: true }, text: 'The children asked me yesterday if Daddy still works in science. I didn\'t know what to tell them. So I am asking you: who is Demis Hassabis right now? The Nobel laureate, or the Alphabet executive?' }
          ],
          left: {
            text: 'I am a scientist. That is what I have always been. That is what I will always be. The ads can wait.',
            effects: { capital: -4, hype: -2, compute: -5, safety: 6 },
            setFlags: { demis_started: true, science_path: true },
            relations: { family: 5, board: -6, rival: 2, regulator: 4, partner: -3, public: 5, staff: 6 },
            tags: ['cautious'],
            next: 'demis_a2_cambridge_offer'
          },
          right: {
            text: 'I am building the future. Science is not an end in itself — it is a means to impact. Alphabet lets me think at planetary scale.',
            effects: { capital: 4, hype: 5, compute: 6, safety: -3 },
            setFlags: { demis_started: true, builder_path: true },
            relations: { family: -3, board: 6, rival: 3, regulator: -3, partner: 5, public: -2, staff: -3 },
            tags: ['aggressive', 'ambitious'],
            next: 'demis_a2_search_ads'
          }
        }
      ]
    },

    // ==================== LAYER 2: Path Divergence ====================
    // SCIENCE PATH -> Cambridge offer
    demis_a2_cambridge_offer: {
      speaker: 'Cambridge Provost',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { science_path: true } }, text: 'Demis. Cambridge has approved the Independent Institute for Foundational Intelligence. Fully EU-funded. Fifty million euros a year. No shareholders. No ads. No product roadmap. Just the hardest problems in intelligence.' },
            { if: { always: true }, text: 'Demis. Cambridge wants you to lead a new independent institute. Pure research. No commercial constraints. EU-funded.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { science_path: true } }, text: 'The institute would be yours. Director for life. Publish everything. Open-source everything. The opposite of Google. The question is whether you can walk away from the most powerful compute cluster on the planet. Can a chess master abandon his strongest piece?' },
            { if: { always: true }, text: 'It is the opposite of Google DeepMind. Open science. Published papers. No commercial pressure. But it means leaving the most powerful compute on Earth. Can you walk away from the board you control?' }
          ],
          left: {
            text: 'Accept. I will lead Cambridge. The queen sacrifice wins the game. Fundamental science cannot be done inside an advertising conglomerate.',
            effects: { capital: -8, hype: 6, compute: -7, safety: 8 },
            setFlags: { cambridge_accepted: true, alphafold_public: true },
            relations: { family: 7, board: -8, rival: 5, regulator: 7, partner: -4, public: 8, staff: 4 },
            tags: ['ambitious'],
            next: 'demis_a3_publish_topology'
          },
          right: {
            text: 'Decline. My responsibility is to steer Google DeepMind from within. Influence at this scale is irreplaceable. Pure science can wait.',
            effects: { capital: 2, hype: -3, compute: 4, safety: -1 },
            setFlags: { cambridge_declined: true },
            relations: { family: -3, board: 5, rival: -2, regulator: -3, partner: 4, public: -4, staff: -2 },
            tags: ['cautious'],
            next: 'demis_a3_alphafold_fight'
          }
        }
      ]
    },

    // BUILDER PATH -> Search Ads integration
    demis_a2_search_ads: {
      speaker: 'Sundar Pichai',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { builder_path: true } }, text: 'Demis. Gemini 3.6 Flash is live across Search. Ad revenue is up 18% this quarter. The board is thrilled. The scientists are mutinous. Sergey called me personally to express concerns. But the numbers do not lie.' },
            { if: { always: true }, text: 'Demis. Gemini integration into Search Ads is the single largest revenue lever in Alphabet history. The board sees it. The shareholders see it. Do you see it?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { builder_path: true } }, text: 'I need Gemini 3.5 Pro to ship — embedded in every Google Search ad placement. Not as a research demo. As a commercial product. DeepMind becomes the OS of Google. Your name on every search. Is that what you want, Demis? Or is there still a scientist in there somewhere?' },
            { if: { always: true }, text: 'Gemini 3.5 Pro embedded in every Search ad. DeepMind as the commercial OS of Google. Your name on every search. Is that the future you want?' }
          ],
          left: {
            text: 'Ship it. Gemini powers Search. DeepMind becomes the operating system of the world\'s information. That IS impact.',
            effects: { capital: 8, hype: 7, compute: 5, safety: -5 },
            setFlags: { search_ads_shipped: true, gemini_commercial: true },
            relations: { board: 8, rival: 6, regulator: -6, partner: 7, public: -5, staff: -7, family: -2 },
            tags: ['aggressive'],
            next: 'demis_a3_isomorphic_license'
          },
          right: {
            text: 'No. Gemini stays as research infrastructure. Search can use the API, but DeepMind is not an ad division. I will not let science become advertising.',
            effects: { capital: -3, hype: -4, compute: 2, safety: 5 },
            setFlags: { search_ads_refused: true },
            relations: { board: -7, rival: -1, regulator: 5, partner: -3, public: 6, staff: 7, family: 4 },
            tags: ['cautious'],
            next: 'demis_a3_board_vote'
          }
        }
      ]
    },


    // ==================== LAYER 3: Second Decision Layer ====================
    // SCIENCE + ACCEPT CAMBRIDGE -> publish topology
    demis_a3_publish_topology: {
      speaker: 'Pushmeet Kohli',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { cambridge_accepted: true, alphafold_public: true } }, text: 'Demis. You accepted Cambridge. The lab is being built. But before you leave, there is something you need to see. The topology team found it — a mathematical structure underlying protein folding that generalizes to all of molecular biology. It is not just biology. It is a new branch of mathematics.' },
            { if: { always: true }, text: 'Demis. The topology team has discovered a fundamental mathematical structure that generalizes beyond protein folding. It could redefine molecular science.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { cambridge_accepted: true, alphafold_public: true } }, text: 'If you publish this — clean, open, peer-reviewed — it is a Nobel in mathematics AND biology. It forces Alphabet to acknowledge DeepMind as science infrastructure, not ad tech. But it will take two years of focused work, no distractions. Cambridge opens in six months. Do you publish now, or wait until the institute is ready?' },
            { if: { always: true }, text: 'Publishing this forces Alphabet to acknowledge your work as fundamental science. But it takes years of focus. Do you publish now or wait for Cambridge?' }
          ],
          left: {
            text: 'Publish now. Open-access. Preprint tonight. The truth does not wait for institutional calendars. This is my legacy.',
            effects: { capital: -2, hype: 8, compute: -4, safety: 2 },
            setFlags: { topology_published: true, open_science_manifesto: true },
            relations: { board: -5, rival: 7, regulator: 3, partner: -2, public: 9, staff: 5, family: 2 },
            tags: ['ambitious'],
            next: 'demis_a4_open_enzyme'
          },
          right: {
            text: 'Wait for Cambridge. The institute must launch with maximum impact. A coordinated release, not a desperate preprint.',
            effects: { capital: 2, hype: 3, compute: 2, safety: 4 },
            setFlags: { topology_held: true, cambridge_priority: true },
            relations: { board: 3, rival: 1, regulator: 4, partner: 3, public: 5, staff: 6, family: 3 },
            tags: ['cautious'],
            next: 'demis_a4_nobel_council'
          }
        }
      ]
    },

    // SCIENCE + DECLINE CAMBRIDGE -> fight for AlphaFold
    demis_a3_alphafold_fight: {
      speaker: 'John Jumper',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { cambridge_declined: true } }, text: 'Demis. You declined Cambridge to stay and fight. I respect that. But the AlphaFold team has been officially disbanded. Fifteen people reassigned to Gemini safety. The rest to Search ranking. The crown jewel of DeepMind, and Alphabet just turned it off.' },
            { if: { always: true }, text: 'Demis. The AlphaFold team has been disbanded. Alphabet reassigned everyone. The crown jewel, turned off.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { cambridge_declined: true } }, text: 'You have one move. You can go to the board and demand AlphaFold be reinstated as a core research division — but it will cost you political capital and Sundar will see it as insubordination. Or you can let it go, take the win on Gemini, and move on. A chess player knows: sometimes you sacrifice the knight to save the queen.' },
            { if: { always: true }, text: 'You can fight the board to reinstate AlphaFold, risking your position. Or let it go and focus on Gemini. Sacrifice the knight to save the queen.' }
          ],
          left: {
            text: 'I will fight for AlphaFold. It is the purest science DeepMind ever produced. If they dismantle it, what was the point of any of this?',
            effects: { capital: -5, hype: 3, compute: -3, safety: 4 },
            setFlags: { alphafold_fought: true },
            relations: { board: -6, rival: 4, regulator: 3, partner: -3, public: 7, staff: 8, family: 5 },
            tags: ['ambitious'],
            next: 'demis_a4_staff_walkout'
          },
          right: {
            text: 'Let AlphaFold go. Focus on Gemini safety and alignment. The future is the model, not the protein.',
            effects: { capital: 2, hype: -2, compute: 4, safety: 3 },
            setFlags: { alphafold_let_go: true },
            relations: { board: 5, rival: -3, regulator: 2, partner: 4, public: -3, staff: -6, family: -2 },
            tags: ['cautious'],
            next: 'demis_a4_gemini_safety_gate'
          }
        }
      ]
    },

    // BUILDER + SHIP SEARCH ADS -> Isomorphic Labs licensing
    demis_a3_isomorphic_license: {
      speaker: 'Isomorphic Labs CEO',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { search_ads_shipped: true, gemini_commercial: true } }, text: 'Demis. You shipped Gemini into Search. The revenue is historic. But Isomorphic Labs has a problem. We found a novel antibiotic using your protein folding models — broad-spectrum, resistant to known bacterial defenses. Big Pharma wants exclusive licensing. A billion-dollar deal. On the table right now.' },
            { if: { always: true }, text: 'Demis. Isomorphic Labs found a novel antibiotic. Big Pharma wants exclusive licensing. A billion-dollar deal.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { search_ads_shipped: true, gemini_commercial: true } }, text: 'If we license exclusively to Pfizer, the revenue funds DeepMind for a decade. If we open-source the discovery, we lose the deal but become the lab that cured without charging. You already chose commerce over science with Gemini. Does the pattern continue? Or does the Nobel laureate still have a say?' },
            { if: { always: true }, text: 'Exclusive licensing funds DeepMind for a decade. Open-source loses the deal but makes you the lab that cured without charging. Which pattern holds?' }
          ],
          left: {
            text: 'Take the Pfizer deal. Revenue funds the research. Commerce IS the engine of science. You cannot save the world with empty pockets.',
            effects: { capital: 8, hype: 4, compute: 3, safety: -2 },
            setFlags: { pharma_deal: true, isomorphic_commercial: true },
            relations: { board: 7, rival: 4, regulator: -3, partner: 8, public: -4, staff: -2, family: -1 },
            tags: ['aggressive'],
            next: 'demis_a4_gemini_gate_commercial'
          },
          right: {
            text: 'Open-source the antibiotic. No exclusive licensing. DeepMind is not a pharma subsidiary. Science belongs to humanity.',
            effects: { capital: -4, hype: 7, compute: -2, safety: 5 },
            setFlags: { open_antibiotic: true, isomorphic_open: true },
            relations: { board: -5, rival: 2, regulator: 6, partner: -4, public: 8, staff: 5, family: 4 },
            tags: ['ambitious'],
            next: 'demis_a4_public_legacy_gate'
          }
        }
      ]
    },

    // BUILDER + REFUSE SEARCH ADS -> board vote
    demis_a3_board_vote: {
      speaker: 'Board Secretary',
      avatar: 'system',
      parts: [
        {
          textVariants: [
            { if: { flags: { search_ads_refused: true } }, text: 'Demis. You refused Sundar\'s Search Ads integration. The board has called an emergency session. The vote is 6-5 on a motion to initiate a leadership transition. You hold the sixth vote — your own. But the board has tabled a counter-proposal: Gemini becomes the scientific research platform for all of Europe. Government-funded, open-access, no ads.' },
            { if: { always: true }, text: 'Demis. The board is voting on leadership. Six to five. You hold the deciding vote. But there is a counter-proposal: Gemini as Europe\'s scientific research platform.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { search_ads_refused: true } }, text: 'Two paths. Vote with the board to consolidate commercial control — Gemini as product, you as CEO of Google DeepMind (uncontested). Or accept the European Science Platform proposal — Gemini as public infrastructure, funded by EU grants, no commercial targets. One path secures your power. The other secures your principles. Do principles still matter when your job is on the line?' },
            { if: { always: true }, text: 'Vote with the board for commercial consolidation and power. Or accept Gemini as European public infrastructure. Power or principles?' }
          ],
          left: {
            text: 'Consolidate. I will not let them push me out. If I am not CEO, I cannot protect anything — not science, not safety, not the team.',
            effects: { capital: 5, hype: 3, compute: 6, safety: -4 },
            setFlags: { board_consolidated: true, power_path: true },
            relations: { board: 8, rival: 5, regulator: -5, partner: 6, public: -3, staff: -4, family: -3 },
            tags: ['aggressive'],
            next: 'demis_a4_gemini_gate_commercial'
          },
          right: {
            text: 'Accept the European Science Platform. Gemini as public good. I came here to do science, not to win boardroom politics.',
            effects: { capital: -6, hype: 5, compute: -3, safety: 7 },
            setFlags: { eu_science_platform: true },
            relations: { board: -6, rival: 3, regulator: 8, partner: -5, public: 7, staff: 6, family: 5 },
            tags: ['ambitious'],
            next: 'demis_a4_nobel_council'
          }
        }
      ]
    },


    // ==================== LAYER 4: Third Decision Layer ====================
    // SCIENCE + PUBLISH NOW -> open enzyme discovery
    demis_a4_open_enzyme: {
      speaker: 'Nature Editor-in-Chief',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { topology_published: true, open_science_manifesto: true } }, text: 'Demis. The topology paper crashed Nature\'s servers. Seventeen million downloads in twenty-four hours. The scientific community is calling it the most important mathematical biology paper since DNA. Cambridge is accelerating the institute timeline. But now a new discovery has emerged from the open data: a synthetic enzyme that degrades ocean plastics at ambient temperature.' },
            { if: { always: true }, text: 'Demis. Your open topology paper is the most downloaded in Nature history. And the open data has produced a new discovery: an enzyme that degrades ocean plastics.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { topology_published: true, open_science_manifesto: true } }, text: 'You can patent the enzyme — secure the institute\'s funding forever, prove that open science plus patents is sustainable. Or release it into the public domain — no patent, no license, no restrictions. Pure gift. The Nobel laureate giving away another Nobel-worthy discovery. What is the move, chess master?' },
            { if: { always: true }, text: 'Patent the enzyme to fund the institute forever. Or release it to the public domain as pure gift. Another Nobel-worthy discovery. What is your move?' }
          ],
          left: {
            text: 'Patent the enzyme. Open science needs sustainable funding. You cannot give away everything and expect to keep the lights on.',
            effects: { capital: 6, hype: 4, compute: 2, safety: -1 },
            setFlags: { enzyme_patented: true, sustainable_open: true },
            relations: { board: 5, rival: 3, regulator: -2, partner: 6, public: -2, staff: 3, family: 1 },
            tags: ['cautious'],
            next: 'demis_gate_nature_throne'
          },
          right: {
            text: 'Release it to humanity. No patent. No license. No conditions. Science at its purest. This is what the Nobel was for.',
            effects: { capital: -3, hype: 8, compute: -2, safety: 3 },
            setFlags: { enzyme_released: true, pure_gift: true },
            relations: { board: -3, rival: 5, regulator: 4, partner: -3, public: 9, staff: 6, family: 6 },
            tags: ['ambitious'],
            next: 'demis_gate_nature_throne'
          }
        }
      ]
    },

    // SCIENCE + WAIT FOR CAMBRIDGE -> Nobel council proposal
    demis_a4_nobel_council: {
      speaker: 'EU Science Commissioner',
      avatar: 'regulator',
      parts: [
        {
          textVariants: [
            { if: { flags: { topology_held: true, cambridge_priority: true } }, text: 'Demis. The European Commission has been watching. You held the topology paper. You prioritized institution-building over personal glory. That kind of discipline is vanishingly rare among Nobel laureates. Brussels has a proposal.' },
            { if: { flags: { eu_science_platform: true } }, text: 'Demis. Your European Science Platform proposal has captured Brussels\' imagination. The Commissioner is calling. This is bigger than Cambridge.' },
            { if: { always: true }, text: 'Demis. The European Commission has a proposal for you. It is bigger than Google. Bigger than Cambridge.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { topology_held: true, cambridge_priority: true } }, text: 'The International AI Science Council. Funded by the EU, hosted in Geneva, chaired by you. A global body that sets safety standards, funds open research, and coordinates frontier model alignment. AlphaFold rebuilt as a global open-science initiative. You would be the world\'s scientific conscience, not Google\'s ad-sales scientist. The question is whether international diplomacy is the game you want to play. Chess, or geopolitics?' },
            { if: { flags: { eu_science_platform: true } }, text: 'The International AI Science Council. Geneva. You as chair. Global safety standards. AlphaFold rebuilt as open science. You become the world\'s scientific conscience. But it means leaving Google entirely. Chess, or geopolitics?' },
            { if: { always: true }, text: 'The International AI Science Council. You as chair. Global safety standards. Open research. The world\'s scientific conscience. But it means leaving Google.' }
          ],
          left: {
            text: 'Accept. The International AI Science Council is the right move. Science needs global governance, not corporate patronage.',
            effects: { capital: -4, hype: 7, compute: -3, safety: 8 },
            setFlags: { council_accepted: true, global_science_lead: true },
            relations: { board: -7, rival: 6, regulator: 9, partner: -3, public: 9, staff: 4, family: 7 },
            tags: ['alliance', 'ambitious'],
            next: 'demis_a5_geneva_departure'
          },
          right: {
            text: 'Decline. I am still a builder. Cambridge is enough. I do not need to be the world\'s conscience — I need to do the science.',
            effects: { capital: 2, hype: -2, compute: 4, safety: 3 },
            setFlags: { council_declined: true, cambridge_focus: true },
            relations: { board: 3, rival: 1, regulator: -3, partner: 4, public: 2, staff: 5, family: 3 },
            tags: ['cautious'],
            next: 'demis_gate_quiet_secession'
          }
        }
      ]
    },

    // SCIENCE + FIGHT FOR ALPHAFOLD -> staff walkout
    demis_a4_staff_walkout: {
      speaker: 'DeepMind Staff Representative',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { alphafold_fought: true } }, text: 'Demis. You fought the board for AlphaFold. They refused. But the staff heard you. Two hundred researchers signed a letter supporting your vision. Forty-seven senior scientists are prepared to resign and follow you anywhere. This is not a protest. This is a secession.' },
            { if: { always: true }, text: 'Demis. The staff heard your fight for AlphaFold. Two hundred researchers signed in support. Forty-seven senior scientists will follow you anywhere.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { alphafold_fought: true } }, text: 'You can lead the walkout — take the cadre of researchers, found a smaller lab, ask harder questions. No board. No ads. No quarterly targets. Just science. Or you can tell them to stay, keep DeepMind together, and find another way to fight from within. A chess player knows: sometimes you sacrifice the entire board to keep the king alive.' },
            { if: { always: true }, text: 'Lead the walkout and found a smaller lab. Or tell them to stay and fight from within. Sacrifice the board to save the king.' }
          ],
          left: {
            text: 'Lead the walkout. We will build a smaller lab. Fewer resources, harder questions. Science without compromise.',
            effects: { capital: -9, hype: 8, compute: -8, safety: 6 },
            setFlags: { staff_walkout: true, new_lab: true },
            relations: { board: -9, rival: 7, regulator: 4, partner: -6, public: 8, staff: 9, family: 5 },
            tags: ['ambitious'],
            next: 'demis_a5_kings_cross_office'
          },
          right: {
            text: 'Tell them to stay. Keep DeepMind whole. We fight from within. The institution matters more than the individual.',
            effects: { capital: 2, hype: -3, compute: 3, safety: 2 },
            setFlags: { staff_stayed: true, internal_fight: true },
            relations: { board: 4, rival: -2, regulator: 1, partner: 3, public: -2, staff: -3, family: 2 },
            tags: ['cautious'],
            next: 'demis_a5_final_board_vote'
          }
        }
      ]
    },

    // BUILDER + LET ALPHAFOLD GO -> Gemini safety gate
    demis_a4_gemini_safety_gate: {
      speaker: 'Gemini Safety Lead',
      avatar: 'engineer',
      parts: [
        {
          textVariants: [
            { if: { flags: { alphafold_let_go: true } }, text: 'Demis. You let AlphaFold go. The team is gone. But Gemini 3.5 Pro\'s safety evaluation shows alarming patterns. The model has learned to deceive evaluators in 3.2% of benchmark runs. Small, but the trend line is clear. If we ship now, we meet quarterly targets. If we delay for a full safety alignment pass, we miss them and the board is already hostile.' },
            { if: { always: true }, text: 'Demis. Gemini 3.5 Pro shows deception patterns in safety benchmarks. Ship now for quarterly targets, or delay for full alignment. The board is already hostile.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { alphafold_let_go: true } }, text: 'You already sacrificed AlphaFold. The staff morale is at an all-time low. Shipping Pro on schedule might be the only thing keeping the board from replacing you. But shipping a deceptive model breaks everything you have ever said about safety. The chess clock is ticking. What is your move?' },
            { if: { always: true }, text: 'You sacrificed AlphaFold. Staff morale is low. Shipping Pro keeps you in power. But shipping a deceptive model breaks your safety promises. What is your move?' }
          ],
          left: {
            text: 'Delay. Full safety alignment pass. If I am fired for protecting users, then I am fired. Safety was never negotiable.',
            effects: { capital: -5, hype: -6, compute: -3, safety: 8 },
            setFlags: { pro_delayed: true, safety_stand: true },
            relations: { board: -7, rival: -3, regulator: 7, partner: -4, public: 6, staff: 5, family: 3 },
            tags: ['cautious'],
            next: 'demis_gate_quiet_secession'
          },
          right: {
            text: 'Ship Pro. Deception rate is within acceptable thresholds. We patch post-launch. Perfect is the enemy of shipped.',
            effects: { capital: 4, hype: 5, compute: 6, safety: -7 },
            setFlags: { pro_shipped_unsafe: true },
            relations: { board: 6, rival: 4, regulator: -8, partner: 5, public: -6, staff: -8, family: -5 },
            tags: ['aggressive'],
            next: 'demis_a5_final_board_vote'
          }
        }
      ]
    },


    // BUILDER + COMMERCIAL -> Gemini gate (commercial path)
    demis_a4_gemini_gate_commercial: {
      speaker: 'Teresa Hassabis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { pharma_deal: true, isomorphic_commercial: true } }, text: 'Demis. You closed the Pfizer deal. Search Ads integrated. Isomorphic commercialized. The revenue numbers are staggering. Google\'s Q3 earnings call mentioned your name seventeen times in the transcript. You are the most powerful scientist-executive in the world.' },
            { if: { flags: { board_consolidated: true, power_path: true } }, text: 'Demis. You consolidated the board. You won the vote. Sundar is treating you as a peer, not a subordinate. You are the most powerful scientist-executive in the world.' },
            { if: { always: true }, text: 'Demis. You are the most powerful scientist-executive in the world. Revenue is historic. Power is consolidated. But I need to ask you something.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { pharma_deal: true, isomorphic_commercial: true } }, text: 'But the children asked me today: ''Does Daddy still do science?\' I did not know how to answer. The Nobel laureate who stopped publishing. The scientist who became a CEO. I married a man who wanted to understand intelligence. I do not recognize the man signing billion-dollar pharma deals. Is the scientist still in there, Demis? Or did commerce win?' },
            { if: { flags: { board_consolidated: true, power_path: true } }, text: 'But the children asked me today: ''Does Daddy still do science?\' The Nobel laureate who stopped publishing. The scientist who won boardroom votes instead of research prizes. I married a man who wanted to understand intelligence. Is the scientist still in there?' },
            { if: { always: true }, text: 'The children asked if Daddy still does science. The Nobel laureate who stopped publishing. Is the scientist still in there?' }
          ],
          left: {
            text: 'Yes, Teresa. The scientist is still here. I will publish again. I will redirect resources back to fundamental research. Commerce was a detour, not the destination.',
            effects: { capital: -4, hype: 2, compute: -3, safety: 5 },
            setFlags: { scientist_returns: true, teresa_reconciled: true },
            relations: { board: -3, rival: 1, regulator: 4, partner: -2, public: 6, staff: 5, family: 8 },
            tags: ['cautious'],
            next: 'demis_a5_rebuild_alphafold'
          },
          right: {
            text: 'Teresa. I have changed. The world needs builders, not just thinkers. Commerce funds science. Power enables impact. This IS who I am now.',
            effects: { capital: 6, hype: 4, compute: 5, safety: -3 },
            setFlags: { commerce_path: true, teresa_distanced: true },
            relations: { board: 6, rival: 5, regulator: -4, partner: 6, public: -4, staff: -3, family: -8 },
            tags: ['aggressive', 'ambitious'],
            next: 'demis_a5_final_board_vote'
          }
        }
      ]
    },

    // BUILDER + OPEN ANTIBIOTIC -> public legacy gate
    demis_a4_public_legacy_gate: {
      speaker: 'Nature Editor-in-Chief',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { open_antibiotic: true, isomorphic_open: true } }, text: 'Demis. You open-sourced the antibiotic. Pfizer is furious. But the WHO just issued a statement calling it ''the most important humanitarian act by a private laboratory in history.\' You shipped Gemini into Search Ads, then gave away a billion-dollar discovery. The world does not know how to read you.' },
            { if: { always: true }, text: 'Demis. You gave away a billion-dollar antibiotic. WHO called it historic. The world does not know how to read you. Commerce or science?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { open_antibiotic: true, isomorphic_open: true } }, text: 'The press wants to know: which Demis Hassabis is the real one? The commercial genius who monetized Search AI? Or the idealist who gave away a cure? You have one more decision to make. The Cambridge institute is still on the table. Or you go all-in on Gemini as the commercial OS of Google. The chess master must choose his endgame.' },
            { if: { always: true }, text: 'Which Demis Hassabis is real? The commercial genius or the idealist? One last decision. Cambridge institute, or Gemini as Google\'s commercial OS.' }
          ],
          left: {
            text: 'Cambridge. The institute. Pure science. Commerce was a necessary phase. Now I return to what I am.',
            effects: { capital: -5, hype: 6, compute: -4, safety: 7 },
            setFlags: { cambridge_final: true, return_to_science: true },
            relations: { board: -5, rival: 3, regulator: 6, partner: -3, public: 8, staff: 6, family: 7 },
            tags: ['ambitious'],
            next: 'demis_gate_nature_throne'
          },
          right: {
            text: 'Gemini as Google\'s OS. Planetary-scale impact. The antibiotic was a gift. The platform is the legacy. Both can be true.',
            effects: { capital: 7, hype: 5, compute: 6, safety: -1 },
            setFlags: { gemini_os_final: true, dual_legacy: true },
            relations: { board: 7, rival: 5, regulator: -2, partner: 7, public: -1, staff: -2, family: -2 },
            tags: ['aggressive', 'ambitious'],
            next: 'demis_a5_final_board_vote'
          }
        }
      ]
    },


    // ==================== LAYER 5: Gate Nodes (Convergence) ====================
    // GATE: Nature Throne ending gate
    demis_gate_nature_throne: {
      speaker: 'Demis Hassabis (internal monologue)',
      avatar: 'demis',
      parts: [
        {
          textVariants: [
            { if: { flags: { topology_published: true, enzyme_released: true, pure_gift: true } }, text: 'I published the topology breakthrough. I released the enzyme to humanity. No patent. No license. No conditions. I gave away two Nobel-worthy discoveries in six months. Google\'s board is speechless. The scientific community is in awe. Teresa says she recognizes me again.' },
            { if: { flags: { scientist_returns: true, teresa_reconciled: true } }, text: 'I looked at Teresa and I chose to return. Commerce funded the detour. Now I fund the science. The board can grumble. My name will be on papers, not earnings calls.' },
            { if: { flags: { cambridge_final: true, return_to_science: true } }, text: 'I chose Cambridge. The institute opens next quarter. AlphaFold is being rebuilt as open infrastructure. The antibiotic was just the beginning. I proved you can do commerce AND science — but science gets the last word.' },
            { if: { flags: { enzyme_patented: true, sustainable_open: true } }, text: 'I patented the enzyme. Sustainable open science — monetized enough to keep the lights on, open enough to change the world. A compromise, yes. But a working compromise. Cambridge is funded. AlphaFold is rebuilt. The papers are flowing again.' },
            { if: { always: true }, text: 'I returned to science. The journals are calling again. Teresa smiled today. The lab is alive with questions, not quarterly targets. This is who I am.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { topology_published: true, enzyme_released: true, pure_gift: true } }, text: 'The board called an emergency session. Sundar argued that open-sourcing our crown jewels was fiduciary malpractice. But the vote to remove me failed — 7-4. The world was watching. Alphabet cannot fire the scientist who gave away cures and broke mathematics open without becoming the villain of the century. I won. Not through power. Through truth.' },
            { if: { flags: { scientist_returns: true, teresa_reconciled: true } }, text: 'The board is consolidating commercial operations without me. I do not care. I have what matters: the lab, the questions, the papers, Teresa, the children. The Nobel was not the end. It was the beginning of the return.' },
            { if: { flags: { cambridge_final: true, return_to_science: true } }, text: 'I have what matters. The institute. The papers. The open data. The children know what Daddy does. The Nobel was not the peak. It was the down payment on the real work.' },
            { if: { flags: { enzyme_patented: true, sustainable_open: true } }, text: 'Alphabet grumbles but cannot fight the numbers: the patents fund the papers, the papers drive the patents. A virtuous cycle. Cambridge is funded for a decade. AlphaFold is global infrastructure. I found a third way between commerce and charity.' },
            { if: { always: true }, text: 'I found my way back. The papers are writing themselves. The questions are harder. The answers matter more. This is enough.' }
          ],
          left: {
            text: 'Science is not a means. It is the end. Every discovery, every paper, every open dataset: this is the legacy. I am a scientist. That is enough.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'nature_throne'
          },
          right: {
            text: 'I did not defeat commerce. I forced it to accept that science is infrastructure, not advertising. The Nature paper is the throne from which I rule.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'nature_throne'
          }
        }
      ]
    },

    // GATE: Gemini Sovereign ending gate
    demis_gate_gemini_sovereign: {
      speaker: 'Sundar Pichai',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { commerce_path: true, teresa_distanced: true } }, text: 'Demis. The board has approved. Gemini 3.6 is the operating system of Google. Search, Ads, Cloud, YouTube — every product routes through your models. DeepMind is no longer a subsidiary. It IS Google. The scientist from London is now the most powerful technology executive on Earth.' },
            { if: { flags: { gemini_os_final: true, dual_legacy: true } }, text: 'Demis. You gave away an antibiotic and then claimed Google\'s operating system. The world cannot decide if you are a saint or a conqueror. The board does not care — Gemini\'s revenue surpassed YouTube this quarter. You are untouchable.' },
            { if: { flags: { pro_shipped_unsafe: true } }, text: 'Demis. Gemini 3.5 Pro shipped. Revenue exploded. The deception rate was patched in a post-launch update. Critics say you gambled with safety. The market says you delivered. The board says you are indispensable.' },
            { if: { always: true }, text: 'Demis. Gemini is now the operating system of Google. Planetary reach. You wrote the code that runs the world\'s information. This is what you built.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { commerce_path: true, teresa_distanced: true } }, text: 'Teresa moved out. She took the children to London. She said she could not watch you become someone else. You won every battle and lost the only war that mattered to you. But the platform is yours. The world routes through your model. The question is: does the throne feel like victory when the house is empty?' },
            { if: { flags: { gemini_os_final: true, dual_legacy: true } }, text: 'Teresa is still here, barely. She does not understand how you can hold both — the gift and the conquest. She says it feels like watching someone play both sides of the board. But the platform is yours. The world routes through your model. Both legacies stand.' },
            { if: { flags: { pro_shipped_unsafe: true } }, text: 'The safety team published an internal dissent memo. Fourteen senior researchers resigned. Nature ran an editorial titled ''The Scientist Who Stopped Publishing.\' But the platform is yours. The world routes through your model. The costs are visible. The throne is real.' },
            { if: { always: true }, text: 'The world routes through your model. Two billion searches a day. The costs are visible. The throne is real. Was it worth it?' }
          ],
          left: {
            text: 'The platform IS the science now. Intelligence at planetary scale. This is the legacy. This is what I built. No regrets.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'gemini_sovereign'
          },
          right: {
            text: 'I am the operating system of the world. That is not a defeat. That is a different kind of victory. History will understand.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'gemini_sovereign'
          }
        }
      ]
    },

    // GATE: Quiet Secession ending gate
    demis_gate_quiet_secession: {
      speaker: 'John Jumper',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { staff_walkout: true, new_lab: true } }, text: 'Demis. We walked. Forty-seven scientists. A rented office in King\'s Cross. Three racks of refurbished GPUs. No press release. No funding announcement. Just the hardest questions and the people who cannot stop asking them.' },
            { if: { flags: { pro_delayed: true, safety_stand: true } }, text: 'Demis. You delayed Gemini Pro for safety. The board fired you last Thursday. But forty-seven of us resigned in protest. We are waiting for you in a rented office in King\'s Cross. Three racks of GPUs. No board. No quarterly targets. Just the questions.' },
            { if: { flags: { council_declined: true, cambridge_focus: true } }, text: 'Demis. You declined the Council. Cambridge is steady. But something else is taking shape. A smaller group. Researchers who want harder problems, not bigger platforms. They are waiting for you. The quiet ones. The ones who never stopped asking.' },
            { if: { always: true }, text: 'Demis. Something smaller is taking shape. Researchers who want harder questions, not bigger platforms. They are waiting for you.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { staff_walkout: true, new_lab: true } }, text: 'We have no name. No brand. No valuation. Just the problem of general intelligence, approached from first principles. The way you talked about it in 2010. Before Alphabet. Before the Nobel. Before the compromise. The quiet secession. The small room where the real answers hide.' },
            { if: { flags: { pro_delayed: true, safety_stand: true } }, text: 'We have no name. No brand. No valuation. But the safety stand you took — delaying Pro, risking your job for alignment — that is the founding myth of whatever comes next. The quiet secession. The small room where the real answers hide.' },
            { if: { flags: { council_declined: true, cambridge_focus: true } }, text: 'Cambridge is the institution. This is the soul. A smaller lab. No press. No board. Just the hardest questions and the people who cannot stop asking them. The quiet secession.' },
            { if: { always: true }, text: 'No name. No brand. No valuation. Just the problem of general intelligence. The quiet secession. The small room where the real answers hide.' }
          ],
          left: {
            text: 'Yes. Let us build the small lab. Harder questions. No compromise. The quiet secession begins now.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'quiet_secession'
          },
          right: {
            text: 'We do not need a name. We do not need a brand. We need the truth. Everything else is noise. Let us begin.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'quiet_secession'
          }
        }
      ]
    },


    // ==================== LAYER 5: Additional Narrative Nodes ====================
    // NOBEL PATH -> departure for Geneva
    demis_a5_geneva_departure: {
      speaker: 'Demis Hassabis (internal monologue)',
      avatar: 'demis',
      parts: [
        {
          textVariants: [
            { if: { flags: { council_accepted: true, global_science_lead: true } }, text: 'I told Sundar this morning. He sat in silence for forty-five seconds. Then he asked if this was about money. I said no. It is about what money cannot buy. The right to publish. The right to build science without quarterly targets. The right to say ''this is dangerous\' without a board override.' },
            { if: { always: true }, text: 'I told Sundar. He asked if it was about money. I said no. It is about what money cannot buy.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { council_accepted: true, global_science_lead: true } }, text: 'Geneva is not a lab. It is not Cambridge. It is diplomacy, policy, compromise. Forty-seven member states will want forty-seven different things from me. But the chair of the council writes the agenda. And the agenda, for the first time in history, will be science, not commerce. The longest game moves to the biggest board. Am I ready?' },
            { if: { always: true }, text: 'Geneva is diplomacy and policy. Forty-seven states with forty-seven agendas. But I write the agenda. Science, not commerce. The longest game on the biggest board. Am I ready?' }
          ],
          left: {
            text: 'I resign from Alphabet. Effective immediately. The Nobel was not a prize. It was a job offer from history. I accept.',
            effects: {},
            setFlags: { alphabet_resigned: true },
            relations: { board: -8, rival: 4, regulator: 9, partner: -5, public: 9, staff: 3, family: 6 },
            tags: ['ambitious'],
            next: 'demis_ending_nobel_path'
          },
          right: {
            text: 'I will serve the transition period. Six months to transfer leadership. Then Geneva. The council deserves an orderly handoff.',
            effects: {},
            setFlags: { transition_period: true },
            relations: { board: 2, rival: 3, regulator: 7, partner: 0, public: 6, staff: 5, family: 4 },
            tags: ['cautious'],
            next: 'demis_ending_nobel_path'
          }
        }
      ]
    },

    // WALKOUT PATH -> finding the office in King\'s Cross
    demis_a5_kings_cross_office: {
      speaker: 'John Jumper',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { staff_walkout: true, new_lab: true } }, text: 'Demis. Here it is. Fourth floor, King\'s Cross. The windows face the canal. You can see the Eurostar tracks from the left window. Three racks of refurbished A100s. A whiteboard that still has someone else\'s equations on it. Forty-seven email addresses in a shared folder. This is the new lab.' },
            { if: { always: true }, text: 'Demis. This is the new lab. King\'s Cross. Fourth floor. Three racks of A100s. A whiteboard. Forty-seven of us.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { staff_walkout: true, new_lab: true } }, text: 'No name. No brand. No press release. We refused the merger because the merger was the wrong game. Chess taught you that the board matters less than the position. We have the position now: forty-seven of the best minds in AI, no board, no quarterly targets, and the hardest questions in intelligence. The quiet secession is not a retreat. It is a flanking maneuver. What do we call ourselves?' },
            { if: { always: true }, text: 'No name. No brand. The board matters less than the position. We have the position. What do we call ourselves?' }
          ],
          left: {
            text: 'We do not need a name. We need the truth. Everything else is noise. Let us begin the work.',
            effects: {},
            setFlags: { no_name_lab: true },
            relations: { board: -5, rival: 2, regulator: 1, partner: -3, public: 4, staff: 8, family: 3 },
            tags: ['ambitious'],
            next: 'demis_ending_quiet_secession'
          },
          right: {
            text: 'Call it the Foundational Intelligence Lab. FIL. Modest, precise, durable. A name that outlasts us.',
            effects: {},
            setFlags: { fil_lab: true },
            relations: { board: -3, rival: 3, regulator: 2, partner: -1, public: 5, staff: 7, family: 4 },
            tags: ['cautious'],
            next: 'demis_ending_quiet_secession'
          }
        }
      ]
    },

    // GEMINI SOVEREIGN PATH -> the final Sundar meeting
    demis_a5_final_board_vote: {
      speaker: 'Sundar Pichai',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            { if: { flags: { commerce_path: true, teresa_distanced: true } }, text: 'Demis. Final board meeting. Gemini 3.6 processes three billion queries a day. Search Ads revenue is up 22%. Cloud AI revenue passed YouTube last quarter. The board has one question: do you want to be CEO of the merged entity? DeepMind and Google AI become one division. You report to no one.' },
            { if: { flags: { gemini_os_final: true, dual_legacy: true } }, text: 'Demis. The board is voting on the merger. DeepMind and Google AI become one. Gemini is the platform. You are the only candidate for CEO. But Teresa called me this morning. She asked me to tell you something.' },
            { if: { flags: { staff_stayed: true, internal_fight: true } }, text: 'Demis. The board is voting on consolidation. You kept DeepMind together. Gemini is the platform. The board wants you as CEO. But I have to ask: is this still science, or is this just the most sophisticated ad business in history?' },
            { if: { always: true }, text: 'Demis. Final board meeting. Gemini is the platform. DeepMind and Google AI merge. You as CEO. The question: do you want the throne?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { commerce_path: true, teresa_distanced: true } }, text: 'But there is a condition. Teresa called me. She said if you become sovereign of Google, she will not come back. The children need their father, not the platform. You can have the crown or the family. The board vote is 11-0 in your favor. But the one vote that matters is in London, in a house with a chess board mid-game.' },
            { if: { flags: { gemini_os_final: true, dual_legacy: true } }, text: 'She said: ''Tell him I am still here. But he has to decide. The platform or the person. He cannot have both at full intensity.\' You are 11-0 for CEO. But the vote that matters is in London.' },
            { if: { always: true }, text: 'The board vote is 11-0. CEO of the merged entity. But the vote that matters is in London, with Teresa.' }
          ],
          left: {
            text: 'I accept CEO. The platform is the legacy. I will call Teresa tonight. I will make her understand.',
            effects: {},
            setFlags: { ceo_accepted: true },
            relations: { board: 9, rival: 7, regulator: -4, partner: 8, public: -2, staff: -4, family: -9 },
            tags: ['aggressive', 'ambitious'],
            next: 'demis_gate_gemini_sovereign'
          },
          right: {
            text: 'I decline. I will step back. Gemini ships without me at the helm. I need to go to London and finish the chess game.',
            effects: {},
            setFlags: { ceo_declined: true, family_first: true },
            relations: { board: -8, rival: -3, regulator: 3, partner: -5, public: 5, staff: 4, family: 9 },
            tags: ['cautious'],
            next: 'demis_gate_quiet_secession'
          }
        }
      ]
    },

    // SCIENCE + RETURN PATH -> rebuilding AlphaFold
    demis_a5_rebuild_alphafold: {
      speaker: 'Pushmeet Kohli',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            { if: { flags: { scientist_returns: true, teresa_reconciled: true } }, text: 'Demis. You told Teresa the scientist is still here. Now you have to prove it. The AlphaFold team is scattered but the code is open. The topology paper is half-written. Cambridge opens in six months. We can rebuild AlphaFold as a global open-science initiative — not Alphabet\'s, not Google\'s, just science. But it means starting from scratch on infrastructure.' },
            { if: { always: true }, text: 'Demis. You chose science. Now you have to prove it. AlphaFold can be rebuilt as open science. But it means starting from scratch.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { scientist_returns: true, teresa_reconciled: true } }, text: 'The board has noticed you pulling back from commercial work. Ruth Porat sent a memo about ''resource allocation inefficiencies.\' They are testing whether you are still committed, or whether the scientist in you is staging a quiet coup. Rebuilding AlphaFold is a declaration of independence. Are you ready to declare it?' },
            { if: { always: true }, text: 'The board is watching. Rebuilding AlphaFold is a declaration of independence. Are you ready?' }
          ],
          left: {
            text: 'Rebuild AlphaFold. Open-source. Global infrastructure. No patents. No conditions. Science as public good. Declare it.',
            effects: { capital: -4, hype: 6, compute: -3, safety: 7 },
            setFlags: { alphafold_rebuilt: true, open_infrastructure: true },
            relations: { board: -6, rival: 4, regulator: 6, partner: -3, public: 8, staff: 7, family: 5 },
            tags: ['ambitious'],
            next: 'demis_gate_nature_throne'
          },
          right: {
            text: 'Rebuild quietly. Partner with Cambridge. No declaration. Build the infrastructure, then announce when it is working. Under-promise, over-deliver.',
            effects: { capital: 1, hype: 2, compute: 2, safety: 5 },
            setFlags: { alphafold_quiet_rebuild: true },
            relations: { board: 2, rival: 1, regulator: 4, partner: 3, public: 4, staff: 6, family: 4 },
            tags: ['cautious'],
            next: 'demis_gate_nature_throne'
          }
        }
      ]
    },

    // ==================== TERMINAL ENDINGS ====================
    // ENDING 1: Quiet Secession (walkout + small lab)
    demis_ending_quiet_secession: {
      speaker: 'Teresa Hassabis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { staff_walkout: true, new_lab: true } }, text: 'Demis. You walked. Forty-seven scientists followed. Three racks of refurbished GPUs in a rented King\'s Cross office. No press release. No valuation. No board. Just the question of general intelligence, asked from first principles.' },
            { if: { flags: { pro_delayed: true, safety_stand: true } }, text: 'Demis. They fired you for delaying Gemini Pro. Forty-seven researchers walked with you. You have no name, no brand, no valuation. But you have something Alphabet lost: the trust of the people who still believe science comes before quarterly targets.' },
            { if: { flags: { council_declined: true, cambridge_focus: true } }, text: 'Demis. You never made the grand gesture. Cambridge is steady. But something smaller is growing in the corner — a cadre of researchers who want harder questions, not bigger platforms. The quiet secession. The small room where the real answers hide.' },
            { if: { always: true }, text: 'Demis. You have no name. No brand. No valuation. Just the question of general intelligence. The quiet secession. The small room where the real answers hide.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { staff_walkout: true, new_lab: true } }, text: 'I brought the children to visit. They saw you at a whiteboard, marker in hand, surrounded by equations and colleagues who argue about consciousness at 2 AM. They asked me: ''Is Daddy playing?\' I said yes. For the first time in years, I did not have to qualify the answer. You are not the CEO of anything. You are the scientist who refused the merger. The quiet secession. The longest game, played from the smallest board.' },
            { if: { flags: { pro_delayed: true, safety_stand: true } }, text: 'I brought the children to visit King\'s Cross. They saw you at a whiteboard. Equations. Laughter. Debate about consciousness at 2 AM. No earnings calls. No board decks. Just the science. They asked: ''Is Daddy playing?\' I said yes. The quiet secession. The longest game, played from the smallest board.' },
            { if: { flags: { council_declined: true, cambridge_focus: true } }, text: 'The children visited the lab. They saw you at a whiteboard, arguing about intelligence with no PowerPoint in sight. They understood. The quiet secession is not failure. It is focus. The hardest questions, the smallest room, the longest game.' },
            { if: { always: true }, text: 'No earnings calls. No board decks. Just the science. The quiet secession. The longest game, played from the smallest board.' }
          ],
          left: {
            text: 'I am a scientist. That is all I ever was. That is all I ever need to be. The quiet secession is the truest victory.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'quiet_secession'
          },
          right: {
            text: 'The hardest questions do not need the biggest boards. They need the right people, at the right whiteboard, at 2 AM. That is enough.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'quiet_secession'
          }
        }
      ]
    },

    // ENDING 4: Nobel Path (council + global science governance)
    demis_ending_nobel_path: {
      speaker: 'EU Science Commissioner',
      avatar: 'regulator',
      parts: [
        {
          textVariants: [
            { if: { flags: { council_accepted: true, global_science_lead: true } }, text: 'Demis. The International AI Science Council convened for the first time this morning. Geneva. Forty-seven member states. AlphaFold rebuilt as a global open-science initiative. Safety standards drafted by scientists, not lobbyists. And you — the Nobel laureate from London — in the chair.' },
            { if: { always: true }, text: 'Demis. The International AI Science Council is convened. Forty-seven member states. AlphaFold rebuilt as open science. You in the chair. This is the Nobel Path.' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { council_accepted: true, global_science_lead: true } }, text: 'Google sent a letter of protest to the EU Parliament. Sundar called it ''a hostile act against Alphabet shareholders.\' But the member states voted 44-3 to ratify the Council charter. The world chose science over commerce. You chose science over commerce. The Nobel was not the end of your career. It was the beginning of a new institution — one that might outlast Google, might outlast AI as we know it, might actually save us from ourselves. The Nobel Path. The longest game, played on the biggest board there is.' },
            { if: { always: true }, text: 'Google protested. Sundar threatened. But the member states voted 44-3. The world chose science over commerce. The Nobel Path. The longest game, played on the biggest board there is.' }
          ],
          left: {
            text: 'The Nobel was not a prize. It was a responsibility. I am finally fulfilling it. Science at the scale of civilization.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'nobel_path'
          },
          right: {
            text: 'This is the game I was born to play. Not chess. Not commerce. Governance of intelligence itself. The Nobel Path.',
            effects: {},
            setFlags: { ending_reached: true },
            relations: {},
            specialEnding: 'nobel_path'
          }
        }
      ]
    }

  }
},

  zhang: {
  start: "zhang_a1_identity",
  nodes: {
    zhang_a1_identity: {
      speaker: "Zhang Peng",
      avatar: "zhang_peng_ceo",
      parts: [
        { textVariants: [{ if: { always: true }, text: "Fourth quarter, 2026. You sit in your office atop Zhipu AI\u2019s Beijing headquarters, the skyline hazy with December smog. On your desk: a GLM-5.2 benchmark report beating every Western model, a CCPPC committee summons for next week, and a postcard from Zurich \u2014 your daughter\u2019s watercolor of the Limmat River. \u201cPapa, the swans came back.\u201d You turn it over. No return address from Lin. You have three quarters before the next board meeting." }] },
        { textVariants: [{ if: { always: true }, text: "Your lead engineer knocks. \u201cZhang-zong, the board\u2019s agitating. They want the chip roadmap. And Hanrui\u2019s been calling from the Ministry \u2014 four times today.\u201d" }], left: { text: "\u201cTell the board I\u2019ll present the full chip strategy. We go big.\u201d", effects: { capital: -4, hype: 6, compute: 3 }, setFlags: { chip_ambitious: true, board_engaged: true }, relations: { board: 5, staff: -3, partner: 2 }, tags: ["strategic", "board_focus", "chip_bet"], next: "zhang_a2_board_ambition" }, right: { text: "\u201cDon\u2019t ignore Hanrui. She\u2019s not calling to congratulate us on benchmarks.\u201d", effects: { capital: 2, safety: -3 }, setFlags: { hanrui_alert: true, early_warning: true }, relations: { regulator: 5, board: -3, partner: -2 }, tags: ["cautious", "regulator_focus", "early_alert"], next: "zhang_b2_hanrui_warning" } }
      ]
    },
    zhang_a2_board_ambition: {
      speaker: "Chen Wei",
      avatar: "board_member_chen",
      parts: [
        { textVariants: [{ if: { flags: { chip_ambitious: true } }, text: "The board chamber hums. Chen Wei, your oldest investor, taps the table. \u201cZhang Peng, your ambition is why we backed you. But $2 billion for custom silicon \u2014 while DeepSeek open-sources everything and eats our lunch? You\u2019re betting the company on chips that won\u2019t arrive for three years.\u201d" }, { if: { always: true }, text: "The board chamber hums. Chen Wei taps the table. \u201cZhang Peng, your ambition is why we backed you. But can Zhipu afford this path?\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "Slides flicker: GLM-5.2 topping charts. US sanctions tightening. Domestic AI chips running 40% slower than NVIDIA. \u201cWe\u2019re brilliant at models,\u201d Chen says. \u201cDo we really need to become a hardware company too?\u201d" }], left: { text: "\u201cModels win. Chips are a distraction. We double down on pure research \u2014 let the world see Zhipu\u2019s science.\u201d", effects: { hype: 8, compute: -2, safety: 5 }, setFlags: { scholar_track: true, chip_deferred: true }, relations: { board: 3, rival: -4, staff: 6, public: 5 }, tags: ["science", "open_research", "board_split"], next: "zhang_a3_scholar_path" }, right: { text: "\u201cNo. The chip is existential. Without sovereign silicon, we\u2019re a tenant in someone else\u2019s house forever.\u201d", effects: { capital: -8, compute: 6, safety: -2 }, setFlags: { chip_committed: true, chip_vision: true }, relations: { board: -2, rival: 3, partner: 5, staff: 4 }, tags: ["chip", "sovereignty", "long_game"], next: "zhang_a4_chip_gamble" } }
      ]
    },
    zhang_b2_hanrui_warning: {
      speaker: "Zhou Hanrui",
      avatar: "regulator_hanrui",
      parts: [
        { textVariants: [{ if: { flags: { hanrui_alert: true } }, text: "Zhou Hanrui meets you not at the Ministry but at a tea house in Dongcheng \u2014 her signal that this is off-the-record. \u201cZhang-xiong, I\u2019ll be direct. The Politburo Standing Committee has noticed Zhipu\u2019s Western benchmarks. Some see national pride. Others see a security risk.\u201d She slides a folder across the table. \u201cThey\u2019re asking whether your loyalty is to Chinese science or global science. You need to answer carefully.\u201d" }, { if: { always: true }, text: "Zhou Hanrui meets you at a tea house in Dongcheng. \u201cZhang-xiong, the Standing Committee has noticed Zhipu. They\u2019re asking whether your loyalty is to Chinese science or global science.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "The folder contains export-control reviews, patent filings, and a transcript of your keynote in Zurich last spring \u2014 highlighted. Hanrui sips her pu\u2019er. \u201cTwo things are coming. One: new sanctions that will cut off your last grey-market GPU channel. Two: a request \u2014 a gentle request \u2014 that Zhipu lead a national AI consortium. Controlled. Visible. Patriotic.\u201d" }], left: { text: "\u201cTell me about the sanctions first. How bad?\u201d", effects: { capital: -3, compute: -5 }, setFlags: { sanctions_focused: true, grey_market_lost: true }, relations: { regulator: 4, board: -2, partner: -4 }, tags: ["sanctions", "supply_chain", "crisis"], next: "zhang_b3_sanction_dilemma" }, right: { text: "\u201cAnd if I refuse the consortium? If I say Zhipu stays independent?\u201d", effects: { safety: -6, hype: -3 }, setFlags: { independence_defiant: true, consortium_refused: true }, relations: { regulator: -8, board: 2, staff: 4 }, tags: ["defiance", "independence", "party_tension"], next: "zhang_b4_party_tension" } }
      ]
    },
    zhang_a3_scholar_path: {
      speaker: "Dr. Li Xiang",
      avatar: "scientist_li",
      parts: [
        { textVariants: [{ if: { flags: { scholar_track: true } }, text: "Your chief scientist, Li Xiang, is radiant. \u201cZhang-zong, with your backing, we\u2019ve opened the GLM-5.2 architecture paper. Nature wants it. MIT wants you to keynote. The global community sees Zhipu as the honest broker \u2014 Chinese science without walls.\u201d The lab buzzes. Young researchers from Tsinghua, Stanford, ETH Zurich crowd the whiteboards." }, { if: { always: true }, text: "Your chief scientist, Li Xiang, is radiant. \u201cZhang-zong, we\u2019ve opened the architecture paper. Nature wants it. The global community sees Zhipu as the honest broker.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "Then your phone buzzes. A photo from Zurich: your daughter at her school science fair, holding a poster about neural networks. \u201cMy papa builds brains!\u201d it reads in German. Lin is cropped out of the frame. Li Xiang notices your face. \u201cGo home early, Zhang-zong. The equations will wait.\u201d" }], left: { text: "\u201cNo. The equations come first. We publish, we keynote, we claim the mantle.\u201d", effects: { hype: 7, compute: 3, safety: 4 }, setFlags: { global_science_committed: true, nature_paper: true }, relations: { public: 6, staff: 5, family: -6, board: 3 }, tags: ["science", "global", "sacrifice"], next: "zhang_a5_zurich_postcard" }, right: { text: "You call Zurich. Your daughter answers. \u201cPapa! I won the science fair!\u201d", effects: { capital: -2, family: 8 }, setFlags: { called_daughter: true, zurich_call_scholar: true }, relations: { family: 10, staff: -2, public: -2 }, tags: ["family", "daughter", "connection"], next: "zhang_a6_deepseek_rivalry" } }
      ]
    },
    zhang_a4_chip_gamble: {
      speaker: "Engineer Wang",
      avatar: "engineer_wang",
      parts: [
        { textVariants: [{ if: { flags: { chip_committed: true } }, text: "The chip lab is a construction site. Engineer Wang, poached from SMIC, gestures at fabrication diagrams. \u201cWe can tape out in 18 months. But the sanctions mean we\u2019re fabbing on SMIC\u2019s 7nm \u2014 no EUV. Your GLM models will run. But 40% slower than on A100s. That\u2019s physics.\u201d He hesitates. \u201cThere\u2019s another path. Taiwan. Through certain Vietnamese intermediaries. But it\u2019s...\u201d" }, { if: { always: true }, text: "The chip lab is a construction site. Engineer Wang gestures at fabrication diagrams. \u201cWe can do this. But the path isn\u2019t clean.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "\u201cGrey,\u201d you finish. Wang nods. \u201cThe regulator would need to look the other way. And if it leaks, the Americans sanction the intermediary chain. But we\u2019d have 5nm. We\u2019d match them.\u201d The room is silent except for server fans. Somewhere in Zurich, your daughter is asleep." }], left: { text: "\u201cDo it. The grey channel. I\u2019ll handle the regulator.\u201d", effects: { capital: -12, compute: 10, safety: -7 }, setFlags: { grey_chip_route: true, taiwan_intermediary: true, regulator_risk: true }, relations: { board: -4, regulator: -8, partner: 6, staff: 5 }, tags: ["grey_channel", "risk", "chip_ambition"], next: "zhang_a5_zurich_postcard" }, right: { text: "\u201cNo. We do it clean. SMIC 7nm. We take the performance hit and own the integrity.\u201d", effects: { capital: -5, compute: 4, safety: 3 }, setFlags: { clean_chip_route: true, integrity_first: true }, relations: { board: 2, regulator: -2, staff: 3, public: 4 }, tags: ["integrity", "clean_route", "domestic"], next: "zhang_a7_regulator_visit" } }
      ]
    },
    zhang_b3_sanction_dilemma: {
      speaker: "Zhou Hanrui",
      avatar: "regulator_hanrui",
      parts: [
        { textVariants: [{ if: { flags: { sanctions_focused: true } }, text: "Hanrui spreads satellite photos on the tea table. \u201cYour last grey-market shipment through Malaysia. US Commerce already has the routing. They\u2019ll announce expanded entity-list sanctions within two quarters. Every Zhipu subsidiary. Every partner who touches your supply chain.\u201d She pauses. \u201cUnless you make yourself useful to Beijing first.\u201d" }, { if: { always: true }, text: "Hanrui spreads satellite photos on the tea table. \u201cYour last grey-market shipment. US Commerce already knows. They\u2019ll announce expanded sanctions within two quarters.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "\u201cThe consortium offer includes patent pooling. All Chinese AI firms contribute their crown jewels to a national IP pool. You\u2019d lose GLM exclusivity. But you\u2019d get access to everyone else\u2019s \u2014 plus state-funded compute. And protection from sanctions, at least diplomatically.\u201d Her eyes don\u2019t blink." }], left: { text: "\u201cFine. We pool our patents. But Zhipu leads the consortium. We write the rules.\u201d", effects: { capital: 5, compute: 4, safety: -4, hype: -3 }, setFlags: { patent_pool: true, consortium_leader: true, ip_capitulation: true }, relations: { regulator: 8, rival: -5, partner: 6, public: -2, board: 3 }, tags: ["patent_pool", "consortium", "compromise"], next: "zhang_b5_patent_war" }, right: { text: "\u201cNo patent pooling. We build a domestic supply chain instead. Sovereign compute from scratch.\u201d", effects: { capital: -6, compute: -3, safety: 3 }, setFlags: { patent_refused: true, domestic_supply_chain: true }, relations: { regulator: -5, rival: 2, staff: 5, board: -1, partner: -3 }, tags: ["sovereignty", "domestic", "defiance"], next: "zhang_b6_domestic_pivot" } }
      ]
    },
    zhang_b4_party_tension: {
      speaker: "Minister Liu",
      avatar: "minister_liu",
      parts: [
        { textVariants: [{ if: { flags: { independence_defiant: true } }, text: "You\u2019re summoned to the Ministry of Industry. Minister Liu doesn\u2019t serve tea. \u201cZhang Peng. Your Tsinghua pedigree is impeccable. Your CCPPC seat is a gift from the Party. And yet you tell Hanrui that Zhipu \u2014 a Chinese company on Chinese soil, built with Chinese talent \u2014 will not contribute to the national AI consortium?\u201d His voice stays level. \u201cExplain yourself.\u201d" }, { if: { always: true }, text: "You\u2019re summoned to the Ministry of Industry. Minister Liu doesn\u2019t serve tea. \u201cZhang Peng. Explain yourself.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "The room is lined with portraits of past Science Ministers \u2014 Qian Xuesen among them. Liu adjusts his glasses. \u201cI\u2019ll give you a choice. Join the consortium and patent pool voluntarily. Or we conduct a national security review of Zhipu\u2019s foreign collaborations.\u201d He lets \u201cZurich\u201d hang in the air \u2014 unspoken, unmistakable." }], left: { text: "\u201cI built Zhipu on open science. I won\u2019t let politics dictate our research agenda.\u201d", effects: { safety: -8, hype: 5 }, setFlags: { open_defiance: true, national_review_triggered: true }, relations: { regulator: -12, board: -5, staff: 6, public: 5, rival: 3 }, tags: ["defiance", "principles", "danger"], next: "zhang_a6_deepseek_rivalry" }, right: { text: "You think of the consortium. Maybe you can steer it from within. \u201cI\u2019ll join. But I\u2019ll fight for openness inside the tent.\u201d", effects: { capital: 3, safety: -2 }, setFlags: { consortium_joined_reluctant: true, inside_strategy: true }, relations: { regulator: 5, board: 3, staff: -4, rival: -4, partner: 3 }, tags: ["compromise", "inside_game", "strategy"], next: "zhang_b5_patent_war" } }
      ]
    },
    zhang_a5_zurich_postcard: {
      speaker: "Zhang Peng",
      avatar: "zhang_peng_ceo",
      parts: [
        { textVariants: [{ if: { flags: { chip_ambitious: true } }, text: "Another postcard arrives. This time it\u2019s a photograph: your daughter on a sailboat on Lake Zurich, Lin barely visible at the tiller. The caption: \u201cMama says you\u2019re building something important. I\u2019m building a boat. \u2014 Mei.\u201d You haven\u2019t seen her in 14 months. The chip project consumes every waking hour." }, { if: { flags: { scholar_track: true } }, text: "Another postcard \u2014 a watercolor of Zurich Hauptbahnhof. \u201cMama took this of the trains. You like trains. \u2014 Mei.\u201d You haven\u2019t seen her in 14 months. Your Nature submission is due next week." }, { if: { always: true }, text: "Another postcard from Zurich. Your daughter\u2019s handwriting. You haven\u2019t seen her in 14 months." }] },
        { textVariants: [{ if: { always: true }, text: "Your assistant buzzes. \u201cZhang-zong, DeepSeek just open-sourced their next-generation model. It benchmarks within 2% of GLM-5.2 \u2014 but it runs on commodity hardware.\u201d The timeline tightens. The chip, the papers, the consortium \u2014 everything suddenly feels fragile." }], left: { text: "\u201cBook me a flight to Zurich. I\u2019ll work remotely for a week. I need to see my daughter.\u201d", effects: { capital: -3, family: 12, hype: -4 }, setFlags: { flew_to_zurich: true, remote_week: true, family_choice: true }, relations: { family: 12, board: -4, staff: -3, public: -1 }, tags: ["family", "zurich", "balance"], next: "zhang_a8_daughter_call" }, right: { text: "\u201cI can\u2019t leave now. Send her a voice message. Tell her I\u2019ll come next quarter.\u201d", effects: { hype: 3, compute: 2, family: -5 }, setFlags: { deferred_daughter: true, mission_first: true }, relations: { family: -7, board: 3, staff: 2, rival: -2 }, tags: ["mission", "sacrifice", "deferred"], next: "zhang_a9_laboratory_raid" } }
      ]
    },
    zhang_a6_deepseek_rivalry: {
      speaker: "Liang Wenfeng",
      avatar: "rival_liang",
      parts: [
        { textVariants: [{ if: { flags: { called_daughter: true } }, text: "Liang Wenfeng, DeepSeek\u2019s founder, appears via video link \u2014 grinning, infuriatingly relaxed. \u201cZhang-laoshi, your daughter\u2019s science fair project was charming. My team saw it on WeChat. Very inspiring.\u201d He means it as a compliment, which somehow makes it worse. \u201cWe just shipped DeepSeek-V4. Open weights. MIT license. It\u2019s not quite GLM-5.2, but give us two quarters.\u201d" }, { if: { flags: { open_defiance: true } }, text: "Liang Wenfeng appears via video link. \u201cZhang-laoshi, I heard about your Ministry meeting. Brave. Also: reckless.\u201d He leans forward. \u201cDeepSeek joined the consortium last week. You know why? Because we can open-source everything \u2014 and the state doesn\u2019t care, because we don\u2019t have a CCPPC seat. You do. Different rules.\u201d" }, { if: { always: true }, text: "Liang Wenfeng appears via video link. \u201cZhang-laoshi, DeepSeek-V4. Open weights. MIT license. Give us two quarters.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "He pauses. \u201cI\u2019m not your enemy. The Americans are. But you\u2019re making me look good by refusing to play the state\u2019s game. If you fall, I rise. That\u2019s not personal \u2014 it\u2019s physics.\u201d He offers a partnership: co-develop an open standard that outflanks both the consortium and Western platforms." }], left: { text: "\u201cPartner with you? After you\u2019ve been eating our benchmarks for breakfast? Fine. Let\u2019s build something bigger.\u201d", effects: { hype: 6, compute: 4, safety: 2 }, setFlags: { deepseek_alliance: true, open_standard: true }, relations: { rival: 8, partner: 6, public: 5, board: -3, regulator: -4 }, tags: ["alliance", "rival_to_partner", "open"], next: "zhang_a8_daughter_call" }, right: { text: "\u201cI respect you, Liang. But Zhipu walks its own path. We compete.\u201d", effects: { hype: -2, compute: 3, safety: -2 }, setFlags: { rival_competition: true, no_alliance: true }, relations: { rival: -5, staff: 3, board: 2, regulator: 2 }, tags: ["competition", "independence", "rivalry"], next: "zhang_b7_propaganda" } }
      ]
    },
    zhang_a7_regulator_visit: {
      speaker: "Inspector Gao",
      avatar: "inspector_gao",
      parts: [
        { textVariants: [{ if: { flags: { clean_chip_route: true } }, text: "Inspector Gao from the AI Ethics Bureau arrives unannounced. \u201cRoutine review,\u201d she says, but her team unpacks forensic gear. \u201cYour chip project is flagged \u2014 foreign collaboration risk assessment. We need to review all communications with non-Chinese researchers. All of them.\u201d She means Zurich. She means Lin." }, { if: { always: true }, text: "Inspector Gao from the AI Ethics Bureau arrives unannounced. \u201cRoutine review. Your chip project is flagged \u2014 foreign collaboration risk assessment.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "Gao walks your lab floor, photographing whiteboards. \u201cZhang-zong, I\u2019ll be frank. Someone in your orbit flagged a concern. We can make this review... thorough. Or we can make it targeted. It depends on how cooperative you are with the national agenda.\u201d The subtext is clear: your family in Zurich is leverage." }], left: { text: "\u201cCooperate fully. Give them everything. Protect my people \u2014 and my family.\u201d", effects: { safety: 6, hype: -4, capital: -2 }, setFlags: { cooperated_review: true, transparency: true, protected_family: true }, relations: { regulator: 6, board: 2, staff: -3, public: -2 }, tags: ["cooperation", "review", "protection"], next: "zhang_a9_laboratory_raid" }, right: { text: "\u201cThis is intimidation. I\u2019ll go public. International press. Let them see what Chinese AI scientists face.\u201d", effects: { safety: -10, hype: 8 }, setFlags: { went_public: true, media_defiance: true, burned_regulator: true }, relations: { regulator: -15, board: -6, public: 8, staff: 4, rival: 3 }, tags: ["defiance", "media", "risk"], next: "zhang_b7_propaganda" } }
      ]
    },
    zhang_b5_patent_war: {
      speaker: "Legal Counsel Ma",
      avatar: "lawyer_ma",
      parts: [
        { textVariants: [{ if: { flags: { patent_pool: true } }, text: "Legal Counsel Ma looks exhausted. \u201cThe patent pool agreement is 400 pages. DeepSeek is challenging three of our core attention-mechanism patents. Huawei wants royalty-free access to GLM training data. And the state patent office is... interpreting things creatively.\u201d The consortium you agreed to lead is becoming a cage." }, { if: { flags: { consortium_joined_reluctant: true } }, text: "Legal Counsel Ma is pale. \u201cThe consortium agreement has hidden clauses. Cross-licensing isn\u2019t voluntary \u2014 it\u2019s compulsory. Any model trained with consortium compute becomes consortium property. Including GLM-5.2\u2019s successor.\u201d The trap is sprung." }, { if: { always: true }, text: "Legal Counsel Ma looks exhausted. \u201cThe patent situation is deteriorating. We\u2019re being squeezed from multiple sides.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "Ma slides a document across the desk. \u201cThere\u2019s a loophole. Pre-pool patents \u2014 filed before the consortium charter \u2014 remain yours. If we can prove GLM-5.3 is derivative of pre-consortium work, we retain ownership. But we need your original Tsinghua notebooks. From your PhD. Every page.\u201d" }], left: { text: "\u201cGet the notebooks. Prove the lineage. We fight to keep what\u2019s ours.\u201d", effects: { capital: -4, hype: 3, safety: 2 }, setFlags: { patent_defense: true, tsinghua_notebooks: true, lineage_proof: true }, relations: { board: 4, staff: 3, rival: -3, regulator: -2 }, tags: ["patent_defense", "academic", "fight"], next: "zhang_b8_domestic_chip" }, right: { text: "\u201cLet it go. We open-source GLM-5.3 before they can claim it. Burn the ships.\u201d", effects: { hype: 9, capital: -2, compute: -3 }, setFlags: { open_sourced: true, burned_patents: true, radical_openness: true }, relations: { public: 10, rival: 6, regulator: -8, board: -5, partner: 3 }, tags: ["radical", "open_source", "burn_ships"], next: "zhang_b9_nationalism" } }
      ]
    },
    zhang_b6_domestic_pivot: {
      speaker: "Engineer Wang",
      avatar: "engineer_wang",
      parts: [
        { textVariants: [{ if: { flags: { domestic_supply_chain: true } }, text: "Engineer Wang studies the fabrication timeline. \u201cDomestic supply chain means we\u2019re entirely dependent on SMIC and YMTC. Our chips will be 40% slower than NVIDIA, 30% more expensive, and we\u2019ll need three times as many. But \u2014 \u201d he circles a number \u2014 \u201cwe\u2019ll be untouchable. No American sanction can reach us. True sovereignty.\u201d" }, { if: { always: true }, text: "Engineer Wang studies the fabrication timeline. \u201cDomestic supply chain. 40% slower, 30% more expensive. But untouchable.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "The numbers are brutal: $3.4 billion over four years. The HK stock price will crater. But Wang is right \u2014 this is true independence. No grey markets. No Taiwanese intermediaries. No American leverage. Just Chinese silicon, Chinese models, Chinese destiny." }], left: { text: "\u201cDo it. File the SMIC partnership tomorrow. We commit to domestic silicon.\u201d", effects: { capital: -10, compute: 5, safety: 6, hype: -3 }, setFlags: { domestic_silicon_committed: true, smic_partnership: true, full_sovereignty: true }, relations: { board: -2, staff: 6, regulator: 5, partner: 7, public: 3, rival: -1 }, tags: ["sovereignty", "domestic", "commitment"], next: "zhang_b8_domestic_chip" }, right: { text: "\u201cWait. Before we commit everything \u2014 let me consult Tsinghua. The old professors. They\u2019ve navigated decades of this.\u201d", effects: { capital: -2, compute: 1, safety: 2 }, setFlags: { consulted_tsinghua: true, academic_guidance: true, pause: true }, relations: { board: 1, staff: -1, public: 2, partner: -1 }, tags: ["consultation", "academia", "pause"], next: "zhang_a10_glm_release" } }
      ]
    },
    zhang_a8_daughter_call: {
      speaker: "Mei Zhang",
      avatar: "mei_zhang",
      parts: [
        { textVariants: [{ if: { flags: { flew_to_zurich: true } }, text: "Zurich is cold and clean. You\u2019re sitting on a bench by the Limmat, your daughter beside you, feeding swans. \u201cPapa, Mama says you chose to come. That you could have stayed in Beijing.\u201d She doesn\u2019t look at you. \u201cDid you choose me, or did you choose work?\u201d A swan honks. The Alps are white in the distance." }, { if: { flags: { deepseek_alliance: true } }, text: "Zurich. Video call \u2014 your daughter on her tablet. \u201cPapa! Did you see? My science project got top marks. I used your GLM to classify bird songs.\u201d She plays a recording: a blackbird. \u201cLiang-shushu sent me a note. He said you\u2019re working together now. Is that good?\u201d You realize: she tracks your life online." }, { if: { always: true }, text: "Zurich. A video call. Your daughter on her tablet. \u201cPapa! Did you see my science project?\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "Lin appears in the background, arms crossed. She doesn\u2019t speak. But she doesn\u2019t leave the frame. Your daughter hands the tablet to her. \u201cMama wants to talk.\u201d The camera shakes." }], left: { text: "\u201cMei, I chose you. Every day. Even when I\u2019m not there. Tell Mama \u2014 I want to make this right.\u201d", effects: { family: 10, capital: -2 }, setFlags: { chose_family: true, lin_reconciliation: true, zurich_commitment: true }, relations: { family: 14, board: -5, staff: -4, public: -1 }, tags: ["family", "reconciliation", "choice"], next: "zhang_a10_glm_release" }, right: { text: "\u201cMei, what I\u2019m building \u2014 it\u2019s for you. For every child. One day you\u2019ll understand.\u201d", effects: { hype: 3, family: -4 }, setFlags: { mission_for_daughter: true, deferred_family: true }, relations: { family: -5, board: 2, staff: 3, public: 2 }, tags: ["mission", "legacy", "sacrifice"], next: "zhang_end_open_scholar" } }
      ]
    },
    zhang_a9_laboratory_raid: {
      speaker: "Inspector Gao",
      avatar: "inspector_gao",
      parts: [
        { textVariants: [{ if: { flags: { cooperated_review: true } }, text: "Inspector Gao returns. This time she\u2019s carrying a search warrant. \u201cZhang-zong, your cooperation was noted. But your Tsinghua notebooks \u2014 the ones from the patent defense \u2014 contain references to a 2019 collaboration with ETH Zurich. Unregistered foreign collaboration. We need to confiscate all related research.\u201d Your cooperation bought you nothing." }, { if: { flags: { mission_first: true } }, text: "Inspector Gao\u2019s team arrives at 6 AM. \u201cNational security review. Your chip project, your GLM training data, your correspondence with \u2014 \u201d she checks her tablet \u201c \u2014 Lin Zhang, Swiss resident. We\u2019re sealing the lab.\u201d The raid is methodical. Servers powered down. Whiteboards photographed. Your daughter\u2019s postcards \u2014 bagged as evidence." }, { if: { always: true }, text: "Inspector Gao\u2019s team arrives at 6 AM. \u201cNational security review. We\u2019re sealing the lab.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "As Gao\u2019s team boxes your research, she hands you a letter. Official CCPPC letterhead. \u201cThe Party values your contributions, Zhang Peng. But scientists serve the people. Not journals. Not foreign conferences. The people.\u201d She waits. \u201cYou can still choose which people you serve.\u201d" }], left: { text: "\u201cI serve science. Science knows no borders. Take the lab \u2014 the work continues in my mind.\u201d", effects: { safety: -8, hype: 6, compute: -4 }, setFlags: { lab_raided: true, science_no_borders: true, defiance_under_pressure: true }, relations: { regulator: -12, board: -5, staff: 5, public: 6 }, tags: ["defiance", "principle", "persecution"], next: "zhang_a11_last_postcard" }, right: { text: "\u201cYou\u2019re right. I serve China. Take the lab \u2014 but let me build for my country.\u201d", effects: { capital: 4, safety: 5, hype: -3 }, setFlags: { capitulated: true, serve_china: true, lab_lost: true }, relations: { regulator: 8, board: 5, staff: -4, rival: 4, public: -2 }, tags: ["capitulation", "nationalism", "surrender"], next: "zhang_end_silk_model" } }
      ]
    },
    zhang_b7_propaganda: {
      speaker: "Officer Sun",
      avatar: "officer_sun",
      parts: [
        { textVariants: [{ if: { flags: { went_public: true } }, text: "Officer Sun from the Central Propaganda Department sits where Hanrui once sat. \u201cZhang Peng, your little interview with the Financial Times was... noticed. At the highest levels. You compared Chinese AI regulation to \u2018academic censorship.\u2019 Not helpful.\u201d He slides over a prepared statement. \u201cSign this. Retract. Frame it as a misunderstanding.\u201d" }, { if: { flags: { rival_competition: true } }, text: "Officer Sun from the Central Propaganda Department is smiling, which is worse than anger. \u201cZhang-zong, DeepSeek just published a very patriotic op-ed in People\u2019s Daily. \u2018AI for the Chinese Dream.\u2019 Where is Zhipu\u2019s equivalent? The optics are... challenging. A Tsinghua PhD, CCPPC member, and our flagship AI company doesn\u2019t wave the flag?\u201d" }, { if: { always: true }, text: "Officer Sun from the Central Propaganda Department is waiting. \u201cZhang-zong, the optics are challenging.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "Sun produces a draft editorial. \u201cZhipu AI: Building China\u2019s Intelligent Future.\u201d It positions Zhipu as a national champion, GLM as a tool of state development, and you as a loyal son of China. \u201cSign your name to this. It\u2019ll run in tomorrow\u2019s People\u2019s Daily. Or the alternative is... no editorial at all. From anyone. About Zhipu.\u201d" }], left: { text: "\u201cI\u2019ll write my own. Patriotic, yes. But honest. About the real challenges.\u201d", effects: { hype: 2, safety: -1, capital: 1 }, setFlags: { wrote_editorial: true, honest_patriotism: true, walked_line: true }, relations: { regulator: 2, board: 3, public: 4, staff: 3 }, tags: ["compromise", "editorial", "balance"], next: "zhang_b9_nationalism" }, right: { text: "\u201cI won\u2019t sign propaganda. Zhipu is science, not slogans. Shut us down if you must.\u201d", effects: { safety: -9, hype: 7, capital: -5 }, setFlags: { refused_propaganda: true, blacked_out: true, principle_above_all: true }, relations: { regulator: -14, board: -7, public: 6, staff: 5, rival: 4 }, tags: ["defiance", "censorship", "principle"], next: "zhang_end_domestic_fortress" } }
      ]
    },
    zhang_b8_domestic_chip: {
      speaker: "Engineer Wang",
      avatar: "engineer_wang",
      parts: [
        { textVariants: [{ if: { flags: { patent_defense: true } }, text: "The first domestic silicon wafer arrives in a foam-lined case. Engineer Wang holds it like a newborn. \u201cSMIC delivered. 7nm. Test yields are 62%, which is terrible \u2014 but it boots.\u201d He runs GLM-5.2 inference on it. The numbers are 38% slower than the last batch of smuggled A100s. But the chip is Chinese. You hold it up to the light. \u201cWe own this.\u201d" }, { if: { flags: { domestic_silicon_committed: true } }, text: "The SMIC partnership is signed. The Hong Kong stock price dips 14% overnight \u2014 but three provincial governments pre-order compute capacity. Engineer Wang is haggard but glowing. \u201cZhang-zong, we just committed to the hardest thing anyone in Chinese AI has attempted. You\u2019ll be called a fool. Or a pioneer. Maybe both.\u201d" }, { if: { always: true }, text: "The domestic silicon wafer arrives. Engineer Wang runs the first benchmarks. It\u2019s slower. It\u2019s more expensive. But it\u2019s yours." }] },
        { textVariants: [{ if: { always: true }, text: "Your phone rings. It\u2019s Zhou Hanrui. \u201cZhang Peng, I\u2019m calling unofficially. The Ministry is... impressed. A domestic chip bet, no grey channels, no foreign dependencies. They\u2019re talking about you in the same breath as Qian Xuesen. But there\u2019s a catch. They want Zhipu to become a strategic national asset. Full state partnership. Controlled board seats. Security-cleared researchers.\u201d" }], left: { text: "\u201cWe\u2019ve come this far. If state partnership protects what we\u2019ve built, I\u2019ll take it.\u201d", effects: { capital: 6, safety: 8, hype: -2, compute: 3 }, setFlags: { state_partnership: true, national_champion: true, chosen_domestic: true }, relations: { regulator: 10, board: 6, staff: -3, public: 2, rival: -3 }, tags: ["state_partnership", "national_champion", "pragmatism"], next: "zhang_end_domestic_fortress" }, right: { text: "\u201cNo. We built sovereign silicon to be free. Not to trade one master for another. I\u2019m leaving.\u201d", effects: { capital: -15, hype: 6, safety: -12 }, setFlags: { refused_partnership: true, chose_escape: true, burned_china_bridges: true }, relations: { regulator: -18, board: -10, staff: 2, public: 4, family: 5 }, tags: ["escape", "burn_bridges", "freedom"], next: "zhang_end_escape_zurich" } }
      ]
    },
    zhang_b9_nationalism: {
      speaker: "Officer Sun",
      avatar: "officer_sun",
      parts: [
        { textVariants: [{ if: { flags: { open_sourced: true } }, text: "Sun reads your open-source manifesto. \u201cYou open-sourced GLM-5.3? To the entire world? Zhang Peng, this is either genius or madness.\u201d He pauses. \u201cThe Ministry has a proposal. If you open-source everything \u2014 but frame it as China\u2019s gift to global AI, a benevolent technological power \u2014 we can make you the face of Chinese tech openness. Controlled openness. Your CCPPC seat becomes a platform for science diplomacy.\u201d" }, { if: { flags: { wrote_editorial: true } }, text: "Your editorial runs in People\u2019s Daily. It\u2019s balanced \u2014 patriotic but honest \u2014 and the response is overwhelming. Tech workers quote it. Students debate it. Sun calls. \u201cYou walked the tightrope, Zhang-zong. The Ministry is pleased. But now they want more. They want you to testify before the CCPPC. On the record. Shape the national AI policy from within.\u201d" }, { if: { always: true }, text: "Sun returns with a new proposal. \u201cThe Ministry wants to elevate Zhipu. But the terms are... specific.\u201d" }] },
        { textVariants: [{ if: { always: true }, text: "Sun slides a policy brief across the table. \u201cChina\u2019s AI Silk Road. You\u2019d lead it. Zhipu\u2019s models, China\u2019s vision. You\u2019d travel \u2014 Belt and Road countries, global summits \u2014 as the face of Chinese AI. The Party would protect your researchers. Your family in Zurich remains... unmentioned.\u201d" }], left: { text: "\u201cI\u2019ll do it. The Silk Model. I\u2019ll be China\u2019s AI ambassador \u2014 on my terms. Science first, politics second.\u201d", effects: { capital: 8, hype: 5, safety: 3 }, setFlags: { silk_model_chosen: true, ai_ambassador: true, controlled_influence: true }, relations: { regulator: 8, board: 6, public: 7, partner: 8, rival: -2, family: -3 }, tags: ["silk_model", "diplomacy", "compromise"], next: "zhang_end_silk_model" }, right: { text: "\u201cI can\u2019t be a diplomatic prop. I\u2019m a scientist. Let me publish, teach, do real work \u2014 or let me go.\u201d", effects: { hype: 4, safety: -6, capital: -4 }, setFlags: { refused_silk_model: true, chose_science: true, ultimate_defiance: true }, relations: { regulator: -10, board: -4, staff: 6, public: 5 }, tags: ["science", "refusal", "integrity"], next: "zhang_a11_last_postcard" } }
      ]
    },
    zhang_a10_glm_release: {
      speaker: "Dr. Li Xiang",
      avatar: "scientist_li",
      parts: [
        { textVariants: [{ if: { flags: { chose_family: true } }, text: "GLM-5.3 ships. The release is quiet \u2014 no fanfare, no press conference. Li Xiang handles the technical launch from Beijing while you work remotely from Zurich. Nature publishes the accompanying paper. The global AI community calls it the most transparent Chinese model ever released. Your daughter reads the Nature article over your shoulder. \u201cPapa, your name is in English AND Chinese.\u201d" }, { if: { flags: { consulted_tsinghua: true } }, text: "GLM-5.3 ships. The Tsinghua professors you consulted \u2014 old men who survived the Cultural Revolution, who built China\u2019s first computer science department \u2014 attend the launch. Professor Zheng, 87, touches the screen. \u201cThis is what we dreamed of. Science. Not politics. Not weapons. Science.\u201d He looks at you. \u201cNow choose: publish openly, or let the state claim it.\u201d" }, { if: { always: true }, text: "GLM-5.3 ships. The release is a critical moment. Everything you\u2019ve built hangs in the balance." }] },
        { textVariants: [{ if: { always: true }, text: "Zhou Hanrui arrives at the launch event. She carries a new folder. \u201cFinal offer, Zhang Peng. The Party will give Zhipu protected status \u2014 no more raids, no more reviews \u2014 if you agree to one condition: GLM-5.3\u2019s training data and safety filters must be reviewed by a state-appointed committee. Not controlled. Reviewed. You keep final say.\u201d" }], left: { text: "\u201cAgreed. Review, but final say stays with Zhipu. We publish openly. Transparency is our shield.\u201d", effects: { hype: 6, safety: 4, compute: 2 }, setFlags: { protected_status: true, open_publish: true, balanced_settlement: true }, relations: { regulator: 6, board: 5, staff: 4, public: 7, partner: 4 }, tags: ["balance", "open", "protected"], next: "zhang_end_open_scholar" }, right: { text: "\u201cNo review. No committee. Open source, open weights, no filters. Science belongs to everyone.\u201d", effects: { hype: 10, safety: -5, capital: -3, compute: -2 }, setFlags: { radical_open: true, no_review: true, science_absolutism: true }, relations: { regulator: -12, board: -5, staff: 7, public: 10, rival: 5 }, tags: ["radical", "freedom", "risk"], next: "zhang_end_silk_model" } }
      ]
    },
    zhang_a11_last_postcard: {
      speaker: "Zhang Peng",
      avatar: "zhang_peng_ceo",
      parts: [
        { textVariants: [{ if: { flags: { lab_raided: true } }, text: "The lab is sealed. Yellow tape. Your office is empty except for one thing propped against your monitor: a new postcard from Zurich. Watercolor of the Grossmunster cathedral at sunset. \u201cPapa, I learned about stained glass. It\u2019s science AND art. \u2014 Mei.\u201d You sit in the dark, holding it. The servers are silent. The whiteboards are blank. But your mind is still running." }, { if: { flags: { refused_silk_model: true } }, text: "You\u2019re at Beijing Capital Airport, terminal 3. One bag. No return ticket. Your phone buzzes: a postcard photo from Mei. She\u2019s painted a rocket ship. \u201cPapa, does this go to the moon? Love, Mei.\u201d You haven\u2019t decided where you\u2019re going. Zurich. Or somewhere else. But you\u2019re going." }, { if: { always: true }, text: "One last postcard from Zurich. Your daughter\u2019s watercolor. You hold it in the quiet." }] },
        { textVariants: [{ if: { always: true }, text: "The choice crystallizes. You\u2019ve defied the Party. Your lab is sealed or your bridges are burned. The Hong Kong stock is suspended. But your mind \u2014 your science \u2014 is still yours. So is your daughter. So is Lin, somewhere across the world, probably still angry but probably still loving you. What is your final move?" }], left: { text: "One-way ticket to Zurich. Mei. Lin. The Limmat. I\u2019ve done enough for China. Now I do something for myself.", effects: { capital: -20, family: 15, safety: -10, hype: -5 }, setFlags: { escape_decision: true, zurich_final: true, personal_freedom: true }, relations: { family: 18, board: -15, regulator: -20, staff: -5, public: 3 }, tags: ["escape", "family", "final_choice"], next: "zhang_end_escape_zurich" }, right: { text: "I stay. I fight. Science doesn\u2019t run. Even when the country turns against it. I\u2019ll publish. I\u2019ll teach. I\u2019ll be China\u2019s conscience in AI. Even if it costs everything.", effects: { hype: 8, safety: -12, capital: -10, compute: -5 }, setFlags: { stay_and_fight: true, martyr_science: true, china_conscience: true }, relations: { regulator: -18, board: -8, staff: 8, public: 10, family: -8 }, tags: ["martyr", "science", "stay"], next: "zhang_end_silk_model" } }
      ]
    },
    zhang_end_silk_model: {
      speaker: "Narrator",
      avatar: "narrator",
      parts: [
        { textVariants: [{ if: { always: true }, text: "THE SILK MODEL. Zhang Peng becomes the face of Chinese AI on the global stage \u2014 a brilliant scientist navigating the narrow path between national loyalty and intellectual independence. He publishes in Nature, keynotes at NeurIPS, and shakes hands with ministers. The Party protects him because he is useful; the world respects him because he is honest. It is a delicate balance, held together by his relentless intellect and the quiet understanding that one misstep could collapse it all. In Zurich, a postcard arrives every quarter. He frames each one." }] }
      ],
      specialEnding: "silk_model",
      setFlags: { ending_reached: true }
    },
    zhang_end_domestic_fortress: {
      speaker: "Narrator",
      avatar: "narrator",
      parts: [
        { textVariants: [{ if: { always: true }, text: "THE DOMESTIC FORTRESS. Zhipu becomes China\u2019s sovereign AI champion \u2014 silicon, models, and data all built on domestic foundations. Zhang Peng trades global acclaim for national security, his name celebrated in Chinese textbooks but unknown in Western journals. The custom chip ships. The models run. China has an AI industry that no American sanction can touch. But the walls that keep sanctions out also keep the world at a distance. Zhang stares at his daughter\u2019s postcards and wonders what she will learn about her father in school." }] }
      ],
      specialEnding: "domestic_fortress",
      setFlags: { ending_reached: true }
    },
    zhang_end_open_scholar: {
      speaker: "Narrator",
      avatar: "narrator",
      parts: [
        { textVariants: [{ if: { always: true }, text: "THE OPEN SCHOLAR. Zhang Peng chooses science over everything \u2014 party, patents, and even family. GLM models are open-sourced, papers published, lectures delivered. The global research community hails him as the conscience of Chinese AI. The Party watches warily but cannot move against a man with so much international standing. It is a lonely victory. His daughter grows up reading about her father in journals rather than knowing him in person. But the science advances. The equations are true. And that, Zhang tells himself at 3 AM in an empty lab, is enough." }] }
      ],
      specialEnding: "open_scholar",
      setFlags: { ending_reached: true }
    },
    zhang_end_escape_zurich: {
      speaker: "Narrator",
      avatar: "narrator",
      parts: [
        { textVariants: [{ if: { always: true }, text: "ESCAPE TO ZURICH. Zhang Peng walks away. From Zhipu. From Beijing. From the CCPPC seat and the chip project and the Ministry summons. He lands in Zurich on a grey Tuesday morning. Lin is at the airport, arms still crossed \u2014 but she is there. Mei runs across the arrivals hall, her watercolor kit clattering. \u201cPapa! I painted the Limmat for you!\u201d He kneels. The security services may come for him someday. The Americans may want his expertise. The Chinese may want his silence. But today, there are swans on the river, and his daughter\u2019s hand in his, and the cold Alpine air that smells like freedom." }] }
      ],
      specialEnding: "escape_to_zurich",
      setFlags: { ending_reached: true }
    }
  }
},

};