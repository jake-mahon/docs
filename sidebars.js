// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Product sidebar with all items from the image
  productSidebar: [
    {
      type: 'category',
      label: 'Products',
      items: [
        'products/1secure',
        'products/access-analyzer',
        'products/activity-monitor',
        'products/auditor',
        'products/change-tracker',
        'products/data-classification',
        'products/directory-manager',
        'products/endpoint-policy-manager',
        'products/endpoint-protector',
        'products/identity-manager',
        'products/password-policy-enforcer',
        'products/password-reset',
        'products/password-secure',
        'products/pingcastle',
        'products/platform-governance-netsuite',
        'products/platform-governance-salesforce',
        'products/privilege-secure',
        'products/recovery-active-directory',
        'products/threat-manager',
        'products/threat-prevention',
      ],
    },
  ],
};

export default sidebars;
