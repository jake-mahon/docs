#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define the link mappings based on the error patterns
const linkMappings = [
  // Files moved from introduction/ to taxonomies/
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/enablewriteclassifications.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/enablewriteclassifications.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/builtintaxonomies.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/builtintaxonomies.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/clues.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/clues.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/cluestypes.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/cluestypes.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/search.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/search.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/browse.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/browse.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/manageclues/manageclues.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/manageclues/manageclues.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/manageclues/bulkedit.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/manageclues/bulkedit.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/manageclues/bulkimport.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/manageclues/bulkimport.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/clues/addclue.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/addclue.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/classifications.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/classifications.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/calculations.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/calculations.md'
  },
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/manage/manage_1.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/managetaxonomies/manage.md'
  },
  // Files moved to different locations (from whats-new.md errors)
  {
    from: '/docs/dataclassification/5.7/content-sources/sql-server/index.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/sqlserver.md'
  },
  {
    from: '/docs/dataclassification/5.7/workflows/create-workflow/specify-conditions.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/workflows/conditions/specifyconditions.md'
  },
  {
    from: '/docs/dataclassification/5.7/taxonomies/clues/clue-types.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/cluestypes.md'
  },
  {
    from: '/docs/dataclassification/5.7/workflows/actions/migrate-document.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument.md'
  },
  {
    from: '/docs/dataclassification/5.7/taxonomies/advanced/write-classifications.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/enablewriteclassifications.md'
  },
  // Fix for introduction_1.md
  {
    from: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/introduction_1.md',
    to: '/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/introduction.md'
  }
];

// Files that need to be processed (from the error report)
const filesToProcess = [
  'docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/sharepointonline.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/add.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/browse.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/clues.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/cluestypes.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/manageclues/manageclues.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/search.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/create.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/import.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/introduction.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/managetaxonomies/manage.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/settings/globalsettings.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/settings/termsettings.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/workingset.md',
  'docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/classification.md',
  'docs/dataclassification/5.7/dataanalysisoverview/reportingintroduction/overviewdashboard.md',
  'docs/dataclassification/5.7/dataanalysisoverview/reportingintroduction/review.md',
  'docs/dataclassification/5.7/introduction/initialconfiguration/processingsettings.md',
  'docs/dataclassification/5.7/introduction/initialconfiguration/taxonomies.md',
  'docs/dataclassification/5.7/overview/whats-new.md',
  'docs/dataclassification/5.7/systemconfigurationoverview/users/usermanagement.md'
];

function fixBrokenLinks() {
  let totalFixed = 0;
  let filesProcessed = 0;

  console.log('🔧 Starting to fix broken links...\n');

  for (const filePath of filesToProcess) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fileChanged = false;
    let linksFixed = 0;

    for (const mapping of linkMappings) {
      const regex = new RegExp(`\\[([^\\]]+)\\]\\(${mapping.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
      const matches = content.match(regex);
      
      if (matches) {
        content = content.replace(regex, `[$1](${mapping.to})`);
        fileChanged = true;
        linksFixed += matches.length;
        console.log(`  ✅ Fixed ${matches.length} link(s) in ${filePath}: ${mapping.from} → ${mapping.to}`);
      }
    }

    if (fileChanged) {
      fs.writeFileSync(filePath, content, 'utf8');
      totalFixed += linksFixed;
      filesProcessed++;
      console.log(`  📝 Updated ${filePath} (${linksFixed} links fixed)\n`);
    }
  }

  console.log(`\n📊 SUMMARY:`);
  console.log(`📁 Files processed: ${filesProcessed}`);
  console.log(`🔗 Total links fixed: ${totalFixed}`);
  console.log(`✅ Broken link fix completed!`);
}

// Handle command line arguments
const args = process.argv.slice(2);
const command = args[0];

if (command === '--help' || command === '-h') {
  console.log(`
Usage: node scripts/fix-broken-links.js [command]

Commands:
  --help, -h     Show this help message
  --dry-run      Show what would be changed without making changes
  (no args)      Fix broken links in dataclassification/5.7 files

This script fixes broken links based on the patterns identified in the error report.
  `);
  process.exit(0);
}

if (command === '--dry-run') {
  console.log('🔍 DRY RUN MODE - No changes will be made\n');
  
  for (const filePath of filesToProcess) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    let linksFound = 0;

    for (const mapping of linkMappings) {
      const regex = new RegExp(`\\[([^\\]]+)\\]\\(${mapping.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
      const matches = content.match(regex);
      
      if (matches) {
        console.log(`  🔍 Would fix ${matches.length} link(s) in ${filePath}: ${mapping.from} → ${mapping.to}`);
        linksFound += matches.length;
      }
    }

    if (linksFound > 0) {
      console.log(`  📄 ${filePath} (${linksFound} links would be fixed)\n`);
    }
  }
  
  console.log('🔍 Dry run completed. Use without --dry-run to apply changes.');
  process.exit(0);
}

// Run the fix
fixBrokenLinks(); 