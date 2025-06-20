const fs = require('fs');

const content = fs.readFileSync(
  'docs/identitymanager/6.2/access-governance/role-management/role-assignment.md',
  'utf8'
);
const lines = content.split('\n');

let inlineCodeOpen = false;
let lastInlineOpen = -1;

lines.forEach((line, idx) => {
  // Skip code blocks
  if (line.trim().startsWith('```')) return;

  // Count backticks
  let pos = 0;
  while (pos < line.length) {
    if (line[pos] === '`') {
      // Check if it's a double backtick
      if (pos + 1 < line.length && line[pos + 1] === '`') {
        pos += 2;
        continue;
      }

      if (inlineCodeOpen) {
        inlineCodeOpen = false;
      } else {
        inlineCodeOpen = true;
        lastInlineOpen = idx + 1;
      }
    }
    pos++;
  }
});

if (inlineCodeOpen) {
  console.log(`Unclosed inline code starting at line ${lastInlineOpen}`);
}
