zhang: { start: "n1_zhang_opens", nodes: {
zhang: { start: "n1_zhang_opens", nodes: {
// Zhang Peng Semantic Graph - Zhipu AI CEO - July 2026
// 46 nodes, non-linear narrative, autoRoute on every non-terminal
// STATS: capital hype compute safety
// RELATIONS: family board rival regulator partner public staff
// THEMES: IDENTITY(2) CHIP(4) DEEPSEEK(4) CCPPC/PARTY(4) TSINGHUA(3) FAMILY(4) BOARD(3) GLM(4) NATIONALISM(4) ENDINGS(4)
// INITIAL: capital:58 hype:52 compute:48 safety:58 | family:58 board:55 rival:60 regulator:68 partner:55 public:52 staff:62

// ============ THEME: IDENTITY (nodes 1-2) ============

// --- NODE 1 ---
n1_zhang_opens: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { ceo_mode: true } }, text: "I am Zhang Peng. Some call me the quiet architect of Beijing's AI renaissance — a label I do not reject, but also do not fully claim." },
        { if: { always: true }, text: "I am Zhang Peng. Zhipu AI is my life's work. I was born in the year of the Horse, and perhaps that explains something about my temperament — restless, driven, always pulling forward." }
      ]
    },
    {
      left: {
        text: "In 1998, I entered Tsinghua University as a computer science undergraduate. The campus felt infinite. The willow trees along the Lotus Pond whispered of scholars who came before. I was nobody — just a boy from a modest family with a head full of circuits.",
        effects: { capital: 3, hype: 1, compute: 2, safety: 2 },
        setFlags: { tsinghua_student: true, early_cs: true },
        relations: { staff: 55 },
        tags: ["tsinghua", "origins"]
      },
      right: {
        text: "Twenty-eight years later, I sit in a glass-walled office in Zhongguancun, watching my engineers debug a trillion-parameter model. The boy from the Lotus Pond now commands a company valued in the billions. The arc is strange. It does not feel the way I imagined it would.",
        effects: { capital: 5, hype: 4, compute: 3, safety: 1 },
        setFlags: { ceo_mode: true, zhongguancun: true },
        relations: { staff: 72, partner: 60 },
        tags: ["identity", "reflection"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { ceo_mode: true }, minStats: { capital: 55 }, maxRelations: { staff: 80 } }, goto: "any" },
    { if: { always: true }, goto: "n2_tsinghua_roots" }
  ]
},

// --- NODE 2 ---
n2_tsinghua_roots: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { tsinghua_student: true } }, text: "Tsinghua is not merely a university. It is a covenant. Every student who passes through its gates carries an invisible mandate — to serve the nation through knowledge." },
        { if: { always: true }, text: "When I teach at Tsinghua now, I see my younger self in the back row of the lecture hall. The hunger in their eyes is the same hunger I carried." }
      ]
    },
    {
      left: {
        text: "My doctoral advisor, Professor Sun Maosong, taught me that natural language is not just data — it is civilization encoded in symbols. Every Chinese character carries three thousand years of semantic weight. An AI that understands Chinese must understand history itself.",
        effects: { capital: 1, hype: 2, compute: 4, safety: 3 },
        setFlags: { tsinghua_rooted: true, professor_sun: true },
        relations: { staff: 58, partner: 50 },
        tags: ["tsinghua", "philosophy"]
      },
      right: {
        text: "The Tsinghua Natural Language Processing lab became my second home. We were not chasing valuations or headlines. We were chasing something purer — the dream of machines that could truly comprehend human thought. That purity still anchors me when the board pressures mount.",
        effects: { capital: 2, hype: 3, compute: 5, safety: 4 },
        setFlags: { nlp_lab: true, purist: true },
        relations: { partner: 62, staff: 65 },
        tags: ["tsinghua", "nlp"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { tsinghua_rooted: true, purist: true }, minStats: { compute: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n3_chip_sanctions" }
  ]
},

// ============ THEME: CHIP (nodes 3-6) ============

// --- NODE 3 ---
n3_chip_sanctions: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { chip_crisis: true } }, text: "The sanctions fell like a winter frost. I remember the exact moment — October 7, 2022. I was in a board meeting when my CTO sent me a single line: 'They have cut off the A100s.'" },
        { if: { always: true }, text: "America believes it can strangle China's AI ambitions by withholding silicon. They misunderstand us. Necessity is the mother of invention. Our ancestors built the Great Wall without excavators." }
      ]
    },
    {
      left: {
        text: "When the Biden administration tightened chip export controls, the immediate reaction in Beijing was panic. Every AI lab scrambled to stockpile NVIDIA GPUs like squirrels before a long winter. I told my team: do not panic. Plan.",
        effects: { capital: -5, hype: -3, compute: -8, safety: 2 },
        setFlags: { chip_crisis: true, sanctions_2022: true },
        relations: { rival: 58, regulator: 72, partner: 48 },
        tags: ["chip", "sanctions"]
      },
      right: {
        text: "I flew to Washington once, in early 2023. I met with policymakers who could not distinguish between a GPU and a CPU. They spoke of 'strategic competition' as if it were a game of Go. I thought: you are playing Go while we are building the board.",
        effects: { capital: 2, hype: 4, compute: -2, safety: -3 },
        setFlags: { washington_trip: true, strategic_patience: true },
        relations: { regulator: 75, rival: 55 },
        tags: ["chip", "diplomacy"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { chip_crisis: true }, minStats: { safety: 50 }, maxRelations: { regulator: 80 } }, goto: "any" },
    { if: { always: true }, goto: "n4_huawei_ascend" }
  ]
},

// --- NODE 4 ---
n4_huawei_ascend: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { sanctions_2022: true } }, text: "Huawei's Ascend chips became our lifeline. Ren Zhengfei and I share a certain philosophy — that a truly sovereign nation must control its own computational destiny." },
        { if: { always: true }, text: "The Ascend 910B is not as elegant as an H100. But elegance is a luxury for those who have never faced scarcity." }
      ]
    },
    {
      left: {
        text: "We invested heavily in adapting GLM to run efficiently on domestic hardware. Every percentage point of optimization became a battlefield. My engineers worked through the Spring Festival of 2023, eating dumplings at their desks while recompiling CUDA kernels for Ascend.",
        effects: { capital: -3, hype: 2, compute: 6, safety: 4 },
        setFlags: { ascend_adapted: true, spring_festival_grind: true },
        relations: { staff: 70, partner: 58, rival: 52 },
        tags: ["chip", "huawei"]
      },
      right: {
        text: "Some Western analysts mock our domestic chips as 'three generations behind.' They miss the point. A sword forged under siege is sharper than one forged in comfort. Chinese engineers are learning things about hardware-software co-design that Silicon Valley never needed to learn.",
        effects: { capital: 1, hype: 5, compute: 4, safety: 3 },
        setFlags: { chip_nationalism: true },
        relations: { rival: 62, public: 55 },
        tags: ["chip", "nationalism"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { ascend_adapted: true, chip_nationalism: true }, minStats: { compute: 45 } }, goto: "any" },
    { if: { always: true }, goto: "n5_smic_foundry" }
  ]
},

// --- NODE 5 ---
n5_smic_foundry: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { ascend_adapted: true } }, text: "SMIC's 7nm process was a miracle of reverse engineering. The engineers in Shanghai achieved what Western experts declared impossible — not once, but repeatedly." },
        { if: { always: true }, text: "I toured the SMIC facility in 2024. The cleanrooms hummed with a quiet defiance. Every wafer that emerged was a small act of technological sovereignty." }
      ]
    },
    {
      left: {
        text: "The partnership with SMIC is not transactional — it is existential. Without domestic fabrication, our models are prisoners of foreign supply chains. I have made this point repeatedly in meetings with the Ministry of Industry and Information Technology.",
        effects: { capital: 4, hype: 1, compute: 5, safety: 2 },
        setFlags: { smic_tour: true, mofcom_advocacy: true },
        relations: { regulator: 70, partner: 65, board: 58 },
        tags: ["chip", "supply_chain"]
      },
      right: {
        text: "The yield rates are still lower than TSMC. The costs are higher. But every chip produced domestically is a chip that cannot be embargoed. That is not a technical metric — it is a strategic one. The board understands this, even if the analysts do not.",
        effects: { capital: -2, hype: 3, compute: 3, safety: 5 },
        setFlags: { yield_struggle: true },
        relations: { board: 62, rival: 50, regulator: 72 },
        tags: ["chip", "strategy"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { smic_tour: true }, minStats: { compute: 50, safety: 55 }, maxRelations: { regulator: 75 } }, goto: "any" },
    { if: { always: true }, goto: "n6_chip_2040" }
  ]
},

// --- NODE 6 ---
n6_chip_2040: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { chip_nationalism: true, yield_struggle: true } }, text: "By 2040, I believe China will achieve full semiconductor independence. Not parity — independence. The distinction matters. Parity means catching up. Independence means defining the race on our own terms." },
        { if: { always: true }, text: "The chip war will be remembered as the moment China's technology sector grew up. Adolescence ended when the sanctions began." }
      ]
    },
    {
      left: {
        text: "I am sometimes asked whether the sanctions accelerated or delayed China's AI progress. The answer is both — but the acceleration was greater. Without the shock, we would still be comfortable importers, fat and lazy on NVIDIA's teat.",
        effects: { capital: 3, hype: 6, compute: -1, safety: -2 },
        setFlags: { chip_future: true, sanctions_paradox: true },
        relations: { public: 60, rival: 68, regulator: 65 },
        tags: ["chip", "future"]
      },
      right: {
        text: "Zhipu will survive the chip war not because we have the best hardware, but because we have the best algorithms. Efficiency is the ultimate weapon. A model that achieves in five billion parameters what others need fifty billion for — that is how you win a war of attrition.",
        effects: { capital: 2, hype: 4, compute: 7, safety: 3 },
        setFlags: { efficiency_doctrine: true },
        relations: { board: 60, staff: 68, rival: 55 },
        tags: ["chip", "efficiency"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { chip_future: true, efficiency_doctrine: true }, minStats: { hype: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n7_deepseek_arrival" }
  ]
},


// ============ THEME: DEEPSEEK (nodes 7-10) ============

// --- NODE 7 ---
n7_deepseek_arrival: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { deepseek_shock: true } }, text: "DeepSeek's R1 model landed like a thunderbolt. Liang Wenfeng — a hedge fund manager turned AI prophet — had done what none of us expected. He built a world-class model on a fraction of our budget." },
        { if: { always: true }, text: "January 2025. I was in Davos when the DeepSeek news broke. Western journalists swarmed me, hungry for a reaction. I smiled and said: 'Competition sharpens the blade.' Inside, I was recalculating everything." }
      ]
    },
    {
      left: {
        text: "Liang Wenfeng is an enigma. He does not come from the academic establishment. He does not play by the rules of Beijing's AI aristocracy. His hedge fund, High-Flyer, gave him independence — and independence gave him audacity. I respect that, even as he threatens my market position.",
        effects: { capital: -8, hype: -5, compute: 2, safety: 1 },
        setFlags: { deepseek_shock: true, liang_wenfeng: true },
        relations: { rival: 78, public: 65, board: 52 },
        tags: ["deepseek", "rivalry"]
      },
      right: {
        text: "The open-source release of DeepSeek-V3 was a masterstroke. It fundamentally altered the economics of the entire industry. Overnight, the value of proprietary model weights collapsed. My investors called in a panic. I told them: 'Zhipu has always been about more than weights.' I was not sure if I believed it.",
        effects: { capital: -10, hype: -8, compute: 3, safety: 2 },
        setFlags: { open_source_threat: true, investor_panic: true },
        relations: { board: 48, public: 60, rival: 80, regulator: 62 },
        tags: ["deepseek", "open_source"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { deepseek_shock: true }, minStats: { capital: 40 }, maxRelations: { rival: 85 } }, goto: "any" },
    { if: { always: true }, goto: "n8_mixture_of_experts" }
  ]
},

