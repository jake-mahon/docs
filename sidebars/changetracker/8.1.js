// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  changetracker81Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'ChangeTracker 8.1',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/quick-start',
        'getting-started/whats-new',
      ],
    },
    {
      type: 'category',
      label: 'Installation & Deployment',
      collapsed: true,
      items: [
        'installation-deployment/overview',
        'installation-deployment/hub-installation',
        {
          type: 'category',
          label: 'Database Configuration',
          items: [
            'installation-deployment/database-configuration/overview',
            'installation-deployment/database-configuration/custom-path-linux',
            'installation-deployment/database-configuration/custom-path-windows',
          ],
        },
        {
          type: 'category',
          label: 'Agent Installation',
          items: [
            'installation-deployment/agent-installation/overview',
            'installation-deployment/agent-installation/windows',
            'installation-deployment/agent-installation/linux',
            'installation-deployment/agent-installation/aix',
            'installation-deployment/agent-installation/solaris',
            'installation-deployment/agent-installation/command-line-deployment',
            'installation-deployment/agent-installation/hub-details-configuration',
            'installation-deployment/agent-installation/rolling-log-files',
            'installation-deployment/agent-installation/troubleshooting',
            'installation-deployment/agent-installation/upgrade',
            'installation-deployment/agent-installation/first-run',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'configuration/overview',
        {
          type: 'category',
          label: 'System Settings',
          items: [
            'configuration/system-settings/overview',
            'configuration/system-settings/general-settings',
            'configuration/system-settings/performance-tuning',
            'configuration/system-settings/license-management',
            'configuration/system-settings/settings-glossary',
          ],
        },
        {
          type: 'category',
          label: 'Agent Configuration',
          items: [
            'configuration/agent-configuration/overview',
            'configuration/agent-configuration/agent-settings',
            'configuration/agent-configuration/credential-rotation',
            'configuration/agent-configuration/agent-updates',
            'configuration/agent-configuration/allowed-commands',
          ],
        },
        {
          type: 'category',
          label: 'Credentials Management',
          items: [
            'configuration/credentials-management/overview',
            'configuration/credentials-management/notification-messages',
          ],
        },
        {
          type: 'category',
          label: 'Device Management',
          items: [
            'configuration/device-management/overview',
            'configuration/device-management/device-groups',
            'configuration/device-management/agents-and-devices',
          ],
        },
        {
          type: 'category',
          label: 'Policy Templates',
          items: [
            'configuration/policy-templates/overview',
            'configuration/policy-templates/policy-administration',
            'configuration/policy-templates/create-edit-policies',
            {
              type: 'category',
              label: 'File Monitoring',
              items: [
                'configuration/policy-templates/file-monitoring/file-integrity-monitoring',
                'configuration/policy-templates/file-monitoring/file-contents',
                'configuration/policy-templates/file-monitoring/legacy-fim',
              ],
            },
            {
              type: 'category',
              label: 'System Monitoring',
              items: [
                'configuration/policy-templates/system-monitoring/installed-software',
                'configuration/policy-templates/system-monitoring/processes-services',
                'configuration/policy-templates/system-monitoring/local-users',
                'configuration/policy-templates/system-monitoring/network-ports',
                'configuration/policy-templates/system-monitoring/network-scan',
                'configuration/policy-templates/system-monitoring/security-audit-policies',
              ],
            },
            {
              type: 'category',
              label: 'Advanced Monitoring',
              items: [
                'configuration/policy-templates/advanced-monitoring/registry-monitoring',
                'configuration/policy-templates/advanced-monitoring/process-command-output',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Monitoring & Tracking',
      collapsed: true,
      items: [
        'monitoring-tracking/overview',
        {
          type: 'category',
          label: 'File Integrity Monitoring',
          items: [
            'monitoring-tracking/file-integrity-monitoring/overview',
            'monitoring-tracking/file-integrity-monitoring/match-rules',
            'monitoring-tracking/file-integrity-monitoring/file-folder-rules',
            'monitoring-tracking/file-integrity-monitoring/registry-rules',
          ],
        },
        {
          type: 'category',
          label: 'Agentless Monitoring',
          items: [
            'monitoring-tracking/agentless-monitoring/overview',
            'monitoring-tracking/agentless-monitoring/agentless-cis',
            'monitoring-tracking/agentless-monitoring/agentless-fim-troubleshooting',
            'monitoring-tracking/agentless-monitoring/agentless-scripts',
            'monitoring-tracking/agentless-monitoring/script-configuration',
            'monitoring-tracking/agentless-monitoring/sample-scripts',
            'monitoring-tracking/agentless-monitoring/script-variables',
            'monitoring-tracking/agentless-monitoring/script-variables-notes',
          ],
        },
        {
          type: 'category',
          label: 'Baseline Management',
          items: [
            'monitoring-tracking/baseline-management/overview',
            'monitoring-tracking/baseline-management/baseline-tab',
            'monitoring-tracking/baseline-management/detail-tab',
            'monitoring-tracking/baseline-management/manage-tab',
            'monitoring-tracking/baseline-management/policy-wizard',
            'monitoring-tracking/baseline-management/policy-rule-options',
            'monitoring-tracking/baseline-management/security-change-control',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Tracking',
          items: [
            'monitoring-tracking/cloud-tracking/overview',
            'monitoring-tracking/cloud-tracking/setup-wizard',
            'monitoring-tracking/cloud-tracking/cloud-overview-tab',
            'monitoring-tracking/cloud-tracking/detail-tab',
            'monitoring-tracking/cloud-tracking/policy-tab',
            'monitoring-tracking/cloud-tracking/cloud-reports',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/overview',
        'administration/dashboard',
        {
          type: 'category',
          label: 'Agent Management',
          items: [
            'administration/agent-management/overview',
            'administration/agent-management/agent-performance-metrics',
            'administration/agent-management/live-tracking',
          ],
        },
        'administration/device-operations',
        'administration/alerts-notifications',
        {
          type: 'category',
          label: 'Planned Changes',
          items: [
            'administration/planned-changes/overview',
            'administration/planned-changes/planned-change-administration',
            'administration/planned-changes/planned-change-wizard',
            'administration/planned-changes/operation-closed',
          ],
        },
        {
          type: 'category',
          label: 'Compliance Management',
          items: [
            'administration/compliance-management/overview',
            'administration/compliance-management/compliance-wizard',
            'administration/compliance-management/compliance-templates',
            'administration/compliance-management/compliance-overview',
            'administration/compliance-management/compliance-details',
            'administration/compliance-management/compliance-policy',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reporting & Analytics',
      collapsed: true,
      items: [
        'reporting-analytics/overview',
        {
          type: 'category',
          label: 'Events',
          items: [
            'reporting-analytics/events/overview',
            'reporting-analytics/events/event-filters',
            'reporting-analytics/events/export-reports',
            'reporting-analytics/events/scheduled-reports',
            'reporting-analytics/events/quick-export',
          ],
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'reporting-analytics/reports/overview',
            'reporting-analytics/reports/query-settings',
            'reporting-analytics/reports/report-generation',
          ],
        },
        {
          type: 'category',
          label: 'Dashboards',
          items: ['reporting-analytics/dashboards/dashboard-overview'],
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
          label: 'Netwrix Products',
          items: [
            'integrations/netwrix-products/overview',
            'integrations/netwrix-products/netwrix-auditor',
          ],
        },
        {
          type: 'category',
          label: 'ITSM Integration',
          items: [
            'integrations/itsm-integration/overview',
            'integrations/itsm-integration/sync-service-installation',
            'integrations/itsm-integration/sync-service-administration',
          ],
        },
        'integrations/splunk-integration',
        'integrations/vmware-integration',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: ['api-reference/overview', 'api-reference/agent-api'],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'System Requirements',
          items: [
            'reference/system-requirements/overview',
            'reference/system-requirements/windows-server',
            'reference/system-requirements/os-support-matrix',
            'reference/system-requirements/component-releases',
            'reference/system-requirements/agent-device-ports',
            'reference/system-requirements/express-agent',
            'reference/system-requirements/gen7-agent-windows',
            'reference/system-requirements/gen7-agent-linux',
          ],
        },
        'reference/glossary',
      ],
    },
  ],
};

export default sidebars;
