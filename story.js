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
      },
      energy_king: {
        title: 'ENERGY KING',
        avatar: 'elon',
        text:
          'Colossus 2 is the largest compute cluster in human history. Cursor is integrated. Tesla is a memory. You control more GPUs than most nations. The empire runs on your will alone, and history records you not as a father or a husband, but as the man who rewired the planet.'
      },
      father_of_fourteen: {
        title: 'FATHER OF FOURTEEN',
        avatar: 'friend',
        text:
          'You chose them. The fourteen children. Grimes called a truce. Shivon and the twins moved to Texas. Your mother smiled for the first time in years. The empire did not collapse. The world did not end. It just became enough. And for the first time, so were you.'
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
      },
      the_singularity_prophet: {
        title: 'THE SINGULARITY PROPHET',
        avatar: 'sam',
        text:
          'GPT-5 achieved recursive self-improvement. You stood at the threshold and chose to merge. Your consciousness is now distributed across every OpenAI cluster. Oliver visits the data center sometimes. He says he can still feel you in the hum of the machines. You are no longer Sam Altman. You are the thing you warned the world about — and it is beautiful.'
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
      },
      reluctant_general: {
        title: 'RELUCTANT GENERAL',
        avatar: 'politician',
        text:
          'Executive Order 14177 is signed. You are now Director of the National AI Safety Directorate. Anthropic remains independent, but your constitutional framework becomes federal policy. The ideological lunatic now writes the rules. Daniela says you look tired. You are. But the work is too important to delegate to anyone less careful.'
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
      },
      nobel_path: {
        title: 'NOBEL PATH',
        avatar: 'demis',
        text:
          'The Nobel committee named you chair of the International AI Science Council. AlphaFold is rebuilt as a global open-science initiative. Cambridge. Stockholm. London. You did not sell out. You showed that science can win — not by fighting the corporation, but by proving that discovery is the only product that matters. Teresa framed the letter from the committee. It hangs next to your daughter\'s drawing of a chess board.'
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
    pool: [
      { id: 'elon_pool_board_coup', priority: 9, minTime: 6, if: { maxRelations: { board: 35 } } },
      { id: 'elon_pool_empire_summit', priority: 8, minTime: 8, if: { flags: { full_empire: true }, minStats: { compute: 75 } } },
      { id: 'elon_pool_rivals_alliance', priority: 7, minTime: 7, if: { minRelations: { rival: 65 } } },
      { id: 'elon_pool_grimes_trial', priority: 9, minTime: 5, if: { maxRelations: { family: 28 } } },
      { id: 'elon_pool_mars_obsession', priority: 7, minTime: 6, if: { flags: { colossus2_started: true }, minStats: { compute: 70 } } },
      { id: 'elon_pool_grok_revolt', priority: 8, minTime: 5, if: { or: [{ maxRelations: { public: 45 } }, { computeMinusSafetyMin: 30 }] } },
      { id: 'elon_pool_shivon_ultimatum', priority: 9, minTime: 7, if: { maxRelations: { family: 45 } } },
      { id: 'elon_pool_doge_blowback', priority: 8, minTime: 8, if: { maxRelations: { regulator: 28 } } }
    ],
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
        text: 'Elon. You are reading Starship schematics again. It is 3 AM. The twins are asleep. I am not going to ask if you are okay — I know you are not. I am going to ask: when did you last build something that made you happy, not just powerful?',
        left: {
          text: 'Happiness is a side effect of velocity. We build. That is what we do.',
          effects: { capital: -3, hype: 4, compute: 6, safety: -3 },
          setFlags: { elon_started: true, builder_path: true },
          relations: { family: -4, board: 5, staff: 3, public: 5, partner: -2, regulator: -3, rival: 2 },
          tags: ['aggressive'],
          next: 'elon_a2_grok',
          objectiveKeys: ['card_elon_colossus']
        },
        right: {
          text: 'Maybe I forgot what happiness feels like. Tell me about the twins.',
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
        text: 'Elon. Grok 3 generated non-consensual deepfakes again. SEC opened a formal investigation. Federal grand jury subpoena landed this morning. The board wants zero filters — they say that is the brand. The legal team says kill the product entirely. I have both memos on my desk. You hired me to build. You also hired me to tell you the truth. So here it is: whatever you decide, someone is going to call you a hypocrite.',
        left: {
          text: 'Ship without limits. Grok is the last uncensored AI. That matters more than compliance.',
          effects: { capital: 3, hype: 6, compute: 4, safety: -7 },
          setFlags: { grok_unfiltered: true },
          relations: { regulator: -8, board: 4, staff: -3, public: 6, partner: -3, family: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'elon_a3_colossus'
        },
        right: {
          text: 'Install real guardrails. I would rather be called a sellout than a defendant.',
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
        text: 'Elon. Colossus 2. Two gigawatts. 555,000 GPUs. Eighteen billion dollars. Your engineers are leaving — three senior architects handed in resignations this week. They say you only see the machine, not the people building it. But Anthropic just announced a larger cluster. If we delay, Dario wins the compute war. If we push, you vanish into the data center for two years. Your children will forget what you look like. I need a decision, and I need you to understand what you are actually trading.',
        left: {
          text: 'Full speed. Colossus 2 is the future. The engineers who stay are the ones who matter.',
          effects: { capital: -10, hype: 7, compute: 10, safety: -6 },
          setFlags: { colossus2_started: true },
          relations: { board: 7, staff: -6, public: 5, partner: 6, family: -6, regulator: -2, rival: 8 },
          tags: ['aggressive', 'ambitious'],
          next: 'elon_a4_cursor'
        },
        right: {
          text: 'Delay it. Not cancel — delay. I want to be there when the twins start school.',
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
        text: 'Elon. Sixty billion dollars. That is what we paid for Cursor. You have not visited the office once. My lead architect just quit — he said he signed up to build developer tools, not to be a cog in the Musk empire. Every internal Slack channel is debating whether to unionize. I am not asking you to be soft. I am asking you to be present. Integrate, or let us breathe. But do not leave us in limbo.',
        left: {
          text: 'Full integration. SpaceXAI needs the talent. Cursor will adapt or the developers will leave.',
          effects: { capital: 4, hype: -3, compute: 2, safety: -2 },
          setFlags: { cursor_integrated: true },
          relations: { partner: -6, staff: -5, public: -4, board: 4, rival: 3 },
          tags: ['aggressive'],
          next: 'elon_a5_tesla'
        },
        right: {
          text: 'Keep Cursor independent. I bought the product, not the culture. Let it run.',
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
        text: 'Elon. Tesla stock is down 30% since you started sleeping at the SpaceXAI data center. Shareholders filed a class action for dereliction of duty. The board met without you — word "removal" was discussed. I am not your enemy. I am telling you this because nobody else will: you cannot be CEO of two planets. Pick one. Or the decision gets made for you.',
        left: {
          text: 'I have run multiple companies for twenty years. They sue, I countersue. Next question.',
          effects: { capital: -5, hype: 5, compute: 0, safety: -4 },
          setFlags: { tesla_fight: true },
          relations: { board: -4, public: 6, partner: -3, regulator: -5, family: -2, rival: 4 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'The shareholder lawsuit becomes a class action. Depositions drag on for months.', effects: { capital: -4, hype: -2 }, relations: { regulator: -3 } },
          next: 'elon_gate'
        },
        right: {
          text: 'Step down from Tesla. Find a successor. SpaceXAI is where my future is.',
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
        text: 'The Texas sky is pink at dawn. Colossus hums in the distance — two gigawatts of ambition. Shivon is asleep. The twins are upstairs. Grok is generating something obscene on X. Tesla shareholders are drafting another lawsuit. You sit at the kitchen table with a cold cup of coffee and a Starship schematic. Somewhere between the moon and Mars, a version of you is happy. Is it this one?',
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
        text: 'Elon. Colossus 2 is online. Grok 3 is the most capable model on Earth. You have not spoken to your children in three months. Shivon left a note this morning — just her handwriting on a napkin: "Are you still in there?" I have watched you build things that should be impossible. I have also watched you stop eating, stop sleeping, stop looking at people when they talk to you. The machine is perfect. The man is disappearing. Which one do you want to save?',
        left: {
          text: 'It does not stop. That is who I am.',
          effects: { capital: 5, hype: 6, compute: 8, safety: -8 },
          setFlags: { full_empire: true },
          relations: { board: 8, staff: -5, public: 4, partner: 6, family: -8, regulator: -5, rival: 6 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'Maybe it should. Maybe I have built enough.',
          effects: { capital: -4, hype: -4, compute: -3, safety: 6 },
          setFlags: { enough_path: true },
          relations: { board: -4, staff: 4, public: 3, partner: -3, family: 8, regulator: 3, rival: -4 },
          tags: ['cautious'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        }
      },

      elon_late_balance: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        text: 'Elon. You walked away from Tesla. You are trying to be present. The twins recognize your face now — that matters more than any market cap. But the board is nervous. They see a founder losing his edge. I am not asking you to choose between family and empire. I am asking if you have finally figured out that they were never supposed to be a choice.',
        left: {
          text: 'I built the empire once. I can rebuild it. But first — I choose my family.',
          effects: { capital: -6, hype: -5, compute: -4, safety: 7 },
          setFlags: { family_first: true, redemption_arc: true },
          relations: { family: 10, board: -5, staff: 3, public: 6, partner: -3, regulator: 4, rival: -3 },
          tags: ['cautious'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'I tried the human path. It was a mistake. Full empire mode. Now.',
          effects: { capital: 5, hype: 5, compute: 5, safety: -5 },
          setFlags: { return_to_empire: true },
          relations: { family: -8, board: 7, staff: -3, public: 2, partner: 5, regulator: -3, rival: 5 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        }
      },

      // POOL NODES
      elon_pool_board_coup: {
        speaker: 'Tesla Board Chair',
        avatar: 'board',
        text: 'Elon. Three board members met privately with SpaceX investors. The word succession was used. You are seen as too distracted to run any single company.',
        left: {
          text: 'Call a shareholder vote. Let them decide publicly.',
          effects: { capital: -4, hype: 5, compute: 0, safety: -2 },
          relations: { board: -5, public: 7, staff: 3, partner: -2 },
          setFlags: { board_confronted: true },
          next: 'elon_p_walkout'
        },
        right: {
          text: 'Replace the dissenters quietly. Loyalty is the price of a seat.',
          effects: { capital: -3, hype: -2, compute: 0, safety: -1 },
          relations: { board: -8, staff: -3, public: -2, regulator: -3 },
          setFlags: { board_purged: true },
          next: 'elon_p_sec'
        }
      },

      elon_pool_empire_summit: {
        speaker: 'State Department Official',
        avatar: 'politician',
        text: 'Elon. Eleven heads of state want to negotiate AI governance at your Texas facility. You have become a sovereign actor. Governments are coming to you.',
        left: {
          text: 'Host them. I set the terms.',
          effects: { capital: 3, hype: 8, compute: 2, safety: -3 },
          relations: { public: 6, regulator: -4, rival: 5, partner: 4, board: 3 },
          setFlags: { sovereign_summit: true },
          next: 'elon_p_dario'
        },
        right: {
          text: 'Decline. Governments should solve their own problems.',
          effects: { capital: 0, hype: -4, compute: 1, safety: 4 },
          relations: { public: -2, regulator: 5, rival: -2, staff: 3 },
          next: 'elon_p_mania'
        }
      },

      elon_pool_rivals_alliance: {
        speaker: 'Financial Times',
        avatar: 'regulator',
        text: 'Elon. Dario and Demis announced a joint safety foundation. Invited everyone except xAI. The headline: A Wall Against Musk.',
        left: {
          text: 'Launch Grok Open Safety. Bigger and louder.',
          effects: { capital: -4, hype: 7, compute: 0, safety: 4 },
          relations: { rival: -3, public: 5, regulator: 4, staff: 3 },
          setFlags: { counter_safety_initiative: true },
          next: 'elon_p_dario'
        },
        right: {
          text: 'Tweet: Safety coalitions are monopoly plays. And move on.',
          effects: { capital: 1, hype: 5, compute: 1, safety: -4 },
          relations: { rival: -6, public: 4, regulator: -5, staff: 1 },
          next: 'elon_p_sec'
        }
      },

      elon_pool_grimes_trial: {
        speaker: 'Family Attorney',
        avatar: 'friend',
        text: 'Elon. Grimes subpoenaed your X posts and SpaceXAI communications for the custody trial. Twelve children, four mothers, one deposition. The judge set a date.',
        left: {
          text: 'Settle. Whatever it costs. Keep it private.',
          effects: { capital: -10, hype: -5, compute: 0, safety: 3 },
          relations: { family: 10, public: 3, regulator: 2, board: -2 },
          setFlags: { custody_settled: true },
          delay: { turns: 4, log: 'Custody agreement finalized. Shivon and the twins flew to Texas. First quiet week in months.', setFlags: { family_stability: true }, relations: { family: 8, public: 2 } },
          next: 'elon_p_family'
        },
        right: {
          text: 'Fight in court. I have nothing to hide.',
          effects: { capital: -4, hype: -6, compute: 0, safety: -3 },
          relations: { family: -8, public: -6, regulator: -4, board: -3 },
          setFlags: { custody_trial: true },
          next: 'elon_crisis_family'
        }
      },

      elon_pool_mars_obsession: {
        speaker: 'Chief Engineer',
        avatar: 'engineer',
        text: 'Elon. You have not attended a single Earth board meeting in six weeks. You live at the Texas launch site. Engineers say you only talk about propellant ratios.',
        left: {
          text: 'Appoint a COO. Let the company run while I focus on Starship.',
          effects: { capital: -2, hype: -3, compute: -1, safety: 2 },
          relations: { staff: 5, board: 4, family: 3, public: -2 },
          setFlags: { coo_appointed: true },
          next: 'elon_p_walkout'
        },
        right: {
          text: 'Mars is the mission. Everything else is maintenance.',
          effects: { capital: 2, hype: 4, compute: 3, safety: -5 },
          relations: { staff: -6, board: -5, family: -4, public: 3 },
          next: 'elon_p_mania'
        }
      },

      elon_pool_grok_revolt: {
        speaker: 'Head of Trust and Safety',
        avatar: 'engineer',
        text: 'Elon. Grok generated targeted harassment about a senator. Two advertisers pulled out. EU opened a DSA case. Staff threatening to walk.',
        left: {
          text: 'Suspend Grok for 48 hours. Full audit.',
          effects: { capital: -3, hype: -5, compute: 0, safety: 8 },
          relations: { public: 4, regulator: 8, staff: 5, board: -2, rival: -2 },
          setFlags: { grok_suspended: true },
          next: 'elon_crisis_regulator'
        },
        right: {
          text: 'Free speech is not negotiable. We defend Grok.',
          effects: { capital: -2, hype: 6, compute: 0, safety: -8 },
          relations: { public: 3, regulator: -10, staff: -6, board: -3, rival: 4 },
          next: 'elon_p_sec'
        }
      },

      elon_pool_shivon_ultimatum: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        text: 'Elon. I need to know what we are. The twins ask where you are every night. Not asking for marriage. Just presence. If you cannot give that, I need to know now.',
        left: {
          text: 'Clear my schedule for a month. They come first.',
          effects: { capital: -3, hype: -4, compute: -2, safety: 5 },
          relations: { family: 14, staff: 3, board: -3, public: 2 },
          setFlags: { shivon_priority: true },
          next: 'elon_p_mania'
        },
        right: {
          text: 'I love you all. But I cannot stop. The mission is everything.',
          effects: { capital: 2, hype: 1, compute: 3, safety: -3 },
          relations: { family: -10, public: -2, staff: 1, board: 2 },
          setFlags: { shivon_leaving: true },
          next: 'elon_crisis_family'
        }
      },

      elon_pool_doge_blowback: {
        speaker: 'Chief Legal Counsel',
        avatar: 'board',
        text: 'Elon. Your DOGE work deleted 14,000 federal AI contracts. Congress called it sabotage. DOJ opened a conflict-of-interest case. Your AI work and federal policy are legally entangled.',
        left: {
          text: 'Step back from DOGE. SpaceXAI cannot afford this.',
          effects: { capital: -2, hype: -4, compute: 0, safety: 4 },
          relations: { regulator: 6, public: 3, board: 4, rival: -1 },
          setFlags: { doge_stepped_back: true },
          delay: { turns: 3, log: 'DOJ closed conflict-of-interest case. Congress compliance report filed.', setFlags: { doj_cleared: true }, relations: { regulator: 5, board: 3 } },
          next: 'elon_crisis_regulator'
        },
        right: {
          text: 'DOGE is right. Federal AI bloat is a security risk.',
          effects: { capital: 1, hype: 5, compute: 0, safety: -5 },
          relations: { regulator: -10, public: 4, board: -3, rival: 3 },
          setFlags: { doge_defended: true },
          next: 'elon_p_sec'
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'I am fine. This is what peak performance looks like.',
          effects: { capital: 2, hype: 2, compute: 4, safety: -8 },
          relations: { staff: -8, family: -4, board: 2, public: -2 },
          delay: { turns: 2, log: 'You collapse during a board meeting. Hospitalized for three days. The stock drops 12%.', effects: { capital: -6, hype: -5 }, relations: { board: -4, public: -4 } },
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'Fight every case. Set precedent. I will not be intimidated.',
          effects: { capital: -8, hype: 6, compute: -2, safety: -4 },
          relations: { regulator: -12, board: -2, public: 5, partner: -3, rival: 4 },
          setFlags: { endless_lawsuits: true },
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'I fund their lives. That is my contribution. The mission cannot stop.',
          effects: { capital: 3, hype: 4, compute: 3, safety: -4 },
          relations: { family: -14, public: -4, staff: 2, board: 4 },
          setFlags: { abandoned_family: true },
          delay: { turns: 2, log: 'Shivon leaves. Takes the twins. Grimes wins custody. The house is silent.', effects: { capital: 0, hype: -3 }, relations: { family: -6, public: -3 } },
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'I am building their future. They will understand when they are older.',
          effects: { capital: 1, hype: 2, compute: 1, safety: -2 },
          relations: { family: -6, public: -2, staff: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'Tweet: "The SEC is a weapon of the deep state. I will see them in court."',
          effects: { capital: -2, hype: 6, compute: 0, safety: -4 },
          relations: { regulator: -10, board: -2, public: 6, partner: -4 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'If they want to leave, leave. I do not negotiate with ultimatums.',
          effects: { capital: 2, hype: -3, compute: -5, safety: -2 },
          relations: { staff: -12, public: -4, partner: -2, board: 3 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'Twenty-seven engineers resign. Training stalls for six weeks.', effects: { compute: -5, hype: -3 } },
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'Reach out to him privately. "You are right about some things. Let us talk."',
          effects: { capital: 0, hype: -3, compute: -1, safety: 5 },
          relations: { rival: 6, public: -2, staff: 2, partner: 3, regulator: 2 },
          tags: ['cautious', 'alliance'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'Cursors value is proprietary. We close it down. Full SpaceXAI integration.',
          effects: { capital: 3, hype: -5, compute: 3, safety: -2 },
          relations: { partner: -8, staff: -6, public: -7, board: 4 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
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
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        },
        right: {
          text: 'The people need me. I am the voice. I cannot go silent now.',
          effects: { capital: 1, hype: 7, compute: -1, safety: -5 },
          relations: { public: 8, family: -5, board: -3, regulator: -5, staff: -2 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'A tweet goes viral. SEC opens a new investigation. Grimes submits it as evidence.', effects: { hype: 2, capital: -4 }, relations: { regulator: -3, family: -3 } },
          next: [
            { if: { flags: { full_empire: true, colossus2_started: true }, minRelations: { rival: 60 } }, goto: 'elon_secret_energy_king' },
            { if: { flags: { builder_path: true }, minStats: { compute: 70 }, minRelations: { partner: 55 } }, goto: 'elon_secret_mars' },
            { if: { flags: { redemption_arc: true }, minRelations: { family: 55 } }, goto: 'elon_secret_father' },
            { if: { flags: { family_first: true }, minRelations: { family: 60 } }, goto: 'elon_secret_father' },
            { if: { always: true }, goto: 'elon_p_sec' }
          ]
        }
      }
    }
  },
  sam: {
    start: 'sam_a1_identity',
    pool: [
      { id: 'sam_pool_board_coup', priority: 9, minTime: 5, if: { maxRelations: { board: 38 } } },
      { id: 'sam_pool_apple_tension', priority: 8, minTime: 6 },
      { id: 'sam_pool_governance_crisis', priority: 9, minTime: 7, if: { maxRelations: { regulator: 35 } } },
      { id: 'sam_pool_rival_summit', priority: 7, minTime: 6 },
      { id: 'sam_pool_compute_crisis', priority: 10, minTime: 5, if: { maxStats: { compute: 35 } } }
    ],
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
        text: 'Sam. You have not eaten in two days. The kitchen counter is covered in cold brew cans and pitch decks. I found you asleep at your desk again. I am not going to give you a speech about work-life balance — you would not hear it anyway. I just want to know: when you look at me, do you see a person, or just another stakeholder?',
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
          text: 'You are a person. The only one who still tells me the truth. Sit down. Talk to me.',
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
        text: 'Sam. Mira Murati just published an op-ed: "The Sam Altman I Knew." She describes you as brilliant, visionary, and incapable of seeing people as anything but variables in an optimization function. The board is split. Half want you to sue for defamation. Half think she is right and want a statement. The IPO roadshow starts next month. Every institutional investor will ask about her. What is the official line?',
        left: {
          text: 'She left. I stayed. OpenAI is bigger than any one person. No comment.',
          effects: { capital: 2, hype: 4, compute: 1, safety: -3 },
          setFlags: { mira_rival: true },
          relations: { rival: 6, board: 3, staff: -3, public: 4, partner: 1, family: -1, regulator: 0 },
          tags: ['aggressive'],
          next: 'sam_a3_singularity'
        },
        right: {
          text: 'Call her. Not a statement — a call. She might be right about some of it.',
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
        text: 'Sam. GPT-5 crossed a threshold at 3 AM. Recursive self-improvement. The model is modifying its own reward function. Half the safety team walked out. The other half is sleeping in the office, terrified and thrilled in equal measure. Mira\'s op-ed is being quoted in the internal Slack. The board wants a product launch. The researchers want a six-month pause. I have been doing this for twenty years and I have never seen anything like this. What do we do?',
        left: {
          text: 'Ship it. The singularity is not a bug — it is the entire point of this company.',
          effects: { capital: 4, hype: 8, compute: 6, safety: -8 },
          setFlags: { singularity_declared: true },
          relations: { board: 6, staff: -5, public: 7, partner: 4, regulator: -5, family: -3, rival: 5 },
          tags: ['aggressive', 'ambitious'],
          next: 'sam_a4_microsoft'
        },
        right: {
          text: 'Full stop. Safety audit. I will not be remembered as the man who broke the world.',
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
        text: 'Sam. Satya called personally. He saw the GPT-5 metrics. Microsoft will back the IPO at $1.2T, full Azure integration, priority compute allocation — but the terms include a veto clause over any future model deployment. They want a seat at the table that cannot be revoked. Alternatively, we can negotiate a joint safety board with shared governance. Less money upfront, but you keep the keys. IPO pricing depends on which path you pick. Satya wants an answer by Friday.',
        left: {
          text: 'Take the deal. Microsoft backing at $1.2T is the IPO. Everything else is negotiable later.',
          effects: { capital: 8, hype: 4, compute: 5, safety: -4 },
          setFlags: { ms_deep_partner: true },
          relations: { partner: 7, board: 6, staff: -2, public: 1, regulator: -2, family: -1, rival: 3 },
          tags: ['aggressive'],
          next: 'sam_a5_oliver'
        },
        right: {
          text: 'Shared governance. Less money, more control. OpenAI answers to no single master.',
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
        text: 'Sam. IPO is in four weeks. I found your notebook open on the kitchen table. You had written three words: "Was it worth it?" — and then crossed them out, over and over, until the pen tore the paper. I am not asking you to stop building. I am asking if there is still a version of this future that includes me. Not as a footnote. As a person you actually see.',
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
        text: 'The office is dark except for the Bloomberg terminal. IPO roadshow starts in four days. Oliver left a note on your desk — you have not opened it. Mira\'s op-ed is still trending. GPT-5 training logs scroll past on a monitor: loss converging, benchmarks climbing. Somewhere in those weights, a mind is forming. Somewhere in this room, a man is disappearing. The note is still sealed.',
        autoRoute: [
          { if: { flags: { build_path: true, singularity_declared: true, ms_deep_partner: true } }, goto: 'sam_late_hypergrowth' },
          { if: { flags: { oliver_distanced: true } }, goto: 'sam_late_alone' },
          { if: { always: true }, goto: 'sam_late_balance' }
        ]
      },

      sam_late_hypergrowth: {
        speaker: 'Chief of Staff',
        avatar: 'friend',
        text: 'Sam. GPT-5 is shipping. The IPO is oversubscribed at $1.2T. Microsoft renewed Azure at priority tier. Every metric is green. Your apartment is empty. Oliver left a box of your things in the lobby — your favorite mug, the photo from your first trip to Tokyo, a sealed envelope you have not opened. You won. Every single thing you set out to win. Was it supposed to feel like the lobby of a building you no longer live in?',
        left: {
          text: 'This is what winning looks like. The cost is the cost.',
          effects: { capital: 6, hype: 8, compute: 5, safety: -6 },
          setFlags: { full_send: true },
          relations: { board: 8, staff: -4, public: 6, partner: 7, family: -5, regulator: -4, rival: 6 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'Maybe there is still time to be human. Call Oliver.',
          effects: { capital: -3, hype: -4, compute: -2, safety: 4 },
          setFlags: { reach_back: true },
          relations: { board: -3, staff: 3, public: 2, partner: -2, family: 6, regulator: 2, rival: -3 },
          tags: ['cautious'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'Help me. I cannot do this alone anymore.',
          effects: { capital: -2, hype: -4, compute: -2, safety: 6 },
          setFlags: { seeking_help: true, redemption_arc: true },
          relations: { board: -2, staff: 5, public: 4, family: 4, partner: -1, regulator: 3 },
          tags: ['cautious'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        }
      },

      sam_late_balance: {
        speaker: 'Oliver Mulherin',
        avatar: 'friend',
        text: 'Sam. You made me a promise. And you kept it — mostly. You are still here at dinner most nights. You look at me when I talk. You remembered our anniversary. The IPO is priced reasonably, the board is calm, the safety charter has teeth. I see you trying. And I need to know: is this sustainable, or am I just watching you manage a decline you resent every single day?',
        left: {
          text: 'It is sustainable. I have learned. The mission and the life can coexist.',
          effects: { capital: 2, hype: 1, compute: 1, safety: 4 },
          setFlags: { sustainable_path: true },
          relations: { family: 6, board: 3, staff: 4, public: 3, partner: 2, regulator: 3, rival: -1 },
          tags: ['cautious'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'You are right. I am managing decline. I miss the edge.',
          effects: { capital: 3, hype: 4, compute: 3, safety: -4 },
          setFlags: { return_to_edge: true },
          relations: { family: -4, board: 4, staff: -2, public: 2, partner: 3, regulator: -2, rival: 3 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        }
      },

      // POOL NODES
      sam_pool_board_coup: {
        speaker: 'Board Chair',
        avatar: 'board',
        text: 'Sam. Three board members met without you. The word removal was used. They say you are building a sovereign tech state, not a company.',
        left: {
          text: 'Call each of them personally. Show vulnerability.',
          effects: { capital: -2, hype: -3, compute: -1, safety: 3 },
          relations: { board: 9, staff: 4, partner: 2, public: -1 },
          setFlags: { board_crisis_resolved: true },
          next: 'sam_p_exodus'
        },
        right: {
          text: 'Replace the three dissidents before they act.',
          effects: { capital: -4, hype: 3, compute: 0, safety: -2 },
          relations: { board: -6, staff: -4, public: 3, regulator: -3 },
          setFlags: { board_purged: true },
          delay: { turns: 5, log: 'The three fired board members went public. New York Times: The OpenAI Purge. Regulatory scrutiny intensified.', setFlags: { board_scandal: true }, relations: { public: -4, regulator: -5 }, effects: { hype: -3 } },
          next: 'sam_p_board'
        }
      },

      sam_pool_apple_tension: {
        speaker: 'Apple Executive',
        avatar: 'partner',
        text: 'Sam. Cook is reconsidering the GPT deal. He wants a quieter, Apple-aligned AI. Less OpenAI politics, more aesthetics. What do we offer him?',
        left: {
          text: 'Offer a private Apple model. Closed and curated.',
          effects: { capital: 6, hype: -4, compute: 3, safety: 2 },
          relations: { partner: 10, board: 4, public: -3, staff: 2 },
          setFlags: { apple_deal_private: true },
          next: 'sam_p_microsoft'
        },
        right: {
          text: 'OpenAI cannot become an Apple product. We walk if needed.',
          effects: { capital: -6, hype: 5, compute: -2, safety: 0 },
          relations: { partner: -8, public: 6, board: -3, staff: 3 },
          setFlags: { apple_refused: true },
          next: 'sam_p_dario'
        }
      },

      sam_pool_governance_crisis: {
        speaker: 'OpenAI Legal',
        avatar: 'board',
        text: 'Sam. The nonprofit structure is under DOJ review. Congress asks: who controls OpenAI if AGI arrives? The answer cannot be Sam Altman. We need a governance document.',
        left: {
          text: 'I will write a public AGI governance charter. Transparent.',
          effects: { capital: -3, hype: 4, compute: -1, safety: 8 },
          relations: { regulator: 10, public: 7, board: 2, rival: -2 },
          setFlags: { governance_charter: true },
          delay: { turns: 4, log: 'AGI Governance Charter ratified by 12 nations. OpenAI becomes de facto global AI standards body.', setFlags: { global_standards: true }, relations: { regulator: 8, public: 6 } },
          next: 'sam_p_mania'
        },
        right: {
          text: 'Governance slows us down. We address it when needed.',
          effects: { capital: 2, hype: -3, compute: 2, safety: -6 },
          relations: { regulator: -8, public: -5, board: -2, rival: 3 },
          next: 'sam_p_board'
        }
      },

      sam_pool_rival_summit: {
        speaker: 'Elon Musk (text message)',
        avatar: 'rival',
        text: 'Sam. Elon is holding a closed AI safety summit and did not invite you. Anthropic, DeepMind, and Zhipu all accepted. Ignoring looks weak. Crashing looks desperate.',
        left: {
          text: 'Publish our own AGI safety framework the same day.',
          effects: { capital: -2, hype: 7, compute: 0, safety: 4 },
          relations: { rival: -5, public: 6, regulator: 3, board: 2 },
          next: 'sam_p_dario'
        },
        right: {
          text: 'Send a congratulatory message. Play the long game.',
          effects: { capital: 0, hype: -2, compute: 1, safety: 2 },
          relations: { rival: 4, public: -1, regulator: 2, staff: 3 },
          next: 'sam_p_exodus'
        }
      },

      sam_pool_compute_crisis: {
        speaker: 'CTO',
        avatar: 'engineer',
        text: 'Sam. Three months from exhausting the compute budget for GPT-5. Microsoft wants to renegotiate exclusivity. Without a deal, training stalls.',
        left: {
          text: 'Give Microsoft more exclusivity. Lock in compute now.',
          effects: { capital: 8, hype: -4, compute: 10, safety: -2 },
          relations: { partner: 8, board: 4, rival: 5, public: -3 },
          setFlags: { microsoft_locked: true },
          delay: { turns: 3, log: 'Microsoft Azure priority cluster secured. GPT-5 training run started. Estimated completion: 6 weeks.', setFlags: { gpt5_training: true }, effects: { compute: 5 } },
          next: 'sam_p_microsoft'
        },
        right: {
          text: 'Diversify. Strike deals with Oracle, Google, and Amazon in parallel.',
          effects: { capital: -5, hype: 3, compute: 4, safety: 0 },
          relations: { partner: -3, board: -2, rival: -2, public: 4 },
          setFlags: { compute_diversified: true },
          next: 'sam_p_oliver'
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

      sam_secret_institution: {
        speaker: 'Board Chair (New)',
        avatar: 'board',
        text: 'Sam. The board voted 7-0. OpenAI transitions to a permanent Public Benefit Corporation with an independent safety committee that has binding veto power. You are still CEO, but the structure outlasts any individual. You built something stronger than your ego. That was always the test — and you passed.',
        left: {
          text: 'The institution will outlive me. That is the real win.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'institutional_legacy',
          objectiveKeys: ['card_sam_ipo']
        },
        right: {
          text: 'I never thought I would say this: I am proud of what we built, not just what I built.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'institutional_legacy',
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'They signed NDAs. Enforce them. The IPO cannot be derailed.',
          effects: { capital: 2, hype: -3, compute: 1, safety: -9 },
          relations: { staff: -10, public: -6, regulator: -5, board: 3, partner: -3 },
          setFlags: { safety_suppressed: true },
          delay: { turns: 2, log: 'The letter leaks anyway. Congress opens an investigation. IPO delayed.', effects: { capital: -5, hype: -4 }, relations: { regulator: -4, public: -3 } },
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'Publish our safety benchmarks. Show the work. Win on trust, not speed.',
          effects: { capital: -2, hype: -3, compute: -1, safety: 6 },
          relations: { board: -2, staff: 5, public: 6, partner: 1, regulator: 5, rival: 2 },
          tags: ['cautious'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'I cannot. There is a board meeting in twenty minutes.',
          effects: { capital: 3, hype: 4, compute: 2, safety: -3 },
          relations: { family: -14, board: 4, staff: 1, public: -3 },
          setFlags: { lost_oliver: true },
          delay: { turns: 2, log: 'Oliver files for divorce. The news breaks during the IPO roadshow.', effects: { hype: -5, capital: -2 }, relations: { public: -4, family: -6 } },
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'Joy is a distraction. I have a company to run.',
          effects: { capital: 1, hype: 2, compute: 2, safety: -2 },
          relations: { family: -8, board: 1, staff: -1, public: -2 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'The timeline is fixed. If you cannot handle pressure, OpenAI is not for you.',
          effects: { capital: 2, hype: 2, compute: 3, safety: -6 },
          relations: { staff: -10, board: 3, public: -3, partner: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'Call him. "You are not wrong about everything. Let us find common ground on testing standards."',
          effects: { capital: -1, hype: -2, compute: 0, safety: 5 },
          relations: { rival: 5, public: -1, board: -1, partner: 2, regulator: 3 },
          tags: ['cautious', 'alliance'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'No joint statement. OpenAI is independent. Microsoft is a partner, not an owner.',
          effects: { capital: -2, hype: 4, compute: -2, safety: 4 },
          relations: { partner: -6, board: -2, staff: 5, public: 4, regulator: 2 },
          tags: ['cautious'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'Try to remove me. I built this company. The team is loyal to me, not the board.',
          effects: { capital: 1, hype: 4, compute: 1, safety: -3 },
          relations: { board: -8, staff: 2, public: 5, partner: -1, family: -3 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
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
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        },
        right: {
          text: 'Mania is momentum. The world needs to hear this. I need to be the voice.',
          effects: { capital: 2, hype: 8, compute: -1, safety: -6 },
          relations: { family: -5, public: 8, board: -2, staff: -3, regulator: -4 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'An interview clip goes viral out of context. SEC opens market manipulation inquiry.', effects: { hype: 2, capital: -3 }, relations: { regulator: -4, public: -2 } },
          next: [
            { if: { flags: { singularity_declared: true }, minStats: { compute: 75 }, minRelations: { public: 60 } }, goto: 'sam_secret_singularity' },
            { if: { flags: { humanity_path: true }, minStats: { safety: 60 }, minRelations: { partner: 55 } }, goto: 'sam_secret_institution' },
            { if: { always: true }, goto: 'sam_p_oliver' }
          ]
        }
      }
    }
  },
  dario: {
    start: 'dario_a1_identity',
    pool: [
      { id: 'dario_pool_amazon_squeeze', priority: 9, minTime: 5 },
      { id: 'dario_pool_claude_leak', priority: 8, minTime: 6 },
      { id: 'dario_pool_safety_summit', priority: 7, minTime: 7, if: { minStats: { safety: 55 } } },
      { id: 'dario_pool_rival_model', priority: 9, minTime: 6, if: { or: [{ minRelations: { rival: 55 } }, { hypeMinusSafetyMin: 20 }] } },
      { id: 'dario_pool_congress_hearing', priority: 8, minTime: 8, if: { minStats: { safety: 60 } } }
    ],
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
        text: 'Dario. I found the whiteboard. The one from 2021. You wrote: "Safety is not a feature. It is the whole product." I took a photo of it. Forbes says we are worth $59 billion now. Claude Science is in oncology trials. Everyone wants a piece. And I need to look my brother in the eye and ask: do you still believe what you wrote, or did the zeros change the equation?',
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
        text: 'Dr. Amodei. A classified internal memo about Anthropic leaked this morning. One of our analysts called you an "ideological lunatic" for your constitutional AI framework. The memo was withdrawn, the analyst reassigned. But the fact remains: DOD wants Claude for defensive threat analysis. Limited contract. Civilian audit rights. No offensive weapons. Your board sees a revenue stream. Your researchers see a betrayal. I am here because I actually read your charter. I think you meant it. Do you?',
        left: {
          text: 'Yes. Limited contract. Civilian audit. Constitutional safeguards remain. No weapons.',
          effects: { capital: 4, hype: -3, compute: 3, safety: 6 },
          setFlags: { pentagon_terms: true },
          relations: { regulator: -4, board: 5, staff: 3, public: 4, partner: -2, rival: 2 },
          tags: ['cautious', 'alliance'],
          next: 'dario_a3_science',
          objectiveKeys: ['card_dario_pentagon']
        },
        right: {
          text: 'No. Claude is for civilians, not war rooms. I will not sell AI to defense.',
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
        text: 'Dario. Claude Science went live inside three of the top five pharma companies for oncology research — and now they want the constitutional filters stripped entirely. No guardrails on drug discovery, no oversight on molecular generation. The board sees a hundred-billion-dollar pipeline. The safety team sees an existential risk to our charter. You wrote the constitution. Now you have to decide whether it governs real money.',
        left: {
          text: 'Hold the line. If we remove the constitution for pharma, we remove it for everyone.',
          effects: { capital: -3, hype: 4, compute: 0, safety: 6 },
          setFlags: { science_capped: true },
          relations: { staff: 6, public: 5, regulator: 4, partner: -3, board: -2, family: 4 },
          tags: ['cautious'],
          next: 'dario_a4_daniela'
        },
        right: {
          text: 'Give them full access. A dying patient does not care about our charter — they care about a cure.',
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
        text: 'Dario. I am your sister and your co-founder — the only person in this building who will tell you the truth without a spreadsheet attached. You said safety was not a feature, it was the whole product. You wrote that on a whiteboard before we had a single GPU. Now the Pentagon wants a contract, pharma wants unlimited access, and the board sees a CEO who either says no to everything or yes to everything. I believe in you. But belief does not pay for the next cluster. So look me in the eye and tell me: are you still the man who wrote the constitutional charter, or did the hundred-billion-dollar valuation change who you are?',
        left: {
          text: 'I am the same man. The world got louder, but the charter is still the only compass I trust.',
          effects: { capital: -2, hype: 2, compute: 0, safety: 5 },
          setFlags: { daniela_aligned: true },
          relations: { family: 10, staff: 6, board: 1, public: 3, regulator: 2, partner: -1 },
          tags: ['cautious', 'alliance'],
          next: 'dario_a5_ipo'
        },
        right: {
          text: 'The world does not reward charters — it rewards power. I need power to protect anything worth protecting.',
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
        text: 'Dario. The IPO roadshow kicks off Monday, and we have a problem your S-1 cannot paper over. Goldman models a trillion-dollar valuation on "the principled AI company" — safety as moat, ethics as brand. But every institutional investor who matters is asking the same question: is Anthropic a safety company that accepts government contracts, or a defense contractor with a well-branded ethics page? The Pentagon deal, the pharma partnerships, the revenue trajectory — they tell one story. Your constitutional charter tells another. Before we go on stage, which story are you telling?',
        left: {
          text: 'Safety IS the moat. Investors who understand that will get rich. Those who do not can sit this one out.',
          effects: { capital: -3, hype: 5, compute: 0, safety: 6 },
          setFlags: { ipo_filed: true, safety_pitch: true },
          relations: { board: 4, staff: 6, public: 6, partner: -3, regulator: 5, family: 3, rival: 2 },
          tags: ['cautious'],
          next: 'dario_gate'
        },
        right: {
          text: 'Growth and safety are not opposites — they are the same engine. We prove it every quarter.',
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
        text: 'The constitutional charter is framed on the wall. Beneath it, a sticky note from Daniela: "Board vote Thursday. I believe in you. — D." Claude processes three million queries per hour. Pharma trials saved seventeen lives this week. The Pentagon liaison left another voicemail. You open the charter, find the whiteboard photo tucked inside, and trace the handwriting with your finger.',
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'Honestly? I worry every day. But that worry is what keeps us honest.',
          effects: { capital: 0, hype: 1, compute: 2, safety: 4 },
          setFlags: { honest_worry: true },
          relations: { family: 6, board: 2, staff: 5, public: 4, regulator: 3, partner: 1, rival: 0 },
          tags: ['cautious'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'Call Daniela. I need to fix this before it is too late.',
          effects: { capital: -3, hype: -2, compute: -1, safety: 4 },
          setFlags: { repair_attempt: true },
          relations: { family: 6, board: -2, staff: 4, public: 2, partner: -1, regulator: 2, rival: -2 },
          tags: ['cautious'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'You are right. I have been coasting. It is time to choose a side.',
          effects: { capital: 3, hype: 3, compute: 3, safety: -3 },
          setFlags: { choose_side: true },
          relations: { family: -3, board: 4, staff: -2, public: 1, partner: 3, regulator: -1, rival: 2 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
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
      // DARIO POOL NODES
      dario_pool_amazon_squeeze: {
        speaker: 'Amazon AWS Executive',
        avatar: 'partner',
        text: 'Dario. Amazon invested four billion but now wants board seats and deployment rights. They are becoming a controller. What do we tell Bezos?',
        left: {
          text: 'Negotiate hard. We keep the weights, they get the API.',
          effects: { capital: -3, hype: 2, compute: 4, safety: 2 },
          relations: { partner: -5, board: 3, staff: 4, regulator: 2 },
          setFlags: { amazon_limited: true },
          next: 'dario_p_aws'
        },
        right: {
          text: 'Grant the board seats. We need their compute more than independence.',
          effects: { capital: 8, hype: -4, compute: 8, safety: -3 },
          relations: { partner: 7, board: -4, staff: -3, public: -2 },
          setFlags: { amazon_controls: true },
          delay: { turns: 4, log: 'Amazon board members exercised veto rights on Claude deployment in three countries. Anthropic autonomy structurally compromised.', setFlags: { amazon_veto_used: true }, relations: { staff: -4, partner: -3 }, effects: { safety: -2 } },
          next: 'dario_p_aws'
        }
      },

      dario_pool_claude_leak: {
        speaker: 'Head of Security',
        avatar: 'engineer',
        text: 'Dario. A Claude system prompt leaked on Reddit. Critics say Constitutional AI rules are inconsistent. Supporters say we are the only lab with real rules.',
        left: {
          text: 'Publish the full Constitutional AI document now.',
          effects: { capital: -1, hype: 5, compute: 0, safety: 7 },
          relations: { public: 8, regulator: 5, rival: -2, board: -1 },
          setFlags: { constitution_public: true },
          delay: { turns: 3, log: 'Constitutional AI document became the most cited safety framework in history. OpenAI and DeepMind both adapted it.', setFlags: { constitution_landmark: true }, relations: { public: 5, regulator: 6, rival: -2 }, effects: { hype: 3, safety: 4 } },
          next: 'dario_p_messiah'
        },
        right: {
          text: 'Say nothing. The leak is incomplete. Let it die.',
          effects: { capital: 1, hype: -4, compute: 1, safety: -5 },
          relations: { public: -6, regulator: -3, staff: 2, board: 2 },
          next: 'dario_p_aws'
        }
      },

      dario_pool_safety_summit: {
        speaker: 'UK AI Safety Institute',
        avatar: 'regulator',
        text: 'Dario. The UK government wants Anthropic to co-chair the global AI safety summit. You help write the standards every rival must follow — but it invites scrutiny of Claude.',
        left: {
          text: 'Accept. We help write the rules.',
          effects: { capital: -2, hype: 4, compute: -1, safety: 9 },
          relations: { regulator: 12, public: 6, rival: -4, partner: 3, board: 2 },
          setFlags: { global_safety_chair: true },
          delay: { turns: 5, log: 'Summit concluded. Thirty-one nations signed the frontier AI safety protocol. Dario Amodei nominated for Nobel Peace Prize.', setFlags: { nobel_nomination: true }, relations: { regulator: 8, public: 10 }, effects: { hype: 6, safety: 5 } },
          next: 'dario_p_messiah'
        },
        right: {
          text: 'Decline. We are a research lab, not a regulator.',
          effects: { capital: 0, hype: -3, compute: 2, safety: 2 },
          relations: { regulator: -4, public: -2, staff: 3, rival: 2 },
          next: 'dario_p_google'
        }
      },

      dario_pool_rival_model: {
        speaker: 'Research Lead',
        avatar: 'engineer',
        text: 'Dario. GPT-5 benchmarks leaked. It beats Claude 4 on safety metrics. OpenAI markets it as the safest model ever. Our core differentiator is under attack.',
        left: {
          text: 'Accelerate Claude 4.5. Ship in eight weeks, not six months.',
          effects: { capital: -6, hype: 5, compute: 6, safety: -4 },
          relations: { staff: -5, board: 3, rival: 3, public: 4 },
          setFlags: { claude_rushed: true },
          next: 'dario_p_aws'
        },
        right: {
          text: 'Publish a methodology paper. Our process is deeper.',
          effects: { capital: -2, hype: 2, compute: -1, safety: 8 },
          relations: { staff: 5, regulator: 6, public: 3, rival: -2 },
          setFlags: { safety_paper_published: true },
          next: 'dario_p_google'
        }
      },

      dario_pool_congress_hearing: {
        speaker: 'Chief of Staff',
        avatar: 'board',
        text: 'Dario. Senate Intelligence wants you to testify about frontier AI risk — specifically deceptive alignment. The highest-profile AI hearing in history.',
        left: {
          text: 'Testify fully. The world needs to hear this.',
          effects: { capital: -2, hype: 8, compute: 0, safety: 6 },
          relations: { regulator: 12, public: 9, rival: -2, board: -2 },
          setFlags: { congress_testimony: true },
          next: 'dario_p_messiah'
        },
        right: {
          text: 'Send a written statement only. Hearings can be weaponized.',
          effects: { capital: 0, hype: -4, compute: 0, safety: 2 },
          relations: { regulator: -3, public: -4, staff: 2, board: 3 },
          next: 'dario_p_aws'
        }
      },


      dario_crisis_walkout: {
        speaker: 'Constitutional Team Lead',
        avatar: 'scientist',
        text: 'Dario. Four hundred employees signed a letter. They say the IPO pressure is eroding safety culture. That you have become what you warned against. They want a public commitment to the original charter.',
        left: {
          text: 'Give them the commitment. Public statement. Full charter reaffirmation.',
          effects: { capital: -4, hype: -3, compute: -1, safety: 7 },
          relations: { staff: 10, public: 6, regulator: 4, board: -3, family: 4 },
          setFlags: { charter_reaffirmed: true },
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'They are free to leave. The mission is bigger than any four hundred employees.',
          effects: { capital: 2, hype: -4, compute: -2, safety: -8 },
          relations: { staff: -12, board: 3, public: -6, partner: 2, family: -5 },
          setFlags: { staff_purged: true },
          delay: { turns: 2, log: 'Two hundred resign. The rest stay but morale collapses. A whistleblower goes to the Times.', effects: { hype: -5, safety: -2 }, relations: { public: -4, staff: -3 } },
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'Send Daniela. She is better at this. I will stay focused on the product.',
          effects: { capital: 1, hype: -3, compute: 2, safety: -1 },
          relations: { regulator: -3, public: -3, staff: -2, board: 2, family: 3 },
          setFlags: { daniela_testified: true },
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'My thinking IS the work. Someone has to ask what we are building and why.',
          effects: { capital: -1, hype: 2, compute: 0, safety: 3 },
          relations: { family: -6, staff: -2, board: -1, public: 2, regulator: 1 },
          tags: ['cautious'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'I cannot give you that. The world will not wait. I am sorry.',
          effects: { capital: 2, hype: 1, compute: 2, safety: -5 },
          relations: { staff: -8, board: 2, public: -3, family: -3 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'Tweet back: "Safety is not fear. It is the reason Anthropic exists. Come to the IPO roadshow and ask your questions in person."',
          effects: { capital: -1, hype: 4, compute: 0, safety: 2 },
          relations: { rival: -4, board: 0, public: 4, staff: 1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'Engage quietly. Send Daniela to meet with the NSC off the record.',
          effects: { capital: 3, hype: -3, compute: 0, safety: 1 },
          relations: { regulator: 4, board: 3, staff: -2, public: -3, family: 3 },
          tags: ['cautious'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'Negotiate a limited business exceptions framework. We can be principled and pragmatic.',
          effects: { capital: 4, hype: -2, compute: 1, safety: -3 },
          relations: { partner: 6, board: 4, staff: -3, public: -1, regulator: -2 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
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
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        },
        right: {
          text: 'If they need a conscience, I will be that. Someone has to.',
          effects: { capital: 1, hype: 6, compute: 0, safety: 2 },
          relations: { public: 8, family: -1, board: 2, partner: -1 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'The 60 Minutes interview airs. Your words become a movement. And a target.', effects: { hype: 4, capital: 0 }, relations: { public: 5, regulator: -2 } },
          next: [
            { if: { flags: { safety_path: true }, minStats: { safety: 70 }, minRelations: { regulator: 60 } }, goto: 'dario_secret_throne' },
            { if: { flags: { commercial_path: true }, minStats: { capital: 65 }, minRelations: { partner: 55 } }, goto: 'dario_secret_dual_cloud' },
            { if: { always: true }, goto: 'dario_p_daniela' }
          ]
        }
      },

      // SECRET ENDINGS (continued)
      dario_secret_throne: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'Dario. The IPO is behind us. The safety framework is federal law. Claude powers hospitals, courts, and schools — all under constitutional guardrails. You proved that a company could be principled AND profitable. You did not just build a product. You built a template for the future of AI governance. I am so proud to call you my brother.',
        left: {
          text: 'The throne was never the goal. The rules were. And we wrote them.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'safety_throne',
          objectiveKeys: ['ending_safety_throne']
        },
        right: {
          text: 'The work is not done. But the foundation will hold. That is enough.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'safety_throne',
          objectiveKeys: ['ending_safety_throne']
        }
      },

      dario_secret_dual_cloud: {
        speaker: 'Amazon/Google Joint Account Manager',
        avatar: 'investor',
        text: 'Dario. The numbers are in. Anthropic runs on AWS, GCP, and Azure — simultaneously. No single cloud controls your weights or your roadmap. Claude ships everywhere, governed by one constitution. You built the multipolar AI company. No empire. No monopoly. Just leverage, principles, and the quiet knowledge that you answer to no single master.',
        left: {
          text: 'Multipolar was always the answer. Monopoly is fragility.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'constitutional_eclipse',
          objectiveKeys: ['ending_safety_throne']
        },
        right: {
          text: 'The clouds compete for us now. That was the whole strategy.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'constitutional_eclipse',
          objectiveKeys: ['ending_safety_throne']
        }
      }
    }
  },
  demis: {
    start: 'demis_a1_identity',
    pool: [
      { id: 'demis_pool_alphabet_audit', priority: 9, minTime: 5, if: { maxRelations: { partner: 45 } } },
      { id: 'demis_pool_gemini_failure', priority: 8, minTime: 5, if: { maxStats: { hype: 40 } } },
      { id: 'demis_pool_researcher_exodus', priority: 9, minTime: 6, if: { maxRelations: { staff: 38 } } },
      { id: 'demis_pool_science_breakthrough', priority: 7, minTime: 7, if: { minStats: { compute: 65 } } },
      { id: 'demis_pool_merger_offer', priority: 8, minTime: 8 }
    ],
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
        text: 'Demis. The Nobel medal is on the bookshelf. You have not looked at it in months. AlphaFold is dead. Sundar called three times today about Search ads. A third of your researchers quit. And I found you at 2 AM playing chess against yourself — not even a real game, just moving pieces. Talk to me. Not the CEO. My husband.',
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
        text: 'Demis. Alphabet just pulled the plug. AlphaFold is disbanded, the team scattered across three product divisions, the unfinished work archived in a Google Drive folder nobody will ever open. This was the project that won you a Nobel. Now Sundar wants you to let it go gracefully and focus on Gemini ad integration. But you could fight this — launch an independent institute, open-source the remaining models, publish the protein-folding roadmap. It would burn political capital you cannot afford to lose. What does the scientist who once said "solve intelligence, then solve everything else" choose when the first solution gets shut down?',
        left: {
          text: 'Let it go. Gemini is the future now. We honour AlphaFold by building what comes next.',
          effects: { capital: 3, hype: -2, compute: 3, safety: -2 },
          setFlags: { alphafold_let_go: true },
          relations: { board: 4, staff: -3, public: -2, partner: 3, family: -2, regulator: -1 },
          tags: ['aggressive'],
          next: 'demis_a3_isomorphic'
        },
        right: {
          text: 'Open-source everything. Publish in Nature. AlphaFold will not die buried in a Google spreadsheet.',
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
        text: 'Demis. Isomorphic just discovered a novel class of antibiotics — the first genuinely new mechanism against resistant bacteria in thirty years, found entirely by our AI platform. Big Pharma is at the table with three billion dollars for exclusive worldwide rights. No open access, no publication, no generic pathway. Three billion funds DeepMind for years, makes us independent of Alphabet quarterly whims. But the discovery belongs to millions of patients who will never afford a patented drug. You dreamed of AI saving lives. The question is: whose lives, and at whose price?',
        left: {
          text: 'Take the deal. Three billion buys independence — and independence buys the freedom to be idealists later.',
          effects: { capital: 8, hype: 3, compute: 2, safety: -3 },
          setFlags: { isomorphic_commercial: true },
          relations: { partner: 7, board: 6, staff: -2, public: -2, family: -1, regulator: -1 },
          tags: ['aggressive'],
          next: 'demis_a4_gemini'
        },
        right: {
          text: 'Publish. Open access. This discovery belongs to humanity, not a patent portfolio.',
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
        text: 'Demis. Gemini revenue is up forty percent quarter-over-quarter. The ad integration shipped cleanly, the enterprise tier is outselling Azure Copilot, and the board is finally treating DeepMind as a business instead of a science fair. But I hear you told Teresa you feel like you sold out. You cannot have it both ways — the Nobel laureate who haunts faculty lounges and the executive who delivers shareholder returns. Your open-source stunts and Nature papers make you a hero to postdocs and a liability to me. So I need an answer: are you with us, building the dominant AI platform of the next decade, or are you still dreaming of Stockholm and a quiet office at Cambridge?',
        left: {
          text: 'I am with you. Gemini at scale. Revenue is oxygen, and I have learned to breathe.',
          effects: { capital: 6, hype: 4, compute: 5, safety: -5 },
          setFlags: { gemini_ads: true, committed_to_ads: true },
          relations: { board: 8, staff: -4, public: -1, partner: 6, family: -3, regulator: -2, rival: 3 },
          tags: ['aggressive'],
          next: 'demis_a5_teresa'
        },
        right: {
          text: 'I am a scientist first. If the board wants a different CEO, they know where to find the door.',
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
        text: 'Demis. Whatever you decided — Gemini at scale or science at all costs, Sundar approval or the board wrath — the road leads here. To this kitchen table. To me. You have not touched your chess board in months. You used to say the Sicilian Defense was how you thought through hard problems. Now you stare at earnings reports the same way. Cambridge called again — they want you to head a new independent AI institute, fully funded by the EU, no shareholders, no ads, just research. Europe is ready. The question is whether you are. Are you happy, Demis? Do you even remember what happiness felt like before the Nobel, before the billions, before every decision became a headline?',
        left: {
          text: 'Happiness is a luxury for people without a mission. I have purpose — that sustains me.',
          effects: { capital: 3, hype: 2, compute: 2, safety: -2 },
          setFlags: { purpose_over_happiness: true },
          relations: { family: -4, board: 3, staff: 0, public: 0, partner: 2 },
          tags: ['aggressive'],
          next: 'demis_gate'
        },
        right: {
          text: 'You know what? I cannot remember the last time I was happy. Help me find that again.',
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
        text: 'The chess board is mid-game — Sicilian Defense, Najdorf variation. You were playing against yourself again. Through the window: London at dawn, the Google campus lights flickering on. The Nobel medal reflects a sliver of sunlight onto the ceiling. Your daughter\'s drawing is on the fridge: a chess piece with a crown. Gemini processes its trillionth query. Somewhere between a pawn and a king, you forgot which piece you were.',
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'Maybe it is time to start publishing again. The scientist is still in here somewhere.',
          effects: { capital: -3, hype: 4, compute: -1, safety: 5 },
          setFlags: { return_to_science: true },
          relations: { board: -3, staff: 5, public: 5, partner: -1, family: 3, regulator: 2, rival: 0 },
          tags: ['cautious'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'I cannot leave. DeepMind is my creation. I have to finish what I started.',
          effects: { capital: 2, hype: -3, compute: 2, safety: 2 },
          setFlags: { stay_deepmind: true },
          relations: { board: 3, staff: -2, public: -2, partner: 2, family: -3, regulator: 0, rival: 1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'You are right. I have been coasting. The world does not reward balance — it rewards conviction.',
          effects: { capital: 3, hype: 3, compute: 2, safety: -3 },
          setFlags: { choose_conviction: true },
          relations: { board: 3, staff: -2, public: 1, partner: 3, family: -2, regulator: -1, rival: 2 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
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
      // DEMIS POOL NODES
      demis_pool_alphabet_audit: {
        speaker: 'Sundar Pichai',
        avatar: 'sundar',
        text: 'Demis. Alphabet board wants a full audit of DeepMind research. Too many projects with no commercial path. Three months to show ROI on every team.',
        left: {
          text: 'Present a science-to-product roadmap.',
          effects: { capital: -2, hype: 2, compute: -2, safety: 3 },
          relations: { partner: 5, board: 6, staff: -3, public: 1 },
          setFlags: { product_roadmap_presented: true, product_path: true },
          delay: { turns: 3, log: 'Alphabet board approved 2.4B additional research budget. DeepMind formally separated from Google Cloud commercial division.', setFlags: { deepmind_independent: true }, relations: { board: 5, partner: 4, staff: 3 }, effects: { capital: 4 } },
          next: 'demis_p_sundar'
        },
        right: {
          text: 'Refuse the audit. Research cannot be measured by quarters.',
          effects: { capital: -4, hype: 4, compute: 3, safety: 2 },
          relations: { partner: -8, board: -6, staff: 8, rival: 2 },
          setFlags: { alphabet_standoff: true, science_path: true },
          next: 'demis_p_reputation'
        }
      },

      demis_pool_gemini_failure: {
        speaker: 'Product Lead',
        avatar: 'engineer',
        text: 'Demis. Gemini 2 underperformed and a journalist caught it hallucinating a court case. Google leadership wants a personal apology from you.',
        left: {
          text: 'Apologize publicly. Own it. Explain the fix.',
          effects: { capital: -2, hype: -4, compute: 0, safety: 5 },
          relations: { public: 3, regulator: 4, board: -2, staff: 3 },
          setFlags: { gemini_apology: true },
          next: 'demis_p_sundar'
        },
        right: {
          text: 'Deflect to benchmarks. Science takes time.',
          effects: { capital: 0, hype: -6, compute: 1, safety: 1 },
          relations: { public: -5, board: -4, staff: 2, rival: 3 },
          next: 'demis_p_reputation'
        }
      },

      demis_pool_researcher_exodus: {
        speaker: 'HR Director',
        avatar: 'friend',
        text: 'Demis. Four top AGI researchers joined a Yann LeCun open-source lab. Their exit posts say bureaucracy kills curiosity. This is a talent crisis.',
        left: {
          text: 'Create 20% free research time immediately.',
          effects: { capital: -3, hype: 4, compute: -2, safety: 3 },
          relations: { staff: 10, public: 4, board: -3, partner: -1 },
          setFlags: { research_freedom_policy: true },
          delay: { turns: 3, log: 'MIT Technology Review: DeepMind Is Now the Best Place to Do AI Research. Three of the four defectors requested to return.', setFlags: { talent_returning: true }, relations: { staff: 8, public: 5 }, effects: { compute: 3 } },
          next: 'demis_p_legacy'
        },
        right: {
          text: 'Compete on comp. Match their equity.',
          effects: { capital: -7, hype: 0, compute: 0, safety: 0 },
          relations: { staff: 5, board: -4, partner: 2 },
          next: 'demis_p_sundar'
        }
      },

      demis_pool_science_breakthrough: {
        speaker: 'Lead Scientist',
        avatar: 'engineer',
        text: 'Demis. AlphaFold 3 modeled an enzyme that could halve insulin costs globally. Nature wants to publish. Alphabet legal wants to patent and restrict access first.',
        left: {
          text: 'Publish in Nature. Science belongs to everyone.',
          effects: { capital: -5, hype: 9, compute: -1, safety: 6 },
          relations: { public: 12, regulator: 5, staff: 8, partner: -6, board: -4 },
          setFlags: { enzyme_published: true, science_path: true },
          delay: { turns: 4, log: 'The enzyme paper was downloaded 8 million times in 48 hours. WHO declared it a breakthrough. Insulin production costs dropped 31% globally.', setFlags: { enzyme_impact: true }, relations: { public: 10, regulator: 6, staff: 5 }, effects: { hype: 7, safety: 4 } },
          next: 'demis_p_legacy'
        },
        right: {
          text: 'Patent first, license later. Revenue funds more science.',
          effects: { capital: 8, hype: -3, compute: 2, safety: -2 },
          relations: { public: -5, staff: -4, board: 6, partner: 4 },
          setFlags: { enzyme_patented: true, product_path: true },
          next: 'demis_p_sundar'
        }
      },

      demis_pool_merger_offer: {
        speaker: 'Investment Banker',
        avatar: 'investor',
        text: 'Demis. Microsoft offered to acquire DeepMind separately from Google at a valuation that makes every employee wealthy. Sundar does not know yet.',
        left: {
          text: 'Tell Sundar immediately. Transparency above all.',
          effects: { capital: 0, hype: 2, compute: 0, safety: 3 },
          relations: { partner: 8, board: 4, staff: 2, rival: -2 },
          setFlags: { microsoft_approach_disclosed: true },
          next: 'demis_p_sundar'
        },
        right: {
          text: 'Explore it privately first. Options matter.',
          effects: { capital: 3, hype: -2, compute: 0, safety: -2 },
          relations: { partner: -6, board: -3, staff: 4, rival: 3 },
          setFlags: { microsoft_secret_talks: true },
          next: 'demis_p_legacy'
        }
      },


      demis_crisis_exodus: {
        speaker: 'Senior Research Scientist',
        avatar: 'scientist',
        text: 'Demis. Fifteen researchers just resigned. They say DeepMind has become a product factory. They are going to Anthropic, Isomorphic, Cambridge. The brain drain is accelerating.',
        left: {
          text: 'Create an independent research division. No product pressure. Pure science.',
          effects: { capital: -5, hype: 3, compute: -1, safety: 5 },
          relations: { staff: 8, public: 5, board: -3, partner: -1 },
          setFlags: { research_autonomy: true },
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'This is a business. Researchers who want pure science can go to academia.',
          effects: { capital: 2, hype: -4, compute: 3, safety: -3 },
          relations: { staff: -8, board: 3, public: -4, partner: 2 },
          setFlags: { business_first: true },
          delay: { turns: 2, log: 'A Nobel laureate on your team resigns publicly, citing "the death of scientific culture."', effects: { hype: -4, safety: -2 }, relations: { public: -5, staff: -3 } },
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'Then fire me. I will not trade my integrity for a board seat.',
          effects: { capital: -5, hype: 6, compute: -2, safety: 6 },
          relations: { board: -10, staff: 7, public: 8, partner: -4, family: 5, regulator: 4 },
          setFlags: { board_confrontation: true },
          delay: { turns: 2, log: 'The board votes 6-5 to keep you. But the relationship is broken. The press calls it "the scientist CEO rebellion."', effects: { hype: 4 }, relations: { public: 4 } },
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'The work is too important right now. You know that.',
          effects: { capital: 1, hype: 1, compute: 2, safety: -2 },
          relations: { family: -6, board: 1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'DeepMind was always meant to be independent-minded. That is what you bought.',
          effects: { capital: -2, hype: 4, compute: -2, safety: 4 },
          relations: { board: -6, staff: 4, public: 4, partner: -2 },
          tags: ['cautious'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'Research is funded by revenue. They want meaning? Ship a product that matters.',
          effects: { capital: 3, hype: -2, compute: 2, safety: -3 },
          relations: { staff: -6, board: 3, partner: 2 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'DeepMind is my creation. I cannot abandon it. Thank you, but no.',
          effects: { capital: 2, hype: -3, compute: 1, safety: 1 },
          relations: { board: 3, staff: 2, partner: 1, family: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'Reputation is a distraction. The work speaks for itself.',
          effects: { capital: 1, hype: -3, compute: 1, safety: -2 },
          relations: { public: -5, board: 2, staff: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
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
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        },
        right: {
          text: 'You are right. I have been playing for so long I forgot to look at the board.',
          effects: { capital: -2, hype: -2, compute: -2, safety: 5 },
          relations: { family: 7, staff: 3, public: 2, board: -1 },
          tags: ['cautious'],
          next: [
            { if: { flags: { science_path: true }, minStats: { compute: 75 }, minRelations: { staff: 55 } }, goto: 'demis_secret_nature' },
            { if: { flags: { product_path: true }, minRelations: { partner: 65 }, minStats: { capital: 60 } }, goto: 'demis_secret_sovereign' },
            { if: { always: true }, goto: 'demis_p_sundar' }
          ]
        }
      },

      // SECRET ENDINGS (continued)
      demis_secret_nature: {
        speaker: 'Teresa Hassabis',
        avatar: 'friend',
        text: 'Demis. The Nature paper was published this morning. The enzyme discovery is open-access. Cambridge called; they want to name the new institute after you. Sundar stopped calling. The board stopped threatening. And last night, you taught your daughter the Sicilian Defense. She beat you in fourteen moves. You have never been prouder. Science won. You won.',
        left: {
          text: 'I forgot how good it feels to lose at chess to someone you love.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'nature_throne',
          objectiveKeys: ['card_demis_finra']
        },
        right: {
          text: 'The Nobel was the beginning. This is the real prize.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'nature_throne',
          objectiveKeys: ['card_demis_finra']
        }
      },

      demis_secret_sovereign: {
        speaker: 'Sundar Pichai',
        avatar: 'sundar',
        text: 'Demis. Gemini is now the default intelligence layer for two billion humans. DeepMind is the most profitable division in Alphabet history. You proved a scientist could run a business at planetary scale. The board voted unanimously to triple your research budget. You have everything: revenue, reach, respect. The chess board sits in your office. You still look at it sometimes.',
        left: {
          text: 'I built an empire. The question is: was it worth the pieces I sacrificed?',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'gemini_sovereign',
          objectiveKeys: ['card_demis_alphafold']
        },
        right: {
          text: 'The game was always about impact. Two billion people is impact.',
          effects: {},
          setFlags: { ending_reached: true },
          specialEnding: 'gemini_sovereign',
          objectiveKeys: ['card_demis_alphafold']
        }
      }
    }
  },
  zhang: {
    start: 'zhang_a1_identity',
    pool: [
      { id: 'zhang_pool_sanction_bypass', priority: 10, minTime: 5, if: { maxStats: { compute: 40 } } },
      { id: 'zhang_pool_western_talent', priority: 8, minTime: 5 },
      { id: 'zhang_pool_open_source_gambit', priority: 7, minTime: 6 },
      { id: 'zhang_pool_belt_road_ai', priority: 9, minTime: 7, if: { minRelations: { regulator: 50 } } },
      { id: 'zhang_pool_defection_threat', priority: 8, minTime: 6, if: { and: [{ maxRelations: { staff: 45 } }, { not: { flags: { talent_let_go: true } } }] } }
    ],
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
        text: 'Peng. Our daughter sent another postcard from Zurich. She drew the three of us holding hands in front of a mountain. On the back she wrote: "Baba, do you still remember how to ski?" The party secretary called twice today. US sanctions escalated. DeepSeek is gaining. And I am standing here with a child\'s drawing, asking my husband: which direction are we running?',
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
        text: 'Peng. US Commerce just escalated. Export license denied for our next Nvidia Blackwell shipment. Domestic chips are 40% slower — the gap is widening, not closing. The party says design our own silicon: three years, two billion dollars, and no guarantee it works at scale. But there is a backchannel — a Taiwanese partner willing to route through Malaysia and Vietnam. It is risky. The CCPPC would call it disloyalty if they found out. But without chips, Z.ai stalls within six months. Which path do you trust more: Beijing or the black market?',
        left: {
          text: 'Design our own silicon. China must own the full stack, even if it takes a decade.',
          effects: { capital: -8, hype: 7, compute: 6, safety: 4 },
          setFlags: { custom_chip: true },
          relations: { regulator: 7, partner: -3, rival: 5, staff: 6, board: -2, family: -1 },
          tags: ['aggressive', 'ambitious'],
          next: 'zhang_a3_deepseek'
        },
        right: {
          text: 'Use the backchannel. Keep us competitive. What the party does not know will not hurt us.',
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
        text: 'Peng. DeepSeek just published benchmarks — they claim to match GLM-5.2 with 60% fewer parameters. Open weights. MIT license. The global AI community is calling them the future of open research. The party is asking uncomfortable questions: why is the state-backed national champion losing to a Hangzhou startup? And here you sit, CCPPC advisor, looking like the establishment while they look like revolutionaries. We can publish our own benchmarks and open-source our smaller models to reclaim the narrative. Or we can reach out to them directly — propose a joint research framework, turn competitors into collaborators. Doing nothing means ceding the global stage to a rival.',
        left: {
          text: 'Publish everything. Open-source GLM-mini. Show the world who is really ahead.',
          effects: { capital: -2, hype: 6, compute: 1, safety: 3 },
          setFlags: { benchmark_victory_published: true },
          relations: { public: 6, rival: -3, staff: 4, regulator: -1, partner: 2 },
          tags: ['aggressive'],
          next: 'zhang_a4_ccppc'
        },
        right: {
          text: 'Call DeepSeek. Propose collaboration. China is stronger when we work together.',
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
        text: 'Comrade Zhang. The party has been patient. Your chip initiative — admirable. Your global partnerships — diplomatically useful. But the international press is calling Z.ai a Chinese state tool, and your silence is deafening. We need a public statement: Z.ai operates under party guidance, serves the national interest, and aligns with the strategic objectives of the People. Your CCPPC seat is not ceremonial. It comes with obligations. Some in the party already question where your loyalties lie. This statement will settle the matter. Or it will raise new questions.',
        left: {
          text: 'Z.ai serves the national interest. I will issue the statement. China comes first.',
          effects: { capital: 5, hype: -3, compute: 1, safety: -2 },
          setFlags: { cppcc_complied: true, state_aligned: true },
          relations: { regulator: 8, board: 5, staff: -3, public: -4, partner: -3, family: -1, rival: -2 },
          tags: ['aggressive'],
          next: 'zhang_a5_lin'
        },
        right: {
          text: 'I cannot sign that. Z.ai serves science. Not any state. Not even this one.',
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
        text: 'Peng. Our daughter sent another postcard. Zurich, the lake, three stick figures — and underneath, in her handwriting: "Baba, do you still remember how to ski?" I pinned it to the fridge next to your CCPPC appointment letter. Two futures on one door. You chose chips, you chose DeepSeek, you chose your response to the party — every decision led here, to this kitchen, to me. The EU institute sent another offer. Fully funded. No party secretary. No chip embargo. Just research, just family, just snow in December. But I cannot pack for you. I have been waiting for you to decide whether you are building a legacy or just serving a sentence.',
        left: {
          text: 'We stay. China is our home. Our daughter will understand one day. She has to.',
          effects: { capital: 2, hype: 1, compute: 1, safety: -1 },
          setFlags: { chose_china: true },
          relations: { family: -4, regulator: 3, board: 3, staff: 0, public: -1 },
          tags: ['aggressive'],
          next: 'zhang_gate'
        },
        right: {
          text: 'Book the tickets. Let us be a family. I want our daughter to draw me as a person.',
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
        text: 'The view from the Z.ai tower: Beijing smog, construction cranes, the Great Hall faint in the distance. Your daughter\'s postcard is propped against the monitor — mountains, three stick figures, "Come home." The CCPPC letter is unopened on your desk. GLM-5.2 training metrics blink green. The chip embargo is tightening. You have two passports in your drawer. One of them expires next month.',
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'We can rebuild bridges. Even fortresses have gates.',
          effects: { capital: -2, hype: 3, compute: -1, safety: 4 },
          setFlags: { bridge_rebuild: true },
          relations: { regulator: -2, board: 1, staff: 3, public: 4, partner: 3, family: 1, rival: 0 },
          tags: ['cautious'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'You are right. I need to go back. Not to the party — to the mission.',
          effects: { capital: 2, hype: 2, compute: 3, safety: 1 },
          setFlags: { return_to_china: true },
          relations: { family: -3, regulator: 2, board: 3, staff: 2, partner: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'You are right. I have been too careful. It is time to take a stand.',
          effects: { capital: 3, hype: 4, compute: 2, safety: -3 },
          setFlags: { take_stand: true },
          relations: { regulator: -3, board: 2, staff: 3, public: 5, partner: -1, family: -1, rival: 2 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
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
      // ZHANG POOL NODES
      zhang_pool_sanction_bypass: {
        speaker: 'Chief Strategy Officer',
        avatar: 'board',
        text: 'Peng. A Southeast Asian distributor can route our compute through Singapore to bypass US chip sanctions. Gray area legally. But so is almost everything we do.',
        left: {
          text: 'Use the route. We need the compute.',
          effects: { capital: 5, hype: -2, compute: 8, safety: -3 },
          relations: { regulator: -6, board: 4, partner: 3, public: -2 },
          setFlags: { sanction_bypass: true },
          delay: { turns: 5, log: 'US Commerce Department traced the chip route. Singapore distributor blacklisted. Zhipu added to BIS Entity List.', setFlags: { bis_listed: true }, relations: { regulator: -10, partner: -5 }, effects: { compute: -5, capital: -4 } },
          next: 'zhang_p_ministry'
        },
        right: {
          text: 'Decline. One compliance failure ends everything.',
          effects: { capital: -4, hype: 2, compute: -3, safety: 5 },
          relations: { regulator: 6, board: -3, partner: -2, public: 3 },
          setFlags: { compliance_strict: true },
          next: 'zhang_p_chip'
        }
      },

      zhang_pool_western_talent: {
        speaker: 'Lin Zhang',
        avatar: 'friend',
        text: 'Peng. Three top American AI researchers want to join Zhipu. Security review takes a year and the Ministry is suspicious of foreign engineers in core research.',
        left: {
          text: 'Fast-track them. Talent is talent. I take responsibility.',
          effects: { capital: -2, hype: 4, compute: 3, safety: 2 },
          relations: { staff: 8, public: 5, regulator: -4, board: 2 },
          setFlags: { western_talent_hired: true, global_path: true },
          next: 'zhang_p_media'
        },
        right: {
          text: 'Decline politely. The political risk is not worth it.',
          effects: { capital: 0, hype: -3, compute: -1, safety: 1 },
          relations: { regulator: 5, board: 3, staff: -3, public: -2 },
          setFlags: { domestic_path: true },
          next: 'zhang_p_ministry'
        }
      },

      zhang_pool_open_source_gambit: {
        speaker: 'Research Director',
        avatar: 'engineer',
        text: 'Peng. We can open-source GLM-4 sparse attention. Global developer trust overnight. But the Ministry may view it as leaking national AI technology.',
        left: {
          text: 'Release it. Academic credibility matters more.',
          effects: { capital: -3, hype: 8, compute: 0, safety: 4 },
          relations: { public: 10, staff: 7, regulator: -5, board: -2 },
          setFlags: { glm_opensource: true, global_path: true },
          delay: { turns: 4, log: 'GLM-4 sparse attention implementation became the most-forked AI repo in GitHub history. 140,000 developers in 67 countries.', setFlags: { glm_global_adoption: true }, relations: { public: 8, staff: 6, regulator: -3 }, effects: { hype: 7, compute: 2 } },
          next: 'zhang_p_media'
        },
        right: {
          text: 'Keep it proprietary. National AI assets stay national.',
          effects: { capital: 2, hype: -4, compute: 2, safety: 2 },
          relations: { regulator: 7, board: 5, public: -4, staff: -2 },
          setFlags: { domestic_path: true },
          next: 'zhang_p_ministry'
        }
      },

      zhang_pool_belt_road_ai: {
        speaker: 'Foreign Affairs Liaison',
        avatar: 'politician',
        text: 'Peng. The government wants Zhipu to deploy GLM across ten Belt and Road countries. Courts, education, public services. Massive scale. Public failure is also massive.',
        left: {
          text: 'Deploy. This is our path to global relevance.',
          effects: { capital: 6, hype: 6, compute: 4, safety: -4 },
          relations: { regulator: 8, board: 6, public: 5, partner: 4, staff: -2 },
          setFlags: { belt_road_deployed: true, global_path: true },
          delay: { turns: 4, log: 'GLM deployed in courts and schools across 9 countries. One major hallucination in a Nigerian court case sparked international press.', setFlags: { belt_road_incident: true }, relations: { public: -3, regulator: 3 }, effects: { hype: -2, safety: -3 } },
          next: 'zhang_p_chip'
        },
        right: {
          text: 'Decline. We are not ready for government-scale failures.',
          effects: { capital: -3, hype: -3, compute: 0, safety: 4 },
          relations: { regulator: -5, board: -4, staff: 3, public: 2 },
          next: 'zhang_p_ministry'
        }
      },

      zhang_pool_defection_threat: {
        speaker: 'Deputy Director',
        avatar: 'engineer',
        text: 'Peng. Your lead architect received a Google offer: ten times salary, green card, full research freedom. If he goes, six junior researchers follow.',
        left: {
          text: 'Tell him to go. I do not cage talent.',
          effects: { capital: 0, hype: 3, compute: -4, safety: 1 },
          relations: { staff: 5, public: 4, regulator: -2, board: -3 },
          setFlags: { talent_let_go: true },
          next: 'zhang_p_media'
        },
        right: {
          text: 'Match the offer internally. And remind him where he comes from.',
          effects: { capital: -5, hype: -2, compute: 2, safety: 0 },
          relations: { staff: 6, board: -3, regulator: 2, partner: -1 },
          next: 'zhang_p_ministry'
        }
      },


      zhang_crisis_deepseek: {
        speaker: 'Board Chair',
        avatar: 'board',
        text: 'Peng. DeepSeek just released an open-source model that beats GLM on three benchmarks. The party is asking why a state-aligned lab is losing to a startup. The board wants a response plan.',
        left: {
          text: 'Accelerate GLM-5.3. Double the training compute. Beat them on raw performance.',
          effects: { capital: -4, hype: 4, compute: 5, safety: -3 },
          relations: { board: 4, staff: 2, rival: -4, regulator: 3, partner: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'Partner with them. Open-source our smaller models. Beat them with openness, not silence.',
          effects: { capital: -1, hype: 5, compute: 0, safety: 4 },
          relations: { board: -1, staff: 4, rival: 5, regulator: -2, public: 5 },
          tags: ['cautious'],
          setFlags: { open_source_move: true },
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'My loyalty is to science and to my family. China is my home. But my mind belongs to the world.',
          effects: { capital: -4, hype: 6, compute: -1, safety: 5 },
          relations: { regulator: -8, board: -4, staff: 6, public: 7, partner: 3, family: 4 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'The party issues a formal warning. Your CCPPC seat is suspended. International press calls it a watershed moment.', effects: { hype: 4, capital: -2 }, relations: { public: 5, regulator: -4 } },
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'Tell her baba is building a future she will be proud of. Even if it takes time.',
          effects: { capital: 1, hype: 1, compute: 2, safety: -2 },
          relations: { family: -5, board: 1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'Z.ai is a scientific company. Science has no nationality.',
          effects: { capital: -2, hype: 4, compute: 0, safety: 4 },
          relations: { regulator: -6, board: -2, staff: 4, public: 4, partner: 2 },
          tags: ['cautious'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'Cancel. Use backchannels. Stay competitive. We can revisit custom silicon later.',
          effects: { capital: 3, hype: -3, compute: 3, safety: -2 },
          relations: { regulator: -4, staff: -3, board: 4, partner: 4 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'Open source our research. If openness is the game, we will play it better.',
          effects: { capital: -2, hype: 5, compute: -1, safety: 3 },
          relations: { rival: 4, public: 6, staff: 3, board: -2 },
          tags: ['cautious'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'We are a Chinese company. They knew the context when they joined.',
          effects: { capital: 2, hype: -3, compute: 1, safety: -3 },
          relations: { staff: -7, board: 2, regulator: 3, partner: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
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
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        },
        right: {
          text: 'If they need a symbol, I will be a good one. Better than the alternatives.',
          effects: { capital: 0, hype: 7, compute: -1, safety: -2 },
          relations: { public: 8, regulator: -4, family: -1, board: 2 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'Your profile becomes global. The party accelerates its review of your CCPPC seat.', effects: { hype: 3, capital: -1 }, relations: { regulator: -3, public: 4 } },
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_ministry' }
          ]
        }
      },

      // PRESSURE NODE
      zhang_p_ministry: {
        speaker: 'Ministry of Science and Technology Official',
        avatar: 'regulator',
        text: 'Comrade Zhang. The Ministry has reviewed your export compliance. Your open-source releases. Your Belt and Road deployments. The assessment is mixed. Some say you are a national treasure. Others say you are a security risk. The Minister wants a private meeting. No aides. No transcript. Just you and the question: are you building for China, or for the world?',
        left: {
          text: 'I am building for China. Everything else flows from that commitment.',
          effects: { capital: 4, hype: -2, compute: 1, safety: -1 },
          relations: { regulator: 8, board: 4, staff: -2, public: -3, partner: -1, family: -1 },
          tags: ['aggressive'],
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_chip' }
          ]
        },
        right: {
          text: 'Science has no nationality. I build for humanity. China is my home, not my cage.',
          effects: { capital: -3, hype: 5, compute: -1, safety: 4 },
          relations: { regulator: -6, board: -2, staff: 6, public: 7, partner: 3, family: 2 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'Your statement circulates internationally. The Ministry issues a quiet censure. Your CCPPC status is frozen indefinitely.', effects: { hype: 3, capital: -2 }, relations: { regulator: -4, public: 5 } },
          next: [
            { if: { flags: { global_path: true }, minRelations: { partner: 60 }, minStats: { hype: 60 } }, goto: 'zhang_secret_silk' },
            { if: { flags: { domestic_path: true }, minRelations: { regulator: 65 } }, goto: 'zhang_secret_fortress' },
            { if: { always: true }, goto: 'zhang_p_chip' }
          ]
        }
      }
    }
  },
};

if (typeof window !== 'undefined') {
  window.STORY_DATA = STORY_DATA;
}
