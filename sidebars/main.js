// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Product Documentation',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Activity Monitor',
          href: '/docs/activitymonitor',
        },
        {
          type: 'link',
          label: 'Change Tracker',
          href: '/docs/changetracker',
        },
        // Add more products as they become available
      ],
    },
  ],
};

export default sidebars; 