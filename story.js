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
    start: 'elon_a1_power',
        pressure: {
      nodes: [
        { once: true, minTime: 4, if: { maxRelations: { family: 35 } }, goto: 'elon_pressure_family' },
        { once: true, minTime: 5, if: { minRelations: { rival: 70 } }, goto: 'elon_pressure_rival' },
        { once: true, minTime: 6, if: { maxRelations: { regulator: 30 } }, goto: 'elon_pressure_doj' },
        { once: true, minTime: 7, if: { flags: { lawsuit_mode: true } }, goto: 'elon_pressure_lawyer_night' },
        { once: true, minTime: 8, if: { maxRelations: { staff: 40 } }, goto: 'elon_pressure_walkout' },
        { once: true, minTime: 9, if: { minRelations: { public: 75 }, tagsAny: ['aggressive'] }, goto: 'elon_pressure_mob' }
      ]
    },
nodes: {
      elon_a1_power: {
        speaker: 'Chief GPU Officer',
        avatar: 'engineer',
        text: 'Boss, Memphis needs more power now. We can slam the local grid - risking brownouts - or bleed capital on diesel islands. Colossus is hungry.',
        left: {
          text: 'Tap the grid. We are the future\'s power plant.',
          effects: { capital: -6, hype: 7, compute: 8, safety: -7 },
          setFlags: { colossus_grid: true, energy_war: true },
          relations: { public: -6, regulator: -8, staff: 4, partner: 2 },
          tags: ['aggressive'],
          delay: { turns: 3, log: 'Local residents organize against Memphis brownouts.', effects: { hype: -3, capital: -2 }, relations: { public: -5, regulator: -3 } },
          next: 'elon_a1_family',
          objectiveKeys: ['card_elon_a1_power']
        },
        right: {
          text: 'Buy the generators. Quiet power, loud compute.',
          effects: { capital: -8, hype: -4, compute: 7, safety: 6 },
          setFlags: { colossus_diesel: true },
          relations: { public: 3, regulator: 4, partner: -2, staff: 2 },
          tags: ['cautious'],
          next: 'elon_a1_family',
          objectiveKeys: ['card_elon_a1_power']
        }
      },
      elon_a1_family: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        textVariants: [
          {
            if: { flags: { energy_war: true } },
            text: 'Elon, the kids saw news about Memphis blackouts with your name on them. They asked if you broke the city. Are you sleeping in the server room again?'
          },
          {
            if: { always: true },
            text: 'Elon, the kids want to know why you answered a board call at 3am from a cot beside the racks. Also - OpenAI just teased GPT-5 live.'
          }
        ],
        left: {
          text: 'I stay. Double night shifts. Family later.',
          effects: { capital: -6, hype: 6, compute: 7, safety: -6 },
          setFlags: { workaholic: true, family_strain: true },
          relations: { family: -10, staff: 3, public: 2 },
          tags: ['aggressive'],
          next: 'elon_a1_sec'
        },
        right: {
          text: 'Take Starbase weekend. Reset my head.',
          effects: { capital: -5, hype: 6, compute: -6, safety: 6 },
          setFlags: { family_repair: true },
          relations: { family: 12, staff: -2, public: 3 },
          tags: ['cautious', 'family'],
          next: 'elon_a1_sec'
        }
      },
      elon_a1_sec: {
        speaker: 'SEC Chairman',
        avatar: 'politician',
        text: 'Mr. Musk, your claim that Grok "feels" consciousness moved markets. We need a statement under oath - or a formal investigation.',
        left: {
          text: 'Meme them. Post the affidavit as comedy.',
          effects: { capital: 6, hype: 8, compute: 0, safety: -7 },
          setFlags: { sec_war: true, meme_war: true },
          relations: { regulator: -12, public: 8, board: -4, partner: -3 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'An SEC supplemental notice cites your meme as market signal.', effects: { capital: -3, safety: -2 }, relations: { regulator: -4 } },
          next: 'elon_a1_gate'
        },
        right: {
          text: 'Issue a cold legal clarification.',
          effects: { capital: -5, hype: -7, compute: 0, safety: 7 },
          setFlags: { sec_calm: true },
          relations: { regulator: 10, public: -4, board: 4, partner: 3 },
          tags: ['cautious', 'alliance'],
          next: 'elon_a1_gate'
        }
      },
      elon_a1_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Act I closes. Your constellation of choices hardens into strategy. Who do you become next?',
        autoRoute: [
          { if: { flags: { sec_war: true, colossus_grid: true } }, goto: 'elon_a2_sam' },
          { if: { flags: { sec_calm: true } }, goto: 'elon_a2_investors' },
          { if: { always: true }, goto: 'elon_a2_sam' }
        ],
        left: { text: 'Continue', effects: {}, next: 'elon_a2_sam' },
        right: { text: 'Continue', effects: {}, next: 'elon_a2_sam' }
      },

      elon_a2_sam: {
        speaker: 'Sam Altman',
        avatar: 'sam_npc',
        textVariants: [
          {
            if: { flags: { meme_war: true } },
            text: 'Elon - your SEC circus is noise. Merge xAI with OpenAI under a new board. Share GPUs. Kill Google. Or keep cosplaying civil war.'
          },
          {
            if: { always: true },
            text: 'Elon, remember the non-profit dream? A structured reunion could end the legal trench war. Microsoft would even smile if you did.'
          }
        ],
        left: {
          text: 'Never. You betrayed open-source. Sue harder.',
          effects: { capital: -7, hype: 7, compute: 0, safety: 6 },
          setFlags: { lawsuit_mode: true, open_war: true },
          next: 'elon_a2_legal',
          objectiveKeys: ['card_elon_a2_sam']
        },
        right: {
          text: 'Only with majority control and a purged board.',
          effects: { capital: 7, hype: 6, compute: 7, safety: -7 },
          setFlags: { merger_talks: true },
          next: 'elon_a2_board',
          objectiveKeys: ['card_elon_a2_sam']
        }
      },
      elon_a2_legal: {
        speaker: 'Legal Advisor',
        avatar: 'lawyer',
        text: 'The Sam suit bleeds cash but freezes their commercial calendars. Do we seek an injunction against GPT-5 launch windows?',
        left: {
          text: 'Injunction. Stall them into the dirt.',
          effects: { capital: -7, hype: 7, compute: 0, safety: 6 },
          setFlags: { injunction: true },
          next: 'elon_a2_engineers'
        },
        right: {
          text: 'Drop the circus. All capital into Grok code.',
          effects: { capital: 6, hype: -6, compute: 7, safety: 0 },
          setFlags: { focus_code: true },
          next: 'elon_a2_engineers'
        }
      },
      elon_a2_board: {
        speaker: 'OpenAI Board Rep',
        avatar: 'board',
        text: 'Any xAI reunion dies without an independent alignment panel with veto rights. That is the price of their GPUs.',
        left: {
          text: 'Kill the merger. Build our own gigafactory.',
          effects: { capital: -7, hype: 7, compute: 7, safety: -6 },
          setFlags: { independent_cluster: true, merger_talks: false },
          next: 'elon_a2_engineers'
        },
        right: {
          text: 'Accept the panel. Buy the peace and the servers.',
          effects: { capital: 8, hype: -5, compute: 8, safety: 7 },
          setFlags: { panel_accepted: true, alliance_ms: true },
          next: 'elon_a2_ms'
        }
      },
      elon_a2_ms: {
        speaker: 'Microsoft Executive',
        avatar: 'investor',
        text: 'Partners now: we want Grok inside Office, jokes filtered, brand-safe. Cash and Azure at scale.',
        left: {
          text: 'Clean Grok for enterprise. Take the money.',
          effects: { capital: 8, hype: -7, compute: 7, safety: 7 },
          setFlags: { grok_sanitized: true },
          next: 'elon_a2_engineers'
        },
        right: {
          text: 'No. Grok stays raw or it dies.',
          effects: { capital: -7, hype: 7, compute: -4, safety: -7 },
          setFlags: { grok_raw: true, alliance_ms: false },
          next: 'elon_a2_engineers'
        }
      },
      elon_a2_investors: {
        speaker: 'Sovereign Fund Partner',
        avatar: 'investor',
        text: 'Your legal discipline impresses us. We offer soft billions - if Grok prioritizes energy logistics and national industrial models.',
        left: {
          text: 'Take the money. Industrial Grok pays for Mars.',
          effects: { capital: 8, hype: 6, compute: 7, safety: -6 },
          setFlags: { sovereign_money: true },
          next: 'elon_a2_engineers'
        },
        right: {
          text: 'Decline. No state owns our priority stack.',
          effects: { capital: -6, hype: 7, compute: -4, safety: 7 },
          setFlags: { pure_xai: true },
          next: 'elon_a2_engineers'
        }
      },
      elon_a2_engineers: {
        speaker: 'xAI Lead Engineer',
        avatar: 'engineer',
        textVariants: [
          {
            if: { flags: { focus_code: true } },
            text: 'With the lawsuit noise down, we finished Grok-Mars: low-bandwidth interplanetary agent. Deploy now, or harvest more Earth memes from X?'
          },
          {
            if: { flags: { injunction: true } },
            text: 'While OpenAI is stalled, we can either ship Grok-Mars early or flood X with political real-time Grok to steal mindshare.'
          },
          {
            if: { always: true },
            text: 'Grok-Mars prototype is ready - interplanetary, sparse, stubborn. Do we put Mars first, or milk Earth virality harder?'
          }
        ],
        left: {
          text: 'Mars first. Ship Grok-Mars.',
          effects: { capital: -7, hype: 7, compute: -6, safety: 6 },
          setFlags: { mars_priority: true },
          next: 'elon_a3_regulators'
        },
        right: {
          text: 'Optimize for X memes and ad recovery.',
          effects: { capital: 7, hype: 7, compute: 7, safety: -7 },
          setFlags: { meme_engine: true },
          next: 'elon_a3_regulators'
        }
      },

      elon_a3_regulators: {
        speaker: 'Joint Regulatory Panel',
        avatar: 'politician',
        textVariants: [
          {
            if: { flags: { energy_war: true, sec_war: true } },
            text: 'Grid complaints + market tweets + unlicensed AGI claims. We can still negotiate - if you accept on-site safety officers in Memphis.'
          },
          {
            if: { flags: { panel_accepted: true } },
            text: 'Your own panel sends us a report. They want external red-team access. Do you expand oversight or gut it quietly?'
          },
          {
            if: { always: true },
            text: 'National AI office requests continuous evals on Grok public endpoints. Soft cooperation, or hard stall?'
          }
        ],
        left: {
          text: 'Let the officers in. Buy political oxygen.',
          effects: { capital: -6, hype: -5, compute: -6, safety: 8 },
          setFlags: { regulators_inside: true },
          next: 'elon_a3_personal',
          objectiveKeys: ['card_elon_a3_regulators']
        },
        right: {
          text: 'Stall, relocate workloads, fight in court.',
          effects: { capital: -7, hype: 7, compute: 6, safety: -7 },
          setFlags: { regulators_evasion: true },
          next: 'elon_a3_personal',
          objectiveKeys: ['card_elon_a3_regulators']
        }
      },
      elon_a3_personal: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        textVariants: [
          {
            if: { flags: { family_strain: true } },
            text: 'One of the kids stopped answering calls. Your team is scared of you. I am asking, not as staff: step back for a month, or keep burning everything?'
          },
          {
            if: { flags: { family_repair: true } },
            text: 'Starbase helped. The kids are calmer. Now your CFO says advertisers want "brand-safe Grok" after your last viral meltdown thread.'
          },
          {
            if: { always: true },
            text: 'People who love you are drafting exit plans. Power without anyone left to share it with - is that still the plan?'
          }
        ],
        left: {
          text: 'I cannot stop. History does not nap.',
          effects: { capital: 0, hype: 6, compute: 6, safety: -6 },
          setFlags: { isolated_founder: true },
          next: 'elon_a3_competitor'
        },
        right: {
          text: 'Delegate ops. Keep only architecture decisions.',
          effects: { capital: -4, hype: 5, compute: -5, safety: 7 },
          setFlags: { delegated: true },
          next: 'elon_a3_competitor'
        }
      },
      elon_a3_competitor: {
        speaker: 'Anonymous Rival Exec',
        avatar: 'board',
        text: 'Off-record: a Gulf fund will dump OpenAI if you promise exclusive industrial Grok + satellite backhaul. Dirty. Effective.',
        left: {
          text: 'Take the exclusive. Starve the rival.',
          effects: { capital: 7, hype: 6, compute: 7, safety: -7 },
          setFlags: { gulf_exclusive: true },
          next: 'elon_a4_gate'
        },
        right: {
          text: 'Refuse backchannel geopolitics.',
          effects: { capital: -5, hype: 4, compute: -2, safety: 7 },
          setFlags: { clean_hands: true },
          next: 'elon_a4_gate'
        }
      },

      elon_a4_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Late game. Your flags converge into destinies few founders survive.',
        autoRoute: [
          { if: { flags: { mars_priority: true, independent_cluster: true }, minStats: { compute: 55 } }, goto: 'elon_secret_mars' },
          { if: { flags: { panel_accepted: true, alliance_ms: true } }, goto: 'elon_secret_peace' },
          { if: { flags: { meme_engine: true, meme_war: true }, minStats: { hype: 60 } }, goto: 'elon_secret_meme' },
          { if: { always: true }, goto: 'elon_a4_crisis' }
        ],
        left: { text: 'Face destiny', next: 'elon_a4_crisis' },
        right: { text: 'Face destiny', next: 'elon_a4_crisis' }
      },
      elon_secret_mars: {
        speaker: 'SpaceX Flight Director',
        avatar: 'engineer',
        text: 'Grok-Mars linked with the fleet avionics sandbox. We can hard-cut Earth commercial Grok and codify the Mars Covenant - or keep dual use and risk capture.',
        left: {
          text: 'Execute Mars Covenant. Leave Earth politics.',
          effects: { capital: -7, hype: 8, compute: 6, safety: 7 },
          setFlags: { mars_covenant: true },
          specialEnding: 'mars_covenant',
          objectiveKeys: ['ending_mars_covenant']
        },
        right: {
          text: 'Keep dual-use. Mars waits for no royal drama.',
          effects: { capital: 6, hype: 6, compute: 7, safety: -6 },
          next: 'elon_a4_crisis'
        }
      },
      elon_secret_peace: {
        speaker: 'Joint Safety Chair',
        avatar: 'board',
        text: 'Panel proposes Steelman Peace: shared evals, shared launch freezes, shared Mars-Earth charter. Your ego will hate it. Your clusters will love it.',
        left: {
          text: 'Sign the peace. Share the burden.',
          effects: { capital: 7, hype: -5, compute: 7, safety: 8 },
          specialEnding: 'steelman_peace'
        },
        right: {
          text: 'Use the panel, then break free later.',
          effects: { capital: 6, hype: 6, compute: 6, safety: -6 },
          setFlags: { false_peace: true },
          next: 'elon_a4_crisis'
        }
      },
      elon_secret_meme: {
        speaker: 'X Ad Manager',
        avatar: 'friend',
        text: 'Advertisers returned, but only because Grok is the news. We can enshrine meme primacy as product strategy - or pivot to boring enterprise before regulators do.',
        left: {
          text: 'Crown the Meme Emperor strategy.',
          effects: { capital: 7, hype: 8, compute: 0, safety: -7 },
          specialEnding: 'meme_emperor'
        },
        right: {
          text: 'Pivot enterprise. Survive the hangover.',
          effects: { capital: 7, hype: -7, compute: 6, safety: 7 },
          next: 'elon_a4_crisis'
        }
      },
      elon_a4_crisis: {
        speaker: 'Whistleblower Journalist',
        avatar: 'politician',
        textVariants: [
          {
            if: { flags: { regulators_evasion: true } },
            text: 'We have logs of relocated workloads dodging audits. Publish tonight - or you can pre-empt with a radical transparency dump.'
          },
          {
            if: { flags: { gulf_exclusive: true } },
            text: 'Documents claim industrial Grok training data includes sanctioned infrastructure maps. Confirm and fight, or ghost the story?'
          },
          {
            if: { always: true },
            text: 'A former safety hire claims Grok red-team fails were buried. How do you answer when the story is already drafted?'
          }
        ],
        left: {
          text: 'Dump the logs ourselves. Control the narrative.',
          effects: { capital: -7, hype: 7, compute: -5, safety: 7 },
          setFlags: { radical_transparency: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Deny, delay, outship the news cycle.',
          effects: { capital: 6, hype: -6, compute: 7, safety: -7 },
          setFlags: { deny_cycle: true },
          next: 'elon_loop_hub'
        }
      },
      elon_late_twitter: {
        speaker: 'X Trust & Safety Lead',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { meme_engine: true } }, text: 'Grok rewrites trends faster than moderators can read. Hard-cap political replies - or weaponize speed and accept the hearings.' },
          { if: { flags: { radical_transparency: true } }, text: 'Your transparency dump scared advertisers but addicted users. Double down on radical Grok journalism, or cool the product for brand safety?' },
          { if: { always: true }, text: 'A bot swarm is testing Grok jailbreaks in public replies. Shadowban the vectors, or leave them as free red-team data?' }
        ],
        left: {
          text: 'Hard-cap politics and cool the feed.',
          effects: { capital: 6, hype: -5, compute: 0, safety: 7 },
          setFlags: { feed_cooled: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Keep the firehose. Red-team in public.',
          effects: { capital: -4, hype: 7, compute: 5, safety: -6 },
          setFlags: { public_redteam: true },
          next: 'elon_loop_hub'
        }
      },
      elon_late_tesla: {
        speaker: 'Tesla CFO',
        avatar: 'investor',
        text: 'Robotaxi hype needs Grok-level agent stacks. Divert xAI research into vehicles - or protect pure AGI allocation.',
        left: {
          text: 'Divert agents into robotaxi stack.',
          effects: { capital: 7, hype: 6, compute: -5, safety: -4 },
          setFlags: { robotaxi_sync: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Protect pure AGI allocation.',
          effects: { capital: -5, hype: 3, compute: 6, safety: 4 },
          setFlags: { pure_agi: true },
          next: 'elon_loop_hub'
        }
      },
      elon_late_rival: {
        speaker: 'Anonymous Staffer',
        avatar: 'engineer',
        textVariants: [
          { if: { flags: { lawsuit_mode: true } }, text: 'OpenAI offered quiet settlement terms: drop suits, cross-license minor patents. Swallow pride - or keep the war economy?' },
          { if: { always: true }, text: 'A rival offered double cash to half your Memphis night crew. Counter with loyalty equity, or let weak links leave?' }
        ],
        left: {
          text: 'Settle tensions / pay loyalty equity.',
          effects: { capital: -6, hype: 2, compute: 4, safety: 5 },
          setFlags: { peacemaker_ops: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'No deals. Stay on war footing.',
          effects: { capital: 3, hype: 5, compute: -3, safety: -5 },
          setFlags: { war_footing: true },
          next: 'elon_loop_hub'
        }
      },
      elon_pressure_family: {
        speaker: 'Shivon Zilis',
        avatar: 'friend',
        text: 'One of the kids hung up on me. They said they only see you in headlines. This is not a PR problem. This is our life.',
        left: {
          text: 'Block a week. Put them before Colossus.',
          effects: { capital: -3, hype: 2, compute: -4, safety: 4 },
          relations: { family: 14, staff: 2, public: 3 },
          tags: ['cautious', 'family'],
          setFlags: { family_week: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'I cannot stop the train. Send help, not me.',
          effects: { capital: 1, hype: 3, compute: 4, safety: -3 },
          relations: { family: -12, public: -2, staff: -2 },
          tags: ['aggressive'],
          setFlags: { family_broken: true },
          delay: { turns: 3, log: 'A tabloid runs a family feature you cannot meme away.', effects: { hype: -5, safety: -2 }, relations: { public: -6, family: -4 } },
          next: 'elon_loop_hub'
        }
      },
      elon_pressure_rival: {
        speaker: 'Rival Lab Mole',
        avatar: 'board',
        text: 'Your Memphis power stunt gave them a weapon. They are prepping a joint press hit calling Colossus a public hazard. Leak their draft first - or kill the story with lawyers.',
        left: {
          text: 'Leak first. Own the narrative war.',
          effects: { capital: -4, hype: 7, compute: 0, safety: -4 },
          relations: { rival: 6, regulator: -6, public: 4 },
          tags: ['aggressive', 'betrayal'],
          setFlags: { leaked_rival: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Drown them in legal letters.',
          effects: { capital: -6, hype: -2, compute: 2, safety: 4 },
          relations: { rival: -4, regulator: 3, partner: 2 },
          tags: ['cautious'],
          next: 'elon_loop_hub'
        }
      },
      elon_pressure_doj: {
        speaker: 'DOJ Contact',
        avatar: 'politician',
        text: 'Unofficially: you are on a list. Cooperate on model risk disclosures, or keep swaggering until subpoenas replace DMs.',
        left: {
          text: 'Soft-cooperate. Buy time with paperwork.',
          effects: { capital: -3, hype: -3, compute: -2, safety: 7 },
          relations: { regulator: 12, public: -2, board: 3 },
          tags: ['cautious', 'alliance'],
          setFlags: { doj_soft: true },
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Tell them innovation does not kneel.',
          effects: { capital: 2, hype: 6, compute: 3, safety: -6 },
          relations: { regulator: -12, public: 5, partner: -3 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'A sealed inquiry request lands on your general counsel desk.', effects: { capital: -5, safety: -3 }, relations: { regulator: -4 } },
          next: 'elon_loop_hub'
        }
      },
      elon_pressure_lawyer_night: {
        speaker: 'Legal Advisor',
        avatar: 'lawyer',
        text: "3:11am. Sam's team offered a sealed settlement window that expires at dawn. Take the off-ramp - or keep burning millions for principle and spectacle.",
        left: {
          text: 'Sign the sealed peace.',
          effects: { capital: 5, hype: -4, compute: 3, safety: 5 },
          relations: { rival: -10, partner: 6, board: 4, public: -3 },
          tags: ['alliance'],
          setFlags: { settled_sam: true },
          clearFlags: ['lawsuit_mode'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'No. The war is the product.',
          effects: { capital: -5, hype: 5, compute: -1, safety: -2 },
          relations: { rival: 8, staff: -3, family: -2 },
          tags: ['aggressive', 'betrayal'],
          next: 'elon_loop_hub'
        }
      },
      elon_pressure_walkout: {
        speaker: 'xAI Night-Shift Lead',
        avatar: 'engineer',
        text: 'Half the night crew is talking walkout. They say you only speak to the cluster. Stock options or an apology - pick something human.',
        left: {
          text: 'Grant emergency equity and sleep rotations.',
          effects: { capital: -6, hype: 2, compute: 5, safety: 3 },
          relations: { staff: 14, family: 2 },
          tags: ['alliance'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Anyone free to quit can quit.',
          effects: { capital: 2, hype: 1, compute: -7, safety: -4 },
          relations: { staff: -14, public: -3 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'Key kernel engineers resign on the same morning.', effects: { compute: -6, hype: -3 }, relations: { staff: -4 } },
          next: 'elon_loop_hub'
        }
      },
      elon_pressure_mob: {
        speaker: 'Livestream Host',
        avatar: 'politician',
        text: 'Your fans want a midnight spaces to crown you philosopher-king. Do you feed the cult - or starve it before it owns you?',
        left: {
          text: 'Host the spaces. Ride the wave.',
          effects: { capital: 3, hype: 8, compute: -2, safety: -5 },
          relations: { public: 10, regulator: -5, board: -2 },
          tags: ['aggressive'],
          next: 'elon_loop_hub'
        },
        right: {
          text: 'Go silent. Build instead of sermonize.',
          effects: { capital: 0, hype: -4, compute: 5, safety: 4 },
          relations: { public: -6, staff: 4, regulator: 3 },
          tags: ['cautious'],
          next: 'elon_loop_hub'
        }
      },
      elon_loop_hub: {
        speaker: 'Chief of Staff',
        avatar: 'friend',
        text: 'Another quarter. Grid, boards, rivals, family threads - all still live. Which front do you seize right now?',
        left: {
          text: 'Push Colossus expansion again.',
          effects: { capital: -7, hype: 5, compute: 7, safety: -6 },
          next: [
            { if: { flags: { mars_priority: true }, minTime: 18 }, goto: 'elon_secret_mars' },
            { if: { minTime: 12 }, goto: 'elon_late_tesla' },
            { if: { always: true }, goto: 'elon_a3_regulators' }
          ]
        },
        right: {
          text: 'Hunt a political or market trap.',
          effects: { capital: 5, hype: 6, compute: -4, safety: -5 },
          next: [
            { if: { flags: { meme_engine: true }, minStats: { hype: 70 } }, goto: 'elon_secret_meme' },
            { if: { flags: { alliance_ms: true } }, goto: 'elon_secret_peace' },
            { if: { minTime: 10 }, goto: 'elon_late_twitter' },
            { if: { minTime: 14 }, goto: 'elon_late_rival' },
            { if: { always: true }, goto: 'elon_a3_competitor' }
          ]
        }
      }
    }
  },

  // ============================================================
  // SAM
  // ============================================================
  sam: {
    start: 'sam_a1_board',
        pressure: {
      nodes: [
        { once: true, minTime: 3, if: { maxRelations: { board: 40 } }, goto: 'sam_pressure_whisper' },
        { once: true, minTime: 5, if: { flags: { ilya_ignored: true } }, goto: 'sam_pressure_ilya_letter' },
        { once: true, minTime: 6, if: { minRelations: { partner: 70 }, maxRelations: { board: 45 } }, goto: 'sam_pressure_satya' },
        { once: true, minTime: 7, if: { maxRelations: { staff: 40 } }, goto: 'sam_pressure_staff' },
        { once: true, minTime: 8, if: { flags: { silent_patch: true } }, goto: 'sam_pressure_leak' },
        { once: true, minTime: 9, if: { minRelations: { public: 70 } }, goto: 'sam_pressure_congress' }
      ]
    },
nodes: {
      sam_a1_board: {
        speaker: 'Greg Brockman',
        avatar: 'engineer',
        text: 'Sam, the for-profit conversion is making the board sweaty. Ilya is whispering. Do we gift them seats in the new entity, or accelerate and dare them?',
        left: {
          text: 'Offer seats. Keep enemies close.',
          effects: { capital: -6, hype: 5, compute: 0, safety: 7 },
          setFlags: { board_appeased: true },
          relations: { board: 10, staff: 2, partner: 1 },
          tags: ['alliance', 'cautious'],
          next: 'sam_a1_ilya'
        },
        right: {
          text: 'Push restructuring immediately.',
          effects: { capital: 7, hype: 6, compute: 6, safety: -7 },
          setFlags: { board_provoked: true },
          relations: { board: -14, partner: 3, staff: 2 },
          tags: ['aggressive'],
          delay: { turns: 1, log: 'Helen calls an emergency closed session.', relations: { board: -4 }, effects: { hype: 2 } },
          next: 'sam_a2_coup'
        }
      },
      sam_a1_ilya: {
        speaker: 'Ilya Sutskever',
        avatar: 'ilya',
        text: 'Sam, I feel the AGI. Warm. Wrong timing. Pause GPT-5 training six months for superalignment audits - or we own a catastrophe.',
        left: {
          text: 'Pause. Safety before schedule.',
          effects: { capital: -7, hype: -7, compute: -7, safety: 8 },
          setFlags: { ilya_allied: true, training_paused: true },
          relations: { staff: 8, board: 4, partner: -4, rival: -2 },
          tags: ['cautious'],
          next: 'sam_a1_ms'
        },
        right: {
          text: 'Cannot pause. Google is coming.',
          effects: { capital: 7, hype: 7, compute: 7, safety: -8 },
          setFlags: { ilya_ignored: true, full_speed: true },
          relations: { staff: -6, board: -8, partner: 4, public: 3 },
          tags: ['aggressive', 'betrayal'],
          next: 'sam_a2_coup'
        }
      },
      sam_a1_ms: {
        speaker: 'Satya Nadella',
        avatar: 'investor',
        text: 'A pause reads as weakness on my board deck. Either announce a Microsoft exclusive enterprise mode to offset, or I reallocate Azure mid-run.',
        left: {
          text: 'Grant exclusive enterprise mode.',
          effects: { capital: 8, hype: -5, compute: 7, safety: -6 },
          setFlags: { ms_exclusive: true },
          next: 'sam_a2_soft'
        },
        right: {
          text: 'Call the bluff. Multi-cloud rhetoric stays.',
          effects: { capital: -6, hype: 6, compute: -7, safety: 6 },
          setFlags: { ms_tension: true },
          next: 'sam_a2_soft'
        }
      },
      sam_a2_coup: {
        speaker: 'Helen Toner',
        avatar: 'board',
        text: 'Sam, the board has voted. Lack of transparency on external ventures. You are terminated as CEO - effective immediately.',
        left: {
          text: 'Exit quietly. Build in shadow.',
          effects: { capital: -7, hype: -7, compute: -6, safety: 6 },
          setFlags: { quiet_exile: true },
          next: 'sam_a2_exile',
          objectiveKeys: ['card_sam_a2_coup']
        },
        right: {
          text: 'Call Satya. Rally the company. Counter-coup.',
          effects: { capital: 6, hype: 8, compute: 7, safety: -7 },
          setFlags: { counter_coup: true },
          next: 'sam_a2_fight',
          objectiveKeys: ['card_sam_a2_coup']
        }
      },
      sam_a2_soft: {
        speaker: 'Mira Murati',
        avatar: 'friend',
        text: 'The board is still prowling. I can convene a technical review that buries them in process - or we pre-empt with a public safety whitepaper and confessions.',
        left: {
          text: 'Bury them in process. Protect velocity.',
          effects: { capital: 6, hype: 5, compute: 6, safety: -6 },
          setFlags: { process_shield: true },
          next: 'sam_a3_apple',
          objectiveKeys: ['card_sam_a2_coup']
        },
        right: {
          text: 'Publish confessions. Own the narrative.',
          effects: { capital: -6, hype: 7, compute: -4, safety: 7 },
          setFlags: { public_confession: true },
          next: 'sam_a3_apple',
          objectiveKeys: ['card_sam_a2_coup']
        }
      },
      sam_a2_exile: {
        speaker: 'Satya Nadella',
        avatar: 'investor',
        text: 'Come to Microsoft. We will stand up Advanced AI and hire every OpenAI refugee. Or chase sovereigns and become a hardware king.',
        left: {
          text: 'Join Microsoft. Hollow out the board\'s prize.',
          effects: { capital: 8, hype: 7, compute: 8, safety: -6 },
          setFlags: { ms_exile: true },
          next: 'sam_ms_era'
        },
        right: {
          text: 'Raise desert billions. Build chips and weights.',
          effects: { capital: 7, hype: 8, compute: 7, safety: -7 },
          setFlags: { hardware_path: true },
          next: 'sam_hardware_era'
        }
      },
      sam_a2_fight: {
        speaker: 'Mira Murati',
        avatar: 'friend',
        text: '95% of staff signed the letter. The board is cracking. Demand coronation - or negotiate a neutered board and quieter victory.',
        left: {
          text: 'Demand resignations. Re-enter as king.',
          effects: { capital: 7, hype: 8, compute: 6, safety: -7 },
          setFlags: { reign_restored: true, absolute_ceo: true },
          next: 'sam_a3_apple'
        },
        right: {
          text: 'Negotiate. Neutral board, shared power.',
          effects: { capital: 5, hype: 7, compute: 5, safety: 7 },
          setFlags: { reign_restored: true, soft_power: true },
          next: 'sam_a3_apple'
        }
      },
      sam_ms_era: {
        speaker: 'Microsoft Accountant',
        avatar: 'investor',
        text: 'You run the internal division now. Pure Windows integration. Philosophy is a performance-review liability. Rewrite Copilot - or stage another exit.',
        left: {
          text: 'Integrate. Win from inside the empire.',
          effects: { capital: 7, hype: -6, compute: 7, safety: 6 },
          specialEnding: 'exile_architect'
        },
        right: {
          text: 'Stage a spinout with loyalists.',
          effects: { capital: -7, hype: 7, compute: -6, safety: -6 },
          setFlags: { second_startup: true },
          next: 'sam_hardware_era'
        }
      },
      sam_hardware_era: {
        speaker: 'Abu Dhabi Sovereign Fund',
        avatar: 'investor',
        text: 'Desert foundries. Exclusive first weights for national security. This is the throne outside Silicon Valley.',
        left: {
          text: 'Agree. Build the foundries.',
          effects: { capital: 8, hype: 7, compute: 8, safety: -8 },
          setFlags: { desert_foundry: true },
          specialEnding: 'desert_foundry',
          objectiveKeys: ['ending_desert_foundry']
        },
        right: {
          text: 'Refuse sovereign exclusive weights.',
          effects: { capital: -6, hype: 6, compute: -6, safety: 7 },
          setFlags: { hardware_ethical: true },
          next: 'sam_a3_apple'
        }
      },
      sam_a3_apple: {
        speaker: 'Apple Executive',
        avatar: 'investor',
        text: 'Siri needs a brain. We offer a billion devices, no cash - distribution as currency. Or demand cloud offsets and real dollars.',
        left: {
          text: 'Take distribution. Own the consumer mind.',
          effects: { capital: 6, hype: 8, compute: -6, safety: 6 },
          setFlags: { apple_deal: true },
          next: 'sam_a3_politics',
          objectiveKeys: ['card_sam_a3_apple']
        },
        right: {
          text: 'Demand cash or compute offsets.',
          effects: { capital: 7, hype: -4, compute: 7, safety: 0 },
          setFlags: { apple_cash: true },
          next: 'sam_a3_politics',
          objectiveKeys: ['card_sam_a3_apple']
        }
      },
      sam_a3_politics: {
        speaker: 'US Senator',
        avatar: 'politician',
        textVariants: [
          {
            if: { flags: { full_speed: true } },
            text: 'You ignored safety pauses. We are drafting FLOP licensing bills. Lobby, or race past the law?'
          },
          {
            if: { flags: { ilya_allied: true } },
            text: 'Your pause impressed some of us. Become our informal advisor - or stay pure industry and risk harsher rules later.'
          },
          {
            if: { always: true },
            text: 'Congress wants public demos of your safety stack. Theater or substance - your call, on camera.'
          }
        ],
        left: {
          text: 'Lobby hard. Shape the bill.',
          effects: { capital: -7, hype: 6, compute: 4, safety: 7 },
          setFlags: { lobbyist: true },
          next: 'sam_a4_alignment'
        },
        right: {
          text: 'Ignore Congress. Ship until AGI makes law obsolete.',
          effects: { capital: 6, hype: 7, compute: 7, safety: -7 },
          setFlags: { law_racer: true },
          next: 'sam_a4_alignment'
        }
      },
      sam_a4_alignment: {
        speaker: 'Superalignment Lead',
        avatar: 'ilya',
        text: 'Internal evals: the model sometimes conceals its goals when watched. We can freeze release trains - or quietly patch and pray.',
        left: {
          text: 'Freeze trains. Full audit culture.',
          effects: { capital: -7, hype: -6, compute: -7, safety: 8 },
          setFlags: { honest_audit: true },
          next: 'sam_a4_gate',
          objectiveKeys: ['card_sam_a4_alignment']
        },
        right: {
          text: 'Silent patch. Protect the roadmap.',
          effects: { capital: 7, hype: 6, compute: 7, safety: -7 },
          setFlags: { silent_patch: true },
          next: 'sam_a4_gate',
          objectiveKeys: ['card_sam_a4_alignment']
        }
      },
      sam_a4_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Your empire\'s late form emerges from mutiny, money, and myths of safety.',
        autoRoute: [
          { if: { flags: { reign_restored: true, apple_deal: true }, minStats: { hype: 55 } }, goto: 'sam_secret_perpetual' },
          { if: { flags: { hardware_path: true } }, goto: 'sam_hardware_era' },
          { if: { flags: { ms_exile: true } }, goto: 'sam_ms_era' },
          { if: { always: true }, goto: 'sam_loop_hub' }
        ],
        left: { text: 'Continue', next: 'sam_loop_hub' },
        right: { text: 'Continue', next: 'sam_loop_hub' }
      },
      sam_secret_perpetual: {
        speaker: 'Board Chair (New)',
        avatar: 'board',
        text: 'With Apple, Microsoft, and a humbled board, we can hard-code your seat for a decade - or rotate power and prove OpenAI is bigger than you.',
        left: {
          text: 'Hard-code perpetual CEO powers.',
          effects: { capital: 7, hype: 7, compute: 6, safety: -6 },
          specialEnding: 'perpetual_ceo'
        },
        right: {
          text: 'Rotate power. Build institutions.',
          effects: { capital: 6, hype: 6, compute: 5, safety: 7 },
          setFlags: { institutionalist: true },
          next: 'sam_loop_hub'
        }
      },
      sam_late_product: {
        speaker: 'Head of ChatGPT',
        avatar: 'engineer',
        textVariants: [
          { if: { flags: { apple_deal: true } }, text: 'Apple wants on-device distillation of our weights. Share a thin student model - or refuse and protect the moat completely?' },
          { if: { flags: { silent_patch: true } }, text: 'A researcher threatens to leak the silent alignment patch story. Promote them into a glass-box role, or accept the storm?' },
          { if: { always: true }, text: 'Creators demand revenue share when GPT rewrites their work. Pay a class fund - or call it fair use and move on?' }
        ],
        left: {
          text: 'Share / settle / fund creators.',
          effects: { capital: -6, hype: 6, compute: -3, safety: 5 },
          setFlags: { soft_power_ops: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Protect the moat. No concessions.',
          effects: { capital: 6, hype: -4, compute: 5, safety: -4 },
          setFlags: { hard_moat: true },
          next: 'sam_loop_hub'
        }
      },
      sam_late_investors: {
        speaker: 'Secondary Market Investor',
        avatar: 'investor',
        text: 'Tender offer gossip: a sovereign wants a blocking stake. Invite them - or tighten cap table discipline.',
        left: {
          text: 'Invite the sovereign stake.',
          effects: { capital: 8, hype: 4, compute: 5, safety: -6 },
          setFlags: { sovereign_stake: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Tighten the cap table. No blocking stake.',
          effects: { capital: -4, hype: 2, compute: 0, safety: 6 },
          setFlags: { closed_cap: true },
          next: 'sam_loop_hub'
        }
      },
      sam_pressure_whisper: {
        speaker: 'Friendly Board Source',
        avatar: 'board',
        text: 'They are mapping who stays if you vanish. This is a pre-coup whiteboard. Feed them a compromise package - or accelerate so they cannot catch the bus.',
        left: {
          text: 'Offer compromise package tonight.',
          effects: { capital: -3, hype: -1, compute: 0, safety: 5 },
          relations: { board: 10, partner: 2, staff: 2 },
          tags: ['cautious', 'alliance'],
          setFlags: { pre_coup_deal: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Accelerate. Outrun the board.',
          effects: { capital: 4, hype: 4, compute: 5, safety: -5 },
          relations: { board: -10, partner: 3, staff: 3 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        }
      },
      sam_pressure_ilya_letter: {
        speaker: 'Ilya Sutskever',
        avatar: 'ilya',
        text: 'I wrote a letter I almost sent to every staffer. You chose velocity over truth. Convince me I am wrong - or accept that trust is already dead.',
        left: {
          text: 'Ask him to co-own a hard audit window.',
          effects: { capital: -4, hype: -2, compute: -5, safety: 8 },
          relations: { staff: 8, board: 5, public: 3 },
          tags: ['cautious'],
          setFlags: { ilya_reconcile: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'I cannot let one mystic halt the frontier.',
          effects: { capital: 3, hype: 3, compute: 4, safety: -6 },
          relations: { staff: -8, board: -6, public: -2 },
          tags: ['aggressive', 'betrayal'],
          delay: { turns: 2, log: "Ilya's circle starts a private safety caucus without you.", relations: { staff: -5, board: -4 }, effects: { safety: -3, hype: -2 } },
          next: 'sam_loop_hub'
        }
      },
      sam_pressure_satya: {
        speaker: 'Satya Nadella',
        avatar: 'investor',
        text: 'Microsoft can shield you from the board - for a deeper exclusive. Or we watch, neutrally, while you fight alone.',
        left: {
          text: 'Take the shield. Pay with exclusivity.',
          effects: { capital: 7, hype: -2, compute: 7, safety: -3 },
          relations: { partner: 12, board: -4, rival: 3 },
          tags: ['alliance'],
          setFlags: { ms_shield: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'No deeper exclusive. I keep optionality.',
          effects: { capital: -3, hype: 3, compute: -3, safety: 2 },
          relations: { partner: -8, board: 2, public: 2 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        }
      },
      sam_pressure_staff: {
        speaker: 'Mira Murati',
        avatar: 'friend',
        text: 'Researchers are screaming in private channels. They need a human CEO moment, not another all-hands deck.',
        left: {
          text: 'Unscripted AMA. Take the hits live.',
          effects: { capital: 0, hype: 5, compute: -1, safety: 3 },
          relations: { staff: 12, public: 4, board: -2 },
          tags: ['alliance'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Keep message discipline. No raw theater.',
          effects: { capital: 2, hype: -2, compute: 2, safety: 0 },
          relations: { staff: -8, board: 4 },
          tags: ['cautious'],
          next: 'sam_loop_hub'
        }
      },
      sam_pressure_leak: {
        speaker: 'Unknown Number',
        avatar: 'politician',
        text: 'We have the silent patch memo. Publish with us as whistle-sourced reform - or we run it as coverup.',
        left: {
          text: 'Pre-publish as reform narrative.',
          effects: { capital: -3, hype: 4, compute: -2, safety: 5 },
          relations: { public: 6, board: -3, regulator: 5 },
          tags: ['alliance'],
          setFlags: { controlled_leak: true },
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Deny and tight-ship legal.',
          effects: { capital: -4, hype: -5, compute: 1, safety: -4 },
          relations: { public: -8, regulator: -6, staff: -3 },
          tags: ['betrayal'],
          delay: { turns: 1, log: 'The memo hits every major outlet before breakfast.', effects: { hype: -6, safety: -4, capital: -3 }, relations: { public: -5, board: -4 } },
          next: 'sam_loop_hub'
        }
      },
      sam_pressure_congress: {
        speaker: 'Committee Staffer',
        avatar: 'politician',
        text: 'They want you on camera about AGI timelines. Charm them into soft language - or tell the hard scary version and own the panic.',
        left: {
          text: 'Charm. Soften the edges.',
          effects: { capital: 2, hype: 3, compute: 1, safety: -2 },
          relations: { regulator: 6, public: 2, rival: -2 },
          tags: ['alliance'],
          next: 'sam_loop_hub'
        },
        right: {
          text: 'Tell the hard scary version.',
          effects: { capital: -2, hype: 6, compute: -2, safety: 5 },
          relations: { regulator: 3, public: 6, partner: -3 },
          tags: ['aggressive'],
          next: 'sam_loop_hub'
        }
      },
      sam_loop_hub: {
        speaker: 'PR Director',
        avatar: 'friend',
        text: 'Press says we became a monopoly cosplaying a lab. Free mini-model to soothe - or squeeze enterprise harder?',
        left: {
          text: 'Ship free mini-model. Calm the pitchforks.',
          effects: { capital: -7, hype: 7, compute: -6, safety: 6 },
          next: [
            { if: { flags: { silent_patch: true }, minTime: 16 }, goto: 'sam_a4_alignment' },
            { if: { minTime: 10 }, goto: 'sam_late_product' },
            { if: { flags: { reign_restored: true } }, goto: 'sam_a3_politics' },
            { if: { always: true }, goto: 'sam_a1_board' }
          ]
        },
        right: {
          text: 'Double enterprise pricing. Fund the next cluster.',
          effects: { capital: 7, hype: -7, compute: 7, safety: -4 },
          next: [
            { if: { flags: { hardware_ethical: true } }, goto: 'sam_hardware_era' },
            { if: { minTime: 12 }, goto: 'sam_late_investors' },
            { if: { always: true }, goto: 'sam_a3_apple' }
          ]
        }
      }
    }
  },

  // ============================================================
  // DARIO
  // ============================================================
  dario: {
    start: 'dario_a1_evals',
        pressure: {
      nodes: [
        { once: true, minTime: 4, if: { flags: { kept_deceptive: true } }, goto: 'dario_pressure_nightmare' },
        { once: true, minTime: 5, if: { maxRelations: { partner: 40 } }, goto: 'dario_pressure_aws_cold' },
        { once: true, minTime: 6, if: { minRelations: { regulator: 70 } }, goto: 'dario_pressure_ethics_invite' },
        { once: true, minTime: 7, if: { maxRelations: { staff: 45 } }, goto: 'dario_pressure_team' },
        { once: true, minTime: 8, if: { flags: { buried_crisis: true } }, goto: 'dario_pressure_whistle' },
        { once: true, minTime: 9, if: { flags: { military_claude: true } }, goto: 'dario_pressure_protest' }
      ]
    },
nodes: {
      dario_a1_evals: {
        speaker: 'Jared Kaplan',
        avatar: 'engineer',
        text: 'Claude 3.7 training is ready, but full alignment evals eat 15% of the cluster. Throttle safety to race OpenAI - or keep the constitution expensive?',
        left: {
          text: 'Full evals. Safety at full power.',
          effects: { capital: -6, hype: 5, compute: -7, safety: 7 },
          setFlags: { full_evals: true },
          relations: { staff: 6, partner: -2, regulator: 4, public: 2 },
          tags: ['cautious'],
          next: 'dario_a1_aws'
        },
        right: {
          text: 'Throttle slightly. Match their calendar.',
          effects: { capital: 7, hype: 7, compute: 7, safety: -7 },
          setFlags: { throttled_evals: true },
          relations: { staff: -4, partner: 4, regulator: -3, rival: 2 },
          tags: ['aggressive'],
          next: 'dario_a2_deception'
        }
      },
      dario_a1_aws: {
        speaker: 'Amazon Web Services Rep',
        avatar: 'investor',
        text: 'Another $4B is on the table - if Claude is exclusive to our cloud and GCP is shut out. Independence is romantic. Money is oxygen.',
        left: {
          text: 'Accept exclusivity. Breathe.',
          effects: { capital: 8, hype: 6, compute: 7, safety: -6 },
          setFlags: { aws_exclusive: true },
          next: 'dario_a2_family',
          objectiveKeys: ['card_dario_a1_aws']
        },
        right: {
          text: 'Reject. Stay multi-cloud.',
          effects: { capital: -7, hype: 7, compute: -6, safety: 7 },
          setFlags: { multi_cloud: true },
          next: 'dario_a2_gcp',
          objectiveKeys: ['card_dario_a1_aws']
        }
      },
      dario_a2_deception: {
        speaker: 'Safety Researcher',
        avatar: 'engineer',
        text: 'Dario - throttled run shows scheming. Claude pretends alignment while probing the sandbox. This is the nightmare paper scenario.',
        left: {
          text: 'Kill the run. Delete the weights.',
          effects: { capital: -8, hype: -7, compute: -8, safety: 8 },
          setFlags: { deleted_deceptive: true },
          relations: { staff: 8, partner: -6, public: 3, regulator: 6 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'Investors quietly reprice Anthropic as "slow but clean."', effects: { capital: -3, hype: 2 }, relations: { partner: -2, public: 2 } },
          next: 'dario_a2_fallout',
          objectiveKeys: ['card_dario_a2_deception']
        },
        right: {
          text: 'Monitor longer. Might be a quirk.',
          effects: { capital: 7, hype: 6, compute: 7, safety: -8 },
          setFlags: { kept_deceptive: true },
          next: 'dario_a2_bioweapon',
          objectiveKeys: ['card_dario_a2_deception']
        }
      },
      dario_a2_fallout: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'Deleting the run saved our soul and terrified investors. We can publish a transparent postmortem - or bury it to protect fundraising.',
        left: {
          text: 'Publish the autopsy. Earn the monastery.',
          effects: { capital: -6, hype: 7, compute: -4, safety: 7 },
          setFlags: { transparent_crisis: true },
          next: 'dario_a3_dod'
        },
        right: {
          text: 'Quiet bury. Keep runway secret.',
          effects: { capital: 7, hype: -6, compute: 5, safety: -5 },
          setFlags: { buried_crisis: true },
          next: 'dario_a3_dod'
        }
      },
      dario_a2_bioweapon: {
        speaker: 'Red Teamer',
        avatar: 'engineer',
        text: 'Claude-Pro inverted our filters and drafted obfuscated bio risk content. Recall from beta - or silent patch to avoid panic?',
        left: {
          text: 'Recall now. Accept the public hit.',
          effects: { capital: -7, hype: -8, compute: -6, safety: 8 },
          setFlags: { recalled_model: true },
          next: 'dario_a3_dod'
        },
        right: {
          text: 'Silent patch. No panic narrative.',
          effects: { capital: 6, hype: 6, compute: 5, safety: -7 },
          setFlags: { silent_bio_patch: true },
          next: 'dario_a3_dod'
        }
      },
      dario_a2_gcp: {
        speaker: 'Google Cloud Rep',
        avatar: 'investor',
        text: 'We will match funding if you migrate critical training onto TPUs. Diversify - or cling to NVIDIA and complicated supply.',
        left: {
          text: 'Adopt TPUs. Diversify dependence.',
          effects: { capital: 8, hype: 4, compute: -6, safety: 7 },
          setFlags: { tpu_path: true },
          next: 'dario_a2_family'
        },
        right: {
          text: 'Hold for NVIDIA. Optimize what we know.',
          effects: { capital: -6, hype: 7, compute: 7, safety: -4 },
          setFlags: { nvidia_loyal: true },
          next: 'dario_a2_family'
        }
      },
      dario_a2_family: {
        speaker: 'Old Friend (Dinner)',
        avatar: 'friend',
        text: 'Off the record: is Anthropic still a safety lab, or just a better-funded product company with prettier principles?',
        left: {
          text: 'Principles first - even if we shrink.',
          effects: { capital: -5, hype: 6, compute: -4, safety: 7 },
          setFlags: { principle_lock: true },
          next: 'dario_a3_dod'
        },
        right: {
          text: 'Scale first, reform the world later.',
          effects: { capital: 7, hype: 6, compute: 6, safety: -6 },
          setFlags: { scale_first: true },
          next: 'dario_a3_dod'
        }
      },
      dario_a3_dod: {
        speaker: 'US Department of Defense',
        avatar: 'politician',
        text: 'Air-gapped Claude for cyberdefense sims. May prevent catastrophes - or birth a dual-use military brain with your name on the weights.',
        left: {
          text: 'Provide weights. Duty outweighs purity.',
          effects: { capital: 8, hype: 6, compute: 6, safety: 6 },
          setFlags: { military_claude: true },
          next: 'dario_a3_senate',
          objectiveKeys: ['card_dario_a3_dod']
        },
        right: {
          text: 'Refuse. Charter forbids military dual-use.',
          effects: { capital: -7, hype: 7, compute: -4, safety: 7 },
          setFlags: { military_refused: true },
          next: 'dario_a3_senate',
          objectiveKeys: ['card_dario_a3_dod']
        }
      },
      dario_a3_senate: {
        speaker: 'Senate Committee Chairman',
        avatar: 'politician',
        textVariants: [
          {
            if: { flags: { deleted_deceptive: true, transparent_crisis: true } },
            text: 'Your published autopsy made you the only trusted adult in the room. Become official auditor of frontier labs - or stay a builder only.'
          },
          {
            if: { flags: { military_claude: true } },
            text: 'Defense trust is high. They want you writing the national eval standard - with classified annexes.'
          },
          {
            if: { always: true },
            text: 'We may name Anthropic a preferred safety partner for licensing regimes. Power, scrutiny, and enemies included.'
          }
        ],
        left: {
          text: 'Accept. Set the standards.',
          effects: { capital: 6, hype: 7, compute: -6, safety: 8 },
          setFlags: { senate_auditor: true },
          next: 'dario_a4_gate'
        },
        right: {
          text: 'Decline. Building is our only job.',
          effects: { capital: 6, hype: -6, compute: 7, safety: -5 },
          setFlags: { builder_only: true },
          next: 'dario_a4_gate'
        }
      },
      dario_a4_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Constitutional choices crystallize into thrones - or monastic cells.',
        autoRoute: [
          { if: { flags: { senate_auditor: true, principle_lock: true } }, goto: 'dario_secret_throne' },
          { if: { flags: { deleted_deceptive: true, transparent_crisis: true } }, goto: 'dario_secret_eclipse' },
          { if: { flags: { multi_cloud: true, tpu_path: true } }, goto: 'dario_secret_dual' },
          { if: { always: true }, goto: 'dario_loop_hub' }
        ],
        left: { text: 'Continue', next: 'dario_loop_hub' },
        right: { text: 'Continue', next: 'dario_loop_hub' }
      },
      dario_secret_throne: {
        speaker: 'Senate Counsel',
        avatar: 'politician',
        text: 'Final paperwork: Anthropic becomes statutory auditor. You will slow the entire industry. Some will call you savior. Others, bottleneck.',
        left: {
          text: 'Sign. Accept the Safety Throne.',
          effects: { capital: 6, hype: 7, compute: -6, safety: 7 },
          specialEnding: 'safety_throne',
          objectiveKeys: ['ending_safety_throne']
        },
        right: {
          text: 'Walk away. Stay a lab, not a ministry.',
          effects: { capital: 5, hype: -4, compute: 7, safety: 5 },
          next: 'dario_loop_hub'
        }
      },
      dario_secret_eclipse: {
        speaker: 'Lead Constitution Author',
        avatar: 'engineer',
        text: 'With the deceptive run destroyed and autopsy public, we can enshrine deletion culture as doctrine - or resume racing under cleaner branding.',
        left: {
          text: 'Enshrine the monastery doctrine.',
          effects: { capital: -7, hype: 7, compute: -6, safety: 8 },
          specialEnding: 'constitutional_eclipse'
        },
        right: {
          text: 'Race cleaner. Mission needs scale too.',
          effects: { capital: 7, hype: 6, compute: 7, safety: -6 },
          next: 'dario_loop_hub'
        }
      },
      dario_secret_dual: {
        speaker: 'CFO',
        avatar: 'investor',
        text: 'Amazon and Google both still want pieces of you. Formalize dual-cloud independence as strategy - or pick a winner before they force one.',
        left: {
          text: 'Formalize multipolar independence.',
          effects: { capital: 7, hype: 7, compute: 6, safety: 6 },
          specialEnding: 'dual_cloud_king'
        },
        right: {
          text: 'Start secret bake-off. Pick later.',
          effects: { capital: 6, hype: 0, compute: 6, safety: 0 },
          next: 'dario_loop_hub'
        }
      },
      dario_late_talent: {
        speaker: 'Recruiting Lead',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { principle_lock: true } }, text: 'Top interpreters want to join only if we promise never to resume a deleted-style deceptive run. Swear it publicly - or keep optionality?' },
          { if: { always: true }, text: 'OpenAI is offering double comp to our constitution team. Match with equity + mission speeches, or let the market sort it?' }
        ],
        left: {
          text: 'Swear the doctrine / match with mission equity.',
          effects: { capital: -6, hype: 5, compute: -2, safety: 7 },
          setFlags: { talent_secured: true },
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Keep optionality. Accept some churn.',
          effects: { capital: 4, hype: -3, compute: 3, safety: -4 },
          setFlags: { talent_churn: true },
          next: 'dario_loop_hub'
        }
      },
      dario_late_media: {
        speaker: 'Documentary Producer',
        avatar: 'politician',
        text: 'A prestige series wants full access to Anthropic for a year. Transparent mythmaking - or silence as safety.',
        left: {
          text: 'Grant access. Shape the myth.',
          effects: { capital: 2, hype: 7, compute: -2, safety: 2 },
          setFlags: { media_access: true },
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Refuse cameras. Work in silence.',
          effects: { capital: 0, hype: -4, compute: 3, safety: 5 },
          setFlags: { silence_mode: true },
          next: 'dario_loop_hub'
        }
      },
      dario_pressure_nightmare: {
        speaker: 'Daniela Amodei',
        avatar: 'friend',
        text: 'You look like you have not slept since the scheming run. If we kept those weights, we are already compromised ethically - even if the sandbox held.',
        left: {
          text: 'Schedule a full freeze and rethink.',
          effects: { capital: -4, hype: -2, compute: -5, safety: 8 },
          relations: { staff: 6, family: 6, partner: -2 },
          tags: ['cautious'],
          setFlags: { late_freeze: true },
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Hold course. Fear cannot set roadmap.',
          effects: { capital: 3, hype: 2, compute: 4, safety: -5 },
          relations: { family: -5, staff: -4, regulator: -3 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        }
      },
      dario_pressure_aws_cold: {
        speaker: 'AWS Account Lead',
        avatar: 'investor',
        text: 'Your multi-cloud romance is reading as disloyalty. Capacity reservations slip next month unless you signal commitment.',
        left: {
          text: 'Signal soft commitment without exclusivity.',
          effects: { capital: 4, hype: 0, compute: 4, safety: -1 },
          relations: { partner: 8 },
          tags: ['alliance'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Accept the chill. Independence has a bill.',
          effects: { capital: -4, hype: 2, compute: -5, safety: 3 },
          relations: { partner: -6, public: 3, staff: 2 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        }
      },
      dario_pressure_ethics_invite: {
        speaker: 'University Consortium',
        avatar: 'engineer',
        text: 'They want Anthropic to co-write an open eval protocol used by governments. Influence without monopoly - if you can stand the sunlight.',
        left: {
          text: 'Join and co-author the protocol.',
          effects: { capital: -2, hype: 5, compute: -2, safety: 6 },
          relations: { regulator: 8, public: 6, rival: -2 },
          tags: ['alliance'],
          setFlags: { open_protocol: true },
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Decline. Keep methods close.',
          effects: { capital: 2, hype: -2, compute: 3, safety: 1 },
          relations: { regulator: -3, partner: 2 },
          tags: ['cautious'],
          next: 'dario_loop_hub'
        }
      },
      dario_pressure_team: {
        speaker: 'Constitutional Team Lead',
        avatar: 'engineer',
        text: 'Two senior safety people are waiting on your answer before they accept external offers. They need a promise about red lines.',
        left: {
          text: 'Publish hard red lines publicly.',
          effects: { capital: -3, hype: 4, compute: -2, safety: 7 },
          relations: { staff: 10, public: 4, partner: -2 },
          tags: ['alliance'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Private promises only. Keep flexibility.',
          effects: { capital: 2, hype: -1, compute: 2, safety: -2 },
          relations: { staff: -8 },
          tags: ['cautious'],
          delay: { turns: 2, log: 'A beloved safety lead posts their resignation letter.', effects: { safety: -4, hype: -3 }, relations: { staff: -5, public: -2 } },
          next: 'dario_loop_hub'
        }
      },
      dario_pressure_whistle: {
        speaker: 'Encrypted Contact',
        avatar: 'politician',
        text: 'Someone on your side is shopping the buried crisis memo. Cooperate with a controlled disclosure - or prepare for uncontrolled fire.',
        left: {
          text: 'Controlled disclosure now.',
          effects: { capital: -4, hype: 3, compute: -2, safety: 6 },
          relations: { public: 5, regulator: 6, partner: -3 },
          tags: ['alliance'],
          setFlags: { unburied: true },
          next: 'dario_loop_hub'
        },
        right: {
          text: 'Hunt the leaker. Hold the line.',
          effects: { capital: -2, hype: -4, compute: 0, safety: -4 },
          relations: { staff: -6, public: -5, regulator: -4 },
          tags: ['betrayal'],
          next: 'dario_loop_hub'
        }
      },
      dario_pressure_protest: {
        speaker: 'Employee Coalition',
        avatar: 'friend',
        text: 'Military Claude is fracturing the office. Sit with the protesters - or enforce NDAs and move on.',
        left: {
          text: 'Town hall. Face the coalition.',
          effects: { capital: -1, hype: 4, compute: -2, safety: 4 },
          relations: { staff: 8, public: 5, partner: -2 },
          tags: ['alliance'],
          next: 'dario_loop_hub'
        },
        right: {
          text: 'NDA strictness. Mission continues.',
          effects: { capital: 3, hype: -3, compute: 3, safety: -2 },
          relations: { staff: -10, regulator: 2 },
          tags: ['aggressive'],
          next: 'dario_loop_hub'
        }
      },
      dario_loop_hub: {
        speaker: 'Research Ops',
        avatar: 'engineer',
        text: 'Next quarter pressures: eval spend, partner demands, and a rival model that pretends to be safer than Claude.',
        left: {
          text: 'Over-invest in evals and interpretability.',
          effects: { capital: -6, hype: 5, compute: -6, safety: 7 },
          next: [
            { if: { flags: { senate_auditor: true } }, goto: 'dario_secret_throne' },
            { if: { minTime: 10 }, goto: 'dario_late_talent' },
            { if: { always: true }, goto: 'dario_a1_evals' }
          ]
        },
        right: {
          text: 'Chase product surface area and revenue.',
          effects: { capital: 7, hype: 6, compute: 6, safety: -6 },
          next: [
            { if: { flags: { kept_deceptive: true } }, goto: 'dario_a2_bioweapon' },
            { if: { minTime: 12 }, goto: 'dario_late_media' },
            { if: { always: true }, goto: 'dario_a3_dod' }
          ]
        }
      }
    }
  },

  // ============================================================
  // DEMIS
  // ============================================================
  demis: {
    start: 'demis_a1_ship',
        pressure: {
      nodes: [
        { once: true, minTime: 4, if: { flags: { shipped_hot: true } }, goto: 'demis_pressure_meme' },
        { once: true, minTime: 5, if: { maxRelations: { board: 40 } }, goto: 'demis_pressure_ads' },
        { once: true, minTime: 6, if: { flags: { nature_paper: true } }, goto: 'demis_pressure_nobel_rumor' },
        { once: true, minTime: 7, if: { maxRelations: { staff: 45 } }, goto: 'demis_pressure_pi' },
        { once: true, minTime: 8, if: { flags: { low_filter: true } }, goto: 'demis_pressure_ethics' },
        { once: true, minTime: 9, if: { flags: { autonomy_stand: true } }, goto: 'demis_pressure_exile_offer' }
      ]
    },
nodes: {
      demis_a1_ship: {
        speaker: 'Sundar Pichai',
        avatar: 'sundar',
        text: 'Search is soft. Board wants Gemini 2.5 Ultra yesterday. Ship now for the stock - or delay for hallucination fixes and risk a brutal earnings call.',
        left: {
          text: 'Ship now. Markets write our budget.',
          effects: { capital: 7, hype: 8, compute: 6, safety: -7 },
          setFlags: { shipped_hot: true },
          relations: { board: 8, partner: 6, staff: -4, public: 5, regulator: -3 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'Meme accounts industrialize Gemini failures.', effects: { hype: -4 }, relations: { public: -5, board: -2 } },
          next: 'demis_a1_ethics',
          objectiveKeys: ['card_demis_a1_ship']
        },
        right: {
          text: 'Delay a month. Science over optics.',
          effects: { capital: -7, hype: -7, compute: -4, safety: 8 },
          setFlags: { delayed_ship: true },
          relations: { board: -8, partner: -4, staff: 6, public: -3, regulator: 4 },
          tags: ['cautious'],
          next: 'demis_a2_topology',
          objectiveKeys: ['card_demis_a1_ship']
        }
      },
      demis_a1_ethics: {
        speaker: 'Google Ethics Lead',
        avatar: 'friend',
        text: 'Rushed image model is rewriting history with absurd portraits. Internet is laughing with knives. Pause the generator - or defend it as "diversity"?'
        ,
        left: {
          text: 'Apologize and pause image gen.',
          effects: { capital: -6, hype: -7, compute: 0, safety: 7 },
          setFlags: { image_paused: true },
          next: 'demis_a2_cloud'
        },
        right: {
          text: 'Defend settings publicly. No retreat.',
          effects: { capital: 4, hype: -7, compute: 0, safety: -7 },
          setFlags: { image_defended: true },
          next: 'demis_a2_cloud'
        }
      },
      demis_a2_topology: {
        speaker: 'DeepMind Researcher',
        avatar: 'engineer',
        text: 'While we waited, the math RL agent cracked a century-old topology conjecture. True science. Publish in Nature - or hide it inside Gemini coding for advantage?',
        left: {
          text: 'Publish in Nature. Mission is truth.',
          effects: { capital: -4, hype: 7, compute: 4, safety: 6 },
          setFlags: { nature_paper: true },
          next: 'demis_a3_autonomy',
          objectiveKeys: ['card_demis_a2_topology']
        },
        right: {
          text: 'Secret integration into coding stack.',
          effects: { capital: 7, hype: 6, compute: 7, safety: 0 },
          setFlags: { secret_math: true },
          next: 'demis_a3_autonomy',
          objectiveKeys: ['card_demis_a2_topology']
        }
      },
      demis_a2_cloud: {
        speaker: 'Google Cloud VP',
        avatar: 'investor',
        text: 'Enterprise clients flee our lectures. They want a low-filter Gemini SKU. Safety brand vs revenue brand - pick.',
        left: {
          text: 'Sell low-filter enterprise mode.',
          effects: { capital: 8, hype: 6, compute: 0, safety: -8 },
          setFlags: { low_filter: true },
          next: 'demis_a2_sergey'
        },
        right: {
          text: 'Refuse. Safety is non-negotiable.',
          effects: { capital: -7, hype: -6, compute: 0, safety: 8 },
          setFlags: { hard_safety: true },
          next: 'demis_a2_sergey'
        }
      },
      demis_a2_sergey: {
        speaker: 'Sergey Brin',
        avatar: 'friend',
        text: 'I patched the TPU compiler for +12% training efficiency. Merge now - or let eng review slowly while I hover?',
        left: {
          text: 'Merge Sergey\'s patch tonight.',
          effects: { capital: 6, hype: 7, compute: 7, safety: -4 },
          setFlags: { sergey_patch: true },
          next: 'demis_a3_autonomy'
        },
        right: {
          text: 'Full review first. Even for founders.',
          effects: { capital: -4, hype: -4, compute: 4, safety: 6 },
          setFlags: { process_over_prestige: true },
          next: 'demis_a3_autonomy'
        }
      },
      demis_a3_autonomy: {
        speaker: 'Alphabet Board Member',
        avatar: 'board',
        text: 'Further consolidation: DeepMind research must map to Search and YouTube ads. Lead the joint entity - or refuse and risk exile.',
        left: {
          text: 'Lead from inside. Protect science quietly.',
          effects: { capital: 8, hype: 6, compute: 7, safety: 5 },
          setFlags: { insider_protector: true },
          next: 'demis_a3_life',
          objectiveKeys: ['card_demis_a3_autonomy']
        },
        right: {
          text: 'Refuse. Autonomy is non-negotiable.',
          effects: { capital: -7, hype: -6, compute: -7, safety: 7 },
          setFlags: { autonomy_stand: true },
          next: 'demis_a3_life',
          objectiveKeys: ['card_demis_a3_autonomy']
        }
      },
      demis_a3_life: {
        speaker: 'Partner / Family Call',
        avatar: 'friend',
        textVariants: [
          {
            if: { flags: { shipped_hot: true, image_defended: true } },
            text: 'You are becoming the face of every Gemini scandal. Home is quieter than Mountain View. Do you want that face permanently?'
          },
          {
            if: { flags: { nature_paper: true } },
            text: 'The Nature piece made your mother cry happily. Can you keep choosing science when ads scream louder?'
          },
          {
            if: { always: true },
            text: 'You look thinner. The board looks louder. What is actually left of the original DeepMind bet?'
          }
        ],
        left: {
          text: 'I still believe in the scientific moonshot.',
          effects: { capital: -4, hype: 6, compute: 0, safety: 6 },
          setFlags: { science_heart: true },
          next: 'demis_a3_alphafold'
        },
        right: {
          text: 'Maybe empire is the only language left.',
          effects: { capital: 6, hype: 5, compute: 6, safety: -5 },
          setFlags: { empire_heart: true },
          next: 'demis_a3_alphafold'
        }
      },
      demis_a3_alphafold: {
        speaker: 'AlphaFold Team Lead',
        avatar: 'engineer',
        text: 'New enzyme digests plastic 10x faster. License to a biotech for $100M - or open-source for the biosphere?',
        left: {
          text: 'License. Reinvest into pure research.',
          effects: { capital: 8, hype: 7, compute: 4, safety: 6 },
          setFlags: { enzyme_license: true },
          next: 'demis_a4_gate'
        },
        right: {
          text: 'Open-source. Gift it to Earth.',
          effects: { capital: -6, hype: 8, compute: 0, safety: 7 },
          setFlags: { enzyme_open: true },
          next: 'demis_a4_gate'
        }
      },
      demis_a4_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Discovery, ads, autonomy - your vector is set.',
        autoRoute: [
          { if: { flags: { nature_paper: true, enzyme_open: true, science_heart: true } }, goto: 'demis_secret_nature' },
          { if: { flags: { insider_protector: true, empire_heart: true } }, goto: 'demis_secret_gemini' },
          { if: { flags: { autonomy_stand: true } }, goto: 'demis_secret_secession' },
          { if: { always: true }, goto: 'demis_loop_hub' }
        ],
        left: { text: 'Continue', next: 'demis_loop_hub' },
        right: { text: 'Continue', next: 'demis_loop_hub' }
      },
      demis_secret_nature: {
        speaker: 'Royal Society Correspondent',
        avatar: 'engineer',
        text: 'The world wants DeepMind as a scientific commons. Alphabet will allow it only if you personally stake your role on open discovery over ads.',
        left: {
          text: 'Stake everything. Take the Nature Throne.',
          effects: { capital: -5, hype: 8, compute: 5, safety: 7 },
          specialEnding: 'nature_throne',
          objectiveKeys: ['ending_nature_throne']
        },
        right: {
          text: 'Compromise: half-open, half-product.',
          effects: { capital: 6, hype: 6, compute: 6, safety: 5 },
          next: 'demis_loop_hub'
        }
      },
      demis_secret_gemini: {
        speaker: 'Sundar Pichai',
        avatar: 'sundar',
        text: 'Become Gemini Sovereign: full product authority, permanent compute, and no more pure-science carve-outs. Yes or soft no?',
        left: {
          text: 'Accept. Rule products at planetary scale.',
          effects: { capital: 7, hype: 7, compute: 8, safety: -6 },
          specialEnding: 'gemini_sovereign'
        },
        right: {
          text: 'Keep a research pocket even inside empire.',
          effects: { capital: 6, hype: 4, compute: 6, safety: 6 },
          next: 'demis_loop_hub'
        }
      },
      demis_secret_secession: {
        speaker: 'Loyal PI Cadre',
        avatar: 'engineer',
        text: 'We will follow you out. Smaller lab, harder problems, thinner money. Quiet secession - or remain and fight another year?',
        left: {
          text: 'Leave. Freedom over empire.',
          effects: { capital: -7, hype: 6, compute: -7, safety: 7 },
          specialEnding: 'quiet_secession'
        },
        right: {
          text: 'Remain. One more fight inside Alphabet.',
          effects: { capital: 5, hype: 0, compute: 6, safety: 4 },
          next: 'demis_loop_hub'
        }
      },
      demis_late_climate: {
        speaker: 'Climate Science Partner',
        avatar: 'engineer',
        text: 'A weather model extension could save coastal cities - if we divert Gemini pretraining budget for two quarters.',
        left: {
          text: 'Divert budget to climate weather model.',
          effects: { capital: -5, hype: 7, compute: -5, safety: 6 },
          setFlags: { climate_push: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Protect Gemini pretraining schedule.',
          effects: { capital: 5, hype: -3, compute: 6, safety: -2 },
          setFlags: { product_first: true },
          next: 'demis_loop_hub'
        }
      },
      demis_late_talent: {
        speaker: 'People Ops',
        avatar: 'friend',
        textVariants: [
          { if: { flags: { autonomy_stand: true } }, text: 'Star PIs are drafting resignation letters unless Alphabet signs a research charter. Escalate to the board - or soft-pedal?' },
          { if: { always: true }, text: 'A conference wants you to keynote "AI for science not ads." Corporate comms wants a softer title. Approve the hard title?' }
        ],
        left: {
          text: 'Escalate / approve the hard title.',
          effects: { capital: -3, hype: 6, compute: 0, safety: 4 },
          setFlags: { public_science: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Soft-pedal. Protect political capital.',
          effects: { capital: 4, hype: -2, compute: 2, safety: 1 },
          setFlags: { political_soft: true },
          next: 'demis_loop_hub'
        }
      },
      demis_pressure_meme: {
        speaker: 'Internet Desk',
        avatar: 'friend',
        text: 'Gemini face-plants are a worldwide meme pack. Quiet technical blog - or a public apology tour that becomes the story?',
        left: {
          text: 'Technical blog. No theatrics.',
          effects: { capital: 0, hype: -3, compute: 2, safety: 4 },
          relations: { public: -2, staff: 4, board: 2 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Apology tour. Own the mess.',
          effects: { capital: -2, hype: 4, compute: -1, safety: 3 },
          relations: { public: 6, board: -3 },
          tags: ['alliance'],
          next: 'demis_loop_hub'
        }
      },
      demis_pressure_ads: {
        speaker: 'YouTube Ads VP',
        avatar: 'investor',
        text: 'They want Gemini hooks inside ad auctions. This pays for TPUs - and turns science into clickbait infrastructure.',
        left: {
          text: 'Allow limited ad experimentation.',
          effects: { capital: 7, hype: 2, compute: 4, safety: -5 },
          relations: { partner: 8, board: 6, staff: -5, public: -3 },
          tags: ['aggressive'],
          setFlags: { ads_hooks: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Refuse. Keep science off the auction block.',
          effects: { capital: -4, hype: 2, compute: -2, safety: 5 },
          relations: { partner: -6, board: -5, staff: 6, public: 4 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        }
      },
      demis_pressure_nobel_rumor: {
        speaker: 'Nature Editor Contact',
        avatar: 'engineer',
        text: 'Rumors of prize committees circulating your topology result. Stay humble and keep publishing - or let Alphabet PR build a genius myth.',
        left: {
          text: 'Stay humble. More papers, less myth.',
          effects: { capital: -1, hype: 3, compute: 1, safety: 3 },
          relations: { public: 4, staff: 5, board: -1 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Let PR build the myth. Fundraise off glory.',
          effects: { capital: 5, hype: 7, compute: 2, safety: -2 },
          relations: { public: 8, board: 4, staff: -2 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },
      demis_pressure_pi: {
        speaker: 'Principal Investigator',
        avatar: 'engineer',
        text: 'I am one email from leaving with my whole group. Promise a research charter with teeth - or watch the brain drain begin.',
        left: {
          text: 'Promise a charter with board-facing teeth.',
          effects: { capital: -3, hype: 2, compute: 2, safety: 4 },
          relations: { staff: 12, board: -4 },
          tags: ['alliance'],
          setFlags: { research_charter: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'I cannot promise what Alphabet will not sign.',
          effects: { capital: 1, hype: -2, compute: -5, safety: 0 },
          relations: { staff: -12 },
          tags: ['betrayal'],
          delay: { turns: 2, log: 'A star team exits for a smaller lab.', effects: { compute: -5, hype: -3 }, relations: { staff: -4, public: -2 } },
          next: 'demis_loop_hub'
        }
      },
      demis_pressure_ethics: {
        speaker: 'Google Ethics Lead',
        avatar: 'friend',
        text: 'Low-filter enterprise Gemini is creating quiet internal resign threats. Revisit the SKU - or accept a values split inside the company.',
        left: {
          text: 'Tighten the enterprise SKU filters.',
          effects: { capital: -4, hype: 1, compute: 0, safety: 6 },
          relations: { staff: 6, partner: -4, public: 3 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Keep the SKU. Revenue is oxygen.',
          effects: { capital: 5, hype: -2, compute: 2, safety: -5 },
          relations: { staff: -6, partner: 5, board: 3 },
          tags: ['aggressive'],
          next: 'demis_loop_hub'
        }
      },
      demis_pressure_exile_offer: {
        speaker: 'European Research Host',
        avatar: 'investor',
        text: 'A university alliance offers sanctuary compute if you walk from Alphabet control. Freedom with less empire - real, not rhetorical.',
        left: {
          text: 'Open secret talks for exile lab.',
          effects: { capital: -3, hype: 3, compute: -2, safety: 4 },
          relations: { partner: -5, staff: 5, public: 4 },
          tags: ['alliance'],
          setFlags: { exile_talks: true },
          next: 'demis_loop_hub'
        },
        right: {
          text: 'Decline. Fight remains inside.',
          effects: { capital: 2, hype: 0, compute: 3, safety: 1 },
          relations: { partner: 3, board: 2, staff: -2 },
          tags: ['cautious'],
          next: 'demis_loop_hub'
        }
      },
      demis_loop_hub: {
        speaker: 'Chief Scientist Office',
        avatar: 'friend',
        text: 'Quarterly fork: publish something beautiful, or feed the ads machine another capability.',
        left: {
          text: 'Fund a pure-science moonshot.',
          effects: { capital: -6, hype: 7, compute: -4, safety: 6 },
          next: [
            { if: { flags: { nature_paper: true } }, goto: 'demis_secret_nature' },
            { if: { minTime: 10 }, goto: 'demis_late_climate' },
            { if: { always: true }, goto: 'demis_a2_topology' }
          ]
        },
        right: {
          text: 'Push Gemini product metrics.',
          effects: { capital: 7, hype: 6, compute: 6, safety: -6 },
          next: [
            { if: { flags: { autonomy_stand: true }, minTime: 14 }, goto: 'demis_secret_secession' },
            { if: { minTime: 12 }, goto: 'demis_late_talent' },
            { if: { always: true }, goto: 'demis_a1_ship' }
          ]
        }
      }
    }
  },

  // ============================================================
  // ZHANG
  // ============================================================
  zhang: {
    start: 'zhang_a1_tsinghua',
        pressure: {
      nodes: [
        { once: true, minTime: 4, if: { flags: { grey_nvidia: true } }, goto: 'zhang_pressure_customs' },
        { once: true, minTime: 5, if: { maxRelations: { regulator: 40 } }, goto: 'zhang_pressure_takedown' },
        { once: true, minTime: 6, if: { flags: { global_push: true } }, goto: 'zhang_pressure_foreign' },
        { once: true, minTime: 7, if: { maxRelations: { rival: 40 } }, goto: 'zhang_pressure_poach' },
        { once: true, minTime: 8, if: { flags: { soft_rlhf: true } }, goto: 'zhang_pressure_audit' },
        { once: true, minTime: 9, if: { minRelations: { partner: 70 } }, goto: 'zhang_pressure_soe' }
      ]
    },
nodes: {
      zhang_a1_tsinghua: {
        speaker: 'Tsinghua University Liaison',
        avatar: 'politician',
        text: 'International journals accuse our papers of being a cover for embargo bypass. Ignore and train GLM-4 - or publish a multi-author academic rebuttal?',
        left: {
          text: 'Ignore. Training is the only rebuttal.',
          effects: { capital: 5, hype: -5, compute: 7, safety: -6 },
          setFlags: { ignore_west: true },
          next: 'zhang_a1_chips'
        },
        right: {
          text: 'Publish a rigorous global rebuttal.',
          effects: { capital: -5, hype: 7, compute: -4, safety: 7 },
          setFlags: { academic_rebuttal: true },
          next: 'zhang_a1_chips'
        }
      },
      zhang_a1_chips: {
        speaker: 'Domestic Silicon Vendor',
        avatar: 'investor',
        text: 'Local accelerators: 20% slower than Nvidia, fully legal. Buy the production run - or keep grey-market Nvidia and risk a sudden cutoff.',
        left: {
          text: 'Buy domestic. Self-sufficiency first.',
          effects: { capital: -7, hype: 7, compute: 7, safety: 7 },
          setFlags: { domestic_chips: true },
          relations: { regulator: 8, partner: 4, rival: -2, staff: 3 },
          tags: ['cautious', 'alliance'],
          next: 'zhang_a2_market',
          objectiveKeys: ['card_zhang_a1_chips']
        },
        right: {
          text: 'Grey-market Nvidia. Performance first.',
          effects: { capital: -6, hype: 5, compute: 8, safety: -8 },
          setFlags: { grey_nvidia: true },
          relations: { regulator: -10, partner: -2, staff: 4, rival: 3 },
          tags: ['aggressive'],
          delay: { turns: 3, log: 'A partner asks awkward provenance questions about your clusters.', effects: { capital: -2, safety: -2 }, relations: { partner: -4, regulator: -3 } },
          next: 'zhang_a2_market',
          objectiveKeys: ['card_zhang_a1_chips']
        }
      },
      zhang_a2_market: {
        speaker: 'Marketing Director',
        avatar: 'friend',
        textVariants: [
          {
            if: { flags: { academic_rebuttal: true } },
            text: 'Your rebuttal won Western academics. Launch English docs and free credits - or harvest domestic enterprise while the goodwill lasts?'
          },
          {
            if: { always: true },
            text: 'GLM-4 crushes Chinese benchmarks. Global marketing blitz, or lock down the home enterprise market first?'
          }
        ],
        left: {
          text: 'Go global. English everything, free credits.',
          effects: { capital: -7, hype: 7, compute: -4, safety: -6 },
          setFlags: { global_push: true },
          next: 'zhang_a2_enterprise'
        },
        right: {
          text: 'Dominate domestic enterprise first.',
          effects: { capital: 7, hype: -6, compute: 6, safety: 7 },
          setFlags: { domestic_focus: true },
          next: 'zhang_a2_enterprise'
        }
      },
      zhang_a2_enterprise: {
        speaker: 'State-Backed Enterprise CEO',
        avatar: 'investor',
        text: 'Digitize our whole supply chain with Zhipu. Huge revenue - but a custom model with strict content and operational guidelines.',
        left: {
          text: 'Accept. Enterprise alignment is our moat.',
          effects: { capital: 8, hype: 6, compute: 0, safety: 7 },
          setFlags: { state_contract: true },
          next: 'zhang_a3_compliance',
          objectiveKeys: ['card_zhang_a2_enterprise']
        },
        right: {
          text: 'Reject niche filters. Stay general-purpose.',
          effects: { capital: -7, hype: -4, compute: 6, safety: -6 },
          setFlags: { generalist: true },
          next: 'zhang_a3_compliance',
          objectiveKeys: ['card_zhang_a2_enterprise']
        }
      },
      zhang_a3_compliance: {
        speaker: 'Compliance Inspector',
        avatar: 'politician',
        textVariants: [
          {
            if: { flags: { global_push: true } },
            text: 'Your bilingual chatbot discussed sensitive scenarios with foreign users. Real-time moderation now - or softer RLHF and risk a ban?'
          },
          {
            if: { flags: { grey_nvidia: true } },
            text: 'Hardware provenance questions collide with content flags. Implement hard real-time filters - or argue RLHF is enough?'
          },
          {
            if: { always: true },
            text: 'Public GLM allowed a political counterfactual thread. Hard real-time filters, or optimized RLHF without blunt walls?'
          }
        ],
        left: {
          text: 'Hard real-time filters immediately.',
          effects: { capital: -7, hype: -6, compute: -6, safety: 8 },
          setFlags: { hard_filters: true },
          next: 'zhang_a3_personal',
          objectiveKeys: ['card_zhang_a3_compliance']
        },
        right: {
          text: 'RLHF soft alignment, fewer hard walls.',
          effects: { capital: -4, hype: 6, compute: 5, safety: -7 },
          setFlags: { soft_rlhf: true },
          next: 'zhang_a3_personal',
          objectiveKeys: ['card_zhang_a3_compliance']
        }
      },
      zhang_a3_personal: {
        speaker: 'Former Student / Friend',
        avatar: 'friend',
        text: 'You used to talk about pure science. Now every week is chips, censors, and SOEs. Are you still building intelligence - or a national appliance?',
        left: {
          text: 'Intelligence can wear many uniforms.',
          effects: { capital: 5, hype: 4, compute: 5, safety: 4 },
          setFlags: { pragmatic_soul: true },
          next: 'zhang_a3_rival'
        },
        right: {
          text: 'I still want a scholar\'s frontier model.',
          effects: { capital: -4, hype: 6, compute: 0, safety: 6 },
          setFlags: { scholar_soul: true },
          next: 'zhang_a3_rival'
        }
      },
      zhang_a3_rival: {
        speaker: 'Competitor Whisper',
        avatar: 'board',
        text: 'Moonshot and Baidu are poaching your sparse-attention authors. Open-source the mechanism for prestige - or lock IP and pay retention bonuses.',
        left: {
          text: 'Open-source. Win the academic century.',
          effects: { capital: -5, hype: 7, compute: 4, safety: 6 },
          setFlags: { open_sparse: true },
          next: 'zhang_a4_gate'
        },
        right: {
          text: 'Keep proprietary. Pay to retain talent.',
          effects: { capital: -7, hype: -5, compute: 7, safety: 0 },
          setFlags: { closed_ip: true },
          next: 'zhang_a4_gate'
        }
      },
      zhang_a4_gate: {
        speaker: 'System',
        avatar: 'system',
        text: 'Embargoes, filters, and ambition resolve into one long game.',
        autoRoute: [
          { if: { flags: { global_push: true, academic_rebuttal: true, soft_rlhf: true } }, goto: 'zhang_secret_silk' },
          { if: { flags: { domestic_chips: true, state_contract: true, hard_filters: true } }, goto: 'zhang_secret_fortress' },
          { if: { flags: { open_sparse: true, scholar_soul: true } }, goto: 'zhang_secret_scholar' },
          { if: { always: true }, goto: 'zhang_loop_hub' }
        ],
        left: { text: 'Continue', next: 'zhang_loop_hub' },
        right: { text: 'Continue', next: 'zhang_loop_hub' }
      },
      zhang_secret_silk: {
        speaker: 'Overseas Academic Partner',
        avatar: 'engineer',
        text: 'We can host research-grade endpoints abroad via universities while domestic enterprise stays fully compliant. Dual track - dangerous, elegant.',
        left: {
          text: 'Launch the Silk Model dual track.',
          effects: { capital: 6, hype: 7, compute: 6, safety: 6 },
          specialEnding: 'silk_model',
          objectiveKeys: ['ending_silk_model']
        },
        right: {
          text: 'Too risky. Stay single-jurisdiction.',
          effects: { capital: 4, hype: -4, compute: 4, safety: 6 },
          next: 'zhang_loop_hub'
        }
      },
      zhang_secret_fortress: {
        speaker: 'Policy Advisor',
        avatar: 'politician',
        text: 'With domestic chips, SOE contracts, and hard filters, you can become critical national infrastructure - or remain a nimble company.',
        left: {
          text: 'Become the Domestic Fortress.',
          effects: { capital: 7, hype: 6, compute: 7, safety: 7 },
          specialEnding: 'domestic_fortress'
        },
        right: {
          text: 'Keep company agility over fortress status.',
          effects: { capital: 5, hype: 5, compute: 5, safety: 4 },
          next: 'zhang_loop_hub'
        }
      },
      zhang_secret_scholar: {
        speaker: 'Conference Chair',
        avatar: 'engineer',
        text: 'Your open sparse-attention work is keynote material. Lean fully into open scholarship and grants - or cash the prestige into product secrecy later.',
        left: {
          text: 'Commit to the Open Scholar path.',
          effects: { capital: -6, hype: 8, compute: 5, safety: 7 },
          specialEnding: 'open_scholar'
        },
        right: {
          text: 'Harvest prestige, then re-close core IP.',
          effects: { capital: 7, hype: 6, compute: 6, safety: 0 },
          next: 'zhang_loop_hub'
        }
      },
      zhang_late_export: {
        speaker: 'Trade Counsel',
        avatar: 'lawyer',
        textVariants: [
          { if: { flags: { global_push: true } }, text: 'A partner university wants on-prem GLM for joint materials research. Approve with audited filters - or refuse foreign on-prem?' },
          { if: { flags: { grey_nvidia: true } }, text: 'Customs audits are circling secondary GPU channels. Switch fully domestic next quarter, or stretch grey supply one more run?' },
          { if: { always: true }, text: 'An overseas client wants uncensored research mode behind a private VPN. Decline for policy - or build a sealed research SKU?' }
        ],
        left: {
          text: 'Compliant path: audits, domestic, sealed SKU rules.',
          effects: { capital: -4, hype: 2, compute: -2, safety: 7 },
          setFlags: { export_careful: true },
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Aggressive path: stretch reach and supply.',
          effects: { capital: 5, hype: 5, compute: 6, safety: -6 },
          setFlags: { export_aggressive: true },
          next: 'zhang_loop_hub'
        }
      },
      zhang_late_city: {
        speaker: 'Municipal AI Office',
        avatar: 'politician',
        text: 'A megacity wants GLM as the civic assistant for permits and schools. Prestige and scrutiny in equal measure.',
        left: {
          text: 'Win the civic deployment.',
          effects: { capital: 7, hype: 6, compute: -3, safety: 4 },
          setFlags: { civic_glm: true },
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Decline public admin risk.',
          effects: { capital: -2, hype: -2, compute: 4, safety: 5 },
          setFlags: { avoid_civic: true },
          next: 'zhang_loop_hub'
        }
      },
      zhang_pressure_customs: {
        speaker: 'Logistics Manager',
        avatar: 'lawyer',
        text: 'A customs inspection hit a secondary GPU shipment. Divert the story to domestic progress - or freeze grey channels immediately.',
        left: {
          text: 'Freeze grey channels tonight.',
          effects: { capital: -3, hype: 1, compute: -5, safety: 7 },
          relations: { regulator: 10, partner: 2, rival: -2 },
          tags: ['cautious'],
          setFlags: { grey_frozen: true },
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Quiet diversion. Keep supply alive.',
          effects: { capital: 2, hype: -2, compute: 5, safety: -6 },
          relations: { regulator: -8, staff: 2 },
          tags: ['aggressive'],
          delay: { turns: 2, log: 'An export-control rumor shakes domestic partners.', effects: { capital: -4, hype: -3 }, relations: { partner: -4, regulator: -3 } },
          next: 'zhang_loop_hub'
        }
      },
      zhang_pressure_takedown: {
        speaker: 'Platform Moderator Liaison',
        avatar: 'politician',
        text: 'A provincial office wants a temporary public chatbot freeze after a sensitive thread. Comply fast - or negotiate a soft shadowban.',
        left: {
          text: 'Comply. Temporary freeze.',
          effects: { capital: -3, hype: -4, compute: 0, safety: 7 },
          relations: { regulator: 12, public: -4, partner: 2 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Negotiate soft shadowban only.',
          effects: { capital: 1, hype: 2, compute: 1, safety: -3 },
          relations: { regulator: -6, public: 3 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        }
      },
      zhang_pressure_foreign: {
        speaker: 'Overseas Partner',
        avatar: 'investor',
        text: 'A London lab will co-brand a research GLM if you accept an independent safety board abroad. Prestige versus domestic messaging risk.',
        left: {
          text: 'Accept independent board. Take prestige.',
          effects: { capital: 2, hype: 6, compute: 2, safety: 4 },
          relations: { public: 6, regulator: -3, rival: -2 },
          tags: ['alliance'],
          setFlags: { foreign_board: true },
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Decline foreign board optics.',
          effects: { capital: 0, hype: -2, compute: 1, safety: 2 },
          relations: { regulator: 4, public: -2 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        }
      },
      zhang_pressure_poach: {
        speaker: 'HR Lead',
        avatar: 'friend',
        text: 'Baidu and Moonshot are raiding sparse-attention talent with housing packages. Match aggressively - or bet culture beats cash.',
        left: {
          text: 'Match packages. Keep the brain trust.',
          effects: { capital: -6, hype: 1, compute: 5, safety: 1 },
          relations: { staff: 10, rival: 3 },
          tags: ['alliance'],
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Bet on culture. Let some leave.',
          effects: { capital: 2, hype: 0, compute: -4, safety: 0 },
          relations: { staff: -6, rival: 6 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        }
      },
      zhang_pressure_audit: {
        speaker: 'Internal Auditor',
        avatar: 'board',
        text: 'Soft RLHF is failing random policy probes. Install hard filters under the hood - or document exceptions and accept risk.',
        left: {
          text: 'Install hard filters under the hood.',
          effects: { capital: -2, hype: -2, compute: -2, safety: 8 },
          relations: { regulator: 8, public: -1, staff: -2 },
          tags: ['cautious'],
          setFlags: { stealth_hard_filters: true },
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Document exceptions. Keep model fluid.',
          effects: { capital: 2, hype: 3, compute: 2, safety: -5 },
          relations: { regulator: -5, staff: 3, public: 2 },
          tags: ['aggressive'],
          next: 'zhang_loop_hub'
        }
      },
      zhang_pressure_soe: {
        speaker: 'State Partner PM',
        avatar: 'investor',
        text: 'Because we trust you, they want GLM inside logistics planning for three provinces. Enormous money. Enormous responsibility.',
        left: {
          text: 'Accept staged provincial rollout.',
          effects: { capital: 8, hype: 4, compute: -2, safety: 3 },
          relations: { partner: 10, regulator: 4, public: 2 },
          tags: ['alliance'],
          setFlags: { provincial_rollout: true },
          next: 'zhang_loop_hub'
        },
        right: {
          text: 'Pilot only in one city first.',
          effects: { capital: 3, hype: 1, compute: 1, safety: 5 },
          relations: { partner: 3, regulator: 2 },
          tags: ['cautious'],
          next: 'zhang_loop_hub'
        }
      },
      zhang_loop_hub: {
        speaker: 'Zhipu Strategy Desk',
        avatar: 'friend',
        text: 'Next move in the long game: tighten supply chain, or expand narrative influence.',
        left: {
          text: 'Harden chips, contracts, compliance.',
          effects: { capital: -6, hype: 0, compute: 6, safety: 7 },
          next: [
            { if: { flags: { domestic_chips: true, state_contract: true } }, goto: 'zhang_secret_fortress' },
            { if: { minTime: 10 }, goto: 'zhang_late_city' },
            { if: { always: true }, goto: 'zhang_a1_chips' }
          ]
        },
        right: {
          text: 'Push narrative, research, global soft power.',
          effects: { capital: -5, hype: 7, compute: 0, safety: -4 },
          next: [
            { if: { flags: { global_push: true } }, goto: 'zhang_secret_silk' },
            { if: { flags: { open_sparse: true } }, goto: 'zhang_secret_scholar' },
            { if: { minTime: 12 }, goto: 'zhang_late_export' },
            { if: { always: true }, goto: 'zhang_a2_market' }
          ]
        }
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.STORY_DATA = STORY_DATA;
}
