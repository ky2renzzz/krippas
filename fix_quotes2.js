const fs = require('fs');

const files = [
  'sam_new_story_tree.js',
  'elon_new_story_tree.js',
  'demis_new_story_tree.js',
  'C:/Users/asus/dario_node_tree.js',
  'C:/Users/asus/zhang_story_tree_v2.js',
];

// Patterns that need escaping: word's or word' when inside single-quoted JS strings
// We need to find text: '...content...' and escape ' within the content
function fixApostrophes(str) {
  // Match text: ' followed by content ending with ' (possibly followed by , or })
  // Replace unescaped single quotes within the text content
  return str.replace(/text: '([^']*?)'/g, (match, content) => {
    // Already escaped quotes should stay
    return "text: '" + content + "'";
  }).replace(/([a-zA-Z])'s /g, "$1\\'s ")
   .replace(/([a-zA-Z])'s,/g, "$1\\'s,")
   .replace(/([a-zA-Z])'s\./g, "$1\\'s.")
   .replace(/([a-zA-Z])'s\?/g, "$1\\'s?")
   .replace(/([a-zA-Z])'s"/g, "$1\\'s\"")
   .replace(/([a-zA-Z])'s:/g, "$1\\'s:")
   .replace(/([a-zA-Z])'s;/g, "$1\\'s;")
   .replace(/([a-zA-Z])'s\n/g, "$1\\'s\n")
   .replace(/Grimes' /g, "Grimes\\' ")
   .replace(/xAI's /g, "xAI\\'s ");
}

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const before = content.length;
  content = fixApostrophes(content);
  // But now we double-escaped some. Let's fix: \\\\' -> \\'
  content = content.replace(/\\\\'/g, "\\'");
  // And \\\\'' -> \\'
  content = content.replace(/\\\\''/g, "\\'");
  fs.writeFileSync(file, content, 'utf8');
  console.log(file + ': ' + before + ' -> ' + content.length + ' chars');
}
console.log('Done');
