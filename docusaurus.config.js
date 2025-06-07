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
  url: 'https://docs.yourcompany.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        docs: {
          // Main/landing documentation
          path: 'docs/main',
          routeBasePath: 'docs',
          sidebarPath: './sidebars/main.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
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
    // Add more product documentation instances here as needed
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
          src: 'img/branding/logo.svg',
          href: '/docs',
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
