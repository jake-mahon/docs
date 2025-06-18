#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// --- Configuration ---
// The absolute root path is the parent directory of the directory containing this script.
// e.g., if script is in /scripts/, root is /
const SCRIPT_DIR = __dirname;
const ABSOLUTE_ROOT = path.resolve(SCRIPT_DIR, '..');

// --- Main Execution ---

/**
 * The main function to run the script.
 */
function main() {
    const args = process.argv.slice(2);
    const [mode, targetDir] = parseArguments(args);

    if (!mode || !targetDir) {
        printUsage();
        process.exit(1);
    }

    console.log(`Script running in '${mode}' mode.`);
    console.log(`Target directory: '${targetDir}'`);
    console.log(`Absolute path root: '${ABSOLUTE_ROOT}'`);
    console.log('---');

    const markdownFiles = findMarkdownFiles(targetDir);

    if (markdownFiles.length === 0) {
        console.log("No markdown files found in the specified directory.");
        return;
    }

    markdownFiles.forEach(file => {
        processFile(file, mode);
    });

    console.log('---');
    console.log('Script finished successfully.');
}

/**
 * Parses command line arguments to determine the mode and target directory.
 * @param {string[]} args - The command line arguments.
 * @returns {[string|null, string|null]} A tuple containing the mode and target directory.
 */
function parseArguments(args) {
    let mode = null;
    let targetDir = null;

    if (args.includes('--rel2abs')) {
        mode = 'rel2abs';
    } else if (args.includes('--abs2rel')) {
        mode = 'abs2rel';
    }

    // The target directory is the last argument that is not a flag.
    const potentialDir = args[args.length - 1];
    if (potentialDir && !potentialDir.startsWith('--')) {
        targetDir = path.resolve(potentialDir);
    }

    return [mode, targetDir];
}

/**
 * Recursively finds all markdown files (.md, .markdown) in a directory.
 * @param {string} dir - The directory to search.
 * @returns {string[]} An array of file paths.
 */
function findMarkdownFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Recursively search in subdirectories
            files = files.concat(findMarkdownFiles(fullPath));
        } else if (stat.isFile() && (fullPath.endsWith('.md') || fullPath.endsWith('.markdown'))) {
            files.push(fullPath);
        }
    }
    return files;
}

/**
 * Processes a single markdown file, converting paths based on the selected mode.
 * @param {string} filePath - The path to the markdown file.
 * @param {string} mode - The conversion mode ('rel2abs' or 'abs2rel').
 */
function processFile(filePath, mode) {
    console.log(`Processing file: ${filePath}`);
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let updatedContent;

        if (mode === 'rel2abs') {
            updatedContent = convertToAbsolute(content, filePath);
        } else {
            updatedContent = convertToRelative(content, filePath);
        }

        if (content !== updatedContent) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`  -> Updated.`);
        } else {
            console.log(`  -> No changes needed.`);
        }
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
    }
}

/**
 * Converts relative markdown paths to absolute paths.
 * @param {string} content - The markdown content.
 * @param {string} fileDir - The directory containing the markdown file.
 * @returns {string} The updated markdown content.
 */
function convertToAbsolute(content, filePath) {
    const fileDir = path.dirname(filePath);
    // Regex to find markdown links and images: [text](path) or ![alt](path)
    // It specifically avoids paths that are already absolute (start with '/') or are URLs.
    const markdownLinkRegex = /(!?\[[^\]]*\]\()([.][^)]+)(\))/g;

    return content.replace(markdownLinkRegex, (match, prefix, relativePath, suffix) => {
        // Resolve the relative path from the file's directory
        const resolvedPath = path.resolve(fileDir, relativePath);
        // Make it absolute relative to the defined project root
        const absolutePath = '/' + path.relative(ABSOLUTE_ROOT, resolvedPath).replace(/\\/g, '/');

        console.log(`  - Converting '${relativePath}' to '${absolutePath}'`);
        return `${prefix}${absolutePath}${suffix}`;
    });
}

/**
 * Converts absolute markdown paths to relative paths.
 * @param {string} content - The markdown content.
 * @param {string} filePath - The path of the markdown file.
 * @returns {string} The updated markdown content.
 */
function convertToRelative(content, filePath) {
    const fileDir = path.dirname(filePath);
    // Regex to find markdown links/images with absolute paths starting with '/'
    const markdownLinkRegex = /(!?\[[^\]]*\]\()(\/[^)]+)(\))/g;

    return content.replace(markdownLinkRegex, (match, prefix, absolutePath, suffix) => {
        // Construct the full path on the filesystem from the project-absolute path
        const fullPath = path.join(ABSOLUTE_ROOT, absolutePath.substring(1));
        // Calculate the relative path from the current file's directory
        let relativePath = path.relative(fileDir, fullPath).replace(/\\/g, '/');

        // Prepend './' if the path doesn't start with '../'
        if (!relativePath.startsWith('..')) {
            relativePath = './' + relativePath;
        }

        console.log(`  - Converting '${absolutePath}' to '${relativePath}'`);
        return `${prefix}${relativePath}${suffix}`;
    });
}

/**
 * Prints the usage instructions for the script.
 */
function printUsage() {
    console.log(`
Usage: node myscript.js <flag> <directory>

Flags:
  --rel2abs    Convert relative paths to absolute paths.
  --abs2rel    Convert absolute paths to relative paths.

Arguments:
  <directory>  The path to the directory containing markdown files to process.

Example:
  node scripts/myscript.js --rel2abs ./my-docs
    `);
}

// --- Run Script ---
main();
