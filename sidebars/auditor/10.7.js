// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  auditor107Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Auditor 10.7 Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/product-overview',
        'getting-started/product-editions',
        'getting-started/whats-new',
        'getting-started/quick-start-guide',
      ],
    },
    {
      type: 'category',
      label: 'Installation and Setup',
      collapsed: true,
      items: [
        'installation-and-setup/index',
        {
          type: 'category',
          label: 'System Requirements',
          items: [
            'installation-and-setup/system-requirements/index',
            'installation-and-setup/system-requirements/hardware-and-software',
            'installation-and-setup/system-requirements/sql-server-requirements',
            'installation-and-setup/system-requirements/service-accounts',
            'installation-and-setup/system-requirements/ports-and-networking',
            'installation-and-setup/system-requirements/supported-data-sources',
          ],
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            'installation-and-setup/installation/index',
            'installation-and-setup/installation/standard-installation',
            'installation-and-setup/installation/silent-installation',
            'installation-and-setup/installation/virtual-appliance',
            'installation-and-setup/installation/group-policy-deployment',
            'installation-and-setup/installation/sharepoint-core-service',
          ],
        },
        {
          type: 'category',
          label: 'Initial Configuration',
          items: [
            'installation-and-setup/initial-configuration/index',
            'installation-and-setup/initial-configuration/first-launch',
            'installation-and-setup/initial-configuration/license-activation',
            'installation-and-setup/initial-configuration/database-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Upgrade and Migration',
          items: [
            'installation-and-setup/upgrade-and-migration/index',
            'installation-and-setup/upgrade-and-migration/upgrade-guide',
            'installation-and-setup/upgrade-and-migration/uninstallation',
          ],
        },
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
            'data-sources/active-directory/automatic-configuration',
            'data-sources/active-directory/manual-configuration',
            'data-sources/active-directory/audit-policies',
            'data-sources/active-directory/permissions-and-access',
            'data-sources/active-directory/advanced-settings',
            'data-sources/active-directory/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Microsoft 365',
          items: [
            'data-sources/microsoft-365/index',
            'data-sources/microsoft-365/exchange-online',
            'data-sources/microsoft-365/sharepoint-online',
            'data-sources/microsoft-365/microsoft-teams',
            'data-sources/microsoft-365/azure-entra-id',
          ],
        },
        {
          type: 'category',
          label: 'File Servers',
          items: [
            'data-sources/file-servers/index',
            'data-sources/file-servers/windows-file-servers',
            'data-sources/file-servers/netapp',
            'data-sources/file-servers/dell-emc',
            'data-sources/file-servers/nutanix',
            'data-sources/file-servers/synology',
            'data-sources/file-servers/qumulo',
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
            'data-sources/infrastructure/logon-activity',
          ],
        },
        {
          type: 'category',
          label: 'Network Devices',
          items: [
            'data-sources/network-devices/index',
            'data-sources/network-devices/supported-devices',
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
        'monitoring-plans/creating-monitoring-plans',
        'monitoring-plans/data-collection-accounts',
        'monitoring-plans/monitoring-scope',
        'monitoring-plans/delegation-and-permissions',
        'monitoring-plans/fine-tuning',
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
          label: 'Navigation and UI',
          items: [
            'administration/navigation-and-ui/index',
            'administration/navigation-and-ui/customizing-dashboard',
            'administration/navigation-and-ui/favorites-and-search',
          ],
        },
        {
          type: 'category',
          label: 'Alerts and Notifications',
          items: [
            'administration/alerts-and-notifications/index',
            'administration/alerts-and-notifications/creating-alerts',
            'administration/alerts-and-notifications/alert-types',
            'administration/alerts-and-notifications/response-actions',
            'administration/alerts-and-notifications/email-notifications',
          ],
        },
        {
          type: 'category',
          label: 'Health Monitoring',
          items: [
            'administration/health-monitoring/index',
            'administration/health-monitoring/health-dashboard',
            'administration/health-monitoring/activity-statistics',
            'administration/health-monitoring/database-statistics',
            'administration/health-monitoring/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Risk Assessment',
          items: [
            'administration/risk-assessment/index',
            'administration/risk-assessment/risk-dashboard',
            'administration/risk-assessment/risk-levels',
          ],
        },
        {
          type: 'category',
          label: 'Behavior Analytics',
          items: [
            'administration/behavior-analytics/index',
            'administration/behavior-analytics/anomaly-detection',
            'administration/behavior-analytics/user-profiles',
          ],
        },
        {
          type: 'category',
          label: 'System Settings',
          items: [
            'administration/system-settings/index',
            'administration/system-settings/general-settings',
            'administration/system-settings/audit-database',
            'administration/system-settings/long-term-archive',
            'administration/system-settings/custom-branding',
            'administration/system-settings/sensitive-data-discovery',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Access Governance',
      collapsed: true,
      items: [
        'access-governance/index',
        {
          type: 'category',
          label: 'Access Reviews',
          items: [
            'access-governance/access-reviews/index',
            'access-governance/access-reviews/configuration',
            'access-governance/access-reviews/creating-reviews',
            'access-governance/access-reviews/managing-reviews',
            'access-governance/access-reviews/review-process',
            'access-governance/access-reviews/review-history',
          ],
        },
        {
          type: 'category',
          label: 'Resource Owners',
          items: [
            'access-governance/resource-owners/index',
            'access-governance/resource-owners/owner-management',
            'access-governance/resource-owners/confirmation-process',
          ],
        },
        {
          type: 'category',
          label: 'Entitlement Management',
          items: [
            'access-governance/entitlement-management/index',
            'access-governance/entitlement-management/data-grid-features',
            'access-governance/entitlement-management/edit-notes',
            'access-governance/entitlement-management/group-membership',
          ],
        },
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
          label: 'Report Types',
          items: [
            'reporting/report-types/index',
            'reporting/report-types/activity-reports',
            'reporting/report-types/compliance-reports',
            'reporting/report-types/enterprise-reports',
            'reporting/report-types/state-in-time-reports',
            'reporting/report-types/custom-reports',
            'reporting/report-types/user-behavior-reports',
          ],
        },
        {
          type: 'category',
          label: 'Report Management',
          items: [
            'reporting/report-management/index',
            'reporting/report-management/viewing-reports',
            'reporting/report-management/report-subscriptions',
            'reporting/report-management/review-status-reports',
          ],
        },
        {
          type: 'category',
          label: 'Data Discovery',
          items: ['reporting/data-discovery/classification-reports'],
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
          label: 'SIEM Integrations',
          items: [
            'integrations/siem-integrations/index',
            'integrations/siem-integrations/splunk',
            'integrations/siem-integrations/qradar',
            'integrations/siem-integrations/arcsight',
            'integrations/siem-integrations/alienvault',
            'integrations/siem-integrations/logrhythm',
            'integrations/siem-integrations/solarwinds',
            'integrations/siem-integrations/generic-siem',
          ],
        },
        {
          type: 'category',
          label: 'Ticketing Systems',
          items: [
            'integrations/ticketing-systems/index',
            'integrations/ticketing-systems/servicenow',
            'integrations/ticketing-systems/connectwise',
          ],
        },
        {
          type: 'category',
          label: 'Security Platforms',
          items: [
            'integrations/security-platforms/index',
            'integrations/security-platforms/cyberark',
            'integrations/security-platforms/okta',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Platforms',
          items: [
            'integrations/cloud-platforms/index',
            'integrations/cloud-platforms/aws',
            'integrations/cloud-platforms/azure-files',
          ],
        },
        {
          type: 'category',
          label: 'File Storage',
          items: [
            'integrations/file-storage/index',
            'integrations/file-storage/ctera',
            'integrations/file-storage/nasuni',
            'integrations/file-storage/copilot',
          ],
        },
        {
          type: 'category',
          label: 'Specialized Integrations',
          items: [
            'integrations/specialized-integrations/index',
            'integrations/specialized-integrations/radius',
            'integrations/specialized-integrations/linux-systems',
            'integrations/specialized-integrations/privileged-users',
            'integrations/specialized-integrations/hyperv',
            'integrations/specialized-integrations/nutanix-ahv',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools and Utilities',
      collapsed: true,
      items: [
        'tools-and-utilities/index',
        'tools-and-utilities/audit-configuration-assistant',
        'tools-and-utilities/event-log-tools',
        'tools-and-utilities/inactive-user-tracker',
        'tools-and-utilities/password-expiration-notifier',
        'tools-and-utilities/object-restore-for-ad',
        'tools-and-utilities/account-lockout-examiner',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        'api-reference/index',
        'api-reference/getting-started',
        'api-reference/authentication-and-security',
        'api-reference/endpoints',
        {
          type: 'category',
          label: 'Activity Records',
          items: [
            'api-reference/activity-records/index',
            'api-reference/activity-records/retrieving-records',
            'api-reference/activity-records/searching-records',
            'api-reference/activity-records/writing-records',
            'api-reference/activity-records/record-reference',
          ],
        },
        {
          type: 'category',
          label: 'Filtering and Queries',
          items: [
            'api-reference/filtering-and-queries/index',
            'api-reference/filtering-and-queries/filter-operators',
            'api-reference/filtering-and-queries/filter-reference',
          ],
        },
        'api-reference/error-handling',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/index',
        'reference/deployment-scenarios',
        'reference/compliance-mappings',
        'reference/monitored-object-types',
        'reference/network-traffic-compression',
      ],
    },
  ],
};

export default sidebars;
