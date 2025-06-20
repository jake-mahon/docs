# Add New Website

Follow the steps to add a Website Resource to the Privilege Secure Console.

**Step 1 –** Navigate to the **Policy** > **Resources** page.

**Step 2 –** Click the Plus icon and select New Website from the drop-down list.

![Add New Website Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/add/addnewwebsite.webp)

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
  [Service Accounts Page](/docs/privilegesecure/4.1/configuration/services/service-accounts.md)
  topic for additional information.

  - Add New Service Account — Open the Add New Service Account window. The fields are identical to
    those on the Service Accounts page

**Step 4 –** Click **Save** to add the website to the console.

The new website has been onboarded. See the
[Website Details Page](/docs/privilegesecure/4.1/administration/resources/resource-details/websites.md)
topic for additional information.

# Website Details Page

The Website Details page shows additional information for the selected website resource. This page
is opened from any linked resource within the various interfaces.

![Website Resource details page](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/details/websitedetails.webp)

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
  [Service Accounts Page](/docs/privilegesecure/4.1/configuration/services/service-accounts.md)
  topic for additional information.
- Green plus button — Opens the Add New Service Account window. See the
  [Add New Service Account Window](/docs/privilegesecure/4.1/administration/resources/resource-management/service-accounts.md)
  topic for additional information.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [URLs Tab for Website](/docs/privilegesecure/4.1/administration/resources/platforms/websites.md)
- [Users Tab for Website](/docs/privilegesecure/4.1/administration/resources/platforms/websites.md)
- [Sessions Tab for Website](/docs/privilegesecure/4.1/administration/resources/platforms/websites.md)
- [Access Policies Tab for Website](/docs/privilegesecure/4.1/administration/resources/platforms/websites.md)
- [History Tab for Website](/docs/privilegesecure/4.1/administration/resources/platforms/websites.md)
