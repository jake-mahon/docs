/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  threatmanager30: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'getting-started/introduction',
        'getting-started/whats-new',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'installation/index',
      },
      items: [
        {
          type: 'category',
          label: 'Requirements',
          items: [
            'installation/requirements/system-requirements',
            'installation/requirements/permissions',
            'installation/requirements/ports-and-networking',
          ],
        },
        {
          type: 'category',
          label: 'Install Guide',
          items: [
            'installation/install-guide/database-setup',
            'installation/install-guide/application-setup',
            'installation/install-guide/action-service-setup',
            'installation/install-guide/first-launch',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            'installation/security/secure-deployment',
            'installation/security/authentication-setup',
          ],
        },
        {
          type: 'category',
          label: 'Upgrades',
          items: [
            'installation/upgrades/upgrade-guide',
            'installation/upgrades/upgrade-to-2-8',
            'installation/upgrades/upgrade-to-3-0',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'administration/index',
      },
      items: [
        {
          type: 'category',
          label: 'System Configuration',
          items: [
            'administration/system-configuration/system-settings',
            'administration/system-configuration/user-access',
            'administration/system-configuration/licensing',
            'administration/system-configuration/auditing',
            'administration/system-configuration/system-jobs',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          link: {
            type: 'doc',
            id: 'administration/integrations/overview',
          },
          items: [
            'administration/integrations/active-directory',
            'administration/integrations/entra-id',
            'administration/integrations/authentication-providers',
            'administration/integrations/email-configuration',
            'administration/integrations/siem-integration',
            'administration/integrations/netwrix-products',
            'administration/integrations/credential-profiles',
          ],
        },
        {
          type: 'category',
          label: 'Policies',
          items: [
            'administration/policies/policy-configuration',
            'administration/policies/honeytoken-policies',
          ],
        },
        {
          type: 'category',
          label: 'Threat Management',
          items: [
            'administration/threat-management/threat-configuration',
            'administration/threat-management/threat-detection',
            'administration/threat-management/threat-response',
          ],
        },
        {
          type: 'category',
          label: 'System Health',
          items: [
            'administration/system-health/monitoring-overview',
            'administration/system-health/agents-status',
            'administration/system-health/services-status',
            'administration/system-health/action-queue',
            'administration/system-health/backlog-management',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Investigations',
          items: [
            'operations/investigations/creating-investigations',
            'operations/investigations/managing-investigations',
            'operations/investigations/predefined-investigations',
            'operations/investigations/audit-compliance',
            'operations/investigations/reports',
            'operations/investigations/subscriptions-exports',
          ],
        },
        {
          type: 'category',
          label: 'Playbooks',
          items: [
            'operations/playbooks/playbook-overview',
            'operations/playbooks/creating-playbooks',
            'operations/playbooks/playbook-triggers',
            'operations/playbooks/playbook-actions',
            'operations/playbooks/import-export',
          ],
        },
        {
          type: 'category',
          label: 'Threat Details',
          items: [
            'operations/threat-details/viewing-threats',
            'operations/threat-details/abnormal-behavior',
            'operations/threat-details/object-details',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Threat Types',
          items: [
            'reference/threat-types/active-directory-threats',
            'reference/threat-types/entra-id-threats',
            'reference/threat-types/file-system-threats',
            'reference/threat-types/general-threats',
            'reference/threat-types/custom-threats',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'reference/troubleshooting/common-issues',
            'reference/troubleshooting/logs-analysis',
            'reference/troubleshooting/password-updates',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ThreatPrevention',
      collapsible: true,
      collapsed: true,
      items: ['threatprevention/threatmanager-configuration'],
    },
  ],
};
