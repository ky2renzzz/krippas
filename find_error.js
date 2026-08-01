const fs = require('fs');
const code = fs.readFileSync('story_new.js', 'utf8');

// The code is: const STORY_DATA = { ... };
// Problem might be inside the object. Let's try to find it by bisecting.

// First, verify the wrapper is correct
const start = code.indexOf('const STORY_DATA = {');
const end = code.lastIndexOf('};');
if (start < 0 || end < 0) {
  console.log('Cannot find STORY_DATA wrapper');
  process.exit(1);
}

// Extract just the object content
const objContent = code.substring(start + 'const STORY_DATA = '.length, end + 1);
// objContent should be { ... }

// Now try to parse it
try {
  new Function('return ' + objContent)();
  console.log('Object content is valid!');
} catch(e) {
  console.log('Error in object content:', e.message);
  // Try to narrow down by splitting
  const lines = objContent.split('\n');
  let current = '';
  for (let i = 0; i < lines.length; i++) {
    current += lines[i] + '\n';
    try {
      new Function('return ' + current + '\n}')();
    } catch(e2) {
      // Error might be in this chunk
      if (e2.message !== e.message || i > lines.length - 5) {
        console.log('Issue around line', i + 1, '(in object):', lines[i].substring(0, 120));
      }
    }
  }
}
