const fs = require('fs');
let c = fs.readFileSync('demis_new_story_tree.js', 'utf8');
// Find ALL double apostrophe patterns and fix them
c = c.replace(/''/g, "\\'");
fs.writeFileSync('demis_new_story_tree.js', c, 'utf8');
console.log('Fixed all double apostrophes in demis');
