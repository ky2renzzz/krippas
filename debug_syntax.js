const fs = require('fs');
const code = fs.readFileSync('story_new.js', 'utf8');
try {
  const vm = require('vm');
  new vm.Script(code);
} catch(e) {
  console.log('Error:', e.message);
  // The error might be at a specific position. Try to narrow down.
  // Search for common issues: unescaped single quotes inside single-quoted strings
  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check for text: '...' patterns with potential single quote issues
    const textMatch = line.match(/text:\s*'/);
    if (textMatch) {
      // Count single quotes in this line
      const quotes = (line.match(/'/g) || []).length;
      if (quotes % 2 !== 0) {
        console.log('Odd quotes line', i + 1, ':', line.substring(0, 200));
      }
    }
  }
}
