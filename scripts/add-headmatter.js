const fs = require('fs');
const path = require('path');

function hasHeadmatter(content) {
  return content.startsWith('---');
}

function getFirstH1(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function addHeadmatterToFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (hasHeadmatter(content)) return; // Skip if headmatter exists
  const h1 = getFirstH1(content);
  if (!h1) return; // Skip if no H1 found
  const headmatter = `---\ntitle: "${h1}"
description: "${h1}"
sidebar_position: 10\n---\n`;
  fs.writeFileSync(filePath, headmatter + content, 'utf8');
  console.log(`Added headmatter to: ${filePath}`);
}

function processDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      addHeadmatterToFile(fullPath);
    }
  });
}

if (require.main === module) {
  const targetDirArg = process.argv[2];
  if (!targetDirArg) {
    console.error('Usage: node add-headmatter.js <folder-relative-to-docs>');
    process.exit(1);
  }
  // Always resolve relative to the docs/ directory at the project root
  const docsDir = path.join(__dirname, '..', 'docs');
  const targetDir = path.join(docsDir, targetDirArg);
  if (!fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
    console.error(`Directory does not exist: ${targetDir}`);
    process.exit(1);
  }
  processDir(targetDir);
} 