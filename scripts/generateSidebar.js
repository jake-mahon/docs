#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Helper to read _category_.json if present
function readCategoryJson(dir) {
  const catPath = path.join(dir, '_category_.json');
  if (fs.existsSync(catPath)) {
    try {
      return JSON.parse(fs.readFileSync(catPath, 'utf8'));
    } catch (e) {
      console.warn(`Warning: Could not parse ${catPath}`);
    }
  }
  return null;
}

// Helper to get sidebar_position and sidebar_label from front matter using regex
function getSidebarInfo(mdPath) {
  try {
    const content = fs.readFileSync(mdPath, 'utf8');
    // Match YAML front matter
    const match = content.match(/^---\s*([\s\S]*?)---/);
    let sidebar_position = null;
    let sidebar_label = null;
    if (match) {
      const frontMatter = match[1];
      // Match sidebar_position: <number>
      const posMatch = frontMatter.match(/sidebar_position\s*:\s*([0-9.]+)/);
      if (posMatch) {
        sidebar_position = parseFloat(posMatch[1]);
      }
      // Match sidebar_label: <string>
      const labelMatch = frontMatter.match(/sidebar_label\s*:\s*['"]?([^\n'"]+)['"]?/);
      if (labelMatch) {
        sidebar_label = labelMatch[1].trim();
      }
    }
    return { sidebar_position, sidebar_label };
  } catch (e) {
    return { sidebar_position: null, sidebar_label: null };
  }
}

// Recursively scan directory for .md files and subfolders
function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  let folders = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      folders.push(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return { files, folders };
}

// Helper to find a doc by label or id
function findDocByLabelOrId(fileItems, labelOrId) {
  // Try to match by id first
  let doc = fileItems.find(fi => fi.id === labelOrId);
  if (doc) return doc;
  // Then try to match by label (sidebar_label)
  doc = fileItems.find(fi => fi.label === labelOrId);
  if (doc) return doc;
  // Then try to match by filename (last part of id)
  doc = fileItems.find(fi => fi.id.split('/').pop() === labelOrId);
  return doc;
}

// Helper to fix link.id to full doc id if possible
function fixLinkId(link, fileItems) {
  if (link && link.type === 'doc' && link.id) {
    const doc = findDocByLabelOrId(fileItems, link.id);
    if (doc) {
      return { ...link, id: doc.id };
    }
  }
  return link;
}

// Helper to resolve a doc id from a relative path (from the current category dir) to the input root
function resolveDocId(currentDir, baseDir, rel) {
  // If rel is already a path with slashes, use as-is relative to baseDir
  let absPath = path.resolve(currentDir, rel + '.md');
  if (!fs.existsSync(absPath)) {
    // Try as index.md (for folder docs)
    absPath = path.resolve(currentDir, rel, 'index.md');
    if (!fs.existsSync(absPath)) {
      return null;
    }
  }
  let docId = path.relative(baseDir, absPath).replace(/\\/g, '/');
  if (docId.endsWith('.md')) {
    docId = docId.slice(0, -3);
  }
  return docId;
}

