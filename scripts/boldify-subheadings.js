#!/usr/bin/env node
/**
 * boldify-subheadings.js
 *
 * Recursively finds .md files in a given folder (relative to docs/),
 * finds lines that are likely sub-headings (standalone, not already formatted, not a heading/bullet/image/link/code, not ending with punctuation, and 8 words or fewer),
 * and wraps them in double asterisks for bold.
 *
 * Usage:
 *   node scripts/boldify-subheadings.js <relative-folder>
 * Example:
 *   node scripts/boldify-subheadings.js accessanalyzer/12.0/install
 */

const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(__dirname, '..', 'docs');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function isSubheading(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  // Not a heading, bullet, image, link, code, or already formatted
  if (/^(#|\* |\- |\+ |!\[|\[|\d+\.|`| {4,})/.test(trimmed)) return false;
  if (/\*\*|__|`/.test(trimmed)) return false; // Only skip if already bold, code, or double-underscore
  if (/(\s|^)\*[^*]+\*(\s|$)/.test(trimmed)) return false; // skip if *italic*
  if (/(\s|^)_[^_]+_(\s|$)/.test(trimmed)) return false;   // skip if _italic_
  // Not ending with . : ;
  if (/[.:;]$/.test(trimmed)) return false;
  // 8 words or fewer
  if (trimmed.split(/\s+/).length > 8) return false;
  return true;
}

function isBolded(line) {
  const trimmed = line.trim();
  return /^\*\*[^*]+\*\*$/.test(trimmed) || /^__[^_]+__$/.test(trimmed);
}

function boldifySubheadings(content) {
  const lines = content.split(/\r?\n/);
  const newLines = [...lines];
  let lastWasBolded = false;
  for (let i = 0; i < lines.length; i++) {
    const prevEmpty = i === 0 || lines[i-1].trim() === '';
    const nextEmpty = i === lines.length-1 || lines[i+1].trim() === '';
    if (prevEmpty && nextEmpty && isSubheading(lines[i]) && !lastWasBolded) {
      newLines[i] = `**${lines[i].trim()}**`;
      lastWasBolded = true;
    } else if (lines[i].trim() !== '') {
      lastWasBolded = isBolded(lines[i]);
    }
  }
  return newLines.join('\n');
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = boldifySubheadings(content);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function main() {
  const relInput = process.argv[2];
  if (!relInput) {
    console.error('Usage: node scripts/boldify-subheadings.js <relative-folder>');
    process.exit(1);
  }
  const inputDir = path.join(DOCS_ROOT, relInput);
  if (!fs.existsSync(inputDir)) {
    console.error(`Directory does not exist: ${inputDir}`);
    process.exit(1);
  }
  const mdFiles = getAllMarkdownFiles(inputDir);
  mdFiles.forEach(processFile);
}

if (require.main === module) {
  main();
} 