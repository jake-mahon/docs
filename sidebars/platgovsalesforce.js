// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  platgovSalesforceSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Platgovsalesforce Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/installation',
        'getting-started/initial-setup',
        'getting-started/features-and-licensing',
        'getting-started/navigation-basics',
      ],
    },
    {
      type: 'category',
      label: 'Change Management',
      collapsed: true,
      items: [
        'change-management/index',
        'change-management/change-requests',
        'change-management/policies-and-approval',
        'change-management/change-tracking',
        'change-management/compliance-management',
        'change-management/cpq-support',
      ],
    },
    {
      type: 'category',
      label: 'Release Management',
      collapsed: true,
      items: [
        'release-management/index',
        'release-management/deployments',
        'release-management/multi-environment-tracking',
        'release-management/rollback-procedures',
      ],
    },
    {
      type: 'category',
      label: 'Org Maintenance',
      collapsed: true,
      items: [
        'org-maintenance/index',
        'org-maintenance/cleanup-tools',
        'org-maintenance/technical-debt',
        'org-maintenance/customization-tracking',
        'org-maintenance/automated-documentation',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/index',
        'integrations/jira-integration',
        'integrations/jira-configuration',
        'integrations/jira-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/index',
        'administration/scanners-and-automation',
        'administration/settings-and-credentials',
        'administration/access-permissions',
        'administration/platform-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Tools and Utilities',
      collapsed: true,
      items: [
        'tools-and-utilities/index',
        'tools-and-utilities/data-export-tools',
        'tools-and-utilities/comparison-tools',
        'tools-and-utilities/analysis-tools',
        'tools-and-utilities/cleanup-utilities',
      ],
    },
    {
      type: 'category',
      label: 'Reporting',
      collapsed: true,
      items: [
        'reporting/index',
        'reporting/deployment-reports',
        'reporting/change-management-reports',
        'reporting/cleanup-reports',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: ['reference/faq', 'reference/whats-new', 'reference/metadata-types'],
    },
  ],
};

module.exports = sidebars;
