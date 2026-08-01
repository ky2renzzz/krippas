// Assemble unified story.js from individual character tree files
const fs = require('fs');

// Read pre-extracted sections from story_old_backup.js
let quizSection = fs.readFileSync('_quiz.js', 'utf8').trim();
let goSection = fs.readFileSync('_go.js', 'utf8').trim();
let seSection = fs.readFileSync('_se.js', 'utf8').trim();
// Remove trailing commas
if (quizSection.endsWith(',')) quizSection = quizSection.slice(0, -1);
if (goSection.endsWith(',')) goSection = goSection.slice(0, -1);
if (seSection.endsWith(',')) seSection = seSection.slice(0, -1);

// Extract character objects from generated files
// Handles both "charName: { start: ... }" and "const charName = { start: ... }" formats
function extractCharObj(code, charName) {
  // Try format 1: "charName: { start:..."
  let marker = charName + ': { start:';
  let idx = code.indexOf(marker);
  if (idx >= 0) {
    let depth = 0;
    let i = idx;
    for (; i < code.length; i++) {
      if (code[i] === '{') depth++;
      if (code[i] === '}') { depth--; if (depth === 0) break; }
    }
    return { obj: code.substring(idx, i + 1), keyName: charName };
  }

  // Try format 2: "const charName = { start:..."
  marker = 'const ' + charName + ' = {';
  idx = code.indexOf(marker);
  if (idx >= 0) {
    // Find the end of the object (before module.exports)
    const exportIdx = code.indexOf('module.exports');
    let searchEnd = exportIdx >= 0 ? exportIdx : code.length;
    let depth = 0;
    let i = idx + marker.length - 1;
    for (; i < searchEnd; i++) {
      if (code[i] === '{') depth++;
      if (code[i] === '}') { depth--; if (depth === 0) break; }
    }
    const innerObj = code.substring(idx + ('const ' + charName + ' = ').length, i + 1);
    return { obj: charName + ': ' + innerObj, keyName: charName };
  }

  // Try format 3: "charName: {"
  marker = charName + ': {';
  idx = code.indexOf(marker);
  if (idx >= 0) {
    let depth = 0;
    let i = idx;
    for (; i < code.length; i++) {
      if (code[i] === '{') depth++;
      if (code[i] === '}') { depth--; if (depth === 0) break; }
    }
    return { obj: code.substring(idx, i + 1), keyName: charName };
  }

  console.error('Cannot find ' + charName + ' in any format');
  return null;
}

const trees = [
  ['elon_46.js', 'elon'],                               // 65 nodes (31 narrative + 30 gates + 4 endings)
  ['sam_46.js', 'sam'],                                  // 46 nodes, autoRoute
  ['dario_46_expanded.js', 'dario'],                     // 46 nodes, autoRoute
  ['demis_46.js', 'demis'],                              // 46 nodes, autoRoute
  ['zhang_46.js', 'zhang'],                              // 46 nodes, autoRoute
];

const charObjects = [];
for (const [file, name] of trees) {
  const code = fs.readFileSync(file, 'utf8');
  const result = extractCharObj(code, name);
  if (result) charObjects.push(result);
}

// Build the new story.js
const lines = [];
lines.push('// KRIPPAS - Deep Branching Narrative Database');
lines.push('// Finite DAG story trees — no loops, deeply branching, semantically adaptive.');
lines.push('');
lines.push('const STORY_DATA = {');
lines.push('  ' + quizSection + ',');
lines.push('');
lines.push('  ' + goSection + ',');
lines.push('');
lines.push('  ' + seSection + ',');
lines.push('');

for (const co of charObjects) {
  lines.push('  ' + co.obj + ',');
  lines.push('');
}

lines.push('};');
lines.push('');
lines.push('if (typeof window !== "undefined") {');
lines.push('  window.STORY_DATA = STORY_DATA;');
lines.push('}');

const result = lines.join('\n');
fs.writeFileSync('story_new.js', result, 'utf8');
console.log('story_new.js written:', result.length, 'chars');

// Validate syntax
try {
  const vm = require('vm');
  new vm.Script(result);
  console.log('Syntax validation: PASSED');
} catch(e) {
  console.error('Syntax ERROR:', e.message);
  process.exit(1);
}