// --- NODE 8 ---
n8_mixture_of_experts: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { deepseek_shock: true } }, text: "DeepSeek's Mixture-of-Experts architecture was elegant. I studied their paper the night it appeared, alone in my study with a pot of Longjing tea. By dawn, I had filled twelve pages with notes." },
        { if: { always: true }, text: "MoE is not new. Google published the concept years ago. But DeepSeek made it practical at a cost that terrified the industry." }
      ]
    },
    {
      left: {
        text: "The genius of DeepSeek's approach was not the architecture itself — it was the training efficiency. They demonstrated that you could train a GPT-4-class model for under six million dollars. Six million! We had been spending fifty million and calling it frugal.",
        effects: { capital: -5, hype: 3, compute: 6, safety: -2 },
        setFlags: { moe_studied: true, cost_awakening: true },
        relations: { staff: 65, rival: 72, board: 55 },
        tags: ["deepseek", "efficiency"]
      },
      right: {
        text: "I convened an emergency meeting of our research leadership. The question was simple: can we match this? The answer was complex. Matching DeepSeek on cost meant rewriting our entire training pipeline. Matching them on performance meant admitting they had surpassed us. Neither was comfortable.",
        effects: { capital: -3, hype: -4, compute: 5, safety: 3 },
        setFlags: { emergency_meeting: true, pipeline_rethink: true },
        relations: { staff: 68, board: 50, partner: 55 },
        tags: ["deepseek", "crisis"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { cost_awakening: true, pipeline_rethink: true }, minStats: { compute: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n9_deepseek_response" }
  ]
},

// --- NODE 9 ---
n9_deepseek_response: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { pipeline_rethink: true } }, text: "Our response to DeepSeek was not reactive — it was transformative. I authorized the complete overhaul of our training infrastructure. The old way was dead. We had to be born anew." },
        { if: { always: true }, text: "Competition is the whetstone of excellence. DeepSeek sharpened us. I am not grateful to Liang Wenfeng — that would be too generous — but I am clear-eyed about what his arrival meant for our discipline." }
      ]
    },
    {
      left: {
        text: "We launched GLM-5 with a hybrid architecture — part dense, part sparse, fully optimized for Ascend hardware. The model matched DeepSeek-V3 on benchmarks while using thirty percent less inference compute. The market noticed. Our valuation stabilized.",
        effects: { capital: 8, hype: 7, compute: 8, safety: 4 },
        setFlags: { glm5_launched: true, comeback: true },
        relations: { public: 68, rival: 62, board: 62, partner: 60 },
        tags: ["deepseek", "response"]
      },
      right: {
        text: "But the deeper lesson was cultural. DeepSeek proved that a small, focused team of true believers could out-innovate a corporate bureaucracy. I began restructuring Zhipu to recapture that startup energy. Committees were dissolved. Authority was pushed downward. Some executives left. I did not stop them.",
        effects: { capital: 2, hype: 3, compute: 2, safety: -1 },
        setFlags: { restructured: true, flat_org: true },
        relations: { staff: 60, board: 52, partner: 55 },
        tags: ["deepseek", "culture"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { glm5_launched: true, restructured: true }, minStats: { capital: 55, hype: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n10_new_landscape" }
  ]
},

// --- NODE 10 ---
n10_new_landscape: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { comeback: true } }, text: "The Chinese AI landscape of 2026 is a chessboard with four players: Zhipu, DeepSeek, Baichuan, and Moonshot. Each occupies a different square. Each plays a different game." },
        { if: { always: true }, text: "The era of mono-competition is over. We no longer merely compete on model quality. We compete on ecosystems, on hardware independence, on government relationships, on narrative control." }
      ]
    },
    {
      left: {
        text: "DeepSeek remains the most dangerous competitor because they have no fear. Liang Wenfeng is playing with house money — High-Flyer's billions insulate him from the quarterly pressures that constrain me. He can afford to be radical. I must be radical within the cage of responsibility.",
        effects: { capital: -2, hype: 2, compute: -1, safety: 3 },
        setFlags: { four_player_board: true, cage_of_responsibility: true },
        relations: { rival: 75, board: 58, public: 55 },
        tags: ["deepseek", "landscape"]
      },
      right: {
        text: "Yet I would not trade places. Zhipu's moat is deeper than any single model — it is our relationship with the state, our Tsinghua network, our enterprise contracts with state-owned industries. DeepSeek can build a better model; they cannot replicate twenty years of institutional trust.",
        effects: { capital: 4, hype: 1, compute: 2, safety: 5 },
        setFlags: { institutional_moat: true },
        relations: { regulator: 72, partner: 68, board: 65 },
        tags: ["deepseek", "strategy"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { institutional_moat: true }, minStats: { safety: 58 }, maxRelations: { rival: 80 } }, goto: "any" },
    { if: { always: true }, goto: "n11_ccppc_member" }
  ]
},


// ============ THEME: CCPPC/PARTY (nodes 11-14) ============

// --- NODE 11 ---
n11_ccppc_member: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { ccppc_seated: true } }, text: "My seat on the Chinese People's Political Consultative Conference is not ceremonial. It is a channel — a direct line between the AI industry and the state. I use it carefully, respectfully, but without hesitation." },
        { if: { always: true }, text: "Some in the West see the CCPPC as a propaganda body. They are wrong. It is where China's elite negotiate the future of the nation, quietly, behind closed doors, with tea and cigarettes and the weight of history." }
      ]
    },
    {
      left: {
        text: "I was appointed to the CCPPC in 2023. The call came from a number I did not recognize. A voice said: 'Comrade Zhang, the leadership has noticed your work. They believe you can contribute to the national conversation on artificial intelligence.' I felt pride. I felt fear. Both were appropriate.",
        effects: { capital: 5, hype: 3, compute: 0, safety: 6 },
        setFlags: { ccppc_seated: true, party_trust: true },
        relations: { regulator: 75, board: 65, public: 60 },
        tags: ["party", "ccppc"]
      },
      right: {
        text: "At my first session, I spoke about the need for sovereign AI infrastructure. The room was silent. Then a senior Politburo member nodded — a small, almost imperceptible gesture. In Chinese politics, that nod was worth more than a standing ovation. I knew then that my path was aligned with the Party's vision.",
        effects: { capital: 8, hype: 5, compute: 1, safety: 7 },
        setFlags: { politburo_nod: true, aligned: true },
        relations: { regulator: 80, board: 68, partner: 62 },
        tags: ["party", "alignment"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { ccppc_seated: true, politburo_nod: true }, minStats: { safety: 60 }, maxRelations: { regulator: 85 } }, goto: "any" },
    { if: { always: true }, goto: "n12_party_obligations" }
  ]
},

// --- NODE 12 ---
n12_party_obligations: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { aligned: true } }, text: "Alignment with the Party is not servitude. It is navigation. The Party sets the river's course; I steer my boat within its banks. The skill is knowing where the banks are — and they shift." },
        { if: { always: true }, text: "Every AI model we release must pass through content security review. Some engineers chafe at this. I tell them: every nation filters its information. Ours is simply more honest about it." }
      ]
    },
    {
      left: {
        text: "The Cyberspace Administration of China requested that GLM-4 include stronger safeguards against 'harmful information.' We complied, but I negotiated — successfully — to keep the academic version uncensored for research purposes. A small victory, but a real one. In this system, victories are measured in centimeters.",
        effects: { capital: -2, hype: -3, compute: 0, safety: 8 },
        setFlags: { cac_compliance: true, academic_carveout: true },
        relations: { regulator: 78, staff: 55, partner: 52 },
        tags: ["party", "censorship"]
      },
      right: {
        text: "There are moments when the obligations weigh heavily. When I must attend Party study sessions while my competitors are shipping code. When I must smile at officials who understand nothing about transformer architectures. But I remind myself: without the Party's blessing, there is no Zhipu. This is not cynicism. This is mathematics.",
        effects: { capital: 1, hype: -2, compute: -2, safety: 5 },
        setFlags: { party_study: true, realpolitik: true },
        relations: { regulator: 82, board: 62, staff: 50 },
        tags: ["party", "obligation"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { cac_compliance: true, realpolitik: true }, minStats: { safety: 62 }, maxRelations: { regulator: 85 } }, goto: "any" },
    { if: { always: true }, goto: "n13_beijing_politics" }
  ]
},

