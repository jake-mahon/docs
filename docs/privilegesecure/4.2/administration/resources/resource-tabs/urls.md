---
title: Access Policies Tab for Website
sidebar_label: urls
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Access Policies Tab for Website

The Access Policies tab shows information about the policies associated with the selected resource.

![websitedetailsaccesspolicytab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailsaccesspolicytab.webp)

The Access Policies tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Name — Displays the name of the policy. Click the link to view additional details. See the
  [Access Policy Page](/docs/privilegesecure/4.2/administration/policies/access-policies/policy-details.md) topic for additional information.
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# URLs Tab for Microsoft Entra ID

The URLs tab for Microsoft Entra ID (formerly Azure AD) shows information about the URLs associated
to the selected resource. URLs are correlated to launching activities in the browser extension. If a
given site is not listed here, the activity login may fail as it is not an authorized site for
login.

![URLs Tab for Entra ID](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/details/azureaddetailspage.webp)

The URLs tab has the following features:

- Add — Opens the Add Website URL window. See the
  [Add Website URL Window](/docs/privilegesecure/4.2/administration/resources/platforms/websites.md) topic for additional
  information.
- Edit — Opens the Edit Website URL window. See Edit Website URL for additional information.
- Remove — Removes the selected item
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- URL — Displays the URL or string
- Match Type — Indicates the match parameter for the URL:

  - Domain — Match will be made on the domain name
  - Exact — Match will only be made if the URL is an exact match
  - Never — Match will not be made to URL
  - Starts With — Match is only made when the URL starts with the value
  - Regex — Match will be made on the valid regex string
  - Host — Match will be made on the host name (FQDN)

The table columns can be resized and sorted in ascending or descending order.

# URLs Tab for Website

The URLs tab shows information about the URLs associated to the selected resource. For example:
`https://company.lightning.force.com` and `https://salesforce.com` are both URLs associated to the
same website.

![URLs tab for Website Resource](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailsurlstab.webp)

The URLs tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add — Opens the Add Website URL window. See the
  [Add Website URL Window](/docs/privilegesecure/4.2/administration/resources/platforms/websites.md) topic for additional
  information.
- Edit — Opens the Edit Website URL window. See Edit Website URL for additional information.
- Remove — Removes the selected item
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- URL — Displays the URL or string
- Match Type — Indicates the match parameter for the URL:

  - Domain — Match will be made on the domain name
  - Exact — Match will only be made if the URL is an exact match
  - Never — Match will not be made to URL
  - Starts With — Match is only made when the URL starts with the value
  - Regex — Match will be made on the valid regex string
  - Host — Match will be made on the host name (FQDN)

The table columns can be resized and sorted in ascending or descending order.
