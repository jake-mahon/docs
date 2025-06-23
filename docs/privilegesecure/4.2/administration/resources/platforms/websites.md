---
title: Add New Website
sidebar_label: websites
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Add New Website

Follow the steps to add a Website Resource to the Privilege Secure Console.

**Step 1 –** Navigate to the **Policy** > **Resources** page.

**Step 2 –** Click the Plus icon and select New Website from the drop-down list.

![Add New Website Resource](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/addnewwebsite.webp)

**Step 3 –** Enter the following information:

- Website Name – Displays the name to be displayed in the Resource list for the website
- Platform – Website (This field cannot be changed.)
- Logon URL – Enter the primary logon page for the website. This is only used if no URL is specified
  when defining a website Activity.
- Associated Resource – _(optional)_ If the website is hosted on a server that is also managed by
  Privilege Secure, select the resource from the drop-down list to ensure that AD account operations
  are performed on the domain controller the website resource is bound to
- Associated Domain Controller – _(optional)_ A specific domain controller may be selected to ensure
  that AD account operations are performed on a domain controller the website will reference for
  authentication
- Service Account – _(optional)_ The service account used when activity _actions_ require a
  provisioned account to interact with the resource, e.g. custom PowerShell. From the drop-down
  menu, select a previously added service account. See the
  [Service Accounts Page](/docs/privilegesecure/4.2/administration/configuration/services/service-accounts.md) topic for additional
  information.

  - Add New Service Account — Open the Add New Service Account window. The fields are identical to
    those on the Service Accounts page

**Step 4 –** Click **Save** to add the website to the console.

The new website has been onboarded. See the [Website Details Page](/docs/privilegesecure/4.2/administration/resources/platforms/websites.md) topic
for additional information.

# Website Details Page

The Website Details page shows additional information for the selected website resource. This page
is opened from any linked resource within the various interfaces.

![Website Resource details page](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/details/websitedetails.webp)

The details page shows the following information:

- Name — Displays the name of the resource
- Trashcan icon — Removes the selected resource from being managed by the application. A
  confirmation window will display.
- Platform — Displays the type of platform, which defines the resource
- Logon URL — Displays the primary logon page. This is only used if no URL is specified when
  defining a website activity.
- Associated Resource — If the website is hosted on a server that is also managed by Privilege
  Secure, it may be associated to the website management. This ensures that AD account operations
  are performed on the domain controller the website resource is bound to.
- Associated Domain Controller — A specific domain controller may be associated to the website
  management. This ensures that AD account operations are performed on a domain controller the
  website will reference for authentication.
- Service Account — Displays the service account associated with the resource
- Blue arrow button — Opens the Service Account details page. See the
  [Service Accounts Page](/docs/privilegesecure/4.2/administration/configuration/services/service-accounts.md) topic for additional
  information.
- Green plus button — Opens the Add New Service Account window. See the
  [Add New Service Account Window](/docs/privilegesecure/4.2/administration/resources/managed-accounts/service-accounts.md) topic for
  additional information.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [URLs Tab for Website](/docs/privilegesecure/4.2/administration/resources/resource-tabs/urls.md)
- [Users Tab for Website](/docs/privilegesecure/4.2/administration/resources/resource-tabs/users.md)
- [Sessions Tab for Website](/docs/privilegesecure/4.2/administration/resources/resource-tabs/sessions.md)
- [Access Policies Tab for Website](/docs/privilegesecure/4.2/administration/resources/resource-tabs/urls.md)
- [History Tab for Website](/docs/privilegesecure/4.2/administration/resources/resource-tabs/history.md)

# Web Site Platform Policy Configuration

The Web Site menu displays the configuration options for Web Site platforms.

![Website Platform Configuration](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/platforms/website.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for a Website Platform.

- Name — Displays the name of the policy
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

# Add Website URL Window

Follow the steps to add or edit a Website URL used by a resource.

**NOTE:** Only applicable to Microsoft Entra ID and Website resources.

**Step 1 –** Navigate to the **Resources** page.

**Step 2 –** Click the name of the desired resource to open the Resource Details page and select the
**URLs** tab.

**Step 3 –** Do the following:

- To add a new URL, click **Add**.

![addwebsiteurl](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/resources/addwebsiteurl.webp)

**Step 4 –** Enter the following information:

- URL — The URL or string to match
- Match Type — A Match Type is required:

  - Domain — A match will be made on the domain name
  - Exact — A match will only be made if the URL exactly matches
  - Never — Never match the URL
  - StartsWith — Only match if the URL starts with this value
  - Regex — Match based upon valid regex string
  - Host — Match based upon host name (FQDN)

**Step 5 –** Click Save to accept changes.

The URL is added to the resource and shown on the URLs tab.
