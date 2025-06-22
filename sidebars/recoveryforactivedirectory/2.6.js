// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  recoveryForActiveDirectorySidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Recovery for Active Directory Overview',
    },
    {
      type: 'doc',
      id: 'whats-new',
      label: "What's New",
    },
    {
      type: 'category',
      label: 'Requirements',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'requirements/index',
          label: 'Requirements Overview',
        },
        {
          type: 'doc',
          id: 'requirements/system-requirements',
          label: 'System Requirements',
        },
        {
          type: 'doc',
          id: 'requirements/firewall-rules',
          label: 'Firewall Rules',
        },
        {
          type: 'doc',
          id: 'requirements/target-domain-requirements',
          label: 'Target Domain Requirements',
        },
        {
          type: 'doc',
          id: 'requirements/sql-server-requirements',
          label: 'SQL Server Requirements',
        },
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/index',
          label: 'Getting Started Overview',
        },
        {
          type: 'doc',
          id: 'getting-started/installation',
          label: 'Installation',
        },
        {
          type: 'doc',
          id: 'getting-started/initial-configuration',
          label: 'Initial Configuration',
        },
        {
          type: 'doc',
          id: 'getting-started/first-login',
          label: 'First Login',
        },
        {
          type: 'doc',
          id: 'getting-started/upgrade',
          label: 'Upgrade Procedures',
        },
      ],
    },
    {
      type: 'category',
      label: 'Domain Recovery',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'domain-recovery/index',
          label: 'Domain Recovery Overview',
        },
        {
          type: 'doc',
          id: 'domain-recovery/backup-configuration',
          label: 'Backup Configuration',
        },
        {
          type: 'doc',
          id: 'domain-recovery/performing-recovery',
          label: 'Performing Recovery',
        },
        {
          type: 'doc',
          id: 'domain-recovery/rollback-operations',
          label: 'Rollback Operations',
        },
      ],
    },
    {
      type: 'category',
      label: 'Forest Recovery',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'forest-recovery/index',
          label: 'Forest Recovery Overview',
        },
        {
          type: 'doc',
          id: 'forest-recovery/forest-recovery-procedures',
          label: 'Forest Recovery Procedures',
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'configuration/index',
          label: 'Configuration Overview',
        },
        {
          type: 'doc',
          id: 'configuration/domain-configuration',
          label: 'Domain Configuration',
        },
        {
          type: 'doc',
          id: 'configuration/data-retention',
          label: 'Data Retention',
        },
        {
          type: 'doc',
          id: 'configuration/integrations',
          label: 'Integrations',
        },
        {
          type: 'doc',
          id: 'configuration/notifications',
          label: 'Notifications',
        },
        {
          type: 'doc',
          id: 'configuration/licensing',
          label: 'Licensing',
        },
        {
          type: 'doc',
          id: 'configuration/user-roles',
          label: 'User Roles',
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'administration/index',
          label: 'Administration Overview',
        },
        {
          type: 'doc',
          id: 'administration/navigation-overview',
          label: 'Navigation Overview',
        },
        {
          type: 'doc',
          id: 'administration/multi-factor-authentication',
          label: 'Multi-Factor Authentication',
        },
        {
          type: 'doc',
          id: 'administration/audit-logging',
          label: 'Audit Logging',
        },
      ],
    },
    {
      type: 'category',
      label: 'RSAT Extension',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'rsat-extension/index',
          label: 'RSAT Extension Overview',
        },
        {
          type: 'doc',
          id: 'rsat-extension/installation',
          label: 'Installation',
        },
        {
          type: 'doc',
          id: 'rsat-extension/recovery-operations',
          label: 'Recovery Operations',
        },
        {
          type: 'doc',
          id: 'rsat-extension/rollback-operations',
          label: 'Rollback Operations',
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'troubleshooting/index',
          label: 'Troubleshooting Overview',
        },
        {
          type: 'doc',
          id: 'troubleshooting/use-cases',
          label: 'Use Cases',
        },
        {
          type: 'category',
          label: 'Password Updates',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'troubleshooting/password-updates/credential-passwords',
              label: 'Credential Passwords',
            },
            {
              type: 'doc',
              id: 'troubleshooting/password-updates/backup-account-passwords',
              label: 'Backup Account Passwords',
            },
            {
              type: 'doc',
              id: 'troubleshooting/password-updates/sql-service-account-passwords',
              label: 'SQL Service Account Passwords',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
