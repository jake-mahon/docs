// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { generateNavbarDropdowns } from './src/config/products.js';

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
        id: '1secure',
        path: 'docs/1secure',
        routeBasePath: '/',
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
        // Generate category dropdowns from centralized product configuration
        ...generateNavbarDropdowns(),
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
  stylesheets: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'],
};

export default config;
