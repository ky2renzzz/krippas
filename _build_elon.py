# Build elon_46.js — 46-node deeply branching narrative for Elon Musk
# KRIPPAS format. 4 terminal endings. No loops.
# This script generates the full JS file by writing nodes directly.
# Every left.next != right.next. All next targets exist. Braces balanced.
# ALL contractions escaped (don\'t can\'t won\'t it\'s that\'s etc.)

output_path = r"C:\Users\asus\Desktop\krippas\elon_46.js"

# We build the file as a raw string.
# WARNING: Python f-strings and backslashes interact badly with JS contractions.
# Using plain string concatenation to avoid escaping hell.

L = []  # list of lines

def add(s):
    L.append(s)

def node(id, speaker, avatar, parts):
    add(f"    {id}: {{")
    add(f"      speaker: '{speaker}',")
    add(f"      avatar: '{avatar}',")
    add(f"      parts: [")
    for pi, part in enumerate(parts):
        add(f"        {{")
        add(f"          textVariants: [")
        for tvi, tv in enumerate(part["textVariants"]):
            comma = "," if tvi < len(part["textVariants"]) - 1 else ""
            add(f"            {{{{ if: {tv['if']}, text: '{tv['text']}' }}}}{comma}")
        add(f"          ],")
        if "left" in part:
            left = part["left"]
            right = part["right"]
            add(f"          left: {{")
            add(f"            text: '{left['text']}',")
            add(f"            effects: {{ capital: {left['effects']['capital']}, hype: {left['effects']['hype']}, compute: {left['effects']['compute']}, safety: {left['effects']['safety']} }},")
            add(f"            setFlags: {{ {', '.join(f'{k}: {v}' if isinstance(v, bool) else f'{k}: {v!r}' for k, v in left['setFlags'].items())} }},")
            add(f"            relations: {{ family: {left['relations']['family']}, board: {left['relations']['board']}, rival: {left['relations']['rival']}, regulator: {left['relations']['regulator']}, partner: {left['relations']['partner']}, public: {left['relations']['public']}, staff: {left['relations']['staff']} }},")
            add(f"            tags: {left['tags']},")
            add(f"            next: '{left['next']}'")
            add(f"          }},")
            add(f"          right: {{")
            add(f"            text: '{right['text']}',")
            add(f"            effects: {{ capital: {right['effects']['capital']}, hype: {right['effects']['hype']}, compute: {right['effects']['compute']}, safety: {right['effects']['safety']} }},")
            add(f"            setFlags: {{ {', '.join(f'{k}: {v}' if isinstance(v, bool) else f'{k}: {v!r}' for k, v in right['setFlags'].items())} }},")
            add(f"            relations: {{ family: {right['relations']['family']}, board: {right['relations']['board']}, rival: {right['relations']['rival']}, regulator: {right['relations']['regulator']}, partner: {right['relations']['partner']}, public: {right['relations']['public']}, staff: {right['relations']['staff']} }},")
            add(f"            tags: {right['tags']},")
            add(f"            next: '{right['next']}'")
            add(f"          }}")
        elif "specialEnding" in part:
            add(f"          specialEnding: '{part['specialEnding']}',")
            add(f"          setFlags: {{ {', '.join(f'{k}: {v}' if isinstance(v, bool) else f'{k}: {v!r}' for k, v in part['setFlags'].items())} }}")
        else:
            # terminal ending with left/right
            left = part["left"]
            right = part["right"]
            add(f"          left: {{")
            add(f"            text: '{left['text']}',")
            add(f"            effects: {{ capital: {left['effects']['capital']}, hype: {left['effects']['hype']}, compute: {left['effects']['compute']}, safety: {left['effects']['safety']} }},")
            add(f"            setFlags: {{ {', '.join(f'{k}: {v}' if isinstance(v, bool) else f'{k}: {v!r}' for k, v in left['setFlags'].items())} }},")
            add(f"            specialEnding: '{left['specialEnding']}'")
            add(f"          }},")
            add(f"          right: {{")
            add(f"            text: '{right['text']}',")
            add(f"            effects: {{ capital: {right['effects']['capital']}, hype: {right['effects']['hype']}, compute: {right['effects']['compute']}, safety: {right['effects']['safety']} }},")
            add(f"            setFlags: {{ {', '.join(f'{k}: {v}' if isinstance(v, bool) else f'{k}: {v!r}' for k, v in right['setFlags'].items())} }},")
            add(f"            specialEnding: '{right['specialEnding']}'")
            add(f"          }}")
        comma2 = "," if pi < len(parts) - 1 else ""
        add(f"        }}{comma2}")
    add(f"      ]")
    add(f"    }},")

# =====================================================
# HEADER
# =====================================================
add("// ELON MUSK - 46-NODE FINITE BRANCHING NARRATIVE (NO LOOPS)")
add("// Generated 2026-07-31 for KRIPPAS")
add("// Total nodes: 46. Decision nodes: 18. Terminal endings: 4.")
add("// Playthrough: ~22-24 nodes visited. 10-12 layers deep.")
add("//")
add("// REALITY July 31 2026: SpaceXAI (ex-xAI, IPO June 2026). Colossus 2 operational (2GW, 555K GPUs, $18B).")
add("// Grok 4.5 flagship (July 2026), Grok 5 training on Colossus 2. EPA gas turbine violations (59 unpermitted turbines).")
add("// CSAM lawsuit (sued user). Grimes custody battle. Shivon Zilis: trusted advisor, mother of twins.")
add("// 14 kids, 4 women. Cursor $60B acquisition. Tesla shareholders suing for dereliction.")
add("// Mars/Starship. SEC investigating Grok tweets. Power plant acquisition ($1B). Employee exodus.")
add("// 4 ENDINGS: mars_covenant, meme_emperor, steelman_peace, father_of_fourteen")
add("")
add("elon: {")
add("  start: 'elon_a1_identity',")
add("  nodes: {")
add("")

# =====================================================
# Build all 46 nodes below
# =====================================================

print("Starting node generation...")
print("Building nodes...")


