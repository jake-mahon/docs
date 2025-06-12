# User Management

With GroupID, you can:

- Automate user provisioning and deprovisioning in bulk. See the [Synchronize](/versioned_docs/groupid_11.0/groupid/portal/synchronize/overview.md) section.
- Establish ownership by defining a clear managerial hierarchy with dotted line management. See the [Dotted line management](/versioned_docs/groupid_11.0/groupid/portal/user/properties/activedirectory/organization.md#dotted-line-management) section of the [Object properties - Organization tab](/versioned_docs/groupid_11.0/groupid/portal/user/properties/activedirectory/organization.md) topic.
- Delegate user management to end users by enabling them to:

  - Create and manage users, contacts, and mailboxes in the directory. See the [ Create User Objects](/versioned_docs/groupid_11.0/groupid/portal/user/create/overview.md) topic.
  - Manage their direct reports. See the [Update your Direct Reports](/versioned_docs/groupid_11.0/groupid/portal/user/manage/directreport.md) topic.
  - Update their profiles in the directory. See the [Validate your profile](/versioned_docs/groupid_11.0/groupid/portal/user/manage/validateprofile.md) topic.
- Link identical users in different directory services, such as Active Directory and Microsoft Entra ID. See the [Linked Accounts](/versioned_docs/groupid_11.0/groupid/portal/user/linkedaccounts.md) topic.

The table below displays the major functions that users can perform in GroupID portal.

| Functions | Description |
| --- | --- |
| Create Objects | Create mail-enabled and non-mail-enabled Users, Contact, or Mailbox. |
| Manage your Profile | On the top right corner, view your profile and verify the information. |
| Manage Your Direct Reports | View Users and Contacts that report directly to you. If required, you can modify the properties of your direct reports. |
| Manage Disabled Users | View the list of users that have been disabled or expired. You can modify the properties of the users, extend the time for the expired users and also reinstate any disabled user. |
| View Organizational Hierarchy | Displays the complete hierarchy in graphical form. It displays few attributes of users like email address and profile picture etc. |
| Link Accounts | With accounts in multiple identity stores, you can reset passwords or unlock accounts with Linked Accounts |
| Reset Password | Reset your forgotten or lost passwords. Unenrolled users can reset passwords if Second Way Authentication is enabled. |
| Unlock Account | Unlock your accounts yourself without contacting the Administrator. |
| Change Password | Change your password according to the Password Policy set by the administrator. |
| Validate Your Profile | Validate your profile after a particular time in order to ensure the user information in the directory. |
| User Account Settings | Modify your profile information. Administrators can manage the user information, enable/disable the user, or expire a user. |

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

__See Also__

- [Enroll Your Identity Store Account](/versioned_docs/groupid_11.0/groupid/portal/user/authentication/enrollaccount.md)
- [Second Factor Authentication](/versioned_docs/groupid_11.0/groupid/portal/user/authentication/secondfactorauthentication.md)
- [Portal Settings](/versioned_docs/groupid_11.0/groupid/portal/setting/portal.md)
