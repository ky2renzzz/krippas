const fs = require('fs');
let data = fs.readFileSync('C:/Users/asus/Desktop/krippas/elon_46.js','utf8');
data = data.trimEnd();
if (data.endsWith(';')) data = data.substring(0, data.length-1).trimEnd();
if (data.endsWith(';')) data = data.substring(0, data.length-1).trimEnd();
const code = 'const tree = {' + data + '};';
let tree;
eval('tree = ' + code.match(/const tree = (\{.*\});/s)[1]);
const nodes = tree.elon.nodes;
const keys = Object.keys(nodes);
console.log('=== VALIDATION REPORT ===');
console.log('Total nodes:', keys.length);
console.log('Expected: 46');
console.log('');

// Check uniqueness
if (keys.length === 46) console.log('PASS: All 46 keys unique');
else { console.log('FAIL: Expected 46 keys, got', keys.length); }

// Categorize
let narr = [], gates = [], endings = [];
keys.forEach(k => {
  const n = nodes[k];
  if (n.parts) {
    if (n.specialEnding) endings.push(k);
    else narr.push(k);
  } else if (n.autoRoute) gates.push(k);
});
console.log('');
console.log('Narrative nodes:', narr.length, '(expected 26)');
console.log('Gate nodes:', gates.length, '(expected 16)');
console.log('Ending nodes:', endings.length, '(expected 4)');

// Check narrative nodes have no autoRoute
let narrWithAuto = narr.filter(k => nodes[k].autoRoute);
if (narrWithAuto.length === 0) console.log('PASS: No narrative nodes have autoRoute');
else console.log('FAIL: These narrative nodes have autoRoute:', narrWithAuto);

// Check gate nodes have ONLY autoRoute
let badGates = [];
gates.forEach(k => {
  const n = nodes[k];
  if (n.speaker || n.avatar || n.parts) badGates.push(k);
});
if (badGates.length === 0) console.log('PASS: Gate nodes have only autoRoute');
else console.log('FAIL: Gates with extra props:', badGates);

// Check ending nodes
let badEndings = [];
endings.forEach(k => {
  const n = nodes[k];
  const hasLR = n.parts && n.parts.some(p => p.left || p.right);
  if (hasLR) badEndings.push(k + ' has left/right');
  if (!n.specialEnding) badEndings.push(k + ' missing specialEnding');
  if (n.autoRoute) badEndings.push(k + ' has autoRoute');
});
if (badEndings.length === 0) console.log('PASS: Ending nodes validated');
else { console.log('FAIL:'); badEndings.forEach(e => console.log('  ', e)); }

// Check all goto targets exist
let allGotos = [];
narr.forEach(k => {
  const n = nodes[k];
  n.parts.forEach(p => {
    if (p.left && p.left.next) allGotos.push({from: k, choice: 'left', to: p.left.next});
    if (p.right && p.right.next) allGotos.push({from: k, choice: 'right', to: p.right.next});
  });
});
gates.forEach(k => {
  const n = nodes[k];
  n.autoRoute.forEach(r => {
    if (r.goto) allGotos.push({from: k, choice: 'autoRoute', to: r.goto});
  });
});
let missingGotos = allGotos.filter(g => !nodes[g.to]);
if (missingGotos.length === 0) console.log('PASS: All', allGotos.length, 'goto targets exist');
else {
  console.log('FAIL: Missing goto targets:');
  missingGotos.forEach(g => console.log('  ', g.from, '->', g.to));
}

// Check gates have fallback (always:true)
let badFallbacks = [];
gates.forEach(k => {
  const n = nodes[k];
  const last = n.autoRoute[n.autoRoute.length - 1];
  if (!last || !last.if || !last.if.always) badFallbacks.push(k);
});
if (badFallbacks.length === 0) console.log('PASS: All gates have fallback');
else console.log('FAIL: Missing fallback:', badFallbacks);

// Check endings are reachable from gate graph
let reachedFromGates = new Set();
gates.forEach(k => {
  const n = nodes[k];
  n.autoRoute.forEach(r => { if (r.goto && endings.includes(r.goto)) reachedFromGates.add(r.goto); });
});
endings.forEach(e => {
  if (!reachedFromGates.has(e)) console.log('WARN: Ending', e, 'not directly reachable from any gate');
});
console.log('Endings reachable from gates:', [...reachedFromGates].join(', '));

// Print all node keys
console.log('');
console.log('=== NODE KEYS ===');
keys.forEach((k,i) => {
  const n = nodes[k];
  let type = gates.includes(k) ? 'GATE' : endings.includes(k) ? 'END' : 'NARR';
  console.log((i+1) + '. ' + k + ' [' + type + ']');
});

console.log('');
console.log('=== VALIDATION COMPLETE ===');
