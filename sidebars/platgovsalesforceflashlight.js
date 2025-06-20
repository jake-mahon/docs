// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  platgovsalesforceflashlightSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Platform Governance for Salesforce Flashlight',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/installation-and-setup',
        'getting-started/dashboard-overview',
        'getting-started/scheduling-scans',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: true,
      items: [
        'core-features/metadata-documentation',
        'core-features/customization-tracking',
        'core-features/dependency-analysis',
        'core-features/reports-and-exports',
      ],
    },
    {
      type: 'category',
      label: 'Tools and Utilities',
      collapsed: true,
      items: [
        'tools-and-utilities/index',
        'tools-and-utilities/finder-tool',
        'tools-and-utilities/export-tools',
        'tools-and-utilities/report-cleanup',
        'tools-and-utilities/scanner-tools',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/configuration-and-status',
        'administration/platform-governor',
        'administration/uninstalling',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: ['reference/metadata-types', 'reference/troubleshooting'],
    },
  ],
};

export default sidebars;
