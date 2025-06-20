const { compile } = require('@mdx-js/mdx');
const fs = require('fs');

async function testMDX(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    await compile(content);
    console.log('✅ MDX compiled successfully');
  } catch (error) {
    console.error('❌ MDX Error:', error.message);
  }
}

const file =
  process.argv[2] ||
  'docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md';
testMDX(file);