// --- NODE 13 ---
n13_beijing_politics: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { realpolitik: true } }, text: "Beijing politics is a game of three-dimensional chess played in the dark. Alliances form and dissolve without a word being spoken. A seating arrangement at a banquet can signal more than a press release." },
        { if: { always: true }, text: "I have learned to read the subtle language of Chinese bureaucracy — the pregnant pauses, the carefully worded 'suggestions' that are actually commands, the phone calls that come at midnight." }
      ]
    },
    {
      left: {
        text: "The Ministry of Science and Technology has its own AI agenda, sometimes at odds with the Ministry of Industry. I must navigate between them like a diplomat between two empires. Neither can be offended. Both must feel that Zhipu is their natural ally.",
        effects: { capital: 3, hype: 1, compute: 1, safety: 3 },
        setFlags: { ministry_game: true, diplomat_role: true },
        relations: { regulator: 70, partner: 62, board: 58 },
        tags: ["party", "bureaucracy"]
      },
      right: {
        text: "There are factions within the Party that view AI with suspicion — as a threat to social stability, as a tool of Western cultural imperialism. I must reassure them without patronizing them. I speak of 'AI with Chinese characteristics,' and I mean it. But I also need them to stay out of my way.",
        effects: { capital: -1, hype: 2, compute: -1, safety: 6 },
        setFlags: { faction_management: true, chinese_characteristics: true },
        relations: { regulator: 76, public: 58, staff: 55 },
        tags: ["party", "factions"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { ministry_game: true, chinese_characteristics: true }, minStats: { safety: 60 } }, goto: "any" },
    { if: { always: true }, goto: "n14_party_future" }
  ]
},

// --- NODE 14 ---
n14_party_future: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { chinese_characteristics: true, diplomat_role: true } }, text: "The Party's relationship with AI will define the twenty-first century. Not just for China — for all of humanity. The Western model of unregulated AI development is a gamble with civilization's future. Our model is cautious, deliberate, but ultimately more sustainable." },
        { if: { always: true }, text: "I believe the Chinese Communist Party is genuinely attempting to harness AI for the common good. I also believe every political system eventually uses technology to entrench itself. Both things can be true." }
      ]
    },
    {
      left: {
        text: "In my CCPPC proposals, I have advocated for a 'National AI Constitution' — a framework that balances innovation with control, progress with protection. The idea has gained traction in ways that surprise even me. Perhaps because it offers the Party something it craves: legitimacy dressed in technological language.",
        effects: { capital: 5, hype: 4, compute: 2, safety: 7 },
        setFlags: { ai_constitution: true, policy_influence: true },
        relations: { regulator: 78, public: 62, board: 60 },
        tags: ["party", "policy"]
      },
      right: {
        text: "But I also carry a private fear: that the Party's embrace will become a suffocation. That the AI sector, like internet platforms before it, will be domesticated into compliance machines. I share this fear with no one — not my board, not my wife, not even my journal. But it lives in me, a small, cold stone at the bottom of my stomach.",
        effects: { capital: -3, hype: -4, compute: 1, safety: -2 },
        setFlags: { private_fear: true, suffocation_anxiety: true },
        relations: { regulator: 68, board: 52, family: 55 },
        tags: ["party", "fear"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { private_fear: true }, minStats: { safety: 55 }, maxRelations: { regulator: 80 } }, goto: "any" },
    { if: { always: true }, goto: "n15_tsinghua_network" }
  ]
},


// ============ THEME: TSINGHUA (nodes 15-17) ============

// --- NODE 15 ---
n15_tsinghua_network: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { tsinghua_rooted: true } }, text: "The Tsinghua network is China's most powerful invisible institution. Not the Party, not the military, not the state-owned enterprises — but the quiet web of Tsinghua graduates who run them all." },
        { if: { always: true }, text: "When I need a meeting with a ministry official, I do not call their office. I call a Tsinghua classmate who plays badminton with their deputy director. The meeting happens within the week." }
      ]
    },
    {
      left: {
        text: "President Xi Jinping himself is a Tsinghua man — chemical engineering, class of 1979. I have never met him personally, but I have been in rooms where his former classmates spoke of him with a familiarity that would shock outsiders. Tsinghua is the thread that stitches China's elite together.",
        effects: { capital: 4, hype: 3, compute: 0, safety: 2 },
        setFlags: { xi_connection: true, tsinghua_elite: true },
        relations: { regulator: 72, partner: 65, board: 60 },
        tags: ["tsinghua", "network"]
      },
      right: {
        text: "Some criticize the Tsinghua network as nepotism dressed in academic robes. They misunderstand. It is not about favors — it is about trust. In a system where contracts can be voided by a single party directive, personal trust is the only real currency. Tsinghua vouches for you.",
        effects: { capital: 3, hype: 2, compute: 1, safety: 3 },
        setFlags: { trust_currency: true },
        relations: { partner: 62, board: 58, regulator: 68 },
        tags: ["tsinghua", "influence"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { tsinghua_elite: true, trust_currency: true }, minStats: { capital: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n16_professor_sun" }
  ]
},

// --- NODE 16 ---
n16_professor_sun: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { professor_sun: true } }, text: "Professor Sun Maosong retired last year. At his farewell banquet, held in a private room at Da Dong Roast Duck, I was asked to give the toast. I stood, raised my glass of Maotai, and found myself unable to speak for nearly a full minute." },
        { if: { always: true }, text: "Sun Maosong shaped Chinese NLP more than any single government policy ever could. His students run the AI labs at Baidu, Alibaba, ByteDance, and Zhipu. We are his living legacy." }
      ]
    },
    {
      left: {
        text: "He was a demanding mentor. I remember a paper I wrote in 2002 — thirty-seven pages on Chinese word segmentation. He returned it covered in red ink, every page. 'You think like an engineer,' he wrote on the cover. 'Learn to think like a poet.' It was the most important criticism I ever received.",
        effects: { capital: 1, hype: 1, compute: 4, safety: 2 },
        setFlags: { sun_mentor: true, poet_engineer: true },
        relations: { staff: 60, partner: 52 },
        tags: ["tsinghua", "mentor"]
      },
      right: {
        text: "I visit him now in his retirement apartment near the old campus. He grows orchids and reads Tang Dynasty poetry. Sometimes I bring him technical papers; he reads them with the same red pen, though his hand trembles now. 'You are doing well,' he told me last time. 'But are you doing good?' I am still trying to answer.",
        effects: { capital: 0, hype: 2, compute: 1, safety: 5 },
        setFlags: { sun_retired: true, moral_question: true },
        relations: { family: 58, staff: 55 },
        tags: ["tsinghua", "legacy"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { moral_question: true }, minStats: { safety: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n17_tsinghua_legacy" }
  ]
},

// --- NODE 17 ---
n17_tsinghua_legacy: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { sun_retired: true, moral_question: true } }, text: "What will Tsinghua mean in the age of AI? This question haunts me. The university was built to train engineers for a developing nation. Now it must train philosophers for a technological civilization." },
        { if: { always: true }, text: "I have donated fifty million yuan to establish the Zhipu-Tsinghua AI Ethics Institute. Some call it reputation laundering. They do not know that I lie awake at night genuinely frightened by what we are building." }
      ]
    },
    {
      left: {
        text: "The new generation of Tsinghua students is different from mine. They are more confident, more global, more aware of their worth. But they are also more anxious. They have seen what happened to the internet generation — the crushed startups, the exiled entrepreneurs, the silenced voices. They wonder if AI will be the same story.",
        effects: { capital: 2, hype: -1, compute: 3, safety: 4 },
        setFlags: { new_generation: true, student_anxiety: true },
        relations: { public: 62, staff: 58 },
        tags: ["tsinghua", "future"]
      },
      right: {
        text: "I tell them: your generation will not be the crushed one. AI is different from the internet. The state needs us — truly needs us — for national competitiveness. That need gives us leverage that the internet entrepreneurs never had. Whether we use that leverage wisely... that is the question that keeps Professor Sun's orchids company in the night.",
        effects: { capital: 3, hype: 4, compute: 2, safety: 3 },
        setFlags: { tsinghua_complete: true, leverage_thesis: true },
        relations: { public: 65, staff: 62, regulator: 60 },
        tags: ["tsinghua", "hope"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { tsinghua_complete: true }, minStats: { safety: 55, compute: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n18_wife_children" }
  ]
},


// ============ THEME: FAMILY (nodes 18-21) ============

// --- NODE 18 ---
n18_wife_children: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { family_revealed: true } }, text: "My wife, Lin Yue, was my classmate at Tsinghua — computer science, like me. She could have been CEO of her own company. Instead, she chose to raise our children while I built Zhipu. I owe her everything. I tell her this. She says it is not enough. She is right." },
        { if: { always: true }, text: "I have two children: a daughter, sixteen, who wants to study philosophy at Oxford; and a son, twelve, who builds robots from kits and barely speaks to me." }
      ]
    },
    {
      left: {
        text: "Lin Yue sees through me in a way no board member or regulator ever could. 'You are not building AI for China,' she told me once, after I returned from a particularly patriotic speech at a Party forum. 'You are building it because you are afraid of being ordinary.' She was not wrong.",
        effects: { capital: 0, hype: -2, compute: 0, safety: 2 },
        setFlags: { family_revealed: true, lin_yue: true, wife_truth: true },
        relations: { family: 72, staff: 48 },
        tags: ["family", "marriage"]
      },
      right: {
        text: "My daughter asked me last month whether AGI would make human creativity obsolete. She was preparing a debate for her school. I started to give her the CEO answer — optimistic, forward-looking. Then I stopped. I told her the truth: I do not know. And that uncertainty is the only honest answer any AI researcher can give.",
        effects: { capital: 1, hype: -1, compute: 2, safety: 4 },
        setFlags: { daughter_question: true, honest_uncertainty: true },
        relations: { family: 68, public: 55 },
        tags: ["family", "parenting"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { family_revealed: true, wife_truth: true }, minStats: { family: 62 } }, goto: "any" },
    { if: { always: true }, goto: "n19_absent_father" }
  ]
},

// --- NODE 19 ---
n19_absent_father: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { daughter_question: true } }, text: "My son calls me 'the ghost' — because I am home so rarely that he jokes I must be a spirit haunting the apartment. He means it playfully. It cuts deeper than any criticism from a rival CEO." },
        { if: { always: true }, text: "I have missed school plays, parent-teacher conferences, birthday dinners. Each missed moment is a small stone added to a cairn of regret that I will one day have to climb." }
      ]
    },
    {
      left: {
        text: "Last Spring Festival, I promised my family five uninterrupted days. On the second day, the Shanghai municipal government called — an emergency meeting about AI regulations. I went. My daughter did not speak to me for a week. Lin Yue said nothing, which was worse.",
        effects: { capital: 2, hype: 0, compute: 0, safety: 1 },
        setFlags: { spring_festival_broken: true, ghost_father: true },
        relations: { family: 55, regulator: 70, staff: 52 },
        tags: ["family", "absence"]
      },
      right: {
        text: "There is a particular loneliness to being a Chinese father of my generation. We were raised to believe that providing for the family was love — that sacrifice was the truest expression of devotion. Our children do not accept this equation. They want presence, not provision. I understand them intellectually. But something in my bones will not let me stop working.",
        effects: { capital: -1, hype: 1, compute: 0, safety: 3 },
        setFlags: { generational_gap: true, provision_love: true },
        relations: { family: 58, public: 52 },
        tags: ["family", "generation"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { ghost_father: true, generational_gap: true }, maxRelations: { family: 65 } }, goto: "any" },
    { if: { always: true }, goto: "n20_parents_origins" }
  ]
},

