#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

// Accept fltoc and docs folder as input parameters
const argv = process.argv.slice(2);
if (argv.includes('--help') || argv.includes('-h') || argv.length < 3) {
  console.log('Usage: node reorganize-from-fltoc.js <fltoc-file> <docs-folder> <product-key> [--config-key=CustomConfig]');
  console.log('Example: node reorganize-from-fltoc.js scripts/accessanalyzer.fltoc docs/accessanalyzer/12.0 EnterpriseAuditor --config-key=CustomConfig');
  process.exit(1);
}
const FLTOC_PATH = argv[0];
const DOCS_ROOT = argv[1];
const PRODUCT_KEY = argv[2];

// Parse optional --config-key parameter
let CONFIG_KEY = 'Config';
for (const arg of argv) {
  if (arg.startsWith('--config-key=')) {
    CONFIG_KEY = arg.split('=')[1];
  }
}

function prettifyLabel(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\.md$/, '')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function getAllMdFiles(dir, rel = '') {
  let files = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const relPath = rel ? path.join(rel, entry) : entry;
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(getAllMdFiles(full, relPath));
    } else if (entry.endsWith('.md')) {
      files.push(relPath.replace(/\\/g, '/').toLowerCase());
    }
  }
  return files;
}

function mapFltocLinkToMd(link) {
  if (link.startsWith('/Content/Config/')) {
    return link.replace('/Content/', '').replace(/\.htm$/, '.md').toLowerCase();
  } else if (link.startsWith('/Content/Access/General/')) {
    return link.replace('/Content/Access/General/', 'general/').replace(/\.htm$/, '.md').toLowerCase();
  } else if (link.startsWith(`/Content/${PRODUCT_KEY}/`)) {
    return link.replace(`/Content/${PRODUCT_KEY}/`, '').replace(/\.htm$/, '.md').toLowerCase();
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

function buildTreeFromFltoc(node, mdFiles, basePath = '') {
  // If node has no link but has children, treat as a category
  if (!node.link && node.children.length > 0) {
    const label = prettifyLabel(node.title || 'Category');
    const folderPath = path.join(basePath, label.toLowerCase().replace(/\s+/g, '-'));
    const items = node.children
      .map(child => buildTreeFromFltoc(child, mdFiles, folderPath))
      .filter(Boolean);
    return {
      type: 'category',
      label,
      items,
      folderPath,
      landing: null,
      fileToMove: null
    };
  }
  if (!node.link) return null;
  const mdPath = mapFltocLinkToMd(node.link);
  if (!mdPath) return null;

  const isCategory = node.children.length > 0;
  const fileExists = mdFiles.has(mdPath);

  let landing = null;
  let folderPath = mdPath.replace(/\/overview\.md$|\/index\.md$/, '');
  if (isCategory) {
    const fileName = path.basename(mdPath);
    const folderLanding = fileExists ? fileName.replace(/\.md$/, '') : null;
    landing = folderLanding;
  }

  const items = node.children
    .map(child => buildTreeFromFltoc(child, mdFiles, folderPath))
    .filter(Boolean);

  if (isCategory) {
    const label = prettifyLabel(path.basename(folderPath));
    const cat = {
      type: 'category',
      label,
      items,
      folderPath,
      landing,
      fileToMove: fileExists ? mdPath : null
    };
    return cat;
  }

  if (fileExists) {
    return { type: 'doc', mdPath };
  }

  return null;
}

function getH1FromMd(mdPath) {
  if (!fs.existsSync(mdPath)) return null;
  const content = fs.readFileSync(mdPath, 'utf8');
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function ensureCategoryJson(folder, label, position, landing = null) {
  const categoryFile = path.join(folder, '_category_.json');
  if (fs.existsSync(categoryFile)) {
    // Do not overwrite existing file
    return;
  }
  let finalLabel = label;
  if (landing) {
    const mdPath = path.join(folder, landing + '.md');
    const h1 = getH1FromMd(mdPath);
    if (h1) finalLabel = h1;
  }
  const categoryData = {
    label: finalLabel,
    position: position,
    collapsed: true,
    collapsible: true
  };
  if (landing) {
    categoryData.link = { type: 'doc', id: landing };
  }
  fs.writeFileSync(categoryFile, JSON.stringify(categoryData, null, 2));
  console.log(`[category] Created _category_.json: ${categoryFile}`);
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
    console.log(`[frontmatter] Updated: ${filePath}`);
  } catch (e) {
    console.error(`[frontmatter] Error updating for ${filePath}:`, e.message);
  }
}

function getNonClashingPath(desiredPath, currentPath) {
  // If the destination exists and is the same file, no clash
  if (fs.existsSync(desiredPath)) {
    try {
      if (fs.realpathSync(desiredPath) === fs.realpathSync(currentPath)) {
        return desiredPath;
      }
    } catch (e) {
      // fallback to suffix logic
    }
  } else {
    return desiredPath;
  }
  const ext = path.extname(desiredPath);
  const base = desiredPath.slice(0, -ext.length);
  let i = 1;
  let newPath;
  do {
    newPath = `${base}_${i}${ext}`;
    if (!fs.existsSync(newPath)) break;
    try {
      if (fs.realpathSync(newPath) === fs.realpathSync(currentPath)) {
        return newPath;
      }
    } catch (e) {}
    i++;
  } while (true);
  return newPath;
}

function getNonClashingFolderPath(desiredFolder, currentPath) {
  if (fs.existsSync(desiredFolder)) {
    try {
      if (fs.realpathSync(desiredFolder) === fs.realpathSync(currentPath)) {
        return desiredFolder;
      }
    } catch (e) {}
  } else {
    return desiredFolder;
  }
  let i = 1;
  let newFolder;
  do {
    newFolder = `${desiredFolder}_${i}`;
    if (!fs.existsSync(newFolder)) break;
    try {
      if (fs.realpathSync(newFolder) === fs.realpathSync(currentPath)) {
        return newFolder;
      }
    } catch (e) {}
    i++;
  } while (true);
  return newFolder;
}

function moveIfNeeded(currentPath, desiredPath) {
  if (currentPath === desiredPath) return false;
  if (!fs.existsSync(currentPath)) return false;
  // If the file is already at the desired location, do nothing
  try {
    if (fs.existsSync(desiredPath) && fs.realpathSync(currentPath) === fs.realpathSync(desiredPath)) {
      return false;
    }
  } catch (e) {}
  let finalDesiredPath = desiredPath;
  if (fs.existsSync(desiredPath)) {
    // Only append suffix if the destination is a different file
    finalDesiredPath = getNonClashingPath(desiredPath, currentPath);
    if (finalDesiredPath !== desiredPath) {
      console.warn(`[clash] Name clash detected. Moving to: ${finalDesiredPath}`);
    }
  }
  const desiredDir = path.dirname(finalDesiredPath);
  if (!fs.existsSync(desiredDir)) {
    fs.mkdirSync(desiredDir, { recursive: true });
  }
  fs.renameSync(currentPath, finalDesiredPath);
  console.log(`[move] ${currentPath} -> ${finalDesiredPath}`);
  return finalDesiredPath;
}

function walkTreeAndReorganize(tree, parentFolders, docsPath, sidebarPositionStart, fileMoves) {
  let position = sidebarPositionStart;
  for (const item of Array.isArray(tree) ? tree : [tree]) {
    if (!item) continue;
    if (item.type === 'doc') {
      const fileName = path.basename(item.mdPath);
      const currentPath = path.join(docsPath, item.mdPath);
      let desiredPath = path.join(docsPath, ...parentFolders, fileName);
      if (fs.existsSync(currentPath)) {
        if (fs.existsSync(desiredPath)) {
          // Only append suffix if the destination is a different file
          desiredPath = getNonClashingPath(desiredPath, currentPath);
          if (desiredPath !== path.join(docsPath, ...parentFolders, fileName)) {
            console.warn(`[clash] Name clash detected. Moving to: ${desiredPath}`);
          }
        }
        const movedPath = moveIfNeeded(currentPath, desiredPath);
        if (movedPath) {
          fileMoves.push({ old: currentPath, new: movedPath });
          updateFrontmatter(movedPath, path.basename(fileName, '.md'), position);
        } else if (fs.existsSync(desiredPath)) {
          updateFrontmatter(desiredPath, path.basename(fileName, '.md'), position);
        } else {
          console.warn(`[missing] File not found: ${currentPath}`);
        }
      } else if (fs.existsSync(desiredPath)) {
        updateFrontmatter(desiredPath, path.basename(fileName, '.md'), position);
      } else {
        console.warn(`[missing] File not found: ${currentPath}`);
      }
      position += 10;
    } else if (item.type === 'category') {
      let folderName = item.label.toLowerCase().replace(/\s+/g, '-');
      let folderPath = path.join(docsPath, ...parentFolders, folderName);
      if (fs.existsSync(folderPath) && !fs.statSync(folderPath).isDirectory()) {
        // If a file exists where a folder should be, rename the folder
        folderPath = getNonClashingFolderPath(folderPath);
        console.warn(`[clash] Folder name clash detected. Using: ${folderPath}`);
      } else if (!fs.existsSync(folderPath)) {
        folderPath = getNonClashingFolderPath(folderPath);
        if (folderPath !== path.join(docsPath, ...parentFolders, folderName)) {
          console.warn(`[clash] Folder name clash detected. Using: ${folderPath}`);
        }
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`[category] Created folder: ${folderPath}`);
      }
      if (item.fileToMove) {
        const fileName = path.basename(item.fileToMove);
        const currentPath = path.join(docsPath, item.fileToMove);
        let desiredPath = path.join(folderPath, fileName);
        if (fs.existsSync(currentPath)) {
          if (fs.existsSync(desiredPath)) {
            desiredPath = getNonClashingPath(desiredPath, currentPath);
            if (desiredPath !== path.join(folderPath, fileName)) {
              console.warn(`[clash] Name clash detected. Moving to: ${desiredPath}`);
            }
          }
          const movedPath = moveIfNeeded(currentPath, desiredPath);
          if (movedPath) {
            fileMoves.push({ old: currentPath, new: movedPath });
            updateFrontmatter(movedPath, path.basename(fileName, '.md'), position);
          } else if (fs.existsSync(desiredPath)) {
            updateFrontmatter(desiredPath, path.basename(fileName, '.md'), position);
          } else {
            console.warn(`[missing] File not found: ${currentPath}`);
          }
        } else if (fs.existsSync(desiredPath)) {
          updateFrontmatter(desiredPath, path.basename(fileName, '.md'), position);
        } else {
          console.warn(`[missing] File not found: ${currentPath}`);
        }
      }
      ensureCategoryJson(folderPath, item.label, position, item.landing);
      walkTreeAndReorganize(item.items, [...parentFolders, path.basename(folderPath)], docsPath, 10, fileMoves);
      position += 10;
    }
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getActualFilename(dir, filename) {
  try {
    const files = fs.readdirSync(dir);
    const found = files.find(f => f.toLowerCase() === filename.toLowerCase());
    return found || filename;
  } catch {
    return filename;
  }
}

function updateLinksInFile(filePath, fileMoves, docsRoot) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  const fileDir = path.dirname(filePath);

  // Regex to match all markdown links (not images)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  content = content.replace(linkRegex, (match, text, link) => {
    if (match.startsWith('!')) return match; // skip images

    // Remove any hash for path comparison
    const [linkPath, hash] = link.split('#');
    // Resolve the link as if it were relative to the current file
    let resolvedLinkAbs;
    if (linkPath.startsWith('/')) {
      // Absolute from docs root
      resolvedLinkAbs = path.resolve(docsRoot, '.' + linkPath);
    } else {
      // Relative to current file
      resolvedLinkAbs = path.resolve(fileDir, linkPath);
    }

    for (const { old, new: newPath } of fileMoves) {
      const oldAbs = path.resolve(docsRoot, old);
      if (resolvedLinkAbs === oldAbs) {
        // Compute new link in the same style (absolute or relative)
        let newLink;
        if (linkPath.startsWith('/')) {
          newLink = path.join('/', path.relative(docsRoot, path.resolve(docsRoot, newPath))).replace(/\\/g, '/');
        } else {
          newLink = path.relative(fileDir, path.resolve(docsRoot, newPath)).replace(/\\/g, '/');
          if (!newLink.startsWith('.') && !newLink.startsWith('/')) newLink = './' + newLink;
        }
        updated = true;
        return `[${text}](${newLink}${hash ? '#' + hash : ''})`;
      }
    }
    return match;
  });

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[links] Updated: ${filePath}`);
  }
}

function updateAllLinks(docsPath, fileMoves) {
  function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (entry.endsWith('.md')) updateLinksInFile(full, fileMoves, docsPath);
    }
  }
  walk(docsPath);
}

function main() {
  // 1. Parse .fltoc
  const xml = fs.readFileSync(FLTOC_PATH, 'utf8');
  const parser = new XMLParser({ ignoreAttributes: false });
  const fltoc = parser.parse(xml);

  // 2. Scan all .md files
  const mdFiles = new Set(getAllMdFiles(DOCS_ROOT));

  // 3. Build tree from fltoc
  const tocEntries = fltoc.CatapultToc.TocEntry;
  const tree = [];
  for (const entry of (Array.isArray(tocEntries) ? tocEntries : [tocEntries])) {
    const node = parseFltocNode(entry);
    const subtree = buildTreeFromFltoc(node, mdFiles);
    if (subtree) tree.push(subtree);
  }

  // 4. Walk tree and reorganize
  const fileMoves = [];
  walkTreeAndReorganize(tree, [], DOCS_ROOT, 10, fileMoves);

  // 5. Update all links
  updateAllLinks(DOCS_ROOT, fileMoves);

  console.log('=== Reorganization complete ===');
}

if (require.main === module) {
  main();
} 