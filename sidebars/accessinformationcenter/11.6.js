// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  accessInformationCenter116: [
    {
      type: 'doc',
      id: 'index',
      label: 'Access Information Center 11.6',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/first-launch',
        'getting-started/user-landing',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/overview',
        'installation/requirements',
        'installation/install',
        'installation/secure',
        'installation/upgrade',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/overview',
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'administration/configuration/overview',
            'administration/configuration/active-directory',
            'administration/configuration/database',
            'administration/configuration/console-access',
            'administration/configuration/notifications',
            'administration/configuration/license',
            'administration/configuration/diagnostics',
            'administration/configuration/entra-id-sso',
            'administration/configuration/gmsa',
            'administration/configuration/timeout-parameters',
            'administration/configuration/alias-server',
            'administration/configuration/email-templates',
            'administration/configuration/recommendations',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'administration/troubleshooting/overview',
            'administration/troubleshooting/credential-passwords',
            'administration/troubleshooting/delegation',
            'administration/troubleshooting/log-level',
          ],
        },
        'administration/navigation',
      ],
    },
    {
      type: 'category',
      label: 'Access Management',
      collapsed: true,
      items: [
        'access-management/overview',
        {
          type: 'category',
          label: 'Access Requests',
          items: [
            'access-management/access-requests/overview',
            'access-management/access-requests/request-access',
            'access-management/access-requests/manage-requests',
            'access-management/access-requests/pending-requests',
            'access-management/access-requests/request-history',
            'access-management/access-requests/email-notifications',
          ],
        },
        {
          type: 'category',
          label: 'Resource Owners',
          items: [
            'access-management/resource-owners/overview',
            'access-management/resource-owners/owner-portal',
            'access-management/resource-owners/manage-owners',
            'access-management/resource-owners/access-groups',
            'access-management/resource-owners/email-notifications',
          ],
        },
        {
          type: 'category',
          label: 'Resource Reviews',
          items: [
            'access-management/resource-reviews/overview',
            'access-management/resource-reviews/prerequisites',
            'access-management/resource-reviews/approval-process',
            'access-management/resource-reviews/create-review',
            'access-management/resource-reviews/manage-reviews',
            'access-management/resource-reviews/review-history',
            'access-management/resource-reviews/email-notifications',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resource Audit',
      collapsed: true,
      items: [
        'resource-audit/overview',
        {
          type: 'category',
          label: 'Navigation',
          items: [
            'resource-audit/navigation/overview',
            'resource-audit/navigation/search',
            'resource-audit/navigation/icons',
            'resource-audit/navigation/effective-access',
          ],
        },
        {
          type: 'category',
          label: 'Principals',
          items: [
            'resource-audit/principals/users',
            'resource-audit/principals/groups',
            'resource-audit/principals/computers',
            'resource-audit/principals/entra-id',
          ],
        },
        {
          type: 'category',
          label: 'Active Directory',
          items: [
            'resource-audit/active-directory/overview',
            'resource-audit/active-directory/domain-audit',
            'resource-audit/active-directory/exceptions',
            'resource-audit/active-directory/quick-reference',
          ],
        },
        {
          type: 'category',
          label: 'File Systems',
          items: [
            'resource-audit/file-systems/overview',
            'resource-audit/file-systems/windows-shares',
            'resource-audit/file-systems/nfs-exports',
            'resource-audit/file-systems/local-policies',
            'resource-audit/file-systems/exceptions',
            'resource-audit/file-systems/quick-reference',
          ],
        },
        {
          type: 'category',
          label: 'SharePoint',
          items: [
            'resource-audit/sharepoint/overview',
            'resource-audit/sharepoint/site-collections',
            'resource-audit/sharepoint/onedrive',
            'resource-audit/sharepoint/teams',
            'resource-audit/sharepoint/exceptions',
            'resource-audit/sharepoint/quick-reference',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: [
            'resource-audit/databases/overview',
            'resource-audit/databases/sql-server',
            'resource-audit/databases/oracle',
            'resource-audit/databases/mysql',
            'resource-audit/databases/postgresql',
            'resource-audit/databases/mongodb',
            'resource-audit/databases/quick-reference',
          ],
        },
        {
          type: 'category',
          label: 'Messaging',
          items: [
            'resource-audit/messaging/overview',
            'resource-audit/messaging/exchange',
            'resource-audit/messaging/quick-reference',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Storage',
          items: [
            'resource-audit/cloud-storage/overview',
            'resource-audit/cloud-storage/aws-s3',
            'resource-audit/cloud-storage/dropbox',
            'resource-audit/cloud-storage/quick-reference',
          ],
        },
        {
          type: 'category',
          label: 'Custom Imports',
          items: [
            'resource-audit/custom-imports/overview',
            'resource-audit/custom-imports/flexible-imports',
          ],
        },
        {
          type: 'category',
          label: 'Sensitive Content',
          items: [
            'resource-audit/sensitive-content/overview',
            'resource-audit/sensitive-content/files',
          ],
        },
        {
          type: 'category',
          label: 'Change Modeling',
          items: [
            'resource-audit/change-modeling/overview',
            'resource-audit/change-modeling/model-changes',
            'resource-audit/change-modeling/commit-changes',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/data-grid',
        'reference/edit-notes',
        'reference/group-membership',
        'reference/remove-changes',
      ],
    },
  ],
};

export default sidebars;