// --- NODE 20 ---
n20_parents_origins: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { ghost_father: true } }, text: "My own father was a factory worker in Shenyang — a lathe operator who worked twelve-hour shifts for thirty-eight years. He never understood what I do, but he understood work. 'Whatever your hands find,' he told me, 'do it with all your strength.'" },
        { if: { always: true }, text: "My mother taught middle school mathematics in a concrete-block classroom with broken windows that let in the Manchurian winter. She died when I was twenty-four, before Zhipu, before the CCPPC, before any of it. I still calculate what she would have thought of each decision I make." }
      ]
    },
    {
      left: {
        text: "I am the first person in my family to attend university. When my Tsinghua acceptance letter arrived, my father wept. Not from joy — from relief. It meant his son would never stand at a lathe for twelve hours. It meant the cycle was broken. I think about that moment whenever I interview young engineers from village backgrounds.",
        effects: { capital: 0, hype: 1, compute: 1, safety: 1 },
        setFlags: { first_gen: true, factory_roots: true, father_wept: true },
        relations: { family: 75, staff: 58 },
        tags: ["family", "origins"]
      },
      right: {
        text: "My mother's last words to me were about mathematics. 'There is always a proof,' she said, her voice thin with the cancer that was consuming her. 'Even when you cannot see it, there is always a proof.' I have applied this to AI, to business, to politics. It is the closest thing I have to a religion.",
        effects: { capital: 1, hype: 2, compute: 5, safety: 3 },
        setFlags: { mother_words: true, always_a_proof: true },
        relations: { family: 70, staff: 60 },
        tags: ["family", "mother"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { first_gen: true, always_a_proof: true }, minStats: { family: 62 } }, goto: "any" },
    { if: { always: true }, goto: "n21_family_zurich" }
  ]
},

// --- NODE 21 ---
n21_family_zurich: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { escape_zurich_flag: true } }, text: "Zurich. The word sits in my mind like a pebble in a shoe — small, persistent, impossible to ignore. My wife has been researching international schools there. She has not told me directly, but I have seen the browser tabs." },
        { if: { always: true }, text: "A Swiss bank account, a Zurich apartment, a backup plan. Every Chinese tech billionaire has one. I swore I would be different. I am not different." }
      ]
    },
    {
      left: {
        text: "I attended the World Economic Forum in Davos last year and extended my trip to visit Zurich. I told the board it was a recruiting trip — we were courting ETH Zurich researchers. That was true. It was also a reconnaissance mission. I walked through Kreis 7, past the international school, past the clean tram stops, past a life that could be mine.",
        effects: { capital: 3, hype: 1, compute: 0, safety: -4 },
        setFlags: { escape_zurich_flag: true, zurich_recon: true },
        relations: { family: 68, board: 55, regulator: 50 },
        tags: ["family", "escape"]
      },
      right: {
        text: "Lin Yue does not push. She is too intelligent for that. She simply leaves the option visible, like a door slightly ajar. 'The children would learn German,' she mentioned once, offhand, while chopping vegetables. The knife did not pause. Neither did my heart. But something in me recorded the sentence and filed it under: futures that may become necessary.",
        effects: { capital: 0, hype: -1, compute: 0, safety: -2 },
        setFlags: { wife_zurich: true, door_ajar: true },
        relations: { family: 72, regulator: 48 },
        tags: ["family", "zurich"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { escape_zurich_flag: true, wife_zurich: true }, maxRelations: { family: 75 } }, goto: "any" },
    { if: { always: true }, goto: "n22_board_pressure" }
  ]
},


// ============ THEME: BOARD (nodes 22-24) ============

// --- NODE 22 ---
n22_board_pressure: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { investor_panic: true } }, text: "My board is a coalition of cautious capital and ambitious state funds. The state-owned investors want strategic alignment. The venture capitalists want an IPO. I sit between them like a translator between two languages that share no common root." },
        { if: { always: true }, text: "Every quarter, I face the same question: when will Zhipu go public? My answer is always the same: when we are ready, not when the market is." }
      ]
    },
    {
      left: {
        text: "After the DeepSeek shock, two board members privately suggested I step down as CEO and become Chairman — a graceful demotion disguised as a promotion. I refused. Not from ego, but because I know what would happen: a professional CEO would optimize for the IPO, strip the research culture, and turn Zhipu into another generic Chinese AI vendor. I cannot allow that.",
        effects: { capital: -2, hype: -3, compute: 1, safety: 3 },
        setFlags: { board_coup: true, refused_demotion: true },
        relations: { board: 48, staff: 62, rival: 55 },
        tags: ["board", "power"]
      },
      right: {
        text: "The board dynamics are chess, not checkers. The state representatives — from China Structural Reform Fund, from the National Integrated Circuit Industry Fund — speak softly but carry infinite weight. A single disapproving glance from them is worth more than a screaming match with a VC. I have learned to read their silences like tea leaves.",
        effects: { capital: 5, hype: 1, compute: 0, safety: 4 },
        setFlags: { state_board: true, silence_reading: true },
        relations: { board: 62, regulator: 70, partner: 58 },
        tags: ["board", "state"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { board_coup: true, state_board: true }, minStats: { capital: 50 }, maxRelations: { board: 68 } }, goto: "any" },
    { if: { always: true }, goto: "n23_valuation_dance" }
  ]
},

// --- NODE 23 ---
n23_valuation_dance: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { board_coup: true } }, text: "Zhipu's valuation in mid-2026 hovers around twenty billion dollars. It is both enormous and fragile — a sandcastle that a single wave of bad news could dissolve. I manage this number the way a tightrope walker manages his center of gravity." },
        { if: { always: true }, text: "Valuation is a story we tell the market. The story must be compelling enough to attract capital but honest enough to survive scrutiny. It is the hardest kind of fiction." }
      ]
    },
    {
      left: {
        text: "We raised two billion dollars in our Series D round — the largest AI fundraising in Chinese history at the time. The night the term sheets were signed, I did not celebrate. I sat in my office and recalculated our burn rate for the hundredth time. More money means more expectations. More expectations mean less freedom.",
        effects: { capital: 12, hype: 8, compute: 3, safety: -2 },
        setFlags: { series_d: true, two_billion: true, freedom_cost: true },
        relations: { board: 65, partner: 60, public: 62 },
        tags: ["board", "funding"]
      },
      right: {
        text: "The foreign investors — Sequoia China, Hillhouse, Tiger Global — bring more than money. They bring an expectation of Western-style governance, of transparency, of returns measured in quarters not decades. I accommodate them as much as I can without surrendering control. Sometimes this feels like diplomacy. Sometimes it feels like prostitution.",
        effects: { capital: 6, hype: 3, compute: 0, safety: -1 },
        setFlags: { foreign_capital: true, governance_tension: true },
        relations: { board: 58, partner: 55, regulator: 62 },
        tags: ["board", "foreign"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { series_d: true, foreign_capital: true }, minStats: { capital: 60, hype: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n24_board_future" }
  ]
},

// --- NODE 24 ---
n24_board_future: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { series_d: true, state_board: true } }, text: "The board's patience is finite. I calculate I have eighteen months — perhaps twenty-four — before the pressure for an IPO becomes irresistible. The clock ticks in every board meeting, louder than any voice in the room." },
        { if: { always: true }, text: "I have a plan. It is risky, it is unorthodox, and it depends on factors I cannot fully control. But if it works, Zhipu will emerge not as a listed company but as something more valuable: an indispensable national asset." }
      ]
    },
    {
      left: {
        text: "My strategy is to make Zhipu too strategically important to be treated as a mere commercial entity. When your models power the military's logistics, the central bank's forecasting, and the propaganda department's content generation, you are no longer a company — you are infrastructure. Infrastructure does not need to IPO. Infrastructure needs to be protected.",
        effects: { capital: 4, hype: 2, compute: 5, safety: 6 },
        setFlags: { infrastructure_play: true, too_big_to_ipo: true },
        relations: { regulator: 75, board: 60, partner: 65 },
        tags: ["board", "strategy"]
      },
      right: {
        text: "The state investors on my board understand this instinctively. The VCs resist — their fund lifecycles demand exits. The tension is productive, for now. But I know that one day I may have to choose between the state's embrace and the market's demands. On that day, I already know which side I will choose. The board suspects this. That is why some of them are nervous.",
        effects: { capital: 2, hype: 1, compute: 1, safety: 5 },
        setFlags: { board_showdown_coming: true, state_choice: true },
        relations: { board: 52, regulator: 78, partner: 55 },
        tags: ["board", "showdown"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { infrastructure_play: true, board_showdown_coming: true }, minStats: { safety: 62 } }, goto: "any" },
    { if: { always: true }, goto: "n25_glm_architecture" }
  ]
},


// ============ THEME: GLM (nodes 25-28) ============

// --- NODE 25 ---
n25_glm_architecture: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { glm5_launched: true } }, text: "GLM-5 was a triumph disguised as a comeback. But the architecture that powers it — the General Language Model framework — represents something deeper than any single release. It is the codification of a philosophy." },
        { if: { always: true }, text: "Our GLM architecture differs fundamentally from the GPT lineage. We use bidirectional attention with autoregressive blank infilling — a hybrid approach that captures Chinese semantics more naturally than unidirectional models ever could." }
      ]
    },
    {
      left: {
        text: "The decision to pursue a novel architecture, rather than cloning the Transformer, was made in 2019. Many of my advisors called it reckless. 'The Americans have proven what works,' they said. 'Why deviate?' Because proving what works for English does not prove what works for Chinese. Because following is how you stay behind forever.",
        effects: { capital: -3, hype: 4, compute: 7, safety: 2 },
        setFlags: { glm_origins: true, architecture_bet: true, not_cloning: true },
        relations: { staff: 65, rival: 55, partner: 52 },
        tags: ["glm", "architecture"]
      },
      right: {
        text: "Chinese is a language of context. A single character can mean five different things depending on what surrounds it. English models handle this with brute-force attention; GLM handles it with architectural elegance. I am biased, of course. But the benchmarks do not lie.",
        effects: { capital: 2, hype: 5, compute: 5, safety: 3 },
        setFlags: { chinese_advantage: true, benchmark_vindication: true },
        relations: { public: 60, rival: 58, staff: 62 },
        tags: ["glm", "chinese"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { architecture_bet: true, chinese_advantage: true }, minStats: { compute: 60 } }, goto: "any" },
    { if: { always: true }, goto: "n26_glm_multimodal" }
  ]
},

