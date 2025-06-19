// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  dataclassification562: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/how-it-works',
        {
          type: 'category',
          label: 'Requirements',
          items: [
            'getting-started/requirements/system-requirements',
            'getting-started/requirements/account-requirements',
            'getting-started/requirements/supported-content',
          ],
        },
        'getting-started/whats-new',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Planning',
          items: [
            'deployment/planning/deployment-overview',
            'deployment/planning/deployment-modes',
            'deployment/planning/data-storage',
          ],
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            'deployment/installation/installation-guide',
            'deployment/installation/database-setup',
            'deployment/installation/initial-configuration',
          ],
        },
        'deployment/upgrade',
        {
          type: 'category',
          label: 'Appliance',
          items: [
            'deployment/appliance/appliance-overview',
            'deployment/appliance/deploy-vmware',
            'deployment/appliance/deploy-hyperv',
            'deployment/appliance/configure-appliance',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'System Configuration',
          items: [
            'configuration/system-configuration/general-settings',
            'configuration/system-configuration/email-configuration',
            'configuration/system-configuration/language-settings',
            'configuration/system-configuration/licensing',
          ],
        },
        {
          type: 'category',
          label: 'Core Services',
          items: [
            'configuration/core-services/classifier-settings',
            'configuration/core-services/collector-settings',
            'configuration/core-services/indexer-settings',
            'configuration/core-services/processing-settings',
          ],
        },
        {
          type: 'category',
          label: 'Infrastructure',
          items: [
            'configuration/infrastructure/sharepoint-configuration',
            'configuration/infrastructure/exchange-configuration',
            'configuration/infrastructure/cloud-storage-configuration',
            'configuration/infrastructure/file-system-configuration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Sources',
      collapsible: true,
      collapsed: true,
      items: [
        'data-sources/managing-sources',
        {
          type: 'category',
          label: 'File Systems',
          items: [
            'data-sources/file-systems/local-file-system',
            'data-sources/file-systems/network-file-system',
          ],
        },
        {
          type: 'category',
          label: 'Email Systems',
          items: [
            'data-sources/email-systems/exchange-server',
            'data-sources/email-systems/outlook-archives',
          ],
        },
        {
          type: 'category',
          label: 'SharePoint',
          items: [
            'data-sources/sharepoint/sharepoint-server',
            'data-sources/sharepoint/sharepoint-online',
            'data-sources/sharepoint/sharepoint-templates',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Storage',
          items: [
            'data-sources/cloud-storage/google-drive',
            'data-sources/cloud-storage/dropbox',
            'data-sources/cloud-storage/box',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: ['data-sources/databases/database-sources'],
        },
        'data-sources/source-groups',
      ],
    },
    {
      type: 'category',
      label: 'Taxonomies & Classification',
      collapsible: true,
      collapsed: true,
      items: [
        'taxonomies-classification/taxonomies-overview',
        {
          type: 'category',
          label: 'Managing Taxonomies',
          items: [
            'taxonomies-classification/managing-taxonomies/create-taxonomies',
            'taxonomies-classification/managing-taxonomies/taxonomy-settings',
            'taxonomies-classification/managing-taxonomies/bulk-operations',
            'taxonomies-classification/managing-taxonomies/standalone-taxonomies',
          ],
        },
        {
          type: 'category',
          label: 'Clues',
          items: [
            'taxonomies-classification/clues/clue-types',
            'taxonomies-classification/clues/creating-clues',
            'taxonomies-classification/clues/managing-clues',
            'taxonomies-classification/clues/clue-building-reports',
          ],
        },
        {
          type: 'category',
          label: 'Classification',
          items: [
            'taxonomies-classification/classification/auto-classification',
            'taxonomies-classification/classification/metadata-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Search',
          items: [
            'taxonomies-classification/search/searching-content',
            'taxonomies-classification/search/export-results',
            'taxonomies-classification/search/working-sets',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Workflows & Automation',
      collapsible: true,
      collapsed: true,
      items: [
        'workflows-automation/workflows-overview',
        {
          type: 'category',
          label: 'Workflow Management',
          items: [
            'workflows-automation/workflow-management/creating-workflows',
            'workflows-automation/workflow-management/workflow-settings',
            'workflows-automation/workflow-management/workflow-conditions',
            'workflows-automation/workflow-management/workflow-logs',
          ],
        },
        {
          type: 'category',
          label: 'Workflow Actions',
          items: [
            'workflows-automation/workflow-actions/file-actions',
            'workflows-automation/workflow-actions/sharepoint-actions',
            'workflows-automation/workflow-actions/exchange-actions',
            'workflows-automation/workflow-actions/email-notifications',
            'workflows-automation/workflow-actions/migration-actions',
          ],
        },
        {
          type: 'category',
          label: 'MIP Integration',
          items: [
            'workflows-automation/mip-integration/mip-overview',
            'workflows-automation/mip-integration/mip-configuration',
            'workflows-automation/mip-integration/mip-labels',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reporting & Analytics',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Dashboards',
          items: [
            'reporting-analytics/dashboards/overview-dashboard',
            'reporting-analytics/dashboards/content-distribution',
            'reporting-analytics/dashboards/system-reports',
          ],
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'reporting-analytics/reports/built-in-reports',
            'reporting-analytics/reports/classification-reports',
            'reporting-analytics/reports/documentation-reports',
            'reporting-analytics/reports/top-reports',
          ],
        },
        'reporting-analytics/report-subscriptions',
      ],
    },
    {
      type: 'category',
      label: 'Security & Administration',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'User Management',
          items: [
            'security-administration/user-management/users-roles',
            'security-administration/user-management/password-management',
            'security-administration/user-management/dsar-roles',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            'security-administration/security/securing-ndc',
            'security-administration/security/web-service-security',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          items: [
            'security-administration/administration/system-administration',
            'security-administration/administration/backup-restore',
            'security-administration/administration/content-cleanup',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'DSAR',
      collapsible: true,
      collapsed: true,
      items: [
        'dsar/dsar-overview',
        'dsar/dsar-configuration',
        'dsar/dsar-searches',
        'dsar/dsar-results',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: true,
      items: ['reference/revision-history', 'reference/related-documentation'],
    },
  ],
};

export default sidebars;
