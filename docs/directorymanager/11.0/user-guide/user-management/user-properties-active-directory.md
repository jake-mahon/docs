---
title: user properties active directory
sidebar_label: user-properties-active-directory
description: Directory Manager 11.0 documentation for user properties active directory with configuration details, usage instructions, and implementation guidance.
---

# User properties - Account tab

This tab enables administrators to manage the account status and expiry policy of a user.

**Account Expires**

Set the account expiry policy for the user.

- **Never**: to set this user account to never expire. This is the default option for new users.
- **End Of**: to set this user account to expire on a specified date. Use the calendar selector to
  enter the expiry date for the user account.

**Account is disabled**

Select this check box to disable the user account, so that the user cannot log-on with it.

**Account is locked out**

This check box will be selected when this user account is locked, for example, due to failed logon
attempts. Clear this check box to unlock the account.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Object properties - Advanced tab

Use this tab to specify advanced settings for a user/mailbox.

**Home Page**

The URL of the user/mailbox's website.

Use the **Add** and **Remove** buttons to add and remove the URL.

**Emp Type**

The job category of the user/mailbox.

**Emp #**

The employee ID of the user/mailbox.

**Hide from address book**

Indicates whether to hide the user in the messaging provider's address book (such as the Outlook
address book).

When selected, the user will not be visible in the address book.

This option is available for user objects only.

**Admin Notes**

Notes by the administrator.

## For mailbox objects only

**Server**

The server name of the messaging provider where the mailbox resides.

**Recipient**

An email address or mailbox object that should receive the emails sent to the particular mailbox.

