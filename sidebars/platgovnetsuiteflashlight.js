// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  platgovnetsuiteflashlightSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'NetSuite Flashlight Home',
    },
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['overview/welcome', 'overview/features'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/initial-setup',
        'getting-started/licensing',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: true,
      items: [
        'user-guide/dashboard',
        {
          type: 'category',
          label: 'Customization Management',
          items: [
            'user-guide/customization-management/impact-analysis',
            'user-guide/customization-management/reports',
            'user-guide/customization-management/best-practices',
          ],
        },
        {
          type: 'category',
          label: 'Data Visualization',
          items: [
            'user-guide/data-visualization/entity-relationship-diagrams',
            'user-guide/data-visualization/spider-diagrams',
          ],
        },
        'user-guide/sql-tools',
        'user-guide/user-management',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: ['administration/documentation-management', 'administration/uninstallation'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/performance',
        'troubleshooting/support',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: ['resources/tutorial-videos', 'resources/release-notes'],
    },
  ],
};

export default sidebars;