// --- NODE 26 ---
n26_glm_multimodal: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { glm_origins: true } }, text: "Language is only one dimension of intelligence. GLM-5V — our vision-language model — can read a Tang Dynasty painting and describe not just what it depicts, but what it means. That is the difference between recognition and understanding." },
        { if: { always: true }, text: "We are building towards omni-modal intelligence — text, image, video, audio, code, and sensor data flowing through a single unified architecture. The technical challenges are immense. The philosophical implications are terrifying." }
      ]
    },
    {
      left: {
        text: "Last month, GLM-5V analyzed a classical Chinese ink-wash painting — 'Dwelling in the Fuchun Mountains' by Huang Gongwang. The model identified not just the brushwork technique and the landscape features, but the Daoist philosophy embedded in the composition. My art historian friends were unsettled. My engineers were triumphant. I was both.",
        effects: { capital: 1, hype: 6, compute: 6, safety: 2 },
        setFlags: { multimodal_leap: true, art_understanding: true },
        relations: { public: 65, staff: 68, partner: 58 },
        tags: ["glm", "multimodal"]
      },
      right: {
        text: "The danger of multimodal AI is not that it will become too intelligent. It is that it will become too convincing. When a machine can generate a video indistinguishable from reality, what happens to truth? I raise this question in internal meetings. My product team wants to ship features. My ethics team wants to block them. I must decide. Every time, I must decide.",
        effects: { capital: 2, hype: 3, compute: 3, safety: -3 },
        setFlags: { truth_crisis: true, ethics_tension: true },
        relations: { staff: 55, regulator: 65, public: 58 },
        tags: ["glm", "ethics"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { multimodal_leap: true, truth_crisis: true }, minStats: { compute: 60 } }, goto: "any" },
    { if: { always: true }, goto: "n27_glm_enterprise" }
  ]
},

// --- NODE 27 ---
n27_glm_enterprise: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { infrastructure_play: true } }, text: "Enterprise is where AI becomes real. Not in research papers, not in demo videos, not in breathless media coverage — but in the factory floors, the hospital wards, the government offices where our models are actually deployed." },
        { if: { always: true }, text: "Zhipu's enterprise business powers over two hundred state-owned enterprises. Sinopec uses GLM for oil exploration analysis. The People's Bank of China uses it for economic forecasting. These are not glamorous use cases. They are the circulatory system of the nation." }
      ]
    },
    {
      left: {
        text: "I personally negotiated the contract with the State Grid Corporation — China's electricity monopoly. Their director, a grizzled engineer from Harbin, spent three hours grilling me on model interpretability. He did not care about benchmark scores. He cared about whether he could explain a blackout-prediction to the Premier. That conversation shaped our entire enterprise product roadmap.",
        effects: { capital: 8, hype: 1, compute: 3, safety: 5 },
        setFlags: { state_grid: true, enterprise_pivot: true, interpretability: true },
        relations: { partner: 70, regulator: 72, staff: 60 },
        tags: ["glm", "enterprise"]
      },
      right: {
        text: "The enterprise contracts are our fortress. While competitors chase consumer hype, we build moats of recurring revenue and institutional dependency. A government agency that has integrated GLM into its workflows will not switch to DeepSeek because of a five-point benchmark improvement. Switching costs are the best competitive advantage in the world.",
        effects: { capital: 6, hype: -2, compute: 2, safety: 4 },
        setFlags: { enterprise_moat: true, switching_costs: true },
        relations: { partner: 68, rival: 55, board: 62 },
        tags: ["glm", "moat"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { enterprise_moat: true, switching_costs: true }, minStats: { capital: 62 } }, goto: "any" },
    { if: { always: true }, goto: "n28_glm_agi" }
  ]
},

// --- NODE 28 ---
n28_glm_agi: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { truth_crisis: true, enterprise_moat: true } }, text: "AGI. Artificial General Intelligence. The phrase is a Rorschach test — everyone sees what they want to see. For investors, it means infinite returns. For regulators, it means existential risk. For me, it means the end of a journey I started in Professor Sun's NLP lab thirty years ago." },
        { if: { always: true }, text: "I believe GLM will achieve AGI within ten years. I also believe I will not be the one to announce it. The person who announces AGI will be the person who defines what AGI means — and that definition will be political, not technical." }
      ]
    },
    {
      left: {
        text: "We have a skunkworks team — twelve researchers, no outside contact, working on what I call 'Project Chang'e' after the moon goddess. Their mandate is simple: achieve recursive self-improvement. Their quarterly reports are terrifying and exhilarating in equal measure. I read them alone, late at night, with the door locked.",
        effects: { capital: -1, hype: 4, compute: 8, safety: -5 },
        setFlags: { project_change: true, recursive_self_improvement: true, skunkworks: true },
        relations: { staff: 62, board: 48 },
        tags: ["glm", "agi"]
      },
      right: {
        text: "The paradox of AGI work is that you cannot control what you are trying to create. By definition, a system smarter than its creators will find ways around their constraints. I know this. And yet I proceed. Not because I am reckless — because I believe that someone will build AGI, and I would rather it be someone who has spent thirty years contemplating Professor Sun's question: 'But are you doing good?'",
        effects: { capital: 2, hype: 5, compute: 6, safety: -3 },
        setFlags: { agi_paradox: true, suns_question_haunting: true },
        relations: { staff: 65, public: 58, regulator: 62 },
        tags: ["glm", "agi"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { project_change: true, agi_paradox: true }, minStats: { compute: 65 } }, goto: "any" },
    { if: { always: true }, goto: "n29_national_ai_strategy" }
  ]
},


// ============ THEME: NATIONALISM (nodes 29-32) ============

// --- NODE 29 ---
n29_national_ai_strategy: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { infrastructure_play: true, chinese_characteristics: true } }, text: "China's national AI strategy is the most ambitious technological mobilization since the Manhattan Project. The difference is that this project is public, peacetime, and measured in decades rather than years." },
        { if: { always: true }, text: "By 2030, the state plan calls for China to be the world's preeminent AI power. I helped draft sections of that plan. I believe in it. I also know exactly how fragile its assumptions are." }
      ]
    },
    {
      left: {
        text: "The 'New Generation Artificial Intelligence Development Plan' is not merely a policy document. It is a declaration of intent. When the State Council issues such a plan, every ministry, every province, every state-owned enterprise aligns its resources accordingly. The coordination is what the West fundamentally misunderstands — they see scattered efforts; they do not see the invisible hand that orchestrates them.",
        effects: { capital: 5, hype: 6, compute: 4, safety: 5 },
        setFlags: { national_plan: true, invisible_hand: true, coordination_advantage: true },
        relations: { regulator: 78, public: 65, partner: 62 },
        tags: ["nationalism", "strategy"]
      },
      right: {
        text: "But central planning has limits that the market does not. The Soviet Union tried to plan innovation and produced stagnation. China learned this lesson. The state sets the direction; companies like Zhipu provide the dynamism. It is a hybrid model that the West has no vocabulary for — neither capitalist nor communist, but something new that is still searching for its name.",
        effects: { capital: 3, hype: 2, compute: 2, safety: 3 },
        setFlags: { hybrid_model: true, soviet_lesson: true },
        relations: { regulator: 70, board: 58, public: 60 },
        tags: ["nationalism", "economics"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { national_plan: true, hybrid_model: true }, minStats: { hype: 58, safety: 58 } }, goto: "any" },
    { if: { always: true }, goto: "n30_tech_nationalism" }
  ]
},

// --- NODE 30 ---
n30_tech_nationalism: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { national_plan: true, chip_nationalism: true } }, text: "Techno-nationalism is the defining ideology of twenty-first century China. It is not about xenophobia — it is about sovereignty. Just as a nation controls its borders, its currency, and its laws, it must control its technological destiny." },
        { if: { always: true }, text: "I am often asked by Western journalists whether I am a nationalist. I answer: I am a realist who happens to be Chinese. My realism tells me that technological dependence is a form of colonial subjugation. My Chineseness tells me that we have experienced enough of that." }
      ]
    },
    {
      left: {
        text: "The Century of Humiliation — 1839 to 1949 — is not ancient history to us. It is living memory, transmitted through families like mine. My great-grandfather watched foreign warships sail up the Yangtze. When Americans lecture China about 'responsible AI development,' they do not hear the echoes of the Opium War lectures about 'responsible trade.' We do.",
        effects: { capital: 0, hype: 5, compute: 1, safety: 3 },
        setFlags: { century_humiliation: true, historical_memory: true, opium_echo: true },
        relations: { public: 68, rival: 65, regulator: 70 },
        tags: ["nationalism", "history"]
      },
      right: {
        text: "But nationalism is also a trap. It can justify incompetence — 'buy domestic' becomes an excuse for inferior products. It can justify repression — 'national security' becomes a cudgel against dissent. I navigate this tension daily. I wave the flag when necessary and critique in private when I must. It is not hypocrisy. It is survival.",
        effects: { capital: 2, hype: 3, compute: 0, safety: 4 },
        setFlags: { nationalism_trap: true, flag_waving: true, survival_pragmatism: true },
        relations: { regulator: 72, board: 55, public: 62 },
        tags: ["nationalism", "pragmatism"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { opium_echo: true, nationalism_trap: true }, minStats: { safety: 58 } }, goto: "any" },
    { if: { always: true }, goto: "n31_cultural_ai" }
  ]
},

