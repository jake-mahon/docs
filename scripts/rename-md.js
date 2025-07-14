#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

// Helper to recursively get all .md files in a directory
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Helper to update markdown links in a file, returns array of updated links
function updateMarkdownLinks(filePath, oldPath, newPath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  let updatedLinks = [];

  // Normalize to forward slashes for matching
  const normalizedOld = oldPath.replace(/\\/g, '/');
  const normalizedNew = newPath.replace(/\\/g, '/');
  const absOld = `/docs/${normalizedOld}`;
  const absNew = `/docs/${normalizedNew}`;

  // Regex to match markdown links, capturing optional '!' for images
  const linkRegex = /(!)?\[([^\]]+)\]\(([^)]+)\)/g;

  const newContent = content.replace(linkRegex, (match, isImage, text, link) => {
    if (isImage) return match; // skip images

    let replaced = false;
    let newLink = link;

    // Replace absolute path prefix
    if (link.startsWith(absOld + '/') || link === absOld) {
      newLink = absNew + link.slice(absOld.length);
      replaced = true;
    }
    // Replace relative path prefix
    else if (link.startsWith(normalizedOld + '/') || link === normalizedOld) {
      newLink = normalizedNew + link.slice(normalizedOld.length);
      replaced = true;
    }

    if (replaced) {
      updated = true;
      updatedLinks.push(match.trim());
      return `[${text}](${newLink})`;
    }
    return match;
  });

  if (updated) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  Updated links in: ${filePath}`);
    updatedLinks.forEach(link => {
      console.log(`    - ${link}`);
    });
  }

  return updatedLinks.length > 0;
}

// Main function
function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    console.error('Usage: node scripts/rename-md.js <old_path> <new_path>');
    process.exit(1);
  }

  const oldPath = args[0];
  const newPath = args[1];

  // Assume always in docs folder
  const docsDir = path.resolve('docs');
  const resolvedOldPath = path.join(docsDir, oldPath);
  const resolvedNewPath = path.join(docsDir, newPath);

  if (!fs.existsSync(resolvedOldPath)) {
    console.error(`Error: Source does not exist: ${resolvedOldPath}`);
    process.exit(1);
  }

  // Safety check: prevent moving a folder into itself or its parent
  if (fs.statSync(resolvedOldPath).isDirectory() && (resolvedOldPath === resolvedNewPath || resolvedNewPath.startsWith(resolvedOldPath + path.sep))) {
    console.error('Error: Cannot move a directory into itself or its parent');
    process.exit(1);
  }

  // New check: prevent overwriting if destination exists
  if (fs.existsSync(resolvedNewPath)) {
    console.error(`Error: Destination already exists: ${resolvedNewPath}`);
    process.exit(1);
  }

  try {
    // Move/rename the file or folder
    fse.moveSync(resolvedOldPath, resolvedNewPath);
    console.log(`Moved/renamed ${resolvedOldPath} to ${resolvedNewPath}`);

    // Update markdown links
    console.log('Updating markdown links...');
    const markdownFiles = getAllMarkdownFiles(docsDir);
    console.log(`Found ${markdownFiles.length} markdown files to check`);

    let updatedFilesCount = 0;
    markdownFiles.forEach(filePath => {
      if (updateMarkdownLinks(filePath, oldPath, newPath)) {
        updatedFilesCount++;
      }
    });

    console.log(`Updated markdown links in ${updatedFilesCount} files under docs/.`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run the script
main(); 