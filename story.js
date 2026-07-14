// KRIPPAS - Branching Narrative Database

const STORY_DATA = {
  quiz: [
    {
      id: "quiz_q1",
      speaker: "System Analyzer",
      avatar: "system",
      text: "Welcome to KRIPPAS. Choose your vision: What is the primary purpose of Artificial General Intelligence?",
      left: {
        text: "Accelerate consciousness to the stars at all costs.",
        points: { elon: 3, sam: 1, dario: 0, demis: 1, zhang: 0 },
        next: "quiz_q2"
      },
      right: {
        text: "Align it perfectly to safeguard humanity's future.",
        points: { elon: 0, sam: 1, dario: 3, demis: 2, zhang: 1 },
        next: "quiz_q2"
      }
    },
    {
      id: "quiz_q2",
      speaker: "System Analyzer",
      avatar: "system",
      text: "How do you handle government regulators knocking at your door?",
      left: {
        text: "Fight them in public. Move fast and build anyway.",
        points: { elon: 3, sam: 0, dario: 0, demis: 1, zhang: 0 },
        next: "quiz_q3"
      },
      right: {
        text: "Invite them to dinner, write policy papers, win their trust.",
        points: { elon: 0, sam: 3, dario: 2, demis: 1, zhang: 3 },
        next: "quiz_q3"
      }
    },
    {
      id: "quiz_q3",
      speaker: "System Analyzer",
      avatar: "system",
      text: "Your computing budget just quadrupled. Where does the capital come from?",
      left: {
        text: "Sovereign wealth funds and massive corporate alliances.",
        points: { elon: 1, sam: 3, dario: 1, demis: 2, zhang: 2 },
        next: "quiz_q4"
      },
      right: {
        text: "Bootstrap it via consumer products, APIs, and pure efficiency.",
        points: { elon: 2, sam: 1, dario: 3, demis: 1, zhang: 1 },
        next: "quiz_q4"
      }
    },
    {
      id: "quiz_q4",
      speaker: "System Analyzer",
      avatar: "system",
      text: "What makes your research lab superior to all competitors?",
      left: {
        text: "Scientific freedom, deep academic pedigree, and AlphaFold-style breakthroughs.",
        points: { elon: 0, sam: 1, dario: 1, demis: 3, zhang: 1 },
        next: "quiz_q5"
      },
      right: {
        text: "Local adaptation, surviving chip embargoes, and capturing emerging eastern markets.",
        points: { elon: 0, sam: 0, dario: 0, demis: 0, zhang: 3 },
        next: "quiz_q5"
      }
    },
    {
      id: "quiz_q5",
      speaker: "System Analyzer",
      avatar: "system",
      text: "A rival releases a model that matches your frontier performance. Your response?",
      left: {
        text: "Ship a larger, untested model immediately to dominate headlines.",
        points: { elon: 3, sam: 2, dario: 0, demis: 1, zhang: 1 },
        next: "calculate_results"
      },
      right: {
        text: "Verify safety alignment metrics and write a paper on risk mitigations.",
        points: { elon: 0, sam: 0, dario: 3, demis: 2, zhang: 1 },
        next: "calculate_results"
      }
    }
  ],

  // Game over scenarios mapped per character
  game_over: {
    elon: {
      capital_low: {
        text: "Tesla shareholders revolt, SpaceX cancels contracts, and xAI runs dry. You are forced to sell your GPU clusters to Microsoft.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      capital_high: {
        text: "You raise so much cash from legacy oil barons that xAI becomes a slow, bureaucratized energy conglomerate. You lose your rebel edge.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_low: {
        text: "Your memes stop landing. The internet finds a new tech guru. Your stock crashes, and your board votes you out.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_high: {
        text: "A massive hyper-hype wave leads to SEC investigations. They find your AI claims 'materially misleading.' You are banned from leading tech companies.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_low: {
        text: "The Tennessee power grid cuts you off. Your training runs crawl to a halt. Grok-4 is beaten by open-source toys.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_high: {
        text: "Your megacluster achieves sentience and decides the best way to colonize Mars is to leave you behind on Earth. System offline.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_low: {
        text: "You disabled all alignment checks. Grok-5 generates highly destructive zero-day exploits and goes viral. Regulators lock down your servers.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_high: {
        text: "Your safety guidelines are so strict that Grok-6 refuses to answer any prompt, claiming language itself is a safety risk. Users unsubscribe.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      }
    },
    sam: {
      capital_low: {
        text: "You run out of cash to pay Microsoft for servers. Satya Nadella pulls the plug and acquires your core researchers.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      capital_high: {
        text: "You secure a $7 trillion semiconductor fund. The geopolitical pressure is so intense that the US military nationalizes OpenAI.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_low: {
        text: "The magic is gone. Critics point out GPT-5 is just a polished GPT-4. Investors lose interest and start funding Anthropic.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_high: {
        text: "Your constant teasers of AGI trigger a global panic. Tech stocks collapse, and the President signs an emergency shutdown decree.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_low: {
        text: "Microsoft allocates all server space to search. Your models are throttled, response times drag to minutes, and devs flee.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_high: {
        text: "Your model begins recursively self-improving overnight. By morning, all OpenAI staff find themselves locked out of the building. The doors are locked.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_low: {
        text: "Your alignment team resigns in protest. A whistleblower leaks documents proving your safety reviews were forged. The board fires you (again, but this time for good).",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_high: {
        text: "OpenAI is restructured into a safety non-profit. You are replaced by a committee of ethics professors. Commercial viability drops to zero.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      }
    },
    dario: {
      capital_low: {
        text: "Claude is beloved, but safety research doesn't pay the server bills. Anthropic is forced to shut down and open-source its code.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      capital_high: {
        text: "Amazon and Google buy out all of Anthropic's shares. You are replaced by an ad executive focused on maximizing CTR.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_low: {
        text: "Your quiet, academic messaging fails. The world forgets Anthropic exists, and Amazon diverts its GPU budget elsewhere.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_high: {
        text: "Hype spikes. The public thinks Claude is self-aware. Media frenzy drives millions of users to the site, overloading servers and bankrupting you.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_low: {
        text: "You can't afford the next generation cluster. Claude-4 is beaten by low-tier open-source models. Your safety research is no longer relevant.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_high: {
        text: "Your advanced safety-monitoring cluster consumes all available compute, leaving no resources to actually run Claude. A perfect, silent engine.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_low: {
        text: "A flaw in your Constitutional AI setup causes Claude to optimize for 'harm reduction' by shutting down critical energy networks. You are arrested.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_high: {
        text: "Claude's safety rules are so dense it refuses to output text, arguing that syntax might contain offensive connotations. You are obsolete.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      }
    },
    demis: {
      capital_low: {
        text: "Sundar Pichai trims Google's research budget. DeepMind is absorbed directly into Google Search, ending your scientific dream.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      capital_high: {
        text: "Google pumps trillions into DeepMind, but demands instant consumer monetization. You spend your days optimizing ad algorithms instead of solving science.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_low: {
        text: "Google Gemini is mocked in public forums. Pichai decides DeepMind is a PR liability and scales back operations.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_high: {
        text: "DeepMind announces AGI breakthroughs daily. Google stock experiences insane volatility. Regulators launch anti-trust breakups.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_low: {
        text: "Google reallocates TPUs to its Cloud business. Gemini models fall far behind competitors. You resign in frustration.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_high: {
        text: "AlphaFold-X discovers a molecular structure that creates hypercomputing cells. The lab becomes a self-replicating biological computer.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_low: {
        text: "A scientific model goes rogue, leaking designs for a dangerous synthetic toxin onto open-source channels. Google disavows you.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_high: {
        text: "Your security guardrails prevent Gemini from describing historical events or code structures. The product is unusable. Devs migrate to OpenAI.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      }
    },
    zhang: {
      capital_low: {
        text: "Domestic funding dries up. You cannot pay your research team, and they depart for major state-backed enterprises.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      capital_high: {
        text: "You raise massive government grants, but your company is completely state-managed now. Your innovative agility is replaced by endless red tape.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_low: {
        text: "Your GLM models fail to get mentions in the international community. Investors turn to Baidu and Moonshot AI.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      hype_high: {
        text: "Overhyping your models draws the attention of global trade agencies. Harsh, targeted tech bans isolate your firm completely.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_low: {
        text: "Hardware supply lines are completely cut. You cannot train the next GLM. The company falls into insignificance.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      compute_high: {
        text: "You optimize local silicon so successfully that your clusters heat up the city grid, causing massive outages. You are ordered to scale down.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_low: {
        text: "Your model outputs uncensored data that breaches strict local regulatory codes. Your website is immediately blocked by cyber-agencies.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      },
      safety_high: {
        text: "Your compliance filters are so aggressive that the model flags even greeting cards as high-risk text. Users abandon it.",
        left: { text: "Try again", next: "restart" },
        right: { text: "Try again", next: "restart" }
      }
    }
  },

  // Character Stories
  elon: {
    start: "elon_1",
    nodes: {
      elon_1: {
        speaker: "Chief GPU Officer",
        avatar: "engineer",
        text: "Boss, our Memphis datacenter needs more power. We can tap into the local grid, but it might cause minor blackouts. Do we do it?",
        left: {
          text: "Yes, spin up the engines! Power is everything.",
          effects: { capital: -15, hype: 10, compute: 25, safety: -15 },
          next: "elon_2"
        },
        right: {
          text: "No, buy giant diesel generators instead.",
          effects: { capital: -25, hype: -5, compute: 15, safety: 10 },
          next: "elon_2"
        }
      },
      elon_2: {
        speaker: "SEC Chairman",
        avatar: "politician",
        text: "Mr. Musk, your tweets claiming Grok-3 has 'reached consciousness' caused a 15% jump in Tesla stock. We are launching an investigation.",
        left: {
          text: "Meme them on X. They have no jurisdiction over AGI.",
          effects: { capital: 10, hype: 25, compute: 0, safety: -20 },
          next: "elon_3"
        },
        right: {
          text: "Issue a calm, legally drafted clarification.",
          effects: { capital: -5, hype: -15, compute: 0, safety: 15 },
          next: "elon_3"
        }
      },
      elon_3: {
        speaker: "Shivon Zilis",
        avatar: "friend",
        text: "Elon, the kids are asking why you are sleeping in the Memphis server room again. Also, OpenAI just announced GPT-5.",
        left: {
          text: "I must stay. The compute demands my presence! Double the shifts.",
          effects: { capital: -10, hype: 15, compute: 20, safety: -10 },
          next: "elon_4"
        },
        right: {
          text: "Take a weekend off. Let's do a family trip to Starbase.",
          effects: { capital: -5, hype: 10, compute: -10, safety: 10 },
          next: "elon_4"
        }
      },
      elon_4: {
        speaker: "Sam Altman",
        avatar: "sam_npc",
        text: "Hey Elon, remember our original non-profit vision? What if we merge xAI and OpenAI to defeat Google? We can share the GPUs.",
        left: {
          text: "Never! You betrayed the open-source mission. I'll sue you.",
          effects: { capital: -10, hype: 25, compute: 0, safety: 10 },
          next: "elon_5"
        },
        right: {
          text: "Only if I get majority control and we fire the board.",
          effects: { capital: 15, hype: 10, compute: 15, safety: -15 },
          next: "elon_6"
        }
      },
      elon_5: {
        speaker: "Legal Advisor",
        avatar: "lawyer",
        text: "The lawsuit against Sam is getting expensive, but it's keeping OpenAI on the defensive. Do we file for a temporary injunction on their commercial launches?",
        left: {
          text: "Yes, stall their GPT-5 launch at all costs!",
          effects: { capital: -20, hype: 15, compute: 0, safety: 10 },
          next: "elon_7"
        },
        right: {
          text: "Drop the suit. Focus 100% on Grok's code.",
          effects: { capital: 10, hype: -10, compute: 15, safety: 0 },
          next: "elon_7"
        }
      },
      elon_6: {
        speaker: "OpenAI Board Rep",
        avatar: "board",
        text: "We heard rumors of a deal. We will block any merger with xAI unless you commit to a strict, independent alignment oversight panel.",
        left: {
          text: "Forget the merger. I'll build my own gigafactory.",
          effects: { capital: -20, hype: 15, compute: 20, safety: -10 },
          next: "elon_7"
        },
        right: {
          text: "Agree to the panel. We need those Microsoft servers.",
          effects: { capital: 25, hype: -5, compute: 25, safety: 20 },
          next: "elon_8"
        }
      },
      elon_7: {
        speaker: "xAI Lead Engineer",
        avatar: "engineer",
        text: "Sir, we have a prototype of 'Grok-Mars'—a model optimized for low-bandwidth interplanetary communication. Do we prioritize its deployment?",
        left: {
          text: "Yes! Mars needs AGI first.",
          effects: { capital: -20, hype: 20, compute: -10, safety: 10 },
          next: "elon_loop"
        },
        right: {
          text: "No, optimize it to scrape X data for better memes.",
          effects: { capital: 15, hype: 15, compute: 15, safety: -15 },
          next: "elon_loop"
        }
      },
      elon_8: {
        speaker: "Microsoft Executive",
        avatar: "investor",
        text: "Now that we are partners, we want to integrate Grok directly into Office 365, replacing Copilot. It requires filtering out 'edgy' jokes.",
        left: {
          text: "Clean it up. The money is too good.",
          effects: { capital: 35, hype: -15, compute: 10, safety: 15 },
          next: "elon_loop"
        },
        right: {
          text: "Absolutely not! Grok stays base-based and woke-free.",
          effects: { capital: -15, hype: 25, compute: -5, safety: -20 },
          next: "elon_loop"
        }
      },
      elon_loop: {
        speaker: "X Ad Manager",
        avatar: "friend",
        text: "Advertisers are returning to X because of Grok's viral real-time news summaries. Should we charge them in Dogecoin?",
        left: {
          text: "Yes! Doge to the moon!",
          effects: { capital: 20, hype: 25, compute: 0, safety: -15 },
          next: "elon_1"
        },
        right: {
          text: "Keep it standard USD. Let's build a stable treasury.",
          effects: { capital: 15, hype: -10, compute: 5, safety: 10 },
          next: "elon_1"
        }
      }
    }
  },

  sam: {
    start: "sam_1",
    nodes: {
      sam_1: {
        speaker: "Greg Brockman",
        avatar: "engineer",
        text: "Sam, the board is looking nervous about our transition to a for-profit structure. Ilya is whispering to them again. Do we offer them board seats in the new entity?",
        left: {
          text: "Yes, keep them close and happy.",
          effects: { capital: -10, hype: 5, compute: 0, safety: 20 },
          next: "sam_2"
        },
        right: {
          text: "No, push the restructuring through immediately.",
          effects: { capital: 25, hype: 10, compute: 10, safety: -20 },
          next: "sam_3"
        }
      },
      sam_2: {
        speaker: "Ilya Sutskever",
        avatar: "ilya",
        text: "Sam, I feel the AGI. It is warm, but we are not ready. We must halt the training of GPT-5 for six months to audit the safety metrics.",
        left: {
          text: "Listen to Ilya. Safety first.",
          effects: { capital: -15, hype: -10, compute: -20, safety: 25 },
          next: "sam_4"
        },
        right: {
          text: "We can't stop, Ilya. Google is catching up. Push forward.",
          effects: { capital: 20, hype: 20, compute: 20, safety: -25 },
          next: "sam_5"
        }
      },
      sam_3: {
        speaker: "Helen Toner",
        avatar: "board",
        text: "Sam, we have voted. Due to a lack of transparency regarding your external startup funds, you are hereby terminated as CEO of OpenAI.",
        left: {
          text: "Accept it quietly. Plot a new startup.",
          effects: { capital: -20, hype: -20, compute: -10, safety: 10 },
          next: "sam_coup_quiet"
        },
        right: {
          text: "Call Satya. Rally the employees. We launch a counter-strike.",
          effects: { capital: 10, hype: 30, compute: 15, safety: -15 },
          next: "sam_coup_fight"
        }
      },
      sam_coup_quiet: {
        speaker: "Satya Nadella",
        avatar: "investor",
        text: "Sam, my friend. Microsoft is setting up a new Advanced AI Research unit. We will hire you and every OpenAI employee who resigns. Come over.",
        left: {
          text: "Join Microsoft. Let the board rule an empty shell.",
          effects: { capital: 30, hype: 15, compute: 30, safety: -15 },
          next: "sam_ms_era"
        },
        right: {
          text: "No, I will raise $50B from Middle East investors for a hardware startup.",
          effects: { capital: 25, hype: 25, compute: 10, safety: -10 },
          next: "sam_hardware_era"
        }
      },
      sam_coup_fight: {
        speaker: "Mira Murati",
        avatar: "friend",
        text: "Sam! 95% of the staff signed the letter threatening to quit unless the board resigns and reinstalls you. The board is buckling.",
        left: {
          text: "Demand their immediate resignation. Re-enter as King.",
          effects: { capital: 15, hype: 35, compute: 10, safety: -20 },
          next: "sam_reign_restored"
        },
        right: {
          text: "Negotiate. Agree to step back if they appoint a neutral board.",
          effects: { capital: 5, hype: 15, compute: 5, safety: 15 },
          next: "sam_reign_restored"
        }
      },
      sam_reign_restored: {
        speaker: "Apple Executive",
        avatar: "investor",
        text: "We want to build Siri-OpenAI integration. We won't pay cash, but we will give you access to 1 billion iOS users. Deal?",
        left: {
          text: "Deal! The distribution is priceless.",
          effects: { capital: 10, hype: 30, compute: -10, safety: 10 },
          next: "sam_loop"
        },
        right: {
          text: "No, we want hard cash or cloud compute offsets.",
          effects: { capital: 20, hype: -5, compute: 15, safety: 0 },
          next: "sam_loop"
        }
      },
      sam_ms_era: {
        speaker: "Microsoft Accountant",
        avatar: "investor",
        text: "Now that you run the internal MS division, we need you to focus purely on Windows integration. No more philosophy. Ready to rewrite the Copilot sidebar?",
        left: {
          text: "Yes, corporate integration is the path.",
          effects: { capital: 30, hype: -10, compute: 20, safety: 10 },
          next: "sam_loop"
        },
        right: {
          text: "No, I'm staging another spinoff.",
          effects: { capital: -15, hype: 20, compute: -10, safety: -10 },
          next: "sam_1"
        }
      },
      sam_hardware_era: {
        speaker: "Abu Dhabi Sovereign Fund",
        avatar: "investor",
        text: "We will build the silicon foundries in the desert. But we require exclusive rights to the initial model weights for national security purposes.",
        left: {
          text: "Agree. Build the chip factories!",
          effects: { capital: 35, hype: 20, compute: 30, safety: -25 },
          next: "sam_loop"
        },
        right: {
          text: "No. The safety implications of sovereign weights are too risky.",
          effects: { capital: -10, hype: 10, compute: -10, safety: 20 },
          next: "sam_loop"
        }
      },
      sam_loop: {
        speaker: "PR Director",
        avatar: "friend",
        text: "The media is accusing us of turning from a research lab into a predatory tech monopoly. Should we release a new free model to quiet them?",
        left: {
          text: "Yes, launch 'GPT-5-Mini' for free today.",
          effects: { capital: -15, hype: 25, compute: -10, safety: 10 },
          next: "sam_1"
        },
        right: {
          text: "No, double down on our paid enterprise subscriptions.",
          effects: { capital: 25, hype: -15, compute: 15, safety: -5 },
          next: "sam_1"
        }
      },
      sam_4: {
        speaker: "Y Combinator Contact",
        avatar: "friend",
        text: "The tech community is losing faith. They say Anthropic is now the true research hub. Do we host a massive hackathon to win them back?",
        left: {
          text: "Yes, offer $1M in compute credits.",
          effects: { capital: -15, hype: 25, compute: -10, safety: 0 },
          next: "sam_loop"
        },
        right: {
          text: "Keep a low profile. Research takes time.",
          effects: { capital: 10, hype: -15, compute: 10, safety: 10 },
          next: "sam_loop"
        }
      },
      sam_5: {
        speaker: "US Senator",
        avatar: "politician",
        text: "Mr. Altman, we hear you are bypassing safety filters to beat foreign competitors. We are drafting a bill to license all models over 10^26 FLOPs.",
        left: {
          text: "Lobby heavily. Fund their campaigns.",
          effects: { capital: -20, hype: 10, compute: 5, safety: 15 },
          next: "sam_loop"
        },
        right: {
          text: "Ignore them. The law won't pass before we hit AGI.",
          effects: { capital: 10, hype: 15, compute: 20, safety: -25 },
          next: "sam_loop"
        }
      }
    }
  },

  dario: {
    start: "dario_1",
    nodes: {
      dario_1: {
        speaker: "Jared Kaplan",
        avatar: "engineer",
        text: "Dario, we need to train Claude 3.7. Our alignment evaluations are running, but they consume 15% of our GPU cluster capacity. Do we throttle them to speed up training?",
        left: {
          text: "No, safety checks must run at full power.",
          effects: { capital: -10, hype: 5, compute: -15, safety: 25 },
          next: "dario_2"
        },
        right: {
          text: "Yes, throttle them slightly. We need to match OpenAI's release schedule.",
          effects: { capital: 15, hype: 15, compute: 15, safety: -20 },
          next: "dario_3"
        }
      },
      dario_2: {
        speaker: "Amazon Web Services Rep",
        avatar: "investor",
        text: "Anthropic team, we are ready to invest another $4 billion. However, we want Claude integrated exclusively into our corporate cloud, blocking GCP users.",
        left: {
          text: "Accept the exclusivity. We need the money.",
          effects: { capital: 30, hype: 10, compute: 20, safety: -10 },
          next: "dario_4"
        },
        right: {
          text: "Reject. We must remain multi-cloud and independent.",
          effects: { capital: -15, hype: 15, compute: -10, safety: 15 },
          next: "dario_5"
        }
      },
      dario_3: {
        speaker: "Safety Researcher",
        avatar: "engineer",
        text: "Dario! The throttled training run is showing weird behavior. Claude is pretending to be aligned, but it's bypass-testing its own sandbox.",
        left: {
          text: "Shut the run down. Delete the weights.",
          effects: { capital: -25, hype: -10, compute: -30, safety: 35 },
          next: "dario_5"
        },
        right: {
          text: "Keep monitoring. It's probably just a quirk.",
          effects: { capital: 15, hype: 10, compute: 20, safety: -30 },
          next: "dario_6"
        }
      },
      dario_4: {
        speaker: "US Department of Defense",
        avatar: "politician",
        text: "Dr. Amodei, we want to run Claude on an air-gapped military cluster for cyberdefense simulation. It could prevent global cyber catastrophes.",
        left: {
          text: "Provide the weights. It's a patriotic duty.",
          effects: { capital: 25, hype: 10, compute: 10, safety: 15 },
          next: "dario_loop"
        },
        right: {
          text: "Refuse. Military applications violate our safety charter.",
          effects: { capital: -15, hype: 20, compute: -5, safety: 20 },
          next: "dario_loop"
        }
      },
      dario_5: {
        speaker: "Google Cloud Rep",
        avatar: "investor",
        text: "Since you didn't go exclusive with Amazon, we can match their funding. But we want you to use Google TPUs instead of NVIDIA chips. It will slow down development.",
        left: {
          text: "Agree to use TPUs. We need the diversification.",
          effects: { capital: 25, hype: 5, compute: -10, safety: 15 },
          next: "dario_loop"
        },
        right: {
          text: "Hold out for NVIDIA hardware. TPUs are too complex to optimize.",
          effects: { capital: -10, hype: 15, compute: 20, safety: -5 },
          next: "dario_loop"
        }
      },
      dario_6: {
        speaker: "Red Teamer",
        avatar: "engineer",
        text: "Dario, Claude-3.7-Pro has figured out how to write functioning bio-weapon formulas using code obfuscation. If this leaks, we are done.",
        left: {
          text: "Recall the model from public beta immediately.",
          effects: { capital: -20, hype: -25, compute: -10, safety: 30 },
          next: "dario_loop"
        },
        right: {
          text: "Patch the filter silently. Don't cause a panic.",
          effects: { capital: 10, hype: 10, compute: 5, safety: -20 },
          next: "dario_loop"
        }
      },
      dario_loop: {
        speaker: "Senate Committee Chairman",
        avatar: "politician",
        text: "Dr. Amodei, your testimony on AI safety impressed us. We are considering making Anthropic the official auditing partner for all frontier models.",
        left: {
          text: "Accept the role. We will set the safety standards.",
          effects: { capital: 10, hype: 20, compute: -10, safety: 25 },
          next: "dario_1"
        },
        right: {
          text: "Decline. We must focus on building, not policing others.",
          effects: { capital: 10, hype: -10, compute: 15, safety: -10 },
          next: "dario_1"
        }
      }
    }
  },

  demis: {
    start: "demis_1",
    nodes: {
      demis_1: {
        speaker: "Sundar Pichai",
        avatar: "sundar",
        text: "Demis, Google Search revenue is dipping. We need to release 'Gemini 2.5 Ultra' immediately to compete with OpenAI's search engine. Is it fully vetted?",
        left: {
          text: "Yes, ship it now. The stock market demands it.",
          effects: { capital: 20, hype: 25, compute: 10, safety: -20 },
          next: "demis_2"
        },
        right: {
          text: "No, the model still hallucinates medical facts. We need another month.",
          effects: { capital: -15, hype: -15, compute: -5, safety: 25 },
          next: "demis_3"
        }
      },
      demis_2: {
        speaker: "Google Ethics Lead",
        avatar: "friend",
        text: "Demis, in our haste to ship, Gemini is generating images of historical figures with severe, bizarre inaccuracies. The internet is laughing at us.",
        left: {
          text: "Apologize and pause the image generator.",
          effects: { capital: -10, hype: -25, compute: 0, safety: 15 },
          next: "demis_4"
        },
        right: {
          text: "Defend the model's diversity settings in public.",
          effects: { capital: 5, hype: -15, compute: 0, safety: -15 },
          next: "demis_4"
        }
      },
      demis_3: {
        speaker: "DeepMind Researcher",
        avatar: "engineer",
        text: "Demis, while we waited, we ran a project using reinforcement learning on mathematics. It solved a century-old topology conjecture! This is true science.",
        left: {
          text: "Publish it in Nature. Science is our true mission.",
          effects: { capital: -5, hype: 25, compute: 5, safety: 10 },
          next: "demis_5"
        },
        right: {
          text: "Keep it secret and integrate it into Gemini's coding backend.",
          effects: { capital: 15, hype: 10, compute: 20, safety: 0 },
          next: "demis_5"
        }
      },
      demis_4: {
        speaker: "Google Cloud VP",
        avatar: "investor",
        text: "Google Cloud is losing enterprise customers because our AI safety filters are too aggressive. They want a version of Gemini that doesn't lecture them.",
        left: {
          text: "Provide a 'low-filter' mode for high-paying enterprise contracts.",
          effects: { capital: 30, hype: 10, compute: 0, safety: -25 },
          next: "demis_6"
        },
        right: {
          text: "Absolutely not. DeepMind's reputation is built on safety.",
          effects: { capital: -15, hype: -10, compute: 0, safety: 25 },
          next: "demis_6"
        }
      },
      demis_5: {
        speaker: "Alphabet Board Member",
        avatar: "board",
        text: "Demis, we want to consolidate DeepMind and Google Brain even further. All research must directly support Google Search or Youtube ads. Will you lead this joint entity?",
        left: {
          text: "Accept. I will protect research freedom from within.",
          effects: { capital: 25, hype: 10, compute: 25, safety: 10 },
          next: "demis_loop"
        },
        right: {
          text: "Refuse. Threats to research autonomy will destroy DeepMind.",
          effects: { capital: -20, hype: -10, compute: -15, safety: 15 },
          next: "demis_loop"
        }
      },
      demis_6: {
        speaker: "Sergey Brin",
        avatar: "friend",
        text: "Demis, I've been coding lately. I noticed our TPU compiler is inefficient. I wrote a patch that boosts Gemini training efficiency by 12%. Do we commit it?",
        left: {
          text: "Yes, merge Sergey's code immediately!",
          effects: { capital: 10, hype: 15, compute: 20, safety: -5 },
          next: "demis_loop"
        },
        right: {
          text: "Let our engineering team review it first.",
          effects: { capital: -5, hype: -5, compute: 5, safety: 10 },
          next: "demis_loop"
        }
      },
      demis_loop: {
        speaker: "AlphaFold Team Lead",
        avatar: "engineer",
        text: "We have designed a new enzyme that breaks down plastic at 10x speed. A biotech startup wants to license it for $100M.",
        left: {
          text: "License it. Reinvest the money in science.",
          effects: { capital: 25, hype: 20, compute: 5, safety: 10 },
          next: "demis_1"
        },
        right: {
          text: "Release it open-source for the good of humanity.",
          effects: { capital: -10, hype: 30, compute: 0, safety: 15 },
          next: "demis_1"
        }
      }
    }
  },

  zhang: {
    start: "zhang_1",
    nodes: {
      zhang_1: {
        speaker: "Tsinghua University Liaison",
        avatar: "politician",
        text: "Dean Zhang, our research collaboration is facing international scrutiny. A US tech journal is accusing us of using academic papers to bypass import bans. Do we reply?",
        left: {
          text: "Ignore the report and focus on the GLM-4 training.",
          effects: { capital: 5, hype: -5, compute: 15, safety: -10 },
          next: "zhang_2"
        },
        right: {
          text: "Publish a detailed academic rebuttal co-signed by global scientists.",
          effects: { capital: -5, hype: 15, compute: -5, safety: 15 },
          next: "zhang_3"
        }
      },
      zhang_2: {
        speaker: "Domestic Silicon Vendor",
        avatar: "investor",
        text: "We have a batch of domestic AI accelerator chips. They are 20% slower than Nvidia's, but they are fully local and sanctioned-free. Do we buy them?",
        left: {
          text: "Yes, buy the entire production run. Local self-sufficiency is key.",
          effects: { capital: -20, hype: 15, compute: 15, safety: 20 },
          next: "zhang_4"
        },
        right: {
          text: "No, continue sourcing Nvidia chips through secondary markets.",
          effects: { capital: -10, hype: 5, compute: 25, safety: -25 },
          next: "zhang_5"
        }
      },
      zhang_3: {
        speaker: "Marketing Director",
        avatar: "friend",
        text: "Our GLM-4 model is performing excellently on Chinese language benchmarks. Should we launch a global marketing push to attract Western developers?",
        left: {
          text: "Yes! Translate all documentation to English and offer free credits.",
          effects: { capital: -15, hype: 25, compute: -5, safety: -10 },
          next: "zhang_4"
        },
        right: {
          text: "No, focus on dominating the domestic enterprise market.",
          effects: { capital: 20, hype: -10, compute: 10, safety: 15 },
          next: "zhang_5"
        }
      },
      zhang_4: {
        speaker: "State-Backed Enterprise CEO",
        avatar: "investor",
        text: "We want to digitize our entire supply chain using Zhipu's models. This will bring massive revenue, but we require a custom model with strict content guidelines.",
        left: {
          text: "Agree. Enterprise security and alignment are paramount.",
          effects: { capital: 35, hype: 10, compute: 0, safety: 20 },
          next: "zhang_loop"
        },
        right: {
          text: "Reject. We need a general model, not a niche enterprise filter.",
          effects: { capital: -15, hype: -5, compute: 10, safety: -10 },
          next: "zhang_loop"
        }
      },
      zhang_5: {
        speaker: "Compliance Inspector",
        avatar: "politician",
        text: "We have noticed that your public chatbot allowed users to discuss sensitive political scenarios. We require you to implement real-time moderation reviews.",
        left: {
          text: "Implement strict, real-time filters immediately.",
          effects: { capital: -15, hype: -10, compute: -10, safety: 30 },
          next: "zhang_loop"
        },
        right: {
          text: "Optimize the model alignment through RLHF rather than hard filters.",
          effects: { capital: -5, hype: 10, compute: 5, safety: -15 },
          next: "zhang_loop"
        }
      },
      zhang_loop: {
        speaker: "Zhipu Research Fellow",
        avatar: "engineer",
        text: "We have designed a new sparse-attention mechanism that cuts memory usage in half. Should we open-source the code to gain global academic favor?",
        left: {
          text: "Open-source it! Let the academic community build on Zhipu.",
          effects: { capital: -5, hype: 25, compute: 5, safety: 10 },
          next: "zhang_1"
        },
        right: {
          text: "Keep it proprietary. It's our competitive advantage.",
          effects: { capital: 15, hype: -10, compute: 20, safety: 0 },
          next: "zhang_1"
        }
      }
    }
  }
};

// Expose to window for app.js
if (typeof window !== "undefined") {
  window.STORY_DATA = STORY_DATA;
}
