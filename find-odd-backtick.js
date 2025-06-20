const fs = require('fs');

function findOddBacktick(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const backticks = [];

  // Find all triple backticks
  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      backticks.push({
        line: index + 1,
        content: line,
        fullLine: line,
      });
    }
  });

  console.log(`Total backticks: ${backticks.length}`);

  // Check pairing
  let unpaired = null;
  for (let i = 0; i < backticks.length; i += 2) {
    if (i + 1 >= backticks.length) {
      unpaired = i;
      break;
    }

    // Check if this looks like a proper open/close pair
    const open = backticks[i];
    const close = backticks[i + 1];

    // If the "close" has a language identifier, it's actually an open
    if (close.content.length > 3 && close.content !== '```') {
      console.log(`\n❌ Mismatched pair at lines ${open.line} and ${close.line}`);
      console.log(`Line ${open.line}: ${open.content}`);
      console.log(
        `Line ${close.line}: ${close.content} (this looks like an opening, not a closing)`
      );
      unpaired = i;
      break;
    }
  }

  if (unpaired !== null) {
    const problem = backticks[unpaired];
    console.log(`\n🔍 Problem starts at backtick #${unpaired + 1} (line ${problem.line})`);

    // Show context
    const start = Math.max(0, problem.line - 6);
    const end = Math.min(lines.length, problem.line + 5);

    console.log('\nContext:');
    for (let i = start; i < end; i++) {
      const marker = i === problem.line - 1 ? ' >>> ' : '     ';
      console.log(`${marker}${i + 1}: ${lines[i]}`);
    }

    // Show nearby backticks
    console.log('\nNearby backticks:');
    for (let i = Math.max(0, unpaired - 2); i < Math.min(backticks.length, unpaired + 3); i++) {
      const marker = i === unpaired ? ' >>> ' : '     ';
      console.log(`${marker}#${i + 1} at line ${backticks[i].line}: ${backticks[i].content}`);
    }
  }
}

findOddBacktick(
  'docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md'
);