// --- NODE 31 ---
n31_cultural_ai: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { art_understanding: true } }, text: "AI with Chinese characteristics must do more than speak Chinese — it must think Chinese. It must understand the Analects, the Dao, the strategic logic of Sun Tzu. Not as translated texts, but as lived cognitive frameworks." },
        { if: { always: true }, text: "Western AI models are trained predominantly on English internet data. This means they are trained on Western cultural assumptions. An AI that cannot distinguish between 'face' (mianzi) and 'honor' cannot serve Chinese society." }
      ]
    },
    {
      left: {
        text: "We trained GLM on a carefully curated corpus of classical Chinese texts — the Twenty-Four Histories, the Complete Tang Poems, the imperial examination essays. The model learned patterns of thought that are invisible to GPT. When it generates text about loyalty, it draws on two thousand years of Confucian discourse, not on Reddit threads.",
        effects: { capital: 2, hype: 6, compute: 5, safety: 3 },
        setFlags: { classical_corpus: true, confucian_ai: true, cultural_sovereignty: true },
        relations: { public: 68, regulator: 72, partner: 58 },
        tags: ["nationalism", "culture"]
      },
      right: {
        text: "Some Western critics call this 'indoctrination.' They miss the point. Every AI system encodes values. The choice is not between value-laden and neutral AI — neutral AI is a myth. The choice is whose values get encoded. I choose to encode Chinese values because I am Chinese, just as OpenAI encodes American values because they are American. The difference is only that they pretend otherwise.",
        effects: { capital: 1, hype: 4, compute: 1, safety: 2 },
        setFlags: { values_argument: true, neutrality_myth: true },
        relations: { public: 62, rival: 60, regulator: 65 },
        tags: ["nationalism", "values"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { cultural_sovereignty: true, values_argument: true }, minStats: { hype: 58 } }, goto: "any" },
    { if: { always: true }, goto: "n32_silk_model" }
  ]
},

// --- NODE 32 ---
n32_silk_model: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { cultural_sovereignty: true, confucian_ai: true } }, text: "The Silk Model initiative is my most ambitious geopolitical play. Just as the ancient Silk Road connected civilizations through trade, the Silk Model will connect the Global South through AI — built on Chinese infrastructure, trained on diverse languages, and offered as an alternative to American technological hegemony." },
        { if: { always: true }, text: "We are launching GLM in Arabic, Swahili, Bahasa Indonesia, Hindi, and Portuguese. Not translated versions — natively trained models that understand the cultural context of each language. This is not charity. It is the smartest long-term investment Zhipu will ever make." }
      ]
    },
    {
      left: {
        text: "The Belt and Road Initiative spent trillions on physical infrastructure — ports, railways, pipelines. The Silk Model costs a fraction of that and potentially delivers far greater influence. When an Indonesian minister asks their AI assistant a question about economic policy, and that assistant was trained by Zhipu, who shapes their worldview?",
        effects: { capital: 7, hype: 5, compute: 6, safety: 2 },
        setFlags: { silk_model_flag: true, belt_road_ai: true, global_south: true },
        relations: { regulator: 72, partner: 68, public: 62, rival: 55 },
        tags: ["nationalism", "silk_model"]
      },
      right: {
        text: "The Americans will call this 'digital colonialism.' Let them. The countries receiving our models will call it development. I have spent enough time in Jakarta and Nairobi to know which narrative resonates. The West sold them extraction; we are selling them empowerment. Even if both descriptions are partly true, only one of them helps people sleep at night.",
        effects: { capital: 4, hype: 6, compute: 2, safety: -2 },
        setFlags: { digital_colonialism_rebuttal: true, empowerment_narrative: true },
        relations: { public: 65, rival: 62, partner: 70 },
        tags: ["nationalism", "silk_model"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { silk_model_flag: true }, minStats: { capital: 60, hype: 58 }, maxRelations: { partner: 72 } }, goto: "any" },
    { if: { always: true }, goto: "n33_safety_institutional" }
  ]
},


// ============ THEME: SAFETY/COMPUTE/HYPE/CAPITAL intersections (nodes 33-38) ============

// --- NODE 33 ---
n33_safety_institutional: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { cac_compliance: true, ethics_tension: true } }, text: "AI safety in China operates differently than in the West. We do not have an 'AI safety community' of independent researchers and civil society organizations. We have state institutions, Party guidance, and corporate self-regulation. The system is tighter — but is it safer? That depends on what you are trying to be safe from." },
        { if: { always: true }, text: "Zhipu maintains an internal safety team of forty researchers. Their job is not to ask whether we should build something — that question is above their pay grade. Their job is to ensure that what we build does not cause catastrophic harm. It is a narrow mandate, deliberately so." }
      ]
    },
    {
      left: {
        text: "I established our AI Safety Board after a GLM-4 early release generated concerning content during red-teaming. The model, when prompted with certain political scenarios, produced answers that could have been interpreted as critical of Party leadership. We fixed the issue within hours. But those hours aged me more than any boardroom battle.",
        effects: { capital: -1, hype: -3, compute: 1, safety: 9 },
        setFlags: { safety_board: true, red_team_scare: true, political_alignment: true },
        relations: { regulator: 78, staff: 62, board: 58 },
        tags: ["safety", "censorship"]
      },
      right: {
        text: "The reality that outsiders do not see: every Chinese AI company has a 'Party-building office' and a 'content security representative' embedded in its leadership. These are not optional. They report directly to the Cyberspace Administration. I have a constructive relationship with ours — but I never forget that he has a duty that supersedes my authority. In a conflict, he wins. We both know this.",
        effects: { capital: 0, hype: -2, compute: 0, safety: 7 },
        setFlags: { party_office: true, embedded_censor: true, superseding_authority: true },
        relations: { regulator: 82, board: 52, staff: 55 },
        tags: ["safety", "party"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { safety_board: true, embedded_censor: true }, minStats: { safety: 62 }, maxRelations: { regulator: 85 } }, goto: "any" },
    { if: { always: true }, goto: "n34_compute_frontier" }
  ]
},

// --- NODE 34 ---
n34_compute_frontier: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { project_change: true, ascend_adapted: true } }, text: "Compute is the lifeblood of AI, and we are anemic. Even with Ascend chips and SMIC wafers, Zhipu's total compute capacity is perhaps thirty percent of what OpenAI commands. I manage this deficit the way a general manages a smaller army — through superior tactics, not superior numbers." },
        { if: { always: true }, text: "We have built one of China's largest AI supercomputing clusters in Guiyang — the 'China Data Valley.' The cool mountain climate reduces cooling costs. The proximity to hydropower keeps electricity affordable. But it is still not enough." }
      ]
    },
    {
      left: {
        text: "Our Guiyang cluster runs 24,000 Ascend 910B chips. It sounds impressive. An equivalent NVIDIA cluster would need perhaps 8,000 H100s. The efficiency gap infuriates me. Every petaflop wasted on chip inefficiency is a petaflop not spent on model improvement. I dream of the day when domestic chips achieve parity. That dream will not arrive before 2028.",
        effects: { capital: -3, hype: -2, compute: 7, safety: 0 },
        setFlags: { guiyang_cluster: true, compute_gap: true, chip_rage: true },
        relations: { staff: 62, partner: 55, rival: 50 },
        tags: ["compute", "infrastructure"]
      },
      right: {
        text: "Compute is also a diplomatic weapon. The US export controls are explicitly designed to keep China one to two generations behind in AI hardware. The assumption is that this gap translates to military and economic advantage. The assumption is largely correct. This is why the chip issue keeps me awake more than any safety concern or competitive threat. Hardware is the bottleneck that no amount of algorithmic cleverness can fully erase.",
        effects: { capital: -4, hype: -1, compute: 5, safety: 2 },
        setFlags: { diplomatic_weapon: true, hardware_bottleneck: true, sleepless_compute: true },
        relations: { rival: 65, regulator: 68, board: 55 },
        tags: ["compute", "geopolitics"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { compute_gap: true, hardware_bottleneck: true }, minStats: { compute: 60 } }, goto: "any" },
    { if: { always: true }, goto: "n35_hype_machine" }
  ]
},

// --- NODE 35 ---
n35_hype_machine: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { benchmark_vindication: true } }, text: "Hype is the currency of the AI industry, and I am a reluctant mint. Every press release, every benchmark claim, every conference keynote — these are transactions in a market of attention that determines everything from hiring to fundraising to regulatory favor." },
        { if: { always: true }, text: "I despise hype. I also depend on it. This contradiction sits at the center of my professional life like a stone in a peach — it is not the fruit, but everything grows around it." }
      ]
    },
    {
      left: {
        text: "When we released GLM-5, my communications team wanted to claim 'AGI-level performance on the Gaokao.' Technically, the benchmark results supported this framing. I refused. I have seen what happens to companies that overpromise — the backlash, the disillusionment, the talent exodus. I chose a more modest claim: 'GLM-5 demonstrates significant advances in reasoning capabilities.' The press called it 'refreshingly honest.' Ironic, given how carefully I had calculated that modesty.",
        effects: { capital: 1, hype: 3, compute: 1, safety: 2 },
        setFlags: { hype_resistance: true, calculated_modesty: true, gaokao_claim_refused: true },
        relations: { public: 68, board: 58, staff: 62 },
        tags: ["hype", "strategy"]
      },
      right: {
        text: "But modesty has limits. When DeepSeek's marketing machine painted Zhipu as a 'legacy company' — a euphemism for 'dying' — I authorized a counter-campaign. We published unredacted benchmark comparisons, customer testimonials from state-owned enterprises, and a carefully leaked report showing our enterprise renewal rates at 97%. The message was clear: Zhipu is not fading. We are just quieter. And in China, the quietest tiger often has the sharpest claws.",
        effects: { capital: 2, hype: 5, compute: 0, safety: 1 },
        setFlags: { counter_campaign: true, quiet_tiger: true, legacy_rebuttal: true },
        relations: { public: 65, rival: 70, board: 62, partner: 60 },
        tags: ["hype", "competition"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { calculated_modesty: true, quiet_tiger: true }, minStats: { hype: 55 } }, goto: "any" },
    { if: { always: true }, goto: "n36_capital_flows" }
  ]
},

