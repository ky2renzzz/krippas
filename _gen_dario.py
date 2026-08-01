# Compact dario_46.js generator
import json

out = r"C:\Users\asus\Desktop\krippas\dario_46.js"
f = open(out, "w", encoding="utf-8")

def w(s):
    f.write(s + "\n")

def esc(s):
    return s.replace("\\","\\\\").replace("'","\\'")

def q(s):
    return "'" + esc(s) + "'"

# Helper to write a full node
def node(nid, spk, avt, p1t, p2t, lt, le, lf, lr, ltgs, lnx, rt, re, rf, rr, rtgs, rnx):
    """Write a node with 2 textVariants parts and left/right in part 2"""
    w(f"    {nid}: {{")
    w(f"      speaker: {q(spk)},")
    w(f"      avatar: {q(avt)},")
    w(f"      parts: [")
    w(f"        {{")
    w(f"          textVariants: [")
    for t in p1t:
        w(f"            {{ if: {json.dumps(t['if'])}, text: {q(t['text'])} }},")
    w(f"          ]")
    w(f"        }},")
    w(f"        {{")
    w(f"          textVariants: [")
    for t in p2t:
        w(f"            {{ if: {json.dumps(t['if'])}, text: {q(t['text'])} }},")
    w(f"          ],")
    # left
    w(f"          left: {{")
    w(f"            text: {q(lt)},")
    w(f"            effects: {{capital:{le[0]}, hype:{le[1]}, compute:{le[2]}, safety:{le[3]}}},")
    w(f"            setFlags: {{ {', '.join(f'{k}: {json.dumps(v)}' for k,v in lf.items())} }},")
    w(f"            relations: {{ {', '.join(f'{k}: {v}' for k,v in lr.items())} }},")
    w(f"            tags: [{', '.join(q(t) for t in ltgs)}],")
    w(f"            next: {q(lnx)}")
    w(f"          }},")
    # right
    w(f"          right: {{")
    w(f"            text: {q(rt)},")
    w(f"            effects: {{capital:{re[0]}, hype:{re[1]}, compute:{re[2]}, safety:{re[3]}}},")
    w(f"            setFlags: {{ {', '.join(f'{k}: {json.dumps(v)}' for k,v in rf.items())} }},")
    w(f"            relations: {{ {', '.join(f'{k}: {v}' for k,v in rr.items())} }},")
    w(f"            tags: [{', '.join(q(t) for t in rtgs)}],")
    w(f"            next: {q(rnx)}")
    w(f"          }}")
    w(f"        }}")
    w(f"      ]")
    w(f"    }},")

# Gate/ending node (no 'next', uses specialEnding)
def gate_end(nid, spk, avt, p1t, p2t, lt, le, lf, lr, ltgs, lse, rt, re, rf, rr, rtgs, rse):
    """Write a gate or ending node with specialEnding"""
    w(f"    {nid}: {{")
    w(f"      speaker: {q(spk)},")
    w(f"      avatar: {q(avt)},")
    w(f"      parts: [")
    # Text variants part 1
    w(f"        {{")
    w(f"          textVariants: [")
    for t in p1t:
        w(f"            {{ if: {json.dumps(t['if'])}, text: {q(t['text'])} }},")
    w(f"          ]")
    w(f"        }},")
    # Text variants part 2 + choices
    w(f"        {{")
    w(f"          textVariants: [")
    for t in p2t:
        w(f"            {{ if: {json.dumps(t['if'])}, text: {q(t['text'])} }},")
    w(f"          ],")
    w(f"          left: {{")
    w(f"            text: {q(lt)},")
    w(f"            effects: {{capital:{le[0]}, hype:{le[1]}, compute:{le[2]}, safety:{le[3]}}},")
    w(f"            setFlags: {{ {', '.join(f'{k}: {json.dumps(v)}' for k,v in lf.items())} }},")
    w(f"            relations: {{ {', '.join(f'{k}: {v}' for k,v in lr.items())} }},")
    w(f"            tags: [{', '.join(q(t) for t in ltgs)}],")
    w(f"            specialEnding: {q(lse)}")
    w(f"          }},")
    w(f"          right: {{")
    w(f"            text: {q(rt)},")
    w(f"            effects: {{capital:{re[0]}, hype:{re[1]}, compute:{re[2]}, safety:{re[3]}}},")
    w(f"            setFlags: {{ {', '.join(f'{k}: {json.dumps(v)}' for k,v in rf.items())} }},")
    w(f"            relations: {{ {', '.join(f'{k}: {v}' for k,v in rr.items())} }},")
    w(f"            tags: [{', '.join(q(t) for t in rtgs)}],")
    w(f"            specialEnding: {q(rse)}")
    w(f"          }}")
    w(f"        }}")
    w(f"      ]")
    w(f"    }},")