Enter a search string to locate the object to add as a recipient, or click the ellipsis button to
use the [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing
a search.

**Deliver messages to both forwarding address and mailbox**

Select the check box to ensure that any email sent to the mailbox is also forwarded to the
object/email specified in the **Recipient** box.

- When no recipient is set and this check box is cleared, emails are only sent to the mailbox.
- However, when an email/object is specified in the **Recipient** box and this check box is cleared,
  emails will not be sent to the mailbox but only to the recipient.

See Also

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Contact properties - Advanced tab

Use this tab to specify advanced settings for a contact.

**Home Page**

The URL of the contact's website.

Use the **Add** and **Remove** buttons to add and remove the URL.

**Emp Type**

The job category of the contact.

**Emp #**

The employee ID of the contact.

**Admin No**tes

Notes by the administrator.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Contact properties - Member Of tab

Use this tab to view the groups that the contact is a member of. You can also add and remove this
contact from the membership of groups.

**Member Of**

Displays the groups this contact is a member of.

**Add**

Click it to add the contact to the memberships of one or more groups.

Enter a search string to locate the required group, or click **Advance** to use the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
search.

**Remove**

Select a group in the Member Of list and click **Remove** to remove the contact from the membership
of that group.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Overview

You can view and manipulate the properties of contacts in Active Directory.

## Contact properties

Following is the list of all the properties that Contacts have in Active Directory based identity
store.

- [Object properties - General tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Organization tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Contact properties - Member Of tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Object properties - Email tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Contact properties - Advanced tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - History tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)

# Object properties - Email tab

Use this tab to view the addresses assigned to this object.

**Addresses**

In case of a mail-enabled object, the messaging provider (such as Microsoft Exchange) assigns
different addresses to it for communication with different repositories (such as Address Book, SIP,
Outlook). These addresses are displayed in this box.

**Subscriptions**

Displays the subscriptions assigned to the mailbox.

It also lists other subscriptions offered by Office 365 to a mailbox user. Select the check box for
a subscription to assign it to the mailbox.

The subscription list is displayed for mailbox objects when Office 365 is configured as the
messaging provider for the identity store.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Object Properties - Entitlements tab

Entitlement computes the effective NTFS permissions granted to objects on shared resources residing
on a server in an Active Directory identity store. The Entitlement tab provides an interface for
users to view these permissions. Users can view the permissions granted to a user over files and
folder residing on a server.

Explicit permissions are assigned to a user. To facilitate permission viewing, do the following:

- Specify one or more servers in identity store configurations.

  This must be a server in an Active Directory based identity store.

- Compute all permissions that directory objects have on the shared files and folders on those
  server(s).
- View these permissions in the GroupID portal.

## Entitlement job

An Entitlement schedule is automatically created for an identity store when:

- A server is added for permission analysis on the **Entitlement** page in an Active Directory
  identity store.

  Or

- A SharePoint site is added for permission analysis on the **Entitlement** page in a Microsoft
  Entra ID identity store.

By default, the schedule runs weekly to compute permissions on shared files and folders residing on
the specified servers (for Active Directory), and the document libraries present in the specified
sites (for SharePoint). It then replicates these permissions to Elasticsearch, enabling users to
view, manage and update these permissions in the GroupID portal.

## Permissions on the GroupID Entitlement portal

You can grant permissions to security roles on the Entitlement section in the GroupID portal. Based
on these permissions, role members can performs different actions in the Entitlement section, such
as navigate file servers and SharePoint sites, grant permissions to objects on shared resources,
revoke permissions, and more.

Entitlement-related permissions for a security role in an identity store are discussed in the
[Entitlement](/docs/directorymanager/11.0/administration/admin-center/security-roles.md#entitlement)
section.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Object properties - General tab

Use this tab to view or update the general information for a user, mailbox, or contact.

**First name**

The first name of the contact or user.

**Last name**

The last name of the contact or user.

**Initials**

The initials of the user or contact.

**Alias**

The email alias of the user or contact.

**Display name**

The name of the contact or user as it is displayed in the portal.

**Address**

The office address of the user or contact.

**Title**

The job title of the contact or user.

**Company**

The name of the organization where the user or contact works.

**City**

The city, state, zip code, and country where the organization of this user or contact is located.

The **State** list is populated based on the selection made in the **Country** list.

**Department**

The department in the organization that the user or contact works in.

**State**

The **State** list is populated based on the selection made in the **Country** list.

**Office**

The office number of the user or contact.

**Zip**

The zip code of the location where the organization of this user or contact resides.

**Country**

The country where the organization of this user or contact is located.

**Business**

The type of business the contact or user's organization conducts.

**Home page**

The URL of the web page of the user. This field is not available for a contact.

**Exchange Assistant**

The name of the Exchange assistant for the mailbox/contact. Any email sent to the mailbox/contact is
also forwarded to this assistant.

Enter a search string to locate the object to add as an Exchange assistant, or click **Browse** to
use the [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing
a search.

This field is not available for a user.

**Email**

The email address of the user or contact.

**Photo**

The photo of the user or contact.

Click the **Edit** icon to launch the Manage Photo dialog box for uploading a photo. The dialog box
also provides many image editing options, including rotate, crop, flip, and re-size.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Mailbox properties - Advanced tab

Use this tab to configure advanced settings for a user.

The **Server** box helps differentiate between a user and a mailbox object. If it displays the name
of a messaging server, the object is a mailbox. If it is empty, the object is a user.

**Home Page**

The URL of the user's website.

**Emp #**

The employee ID of the user.

**Hide from address book**

Indicates whether to hide the user in the messaging provider's address book (such as the Outlook
address book).

If selected, the user will not be visible in the address book.

**Recipient**

Specify an alternate recipient to receive the emails sent to this user.

Click the ellipsis button to launch the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md), where you can search
and select the required recipient.

To remove the alternate recipient, click the **Remove** button.

**Server**

The distinguished name (DN) of the messaging server, such as the Exchange server.

This field is populated for a 'mailbox' object only.

**Emp Type**

The job category of this user.

**Admin Notes**

Notes by the administrator.

**Deliver messages to both forwarding address and mailbox**

Indicates whether to send every email for this user to the alternate recipient as well.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Mailbox properties - Auto Reply tab

Use this tab to configure automatic replies for the emails sent to a mailbox object. You can:

- Enable/disable automatic replies to senders from your organization.
- Enable/disable automatic replies to senders from other organizations.
- Compose the message to be sent as auto-reply. Different messages can be composed for senders from
  your organization and for those from other organizations.
- Specify the time period during which automatic replies must be sent.

**Don't send automatic replies**

Select this option button to disable the out-of-office replies feature.

**Send automatic replies**

Select this option button to send out-of-office replies to senders.

**Send replies only during this time period**

Select this check box if you want to specify a time frame during which the automatic replies should
be sent.

**Start Time, End Time**

Specify the date and time between which the replies will be sent.

**Send reply once to each sender inside my organization with the following message**

In the text box, type the content that you want to be sent as the reply to the senders from your
organization.

**Send automatic reply messages to senders outside my organization**

Select this check box to send automatic replies to the senders from other organizations as well.

**Send replies only to senders in my contact list**

Select this option button to send replies to those external senders that are on your contact list.

**Send replies to all external senders**

Select this option button to send replies to all external senders.

**Send a reply once to each sender outside my organization with the following message**

In the text box, type the content that should be sent as the reply to the senders who do not belong
to your organization.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Mailbox properties - Limits tab

This tab applies to mailboxes only. It allows you to set the storage quota for the object's mailbox,
such as an Exchange mailbox.

**Use default storage quota**

Select this check box to use the default quota for the mailbox store instead of defining it
individually.

**Issue warning (K)**

The mailbox size in kilobytes (KB) for this user, that, when exceeded, triggers an over-limit
warning. However, the user can still send and receive messages.

**Prohibit Send (K)**

The maximum mailbox size in kilobytes (KB) for this user, that, when exceeded, suspends the user's
ability to send emails.

**Prohibit Send/Receive (K)**

The maximum mailbox size, in kilobytes (KB) for this user, that, when exceeded, suspends the user's
ability to both send and receive emails.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Overview

You can view and manipulate the properties of mailboxes in Active Directory.

## Mailbox properties

Following is the list of all the properties that Users and Mailbox Users have in Active Directory
based identity store.

- [Object properties - General tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Organization tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [User properties - Member Of tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Object properties - Email tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Mailbox properties - Limits tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Mailbox properties - Advanced tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [User properties - Account tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object Properties - Entitlements tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - History tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)

# User properties - Member Of tab

Use this tab to view the groups that the user is a member of. You can also add and remove this user
from the membership of groups.

The tab displays a list of all groups this user is a member of.

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display Name | Displays the names of the groups this user is a member of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Membership   | Indicates whether the user is a temporary or permanent member of the group. - **Perpetual** - To make the object a permanent member of the group. - **Temporary Member** - To make the object a temporary member of the group for the period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the object is removed from the group membership. - **Addition Pending** - Indicates that the object will be a temporary member of the group for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. **Here is an example:** You add Smith as a temporary member to Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19, 2019. However, Smith would not be added to group membership in the provider. On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30, 2019. Smith will also be added to group membership in the provider. After May 30, Smith will be removed from Group A as a member in GroupID and in the provider. - **Removal Pending** - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. _Here is an example:_ You remove Smith from Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19, 2019. On May 20, Smith’s membership type in GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. However, Smith will be removed from Group A’s membership in the provider. After May 30, Smith will be added back to Group A as a permanent member in GroupID and in the provider. - **Temporary Removed** - Indicates that the object is temporarily removed from group membership for the period specified in the **Beginning** and **Ending** boxes. At the end of the period, the object is added back to the group membership as a permanent member. When the user is a perpetual member, the **Membership** column is blank. You cannot change the membership type of the user for any group on the **Member Of** tab. Rather, go to the properties of the specific group and change the user's membership type on the [Group properties - Members tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md). |
| Beginning    | Displays the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Ending       | Displays the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

For each column in the grid, an item level filter is also available that lets you filter records
based on a criterion. For example; to show groups whose display names start with D, type D in the
box under the **Display Name** header and press Enter.

**Add**

Click it to add the user to the memberships of one or more groups.

Enter a search string to locate the required group, or click **Advance** to use the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
search.

The selected group(s) get listed in the **Member Of** grid.

**Remove**

Select a group in the Member Of list and click **Remove** to remove the user from the membership of
that group.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Object properties - Organization tab

Use this tab to add or change the primary manager for this user or contact. You can also remove the
manager.

You can also specify additional manager(s) for the user or contact. Additional managers have the
same privileges as the primary manager.

Furthermore, this tab shows the direct reports of this user or contact. Direct reports are groups,
users or contacts that report directly to the user or contact. You can add direct reports as well as
transfer or terminate a direct report.

NOTE: A user can also manage his/her direct reports and change his/her primary manager while
validating his/her profile in the portal. See the
[Validate your profile](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
topic.

## Dotted line management

Each user can be assigned one primary manager and one or more dotted-line managers (also called
additional managers). However, users can add, change, or remove their primary and dotted-line
managers.

When a user changes his or her primary or additional manager, the primary manager is notified
through email to accept or reject the request. If the primary manager accepts, the user’s manager is
changed. If the primary manager rejects the request, the user remains with the manager.

NOTE: This is the default flow for the ‘Workflow to Change Manager’ workflow, with the primary
manager set as the approver. If the administrator disables the workflow or changes the workflow
approver, the flow changes accordingly. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

**Manager**

Displays the contact/user's primary manager, if specified. The user/contact can change his or her
primary manager.

Click the ellipsis button to launch the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md), where you can search
and select a user to set as the manager.

**Reports**

Displays a list of objects that report directly to this user or contact. These may include users,
groups and contacts.

- To add a direct report, click **Add**. Enter a search string to locate the object to add as a
  direct report, or click **Advance** to use the
  [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
  search.
- To transfer a direct report, select it and click **Transfer**.

  When you transfer a direct report, the direct report is notified through email to accept or
  reject the transfer. If the direct report accepts the transfer, he or she must select another
  primary manager and validate his or her profile. If the direct report rejects the transfer, he
  or she is transferred back to the old manager, i.e., you.

  NOTE: This is the default flow for the ‘Workflow to Transfer a User’ workflow, with the direct
  report set as the approver. If the administrator disables the workflow or changes the approver,
  the flow changes accordingly. See the
  [Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

- To terminate a direct report, select it and click **Terminate**.

  When you terminate a direct report, it takes effect immediately if the ‘Workflow to Terminate a
  User’ workflow is disabled. If enabled, a request is sent to an approver. If the approver
  approves it, the direct report is terminated and if the approver denies it, the direct report
  remains with the manager, i.e., you.

**Additional Manager**

To add a manager, click **Add**. Enter a search string to locate the object to add as an additional
manager, or click **Advance** to use the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
search.

To remove an additional manager, select it and click **Remove**.

This section displays a list of the additional managers of the user or contact.

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type         | The object type of the addition manager, such as user or group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Name         | The name of the additional manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Manager Type | Indicates whether the object is a temporary or permanent additional manager of this user/contact. The available manager types are: - **Perpetual** - To make the object a permanent additional manager of the user/contact. - **Temporary Manager** - To make the object a temporary additional manager of the user/contact for the period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the object is removed as manager. - **Addition Pending** - Indicates that the object will be a temporary additional manager of the user/contact for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s manager type is displayed as ‘Addition Pending’. On the beginning date, the manager type changes to ‘Temporary Owner’. _Here is an example:_ You add Smith as a temporary additional manager of User A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be listed with User A’s additional managers with ‘Addition Pending’ as its manager type from May 15 to 19, 2019. On May 20, Smith will become a temporary additional manager of User A and its manager type will change to ‘Temporary Manager’ from May 20 to 30, 2019. After May 30, Smith will be removed as User A’s additional manager. - **Removal Pending** - Indicates that the object will be temporarily removed as an additional manager of the user/contact for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s manager type is displayed as ‘Removal Pending’. On the beginning date, the manager type will change to ‘Temporary Removed’. **Here is an example:** You remove Smith as an additional manager of User A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed as User A’s additional manager with ‘Removal Pending’ as manager type from May 15 to 19, 2019. On May 20, Smith’s manager type in GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. After May 30, Smith will be added back as a permanent additional manager of User A. - **Temporary Removed** - Indicates that the object is temporarily removed as the user/contact’s additional manager for the period specified in the **Beginning** and **Ending** boxes. At the end of the period, the object is added back as a permanent additional manager of the user/contact. When the object is a perpetual additional manager, the **Manager Type** column is blank. Click anywhere in the row to make it editable for changing the manager type of the additional manager. NOTE: You cannot change the manager type when the additional manager is a group. |
| Beginning    | Shows the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Ending       | Shows the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

NOTE: For each column, a filter is also available that lets you filter records based on a criterion.
For example; to show objects whose display names start with D, type D in the box under the **Name**
header and press Enter.

The Managed By Life Cycle job updates the temporary managers of users/contacts by adding and
removing temporary additional managers on the specified dates.

Consider a scenario where the Managed By Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added as a user’s temporary additional manager for three days -
Wednesday till Friday, it will not be added. This happens because the Managed By Life Cycle job did
not run on the particular days for temporary manager update.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)
- [Validate your profile](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
- [Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md)

# Overview

You can view and manipulate the properties of directory objects (users, mailboxes, and contacts) in
Active Directory, depending on the permissions the GroupID administrator has granted you.

## User and Mailbox properties

Following is the list of all the properties that Users and Mailbox Users have in Active Directory
based identity store.

- [Object properties - General tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Organization tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [User properties - Member Of tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Object properties - Email tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Mailbox properties - Limits tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
  (for mailbox only)
- [Mailbox properties - Advanced tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
  (for mailbox only)
- [Object properties - Advanced tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [User properties - Account tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
  (for mailbox only)
- [Object Properties - Entitlements tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - History tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

## Contact properties

Following is the list of all the properties that Contacts have in Active Directory based identity
store.

- [Object properties - General tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Organization tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Contact properties - Member Of tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Object properties - Email tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Contact properties - Advanced tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - History tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)

# Object properties - Phone / Notes tab

Use this tab to view or update the contact information of the user or contact.

**Business**

The primary business phone number of the user or contact.

**Business 2**

The secondary business phone number of the user or contact.

**Home**

The primary home phone number of the user or contact.

**Home 2**

The secondary home phone number of the user or contact.

**Fax**

The fax number of the user or contact.

**Mobile**

The cell phone number of the user or contact.

**Telephone Assistant**

The contact number of the assistant of the user or contact, if any.

**Notes**

Any additional information about the user or contact.

**Pager**

The pager number of the user or contact.

See Also

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Overview

You can view and manipulate the properties of users in Active Directory.

## User properties

Following is the list of all the properties that Users and Mailbox Users have in Active Directory
based identity store.

- [Object properties - General tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Organization tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [User properties - Member Of tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Phone / Notes tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Object properties - Email tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Advanced tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [User properties - Account tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object Properties - Entitlements tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - History tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
