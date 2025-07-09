#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

// Usage: node simpler-fltoc-frontmatter.js <fltoc-file> <docs-folder> <product-key>
const argv = process.argv.slice(2);
if (argv.includes('--help') || argv.includes('-h') || argv.length < 3) {
  console.log('Usage: node simpler-fltoc-frontmatter.js <fltoc-file> <docs-folder> <product-key>');
  process.exit(1);
}
const FLTOC_PATH = argv[0];
const DOCS_ROOT = argv[1];
const PRODUCT_KEY = argv[2];

function mapFltocLinkToMd(link) {
  if (link.startsWith('/Content/Config/')) {
    return link.replace('/Content/', '').replace(/\.html?$/, '.md').replace(/ /g, '_').toLowerCase();
  } else if (link.startsWith('/Content/Access/General/')) {
    return link.replace('/Content/Access/General/', 'general/').replace(/\.html?$/, '.md').replace(/ /g, '_').toLowerCase();
  } else if (link.startsWith(`/Content/${PRODUCT_KEY}/`)) {
    return link.replace(`/Content/${PRODUCT_KEY}/`, '').replace(/\.html?$/, '.md').replace(/ /g, '_').toLowerCase();
  }
  return null;
}

function parseFltocNode(node) {
  const link = node['@_Link'];
  const title = node['@_Title'] || node.Title || '';
  const children = node.TocEntry
    ? Array.isArray(node.TocEntry)
      ? node.TocEntry
      : [node.TocEntry]
    : [];
  return { link, title, children: children.map(parseFltocNode) };
}

function updateFrontmatter(filePath, title, position) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const h1Match = content.match(/^#\s+(.+)$/m);
    const realTitle = h1Match ? h1Match[1].trim() : title;
    const description = realTitle;
    const frontmatter = `---\ntitle: "${realTitle}"\ndescription: "${description}"\nsidebar_position: ${position}\n---\n\n`;
    if (content.startsWith('---')) {
      const end = content.indexOf('---', 3);
      if (end !== -1) {
        content = content.slice(end + 3).replace(/^\s+/, '');
      }
    }
    fs.writeFileSync(filePath, frontmatter + content);
    return true;
  } catch (e) {
    return false;
  }
}

function processNode(node, docsRoot, position, summary) {
  if (node.link) {
    const mdPath = mapFltocLinkToMd(node.link);
    if (mdPath) {
      const absPath = path.join(docsRoot, mdPath);
      if (fs.existsSync(absPath)) {
        if (updateFrontmatter(absPath, node.title, position)) {
          summary.updated.push(absPath);
        } else {
          summary.failed.push(absPath);
        }
      } else {
        summary.notfound.push(absPath);
      }
    }
  } else if (node.children.length > 0) {
    // Category: apply to index.md in the folder
    let folder = '';
    if (node.children[0].link) {
      // Use the folder of the first child
      const mdPath = mapFltocLinkToMd(node.children[0].link);
      if (mdPath) folder = path.dirname(mdPath);
    }
    const absPath = path.join(docsRoot, folder, 'index.md');
    if (fs.existsSync(absPath)) {
      if (updateFrontmatter(absPath, node.title, position)) {
        summary.updated.push(absPath);
      } else {
        summary.failed.push(absPath);
      }
    } else {
      summary.notfound.push(absPath);
    }
    // Recurse into children
    let childPos = 10;
    for (const child of node.children) {
      processNode(child, docsRoot, childPos, summary);
      childPos += 10;
    }
    return;
  }
  // Recurse into children if any
  let childPos = 10;
  for (const child of node.children) {
    processNode(child, docsRoot, childPos, summary);
    childPos += 10;
  }
}

function main() {
  const xml = fs.readFileSync(FLTOC_PATH, 'utf8');
  const parser = new XMLParser({ ignoreAttributes: false });
  const fltoc = parser.parse(xml);
  const tocEntries = fltoc.CatapultToc.TocEntry;
  const tree = Array.isArray(tocEntries) ? tocEntries : [tocEntries];
  const summary = { updated: [], notfound: [], failed: [] };
  let pos = 10;
  for (const entry of tree) {
    const node = parseFltocNode(entry);
    processNode(node, DOCS_ROOT, pos, summary);
    pos += 10;
  }
  console.log('=== Summary ===');
  console.log('Updated:', summary.updated.length);
  summary.updated.forEach(f => console.log('  updated:', f));
  console.log('Not found:', summary.notfound.length);
  summary.notfound.forEach(f => console.log('  not found:', f));
  console.log('Failed:', summary.failed.length);
  summary.failed.forEach(f => console.log('  failed:', f));
}

if (require.main === module) {
  main();
} 