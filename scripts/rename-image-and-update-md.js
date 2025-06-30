const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const oldImageRelPath = args[0]; // e.g., img/product_docs/1secure/admin/login/oldname.webp
const newImageRelPath = args[1]; // e.g., img/product_docs/1secure/admin/login/newname.webp

const STATIC_DIR = path.join(__dirname, '..', 'static');
const DOCS_DIR = path.join(__dirname, '..', 'docs');

function showUsage() {
    console.log('Usage: node rename-image-and-update-md.js <old_image_path> <new_image_path>');
    console.log('');
    console.log('Arguments:');
    console.log('  old_image_path   Path to the image to rename/move, relative to static/');
    console.log('  new_image_path   New path/name for the image, relative to static/');
    console.log('');
    console.log('Example:');
    console.log('  node rename-image-and-update-md.js img/product_docs/1secure/admin/login/oldname.webp img/product_docs/1secure/admin/login/newname.webp');
}

if (args.includes('--help') || args.includes('-h') || !oldImageRelPath || !newImageRelPath) {
    showUsage();
    process.exit(0);
}

const oldImageAbsPath = path.join(STATIC_DIR, oldImageRelPath);
const newImageAbsPath = path.join(STATIC_DIR, newImageRelPath);

// Check if old image exists
if (!fs.existsSync(oldImageAbsPath)) {
    console.error(`❌ Error: Old image not found: ${oldImageAbsPath}`);
    process.exit(1);
}

// Ensure new image directory exists
const newImageDir = path.dirname(newImageAbsPath);
if (!fs.existsSync(newImageDir)) {
    fs.mkdirSync(newImageDir, { recursive: true });
}

// Move/rename the image
try {
    fs.renameSync(oldImageAbsPath, newImageAbsPath);
    console.log(`✅ Image moved: ${oldImageRelPath} -> ${newImageRelPath}`);
} catch (err) {
    console.error(`❌ Error moving image: ${err.message}`);
    process.exit(1);
}

// Function to recursively find all .md files in docs/
function findMarkdownFiles(dir) {
    const files = [];
    function scanDirectory(currentDir) {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                scanDirectory(fullPath);
            } else if (path.extname(item).toLowerCase() === '.md') {
                files.push(fullPath);
            }
        }
    }
    scanDirectory(dir);
    return files;
}

// Update references in markdown files
const markdownFiles = findMarkdownFiles(DOCS_DIR);
let filesUpdated = 0;
let refsUpdated = 0;

for (const filePath of markdownFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace all references to the old image path (with or without leading slash)
    const oldPathPattern = new RegExp(`([!\[][^\]]*\]\()\/?${oldImageRelPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\))`, 'g');
    const newPath = `/${newImageRelPath}`;
    const newContent = content.replace(oldPathPattern, `$1${newPath}$2`);
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        filesUpdated++;
        // Count number of replacements
        refsUpdated += (content.match(oldPathPattern) || []).length;
        console.log(`📝 Updated references in: ${path.relative(DOCS_DIR, filePath)}`);
    }
}

console.log('='.repeat(60));
console.log(`📁 Markdown files updated: ${filesUpdated}`);
console.log(`🔗 Image references updated: ${refsUpdated}`);
console.log('✅ Done!'); 