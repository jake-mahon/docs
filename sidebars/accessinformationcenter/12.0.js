// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  accessInformationCenter120: [
    {
      type: 'doc',
      id: 'index',
      label: 'Access Information Center 12.0',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/overview',
        'getting-started/navigation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/index',
        'installation/installation-guide',
        'installation/upgrade-guide',
        'installation/security-hardening',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/index',
        'administration/first-launch',
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'administration/configuration/index',
            'administration/configuration/active-directory',
            'administration/configuration/database',
            'administration/configuration/notifications',
            'administration/configuration/console-access',
            'administration/configuration/license',
            'administration/configuration/diagnostics',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Configuration',
          items: [
            'administration/advanced-configuration/index',
            'administration/advanced-configuration/alias-server',
            'administration/advanced-configuration/email-templates',
            'administration/advanced-configuration/entra-id-sso',
            'administration/advanced-configuration/gmsa',
            'administration/advanced-configuration/timeout-parameters',
            'administration/advanced-configuration/commit-changes',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'administration/troubleshooting/index',
            'administration/troubleshooting/credential-passwords',
            'administration/troubleshooting/delegation',
            'administration/troubleshooting/log-levels',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Access Management',
      items: [
        {
          type: 'category',
          label: 'Access Requests',
          items: [
            'access-management/access-requests/index',
            'access-management/access-requests/request-interface',
            'access-management/access-requests/request-wizard',
            'access-management/access-requests/pending-requests',
            'access-management/access-requests/request-history',
            'access-management/access-requests/email-notifications',
          ],
        },
        {
          type: 'category',
          label: 'Access Portal',
          items: [
            'access-management/access-portal/index',
            'access-management/access-portal/your-access',
          ],
        },
        {
          type: 'category',
          label: 'Resource Owners',
          items: [
            'access-management/resource-owners/index',
            'access-management/resource-owners/owner-portal',
            'access-management/resource-owners/managing-owners',
            'access-management/resource-owners/access-groups',
            'access-management/resource-owners/owner-confirmation',
          ],
        },
        {
          type: 'category',
          label: 'Resource Reviews',
          items: [
            'access-management/resource-reviews/index',
            'access-management/resource-reviews/review-process',
            'access-management/resource-reviews/creating-reviews',
            'access-management/resource-reviews/review-management',
            'access-management/resource-reviews/review-history',
          ],
        },
        {
          type: 'category',
          label: 'Data Grid Operations',
          items: [
            'access-management/data-grid-operations/index',
            'access-management/data-grid-operations/editing-notes',
            'access-management/data-grid-operations/group-membership',
            'access-management/data-grid-operations/removing-changes',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resource Auditing',
      items: [
        'resource-auditing/index',
        'resource-auditing/navigation-guide',
        'resource-auditing/search-and-filters',
        'resource-auditing/icons-reference',
        {
          type: 'category',
          label: 'Change Modeling',
          items: [
            'resource-auditing/change-modeling/index',
            'resource-auditing/change-modeling/modeling-changes',
            'resource-auditing/change-modeling/committing-changes',
            'resource-auditing/change-modeling/clearing-changes',
          ],
        },
        {
          type: 'category',
          label: 'Active Directory',
          items: [
            'resource-auditing/active-directory/index',
            'resource-auditing/active-directory/domain-auditing',
            'resource-auditing/active-directory/user-auditing',
            'resource-auditing/active-directory/group-auditing',
            'resource-auditing/active-directory/computer-auditing',
            'resource-auditing/active-directory/exceptions',
          ],
        },
        {
          type: 'category',
          label: 'File Systems',
          items: [
            'resource-auditing/file-systems/index',
            'resource-auditing/file-systems/server-auditing',
            'resource-auditing/file-systems/share-auditing',
            'resource-auditing/file-systems/permissions-analysis',
            'resource-auditing/file-systems/activity-monitoring',
            'resource-auditing/file-systems/local-policies',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: [
            'resource-auditing/databases/sql-server',
            'resource-auditing/databases/oracle',
            'resource-auditing/databases/mysql',
            'resource-auditing/databases/postgresql',
            'resource-auditing/databases/mongodb',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Storage',
          items: [
            'resource-auditing/cloud-storage/aws-s3',
            'resource-auditing/cloud-storage/sharepoint-online',
            'resource-auditing/cloud-storage/onedrive',
            'resource-auditing/cloud-storage/teams',
            'resource-auditing/cloud-storage/dropbox',
            'resource-auditing/cloud-storage/exchange',
          ],
        },
        {
          type: 'category',
          label: 'Sensitive Content',
          items: [
            'resource-auditing/sensitive-content/index',
            'resource-auditing/sensitive-content/content-detection',
            'resource-auditing/sensitive-content/content-reporting',
          ],
        },
        {
          type: 'category',
          label: 'Flexible Imports',
          items: [
            'resource-auditing/flexible-imports/index',
            'resource-auditing/flexible-imports/import-configuration',
            'resource-auditing/flexible-imports/import-reporting',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
