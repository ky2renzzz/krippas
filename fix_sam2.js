const fs = require('fs');
let content = fs.readFileSync('sam_new_story_tree.js', 'utf8');

// Fix double apostrophes ('' -> \')
content = content.replace(/''s/g, "\\'s");
content = content.replace(/'' /g, "\\' ");

// Also fix any smart quotes that might have been introduced
content = content.replace(/\u2018/g, "'");
content = content.replace(/\u2019/g, "'");
content = content.replace(/\u201C/g, '"');
content = content.replace(/\u201D/g, '"');

// Fix any remaining unescaped single quotes in text strings
const fixPatterns = [
  "sister's",
  "brother's", 
  "mother's",
  "father's",
  "friend's",
  "CEO's",
  "founder's",
  "investor's",
  "engineer's",
  "scientist's",
  "regulator's",
  "partner's",
  "rival's",
  "board's",
  "public's",
  "staff's",
  "family's",
  "nation's",
  "people's",
  "everyone's",
  "someone's",
  "no one's",
  "GPT-5.7's",
  "Claude's",
  "Gemini's",
  "Grok's",
  "GLM's",
];

for (const pattern of fixPatterns) {
  // Only fix if NOT already escaped
  const regex = new RegExp("(?<!\\\\)" + pattern.replace(/'/g, "\\'"), 'g');
  content = content.replace(regex, pattern.replace(/'/g, "\\'"));
}

fs.writeFileSync('sam_new_story_tree.js', content, 'utf8');
console.log('Fixed sam_new_story_tree.js');
