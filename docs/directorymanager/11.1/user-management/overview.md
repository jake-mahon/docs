# Create Active Directory User Objects

In an Active Directory identity stores, you can create the following types of users:

- User – See the [Create an AD User](/docs/directorymanager/11.1/user-management/user.md) topic for additional information.
- Mailbox – See the [Create an AD Mailbox](/docs/directorymanager/11.1/user-management/mailbox.md) topic for additional information.
- Contact – See the [Create an AD Contact](/docs/directorymanager/11.1/user-management/contact.md) topic for additional information.

# Create Microsoft Entra ID User Objects

In a Microsoft Entra ID identity stores, you can create the following types of users:

- User – See the [Create a Microsoft Entra ID User](/docs/directorymanager/11.1/user-management/user.md) topic for additional information on how
  to create a user in an Microsoft Entra ID identity store.
- Mailbox – See the [Create a Microsoft Entra ID Mailbox](/docs/directorymanager/11.1/user-management/mailbox.md) topic for additional
  information on how to create a mailbox in an Microsoft Entra ID identity store.

# Create User Objects

Directory Manager portal enables you to create following types of users:

- User
- Mailbox
- Contact

Directory Manager supports the following identity providers for creating the user objects:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

# Manage Users

Using Directory Manager portal, you can perform the following actions:

- [Update your Direct Reports](/docs/directorymanager/11.1/user-management/directreport.md)
- [Validate your profile](/docs/directorymanager/11.1/user-management/profile-management.md)
- [Reset your password](/docs/directorymanager/11.1/user-management/password-management.md)
- [ Change your password](/docs/directorymanager/11.1/user-management/password-management.md)
- [Unlock your accounts](/docs/directorymanager/11.1/user-management/unlockaccount.md)

# User Management

With Directory Manager, you can:

- Automate user provisioning and deprovisioning in bulk. See the
  [Synchronize](/docs/directorymanager/11.1/index.md) section.
- Establish ownership by defining a clear managerial hierarchy with dotted line management. See the
  [Dotted line management](/docs/directorymanager/11.1/user-management/organization.md#dotted-line-management)
  section of the [Object properties - Organization tab](/docs/directorymanager/11.1/user-management/organization.md)
  topic.
- Delegate user management to end users by enabling them to:

  - Create and manage users, contacts, and mailboxes in the directory. See the
    [ Create User Objects](/docs/directorymanager/11.1/user-management/overview.md) topic.
  - Manage their direct reports. See the [Update your Direct Reports](/docs/directorymanager/11.1/user-management/directreport.md)
    topic.
  - Update their profiles in the directory. See the
    [Validate your profile](/docs/directorymanager/11.1/user-management/profile-management.md) topic.

- Link identical users in different directory services, such as Active Directory and Microsoft Entra
  ID. See the [Linked Accounts](/docs/directorymanager/11.1/user-management/linkedaccounts.md) topic.

The table below displays the major functions that users can perform in Directory Manager portal.

| Functions                     | Description                                                                                                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create Objects                | Create mail-enabled and non-mail-enabled Users, Contact, or Mailbox.                                                                                                               |
| Manage your Profile           | On the top right corner, view your profile and verify the information.                                                                                                             |
| Manage Your Direct Reports    | View Users and Contacts that report directly to you. If required, you can modify the properties of your direct reports.                                                            |
| Manage Disabled Users         | View the list of users that have been disabled or expired. You can modify the properties of the users, extend the time for the expired users and also reinstate any disabled user. |
| View Organizational Hierarchy | Displays the complete hierarchy in graphical form. It displays few attributes of users like email address and profile picture etc.                                                 |
| Link Accounts                 | With accounts in multiple identity stores, you can reset passwords or unlock accounts with Linked Accounts                                                                         |
| Reset Password                | Reset your forgotten or lost passwords. Unenrolled users can reset passwords if Second Way Authentication is enabled.                                                              |
| Unlock Account                | Unlock your accounts yourself without contacting the Administrator.                                                                                                                |
| Change Password               | Change your password according to the Password Policy set by the administrator.                                                                                                    |
| Validate Your Profile         | Validate your profile after a particular time in order to ensure the user information in the directory.                                                                            |
| User Account Settings         | Modify your profile information. Administrators can manage the user information, enable/disable the user, or expire a user.                                                        |

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

# Overview

You can view and manipulate the properties of contacts in Active Directory.

## Contact properties

Following is the list of all the properties that Contacts have in Active Directory based identity
store.

- [Object properties - General tab](/docs/directorymanager/11.1/user-management/general.md)
- [Object properties - Organization tab](/docs/directorymanager/11.1/user-management/organization.md)
- [Contact properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.1/user-management/phonenote.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.1/group-management/attributes.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md)
- [Contact properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)

# Overview

You can view and manipulate the properties of mailboxes in Active Directory.

## Mailbox properties

Following is the list of all the properties that Users and Mailbox Users have in Active Directory
based identity store.

- [Object properties - General tab](/docs/directorymanager/11.1/user-management/general.md)
- [Object properties - Organization tab](/docs/directorymanager/11.1/user-management/organization.md)
- [User properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.1/user-management/phonenote.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.1/group-management/attributes.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md)
- [Mailbox properties - Limits tab](/docs/directorymanager/11.1/user-management/limits.md)
- [Mailbox properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md)
- [User properties - Account tab](/docs/directorymanager/11.1/user-management/account.md)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.1/user-management/autoreply.md)
- [Object Properties - Entitlements tab](/docs/directorymanager/11.1/user-management/entitlement.md)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)

