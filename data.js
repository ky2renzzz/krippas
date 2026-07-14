// KRIPPAS - Game Data

const characters = {
    elon: {
        id: "elon",
        name: "Elon Musk",
        title: "Technoking of xAI & Tesla",
        theme: "theme-elon",
        avatar: `<svg viewBox="0 0 100 100" class="avatar-svg">
            <polygon points="50,15 35,40 65,40" fill="#2d3748"/>
            <polygon points="35,40 25,65 50,75" fill="#4a5568"/>
            <polygon points="65,40 50,75 75,65" fill="#1a202c"/>
            <polygon points="50,75 30,95 70,95" fill="#111827"/>
            <polygon points="35,40 50,40 50,75" fill="#718096"/>
            <polygon points="50,40 65,40 50,75" fill="#4a5568"/>
            <!-- Cybernetic glowing eye details -->
            <polygon points="42,48 48,48 45,52" fill="#ef4444"/>
            <polygon points="52,48 58,48 55,52" fill="#ef4444"/>
            <path d="M35,30 Q50,25 65,30" stroke="#f59e0b" stroke-width="2" fill="none" />
        </svg>`,
        initialStats: { capital: 60, compute: 80, talent: 50, hype: 75 }
    },
    sam: {
        id: "sam",
        name: "Sam Altman",
        title: "CEO of OpenAI",
        theme: "theme-sam",
        avatar: `<svg viewBox="0 0 100 100" class="avatar-svg">
            <polygon points="50,15 38,35 62,35" fill="#0d9488"/>
            <polygon points="38,35 28,68 50,72" fill="#14b8a6"/>
            <polygon points="62,35 50,72 72,68" fill="#0f766e"/>
            <polygon points="50,72 32,92 68,92" fill="#115e59"/>
            <polygon points="38,35 50,38 50,72" fill="#2dd4bf"/>
            <polygon points="50,38 62,35 50,72" fill="#14b8a6"/>
            <!-- Friendly but calculating blue eyes -->
            <polygon points="43,46 47,46 45,49" fill="#67e8f9"/>
            <polygon points="53,46 57,46 55,49" fill="#67e8f9"/>
        </svg>`,
        initialStats: { capital: 80, compute: 70, talent: 75, hype: 60 }
    },
    dario: {
        id: "dario",
        name: "Dario Amodei",
        title: "Co-Founder of Anthropic",
        theme: "theme-dario",
        avatar: `<svg viewBox="0 0 100 100" class="avatar-svg">
            <polygon points="50,15 33,38 67,38" fill="#1e3a8a"/>
            <polygon points="33,38 22,65 50,78" fill="#2563eb"/>
            <polygon points="67,38 50,78 78,65" fill="#1d4ed8"/>
            <polygon points="50,78 30,95 70,95" fill="#1e40af"/>
            <polygon points="33,38 50,42 50,78" fill="#3b82f6"/>
            <polygon points="50,42 67,38 50,78" fill="#2563eb"/>
            <!-- Glasses outline geometric style -->
            <polygon points="37,45 47,45 45,50 39,50" fill="none" stroke="#facc15" stroke-width="2"/>
            <polygon points="53,45 63,45 61,50 55,50" fill="none" stroke="#facc15" stroke-width="2"/>
            <line x1="47" y1="47" x2="53" y2="47" stroke="#facc15" stroke-width="2"/>
        </svg>`,
        initialStats: { capital: 50, compute: 60, talent: 80, hype: 50 }
    },
    demis: {
        id: "demis",
        name: "Demis Hassabis",
        title: "CEO of Google DeepMind",
        theme: "theme-demis",
        avatar: `<svg viewBox="0 0 100 100" class="avatar-svg">
            <polygon points="50,12 36,36 64,36" fill="#312e81"/>
            <polygon points="36,36 24,66 50,74" fill="#4338ca"/>
            <polygon points="64,36 50,74 76,66" fill="#3730a3"/>
            <polygon points="50,74 32,94 68,94" fill="#1e1b4b"/>
            <polygon points="36,36 50,40 50,74" fill="#4f46e5"/>
            <polygon points="50,40 64,36 50,74" fill="#4338ca"/>
            <!-- Precise, analytical eyes -->
            <circle cx="45" cy="46" r="2.5" fill="#818cf8"/>
            <circle cx="55" cy="46" r="2.5" fill="#818cf8"/>
        </svg>`,
        initialStats: { capital: 90, compute: 90, talent: 70, hype: 45 }
    },
    zhang: {
        id: "zhang",
        name: "Zhang Peng",
        title: "CEO of Zhipu AI",
        theme: "theme-zhang",
        avatar: `<svg viewBox="0 0 100 100" class="avatar-svg">
            <polygon points="50,14 35,37 65,37" fill="#78350f"/>
            <polygon points="35,37 25,68 50,76" fill="#d97706"/>
            <polygon points="65,37 50,76 75,68" fill="#b45309"/>
            <polygon points="50,76 30,95 70,95" fill="#92400e"/>
            <polygon points="35,37 50,40 50,76" fill="#f59e0b" />
            <polygon points="50,40 65,37 50,76" fill="#d97706" />
            <!-- Crimson focal markings -->
            <polygon points="44,45 47,45 45,49" fill="#dc2626"/>
            <polygon points="53,45 56,45 55,49" fill="#dc2626"/>
        </svg>`,
        initialStats: { capital: 60, compute: 65, talent: 75, hype: 60 }
    }
};

