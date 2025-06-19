// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  activityMonitorSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Activity Monitor Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/requirements',
        'getting-started/installation',
        'getting-started/whats-new',
      ],
    },
    {
      type: 'category',
      label: 'Agents',
      collapsed: true,
      items: [
        'agents/index',
        {
          type: 'category',
          label: 'Deployment',
          items: [
            'agents/deployment/active-directory',
            'agents/deployment/linux',
            'agents/deployment/bulk-deployment',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'agents/configuration/connection-settings',
            'agents/configuration/network-and-proxy',
            'agents/configuration/active-directory-settings',
            'agents/configuration/storage-and-archiving',
          ],
        },
        {
          type: 'category',
          label: 'Management',
          items: [
            'agents/management/manual-installation',
            'agents/management/upgrade',
            'agents/management/removal',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Monitored Systems',
      collapsed: true,
      items: [
        'monitored-systems/index',
        {
          type: 'category',
          label: 'Domains',
          items: [
            'monitored-systems/domains/active-directory',
            'monitored-systems/domains/ldap-configuration',
            'monitored-systems/domains/threat-detection',
          ],
        },
        {
          type: 'category',
          label: 'Hosts',
          items: [
            'monitored-systems/hosts/windows',
            'monitored-systems/hosts/entra-id',
            'monitored-systems/hosts/exchange-online',
            'monitored-systems/hosts/sharepoint',
            'monitored-systems/hosts/sharepoint-online',
            'monitored-systems/hosts/sql-server',
          ],
        },
        {
          type: 'category',
          label: 'Storage Systems',
          items: [
            'monitored-systems/storage-systems/dell-systems',
            'monitored-systems/storage-systems/netapp',
            'monitored-systems/storage-systems/hitachi',
            'monitored-systems/storage-systems/nutanix',
            'monitored-systems/storage-systems/panzura',
            'monitored-systems/storage-systems/qumulo',
            'monitored-systems/storage-systems/nasuni',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Collection',
      collapsed: true,
      items: [
        'data-collection/index',
        {
          type: 'category',
          label: 'Outputs',
          items: [
            'data-collection/outputs/log-files',
            'data-collection/outputs/syslog',
            'data-collection/outputs/threat-manager',
          ],
        },
        {
          type: 'category',
          label: 'Filtering',
          items: [
            'data-collection/filtering/path-filters',
            'data-collection/filtering/account-exclusions',
            'data-collection/filtering/process-exclusions',
          ],
        },
        {
          type: 'category',
          label: 'Data Formats',
          items: [
            'data-collection/data-formats/active-directory-format',
            'data-collection/data-formats/file-format',
            'data-collection/data-formats/platform-specific-formats',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Search and Analysis',
      collapsed: true,
      items: [
        'search-and-analysis/index',
        'search-and-analysis/query-syntax',
        'search-and-analysis/search-results',
      ],
    },
    {
      type: 'category',
      label: 'Platform Configuration',
      collapsed: true,
      items: [
        'platform-configuration/index',
        {
          type: 'category',
          label: 'Active Directory',
          items: [
            'platform-configuration/active-directory/activity-monitoring',
            'platform-configuration/active-directory/file-archiving',
            'platform-configuration/active-directory/threat-prevention',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Platforms',
          items: [
            'platform-configuration/cloud-platforms/entra-id',
            'platform-configuration/cloud-platforms/exchange-online',
            'platform-configuration/cloud-platforms/sharepoint-online',
          ],
        },
        {
          type: 'category',
          label: 'Database Systems',
          items: ['platform-configuration/database-systems/sql-server'],
        },
        {
          type: 'category',
          label: 'Storage Platforms',
          items: [
            'platform-configuration/storage-platforms/dell-configuration',
            'platform-configuration/storage-platforms/netapp-configuration',
            'platform-configuration/storage-platforms/hitachi-configuration',
            'platform-configuration/storage-platforms/other-storage',
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
          label: 'SIEM',
          items: ['integrations/siem/qradar', 'integrations/siem/splunk'],
        },
        {
          type: 'category',
          label: 'REST API',
          items: [
            'integrations/rest-api/api-reference',
            'integrations/rest-api/authentication',
            'integrations/rest-api/endpoints',
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
        'administration/backup-and-restore',
        'administration/performance-tuning',
        'administration/troubleshooting',
        'administration/security-settings',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/index',
        'reference/port-requirements',
        'reference/file-formats',
        'reference/antivirus-exclusions',
      ],
    },
  ],
};

export default sidebars;
