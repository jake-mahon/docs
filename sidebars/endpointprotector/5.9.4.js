// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  endpointProtectorSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Endpoint Protector Overview',
    },
    'overview',
    'whats-new',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/requirements',
        'getting-started/components',
        'getting-started/setup-wizard',
        'getting-started/server-client-communication',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/index',
        'installation/virtual-appliance',
        {
          type: 'category',
          label: 'Cloud Deployment',
          collapsed: true,
          items: [
            'installation/cloud-deployment/index',
            'installation/cloud-deployment/amazon-web-services',
            'installation/cloud-deployment/microsoft-azure',
            'installation/cloud-deployment/google-cloud-platform',
          ],
        },
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
          label: 'Active Directory',
          collapsed: true,
          items: [
            'installation/active-directory/index',
            'installation/active-directory/deployment',
            'installation/active-directory/creating-filters',
            'installation/active-directory/group-policy',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Agent Deployment',
      collapsed: true,
      items: [
        'agent-deployment/index',
        {
          type: 'category',
          label: 'Intune',
          collapsed: true,
          items: [
            'agent-deployment/intune/index',
            'agent-deployment/intune/windows-deployment',
            'agent-deployment/intune/macos-deployment',
          ],
        },
        {
          type: 'category',
          label: 'Jamf',
          collapsed: true,
          items: [
            'agent-deployment/jamf/index',
            'agent-deployment/jamf/configuration',
            'agent-deployment/jamf/policy-creation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Device Control',
          collapsed: true,
          items: [
            'features/device-control/index',
            'features/device-control/global-settings',
            'features/device-control/users-and-groups',
            'features/device-control/devices-and-computers',
            'features/device-control/custom-classes',
            'features/device-control/use-cases',
          ],
        },
        {
          type: 'category',
          label: 'Content Aware Protection',
          collapsed: true,
          items: [
            'features/content-aware-protection/index',
            'features/content-aware-protection/policies',
            'features/content-aware-protection/content-detection',
            'features/content-aware-protection/deep-packet-inspection',
            'features/content-aware-protection/use-cases',
          ],
        },
        {
          type: 'category',
          label: 'Enforced Encryption',
          collapsed: true,
          items: ['features/enforced-encryption/index'],
        },
        {
          type: 'category',
          label: 'eDiscovery',
          collapsed: true,
          items: ['features/ediscovery/index'],
        },
        {
          type: 'category',
          label: 'Denylists and Allowlists',
          collapsed: true,
          items: [
            'features/denylists-and-allowlists/index',
            'features/denylists-and-allowlists/denylists',
            'features/denylists-and-allowlists/allowlists',
            'features/denylists-and-allowlists/url-categories',
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
        'administration/server-login',
        'administration/dashboard',
        'administration/alerts',
        'administration/reports-and-analysis',
        'administration/directory-services',
        'administration/offline-temporary-password',
        'administration/updates',
      ],
    },
    {
      type: 'category',
      label: 'System Configuration',
      collapsed: true,
      items: [
        'system-configuration/index',
        'system-configuration/system-settings',
        'system-configuration/system-security',
        'system-configuration/system-licensing',
        'system-configuration/admin-and-access',
        {
          type: 'category',
          label: 'Single Sign-On',
          collapsed: true,
          items: [
            'system-configuration/single-sign-on/index',
            'system-configuration/single-sign-on/azure-ad',
            'system-configuration/single-sign-on/okta',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'System Management',
      collapsed: true,
      items: [
        'system-management/index',
        {
          type: 'category',
          label: 'Maintenance',
          collapsed: true,
          items: [
            'system-management/maintenance/index',
            'system-management/maintenance/backup',
            'system-management/maintenance/shadow-repository',
          ],
        },
        'system-management/appliance-settings',
        'system-management/system-parameters',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      collapsed: true,
      items: ['support/index'],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: ['reference/file-formats', 'reference/client-requirements'],
    },
  ],
};

export default sidebars;
