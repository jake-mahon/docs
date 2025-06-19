// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  passwordSecureSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'PasswordSecure Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/why-passwordsecure',
        'getting-started/whats-new',
        'getting-started/quick-start-guide',
      ],
    },
    {
      type: 'category',
      label: 'Installation & Setup',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'System Requirements',
          collapsed: true,
          items: [
            'installation-setup/system-requirements/client-requirements',
            'installation-setup/system-requirements/server-requirements',
            'installation-setup/system-requirements/web-server-requirements',
            'installation-setup/system-requirements/database-requirements',
            'installation-setup/system-requirements/mobile-requirements',
          ],
        },
        {
          type: 'category',
          label: 'Server Installation',
          collapsed: true,
          items: [
            'installation-setup/server-installation/server-manager-installation',
            'installation-setup/server-installation/setup-wizard',
            'installation-setup/server-installation/creating-databases',
            'installation-setup/server-installation/basic-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Client Installation',
          collapsed: true,
          items: [
            'installation-setup/client-installation/client-installation',
            'installation-setup/client-installation/installation-parameters',
            'installation-setup/client-installation/offline-client-setup',
          ],
        },
        {
          type: 'category',
          label: 'Web Application Installation',
          collapsed: true,
          items: [
            'installation-setup/web-application-installation/web-application-overview',
            'installation-setup/web-application-installation/iis-configuration',
            'installation-setup/web-application-installation/apache-configuration',
            'installation-setup/web-application-installation/nginx-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Browser Extension Installation',
          collapsed: true,
          items: [
            'installation-setup/browser-extension-installation/browser-extension-overview',
            'installation-setup/browser-extension-installation/chrome-installation',
            'installation-setup/browser-extension-installation/firefox-installation',
            'installation-setup/browser-extension-installation/edge-installation',
            'installation-setup/browser-extension-installation/safari-installation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Password Management',
          collapsed: true,
          items: [
            'core-features/password-management/passwords-overview',
            'core-features/password-management/creating-passwords',
            'core-features/password-management/organizing-passwords',
            'core-features/password-management/password-settings',
            'core-features/password-management/password-history',
            'core-features/password-management/password-generator',
            'core-features/password-management/password-rules',
            'core-features/password-management/recycle-bin',
          ],
        },
        {
          type: 'category',
          label: 'Applications',
          collapsed: true,
          items: [
            'core-features/applications/applications-overview',
            'core-features/applications/application-configuration',
            'core-features/applications/rdp-ssh-applications',
            'core-features/applications/saml-configuration',
            'core-features/applications/application-examples',
            'core-features/applications/session-recording',
          ],
        },
        {
          type: 'category',
          label: 'Organizational Structure',
          collapsed: true,
          items: [
            'core-features/organizational-structure/organizational-overview',
            'core-features/organizational-structure/managing-users',
            'core-features/organizational-structure/directory-services',
            'core-features/organizational-structure/active-directory-integration',
            'core-features/organizational-structure/entra-id-integration',
          ],
        },
        {
          type: 'category',
          label: 'Forms Module',
          collapsed: true,
          items: [
            'core-features/forms-module/forms-overview',
            'core-features/forms-module/change-forms',
          ],
        },
        {
          type: 'doc',
          id: 'core-features/documents/documents-management',
          label: 'Documents',
        },
        {
          type: 'category',
          label: 'Discovery Service',
          collapsed: true,
          items: [
            'core-features/discovery-service/discovery-overview',
            'core-features/discovery-service/discovery-configuration',
            'core-features/discovery-service/discovered-entries',
            'core-features/discovery-service/converting-entries',
          ],
        },
        {
          type: 'category',
          label: 'Password Reset',
          collapsed: true,
          items: [
            'core-features/password-reset/password-reset-overview',
            'core-features/password-reset/password-reset-configuration',
            'core-features/password-reset/password-reset-scripts',
            'core-features/password-reset/rollback-functionality',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Security & Permissions',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Permission Concept',
          collapsed: true,
          items: [
            'security-permissions/permission-concept/permission-overview',
            'security-permissions/permission-concept/manual-permissions',
            'security-permissions/permission-concept/automated-permissions',
            'security-permissions/permission-concept/permission-inheritance',
            'security-permissions/permission-concept/rights-templates',
          ],
        },
        {
          type: 'category',
          label: 'Authentication',
          collapsed: true,
          items: [
            'security-permissions/authentication/first-factor-authentication',
            'security-permissions/authentication/multifactor-authentication',
            'security-permissions/authentication/otp-authentication',
            'security-permissions/authentication/yubikey-authentication',
            'security-permissions/authentication/radius-authentication',
          ],
        },
        {
          type: 'category',
          label: 'Protective Mechanisms',
          collapsed: true,
          items: [
            'security-permissions/protective-mechanisms/protective-overview',
            'security-permissions/protective-mechanisms/password-masking',
            'security-permissions/protective-mechanisms/seals',
            'security-permissions/protective-mechanisms/temporary-permissions',
            'security-permissions/protective-mechanisms/visibility-controls',
          ],
        },
        {
          type: 'doc',
          id: 'security-permissions/roles-management/roles-overview',
          label: 'Roles Management',
        },
        {
          type: 'category',
          label: 'Encryption',
          collapsed: true,
          items: [
            'security-permissions/encryption/end-to-end-encryption',
            'security-permissions/encryption/masterkey-mode',
          ],
        },
        {
          type: 'category',
          label: 'Certificates',
          collapsed: true,
          items: [
            'security-permissions/certificates/certificates-overview',
            'security-permissions/certificates/ssl-certificates',
            'security-permissions/certificates/database-certificates',
            'security-permissions/certificates/hsm-connection',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Interfaces',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Advanced View',
          collapsed: true,
          items: [
            'user-interfaces/advanced-view/advanced-view-overview',
            'user-interfaces/advanced-view/dashboard-widgets',
            'user-interfaces/advanced-view/navigation-ribbon',
            'user-interfaces/advanced-view/search-filter',
            'user-interfaces/advanced-view/list-view',
            'user-interfaces/advanced-view/reading-pane',
            'user-interfaces/advanced-view/keyboard-shortcuts',
          ],
        },
        {
          type: 'category',
          label: 'Basic View',
          collapsed: true,
          items: [
            'user-interfaces/basic-view/basic-view-overview',
            'user-interfaces/basic-view/tab-system',
          ],
        },
        {
          type: 'category',
          label: 'Web Application',
          collapsed: true,
          items: [
            'user-interfaces/web-application/web-application-overview',
            'user-interfaces/web-application/web-navigation',
            'user-interfaces/web-application/web-features',
          ],
        },
        {
          type: 'category',
          label: 'Mobile Apps',
          collapsed: true,
          items: [
            'user-interfaces/mobile-apps/mobile-overview',
            'user-interfaces/mobile-apps/mobile-setup',
            'user-interfaces/mobile-apps/biometric-login',
            'user-interfaces/mobile-apps/mobile-autofill',
            'user-interfaces/mobile-apps/mobile-synchronization',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Browser Extensions',
          collapsed: true,
          items: [
            'integrations/browser-extensions/browser-extension-overview',
            'integrations/browser-extensions/extension-configuration',
            'integrations/browser-extensions/autofill-addon',
            'integrations/browser-extensions/saving-passwords',
          ],
        },
        {
          type: 'doc',
          id: 'integrations/api-sdk/api-sdk-overview',
          label: 'API & SDK',
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Server Management',
          collapsed: true,
          items: [
            'administration/server-management/server-manager-overview',
            'administration/server-management/database-management',
            'administration/server-management/database-properties',
            'administration/server-management/database-firewall',
            'administration/server-management/session-timeout',
            'administration/server-management/syslog-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Backup & Recovery',
          collapsed: true,
          items: [
            'administration/backup-recovery/backup-settings',
            'administration/backup-recovery/backup-management',
            'administration/backup-recovery/automated-cleanup',
            'administration/backup-recovery/disaster-recovery',
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          collapsed: true,
          items: [
            'administration/user-management/user-rights',
            'administration/user-management/user-settings',
          ],
        },
        {
          type: 'category',
          label: 'System Administration',
          collapsed: true,
          items: [
            'administration/system-administration/license-management',
            'administration/system-administration/advanced-settings',
            'administration/system-administration/settlement-rights',
            'administration/system-administration/ecc-migration',
          ],
        },
        {
          type: 'doc',
          id: 'administration/reporting/reports-overview',
          label: 'Reporting',
        },
        {
          type: 'category',
          label: 'Import & Export',
          collapsed: true,
          items: [
            'administration/import-export/import-data',
            'administration/import-export/export-wizard',
            'administration/import-export/html-export',
          ],
        },
        {
          type: 'category',
          label: 'MSP Features',
          collapsed: true,
          items: [
            'administration/msp-features/msp-overview',
            'administration/msp-features/customer-management',
            'administration/msp-features/cost-overview',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'operations/notifications/notifications-overview',
          label: 'Notifications',
        },
        {
          type: 'doc',
          id: 'operations/logbook/logbook-overview',
          label: 'Logbook',
        },
        {
          type: 'category',
          label: 'Tags',
          collapsed: true,
          items: ['operations/tags/tags-overview', 'operations/tags/tag-management'],
        },
        {
          type: 'category',
          label: 'System Tasks',
          collapsed: true,
          items: [
            'operations/system-tasks/system-tasks-overview',
            'operations/system-tasks/emergency-webviewer',
          ],
        },
        {
          type: 'category',
          label: 'Extras',
          collapsed: true,
          items: [
            'operations/extras/image-management',
            'operations/extras/seal-templates',
            'operations/extras/trash-management',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Maintenance',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'maintenance/updates/update-procedures',
          label: 'Updates',
        },
        {
          type: 'category',
          label: 'Migration',
          collapsed: true,
          items: [
            'maintenance/migration/migration-guide',
            'maintenance/migration/server-migration',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          collapsed: true,
          items: [
            'maintenance/troubleshooting/error-codes',
            'maintenance/troubleshooting/connection-problems',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'FAQ',
          collapsed: true,
          items: [
            'reference/faq/security-faq',
            'reference/faq/high-availability',
            'reference/faq/penetration-testing',
          ],
        },
        {
          type: 'doc',
          id: 'reference/version-history/version-history',
          label: 'Version History',
        },
      ],
    },
    {
      type: 'category',
      label: 'End User Guide',
      collapsed: true,
      items: [
        'end-user-guide/end-user-overview',
        'end-user-guide/managing-passwords',
        'end-user-guide/using-browser-extension',
        'end-user-guide/organizing-passwords',
      ],
    },
  ],
};

export default sidebars;
