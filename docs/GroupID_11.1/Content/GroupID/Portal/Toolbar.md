---
sidebar_position: 6988
title: Using the Toolbar
---

# Toolbar

Use the toolbar to perform different actions on the portal pages. Buttons on the toolbar vary, depending on the page you are on. Toolbar buttons are listed in the following table.

| Button | Description |
| --- | --- |
|  | The behavior of this button depends on the expiry policy of the selected group.   * When the group has its expiry policy set to ‘never expire’, clicking this button displays an error message that the group cannot be expired. * When the group has an expiry policy other than ‘never expire’, clicking this button expires the group and moves it to the My Expired Groups page. * A group without an expiry policy will not expire.  Directory groups that are created outside of Directory Manager do not have an expiry policy. |
|  | View the properties of the selected object. |
|  | Use this button to manually update a Smart Group.  On clicking it, a dialog box is displayed, that shows the progress of the Smart Group Update job. To run this job in the background, click the **Run in Background** buttons.  Use the **Background Tasks** icon in the top right corner to view the status of the Smart Group Update jobs. |
|  | The logged-on user can use this button to join group(s).   1. Click the arrow and select one of the following:    * **Join perpetually**- to join the selected group(s) permanently.    * **Join temporarily** - to join the selected group(s) for a specified period. At the end of the period, you are automatically removed from the group membership. 2. Click the **Join** button.   The **Other** option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both in the identity store. It enables the logged-on user to join a group permanently or temporarily on behalf of a direct report or peer. |
|  | The logged-on user can use this button to leave group(s).   1. Click the arrow and select one of the following:    * **Leave perpetually**- to leave the selected group(s) permanently.    * **Leave temporarily** - to leave the selected group(s) for a specified period. At the end of the period, you are automatically added back to the group membership. 2. Click the **Leave** button.   The **Other** option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both in the identity store. It enables the logged-on user to leave a group permanently or temporarily on behalf of a direct report or peer. |
|  | View the groups managed by the selected object, i.e., the groups for which the selected object is a primary or additional owner. |
|  | Adds the selected objects to the membership of one or more groups. Click the button to search for groups to add the selected objects to. |
|  | Exports the displayed object list to a Microsoft Excel file. |
|  | Creates a vCard file for the selected object and prompts you to save it on your machine. You can then use it to add the group's email address to your email contact list.  This feature requires a program registered for the vCard MIME type, such as Microsoft Outlook or Microsoft Outlook Express. |
|  | Sends an email to the selected object(s).  Clicking this button launches the default Windows email application for sending email. |
|  | Renews the selected groups by re-applying the expiration policy of the group, starting from today. |
|  | Verify and validate a group's attributes and membership; then renew the group by re-applying its expiration policy, starting from today. |
|  | Deletes the selected users and contacts.  For groups, it physically deletes expired and logically deleted groups. Physically deleted groups are not available in the portal anymore.  It does not delete groups with a valid expiry policy. |
|  | Saves your changes. |
|  | Add members or additional owners to a group using an external file. |
|  | Export members or additional owners of a group to an external file. |
|  | Move groups from one container to another. |
|  | Set owner for a group. |
|  | Set security type of a group. |
|  | Set the expiration policy of a group. |
|  | Reset password for a user. |
|  | View the organizational hierarchy chart of a user. |
|  | Verify and update your profile information. |
|  | Subscribe to the Teams channel.  Only non MFA Microsoft Entra ID users can subscribe to the Teams channel. |
|  | Unsubscribe from the Team channel. |