// Build sidebar recursively
function buildSidebar(dir, baseDir) {
  const category = readCategoryJson(dir);
  const { files, folders } = scanDir(dir);

  // Get file info with sidebar_position and sidebar_label
  let fileItems = files.map(f => {
    const { sidebar_position, sidebar_label } = getSidebarInfo(f);
    let relPath = path.relative(baseDir, f).replace(/\\/g, '/');
    if (relPath.endsWith('.md')) {
      relPath = relPath.slice(0, -3);
    }
    const doc = {
      type: 'doc',
      id: relPath,
    };
    if (sidebar_label) {
      doc.label = sidebar_label;
    }
    return {
      _sidebar_position: sidebar_position, // for sorting only
      id: relPath,
      doc,
    };
  });

  // Recursively build subcategories and capture their position
  let subcategories = folders.map(f => {
    const subcat = buildSidebar(f, baseDir);
    if (subcat && typeof subcat === 'object' && subcat.type === 'category') {
      // Attach position for sorting
      const catJson = readCategoryJson(f);
      return {
        _position: catJson && typeof catJson.position === 'number' ? catJson.position : null,
        label: subcat.label,
        cat: subcat,
      };
    }
    return subcat;
  }).filter(Boolean);

  if (category) {
    let items = [];
    let linkDocId = null;
    // Fix link.id if present
    let fixedLink = category.link;
    if (fixedLink && fixedLink.type === 'doc' && fixedLink.id) {
      const fixedId = resolveDocId(dir, baseDir, fixedLink.id);
      if (fixedId) {
        fixedLink = { ...fixedLink, id: fixedId };
        linkDocId = fixedId;
      }
    }
    if (Array.isArray(category.items)) {
      for (const item of category.items) {
        const docId = resolveDocId(dir, baseDir, item);
        const file = fileItems.find(fi => fi.id === docId);
        if (file) {
          if (docId !== linkDocId) {
            items.push(file.doc);
          }
          continue;
        }
        const subcat = subcategories.find(sc => sc.label === item);
        if (subcat) {
          items.push(subcat.cat);
          continue;
        }
        console.warn(`Warning: Skipping missing doc or subcategory '${item}' in category '${category.label || path.basename(dir)}' at '${dir}'`);
      }
      for (const file of fileItems) {
        if (!items.includes(file.doc) && file.id !== linkDocId) items.push(file.doc);
      }
      for (const subcat of subcategories) {
        if (!items.includes(subcat.cat)) items.push(subcat.cat);
      }
    } else {
      // No explicit items array: combine and sort by position/sidebar_position, then alphabetically
      let combined = [
        ...fileItems.map(fi => ({
          type: 'doc',
          id: fi.id,
          doc: fi.doc,
          _pos: fi._sidebar_position,
          _isCat: false,
        })),
        ...subcategories.map(sc => ({
          type: 'category',
          label: sc.label,
          cat: sc.cat,
          _pos: sc._position,
          _isCat: true,
        }))
      ];
      combined = combined.filter(item => !(item.type === 'doc' && item.id === linkDocId));
      combined.sort((a, b) => {
        if (a._pos !== null && b._pos !== null) {
          return a._pos - b._pos;
        } else if (a._pos !== null) {
          return -1;
        } else if (b._pos !== null) {
          return 1;
        } else {
          // Alphabetical by label or id
          const aLabel = a._isCat ? a.label : a.id;
          const bLabel = b._isCat ? b.label : b.id;
          return aLabel.localeCompare(bLabel);
        }
      });
      items = combined.map(item => item._isCat ? item.cat : item.doc);
    }
    const {
      label,
      collapsed,
      collapsible,
      items: _omitItems,
      link,
      position: _omitPosition, // filter out
      ...rest
    } = category;
    // Skip empty categories with no link, but print a warning
    if ((!items || items.length === 0) && !fixedLink) {
      console.warn(`Warning: Skipping empty category '${label || path.basename(dir)}' at '${dir}' (no items, no link)`);
      return null;
    }
    return {
      type: 'category',
      label: label || path.basename(dir),
      items,
      ...(collapsed !== undefined ? { collapsed } : {}),
      ...(collapsible !== undefined ? { collapsible } : {}),
      ...(fixedLink !== undefined ? { link: fixedLink } : {}),
      ...rest,
    };
  } else {
    // No category, just return files and subcategories, sorted as above
    let combined = [
      ...fileItems.map(fi => ({
        type: 'doc',
        id: fi.id,
        doc: fi.doc,
        _pos: fi._sidebar_position,
        _isCat: false,
      })),
      ...subcategories.map(sc => ({
        type: 'category',
        label: sc.label,
        cat: sc.cat,
        _pos: sc._position,
        _isCat: true,
      }))
    ];
    combined.sort((a, b) => {
      if (a._pos !== null && b._pos !== null) {
        return a._pos - b._pos;
      } else if (a._pos !== null) {
        return -1;
      } else if (b._pos !== null) {
        return 1;
      } else {
        const aLabel = a._isCat ? a.label : a.id;
        const bLabel = b._isCat ? b.label : b.id;
        return aLabel.localeCompare(bLabel);
      }
    });
    return combined.map(item => item._isCat ? item.cat : item.doc);
  }
}

// Main
function main() {
  if (process.argv.length < 3) {
    console.error('Usage: node generateSidebar.js <product/version>');
    process.exit(1);
  }
  const input = process.argv[2];
  const sourceDir = path.resolve('docs', input);
  const sidebarFile = path.resolve('sidebars', input + '.js');

  if (!fs.existsSync(sourceDir)) {
    console.error(`Source folder does not exist: ${sourceDir}`);
    process.exit(1);
  }

  // Ensure sidebar output directory exists
  const sidebarDir = path.dirname(sidebarFile);
  if (!fs.existsSync(sidebarDir)) {
    fs.mkdirSync(sidebarDir, { recursive: true });
  }

  const sidebar = buildSidebar(sourceDir, sourceDir);
  const sidebarName = input.replace(/[\\/]/g, '_');
  const sidebarObj = { [sidebarName]: Array.isArray(sidebar) ? sidebar : [sidebar] };
  const sidebarExport = `module.exports = ${JSON.stringify(sidebarObj, null, 2)};\n`;
  fs.writeFileSync(sidebarFile, sidebarExport, 'utf8');
  console.log(`Sidebar written to ${sidebarFile}`);
}

main(); 