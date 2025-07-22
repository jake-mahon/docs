const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function fixBulletedNumberedLists(filePath) {
  if (!filePath.endsWith('.md')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  // Regex: match lines like '-   1. Something – ...' and wrap '1. Something' in bold
  const regex = /^([ \t]*[-*][ \t]+)([0-9]+\.\s+[^–\n]+)(–)/gm;
  const newContent = content.replace(regex, (match, p1, p2, p3) => {
    // If already bold, skip
    if (p2.trim().startsWith('**') && p2.trim().endsWith('**')) return match;
    return `${p1}**${p2.trim()}** ${p3}`;
  });
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  }
}

// Accept input path relative to the docs folder
const inputArg = process.argv[2];
if (!inputArg) {
  console.error('Usage: node scripts/fix-bulleted-numbered-lists.js <relative-folder-path>');
  process.exit(1);
}
const docsDir = path.join(__dirname, '../docs');
const targetDir = path.join(docsDir, inputArg);
if (!fs.existsSync(targetDir)) {
  console.error('Target directory does not exist:', targetDir);
  process.exit(1);
}
walkDir(targetDir, fixBulletedNumberedLists);
console.log('Done.');