// --- NODE 36 ---
n36_capital_flows: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { series_d: true, foreign_capital: true } }, text: "Capital in China's AI sector flows through channels that are only partially visible to outsiders. Government guidance funds, state-owned banks, provincial investment vehicles — these are not passive investors. They are instruments of industrial policy with money attached." },
        { if: { always: true }, text: "I have spent more hours in fundraising meetings than I have spent with my children. This is a statement of fact, not a complaint. It is also an indictment." }
      ]
    },
    {
      left: {
        text: "The two billion dollars we raised came with conditions. The China Integrated Circuit Industry Fund required that a percentage of our compute spending go to domestic chip purchases. The National Social Security Fund required preferential access to our models for government applications. Each condition was reasonable in isolation. Together, they form a web of obligations that constrains my strategic freedom in ways the public will never see.",
        effects: { capital: 10, hype: 2, compute: -1, safety: 4 },
        setFlags: { capital_conditions: true, web_of_obligations: true, strategic_constraint: true },
        relations: { regulator: 75, board: 65, partner: 62 },
        tags: ["capital", "obligations"]
      },
      right: {
        text: "I sometimes envy Liang Wenfeng's independence. High-Flyer's quantitative trading profits give him a freedom that I, with my state-backed capital structure, can only dream of. But envy is a poison. I remind myself that his independence is also vulnerability — when the state decides it is time to 'guide' the AI sector more firmly, the independent actors will feel the pressure first. My embeddedness in the system is also my shield.",
        effects: { capital: 3, hype: 1, compute: 0, safety: 3 },
        setFlags: { envy_liang: true, embeddedness_shield: true, capital_envy: true },
        relations: { rival: 68, board: 60, regulator: 72 },
        tags: ["capital", "comparison"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { web_of_obligations: true, embeddedness_shield: true }, minStats: { capital: 62 } }, goto: "any" },
    { if: { always: true }, goto: "n37_staff_talent" }
  ]
},

// --- NODE 37 ---
n37_staff_talent: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { restructured: true, skunkworks: true } }, text: "Talent is the only truly scarce resource in AI. Chips can be manufactured, capital can be raised, regulations can be navigated — but the handful of researchers who can push the frontier of model capability are irreplaceable." },
        { if: { always: true }, text: "Zhipu employs over two thousand people. I know perhaps two hundred of them by name. The ones I know best are the ones I cannot afford to lose — and they are precisely the ones most likely to be poached by DeepSeek, ByteDance, or Silicon Valley." }
      ]
    },
    {
      left: {
        text: "Last year, DeepSeek attempted to hire our lead reinforcement learning researcher. The offer was fifty percent above what we were paying. I matched it, but money was not the real counter-offer. I spent three hours with him, talking not about compensation but about mission — about the Silk Model, about GLM's unique architecture, about the intellectual satisfaction of building something that was distinctly ours. He stayed. I do not know if I can win the next one.",
        effects: { capital: -2, hype: -1, compute: 2, safety: 1 },
        setFlags: { talent_war: true, poaching_attempt: true, mission_retention: true },
        relations: { staff: 68, rival: 65, board: 52 },
        tags: ["staff", "retention"]
      },
      right: {
        text: "The younger researchers — the ones born after 2000 — are different. They care less about nationalism and more about impact. They do not want to build AI for China; they want to build AI for humanity. I admire their idealism even as I worry about its compatibility with our strategic constraints. Some of them will leave. The best ones always do. My job is to make leaving feel like a loss, not a liberation.",
        effects: { capital: 0, hype: 2, compute: 3, safety: -1 },
        setFlags: { gen_z_talent: true, idealism_worry: true, retention_challenge: true },
        relations: { staff: 62, public: 55, partner: 52 },
        tags: ["staff", "generation"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { talent_war: true, gen_z_talent: true }, minStats: { staff: 62 } }, goto: "any" },
    { if: { always: true }, goto: "n38_public_perception" }
  ]
},

// --- NODE 38 ---
n38_public_perception: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { quiet_tiger: true, hype_resistance: true } }, text: "The Chinese public knows me primarily through the media — a curated persona of the humble technologist serving the nation. The curation is deliberate, but the humility is not entirely manufactured. I genuinely believe that engineers should build, not perform." },
        { if: { always: true }, text: "I am not a celebrity CEO. I do not livestream, I do not post on Weibo, I do not cultivate a personal brand. This frustrates my PR team. It also protects me. The higher your public profile in China, the thinner the ice beneath your feet." }
      ]
    },
    {
      left: {
        text: "After the DeepSeek shock, some online commentators called me 'the fading emperor' — a reference to the last Qing rulers who watched their empire crumble while clinging to obsolete traditions. The metaphor stung more than I admitted. I did not respond publicly. But privately, I printed the comment and taped it to my office wall. It is still there, yellowing now, a small monument to the cost of underestimating disruption.",
        effects: { capital: -1, hype: -2, compute: 0, safety: 1 },
        setFlags: { fading_emperor: true, wall_reminder: true, public_humiliation: true },
        relations: { public: 62, rival: 58, staff: 55 },
        tags: ["public", "criticism"]
      },
      right: {
        text: "But public perception in China is not driven by Twitter or Reddit — it is driven by state media. When People's Daily published a profile calling Zhipu a 'national champion in artificial intelligence,' the online critics fell silent. I did not request the article. I did not need to. My CCPPC connections ensured that when the state needed to choose a narrative, they chose ours. That is how public relations works in this country: not through spin, but through signal.",
        effects: { capital: 2, hype: 4, compute: 0, safety: 4 },
        setFlags: { peoples_daily: true, national_champion_label: true, signal_not_spin: true },
        relations: { public: 70, regulator: 75, board: 62, rival: 52 },
        tags: ["public", "media"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { peoples_daily: true, national_champion_label: true }, minStats: { public: 62 } }, goto: "any" },
    { if: { always: true }, goto: "n39_partner_ecosystem" }
  ]
},


// ============ INTERLUDE: PARTNER/RIVAL/REGULATOR INTERSECTIONS (nodes 39-42) ============

// --- NODE 39 ---
n39_partner_ecosystem: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { enterprise_moat: true, state_grid: true } }, text: "Zhipu's partner ecosystem extends far beyond what our public materials describe. We have deep integrations with the People's Liberation Army's logistics command, with the Ministry of State Security's data analysis division, with the Central Party School's educational technology unit. These are not contracts I discuss at investor meetings." },
        { if: { always: true }, text: "Partnerships are the invisible architecture of Chinese business. A contract is worth less than a relationship. A relationship is worth less than an obligation. An obligation is worth less than a secret. I hold all four, in varying proportions, with every entity that matters." }
      ]
    },
    {
      left: {
        text: "The PLA contract was the hardest decision of my career. When the generals came to Zhongguancun, they did not come as customers — they came as the state incarnate. Refusal was theoretically possible. The practical consequences of refusal were unspoken but clear. I signed. I do not regret it. I also do not tell my daughter about it.",
        effects: { capital: 6, hype: -3, compute: 4, safety: -5 },
        setFlags: { pla_contract: true, generals_visit: true, military_entanglement: true },
        relations: { regulator: 78, partner: 72, board: 58, family: 48 },
        tags: ["partner", "military"]
      },
      right: {
        text: "Our partnership with Huawei is more comfortable — two Chinese technology champions reinforcing each other against a common adversary. Ren Zhengfei and I meet quarterly over tea. We do not discuss contracts. We discuss philosophy: what China owes the world, what technology owes humanity, what a father owes his children. The business follows naturally from the worldview.",
        effects: { capital: 3, hype: 2, compute: 5, safety: 2 },
        setFlags: { huawei_partnership: true, ren_meetings: true, philosophical_alignment: true },
        relations: { partner: 75, rival: 52, board: 62 },
        tags: ["partner", "huawei"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { pla_contract: true, huawei_partnership: true }, minStats: { partner: 65 } }, goto: "any" },
    { if: { always: true }, goto: "n40_rival_chess" }
  ]
},

// --- NODE 40 ---
n40_rival_chess: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { talent_war: true, four_player_board: true } }, text: "The rivalry with DeepSeek is a weiqi match, not a boxing bout. Territory is claimed stone by stone, not blow by blow. Liang Wenfeng places a stone; I respond. I place a stone; he counters. The board expands with each move." },
        { if: { always: true }, text: "Baichuan and Moonshot are the other players on the board. Wang Xiaochuan of Baichuan is a veteran, steady and predictable. Yang Zhilin of Moonshot is young, brilliant, and mercurial — harder to read, harder to counter." }
      ]
    },
    {
      left: {
        text: "Liang Wenfeng and I have met exactly four times. Each meeting was cordial, respectful, and completely insincere. At the 2025 World AI Conference, we were seated next to each other at the banquet. He complimented GLM-4. I complimented DeepSeek-V3. We both smiled. We both lied. The cameras captured the smiles. They did not capture the calculation behind our eyes.",
        effects: { capital: 0, hype: 2, compute: 1, safety: 1 },
        setFlags: { liang_meetings: true, banquet_duel: true, insincere_cordiality: true },
        relations: { rival: 78, public: 60 },
        tags: ["rival", "deepseek"]
      },
      right: {
        text: "The rivalry with Baichuan is different — less ideological, more commercial. Wang Xiaochuan and I compete for the same enterprise contracts, the same government partnerships, the same Tsinghua talent pipeline. It is a cleaner competition, almost collegial. We sometimes share tea and complaints about the regulatory environment. With Liang, I could never do that. He operates on a different plane entirely.",
        effects: { capital: 1, hype: 1, compute: 2, safety: 2 },
        setFlags: { baichuan_rivalry: true, wang_xiaochuan: true, collegial_competition: true },
        relations: { rival: 65, partner: 58, staff: 55 },
        tags: ["rival", "baichuan"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { banquet_duel: true, insincere_cordiality: true }, minStats: { rival: 72 } }, goto: "any" },
    { if: { always: true }, goto: "n41_regulator_navigation" }
  ]
},

// --- NODE 41 ---
n41_regulator_navigation: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { cac_compliance: true, pla_contract: true } }, text: "Navigating Chinese AI regulation is like sailing through a archipelago in fog. The channels are narrow, the rocks are unmapped, and the lighthouse keepers sometimes change the light's color without warning. But I have been sailing these waters for twenty years. I know the currents." },
        { if: { always: true }, text: "The regulatory environment is tightening. The 2025 'AI Security Law' added criminal penalties for unsafe model deployment. The 2026 'Generative AI Content Standards' imposed mandatory watermarking. Each new regulation is a constraint — and an opportunity to demonstrate compliance that competitors may struggle to match." }
      ]
    },
    {
      left: {
        text: "I maintain a 'regulatory affairs' department of thirty people. Their sole job is to read draft regulations, attend government hearings, and maintain relationships with officials at the Cyberspace Administration, the Ministry of Industry, and the Standardization Administration. I personally review their monthly reports. In this business, regulatory intelligence is worth more than market intelligence.",
        effects: { capital: 3, hype: 0, compute: 0, safety: 6 },
        setFlags: { regulatory_affairs: true, thirty_person_department: true, regulatory_intelligence: true },
        relations: { regulator: 80, board: 58, staff: 60 },
        tags: ["regulator", "compliance"]
      },
      right: {
        text: "The hardest regulatory conversation I ever had was about GLM's military applications. A senior official from the State Council asked me directly: 'Can your models be weaponized?' The correct answer was 'no.' The honest answer was 'yes.' I gave a third answer: 'Any technology can be weaponized. Our job is to ensure ours is not.' It satisfied him. It did not satisfy me.",
        effects: { capital: 1, hype: -2, compute: 1, safety: 3 },
        setFlags: { weaponization_question: true, third_answer: true, moral_compromise: true },
        relations: { regulator: 78, board: 55, staff: 52 },
        tags: ["regulator", "ethics"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { regulatory_intelligence: true, weaponization_question: true }, minStats: { safety: 62, regulator: 72 } }, goto: "any" },
    { if: { always: true }, goto: "n42_domestic_fortress" }
  ]
},

