const fs = require('fs');
const code = fs.readFileSync('story_new.js', 'utf8');

// Try acorn parser for better error messages
try {
  // Simple approach: try to eval as expression
  new Function('"use strict"; return (' + code + ')');
} catch(e) {
  console.log('Error:', e.message);
  // The error might contain line number info
  if (e.stack) {
    const stackLines = e.stack.split('\n');
    for (const line of stackLines) {
      if (line.includes('story_new.js')) {
        console.log('Stack:', line.trim());
      }
    }
  }
}
