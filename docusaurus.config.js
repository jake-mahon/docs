// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'Documentation for Netwrix security products',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://static-docs-site.azurewebsites.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

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
    // ActivityMonitor Product Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'activitymonitor',
        path: 'docs/activitymonitor',
        routeBasePath: 'docs/activitymonitor',
        sidebarPath: './sidebars/activitymonitor.js',
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // Enable versioning
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // Enable versioning
        versions: {
          current: {
            label: 'Current',
          },
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        versions: {
          current: {
            label: 'Current',
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
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          src: 'img/branding/logo.svg',
          href: '/',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Products',
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
                label: 'Access Information Center',
                to: '/docs/accessinformationcenter',
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
                label: 'Change Tracker',
                to: '/docs/changetracker',
              },
              {
                label: 'Data Classification',
                to: '/docs/dataclassification',
              },
              {
                label: 'Endpoint Protector',
                to: '/docs/endpointprotector',
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
                label: 'PolicyPak',
                to: '/docs/policypak',
              },
              {
                label: 'Privilege Secure',
                to: '/docs/privilegesecure',
              },
              {
                label: 'Recovery for Active Directory',
                to: '/docs/recoveryforactivedirectory',
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
                label: 'Threat Manager',
                to: '/docs/threatmanager',
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
