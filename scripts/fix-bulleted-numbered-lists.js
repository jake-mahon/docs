const fs = require('fs');
const path = require('path');

def walkDir(dir, callback) {
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

const targetDir = path.join(__dirname, '../docs/accessanalyzer/11.6/solutions');
walkDir(targetDir, fixBulletedNumberedLists);
console.log('Done.');
