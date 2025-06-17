// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Dynamically discover products and versions from the docs directory structure
 */
function discoverProducts() {
  const docsPath = path.join(__dirname, 'docs');
  const products = [];

  try {
    // Read all directories in docs/
    const productDirs = fs.readdirSync(docsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const productId of productDirs) {
      const productPath = path.join(docsPath, productId);
      
      // Check if there are version directories
      const versionDirs = fs.readdirSync(productPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .filter(dirent => /^\d+\./.test(dirent.name)) // Match version patterns like "1.0", "2.1", etc.
        .map(dirent => dirent.name)
        .sort((a, b) => b.localeCompare(a, undefined, { numeric: true })); // Sort versions descending

      // Determine the label for the current version
      let currentLabel = 'Current';
      if (versionDirs.length > 0) {
        currentLabel = `Version ${versionDirs[0]}`; // Use the latest version as label
      }

      products.push({
        id: productId,
        label: currentLabel,
        hasVersions: versionDirs.length > 0,
        versions: versionDirs
      });
    }
  } catch (error) {
    console.error('Error discovering products:', error);
  }

  return products;
}

/**
 * Generate sidebar path based on product and version
 */
function getSidebarPath(productId, version) {
  if (version) {
    const sidebarFile = `./sidebars/${productId}/${version}/sidebar.js`;
    // Check if version-specific sidebar exists
    if (fs.existsSync(path.join(__dirname, 'sidebars', productId, version, 'sidebar.js'))) {
      return sidebarFile;
    }
  }
  
  // Check if product-specific sidebar exists
  const productSidebarFile = `./sidebars/${productId}/sidebar.js`;
  if (fs.existsSync(path.join(__dirname, 'sidebars', productId, 'sidebar.js'))) {
    return productSidebarFile;
  }
  
  // Fallback to generic sidebar
  return './sidebars/sidebar.js';
}

const discoveredProducts = discoverProducts();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Netwrix Product Documentation',
  tagline: 'Documentation for Netwrix Products',
  favicon: 'img/branding/favicon.ico',

  // Set the production url of your site here
  // Use environment variable for dynamic URL configuration
  url: process.env.RENDER_EXTERNAL_URL || 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // throw on anything that is not configured correctly
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Performance optimizations with Docusaurus Faster
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true, // 2-5x faster rebuilds
      mdxCrossCompilerCache: true,
      ssgWorkerThreads: true, // 2x faster static generation
    },
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // Required for worker threads
      // useCssCascadeLayers: true, // Temporarily disabled - may cause style conflicts
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    process.env.RSDOCTOR === 'true' && [
      'rsdoctor',
      {
        rsdoctorOptions: {
          mode: 'lite', // or 'full' for more detailed analysis
        },
      },
    ],
    // Product configurations
    ...discoveredProducts.map(product => [
      '@docusaurus/plugin-content-docs',
      {
        id: product.id,
        path: `docs/${product.id}`,
        routeBasePath: `docs/${product.id}`,
        sidebarPath: getSidebarPath(product.id, product.versions.length > 0 ? product.versions[0] : null),
        editUrl: 'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: product.label,
          },
        },
      },
    ]),
  ].filter(Boolean),

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
          // {
          //   type: 'dropdown',
          //   label: 'Security Admin',
          //   position: 'left',
          //   items: [
          //     {
          //       label: '1Secure',
          //       to: '/docs/1secure',
          //     },
          //     {
          //       label: 'Access Analyzer',
          //       to: '/docs/accessanalyzer',
          //     },
          //     {
          //       label: 'Activity Monitor',
          //       to: '/docs/activitymonitor',
          //     },
          //     {
          //       label: 'Auditor',
          //       to: '/docs/auditor',
          //     },
          //     {
          //       label: 'Threat Manager',
          //       to: '/docs/threatmanager',
          //     },
          //   ],
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Identity & Access',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'Access Information Center',
          //       to: '/docs/accessinformationcenter',
          //     },
          //     {
          //       label: 'Group ID',
          //       to: '/docs/groupid',
          //     },
          //     {
          //       label: 'Password Policy Enforcer',
          //       to: '/docs/passwordpolicyenforcer',
          //     },
          //     {
          //       label: 'Password Reset',
          //       to: '/docs/passwordreset',
          //     },
          //     {
          //       label: 'Password Secure',
          //       to: '/docs/passwordsecure',
          //     },
          //     {
          //       label: 'Privilege Secure',
          //       to: '/docs/privilegesecure',
          //     },
          //   ],
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Compliance',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'Change Tracker',
          //       to: '/docs/changetracker',
          //     },
          //     {
          //       label: 'StrongPoint for NetSuite',
          //       to: '/docs/strongpointfornetsuite',
          //     },
          //     {
          //       label: 'StrongPoint for Salesforce',
          //       to: '/docs/strongpointforsalesforce',
          //     },
          //     {
          //       label: 'StrongPoint NetSuite Flashlight',
          //       to: '/docs/strongpointnetsuiteflashlight',
          //     },
          //     {
          //       label: 'StrongPoint Salesforce Flashlight',
          //       to: '/docs/strongpointsalesforceflashlight',
          //     },
          //     {
          //       label: 'Data Classification',
          //       to: '/docs/dataclassification',
          //     },
          //     {
          //       label: 'Recovery for Active Directory',
          //       to: '/docs/recoveryforactivedirectory',
          //     },
          //   ],
          // },
          {
            type: 'dropdown',
            label: 'Endpoint',
            position: 'left',
            items: [
              // {
              //   label: 'Endpoint Protector',
              //   to: '/docs/endpointprotector',
              // },
              // {
              //   label: 'PolicyPak',
              //   to: '/docs/policypak',
              // },
              // {
              //   label: 'Threat Prevention',
              //   to: '/docs/threatprevention',
              // },
              {
                label: 'UserCube',
                to: '/docs/usercube',
              },
              // {
              //   label: 'UserCube SaaS',
              //   to: '/docs/usercube_saas',
              // },
            ],
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
    }),
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  ],
};

export default config;
