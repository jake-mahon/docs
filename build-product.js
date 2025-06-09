#!/usr/bin/env node
// Script to build individual products for testing

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const productsConfigPath = path.join(__dirname, 'docusaurus.config.products.js');

// Get product name from command line
const product = process.argv[2];

if (!product) {
  console.log('Usage: node build-product.js <product-name>');
  console.log('Available products:');
  console.log('  - 1secure');
  console.log('  - accessanalyzer');
  console.log('  - accessinformationcenter');
  console.log('  - activitymonitor');
  console.log('  - auditor');
  console.log('  - changetracker');
  console.log('  - dataclassification');
  console.log('  - groupid');
  console.log('  - passwordpolicyenforcer');
  console.log('  - passwordreset');
  console.log('  - passwordsecure');
  console.log('  - policypak');
  console.log('  - privilegesecure');
  console.log('  - recoveryforactivedirectory');
  console.log('  - strongpointfornetsuite');
  console.log('  - strongpointforsalesforce');
  console.log('  - strongpointnetsuiteflashlight');
  console.log('  - strongpointsalesforceflashlight');
  console.log('  - threatmanager');
  console.log('  - threatprevention');
  console.log('  - usercube');
  console.log('  - usercube_saas');
  process.exit(1);
}

// Read the products config file
let configContent = fs.readFileSync(productsConfigPath, 'utf8');

// Update the PRODUCTS object to enable only the selected product
const productsRegex = /const PRODUCTS = {[\s\S]*?};/;
const currentProducts = configContent.match(productsRegex)[0];

// Parse the current state
const productStates = {};
const lines = currentProducts.split('\n');
lines.forEach(line => {
  const match = line.match(/^\s*'([^']+)':\s*(true|false),?$/);
  if (match) {
    productStates[match[1]] = false; // Set all to false
  }
});

// Enable only the selected product
if (productStates.hasOwnProperty(product)) {
  productStates[product] = true;
} else {
  console.error(`Error: Product '${product}' not found!`);
  process.exit(1);
}

// Build the new PRODUCTS object
let newProductsObj = 'const PRODUCTS = {\n';
Object.entries(productStates).forEach(([name, enabled]) => {
  newProductsObj += `  '${name}': ${enabled},\n`;
});
newProductsObj += '};';

// Replace in the config
configContent = configContent.replace(productsRegex, newProductsObj);

// Write back the updated config
fs.writeFileSync(productsConfigPath, configContent);

console.log(`\nBuilding documentation for: ${product}`);
console.log('This will show only errors specific to this product.\n');

try {
  // Run the build with the modular config
  execSync('npm run build -- --config ./docusaurus.config.modular.js', {
    stdio: 'inherit',
    cwd: __dirname
  });
  console.log(`\n✅ Build completed successfully for ${product}!`);
} catch (error) {
  console.log(`\n❌ Build failed for ${product}. Check the errors above.`);
  process.exit(1);
}