// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  endpointProtectorSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Endpoint Protector Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/whats-new',
        'getting-started/requirements',
        'getting-started/supported-formats',
        'getting-started/server-client-communication',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/index',
        'installation/setup-wizard',
        'installation/virtual-appliance',
        {
          type: 'category',
          label: 'Virtualization Platforms',
          collapsed: true,
          items: [
            'installation/virtualization-platforms/index',
            'installation/virtualization-platforms/vmware',
            'installation/virtualization-platforms/hyper-v',
            'installation/virtualization-platforms/citrix-xenserver',
            'installation/virtualization-platforms/oracle-vm',
          ],
        },
        {
          type: 'category',
          label: 'Agent Deployment',
          collapsed: true,
          items: [
            'installation/agent-deployment/index',
            'installation/agent-deployment/intune',
            'installation/agent-deployment/jamf',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: true,
      items: [
        'core-features/index',
        {
          type: 'category',
          label: 'Device Control',
          collapsed: true,
          items: [
            'core-features/device-control/index',
            'core-features/device-control/global-settings',
            'core-features/device-control/users-and-groups',
            'core-features/device-control/devices-and-computers',
            'core-features/device-control/custom-classes',
          ],
        },
        {
          type: 'category',
          label: 'Content-Aware Protection',
          collapsed: true,
          items: [
            'core-features/content-aware-protection/index',
            'core-features/content-aware-protection/policies',
            'core-features/content-aware-protection/content-detection',
            'core-features/content-aware-protection/deep-packet-inspection',
            'core-features/content-aware-protection/use-cases',
          ],
        },
        'core-features/enforced-encryption',
        'core-features/ediscovery',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/index',
        'administration/server-login',
        'administration/dashboard',
        {
          type: 'category',
          label: 'System Configuration',
          collapsed: true,
          items: [
            'administration/system-configuration/index',
            'administration/system-configuration/admin-and-access',
            'administration/system-configuration/licensing',
            'administration/system-configuration/security',
            'administration/system-configuration/settings',
          ],
        },
        {
          type: 'category',
          label: 'System Maintenance',
          collapsed: true,
          items: [
            'administration/system-maintenance/index',
            'administration/system-maintenance/backup',
            'administration/system-maintenance/shadow-repository',
            'administration/system-maintenance/updates',
          ],
        },
        'administration/system-parameters',
      ],
    },
    {
      type: 'category',
      label: 'Security and Access',
      collapsed: true,
      items: [
        'security-and-access/index',
        'security-and-access/directory-services',
        {
          type: 'category',
          label: 'Single Sign-On',
          collapsed: true,
          items: [
            'security-and-access/single-sign-on/index',
            'security-and-access/single-sign-on/azure-ad',
            'security-and-access/single-sign-on/okta',
          ],
        },
        {
          type: 'category',
          label: 'Deny/Allow Lists',
          collapsed: true,
          items: [
            'security-and-access/deny-allow-lists/index',
            'security-and-access/deny-allow-lists/denylists',
            'security-and-access/deny-allow-lists/allowlists',
            'security-and-access/deny-allow-lists/url-categories',
          ],
        },
        'security-and-access/offline-temporary-password',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring and Reporting',
      collapsed: true,
      items: [
        'monitoring-and-reporting/index',
        'monitoring-and-reporting/alerts',
        'monitoring-and-reporting/reports-and-analysis',
      ],
    },
    {
      type: 'category',
      label: 'Deployment Scenarios',
      collapsed: true,
      items: [
        'deployment-scenarios/index',
        {
          type: 'category',
          label: 'Active Directory',
          collapsed: true,
          items: [
            'deployment-scenarios/active-directory/index',
            'deployment-scenarios/active-directory/deployment',
            'deployment-scenarios/active-directory/filters',
            'deployment-scenarios/active-directory/group-policy',
            'deployment-scenarios/active-directory/wmi-integration',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Platforms',
          collapsed: true,
          items: [
            'deployment-scenarios/cloud-platforms/index',
            {
              type: 'category',
              label: 'AWS',
              collapsed: true,
              items: [
                'deployment-scenarios/cloud-platforms/aws/index',
                'deployment-scenarios/cloud-platforms/aws/deployment',
                'deployment-scenarios/cloud-platforms/aws/elastic-ip',
              ],
            },
            {
              type: 'category',
              label: 'Azure',
              collapsed: true,
              items: [
                'deployment-scenarios/cloud-platforms/azure/index',
                'deployment-scenarios/cloud-platforms/azure/deployment',
                'deployment-scenarios/cloud-platforms/azure/disk-creation',
                'deployment-scenarios/cloud-platforms/azure/virtual-machine',
              ],
            },
            {
              type: 'category',
              label: 'Google Cloud',
              collapsed: true,
              items: [
                'deployment-scenarios/cloud-platforms/google-cloud/index',
                'deployment-scenarios/cloud-platforms/google-cloud/deployment',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: ['reference/index', 'reference/support', 'reference/appliance-management'],
    },
  ],
};

export default sidebars;
