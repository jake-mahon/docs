// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  activityMonitor71Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Activity Monitor 7.1',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/whats-new',
        'getting-started/requirements',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/overview',
        'installation/application',
        'installation/agents',
        'installation/upgrade',
        'installation/removal',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'configuration/active-directory',
        'configuration/windows-file-server',
        {
          type: 'category',
          label: 'Storage Platforms',
          items: [
            'configuration/storage-platforms/dell-emc',
            'configuration/storage-platforms/hitachi',
            'configuration/storage-platforms/nasuni',
            'configuration/storage-platforms/netapp',
            'configuration/storage-platforms/nutanix',
            'configuration/storage-platforms/panzura',
            'configuration/storage-platforms/qumulo',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Platforms',
          items: [
            'configuration/cloud-platforms/entra-id',
            'configuration/cloud-platforms/exchange-online',
            'configuration/cloud-platforms/sharepoint-online',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: ['configuration/databases/sharepoint', 'configuration/databases/sql-server'],
        },
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
          label: 'Agents',
          items: ['administration/agents/manage-agents', 'administration/agents/agent-properties'],
        },
        {
          type: 'category',
          label: 'Monitored Resources',
          items: [
            'administration/monitored-resources/domains',
            'administration/monitored-resources/hosts',
            'administration/monitored-resources/resource-properties',
          ],
        },
        {
          type: 'category',
          label: 'Outputs and Logging',
          items: [
            'administration/outputs-and-logging/log-files',
            'administration/outputs-and-logging/syslog',
            'administration/outputs-and-logging/filtering-and-exclusions',
            'administration/outputs-and-logging/threat-manager',
          ],
        },
        {
          type: 'category',
          label: 'Search and Query',
          items: [
            'administration/search-and-query/overview',
            'administration/search-and-query/query-reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/overview',
        {
          type: 'category',
          label: 'SIEM',
          items: ['integrations/siem/qradar', 'integrations/siem/splunk'],
        },
        {
          type: 'category',
          label: 'REST API',
          items: [
            'integrations/rest-api/overview',
            'integrations/rest-api/resources',
            'integrations/rest-api/security',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/overview',
        'troubleshooting/common-issues',
        'troubleshooting/performance-monitoring',
        'troubleshooting/trace-logs',
        'troubleshooting/backup-and-restore',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: ['reference/file-output-formats'],
    },
  ],
};

export default sidebars;
