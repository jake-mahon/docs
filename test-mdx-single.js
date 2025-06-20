const { compile } = require('@mdx-js/mdx');
const fs = require('fs');
const path = require('path');

async function testMDXFile(filePath) {
  console.log(`Testing MDX compilation for: ${filePath}\n`);

  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Try to compile with MDX
    const result = await compile(content, {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
      development: true,
    });

    console.log('✅ MDX compilation successful!');
    console.log('Compiled successfully without errors.');
  } catch (error) {
    console.error('❌ MDX compilation failed!\n');
    console.error('Error type:', error.name);
    console.error('Error message:', error.message);

    if (error.position) {
      console.error('\nError location:');
      console.error('  Line:', error.position.start?.line || error.line);
      console.error('  Column:', error.position.start?.column || error.column);
    }

    if (error.source) {
      console.error('\nSource context:', error.source);
    }

    // Try to show the problematic line
    if (error.line) {
      const lines = fs.readFileSync(filePath, 'utf8').split('\n');
      const errorLine = error.line - 1;
      console.error('\nProblematic content:');
      for (let i = Math.max(0, errorLine - 2); i < Math.min(lines.length, errorLine + 3); i++) {
        const marker = i === errorLine ? '>>> ' : '    ';
        console.error(`${marker}${i + 1}: ${lines[i]}`);
      }
    }

    console.error('\nFull error stack:');
    console.error(error.stack);
  }
}

testMDXFile('docs/identitymanager/6.2/access-governance/role-management/role-assignment.md');
