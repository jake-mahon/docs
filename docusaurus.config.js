// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
    // 1Secure Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '1secure',
        path: 'docs/1secure',
        routeBasePath: 'docs/1secure',
        sidebarPath: './sidebars/1secure.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // ActivityMonitor Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'activitymonitor',
        path: 'docs/activitymonitor',
        routeBasePath: 'docs/activitymonitor',
        sidebarPath: './sidebars/activitymonitor.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 8.0',
          },
        },
      },
    ],
    // ChangeTracker Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changetracker',
        path: 'docs/changetracker',
        routeBasePath: 'docs/changetracker',
        sidebarPath: './sidebars/changetracker.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 8.1',
          },
        },
      },
    ],
    // Access Analyzer Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessanalyzer',
        path: 'docs/accessanalyzer',
        routeBasePath: 'docs/accessanalyzer',
        sidebarPath: './sidebars/accessanalyzer.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 12.0',
          },
        },
      },
    ],
    // Access Information Center Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'accessinformationcenter',
        path: 'docs/accessinformationcenter',
        routeBasePath: 'docs/accessinformationcenter',
        sidebarPath: './sidebars/accessinformationcenter.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Auditor Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'auditor',
        path: 'docs/auditor',
        routeBasePath: 'docs/auditor',
        sidebarPath: './sidebars/auditor.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 10.7',
          },
        },
      },
    ],
    // Data Classification Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dataclassification',
        path: 'docs/dataclassification',
        routeBasePath: 'docs/dataclassification',
        sidebarPath: './sidebars/dataclassification.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 5.7',
          },
        },
      },
    ],
    // Endpoint Protector Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'endpointprotector',
        path: 'docs/endpointprotector',
        routeBasePath: 'docs/endpointprotector',
        sidebarPath: './sidebars/endpointprotector.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Group ID Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'groupid',
        path: 'docs/groupid',
        routeBasePath: 'docs/groupid',
        sidebarPath: './sidebars/groupid.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 11.1',
          },
        },
      },
    ],
    // Password Policy Enforcer Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordpolicyenforcer',
        path: 'docs/passwordpolicyenforcer',
        routeBasePath: 'docs/passwordpolicyenforcer',
        sidebarPath: './sidebars/passwordpolicyenforcer.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 11.0',
          },
        },
      },
    ],
    // Password Reset Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordreset',
        path: 'docs/passwordreset',
        routeBasePath: 'docs/passwordreset',
        sidebarPath: './sidebars/passwordreset.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 3.3',
          },
        },
      },
    ],
    // Password Secure Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'passwordsecure',
        path: 'docs/passwordsecure',
        routeBasePath: 'docs/passwordsecure',
        sidebarPath: './sidebars/passwordsecure.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 9.2',
          },
        },
      },
    ],
    // PolicyPak Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'policypak',
        path: 'docs/policypak',
        routeBasePath: 'docs/policypak',
        sidebarPath: './sidebars/policypak.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Privilege Secure Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'privilegesecure',
        path: 'docs/privilegesecure',
        routeBasePath: 'docs/privilegesecure',
        sidebarPath: './sidebars/privilegesecure.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 25.5',
          },
        },
      },
    ],
    // Recovery for Active Directory Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'recoveryforactivedirectory',
        path: 'docs/recoveryforactivedirectory',
        routeBasePath: 'docs/recoveryforactivedirectory',
        sidebarPath: './sidebars/recoveryforactivedirectory.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 2.6',
          },
        },
      },
    ],
    // StrongPoint for NetSuite Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointfornetsuite',
        path: 'docs/strongpointfornetsuite',
        routeBasePath: 'docs/strongpointfornetsuite',
        sidebarPath: './sidebars/strongpointfornetsuite.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // StrongPoint for Salesforce Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointforsalesforce',
        path: 'docs/strongpointforsalesforce',
        routeBasePath: 'docs/strongpointforsalesforce',
        sidebarPath: './sidebars/strongpointforsalesforce.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // StrongPoint NetSuite Flashlight Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointnetsuiteflashlight',
        path: 'docs/strongpointnetsuiteflashlight',
        routeBasePath: 'docs/strongpointnetsuiteflashlight',
        sidebarPath: './sidebars/strongpointnetsuiteflashlight.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // StrongPoint Salesforce Flashlight Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'strongpointsalesforceflashlight',
        path: 'docs/strongpointsalesforceflashlight',
        routeBasePath: 'docs/strongpointsalesforceflashlight',
        sidebarPath: './sidebars/strongpointsalesforceflashlight.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
    // Threat Manager Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'threatmanager',
        path: 'docs/threatmanager',
        routeBasePath: 'docs/threatmanager',
        sidebarPath: './sidebars/threatmanager.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 3.0',
          },
        },
      },
    ],
    // Threat Prevention Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'threatprevention',
        path: 'docs/threatprevention',
        routeBasePath: 'docs/threatprevention',
        sidebarPath: './sidebars/threatprevention.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 7.5',
          },
        },
      },
    ],
    // UserCube Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'usercube',
        path: 'docs/usercube',
        routeBasePath: 'docs/usercube',
        sidebarPath: './sidebars/usercube.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Version 6.2',
          },
        },
      },
    ],
    // UserCube SaaS Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'usercube_saas',
        path: 'docs/usercube_saas',
        routeBasePath: 'docs/usercube_saas',
        sidebarPath: './sidebars/usercube_saas.js',
        editUrl:
          'https://github.com/netwrix/docs/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/CLAUDE.md'],
        versions: {
          current: {
            label: 'Current',
          },
        },
      },
    ],
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
          {
            type: 'dropdown',
            label: 'Security Admin',
            position: 'left',
            items: [
              {
                label: '1Secure',
                to: '/docs/1secure',
              },
              {
                label: 'Access Analyzer',
                to: '/docs/accessanalyzer',
              },
              {
                label: 'Activity Monitor',
                to: '/docs/activitymonitor',
              },
              {
                label: 'Auditor',
                to: '/docs/auditor',
              },
              {
                label: 'Threat Manager',
                to: '/docs/threatmanager',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Identity & Access',
            position: 'left',
            items: [
              {
                label: 'Access Information Center',
                to: '/docs/accessinformationcenter',
              },
              {
                label: 'Group ID',
                to: '/docs/groupid',
              },
              {
                label: 'Password Policy Enforcer',
                to: '/docs/passwordpolicyenforcer',
              },
              {
                label: 'Password Reset',
                to: '/docs/passwordreset',
              },
              {
                label: 'Password Secure',
                to: '/docs/passwordsecure',
              },
              {
                label: 'Privilege Secure',
                to: '/docs/privilegesecure',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Compliance',
            position: 'left',
            items: [
              {
                label: 'Change Tracker',
                to: '/docs/changetracker',
              },
              {
                label: 'StrongPoint for NetSuite',
                to: '/docs/strongpointfornetsuite',
              },
              {
                label: 'StrongPoint for Salesforce',
                to: '/docs/strongpointforsalesforce',
              },
              {
                label: 'StrongPoint NetSuite Flashlight',
                to: '/docs/strongpointnetsuiteflashlight',
              },
              {
                label: 'StrongPoint Salesforce Flashlight',
                to: '/docs/strongpointsalesforceflashlight',
              },
              {
                label: 'Data Classification',
                to: '/docs/dataclassification',
              },
              {
                label: 'Recovery for Active Directory',
                to: '/docs/recoveryforactivedirectory',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Endpoint',
            position: 'left',
            items: [
              {
                label: 'Endpoint Protector',
                to: '/docs/endpointprotector',
              },
              {
                label: 'PolicyPak',
                to: '/docs/policypak',
              },
              {
                label: 'Threat Prevention',
                to: '/docs/threatprevention',
              },
              {
                label: 'UserCube',
                to: '/docs/usercube',
              },
              {
                label: 'UserCube SaaS',
                to: '/docs/usercube_saas',
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
