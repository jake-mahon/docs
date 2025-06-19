// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  passwordPolicyEnforcerSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Password Policy Enforcer Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/whats-new',
        'getting-started/installation',
        'getting-started/upgrading',
        'getting-started/evaluation-guide',
      ],
    },
    {
      type: 'category',
      label: 'Installation and Deployment',
      collapsed: true,
      items: [
        'installation-and-deployment/system-requirements',
        'installation-and-deployment/installation-types',
        'installation-and-deployment/password-policy-client',
        'installation-and-deployment/automated-deployment',
        'installation-and-deployment/uninstalling',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/index',
        'administration/management-console',
        'administration/connecting-to-domains',
        'administration/license-management',
      ],
    },
    {
      type: 'category',
      label: 'Password Policies',
      collapsed: true,
      items: [
        'password-policies/creating-policies',
        'password-policies/policy-configuration',
        'password-policies/assigning-policies',
        'password-policies/policy-priorities',
        'password-policies/testing-policies',
      ],
    },
    {
      type: 'category',
      label: 'Password Rules',
      collapsed: true,
      items: [
        'password-rules/index',
        'password-rules/basic-rules',
        'password-rules/character-rules',
        'password-rules/pattern-rules',
        'password-rules/advanced-rules',
        'password-rules/custom-rules',
      ],
    },
    {
      type: 'category',
      label: 'Messaging and Notifications',
      collapsed: true,
      items: [
        'messaging-and-notifications/message-templates',
        'messaging-and-notifications/email-configuration',
        'messaging-and-notifications/multilingual-support',
        'messaging-and-notifications/notification-delivery',
      ],
    },
    {
      type: 'category',
      label: 'Tools and Utilities',
      collapsed: true,
      items: [
        'tools-and-utilities/command-line-tools',
        'tools-and-utilities/support-tools',
        'tools-and-utilities/hibp-updater',
        'tools-and-utilities/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Web Interface',
      collapsed: true,
      items: [
        'web-interface/index',
        'web-interface/installation',
        'web-interface/configuration',
        'web-interface/using-web-interface',
        'web-interface/customizing-templates',
        'web-interface/security',
      ],
    },
    {
      type: 'category',
      label: 'Password Reset',
      collapsed: true,
      items: [
        'password-reset/index',
        'password-reset/installation',
        'password-reset/configuration',
        'password-reset/enrollment',
        'password-reset/using-password-reset',
        'password-reset/security-settings',
        'password-reset/data-management',
        'password-reset/best-practices',
      ],
    },
  ],
};

export default sidebars;
