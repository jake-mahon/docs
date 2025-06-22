// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  oneSecureSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '1Secure Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/requirements',
        'getting-started/installation',
        'getting-started/first-login',
      ],
    },
    {
      type: 'category',
      label: 'Setup and Configuration',
      collapsed: true,
      items: [
        'setup-and-configuration/index',
        'setup-and-configuration/data-collection-account',
        'setup-and-configuration/network-configuration',
        {
          type: 'category',
          label: 'Active Directory',
          items: [
            'setup-and-configuration/active-directory/index',
            'setup-and-configuration/active-directory/automatic-configuration',
            'setup-and-configuration/active-directory/manual-configuration',
            'setup-and-configuration/active-directory/audit-policies',
            'setup-and-configuration/active-directory/permissions-and-access',
            'setup-and-configuration/active-directory/advanced-settings',
          ],
        },
        {
          type: 'category',
          label: 'Azure Entra ID',
          items: [
            'setup-and-configuration/azure-entra-id/index',
            'setup-and-configuration/azure-entra-id/registration',
            'setup-and-configuration/azure-entra-id/permissions',
          ],
        },
        {
          type: 'category',
          label: 'Exchange Online',
          items: [
            'setup-and-configuration/exchange-online/index',
            'setup-and-configuration/exchange-online/non-owner-configuration',
          ],
        },
        {
          type: 'category',
          label: 'SharePoint Online',
          items: ['setup-and-configuration/sharepoint-online/index'],
        },
        {
          type: 'category',
          label: 'Computers',
          items: [
            'setup-and-configuration/computers/index',
            'setup-and-configuration/computers/audit-policies',
            'setup-and-configuration/computers/firewall-rules',
            'setup-and-configuration/computers/event-log-configuration',
            'setup-and-configuration/computers/remote-registry',
          ],
        },
        {
          type: 'category',
          label: 'SQL Server',
          items: [
            'setup-and-configuration/sql-server/index',
            'setup-and-configuration/sql-server/trace-logging',
            'setup-and-configuration/sql-server/permissions',
            'setup-and-configuration/sql-server/network-ports',
          ],
        },
        {
          type: 'category',
          label: 'Logon Activity',
          items: [
            'setup-and-configuration/logon-activity/index',
            'setup-and-configuration/logon-activity/audit-configuration',
            'setup-and-configuration/logon-activity/non-domain-admin',
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
        'data-sources/active-directory',
        'data-sources/azure-entra-id',
        'data-sources/exchange-online',
        'data-sources/sharepoint-online',
        'data-sources/computers',
        'data-sources/sql-server',
        'data-sources/gmsa',
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
          label: 'Organizations',
          items: [
            'administration/organizations/index',
            'administration/organizations/managing-organizations',
            'administration/organizations/organization-groups',
            'administration/organizations/sites',
            'administration/organizations/dashboard-customization',
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          items: [
            'administration/user-management/index',
            'administration/user-management/adding-users',
            'administration/user-management/role-definitions',
            'administration/user-management/billable-accounts',
          ],
        },
        {
          type: 'category',
          label: 'Credentials',
          items: ['administration/credentials/index'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Monitoring and Analytics',
      collapsed: true,
      items: [
        'monitoring-and-analytics/index',
        {
          type: 'category',
          label: 'Dashboard',
          items: [
            'monitoring-and-analytics/dashboard/index',
            'monitoring-and-analytics/dashboard/organization-statistics',
          ],
        },
        {
          type: 'category',
          label: 'Alerts',
          items: [
            'monitoring-and-analytics/alerts/index',
            'monitoring-and-analytics/alerts/alert-profiles',
            'monitoring-and-analytics/alerts/alert-timeline',
          ],
        },
        {
          type: 'category',
          label: 'Risk Assessment',
          items: [
            'monitoring-and-analytics/risk-assessment/index',
            'monitoring-and-analytics/risk-assessment/risk-profiles',
            'monitoring-and-analytics/risk-assessment/risk-metrics',
            'monitoring-and-analytics/risk-assessment/metrics-reference',
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
            'reporting/report-types/activity-reports',
            'reporting/report-types/compliance-reports',
            'reporting/report-types/audit-log-reports',
            'reporting/report-types/system-reports',
            'reporting/report-types/state-in-time-reports',
            'reporting/report-types/billable-users-report',
          ],
        },
        'reporting/custom-reports',
        'reporting/report-subscriptions',
        {
          type: 'category',
          label: 'Filtering and Search',
          items: [
            'reporting/filtering-and-search/index',
            'reporting/filtering-and-search/filter-operators',
            'reporting/filtering-and-search/applying-filters',
          ],
        },
        'reporting/exporting-reports',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/index',
        'integrations/servicenow',
        'integrations/connectwise',
        'integrations/sharepoint-integration',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: ['reference/index', 'reference/security'],
    },
  ],
};

export default sidebars;
