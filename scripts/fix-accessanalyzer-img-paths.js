const fs = require('fs');
const path = require('path');

// Usage: node scripts/fix-accessanalyzer-img-paths.js <relative-folder-path>
if (process.argv.length < 3) {
  console.error('Usage: node scripts/fix-accessanalyzer-img-paths.js <relative-folder-path>');
  process.exit(1);
}

const targetFolder = path.join(__dirname, '..', 'docs', process.argv[2]);

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/\/img\/product_docs\/accessanalyzer(?!\/12\.0)/g, '/img/product_docs/accessanalyzer/12.0')
    .replace(/\/img\/versioned_docs\/accessanalyzer_11\.6\/accessanalyzer/g, '/img/product_docs/accessanalyzer/11.6');
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && fullPath.endsWith('.md')) {
      processFile(fullPath);
    }
  });
}

if (!fs.existsSync(targetFolder)) {
  console.error(`Folder does not exist: ${targetFolder}`);
  process.exit(1);
}

walkDir(targetFolder);
console.log('Done.'); 