const fs = require('fs');
const code = fs.readFileSync('story_new.js', 'utf8');

// The code is: const STORY_DATA = { ... }; if (...) { ... }
// Extract just the object
const objStart = code.indexOf('{');
const objEnd = code.lastIndexOf('};');
const obj = code.substring(objStart, objEnd + 1);

// Write just the object to a temp file for analysis
fs.writeFileSync('_temp_obj.js', 'const x = ' + obj + ';', 'utf8');

try {
  require('./_temp_obj.js');
  console.log('VALID!');
} catch(e) {
  console.log('Error:', e.message);
  // Find the problematic line
  const lines = obj.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const testObj = lines.slice(0, i + 1).join('\n') + '\n}';
    try {
      new Function('return ' + testObj)();
    } catch(e2) {
      if (i > lines.length - 10 || e2.message !== e.message) {
        console.log('Line', i + 1, ':', lines[i].substring(0, 150));
      }
    }
  }
}
