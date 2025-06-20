// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  passwordreset323Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Password Reset 3.23',
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/whats-new',
        'getting-started/evaluation-guide',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Installation & Setup',
      collapsed: true,
      items: ['installation-setup/installation-guide'],
    },
    {
      type: 'category',
      label: '🔧 Configuration',
      collapsed: true,
      items: [
        'configuration/basic-configuration',
        'configuration/password-policies',
        'configuration/domain-local-policies',
        'configuration/email-configuration',
        'configuration/security-settings',
        'configuration/html-templates',
      ],
    },
    {
      type: 'category',
      label: '👤 Administration',
      collapsed: true,
      items: [
        'administration/managing-policies',
        'administration/user-enrollment',
        'administration/data-console',
        'administration/database-management',
        'administration/apr-website',
      ],
    },
    {
      type: 'category',
      label: '📖 User Guides',
      collapsed: true,
      items: ['user-guides/using-password-reset', 'user-guides/password-policy-client'],
    },
  ],
};

export default sidebars;
