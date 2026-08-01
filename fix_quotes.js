// Fix unescaped single quotes in text strings
const fs = require('fs');

const files = [
  'sam_new_story_tree.js',
  'elon_new_story_tree.js',
  'demis_new_story_tree.js',
];

function fixQuotes(content) {
  // Fix text: '...' patterns where internal single quotes are not escaped
  // Match text: '...' patterns and fix internal single quotes
  let fixed = content;
  
  // Strategy: find all text: '...' and textVariants: [...] entries
  // For each, ensure internal single quotes are escaped
  
  // Replace known problematic patterns
  const replacements = [
    ["Mira's op-ed", "Mira\\'s op-ed"],
    ["Dario's alliance", "Dario\\'s alliance"],
    ["GPT-5.7's self-awareness", "GPT-5.7\\'s self-awareness"],
    ["GPT-5.7's recursive", "GPT-5.7\\'s recursive"],
    ["humanity's future", "humanity\\'s future"],
    ["lab's charter", "lab\\'s charter"],
    ["father's face", "father\\'s face"],
    ["Cursor's developer", "Cursor\\'s developer"],
    ["Satya's", "Satya\\'s"],
    ["Oliver's", "Oliver\\'s"],
    ["Dario's", "Dario\\'s"],
    ["Daniela's", "Daniela\\'s"],
    ["Teresa's", "Teresa\\'s"],
    ["Sundar's", "Sundar\\'s"],
    ["Grimes'", "Grimes\\'"],
    ["Musk's", "Musk\\'s"],
    ["company's", "company\\'s"],
    ["world's", "world\\'s"],
    ["country's", "country\\'s"],
    ["China's", "China\\'s"],
    ["OpenAI's", "OpenAI\\'s"],
    ["Anthropic's", "Anthropic\\'s"],
    ["DeepMind's", "DeepMind\\'s"],
    ["Microsoft's", "Microsoft\\'s"],
    ["Amazon's", "Amazon\\'s"],
    ["Google's", "Google\\'s"],
    ["Alphabet's", "Alphabet\\'s"],
    ["xAI's", "xAI\\'s"],
    ["Z.ai's", "Z.ai\\'s"],
    ["Zhipu's", "Zhipu\\'s"],
    ["DeepSeek's", "DeepSeek\\'s"],
    ["Tesla's", "Tesla\\'s"],
    ["SpaceXAI's", "SpaceXAI\\'s"],
    ["SpaceX's", "SpaceX\\'s"],
  ];

  for (const [from, to] of replacements) {
    // Only replace inside text strings, not in comments
    // Use a regex that matches the pattern inside single-quoted strings
    const regex = new RegExp("(?<=text: '.*?)" + from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "(?=.*?')", 'g');
    // Simpler approach: just do a global replace but check it's inside a text context
    fixed = fixed.split("text: '").map((part, idx) => {
      if (idx === 0) return part;
      // Find the closing quote
      const closeIdx = part.indexOf("'");
      if (closeIdx === -1) return "text: '" + part;
      const textContent = part.substring(0, closeIdx);
      const rest = part.substring(closeIdx);
      let fixedText = textContent;
      for (const [f, t] of replacements) {
        fixedText = fixedText.split(f).join(t);
      }
      return "text: '" + fixedText + rest;
    }).join("text: '");
  }

  return fixed;
}

for (const file of files) {
  console.log('Processing:', file);
  let content = fs.readFileSync(file, 'utf8');
  content = fixQuotes(content);
  fs.writeFileSync(file, content, 'utf8');
}

// Also fix the dario and zhang files
const externalFiles = [
  'C:/Users/asus/dario_node_tree.js',
  'C:/Users/asus/zhang_story_tree_v2.js',
];

for (const file of externalFiles) {
  console.log('Processing:', file);
  let content = fs.readFileSync(file, 'utf8');
  content = fixQuotes(content);
  fs.writeFileSync(file, content, 'utf8');
}

console.log('Done fixing quotes');
