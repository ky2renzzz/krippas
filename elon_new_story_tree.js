// ELON MUSK - FINITE BRANCHING NARRATIVE (NO LOOPS)
// Generated 2026-07-30 for KRIPPAS
// Total nodes: 25. Decision nodes: 9. Gate/fork nodes: 5. Terminal endings: 4.
// Playthrough: ~12-16 nodes visited, ~30-45 minutes, ~8-12 Mars quarters

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
}
