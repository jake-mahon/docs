// @ts-check
// Product configuration for selective building

// Set to true to enable a product, false to disable
const PRODUCTS = {
  '1secure': false,
  'accessanalyzer': false,
  'accessinformationcenter': false,
  'activitymonitor': false,
  'auditor': false,
  'changetracker': false,
  'dataclassification': false,
  'groupid': false,
  'passwordpolicyenforcer': false,
  'passwordreset': false,
  'passwordsecure': true,
  'policypak': false,
  'privilegesecure': false,
  'recoveryforactivedirectory': false,
  'strongpointfornetsuite': false,
  'strongpointforsalesforce': false,
  'strongpointnetsuiteflashlight': false,
  'strongpointsalesforceflashlight': false,
  'threatmanager': false,
  'threatprevention': false,
  'usercube': false,
  'usercube_saas': false,
};

const productConfigs = {
  '1secure': {
    id: '1secure',
    path: 'docs/1secure',
    routeBasePath: 'docs/1secure',
    sidebarPath: './sidebars/1secure.js',
    navLabel: '1Secure',
  },
  'accessanalyzer': {
    id: 'accessanalyzer',
    path: 'docs/accessanalyzer',
    routeBasePath: 'docs/accessanalyzer',
    sidebarPath: './sidebars/accessanalyzer.js',
    navLabel: 'Access Analyzer',
  },
  'accessinformationcenter': {
    id: 'accessinformationcenter',
    path: 'docs/accessinformationcenter',
    routeBasePath: 'docs/accessinformationcenter',
    sidebarPath: './sidebars/accessinformationcenter.js',
    navLabel: 'Access Information Center',
  },
  'activitymonitor': {
    id: 'activitymonitor',
    path: 'docs/activitymonitor',
    routeBasePath: 'docs/activitymonitor',
    sidebarPath: './sidebars/activitymonitor.js',
    navLabel: 'Activity Monitor',
  },
  'auditor': {
    id: 'auditor',
    path: 'docs/auditor',
    routeBasePath: 'docs/auditor',
    sidebarPath: './sidebars/auditor.js',
    navLabel: 'Auditor',
  },
  'changetracker': {
    id: 'changetracker',
    path: 'docs/changetracker',
    routeBasePath: 'docs/changetracker',
    sidebarPath: './sidebars/changetracker.js',
    navLabel: 'Change Tracker',
  },
  'dataclassification': {
    id: 'dataclassification',
    path: 'docs/dataclassification',
    routeBasePath: 'docs/dataclassification',
    sidebarPath: './sidebars/dataclassification.js',
    navLabel: 'Data Classification',
  },
  'groupid': {
    id: 'groupid',
    path: 'docs/groupid',
    routeBasePath: 'docs/groupid',
    sidebarPath: './sidebars/groupid.js',
    navLabel: 'Group ID',
  },
  'passwordpolicyenforcer': {
    id: 'passwordpolicyenforcer',
    path: 'docs/passwordpolicyenforcer',
    routeBasePath: 'docs/passwordpolicyenforcer',
    sidebarPath: './sidebars/passwordpolicyenforcer.js',
    navLabel: 'Password Policy Enforcer',
  },
  'passwordreset': {
    id: 'passwordreset',
    path: 'docs/passwordreset',
    routeBasePath: 'docs/passwordreset',
    sidebarPath: './sidebars/passwordreset.js',
    navLabel: 'Password Reset',
  },
  'passwordsecure': {
    id: 'passwordsecure',
    path: 'docs/passwordsecure',
    routeBasePath: 'docs/passwordsecure',
    sidebarPath: './sidebars/passwordsecure.js',
    navLabel: 'Password Secure',
  },
  'policypak': {
    id: 'policypak',
    path: 'docs/policypak',
    routeBasePath: 'docs/policypak',
    sidebarPath: './sidebars/policypak.js',
    navLabel: 'PolicyPak',
  },
  'privilegesecure': {
    id: 'privilegesecure',
    path: 'docs/privilegesecure',
    routeBasePath: 'docs/privilegesecure',
    sidebarPath: './sidebars/privilegesecure.js',
    navLabel: 'Privilege Secure',
  },
  'recoveryforactivedirectory': {
    id: 'recoveryforactivedirectory',
    path: 'docs/recoveryforactivedirectory',
    routeBasePath: 'docs/recoveryforactivedirectory',
    sidebarPath: './sidebars/recoveryforactivedirectory.js',
    navLabel: 'Recovery for Active Directory',
  },
  'strongpointfornetsuite': {
    id: 'strongpointfornetsuite',
    path: 'docs/strongpointfornetsuite',
    routeBasePath: 'docs/strongpointfornetsuite',
    sidebarPath: './sidebars/strongpointfornetsuite.js',
    navLabel: 'StrongPoint for NetSuite',
  },
  'strongpointforsalesforce': {
    id: 'strongpointforsalesforce',
    path: 'docs/strongpointforsalesforce',
    routeBasePath: 'docs/strongpointforsalesforce',
    sidebarPath: './sidebars/strongpointforsalesforce.js',
    navLabel: 'StrongPoint for Salesforce',
  },
  'strongpointnetsuiteflashlight': {
    id: 'strongpointnetsuiteflashlight',
    path: 'docs/strongpointnetsuiteflashlight',
    routeBasePath: 'docs/strongpointnetsuiteflashlight',
    sidebarPath: './sidebars/strongpointnetsuiteflashlight.js',
    navLabel: 'StrongPoint NetSuite Flashlight',
  },
  'strongpointsalesforceflashlight': {
    id: 'strongpointsalesforceflashlight',
    path: 'docs/strongpointsalesforceflashlight',
    routeBasePath: 'docs/strongpointsalesforceflashlight',
    sidebarPath: './sidebars/strongpointsalesforceflashlight.js',
    navLabel: 'StrongPoint Salesforce Flashlight',
  },
  'threatmanager': {
    id: 'threatmanager',
    path: 'docs/threatmanager',
    routeBasePath: 'docs/threatmanager',
    sidebarPath: './sidebars/threatmanager.js',
    navLabel: 'Threat Manager',
  },
  'threatprevention': {
    id: 'threatprevention',
    path: 'docs/threatprevention',
    routeBasePath: 'docs/threatprevention',
    sidebarPath: './sidebars/threatprevention.js',
    navLabel: 'Threat Prevention',
  },
  'usercube': {
    id: 'usercube',
    path: 'docs/usercube',
    routeBasePath: 'docs/usercube',
    sidebarPath: './sidebars/usercube.js',
    navLabel: 'UserCube',
  },
  'usercube_saas': {
    id: 'usercube_saas',
    path: 'docs/usercube_saas',
    routeBasePath: 'docs/usercube_saas',
    sidebarPath: './sidebars/usercube_saas.js',
    navLabel: 'UserCube SaaS',
  },
};

// Generate plugin configurations for enabled products
function getEnabledPlugins() {
  const plugins = [];
  
  Object.entries(PRODUCTS).forEach(([product, enabled]) => {
    if (enabled && productConfigs[product]) {
      const config = productConfigs[product];
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

// Generate navbar items for enabled products
function getEnabledNavItems() {
  const items = [];
  
  Object.entries(PRODUCTS).forEach(([product, enabled]) => {
    if (enabled && productConfigs[product]) {
      const config = productConfigs[product];
      items.push({
        label: config.navLabel,
        to: `/${config.routeBasePath}`,
      });
    }
  });
  
  return items;
}

module.exports = {
  PRODUCTS,
  getEnabledPlugins,
  getEnabledNavItems,
};