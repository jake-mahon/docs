// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  directorymanager110: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        'getting-started/requirements',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'getting-started/installation/preparation-tool',
            'getting-started/installation/install-groupid',
            'getting-started/installation/post-installation',
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          link: {
            type: 'doc',
            id: 'getting-started/upgrade/index',
          },
          items: ['getting-started/upgrade/from-version-10'],
        },
        'getting-started/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'generated-index',
        title: 'Configuration',
        description: 'Configure identity stores, data sources, authentication, and services.',
      },
      items: [
        {
          type: 'category',
          label: 'Identity Stores',
          link: {
            type: 'doc',
            id: 'configuration/identity-stores/index',
          },
          items: ['configuration/identity-stores/active-directory', 'configuration/identity-stores/microsoft-entra-id'],
        },
        {
          type: 'category',
          label: 'Data Sources',
          link: {
            type: 'doc',
            id: 'configuration/data-sources/index',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Authentication',
          link: {
            type: 'doc',
            id: 'configuration/authentication/index',
          },
          items: [
            'configuration/authentication/groupid-as-identity-provider',
            'configuration/authentication/groupid-as-service-provider',
            'configuration/authentication/third-party-providers',
          ],
        },
        {
          type: 'category',
          label: 'Services',
          link: {
            type: 'doc',
            id: 'configuration/services/index',
          },
          items: ['configuration/services/portal-configuration', 'configuration/services/mobile-services', 'configuration/services/sms-gateway'],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      link: {
        type: 'generated-index',
        title: 'User Guide',
        description: 'Learn how to use GroupID portal for managing users, groups, entitlements, and more.',
      },
      items: [
        {
          type: 'category',
          label: 'Portal',
          link: {
            type: 'doc',
            id: 'user-guide/portal/index',
          },
          items: ['user-guide/portal/dashboard', 'user-guide/portal/navigation'],
        },
        {
          type: 'category',
          label: 'User Management',
          link: {
            type: 'doc',
            id: 'user-guide/user-management/index',
          },
          items: [
            'user-guide/user-management/create-users',
            'user-guide/user-management/manage-users',
            'user-guide/user-management/user-lifecycle',
            'user-guide/user-management/user-properties',
            'user-guide/user-management/user-properties-active-directory',
            'user-guide/user-management/user-properties-azure',
          ],
        },
        {
          type: 'category',
          label: 'Group Management',
          link: {
            type: 'doc',
            id: 'user-guide/group-management/index',
          },
          items: [
            'user-guide/group-management/create-groups',
            'user-guide/group-management/manage-groups',
            'user-guide/group-management/smart-groups',
            'user-guide/group-management/dynasties',
            'user-guide/group-management/group-lifecycle',
            'user-guide/group-management/group-properties',
          ],
        },
        {
          type: 'category',
          label: 'Entitlements',
          link: {
            type: 'generated-index',
            title: 'Entitlements',
            description: 'Manage permissions and access control for resources.',
          },
          items: ['user-guide/entitlements/access-management', 'user-guide/entitlements/permissions'],
        },
        {
          type: 'category',
          label: 'Synchronization',
          link: {
            type: 'doc',
            id: 'user-guide/synchronization/index',
          },
          items: ['user-guide/synchronization/sync-jobs', 'user-guide/synchronization/schedules', 'user-guide/synchronization/transformations'],
        },
        {
          type: 'category',
          label: 'Workflows',
          items: ['user-guide/workflows/approval-workflows'],
        },
        {
          type: 'category',
          label: 'Reporting',
          items: ['user-guide/reporting/built-in-reports'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      link: {
        type: 'generated-index',
        title: 'Administration',
        description: 'Configure and manage GroupID system settings, security, and policies.',
      },
      items: [
        {
          type: 'category',
          label: 'Admin Center',
          link: {
            type: 'doc',
            id: 'administration/admin-center/index',
          },
          items: [
            'administration/admin-center/system-settings',
            'administration/admin-center/security-roles',
            'administration/admin-center/policies',
            'administration/admin-center/notifications',
          ],
        },
        {
          type: 'category',
          label: 'Help Desk',
          link: {
            type: 'doc',
            id: 'administration/help-desk/index',
          },
          items: ['administration/help-desk/operations'],
        },
        {
          type: 'category',
          label: 'Audit & Compliance',
          link: {
            type: 'doc',
            id: 'administration/audit-history/index',
          },
          items: [],
        },
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      link: {
        type: 'generated-index',
        title: 'Automation',
        description: 'Automate GroupID operations using Management Shell and APIs.',
      },
      items: [
        {
          type: 'category',
          label: 'Management Shell',
          link: {
            type: 'doc',
            id: 'automation/management-shell/index',
          },
          items: ['automation/management-shell/getting-started', 'automation/management-shell/cmdlet-reference'],
        },
        {
          type: 'category',
          label: 'APIs',
          link: {
            type: 'doc',
            id: 'automation/apis/index',
          },
          items: ['automation/apis/rest-api-reference'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/release-notes'],
    },
  ],
};

module.exports = sidebars;
