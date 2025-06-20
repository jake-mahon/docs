const fs = require('fs');

function checkBackticks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const backtickPositions = [];

  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      backtickPositions.push({
        line: index + 1,
        content: line,
        isOpening: backtickPositions.length % 2 === 0,
      });
    }
  });

  console.log(`Total: ${backtickPositions.length} backtick lines`);

  if (backtickPositions.length % 2 !== 0) {
    console.log('\n❌ Unmatched backticks detected!');
    console.log('\nLast 5 backtick positions:');
    backtickPositions.slice(-5).forEach((pos) => {
      console.log(`Line ${pos.line}: ${pos.isOpening ? 'OPENING' : 'CLOSING'} - ${pos.content}`);
    });
  }
}

const file =
  process.argv[2] ||
  'docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md';
checkBackticks(file);
