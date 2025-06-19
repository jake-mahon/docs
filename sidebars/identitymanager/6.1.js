// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  identityManagerSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'IdentityManager Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/overview',
        'getting-started/quick-start',
        'getting-started/system-requirements',
      ],
    },
    {
      type: 'category',
      label: 'Installation & Setup',
      collapsed: true,
      items: [
        'installation-setup/index',
        'installation-setup/installation-guide',
        'installation-setup/server-configuration',
        'installation-setup/agent-configuration',
        'installation-setup/database-setup',
        'installation-setup/email-server-setup',
        'installation-setup/working-directory-setup',
        'installation-setup/reverse-proxy-setup',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: true,
      items: [
        'core-concepts/index',
        {
          type: 'category',
          label: 'Architecture',
          collapsed: true,
          items: [
            'core-concepts/architecture/index',
            'core-concepts/architecture/on-premise',
            'core-concepts/architecture/saas',
          ],
        },
        'core-concepts/entity-model',
        'core-concepts/role-model',
        'core-concepts/resources',
        'core-concepts/bindings',
      ],
    },
    {
      type: 'category',
      label: 'Connectors & Integration',
      collapsed: true,
      items: [
        'connectors-integration/index',
        {
          type: 'category',
          label: 'Connector Configuration',
          collapsed: true,
          items: [
            'connectors-integration/connector-configuration/index',
            'connectors-integration/connector-configuration/connections',
            'connectors-integration/connector-configuration/credential-protection',
            'connectors-integration/connector-configuration/entity-property-mapping',
          ],
        },
        {
          type: 'category',
          label: 'Connector Packages',
          collapsed: true,
          items: [
            'connectors-integration/connector-packages/index',
            'connectors-integration/connector-packages/active-directory',
            'connectors-integration/connector-packages/azure-active-directory',
            'connectors-integration/connector-packages/google-workspace',
            'connectors-integration/connector-packages/ldap',
            'connectors-integration/connector-packages/microsoft-exchange',
            'connectors-integration/connector-packages/okta',
            'connectors-integration/connector-packages/salesforce',
            'connectors-integration/connector-packages/sap-erp',
            'connectors-integration/connector-packages/scim',
            'connectors-integration/connector-packages/servicenow',
            'connectors-integration/connector-packages/sharepoint',
            'connectors-integration/connector-packages/sql-databases',
            'connectors-integration/connector-packages/workday',
            'connectors-integration/connector-packages/custom-connectors',
          ],
        },
        {
          type: 'category',
          label: 'Connector Tutorials',
          collapsed: true,
          items: [
            'connectors-integration/connector-tutorials/index',
            'connectors-integration/connector-tutorials/azure-ad-registration',
            'connectors-integration/connector-tutorials/powershell-scripts',
            'connectors-integration/connector-tutorials/robot-framework',
            'connectors-integration/connector-tutorials/webhook-templates',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Identity Management',
      collapsed: true,
      items: [
        'identity-management/index',
        'identity-management/identity-repository',
        {
          type: 'category',
          label: 'Joiners, Movers & Leavers',
          collapsed: true,
          items: [
            'identity-management/joiners-movers-leavers/index',
            'identity-management/joiners-movers-leavers/onboarding-offboarding',
            'identity-management/joiners-movers-leavers/position-changes',
          ],
        },
        {
          type: 'category',
          label: 'Provisioning',
          collapsed: true,
          items: [
            'identity-management/provisioning/index',
            'identity-management/provisioning/provisioning-thresholds',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Access Control & Security',
      collapsed: true,
      items: [
        'access-control-security/index',
        {
          type: 'category',
          label: 'Profiles & Permissions',
          collapsed: true,
          items: [
            'access-control-security/profiles-permissions/index',
            'access-control-security/profiles-permissions/creating-profiles',
            'access-control-security/profiles-permissions/permissions-reference',
            'access-control-security/profiles-permissions/rights-restrictions',
          ],
        },
        {
          type: 'category',
          label: 'Authentication',
          collapsed: true,
          items: [
            'access-control-security/authentication/index',
            'access-control-security/authentication/end-user-authentication',
            'access-control-security/authentication/api-authentication',
          ],
        },
        {
          type: 'category',
          label: 'Role Assignment',
          collapsed: true,
          items: [
            'access-control-security/role-assignment/index',
            'access-control-security/role-assignment/assignment-policies',
            'access-control-security/role-assignment/assignment-dates',
            'access-control-security/role-assignment/conforming-assignments',
            'access-control-security/role-assignment/indirect-permissions',
          ],
        },
        'access-control-security/password-management',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      collapsed: true,
      items: [
        'governance/index',
        {
          type: 'category',
          label: 'Access Certification',
          collapsed: true,
          items: [
            'governance/access-certification/index',
            'governance/access-certification/campaign-policies',
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
          collapsed: true,
          items: ['governance/reporting/index', 'governance/reporting/power-bi-integration'],
        },
        'governance/risks',
        'governance/role-mining',
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      collapsed: true,
      items: [
        'automation/index',
        {
          type: 'category',
          label: 'Jobs & Tasks',
          collapsed: true,
          items: [
            'automation/jobs-tasks/index',
            'automation/jobs-tasks/job-configuration',
            'automation/jobs-tasks/task-management',
            'automation/jobs-tasks/incremental-jobs',
            'automation/jobs-tasks/job-optimization',
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          collapsed: true,
          items: ['automation/workflows/index', 'automation/workflows/workflow-configuration'],
        },
        {
          type: 'category',
          label: 'Synchronization',
          collapsed: true,
          items: [
            'automation/synchronization/index',
            'automation/synchronization/sync-thresholds',
            'automation/synchronization/upward-data-sync',
          ],
        },
        {
          type: 'category',
          label: 'Notifications',
          collapsed: true,
          items: [
            'automation/notifications/index',
            'automation/notifications/native-notifications',
            'automation/notifications/custom-notifications',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        'api-reference/index',
        {
          type: 'category',
          label: 'Server API',
          collapsed: true,
          items: [
            'api-reference/server-api/index',
            'api-reference/server-api/access-certification',
            'api-reference/server-api/access-control',
            'api-reference/server-api/connectors',
            'api-reference/server-api/jobs',
            'api-reference/server-api/metadata',
            'api-reference/server-api/provisioning',
            'api-reference/server-api/reports',
            'api-reference/server-api/resources',
            'api-reference/server-api/universes',
            'api-reference/server-api/workflows',
          ],
        },
        {
          type: 'category',
          label: 'Agent API',
          collapsed: true,
          items: ['api-reference/agent-api/index', 'api-reference/agent-api/job-api'],
        },
        'api-reference/authentication',
        'api-reference/pagination',
        'api-reference/squery',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Utilities',
      collapsed: true,
      items: [
        'tools-utilities/index',
        {
          type: 'category',
          label: 'CLI Reference',
          collapsed: true,
          items: [
            'tools-utilities/cli-reference/index',
            'tools-utilities/cli-reference/server-executable',
            'tools-utilities/cli-reference/agent-executable',
            'tools-utilities/cli-reference/configuration-tools',
            'tools-utilities/cli-reference/data-export-tools',
            'tools-utilities/cli-reference/database-tools',
            'tools-utilities/cli-reference/security-tools',
          ],
        },
        {
          type: 'category',
          label: 'Toolkit',
          collapsed: true,
          items: [
            'tools-utilities/toolkit/index',
            'tools-utilities/toolkit/expressions',
            'tools-utilities/toolkit/csharp-functions',
            'tools-utilities/toolkit/predefined-functions',
          ],
        },
        'tools-utilities/simulation',
      ],
    },
    {
      type: 'category',
      label: 'Configuration Reference',
      collapsed: true,
      items: [
        'configuration-reference/index',
        {
          type: 'category',
          label: 'XML Configuration',
          collapsed: true,
          items: [
            'configuration-reference/xml-configuration/index',
            'configuration-reference/xml-configuration/access-certification-config',
            'configuration-reference/xml-configuration/access-control-config',
            'configuration-reference/xml-configuration/business-intelligence-config',
            'configuration-reference/xml-configuration/connector-config',
            'configuration-reference/xml-configuration/entity-config',
            'configuration-reference/xml-configuration/jobs-config',
            'configuration-reference/xml-configuration/monitoring-config',
            'configuration-reference/xml-configuration/notification-config',
            'configuration-reference/xml-configuration/workflow-config',
          ],
        },
        {
          type: 'category',
          label: 'Scaffoldings',
          collapsed: true,
          items: [
            'configuration-reference/scaffoldings/index',
            'configuration-reference/scaffoldings/scaffolding-reference',
          ],
        },
        {
          type: 'category',
          label: 'Network Configuration',
          collapsed: true,
          items: [
            'configuration-reference/network-configuration/index',
            'configuration-reference/network-configuration/proxy-settings',
          ],
        },
        {
          type: 'category',
          label: 'Technical Files',
          collapsed: true,
          items: [
            'configuration-reference/technical-files/index',
            'configuration-reference/technical-files/appsettings-reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting & Support',
      collapsed: true,
      items: [
        'troubleshooting-support/index',
        {
          type: 'category',
          label: 'Monitoring',
          collapsed: true,
          items: [
            'troubleshooting-support/monitoring/index',
            'troubleshooting-support/monitoring/qradar-integration',
          ],
        },
        {
          type: 'category',
          label: 'Common Issues',
          collapsed: true,
          items: [
            'troubleshooting-support/common-issues/index',
            'troubleshooting-support/common-issues/connector-troubleshooting',
            'troubleshooting-support/common-issues/job-troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'How-to Guides',
          collapsed: true,
          items: [
            'troubleshooting-support/how-to-guides/index',
            'troubleshooting-support/how-to-guides/postman-requests',
            'troubleshooting-support/how-to-guides/protect-agent-communication',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
