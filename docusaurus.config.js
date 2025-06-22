// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Netwrix Product Documentation',
  tagline: 'Documentation for Netwrix Products',
  favicon: 'img/branding/favicon.ico',

  // Set the production url of your site here
  // Use environment variable for dynamic URL configuration
  projectName: 'docs',
  url: process.env.RENDER_EXTERNAL_URL || 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
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
    // './plugins/product-meta-tags.js', // Replaced with client module
    // 1Secure Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '1secure',
        path: 'docs/1secure',
        routeBasePath: 'docs/1secure',
        sidebarPath: require.resolve('./sidebars/1secure.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Access Analyzer Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessanalyzer12_0',
        path: 'docs/accessanalyzer/12.0',
        routeBasePath: 'docs/accessanalyzer/12_0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/accessanalyzer/11_6',
        sidebarPath: require.resolve('./sidebars/accessanalyzer/11.6.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '11.6',
          },
        },
      },
    ],
    // Access Information Center Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessinformationcenter12_0',
        path: 'docs/accessinformationcenter/12.0',
        routeBasePath: 'docs/accessinformationcenter/12_0',
        sidebarPath: require.resolve('./sidebars/accessinformationcenter/12.0.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/accessinformationcenter/11_6',
        sidebarPath: require.resolve('./sidebars/accessinformationcenter/11.6.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '11.6',
          },
        },
      },
    ],
    // Activity Monitor Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'activitymonitor8_0',
        path: 'docs/activitymonitor/8.0',
        routeBasePath: 'docs/activitymonitor/8_0',
        sidebarPath: require.resolve('./sidebars/activitymonitor/8.0.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/activitymonitor/7_1',
        sidebarPath: require.resolve('./sidebars/activitymonitor/7.1.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '7.1',
          },
        },
      },
    ],
    // Auditor Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'auditor10_7',
        path: 'docs/auditor/10.7',
        routeBasePath: 'docs/auditor/10_7',
        sidebarPath: require.resolve('./sidebars/auditor/10.7.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/auditor/10_6',
        sidebarPath: require.resolve('./sidebars/auditor/10.6.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '10.6',
          },
        },
      },
    ],
    // Change Tracker Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changetracker8_1',
        path: 'docs/changetracker/8.1',
        routeBasePath: 'docs/changetracker/8_1',
        sidebarPath: require.resolve('./sidebars/changetracker/8.1.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/changetracker/8_0',
        sidebarPath: require.resolve('./sidebars/changetracker/8.0.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '8.0',
          },
        },
      },
    ],
    // Data Classification Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dataclassification5_6_2',
        path: 'docs/dataclassification/5.6.2',
        routeBasePath: 'docs/dataclassification/5_6_2',
        sidebarPath: require.resolve('./sidebars/dataclassification/5.6.2.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '5.6.2',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dataclassification5_7',
        path: 'docs/dataclassification/5.7',
        routeBasePath: 'docs/dataclassification/5_7',
        sidebarPath: require.resolve('./sidebars/dataclassification/5.7.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '5.7',
          },
        },
      },
    ],
    // Directory Manager Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'directorymanager11_1',
        path: 'docs/directorymanager/11.1',
        routeBasePath: 'docs/directorymanager/11_1',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '11.1',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'directorymanager11_0',
        path: 'docs/directorymanager/11.0',
        routeBasePath: 'docs/directorymanager/11_0',
        sidebarPath: require.resolve('./sidebars/sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '11.0',
          },
        },
      },
    ],
    // Endpoint Policy Manager Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'endpointpolicymanager',
        path: 'docs/endpointpolicymanager',
        routeBasePath: 'docs/endpointpolicymanager',
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
    // Endpoint Protector Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'endpointprotector5_9_4_2',
        path: 'docs/endpointprotector/5.9.4.2',
        routeBasePath: 'docs/endpointprotector/5_9_4_2',
        sidebarPath: require.resolve('./sidebars/endpointprotector/5.9.4.2.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/endpointprotector/5_9_4',
        sidebarPath: require.resolve('./sidebars/endpointprotector/5.9.4.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '5.9.4',
          },
        },
      },
    ],
    // IdentityManager Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'identitymanager6_2',
        path: 'docs/identitymanager/6.2',
        routeBasePath: 'docs/identitymanager/6_2',
        sidebarPath: require.resolve('./sidebars/identitymanager/6.2.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '6.2',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'identitymanager6_1',
        path: 'docs/identitymanager/6.1',
        routeBasePath: 'docs/identitymanager/6_1',
        sidebarPath: require.resolve('./sidebars/identitymanager/6.1.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '6.1',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'identitymanager_saas',
        path: 'docs/identitymanager/saas',
        routeBasePath: 'docs/identitymanager/saas',
        sidebarPath: require.resolve('./sidebars/identitymanager/saas.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Password Policy Enforcer Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordpolicyenforcer11_0',
        path: 'docs/passwordpolicyenforcer/11.0',
        routeBasePath: 'docs/passwordpolicyenforcer/11_0',
        sidebarPath: require.resolve('./sidebars/passwordpolicyenforcer/11.0.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/passwordpolicyenforcer/10_2',
        sidebarPath: require.resolve('./sidebars/passwordpolicyenforcer/10.2.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '10.2',
          },
        },
      },
    ],
    // Password Reset Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordreset3_3',
        path: 'docs/passwordreset/3.3',
        routeBasePath: 'docs/passwordreset/3_3',
        sidebarPath: require.resolve('./sidebars/passwordreset/3.3.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/passwordreset/3_23',
        sidebarPath: require.resolve('./sidebars/passwordreset/3.23.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '3.23',
          },
        },
      },
    ],
    // Password Secure Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordsecure9_2',
        path: 'docs/passwordsecure/9.2',
        routeBasePath: 'docs/passwordsecure/9_2',
        sidebarPath: require.resolve('./sidebars/passwordsecure/9.2.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/passwordsecure/9_1',
        sidebarPath: require.resolve('./sidebars/passwordsecure/9.1.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '9.1',
          },
        },
      },
    ],
    // PingCastle Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pingcastle',
        path: 'docs/pingcastle',
        routeBasePath: 'docs/pingcastle',
        sidebarPath: require.resolve('./sidebars/pingcastle.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Platform Governance NetSuite Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platgovnetsuite',
        path: 'docs/platgovnetsuite',
        routeBasePath: 'docs/platgovnetsuite',
        sidebarPath: require.resolve('./sidebars/platgovnetsuite.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platgovnetsuiteflashlight',
        path: 'docs/platgovnetsuiteflashlight',
        routeBasePath: 'docs/platgovnetsuiteflashlight',
        sidebarPath: require.resolve('./sidebars/platgovnetsuiteflashlight.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Platform Governance Salesforce Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platgovsalesforce',
        path: 'docs/platgovsalesforce',
        routeBasePath: 'docs/platgovsalesforce',
        sidebarPath: require.resolve('./sidebars/platgovsalesforce.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platgovsalesforceflashlight',
        path: 'docs/platgovsalesforceflashlight',
        routeBasePath: 'docs/platgovsalesforceflashlight',
        sidebarPath: require.resolve('./sidebars/platgovsalesforceflashlight.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Privilege Secure Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'privilegesecure4_2',
        path: 'docs/privilegesecure/4.2',
        routeBasePath: 'docs/privilegesecure/4_2',
        sidebarPath: require.resolve('./sidebars/privilegesecure/4.2.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/privilegesecure/4_1',
        sidebarPath: require.resolve('./sidebars/privilegesecure/4.1.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/recoveryforactivedirectory/2_6',
        sidebarPath: require.resolve('./sidebars/recoveryforactivedirectory/2.6.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/threatmanager/3_0',
        sidebarPath: require.resolve('./sidebars/threatmanager/3.0.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '3.0',
          },
        },
      },
    ],
    // Threat Prevention Product
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'threatprevention7_5',
        path: 'docs/threatprevention/7.5',
        routeBasePath: 'docs/threatprevention/7_5',
        sidebarPath: require.resolve('./sidebars/threatprevention-7.5-sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
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
        routeBasePath: 'docs/threatprevention/7_4',
        sidebarPath: require.resolve('./sidebars/threatprevention-7.4-sidebar.js'),
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: '7.4',
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
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      algolia: {
        appId: 'KPMSCF6G6J',
        apiKey: '1b20f30f13a874cd46f9d5c30b01d99c',
        indexName: 'product_docs',
        searchPagePath: false,
        placeholder: 'Search the Netwrix docs',
        contextualSearch: false,
        searchParameters: {
          // Define which attributes should be available as facets
          attributesToRetrieve: ['*'],
          facets: ['product', 'version'],

          // Optional: Set default filters (these will be applied unless user changes them)
          facetFilters: [],
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
    }),
  stylesheets: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'],
};

export default config;