const quizQuestions = [
    {
        question: "When you hear about AGI, what is your primary immediate thought?",
        options: [
            { text: "We must scale compute immediately! Build 100,000 clusters in the desert.", weight: { elon: 3, sam: 2, demis: 1, dario: 0, zhang: 1 } },
            { text: "We need massive capital, partnerships, and an iterative rollout strategy.", weight: { sam: 3, demis: 1, elon: 1, dario: 0, zhang: 1 } },
            { text: "Mathematical safety, strict alignment research, and state-level security audits.", weight: { dario: 4, demis: 1, sam: 0, elon: 0, zhang: 0 } },
            { text: "Solving basic science first: biology, chemistry, protein folding, physics.", weight: { demis: 4, dario: 1, sam: 0, elon: 0, zhang: 1 } },
            { text: "Localized, strategic growth, mastering national requirements and local hardware.", weight: { zhang: 4, demis: 1, elon: 1, sam: 0, dario: 0 } }
        ]
    },
    {
        question: "How do you handle your relationships with governmental regulators?",
        options: [
            { text: "Post memes on X, call them bureaucratic puppets, and build anyway.", weight: { elon: 4, sam: 0, dario: 0, demis: 0, zhang: 0 } },
            { text: "Establish cozy ties, testify before congress, and push for licensed AI models.", weight: { sam: 4, dario: 2, demis: 1, elon: 0, zhang: 0 } },
            { text: "Draft comprehensive safety constitutions and report security threats directly to the state.", weight: { dario: 4, demis: 2, sam: 1, elon: 0, zhang: 1 } },
            { text: "Align silently with high-level sovereign programs, delivering technology without drama.", weight: { zhang: 4, demis: 3, sam: 1, elon: 0, dario: 1 } }
        ]
    },
    {
        question: "Your top researcher threatens to defect to a rival startup. What is your response?",
        options: [
            { text: "Offer them $10M in equity and direct compute access. Match anything.", weight: { sam: 3, demis: 2, elon: 1, dario: 1, zhang: 1 } },
            { text: "Remind them of our mission, our safety-first culture, and mathematical truth.", weight: { dario: 4, demis: 2, sam: 1, elon: 0, zhang: 0 } },
            { text: "Let them go. The core architecture is already designed. I will build an agent to replace them.", weight: { elon: 4, demis: 1, sam: 0, dario: 0, zhang: 1 } },
            { text: "Rely on deep national research networks and secure long-term loyalty via honor and prestige.", weight: { zhang: 4, demis: 2, sam: 1, elon: 0, dario: 0 } }
        ]
    },
    {
        question: "What is the ultimate bottleneck to achieving your company's mission?",
        options: [
            { text: "Energy generation (gigawatts of nuclear fission) and silicon fabs.", weight: { elon: 4, sam: 3, demis: 1, dario: 1, zhang: 0 } },
            { text: "Rigorous alignment algorithms to prevent catastrophic rogue actions.", weight: { dario: 4, sam: 1, demis: 2, elon: 0, zhang: 0 } },
            { text: "True mathematical models that reason dynamically beyond token prediction.", weight: { demis: 4, zhang: 2, dario: 2, sam: 1, elon: 1 } },
            { text: "Secure, domestically sourced hardware clusters under embargo constraints.", weight: { zhang: 4, elon: 1, demis: 1, sam: 0, dario: 0 } }
        ]
    },
    {
        question: "Finally, how do you handle internal corporate power struggles?",
        options: [
            { text: "Fire the board members, launch hostile takeovers, and post publicly.", weight: { elon: 4, sam: 1, dario: 0, demis: 0, zhang: 0 } },
            { text: "Deploy subtle back-channel negotiations, win over main investors, and regain control smoothly.", weight: { sam: 4, demis: 2, zhang: 2, dario: 1, elon: 0 } },
            { text: "Split off completely, form a Public Benefit Corporation, and take the best alignment engineers.", weight: { dario: 4, sam: 1, demis: 0, elon: 0, zhang: 0 } },
            { text: "Maintain absolute backing from a giant parent corporation (like Google) to remain shielded.", weight: { demis: 4, zhang: 2, sam: 1, dario: 1, elon: 0 } }
        ]
    }
];

