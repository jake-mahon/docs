#!/usr/bin/env node
/**
 * convert-admonitions.js
 *
 * Recursively finds .md files in a given folder (relative to docs/),
 * replaces paragraphs starting with **NOTE:** with Docusaurus admonition blocks.
 *
 * Usage:
 *   node scripts/convert-admonitions.js <relative-folder>
 * Example:
 *   node scripts/convert-admonitions.js accessanalyzer/12.0/install
 *
 * Extendable for other admonitions (see the ADMONITION_MAP below).
 */

const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(__dirname, '..', 'docs');
const ADMONITION_MAP = {
  NOTE: 'note',
  CAUTION: 'warning',
  RECOMMENDED: 'info',
  // Add more mappings here, e.g. 'CAUTION': 'caution', 'TIP': 'tip'
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

function convertNoteCaution(content) {
  // NOTE and CAUTION: bold only (**NOTE:**, **CAUTION:**)
  // Updated regex to match multi-line paragraphs (including hard line breaks)
  return content.replace(
    /(^|\r?\n)([ \t]*)\*\*(NOTE|CAUTION)\:\*\*[ \t]*([\s\S]*?)(?=(\r?\n\s*\r?\n|$))/gi,
    (match, p1, indent, type, text) => {
      const admonition = ADMONITION_MAP[type.toUpperCase()];
      // Remove leading whitespace from all lines in the paragraph
      const cleanedText = text.replace(/^[ \t]+/gm, '');
      // Indent every line in the block
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

function convertRecommended(content) {
  // RECOMMENDED: bold+italics only (**_RECOMMENDED:_** or __*RECOMMENDED:*__)
  return content.replace(
    /(^|\r?\n)([ \t]*)(\*\*|__)(\*|_)(RECOMMENDED:)\4\3[ \t]*([\s\S]*?)(?=(\r?\n\s*\r?\n|$))/gi,
    (match, p1, indent, bold, ital, type, text) => {
      const admonition = ADMONITION_MAP[type.replace(':', '').toUpperCase()];
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

function convertRememberTips(content) {
  // Remember: italics only (*Remember,* or _Remember,_)
  return content.replace(
    /(^|\r?\n)([ \t]*)[\*_]Remember,[\*_][ \t]*([\s\S]*?)(?=(\r?\n\s*\r?\n|$))/g,
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

function convertAdmonitions(content) {
  content = convertNoteCaution(content);
  content = convertRecommended(content);
  content = convertRememberTips(content);
  return content;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Extract tables and replace with placeholders
  const { content: contentNoTables, tables } = extractTables(content);
  // Convert admonitions in non-table content
  let newContent = convertAdmonitions(contentNoTables);
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
    console.error('Usage: node scripts/convert-admonitions.js <relative-folder>');
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