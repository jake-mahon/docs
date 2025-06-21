#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: npm run start <productname> or npm run start <productname>/<version>');
  process.exit(1);
}

const input = args[0];
const [productName, version] = input.includes('/') ? input.split('/') : [input, null];

// Products that don't have versions (use product name directly)
const versionlessProducts = [
  '1secure',
  'endpointpolicymanager',
  'pingcastle',
  'platgovnetsuite',
  'platgovsalesforce',
  'platgovnetsuiteflashlight',
  'platgovsalesforceflashlight',
];

// Special case for identitymanager/saas
const specialCases = {
  'identitymanager/saas': 'identitymanager_saas',
};

// Function to get plugin ID based on product and version
function getPluginId(product, version) {
  // Handle special cases first
  const specialKey = version ? `${product}/${version}` : product;
  if (specialCases[specialKey]) {
    return specialCases[specialKey];
  }

  // Handle versionless products
  if (versionlessProducts.includes(product) && !version) {
    return product;
  }

  // Handle versioned products
  if (version) {
    // Convert version dots to underscores (e.g., "12.0" -> "12_0")
    const versionFormatted = version.replace(/\./g, '_');
    return `${product}${versionFormatted}`;
  }

  // If no version provided for a versioned product, error
  console.error(`Product "${product}" requires a version number.`);
  console.error('Available versions can be found in the docs directory structure.');
  process.exit(1);
}

// Function to check if plugin exists in docusaurus config
function validatePlugin(pluginId, product, version) {
  const configPath = path.join(__dirname, '..', 'docusaurus.config.js');
  const configContent = fs.readFileSync(configPath, 'utf8');

  // Check if plugin ID exists in config
  if (!configContent.includes(`id: '${pluginId}'`)) {
    console.error(`Plugin "${pluginId}" not found in docusaurus.config.js`);
    if (version) {
      console.error(`Product "${product}" version "${version}" is not configured.`);
    } else {
      console.error(`Product "${product}" is not configured.`);
    }
    process.exit(1);
  }
}

// Create temporary config file for single product build
function createTempConfig(pluginId, product, version) {
  const tempConfigPath = path.join(__dirname, '..', 'docusaurus.single.config.js');

  // Get the path and sidebar for this specific product
  let docPath, routeBasePath, sidebarPath;

  if (version) {
    docPath = `docs/${product}/${version}`;
    routeBasePath = '/'; // Serve at root for single product builds
  } else {
    // Handle special cases
    if (pluginId === 'identitymanager_saas') {
      docPath = 'docs/identitymanager/saas';
      routeBasePath = '/'; // Serve at root for single product builds
    } else {
      docPath = `docs/${product}`;
      routeBasePath = '/'; // Serve at root for single product builds
    }
  }

  // Determine sidebar path
  if (product === 'threatprevention' && version) {
    sidebarPath = `./sidebars/threatprevention-${version}-sidebar.js`;
  } else {
    sidebarPath = './sidebars/sidebar.js';
  }

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
            label: '${version || 'Current'}',
          },
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/Logo_RGB.svg',
    docs: {
      sidebar: {
        hideable: false,
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
  const tempConfigPath = path.join(__dirname, '..', 'docusaurus.single.config.js');
  if (fs.existsSync(tempConfigPath)) {
    fs.unlinkSync(tempConfigPath);
  }
}

// Main execution
console.log(`Building single product: ${productName}${version ? `/${version}` : ''}`);

const pluginId = getPluginId(productName, version);
console.log(`Using plugin ID: ${pluginId}`);

validatePlugin(pluginId, productName, version);

const tempConfigPath = createTempConfig(pluginId, productName, version);

try {
  // Run docusaurus build with the temporary config
  console.log('Starting build...');
  execSync(`npx docusaurus build --config ${path.basename(tempConfigPath)}`, {
    stdio: 'inherit',
    cwd: path.dirname(tempConfigPath),
  });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} finally {
  cleanup();
}
