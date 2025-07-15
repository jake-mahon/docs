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

// Helper to recursively merge directories, skipping files that exist in the destination
function mergeDirectories(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      mergeDirectories(srcPath, destPath);
    } else {
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        fs.unlinkSync(srcPath);
      } else {
        // Skip conflicting file
        console.log(`  Skipped (exists): ${destPath}`);
      }
    }
  });
}

// Helper to recursively remove a directory if it is empty
function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  if (files.length === 0) {
    fs.rmdirSync(dir);
    return;
  }
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeEmptyDirs(fullPath);
    }
  });
  // After removing subdirs, check again
  if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

// Main function
function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const mergeFlagIndex = args.indexOf('--merge');
  const mergeMode = mergeFlagIndex !== -1;
  if (mergeMode) args.splice(mergeFlagIndex, 1);
  if (args.length !== 2) {
    console.error('Usage: node scripts/rename-md.js <old_path> <new_path> [--merge]');
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

  if (fs.existsSync(resolvedNewPath)) {
    if (mergeMode) {
      // Only merge if both are directories
      if (!fs.statSync(resolvedOldPath).isDirectory() || !fs.statSync(resolvedNewPath).isDirectory()) {
        console.error('Error: --merge can only be used when both source and destination are directories');
        process.exit(1);
      }
      console.log(`Merging ${resolvedOldPath} into ${resolvedNewPath} (skipping conflicts)...`);
      mergeDirectories(resolvedOldPath, resolvedNewPath);
      // Remove the source directory only if empty (after merge)
      removeEmptyDirs(resolvedOldPath);
      console.log(`Merge complete. Skipped files remain in source if any conflicts occurred.`);
    } else {
      console.error(`Error: Destination already exists: ${resolvedNewPath}`);
      process.exit(1);
    }
  } else {
    try {
      // Move/rename the file or folder
      fse.moveSync(resolvedOldPath, resolvedNewPath);
      console.log(`Moved/renamed ${resolvedOldPath} to ${resolvedNewPath}`);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  }

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
}

// Run the script
main(); 