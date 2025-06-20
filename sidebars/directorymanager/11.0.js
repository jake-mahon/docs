module.exports = {
  directorymanager110: [
    {
      type: 'doc',
      id: 'index',
      label: 'DirectoryManager 11.0',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/requirements',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'getting-started/installation/index',
            'getting-started/installation/preparation-tool',
            'getting-started/installation/install-groupid',
            'getting-started/installation/post-installation',
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          items: [
            'getting-started/upgrade/index',
            'getting-started/upgrade/from-version-9',
            'getting-started/upgrade/from-version-10',
          ],
        },
        'getting-started/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'configuration/index',
        {
          type: 'category',
          label: 'Identity Stores',
          items: [
            'configuration/identity-stores/index',
            'configuration/identity-stores/active-directory',
            'configuration/identity-stores/microsoft-entra-id',
            'configuration/identity-stores/ldap',
            'configuration/identity-stores/google-workspace',
          ],
        },
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'configuration/authentication/index',
            'configuration/authentication/groupid-as-identity-provider',
            'configuration/authentication/groupid-as-service-provider',
            'configuration/authentication/third-party-providers',
          ],
        },
        {
          type: 'category',
          label: 'Data Sources',
          items: [
            'configuration/data-sources/index',
            'configuration/data-sources/databases',
            'configuration/data-sources/files',
            'configuration/data-sources/cloud-services',
          ],
        },
        {
          type: 'category',
          label: 'Services',
          items: [
            'configuration/services/index',
            'configuration/services/portal-configuration',
            'configuration/services/mobile-services',
            'configuration/services/sms-gateway',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: true,
      items: [
        'user-guide/index',
        {
          type: 'category',
          label: 'Portal',
          items: [
            'user-guide/portal/index',
            'user-guide/portal/dashboard',
            'user-guide/portal/navigation',
            'user-guide/portal/toolbar',
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          items: [
            'user-guide/user-management/index',
            'user-guide/user-management/create-users',
            'user-guide/user-management/manage-users',
            'user-guide/user-management/user-properties',
            'user-guide/user-management/user-properties-active-directory',
            'user-guide/user-management/user-properties-azure',
            'user-guide/user-management/user-lifecycle',
          ],
        },
        {
          type: 'category',
          label: 'Group Management',
          items: [
            'user-guide/group-management/index',
            'user-guide/group-management/create-groups',
            'user-guide/group-management/manage-groups',
            'user-guide/group-management/group-properties',
            'user-guide/group-management/smart-groups',
            'user-guide/group-management/dynasties',
            'user-guide/group-management/group-lifecycle',
          ],
        },
        {
          type: 'category',
          label: 'Synchronization',
          items: [
            'user-guide/synchronization/index',
            'user-guide/synchronization/sync-jobs',
            'user-guide/synchronization/transformations',
            'user-guide/synchronization/schedules',
          ],
        },
        {
          type: 'category',
          label: 'Entitlements',
          items: [
            'user-guide/entitlements/index',
            'user-guide/entitlements/access-management',
            'user-guide/entitlements/permissions',
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          items: [
            'user-guide/workflows/index',
            'user-guide/workflows/approval-workflows',
            'user-guide/workflows/automation',
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
          items: [
            'user-guide/reporting/index',
            'user-guide/reporting/built-in-reports',
            'user-guide/reporting/custom-reports',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/index',
        {
          type: 'category',
          label: 'Admin Center',
          items: [
            'administration/admin-center/index',
            'administration/admin-center/security-roles',
            'administration/admin-center/policies',
            'administration/admin-center/notifications',
            'administration/admin-center/system-settings',
          ],
        },
        {
          type: 'category',
          label: 'Help Desk',
          items: [
            'administration/help-desk/index',
            'administration/help-desk/operations',
            'administration/help-desk/delegated-administration',
          ],
        },
        {
          type: 'category',
          label: 'Audit History',
          items: ['administration/audit-history/index', 'administration/audit-history/compliance'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      collapsed: true,
      items: [
        'automation/index',
        {
          type: 'category',
          label: 'Management Shell',
          items: [
            'automation/management-shell/index',
            'automation/management-shell/getting-started',
            'automation/management-shell/cmdlet-reference',
            'automation/management-shell/examples',
          ],
        },
        {
          type: 'category',
          label: 'APIs',
          items: [
            'automation/apis/index',
            'automation/apis/rest-api-reference',
            'automation/apis/authentication',
            'automation/apis/examples',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/index',
        {
          type: 'category',
          label: 'Microsoft 365',
          items: [
            'integrations/microsoft-365/index',
            'integrations/microsoft-365/exchange',
            'integrations/microsoft-365/sharepoint',
            'integrations/microsoft-365/teams',
          ],
        },
        {
          type: 'category',
          label: 'Identity Providers',
          items: [
            'integrations/identity-providers/index',
            'integrations/identity-providers/adfs',
            'integrations/identity-providers/okta',
            'integrations/identity-providers/ping',
            'integrations/identity-providers/onelogin',
          ],
        },
        {
          type: 'category',
          label: 'Third-party',
          items: ['integrations/third-party/index', 'integrations/third-party/scim'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/index',
        'reference/troubleshooting',
        'reference/best-practices',
        'reference/security-guidelines',
        'reference/release-notes',
      ],
    },
  ],
};
