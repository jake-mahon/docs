// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  auditorSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Auditor 10.6 Documentation',
    },
    {
      type: 'doc',
      id: 'overview',
      label: 'Product Overview',
    },
    {
      type: 'doc',
      id: 'whats-new',
      label: "What's New",
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/product-editions',
        'getting-started/requirements',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/index',
        'installation/install-guide',
        'installation/virtual-appliance',
        'installation/silent-install',
        'installation/upgrade',
        'installation/uninstall',
        'installation/first-launch',
      ],
    },
    {
      type: 'category',
      label: 'Data Sources',
      collapsed: true,
      items: [
        'data-sources/index',
        {
          type: 'category',
          label: 'Active Directory',
          items: [
            'data-sources/active-directory/index',
            'data-sources/active-directory/configuration',
            'data-sources/active-directory/permissions',
            'data-sources/active-directory/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Microsoft 365',
          items: [
            'data-sources/microsoft-365/index',
            'data-sources/microsoft-365/azure-entra-id',
            'data-sources/microsoft-365/exchange-online',
            'data-sources/microsoft-365/sharepoint-online',
            'data-sources/microsoft-365/teams',
          ],
        },
        {
          type: 'category',
          label: 'File Servers',
          items: [
            'data-sources/file-servers/index',
            'data-sources/file-servers/windows-file-servers',
            'data-sources/file-servers/dell-storage',
            'data-sources/file-servers/netapp',
            'data-sources/file-servers/nutanix',
            'data-sources/file-servers/qumulo',
            'data-sources/file-servers/synology',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: [
            'data-sources/databases/index',
            'data-sources/databases/sql-server',
            'data-sources/databases/oracle',
          ],
        },
        {
          type: 'category',
          label: 'Infrastructure',
          items: [
            'data-sources/infrastructure/index',
            'data-sources/infrastructure/vmware',
            'data-sources/infrastructure/exchange-server',
            'data-sources/infrastructure/sharepoint-server',
            'data-sources/infrastructure/windows-servers',
            'data-sources/infrastructure/group-policy',
            'data-sources/infrastructure/network-devices',
          ],
        },
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'data-sources/authentication/index',
            'data-sources/authentication/logon-activity',
            'data-sources/authentication/adfs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Monitoring Plans',
      collapsed: true,
      items: [
        'monitoring-plans/index',
        'monitoring-plans/creating-plans',
        'monitoring-plans/data-sources-config',
        'monitoring-plans/monitoring-scope',
        'monitoring-plans/delegation',
        'monitoring-plans/fine-tuning',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: true,
      items: [
        'features/index',
        {
          type: 'category',
          label: 'Alerts',
          items: [
            'features/alerts/index',
            'features/alerts/alert-settings',
            'features/alerts/alert-dashboard',
            'features/alerts/response-actions',
          ],
        },
        {
          type: 'category',
          label: 'Risk Assessment',
          items: [
            'features/risk-assessment/index',
            'features/risk-assessment/risk-dashboard',
            'features/risk-assessment/risk-levels',
          ],
        },
        {
          type: 'category',
          label: 'Behavior Analytics',
          items: [
            'features/behavior-analytics/index',
            'features/behavior-analytics/anomaly-detection',
            'features/behavior-analytics/user-profiles',
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
          items: [
            'features/reporting/index',
            'features/reporting/report-types',
            'features/reporting/custom-reports',
            'features/reporting/subscriptions',
          ],
        },
        {
          type: 'category',
          label: 'Search and Filter',
          items: ['features/search-and-filter/index', 'features/search-and-filter/advanced-search'],
        },
        {
          type: 'category',
          label: 'Health Monitoring',
          items: [
            'features/health-monitoring/index',
            'features/health-monitoring/health-dashboard',
            'features/health-monitoring/self-audit',
            'features/health-monitoring/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Access Reviews',
          items: [
            'features/access-reviews/index',
            'features/access-reviews/entitlement-reviews',
            'features/access-reviews/resource-owners',
            'features/access-reviews/review-administration',
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
          items: [
            'integrations/siem/index',
            'integrations/siem/splunk',
            'integrations/siem/arcsight',
            'integrations/siem/qradar',
            'integrations/siem/alienvault',
            'integrations/siem/logrhythm',
            'integrations/siem/solarwinds',
            'integrations/siem/generic-siem',
          ],
        },
        {
          type: 'category',
          label: 'Ticketing',
          items: [
            'integrations/ticketing/index',
            'integrations/ticketing/servicenow',
            'integrations/ticketing/connectwise',
          ],
        },
        {
          type: 'category',
          label: 'Cloud',
          items: ['integrations/cloud/index', 'integrations/cloud/aws', 'integrations/cloud/okta'],
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            'integrations/security/index',
            'integrations/security/cyberark',
            'integrations/security/radius',
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
          label: 'Settings',
          items: [
            'administration/settings/index',
            'administration/settings/general-settings',
            'administration/settings/database-settings',
            'administration/settings/notification-settings',
            'administration/settings/integration-settings',
            'administration/settings/investigation-settings',
            'administration/settings/archive-settings',
            'administration/settings/compliance-mappings',
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          items: [
            'administration/user-management/index',
            'administration/user-management/service-accounts',
            'administration/user-management/licensing',
          ],
        },
        {
          type: 'category',
          label: 'Navigation',
          items: ['administration/navigation/index', 'administration/navigation/customization'],
        },
        {
          type: 'category',
          label: 'Branding',
          items: ['administration/branding/index'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: true,
      items: [
        'tools/index',
        'tools/configuration-assistant',
        'tools/event-log-manager',
        'tools/object-restore',
        'tools/password-expiration',
        'tools/inactive-user-tracker',
        'tools/account-lockout-examiner',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: true,
      items: [
        'api/index',
        'api/getting-started',
        'api/authentication',
        'api/endpoints',
        'api/activity-records',
        'api/filters',
        'api/reference',
      ],
    },
    {
      type: 'category',
      label: 'Add-ons',
      collapsed: true,
      items: [
        'add-ons/index',
        'add-ons/linux-monitoring',
        'add-ons/privileged-user-linux',
        'add-ons/user-activity',
        'add-ons/hyperv',
        'add-ons/nutanix-ahv',
        'add-ons/azure-files',
        'add-ons/ctera',
        'add-ons/nasuni',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/index',
        'reference/ports-and-protocols',
        'reference/permissions-reference',
        'reference/deployment-scenarios',
        'reference/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
