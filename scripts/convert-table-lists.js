#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function insertBrBeforeNote(cell) {
  // Insert <br /> before any **NOTE:**, **CAUTION:**, or **_RECOMMENDED:_** not at the start of a line or after <br />
  // (Don't double-insert if already at start of line or after <br />)
  return cell
    .replace(/([^\n<])\*\*NOTE:\*\*/g, '$1<br />**NOTE:**')
    .replace(/([^\n<])\*\*CAUTION:\*\*/g, '$1<br />**CAUTION:**')
    .replace(/([^\n<])\*\*_RECOMMENDED:_\*\*/g, '$1<br />**_RECOMMENDED:_**');
}

function convertDashListToUl(cell) {
  const trimmed = cell.trim();
  // If the cell starts with '- ', treat as a list (even if only one item)
  if (trimmed.startsWith('- ')) {
    const items = cell.split(/ - /).filter(Boolean).map(item => item.trim());
    if (items.length === 0) return insertBrBeforeNote(cell);
    // Remove leading dash from the first item
    items[0] = items[0].replace(/^- /, '').trim();
    let ul = '<ul>' + items.map(item => `<li>${item}</li>`).join('') + '</ul>';
    ul = insertBrBeforeNote(ul);
    return ul;
  }
  // Otherwise, if there are at least two '- ' items, treat as a list
  const dashCount = (cell.match(/(^| )- /g) || []).length;
  if (dashCount < 2) return insertBrBeforeNote(cell);
  let intro = '';
  let listPart = cell;
  const firstDash = cell.indexOf(' - ');
  if (firstDash !== -1) {
    intro = cell.slice(0, firstDash).trim();
    listPart = cell.slice(firstDash + 1);
  }
  const items = listPart.split(/ - /).filter(Boolean).map(item => item.trim()).filter(Boolean);
  if (items.length < 1) return insertBrBeforeNote(cell);
  // Remove leading dash from the first item if present
  items[0] = items[0].replace(/^- /, '').trim();
  let ul = '<ul>' + items.map(item => `<li>${item}</li>`).join('') + '</ul>';
  let result = intro ? `${intro} ${ul}` : ul;
  result = insertBrBeforeNote(result);
  return result;
}

function splitRow(row) {
  let cells = row.split('|').map(cell => cell.trim());
  if (cells[0] === '') cells = cells.slice(1);
  if (cells[cells.length - 1] === '') cells = cells.slice(0, -1);
  return cells;
}

function getCellMaxLineLength(cell) {
  return Math.max(...cell.split(/\r?\n/).map(line => line.length));
}

function tableHasDashList(rows) {
  for (let i = 2; i < rows.length; i++) {
    for (const cell of rows[i]) {
      const trimmed = cell.trim();
      if (trimmed.startsWith('- ')) return true;
      if ((cell.match(/(^| )- /g) || []).length >= 2) return true;
    }
  }
  return false;
}

function formatTable(table) {
  const rows = table.trim().split(/\r?\n/).map(splitRow);
  if (!tableHasDashList(rows)) {
    // No dash lists, but still apply NOTE br feature
    return rows.map(row =>
      '| ' + row.map(cell => insertBrBeforeNote(cell)).join(' | ') + ' |'
    ).join('\n');
  }
  for (let i = 2; i < rows.length; i++) {
    rows[i] = rows[i].map(cell => convertDashListToUl(cell));
  }
  const colWidths = [];
  rows.forEach(row => row.forEach((cell, i) => {
    const maxLen = getCellMaxLineLength(cell);
    colWidths[i] = Math.max(colWidths[i] || 0, maxLen);
  }));
  const separatorRow = colWidths.map(w => '-'.repeat(w)).map(dash => dash.padEnd(dash.length, '-'));
  const paddedRows = rows.map((row, rowIdx) => {
    if (rowIdx === 1) {
      return separatorRow;
    }
    return row.map((cell, i) => {
      const lines = cell.split(/\r?\n/);
      return lines.map(line => line.padEnd(colWidths[i])).join('\n');
    });
  });
  return paddedRows.map(row =>
    '| ' + row.join(' | ') + ' |'
  ).join('\n');
}

function formatMarkdownTables(content) {
  const tableRegex = /((?:^\|.*(?:\r?\n|$))+)/gm;
  return content.replace(tableRegex, match => {
    const lines = match.trim().split(/\r?\n/);
    if (lines.length < 2) return match;
    const separator = lines[1].replace(/\|/g, '').trim();
    if (!/^[-: ]+$/.test(separator)) return match;
    return formatTable(match);
  });
}

function processFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const formatted = formatMarkdownTables(content);
  fs.writeFileSync(file, formatted);
  console.log('Processed:', file);
}

function processDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && fullPath.endsWith('.md')) {
      processFile(fullPath);
    }
  });
}

if (require.main === module) {
  const inputDir = process.argv[2];
  if (!inputDir) {
    console.error('Usage: node convert-table-lists.js <input-folder-relative-to-docs>');
    process.exit(1);
  }
  const docsRoot = path.join(__dirname, '..', 'docs');
  const targetDir = path.resolve(docsRoot, inputDir);
  processDir(targetDir);
} 