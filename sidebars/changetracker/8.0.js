// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  changetracker80Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 ChangeTracker 8.0',
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
          label: 'System Requirements',
          items: [
            'getting-started/system-requirements/overview',
            'getting-started/system-requirements/hub-requirements',
            'getting-started/system-requirements/agent-requirements',
            'getting-started/system-requirements/supported-platforms',
            'getting-started/system-requirements/network-ports',
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
        'installation/hub-installation',
        {
          type: 'category',
          label: 'Database Configuration',
          items: [
            'installation/database-configuration/overview',
            'installation/database-configuration/custom-path-linux',
            'installation/database-configuration/custom-path-windows',
          ],
        },
        {
          type: 'category',
          label: 'Agent Installation',
          items: [
            'installation/agent-installation/overview',
            'installation/agent-installation/windows-installation',
            'installation/agent-installation/linux-installation',
            'installation/agent-installation/aix-installation',
            'installation/agent-installation/solaris-installation',
            'installation/agent-installation/command-line-options',
            'installation/agent-installation/silent-installation',
            'installation/agent-installation/upgrade-process',
            'installation/agent-installation/troubleshooting',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🛠️ Administration',
      collapsed: true,
      items: [
        'administration/overview',
        'administration/dashboard',
        {
          type: 'category',
          label: 'Device Management',
          items: [
            'administration/device-management/overview',
            'administration/device-management/device-groups',
            'administration/device-management/agent-configuration',
            'administration/device-management/agent-updates',
            'administration/device-management/agent-credentials',
            'administration/device-management/performance-metrics',
            'administration/device-management/live-tracking',
          ],
        },
        {
          type: 'category',
          label: 'Policies',
          items: [
            'administration/policies/overview',
            'administration/policies/policy-templates',
            'administration/policies/policy-creation',
            'administration/policies/match-rules',
            'administration/policies/file-integrity-monitoring',
            'administration/policies/registry-monitoring',
            'administration/policies/installed-software',
            'administration/policies/network-monitoring',
            'administration/policies/process-monitoring',
            'administration/policies/security-audit-policies',
            'administration/policies/user-tracking',
          ],
        },
        {
          type: 'category',
          label: 'Alerts & Notifications',
          items: [
            'administration/alerts-notifications/overview',
            'administration/alerts-notifications/alert-configuration',
            'administration/alerts-notifications/notification-messages',
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
          items: [
            'administration/reporting/overview',
            'administration/reporting/report-templates',
            'administration/reporting/scheduled-reports',
            'administration/reporting/export-options',
            'administration/reporting/query-settings',
          ],
        },
        {
          type: 'category',
          label: 'System Settings',
          items: [
            'administration/system-settings/overview',
            'administration/system-settings/general-settings',
            'administration/system-settings/allowed-commands',
            'administration/system-settings/system-configuration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '✨ Features',
      collapsed: true,
      items: [
        'features/overview',
        {
          type: 'category',
          label: 'File Integrity Monitoring',
          items: [
            'features/file-integrity-monitoring/overview',
            'features/file-integrity-monitoring/configuration',
            'features/file-integrity-monitoring/agentless-monitoring',
            'features/file-integrity-monitoring/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Compliance Management',
          items: [
            'features/compliance-management/overview',
            'features/compliance-management/compliance-policies',
            'features/compliance-management/compliance-reports',
            'features/compliance-management/compliance-templates',
            'features/compliance-management/compliance-wizard',
          ],
        },
        {
          type: 'category',
          label: 'Change Control',
          items: [
            'features/change-control/overview',
            'features/change-control/planned-changes',
            'features/change-control/change-wizard',
            'features/change-control/change-operations',
          ],
        },
        {
          type: 'category',
          label: 'Baseline Management',
          items: [
            'features/baseline-management/overview',
            'features/baseline-management/baseline-creation',
            'features/baseline-management/baseline-policies',
            'features/baseline-management/policy-rules',
            'features/baseline-management/security-controls',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Tracking',
          items: [
            'features/cloud-tracking/overview',
            'features/cloud-tracking/setup-wizard',
            'features/cloud-tracking/cloud-policies',
            'features/cloud-tracking/cloud-reports',
          ],
        },
        {
          type: 'category',
          label: 'Agentless Monitoring',
          items: [
            'features/agentless-monitoring/overview',
            'features/agentless-monitoring/configuration-scanning',
            'features/agentless-monitoring/script-execution',
            'features/agentless-monitoring/script-variables',
            'features/agentless-monitoring/sample-scripts',
          ],
        },
        {
          type: 'category',
          label: 'Event Management',
          items: [
            'features/event-management/overview',
            'features/event-management/event-viewing',
            'features/event-management/event-filtering',
            'features/event-management/event-export',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🔌 Integrations',
      collapsed: true,
      items: [
        'integrations/overview',
        {
          type: 'category',
          label: 'API',
          items: ['integrations/api/overview', 'integrations/api/agent-api'],
        },
        {
          type: 'category',
          label: 'ITSM',
          items: [
            'integrations/itsm/overview',
            'integrations/itsm/sync-service-installation',
            'integrations/itsm/sync-service-administration',
          ],
        },
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
          label: 'Splunk',
          items: ['integrations/splunk/overview'],
        },
        {
          type: 'category',
          label: 'VMware',
          items: ['integrations/vmware/overview'],
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Reference',
      collapsed: true,
      items: [
        'reference/overview',
        'reference/component-releases',
        'reference/credentials-management',
      ],
    },
  ],
};

export default sidebars;