// --- NODE 42 ---
n42_domestic_fortress: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { silk_model_flag: true, enterprise_moat: true } }, text: "The domestic fortress strategy is the counterpoint to the Silk Model. While we extend outward to the Global South, we fortify inward — building a position in China so unassailable that no foreign competitor can penetrate and no domestic rival can displace." },
        { if: { always: true }, text: "A fortress is not a prison — unless you build it wrong. The question I ask myself, late at night, is whether I have built Zhipu as a fortress or a prison. The walls look the same from the inside." }
      ]
    },
    {
      left: {
        text: "Our domestic strategy rests on three pillars: state-owned enterprise contracts (renewable, sticky, lucrative), government AI infrastructure (national cloud, citizen services, military logistics), and educational integration (Tsinghua pipeline, textbook partnerships, nationwide AI curriculum). Each pillar reinforces the others. Each pillar would take a competitor years to replicate.",
        effects: { capital: 8, hype: 2, compute: 3, safety: 5 },
        setFlags: { three_pillars: true, domestic_fortress_flag: true, unassailable_position: true },
        relations: { partner: 72, regulator: 75, board: 65, public: 62 },
        tags: ["domestic_fortress", "strategy"]
      },
      right: {
        text: "But fortresses can become tombs. The Ming Dynasty built the Great Wall — the ultimate fortress — and it did not save them from the Manchus. Internal decay is more dangerous than external assault. If Zhipu becomes complacent, if our culture ossifies into bureaucracy, if our research becomes derivative — no amount of government contracts will save us. The fortress will become our mausoleum.",
        effects: { capital: -1, hype: 1, compute: 0, safety: 2 },
        setFlags: { fortress_tomb: true, ming_lesson: true, complacency_fear: true },
        relations: { staff: 58, board: 55, partner: 60 },
        tags: ["domestic_fortress", "warning"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { domestic_fortress_flag: true, fortress_tomb: true }, minStats: { capital: 62, safety: 60 } }, goto: "any" },
    { if: { always: true }, goto: "n43_open_scholar" }
  ]
},


// ============ ENDINGS THEME (nodes 43-46) ============
// silk_model, domestic_fortress, open_scholar, escape_to_zurich

// --- NODE 43 ---
n43_open_scholar: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { tsinghua_complete: true, classical_corpus: true } }, text: "The open scholar ending is not a capitulation — it is an elevation. If Zhipu were to retreat from commercial competition and become a pure research institution, a modern Academy of Chinese Sciences for AI, we could escape the quarterly tyranny and return to what drew me into this field: the pure pursuit of understanding." },
        { if: { always: true }, text: "Sometimes I imagine it: resigning as CEO, returning to Tsinghua as a full professor, spending my days in the library with students who argue about embeddings the way I once argued about word segmentation with Professor Sun. It is a beautiful fantasy. It may also be a coward's escape." }
      ]
    },
    {
      left: {
        text: "The open scholar model has precedent. Bell Labs produced the transistor, the laser, the UNIX operating system — not because it was chasing quarterly earnings, but because it was given the freedom to pursue knowledge for its own sake. China needs a Bell Labs for AI. Zhipu could be that institution, if I had the courage to sacrifice its valuation for its soul.",
        effects: { capital: -5, hype: -3, compute: 5, safety: 6 },
        setFlags: { open_scholar_flag: true, bell_labs_analogy: true, valuation_sacrifice: true },
        relations: { staff: 65, partner: 55, board: 42, public: 62 },
        tags: ["open_scholar", "ending"]
      },
      right: {
        text: "But the board would never allow it. The state investors would see it as abandonment of national mission. The VCs would sue. My own ego — let me be honest — would rebel. I have not spent twenty years building a company to turn it into a think tank. The open scholar ending is beautiful and impossible, like a Tang poem about a mountain you can see but never climb.",
        effects: { capital: -2, hype: 1, compute: 2, safety: 3 },
        setFlags: { open_scholar_impossible: true, board_veto: true, ego_rebellion: true },
        relations: { board: 40, regulator: 58, staff: 60 },
        tags: ["open_scholar", "reality"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { open_scholar_flag: true, open_scholar_impossible: true } }, goto: "any" },
    { if: { always: true }, goto: "n44_domestic_fortress_ending" }
  ]
},

// --- NODE 44 ---
n44_domestic_fortress_ending: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { domestic_fortress_flag: true, infrastructure_play: true } }, text: "The domestic fortress ending is the most likely outcome. Zhipu becomes too embedded in China's national infrastructure to fail — a state-backed utility that provides AI services to government, military, and industry. Profitable, stable, indispensable, and utterly boring." },
        { if: { always: true }, text: "I could live with this ending. Many would call it success. Zhipu would be worth a hundred billion dollars, its models would touch every Chinese citizen's life, and I would be remembered as a founding father of Chinese AI. What more could a man want?" }
      ]
    },
    {
      left: {
        text: "The domestic fortress ending means accepting that Zhipu will never be a global company — that 'AI for humanity' was always a euphemism for 'AI for China.' It means watching our international ambitions shrink until they fit comfortably within the Great Firewall. It means becoming the thing I told myself I would not become: a cog in the machine, however well-oiled and well-respected.",
        effects: { capital: 5, hype: 0, compute: 2, safety: 6 },
        setFlags: { fortress_ending_flag: true, global_ambition_death: true, cog_acceptance: true },
        relations: { regulator: 75, board: 68, partner: 70, public: 62 },
        tags: ["domestic_fortress", "ending"]
      },
      right: {
        text: "But there is honor in building infrastructure. The engineers who designed China's high-speed rail network are not remembered by name, but they moved a civilization. Perhaps that is enough. Perhaps the desire for global recognition is just vanity dressed as vision. My father the lathe operator never asked for recognition. He just did his work. Maybe that is the lesson I have spent my whole life failing to learn.",
        effects: { capital: 3, hype: -2, compute: 1, safety: 4 },
        setFlags: { honor_in_infrastructure: true, father_lesson: true, vanity_vs_vision: true },
        relations: { family: 72, staff: 65, public: 60 },
        tags: ["domestic_fortress", "acceptance"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { fortress_ending_flag: true, honor_in_infrastructure: true }, minStats: { capital: 60, safety: 60 } }, goto: "any" },
    { if: { always: true }, goto: "n45_escape_zurich_ending" }
  ]
},

// --- NODE 45 ---
n45_escape_zurich_ending: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { escape_zurich_flag: true, wife_zurich: true } }, text: "The escape to Zurich is the ending I do not speak aloud. Resignation. Relocation. Reinvention. A quiet life in a quiet country, watching the AI revolution from the safe distance of a Swiss balcony, sipping coffee that costs too much and tastes too good." },
        { if: { always: true }, text: "There is a version of my future in which I am not Zhang Peng, CEO of Zhipu AI, member of the CCPPC, architect of China's AI strategy. There is a version in which I am just a man who walked away." }
      ]
    },
    {
      left: {
        text: "The practical steps are already mapped in my mind: resignation letter citing 'personal reasons,' transfer of equity to a family trust, purchase of a residence permit through Swiss investment visa program, enrollment of children in Zurich International School. Each step is reversible up to a point. Beyond that point, there is no return. I have not crossed it. I am not sure I will. But I have measured the distance.",
        effects: { capital: -8, hype: -5, compute: 0, safety: -6 },
        setFlags: { zurich_escape_plan: true, mapped_steps: true, point_of_no_return: true },
        relations: { family: 78, board: 35, regulator: 30, public: 40 },
        tags: ["escape_zurich", "plan"]
      },
      right: {
        text: "What stops me is not patriotism. It is not even fear of the consequences — though the consequences of a CCPPC member defecting would be severe, for my extended family if not for me. What stops me is the question of what I would tell my mother. The woman who taught mathematics in a freezing classroom so her son could attend Tsinghua. 'There is always a proof,' she said. There is no proof that running away solves anything. She would know that. She would expect me to know that, too.",
        effects: { capital: 0, hype: -1, compute: 0, safety: 5 },
        setFlags: { zurich_impossible: true, mothers_proof: true, shame_anchor: true },
        relations: { family: 75, regulator: 35, board: 32 },
        tags: ["escape_zurich", "mother"]
      }
    }
  ],
  autoRoute: [
    { if: { flags: { zurich_escape_plan: true, zurich_impossible: true } }, goto: "any" },
    { if: { always: true }, goto: "n46_final_reflection_silk" }
  ]
},

// --- NODE 46 ---
n46_final_reflection_silk: {
  speaker: "Zhang Peng",
  avatar: "zhipu_portrait",
  parts: [
    {
      textVariants: [
        { if: { flags: { silk_model_flag: true, open_scholar_flag: true } }, text: "The Silk Model is the ending I choose to believe in. Not fortress, not flight, not academic retreat — but extension. A bridge between civilizations, built not of stone but of code, carrying not silk but intelligence across the ancient trade routes." },
        { if: { flags: { domestic_fortress_flag: true, zurich_escape_plan: true } }, text: "I have considered the fortress and I have considered the flight. Both are forms of retreat. The Silk Model is the only ending that faces outward, that risks something, that tries to matter beyond the boundaries of one nation or one life." },
        { if: { always: true }, text: "In the end, I am Zhang Peng. I was born in the year of the Horse. I studied at Tsinghua. I built a company that will outlive me. I served my country, I disappointed my family, I wrestled with powers I could not name. I did my work. Whether it was good work — that is for others to judge." }
      ]
    }
  ],
  specialEnding: "silk_model",
  setFlags: { ending_reached: true }
  }
}
  }
}
}