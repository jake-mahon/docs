/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  endpointpolicymanagerSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Overview',
    },

    // Getting Started
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'getting-started/index',
        'getting-started/overview',
        'getting-started/basic-concepts',
        'getting-started/prepare-environment',
        'getting-started/fastest-deployment',
        {
          type: 'category',
          label: 'Quickstart Guides',
          items: [
            'getting-started/quickstart-guides/index',
            'getting-started/quickstart-guides/cloud',
            'getting-started/quickstart-guides/group-policy',
            'getting-started/quickstart-guides/mdm',
            'getting-started/quickstart-guides/download-contents',
          ],
        },
      ],
      collapsed: false,
    },

    // Installation and Deployment
    {
      type: 'category',
      label: '⚙️ Installation and Deployment',
      items: [
        'installation-and-deployment/index',
        'installation-and-deployment/installation-methods',
        'installation-and-deployment/client-side-extension',
        'installation-and-deployment/admin-console',
        'installation-and-deployment/antivirus-compatibility',
        'installation-and-deployment/services',
        {
          type: 'category',
          label: 'Deployment Tools',
          items: [
            'installation-and-deployment/deployment-tools/sccm',
            'installation-and-deployment/deployment-tools/powershell',
            'installation-and-deployment/deployment-tools/pdq-deploy',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Installation',
          items: [
            'installation-and-deployment/cloud-installation/index',
            'installation-and-deployment/cloud-installation/active-directory',
            'installation-and-deployment/cloud-installation/client-installation',
            'installation-and-deployment/cloud-installation/domain-and-non-domain',
            'installation-and-deployment/cloud-installation/remote-clients',
            'installation-and-deployment/cloud-installation/silent-installation',
          ],
        },
        {
          type: 'category',
          label: 'Updates and Upgrades',
          items: [
            'installation-and-deployment/updates-and-upgrades/update-frequency',
            'installation-and-deployment/updates-and-upgrades/command-line-updates',
            'installation-and-deployment/updates-and-upgrades/upgrade-settings',
            'installation-and-deployment/updates-and-upgrades/deployment-rings',
          ],
        },
        'installation-and-deployment/uninstallation',
      ],
    },

    // Licensing
    {
      type: 'category',
      label: '📜 Licensing',
      items: [
        'licensing/index',
        'licensing/license-overview',
        'licensing/license-tool',
        'licensing/trial-licensing',
        'licensing/universal-licensing',
        {
          type: 'category',
          label: 'Active Directory Licensing',
          items: [
            'licensing/active-directory-licensing/index',
            'licensing/active-directory-licensing/domain-setup',
            'licensing/active-directory-licensing/ou-management',
            'licensing/active-directory-licensing/scope-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Licensing',
          items: [
            'licensing/cloud-licensing/index',
            'licensing/cloud-licensing/billing',
            'licensing/cloud-licensing/license-status',
            'licensing/cloud-licensing/usage-tracking',
          ],
        },
        {
          type: 'category',
          label: 'MDM Licensing',
          items: [
            'licensing/mdm-licensing/index',
            'licensing/mdm-licensing/intune-setup',
            'licensing/mdm-licensing/autopilot',
            'licensing/mdm-licensing/hybrid-environments',
          ],
        },
        {
          type: 'category',
          label: 'Virtualization Licensing',
          items: [
            'licensing/virtualization-licensing/index',
            'licensing/virtualization-licensing/virtual-desktops',
            'licensing/virtualization-licensing/terminal-services',
            'licensing/virtualization-licensing/multisession-environments',
          ],
        },
        {
          type: 'category',
          label: 'Unlicensing',
          items: [
            'licensing/unlicensing/index',
            'licensing/unlicensing/component-unlicensing',
            'licensing/unlicensing/forced-disabled',
          ],
        },
      ],
    },

    // Policy Management
    {
      type: 'category',
      label: '📋 Policy Management',
      items: [
        'policy-management/index',
        {
          type: 'category',
          label: 'Administrative Templates',
          items: [
            'policy-management/administrative-templates/index',
            'policy-management/administrative-templates/overview',
            'policy-management/administrative-templates/settings-management',
            'policy-management/administrative-templates/comments',
            'policy-management/administrative-templates/export-policies',
            'policy-management/administrative-templates/existing-gpos',
            'policy-management/administrative-templates/item-level-targeting',
            'policy-management/administrative-templates/priority-management',
            'policy-management/administrative-templates/versions',
            {
              type: 'category',
              label: 'Getting Started',
              items: [
                'policy-management/administrative-templates/getting-started/index',
                'policy-management/administrative-templates/getting-started/collection-overview',
                'policy-management/administrative-templates/getting-started/computer-side',
                'policy-management/administrative-templates/getting-started/user-side',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Group Policy Integration',
          items: [
            'policy-management/group-policy-integration/index',
            'policy-management/group-policy-integration/insert-user-info',
            'policy-management/group-policy-integration/item-level-targeting',
            'policy-management/group-policy-integration/cache-engine',
          ],
        },
        {
          type: 'category',
          label: 'Item Level Targeting',
          items: [
            'policy-management/item-level-targeting/index',
            'policy-management/item-level-targeting/apply-preferences',
            'policy-management/item-level-targeting/entra-id-groups',
            'policy-management/item-level-targeting/security-groups',
            'policy-management/item-level-targeting/virtual-desktops',
            'policy-management/item-level-targeting/windows-endpoints',
            'policy-management/item-level-targeting/windows-server',
          ],
        },
        {
          type: 'category',
          label: 'Preferences',
          items: [
            'policy-management/preferences/index',
            'policy-management/preferences/getting-started',
            'policy-management/preferences/component-licensing',
            'policy-management/preferences/drive-mappings',
            'policy-management/preferences/printer-deployment',
            'policy-management/preferences/password-management',
            'policy-management/preferences/settings-management',
            'policy-management/preferences/msi-deployment',
          ],
        },
      ],
    },

    // Application Management
    {
      type: 'category',
      label: '🖥️ Application Management',
      items: [
        'application-management/index',
        {
          type: 'category',
          label: 'Application Settings',
          items: [
            'application-management/application-settings/index',
            'application-management/application-settings/overview',
            'application-management/application-settings/central-store',
            'application-management/application-settings/dll-storage',
            'application-management/application-settings/one-time-settings',
            'application-management/application-settings/thinapp',
            'application-management/application-settings/xenapp',
            {
              type: 'category',
              label: 'Design Studio',
              items: [
                'application-management/application-settings/design-studio/index',
                'application-management/application-settings/design-studio/overview',
                'application-management/application-settings/design-studio/advanced-features',
                'application-management/application-settings/design-studio/configuration-wizard',
                'application-management/application-settings/design-studio/user-interface-capture',
                'application-management/application-settings/design-studio/navigation',
                'application-management/application-settings/design-studio/tools',
                'application-management/application-settings/design-studio/quickstart',
                'application-management/application-settings/design-studio/application-projects',
              ],
            },
            {
              type: 'category',
              label: 'Modes',
              items: [
                'application-management/application-settings/modes/index',
                'application-management/application-settings/modes/enforcement',
                'application-management/application-settings/modes/app-lock',
                'application-management/application-settings/modes/acl-lockdown',
                'application-management/application-settings/modes/delivery-settings',
                'application-management/application-settings/modes/reversion',
              ],
            },
            {
              type: 'category',
              label: 'Preconfigured Applications',
              items: [
                'application-management/application-settings/preconfigured-applications/index',
                'application-management/application-settings/preconfigured-applications/chrome',
                'application-management/application-settings/preconfigured-applications/firefox',
                'application-management/application-settings/preconfigured-applications/internet-explorer',
                'application-management/application-settings/preconfigured-applications/java',
              ],
            },
            {
              type: 'category',
              label: 'Extras',
              items: [
                'application-management/application-settings/extras/index',
                'application-management/application-settings/extras/managed-by',
                'application-management/application-settings/extras/multiple-appsets',
                'application-management/application-settings/extras/setting-description',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'File Associations',
          items: [
            'application-management/file-associations/index',
            'application-management/file-associations/overview',
            'application-management/file-associations/apply-mode',
            'application-management/file-associations/default-browser',
            'application-management/file-associations/helper-utility',
            'application-management/file-associations/map-extensions',
            'application-management/file-associations/oem-associations',
            'application-management/file-associations/registered-extensions',
            'application-management/file-associations/product-wizard',
            'application-management/file-associations/collections',
            'application-management/file-associations/item-level-targeting',
            'application-management/file-associations/windows-versions',
          ],
        },
        {
          type: 'category',
          label: 'Java Enterprise Rules',
          items: [
            'application-management/java-enterprise-rules/index',
            'application-management/java-enterprise-rules/overview',
            'application-management/java-enterprise-rules/getting-started',
            'application-management/java-enterprise-rules/evaluate-urls',
            'application-management/java-enterprise-rules/theory',
            'application-management/java-enterprise-rules/usage',
            'application-management/java-enterprise-rules/manager-ia',
            'application-management/java-enterprise-rules/wildcards',
            'application-management/java-enterprise-rules/virtualized-browsers',
            'application-management/java-enterprise-rules/item-level-targeting',
            'application-management/java-enterprise-rules/export-collections',
            'application-management/java-enterprise-rules/process-order',
            {
              type: 'category',
              label: 'Prompts',
              items: [
                'application-management/java-enterprise-rules/prompts/index',
                'application-management/java-enterprise-rules/prompts/firefox',
                'application-management/java-enterprise-rules/prompts/internet-explorer',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Browser Router',
          items: [
            'application-management/browser-router/index',
            'application-management/browser-router/overview',
            'application-management/browser-router/navigation',
            'application-management/browser-router/rules',
            'application-management/browser-router/policy-management',
            'application-management/browser-router/force-browser',
            'application-management/browser-router/default-browser',
            'application-management/browser-router/internet-explorer',
            'application-management/browser-router/edge-legacy',
            'application-management/browser-router/item-level-targeting',
            'application-management/browser-router/shortcut-icons',
            'application-management/browser-router/installation',
          ],
        },
      ],
    },

    // Security and Privilege Management
    {
      type: 'category',
      label: '🔒 Security and Privilege Management',
      items: [
        'security-and-privilege-management/index',
        {
          type: 'category',
          label: 'Least Privilege Manager',
          items: [
            'security-and-privilege-management/least-privilege-manager/index',
            'security-and-privilege-management/least-privilege-manager/overview',
            'security-and-privilege-management/least-privilege-manager/getting-started',
            {
              type: 'category',
              label: 'Best Practices',
              items: [
                'security-and-privilege-management/least-privilege-manager/best-practices/index',
                'security-and-privilege-management/least-privilege-manager/best-practices/child-processes',
                'security-and-privilege-management/least-privilege-manager/best-practices/dont-elevate',
                'security-and-privilege-management/least-privilege-manager/best-practices/examples-to-avoid',
                'security-and-privilege-management/least-privilege-manager/best-practices/file-info',
              ],
            },
            {
              type: 'category',
              label: 'Elevation Rules',
              items: [
                'security-and-privilege-management/least-privilege-manager/elevation-rules/index',
                'security-and-privilege-management/least-privilege-manager/elevation-rules/executables',
                'security-and-privilege-management/least-privilege-manager/elevation-rules/installers',
                'security-and-privilege-management/least-privilege-manager/elevation-rules/scripts',
                'security-and-privilege-management/least-privilege-manager/elevation-rules/registry',
                'security-and-privilege-management/least-privilege-manager/elevation-rules/activex-items',
                'security-and-privilege-management/least-privilege-manager/elevation-rules/control-panel',
                'security-and-privilege-management/least-privilege-manager/elevation-rules/java-files',
              ],
            },
            {
              type: 'category',
              label: 'Deny Rules',
              items: [
                'security-and-privilege-management/least-privilege-manager/deny-rules/index',
                'security-and-privilege-management/least-privilege-manager/deny-rules/standard-users',
                'security-and-privilege-management/least-privilege-manager/deny-rules/dlls',
                'security-and-privilege-management/least-privilege-manager/deny-rules/windows-universal',
              ],
            },
            {
              type: 'category',
              label: 'Admin Approval',
              items: [
                'security-and-privilege-management/least-privilege-manager/admin-approval/index',
                'security-and-privilege-management/least-privilege-manager/admin-approval/getting-started',
                'security-and-privilege-management/least-privilege-manager/admin-approval/overview',
                'security-and-privilege-management/least-privilege-manager/admin-approval/secret-key',
                'security-and-privilege-management/least-privilege-manager/admin-approval/avoid-popups',
                'security-and-privilege-management/least-privilege-manager/admin-approval/email-usage',
              ],
            },
            {
              type: 'category',
              label: 'Secure Run',
              items: [
                'security-and-privilege-management/least-privilege-manager/secure-run/index',
                'security-and-privilege-management/least-privilege-manager/secure-run/overview',
                'security-and-privilege-management/least-privilege-manager/secure-run/setup',
                'security-and-privilege-management/least-privilege-manager/secure-run/best-practices',
                'security-and-privilege-management/least-privilege-manager/secure-run/avoid-uac',
                'security-and-privilege-management/least-privilege-manager/secure-run/inline-commands',
                'security-and-privilege-management/least-privilege-manager/secure-run/powershell-enabling',
              ],
            },
            {
              type: 'category',
              label: 'PowerShell Management',
              items: [
                'security-and-privilege-management/least-privilege-manager/powershell-management/blocking',
                'security-and-privilege-management/least-privilege-manager/powershell-management/malicious-attacks',
              ],
            },
            {
              type: 'category',
              label: 'Scope Filters',
              items: [
                'security-and-privilege-management/least-privilege-manager/scope-filters/index',
                'security-and-privilege-management/least-privilege-manager/scope-filters/block-admins',
                'security-and-privilege-management/least-privilege-manager/scope-filters/block-apps',
                'security-and-privilege-management/least-privilege-manager/scope-filters/elevate-service-account',
                'security-and-privilege-management/least-privilege-manager/scope-filters/enhanced-secure-run',
              ],
            },
            {
              type: 'category',
              label: 'Events and Auditing',
              items: [
                'security-and-privilege-management/least-privilege-manager/events-and-auditing/index',
                'security-and-privilege-management/least-privilege-manager/events-and-auditing/client-events',
                'security-and-privilege-management/least-privilege-manager/events-and-auditing/operational-events',
                'security-and-privilege-management/least-privilege-manager/events-and-auditing/create-policy',
                'security-and-privilege-management/least-privilege-manager/events-and-auditing/auditing-settings',
              ],
            },
            {
              type: 'category',
              label: 'Tools',
              items: [
                'security-and-privilege-management/least-privilege-manager/tools/helper-tools',
                'security-and-privilege-management/least-privilege-manager/tools/rules-generator',
              ],
            },
            'security-and-privilege-management/least-privilege-manager/digital-signature',
            'security-and-privilege-management/least-privilege-manager/edit-rights',
            'security-and-privilege-management/least-privilege-manager/export',
            'security-and-privilege-management/least-privilege-manager/license',
            'security-and-privilege-management/least-privilege-manager/macro-attacks',
            'security-and-privilege-management/least-privilege-manager/parent-process-filter',
            'security-and-privilege-management/least-privilege-manager/reauthentication',
            'security-and-privilege-management/least-privilege-manager/reduce-admin-rights',
            'security-and-privilege-management/least-privilege-manager/run-as-admin',
            'security-and-privilege-management/least-privilege-manager/secure-copy',
            'security-and-privilege-management/least-privilege-manager/subprocesses',
            'security-and-privilege-management/least-privilege-manager/wildcards',
            'security-and-privilege-management/least-privilege-manager/windows-event-forwarding',
          ],
        },
        {
          type: 'category',
          label: 'Security Settings',
          items: [
            'security-and-privilege-management/security-settings/index',
            'security-and-privilege-management/security-settings/overview',
            'security-and-privilege-management/security-settings/getting-started',
            'security-and-privilege-management/security-settings/policy-editor',
            'security-and-privilege-management/security-settings/item-level-targeting',
            'security-and-privilege-management/security-settings/export-collections',
            'security-and-privilege-management/security-settings/process-order',
          ],
        },
        {
          type: 'category',
          label: 'GPO Export',
          items: [
            'security-and-privilege-management/gpo-export/index',
            'security-and-privilege-management/gpo-export/deliver-certificates',
            'security-and-privilege-management/gpo-export/security-settings',
            'security-and-privilege-management/gpo-export/user-context',
          ],
        },
      ],
    },

    // Device and Desktop Management
    {
      type: 'category',
      label: '🖱️ Device and Desktop Management',
      items: [
        'device-and-desktop-management/index',
        {
          type: 'category',
          label: 'Device Manager',
          items: [
            'device-and-desktop-management/device-manager/index',
            'device-and-desktop-management/device-manager/overview',
            'device-and-desktop-management/device-manager/global-device-manager',
            'device-and-desktop-management/device-manager/device-policies',
            'device-and-desktop-management/device-manager/rules',
            'device-and-desktop-management/device-manager/helper-tool',
            'device-and-desktop-management/device-manager/troubleshooting',
            'device-and-desktop-management/device-manager/registry',
            'device-and-desktop-management/device-manager/serial-number',
            'device-and-desktop-management/device-manager/usb-drive',
          ],
        },
        {
          type: 'category',
          label: 'Start Screen and Taskbar',
          items: [
            'device-and-desktop-management/start-screen-and-taskbar/index',
            'device-and-desktop-management/start-screen-and-taskbar/overview',
            'device-and-desktop-management/start-screen-and-taskbar/getting-started',
            'device-and-desktop-management/start-screen-and-taskbar/taskbar-management',
            'device-and-desktop-management/start-screen-and-taskbar/start-screen',
            'device-and-desktop-management/start-screen-and-taskbar/collections',
            'device-and-desktop-management/start-screen-and-taskbar/item-level-targeting',
            'device-and-desktop-management/start-screen-and-taskbar/export-collections',
            'device-and-desktop-management/start-screen-and-taskbar/process-order',
          ],
        },
        {
          type: 'category',
          label: 'Remote Desktop Protocol',
          items: [
            'device-and-desktop-management/remote-desktop-protocol/index',
            'device-and-desktop-management/remote-desktop-protocol/overview',
            'device-and-desktop-management/remote-desktop-protocol/import-rdp-file',
            'device-and-desktop-management/remote-desktop-protocol/policies-settings',
            'device-and-desktop-management/remote-desktop-protocol/item-level-targeting',
          ],
        },
      ],
    },

    // Cloud and Remote Management
    {
      type: 'category',
      label: '☁️ Cloud and Remote Management',
      items: [
        'cloud-and-remote-management/index',
        {
          type: 'category',
          label: 'Cloud Management',
          items: [
            'cloud-and-remote-management/cloud-management/index',
            'cloud-and-remote-management/cloud-management/overview',
            'cloud-and-remote-management/cloud-management/getting-started',
            'cloud-and-remote-management/cloud-management/concepts',
            'cloud-and-remote-management/cloud-management/quickstart',
            {
              type: 'category',
              label: 'Interface',
              items: [
                'cloud-and-remote-management/cloud-management/interface/index',
                'cloud-and-remote-management/cloud-management/interface/billing',
                'cloud-and-remote-management/cloud-management/interface/company-details',
                'cloud-and-remote-management/cloud-management/interface/computer-groups',
                'cloud-and-remote-management/cloud-management/interface/filebox',
                'cloud-and-remote-management/cloud-management/interface/license-status',
                'cloud-and-remote-management/cloud-management/interface/reports',
                'cloud-and-remote-management/cloud-management/interface/tools',
                'cloud-and-remote-management/cloud-management/interface/xml-data-files',
              ],
            },
            {
              type: 'category',
              label: 'User Management',
              items: [
                'cloud-and-remote-management/cloud-management/user-management/add-user',
                'cloud-and-remote-management/cloud-management/user-management/add-administrator',
                'cloud-and-remote-management/cloud-management/user-management/groups',
                'cloud-and-remote-management/cloud-management/user-management/two-factor-auth',
              ],
            },
            {
              type: 'category',
              label: 'Installation',
              items: [
                'cloud-and-remote-management/cloud-management/installation/index',
                'cloud-and-remote-management/cloud-management/installation/mac-client',
                'cloud-and-remote-management/cloud-management/installation/uninstall',
              ],
            },
            {
              type: 'category',
              label: 'Licensing',
              items: [
                'cloud-and-remote-management/cloud-management/licensing/index',
                'cloud-and-remote-management/cloud-management/licensing/computer-deletion',
                'cloud-and-remote-management/cloud-management/licensing/license-management',
                'cloud-and-remote-management/cloud-management/licensing/reconnection-period',
                'cloud-and-remote-management/cloud-management/licensing/vdi',
              ],
            },
            {
              type: 'category',
              label: 'Security',
              items: [
                'cloud-and-remote-management/cloud-management/security/data-safety',
                'cloud-and-remote-management/cloud-management/security/public-key-policies',
              ],
            },
            {
              type: 'category',
              label: 'Configuration',
              items: [
                'cloud-and-remote-management/cloud-management/configuration/sync-frequency',
                'cloud-and-remote-management/cloud-management/configuration/update-frequency',
                'cloud-and-remote-management/cloud-management/configuration/targeting-editor',
                'cloud-and-remote-management/cloud-management/configuration/policy-management',
                'cloud-and-remote-management/cloud-management/configuration/profile-update',
              ],
            },
            'cloud-and-remote-management/cloud-management/transition',
            'cloud-and-remote-management/cloud-management/verify',
            'cloud-and-remote-management/cloud-management/version',
            'cloud-and-remote-management/cloud-management/test-lab',
          ],
        },
        {
          type: 'category',
          label: 'Remote Work Delivery',
          items: [
            'cloud-and-remote-management/remote-work-delivery/index',
            'cloud-and-remote-management/remote-work-delivery/overview',
            'cloud-and-remote-management/remote-work-delivery/getting-started',
            'cloud-and-remote-management/remote-work-delivery/computer-side',
            'cloud-and-remote-management/remote-work-delivery/collections',
            'cloud-and-remote-management/remote-work-delivery/cloud-mdm',
            'cloud-and-remote-management/remote-work-delivery/install-sequentially',
            'cloud-and-remote-management/remote-work-delivery/install-uwp',
            'cloud-and-remote-management/remote-work-delivery/printers',
            'cloud-and-remote-management/remote-work-delivery/variables',
            'cloud-and-remote-management/remote-work-delivery/item-level-targeting',
            'cloud-and-remote-management/remote-work-delivery/export-collections',
            'cloud-and-remote-management/remote-work-delivery/process-order',
            {
              type: 'category',
              label: 'Advanced',
              items: [
                'cloud-and-remote-management/remote-work-delivery/advanced/multiple-files',
                'cloud-and-remote-management/remote-work-delivery/advanced/recursion',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'MDM Integration',
          items: [
            'cloud-and-remote-management/mdm-integration/index',
            'cloud-and-remote-management/mdm-integration/overview',
            'cloud-and-remote-management/mdm-integration/getting-started',
            'cloud-and-remote-management/mdm-integration/stack-msi',
            'cloud-and-remote-management/mdm-integration/uem-tools',
            {
              type: 'category',
              label: 'Services',
              items: [
                'cloud-and-remote-management/mdm-integration/services/index',
                'cloud-and-remote-management/mdm-integration/services/microsoft-intune',
                'cloud-and-remote-management/mdm-integration/services/mobile-iron',
                'cloud-and-remote-management/mdm-integration/services/vmware-workspace-one',
              ],
            },
            {
              type: 'category',
              label: 'Tips',
              items: [
                'cloud-and-remote-management/mdm-integration/tips/index',
                'cloud-and-remote-management/mdm-integration/tips/copy-paste',
                'cloud-and-remote-management/mdm-integration/tips/enable-priority',
                'cloud-and-remote-management/mdm-integration/tips/manual-config',
                'cloud-and-remote-management/mdm-integration/tips/modify-settings',
                'cloud-and-remote-management/mdm-integration/tips/process-order',
                'cloud-and-remote-management/mdm-integration/tips/recycle-settings',
              ],
            },
            {
              type: 'category',
              label: 'XML Data Files',
              items: [
                'cloud-and-remote-management/mdm-integration/xml-data-files/index',
                'cloud-and-remote-management/mdm-integration/xml-data-files/administrative-templates',
                'cloud-and-remote-management/mdm-integration/xml-data-files/application-settings',
                'cloud-and-remote-management/mdm-integration/xml-data-files/browser-router',
                'cloud-and-remote-management/mdm-integration/xml-data-files/feature-management',
                'cloud-and-remote-management/mdm-integration/xml-data-files/file-associations',
                'cloud-and-remote-management/mdm-integration/xml-data-files/java-enterprise-rules',
                'cloud-and-remote-management/mdm-integration/xml-data-files/least-privilege-manager',
                'cloud-and-remote-management/mdm-integration/xml-data-files/preferences',
                'cloud-and-remote-management/mdm-integration/xml-data-files/scripts',
                'cloud-and-remote-management/mdm-integration/xml-data-files/security-settings',
                'cloud-and-remote-management/mdm-integration/xml-data-files/start-screen',
                'cloud-and-remote-management/mdm-integration/xml-data-files/taskbar',
              ],
            },
          ],
        },
      ],
    },

    // Automation and Scripting
    {
      type: 'category',
      label: '🤖 Automation and Scripting',
      items: [
        'automation-and-scripting/index',
        {
          type: 'category',
          label: 'Scripts and Triggers',
          items: [
            'automation-and-scripting/scripts-and-triggers/index',
            'automation-and-scripting/scripts-and-triggers/overview',
            'automation-and-scripting/scripts-and-triggers/advantages',
            {
              type: 'category',
              label: 'Getting Started',
              items: [
                'automation-and-scripting/scripts-and-triggers/getting-started/index',
                'automation-and-scripting/scripts-and-triggers/getting-started/computer-side',
                'automation-and-scripting/scripts-and-triggers/getting-started/shortcuts',
                'automation-and-scripting/scripts-and-triggers/getting-started/usage',
              ],
            },
            {
              type: 'category',
              label: 'Use Cases',
              items: [
                'automation-and-scripting/scripts-and-triggers/use-cases/bitlocker-deployment',
                'automation-and-scripting/scripts-and-triggers/use-cases/cylance',
                'automation-and-scripting/scripts-and-triggers/use-cases/edge-first-logon',
                'automation-and-scripting/scripts-and-triggers/use-cases/local-account-password',
                'automation-and-scripting/scripts-and-triggers/use-cases/local-scheduled-task',
                'automation-and-scripting/scripts-and-triggers/use-cases/mapped-drives',
                'automation-and-scripting/scripts-and-triggers/use-cases/multifactor-auth',
                'automation-and-scripting/scripts-and-triggers/use-cases/onedrive-automation',
                'automation-and-scripting/scripts-and-triggers/use-cases/powershell-scripts',
                'automation-and-scripting/scripts-and-triggers/use-cases/printer-install',
                'automation-and-scripting/scripts-and-triggers/use-cases/software-install',
                'automation-and-scripting/scripts-and-triggers/use-cases/vpn-connection',
                'automation-and-scripting/scripts-and-triggers/use-cases/wifi-setup',
                'automation-and-scripting/scripts-and-triggers/use-cases/windows-update',
              ],
            },
            {
              type: 'category',
              label: 'Features',
              items: [
                'automation-and-scripting/scripts-and-triggers/features/index',
                'automation-and-scripting/scripts-and-triggers/features/computer-side',
                'automation-and-scripting/scripts-and-triggers/features/user-side',
                'automation-and-scripting/scripts-and-triggers/features/ins-and-outs',
                'automation-and-scripting/scripts-and-triggers/features/save-time',
                'automation-and-scripting/scripts-and-triggers/features/update-cse',
                'automation-and-scripting/scripts-and-triggers/features/variables',
              ],
            },
            'automation-and-scripting/scripts-and-triggers/item-level-targeting',
            'automation-and-scripting/scripts-and-triggers/export-collections',
            'automation-and-scripting/scripts-and-triggers/process-order',
          ],
        },
        {
          type: 'category',
          label: 'Feature Management',
          items: [
            'automation-and-scripting/feature-management/index',
            'automation-and-scripting/feature-management/overview',
            'automation-and-scripting/feature-management/getting-started',
            'automation-and-scripting/feature-management/windows-servers',
            {
              type: 'category',
              label: 'Add/Remove Features',
              items: [
                'automation-and-scripting/feature-management/add-remove-features/index',
                'automation-and-scripting/feature-management/add-remove-features/collections',
                'automation-and-scripting/feature-management/add-remove-features/policies',
                'automation-and-scripting/feature-management/add-remove-features/testing',
              ],
            },
            {
              type: 'category',
              label: 'Advanced Features',
              items: [
                'automation-and-scripting/feature-management/advanced-features/index',
                'automation-and-scripting/feature-management/advanced-features/create-collection',
                'automation-and-scripting/feature-management/advanced-features/edit-collection',
                'automation-and-scripting/feature-management/advanced-features/edit-policy',
                'automation-and-scripting/feature-management/advanced-features/delete-policies',
                'automation-and-scripting/feature-management/advanced-features/mixed-rules',
              ],
            },
            {
              type: 'category',
              label: 'Item Level Targeting',
              items: [
                'automation-and-scripting/feature-management/item-level-targeting/index',
                'automation-and-scripting/feature-management/item-level-targeting/export-collections',
                'automation-and-scripting/feature-management/item-level-targeting/process-order',
              ],
            },
          ],
        },
      ],
    },

    // Compliance and Reporting
    {
      type: 'category',
      label: '📊 Compliance and Reporting',
      items: [
        'compliance-and-reporting/index',
        {
          type: 'category',
          label: 'Group Policy Compliance Reporter',
          items: [
            'compliance-and-reporting/group-policy-compliance-reporter/index',
            'compliance-and-reporting/group-policy-compliance-reporter/overview',
            'compliance-and-reporting/group-policy-compliance-reporter/concepts',
            'compliance-and-reporting/group-policy-compliance-reporter/installation',
            'compliance-and-reporting/group-policy-compliance-reporter/scenarios',
            'compliance-and-reporting/group-policy-compliance-reporter/delivery-reports',
            'compliance-and-reporting/group-policy-compliance-reporter/group-policy-results',
            'compliance-and-reporting/group-policy-compliance-reporter/domain-multiple',
            'compliance-and-reporting/group-policy-compliance-reporter/share-across-team',
            'compliance-and-reporting/group-policy-compliance-reporter/tests-src-order',
            {
              type: 'category',
              label: 'Licensing',
              items: [
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/index',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/basis',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/compliance-reports',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/expire',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/minimum',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/multiyear',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/tool',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/true-up',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/types',
                'compliance-and-reporting/group-policy-compliance-reporter/licensing/user-limit',
              ],
            },
            {
              type: 'category',
              label: 'Modes',
              items: [
                'compliance-and-reporting/group-policy-compliance-reporter/modes/index',
                'compliance-and-reporting/group-policy-compliance-reporter/modes/difference',
                'compliance-and-reporting/group-policy-compliance-reporter/modes/trial',
                {
                  type: 'category',
                  label: 'Pull Mode',
                  items: [
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/pull-mode/index',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/pull-mode/overview',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/pull-mode/history',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/pull-mode/results',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/pull-mode/snapshots',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/pull-mode/tests',
                  ],
                },
                {
                  type: 'category',
                  label: 'Push Mode',
                  items: [
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/index',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/overview',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/clientless-auditing',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/concepts',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/installation',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/results-reports',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/setup',
                    'compliance-and-reporting/group-policy-compliance-reporter/modes/push-mode/switch-mode',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Preparation',
              items: [
                'compliance-and-reporting/group-policy-compliance-reporter/preparation/index',
                'compliance-and-reporting/group-policy-compliance-reporter/preparation/client',
                'compliance-and-reporting/group-policy-compliance-reporter/preparation/configuration-wizard',
                'compliance-and-reporting/group-policy-compliance-reporter/preparation/licensing',
                'compliance-and-reporting/group-policy-compliance-reporter/preparation/trial-mode',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Editions',
          items: [
            'compliance-and-reporting/editions/index',
            'compliance-and-reporting/editions/overview',
            'compliance-and-reporting/editions/paks',
            'compliance-and-reporting/editions/policies',
            'compliance-and-reporting/editions/solutions',
          ],
        },
      ],
    },

    // Integrations
    {
      type: 'category',
      label: '🔗 Integrations',
      items: [
        'integrations/index',
        {
          type: 'category',
          label: 'Third-Party Integrations',
          items: [
            'integrations/third-party-integrations/app-locker',
            'integrations/third-party-integrations/app-v',
            'integrations/third-party-integrations/auditor-integration',
            'integrations/third-party-integrations/azure-virtual-desktop',
            'integrations/third-party-integrations/pdq-deploy',
            'integrations/third-party-integrations/service-now',
            'integrations/third-party-integrations/vdi-solutions',
          ],
        },
        {
          type: 'category',
          label: 'Privilege Secure',
          items: [
            'integrations/privilege-secure/index',
            'integrations/privilege-secure/overview',
            'integrations/privilege-secure/mmc',
            {
              type: 'category',
              label: 'Getting Started',
              items: [
                'integrations/privilege-secure/getting-started/client',
                'integrations/privilege-secure/getting-started/gui',
                'integrations/privilege-secure/getting-started/together',
              ],
            },
            {
              type: 'category',
              label: 'Credential Based',
              items: [
                'integrations/privilege-secure/credential-based/policy-match',
                'integrations/privilege-secure/credential-based/release-results',
                'integrations/privilege-secure/credential-based/setup-policy',
              ],
            },
            {
              type: 'category',
              label: 'Resource Based',
              items: [
                'integrations/privilege-secure/resource-based/closing-processes',
                'integrations/privilege-secure/resource-based/policy-match',
                'integrations/privilege-secure/resource-based/stored-videos',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Virtualization',
          items: [
            'integrations/virtualization/citrix-app-layering',
            'integrations/virtualization/xenapp',
            'integrations/virtualization/vmware-solutions',
          ],
        },
      ],
    },

    // Platform Specific
    {
      type: 'category',
      label: '💻 Platform Specific',
      items: [
        'platform-specific/index',
        {
          type: 'category',
          label: 'Mac Support',
          items: [
            'platform-specific/mac-support/index',
            'platform-specific/mac-support/overview',
            'platform-specific/mac-support/application-launch',
            'platform-specific/mac-support/install-client',
            'platform-specific/mac-support/logs',
            {
              type: 'category',
              label: 'Scenarios',
              items: [
                'platform-specific/mac-support/scenarios/index',
                'platform-specific/mac-support/scenarios/conditions',
                'platform-specific/mac-support/scenarios/launch-control',
                'platform-specific/mac-support/scenarios/mac-finder',
                'platform-specific/mac-support/scenarios/mac-priv-helper',
                'platform-specific/mac-support/scenarios/mount-unmount',
                'platform-specific/mac-support/scenarios/package-installation',
                'platform-specific/mac-support/scenarios/sudo',
                'platform-specific/mac-support/scenarios/system-settings',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Windows Requirements',
          items: [
            'platform-specific/windows-requirements/index',
            'platform-specific/windows-requirements/cloud-requirements',
            'platform-specific/windows-requirements/windows-7',
            'platform-specific/windows-requirements/windows-11',
            'platform-specific/windows-requirements/operating-systems',
            'platform-specific/windows-requirements/arm-support',
            'platform-specific/windows-requirements/sql-server',
            {
              type: 'category',
              label: 'Support Matrix',
              items: [
                'platform-specific/windows-requirements/support-matrix/index',
                'platform-specific/windows-requirements/support-matrix/application-virtualization',
                'platform-specific/windows-requirements/support-matrix/firefox-versions',
                'platform-specific/windows-requirements/support-matrix/java-versions',
                'platform-specific/windows-requirements/support-matrix/vpn-solutions',
                'platform-specific/windows-requirements/support-matrix/xenapp',
              ],
            },
          ],
        },
      ],
    },

    // Troubleshooting
    {
      type: 'category',
      label: '🔧 Troubleshooting',
      items: [
        'troubleshooting/index',
        'troubleshooting/overview',
        'troubleshooting/known-issues',
        'troubleshooting/log-analysis',
        'troubleshooting/common-problems',
        'troubleshooting/performance-issues',
        'troubleshooting/network-issues',
        'troubleshooting/deployment-issues',
        'troubleshooting/support-resources',
      ],
    },

    // References
    {
      type: 'category',
      label: '📚 References',
      items: ['manuals'],
    },

    // Archive
    {
      type: 'category',
      label: '📦 Archive',
      items: [
        'archive/index',
        'archive/deprecated-features',
        'archive/legacy-versions',
        {
          type: 'category',
          label: 'Archived Guides',
          items: [
            'archive/archived-guides/acrobat-x-pro',
            'archive/archived-guides/ie9-ie10',
            'archive/archived-guides/office-2013',
            'archive/archived-guides/opera-next',
            'archive/archived-guides/vmware-legacy',
            'archive/archived-guides/other-legacy',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
