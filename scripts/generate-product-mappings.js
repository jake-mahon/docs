#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate product mappings from _category_.json files
 * This script scans all product directories and extracts product_name and product_version
 * from their _category_.json files to generate JavaScript mappings.
 */

function generateProductMappings() {
  const docsPath = path.join(__dirname, '../docs');
  const mappings = {
    versioned: {},
    nonVersioned: {},
  };

  // Get all directories in docs/
  const productDirs = fs
    .readdirSync(docsPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  productDirs.forEach((productDir) => {
    const productPath = path.join(docsPath, productDir);

    // Check for non-versioned product (has _category_.json directly)
    const categoryFile = path.join(productPath, '_category_.json');
    if (fs.existsSync(categoryFile)) {
      try {
        const categoryData = JSON.parse(fs.readFileSync(categoryFile, 'utf8'));
        if (categoryData.customProps?.product_name && categoryData.customProps?.product_version) {
          mappings.nonVersioned[productDir] = {
            name: categoryData.customProps.product_name,
            version: categoryData.customProps.product_version,
          };
        }
      } catch (error) {
        console.warn(`Error reading ${categoryFile}:`, error.message);
      }
    }

    // Check for versioned products (subdirectories with _category_.json)
    const versionDirs = fs
      .readdirSync(productPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    versionDirs.forEach((versionDir) => {
      const versionCategoryFile = path.join(productPath, versionDir, '_category_.json');
      if (fs.existsSync(versionCategoryFile)) {
        try {
          const categoryData = JSON.parse(fs.readFileSync(versionCategoryFile, 'utf8'));
          if (categoryData.customProps?.product_name) {
            if (!mappings.versioned[productDir]) {
              mappings.versioned[productDir] = categoryData.customProps.product_name;
            }
          }
        } catch (error) {
          console.warn(`Error reading ${versionCategoryFile}:`, error.message);
        }
      }
    });
  });

  return mappings;
}

function generateMappingsFile() {
  const mappings = generateProductMappings();

  const content = `// Auto-generated product mappings from _category_.json files
// Run 'node scripts/generate-product-mappings.js' to regenerate

export const VERSIONED_PRODUCTS = ${JSON.stringify(mappings.versioned, null, 2)};

export const NON_VERSIONED_PRODUCTS = ${JSON.stringify(mappings.nonVersioned, null, 2)};
`;

  const outputPath = path.join(__dirname, '../src/theme/productMappings.js');
  fs.writeFileSync(outputPath, content);

  console.log('✅ Generated product mappings:');
  console.log(`   - ${Object.keys(mappings.versioned).length} versioned products`);
  console.log(`   - ${Object.keys(mappings.nonVersioned).length} non-versioned products`);
  console.log(`   - Output: ${outputPath}`);
}

if (require.main === module) {
  generateMappingsFile();
}

module.exports = { generateProductMappings, generateMappingsFile };
