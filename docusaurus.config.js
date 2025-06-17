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

  scripts: [
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "c8052612-e9cf-49f8-b7a4-e717c6adc398",
      "data-project-name": "Netwrix",
      "data-project-color": "#F5F5F5",
      "data-project-logo": "https://img.netwrix.com/elements/social_communities/netwrix_blog.svg",
      "data-user-analytics-cookie-enabled": "true",
      "data-modal-title": "Netwrix Help Center AI Assistant",
      "data-modal-example-questions-title": "Try asking me...",
      "data-modal-disclaimer": "This **AI assistant answers Netwrix questions** using the documentation",
      "data-modal-example-questions": "How to reduce Audit DB size?,How to scan for sensitive data?,How to migrate NEA to new server?,How to upload archive to SQL DB?",
      "data-button-text-color": "#E32C2D",
      async: true,
    },
  ],

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
    // 1Secure
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '1secure',
        path: 'docs/1secure',
        routeBasePath: 'docs/1secure',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Access Analyzer versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessanalyzer12_0',
        path: 'docs/accessanalyzer/12.0',
        routeBasePath: 'docs/accessanalyzer/12.0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '12.0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessanalyzer11_6',
        path: 'docs/accessanalyzer/11.6',
        routeBasePath: 'docs/accessanalyzer/11.6',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '11.6',
          },
        },
      },
    ],
    // Access Information Center versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessinformationcenter12_0',
        path: 'docs/accessinformationcenter/12.0',
        routeBasePath: 'docs/accessinformationcenter/12.0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '12.0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessinformationcenter11_6',
        path: 'docs/accessinformationcenter/11.6',
        routeBasePath: 'docs/accessinformationcenter/11.6',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '11.6',
          },
        },
      },
    ],
    // Activity Monitor versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'activitymonitor8_0',
        path: 'docs/activitymonitor/8.0',
        routeBasePath: 'docs/activitymonitor/8.0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '8.0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'activitymonitor7_1',
        path: 'docs/activitymonitor/7.1',
        routeBasePath: 'docs/activitymonitor/7.1',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '7.1',
          },
        },
      },
    ],
    // Auditor versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'auditor10_7',
        path: 'docs/auditor/10.7',
        routeBasePath: 'docs/auditor/10.7',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '10.7',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'auditor10_6',
        path: 'docs/auditor/10.6',
        routeBasePath: 'docs/auditor/10.6',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '10.6',
          },
        },
      },
    ],
    // Change Tracker versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changetracker8_1',
        path: 'docs/changetracker/8.1',
        routeBasePath: 'docs/changetracker/8.1',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '8.1',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changetracker8_0',
        path: 'docs/changetracker/8.0',
        routeBasePath: 'docs/changetracker/8.0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '8.0',
          },
        },
      },
    ],
    // Data Classification versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dataclassification5_7',
        path: 'docs/dataclassification/5.7',
        routeBasePath: 'docs/dataclassification/5.7',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '5.7',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dataclassification5_6_2',
        path: 'docs/dataclassification/5.6.2',
        routeBasePath: 'docs/dataclassification/5.6.2',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '5.6.2',
          },
        },
      },
    ],
    // Endpoint Protector versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'endpointprotector5_9_4_2',
        path: 'docs/endpointprotector/5.9.4.2',
        routeBasePath: 'docs/endpointprotector/5.9.4.2',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '5.9.4.2',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'endpointprotector5_9_4',
        path: 'docs/endpointprotector/5.9.4',
        routeBasePath: 'docs/endpointprotector/5.9.4',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '5.9.4',
          },
        },
      },
    ],
    // Group ID versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'groupid11_1',
        path: 'docs/groupid/11.1',
        routeBasePath: 'docs/groupid/11.1',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '11.1',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'groupid11_0',
        path: 'docs/groupid/11.0',
        routeBasePath: 'docs/groupid/11.0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '11.0',
          },
        },
      },
    ],
    // Password Policy Enforcer versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordpolicyenforcer11_0',
        path: 'docs/passwordpolicyenforcer/11.0',
        routeBasePath: 'docs/passwordpolicyenforcer/11.0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '11.0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordpolicyenforcer10_2',
        path: 'docs/passwordpolicyenforcer/10.2',
        routeBasePath: 'docs/passwordpolicyenforcer/10.2',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '10.2',
          },
        },
      },
    ],
    // Password Reset versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordreset3_3',
        path: 'docs/passwordreset/3.3',
        routeBasePath: 'docs/passwordreset/3.3',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '3.3',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordreset3_23',
        path: 'docs/passwordreset/3.23',
        routeBasePath: 'docs/passwordreset/3.23',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '3.23',
          },
        },
      },
    ],
    // Password Secure versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordsecure9_2',
        path: 'docs/passwordsecure/9.2',
        routeBasePath: 'docs/passwordsecure/9.2',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '9.2',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordsecure9_1',
        path: 'docs/passwordsecure/9.1',
        routeBasePath: 'docs/passwordsecure/9.1',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '9.1',
          },
        },
      },
    ],
    // Privilege Secure versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'privilegesecure4_2',
        path: 'docs/privilegesecure/4.2',
        routeBasePath: 'docs/privilegesecure/4.2',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '4.2',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'privilegesecure4_1',
        path: 'docs/privilegesecure/4.1',
        routeBasePath: 'docs/privilegesecure/4.1',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '4.1',
          },
        },
      },
    ],
    // Recovery for Active Directory
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'recoveryforactivedirectory2_6',
        path: 'docs/recoveryforactivedirectory/2.6',
        routeBasePath: 'docs/recoveryforactivedirectory/2.6',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '2.6',
          },
        },
      },
    ],
    // Threat Manager
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'threatmanager3_0',
        path: 'docs/threatmanager/3.0',
        routeBasePath: 'docs/threatmanager/3.0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '3.0',
          },
        },
      },
    ],
    // Threat Prevention versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'threatprevention7_5',
        path: 'docs/threatprevention/7.5',
        routeBasePath: 'docs/threatprevention/7.5',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '7.5',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'threatprevention7_4',
        path: 'docs/threatprevention/7.4',
        routeBasePath: 'docs/threatprevention/7.4',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '7.4',
          },
        },
      },
    ],
    // UserCube versions
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'usercube6_2',
        path: 'docs/usercube/6.2',
        routeBasePath: 'docs/usercube/6.2',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '6.2',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'usercube6_1',
        path: 'docs/usercube/6.1',
        routeBasePath: 'docs/usercube/6.1',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: '6.1',
          },
        },
      },
    ],
    // PolicyPak (no versions)
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'policypak',
        path: 'docs/policypak',
        routeBasePath: 'docs/policypak',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: 'Current',
          },
        },
      },
    ],
    // StrongPoint products (no versions)
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointfornetsuite',
        path: 'docs/strongpointfornetsuite',
        routeBasePath: 'docs/strongpointfornetsuite',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: 'Current',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointforsalesforce',
        path: 'docs/strongpointforsalesforce',
        routeBasePath: 'docs/strongpointforsalesforce',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: 'Current',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointnetsuiteflashlight',
        path: 'docs/strongpointnetsuiteflashlight',
        routeBasePath: 'docs/strongpointnetsuiteflashlight',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: 'Current',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointsalesforceflashlight',
        path: 'docs/strongpointsalesforceflashlight',
        routeBasePath: 'docs/strongpointsalesforceflashlight',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: 'Current',
          },
        },
      },
    ],
    // UserCube SaaS (no versions)
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'usercube_saas',
        path: 'docs/usercube_saas',
        routeBasePath: 'docs/usercube_saas',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          'current': {
            label: 'Current',
          },
        },
      },
    ],
  ],

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
          {
            type: 'dropdown',
            label: 'Identity',
            position: 'left',
            items: [
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Privilege',
            position: 'left',
            items: [
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Directory',
            position: 'left',
            items: [
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Endpoint',
            position: 'left',
            items: [
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'DSPM',
            position: 'left',
            items: [
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'ITDR',
            position: 'left',
            items: [
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
              {
                label: 'Product Name',
                to: '#',
              },
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
