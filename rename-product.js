#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node rename-product.js <old-product-name> <new-product-name>');
  console.error('Example: node rename-product.js usercube identitymanager');
  process.exit(1);
}

const [oldProductName, newProductName] = args;
const docsDir = path.join(__dirname, 'docs');
const staticDir = path.join(__dirname, 'static');

console.log(`Renaming product from "${oldProductName}" to "${newProductName}"`);

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dir, extensions = []) {
  const files = [];
  
  function traverse(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile()) {
        if (extensions.length === 0 || extensions.some(ext => entry.name.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
  }
  
  if (fs.existsSync(dir)) {
    traverse(dir);
  }
  
  return files;
}

/**
 * Rename directories and files containing the old product name
 */
function renameDirectoriesAndFiles() {
  console.log('\n1. Renaming directories and files...');
  
  // Get all items in docs directory
  const allItems = [];
  
  function collectItems(dir) {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      allItems.push({
        path: fullPath,
        name: entry.name,
        isDirectory: entry.isDirectory()
      });
      
      if (entry.isDirectory()) {
        collectItems(fullPath);
      }
    }
  }
  
  // Collect from both docs and static directories
  collectItems(docsDir);
  collectItems(staticDir);
  
  // Sort by depth (deepest first) to handle nested renames properly
  allItems.sort((a, b) => {
    const aDepth = a.path.split(path.sep).length;
    const bDepth = b.path.split(path.sep).length;
    return bDepth - aDepth;
  });
  
  // Rename items that contain the old product name
  const renamedPaths = new Map();
  
  for (const item of allItems) {
    if (item.name.includes(oldProductName)) {
      const newName = item.name.replace(new RegExp(oldProductName, 'g'), newProductName);
      const newPath = path.join(path.dirname(item.path), newName);
      
      console.log(`  Renaming: ${item.path} -> ${newPath}`);
      
      try {
        fs.renameSync(item.path, newPath);
        renamedPaths.set(item.path, newPath);
      } catch (error) {
        console.error(`  Error renaming ${item.path}:`, error.message);
      }
    }
  }
  
  return renamedPaths;
}

/**
 * Update file path references in markdown files
 */
function updateMarkdownReferences(renamedPaths) {
  console.log('\n2. Updating markdown file references...');
  
  // Get all markdown files from ALL docs subdirectories
  const markdownFiles = getAllFiles(docsDir, ['.md', '.mdx']);
  
  for (const filePath of markdownFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      
      // Replace relative path references to docs directories (./oldname, ../oldname, etc.)
      // Matches characters commonly found in file paths, excluding whitespace and common delimiters
      const relativeDocsRegex = new RegExp(`(\\.{1,2}/[^\\s"')<>|]*/)${oldProductName}(/[^\\s"')<>|]*)?`, 'g');
      if (relativeDocsRegex.test(content)) {
        content = content.replace(relativeDocsRegex, `$1${newProductName}$2`);
        hasChanges = true;
      }
      
      // Replace absolute doc references (/docs/product/version/oldname)  
      const absoluteDocsRegex = new RegExp(`(/docs/[^\\s"')<>|]*/)${oldProductName}(/[^\\s"')<>|]*)?`, 'g');
      if (absoluteDocsRegex.test(content)) {
        content = content.replace(absoluteDocsRegex, `$1${newProductName}$2`);
        hasChanges = true;
      }
      
      // Replace doc links without leading slash (docs/product/version/oldname)
      const docLinksRegex = new RegExp(`(docs/[^\\s"')<>|]*/)${oldProductName}(/[^\\s"')<>|]*)?`, 'g');
      if (docLinksRegex.test(content)) {
        content = content.replace(docLinksRegex, `$1${newProductName}$2`);
        hasChanges = true;
      }
      
      // Replace ANY path containing oldProductName (catches nested references)
      const anyPathRegex = new RegExp(`([^\\s"')<>|]*/)${oldProductName}(/[^\\s"')<>|]*)?`, 'g');
      if (anyPathRegex.test(content)) {
        content = content.replace(anyPathRegex, `$1${newProductName}$2`);
        hasChanges = true;
      }
      
      // Replace image paths in docs directories
      const imgDocsRegex = new RegExp(`(img/)([^\\s"')<>|]*/)${oldProductName}([^\\s"')<>|]*/)`, 'g');
      if (imgDocsRegex.test(content)) {
        content = content.replace(imgDocsRegex, `$1$2${newProductName}$3`);
        hasChanges = true;
      }
      
      // Replace static file paths
      const staticRegex = new RegExp(`(/static/)([^\\s"')<>|]*/)${oldProductName}([^\\s"')<>|]*/)`, 'g');
      if (staticRegex.test(content)) {
        content = content.replace(staticRegex, `$1$2${newProductName}$3`);
        hasChanges = true;
      }
      
      // Replace static paths without leading slash
      const staticNoSlashRegex = new RegExp(`(static/)([^\\s"')<>|]*/)${oldProductName}([^\\s"')<>|]*/)`, 'g');
      if (staticNoSlashRegex.test(content)) {
        content = content.replace(staticNoSlashRegex, `$1$2${newProductName}$3`);
        hasChanges = true;
      }
      
      // Replace filename references that contain the old product name
      const filenameRegex = new RegExp(`([^\\s"']*${oldProductName}[^\\s"']*\\.(png|jpg|jpeg|gif|svg|webp|pdf|docx?|xlsx?))`, 'gi');
      if (filenameRegex.test(content)) {
        content = content.replace(filenameRegex, (match) => {
          return match.replace(new RegExp(oldProductName, 'gi'), newProductName);
        });
        hasChanges = true;
      }
      
      if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  Updated: ${filePath}`);
      }
      
    } catch (error) {
      console.error(`  Error updating ${filePath}:`, error.message);
    }
  }
}

/**
 * Update docusaurus configuration
 */
function updateDocusaurusConfig() {
  console.log('\n3. Updating Docusaurus configuration...');
  
  const configFiles = [
    path.join(__dirname, 'docusaurus.config.js'),
    path.join(__dirname, 'docusaurus.config.products.js'),
    path.join(__dirname, 'docusaurus.config.modular.js')
  ];
  
  for (const configFile of configFiles) {
    if (!fs.existsSync(configFile)) continue;
    
    try {
      let content = fs.readFileSync(configFile, 'utf8');
      let hasChanges = false;
      
      // Replace product name in paths
      const pathRegex = new RegExp(`docs/${oldProductName}`, 'g');
      if (pathRegex.test(content)) {
        content = content.replace(pathRegex, `docs/${newProductName}`);
        hasChanges = true;
      }
      
      // Replace product name in route base paths
      const routeRegex = new RegExp(`docs/${oldProductName}`, 'g');
      if (routeRegex.test(content)) {
        content = content.replace(routeRegex, `docs/${newProductName}`);
        hasChanges = true;
      }
      
      // Replace product name in IDs
      const idRegex = new RegExp(`id: '${oldProductName}`, 'g');
      if (idRegex.test(content)) {
        content = content.replace(idRegex, `id: '${newProductName}`);
        hasChanges = true;
      }
      
      // Replace product name in ID patterns (with version suffixes)
      const idVersionRegex = new RegExp(`id: '${oldProductName}([^']*)'`, 'g');
      if (idVersionRegex.test(content)) {
        content = content.replace(idVersionRegex, `id: '${newProductName}$1'`);
        hasChanges = true;
      }
      
      if (hasChanges) {
        fs.writeFileSync(configFile, content, 'utf8');
        console.log(`  Updated: ${configFile}`);
      }
      
    } catch (error) {
      console.error(`  Error updating ${configFile}:`, error.message);
    }
  }
}

/**
 * Main execution
 */
function main() {
  console.log('Starting product rename process...');
  
  // Check if the old product directory exists
  const oldProductDir = path.join(docsDir, oldProductName);
  if (!fs.existsSync(oldProductDir)) {
    console.error(`Error: Product directory "${oldProductDir}" does not exist.`);
    process.exit(1);
  }
  
  try {
    // Step 1: Rename directories and files
    const renamedPaths = renameDirectoriesAndFiles();
    
    // Step 2: Update markdown references
    updateMarkdownReferences(renamedPaths);
    
    // Step 3: Update Docusaurus config
    updateDocusaurusConfig();
    
    console.log('\n✅ Product rename completed successfully!');
    console.log(`\nNext steps:`);
    console.log(`1. Review the changes`);
    console.log(`2. Test the build: npm run build`);
    console.log(`3. Test the dev server: npm run start`);
    
  } catch (error) {
    console.error('\n❌ Error during rename process:', error.message);
    process.exit(1);
  }
}

// Run the script
main();