const fs = require('fs');

const content = fs.readFileSync(
  'docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md',
  'utf8'
);
const lines = content.split('\n');
let count = 0;
let atLineStart = 0;

lines.forEach((line, idx) => {
  if (line.includes('```')) {
    count++;
    if (line.trim().startsWith('```')) {
      atLineStart++;
    }
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});

console.log(`\nTotal lines with backticks: ${count}`);
console.log(`Backticks at line start: ${atLineStart}`);