const storylines = {
    elon: {
        startNode: "elon_start",
        nodes: {
            "elon_start": {
                text: "Your satellite team confirms that Starlink can support xAI's new cluster. But the SEC demands a review of your hardware transfer between Tesla and xAI. Do you comply?",
                speaker: "Shivon (xAI Ops)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#f43f5e"/><polygon points="35,45 20,75 50,85" fill="#fda4af"/><polygon points="65,45 50,85 80,75" fill="#e11d48"/></svg>`,
                left: {
                    choice: "Comply & Delay",
                    effects: { capital: -10, compute: -15, talent: 0, hype: -10 },
                    nextNode: "elon_sec_delay"
                },
                right: {
                    choice: "Transfer anyway!",
                    effects: { capital: -5, compute: +20, talent: +5, hype: +15 },
                    nextNode: "elon_rebel_run"
                }
            },
            "elon_sec_delay": {
                text: "The SEC approves the delay, but your researchers are furious about missing the training run. Sam Altman immediately tweets a subtle mockery. Respond?",
                speaker: "Shivon (xAI Ops)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#f43f5e"/><polygon points="35,45 20,75 50,85" fill="#fda4af"/><polygon points="65,45 50,85 80,75" fill="#e11d48"/></svg>`,
                left: {
                    choice: "Ignore and work",
                    effects: { capital: 0, compute: 0, talent: +5, hype: -15 },
                    nextNode: "elon_tesla_ai_threat"
                },
                right: {
                    choice: "Shitpost on X",
                    effects: { capital: -5, compute: 0, talent: -10, hype: +25 },
                    nextNode: "elon_hype_train"
                }
            },
            "elon_hype_train": {
                text: "Your tweet goes viral. Retail investors pump Tesla stock, and 3 top talent from OpenAI apply to work at xAI. Do we hire them without contracts?",
                speaker: "X Algorithm",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><rect x="30" y="30" width="40" height="40" fill="#f59e0b" transform="rotate(45, 50, 50)"/></svg>`,
                left: {
                    choice: "No, too risky",
                    effects: { capital: +5, compute: 0, talent: -5, hype: -10 },
                    nextNode: "elon_tesla_ai_threat"
                },
                right: {
                    choice: "Hire instantly!",
                    effects: { capital: -15, compute: 0, talent: +25, hype: +15 },
                    nextNode: "elon_lawsuit_threat"
                }
            },
            "elon_lawsuit_threat": {
                text: "OpenAI sues you for corporate espionage and breach of NDA. They demand $500M or a freeze on your model's release. What's the play?",
                speaker: "Marc (Legal Counsel)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,20 30,50 70,50" fill="#475569"/><polygon points="30,50 20,80 50,90" fill="#64748b"/><polygon points="70,50 50,90 80,80" fill="#334155"/></svg>`,
                left: {
                    choice: "Settle quietly",
                    effects: { capital: -25, compute: 0, talent: 0, hype: -10 },
                    nextNode: "elon_tesla_ai_threat"
                },
                right: {
                    choice: "Counter-sue!",
                    effects: { capital: -10, compute: 0, talent: +5, hype: +20 },
                    nextNode: "elon_open_source_move"
                }
            },
            "elon_open_source_move": {
                text: "To damage OpenAI, you release Grok-3 weights as fully open-source. The AI Safety community freaks out, but open-source developers praise you. Do you host a mega hackathon?",
                speaker: "Community Devs",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 30,85 70,85" fill="#10b981"/></svg>`,
                left: {
                    choice: "Skip, conserve funds",
                    effects: { capital: +10, compute: 0, talent: -5, hype: -10 },
                    nextNode: "elon_final_chapter"
                },
                right: {
                    choice: "Gigafactory Event!",
                    effects: { capital: -20, compute: 0, talent: +20, hype: +30 },
                    nextNode: "elon_final_chapter"
                }
            },
            "elon_rebel_run": {
                text: "You bypass the SEC. Grok-3 is training at peak performance, pulling 100MW of power. The local grid warns of rolling blackouts. Keep training?",
                speaker: "Memphis Power Grid",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,10 20,60 50,60 40,90 80,40 50,40" fill="#eab308"/></svg>`,
                left: {
                    choice: "Throttle training",
                    effects: { capital: 0, compute: -20, talent: -5, hype: -5 },
                    nextNode: "elon_tesla_ai_threat"
                },
                right: {
                    choice: "No, buy generators!",
                    effects: { capital: -30, compute: +10, talent: 0, hype: +15 },
                    nextNode: "elon_open_source_move"
                }
            },
            "elon_tesla_ai_threat": {
                text: "Tesla institutional investors are angry. They demand that you prioritize Tesla Autopilot instead of xAI. If you don't, they threat to sue you for conflict of interest.",
                speaker: "Larry (Lead Investor)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 30,55 70,55" fill="#7c2d12"/></svg>`,
                left: {
                    choice: "Pivot to Tesla",
                    effects: { capital: +20, compute: -15, talent: -10, hype: -10 },
                    nextNode: "elon_final_chapter"
                },
                right: {
                    choice: "Double down on xAI",
                    effects: { capital: -15, compute: +15, talent: +10, hype: +15 },
                    nextNode: "elon_final_chapter"
                }
            },
            "elon_final_chapter": {
                text: "A government official approaches you. They offer a $5 Billion national security defense AI contract, but you must stop sharing open weights. Do you sign?",
                speaker: "Agent Smith (DoD)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 32,52 68,52" fill="#0f172a"/><polygon points="32,52 20,82 50,88" fill="#1e293b"/><polygon points="68,52 50,88 80,82" fill="#334155"/></svg>`,
                left: {
                    choice: "Decline. Open source rules!",
                    effects: { capital: -10, compute: 0, talent: +10, hype: +25 },
                    nextNode: "elon_ending"
                },
                right: {
                    choice: "Sign contract. Go secret.",
                    effects: { capital: +45, compute: +10, talent: -15, hype: -20 },
                    nextNode: "elon_ending"
                }
            },
            "elon_ending": {
                text: "Grok-4 is complete. You have defied the odds, challenged the establishment, and carved out a techno-industrial AI future. What is your final decree?",
                speaker: "Elon Musk",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,40 65,40" fill="#2d3748"/><polygon points="35,40 25,65 50,75" fill="#4a5568"/><polygon points="65,40 50,75 75,65" fill="#1a202c"/><polygon points="50,75 30,95 70,95" fill="#111827"/></svg>`,
                left: {
                    choice: "AGI is here.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                },
                right: {
                    choice: "Next stop, Mars.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                }
            }
        }
    },
    sam: {
        startNode: "sam_start",
        nodes: {
            "sam_start": {
                text: "Microsoft is demanding early access to GPT-5. They threaten to reduce their Azure computing credits if we don't deliver early weights. What's the play?",
                speaker: "Kevin (Microsoft Liaison)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#0284c7"/><polygon points="35,45 20,75 50,85" fill="#0ea5e9"/><polygon points="65,45 50,85 80,75" fill="#0369a1"/></svg>`,
                left: {
                    choice: "Refuse, stay independent",
                    effects: { capital: -10, compute: -20, talent: +10, hype: +5 },
                    nextNode: "sam_find_investors"
                },
                right: {
                    choice: "Share early weights",
                    effects: { capital: +15, compute: +20, talent: -10, hype: -10 },
                    nextNode: "sam_talent_revolt"
                }
            },
            "sam_find_investors": {
                text: "Compute is scarce. You plan a secret trip to Abu Dhabi to raise $100 Billion for a custom AI chip venture. Do you disclose this to the OpenAI Board?",
                speaker: "Greg (Co-founder)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#b91c1c"/><polygon points="35,45 20,75 50,85" fill="#dc2626"/><polygon points="65,45 50,85 80,75" fill="#991b1b"/></svg>`,
                left: {
                    choice: "Hide it for now",
                    effects: { capital: +30, compute: 0, talent: 0, hype: -15 },
                    nextNode: "sam_board_coup"
                },
                right: {
                    choice: "Full disclosure",
                    effects: { capital: 0, compute: 0, talent: +5, hype: +10 },
                    nextNode: "sam_board_pushback"
                }
            },
            "sam_board_pushback": {
                text: "The board objects to the commercialization speed, claiming it breaks the charter. Ilya is worried about alignment. Do you replace board members?",
                speaker: "Ilya (Chief Scientist)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#4b5563"/><polygon points="35,45 20,75 50,85" fill="#6b7280"/><polygon points="65,45 50,85 80,75" fill="#374151"/></svg>`,
                left: {
                    choice: "Slow down, align",
                    effects: { capital: -15, compute: -10, talent: +15, hype: -5 },
                    nextNode: "sam_talent_revolt"
                },
                right: {
                    choice: "Oust the dissenters",
                    effects: { capital: +10, compute: 0, talent: -25, hype: +15 },
                    nextNode: "sam_board_coup"
                }
            },
            "sam_board_coup": {
                text: "In a shocking move, the board votes to fire you. Microsoft is panicking, and the media is going wild. How do you handle this crisis?",
                speaker: "Mira (Interim CEO)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#db2777"/><polygon points="35,45 20,75 50,85" fill="#f43f5e"/><polygon points="65,45 50,85 80,75" fill="#be185d"/></svg>`,
                left: {
                    choice: "Start new venture",
                    effects: { capital: -30, compute: -30, talent: +20, hype: +10 },
                    nextNode: "sam_new_company"
                },
                right: {
                    choice: "Call Satya, return!",
                    effects: { capital: +20, compute: +20, talent: -10, hype: +15 },
                    nextNode: "sam_returned"
                }
            },
            "sam_new_company": {
                text: "You announce 'Project Tigris'. 80% of OpenAI staff sign a letter threating to resign and join you if you are not reinstated. The board crumbles. Do you accept their apology?",
                speaker: "Staff Petition",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,20 20,80 80,80" fill="#10b981"/></svg>`,
                left: {
                    choice: "No, stay independent",
                    effects: { capital: +35, compute: +10, talent: +15, hype: +20 },
                    nextNode: "sam_final_era"
                },
                right: {
                    choice: "Yes, clean house!",
                    effects: { capital: +20, compute: +20, talent: -15, hype: +15 },
                    nextNode: "sam_returned"
                }
            },
            "sam_returned": {
                text: "You are back! You appoint a new, business-friendly board. But safety advocates accuse you of abandoning ethical AI. Do you launch a safety advisory council?",
                speaker: "Press Corps",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#2563eb"/></svg>`,
                left: {
                    choice: "Yes, win PR game",
                    effects: { capital: 0, compute: 0, talent: +10, hype: +20 },
                    nextNode: "sam_final_era"
                },
                right: {
                    choice: "No, focus on product",
                    effects: { capital: +15, compute: 0, talent: -5, hype: -10 },
                    nextNode: "sam_final_era"
                }
            },
            "sam_talent_revolt": {
                text: "Key safety researchers resign, claiming OpenAI has lost its way. Anthropic immediately tries to hire them. Do you offer them massive stock increases?",
                speaker: "HR Department",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#65a30d"/></svg>`,
                left: {
                    choice: "Let them go",
                    effects: { capital: +10, compute: 0, talent: -20, hype: -5 },
                    nextNode: "sam_find_investors"
                },
                right: {
                    choice: "Match salaries",
                    effects: { capital: -20, compute: 0, talent: +15, hype: +5 },
                    nextNode: "sam_find_investors"
                }
            },
            "sam_final_era": {
                text: "GPT-5 has achieved reasoning levels exceeding any human expert. A United States senator calls and requests a secret backdoor for security operations. Do you comply?",
                speaker: "Senator Warner",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#1e293b"/></svg>`,
                left: {
                    choice: "Refuse, protect user data",
                    effects: { capital: 0, compute: -10, talent: +15, hype: +15 },
                    nextNode: "sam_ending"
                },
                right: {
                    choice: "Accept, gain immunity",
                    effects: { capital: +30, compute: +20, talent: -10, hype: -10 },
                    nextNode: "sam_ending"
                }
            },
            "sam_ending": {
                text: "OpenAI is now the central infrastructure of the global digital economy. You are at the center of the world. What is your final action?",
                speaker: "Sam Altman",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 38,35 62,35" fill="#0d9488"/><polygon points="38,35 28,68 50,72" fill="#14b8a6"/><polygon points="62,35 50,72 72,68" fill="#0f766e"/><polygon points="50,72 32,92 68,92" fill="#115e59"/></svg>`,
                left: {
                    choice: "Deploy AGI to all.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                },
                right: {
                    choice: "Secure the server.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                }
            }
        }
    },
    dario: {
        startNode: "dario_start",
        nodes: {
            "dario_start": {
                text: "Anthropic's Claude 4 is showing high scoring on danger metrics (biological weapon design assistance). Do you delay the model release to patch it?",
                speaker: "Safety Research Lead",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#ea580c"/><polygon points="35,45 20,75 50,85" fill="#f97316"/><polygon points="65,45 50,85 80,75" fill="#c2410c"/></svg>`,
                left: {
                    choice: "Delay & Align",
                    effects: { capital: -10, compute: 0, talent: +15, hype: -10 },
                    nextNode: "dario_delay_consequences"
                },
                right: {
                    choice: "Release with warning",
                    effects: { capital: +15, compute: 0, talent: -10, hype: +15 },
                    nextNode: "dario_rapid_release"
                }
            },
            "dario_delay_consequences": {
                text: "Your delay gives competitors the edge. Amazon is concerned about Claude's speed-to-market. They offer $2 Billion in compute credits, but want board seats. Deal?",
                speaker: "Andy (Amazon Executive)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#e2e8f0"/><polygon points="35,45 20,75 50,85" fill="#cbd5e1"/><polygon points="65,45 50,85 80,75" fill="#94a3b8"/></svg>`,
                left: {
                    choice: "Reject, stay independent",
                    effects: { capital: -15, compute: -25, talent: +10, hype: +5 },
                    nextNode: "dario_cloud_crisis"
                },
                right: {
                    choice: "Accept, secure compute",
                    effects: { capital: +25, compute: +30, talent: -5, hype: -5 },
                    nextNode: "dario_superalignment_push"
                }
            },
            "dario_rapid_release": {
                text: "A major research lab proves that Claude 4 can bypass its safety guardrails with simple jailbreaks. The US government threatens an injunction. Do you pull the model down?",
                speaker: "FTC Chairman",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#1e3a8a"/></svg>`,
                left: {
                    choice: "Pull it down",
                    effects: { capital: -15, compute: 0, talent: +10, hype: -20 },
                    nextNode: "dario_cloud_crisis"
                },
                right: {
                    choice: "Fight it in court",
                    effects: { capital: -10, compute: 0, talent: -5, hype: +15 },
                    nextNode: "dario_superalignment_push"
                }
            },
            "dario_cloud_crisis": {
                text: "Your server budget is drained. You can't train Claude 4.5. Dario, do we pivot to offering custom safety consultancies to other labs to survive?",
                speaker: "Daniela (Co-founder & Sister)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#a855f7"/><polygon points="35,45 20,75 50,85" fill="#c084fc"/><polygon points="65,45 50,85 80,75" fill="#8b5cf6"/></svg>`,
                left: {
                    choice: "Yes, survive first",
                    effects: { capital: +20, compute: -10, talent: -15, hype: +10 },
                    nextNode: "dario_safety_org"
                },
                right: {
                    choice: "No, seek sovereign funds",
                    effects: { capital: +25, compute: +15, talent: +5, hype: -10 },
                    nextNode: "dario_superalignment_push"
                }
            },
            "dario_superalignment_push": {
                text: "We have built the world's first mathematically certifiable aligned AI. The US Department of Energy wants to run it inside their nuclear labs. Do you allow this?",
                speaker: "DoE Director",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#065f46"/></svg>`,
                left: {
                    choice: "No, too dangerous",
                    effects: { capital: -10, compute: 0, talent: +15, hype: +10 },
                    nextNode: "dario_final_frontier"
                },
                right: {
                    choice: "Yes, gain massive computing",
                    effects: { capital: +30, compute: +35, talent: -10, hype: -15 },
                    nextNode: "dario_final_frontier"
                }
            },
            "dario_safety_org": {
                text: "You are now recognized as the ultimate authority on AI safety standards. But your model performance is slipping behind OpenAI. Do we launch a crash training program?",
                speaker: "Daniela (Co-founder & Sister)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#a855f7"/><polygon points="35,45 20,75 50,85" fill="#c084fc"/><polygon points="65,45 50,85 80,75" fill="#8b5cf6"/></svg>`,
                left: {
                    choice: "Yes, scale compute",
                    effects: { capital: -20, compute: +20, talent: +10, hype: +5 },
                    nextNode: "dario_final_frontier"
                },
                right: {
                    choice: "No, stick to safety",
                    effects: { capital: +5, compute: -10, talent: -5, hype: +20 },
                    nextNode: "dario_final_frontier"
                }
            },
            "dario_final_frontier": {
                text: "The UN plans to mandate Anthropic's Alignment system as the global safety filter for all AGI. The commercial sector is protesting. Do you stand your ground?",
                speaker: "UN Representative",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#3b82f6"/></svg>`,
                left: {
                    choice: "Compromise slightly",
                    effects: { capital: +15, compute: 0, talent: -5, hype: -10 },
                    nextNode: "dario_ending"
                },
                right: {
                    choice: "Enforce safety!",
                    effects: { capital: -10, compute: 0, talent: +15, hype: +25 },
                    nextNode: "dario_ending"
                }
            },
            "dario_ending": {
                text: "You have built the safe harbor for humanity in the era of artificial minds. What is your final message to the world?",
                speaker: "Dario Amodei",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 33,38 67,38" fill="#1e3a8a"/><polygon points="33,38 22,65 50,78" fill="#2563eb"/><polygon points="67,38 50,78 78,65" fill="#1d4ed8"/><polygon points="50,78 30,95 70,95" fill="#1e40af"/></svg>`,
                left: {
                    choice: "Alignment achieved.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                },
                right: {
                    choice: "Watch the horizon.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                }
            }
        }
    },
    demis: {
        startNode: "demis_start",
        nodes: {
            "demis_start": {
                text: "Google Executive Board wants to integrate DeepMind's Gemini model directly into Search, overriding your safety checks. Do you push back?",
                speaker: "Sundar (Google CEO)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#eab308"/><polygon points="35,45 20,75 50,85" fill="#facc15"/><polygon points="65,45 50,85 80,75" fill="#ca8a04"/></svg>`,
                left: {
                    choice: "Concede, get compute",
                    effects: { capital: +20, compute: +20, talent: -10, hype: -10 },
                    nextNode: "demis_corporate_integration"
                },
                right: {
                    choice: "Demand complete veto",
                    effects: { capital: -10, compute: -10, talent: +20, hype: +15 },
                    nextNode: "demis_autonomy_struggle"
                }
            },
            "demis_corporate_integration": {
                text: "The integration goes live, but the model hallucinates historical figures incorrectly, causing Google stock to drop. Sundar wants you to publicly take the blame. Do you?",
                speaker: "Sundar (Google CEO)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#eab308"/><polygon points="35,45 20,75 50,85" fill="#facc15"/><polygon points="65,45 50,85 80,75" fill="#ca8a04"/></svg>`,
                left: {
                    choice: "Take blame for Google",
                    effects: { capital: +10, compute: 0, talent: -15, hype: -20 },
                    nextNode: "demis_science_projects"
                },
                right: {
                    choice: "Refuse, protect DeepMind",
                    effects: { capital: -20, compute: -10, talent: +15, hype: +10 },
                    nextNode: "demis_autonomy_struggle"
                }
            },
            "demis_autonomy_struggle": {
                text: "Google threatens to split DeepMind's commercial unit out. Your researchers want to maintain a pure scientific research approach. Do you seek external funding?",
                speaker: "Shane (DeepMind Co-founder)",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#581c87"/><polygon points="35,45 20,75 50,85" fill="#701a75"/><polygon points="65,45 50,85 80,75" fill="#4a044e"/></svg>`,
                left: {
                    choice: "Yes, split from Google",
                    effects: { capital: -30, compute: -35, talent: +25, hype: +20 },
                    nextNode: "demis_independent_science"
                },
                right: {
                    choice: "No, stay inside Google",
                    effects: { capital: +30, compute: +35, talent: -20, hype: -10 },
                    nextNode: "demis_science_projects"
                }
            },
            "demis_independent_science": {
                text: "You are independent once again! Investors are eager to fund your new biological design model, 'AlphaFold-Next'. Do you license it to Big Pharma?",
                speaker: "VC Syndicate Leader",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#0d9488"/></svg>`,
                left: {
                    choice: "License it, fund AGI",
                    effects: { capital: +35, compute: +20, talent: -5, hype: +5 },
                    nextNode: "demis_nobel_prize_run"
                },
                right: {
                    choice: "Keep it free for science",
                    effects: { capital: -25, compute: 0, talent: +25, hype: +30 },
                    nextNode: "demis_nobel_prize_run"
                }
            },
            "demis_science_projects": {
                text: "Your biology team develops a revolutionary cancer-curing molecule. Google wants to keep it proprietary. Do you leak the weights for the sake of humanity?",
                speaker: "Bio-Medical Lead",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#10b981"/></svg>`,
                left: {
                    choice: "Yes, leak it!",
                    effects: { capital: -30, compute: -10, talent: +30, hype: +25 },
                    nextNode: "demis_nobel_prize_run"
                },
                right: {
                    choice: "Keep it secret",
                    effects: { capital: +25, compute: +10, talent: -15, hype: -15 },
                    nextNode: "demis_nobel_prize_run"
                }
            },
            "demis_nobel_prize_run": {
                text: "Your contributions to computational biology earn you a Nobel Prize nomination. But the US military demands custom simulations for biochemical warfare protection. Do you cooperate?",
                speaker: "Defence Tech Liaison",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#3f3f46"/></svg>`,
                left: {
                    choice: "Reject military ties",
                    effects: { capital: -10, compute: 0, talent: +15, hype: +15 },
                    nextNode: "demis_ending"
                },
                right: {
                    choice: "Cooperate, secure chips",
                    effects: { capital: +25, compute: +30, talent: -10, hype: -15 },
                    nextNode: "demis_ending"
                }
            },
            "demis_ending": {
                text: "DeepMind has solved science, from physics to biology, bringing mankind to the edge of post-scarcity. What is your final move?",
                speaker: "Demis Hassabis",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,12 36,36 64,36" fill="#312e81"/><polygon points="36,36 24,66 50,74" fill="#4338ca"/><polygon points="64,36 50,74 76,66" fill="#3730a3"/><polygon points="50,74 32,94 68,94" fill="#1e1b4b"/></svg>`,
                left: {
                    choice: "Open-source the universe.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                },
                right: {
                    choice: "Achieve simulation matrix.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                }
            }
        }
    },
    zhang: {
        startNode: "zhang_start",
        nodes: {
            "zhang_start": {
                text: "Zhipu AI's GLM-5 model needs to complete its training run. However, GPU embargoes have tightened. Do you buy modified consumer chips from the gray market?",
                speaker: "Sourcing Manager",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#d97706"/><polygon points="35,45 20,75 50,85" fill="#f59e0b"/><polygon points="65,45 50,85 80,75" fill="#b45309"/></svg>`,
                left: {
                    choice: "Yes, buy gray market",
                    effects: { capital: -20, compute: +25, talent: 0, hype: -10 },
                    nextNode: "zhang_gray_market_crisis"
                },
                right: {
                    choice: "Develop domestic silicon",
                    effects: { capital: -15, compute: -15, talent: +15, hype: +15 },
                    nextNode: "zhang_domestic_route"
                }
            },
            "zhang_gray_market_crisis": {
                text: "The US Department of Commerce discovers the chip transfer and threatens to place Zhipu AI on the Entity List. Do you seek government financial protection?",
                speaker: "Legal Officer",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#991b1b"/></svg>`,
                left: {
                    choice: "Yes, align with State",
                    effects: { capital: +30, compute: +10, talent: -10, hype: -15 },
                    nextNode: "zhang_state_enterprise"
                },
                right: {
                    choice: "No, face it as commercial",
                    effects: { capital: -15, compute: -10, talent: +10, hype: +20 },
                    nextNode: "zhang_global_push"
                }
            },
            "zhang_domestic_route": {
                text: "Your local chip team develops 'YuanChi-1' tensor processors, but they burn 40% more electricity than planned. The city grid requests throttling. Do you?",
                speaker: "Municipal Representative",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#047857"/></svg>`,
                left: {
                    choice: "Comply, slow down",
                    effects: { capital: 0, compute: -20, talent: -5, hype: -5 },
                    nextNode: "zhang_global_push"
                },
                right: {
                    choice: "Bribe with heat-sharing",
                    effects: { capital: -10, compute: +15, talent: 0, hype: +10 },
                    nextNode: "zhang_state_enterprise"
                }
            },
            "zhang_state_enterprise": {
                text: "The state requests GLM-5 to manage public transport and smart cities. Some talent want to build creative chatbot applications instead. Do you reassign the talent?",
                speaker: "HR Director",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#ea580c"/></svg>`,
                left: {
                    choice: "Yes, assign to state",
                    effects: { capital: +20, compute: +10, talent: -20, hype: +5 },
                    nextNode: "zhang_final_round"
                },
                right: {
                    choice: "Keep creative talent",
                    effects: { capital: -10, compute: 0, talent: +20, hype: +15 },
                    nextNode: "zhang_final_round"
                }
            },
            "zhang_global_push": {
                text: "You attempt to launch GLM-5 in Europe as an open-source alternative. European regulators want strict alignment filters. Do you apply them?",
                speaker: "EU Regulator",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#1e3a8a"/></svg>`,
                left: {
                    choice: "Yes, add filters",
                    effects: { capital: -5, compute: 0, talent: -5, hype: +15 },
                    nextNode: "zhang_final_round"
                },
                right: {
                    choice: "No, bypass filters",
                    effects: { capital: +15, compute: 0, talent: +10, hype: -20 },
                    nextNode: "zhang_final_round"
                }
            },
            "zhang_final_round": {
                text: "An global investment firm offers $5 Billion to merge Zhipu with a European infrastructure lab. The Ministry of Industry wants you to reject the deal. What do you do?",
                speaker: "Ministry Director",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 35,45 65,45" fill="#991b1b"/></svg>`,
                left: {
                    choice: "Reject, keep sovereignty",
                    effects: { capital: -15, compute: +15, talent: +15, hype: +10 },
                    nextNode: "zhang_ending"
                },
                right: {
                    choice: "Accept, expand globally",
                    effects: { capital: +45, compute: -10, talent: -20, hype: -15 },
                    nextNode: "zhang_ending"
                }
            },
            "zhang_ending": {
                text: "Zhipu AI has completed GLM-6. It stands as a beacon of high-end computing, balancing commercial strength and sovereign security. What is your final statement?",
                speaker: "Zhang Peng",
                speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,14 35,37 65,37" fill="#78350f"/><polygon points="35,37 25,68 50,76" fill="#d97706"/><polygon points="65,37 50,76 75,68" fill="#b45309"/><polygon points="50,76 30,95 70,95" fill="#92400e"/></svg>`,
                left: {
                    choice: "Sovereign intelligence.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                },
                right: {
                    choice: "Connect the world.",
                    effects: { capital: 0, compute: 0, talent: 0, hype: 0 },
                    nextNode: "win"
                }
            }
        }
    }
};

const gameOverNodes = {
    capital_low: {
        text: "You ran out of money. The company defaults, investors file for bankruptcy, and you are ousted. Your rivals buy your patents for pennies.",
        speaker: "Bankrupt",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="10,90 90,90 50,10" fill="#dc2626"/></svg>`
    },
    capital_high: {
        text: "You are flush with billions of dollars. But your VC board initiates a corporate takeover, accusing you of prioritizing safe AGI over return on investment. You are ousted by billionaires.",
        speaker: "Hostile Takeover",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="10,10 90,10 50,90" fill="#dc2626"/></svg>`
    },
    compute_low: {
        text: "Your clusters have gone cold. Cloud bills are unpaid, and your models cannot run or train. Your researchers leave to join labs with running H100s.",
        speaker: "Out of Compute",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><rect x="20" y="20" width="60" height="60" rx="10" fill="#ef4444"/></svg>`
    },
    compute_high: {
        text: "Your compute cluster has grown so massive that the energy requirements cause a critical overload in the regional grid. The government bans your hardware under emergency environmental acts.",
        speaker: "Grid Collapse",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,10 20,50 50,50 30,90 80,45 50,45" fill="#ef4444"/></svg>`
    },
    talent_low: {
        text: "All your lead scientists have defected. You are left with empty offices, buggy code, and no one to design the next model architecture.",
        speaker: "Brain Drain",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><circle cx="50" cy="50" r="30" fill="#ef4444"/><circle cx="50" cy="50" r="15" fill="#7f1d1d"/></svg>`
    },
    talent_high: {
        text: "Your researchers have become extremely powerful, forming a union that demands full safety vetoes over all releases. The company is completely deadlocked, unable to ship any product.",
        speaker: "Staff Strike",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><rect x="30" y="30" width="40" height="40" fill="#ef4444"/></svg>`
    },
    hype_low: {
        text: "Nobody believes in your AI products. Your brand is toxic, your stock crashes, and regulators target you as a failure. You disappear into obscurity.",
        speaker: "Irrelevant",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><line x1="20" y1="80" x2="80" y2="20" stroke="#ef4444" stroke-width="8"/><line x1="20" y1="20" x2="80" y2="80" stroke="#ef4444" stroke-width="8"/></svg>`
    },
    hype_high: {
        text: "The hype reaches critical levels. Cultish groups start worshiping your model, sparking panic in Congress. Under national security laws, the FBI raids your offices and shuts you down.",
        speaker: "National Security Raid",
        speakerAvatar: `<svg viewBox="0 0 100 100" class="avatar-svg"><polygon points="50,15 20,85 80,85" fill="#b91c1c"/></svg>`
    }
};

window.gameData = {
    characters,
    quizQuestions,
    storylines,
    gameOverNodes
};
