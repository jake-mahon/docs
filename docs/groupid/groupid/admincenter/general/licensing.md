# Licensing

You can license Directory Manager under one or more of these license types:

- __Suite__ - enables access to all Directory Manager functionality and its clients, including the Directory Manager portal, Management Shell, and APIs.
- __Group Management__ - enables access to all the group management features in Directory Manager, except those licensed under add-ons.
- __User Management__ - enables access to all the user management features in Directory Manager, except those licensed under add-ons.
- __Password Management__ - enables access to password management functions in Directory Manager, that are:

  - Account unlock and password reset by both end users and helpdesk
  - Multifactor authentication
  - Second way authentication
- __Add-ons__ - licenses for the following add-ons are available:

  - __API__ - separate licenses are required for user-specific and group-specific APIs.
  - __Workflow__ - enables you to create new workflows, update existing workflows, specify a default approver, and delete workflow requests. Separate licenses are required for user-specific and group-specific workflows.
  - __Workflow Acceleration__ - enables you to use the workflow approver acceleration function. Separate licenses are required to accelerate user-specific and group-specific workflows.
  - __Management Shell__ - separate licenses are required for user-specific and group-specific cmdlets.
  - __Entitlement__ - separate licenses are required to manage entitlements for users and groups.
  - __Synchronize Jobs__ - separate licenses are required for user-specific and group-specific Synchronize jobs.
  - __Group Lifecycle__ - required to run the Group Lifecycle schedule in the identity stores.
  - __Dynamic Groups__ - required to create and manage Smart Groups and Dynasties in Directory Manager.
  - __Power Automate__ - enables you to integrate Directory Manager workflows with Power Automate flows. Separate licenses are required for integrating user-specific and group-specific workflows.
  - __Group Usage Service__ - required to run the Group Usage Service schedule in the identity stores.
  - __Group Attestation__ - required to enable the group attestation function in the identity stores.
  - __Linked Identity Stores__ - required to manage identical user objects and identical group objects in the identity store(s). It works as follows with other Directory Manager licenses:

    - __Suite License__: enables the linked identity stores feature fully functional. You can manage your linked identities. In case of an Active Directory identity store and Microsoft Entra ID identity store link, you can manage entitlements of File Servers and SharePoint sites also.
    - __Group Management license__: enables you to manage identical groups in the linked identity store(s) and auto sync them.
    - __User Management license__: enables you to manage identical user objects in the linked identity store(s) and auto sync them.
    - __Password Management license__: the linked identity stores feature works in preview mode.

A license is valid for a period of 12 months.

NOTE: All the above licenses are also available for a trial period.

NOTE: Licenses for certain add-ons are dependent on other licenses, such as the Group Attestation license is dependent on the Group Usage Service license, which in turn is dependent on the Group Management license.

What happens when your license expires

When a license expires, its respective functions get read-only but you can configure certain settings, such as create identity stores, create data sources, and define replication settings. Moreover, unlicensed functions are displayed with a yellow icon next to them. On hovering the mouse over the icon, a message is displayed with two buttons: __Learn more__ and __Upgrade__. Both buttons redirect you to the [Group and User Management Software from Netwrix](https://www.netwrix.com/group_and_user_management_software.html) page, where you can learn more about Directory Manager and purchase or renew your Directory Manager licenses.

## Add a License

1. In Admin Center, click __Settings__ at the bottom of the left navigation pane.
2. On the __Licensing Settings__ tab of the __GroupID Settings__ page, click __Add New License__.
3. Enter a valid license number and key for your product copy in the respective boxes. A valid license and key enable the __Add License__ button; if it remains disabled, check your entries for errors.
4. Click __Add License__.

   License details are displayed on the __Licensing Settings__ tab as:

   - __Status:__ the license status as _Valid_ or _Expired_
   - __Module:__ the license type, such as _Suite_ or _Group Management_
   - __Expire:__ the expiration date of the license
   - __License(s):__ the number of users covered under the license
   - __Actions:__ displays the _Edit_ and _Delete_ icons, enabling you to update or remove the license accordingly.
5. If you have multiple Directory Manager licenses, repeat steps 2 – 4 for each license.

## Update a License

1. In Admin Center, click __Settings__ at the bottom of the left navigation pane.
2. On the __Licensing Settings__ tab of the __GroupID Settings__ page, click __Edit__ for a license in the __Actions__ column to update it.
3. On the __Update/Replace License__ dialog box, update the license number and key.
4. Click __Update__ to save the changes.

## Remove a License

On removing a license, users lose all access to the functionality covered under the license.

NOTE: A dependent license is rendered ineffective when you remove its parent license.

To remove a license:

1. In Admin Center, click __Settings__ at the bottom of the left navigation pane.
2. On the __Licensing Settings__ tab of the __GroupID Settings__ page, click __Delete__ for a license in the __Actions__ column to remove it.
