---
sidebar_position: 7850
title: Microsoft Entra ID Details Page
---

# Microsoft Entra ID Details Page

The Microsoft Entra ID (formerly Azure AD) Details page shows additional information for the selected Microsoft Entra ID Tenant resource. This page is opened from any linked resource within the various interfaces.

![Azure AD Details page](../../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Policy/Resources/AzureADDetailsPage.png "Azure AD Details page")

The details page shows the following information:

* Name — Displays the name of the resource
* Trashcan icon — Removes the selected resource from being managed by the application. A confirmation window will display.
* Platform — Displays the type of platform, which defines the resource
* Tenant ID — Displays the globally unique identifier for the targeted tenant implementation as found in Entra ID
* Logon URL — Displays the primary logon page
* Email Domain — Displays the domain part of the user principal name used by the Tenant as found in Entra ID on the Users page, under “Identity Issuer”
* Associated Domain — For hybrid Entra ID environments, assign the on-premises Active Directory domain that is synchronized with the tenant, otherwise leave set to **None**
* Process Group Memberships — Select this checkbox to enable Netwrix Privilege Secure to collect group membership information. This is unchecked by default.
* Synchronize Now button — Scans the domain for users, groups, members, and computers. The Cancel button, which is only visible when scanning can be used to stop the resource scan. This scan can also be scheduled from the [Platforms Page](../Platforms/Overview "Platforms Page").
* Service Account — Displays the service account associated with the resource

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

* [URLs Tab for Microsoft Entra ID](../../Tab/Resources/URLsEntraID "URLs Tab for Microsoft Entra ID")
* [Users Tab for Microsoft Entra ID](../../Tab/Resources/UsersEntraID "Users Tab for Microsoft Entra ID")
* [Groups Tab for Microsoft Entra ID](../../Tab/Resources/GroupsEntraID "Groups Tab for Microsoft Entra ID")
* [Sessions Tab for Microsoft Entra ID](../../Tab/Resources/SessionsEntraID "Sessions Tab for Microsoft Entra ID")
* [Access Policies Tab for Microsoft Entra ID](../../Tab/Resources/AccessPoliciesEntraID "Access Policies Tab for Microsoft Entra ID")
* [History Tab for Microsoft Entra ID](../../Tab/Resources/HistoryEntraID "History Tab for Microsoft Entra ID")
* [Applications Tab for Microsoft Entra ID](../../Tab/Resources/ApplicationsEntraID "Applications Tab for Microsoft Entra ID")