// @ts-check
// Versioned Modular Docusaurus configuration for testing individual versioned products

import {themes as prismThemes} from 'prism-react-renderer';
const { getEnabledVersionedPlugins, getEnabledVersionedNavItems } = require('./docusaurus.config.versioned-products');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Versioned Documentation',
  tagline: 'Versioned documentation for Netwrix security products',
  favicon: 'img/favicon.ico',

  url: 'https://docs.yourcompany.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

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

  plugins: getEnabledVersionedPlugins(),

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            label: 'Versioned Products',
            position: 'left',
            items: getEnabledVersionedNavItems(),
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