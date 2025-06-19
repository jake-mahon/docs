// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  identityManager62: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/index',
        'getting-started/quick-start',
        'getting-started/system-requirements',
        'getting-started/architecture-overview',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/index',
        {
          type: 'category',
          label: 'Pre-Installation',
          items: [
            'installation/pre-installation/index',
            'installation/pre-installation/database-setup',
            'installation/pre-installation/email-server-setup',
            'installation/pre-installation/working-directory-setup',
          ],
        },
        'installation/server-installation',
        'installation/agent-installation',
        'installation/reverse-proxy-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Identity Management',
      items: [
        'identity-management/index',
        'identity-management/identity-repository',
        {
          type: 'category',
          label: 'User Lifecycle',
          items: [
            'identity-management/user-lifecycle/index',
            'identity-management/user-lifecycle/onboarding-offboarding',
            'identity-management/user-lifecycle/position-changes',
          ],
        },
        {
          type: 'category',
          label: 'Synchronization',
          items: [
            'identity-management/synchronization/index',
            'identity-management/synchronization/sync-configuration',
            'identity-management/synchronization/sync-thresholds',
            'identity-management/synchronization/incremental-sync',
          ],
        },
        {
          type: 'category',
          label: 'Provisioning',
          items: [
            'identity-management/provisioning/index',
            'identity-management/provisioning/provisioning-configuration',
            'identity-management/provisioning/provisioning-thresholds',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Access Governance',
      items: [
        'access-governance/index',
        {
          type: 'category',
          label: 'Role Management',
          items: [
            'access-governance/role-management/index',
            'access-governance/role-management/role-model',
            'access-governance/role-management/role-assignment',
            'access-governance/role-management/role-mining',
            'access-governance/role-management/role-rules',
          ],
        },
        {
          type: 'category',
          label: 'Access Certification',
          items: [
            'access-governance/access-certification/index',
            'access-governance/access-certification/campaign-configuration',
            'access-governance/access-certification/review-process',
          ],
        },
        'access-governance/risk-management',
        {
          type: 'category',
          label: 'Reporting',
          items: [
            'access-governance/reporting/index',
            'access-governance/reporting/power-bi-integration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      items: [
        'integration/index',
        {
          type: 'category',
          label: 'Connectors',
          items: [
            'integration/connectors/index',
            {
              type: 'category',
              label: 'Connector Basics',
              items: [
                'integration/connectors/connector-basics/index',
                'integration/connectors/connector-basics/configuration',
                'integration/connectors/connector-basics/connections',
                'integration/connectors/connector-basics/credential-protection',
                'integration/connectors/connector-basics/entity-property-mapping',
              ],
            },
            {
              type: 'category',
              label: 'Connector Catalog',
              items: [
                'integration/connectors/connector-catalog/index',
                'integration/connectors/connector-catalog/active-directory',
                'integration/connectors/connector-catalog/azure-ad',
                'integration/connectors/connector-catalog/ldap',
                'integration/connectors/connector-catalog/scim',
                'integration/connectors/connector-catalog/database-connectors',
                'integration/connectors/connector-catalog/cloud-applications',
                'integration/connectors/connector-catalog/custom-connectors',
              ],
            },
            'integration/connectors/connector-packages',
          ],
        },
        {
          type: 'category',
          label: 'API',
          items: [
            'integration/api/index',
            'integration/api/authentication',
            'integration/api/api-reference',
            'integration/api/pagination',
            'integration/api/query-language',
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          items: [
            'integration/workflows/index',
            'integration/workflows/workflow-configuration',
            'integration/workflows/custom-workflows',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/index',
        {
          type: 'category',
          label: 'Server Configuration',
          items: [
            'administration/server-configuration/index',
            'administration/server-configuration/database-connection',
            'administration/server-configuration/authentication',
            'administration/server-configuration/general-settings',
            'administration/server-configuration/encryption-settings',
          ],
        },
        {
          type: 'category',
          label: 'Agent Configuration',
          items: [
            'administration/agent-configuration/index',
            'administration/agent-configuration/agent-settings',
            'administration/agent-configuration/credential-providers',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            'administration/security/index',
            'administration/security/profiles-permissions',
            'administration/security/access-control-rules',
            'administration/security/password-management',
          ],
        },
        {
          type: 'category',
          label: 'Jobs & Tasks',
          items: [
            'administration/jobs-tasks/index',
            'administration/jobs-tasks/job-configuration',
            'administration/jobs-tasks/task-management',
            'administration/jobs-tasks/scheduling',
          ],
        },
        {
          type: 'category',
          label: 'Notifications',
          items: [
            'administration/notifications/index',
            'administration/notifications/native-notifications',
            'administration/notifications/custom-notifications',
          ],
        },
        {
          type: 'category',
          label: 'Monitoring',
          items: [
            'administration/monitoring/index',
            'administration/monitoring/system-monitoring',
            'administration/monitoring/integration-qradar',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/index',
        {
          type: 'category',
          label: 'Configuration Toolkit',
          items: [
            'development/configuration-toolkit/index',
            'development/configuration-toolkit/xml-configuration',
            'development/configuration-toolkit/expressions',
            'development/configuration-toolkit/bindings',
            'development/configuration-toolkit/deployment',
          ],
        },
        {
          type: 'category',
          label: 'Scripting',
          items: [
            'development/scripting/index',
            'development/scripting/powershell-scripts',
            'development/scripting/robotframework-scripts',
          ],
        },
        {
          type: 'category',
          label: 'Customization',
          items: ['development/customization/index', 'development/customization/best-practices'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/index',
        {
          type: 'category',
          label: 'Command Line Tools',
          items: [
            'reference/command-line-tools/index',
            'reference/command-line-tools/server-executable',
            'reference/command-line-tools/agent-executable',
            'reference/command-line-tools/deployment-tools',
            'reference/command-line-tools/utility-tools',
          ],
        },
        {
          type: 'category',
          label: 'Configuration Reference',
          items: [
            'reference/configuration-reference/index',
            'reference/configuration-reference/xml-reference',
            'reference/configuration-reference/scaffoldings',
          ],
        },
        'reference/entity-model',
        'reference/architecture-details',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/index',
        'troubleshooting/common-issues',
        'troubleshooting/connector-troubleshooting',
        'troubleshooting/performance-optimization',
      ],
    },
  ],
};

export default sidebars;
