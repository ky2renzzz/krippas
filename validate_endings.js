const fs = require('fs');
const story = fs.readFileSync('story.js', 'utf8');

// Extract all specialEnding values
const re = /specialEnding:\s*["']([^"']+)["']/g;
const endings = [];
let m;
while ((m = re.exec(story)) !== null) {
  endings.push(m[1]);
}
const unique = [...new Set(endings)];
console.log('Endings in story.js (' + unique.length + '):');
unique.forEach(e => console.log('  - ' + e));

// Check special_endings section references these
const seMatch = story.match(/special_endings:\s*\{/);
console.log('Has special_endings section: ' + !!seMatch);

// Check that data.js objective keys match
const data = fs.readFileSync('data.js', 'utf8');
const objKeyRe = /key:\s*["']([^"']+)["']/g;
const objKeys = [];
while ((m = objKeyRe.exec(data)) !== null) {
  objKeys.push(m[1]);
}
console.log('\nObjective keys in data.js:');
objKeys.forEach(k => console.log('  - ' + k));
