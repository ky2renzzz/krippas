const fs = require('fs');
let content = fs.readFileSync('C:/Users/asus/dario_node_tree.js', 'utf8');

// Replace ending: "key" with specialEnding: "key" in terminal nodes
// But only at the top level of a node, not inside nested objects
content = content.replace(/\n      ending: "/g, '\n      specialEnding: "');

fs.writeFileSync('C:/Users/asus/dario_node_tree.js', content, 'utf8');
console.log('Fixed dario ending -> specialEnding');
