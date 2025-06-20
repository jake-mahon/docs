const fs = require('fs');

function findUnclosedCodeBlock(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let codeBlockStack = [];
  let insideBlockquote = false;

  lines.forEach((line, idx) => {
    // Track blockquote state
    if (line.startsWith('>')) {
      insideBlockquote = true;
    } else if (line.trim() === '') {
      insideBlockquote = false;
    }

    // Check for triple backticks
    if (line.trim().startsWith('```')) {
      if (
        codeBlockStack.length > 0 &&
        codeBlockStack[codeBlockStack.length - 1].insideBlockquote === insideBlockquote
      ) {
        // This should close the most recent code block
        codeBlockStack.pop();
      } else {
        // This opens a new code block
        codeBlockStack.push({
          line: idx + 1,
          content: line,
          insideBlockquote: insideBlockquote,
        });
      }
    }
  });

  if (codeBlockStack.length > 0) {
    console.log(`Found ${codeBlockStack.length} unclosed code block(s):\n`);

    codeBlockStack.forEach((block) => {
      console.log(`Unclosed code block starting at line ${block.line}:`);
      console.log(`Content: "${block.content}"`);
      console.log(`Inside blockquote: ${block.insideBlockquote}`);

      // Show context
      const start = Math.max(0, block.line - 3);
      const end = Math.min(lines.length, block.line + 5);
      console.log('\nContext:');
      for (let i = start; i < end; i++) {
        const marker = i === block.line - 1 ? '>>> ' : '    ';
        console.log(`${marker}${i + 1}: ${lines[i]}`);
      }
      console.log('\n---\n');
    });
  } else {
    console.log('All code blocks are properly closed.');
  }

  // Also count total backticks
  const totalBackticks = content.split('`').length - 1;
  console.log(`\nTotal backticks in file: ${totalBackticks}`);
}

findUnclosedCodeBlock(
  'docs/identitymanager/6.2/access-governance/role-management/role-assignment.md'
);
