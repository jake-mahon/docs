const fs = require('fs');

function checkMDXIssues(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  // Check for XML elements that might be interpreted as JSX
  const xmlElements = [
    'CompositeRole',
    'SingleRole',
    'ResourceType',
    'NavigationRule',
    'ContextRule',
    'RecordSection',
    'Property',
    'IndirectResourceRule',
    'Category',
    'Dimension',
    'TypeRule',
    'ScalarRule',
  ];

  console.log('Checking for potential MDX issues...\n');

  // Check for inline code issues
  lines.forEach((line, idx) => {
    // Check for malformed inline code
    const backtickCount = (line.match(/`/g) || []).length;
    if (backtickCount % 2 !== 0) {
      console.log(`Line ${idx + 1}: Odd number of backticks (${backtickCount})`);
      console.log(`  ${line.trim()}\n`);
    }

    // Check for XML elements outside of code blocks
    xmlElements.forEach((element) => {
      const regex = new RegExp(`<${element}[^>]*>`, 'g');
      if (regex.test(line) && !line.trim().startsWith('```')) {
        // Check if we're inside a code block
        let insideCodeBlock = false;
        for (let i = 0; i < idx; i++) {
          if (lines[i].trim().startsWith('```')) {
            insideCodeBlock = !insideCodeBlock;
          }
        }
        if (!insideCodeBlock) {
          console.log(`Line ${idx + 1}: Found <${element}> outside code block`);
          console.log(`  ${line.trim()}\n`);
        }
      }
    });
  });

  // Check code blocks without language specifiers
  let codeBlockStart = -1;
  lines.forEach((line, idx) => {
    if (line.trim() === '```') {
      codeBlockStart = idx + 1;
    } else if (line.trim().startsWith('```') && codeBlockStart === idx) {
      // This is a code block with language specifier, reset
      codeBlockStart = -1;
    } else if (codeBlockStart > 0 && idx === codeBlockStart) {
      // Check if the first line contains XML
      xmlElements.forEach((element) => {
        if (line.includes(`<${element}`)) {
          console.log(
            `Line ${codeBlockStart}: Code block without language specifier contains <${element}>`
          );
          console.log(`  Consider adding 'xml' language specifier\n`);
        }
      });
    }
  });
}

checkMDXIssues('docs/identitymanager/6.2/access-governance/role-management/role-assignment.md');
