# Toolbar

Use the toolbar to perform different actions on the portal pages. Buttons on the toolbar vary, depending on the page you are on. Toolbar buttons are listed in the following table.

| Button | Description |
| --- | --- |
| ![expire](/img/versioned_docs/groupid_11.0/groupid/portal/expire.jpg) | The behavior of this button depends on the expiry policy of the selected group.   - When the group has its expiry policy set to ‘never expire’, clicking this button displays an error message that the group cannot be expired. - When the group has an expiry policy other than ‘never expire’, clicking this button expires the group and moves it to the My Expired Groups page. - A group without an expiry policy will not expire.  Directory groups that are created outside of GroupID do not have an expiry policy. |
| ![properties](/img/versioned_docs/groupid_11.0/groupid/portal/properties.jpg) | View the properties of the selected object. |
| ![update](/img/versioned_docs/groupid_11.0/groupid/portal/update.png) | Use this button to manually update a Smart Group.  On clicking it, a dialog box is displayed, that shows the progress of the Smart Group Update job. To run this job in the background, click the __Run in Background__ buttons.  Use the __Background Tasks__ icon in the top right corner to view the status of the Smart Group Update jobs. |
| ![join](/img/versioned_docs/groupid_11.0/groupid/portal/join.jpg) | The logged-on user can use this button to join group(s).   1. Click the arrow and select one of the following:    - __Join perpetually__- to join the selected group(s) permanently.    - __Join temporarily__ - to join the selected group(s) for a specified period. At the end of the period, you are automatically removed from the group membership. 2. Click the __Join__ button.   The __Other__ option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both in the identity store. It enables the logged-on user to join a group permanently or temporarily on behalf of a direct report or peer. |
| ![leave](/img/versioned_docs/groupid_11.0/groupid/portal/leave.jpg) | The logged-on user can use this button to leave group(s).   1. Click the arrow and select one of the following:    - __Leave perpetually__- to leave the selected group(s) permanently.    - __Leave temporarily__ - to leave the selected group(s) for a specified period. At the end of the period, you are automatically added back to the group membership. 2. Click the __Leave__ button.   The __Other__ option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both in the identity store. It enables the logged-on user to leave a group permanently or temporarily on behalf of a direct report or peer. |
| ![managedby](/img/versioned_docs/groupid_11.0/groupid/portal/managedby.png) | View the groups managed by the selected object, i.e., the groups for which the selected object is a primary or additional owner. |
| ![addtogroup](/img/versioned_docs/groupid_11.0/groupid/portal/addtogroup.jpg) | Adds the selected objects to the membership of one or more groups. Click the button to search for groups to add the selected objects to. |
| ![exportresult](/img/versioned_docs/groupid_11.0/groupid/portal/exportresult.png) | Exports the displayed object list to a Microsoft Excel file. |
| ![addtocontacts](/img/versioned_docs/groupid_11.0/groupid/portal/addtocontacts.png) | Creates a vCard file for the selected object and prompts you to save it on your machine. You can then use it to add the group's email address to your email contact list.  This feature requires a program registered for the vCard MIME type, such as Microsoft Outlook or Microsoft Outlook Express. |
| ![sendemail](/img/versioned_docs/groupid_11.0/groupid/portal/sendemail.png) | Sends an email to the selected object(s).  Clicking this button launches the default Windows email application for sending email. |
| ![renew](/img/versioned_docs/groupid_11.0/groupid/portal/renew.png) | Renews the selected groups by re-applying the expiration policy of the group, starting from today. |
| ![attesticon](/img/versioned_docs/groupid_11.0/groupid/portal/attesticon.png) | Verify and validate a group's attributes and membership; then renew the group by re-applying its expiration policy, starting from today. |
| ![delete](/img/versioned_docs/groupid_11.0/groupid/portal/delete.jpg) | Deletes the selected users and contacts.  For groups, it physically deletes expired and logically deleted groups. Physically deleted groups are not available in the portal anymore.  It does not delete groups with a valid expiry policy. |
| ![save](/img/versioned_docs/groupid_11.0/groupid/portal/save.jpg) | Saves your changes. |
| ![import](/img/versioned_docs/groupid_11.0/groupid/portal/import.png) | Add members or additional owners to a group using an external file. |
| ![export](/img/versioned_docs/groupid_11.0/groupid/portal/export.png) | Export members or additional owners of a group to an external file. |
| ![movegroup](/img/versioned_docs/groupid_11.0/groupid/portal/movegroup.png) | Move groups from one container to another. |
| ![setowner](/img/versioned_docs/groupid_11.0/groupid/portal/setowner.png) | Set owner for a group. |
| ![securitytype](/img/versioned_docs/groupid_11.0/groupid/portal/securitytype.png) | Set security type of a group. |
| ![expiration](/img/versioned_docs/groupid_11.0/groupid/portal/expiration.png) | Set the expiration policy of a group. |
| ![resetpassword](/img/versioned_docs/groupid_11.0/groupid/portal/resetpassword.png) | Reset password for a user. |
| ![heirarchy](/img/versioned_docs/groupid_11.0/groupid/portal/heirarchy.png) | View the organizational hierarchy chart of a user. |
| ![validate](/img/versioned_docs/groupid_11.0/groupid/portal/validate.png) | Verify and update your profile information. |
| ![subscribe](/img/versioned_docs/groupid_11.0/groupid/portal/subscribe.jpg) | Subscribe to the Teams channel.  NOTE: Only non MFA Entra ID users can subscribe to the Teams channel. |
| ![unsubscribe](/img/versioned_docs/groupid_11.0/groupid/portal/unsubscribe.jpg) | Unsubscribe from the Team channel. |

__See Also__

- [Working with Groups](/versioned_docs/groupid_11.0/groupid/portal/group/manage/workingwithgroups.md)