print("Functions defined.")
# ==================== LAYER 1: Identity (1 node) ====================
node(
    "dario_a1_identity",
    "Daniela Amodei", "friend",
    [
        {"if":{"flags":{"dario_started":True}},"text":"Dario. Here we are again. Midnight in the Anthropic office. Claude Opus 5 shipped three weeks ago and the world is still recalibrating. The Pentagon just sent a formal summons. Amazon\\'s cloud contract is up for renewal. Google is circling. And four hundred of your own employees signed a letter saying the culture is eroding. I\\'m your sister, your co-founder, your President — and I need to ask you something I should have asked years ago."},
        {"if":{"always":True},"text":"Dario. The board meeting starts in twenty minutes. Claude Opus 5 just shipped. The Pentagon wants you in Washington. Amazon is pressuring us for exclusivity. Google is making parallel demands. And four hundred employees just signed an open letter about the company losing its soul. I need to know: who are you right now? The physicist who put safety first, or the CEO who just shipped the most powerful model on Earth?"}
    ],
    [
        {"if":{"flags":{"dario_started":True}},"text":"You\\'ve been saying for ten years that safety is the mission. But the mission just shipped a model that the military wants to weaponize. A dual-cloud architecture that two tech giants want to monopolize. And our own staff thinks we\\'re becoming everything we warned against. So I\\'m asking you, as your sister, not your President: can you hold the constitutional line? Against all of them? Against the gravity of power? Or is the line already gone?"},
        {"if":{"always":True},"text":"I know the answer you give the board. I know the answer you give the press. I know the answer you give yourself at 3 AM staring at the ceiling. But I\\'m your sister, Dario. I held your hand at Dad\\'s funeral. I watched you build this company from a whiteboard in a rented office. I need the answer that costs you something to say. Can you hold the line? Or has the line already bent beyond recognition?"}
    ],
    "Daniela. The line is the only thing that matters. I did not spend ten years building Constitutional AI to sell it to the highest bidder. The Pentagon, Amazon, Google — they will all hear the same answer. Safety is non-negotiable. The line holds. I am not the man they think I am, and I never will be.",
    [-2,-3,-2,8],
    {"dario_started":True,"constitutional_path":True,"defied_pressure":True},
    {"family":5,"board":3,"rival":0,"regulator":4,"partner":-3,"public":2,"staff":6},
    ["cautious","principled","constitutional"],
    "dario_a2_pentagon_refuse",
    "I want to hold the line. God knows I want to. But a company valued at almost a trillion dollars — two cloud giants demanding exclusivity, the Pentagon summoning me to Washington, four hundred of our own people questioning our direction... the line is not one man\\'s choice anymore. I will hold as much as I can. But holding everything might mean holding nothing by the time they\\'re done.",
    [3,2,2,-4],
    {"dario_started":True,"pragmatist_path":True},
    {"family":-2,"board":4,"rival":2,"regulator":-1,"partner":4,"public":-1,"staff":-3},
    ["aggressive","pragmatic","compromise"],
    "dario_a2_pentagon_accept"
)
print("Layer 1 done.")
# ==================== LAYER 2: Pentagon (2 nodes) ====================
node(
    "dario_a2_pentagon_refuse",
    "Pentagon Liaison Officer", "regulator",
    [
        {"if":{"flags":{"constitutional_path":True}},"text":"You drew the line with Daniela, and now you\\'re drawing it with the Pentagon. The liaison officer — a three-star general\\'s deputy — sits across from you in the Anthropic boardroom. The summons lies on the table between you, unopened. You asked for this meeting instead of flying to Washington. You wanted to deliver the refusal in person — face to face. The way you believe things should be done."},
        {"if":{"always":True},"text":"The Pentagon liaison is a career officer, not a politician. She carries the summons in a leather portfolio embossed with the Department of Defense seal. Claude Opus 5 — reasoning at the level of a PhD physicist — is now a national security asset whether you like it or not. The United States government does not take no for an answer. But you intend to try."}
    ],
    [
        {"if":{"flags":{"constitutional_path":True}},"text":"\"Dr. Amodei,\" she begins, her tone carefully neutral. \"The National Security Council has classified Claude Opus 5 as a strategic capability. The Pentagon is authorized to request — request, not demand — integration into our intelligence analysis pipeline. No weapons. No targeting. No autonomous systems. Analysis only. We are asking for your help, not your surrender.\" She pauses. \"But I should tell you: if you refuse, this request becomes a demand. And demands are harder to refuse.\""},
        {"if":{"always":True},"text":"\"Dr. Amodei,\" she says, placing the portfolio on the table. \"Claude Opus 5 is the most capable reasoning engine on Earth. The Pentagon needs that capability. But we understand your concerns. Constitutional AI. Safety first. We are not asking you to build weapons. We are asking you to help us analyze intelligence — the same way you help pharmaceutical companies discover drugs. Analysis, not action. Can we find common ground?\""}
    ],
    "I appreciate the distinction between analysis and action. But I cannot control what happens after my technology leaves my hands. The constitutional line is not just about what we build — it\\'s about what we enable. I refuse the integration. Respectfully, completely, and finally.",
    [-5,5,-3,10],
    {"pentagon_refused":True,"constitutional_victory":True},
    {"family":5,"board":-5,"rival":5,"regulator":-8,"partner":8,"public":10,"staff":8},
    ["cautious","principled","defiance"],
    "dario_a3_senate_testify",
    "Analysis. Not weapons. Not targeting. Not autonomous systems. If we can write those restrictions into a legally binding agreement — enforceable, auditable, with independent oversight — then I am willing to discuss terms. But the first time anyone tries to cross that line, the agreement is void and we walk.",
    [8,-3,3,2],
    {"pentagon_negotiated":True,"conditional_agreement":True},
    {"family":-2,"board":6,"rival":-3,"regulator":5,"partner":3,"public":-2,"staff":-3},
    ["aggressive","negotiation","conditional"],
    "dario_a3_whitehouse_accept"
)

