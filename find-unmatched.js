const fs = require('fs');

function findUnmatched(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const stack = [];

  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      if (stack.length > 0 && stack[stack.length - 1].type === 'open') {
        // This should be a closing backtick
        stack.push({
          line: index + 1,
          type: 'close',
          content: line.trim(),
          opens: stack[stack.length - 1].line,
        });
      } else {
        // This should be an opening backtick
        stack.push({
          line: index + 1,
          type: 'open',
          content: line.trim(),
        });
      }
    }
  });

  // Find unmatched opens
  let lastOpen = null;
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i].type === 'open' && (!stack[i + 1] || stack[i + 1].type === 'open')) {
      lastOpen = stack[i];
      break;
    }
  }

  if (lastOpen) {
    console.log(`\n❌ Unmatched opening at line ${lastOpen.line}`);
    console.log('\nContext:');
    const start = Math.max(0, lastOpen.line - 6);
    const end = Math.min(lines.length, lastOpen.line + 5);

    for (let i = start; i < end; i++) {
      const marker = i === lastOpen.line - 1 ? ' >>> ' : '     ';
      console.log(`${marker}${i + 1}: ${lines[i].substring(0, 100)}`);
    }
  }

  console.log(`\nTotal backticks: ${stack.length}`);
}

const file =
  process.argv[2] ||
  'docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md';
findUnmatched(file);
