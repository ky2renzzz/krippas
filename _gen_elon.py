# Generate elon_46.js - Complete 46-node KRIPPAS narrative for Elon Musk
# This script generates the entire file as structured data using Python triple-quoted strings
# to avoid escaping issues. All contractions already escaped in the strings.

output_path = r"C:\Users\asus\Desktop\krippas\elon_46.js"

lines = []

def L(s):
    lines.append(s)

# ================================================================
# HEADER
# ================================================================
L("// ELON MUSK - 46-NODE FINITE BRANCHING NARRATIVE (NO LOOPS)")
L("// Generated 2026-07-31 for KRIPPAS")
L("// Total nodes: 46. Decision nodes: 18. Terminal endings: 4.")
L("// Playthrough: ~22-24 nodes visited. 10-12 layers deep.")
L("//")
L('// REALITY July 31 2026: SpaceXAI (ex-xAI, IPO June 2026). Colossus 2 operational (2GW, 555K GPUs, $18B).')
L('// Grok 4.5 flagship (July 2026), Grok 5 training on Colossus 2. EPA gas turbine violations (59 unpermitted turbines).')
L("// CSAM lawsuit (sued user). Grimes custody battle. Shivon Zilis: trusted advisor, mother of twins.")
L('// 14 kids, 4 women. Cursor $60B acquisition. Tesla shareholders suing for dereliction.')
L('// Mars/Starship. SEC investigating Grok tweets. Power plant acquisition ($1B). Employee exodus.')
L("// 4 ENDINGS: mars_covenant, meme_emperor, steelman_peace, father_of_fourteen")
L("")
L("elon: {")
L("  start: 'elon_a1_identity',")
L("  nodes: {")
L("")

# ============================================================
# LAYER 1: Identity / Shivon's question (1 node) - node 1
# ============================================================

L("    // ==================== LAYER 1: Identity ====================")

L("""    elon_a1_identity: {
      speaker: 'Shivon Zilis',
      avatar: 'friend',
      parts: [
        {
          textVariants: [
            { if: { flags: { elon_started: true } }, text: 'Elon. It\\'s 3 AM. You\\'re staring at the Colossus 2 dashboard again. The twins are asleep upstairs. Grimes\\' lawyer filed another motion this morning. The SEC sent a third subpoena. SpaceXAI stock dropped 7% after the CSAM lawsuit hit the news. And you haven\\'t slept more than four hours since the IPO. I can tell because you\\'re wearing the same shirt from Tuesday.' },
            { if: { always: true }, text: 'Elon. The twins asked me this morning: \"Where\\'s Daddy?\" They\\'re four years old. They don\\'t understand Grok 4.5 or Colossus 2 or SEC investigations. They understand that their father promised to show them the Starship launch and hasn\\'t come home in three days. So I need to ask you: who are you right now? The man who wants to die on Mars, or the father of fourteen children who still hasn\\'t figured out how to live on Earth?' }
          ]
        },
        {
          textVariants: [
            { if: { flags: { elon_started: true } }, text: 'You promised me, after the twins were born, that you would find balance. That SpaceXAI would not consume you the way Tesla almost did. But Colossus 2 is burning 2 gigawatts and every quarter there\\'s a new crisis. Grok 4.5 just shipped. Grok 5 is already training. You\\'re building the most powerful AI on Earth and you can\\'t even make it to dinner. So I\\'m asking you — not as your Neuralink director, not as the mother of your children, but as the person who has watched you closer than anyone for a decade: who is Elon Musk right now?' },
            { if: { always: true }, text: 'I know the answer you give the board. I know the answer you give the press. But I also know you — the man who reads physics textbooks to the twins before bed. The man who cried when Falcon Heavy landed. The man who believes humanity\\'s only hope is the stars. I need the answer you give yourself. Who are you right now? The builder, or the father?' }
          ],
          left: {
            text: 'I am a builder, Shivon. That is who I have always been. That is who I will always be. The twins will understand one day — that their father was building the future while everyone else was optimizing the present. Mars is not a dream. It is a deadline. And I intend to meet it.',
            effects: { capital: 4, hype: 6, compute: 5, safety: -3 },
            setFlags: { elon_started: true, builder_path: true },
            relations: { family: -5, board: 5, rival: 4, regulator: -2, partner: 3, public: 2, staff: 4 },
            tags: ['aggressive', 'ambitious'],
            next: 'elon_a2_colossus_push'
          },
          right: {
            text: 'I am... trying to be both. And failing at both. The twins deserve better. All fourteen of them. But if I stop building, if I slow down, the window closes. The Mars transfer window doesn\\'t wait. The AI race doesn\\'t wait. I don\\'t know how to be everything to everyone. But I know I can\\'t stop.',
            effects: { capital: 2, hype: -2, compute: -1, safety: 4 },
            setFlags: { elon_started: true, father_path: true },
            relations: { family: 6, board: -3, rival: -1, regulator: 3, partner: 1, public: 4, staff: 2 },
            tags: ['cautious', 'human'],
            next: 'elon_a2_grok_crisis'
          }
        }
      ]
    },
""")