node(
    "dario_a2_pentagon_accept",
    "Pentagon Liaison Officer", "regulator",
    [
        {"if":{"flags":{"pragmatist_path":True}},"text":"You told Daniela the line was not one man\\'s choice anymore. Now you\\'re in Washington proving it. The Pentagon briefing room is windowless and cold. A three-star general sits at the head of the table. Screens display satellite imagery and intelligence priorities. They want Claude Opus 5 integrated into the national security apparatus. They\\'re not asking — they\\'re telling. But they\\'re also nervous. You could still say no. You could still walk."},
        {"if":{"always":True},"text":"Washington. The Pentagon. You flew commercial — Daniela\\'s insistence. Don\\'t take their jet, she said. Don\\'t let them think you belong to them before you even sit down. But now you\\'re sitting down, and the general across from you doesn\\'t care about optics. He cares about capability. Claude Opus 5. Your life\\'s work. In the hands of the most powerful military on Earth."}
    ],
    [
        {"if":{"flags":{"pragmatist_path":True}},"text":"\"Dr. Amodei,\" the general begins. \"The world is unstable. You know this. We know this. Claude Opus 5 can process intelligence faster than any analyst we have. It can identify patterns, anticipate threats, and recommend responses. We are not asking for autonomous weapons. We are asking for the same capability you sell to Pfizer and Moderna — applied to national security. The same reasoning engine. A different domain. What is the principled objection?\""},
        {"if":{"always":True},"text":"\"Let me be direct,\" the general says. \"China is fielding AI-integrated military systems. Russia is developing autonomous battlefield coordination. The United States is behind. Claude Opus 5 levels the playing field. We do not need you to build weapons, Dr. Amodei. We need you to let us use your reasoning engine to keep Americans safe. That is all.\""}
    ],
    "General, I came here to listen. And I\\'ve heard you. Claude can process intelligence — under strict constitutional constraints. No targeting decisions. No autonomous recommendations. Human-in-the-loop at every stage. And independent oversight from a civilian ethics board. Accept those terms, and we have a deal. Cross them, and I testify before Congress about everything we discussed today.",
    [6,0,5,3],
    {"pentagon_accepted_constrained":True,"military_constraints":True},
    {"family":-3,"board":5,"rival":-2,"regulator":6,"partner":2,"public":3,"staff":-2},
    ["aggressive","conditional_acceptance","safeguards"],
    "dario_a3_whitehouse_accept",
    "You\\'re right, General. The world is unstable. China is advancing. Russia is experimenting. The United States needs this capability, and I am an American before I am a CEO. Full integration. No constitutional limits beyond what the law requires. Claude Opus 5 is now a national security asset. God help us all.",
    [12,-8,10,-12],
    {"pentagon_full_integration":True,"military_unrestricted":True},
    {"family":-10,"board":8,"rival":-5,"regulator":3,"partner":-5,"public":-10,"staff":-12},
    ["aggressive","military","unconditional"],
    "dario_a3_whitehouse_decline"
)
print("Layer 2 done.")
# ==================== LAYER 3: Senate / White House (4 nodes) ====================
node(
    "dario_a3_senate_testify",
    "Senate Committee Chair", "regulator",
    [
        {"if":{"flags":{"pentagon_refused":True}},"text":"You refused the Pentagon. Now the Senate wants to know why. The hearing room is packed — cameras, reporters, senators who have been waiting months to question the most powerful AI CEO not named Sam or Elon. But you are different. You carry the moral weight of Constitutional AI. You told the military no. The room is electric with the question: is this man for real, or is this the most elaborate PR campaign in tech history?"},
        {"if":{"always":True},"text":"The Senate hearing room. C-SPAN cameras. Senators who barely understand machine learning but who hold the legislative power to regulate — or destroy — your industry. The chair bangs the gavel. You are sworn in. The first question is not about safety or alignment or Constitutional AI. The first question is about power."}
    ],
    [
        {"if":{"flags":{"pentagon_refused":True}},"text":"\"Dr. Amodei,\" the chair begins, \"you refused a Pentagon request for national security integration of Claude Opus 5. Some call that principled. Others call it unpatriotic. This committee wants to know: are you willing to let American soldiers face AI-equipped adversaries without equivalent capabilities because of your personal philosophy?\" The room goes silent. Every camera zooms in. This is the moment that will define you."},
        {"if":{"always":True},"text":"\"Dr. Amodei,\" the chair intones, \"Claude Opus 5 achieved PhD-level reasoning across six scientific domains. It passed the ARC-AGI benchmark. It discovered three novel pharmaceutical compounds now in clinical trials. But your company is private, valued at nearly a trillion dollars, answerable to no one except your board. My question is simple: who watches the watchers? Who ensures that Anthropic uses this power responsibly?\""}
    ],
    "Senator, I refused the Pentagon because Constitutional AI is a promise — to our employees, to our users, to the public. A promise that we will never build autonomous weapons, never enable targeting systems, never let Claude make life-or-death decisions. That promise is worth more than a contract. I will not break it. If that makes me unpatriotic, then patriotism has changed its meaning since I was a kid in San Francisco reading physics textbooks.",
    [-8,10,-3,12],
    {"senate_testimony_heroic":True,"public_moral_stand":True},
    {"family":5,"board":-6,"rival":8,"regulator":10,"partner":5,"public":15,"staff":12},
    ["cautious","heroic","public_stand"],
    "dario_a4_claude_science_open",
    "Senator, I share your concern about accountability. Anthropic is private, but we should not be unaccountable. I am proposing today a federal AI safety board — independent, Senate-confirmed, with the authority to audit our models before deployment. Let Congress create the oversight. Let me be the first to volunteer. Regulation is not the enemy of innovation. Irresponsible innovation is the enemy of everything else.",
    [-3,5,0,8],
    {"proposed_safety_board":True,"regulatory_pioneer":True},
    {"family":3,"board":2,"rival":3,"regulator":8,"partner":3,"public":10,"staff":5},
    ["cautious","regulatory","accountability"],
    "dario_a4_claude_science_lock"
)

