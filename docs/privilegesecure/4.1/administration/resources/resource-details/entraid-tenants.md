# Add New Microsoft Entra ID Tenant

Follow the steps to add Microsoft Entra ID (formerly Azure AD) resource to the Privilege Secure
Console.

**Step 1 –** Navigate to the **Resources** page.

**Step 2 –** Click **Add** > **New Microsoft Enter ID (formerly Azure AD) Tenant**

![Add Azure AD Tenant](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/add/addazureadtenant.webp)

**Step 3 –** Enter the following information:

- Microsoft Entra ID Name — Displays the name of the resource
- Platform — Displays the type of platform, which defines the resource
- Tenant ID — Displays the globally unique identifier for the targeted tenant implementation as
  found in Azure AD
- Logon URL — Displays the primary logon page
- Email Domain — Displays the domain part of the user principal name used by the Tenant as found in
  Azure AD on the Users page, under “Identity Issuer”
- Associated Domain — For hybrid Azure AD environments, assign the on-premises Active Directory
  domain that is synchronized with the tenant
- Process Group Memberships — Select this checkbox to enable Netwrix Privilege Secure to collect
  group membership information
- Synchronize Now button — Scans the domain for users, groups, members, and computers. The Cancel
  button, which is only visible when scanning can be used to stop the resource scan. This scan can
  also be scheduled from the
  [Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md).
- Service Account — Displays the service account associated with the resource
- - Visit icon — Go to the Service Account page to view details of the selected service account.
  - Add New Service Account icon — Open the Add New Service Account window. The fields are
    identical to those on the Service Accounts page.

**Step 4 –** Click **Save** to add the Microsoft Entra ID Tenant to the console.

The new Microsoft Entra ID tenant has been on-boarded. See the
[Microsoft Entra ID Details Page](/docs/privilegesecure/4.1/administration/resources/resource-details/entraid-tenants.md)
topic for additional information.

# Microsoft Entra ID Details Page

The Microsoft Entra ID (formerly Azure AD) Details page shows additional information for the
selected Microsoft Entra ID Tenant resource. This page is opened from any linked resource within the
various interfaces.

![Azure AD Details page](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/details/azureaddetailspage.webp)

The details page shows the following information:

- Name — Displays the name of the resource
- Trashcan icon — Removes the selected resource from being managed by the application. A
  confirmation window will display.
- Platform — Displays the type of platform, which defines the resource
- Tenant ID — Displays the globally unique identifier for the targeted tenant implementation as
  found in Azure AD
- Logon URL — Displays the primary logon page
- Email Domain — Displays the domain part of the user principal name used by the Tenant as found in
  Azure AD on the Users page, under “Identity Issuer”
- Associated Domain — For hybrid Azure AD environments, assign the on-premises Active Directory
  domain that is synchronized with the tenant
- Process Group Memberships — Select this checkbox to enable Netwrix Privilege Secure to collect
  group membership information
- Synchronize Now button — Scans the domain for users, groups, members, and computers. The Cancel
  button, which is only visible when scanning can be used to stop the resource scan. This scan can
  also be scheduled from the
  [Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md).
- Service Account — Displays the service account associated with the resource

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [URLs Tab for Microsoft Entra ID](/docs/privilegesecure/4.1/administration/resources/platforms/entra-id.md)
- [Users Tab for Microsoft Entra ID](/docs/privilegesecure/4.1/administration/resources/platforms/entra-id.md)
- [Groups Tab for Microsoft Entra ID](/docs/privilegesecure/4.1/administration/resources/platforms/entra-id.md)
- [Sessions Tab for Microsoft Entra ID](/docs/privilegesecure/4.1/administration/resources/platforms/entra-id.md)
- [Access Policies Tab for Microsoft Entra ID](/docs/privilegesecure/4.1/administration/resources/platforms/entra-id.md)
- [History Tab for Microsoft Entra ID](/docs/privilegesecure/4.1/administration/resources/platforms/entra-id.md)
- [Applications Tab for Microsoft Entra ID](/docs/privilegesecure/4.1/administration/resources/platforms/entra-id.md)
