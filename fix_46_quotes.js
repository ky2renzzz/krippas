const fs = require('fs');
const files = ['sam_46.js', 'demis_46.js', 'zhang_46.js'];

for (const file of files) {
  let c = fs.readFileSync(file, 'utf8');
  // Fix ALL double apostrophes
  c = c.replace(/''/g, "\\'");
  fs.writeFileSync(file, c, 'utf8');
  console.log('Fixed ' + file);
}
