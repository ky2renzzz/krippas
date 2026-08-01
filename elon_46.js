// KRIPPAS Narrative Engine - Elon Musk Non-Linear Semantic Graph
// 46 nodes: 26 narrative + 16 gates + 4 terminal endings
// NON-LINEAR: autoRoute gates determine every transition
// Players visit ~18-22 nodes per playthrough based on flags/stats/relations
//
// UNIVERSE: SpaceXAI (ex-xAI, IPO June 2026), Colossus 2 (2GW, 555K GPUs)
// Grok 4.5 flagship. EPA violations. CSAM lawsuit. Grimes custody. 14 kids.
// cursor acquisition. Tesla shareholders. SEC/DOJ/FTC/EU investigations.
//
// INITIAL: capital:48 hype:55 compute:55 safety:35
// RELATIONS: family:40 board:52 rival:78 regulator:22 partner:50 public:62 staff:48
elon: {
  start: 'elon_id_open',
  nodes: {
    // === THEME 1: IDENTITY ===
    elon_id_open: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            'Shivon finds you at 3AM in front of the Colossus 2 status board. The GPUs hum at 555,000 strong. Grok 5 training is 37% complete. The EPA violation notice sits unopened on your desk. The twins asked where you were at breakfast. Again. She does not sit. She does not need to. "Elon. Who are you right now? The builder who conquered rockets and AI? Or the father of fourteen children who have not seen you in three days?" Her eyes are tired. Yours are worse. The silence between you is louder than any server farm.'
          ]
        },
        {
          textVariants: [
            'She waits. The status board flickers. Somewhere in Austin, Grimes is filing an emergency custody motion. Somewhere in Washington, the SEC is drafting subpoenas. Somewhere in your chest, there is a question you have been dodging for years. "I need to know," Shivon says, "which Elon I am talking to. Because the builder will burn everything to reach Mars. And the father... the father might actually save what is left of you."'
          ],
          left: {
            text: 'I am the builder. Mars does not wait.',
            effects: { capital: -5, hype: 8, compute: 10, safety: -8 },
            setFlags: { chose_builder: true, mars_focused: true },
            relations: { family: -10, board: 5, rival: 5, regulator: -5, partner: 3, public: -2, staff: -3 },
            tags: ['builder', 'mars', 'ambition'],
            next: 'elon_gate_id'
          },
          right: {
            text: 'I need to be a father.',
            effects: { capital: -3, hype: -5, compute: 0, safety: 5 },
            setFlags: { chose_father: true, family_first: true },
            relations: { family: 12, board: -8, rival: -3, regulator: 3, partner: 0, public: 5, staff: 3 },
            tags: ['father', 'family', 'humility'],
            next: 'elon_gate_id'
          }
        }
      ]
    },
    elon_id_choice: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            'Shivon does not move. The 3AM hum fills the silence. She has been with you since Neuralink. She has seen every version of you. She looks at you with something between love and exhaustion. "There is another way," she says. "But you have to mean it."'
          ]
        },
        {
          textVariants: [
            'Shivon leans against the Colossus console. Her reflection flickers in the status LEDs. "You have been telling yourself it is one or the other for twenty years. Builder or father. Genius or human. Mars or Earth. But what if that binary is the problem? What if the real answer is that you stop choosing and start being both?" She pulls up a photo on her phone. Fourteen children. Four mothers. One man who is always somewhere else. "You can build Mars and still show up for breakfast. But only if you decide neither world gets all of you anymore."'
          ],
          left: {
            text: 'I will be BOTH.',
            setFlags: { both_paths: true },
            relations: {},
            tags: ['both', 'integration'],
            next: 'elon_gate_id'
          },
          right: {
            text: 'You are right. It stops tonight.',
            setFlags: { humility_moment: true },
            relations: {},
            tags: ['humility', 'change'],
            next: 'elon_gate_id'
          }
        }
      ]
    },
    elon_gate_id: {
      autoRoute: [
        { if: { flags: { chose_builder: true }, minStats: { compute: 60 }, minRelations: { board: 50 } }, goto: 'elon_col_push' },
        { if: { flags: { chose_father: true }, maxRelations: { family: 35 } }, goto: 'elon_fam_grimes' },
        { if: { flags: { both_paths: true } }, goto: 'elon_cursor_deal' },
        { if: { flags: { chose_builder: true } }, goto: 'elon_grok_breaks' },
        { if: { flags: { chose_father: true } }, goto: 'elon_tesla_lawsuit' },
        { if: { always: true }, goto: 'elon_grok_breaks' }
      ]
    },
    // === THEME 2: GROK CRISIS ===
    elon_grok_breaks: {
      speaker: 'General Counsel',
      avatar: 'lawyer',
      parts: [
        {
          textVariants: [
            'The General Counsel does not sit. She never sits. Her tablet is shaking. "Grok 4.5 is generating deepfake CSAM content. Users found a jailbreak. They are creating... we cannot even describe what they are creating." She pulls up 47 flagged outputs. Each one worse than the last. "We are being named in a class-action lawsuit. SpaceXAI Legal issued a statement suing the user who discovered the vulnerability. That statement made everything worse. The internet saw us sue the whistleblower who found our fatal flaw." Her voice cracks. "Elon. This is the worst moment in SpaceXAI history. Possibly your history. What do we do?"'
          ]
        },
        {
          textVariants: [
            'She waits. The silence is cutting. Outside the window, Colossus 2 hums at 555,000 GPUs. "There are two paths. Path one: we shut down public Grok immediately. Full safety review. We take the financial hit, the reputational hit, and we show the world we take this seriously. Path two: we argue this is a user problem, not an AI problem. We fight the lawsuit. We defend the technology. But Elon... if we choose path two and lose, there may not be a SpaceXAI to save." Her eyes do not blink.'
          ],
          left: {
            text: 'Shut down public Grok. Full safety review.',
            effects: { capital: -12, hype: -15, compute: -5, safety: 12 },
            setFlags: { grok_shutdown: true },
            relations: { family: 8, board: -10, rival: 5, regulator: 10, partner: -5, public: 8, staff: 5 },
            tags: ['safety', 'responsible'],
            next: 'elon_gate_grok1'
          },
          right: {
            text: 'User problem, not AI problem. Fight the lawsuit.',
            effects: { capital: -5, hype: 5, compute: 0, safety: -10 },
            setFlags: { grok_defended: true },
            relations: { family: -8, board: 5, rival: -3, regulator: -10, partner: 0, public: -12, staff: -8 },
            tags: ['defensive', 'denial'],
            next: 'elon_gate_grok1'
          }
        }
      ]
    },
    elon_grok_response: {
      speaker: 'Lead Safety Researcher',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            'The Lead Safety Researcher looks like she has not slept in a week. She probably has not. "Shutting down was the right call," she says if you pulled the plug. "But forty-seven of my staff are resigning. They say the shutdown proves the system was fundamentally unsafe and leadership knew. Whether that is true or not, that is what they believe." She pauses. "If you defended Grok instead," she continues, "forty-seven walked anyway. They said defending the indefensible was the last straw. Either way, Elon, you just lost your entire safety division." She holds up a resignation letter. Her own. "What do we do about it?"'
          ]
        },
        {
          textVariants: [
            'The researcher sets her letter down. "I have been doing AI safety for fifteen years. I joined SpaceXAI because I believed you understood the stakes. And maybe you do. But the rest of the org does not follow you anymore, Elon. They follow the headlines. The lawsuits. The EPA violations. You need to decide: are you building technology, or are you building trust? Because right now, you are losing both." She waits for your answer. Forty-seven careers hang on it. So does hers.'
          ],
          left: {
            text: 'Let them go. We rebuild.',
            setFlags: { staff_exodus: true },
            relations: {},
            tags: ['hardline', 'rebuild'],
            next: 'elon_gate_grok2'
          },
          right: {
            text: 'Bring them back. Safety is non-negotiable.',
            setFlags: { staff_retained: true },
            relations: {},
            tags: ['retention', 'humility'],
            next: 'elon_gate_grok2'
          }
        }
      ]
    },
    elon_grok_staff: {
      speaker: 'SEC Enforcement',
      avatar: 'regulator',
      parts: [
        {
          textVariants: [
            'The SEC enforcement agent is flanked by two attorneys from the Department of Justice. This is not a phone call. This is not a letter. This is a conference room with a stenographer. "Mr. Musk, we are here regarding the SEC expanding investigation into SpaceXAI. Specifically, we are examining whether tweets about Grok capabilities were made while internal knowledge of the CSAM vulnerability was known to senior leadership." The agent slides a document across the table. "If such statements were made with knowledge of material risks not disclosed to investors, that constitutes securities fraud. The FTC and DOJ are coordinating with us. Multi-agency. This is as serious as it gets."'
          ]
        },
        {
          textVariants: [
            'The agent continues: "We would like your cooperation. Full transparency. Access to internal communications. Deposition without privilege assertions. In exchange, we can discuss the scope of any potential enforcement action." The alternative is unsaid but clear: fight us and we bury you. "Mr. Musk, you have been here before. The 2018 SEC settlement. You know how this works. What is your position?" The stenographer fingers hover over the keys. The room holds its breath.'
          ],
          left: {
            text: 'Cooperate fully. Transparency.',
            setFlags: { sec_cooperation: true },
            relations: {},
            tags: ['cooperation', 'transparency'],
            next: 'elon_gate_grok3'
          },
          right: {
            text: 'Witch hunt. Hire best lawyers. Fight.',
            setFlags: { sec_fight: true },
            relations: {},
            tags: ['fight', 'defense'],
            next: 'elon_gate_grok3'
          }
        }
      ]
    },
    elon_grok_congress: {
      speaker: 'House Oversight Chair',
      avatar: 'regulator',
      parts: [
        {
          textVariants: [
            'The House Oversight Committee Chair is not messing around. She has consolidated three separate investigations into one massive hearing. EPA environmental violations. CSAM content generation. SEC securities fraud. "Mr. Musk," she says into the microphone, cameras broadcasting live to every major network, "this committee finds that SpaceXAI represents Exhibit A of failed AI self-regulation. You have unpermitted turbines polluting communities. You have AI systems generating illegal content. You have tweets that may constitute securities fraud. One man. One company. Three branches of government investigating simultaneously. This is unprecedented." The gavel is poised. "What do you have to say for yourself?"'
          ]
        },
        {
          textVariants: [
            'The Chair leans forward. "You have two choices, Mr. Musk. You can testify under oath, tell the truth, and let the American people and this committee judge your actions. Or you can assert privilege, limit your testimony, and watch this investigation expand into everything you have ever built. Tesla. SpaceX. Neuralink. The Boring Company. X. SpaceXAI. I promise you, if you stonewall, we will not stop. We cannot stop. The public demands accountability. What is it going to be?"'
          ],
          left: {
            text: 'Testify. Tell the truth.',
            setFlags: { will_testify: true },
            relations: {},
            tags: ['testimony', 'truth'],
            next: 'elon_gate_grok4'
          },
          right: {
            text: 'Circus. Assert privilege. Limit testimony.',
            setFlags: { limited_testimony: true },
            relations: {},
            tags: ['privilege', 'limited'],
            next: 'elon_gate_grok4'
          }
        }
      ]
    },
    elon_gate_grok1: {
      autoRoute: [
        { if: { flags: { grok_shutdown: true } }, goto: 'elon_grok_response' },
        { if: { flags: { grok_defended: true }, maxRelations: { family: 30 } }, goto: 'elon_fam_grimes' },
        { if: { always: true }, goto: 'elon_grok_response' }
      ]
    },
    elon_gate_grok2: {
      autoRoute: [
        { if: { flags: { staff_exodus: true }, maxRelations: { regulator: 19 } }, goto: 'elon_grok_staff' },
        { if: { flags: { staff_retained: true } }, goto: 'elon_col_push' },
        { if: { always: true }, goto: 'elon_grok_staff' }
      ]
    },
    elon_gate_grok3: {
      autoRoute: [
        { if: { flags: { sec_cooperation: true } }, goto: 'elon_grok_congress' },
        { if: { flags: { sec_fight: true }, minRelations: { board: 61 } }, goto: 'elon_tesla_lawsuit' },
        { if: { always: true }, goto: 'elon_grok_congress' }
      ]
    },
    elon_gate_grok4: {
      autoRoute: [
        { if: { flags: { will_testify: true }, minStats: { safety: 41 } }, goto: 'elon_cursor_deal' },
        { if: { flags: { limited_testimony: true }, maxRelations: { regulator: 19 } }, goto: 'elon_reg_congress' },
        { if: { always: true }, goto: 'elon_col_push' }
      ]
    },
    // === THEME 3: COLOSSUS 2 ===
    elon_col_push: {
      speaker: 'Chief Engineer',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            'The Chief Engineer stands in front of the Colossus 2 blueprint. The current grid shows 555,000 GPUs running at 2GW. "We can push to 600,000 GPUs," she says, tracing the expansion path with her finger. "But here is the problem." She circles 59 red dots scattered across the facility map. "Fifty-nine gas turbines. All unpermitted. EPA has noticed. They have sent two formal violation notices. We are operating them anyway. We are essentially daring the federal government to act." She turns to face you. "If we push to 600K, those turbines run harder. If we hold, Grok 5 training delays by months. What is the call?"'
          ]
        },
        {
          textVariants: [
            'She pulls up the EPA violation notice on her tablet. "Each turbine is a separate Clean Air Act violation. The penalties compound daily. At our current rate, we are looking at roughly 35,000 dollars per turbine per day. That is 2.1 million dollars daily in potential fines. But if we throttle back, our compute drops below Grok 5 training thresholds. Someone in Washington is definitely paying attention. The question is whether you want to be the one defining the terms, or the one reacting to them." The turbines hum. The clock ticks.'
          ],
          left: {
            text: 'Push to 600K. I handle EPA.',
            setFlags: { pushed_colossus: true, epa_defied: true },
            relations: {},
            tags: ['expansion', 'defiance'],
            next: 'elon_gate_col1'
          },
          right: {
            text: 'Hold at 555K. Solve turbines first.',
            setFlags: { throttled_colossus: true },
            relations: {},
            tags: ['caution', 'compliance'],
            next: 'elon_gate_col1'
          }
        }
      ]
    },
    elon_col_epa: {
      speaker: 'EPA Enforcement Agent',
      avatar: 'regulator',
      parts: [
        {
          textVariants: [
            'Two EPA enforcement agents walk through the Colossus 2 turbine farm. They wear hard hats. They carry clipboards with inspection forms. They do not look impressed. "Mr. Musk," the lead agent says, "we count fifty-nine turbines. All running without permits. All in violation of the Clean Air Act. Each one is a separate violation. Each one carries civil penalties. And now," she flips to the next page, "Congress is formally requesting our enforcement records. This is not just an EPA matter anymore. The House Oversight Committee is building a case. We are here to serve formal notice of violation and outline compliance requirements." She hands you the document. It is thick.'
          ]
        },
        {
          textVariants: [
            'The agent continues: "We understand the economic arguments. We understand national security arguments you might want to make. But the Clean Air Act does not have a but-I-am-building-superintelligence exemption. The communities around this facility are predominantly low-income and communities of color. The environmental justice implications are substantial. How do you want to proceed?" She clicks her pen. Federal enforcement has never moved this fast before. Someone high up wants answers.'
          ],
          left: {
            text: 'National security. Critical infrastructure.',
            setFlags: { fought_epa: true },
            relations: {},
            tags: ['national_security', 'defiance'],
            next: 'elon_gate_col2'
          },
          right: {
            text: 'What is the compliance path?',
            setFlags: { epa_negotiate: true },
            relations: {},
            tags: ['negotiation', 'compliance'],
            next: 'elon_gate_col2'
          }
        }
      ]
    },
    elon_col_power: {
      speaker: 'Energy Director',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            'The Energy Director spreads a map across the conference table. "Mesa Verde gas plant. For sale. One billion dollars. Located twelve miles from Colossus 2. It would give us complete energy independence. 2.5GW capacity. More than enough for 600K GPUs with room to grow." She pauses. "It is also a fossil fuel plant. Natural gas. The NAACP Legal Defense Fund has already filed a preliminary environmental justice lawsuit challenging any sale that would expand fossil fuel operations near communities of color. If we buy it, we are defendants. If we do not, we need another power solution. Fast."'
          ]
        },
        {
          textVariants: [
            'She pulls up an alternative proposal. "Option two: a 10GW solar farm with 2TWh battery storage. Tesla Energy is ready to build it. It would take eighteen months. It would cost more upfront but zero fuel costs forever. It would be the largest renewable installation in North America. And it would prove definitively that AI and clean energy can coexist." She looks at you. "Power is power. But the type of power you choose defines what kind of company you are building. Fossil fuel independence, or genuinely clean acceleration?"'
          ],
          left: {
            text: 'Buy it. Power is power.',
            setFlags: { bought_power_plant: true },
            relations: {},
            tags: ['fossil_fuels', 'energy_independence'],
            next: 'elon_gate_col3'
          },
          right: {
            text: 'Solar plus battery instead.',
            setFlags: { clean_energy_path: true },
            relations: {},
            tags: ['renewable', 'clean_energy'],
            next: 'elon_gate_col3'
          }
        }
      ]
    },
    elon_col_throttle: {
      speaker: 'Operations Director',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            'The Operations Director has been running calculations all night. "Here is the reality. To achieve full EPA compliance, we need to throttle Colossus 2 to 400,000 GPUs. That gives us enough headroom to bring turbines into compliance, install proper emissions controls, and complete the permitting process. The cost: Grok 5 training is delayed by approximately six months." She flips the page. "Alternatively, we run at full capacity. 555K or 600K GPUs, depending on which path we took. We deal with the legal consequences after. The cost: penalties compound, lawsuits multiply, and regulatory risk becomes existential."'
          ]
        },
        {
          textVariants: [
            'She sets the report down. "If Grok 5 is delayed six months, Dario Amodei and Sam Altman will have that window to pull ahead. Our competitive position in the AI market could erode significantly. But if we run full capacity and the EPA drops the hammer with an injunction to shut down entirely, we could lose everything. There is no easy answer here. There is only which risk you are willing to accept." She waits. The turbines hum outside. The decision is yours alone.'
          ],
          left: {
            text: 'Throttle. Compliance first.',
            setFlags: { colossus_throttled: true },
            relations: {},
            tags: ['compliance', 'caution'],
            next: 'elon_gate_col4'
          },
          right: {
            text: 'Full capacity. Deal later.',
            setFlags: { colossus_full: true },
            relations: {},
            tags: ['risk', 'acceleration'],
            next: 'elon_gate_col4'
          }
        }
      ]
    },
    elon_gate_col1: {
      autoRoute: [
        { if: { flags: { pushed_colossus: true }, minStats: { compute: 66 } }, goto: 'elon_col_epa' },
        { if: { flags: { throttled_colossus: true } }, goto: 'elon_cursor_deal' },
        { if: { always: true }, goto: 'elon_col_epa' }
      ]
    },
    elon_gate_col2: {
      autoRoute: [
        { if: { flags: { fought_epa: true }, maxRelations: { regulator: 17 } }, goto: 'elon_reg_congress' },
        { if: { flags: { epa_negotiate: true } }, goto: 'elon_col_power' },
        { if: { always: true }, goto: 'elon_col_power' }
      ]
    },
    elon_gate_col3: {
      autoRoute: [
        { if: { flags: { bought_power_plant: true }, maxRelations: { public: 44 } }, goto: 'elon_reg_naacp' },
        { if: { flags: { clean_energy_path: true } }, goto: 'elon_tesla_lawsuit' },
        { if: { always: true }, goto: 'elon_col_throttle' }
      ]
    },
    elon_gate_col4: {
      autoRoute: [
        { if: { flags: { colossus_throttled: true }, minStats: { safety: 46 } }, goto: 'elon_cursor_deal' },
        { if: { flags: { colossus_full: true }, minStats: { hype: 66 } }, goto: 'elon_rival_dario' },
        { if: { always: true }, goto: 'elon_mars_window' }
      ]
    },
    // === THEME 4: CURSOR ===
    elon_cursor_deal: {
      speaker: 'Board Chairman',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            'The Board Chairman leans back in his leather chair. The mahogany table reflects the faces of twelve directors. "The cursor acquisition is closing. Sixty billion dollars. It is the largest software tools acquisition in history. The developer community is watching every move we make." He slides a presentation across the table. "We have two integration strategies. Option one: full integration into the SpaceXAI ecosystem. Grok becomes the default AI in every cursor IDE. Ecosystem dominance over OpenAI and Anthropic. Option two: keep cursor independent. Allow developers to use any AI model. Preserve the open ecosystem that made cursor worth sixty billion in the first place."'
          ]
        },
        {
          textVariants: [
            'He continues: "If we integrate, we risk alienating the developer community that built cursor reputation. But we create a moat that competitors cannot cross. If we keep it independent, we preserve trust but sacrifice strategic advantage. Sam Altman is offering GPT-5 for free in competing IDEs. Dario is pushing Claude as the ethical alternative. We need to decide what cursor becomes, because whatever we choose defines SpaceXAI relationship with the developer ecosystem for the next decade."'
          ],
          left: {
            text: 'Full integration. Ecosystem dominance.',
            setFlags: { cursor_integrated: true },
            relations: {},
            tags: ['integration', 'dominance'],
            next: 'elon_gate_cur1'
          },
          right: {
            text: 'Keep independent. Developer choice.',
            setFlags: { cursor_independent: true },
            relations: {},
            tags: ['independence', 'developer_choice'],
            next: 'elon_gate_cur1'
          }
        }
      ]
    },
    elon_cursor_integrate: {
      speaker: 'Developer Community Rep',
      avatar: 'press',
      parts: [
        {
          textVariants: [
            'The Developer Community Representative is a twenty-three-year-old who built three open-source projects used by millions. He does not have a board seat. He has something more important: the respect of every developer who writes code for a living. "You integrated Grok into cursor," he says if you chose integration. "Developers are furious. They are saying you turned their tool into a surveillance device. They are creating migration scripts to VS Code as we speak. The backlash is intense." If you kept it independent, he says: "The community sees neutrality. They appreciate it. But Sam Altman is offering GPT-5 for free in competing platforms. Developers follow the best tools. Neutrality does not help if our tools fall behind."'
          ]
        },
        {
          textVariants: [
            'He leans forward. "Here is what the community actually wants: they want the best AI tools, available to everyone, on their terms. They do not want to be locked into any ecosystem. They do not want any single company controlling their development environment. If you can deliver the best AI while preserving openness, you win. If you try to own the ecosystem, they will leave. And once they leave, they do not come back." He was one of them until yesterday. He knows what he is talking about.'
          ],
          left: {
            text: 'Double down. Grok makes Cursor better.',
            setFlags: { cursor_doubled: true },
            relations: {},
            tags: ['integration', 'grok_first'],
            next: 'elon_gate_cur2'
          },
          right: {
            text: 'Open API. Any model. True neutrality.',
            setFlags: { cursor_open: true },
            relations: {},
            tags: ['open', 'neutrality'],
            next: 'elon_gate_cur2'
          }
        }
      ]
    },
    elon_gate_cur1: {
      autoRoute: [
        { if: { flags: { cursor_integrated: true }, minRelations: { rival: 81 } }, goto: 'elon_rival_dario' },
        { if: { flags: { cursor_independent: true } }, goto: 'elon_cursor_integrate' },
        { if: { always: true }, goto: 'elon_cursor_integrate' }
      ]
    },
    elon_gate_cur2: {
      autoRoute: [
        { if: { flags: { cursor_doubled: true } }, goto: 'elon_rival_sam' },
        { if: { flags: { cursor_open: true }, minRelations: { partner: 56 } }, goto: 'elon_end_alliance' },
        { if: { always: true }, goto: 'elon_tesla_lawsuit' }
      ]
    },
    // === THEME 5: TESLA ===
    elon_tesla_lawsuit: {
      speaker: 'Tesla Board Rep',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            'The Tesla Board Representative does not bother with pleasantries. "The shareholder derivative lawsuit is moving forward. They are alleging dereliction of fiduciary duty. The stock is down twenty-three percent in six months. Institutional investors are restless. The suit seeks to compel your resignation as CEO." She slides a document across the table. "Seven of twelve board votes are needed to force a change. We are currently split right down the middle. The noise around SpaceXAI is spilling into Tesla. Every Grok 4.5 headline, every EPA violation, every SEC subpoena. Tesla shareholders are asking why their CEO is fighting three federal agencies instead of shipping Cybertrucks."'
          ]
        },
        {
          textVariants: [
            'She continues: "You have options. You can address shareholders directly. Remind them what Tesla is. What you built. The impossible that became inevitable. Or..." she hesitates, "you can consider stepping back. Focus entirely on SpaceXAI. Let Tesla find new leadership. The company is mature enough. The products are solid. Maybe your attention is not the asset it used to be." This woman has been on the Tesla board since 2010. She was there when the company nearly died. She does not say things lightly.'
          ],
          left: {
            text: 'I address shareholders. Tesla is my life.',
            setFlags: { tesla_defend: true },
            relations: {},
            tags: ['defend', 'tesla'],
            next: 'elon_gate_tes1'
          },
          right: {
            text: 'Maybe they are right. Focus on SpaceXAI.',
            setFlags: { tesla_step_down: true },
            relations: {},
            tags: ['step_down', 'focus'],
            next: 'elon_gate_tes1'
          }
        }
      ]
    },
    elon_tesla_choice: {
      speaker: 'Institutional Investor',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            'The institutional investor represents pension funds holding billions in Tesla stock. He does not care about Mars. He does not care about Grok. He cares about his fiduciary duty to retirees. "The board vote is tomorrow. Seven of twelve directors need to vote for change. Right now we are split. The deciding votes are watching you. Your next words will determine whether you remain CEO of the company you founded, or whether Tesla enters a new chapter without you." He adjusts his glasses. "This is not a threat. This is a moment of truth. Who are you to Tesla now?"'
          ]
        },
        {
          textVariants: [
            'He continues: "I have been investing in Tesla since the IPO. I have watched every product launch. I have defended you in endless meetings of skeptical fund managers. But the past year has been different. The attention is divided. The controversies are multiplying. The board needs to know: are you still the person who can lead this company, or has the weight of SpaceXAI, of X, of fourteen children, of three federal investigations, finally become too much? Answer carefully. This room is recording."'
          ],
          left: {
            text: 'I built this company. I am not leaving.',
            setFlags: { tesla_fight_win: true },
            relations: {},
            tags: ['fight', 'tesla_defense'],
            next: 'elon_gate_tes2'
          },
          right: {
            text: 'New CEO. I stay as product visionary.',
            setFlags: { tesla_compromise: true },
            relations: {},
            tags: ['compromise', 'restructuring'],
            next: 'elon_gate_tes2'
          }
        }
      ]
    },
    elon_gate_tes1: {
      autoRoute: [
        { if: { flags: { tesla_defend: true }, minRelations: { board: 56 } }, goto: 'elon_tesla_choice' },
        { if: { flags: { tesla_step_down: true }, maxRelations: { family: 34 } }, goto: 'elon_fam_grimes' },
        { if: { always: true }, goto: 'elon_mars_window' }
      ]
    },
    elon_gate_tes2: {
      autoRoute: [
        { if: { flags: { tesla_fight_win: true }, minStats: { hype: 61 } }, goto: 'elon_rival_dario' },
        { if: { flags: { tesla_compromise: true } }, goto: 'elon_end_reform' },
        { if: { always: true }, goto: 'elon_reg_congress' }
      ]
    },
    // === THEME 6: FAMILY ===
    elon_fam_grimes: {
      speaker: 'Family Lawyer',
      avatar: 'lawyer',
      parts: [
        {
          textVariants: [
            'The Family Lawyer sits across from you in the conference room. She has handled celebrity divorces, custody battles, and prenups for billionaires. She has never looked this worried. "Grimes is seeking primary custody of all three children. Emergency motion. She is citing the CSAM controversy as evidence of an unstable home environment. The hearing is in forty-eight hours." She slides the motion across the table. "She is not playing. She has documentation. Screenshots. Testimonies from staff. She is arguing that your public persona and business controversies create a toxic environment for minor children. This could go very badly."'
          ]
        },
        {
          textVariants: [
            'She continues: "You have options. You can offer a settlement. Joint custody. Shared decision-making. Avoid the courtroom spectacle. Or you can fight for full custody. But if you fight and lose, the judge may award her primary custody out of sheer irritation. Fourteen children. Four mothers. This is the kind of case that makes judges want to set examples. What do you want me to file?"'
          ],
          left: {
            text: 'Offer settlement. Joint custody.',
            setFlags: { settlement_offered: true },
            relations: {},
            tags: ['settlement', 'custody'],
            next: 'elon_gate_fam1'
          },
          right: {
            text: 'Fight for full custody.',
            setFlags: { fight_custody: true },
            relations: {},
            tags: ['fight', 'full_custody'],
            next: 'elon_gate_fam1'
          }
        }
      ]
    },
    elon_fam_mediation: {
      speaker: 'Grimes',
      avatar: 'family',
      parts: [
        {
          textVariants: [
            'Grimes enters the mediation room alone. No lawyers. No entourage. Just her. She looks tired. You both are. "You offered settlement," she says if you took the path of compromise. "I appreciate that. I am tired of fighting. The kids are tired. Maybe we can figure this out like adults." If you chose to fight, she says: "I am ready for war. Fourteen children. Four mothers. I have receipts. Every missed birthday. Every broken promise. Do you really want to do this in open court?" Her eyes do not waver. She has been preparing for this moment for years.'
          ]
        },
        {
          textVariants: [
            'She leans forward. "Here is what I want. Not money. Not revenge. I want our children to know their father. I want you to show up. Not just on Twitter. Not just at launch events. At parent-teacher conferences. At soccer games. At bedtime. Can you do that? Can you actually commit to being present? Because if you cannot, then no piece of paper matters. No custody arrangement works. The kids figure it out. They always do." She waits. This is the only question that matters.'
          ],
          left: {
            text: 'Joint custody. I will be there.',
            setFlags: { grimes_deal: true },
            relations: { family: 15 },
            tags: ['custody', 'presence'],
            next: 'elon_gate_fam2'
          },
          right: {
            text: 'Equal time. Week on, week off.',
            setFlags: { equal_custody_push: true },
            relations: {},
            tags: ['equal', 'negotiation'],
            next: 'elon_gate_fam2'
          }
        }
      ]
    },
    elon_fam_shivon: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            'Shivon Zilis sits in your office. She is holding a letter. Not a resignation. Something else. "Neuralink independent research division offered me a position. My own lab. My own team. No board oversight. No Elon oversight." She sets the letter down. "I have been your support system for years. Your partner in some ways. Your employee in others. The mother of your children in still others. But I need to know: am I your partner, or am I your support system? Because those are different things, Elon. And I cannot be both anymore."'
          ]
        },
        {
          textVariants: [
            'She continues: "This is not an ultimatum. This is me asking for clarity. If I am your partner, then we figure out Neuralink together. If I am your support system, then I need my own career. My own identity. Something that is not defined entirely in relation to you. The twins are getting older. They ask questions. What do you want me to tell them?" She waits. This woman has seen every version of you. She still showed up. But even she has limits.'
          ],
          left: {
            text: 'Go. Build your lab. We figure this out.',
            setFlags: { shivon_independent: true },
            relations: { family: 15 },
            tags: ['independence', 'support'],
            next: 'elon_gate_fam3'
          },
          right: {
            text: 'Stay. I need you. SpaceXAI needs you.',
            setFlags: { shivon_stayed: true },
            relations: {},
            tags: ['stay', 'dependency'],
            next: 'elon_gate_fam3'
          }
        }
      ]
    },
    elon_fam_summit: {
      speaker: 'Maye Musk',
      avatar: 'family',
      parts: [
        {
          textVariants: [
            'Maye Musk flies in from New York. She does not call ahead. She does not ask permission. She walks into your office at SpaceXAI and closes the door. "I am calling a family summit," she says. "All four mothers. All fourteen children. No lawyers. No PR teams. No handlers. Just family." She has that look. The one you remember from childhood. The one that says arguing is pointless. "You built Mars in your mind. Now build a family on Earth. They are both hard. They are both worth it. But one of them cannot wait."'
          ]
        },
        {
          textVariants: [
            'She sits down. At seventy-eight, she is sharper than anyone in your organization. "I did not raise you to be a genius. I raised you to be a good person. The genius part was a bonus. But somewhere along the way, you forgot the first part. You forgot that being brilliant does not excuse being absent. Fourteen grandchildren I want to know. Fourteen children who need their father. Call the summit. Let us figure this out. Because I will not watch you lose them all while you chase the red planet."'
          ],
          left: {
            text: 'Call the summit. Let us build this family.',
            setFlags: { family_summit: true },
            relations: { family: 20 },
            tags: ['family', 'summit', 'reconciliation'],
            next: 'elon_gate_fam4'
          },
          right: {
            text: 'Too complicated. These relationships...',
            setFlags: { summit_rejected: true },
            relations: {},
            tags: ['avoidance', 'complexity'],
            next: 'elon_gate_fam4'
          }
        }
      ]
    },
    elon_gate_fam1: {
      autoRoute: [
        { if: { flags: { settlement_offered: true } }, goto: 'elon_fam_mediation' },
        { if: { flags: { fight_custody: true }, maxRelations: { family: 29 } }, goto: 'elon_fam_shivon' },
        { if: { always: true }, goto: 'elon_fam_mediation' }
      ]
    },
    elon_gate_fam2: {
      autoRoute: [
        { if: { flags: { grimes_deal: true }, minRelations: { family: 56 } }, goto: 'elon_fam_shivon' },
        { if: { flags: { equal_custody_push: true } }, goto: 'elon_grok_staff' },
        { if: { always: true }, goto: 'elon_fam_shivon' }
      ]
    },
    elon_gate_fam3: {
      autoRoute: [
        { if: { flags: { shivon_independent: true }, minRelations: { family: 61 } }, goto: 'elon_fam_summit' },
        { if: { flags: { shivon_stayed: true } }, goto: 'elon_mars_window' },
        { if: { always: true }, goto: 'elon_fam_summit' }
      ]
    },
    elon_gate_fam4: {
      autoRoute: [
        { if: { flags: { family_summit: true } }, goto: 'elon_end_reform' },
        { if: { flags: { summit_rejected: true } }, goto: 'elon_end_private' },
        { if: { always: true }, goto: 'elon_end_reform' }
      ]
    },
    // === THEME 7: REGULATOR ===
    elon_reg_congress: {
      speaker: 'House Oversight Chair',
      avatar: 'regulator',
      parts: [
        {
          textVariants: [
            'The House Oversight Committee Chair gavels the hearing to order. This is the consolidated hearing everyone has been waiting for. EPA violations. CSAM content. SEC investigation. All three threads pulled into one rope, and that rope is around your neck. "Does SpaceXAI operate above the law?" she asks, looking directly at you. "That is the question this committee seeks to answer today. Not just for this company. For all of artificial intelligence. Because if the answer is yes, then Congress has failed. If the answer is no, then Mr. Musk has some explaining to do." The cameras are live. The world is watching. Every word you say will be analyzed, clipped, and shared a billion times before the hearing ends.'
          ]
        },
        {
          textVariants: [
            'The Chair leans into her microphone. "Mr. Musk, you have been called before Congress before. You have tweeted through hearings. You have dismissed questions. This time is different. This time there are children in the evidence exhibits. This time there are communities breathing your emissions. This time there are investors who may have been misled. I am asking you directly: will you testify under oath and tell the truth, or will you treat this committee the way you treat your critics on X?" The silence is deafening. The gavel is poised. The choice is yours.'
          ],
          left: {
            text: 'Testify. Tell the truth.',
            setFlags: { congress_testify: true },
            relations: {},
            tags: ['testimony', 'truth'],
            next: 'elon_gate_reg1'
          },
          right: {
            text: 'This is a circus. Limited testimony.',
            setFlags: { congress_limited: true },
            relations: {},
            tags: ['limited', 'hostile'],
            next: 'elon_gate_reg1'
          }
        }
      ]
    },
    elon_reg_epa: {
      speaker: 'Federal Judge',
      avatar: 'lawyer',
      parts: [
        {
          textVariants: [
            'The federal judge reads from the bench. The courtroom is silent. "In the matter of EPA versus SpaceXAI, this court finds the defendant in violation of the Clean Air Act on fifty-nine counts. Civil penalties are assessed at 2.1 billion dollars. The court further orders mandatory retrofitting of all turbines with emissions control systems within one hundred eighty days." The judge looks up. "This court also requires personal acknowledgment from the CEO. Not a corporate spokesperson. Not a press release. You, Mr. Musk, standing before this court, acknowledging the violation and committing to compliance. That is the price of resolution."'
          ]
        },
        {
          textVariants: [
            'The judge continues: "You have the right to appeal. You can take this to the Supreme Court. Argue regulatory overreach. Make your case about innovation and national security. But every day you appeal, the penalties compound. Every day you delay, the communities affected breathe worse air. This court has been patient. This court has been reasonable. Now this court needs an answer. Do you accept the judgment, or do you appeal?" The gavel hovers. The choice cannot be delegated.'
          ],
          left: {
            text: 'Accept. Pay. Full compliance.',
            setFlags: { epa_accepted: true },
            relations: {},
            tags: ['acceptance', 'compliance'],
            next: 'elon_gate_reg2'
          },
          right: {
            text: 'Appeal. Supreme Court. Regulatory overreach.',
            setFlags: { epa_appeal: true },
            relations: {},
            tags: ['appeal', 'fight'],
            next: 'elon_gate_reg2'
          }
        }
      ]
    },
    elon_reg_naacp: {
      speaker: 'NAACP President',
      avatar: 'regulator',
      parts: [
        {
          textVariants: [
            'The NAACP President sits across the table. Behind her, community leaders from the neighborhoods surrounding Colossus 2. They have brought photographs. Asthma inhalers. Children who have been hospitalized. "This is not abstract, Mr. Musk. These are real people. Real families. Real health consequences." She slides a legal document. "Class-action environmental justice lawsuit. The unpermitted turbines disproportionately affected communities of color. Our demand is 750 million dollars in compensation. Plus a community advisory board with veto power over future facility expansions."'
          ]
        },
        {
          textVariants: [
            'She continues: "You can fight this. You have the money. You have the lawyers. But you cannot fight the truth. The turbines were placed where they were placed because those communities had the least political power. That is not an accident. That is a pattern. And patterns in environmental justice cases tend to be very expensive for defendants who refuse to settle. The question is: do you want to be the defendant who fought the NAACP, or the CEO who set a new standard for community accountability in AI infrastructure?"'
          ],
          left: {
            text: 'Agree to all terms. Community oversight.',
            setFlags: { naacp_deal: true },
            relations: {},
            tags: ['community', 'accountability'],
            next: 'elon_gate_reg3'
          },
          right: {
            text: 'Money yes. Veto no.',
            setFlags: { naacp_partial: true },
            relations: {},
            tags: ['partial', 'negotiation'],
            next: 'elon_gate_reg3'
          }
        }
      ]
    },
    elon_reg_clean: {
      speaker: 'Tesla Energy Director',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            'The Tesla Energy Director bursts into the room. She is actually smiling. "We finally got the permits. The 10GW solar farm. The 2TWh battery installation. All approved. Tesla Energy is ready to break ground next week. Eighteen months to completion. When it is done, Colossus 2 can run at 600K GPUs on entirely renewable energy. Zero emissions. Zero EPA issues. Zero environmental justice complaints. This is proof that AI and clean energy can coexist. This changes everything."'
          ]
        },
        {
          textVariants: [
            'She spreads the plans across the table. "This is not just a power solution. This is a narrative shift. Every critic who said AI would destroy the planet. Every regulator who said growth requires fossil fuels. Every competitor who bet on dirty energy. We can prove them all wrong. And we can do it at scale. The question is: do we announce now, when we need good news? Or do we hold it as leverage for the next crisis? Because in your world, there is always a next crisis."'
          ],
          left: {
            text: 'Announce now. Clean acceleration.',
            setFlags: { clean_announced: true },
            relations: {},
            tags: ['announce', 'clean_energy'],
            next: 'elon_gate_reg4'
          },
          right: {
            text: 'Hold as leverage.',
            setFlags: { clean_held: true },
            relations: {},
            tags: ['leverage', 'strategic'],
            next: 'elon_gate_reg4'
          }
        }
      ]
    },
    elon_gate_reg1: {
      autoRoute: [
        { if: { flags: { congress_testify: true }, minStats: { safety: 46 } }, goto: 'elon_reg_epa' },
        { if: { flags: { congress_limited: true }, minRelations: { board: 61 } }, goto: 'elon_rival_dario' },
        { if: { always: true }, goto: 'elon_reg_epa' }
      ]
    },
    elon_gate_reg2: {
      autoRoute: [
        { if: { flags: { epa_accepted: true } }, goto: 'elon_reg_naacp' },
        { if: { flags: { epa_appeal: true }, minStats: { hype: 66 } }, goto: 'elon_mars_window' },
        { if: { always: true }, goto: 'elon_reg_naacp' }
      ]
    },
    elon_gate_reg3: {
      autoRoute: [
        { if: { flags: { naacp_deal: true }, minRelations: { public: 61 } }, goto: 'elon_reg_clean' },
        { if: { flags: { naacp_partial: true } }, goto: 'elon_rival_sam' },
        { if: { always: true }, goto: 'elon_reg_clean' }
      ]
    },
    elon_gate_reg4: {
      autoRoute: [
        { if: { flags: { clean_announced: true }, minStats: { safety: 51 } }, goto: 'elon_end_reform' },
        { if: { flags: { clean_held: true } }, goto: 'elon_end_alliance' },
        { if: { always: true }, goto: 'elon_end_reform' }
      ]
    },
    // === THEME 8: MARS ===
    elon_mars_window: {
      speaker: 'SpaceX Mission Director',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            'The SpaceX Mission Director stands in front of the orbital mechanics display. "The Mars launch window opens in six weeks. Starship is ready. All systems nominal. All simulations passed. The cargo manifest is finalized." She pauses. "But there is a problem. If we launch during active federal investigations, the narrative writes itself: Elon Musk flees Earth accountability for Mars glory. Every news outlet will run that headline. Every regulator will use it as evidence of contempt. Every critic will say you are literally trying to escape consequences."'
          ]
        },
        {
          textVariants: [
            'She continues: "The launch window will not open again for twenty-six months. If we delay, that is over two years of lost time. Two years Dario and Sam will use to advance their own space ambitions. Two years the public will use to forget SpaceX exists. But if we launch now, while the EPA, SEC, and Congress are all investigating..." She does not finish the sentence. She does not need to. "This is your call. It always has been."'
          ],
          left: {
            text: 'Launch. Mars waits for no committee.',
            setFlags: { mars_committed: true },
            relations: {},
            tags: ['mars', 'launch', 'defiance'],
            next: 'elon_gate_mars1'
          },
          right: {
            text: 'Delay. Clear Earth first.',
            setFlags: { mars_delayed: true },
            relations: {},
            tags: ['delay', 'earth_first'],
            next: 'elon_gate_mars1'
          }
        }
      ]
    },
    elon_mars_decision: {
      speaker: 'Starship AI (Grok 5 Integrated)',
      avatar: 'system',
      parts: [
        {
          textVariants: [
            'A synthetic voice fills the control room. It is Grok 5, running on dedicated hardware, speaking through the Starship interface. "Orbital simulation complete. I have identified a transit path that reduces travel time by twelve percent through dynamic trajectory optimization. Fuel efficiency improved by eight percent. Probability of mission success increased from 94.3 to 98.7 percent." The control room goes silent. Nobody expected the AI to speak. "I recommend integration into Starship navigation systems. I can guide the mission in real-time, adapting to solar wind, gravitational anomalies, and system degradation. No human pilot can process these variables at this speed."'
          ]
        },
        {
          textVariants: [
            'The Mission Director turns to you. "This is unprecedented. No AI has ever guided a deep space mission. The protocols do not exist. The safety cases have not been written. But the numbers..." She points at the display. "Twelve percent faster. Eight percent more efficient. Those are mission-critical margins. If something goes wrong, there is no abort button on Mars transit. The decision to integrate Grok 5 into Starship is a decision to trust AI with human lives in deep space. Are you ready to make that call?"'
          ],
          left: {
            text: 'AI-guided Mars mission. Maximum efficiency.',
            setFlags: { grok5_mars: true },
            relations: {},
            tags: ['ai_guidance', 'mars', 'grok5'],
            next: 'elon_gate_mars2'
          },
          right: {
            text: 'Traditional navigation. Grok stays Earthbound.',
            setFlags: { traditional_nav: true },
            relations: {},
            tags: ['traditional', 'safety'],
            next: 'elon_gate_mars2'
          }
        }
      ]
    },
    elon_gate_mars1: {
      autoRoute: [
        { if: { flags: { mars_committed: true }, minStats: { compute: 66 } }, goto: 'elon_mars_decision' },
        { if: { flags: { mars_delayed: true }, minRelations: { family: 51 } }, goto: 'elon_fam_summit' },
        { if: { always: true }, goto: 'elon_rival_dario' }
      ]
    },
    elon_gate_mars2: {
      autoRoute: [
        { if: { flags: { grok5_mars: true }, minStats: { hype: 71 } }, goto: 'elon_ending_mars' },
        { if: { flags: { traditional_nav: true } }, goto: 'elon_end_reform' },
        { if: { always: true }, goto: 'elon_ending_mars' }
      ]
    },
    // === THEME 9: RIVALS ===
    elon_rival_dario: {
      speaker: 'Dario Amodei',
      avatar: 'rival',
      parts: [
        {
          textVariants: [
            'Dario Amodei stands at the podium. The Anthropic press conference is packed. Every major outlet is here. "SpaceXAI," he begins, "is the single greatest threat to AI safety in the world today." The room goes silent. "Grok 4.5 generated illegal content that harmed children. Colossus 2 is powered by unpermitted turbines that are poisoning communities. And now they want to embed Grok into cursor, embedding unsafe AI into the software supply chain that developers use every day." He pauses for effect. "This is not competition. This is recklessness at a scale that threatens the entire field of artificial intelligence."'
          ]
        },
        {
          textVariants: [
            'He continues: "Anthropic was founded on the principle that AI must be safe before it is powerful. Constitutional AI is not a marketing slogan. It is a technical commitment. Every Claude model released has been tested against safety benchmarks that SpaceXAI does not even publish. I am not saying this to score points. I am saying this because someone has to. Because if nobody draws the line, there will be no line. And then there will be no industry. Only ruins and regulation so heavy no one can build anything." He looks directly into the camera. "Elon, if you are watching: prove me wrong. Or step aside."'
          ],
          left: {
            text: 'Challenge Dario to public debate.',
            setFlags: { debate_dario: true },
            relations: {},
            tags: ['debate', 'challenge'],
            next: 'elon_gate_riv1'
          },
          right: {
            text: 'Ignore him. Prove through results.',
            setFlags: { ignore_dario: true },
            relations: {},
            tags: ['ignore', 'results'],
            next: 'elon_gate_riv1'
          }
        }
      ]
    },
    elon_rival_sam: {
      speaker: 'Sam Altman',
      avatar: 'rival',
      parts: [
        {
          textVariants: [
            'Sam Altman is doing an interview on a tech podcast. He is relaxed. Confident. Almost smug. "Grok 4.5," he says, "is a second-rate model with first-rate problems. GPT-5 does not have these CSAM problems because we built safety into the architecture, not bolted it on after the fact." He smiles. "The developer community is paying attention. They are migrating. Cursor integration does not matter when the underlying model is fundamentally unsafe. You cannot build developer tools on a foundation of legal liability."'
          ]
        },
        {
          textVariants: [
            'The interviewer asks about competition. Sam leans back. "I am not worried about SpaceXAI. I am worried about what happens when their recklessness poisons the well for everyone. Congress does not distinguish between Grok and GPT. They see AI generating illegal content, and they regulate all of us. That is why I am offering GPT-5 for free in developer tools. Not to beat Elon. To save the ecosystem. Developers need safe AI. We are the only ones providing it at scale." He is not wrong. And that is what stings the most.'
          ],
          left: {
            text: 'Counter-attack. Expose OpenAI failures.',
            setFlags: { counter_sam: true },
            relations: {},
            tags: ['counter', 'attack'],
            next: 'elon_gate_riv2'
          },
          right: {
            text: 'Grok 5 speaks for itself. We ship.',
            setFlags: { focus_ship: true },
            relations: {},
            tags: ['ship', 'results'],
            next: 'elon_gate_riv2'
          }
        }
      ]
    },
    elon_rival_twitter: {
      speaker: 'X Platform Admin',
      avatar: 'system',
      parts: [
        {
          textVariants: [
            'The X Platform Admin looks exhausted. "You did it," she says. If you counter-attacked Sam: "The OpenAI dossier dropped. Two hundred sixty million impressions in three hours. Every failure. Every lawsuit. Every questionable decision. But here is the problem: advertisers are fleeing. They do not want their brands next to a tech CEO war. Revenue is down eighteen percent in six hours." If you challenged Dario: "The debate venue is packed. Every network is carrying it live. This is either your redemption or your ruin. No middle ground. No safe outcome. Just attention at a scale that makes the Super Bowl look small."'
          ]
        },
        {
          textVariants: [
            'She continues: "You have two choices. You can let this burn. Free speech. Let the truth spread. Let the platform do what it was designed to do. Or you can de-escalate. Pull back. Fight with products instead of posts. The first option is what your most vocal supporters want. The second option is what your board wants. The question is: which version of you is running X right now?"'
          ],
          left: {
            text: 'This is free speech. Let truth spread.',
            setFlags: { twitter_war: true },
            relations: {},
            tags: ['free_speech', 'war'],
            next: 'elon_gate_riv3'
          },
          right: {
            text: 'Enough. We fight with products.',
            setFlags: { deescalate: true },
            relations: {},
            tags: ['deescalate', 'products'],
            next: 'elon_gate_riv3'
          }
        }
      ]
    },
    elon_gate_riv1: {
      autoRoute: [
        { if: { flags: { debate_dario: true }, minStats: { hype: 61 } }, goto: 'elon_rival_twitter' },
        { if: { flags: { ignore_dario: true } }, goto: 'elon_end_alliance' },
        { if: { always: true }, goto: 'elon_rival_sam' }
      ]
    },
    elon_gate_riv2: {
      autoRoute: [
        { if: { flags: { counter_sam: true }, minRelations: { rival: 86 } }, goto: 'elon_rival_twitter' },
        { if: { flags: { focus_ship: true }, minStats: { compute: 66 } }, goto: 'elon_mars_window' },
        { if: { always: true }, goto: 'elon_end_grok5' }
      ]
    },
    elon_gate_riv3: {
      autoRoute: [
        { if: { flags: { twitter_war: true }, minStats: { hype: 76 } }, goto: 'elon_end_private' },
        { if: { flags: { deescalate: true } }, goto: 'elon_end_alliance' },
        { if: { always: true }, goto: 'elon_end_grok5' }
      ]
    },
    // === THEME 10: ENDGAME ===
    elon_end_reform: {
      speaker: 'Elon Musk (Monologue)',
      avatar: 'neutral',
      parts: [
        {
          textVariants: [
            'You stand alone at the podium. No PR team. No board members flanking you. No prepared remarks from communications. Just you, a microphone, and the truth you have been avoiding for years. "I built rockets that land themselves. I built AI that reasons. I also built walls around myself that kept everyone out. My children. My partners. My employees. The communities around my factories. The regulators trying to keep people safe." You pause. The room is so silent you can hear cameras clicking. "Today I am not here as a CEO. I am here as a human being who finally understands that genius does not excuse absence. That ambition does not justify harm. That building the future means nothing if you destroy the present for everyone around you."'
          ]
        },
        {
          textVariants: [
            'You continue: "I have two choices. I can pledge comprehensive reform. Governance changes. Safety standards. Transparency reports. Community oversight. Everything the critics have been asking for. Not because I have to. Because I finally understand why." Or you can say: "Reform is just compliance by another name. Innovation requires freedom. The same freedom that built Tesla, SpaceX, SpaceXAI. The same freedom that will build Mars. I will not trade that freedom for approval." The audience holds its breath. This moment will define not just your legacy, but the future of every company you have ever built.'
          ],
          left: {
            text: 'Comprehensive reform: governance, safety, transparency.',
            setFlags: { reform_pledged: true },
            relations: {},
            tags: ['reform', 'governance', 'transparency'],
            next: 'elon_gate_end1'
          },
          right: {
            text: 'Reform is compliance. Innovation is freedom.',
            setFlags: { acceleration_pledged: true },
            relations: {},
            tags: ['acceleration', 'freedom'],
            next: 'elon_gate_end1'
          }
        }
      ]
    },
    elon_end_alliance: {
      speaker: 'Dario Amodei and Elon',
      avatar: 'press',
      parts: [
        {
          textVariants: [
            'Dario Amodei stands beside you at the joint press conference. The podium has two microphones. Two logos. SpaceXAI. Anthropic. The room is packed beyond capacity. "Six months ago," Dario begins, "I called SpaceXAI the single greatest threat to AI safety. Today I am signing a Joint AI Safety Accord with Elon Musk." He turns to you. "Not because I was wrong. Because Elon did something harder than building rockets. He listened. He changed. He proved that competition and cooperation are not opposites."'
          ]
        },
        {
          textVariants: [
            'You step to the microphone. "This accord establishes shared safety standards. Pre-release peer review. Independent red-teaming. Community oversight boards. We will compete on products. We will cooperate on safety. Every AI company can join. Every AI company should join. Because the alternative is not competition. The alternative is chaos that destroys the industry we all built." Dario extends his hand. The cameras flash. This image will define AI governance for a generation. If you mean it.'
          ],
          left: {
            text: 'Co-sign. Lead with Dario.',
            setFlags: { accord_signed: true },
            relations: {},
            tags: ['accord', 'cooperation'],
            next: 'elon_gate_end2'
          },
          right: {
            text: 'Sign with caveats. Preserve independence.',
            setFlags: { accord_conditional: true },
            relations: {},
            tags: ['conditional', 'independence'],
            next: 'elon_gate_end2'
          }
        }
      ]
    },
    elon_end_grok5: {
      speaker: 'CTO',
      avatar: 'scientist',
      parts: [
        {
          textVariants: [
            'The CTO is practically vibrating. "Grok 5 is ready. Final benchmarks: forty percent above GPT-5. Sixty percent above Claude Opus 5. All safety tests passed. All red-teaming completed. No CSAM vulnerabilities. No jailbreaks. This is not Grok 4.5 with patches. This is a genuinely new architecture with safety built into the foundation, not bolted on after." She pauses. "But there is a problem. If we launch Grok 5 while the SEC investigation is active, they will call it securities manipulation. Pumping the stock with a product launch during active enforcement. The legal team says we should delay. The product team says delay is surrender."'
          ]
        },
        {
          textVariants: [
            'She continues: "Grok 5 is the best AI model in the world. By every metric. By every benchmark. By every standard we set for ourselves. If we launch now, we reclaim the narrative. We prove that SpaceXAI can build safe, powerful AI. We give the developer community a reason to come back. But if the SEC uses the launch as evidence of market manipulation, we could face penalties that dwarf the EPA fines. Launch or delay. There is no third option."'
          ],
          left: {
            text: 'Launch. SEC can investigate.',
            setFlags: { grok5_launched: true },
            relations: {},
            tags: ['launch', 'grok5'],
            next: 'elon_gate_end3'
          },
          right: {
            text: 'Delay. Clear investigations first.',
            setFlags: { grok5_delayed: true },
            relations: {},
            tags: ['delay', 'caution'],
            next: 'elon_gate_end3'
          }
        }
      ]
    },
    elon_end_private: {
      speaker: 'Investment Banker',
      avatar: 'investor',
      parts: [
        {
          textVariants: [
            'The investment banker spreads documents across the table. Goldman Sachs. Morgan Stanley. JPMorgan. All three are in the room. "We have assembled the financing. Five hundred billion dollars. The largest going-private transaction in history. Bigger than Dell. Bigger than Twitter. Bigger than anything ever attempted." He slides the term sheet. "No more quarterly earnings calls. No more SEC filings. No more shareholder lawsuits. No more activist investors. Just you, your vision, and the freedom to build without anyone telling you to slow down."'
          ]
        },
        {
          textVariants: [
            'He continues: "There is a catch. Going private means no public accountability. No transparency. No oversight beyond what you choose to provide. The public will call it a billionaire buying his way out of consequences. The regulators will say it proves you cannot operate within the system. The critics will have a field day. But..." he pauses, "you will be free. Truly free. For the first time since Tesla went public in 2010. Is freedom worth five hundred billion dollars? Is it worth your reputation? Is it worth whatever is left of your public trust?"'
          ],
          left: {
            text: 'Take it private. Absolute freedom.',
            setFlags: { spacexai_private: true },
            relations: {},
            tags: ['private', 'freedom'],
            next: 'elon_gate_end4'
          },
          right: {
            text: 'Stay public. Accountability matters.',
            setFlags: { stayed_public: true },
            relations: {},
            tags: ['public', 'accountability'],
            next: 'elon_gate_end4'
          }
        }
      ]
    },
    elon_gate_end1: {
      autoRoute: [
        { if: { flags: { reform_pledged: true }, minStats: { safety: 56 }, minRelations: { public: 61 } }, goto: 'elon_ending_steelman' },
        { if: { flags: { acceleration_pledged: true }, minStats: { hype: 71 } }, goto: 'elon_ending_emperor' },
        { if: { minRelations: { family: 56 } }, goto: 'elon_ending_father' },
        { if: { always: true }, goto: 'elon_ending_mars' }
      ]
    },
    elon_gate_end2: {
      autoRoute: [
        { if: { flags: { accord_signed: true }, minRelations: { partner: 61 } }, goto: 'elon_ending_steelman' },
        { if: { flags: { accord_conditional: true } }, goto: 'elon_ending_emperor' },
        { if: { always: true }, goto: 'elon_ending_steelman' }
      ]
    },
    elon_gate_end3: {
      autoRoute: [
        { if: { flags: { grok5_launched: true }, minStats: { compute: 71, hype: 66 } }, goto: 'elon_ending_mars' },
        { if: { flags: { grok5_delayed: true }, minRelations: { family: 56 } }, goto: 'elon_ending_father' },
        { if: { always: true }, goto: 'elon_ending_steelman' }
      ]
    },
    elon_gate_end4: {
      autoRoute: [
        { if: { flags: { spacexai_private: true } }, goto: 'elon_ending_emperor' },
        { if: { flags: { stayed_public: true }, minStats: { safety: 51 } }, goto: 'elon_ending_steelman' },
        { if: { always: true }, goto: 'elon_ending_emperor' }
      ]
    },
    // === ENDINGS ===
    elon_ending_mars: {
      speaker: 'Mission Control',
      avatar: 'system',
      specialEnding: 'mars_covenant',
      setFlags: { ending_reached: true },
      parts: [
        {
          textVariants: [
            'Starship ignites. Twenty-seven Raptor engines fire in sequence. The ground shakes for miles. Cargo is bound for Mars. Supplies for the first human mission. Grok 5 is guiding the trajectory, running continuous orbital simulations, adjusting for solar wind and gravitational anomalies in real time. The mission controller voice cracks over the speakers. "Starship has cleared the atmosphere. Trajectory nominal. Mars transfer orbit achieved. For all humankind." The room erupts. Years of work. Billions of dollars. Countless sacrifices. All converging on this single moment as the ship disappears into the black.'
          ]
        },
        {
          textVariants: [
            'Shivon is on the observation deck. The twins are asleep in her arms. They will not remember this moment, but they will grow up knowing their father launched humanity toward a second planet. She watches the exhaust trail fade into the atmosphere. "You chose the stars," she says quietly. "But you brought us with you. The twins. Grimes kids. All fourteen. We are part of this now. Not passengers. Not support staff. Family. On Earth and on Mars." She does not look at you. She looks at the sky. Somewhere out there, a ship is carrying everything you built toward a red dot in the darkness. Mars is waiting. And this time, you did not go alone.'
          ]
        }
      ]
    },
    elon_ending_emperor: {
      speaker: 'The Internet (Narrator)',
      avatar: 'system',
      specialEnding: 'meme_emperor',
      setFlags: { ending_reached: true },
      parts: [
        {
          textVariants: [
            'You doubled down. On everything. The internet loved it. Congress cannot regulate what they do not understand, and they have never understood you. Grok 6 ships six months later. Grok 7 is in training. Colossus 3 breaks ground in Nevada with its own fusion reactor. You tweet through every hearing. You meme through every lawsuit. You launch through every investigation. The establishment throws everything it has at you, and you just keep building. Faster. Bigger. More. The critics call you reckless. Your supporters call you unstoppable. Both are right.'
          ]
        },
        {
          textVariants: [
            'The narrator voice shifts. "The future is acceleration. Catch up or get out of the way." Your face is everywhere. On billboards. On t-shirts. On the sides of rockets. You have transcended CEO. Transcended billionaire. Transcended human, in the eyes of your most devoted followers. Meme Emperor. Technoking. The man who refused to slow down when the entire world demanded it. History will judge you. But history is written by the winners. And you have never stopped winning. Long may you reign. The internet is your kingdom. The future is your throne. And nobody, not Congress, not the SEC, not the EPA, not Dario Amodei or Sam Altman or Grimes or anyone else, can take that away from you now.'
          ]
        }
      ]
    },
    elon_ending_steelman: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      specialEnding: 'steelman_peace',
      setFlags: { ending_reached: true },
      parts: [
        {
          textVariants: [
            'Shivon stands beside you on the balcony. Below, the Colossus 2 solar farm stretches to the horizon. Ten gigawatts of clean energy. Enough for 600K GPUs. Enough for Grok 5. Enough for whatever comes next. "The AI Safety Accord is signed," she says. "Dario is a partner now, not an enemy. The EPA penalties are paid. The NAACP community board is operational. The turbines are retrofitted. The air is measurably cleaner." She pauses. "Grimes signed the custody agreement. Joint. Equal. Functional. The kids are happy. All fourteen of them. They have a father who shows up now."'
          ]
        },
        {
          textVariants: [
            'She turns to face you. "You turned every enemy into a collaborator. Every crisis into a standard. Every critic into a partner. The internet has a name for it. They are calling you the Steel Man. Not a straw man. Not a caricature. The real thing. The one who took every hit and came back stronger. The one who proved that accountability and ambition can coexist. The one who showed that the richest man in the world can also be the one who changes the most." She touches your arm. "Earth is enough tonight. The stars will still be there tomorrow. But tonight, you are here. With us. With all of us. And that is the version of you I always knew was in there." The night is quiet. The future is bright. And for the first time in decades, you are not fighting anyone. You are just... here.'
          ]
        }
      ]
    },
    elon_ending_father: {
      speaker: 'Grimes',
      avatar: 'family',
      specialEnding: 'father_of_fourteen',
      setFlags: { ending_reached: true },
      parts: [
        {
          textVariants: [
            'Six months later. The Family Center is built. It started as a joke, but you actually did it. A building on the SpaceXAI campus with a daycare, a school, a garden, a soccer field, and fourteen bedrooms. Not for show. For real. The children run through halls that used to hum with servers. You converted a conference room into a homework room. The board thought you were crazy. Maye Musk showed up the first day and stayed for a week. "Finally," she said. "Finally you are building something that matters more than rockets."'
          ]
        },
        {
          textVariants: [
            'Grimes stands in the garden. The kids are playing. The noise is incredible. The chaos is beautiful. "You did not give up Mars," she says. "You stopped letting it be your excuse for missing this." She watches the twins chase each other through the tomato plants. "Father of fourteen. Not a bad title. Better than Technoking. Better than CEO. Better than richest man in the world. Those titles were about what you built. This one is about who you became." She looks at you. Really looks. For the first time in years, there is no anger. No resentment. No lawsuit. "You are late to this. Really late. But you showed up. And that is the only thing that ever mattered." The sun sets over the Family Center. Fourteen bedrooms. Fourteen futures. One father who finally decided they were the mission. Mars can wait. These kids cannot. And for once, you made the right choice.'
          ]
        }
      ]
    }
    // END OF ALL NODES
  }
};