# Overview

You can view and manipulate the properties of directory objects (users, mailboxes, and contacts) in
Active Directory, depending on the permissions the GroupID administrator has granted you.

## User and Mailbox properties

Following is the list of all the properties that Users and Mailbox Users have in Active Directory
based identity store.

- [Object properties - General tab](/docs/directorymanager/11.1/user-management/general.md)
- [Object properties - Organization tab](/docs/directorymanager/11.1/user-management/organization.md)
- [User properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.1/user-management/phonenote.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.1/group-management/attributes.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md)
- [Mailbox properties - Limits tab](/docs/directorymanager/11.1/user-management/limits.md) (for mailbox only)
- [Mailbox properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md) (for mailbox only)
- [Object properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md)
- [User properties - Account tab](/docs/directorymanager/11.1/user-management/account.md)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.1/user-management/autoreply.md) (for mailbox only)
- [Object Properties - Entitlements tab](/docs/directorymanager/11.1/user-management/entitlement.md)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)

## Contact properties

Following is the list of all the properties that Contacts have in Active Directory based identity
store.

- [Object properties - General tab](/docs/directorymanager/11.1/user-management/general.md)
- [Object properties - Organization tab](/docs/directorymanager/11.1/user-management/organization.md)
- [Contact properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.1/user-management/phonenote.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.1/group-management/attributes.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md)
- [Contact properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)

# Overview

You can view and manipulate the properties of directory objects (users and mailboxes) in Microsoft
Entra ID, depending on the permissions the Directory Manager administrator has granted you.

## User and Mailbox properties

Following is the list of all the properties that Users and Mailbox Users have in an Microsoft Entra
ID based identity store.

- [User properties - Identity tab](/docs/directorymanager/11.1/user-management/identity.md)
- [User properties - Directory Role tab](/docs/directorymanager/11.1/user-management/directoryrole.md)
- [User properties - Job Info tab](/docs/directorymanager/11.1/user-management/jobinfo.md)
- [User properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md) (for mailbox only)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.1/user-management/autoreply.md) (for mailbox only)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)

# User Properties

You can view and manipulate the properties of directory objects (users, mailboxes, and contacts) in
the connected identity store, depending on the permissions the GroupID administrator has granted
you.

**You can:**

- Select the required object and click **Properties** on the toolbar. The object's properties page
  is displayed.
- Click **Save** after making any changes in any properties' tab
- Click **Delete** to delete that user, contact, or mailbox.
- Click **Add to Contacts** on the toolbar. The portal creates the direct report's vCard and prompts
  you to save it on your machine. You can then use it to add the direct report's email address to
  your email contact list.
- Click **Send email** on the toolbar. This launches the default Windows email application for
  sending an email to the direct report.
- Click Reset Password to reset the password for the object.
- Click **Organizational Hierarchy** to view the hierarchy of the object.

## User and Mailbox properties in Active Directory

Following is the list of all the properties that Users and Mailbox Users have in Active Directory
based identity store.

- [Object properties - General tab](/docs/directorymanager/11.1/user-management/general.md)
- [Object properties - Organization tab](/docs/directorymanager/11.1/user-management/organization.md)
- [User properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.1/user-management/phonenote.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.1/group-management/attributes.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md)
- [Mailbox properties - Limits tab](/docs/directorymanager/11.1/user-management/limits.md) (for mailbox only)
- [Mailbox properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md) (for mailbox only)
- [Object properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md)
- [User properties - Account tab](/docs/directorymanager/11.1/user-management/account.md)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.1/user-management/autoreply.md) (for mailbox only)
- [Object Properties - Entitlements tab](/docs/directorymanager/11.1/user-management/entitlement.md)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)

## User and Mailbox properties in Microsoft Entra ID

Following is the list of all the properties that Users and Mailbox Users have in an Microsoft Entra
ID based identity store.

- [User properties - Identity tab](/docs/directorymanager/11.1/user-management/identity.md)
- [User properties - Directory Role tab](/docs/directorymanager/11.1/user-management/directoryrole.md)
- [User properties - Job Info tab](/docs/directorymanager/11.1/user-management/jobinfo.md)
- [User properties - Contact Info tab](/docs/directorymanager/11.1/user-management/contactinfo.md)
- [User properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md) (for mailbox only)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.1/user-management/autoreply.md) (for mailbox only)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)

## Contact properties

Following is the list of all the properties that Contacts have in Active Directory based identity
store.

NOTE: Contact object is not supported in Microsoft Entra ID.

- [Object properties - General tab](/docs/directorymanager/11.1/user-management/general.md)
- [Object properties - Organization tab](/docs/directorymanager/11.1/user-management/organization.md)
- [Contact properties - Member Of tab](/docs/directorymanager/11.1/user-management/memberof.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.1/user-management/phonenote.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.1/group-management/attributes.md)
- [Object properties - Email tab](/docs/directorymanager/11.1/user-management/email.md)
- [Contact properties - Advanced tab](/docs/directorymanager/11.1/user-management/advanced.md)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)
