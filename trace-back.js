const fs = require('fs');

function traceBack(filePath, problemLine) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const stack = [];

  for (let i = 0; i < Math.min(problemLine, lines.length); i++) {
    if (lines[i].trim().startsWith('```')) {
      if (stack.length > 0 && stack[stack.length - 1].type === 'open') {
        stack.push({ line: i + 1, type: 'close', content: lines[i] });
      } else {
        stack.push({ line: i + 1, type: 'open', content: lines[i] });
      }
    }
  }

  // Find the last unmatched open before the problem line
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i].type === 'open' && (i === stack.length - 1 || stack[i + 1].type === 'open')) {
      console.log(`\nUnmatched opening at line ${stack[i].line}: ${stack[i].content}`);

      // Show context
      const start = Math.max(0, stack[i].line - 5);
      const end = Math.min(lines.length, stack[i].line + 5);
      console.log('\nContext:');
      for (let j = start; j < end; j++) {
        const marker = j === stack[i].line - 1 ? '>>> ' : '    ';
        console.log(`${marker}${j + 1}: ${lines[j].substring(0, 80)}`);
      }
      break;
    }
  }
}

traceBack(
  'docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md',
  3030
);
