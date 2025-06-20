const fs = require('fs');

function findUnmatchedBacktick(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let backtickPositions = [];

  // Collect all backtick positions
  lines.forEach((line, lineIdx) => {
    let charIdx = 0;
    while (charIdx < line.length) {
      if (line[charIdx] === '`') {
        backtickPositions.push({
          line: lineIdx + 1,
          column: charIdx + 1,
          context: line.substring(Math.max(0, charIdx - 20), Math.min(line.length, charIdx + 20)),
        });
      }
      charIdx++;
    }
  });

  console.log(`Total backticks found: ${backtickPositions.length}`);

  // Track inline code state
  let state = 'normal'; // normal, inline, code_block
  let lastInlineStart = null;
  let codeBlockDepth = 0;

  for (let i = 0; i < backtickPositions.length; i++) {
    const pos = backtickPositions[i];
    const line = lines[pos.line - 1];

    // Check if this is a triple backtick
    if (
      i + 2 < backtickPositions.length &&
      backtickPositions[i + 1].line === pos.line &&
      backtickPositions[i + 2].line === pos.line &&
      backtickPositions[i + 1].column === pos.column + 1 &&
      backtickPositions[i + 2].column === pos.column + 2
    ) {
      // This is a triple backtick
      if (line.trim().startsWith('```')) {
        if (state === 'code_block') {
          codeBlockDepth--;
          if (codeBlockDepth === 0) state = 'normal';
        } else {
          state = 'code_block';
          codeBlockDepth++;
        }
      }
      i += 2; // Skip the next two backticks
      continue;
    }

    // Check if this is a double backtick
    if (
      i + 1 < backtickPositions.length &&
      backtickPositions[i + 1].line === pos.line &&
      backtickPositions[i + 1].column === pos.column + 1
    ) {
      i++; // Skip the next backtick
      continue;
    }

    // Single backtick
    if (state !== 'code_block') {
      if (state === 'normal') {
        state = 'inline';
        lastInlineStart = pos;
      } else if (state === 'inline') {
        state = 'normal';
        lastInlineStart = null;
      }
    }
  }

  if (state === 'inline' && lastInlineStart) {
    console.log('\n❌ Found unmatched inline code backtick!');
    console.log(`Line ${lastInlineStart.line}, Column ${lastInlineStart.column}`);
    console.log(`Context: ...${lastInlineStart.context}...`);

    // Show more context
    const lineIdx = lastInlineStart.line - 1;
    console.log('\nFull line:');
    console.log(lines[lineIdx]);
    console.log(' '.repeat(lastInlineStart.column - 1) + '^');

    // Show surrounding lines
    console.log('\nSurrounding lines:');
    for (let i = Math.max(0, lineIdx - 2); i <= Math.min(lines.length - 1, lineIdx + 2); i++) {
      const marker = i === lineIdx ? '>>> ' : '    ';
      console.log(`${marker}${i + 1}: ${lines[i]}`);
    }
  }

  if (state === 'code_block') {
    console.log('\n❌ Unclosed code block detected!');
  }
}

findUnmatchedBacktick(
  'docs/identitymanager/6.2/access-governance/role-management/role-assignment.md'
);
