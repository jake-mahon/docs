#!/usr/bin/env node
/**
 * convert-admonitions-plain.js
 *
 * Recursively finds .md files in a given folder (relative to docs/),
 * replaces paragraphs starting with NOTE:, CAUTION:, RECOMMENDED:, or Remember, (as plain text, not bold/italic)
 * with Docusaurus admonition blocks.
 *
 * Usage:
 *   node scripts/convert-admonitions-plain.js <relative-folder>
 * Example:
 *   node scripts/convert-admonitions-plain.js accessanalyzer/12.0/install
 *
 * Only matches plain text forms (not bold/italic).
 */

const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(__dirname, '..', 'docs');
const ADMONITION_MAP = {
  NOTE: 'note',
  CAUTION: 'warning',
  RECOMMENDED: 'info',
  // Add more mappings here if needed
};

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

function extractTables(content) {
  const tables = [];
  let i = 0;
  content = content.replace(/((?:^\|.*\n?)+)/gm, match => {
    tables.push(match);
    return `__TABLE_BLOCK_${i++}__`;
  });
  return { content, tables };
}

function restoreTables(content, tables) {
  tables.forEach((table, i) => {
    content = content.replace(`__TABLE_BLOCK_${i}__`, table);
  });
  return content;
}

function convertNoteCautionPlain(content) {
  // NOTE: and CAUTION: as plain text only (not bold/italic)
  return content.replace(
    /(^|\r?\n)([ \t]*)(NOTE|CAUTION):[ \t]*([\s\S]*?)(?=(\r?\n\s*\r?\n|$))/gi,
    (match, p1, indent, type, text) => {
      const admonition = ADMONITION_MAP[type.toUpperCase()];
      const cleanedText = text.replace(/^[ \t]+/gm, '');
      const blockLines = [
        `:::${admonition}`,
        ...cleanedText.split(/\r?\n/),
        ':::'
      ];
      const block = blockLines.map(line => indent + line).join('\n');
      return `${p1}${block}\n`;
    }
  );
}

function convertRecommendedPlain(content) {
  // RECOMMENDED: as plain text only (not bold/italic)
  return content.replace(
    /(^|\r?\n)([ \t]*)RECOMMENDED:[ \t]*([\s\S]*?)(?=(\r?\n\s*\r?\n|$))/gi,
    (match, p1, indent, text) => {
      const admonition = ADMONITION_MAP['RECOMMENDED'];
      const cleanedText = text.replace(/^[ \t]+/gm, '');
      const blockLines = [
        `:::${admonition}`,
        ...cleanedText.split(/\r?\n/),
        ':::'
      ];
      const block = blockLines.map(line => indent + line).join('\n');
      return `${p1}${block}\n`;
    }
  );
}

function convertRememberPlain(content) {
  // Remember, as plain text only (not italics)
  return content.replace(
    /(^|\r?\n)([ \t]*)Remember,[ \t]*([\s\S]*?)(?=(\r?\n\s*\r?\n|$))/g,
    (match, p1, indent, text) => {
      const cleanedText = text.replace(/^[ \t]+/gm, '');
      const blockLines = [
        ':::tip',
        ...(`${indent}Remember,${cleanedText ? ' ' + cleanedText : ''}`.trimEnd().split(/\r?\n/)),
        ':::'
      ];
      const block = blockLines.map(line => indent + line).join('\n');
      return `${p1}${block}\n`;
    }
  );
}

function convertAdmonitionsPlain(content) {
  content = convertNoteCautionPlain(content);
  content = convertRecommendedPlain(content);
  content = convertRememberPlain(content);
  return content;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Extract tables and replace with placeholders
  const { content: contentNoTables, tables } = extractTables(content);
  // Convert admonitions in non-table content
  let newContent = convertAdmonitionsPlain(contentNoTables);
  // Restore tables
  newContent = restoreTables(newContent, tables);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function main() {
  const relInput = process.argv[2];
  if (!relInput) {
    console.error('Usage: node scripts/convert-admonitions-plain.js <relative-folder>');
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