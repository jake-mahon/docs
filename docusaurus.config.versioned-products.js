// @ts-check
// Versioned product configuration for selective building

// Set to true to enable a product, false to disable
const VERSIONED_PRODUCTS = {
  'accessinformationcenter_11.6': false,
  'activitymonitor_7.1': false,
  'auditor_10.6': true,
  'changetracker_8.0': false,
  'dataclassification_5.6.2': false,
  'endpointprotector_5.9.4': false,
  'enterpriseauditor_11.6': false,
  'groupid_11.0': false,
  'passwordpolicyenforcer_10.2': false,
  'passwordreset_3.23': false,
  'passwordsecure_9.1': false,
  'privilegesecure_4.1': false,
  'privilegesecurefordiscovery_2.21': false,
  'threatprevention_7.4': false,
  'usercube_6.1': false,
};

const versionedProductConfigs = {
  'accessinformationcenter_11.6': {
    id: 'accessinformationcenter_11_6',
    path: 'versioned_docs/accessinformationcenter_11.6',
    routeBasePath: 'docs/accessinformationcenter/11.6',
    sidebarPath: './versioned_sidebars/accessinformationcenter_11.6.js',
    navLabel: 'Access Information Center 11.6',
  },
  'activitymonitor_7.1': {
    id: 'activitymonitor_7_1',
    path: 'versioned_docs/activitymonitor_7.1',
    routeBasePath: 'docs/activitymonitor/7.1',
    sidebarPath: './versioned_sidebars/activitymonitor_7.1.js',
    navLabel: 'Activity Monitor 7.1',
  },
  'auditor_10.6': {
    id: 'auditor_10_6',
    path: 'versioned_docs/auditor_10.6',
    routeBasePath: 'docs/auditor/10.6',
    sidebarPath: './versioned_sidebars/auditor_10.6.js',
    navLabel: 'Auditor 10.6',
  },
  'changetracker_8.0': {
    id: 'changetracker_8_0',
    path: 'versioned_docs/changetracker_8.0',
    routeBasePath: 'docs/changetracker/8.0',
    sidebarPath: './versioned_sidebars/changetracker_8.0.js',
    navLabel: 'Change Tracker 8.0',
  },
  'dataclassification_5.6.2': {
    id: 'dataclassification_5_6_2',
    path: 'versioned_docs/dataclassification_5.6.2',
    routeBasePath: 'docs/dataclassification/5.6.2',
    sidebarPath: './versioned_sidebars/dataclassification_5.6.2.js',
    navLabel: 'Data Classification 5.6.2',
  },
  'endpointprotector_5.9.4': {
    id: 'endpointprotector_5_9_4',
    path: 'versioned_docs/endpointprotector_5.9.4',
    routeBasePath: 'docs/endpointprotector/5.9.4',
    sidebarPath: './versioned_sidebars/endpointprotector_5.9.4.js',
    navLabel: 'Endpoint Protector 5.9.4',
  },
  'enterpriseauditor_11.6': {
    id: 'enterpriseauditor_11_6',
    path: 'versioned_docs/enterpriseauditor_11.6',
    routeBasePath: 'docs/enterpriseauditor/11.6',
    sidebarPath: './versioned_sidebars/enterpriseauditor_11.6.js',
    navLabel: 'Enterprise Auditor 11.6',
  },
  'groupid_11.0': {
    id: 'groupid_11_0',
    path: 'versioned_docs/groupid_11.0',
    routeBasePath: 'docs/groupid/11.0',
    sidebarPath: './versioned_sidebars/groupid_11.0.js',
    navLabel: 'Group ID 11.0',
  },
  'passwordpolicyenforcer_10.2': {
    id: 'passwordpolicyenforcer_10_2',
    path: 'versioned_docs/passwordpolicyenforcer_10.2',
    routeBasePath: 'docs/passwordpolicyenforcer/10.2',
    sidebarPath: './versioned_sidebars/passwordpolicyenforcer_10.2.js',
    navLabel: 'Password Policy Enforcer 10.2',
  },
  'passwordreset_3.23': {
    id: 'passwordreset_3_23',
    path: 'versioned_docs/passwordreset_3.23',
    routeBasePath: 'docs/passwordreset/3.23',
    sidebarPath: './versioned_sidebars/passwordreset_3.23.js',
    navLabel: 'Password Reset 3.23',
  },
  'passwordsecure_9.1': {
    id: 'passwordsecure_9_1',
    path: 'versioned_docs/passwordsecure_9.1',
    routeBasePath: 'docs/passwordsecure/9.1',
    sidebarPath: './versioned_sidebars/passwordsecure_9.1.js',
    navLabel: 'Password Secure 9.1',
  },
  'privilegesecure_4.1': {
    id: 'privilegesecure_4_1',
    path: 'versioned_docs/privilegesecure_4.1',
    routeBasePath: 'docs/privilegesecure/4.1',
    sidebarPath: './versioned_sidebars/privilegesecure_4.1.js',
    navLabel: 'Privilege Secure 4.1',
  },
  'privilegesecurefordiscovery_2.21': {
    id: 'privilegesecurefordiscovery_2_21',
    path: 'versioned_docs/privilegesecurefordiscovery_2.21',
    routeBasePath: 'docs/privilegesecurefordiscovery/2.21',
    sidebarPath: './versioned_sidebars/privilegesecurefordiscovery_2.21.js',
    navLabel: 'Privilege Secure for Discovery 2.21',
  },
  'threatprevention_7.4': {
    id: 'threatprevention_7_4',
    path: 'versioned_docs/threatprevention_7.4',
    routeBasePath: 'docs/threatprevention/7.4',
    sidebarPath: './versioned_sidebars/threatprevention_7.4.js',
    navLabel: 'Threat Prevention 7.4',
  },
  'usercube_6.1': {
    id: 'usercube_6_1',
    path: 'versioned_docs/usercube_6.1',
    routeBasePath: 'docs/usercube/6.1',
    sidebarPath: './versioned_sidebars/usercube_6.1.js',
    navLabel: 'UserCube 6.1',
  },
};

// Generate plugin configurations for enabled versioned products
function getEnabledVersionedPlugins() {
  const plugins = [];
  
  Object.entries(VERSIONED_PRODUCTS).forEach(([product, enabled]) => {
    if (enabled && versionedProductConfigs[product]) {
      const config = versionedProductConfigs[product];
      plugins.push([
        '@docusaurus/plugin-content-docs',
        {
          id: config.id,
          path: config.path,
          routeBasePath: config.routeBasePath,
          sidebarPath: config.sidebarPath,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          versions: {
            current: {
              label: 'Current',
            },
          },
        },
      ]);
    }
  });
  
  return plugins;
}

// Generate navbar items for enabled versioned products
function getEnabledVersionedNavItems() {
  const items = [];
  
  Object.entries(VERSIONED_PRODUCTS).forEach(([product, enabled]) => {
    if (enabled && versionedProductConfigs[product]) {
      const config = versionedProductConfigs[product];
      items.push({
        label: config.navLabel,
        to: `/${config.routeBasePath}`,
      });
    }
  });
  
  return items;
}

module.exports = {
  VERSIONED_PRODUCTS,
  getEnabledVersionedPlugins,
  getEnabledVersionedNavItems,
}; 