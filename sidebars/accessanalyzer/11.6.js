// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  accessanalyzer116Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Access Analyzer 11.6',
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/whats-new',
        'getting-started/quick-start',
        {
          type: 'category',
          label: 'Requirements',
          items: [
            'getting-started/requirements/system-requirements',
            'getting-started/requirements/solutions-requirements',
            'getting-started/requirements/target-requirements',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '⚙️ Installation',
      collapsed: true,
      items: [
        'installation/overview',
        {
          type: 'category',
          label: 'Application',
          items: [
            'installation/application/install',
            'installation/application/upgrade',
            'installation/application/database-setup',
            'installation/application/license',
            'installation/application/first-launch',
          ],
        },
        {
          type: 'category',
          label: 'Filesystem Proxy',
          items: [
            'installation/filesystem-proxy/install',
            'installation/filesystem-proxy/upgrade',
            'installation/filesystem-proxy/configure',
            'installation/filesystem-proxy/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'SharePoint Agent',
          items: ['installation/sharepoint-agent/install', 'installation/sharepoint-agent/upgrade'],
        },
        {
          type: 'category',
          label: 'Sensitive Data Discovery',
          items: [
            'installation/sensitive-data-discovery/install',
            'installation/sensitive-data-discovery/upgrade',
          ],
        },
        {
          type: 'category',
          label: 'Reports Configuration',
          items: [
            'installation/reports-configuration/sso-setup',
            'installation/reports-configuration/authentication',
            'installation/reports-configuration/security',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🛡️ Administration',
      collapsed: true,
      items: [
        'administration/overview',
        'administration/navigation',
        {
          type: 'category',
          label: 'Settings',
          items: [
            'administration/settings/application',
            'administration/settings/connections',
            'administration/settings/storage',
            'administration/settings/notifications',
            'administration/settings/exchange',
            'administration/settings/reporting',
            'administration/settings/schedule',
            'administration/settings/service-now',
            'administration/settings/sensitive-data-criteria',
          ],
        },
        {
          type: 'category',
          label: 'Access Control',
          items: [
            'administration/access-control/role-based-access',
            'administration/access-control/rest-api',
            'administration/access-control/scheduled-service-account',
          ],
        },
        {
          type: 'category',
          label: 'Jobs and Scheduling',
          items: [
            'administration/jobs-and-scheduling/job-management',
            'administration/jobs-and-scheduling/job-groups',
            'administration/jobs-and-scheduling/scheduling',
            'administration/jobs-and-scheduling/instant-jobs',
            'administration/jobs-and-scheduling/running-instances',
          ],
        },
        {
          type: 'category',
          label: 'Host Management',
          items: [
            'administration/host-management/discovery',
            'administration/host-management/inventory',
            'administration/host-management/management',
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
          items: [
            'administration/reporting/create-reports',
            'administration/reporting/edit-reports',
            'administration/reporting/interactive-grids',
            'administration/reporting/tags',
          ],
        },
        {
          type: 'category',
          label: 'Maintenance',
          items: [
            'administration/maintenance/best-practices',
            'administration/maintenance/backup-recovery',
            'administration/maintenance/antivirus-exclusions',
            'administration/maintenance/troubleshooting',
            'administration/maintenance/update-passwords',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📊 Data Collection',
      collapsed: true,
      items: [
        'data-collection/overview',
        {
          type: 'category',
          label: 'Active Directory',
          items: [
            'data-collection/active-directory/inventory',
            'data-collection/active-directory/permissions',
            'data-collection/active-directory/activity',
            'data-collection/active-directory/configuration',
          ],
        },
        {
          type: 'category',
          label: 'Entra ID',
          items: ['data-collection/entra-id/inventory', 'data-collection/entra-id/configuration'],
        },
        {
          type: 'category',
          label: 'File Systems',
          items: [
            'data-collection/file-systems/windows',
            'data-collection/file-systems/unix',
            'data-collection/file-systems/nas-systems',
            'data-collection/file-systems/configuration',
          ],
        },
        {
          type: 'category',
          label: 'Exchange',
          items: [
            'data-collection/exchange/mailbox',
            'data-collection/exchange/public-folders',
            'data-collection/exchange/metrics',
            'data-collection/exchange/configuration',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: [
            'data-collection/databases/sql-server',
            'data-collection/databases/oracle',
            'data-collection/databases/mysql',
            'data-collection/databases/postgresql',
            'data-collection/databases/mongodb',
            'data-collection/databases/db2',
            'data-collection/databases/redshift',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Platforms',
          items: [
            'data-collection/cloud-platforms/aws',
            'data-collection/cloud-platforms/azure',
            'data-collection/cloud-platforms/box',
            'data-collection/cloud-platforms/dropbox',
          ],
        },
        {
          type: 'category',
          label: 'SharePoint',
          items: ['data-collection/sharepoint/on-premises', 'data-collection/sharepoint/online'],
        },
        {
          type: 'category',
          label: 'Custom Collectors',
          items: [
            'data-collection/custom-collectors/powershell',
            'data-collection/custom-collectors/command-line',
            'data-collection/custom-collectors/scripting',
            'data-collection/custom-collectors/ldap',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🔍 Analysis and Actions',
      collapsed: true,
      items: [
        'analysis-and-actions/overview',
        {
          type: 'category',
          label: 'Analysis',
          items: [
            'analysis-and-actions/analysis/business-rules',
            'analysis-and-actions/analysis/change-detection',
            'analysis-and-actions/analysis/notifications',
            'analysis-and-actions/analysis/sql-views',
            'analysis-and-actions/analysis/scripting',
          ],
        },
        {
          type: 'category',
          label: 'Actions',
          items: [
            'analysis-and-actions/actions/active-directory',
            'analysis-and-actions/actions/file-system',
            'analysis-and-actions/actions/mailbox',
            'analysis-and-actions/actions/public-folder',
            'analysis-and-actions/actions/registry',
            'analysis-and-actions/actions/powershell',
            'analysis-and-actions/actions/survey',
            'analysis-and-actions/actions/send-mail',
            'analysis-and-actions/actions/service-now',
            'analysis-and-actions/actions/web-request',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '💡 Solutions',
      collapsed: true,
      items: [
        'solutions/overview',
        {
          type: 'category',
          label: 'Active Directory',
          items: [
            'solutions/active-directory/security-assessment',
            'solutions/active-directory/inventory-reports',
            'solutions/active-directory/permissions-analysis',
            'solutions/active-directory/cleanup-operations',
            'solutions/active-directory/activity-monitoring',
            'solutions/active-directory/recommended-reports',
          ],
        },
        {
          type: 'category',
          label: 'Entra ID',
          items: [
            'solutions/entra-id/inventory-reports',
            'solutions/entra-id/group-analysis',
            'solutions/entra-id/user-analysis',
            'solutions/entra-id/recommended-reports',
          ],
        },
        {
          type: 'category',
          label: 'File Systems',
          items: [
            'solutions/file-systems/security-assessment',
            'solutions/file-systems/permissions-analysis',
            'solutions/file-systems/activity-monitoring',
            'solutions/file-systems/content-analysis',
            'solutions/file-systems/cleanup-operations',
            'solutions/file-systems/resource-based-groups',
            'solutions/file-systems/recommended-reports',
          ],
        },
        {
          type: 'category',
          label: 'Exchange',
          items: [
            'solutions/exchange/mailbox-analysis',
            'solutions/exchange/public-folder-analysis',
            'solutions/exchange/metrics-analysis',
            'solutions/exchange/distribution-lists',
            'solutions/exchange/sensitive-data',
            'solutions/exchange/recommended-reports',
          ],
        },
        {
          type: 'category',
          label: 'SharePoint',
          items: [
            'solutions/sharepoint/permissions-analysis',
            'solutions/sharepoint/activity-monitoring',
            'solutions/sharepoint/content-analysis',
            'solutions/sharepoint/sensitive-data',
            'solutions/sharepoint/recommended-reports',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: [
            'solutions/databases/sql-server-analysis',
            'solutions/databases/oracle-analysis',
            'solutions/databases/mysql-analysis',
            'solutions/databases/postgresql-analysis',
            'solutions/databases/mongodb-analysis',
            'solutions/databases/db2-analysis',
            'solutions/databases/redshift-analysis',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Platforms',
          items: [
            'solutions/cloud-platforms/aws-analysis',
            'solutions/cloud-platforms/box-analysis',
            'solutions/cloud-platforms/dropbox-analysis',
          ],
        },
        {
          type: 'category',
          label: 'Cross-Platform',
          items: [
            'solutions/cross-platform/anyid-integration',
            'solutions/cross-platform/nis-inventory',
            'solutions/cross-platform/sensitive-data-discovery',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📋 Configuration Guides',
      collapsed: true,
      items: [
        'configuration-guides/overview',
        {
          type: 'category',
          label: 'Directory Services',
          items: [
            'configuration-guides/directory-services/active-directory',
            'configuration-guides/directory-services/entra-id',
          ],
        },
        {
          type: 'category',
          label: 'Storage Systems',
          items: [
            'configuration-guides/storage-systems/windows-file-systems',
            'configuration-guides/storage-systems/dell-powerscale',
            'configuration-guides/storage-systems/dell-unity',
            'configuration-guides/storage-systems/dell-celerra-vnx',
            'configuration-guides/storage-systems/netapp-7mode',
            'configuration-guides/storage-systems/netapp-cmode',
            'configuration-guides/storage-systems/hitachi',
            'configuration-guides/storage-systems/nasuni',
            'configuration-guides/storage-systems/nutanix',
            'configuration-guides/storage-systems/qumulo',
          ],
        },
        {
          type: 'category',
          label: 'Collaboration',
          items: [
            'configuration-guides/collaboration/sharepoint',
            'configuration-guides/collaboration/sharepoint-online',
            'configuration-guides/collaboration/exchange-online',
          ],
        },
        {
          type: 'category',
          label: 'StealthAudit',
          items: ['configuration-guides/stealthaudit/configuration'],
        },
      ],
    },
    {
      type: 'category',
      label: '🔒 Security and Compliance',
      collapsed: true,
      items: [
        'security-and-compliance/overview',
        {
          type: 'category',
          label: 'Sensitive Data Discovery',
          items: [
            'security-and-compliance/sensitive-data-discovery/criteria-editor',
            'security-and-compliance/sensitive-data-discovery/system-criteria',
            'security-and-compliance/sensitive-data-discovery/exempted-extensions',
            'security-and-compliance/sensitive-data-discovery/metadata-tags',
            'security-and-compliance/sensitive-data-discovery/supported-formats',
          ],
        },
        {
          type: 'category',
          label: 'Change-Driven Security Assessment',
          items: [
            'security-and-compliance/change-driven-security-assessment/overview',
            'security-and-compliance/change-driven-security-assessment/job-configuration',
            'security-and-compliance/change-driven-security-assessment/presentation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Reference',
      collapsed: true,
      items: [
        'reference/permission-matrix',
        'reference/instant-jobs-reference',
        'reference/api-reference',
        'reference/troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
