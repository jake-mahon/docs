#!/usr/bin/env node
// Script to build individual versioned products for testing

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const versionedProductsConfigPath = path.join(__dirname, 'docusaurus.config.versioned-products.js');

// Get product name from command line
const product = process.argv[2];

if (!product) {
  console.log('Usage: node build-versioned-product.js <versioned-product-name>');
  console.log('Available versioned products:');
  console.log('  - accessinformationcenter_11.6');
  console.log('  - activitymonitor_7.1');
  console.log('  - auditor_10.6');
  console.log('  - changetracker_8.0');
  console.log('  - dataclassification_5.6.2');
  console.log('  - endpointprotector_5.9.4');
  console.log('  - enterpriseauditor_11.6');
  console.log('  - groupid_11.0');
  console.log('  - passwordpolicyenforcer_10.2');
  console.log('  - passwordreset_3.23');
  console.log('  - passwordsecure_9.1');
  console.log('  - privilegesecure_4.1');
  console.log('  - privilegesecurefordiscovery_2.21');
  console.log('  - threatprevention_7.4');
  console.log('  - usercube_6.1');
  process.exit(1);
}

// Read the versioned products config file
let configContent = fs.readFileSync(versionedProductsConfigPath, 'utf8');

// Update the VERSIONED_PRODUCTS object to enable only the selected product
const versionedProductsRegex = /const VERSIONED_PRODUCTS = {[\s\S]*?};/;
const currentVersionedProducts = configContent.match(versionedProductsRegex)[0];

// Parse the current state
const versionedProductStates = {};
const lines = currentVersionedProducts.split('\n');
lines.forEach(line => {
  const match = line.match(/^\s*'([^']+)':\s*(true|false),?$/);
  if (match) {
    versionedProductStates[match[1]] = false; // Set all to false
  }
});

// Enable only the selected product
if (versionedProductStates.hasOwnProperty(product)) {
  versionedProductStates[product] = true;
} else {
  console.error(`Error: Versioned product '${product}' not found!`);
  process.exit(1);
}

// Build the new VERSIONED_PRODUCTS object
let newVersionedProductsObj = 'const VERSIONED_PRODUCTS = {\n';
Object.entries(versionedProductStates).forEach(([name, enabled]) => {
  newVersionedProductsObj += `  '${name}': ${enabled},\n`;
});
newVersionedProductsObj += '};';

// Replace in the config
configContent = configContent.replace(versionedProductsRegex, newVersionedProductsObj);

// Write back the updated config
fs.writeFileSync(versionedProductsConfigPath, configContent);

console.log(`\nBuilding versioned documentation for: ${product}`);
console.log('This will show only errors specific to this versioned product.\n');

try {
  // Run the build with the versioned modular config
  execSync('npm run build -- --config ./docusaurus.config.versioned-modular.js', {
    stdio: 'inherit',
    cwd: __dirname
  });
  console.log(`\n✅ Build completed successfully for versioned product ${product}!`);
} catch (error) {
  console.log(`\n❌ Build failed for versioned product ${product}. Check the errors above.`);
  process.exit(1);
} 