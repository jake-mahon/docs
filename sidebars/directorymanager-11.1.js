// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  directoryManagerSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Directory Manager Overview',
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/introduction',
        'getting-started/whats-new',
        'getting-started/concepts-overview',
        'getting-started/quick-start-guide',
      ],
    },
    {
      type: 'category',
      label: '📦 Installation',
      collapsed: true,
      items: [
        'installation/index',
        'installation/system-requirements',
        'installation/installation-guide',
        'installation/upgrade-guide',
        'installation/security-configuration',
        'installation/backup-restore',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Configuration',
      collapsed: true,
      items: [
        'configuration/index',
        'configuration/initial-setup',
        {
          type: 'category',
          label: 'Identity Stores',
          items: [
            'configuration/identity-stores/index',
            'configuration/identity-stores/active-directory',
            'configuration/identity-stores/entra-id',
            'configuration/identity-stores/ldap-directories',
            'configuration/identity-stores/external-databases',
          ],
        },
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'configuration/authentication/index',
            'configuration/authentication/saml-configuration',
            'configuration/authentication/identity-provider-setup',
            'configuration/authentication/service-provider-setup',
          ],
        },
        'configuration/security-roles',
        'configuration/notifications',
        'configuration/scheduled-tasks',
      ],
    },
    {
      type: 'category',
      label: '👤 User Management',
      collapsed: true,
      items: [
        'user-management/index',
        'user-management/creating-users',
        'user-management/managing-users',
        'user-management/user-properties',
        'user-management/user-lifecycle',
        'user-management/contacts',
        'user-management/mailboxes',
      ],
    },
    {
      type: 'category',
      label: '👥 Group Management',
      collapsed: true,
      items: [
        'group-management/index',
        'group-management/creating-groups',
        'group-management/managing-groups',
        {
          type: 'category',
          label: 'Group Types',
          items: [
            'group-management/group-types/index',
            'group-management/group-types/active-directory-groups',
            'group-management/group-types/entra-id-groups',
            'group-management/group-types/smart-groups',
            'group-management/group-types/dynasty-groups',
            'group-management/group-types/teams-groups',
          ],
        },
        'group-management/membership-management',
        'group-management/group-lifecycle',
      ],
    },
    {
      type: 'category',
      label: '🔐 Entitlements',
      collapsed: true,
      items: [
        'entitlements/index',
        'entitlements/entitlement-overview',
        'entitlements/configuring-entitlements',
        'entitlements/active-directory-entitlements',
        'entitlements/entra-id-entitlements',
      ],
    },
    {
      type: 'category',
      label: '🔄 Workflows',
      collapsed: true,
      items: [
        'workflows/index',
        'workflows/workflow-basics',
        'workflows/creating-workflows',
        'workflows/approval-processes',
        'workflows/workflow-examples',
      ],
    },
    {
      type: 'category',
      label: '🔁 Synchronization',
      collapsed: true,
      items: [
        'synchronization/index',
        'synchronization/sync-overview',
        'synchronization/sync-jobs',
        'synchronization/collections',
        'synchronization/transformations',
        'synchronization/scripting',
      ],
    },
    {
      type: 'category',
      label: '🌐 Portal Guide',
      collapsed: true,
      items: [
        'portal-guide/index',
        'portal-guide/accessing-portal',
        'portal-guide/dashboard',
        'portal-guide/search-functionality',
        'portal-guide/user-tasks',
        'portal-guide/group-tasks',
        'portal-guide/reports',
        'portal-guide/self-service-features',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Admin Center Guide',
      collapsed: true,
      items: [
        'admin-center-guide/index',
        'admin-center-guide/accessing-admin-center',
        'admin-center-guide/data-sources',
        'admin-center-guide/portal-customization',
        'admin-center-guide/helpdesk-operations',
        'admin-center-guide/system-monitoring',
      ],
    },
    {
      type: 'category',
      label: '🔑 Self-Service Password Reset',
      collapsed: true,
      items: [
        'self-service-password-reset/index',
        'self-service-password-reset/sspr-configuration',
        'self-service-password-reset/user-guide',
      ],
    },
    {
      type: 'category',
      label: '🔌 API Reference',
      collapsed: true,
      items: [
        'api-reference/index',
        'api-reference/authentication',
        {
          type: 'category',
          label: 'Users',
          items: [
            'api-reference/users/index',
            'api-reference/users/user-endpoints',
            'api-reference/users/user-examples',
          ],
        },
        {
          type: 'category',
          label: 'Groups',
          items: [
            'api-reference/groups/index',
            'api-reference/groups/group-endpoints',
            'api-reference/groups/group-examples',
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          items: ['api-reference/workflows/index', 'api-reference/workflows/workflow-endpoints'],
        },
        {
          type: 'category',
          label: 'Data Sources',
          items: [
            'api-reference/data-sources/index',
            'api-reference/data-sources/data-source-endpoints',
          ],
        },
        'api-reference/common-errors',
      ],
    },
    {
      type: 'category',
      label: '💻 PowerShell Reference',
      collapsed: true,
      items: [
        'powershell-reference/index',
        'powershell-reference/getting-started',
        'powershell-reference/connection-management',
        {
          type: 'category',
          label: 'User Cmdlets',
          items: [
            'powershell-reference/user-cmdlets/index',
            'powershell-reference/user-cmdlets/user-commands',
          ],
        },
        {
          type: 'category',
          label: 'Group Cmdlets',
          items: [
            'powershell-reference/group-cmdlets/index',
            'powershell-reference/group-cmdlets/group-commands',
          ],
        },
        {
          type: 'category',
          label: 'Contact Cmdlets',
          items: [
            'powershell-reference/contact-cmdlets/index',
            'powershell-reference/contact-cmdlets/contact-commands',
          ],
        },
        'powershell-reference/examples',
      ],
    },
    {
      type: 'category',
      label: '🔗 Integrations',
      collapsed: true,
      items: [
        'integrations/index',
        'integrations/active-directory',
        'integrations/entra-id',
        'integrations/exchange-online',
        'integrations/sms-gateways',
        'integrations/external-systems',
      ],
    },
    {
      type: 'category',
      label: '🐛 Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/index',
        'troubleshooting/common-issues',
        'troubleshooting/error-messages',
        'troubleshooting/performance-tuning',
        'troubleshooting/logs-diagnostics',
      ],
    },
    {
      type: 'category',
      label: '📚 Reference',
      collapsed: true,
      items: [
        'reference/index',
        'reference/permissions-reference',
        'reference/database-schema',
        'reference/glossary',
        'reference/version-history',
      ],
    },
  ],
};

module.exports = sidebars;
