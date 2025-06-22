import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';

const productMap = {
  '/docs/1secure': '1Secure',
  '/docs/accessanalyzer': 'Access Analyzer',
  '/docs/accessinformationcenter': 'Access Information Center',
  '/docs/activitymonitor': 'Activity Monitor',
  '/docs/auditor': 'Auditor',
  '/docs/changetracker': 'Change Tracker',
  '/docs/dataclassification': 'Data Classification',
  '/docs/directorymanager': 'Directory Manager',
  '/docs/endpointpolicymanager': 'Endpoint Policy Manager',
  '/docs/endpointprotector': 'Endpoint Protector',
  '/docs/identitymanager': 'Identity Manager',
  '/docs/passwordpolicyenforcer': 'Password Policy Enforcer',
  '/docs/passwordreset': 'Password Reset',
  '/docs/passwordsecure': 'Password Secure',
  '/docs/pingcastle': 'PingCastle',
  '/docs/platgovnetsuite': 'Platform Governance for NetSuite',
  '/docs/platgovnetsuiteflashlight': 'Platform Governance for NetSuite Flashlight',
  '/docs/platgovsalesforce': 'Platform Governance for Salesforce',
  '/docs/platgovsalesforceflashlight': 'Platform Governance for Salesforce Flashlight',
  '/docs/privilegesecure': 'Privilege Secure',
  '/docs/recoveryforactivedirectory': 'Recovery for Active Directory',
  '/docs/threatmanager': 'Threat Manager',
  '/docs/threatprevention': 'Threat Prevention',
};

export default function ProductMetaTags() {
  const location = useLocation();
  const pathname = location.pathname;

  // Find the matching product
  let productName = '';
  let productVersion = '';
  let matchedPath = '';

  for (const [path, name] of Object.entries(productMap)) {
    if (pathname.startsWith(path) && path.length > matchedPath.length) {
      matchedPath = path;
      productName = name;
    }
  }

  if (productName) {
    // Extract version from URL
    const pathParts = pathname.split('/').filter((part) => part);
    const productPart = matchedPath
      .split('/')
      .filter((part) => part)
      .pop();
    const productIndex = pathParts.indexOf(productPart);

    if (productIndex !== -1 && pathParts[productIndex + 1]) {
      let versionFromUrl = pathParts[productIndex + 1];
      // Check if it looks like a version (e.g., "13_5", "2_0", "v2", "saas", etc.)
      // Regex now accepts underscores in version numbers
      if (/^(v?\d+(_\d+)*|saas)$/i.test(versionFromUrl)) {
        versionFromUrl = versionFromUrl.replace(/^v/i, ''); // Remove 'v' prefix if present
        if (versionFromUrl.toLowerCase() === 'saas') {
          productVersion = 'saas';
        } else {
          // Convert underscores back to periods for the meta tag content
          productVersion = versionFromUrl.replace(/_/g, '.');
        }
      }
    }
  }

  // Only render meta tags if we have a product name
  if (!productName) {
    return null;
  }

  return (
    <Head>
      <meta name="product-name" content={productName} />
      {/* Ensure productVersion is an empty string if not determined, rather than undefined */}
      <meta name="product-version" content={productVersion || ''} />
    </Head>
  );
}
