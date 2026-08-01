const fs = require('fs');
let content = fs.readFileSync('sam_new_story_tree.js', 'utf8');

// Fix any remaining unescaped single quotes in text strings
// These patterns appear within text: '...' strings
content = content.replace(/GPT-5\.7's /g, "GPT-5.7\\'s ");
content = content.replace(/OpenAI's /g, "OpenAI\\'s ");
content = content.replace(/Anthropic's /g, "Anthropic\\'s ");
content = content.replace(/Dario's /g, "Dario\\'s ");
content = content.replace(/Microsoft's /g, "Microsoft\\'s ");
content = content.replace(/Oliver's /g, "Oliver\\'s ");

fs.writeFileSync('sam_new_story_tree.js', content, 'utf8');
console.log('Fixed sam_new_story_tree.js');
