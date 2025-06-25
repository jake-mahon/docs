#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Import the products configuration
const { PRODUCTS, generatePluginId, generateDocPath, generateRouteBasePath } = require('../src/config/products.js');

// Parse command line arguments
const args = process.argv.slice(2);

// If no arguments provided, run the full start command
if (args.length === 0) {
  console.log('Starting full documentation site...');
  try {
    execSync('npx docusaurus start --config docusaurus.dev.config.js', { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to start:', error.message);
    process.exit(1);
  }
  return;
}

// Single product development mode
const input = args[0];
const [productName, version] = input.includes('/') ? input.split('/') : [input, null];

// Function to get plugin ID based on product and version
function getPluginId(product, version) {
  const productConfig = PRODUCTS.find((p) => p.id === product);
  if (!productConfig) {
    return null;
  }

  // If no version provided, use the default version
  let targetVersion = version;
  if (!targetVersion) {
    // For products with only 'current' version, use 'current'
    if (productConfig.versions.length === 1 && productConfig.versions[0].version === 'current') {
      targetVersion = 'current';
    } else if (productConfig.defaultVersion) {
      targetVersion = productConfig.defaultVersion;
    } else {
      // Find the latest version
      const latestVersion = productConfig.versions.find((v) => v.isLatest);
      targetVersion = latestVersion ? latestVersion.version : productConfig.versions[0].version;
    }
  }

  return generatePluginId(product, targetVersion);
}

// Function to validate product and version
function validatePlugin(product, version) {
  const productConfig = PRODUCTS.find((p) => p.id === product);
  if (!productConfig) {
    console.error(`Product "${product}" not found in products configuration.`);
    console.error('Available products:', PRODUCTS.map((p) => p.id).join(', '));
    process.exit(1);
  }

  // If version is provided, check if it exists
  if (version) {
    const versionExists = productConfig.versions.some((v) => v.version === version);
    if (!versionExists) {
      console.error(`Version "${version}" not found for product "${product}".`);
      console.error(`Available versions: ${productConfig.versions.map((v) => v.version).join(', ')}`);
      process.exit(1);
    }
  }

  return productConfig;
}

// Create temporary config file for single product development
function createTempConfig(pluginId, product, version, productConfig) {
  const tempConfigPath = path.join(__dirname, '..', 'docusaurus.dev.config.js');

  // Get the version config
  let targetVersion = version;
  if (!targetVersion) {
    // For products with only 'current' version, use 'current'
    if (productConfig.versions.length === 1 && productConfig.versions[0].version === 'current') {
      targetVersion = 'current';
    } else if (productConfig.defaultVersion) {
      targetVersion = productConfig.defaultVersion;
    } else {
      // Find the latest version
      const latestVersion = productConfig.versions.find((v) => v.isLatest);
      targetVersion = latestVersion ? latestVersion.version : productConfig.versions[0].version;
    }
  }

  const versionConfig = productConfig.versions.find((v) => v.version === targetVersion);
  const docPath = generateDocPath(productConfig.path, targetVersion);
  const routeBasePath = '/'; // Serve at root for single product builds
  const sidebarPath = versionConfig.sidebarFile;

  // Create minimal config with just the single plugin
  const configContent = `// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Netwrix Product Documentation',
  tagline: 'Documentation for Netwrix Products',
  favicon: 'img/branding/favicon.ico',
  url: process.env.RENDER_EXTERNAL_URL || 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      mdxCrossCompilerCache: true,
      ssgWorkerThreads: true,
    },
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        pages: false, // Disable pages (including homepage)
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '${pluginId}',
        path: '${docPath}',
        routeBasePath: '${routeBasePath}',
        sidebarPath: require.resolve('${sidebarPath}'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '${versionConfig.label}',
          },
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/Logo_RGB.svg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      logo: {
        alt: 'Netwrix Logo',
        src: 'img/branding/logo-red.svg',
        srcDark: 'img/branding/logo-white.svg',
        href: '/',
      },
      items: [
        {
          href: 'https://community.netwrix.com',
          label: 'Community',
          position: 'right',
        },
        {
          href: 'https://www.netwrix.com/support.html',
          label: 'Support',
          position: 'right',
        },
        {
          href: 'http://github.com/netwrix',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  ],
};

export default config;`;

  fs.writeFileSync(tempConfigPath, configContent);
  return tempConfigPath;
}

// Clean up temporary files
function cleanup() {
  const tempConfigPath = path.join(__dirname, '..', 'docusaurus.dev.config.js');
  if (fs.existsSync(tempConfigPath)) {
    fs.unlinkSync(tempConfigPath);
  }
}

// Handle cleanup on exit
process.on('SIGINT', () => {
  console.log('\nCleaning up...');
  cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  cleanup();
  process.exit(0);
});

// Main execution
console.log(`Starting development server for: ${productName}${version ? `/${version}` : ''}`);

const productConfig = validatePlugin(productName, version);
const pluginId = getPluginId(productName, version);
console.log(`Using plugin ID: ${pluginId}`);

const tempConfigPath = createTempConfig(pluginId, productName, version, productConfig);

try {
  // Run docusaurus start with the temporary config
  console.log('Starting development server...');
  execSync(`npx docusaurus start --config ${path.basename(tempConfigPath)}`, {
    stdio: 'inherit',
    cwd: path.dirname(tempConfigPath),
  });
} catch (error) {
  console.error('Development server failed:', error.message);
  process.exit(1);
} finally {
  cleanup();
}
