// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  passwordResetSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Password Reset Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/what-is-new',
        'getting-started/installation',
        'getting-started/quick-start-guide',
      ],
    },
    {
      type: 'category',
      label: 'Password Reset',
      collapsed: true,
      items: [
        'password-reset/index',
        {
          type: 'category',
          label: 'Configuration',
          collapsed: true,
          items: [
            'password-reset/configuration/index',
            'password-reset/configuration/general-settings',
            'password-reset/configuration/email-configuration',
            'password-reset/configuration/enrollment-settings',
            'password-reset/configuration/verification-methods',
            'password-reset/configuration/security-settings',
            'password-reset/configuration/permissions',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          collapsed: true,
          items: [
            'password-reset/administration/data-console',
            'password-reset/administration/database-management',
            'password-reset/administration/html-template-customization',
            'password-reset/administration/user-enrollment',
          ],
        },
        {
          type: 'category',
          label: 'Usage',
          collapsed: true,
          items: [
            'password-reset/usage/password-reset-client',
            'password-reset/usage/using-password-reset',
            'password-reset/usage/filtering-and-reporting',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsed: true,
          items: [
            'password-reset/advanced/securing-password-reset',
            'password-reset/advanced/sql-server-migration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Password Policy Enforcer',
      collapsed: true,
      items: [
        'password-policy-enforcer/index',
        {
          type: 'category',
          label: 'Configuration',
          collapsed: true,
          items: [
            'password-policy-enforcer/configuration/password-policy-client',
            'password-policy-enforcer/configuration/similarity-rules',
          ],
        },
        'password-policy-enforcer/evaluation/index',
      ],
    },
  ],
};

export default sidebars;
