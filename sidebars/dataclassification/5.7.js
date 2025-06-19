// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  dataclassification57Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Data Classification 5.7',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/what-is-ndc',
        'getting-started/whats-new',
        {
          type: 'category',
          label: 'Requirements',
          items: [
            'getting-started/requirements/index',
            'getting-started/requirements/hardware',
            'getting-started/requirements/software',
            'getting-started/requirements/accounts',
            'getting-started/requirements/databases',
            'getting-started/requirements/supported-content',
            'getting-started/requirements/upgrade-guide',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/index',
        'installation/deployment-overview',
        'installation/deployment-checklist',
        'installation/cloud-deployment',
        'installation/server-and-client',
        'installation/scalability',
        {
          type: 'category',
          label: 'Initial Configuration',
          items: [
            'installation/initial-configuration/index',
            'installation/initial-configuration/modes',
            'installation/initial-configuration/processing-settings',
            'installation/initial-configuration/review-config',
            'installation/initial-configuration/security',
            'installation/initial-configuration/health-alerts',
            'installation/initial-configuration/taxonomies',
          ],
        },
        {
          type: 'category',
          label: 'Virtual Appliance',
          items: [
            'installation/virtual-appliance/index',
            'installation/virtual-appliance/system-requirements',
            'installation/virtual-appliance/configure',
            'installation/virtual-appliance/import-hyperv',
            'installation/virtual-appliance/import-vmware',
          ],
        },
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
          label: 'Core Settings',
          items: [
            'configuration/core-settings/index',
            'configuration/core-settings/general-options',
            'configuration/core-settings/engine-options',
            'configuration/core-settings/administration',
            'configuration/core-settings/collector',
            'configuration/core-settings/classifier',
            'configuration/core-settings/concept-classifier',
            'configuration/core-settings/indexer',
            'configuration/core-settings/monitored-content',
            'configuration/core-settings/system',
          ],
        },
        {
          type: 'category',
          label: 'Infrastructure',
          items: [
            'configuration/infrastructure/index',
            {
              type: 'category',
              label: 'Exchange',
              items: [
                'configuration/infrastructure/exchange/index',
                'configuration/infrastructure/exchange/exchange-online-mfa',
                'configuration/infrastructure/exchange/exchange-server',
              ],
            },
            {
              type: 'category',
              label: 'SharePoint',
              items: [
                'configuration/infrastructure/sharepoint/index',
                'configuration/infrastructure/sharepoint/defaults',
                'configuration/infrastructure/sharepoint/modern-auth',
                'configuration/infrastructure/sharepoint/subsite-and-list',
                'configuration/infrastructure/sharepoint/tagging',
                'configuration/infrastructure/sharepoint/tenancy',
              ],
            },
            {
              type: 'category',
              label: 'Cloud Storage',
              items: [
                'configuration/infrastructure/cloud-storage/index',
                'configuration/infrastructure/cloud-storage/box',
                'configuration/infrastructure/cloud-storage/dropbox',
                'configuration/infrastructure/cloud-storage/google-drive',
              ],
            },
            'configuration/infrastructure/file-systems',
          ],
        },
        {
          type: 'category',
          label: 'System Settings',
          items: [
            'configuration/system-settings/index',
            'configuration/system-settings/communication',
            'configuration/system-settings/metadata',
            'configuration/system-settings/licensing',
            'configuration/system-settings/text-handling',
            'configuration/system-settings/language-stemming',
            'configuration/system-settings/redaction',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            'configuration/security/index',
            'configuration/security/user-management',
            'configuration/security/password-manager',
            'configuration/security/secure-ndc',
            'configuration/security/web-service-security',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Content Sources',
      collapsed: true,
      items: [
        'content-sources/index',
        'content-sources/add-source',
        'content-sources/manage-sources',
        'content-sources/view-content',
        'content-sources/tagging',
        'content-sources/advanced-configuration',
        {
          type: 'category',
          label: 'File Systems',
          items: [
            'content-sources/file-systems/index',
            'content-sources/file-systems/add-file-system',
            'content-sources/file-systems/manage-file-system',
          ],
        },
        {
          type: 'category',
          label: 'SharePoint',
          items: [
            'content-sources/sharepoint/index',
            'content-sources/sharepoint/sharepoint-online',
            'content-sources/sharepoint/templates',
            'content-sources/sharepoint/exclusions',
            'content-sources/sharepoint/remote-event-receivers',
            'content-sources/sharepoint/review-dashboard',
          ],
        },
        {
          type: 'category',
          label: 'Exchange',
          items: [
            'content-sources/exchange/index',
            'content-sources/exchange/mailbox',
            'content-sources/exchange/server',
            'content-sources/exchange/outlook-archive',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: [
            'content-sources/databases/index',
            'content-sources/databases/add-database',
            'content-sources/databases/configuration-wizard',
            'content-sources/databases/manage-database',
          ],
        },
        {
          type: 'category',
          label: 'SQL Server',
          items: [
            'content-sources/sql-server/index',
            'content-sources/sql-server/mssql',
            'content-sources/sql-server/oracle',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Storage',
          items: [
            'content-sources/cloud-storage/index',
            {
              type: 'category',
              label: 'Box',
              items: [
                'content-sources/cloud-storage/box/add',
                'content-sources/cloud-storage/box/manage',
              ],
            },
            {
              type: 'category',
              label: 'Dropbox',
              items: [
                'content-sources/cloud-storage/dropbox/add',
                'content-sources/cloud-storage/dropbox/manage',
              ],
            },
            {
              type: 'category',
              label: 'Google Drive',
              items: [
                'content-sources/cloud-storage/google-drive/add',
                'content-sources/cloud-storage/google-drive/manage',
              ],
            },
          ],
        },
        'content-sources/content-server',
        {
          type: 'category',
          label: 'Source Groups',
          items: [
            'content-sources/source-groups/index',
            {
              type: 'category',
              label: 'Dynamic Groups',
              items: [
                'content-sources/source-groups/dynamic-groups/index',
                'content-sources/source-groups/dynamic-groups/exchange',
                'content-sources/source-groups/dynamic-groups/file',
                'content-sources/source-groups/dynamic-groups/google-drive',
                'content-sources/source-groups/dynamic-groups/sharepoint',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Taxonomies',
      collapsed: true,
      items: [
        'taxonomies/index',
        'taxonomies/create-taxonomy',
        'taxonomies/manage-taxonomies',
        'taxonomies/browse-taxonomies',
        'taxonomies/search-taxonomies',
        {
          type: 'category',
          label: 'Import/Export',
          items: [
            'taxonomies/import-export/index',
            'taxonomies/import-export/import',
            'taxonomies/import-export/bulk-import',
            'taxonomies/import-export/export-results',
          ],
        },
        {
          type: 'category',
          label: 'Clues',
          items: [
            'taxonomies/clues/index',
            'taxonomies/clues/add-clue',
            'taxonomies/clues/manage-clues',
            'taxonomies/clues/clue-types',
            'taxonomies/clues/languages',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'taxonomies/configuration/index',
            'taxonomies/configuration/settings',
            'taxonomies/configuration/global-settings',
            'taxonomies/configuration/term-settings',
            'taxonomies/configuration/additional-config',
            'taxonomies/configuration/calculations',
            'taxonomies/configuration/multi-user',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'taxonomies/advanced/index',
            'taxonomies/advanced/classifications',
            'taxonomies/advanced/labels',
            'taxonomies/advanced/suggestions',
            'taxonomies/advanced/related',
            'taxonomies/advanced/working-set',
            'taxonomies/advanced/search-index',
            'taxonomies/advanced/write-classifications',
          ],
        },
        'taxonomies/built-in-taxonomies',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      collapsed: true,
      items: [
        'workflows/index',
        {
          type: 'category',
          label: 'Create Workflow',
          items: [
            'workflows/create-workflow/index',
            'workflows/create-workflow/select-content-type',
            'workflows/create-workflow/select-action',
            'workflows/create-workflow/specify-conditions',
            'workflows/create-workflow/set-name-enable',
          ],
        },
        'workflows/manage-workflows',
        {
          type: 'category',
          label: 'Actions',
          items: [
            'workflows/actions/index',
            'workflows/actions/available-actions',
            'workflows/actions/email-alert',
            'workflows/actions/migrate-document',
            'workflows/actions/modify-mip-labels',
            'workflows/actions/update-permissions',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Configuration',
          items: [
            'workflows/advanced-configuration/index',
            'workflows/advanced-configuration/classification',
            'workflows/advanced-configuration/content-server',
            'workflows/advanced-configuration/exchange',
            'workflows/advanced-configuration/files',
            'workflows/advanced-configuration/migration',
            'workflows/advanced-configuration/sharepoint',
          ],
        },
        {
          type: 'category',
          label: 'MIP Labels',
          items: [
            'workflows/mip-labels/index',
            'workflows/mip-labels/configure-infrastructure',
            'workflows/mip-labels/configure-ndc',
          ],
        },
        'workflows/migration-destinations',
        'workflows/sharepoint-content-hubs',
        'workflows/plugins',
        'workflows/run-log',
      ],
    },
    {
      type: 'category',
      label: 'Reporting',
      collapsed: true,
      items: [
        'reporting/index',
        {
          type: 'category',
          label: 'Dashboards',
          items: [
            'reporting/dashboards/index',
            'reporting/dashboards/overview-dashboard',
            'reporting/dashboards/content-distribution',
          ],
        },
        {
          type: 'category',
          label: 'Built-in Reports',
          items: [
            'reporting/built-in-reports/index',
            'reporting/built-in-reports/review-reports',
            'reporting/built-in-reports/classification-reports',
            'reporting/built-in-reports/clue-building-reports',
            'reporting/built-in-reports/document-reports',
            'reporting/built-in-reports/system-reports',
            'reporting/built-in-reports/top-charts',
          ],
        },
        {
          type: 'category',
          label: 'Data Analysis',
          items: ['reporting/data-analysis/index', 'reporting/data-analysis/capabilities'],
        },
        {
          type: 'category',
          label: 'Custom Reports',
          items: ['reporting/custom-reports/index', 'reporting/custom-reports/queued-reports'],
        },
        'reporting/manage-reports',
        'reporting/review-reports',
        {
          type: 'category',
          label: 'Subscriptions',
          items: ['reporting/subscriptions/index', 'reporting/subscriptions/manage-subscriptions'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Subject Requests',
      collapsed: true,
      items: [
        'data-subject-requests/index',
        'data-subject-requests/create-search-requests',
        'data-subject-requests/roles',
        'data-subject-requests/searches',
        'data-subject-requests/settings',
        'data-subject-requests/view-results',
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      collapsed: true,
      items: [
        'utilities/index',
        'utilities/configuration-backup',
        {
          type: 'category',
          label: 'Index Maintenance',
          items: [
            'utilities/index-maintenance/index',
            'utilities/index-maintenance/step-1',
            'utilities/index-maintenance/step-2',
            'utilities/index-maintenance/step-3',
            'utilities/index-maintenance/step-4',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'administration',
      label: 'Administration',
    },
  ],
};

export default sidebars;