node(
    "dario_a3_senate_defy",
    "Senate Intelligence Committee Chair", "regulator",
    [
        {"if":{"flags":{"pentagon_refused":True}},"text":"You\\'ve now refused both the Pentagon AND are appearing before the Senate in a hostile posture. The Intelligence Committee chair is not impressed by Constitutional AI. She sees a CEO who values his philosophy over national security. The cameras capture every word. The headlines write themselves. You are either a martyr for AI safety or the man who chose principles over patriotism."},
        {"if":{"always":True},"text":"The Senate Intelligence Committee is not the friendly audience you expected. The chair is a former prosecutor. She has done her homework — every paper you published at Google Brain, every blog post about Constitutional AI, every interview where you warned about existential risk. She intends to use your own words against you."}
    ],
    [
        {"if":{"flags":{"pentagon_refused":True}},"text":"\"Dr. Amodei,\" she begins, ice in every syllable, \"you refused a formal Pentagon request for intelligence analysis integration. You were under no obligation to build weapons. You were asked to help analysts process information — the same capability you license to pharmaceutical companies. And you said no. On what authority? Who elected you to decide what the United States military may or may not use to protect its citizens?\""},
        {"if":{"always":True},"text":"\"Dr. Amodei,\" she says, \"you have written extensively about the existential risks of artificial intelligence. You have compared AI to nuclear weapons. You have warned that unaligned systems could be extinction-level threats. But here is what I do not understand: if the risk is truly existential, why are you running a company valued at nearly a trillion dollars building exactly those systems? Are you a prophet, or a profiteer?\""}
    ],
    "Chairwoman, I am not elected. I am accountable. To my employees. To my users. To history. The Constitution of Claude is a public document. Our safety methodology is open. Our alignment research is published. I did not refuse the Pentagon out of arrogance. I refused because once Claude is integrated into military systems, I cannot control what happens next. And if I cannot control it, I cannot be accountable for it. Accountability without control is theater. I refuse to participate in theater — even when the audience is the Senate.",
    [-5,8,-2,10],
    {"senate_defied_principled":True,"accountability_stand":True},
    {"family":4,"board":-4,"rival":6,"regulator":-5,"partner":6,"public":12,"staff":10},
    ["cautious","principled","defiant"],
    "dario_a4_aws_independent",
    "Chairwoman, fair question. I AM building these systems. I AM warning about their risks. The tension is real. But here is the distinction: we build them with guardrails. We build them with constitutions. We build them with transparency. The military integration I refused was not safe. The integration I WOULD accept is. The difference is not arrogance. It is architecture. Safe architecture versus unsafe architecture. I choose safe, even when it costs me.",
    [0,3,0,6],
    {"senate_defied_reconciled":True,"architecture_defense":True},
    {"family":2,"board":3,"rival":2,"regulator":3,"partner":2,"public":5,"staff":3},
    ["aggressive","reconciling","nuanced"],
    "dario_a4_aws_exclusivity"
)
print("Layer 3A done.")
